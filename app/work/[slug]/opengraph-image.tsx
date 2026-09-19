import { ImageResponse } from "next/og";
import { getAllWork, getWorkBySlug } from "@/lib/work";
import { site } from "@/lib/site";

export const alt = "Case study by Daniel Moran";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const all = await getAllWork();
  return all.map((w) => ({ slug: w.slug }));
}

export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = await getWorkBySlug(slug);
  const metrics = entry?.metric.slice(0, 3) ?? [];

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
          padding: "64px 80px",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, color: "#a1a1aa", letterSpacing: 5, textTransform: "uppercase" }}>
          {`Case study · ${entry?.domain ?? "Daniel Moran"}`}
        </div>
        <div style={{ fontSize: 60, fontWeight: 600, marginTop: 22, letterSpacing: -1, lineHeight: 1.1, maxWidth: 1040 }}>
          {entry?.title ?? site.name}
        </div>
        <div style={{ display: "flex", gap: 24, marginTop: 44 }}>
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid #3f3f46",
                borderRadius: 16,
                padding: "20px 28px",
                minWidth: 250,
              }}
            >
              <span style={{ fontSize: 44, fontWeight: 600, color: "#e8e4dc" }}>{m.value}</span>
              <span style={{ fontSize: 22, color: "#a1a1aa", marginTop: 6 }}>{m.label}</span>
            </div>
          ))}
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
          <span>{`Daniel Moran · ${site.url.replace(/^https?:\/\//, "")}`}</span>
          <span>{entry?.role ?? ""}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
