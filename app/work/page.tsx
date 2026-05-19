import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CaseCard } from "@/components/CaseCard";
import { getAllWork } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — Amazon Ads turnaround, AI content automation, paid-media attribution, TikTok framework.",
};

export default async function WorkIndex() {
  const all = await getAllWork();
  return (
    <Container className="py-12 sm:py-20">
      <div className="mb-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Work</div>
        <h1 className="mt-2 font-serif font-normal text-4xl sm:text-5xl tracking-tight leading-[1.05] text-ink-50">
          Case studies.
        </h1>
        <p className="mt-3 max-w-2xl text-ink-300">
          A small set, each one with the numbers and the system behind them.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {all.map((w) => (
          <CaseCard key={w.slug} entry={w} />
        ))}
      </div>
    </Container>
  );
}
