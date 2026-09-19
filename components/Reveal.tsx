import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds of stagger. Only used by the no-scroll-timeline fallback. */
  delay?: number;
  as?: "div" | "section" | "article" | "header";
};

/**
 * Entrance reveal, CSS-only.
 *
 * Browsers with scroll-driven animations (Chromium, Safari) tie the fade to the element's
 * own position in the viewport via `animation-timeline: view()` — off the main thread, no
 * JS, no observer. Firefox has not shipped it, so `@supports not` falls back to a plain
 * timed entrance with the stagger delay. Both paths are disabled under reduced motion.
 * Replaced the motion/react version: same effect, no client bundle, no hydration.
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  return (
    <Tag
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
