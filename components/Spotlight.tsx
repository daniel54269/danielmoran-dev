"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

type SpotlightProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * Section wrapper that subtly "lights up" as it enters and dominates the viewport.
 * Implementation:
 *   - useScroll tracks this section's progress through the viewport (0 → 1).
 *   - useTransform maps the progress into a glow-opacity curve that plateaus
 *     while the section is on screen and fades at the edges.
 *   - useSpring smooths the value so the glow swells, not steps.
 *   - The glow is a soft warm-cream radial gradient behind the content + a faint
 *     accent-colored top edge line that pulses with it.
 *
 * Effect: as you scroll down the page, each section briefly draws the eye
 * — visible enough to feel deliberate, subtle enough to never compete with content.
 */
export function Spotlight({ id, className, children }: SpotlightProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Plateau between 0.15 and 0.85 — fully lit while section is on-screen;
  // fades smoothly as it enters/exits.
  const glowRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.5, 0.85, 1],
    [0, 0.85, 1, 0.85, 0]
  );
  const glow = useSpring(glowRaw, { stiffness: 80, damping: 26, mass: 0.4 });

  return (
    <section ref={ref} id={id} className={`relative ${className ?? ""}`}>
      {/* Soft radial glow behind content */}
      <motion.div
        aria-hidden
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-x-0 inset-y-4 -z-10 bg-[radial-gradient(55%_45%_at_50%_50%,rgba(232,228,220,0.08),transparent_70%)]"
      />
      {children}
    </section>
  );
}
