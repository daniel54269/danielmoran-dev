"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconAbout,
  IconCode,
  IconDocuments,
  IconOverview,
  IconPipeline,
  IconStack,
} from "./Icons";
import { site } from "@/lib/site";

const items = [
  { href: "/", label: "Overview", icon: IconOverview, exact: true },
  { href: "/work", label: "Pipeline", icon: IconPipeline },
  { href: "/stack", label: "Stack", icon: IconStack },
  { href: "/about", label: "About", icon: IconAbout },
  { href: "/built-with-claude", label: "Built with Claude", icon: IconCode },
  { href: "/contact", label: "Documents", icon: IconDocuments },
];

function isActive(pathname: string, href: string, exact?: boolean) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full flex-col gap-6 border-r border-ink-800 bg-ink-900/60 px-3 py-5 sm:px-4">
      {/* Workspace header */}
      <Link href="/" onClick={onNavigate} className="flex items-center gap-3 px-2">
        <Image
          src="/headshot.png"
          alt="Daniel Moran"
          width={80}
          height={80}
          className="h-10 w-10 rounded-full object-cover [filter:grayscale(100%)] border border-ink-700"
        />
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-ink-50">Daniel Moran</div>
          <div className="truncate text-[11px] text-ink-400">Marketing Engineer</div>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-0.5">
        <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-ink-500">
          Workspace
        </div>
        {items.map((it) => {
          const active = isActive(pathname, it.href, it.exact);
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-3 rounded-md px-2 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-ink-800/80 text-ink-50"
                  : "text-ink-300 hover:bg-ink-800/40 hover:text-ink-50"
              }`}
            >
              <Icon className={active ? "text-accent-soft" : "text-ink-400"} />
              <span>{it.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Status + résumé */}
      <div className="space-y-3 px-2">
        <div className="rounded-lg border border-ink-800 bg-ink-900 p-3">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-ink-300">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available
          </div>
          <div className="mt-1 text-xs text-ink-200">Senior IC · Head of Marketing</div>
          <div className="mt-0.5 text-[11px] text-ink-500">Series A/B B2B SaaS · Remote</div>
        </div>
        <a
          href={site.resumeHref}
          className="block rounded-md bg-accent px-3 py-2 text-center text-xs font-medium text-white hover:bg-accent-soft transition-colors"
        >
          Download résumé
        </a>
        <div className="text-[11px] text-ink-500 text-center">
          {site.location}
        </div>
      </div>
    </aside>
  );
}
