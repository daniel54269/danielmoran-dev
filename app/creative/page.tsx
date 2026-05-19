import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { VideoTile } from "@/components/VideoTile";

export const metadata: Metadata = {
  title: "Creative archive",
  description:
    "Full archive of creative output: AI-generated content, self-produced video, and work directed with the UCLA intern team at Nokkomo Mints.",
};

const categories = [
  {
    label: "AI-generated",
    meta: "Claude · Higgsfield · Buffer",
    blurb:
      "Content produced and shipped through the AI + automation pipeline I run at WEG and HAZE.",
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
    meta: "iPhone · CapCut · directed",
    blurb:
      "Output from the eight-person UCLA intern team at Nokkomo. I directed the brief, framing, and edit notes.",
    badge: "Directed",
    videos: ["/videos/ucla1.mp4", "/videos/ucla2.mov", "/videos/ucla3.mp4"],
  },
];

export default function CreativeArchivePage() {
  return (
    <Container className="py-12 sm:py-20">
      <div className="text-xs font-semibold uppercase tracking-widest text-ink-400">Creative archive</div>
      <h1 className="mt-2 font-serif italic font-normal text-4xl sm:text-5xl tracking-tight leading-[1.05] text-ink-50">
        Work I&rsquo;ve made and directed.
      </h1>
      <p className="mt-3 max-w-prose text-ink-300">
        Three lanes of creative output across the marketing function: AI-generated content, self-produced
        video, and work I&rsquo;ve directed with my UCLA intern team.
      </p>

      <div className="mt-12 space-y-12">
        {categories.map((cat, catIdx) => (
          <section key={cat.label}>
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
          </section>
        ))}
      </div>

      <div className="mt-16 border-t border-ink-800 pt-6">
        <Link href="/#creative" className="text-sm text-accent-soft hover:text-accent">
          ← Back to overview
        </Link>
      </div>
    </Container>
  );
}
