import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Shell } from "@/components/dashboard/Shell";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | Daniel Moran" },
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
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable}`}>
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
              address: { "@type": "PostalAddress", addressLocality: "San Diego", addressRegion: "CA" },
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
