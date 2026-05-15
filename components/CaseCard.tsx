import Link from "next/link";
import type { WorkEntry } from "@/lib/work";

export function CaseCard({ entry }: { entry: WorkEntry }) {
  return (
    <Link
      href={`/work/${entry.slug}`}
      className="group relative flex flex-col gap-3 rounded-xl border border-ink-800 bg-ink-900 p-6 transition-all hover:border-accent/60 hover:bg-ink-800/40"
    >
      <div className="flex items-center justify-between text-xs uppercase tracking-wider text-ink-400">
        <span>{entry.client}</span>
        <span>{entry.domain}</span>
      </div>
      <h3 className="text-xl font-semibold text-ink-50 leading-snug tracking-tight group-hover:text-accent-soft transition-colors">
        {entry.headline}
      </h3>
      <p className="text-sm text-ink-300 leading-relaxed">{entry.description}</p>
      <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-3 border-t border-ink-800 pt-4">
        {entry.metric.slice(0, 3).map((m) => (
          <div key={m.label} className="flex flex-col">
            <span className="text-xl font-semibold text-ink-50 tabular-nums">{m.value}</span>
            <span className="text-[11px] uppercase tracking-wider text-ink-400">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {entry.stack.slice(0, 6).map((s) => (
          <span
            key={s}
            className="rounded-full border border-ink-700 px-2 py-0.5 text-[11px] text-ink-300"
          >
            {s}
          </span>
        ))}
      </div>
    </Link>
  );
}
