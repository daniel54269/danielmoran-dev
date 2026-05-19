import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/Sparkline";
import { CountUp } from "@/components/CountUp";
import { Spotlight } from "@/components/Spotlight";
import { StackGrid } from "@/components/StackGrid";
import { VideoTile } from "@/components/VideoTile";
import { PersonalizedWelcome } from "@/components/PersonalizedWelcome";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { IconArrowUpRight, IconTrendUp } from "@/components/dashboard/Icons";
import { getAllWork, getFeaturedWork } from "@/lib/work";
import { kpis, nokkomoRevenue } from "@/lib/stats";
import { site } from "@/lib/site";

export const revalidate = false;

const sectionWrap = "px-4 py-12 sm:px-6 sm:py-20 first:pt-8";
const sectionEyebrow =
  "text-[10px] font-semibold uppercase tracking-widest text-ink-400";
const sectionHeadline =
  "mt-2 font-serif font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] text-ink-50";

export default async function HomePage() {
  const featured = await getFeaturedWork();
  const all = await getAllWork();
  const campaigns = featured.length ? featured : all;

  return (
    <div>
      <PersonalizedWelcome />

      {/* ─────────────────────────  OVERVIEW  ───────────────────────── */}
      <Spotlight id="overview" className={sectionWrap}>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/60 p-6 sm:p-10 md:p-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="max-w-4xl">
              <h1 className="font-serif italic font-normal text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-ink-50">
                Marketing Engineer.
              </h1>
              <p className="mt-6 max-w-3xl text-base sm:text-lg lg:text-xl text-ink-300 leading-relaxed">
                I help marketing teams adopt current AI tooling and automation to scale operations with less overhead — better measurement, faster output, lower per-unit cost.{" "}
                <span className="text-ink-100">Computer Science background and five years of software engineering at Cubic Transportation, applied across marketing leadership at Wealth Enhancement Group, Novadontics, and Nokkomo Mints.</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-2.5">
                <Link
                  href="#pipeline"
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-900 hover:bg-accent-soft transition-colors"
                >
                  See pipeline <IconArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={site.resumeHref}
                  className="rounded-md border border-ink-700 px-4 py-2.5 text-sm font-medium text-ink-100 hover:border-accent hover:text-accent-soft transition-colors"
                >
                  Download résumé
                </a>
                <Link
                  href="#built-with-claude"
                  className="rounded-md px-4 py-2.5 text-sm font-medium text-ink-300 hover:text-ink-50 transition-colors"
                >
                  How this was built →
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* KPI row — staggered entrance, 50ms between tiles */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k, i) => (
            <Reveal key={k.id} delay={0.05 + i * 0.05}>
              <KpiCard kpi={k} />
            </Reveal>
          ))}
        </div>

        {/* Chart + Activity — both stretch to match the taller column's height */}
        <div className="mt-8 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col rounded-xl border border-ink-800 bg-ink-900/40 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className={sectionEyebrow}>Nokkomo Mints</div>
                  <div className="mt-0.5 text-sm text-ink-100">Trailing revenue · indexed · last 12 months</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold tabular-nums text-ink-50">
                    <CountUp to={913} suffix="% YoY" />
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs text-emerald-400">
                    <IconTrendUp className="h-3 w-3" />
                    10× trailing revenue
                  </div>
                </div>
              </div>
              <div className="mt-4 min-h-40 flex-1">
                <Sparkline data={nokkomoRevenue} width={800} height={200} className="h-full w-full" showDots />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-ink-400">
                <div>
                  <div className="text-ink-500 uppercase tracking-widest text-[10px]">YoY growth</div>
                  <div className="mt-0.5 text-ink-100 tabular-nums">913%</div>
                </div>
                <div>
                  <div className="text-ink-500 uppercase tracking-widest text-[10px]">ACOS</div>
                  <div className="mt-0.5 text-ink-100 tabular-nums">81% → 38%</div>
                </div>
                <div>
                  <div className="text-ink-500 uppercase tracking-widest text-[10px]">Spend scale</div>
                  <div className="mt-0.5 text-ink-100 tabular-nums">3×</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="h-full">
            <ActivityFeed />
          </Reveal>
        </div>
      </Spotlight>

      {/* ─────────────────────────  PIPELINE  ───────────────────────── */}
      <Spotlight id="pipeline" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            Pipeline <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">1 min</span>
          </div>
          <h2 className={sectionHeadline}>Selected work.</h2>
          <p className="mt-3 max-w-prose text-ink-300">
            A handful of campaigns and systems shipped across B2C wealth management, dental clinical, DTC, and open source.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8">
            <CampaignTable entries={campaigns.slice(0, 6)} />
          </div>
        </Reveal>
      </Spotlight>

      {/* ─────────────────────────  CREATIVE  ───────────────────────── */}
      <Spotlight id="creative" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            Creative <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">2 min</span>
          </div>
          <h2 className={sectionHeadline}>Things I&rsquo;ve made and directed.</h2>
          <p className="mt-3 max-w-prose text-ink-300">
            Three lanes of creative output across the marketing function: AI-generated content, self-produced video, and work I&rsquo;ve directed with my intern team.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 space-y-10">
            {[
              {
                label: "AI-generated",
                meta: "Claude · Higgsfield · Buffer",
                blurb: "Content produced and shipped through the AI + automation pipeline I run at WEG and HAZE.",
                badge: "AI",
                videos: ["/videos/ai1.mov", "/videos/ai2.mov", "/videos/ai3.mov"],
              },
              {
                label: "Self-produced",
                meta: "iPhone · CapCut",
                blurb: "Talking-head and product video I shot and edited end-to-end.",
                badge: "Self",
                videos: ["/videos/daniel1.mov", "/videos/daniel2.mov", "/videos/daniel3.mov"],
              },
              {
                label: "Directed with the UCLA intern team",
                meta: "iPhone · CapCut",
                blurb: "Output from the eight-person UCLA intern team at Nokkomo — I directed the brief, framing, and edit notes.",
                badge: "Directed",
                videos: ["/videos/ucla1.mp4", "/videos/ucla2.mov", "/videos/ucla3.mp4"],
              },
            ].map((cat, catIdx) => (
              <div key={cat.label}>
                <div className="mb-4">
                  <div className="text-base font-medium text-ink-50">{cat.label}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-widest text-ink-500">{cat.meta}</div>
                  <p className="mt-2 max-w-prose text-xs text-ink-400">{cat.blurb}</p>
                </div>
                <div className="mx-auto grid w-full max-w-md grid-cols-1 gap-4 sm:max-w-[75%] sm:grid-cols-3 sm:gap-5">
                  {cat.videos.map((src) => (
                    <VideoTile key={src} src={src} badge={cat.badge} priority={catIdx === 0} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Spotlight>

      {/* ─────────────────────────  APPROACH  ───────────────────────── */}
      <Spotlight id="approach" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            Approach <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">1 min</span>
          </div>
          <h2 className={`${sectionHeadline} italic`}>How I work.</h2>
          <p className="mt-3 max-w-prose text-ink-300">
            Most marketing functions are bottlenecked on operations, not strategy. My approach rebuilds that infrastructure so the strategy can land — measurably, repeatably, with less per-unit cost.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <ol className="mt-10 grid gap-3 sm:grid-cols-3">
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
                body: "Unified attribution, reconciled lifecycle stages, automation in place of manual handoff. The executive team begins receiving a consistent weekly report.",
              },
              {
                n: "03",
                phase: "Operating cadence",
                weeks: "Weeks 7–12",
                body: "Weekly leadership review installed, AI-assisted content pipeline live, paid media reorganized against the new attribution model, first hire on board.",
              },
            ].map((step) => (
              <li key={step.n} className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-serif italic text-3xl text-accent">{step.n}</span>
                  <span className="text-[10px] uppercase tracking-widest text-ink-500">{step.weeks}</span>
                </div>
                <div className="text-base font-medium text-ink-50">{step.phase}</div>
                <p className="text-sm text-ink-300 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6">
            <Link href="/playbook" className="text-sm text-accent-soft hover:text-accent">
              Read the full approach →
            </Link>
          </div>
        </Reveal>
      </Spotlight>

      {/* ─────────────────────────  STACK  ───────────────────────── */}
      <Spotlight id="stack" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            Stack <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">30 sec</span>
          </div>
          <h2 className={sectionHeadline}>What I build with.</h2>
          <p className="mt-3 max-w-prose text-ink-300">
            Tools I use weekly. Listed for both human readers and ATS keyword scans.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-10">
            <StackGrid />
          </div>
        </Reveal>
      </Spotlight>

      {/* ─────────────────────────  ABOUT  ───────────────────────── */}
      <Spotlight id="about" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            About <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">1 min</span>
          </div>
          <h2 className={sectionHeadline}>Software engineering rigor, applied to modern marketing.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-10 md:grid-cols-[1fr_2fr]">
            <Image
              src="/headshot.png"
              alt="Daniel Moran"
              width={400}
              height={400}
              className="h-48 w-48 sm:h-56 sm:w-56 rounded-2xl object-cover [filter:grayscale(100%)_contrast(1.05)] border border-ink-700"
            />
            <div className="space-y-4 text-ink-300 leading-relaxed">
              <p>
                I&rsquo;m Daniel — a marketing engineer based in North County San Diego. CS from the University of San Diego (2018–2022), then five years of systems engineering at <strong className="text-ink-50">Cubic Transportation</strong> in Java, Python, and C++. I now apply that engineering background to marketing operations: building AI-augmented systems for attribution, content production, and CRM automation.
              </p>
              <p>
                Today I lead a four-person team at <strong className="text-ink-50">Wealth Enhancement Group</strong>, recently completed a tenure as <strong className="text-ink-50">Director of Marketing at Novadontics</strong> (3 brands, reporting to CEO), and serve as <strong className="text-ink-50">co-founder/CMO at Nokkomo Mints</strong> (Amazon DTC; 913% YoY revenue growth, 10× trailing revenue, 8 UCLA interns managed).
              </p>
              <p>
                On the side I run <strong className="text-ink-50">HAZE</strong> (registered TM) — creative brand work that keeps me sharp on the consumer side.
              </p>
              <p>
                <Link href="/about" className="text-accent-soft hover:text-accent">More about how I work →</Link>
              </p>
            </div>
          </div>
        </Reveal>
      </Spotlight>

      {/* ─────────────────────────  BUILT WITH CLAUDE  ───────────────────────── */}
      <Spotlight id="built-with-claude" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            Meta <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">1 min</span>
          </div>
          <h2 className={sectionHeadline}>How this site was built.</h2>
          <p className="mt-3 max-w-prose text-ink-300">
            The site is itself a portfolio artifact — written in collaboration with Claude Code, deployed to Vercel, intentionally engineered in the places that matter.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Framework", value: "Next.js 15 · App Router · all static" },
              { label: "Styling", value: "Tailwind + Geist + Instrument Serif" },
              { label: "Content", value: "MDX case studies with structured front-matter" },
              { label: "Build partner", value: "Claude Code (Anthropic CLI)" },
              { label: "Hosting", value: "Vercel" },
              { label: "Open source", value: "hubspot-mcp · MCP server for HubSpot CRM" },
            ].map((row) => (
              <div key={row.label} className="rounded-xl border border-ink-800 bg-ink-900/40 p-4">
                <div className="text-[10px] uppercase tracking-widest text-ink-500">{row.label}</div>
                <div className="mt-1 text-sm text-ink-100">{row.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/built-with-claude" className="text-sm text-accent-soft hover:text-accent">
              Full write-up →
            </Link>
          </div>
        </Reveal>
      </Spotlight>

      {/* ─────────────────────────  DOCUMENTS / CONTACT  ───────────────────────── */}
      <Spotlight id="documents" className={sectionWrap}>
        <Reveal>
          <div className={sectionEyebrow}>
            Documents <span className="text-ink-600">·</span>{" "}
            <span className="text-ink-500">10 sec</span>
          </div>
          <h2 className={`${sectionHeadline} italic`}>Let&rsquo;s talk.</h2>
          <p className="mt-3 max-w-prose text-ink-300">
            Marketing engineering and AI automation roles. Remote, hybrid, or in person around North County San Diego. I respond within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <a
              href={`mailto:${site.email}`}
              className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-accent/60"
            >
              <div className="text-[10px] uppercase tracking-widest text-ink-400">Email</div>
              <div className="mt-1 text-base font-medium text-ink-50">{site.email}</div>
              <div className="mt-1 text-xs text-ink-400">Fastest. Reply within 24 hours.</div>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-accent/60"
            >
              <div className="text-[10px] uppercase tracking-widest text-ink-400">LinkedIn</div>
              <div className="mt-1 text-base font-medium text-ink-50">Daniel Joseph Moran</div>
              <div className="mt-1 text-xs text-ink-400">Connect or DM.</div>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-accent/60"
            >
              <div className="text-[10px] uppercase tracking-widest text-ink-400">GitHub</div>
              <div className="mt-1 text-base font-medium text-ink-50">daniel54269</div>
              <div className="mt-1 text-xs text-ink-400">Open-source projects · hubspot-mcp.</div>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={site.resumeHref}
              className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-900 hover:bg-accent-soft"
            >
              Download résumé
            </a>
          </div>
        </Reveal>
      </Spotlight>
    </div>
  );
}
