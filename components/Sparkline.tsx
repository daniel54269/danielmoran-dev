"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

type SparklineProps = {
  data: number[];
  width?: number;
  height?: number;
  className?: string;
  strokeClassName?: string;
  fillClassName?: string;
  showDots?: boolean;
  duration?: number;
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
}: SparklineProps) {
  const id = useId();
  const reduce = useReducedMotion();
  if (data.length < 2) return null;

  const pad = 4;
  const w = width - pad * 2;
  const h = height - pad * 2;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * w;
    const y = pad + (1 - (v - min) / range) * h;
    return [x, y] as const;
  });

  const linePath = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
  const areaPath = `${linePath} L${pts[pts.length - 1]![0].toFixed(2)},${(pad + h).toFixed(2)} L${pts[0]![0].toFixed(2)},${(pad + h).toFixed(2)} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" className="[stop-color:rgb(124,92,255)] [stop-opacity:0.35]" />
          <stop offset="100%" className="[stop-color:rgb(124,92,255)] [stop-opacity:0]" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill={`url(#grad-${id})`}
        className={fillClassName}
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: duration * 0.8, delay: duration * 0.4 }}
      />
      <motion.path
        d={linePath}
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={strokeClassName}
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration, ease: "easeOut" }}
      />
      {showDots &&
        pts.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r={2}
            className={strokeClassName}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.2, delay: duration * 0.4 + (i / pts.length) * duration * 0.6 }}
          />
        ))}
    </svg>
  );
}
