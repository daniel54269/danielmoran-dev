import Link from "next/link";
import { site } from "@/lib/site";

const items = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/stack", label: "Stack" },
  { href: "/built-with-claude", label: "Built with Claude" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-800/70 bg-ink-900/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-5 py-3.5">
        <Link href="/" className="flex items-baseline gap-2 text-sm">
          <span className="font-semibold tracking-tight text-ink-50">Daniel Moran</span>
          <span className="hidden text-ink-400 sm:inline">/ marketing engineer</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-300">
          {items.slice(1).map((it) => (
            <Link key={it.href} href={it.href} className="hover:text-ink-50 transition-colors">
              {it.label}
            </Link>
          ))}
          <a
            href={site.resumeHref}
            className="ml-2 rounded-md border border-ink-700 px-3 py-1 text-ink-50 hover:border-accent hover:text-accent-soft transition-colors"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
