import { skillGroups } from "@/lib/site";

export function StackGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((g) => (
        <div key={g.label} className="rounded-xl border border-ink-800 p-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-ink-400 mb-3">
            {g.label}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((it) => (
              <span
                key={it}
                className="rounded-md border border-ink-700 bg-ink-800/40 px-2 py-1 text-xs text-ink-100"
              >
                {it}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
