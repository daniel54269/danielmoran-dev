import Link from "next/link";
import { IconArrowUpRight } from "./Icons";
import type { WorkEntry } from "@/lib/work";

/**
 * Single outer grid container — every row (header + body rows) uses
 * `grid-cols-subgrid` + `col-span-full` so columns share widths across the whole
 * table. This fixes the bug where each row had its own grid and `max-content`
 * on the Year column produced different widths per row.
 */
export function CampaignTable({ entries }: { entries: WorkEntry[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-800 bg-ink-900/40">
      <div className="grid grid-cols-[1.5fr_1fr_1.4fr_auto] sm:grid-cols-[1.5fr_1fr_1.4fr_max-content_auto]">
        {/* Header */}
        <div
          className="col-span-full grid grid-cols-subgrid items-center gap-3 border-b border-ink-800 bg-ink-900/80 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-ink-400"
          role="row"
        >
          <span>Campaign</span>
          <span className="hidden sm:inline">Domain</span>
          <span>Headline metric</span>
          <span className="hidden sm:inline">Year</span>
          <span className="sr-only">View</span>
        </div>

        {/* Body rows — use display:contents on the list elements so the grid sees the Link directly */}
        <ul className="contents">
          {entries.map((e, i) => {
            const headline = e.metric[0]?.value ?? "—";
            const headlineLabel = e.metric[0]?.label ?? "";
            return (
              <li key={e.slug} className="contents">
                <Link
                  href={`/work/${e.slug}`}
                  className={`group col-span-full grid grid-cols-subgrid items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-ink-800/40 ${
                    i > 0 ? "border-t border-ink-800" : ""
                  }`}
                  role="row"
                >
                  <div className="min-w-0">
                    <div className="truncate font-medium text-ink-50">{e.client}</div>
                    <div className="truncate text-[11px] text-ink-500 sm:hidden">{e.domain}</div>
                  </div>
                  <div className="hidden truncate text-ink-300 sm:block">{e.domain}</div>
                  <div className="min-w-0">
                    <div className="truncate text-ink-100">
                      <span className="font-semibold text-ink-50 tabular-nums">{headline}</span>{" "}
                      <span className="text-ink-400">{headlineLabel}</span>
                    </div>
                  </div>
                  <div className="hidden whitespace-nowrap text-ink-400 tabular-nums sm:block">{e.year}</div>
                  <div className="text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-soft">
                    <IconArrowUpRight />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
