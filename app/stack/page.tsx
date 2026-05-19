import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StackGrid } from "@/components/StackGrid";

export const metadata: Metadata = {
  title: "Stack",
  description: "What I build with: marketing tools, engineering languages, AI and agent tooling, and domain experience.",
};

export default function StackPage() {
  return (
    <Container className="py-12 sm:py-20">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Stack</div>
      <h1 className="mt-2 font-serif font-normal text-4xl sm:text-5xl tracking-tight leading-[1.05] text-ink-50">
        What I build with.
      </h1>
      <p className="mt-3 max-w-2xl text-ink-300">
        Tools I use weekly, listed so recruiters&rsquo; keyword filters and human readers see the same picture.
      </p>
      <div className="mt-10">
        <StackGrid />
      </div>
    </Container>
  );
}
