import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Daniel Moran | Marketing Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(80% 60% at 80% 100%, rgba(232,228,220,0.06), transparent 60%)",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, color: "#a1a1aa", letterSpacing: 6, textTransform: "uppercase" }}>
          Marketing Engineer
        </div>
        <div style={{ fontSize: 104, fontWeight: 600, marginTop: 22, letterSpacing: -2 }}>
          Daniel Moran
        </div>
        <div
          style={{
            fontSize: 32,
            marginTop: 24,
            color: "#d4d4d8",
            lineHeight: 1.35,
            maxWidth: 980,
          }}
        >
          I help marketing teams adopt current AI tooling and automation to operate at greater scale with less overhead.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#71717a",
            fontSize: 24,
          }}
        >
          <span>{site.url.replace(/^https?:\/\//, "")}</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
