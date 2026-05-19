import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach | How I work",
  description:
    "My approach to marketing engineering: applying software engineering rigor and current AI tooling to marketing operations.",
};

export default function PlaybookPage() {
  return (
    <Container size="prose" className="py-12 sm:py-20">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Approach</div>
      <h1 className="mt-2 font-serif italic font-normal text-4xl sm:text-5xl tracking-tight leading-[1.05] text-ink-50">
        How I work.
      </h1>
      <p className="mt-3 text-ink-300 max-w-prose">
        A short overview of the approach I bring to marketing engineering engagements.
      </p>

      {/* Numbered process cards */}
      <ol className="mt-12 grid gap-3 sm:grid-cols-3">
        {[
          {
            n: "01",
            phase: "Discovery",
            weeks: "Weeks 1–2",
            body: "Interview sales, customer success, and recent customers. Map every paid channel, lifecycle stage, and report. Identify the single highest-leverage bottleneck.",
          },
          {
            n: "02",
            phase: "Rebuild",
            weeks: "Weeks 3–6",
            body: "Unified attribution, reconciled lifecycle stages, automation in place of manual handoff. By end of phase the executive team receives a consistent weekly report.",
          },
          {
            n: "03",
            phase: "Operating cadence",
            weeks: "Weeks 7–12",
            body: "Weekly leadership review installed, AI-assisted content pipeline live, paid media reorganized against the new attribution model, first hire or contractor on board.",
          },
        ].map((step) => (
          <li
            key={step.n}
            className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 flex flex-col gap-3"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-serif italic text-3xl text-accent">{step.n}</span>
              <span className="text-[10px] uppercase tracking-widest text-ink-500">{step.weeks}</span>
            </div>
            <div className="text-base font-medium text-ink-50">{step.phase}</div>
            <p className="text-sm text-ink-300 leading-relaxed">{step.body}</p>
          </li>
        ))}
      </ol>

      <div className="prose-custom mt-16">
        <h2>The thesis</h2>
        <p>
          Most marketing functions are not bottlenecked on strategy. They are bottlenecked on the operational
          infrastructure that supports it: manual reporting, fragmented attribution, content production that
          cannot scale, and a long list of point tools that no one fully connects. My work focuses on rebuilding
          that infrastructure so the strategy can land. Done well, this materially reduces the cost and time
          required to operate a modern marketing function while improving measurement and output quality.
        </p>

        <h2>Areas of focus</h2>
        <h3>1. Attribution and reporting</h3>
        <p>
          I build closed-loop attribution from ad impression to revenue, with the warehouse and CRM agreeing on
          one definition for each lifecycle stage. The deliverable is a single weekly report the executive team
          can act on without an analyst rebuilding it every Monday.
        </p>

        <h3>2. AI-augmented content production</h3>
        <p>
          I architect content pipelines that combine large language models, MCP-based data access, and existing
          marketing tools (Make.com, HubSpot, Buffer, scheduling platforms) into a single automated workflow.
          The objective is consistent, brand-aligned output at meaningfully higher volume than a manual process,
          with human review at the points where it adds value rather than at every step.
        </p>

        <h3>3. CRM and lifecycle automation</h3>
        <p>
          Modern marketing teams underuse their CRM. I rebuild lifecycle stages, scoring, and workflow automation
          inside HubSpot or Salesforce so that segmentation and handoff happen automatically and consistently. I
          also build and maintain Model Context Protocol servers (see my open-source{" "}
          <a href="https://github.com/daniel54269/hubspot-mcp">hubspot-mcp</a>) so that AI assistants can query
          and update CRM records directly under appropriate permissions.
        </p>

        <h3>4. Paid media operations</h3>
        <p>
          On the paid side, I focus on the operating infrastructure around media buying: campaign architecture,
          creative rotation cadences, negative-keyword harvesting, and measurement integration with the broader
          attribution stack. Channels I have managed at scale include Meta Ads, Google Ads, Amazon Advertising,
          and TikTok Ads.
        </p>

        <h2>Specific deliverables I commit to</h2>
        <ul>
          <li>A documented attribution model that ties paid spend to closed revenue, by day 60.</li>
          <li>A weekly one-page leadership report covering pipeline, spend efficiency, and content velocity, by day 30.</li>
          <li>One AI-augmented content or operations pipeline live in production by day 75.</li>
          <li>An annual marketing plan with quantified targets and named owners by day 90.</li>
        </ul>

        <h2>How I think about budget</h2>
        <p>
          I treat the marketing budget the way an engineering team treats infrastructure spend: instrumented,
          reviewed weekly, and owned in a single place. The first ninety days are not about expanding budget;
          they are about earning the right to do so by demonstrating measurable improvement in a number that
          matters to the business.
        </p>

        <h2>What this is and is not</h2>
        <p>
          The specifics flex based on the company. A developer-tools company will likely lean toward
          product-led growth and technical content; a vertical SaaS will lean toward events and customer
          stories; an enterprise software company will lean toward account-based marketing and sales
          enablement. The constants are: measure carefully, automate what is repeatable, and ship the
          operating cadence the executive team trusts.
        </p>

        <hr />

        <p>
          If you are evaluating marketing engineering hires or considering a project, I&rsquo;d be glad to
          discuss your specific situation. <Link href="/contact">Get in touch</Link> or{" "}
          <a href={`mailto:${site.email}`}>email me directly</a>.
        </p>
      </div>
    </Container>
  );
}
