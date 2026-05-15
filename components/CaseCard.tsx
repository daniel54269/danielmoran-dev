import Image from "next/image";
import Link from "next/link";
import type { WorkEntry } from "@/lib/work";

const slugLogo: Record<string, { src?: string; mono?: string }> = {
  "novadontics-multi-brand": { src: "/logos/novadontics.png" },
  "nokkomo-amazon-ads": { src: "/logos/nokkomo.png" },
  "haze-tiktok-framework": { src: "/logos/haze.png" },
  "cowork-automation-pipeline": { src: "/logos/haze.png" },
  "weg-paid-media": { mono: "WE" },
  "hubspot-mcp": { mono: "MC" },
};

function LogoBadge({ slug, name }: { slug: string; name: string }) {
  const cfg = slugLogo[slug];
  if (cfg?.src) {
    return (
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink-800 bg-ink-900 p-1">
        <Image src={cfg.src} alt={name} width={28} height={28} className="h-full w-full object-contain" />
      </span>
    );
  }
  return (
    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-ink-800 bg-ink-900 text-[10px] font-semibold text-ink-300">
      {cfg?.mono ?? name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export function CaseCard({ entry }: { entry: WorkEntry }) {
  return (
    <Link
      href={`/work/${entry.slug}`}
      className="group relative flex flex-col gap-3 rounded-xl border border-ink-800 bg-ink-900 p-6 transition-all hover:border-accent/60 hover:bg-ink-800/40"
    >
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-wider text-ink-400">
        <div className="flex min-w-0 items-center gap-2">
          <LogoBadge slug={entry.slug} name={entry.client} />
          <span className="truncate">{entry.client}</span>
        </div>
        <span className="shrink-0">{entry.domain}</span>
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
