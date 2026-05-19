"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin progress bar fixed under the TopBar. Fills left→right based on document scroll.
 * Uses a spring on the raw scrollYProgress so movement feels physical, not linear-twitchy.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="pointer-events-none fixed left-0 right-0 top-[var(--shell-topbar-h,56px)] z-30 h-px bg-accent/60"
    />
  );
}
