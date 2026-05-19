"use client";

import { useRef } from "react";

type VideoTileProps = {
  src: string;
  label?: string;
  badge?: string;
  /** Aspect ratio class. Default "aspect-[3/4]" — compact portrait. */
  aspect?: string;
};

/**
 * Hover-to-play video tile.
 * - Desktop: mouseenter starts muted loop, mouseleave pauses + rewinds.
 * - Mobile / touch (no hover): tap toggles play/pause.
 * Lightweight: preload="metadata" so the home page doesn't pull the bytes until interaction.
 */
export function VideoTile({ src, label, badge, aspect = "aspect-[3/4]" }: VideoTileProps) {
  const ref = useRef<HTMLVideoElement>(null);

  function play() {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }

  function pauseReset() {
    const v = ref.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) play();
    else v.pause();
  }

  return (
    <figure
      className="group relative overflow-hidden rounded-xl border border-ink-800 bg-ink-900 transition-all duration-300 ease-out hover:scale-[1.03] hover:border-ink-700 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]"
      onMouseEnter={play}
      onMouseLeave={pauseReset}
      onClick={toggle}
    >
      <div className={`relative ${aspect}`}>
        <video
          ref={ref}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
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
