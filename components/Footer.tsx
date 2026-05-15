import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-800 mt-24 py-10">
      <div className="mx-auto max-w-content px-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-ink-400">
        <div className="flex flex-col gap-1">
          <div className="text-ink-100 font-medium">Daniel Moran</div>
          <div>{site.location} · open to remote</div>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={`mailto:${site.email}`} className="hover:text-ink-50">{site.email}</a>
          <a href={site.linkedin} className="hover:text-ink-50" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.github} className="hover:text-ink-50" target="_blank" rel="noreferrer">GitHub</a>
          <Link href="/contact" className="hover:text-ink-50">Contact</Link>
        </div>
      </div>
      <div className="mx-auto max-w-content px-5 mt-6 text-xs text-ink-500">
        © {new Date().getFullYear()} Daniel Moran · Built with Next.js + Claude Code.
      </div>
    </footer>
  );
}
