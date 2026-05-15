import { skillGroups } from "@/lib/site";
import { iconMap, categoryAccent } from "@/lib/iconMap";

function SkillTile({ name, accent }: { name: string; accent: string }) {
  const slug = iconMap[name];
  return (
    <div className="group flex items-center gap-2.5 rounded-lg border border-ink-800 bg-ink-900/40 px-3 py-2 transition-colors hover:border-ink-700">
      {slug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff/cccccc`}
          alt=""
          width={18}
          height={18}
          className="h-[18px] w-[18px] opacity-90 transition-opacity group-hover:opacity-100"
          loading="lazy"
        />
      ) : (
        <span
          className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-sm text-[10px] font-semibold text-ink-900"
          style={{ background: accent }}
        >
          {name.replace(/\W+/g, "").slice(0, 2).toUpperCase()}
        </span>
      )}
      <span className="text-xs text-ink-100 leading-tight">{name}</span>
    </div>
  );
}

export function StackGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {skillGroups.map((g) => {
        const accent = categoryAccent[g.label] ?? "#94a3b8";
        return (
          <div key={g.label} className="rounded-xl border border-ink-800 p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">
                {g.label}
              </div>
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: accent }}
                aria-hidden="true"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {g.items.map((it) => (
                <SkillTile key={it} name={it} accent={accent} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
