import { ImageResponse } from "next/og";

// Favicon: the site had none, so tabs and bookmarks showed a blank page glyph.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#e8e4dc",
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: -2,
          fontFamily: "sans-serif",
          borderRadius: 14,
        }}
      >
        DM
      </div>
    ),
    { ...size }
  );
}
