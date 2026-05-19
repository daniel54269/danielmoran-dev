import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/Container";
import { getAllWork, getWorkBySlug } from "@/lib/work";

export const dynamicParams = false;

export async function generateStaticParams() {
  const all = await getAllWork();
  return all.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const entry = await getWorkBySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.description,
    openGraph: { title: entry.title, description: entry.description },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = await getWorkBySlug(slug);
  if (!entry) notFound();

  return (
    <article>
      {/* Hero strip */}
      <section className="border-b border-ink-800 bg-ink-900/40">
        <Container className="py-10 sm:py-14">
          <Link href="/work" className="text-sm text-ink-400 hover:text-accent-soft">
            ← All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-ink-400">
            <span>{entry.client}</span>
            <span className="h-1 w-1 rounded-full bg-ink-700" />
            <span>{entry.domain}</span>
            <span className="h-1 w-1 rounded-full bg-ink-700" />
            <span>{entry.role}</span>
            <span className="h-1 w-1 rounded-full bg-ink-700" />
            <span>{entry.year}</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-50 max-w-3xl leading-tight">
            {entry.headline}
          </h1>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {entry.metric.map((m) => (
              <div key={m.label} className="rounded-xl border border-ink-800 p-4">
                <div className="text-2xl font-semibold text-ink-50 tabular-nums">{m.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-ink-400">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {entry.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink-700 px-2.5 py-1 text-xs text-ink-300"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Body */}
      <Container size="prose" className="py-16">
        <div className="prose-custom">
          <MDXRemote source={entry.content} />
        </div>
      </Container>

      {/* CTA */}
      <section className="border-t border-ink-800">
        <Container className="py-14">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-ink-100">Want to talk about a system like this for your team?</div>
            <div className="flex gap-3">
              <Link href="/contact" className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-ink-900 hover:bg-accent-soft">
                Get in touch
              </Link>
              <Link href="/work" className="rounded-md border border-ink-700 px-4 py-2.5 text-sm font-medium text-ink-100 hover:border-accent">
                More case studies
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
