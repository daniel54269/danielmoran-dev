"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";

type AxisTick = { value: number; label: string };

type SparklineProps = {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
  strokeClassName?: string;
  fillClassName?: string;
  showDots?: boolean;
  duration?: number;
  /**
   * Optional Y-axis tick configuration. When provided, render horizontal
   * gridlines + labels. `value` is in the same units as `data`.
   */
  yAxisTicks?: AxisTick[];
  /**
   * Optional precomputed tooltip text shown on hover, one per data point.
   * (Function props can't cross the server→client component boundary in
   * Next.js App Router, so we pass an array of strings instead.)
   */
  tooltips?: string[];
};

export function Sparkline({
  data,
  width = 400,
  height = 120,
  className,
  strokeClassName = "stroke-accent",
  fillClassName = "fill-accent/15",
  showDots = false,
  duration = 1.2,
  yAxisTicks,
  tooltips,
}: SparklineProps) {
  const id = useId();
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);

  if (data.length < 2) return null;

  // Reserve a left gutter for y-axis labels when present.
  const leftPad = yAxisTicks ? 36 : 4;
  const rightPad = 4;
  const topPad = 8;
  const bottomPad = 8;
  const w = width - leftPad - rightPad;
  const h = height - topPad - bottomPad;

  // For y scale we honor explicit ticks if provided; otherwise use data min/max.
  const min = yAxisTicks ? Math.min(...yAxisTicks.map((t) => t.value)) : Math.min(...data);
  const max = yAxisTicks ? Math.max(...yAxisTicks.map((t) => t.value)) : Math.max(...data);
  const range = max - min || 1;

  const pts = data.map((v, i) => {
    const x = leftPad + (i / (data.length - 1)) * w;
    const y = topPad + (1 - (v - min) / range) * h;
    return [x, y] as const;
  });

  const linePath = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`)
    .join(" ");
  const lastPt = pts[pts.length - 1];
  const firstPt = pts[0];
  const areaPath = lastPt && firstPt
    ? `${linePath} L${lastPt[0].toFixed(2)},${(topPad + h).toFixed(2)} L${firstPt[0].toFixed(2)},${(topPad + h).toFixed(2)} Z`
    : linePath;

  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="[stop-color:rgb(232,228,220)] [stop-opacity:0.22]" />
            <stop offset="100%" className="[stop-color:rgb(232,228,220)] [stop-opacity:0]" />
          </linearGradient>
        </defs>

        {/* Y-axis gridlines + labels */}
        {yAxisTicks &&
          yAxisTicks.map((t, i) => {
            const y = topPad + (1 - (t.value - min) / range) * h;
            return (
              <g key={i}>
                <line
                  x1={leftPad}
                  x2={width - rightPad}
                  y1={y}
                  y2={y}
                  className="stroke-ink-800"
                  strokeDasharray="2 4"
                  strokeWidth={1}
                />
                <text
                  x={leftPad - 6}
                  y={y}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-ink-500 [font-size:10px] [font-family:var(--font-geist-mono),ui-monospace]"
                >
                  {t.label}
                </text>
              </g>
            );
          })}

        <motion.path
          d={areaPath}
          fill={`url(#grad-${id})`}
          className={fillClassName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: duration * 0.8, delay: duration * 0.4, ease: [0.23, 1, 0.32, 1] }}
        />
        <motion.path
          d={linePath}
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={strokeClassName}
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration, ease: [0.77, 0, 0.175, 1] }}
        />

        {/* Dots — visible (small) by default, larger on hover when tooltips are enabled */}
        {showDots &&
          pts.map((pt, i) => {
            const x = pt[0];
            const y = pt[1];
            const isHover = hover === i;
            return (
              <g key={i}>
                {/* Larger transparent hit area for hover */}
                {tooltips && (
                  <circle
                    cx={x}
                    cy={y}
                    r={16}
                    fill="transparent"
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover((prev) => (prev === i ? null : prev))}
                    style={{ cursor: "pointer", pointerEvents: "auto" }}
                  />
                )}
                <motion.circle
                  cx={x}
                  cy={y}
                  r={isHover ? 4 : 2}
                  className={strokeClassName}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: duration * 0.4 + (i / pts.length) * duration * 0.6,
                  }}
                  style={{ pointerEvents: "none" }}
                />
              </g>
            );
          })}
      </svg>

      {/* Hover tooltip overlay (HTML, positioned with %) */}
      {tooltips && hover !== null && pts[hover] && (() => {
        const tipText = tooltips[hover];
        if (!tipText) return null;
        const xPct = (pts[hover]![0] / width) * 100;
        const yPct = (pts[hover]![1] / height) * 100;
        return (
          <div
            className="pointer-events-none absolute -translate-x-1/2 -translate-y-full"
            style={{ left: `${xPct}%`, top: `${yPct}%`, marginTop: -10 }}
          >
            <div className="whitespace-nowrap rounded-md border border-ink-700 bg-ink-900/95 px-2 py-1 text-[11px] font-medium text-ink-50 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.7)] backdrop-blur">
              {tipText}
            </div>
          </div>
        );
      })()}
    </div>
  );
}
