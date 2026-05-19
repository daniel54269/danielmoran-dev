"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowUpRight, IconClose } from "./dashboard/Icons";

type WelcomeMessage = {
  eyebrow: string;
  greeting: string;
  ctaLabel: string;
  ctaHref: string;
};

const STORAGE_KEY = "pw_dismissed_v1";

function detectSource(): WelcomeMessage | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const name = params.get("to") ?? params.get("for");
  const role = params.get("role");
  const utmSource = (params.get("utm_source") ?? "").toLowerCase();
  const ref = document.referrer.toLowerCase();

  // Explicit personalization (highest priority — typically from a cold email link)
  if (name) {
    return {
      eyebrow: "Personal invite",
      greeting: `Hi ${name}, selected work below. The résumé is one click away.`,
      ctaLabel: "Pipeline",
      ctaHref: "#pipeline",
    };
  }
  if (role === "hom" || role === "head-of-marketing") {
    return {
      eyebrow: "For: Head of Marketing search",
      greeting: "Start with the Approach. It is the fastest read.",
      ctaLabel: "Approach",
      ctaHref: "#approach",
    };
  }
  if (role === "engineer" || role === "marketing-engineer") {
    return {
      eyebrow: "For: Marketing Engineer search",
      greeting: "The open-source MCP server is the fastest proof.",
      ctaLabel: "Built with Claude",
      ctaHref: "#built-with-claude",
    };
  }

  // Referrer-based routing
  if (ref.includes("linkedin.com") || utmSource.includes("linkedin")) {
    return {
      eyebrow: "From LinkedIn",
      greeting: "Welcome. Start with the Pipeline; résumé download in the sidebar.",
      ctaLabel: "Pipeline",
      ctaHref: "#pipeline",
    };
  }
  if (ref.includes("github.com") || utmSource.includes("github")) {
    return {
      eyebrow: "From GitHub",
      greeting: "Start with the open-source MCP server and how this site was built.",
      ctaLabel: "Built with Claude",
      ctaHref: "#built-with-claude",
    };
  }
  if (ref.includes("twitter.com") || ref.includes("x.com") || utmSource.includes("twitter") || utmSource.includes("x")) {
    return {
      eyebrow: "From X",
      greeting: "The Creative section is a strong starting point.",
      ctaLabel: "Creative",
      ctaHref: "#creative",
    };
  }
  if (
    ref.includes("indeed.com") ||
    ref.includes("wellfound.com") ||
    ref.includes("ycombinator.com") ||
    ref.includes("workatastartup.com") ||
    ref.includes("lever.co") ||
    ref.includes("greenhouse.io")
  ) {
    return {
      eyebrow: "From a job board",
      greeting: "The Approach is the fastest summary of how I work.",
      ctaLabel: "Approach",
      ctaHref: "#approach",
    };
  }

  return null;
}

export function PersonalizedWelcome() {
  const [msg, setMsg] = useState<WelcomeMessage | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {}
    const detected = detectSource();
    if (detected) {
      setMsg(detected);
      const t = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function dismiss() {
    setShow(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  return (
    <AnimatePresence>
      {show && msg && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="mx-4 mt-4 sm:mx-6 flex flex-col items-stretch gap-2 rounded-lg border border-ink-700 bg-ink-900/70 px-4 py-2.5 text-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 rounded-md border border-ink-700 bg-ink-900 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent-soft">
              {msg.eyebrow}
            </span>
            <span className="min-w-0 truncate text-ink-100">{msg.greeting}</span>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={msg.ctaHref}
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-accent-soft hover:bg-ink-800 hover:text-accent"
            >
              {msg.ctaLabel}
              <IconArrowUpRight className="h-3 w-3" />
            </a>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss welcome message"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md text-ink-400 hover:bg-ink-800 hover:text-ink-50"
            >
              <IconClose className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
