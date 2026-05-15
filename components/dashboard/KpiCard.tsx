import { CountUp } from "@/components/CountUp";
import { Sparkline } from "@/components/Sparkline";
import { IconTrendUp, IconDot } from "./Icons";
import type { Kpi } from "@/lib/stats";

export function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <div className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-ink-800 bg-ink-900/60 p-4 transition-colors hover:border-ink-700">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-ink-400">
        <span>{kpi.label}</span>
        <span
          className={`inline-flex items-center gap-1 ${
            kpi.trend === "up" ? "text-emerald-400" : kpi.trend === "down" ? "text-red-400" : "text-ink-500"
          }`}
        >
          {kpi.trend === "up" ? <IconTrendUp className="h-3 w-3" /> : <IconDot className="h-2 w-2" />}
        </span>
      </div>
      <div className="text-3xl font-semibold tabular-nums tracking-tight text-ink-50">
        <CountUp
          to={kpi.value}
          prefix={kpi.prefix}
          suffix={kpi.suffix}
          decimals={kpi.decimals ?? 0}
          format={kpi.format}
        />
      </div>
      {kpi.context && <div className="text-xs text-ink-400">{kpi.context}</div>}
      {kpi.spark && (
        <div className="-mx-4 -mb-4 mt-1 h-12">
          <Sparkline data={kpi.spark} width={300} height={48} />
        </div>
      )}
    </div>
  );
}
