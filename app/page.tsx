import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CaseCard } from "@/components/CaseCard";
import { StackGrid } from "@/components/StackGrid";
import { getFeaturedWork } from "@/lib/work";
import { site } from "@/lib/site";

export const revalidate = false;

export default async function HomePage() {
  const featured = await getFeaturedWork();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,92,255,0.18),transparent_70%)]" />
        <Container className="py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/60 px-3 py-1 text-xs uppercase tracking-widest text-ink-300 mb-6">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span>Available — Senior IC / Head of Marketing</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-ink-50">
                Engineer turned marketer.
              </h1>
              <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink-300 leading-relaxed">
                I build the systems, write the copy, run the ads, and read the data.{" "}
                <span className="text-ink-100">{site.positioningShort}</span>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/work"
                  className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-soft transition-colors"
                >
                  See selected work →
                </Link>
                <a
                  href={site.resumeHref}
                  className="rounded-md border border-ink-700 px-4 py-2.5 text-sm font-medium text-ink-100 hover:border-accent hover:text-accent-soft transition-colors"
                >
                  Download résumé
                </a>
                <Link
                  href="/built-with-claude"
                  className="rounded-md px-4 py-2.5 text-sm font-medium text-ink-300 hover:text-ink-50 transition-colors"
                >
                  How this site was built →
                </Link>
              </div>
              <div className="mt-6 text-xs uppercase tracking-widest text-ink-500">
                Series A/B B2B SaaS · {site.location} · Remote-friendly
              </div>
            </div>
            <div className="relative justify-self-center md:justify-self-end">
              <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(124,92,255,0.35),transparent_75%)] blur-2xl" />
              <Image
                src="/headshot.png"
                alt="Daniel Moran"
                width={420}
                height={420}
                priority
                className="h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full object-cover [filter:grayscale(100%)_contrast(1.05)] border border-ink-800 shadow-[0_30px_60px_-20px_rgba(124,92,255,0.45)]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured work */}
      <section id="work">
        <Container className="py-14 sm:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Selected work</div>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-ink-50">
                Systems that moved numbers.
              </h2>
            </div>
            <Link href="/work" className="text-sm text-ink-300 hover:text-accent-soft">
              All work →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featured.map((w) => (
              <CaseCard key={w.slug} entry={w} />
            ))}
          </div>
        </Container>
      </section>

      {/* About strip */}
      <section className="border-t border-ink-800 bg-ink-900/40">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">About</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink-50">
                Engineer first. Marketer second. Builder always.
              </h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-ink-300 leading-relaxed">
              <p>
                I started in systems engineering at <strong className="text-ink-50">Cubic Transportation</strong>{" "}
                — five years writing Java, Python, and C++ across transit fare programs. Then I moved
                full-time into marketing because the leverage was bigger and almost nobody on the
                marketing side could ship the systems behind the funnel.
              </p>
              <p>
                Today I run paid + lifecycle + automation at{" "}
                <strong className="text-ink-50">Wealth Enhancement Group</strong>,
                ran <strong className="text-ink-50">multi-brand marketing as Director at Novadontics</strong>{" "}
                through January 2026, and am{" "}
                <strong className="text-ink-50">CMO / Co-founder at Nokkomo Mints</strong> (Amazon DTC).
              </p>
              <p>
                I treat marketing like software: instrument everything, automate the dull bits, and
                let the team spend their time on judgment calls instead of copy-pasting.
              </p>
              <Link href="/about" className="inline-block text-accent-soft hover:text-accent">
                More about how I work →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stack */}
      <section>
        <Container className="py-14 sm:py-20">
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Stack</div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-ink-50">
              What I build with.
            </h2>
          </div>
          <StackGrid />
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-ink-800">
        <Container className="py-16">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-ink-50">
                Hiring a senior IC marketer or first Head of Marketing?
              </h2>
              <p className="mt-2 text-ink-300">Senior IC or first head-of marketing hires — let's talk.</p>
            </div>
            <div className="flex gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-soft transition-colors"
              >
                {site.email}
              </a>
              <Link
                href="/contact"
                className="rounded-md border border-ink-700 px-4 py-2.5 text-sm font-medium text-ink-100 hover:border-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
