import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { Shell } from "@/components/dashboard/Shell";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s — Daniel Moran" },
  description: site.positioning,
  authors: [{ name: "Daniel Moran" }],
  openGraph: {
    type: "website",
    title: site.title,
    description: site.positioning,
    url: site.url,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.positioning,
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        <Shell>{children}</Shell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              url: site.url,
              email: `mailto:${site.email}`,
              address: { "@type": "PostalAddress", addressLocality: "Oceanside", addressRegion: "CA" },
              sameAs: [site.linkedin, site.github].filter(Boolean),
              jobTitle: "Marketing Engineer",
              description: site.positioning,
            }),
          }}
        />
      </body>
    </html>
  );
}
