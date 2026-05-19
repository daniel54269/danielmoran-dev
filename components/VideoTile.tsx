"use client";

import { useRef } from "react";

type VideoTileProps = {
  src: string;
  label?: string;
  badge?: string;
  /** Aspect ratio class. Default "aspect-[3/4]" — compact portrait. */
  aspect?: string;
  /**
   * Reserved for future fine-grained loading control. All tiles use
   * preload="metadata" so iOS Safari shows the first frame as a thumbnail
   * (it does not honor preload="none" with later upgrades reliably).
   */
  priority?: boolean;
};

/**
 * Convention: /videos/foo.mov → /videos/posters/foo.jpg
 * ffmpeg-extracted first-frame thumbnails so iOS Safari has something to show
 * before user interaction (iOS does not render preload="metadata" first frames
 * reliably without a real poster image).
 */
function posterFor(src: string): string {
  const match = src.match(/^(.*\/)([^/]+)\.(mov|mp4|webm)$/i);
  if (!match) return "";
  const [, dir, name] = match;
  return `${dir}posters/${name}.jpg`;
}

export function VideoTile({
  src,
  label,
  badge,
  aspect = "aspect-[3/4]",
}: VideoTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const poster = posterFor(src);

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
      className="group relative overflow-hidden rounded-xl border border-ink-800 bg-ink-900 transition-[transform,border-color,box-shadow] duration-300 ease-emil hover:scale-[1.03] hover:border-ink-700 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)] active:scale-[0.97]"
      onMouseEnter={play}
      onMouseLeave={pauseReset}
      onClick={toggle}
    >
      <div className={`relative ${aspect}`}>
        <video
          ref={videoRef}
          src={src}
          poster={poster || undefined}
          className="absolute inset-0 h-full w-full object-cover"
          preload="metadata"
          muted
          playsInline
          loop
        />
        {/* Subtle gradient so the play button stays legible even on bright frames */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
        {badge && (
          <span className="absolute left-2 top-2 rounded-md border border-ink-700 bg-ink-900/80 px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-ink-300 backdrop-blur">
            {badge}
          </span>
        )}
        {/* Play affordance — always visible (touch devices have no hover) */}
        <span className="pointer-events-none absolute right-2 bottom-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink-900/80 text-ink-50 backdrop-blur opacity-85 transition-all duration-200 ease-emil group-hover:opacity-100 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 translate-x-[1px]" fill="currentColor">
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
