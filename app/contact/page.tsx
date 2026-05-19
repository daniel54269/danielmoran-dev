import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — email, LinkedIn, résumé download.",
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, note: "Fastest. Usually a reply within 24 hours." },
  { label: "LinkedIn", value: "Daniel Joseph Moran", href: site.linkedin, note: "Connect or DM." },
  { label: "GitHub", value: "daniel54269", href: site.github, note: "Open-source projects, MCP servers, this site's repo." },
];

export default function ContactPage() {
  return (
    <Container size="prose" className="py-12 sm:py-20">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Contact</div>
      <h1 className="mt-2 font-serif italic font-normal text-4xl sm:text-5xl tracking-tight leading-[1.05] text-ink-50">
        Let&rsquo;s talk.
      </h1>
      <p className="mt-3 text-ink-300">
        Head of Marketing at Series A / B B2B SaaS. Remote, or in person around North County San Diego.
      </p>

      <div className="mt-10 space-y-3">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="block rounded-xl border border-ink-800 p-5 hover:border-accent/60 transition-colors"
          >
            <div className="text-xs uppercase tracking-widest text-ink-400">{c.label}</div>
            <div className="mt-1 text-lg font-medium text-ink-50">{c.value}</div>
            <div className="mt-1 text-sm text-ink-400">{c.note}</div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={site.resumeHref}
          className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-900 hover:bg-accent-soft"
        >
          Download résumé
        </a>
      </div>
    </Container>
  );
}
