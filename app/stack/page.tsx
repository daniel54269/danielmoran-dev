import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { StackGrid } from "@/components/StackGrid";

export const metadata: Metadata = {
  title: "Stack",
  description: "What I build with — marketing tools, engineering languages, AI/agent tooling, and domain experience.",
};

export default function StackPage() {
  return (
    <Container className="py-10 sm:py-14">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Stack</div>
      <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-50">
        What I build with.
      </h1>
      <p className="mt-3 max-w-2xl text-ink-300">
        Tools I use weekly, not the kitchen sink. Listed here so recruiters' keyword filters and human readers
        get the same picture.
      </p>
      <div className="mt-10">
        <StackGrid />
      </div>
    </Container>
  );
}
