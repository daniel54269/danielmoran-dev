// Renders a company / product logo. Two modes:
// - Local image (PNG/SVG) from /public/logos for assets I control.
// - Text wordmark for everything else (avoids copyright issues; reads as clean monogram strip).

import Image from "next/image";

export type LogoMark =
  | { kind: "image"; name: string; src: string; href?: string; aspectClass?: string }
  | { kind: "wordmark"; name: string; label: string; sub?: string; href?: string };

export function LogoMark({ logo }: { logo: LogoMark }) {
  const inner =
    logo.kind === "image" ? (
      <div className={`flex h-12 items-center justify-center ${logo.aspectClass ?? ""}`}>
        <Image
          src={logo.src}
          alt={logo.name}
          width={140}
          height={48}
          className="h-full w-auto max-w-[160px] object-contain opacity-80 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
    ) : (
      <div className="flex h-12 flex-col items-center justify-center text-center leading-tight">
        <span className="text-sm font-semibold tracking-tight text-ink-100 group-hover:text-ink-50">
          {logo.label}
        </span>
        {logo.sub && (
          <span className="mt-0.5 text-[10px] uppercase tracking-widest text-ink-500 group-hover:text-ink-400">
            {logo.sub}
          </span>
        )}
      </div>
    );

  const wrap = "group flex h-20 items-center justify-center rounded-xl border border-ink-800 bg-ink-900/40 px-4 py-3 transition-colors hover:border-ink-700";

  return logo.href ? (
    <a href={logo.href} target="_blank" rel="noreferrer" className={wrap} aria-label={logo.name}>
      {inner}
    </a>
  ) : (
    <div className={wrap}>{inner}</div>
  );
}
