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
    <Container size="prose" className="py-12 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Image
          src="/headshot.png"
          alt="Daniel Moran"
          width={160}
          height={160}
          priority
          className="h-32 w-32 sm:h-36 sm:w-36 rounded-2xl border border-ink-700 object-cover shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        />
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">About</div>
          <h1 className="mt-2 font-serif font-normal text-4xl sm:text-5xl tracking-tight leading-[1.05] text-ink-50">
            Software engineering rigor, applied to modern marketing.
          </h1>
        </div>
      </div>
      <div className="prose-custom mt-8">
        <p>
          I&rsquo;m Daniel Moran, a marketing engineer based in North County San Diego, California. My background combines a
          Bachelor of Science in Computer Science from the University of San Diego (2018&ndash;2022) with five
          years of systems engineering at Cubic Transportation Systems, writing Java, Python, and C++ across
          transit-fare programs. I now apply that engineering background to marketing operations: building
          AI-augmented systems for attribution, content production, and CRM automation that help teams ship
          faster and spend less.
        </p>

        <h2>Current and recent roles</h2>
        <p>
          At <strong>Wealth Enhancement Group</strong> I lead a four-person team across paid media, lifecycle
          email, and webinars, and I built the attribution and weekly reporting system the executive team uses
          to allocate budget. I recently completed a tenure as <strong>Director of Marketing at Novadontics</strong>{" "}
          (May 2025 &ndash; January 2026), where I owned marketing across three brands, reported into the CEO,
          and rebuilt the HubSpot lifecycle and Google Tag Manager attribution in ninety days. I am also
          co-founder and CMO of <strong>Nokkomo Mints</strong>, where I built the marketing function from
          inception, managed a team of eight UCLA interns across creative, content, and Amazon operations, and
          reduced Amazon Advertising ACOS from 81% to 38% while delivering 913% year-over-year revenue growth.
        </p>
        <p>
          Separately I run <strong>HAZE</strong>, a registered trademark covering creative brand work in art,
          music, and apparel, which keeps me current on consumer-side marketing.
        </p>

        <h2>How I think about the work</h2>
        <p>
          Most marketing teams I have worked with are bottlenecked not on strategy but on operations: manual
          reporting, fragmented attribution, content production that does not scale, and stacks of point tools
          that no one fully connects. My approach is to treat the marketing function the way a product team
          treats a product surface: measure it carefully, automate what is repeatable, document what is
          not, and review performance on a consistent operating cadence.
        </p>
        <p>
          I focus particularly on the application of current AI tooling to marketing operations. That includes
          large language models for content generation and quality review, Model Context Protocol servers for
          first-party data access from within agents (I authored an{" "}
          <a href="https://github.com/daniel54269/hubspot-mcp">open-source MCP server</a> for HubSpot CRM),
          automated content production pipelines, and AI-assisted attribution and reporting. Used well, these
          tools materially reduce the cost and time required to operate a modern marketing function while
          improving measurement.
        </p>

        <h2>What I&rsquo;m looking for</h2>
        <ul>
          <li>Marketing engineering, senior individual contributor, or marketing-leadership roles with real autonomy and budget.</li>
          <li>Companies that value measurement and automation as first-class parts of marketing, not afterthoughts.</li>
          <li>Industries: B2B SaaS, B2C software, DTC e-commerce, and other modern, data-rich businesses.</li>
          <li>Remote, hybrid, or in person around North County San Diego, California.</li>
        </ul>

        <h2>How to reach me</h2>
        <p>
          Email is fastest: <a href={`mailto:${site.email}`}>{site.email}</a>. I reply within 24 hours.{" "}
          <Link href="/contact">More ways to reach me</Link>, or download the{" "}
          <a href={site.resumeHref}>résumé</a> if you would prefer to skim.
        </p>
      </div>
    </Container>
  );
}
