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
          Python, and C++ at <strong>Cubic Transportation</strong> on transit fare systems. I moved full-time
          into marketing because the leverage was bigger and almost nobody on the marketing side could ship the
          systems behind the funnel.
        </p>

        <h2>What I do now</h2>
        <p>
          I run paid + lifecycle + automation at <strong>Wealth Enhancement Group</strong> — six-figure monthly
          ad budget, Cowork/Claude-powered content pipelines, attribution and weekly reporting the C-suite
          actually reads. I just wrapped <strong>Director of Marketing at Novadontics</strong> (May 2025 – Jan
          2026) running three brands. I'm <strong>co-founder and CMO at Nokkomo Mints</strong> (DTC breath mint
          brand on Amazon + Shopify, where I took ACOS from 81% to 38% and revenue from $4K to $40K trailing).
        </p>
        <p>
          On the side I run <strong>HAZE</strong> (registered TM) — creative brand work that keeps me sharp on
          the consumer side.
        </p>

        <h2>How I think</h2>
        <p>
          Marketing is software. Instrument everything, automate the dull bits, let the team spend their time on
          judgment calls instead of copy-paste. Most marketing orgs are bottlenecked on operations, not strategy
          — and most marketing leaders can't build the operations themselves.
        </p>
        <p>
          The engineering background isn't decorative. It's the reason I can rebuild an Amazon ad account from
          first principles instead of pulling the levers a dashboard hands me, why a pipeline I ship in a week
          replaces six hours of analyst time, why I shipped{" "}
          <a href="https://github.com/daniel54269/hubspot-mcp">an open-source MCP server</a>{" "}
          so Claude can read and write our HubSpot directly.
        </p>

        <h2>What I'm looking for</h2>
        <ul>
          <li><strong>Senior IC marketer or first head of marketing</strong> at a Series A / B B2B SaaS company.</li>
          <li>Teams that value <strong>building</strong>, not just managing — Linear / Ramp / Vercel-style cultures fit best.</li>
          <li>Real budget and real autonomy. I don't need a big team; I need room to ship.</li>
          <li>Remote-friendly or San Diego / Oceanside.</li>
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
