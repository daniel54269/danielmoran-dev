import { activity } from "@/lib/stats";
import { IconDot, IconArrowUpRight } from "./Icons";

export function ActivityFeed() {
  return (
    <div className="flex h-full flex-col rounded-xl border border-ink-800 bg-ink-900/40">
      <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2.5">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-400">Activity</div>
        <div className="text-[10px] uppercase tracking-widest text-ink-500">Last 12 months</div>
      </div>
      <ol className="divide-y divide-ink-800">
        {activity.map((a, i) => {
          const Tag = a.href ? "a" : "div";
          const tagProps = a.href
            ? { href: a.href, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <li key={i}>
              <Tag
                {...tagProps}
                className={`group flex items-start gap-3 px-4 py-3 ${
                  a.href ? "hover:bg-ink-800/40 cursor-pointer" : ""
                }`}
              >
                <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-accent" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="truncate text-xs uppercase tracking-widest text-ink-500">{a.when}</div>
                    {a.meta && <div className="hidden truncate text-[11px] text-ink-500 sm:block">{a.meta}</div>}
                  </div>
                  <div className="mt-0.5 text-sm text-ink-100">{a.title}</div>
                </div>
                {a.href && (
                  <IconArrowUpRight className="mt-1 shrink-0 text-ink-500 transition-colors group-hover:text-accent-soft" />
                )}
              </Tag>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
