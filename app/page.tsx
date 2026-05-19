import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Sparkline } from "@/components/Sparkline";
import { CountUp } from "@/components/CountUp";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { CampaignTable } from "@/components/dashboard/CampaignTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { IconArrowUpRight, IconTrendUp } from "@/components/dashboard/Icons";
import { getAllWork, getFeaturedWork } from "@/lib/work";
import { kpis, nokkomoRevenue } from "@/lib/stats";
import { site } from "@/lib/site";

export const revalidate = false;

export default async function OverviewPage() {
  const featured = await getFeaturedWork();
  const all = await getAllWork();
  const campaigns = featured.length ? featured : all;

  return (
    <div className="space-y-12 sm:space-y-16 px-4 py-8 sm:px-6 sm:py-12">
      {/* Top hero strip */}
      <Reveal>
        <section className="relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/60 p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="grid items-center gap-8 md:grid-cols-[1.5fr_auto]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-[11px] uppercase tracking-widest text-ink-300">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for marketing engineering roles
              </div>
              <h1 className="mt-4 font-serif italic font-normal text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1] text-ink-50">
                Marketing Engineer.
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink-300 leading-relaxed">
                I help marketing teams adopt current AI tooling and automation to scale operations with less overhead — better measurement, faster output, lower per-unit cost.{" "}
                <span className="text-ink-100">Computer Science background and five years of software engineering at Cubic Transportation, applied across marketing leadership at Wealth Enhancement Group, Novadontics, and Nokkomo Mints.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-ink-900 hover:bg-accent-soft transition-colors"
                >
                  See pipeline <IconArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href={site.resumeHref}
                  className="rounded-md border border-ink-700 px-3.5 py-2 text-sm font-medium text-ink-100 hover:border-accent hover:text-accent-soft transition-colors"
                >
                  Download résumé
                </a>
                <Link
                  href="/built-with-claude"
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-ink-300 hover:text-ink-50 transition-colors"
                >
                  How this was built →
                </Link>
              </div>
            </div>
            <div className="relative justify-self-center md:justify-self-end">
              <Image
                src="/headshot.png"
                alt="Daniel Moran"
                width={240}
                height={240}
                priority
                className="h-32 w-32 sm:h-40 sm:w-40 rounded-2xl object-cover [filter:grayscale(100%)_contrast(1.05)] border border-ink-700 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPI row */}
      <Reveal delay={0.05}>
        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <KpiCard key={k.id} kpi={k} />
          ))}
        </section>
      </Reveal>

      {/* Chart + Activity row */}
      <div className="grid gap-3 lg:grid-cols-[1.6fr_1fr]">
        <Reveal delay={0.1}>
          <section className="rounded-xl border border-ink-800 bg-ink-900/40 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-400">
                  Nokkomo Mints
                </div>
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
            <div className="mt-4 h-40 sm:h-48">
              <Sparkline data={nokkomoRevenue} width={800} height={200} className="h-full w-full" showDots />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-ink-400 sm:text-left">
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
          </section>
        </Reveal>
        <Reveal delay={0.15}>
          <ActivityFeed />
        </Reveal>
      </div>

      {/* Campaigns / Pipeline */}
      <Reveal delay={0.1}>
        <section>
          <div className="mb-3 flex items-end justify-between px-1">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-ink-400">Pipeline</div>
              <h2 className="text-lg font-semibold tracking-tight text-ink-50">Top campaigns</h2>
            </div>
            <Link href="/work" className="text-xs text-ink-300 hover:text-accent-soft">
              View all →
            </Link>
          </div>
          <CampaignTable entries={campaigns.slice(0, 5)} />
        </section>
      </Reveal>

      {/* CTA strip */}
      <Reveal delay={0.05}>
        <section className="flex flex-col items-start gap-4 rounded-xl border border-ink-800 bg-ink-900/40 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-ink-50">
              Building a modern marketing team?
            </h2>
            <p className="mt-1 text-sm text-ink-400">Marketing engineering and AI automation roles. Remote-friendly. I respond within 24 hours.</p>
          </div>
          <div className="flex gap-2">
            <a
              href={`mailto:${site.email}`}
              className="rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-ink-900 hover:bg-accent-soft"
            >
              {site.email}
            </a>
            <Link
              href="/contact"
              className="rounded-md border border-ink-700 px-3.5 py-2 text-sm font-medium text-ink-100 hover:border-accent"
            >
              Contact
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
