"use client";

import { motion, useReducedMotion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header";
} & Omit<MotionProps, "initial" | "whileInView" | "transition" | "viewport">;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 12,
  as = "div",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
