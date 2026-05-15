"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconChevronRight,
  IconGitHub,
  IconLinkedIn,
  IconMenu,
  IconSearch,
} from "./Icons";
import { site } from "@/lib/site";

const labelMap: Record<string, string> = {
  "": "Overview",
  work: "Pipeline",
  playbook: "Approach",
  stack: "Stack",
  about: "About",
  contact: "Documents",
  "built-with-claude": "Built with Claude",
};

function crumbsFor(pathname: string): string[] {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return ["Overview"];
  const top = labelMap[parts[0]!] ?? parts[0]!;
  if (parts.length === 1) return [top];
  // /work/[slug]
  if (parts[0] === "work" && parts[1]) return [top, parts[1]!.replace(/-/g, " ")];
  return [top];
}

export function TopBar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname();
  const crumbs = crumbsFor(pathname);

  return (
    <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-ink-800 bg-ink-900/80 px-4 py-2.5 backdrop-blur sm:px-6">
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={onOpenMenu}
          className="-ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-300 hover:bg-ink-800 hover:text-ink-50 md:hidden"
          aria-label="Open menu"
        >
          <IconMenu />
        </button>
        <div className="flex min-w-0 items-center gap-1.5 overflow-hidden text-sm">
          <span className="text-ink-500">Workspace</span>
          {crumbs.map((c, i) => (
            <span key={i} className="flex min-w-0 items-center gap-1.5">
              <IconChevronRight className="text-ink-600 shrink-0" />
              <span className={`truncate ${i === crumbs.length - 1 ? "text-ink-50 font-medium" : "text-ink-400"} capitalize`}>
                {c}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-md border border-ink-800 bg-ink-900 px-2.5 py-1 text-xs text-ink-500 sm:flex">
          <IconSearch className="h-3.5 w-3.5" />
          <span>Search</span>
          <kbd className="ml-1 rounded border border-ink-700 bg-ink-800 px-1.5 py-0.5 text-[10px] text-ink-400">⌘K</kbd>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-300 hover:bg-ink-800 hover:text-ink-50"
          aria-label="GitHub"
        >
          <IconGitHub />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-300 hover:bg-ink-800 hover:text-ink-50"
          aria-label="LinkedIn"
        >
          <IconLinkedIn />
        </a>
        <Link
          href="/contact"
          className="hidden rounded-md border border-ink-700 px-3 py-1 text-xs font-medium text-ink-100 hover:border-accent sm:inline-flex"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
