import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Playbook — First 90 days as Head of Marketing",
  description:
    "How I'd run marketing in the first 90 days at a Series A/B B2B SaaS — the hiring sequence, attribution stack, content motion, and KPI commitments.",
};

export default function PlaybookPage() {
  return (
    <Container size="prose" className="py-10 sm:py-14">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Playbook</div>
      <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-50 leading-tight">
        First 90 days as Head of Marketing.
      </h1>
      <p className="mt-3 text-ink-300">
        How I'd run the function at a Series A / B B2B SaaS. Written so a founder-CEO can argue with me about it
        before we sign anything.
      </p>

      <div className="prose-custom mt-10">
        <h2>The thesis</h2>
        <p>
          Most marketing hires at this stage fail for one of two reasons: the new hire tries to be a creative
          director when the company needs an operator, or the new hire tries to be an operator when the company
          needs someone to <em>say something</em>. Both fail because marketing at Series A/B is one job done well:
          tie every dollar to a CRM stage, tie every CRM stage to revenue, and pick one story the team can repeat
          for two years.
        </p>
        <p>
          I run marketing like a product team. Hire around a thesis. Instrument before scaling. Automate the dull
          parts so the team's hours go to judgment calls. Open every leadership review with one number.
        </p>

        <h2>Days 1–14 — Discovery + thesis</h2>
        <ul>
          <li>
            <strong>Talk to 10 customers</strong> (or 10 of the team's recent demos if customers aren't accessible).
            Write the buyer in their own words. This becomes the brief every marketing surface answers to.
          </li>
          <li>
            <strong>Map the funnel</strong>. Every channel, every spend dollar, every CRM stage transition, every
            handoff between marketing and sales. Find the bottleneck.
          </li>
          <li>
            <strong>Pick one number</strong> the CEO and I will argue about every week. For most early SaaS, that's
            <em> Sales Qualified Pipeline this month</em>. Sometimes it's <em>Sales Accepted Leads this week</em>.
            Sometimes it's <em>Demos requested</em>. Never <em>MQLs</em>.
          </li>
          <li>
            <strong>Get aligned with sales</strong>. Marketing-sourced pipeline definitions agreed in writing.
            Lead-to-opportunity SLA agreed. Without this the rest is theater.
          </li>
        </ul>

        <h2>Days 15–45 — Build the operating cadence</h2>
        <ul>
          <li>
            <strong>Attribution stack first</strong>: HubSpot or Salesforce as the source of truth, GA4 + GTM
            wiring every paid impression to a contact's lifecycle stage, one warehouse table (or HubSpot custom
            report) that I can pull live without an analyst.
          </li>
          <li>
            <strong>Weekly leadership review</strong>. One slide. Top line: the one number. Below:
            spend efficiency, content velocity, top 3 risks. 15 minutes, every week, no exceptions.
          </li>
          <li>
            <strong>One repeatable content motion</strong>. Pick one — long-form posts, customer stories, weekly
            email, podcast clips, technical YouTube — and ship it weekly. Don't run five motions badly.
          </li>
          <li>
            <strong>Don't scale paid yet</strong>. Until attribution is live and content has a baseline, paid is a
            guess. Hold spend at last quarter's level. Reallocate inside that envelope.
          </li>
        </ul>

        <h2>Days 46–90 — Hire, ship, raise the floor</h2>
        <ul>
          <li>
            <strong>First hire: a marketing engineer / ops lead</strong>. Not a generalist. Someone who can ship
            automations, own the attribution stack, and unblock me from doing it personally. If the company can't
            afford an FTE, an Upwork senior contractor for 20 hrs/week beats an in-house generalist.
          </li>
          <li>
            <strong>Second hire: a writer who can think</strong>. If the content motion is going to be the
            differentiator, the second hire owns it. If it's going to be paid + product-led-growth, the second
            hire is a growth marketer instead.
          </li>
          <li>
            <strong>Ship one big thing publicly</strong> by day 90. A launch, a customer-story moment, a category
            POV piece — something that lets the CEO say "look at what marketing did this quarter" in a board
            meeting. Marketing leadership is partly about giving the CEO the words to defend the budget.
          </li>
        </ul>

        <h2>What I commit to in writing</h2>
        <ul>
          <li>A weekly one-page leadership review by day 30, every week thereafter.</li>
          <li>Attribution from impression to closed-won by day 60.</li>
          <li>One hired (or contracted) operator joined by day 75.</li>
          <li>One publicly-visible marketing artifact by day 90 — launch, story, or POV piece.</li>
          <li>An annual marketing plan with one number, three bets, and named owners by day 90.</li>
        </ul>

        <h2>What I won't do in the first 90 days</h2>
        <ul>
          <li>Rebrand. Premature, expensive, distracts from the funnel work.</li>
          <li>Hire a full team of generalists. One operator unlocks more than four generalists.</li>
          <li>Spin up a "newsletter strategy" before there's an attribution story.</li>
          <li>Switch CRMs. If HubSpot or Salesforce is in place, work with it. Migrations cost 6 months.</li>
          <li>Promise specific revenue numbers. I'll commit to leading indicators; revenue is everyone's job.</li>
        </ul>

        <h2>How I think about budget</h2>
        <p>
          I treat the marketing budget like the engineering team treats AWS spend: instrumented, alarmed, reviewed
          weekly, and owned in one place. The first 90 days don't try to grow the budget. They earn the right to
          ask for more by showing the CEO a number that moved because of marketing — and a system that explains
          why.
        </p>

        <h2>What this is and isn't</h2>
        <p>
          This is a starting position, not a manifesto. The specifics flex based on the company: a developer-tool
          SaaS will lean product-led growth, a vertical SaaS will lean events + customer stories, a heavy-enterprise
          SaaS will lean ABM + an SDR partnership. The constants are: <strong>instrument first, ship a cadence the
          CEO trusts, hire an operator before a generalist, ship one public thing by day 90.</strong>
        </p>

        <hr />

        <p>
          If you're hiring for a Head of Marketing role and any of this resonates — or any of it strikes you as
          wrong — I'd like to argue with you about it. <Link href="/contact">Get in touch</Link> or{" "}
          <a href={`mailto:${site.email}`}>email me</a>.
        </p>
      </div>
    </Container>
  );
}
