import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = "Daniel Moran — Marketing Engineer";
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
            "radial-gradient(60% 60% at 30% 20%, rgba(124,92,255,0.30), transparent 70%)",
          display: "flex",
          flexDirection: "column",
          padding: "70px 80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#a1a1aa", letterSpacing: 4, textTransform: "uppercase" }}>
          Engineer turned marketer
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24, letterSpacing: -1 }}>
          Daniel Moran
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 24,
            color: "#d4d4d8",
            lineHeight: 1.3,
            maxWidth: 980,
          }}
        >
          I build the systems, write the copy, run the ads, and read the data. CS from USD, 5 yrs at Cubic, now across B2B SaaS · DTC · brand.
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
