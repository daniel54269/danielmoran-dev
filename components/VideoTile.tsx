"use client";

import { useEffect, useRef, useState } from "react";

type VideoTileProps = {
  src: string;
  label?: string;
  badge?: string;
  /** Aspect ratio class. Default "aspect-[3/4]" — compact portrait. */
  aspect?: string;
  /**
   * If true, preload="metadata" immediately (first row).
   * If false, start with preload="none" and upgrade to "metadata" when within 200px of viewport.
   */
  priority?: boolean;
};

export function VideoTile({
  src,
  label,
  badge,
  aspect = "aspect-[3/4]",
  priority = false,
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const figureRef = useRef<HTMLElement>(null);
  const [preload, setPreload] = useState<"none" | "metadata">(
    priority ? "metadata" : "none"
  );

  // Non-priority tiles: lazy-upgrade preload as they near the viewport.
  useEffect(() => {
    if (priority) return;
    const el = figureRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPreload("metadata");
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [priority]);

  function play() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }

  function pauseReset() {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) play();
    else v.pause();
  }

  return (
    <figure
      ref={figureRef}
      className="group relative overflow-hidden rounded-xl border border-ink-800 bg-ink-900 transition-all duration-300 ease-out hover:scale-[1.03] hover:border-ink-700 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
      onMouseEnter={play}
      onMouseLeave={pauseReset}
      onClick={toggle}
    >
      <div className={`relative ${aspect}`}>
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          preload={preload}
          muted
          playsInline
          loop
        />
        {badge && (
          <span className="absolute left-2 top-2 rounded-md border border-ink-700 bg-ink-900/80 px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-ink-300 backdrop-blur">
            {badge}
          </span>
        )}
        <span className="pointer-events-none absolute right-2 bottom-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-900/70 text-ink-50 backdrop-blur opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" className="h-3 w-3 translate-x-[1px]" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      {label && (
        <figcaption className="border-t border-ink-800 px-3 py-2 text-xs text-ink-300">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
