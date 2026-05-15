// Headline metrics surfaced in the dashboard hero + KPI row + activity feed.
// Edit numbers here, they flow to every visualization.

export type Kpi = {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  format?: "number" | "compact";
  decimals?: number;
  trend?: "up" | "flat" | "down";
  context?: string; // small sub-label
  spark?: number[]; // optional mini sparkline
};

export const kpis: Kpi[] = [
  {
    id: "nokkomo-yoy",
    label: "Nokkomo YoY growth",
    value: 913,
    suffix: "%",
    trend: "up",
    context: "Amazon revenue · 10× trailing",
    spark: [4, 6, 7, 10, 14, 18, 22, 28, 33, 36, 39, 40],
  },
  {
    id: "weg-team",
    label: "Direct reports",
    value: 4,
    trend: "flat",
    context: "WEG · paid + lifecycle + webinars",
    spark: [1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4],
  },
  {
    id: "posts-automated",
    label: "Posts/mo automated",
    value: 30,
    suffix: "+",
    trend: "up",
    context: "Cowork pipeline · 12 brands",
    spark: [4, 6, 8, 10, 14, 18, 22, 26, 28, 29, 30, 30],
  },
  {
    id: "mcp-tools",
    label: "MCP tools shipped",
    value: 13,
    trend: "flat",
    context: "hubspot-mcp · open source",
    spark: [0, 0, 1, 3, 5, 7, 9, 11, 12, 13, 13, 13],
  },
];

// Hero chart — Nokkomo trailing revenue, in $K, 12 months
export const nokkomoRevenue = [4, 5, 6, 8, 12, 16, 20, 26, 31, 35, 38, 40];

export type ActivityEntry = {
  when: string; // human label, e.g. "2 hours ago" or "May 2026"
  title: string;
  meta?: string; // optional smaller right-side label
  href?: string;
};

export const activity: ActivityEntry[] = [
  {
    when: "May 2026",
    title: "Shipped hubspot-mcp v0.1.0 — open-source MCP server for HubSpot CRM",
    meta: "13 tools · TypeScript · MIT",
    href: "https://github.com/daniel54269/hubspot-mcp",
  },
  {
    when: "May 2026",
    title: "Deployed danielmoran.dev on Vercel — Next.js portfolio, dashboard treatment",
    meta: "Next 15 · Tailwind · MDX",
  },
  {
    when: "Q1 2026",
    title: "Closed Director of Marketing role at Novadontics — 3 brands, 90-day HubSpot rebuild",
    meta: "May 2025 – Jan 2026",
  },
  {
    when: "Q4 2025",
    title: "Deployed Cowork content pipeline at WEG with Hugging Face MCP",
    meta: "Drive → Make.com → Buffer",
  },
  {
    when: "2024",
    title: "Nokkomo Mints — built and managed an 8-person UCLA intern team across creative, content, and Amazon ops",
    meta: "CMO / Co-founder",
  },
  {
    when: "2024",
    title: "Nokkomo Mints — Amazon ACOS 81% → 38%, 913% YoY revenue growth, 3× spend scale",
    meta: "CMO / Co-founder",
  },
];
