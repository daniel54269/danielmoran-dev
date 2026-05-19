"use client";

import { useRef, useState } from "react";

type VideoTileProps = {
  src: string;
  label?: string;
  badge?: string;
  /** Aspect ratio class. Default "aspect-[9/16]" for portrait iPhone videos. */
  aspect?: string;
};

/**
 * Lightweight video tile. preload="none" so the home page doesn't pull all 9 videos at once.
 * Click to play, muted by default with controls.
 */
export function VideoTile({ src, label, badge, aspect = "aspect-[9/16]" }: VideoTileProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function handlePlay() {
    setStarted(true);
    // Defer to next tick so the video element receives focus before play().
    requestAnimationFrame(() => {
      ref.current?.play().catch(() => {});
    });
  }

  return (
    <figure className="group relative overflow-hidden rounded-xl border border-ink-800 bg-ink-900">
      <div className={`relative ${aspect}`}>
        <video
          ref={ref}
          src={src}
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
          muted
          playsInline
          controls={started}
          onClick={started ? undefined : handlePlay}
        />
        {!started && (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={label ? `Play ${label}` : "Play video"}
            className="absolute inset-0 flex items-center justify-center bg-ink-900/30 transition-colors group-hover:bg-ink-900/10"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900/80 backdrop-blur transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 text-ink-50" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
        {badge && (
          <span className="absolute left-2 top-2 rounded-md border border-ink-700 bg-ink-900/80 px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-ink-300 backdrop-blur">
            {badge}
          </span>
        )}
      </div>
      {label && (
        <figcaption className="border-t border-ink-800 px-3 py-2 text-xs text-ink-300">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
