import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Engineer-turned-marketing-leader. How I think, what I build, what I'm looking for next.",
};

export default function AboutPage() {
  return (
    <Container size="prose" className="py-10 sm:py-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Image
          src="/headshot.png"
          alt="Daniel Moran"
          width={160}
          height={160}
          priority
          className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl border border-ink-800 object-cover shadow-[0_0_0_4px_rgba(124,92,255,0.08)]"
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">About</div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-50">
            Engineer first. Marketer second. Builder always.
          </h1>
        </div>
      </div>
      <div className="prose-custom mt-8">
        <p>
          I'm Daniel — 26, based in Oceanside, CA. CS from USD (2018–2022), then five years writing Java,
          Python, and C++ at <strong>Cubic Transportation</strong> on transit fare systems. I moved into
          marketing leadership because the leverage was bigger and most marketing orgs are bottlenecked on
          operations they can't build themselves.
        </p>

        <h2>What I run today</h2>
        <p>
          <strong>Wealth Enhancement Group</strong> — six-figure monthly ad budget, a 4-person team running
          paid + lifecycle + webinars, attribution and weekly reporting the C-suite actually reads.{" "}
          <strong>Director of Marketing at Novadontics</strong> (May 2025 – Jan 2026) — owned marketing across
          three brands (Novadontics, Care Pulse, California Implant Institute), rebuilt the HubSpot lifecycle and
          GTM attribution in 90 days, reported into the CEO.{" "}
          <strong>Co-founder and CMO at Nokkomo Mints</strong> — built an Amazon DTC brand from $4K → $40K
          trailing revenue (913% YoY), ACOS 81% → 38%, own the marketing P&L line.
        </p>
        <p>
          On the side I run <strong>HAZE</strong> (registered TM) — creative brand work that keeps me sharp on
          the consumer side.
        </p>

        <h2>How I run marketing</h2>
        <p>
          <strong>I treat marketing like a product team.</strong> Hire the org around a thesis, instrument the
          funnel before scaling spend, automate the dull bits so the team's hours go to judgment calls. Every
          paid dollar gets tied to a CRM stage; every content asset gets tied to an audience pillar; every
          weekly leadership review opens with one number.
        </p>
        <p>
          <strong>The engineering background isn't decorative.</strong> It's why I can rebuild an Amazon ad
          account from first principles, ship a pipeline in a week that replaces six analyst hours, and write{" "}
          <a href="https://github.com/daniel54269/hubspot-mcp">open-source infrastructure</a>{" "}
          (Claude can now read and write HubSpot via my MCP server). Most marketing leaders configure tools;
          I build them when the off-the-shelf one isn't right.
        </p>
        <p>
          For a written version of how I'd run the function in the first 90 days at a Series A/B SaaS, see the{" "}
          <Link href="/playbook">playbook</Link>.
        </p>

        <h2>What I'm looking for</h2>
        <ul>
          <li><strong>First Head of Marketing</strong> at a Series A / B B2B SaaS company.</li>
          <li>A CEO who treats marketing like a product surface — not a cost center.</li>
          <li>Real budget, real autonomy, room to hire 2–4 people in year one.</li>
          <li>Remote-friendly. I'm in Oceanside, CA.</li>
        </ul>

        <h2>How to reach me</h2>
        <p>
          Email is fastest: <a href={`mailto:${site.email}`}>{site.email}</a>. I usually reply within 24 hours.{" "}
          <Link href="/contact">More ways to reach me</Link> or grab the{" "}
          <a href={site.resumeHref}>résumé</a> if you'd rather skim.
        </p>
      </div>
    </Container>
  );
}
