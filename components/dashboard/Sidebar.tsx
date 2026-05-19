"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  IconAbout,
  IconCode,
  IconCreative,
  IconDocuments,
  IconOverview,
  IconPipeline,
  IconPlaybook,
  IconStack,
} from "./Icons";
import { site } from "@/lib/site";

type Item = {
  href: string;
  label: string;
  icon: typeof IconOverview;
  /** When on home, this section's id determines active highlight */
  section?: string;
  /** When set, also treat <href> as an active match (deep link to standalone page) */
  altHref?: string;
};

const items: Item[] = [
  { href: "/#overview", label: "Overview", icon: IconOverview, section: "overview" },
  { href: "/#pipeline", label: "Pipeline", icon: IconPipeline, section: "pipeline", altHref: "/work" },
  { href: "/#creative", label: "Creative", icon: IconCreative, section: "creative" },
  { href: "/#approach", label: "Approach", icon: IconPlaybook, section: "approach", altHref: "/playbook" },
  { href: "/#stack", label: "Stack", icon: IconStack, section: "stack", altHref: "/stack" },
  { href: "/#about", label: "About", icon: IconAbout, section: "about", altHref: "/about" },
  { href: "/#built-with-claude", label: "Built with Claude", icon: IconCode, section: "built-with-claude", altHref: "/built-with-claude" },
  { href: "/#documents", label: "Documents", icon: IconDocuments, section: "documents", altHref: "/contact" },
];

/** Tracks which section id is most prominent on screen. Only meaningful on the home page. */
function useActiveSection(): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;

    const sections = items
      .map((i) => i.section && document.getElementById(i.section))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most-visible entry that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const activeSection = useActiveSection();
  const onHome = pathname === "/";

  function isActive(item: Item): boolean {
    if (onHome) {
      // On home, the active section determines highlight. Default to Overview.
      const section = activeSection ?? "overview";
      return item.section === section;
    }
    // On a standalone page (e.g. /work, /about), match by altHref.
    if (item.altHref && (pathname === item.altHref || pathname.startsWith(`${item.altHref}/`))) {
      return true;
    }
    return false;
  }

  return (
    <aside className="flex h-full flex-col gap-6 border-r border-ink-800 bg-ink-900/60 px-3 py-5 sm:px-4">
      {/* Workspace header */}
      <Link href="/#overview" onClick={onNavigate} className="flex items-center gap-3 px-2">
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
          const active = isActive(it);
          const Icon = it.icon;
          return (
            <Link
              key={it.href}
              href={it.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`relative flex items-center gap-3 rounded-md px-2 py-1.5 text-sm transition-colors duration-200 ${
                active ? "text-ink-50" : "text-ink-300 hover:bg-ink-800/40 hover:text-ink-50"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="sidebar-active-pill"
                  className="absolute inset-0 -z-10 rounded-md bg-ink-800/80"
                  transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.6 }}
                  aria-hidden="true"
                />
              )}
              <Icon className={active ? "text-accent-soft" : "text-ink-400"} />
              <span className="relative">{it.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Résumé */}
      <div className="space-y-3 px-2">
        <a
          href={site.resumeHref}
          className="block rounded-md bg-accent px-3 py-2 text-center text-xs font-medium text-ink-900 hover:bg-accent-soft transition-colors"
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
