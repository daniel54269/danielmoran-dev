// Headline metrics surfaced in the dashboard hero + KPI row + activity feed.
// Edit numbers here, they flow to every visualization.

export type Kpi = {
  id: string;
  label: string;
  value: number;
  /** Literal big-number text override. When set, skips CountUp animation. Useful for non-numeric KPIs like "Six figures". */
  display?: string;
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
    id: "weg-tasks-automated",
    label: "Recurring tasks automated",
    value: 85,
    suffix: "+",
    trend: "up",
    context: "WEG · 90+ scheduled jobs",
  },
  {
    id: "nokkomo-interns",
    label: "Interns managed",
    value: 24,
    trend: "up",
    context: "8 universities · Nokkomo Mints",
  },
  {
    id: "posts-automated",
    label: "Posts/mo automated",
    value: 30,
    suffix: "+",
    trend: "up",
    context: "Cowork pipeline · 12 brands",
  },
  {
    id: "mcp-tools",
    label: "MCP tools shipped",
    value: 13,
    trend: "flat",
    context: "hubspot-mcp · open source",
  },
];

// Nokkomo revenue is deliberately NOT published: it is the company's figure, and Daniel
// co-founded it with someone else. The overview shows systems shipped instead.

export type ActivityEntry = {
  when: string; // human label, e.g. "2 hours ago" or "May 2026"
  title: string;
  meta?: string; // optional smaller right-side label
  href?: string;
};

export const activity: ActivityEntry[] = [
  {
    when: "Sep 2026",
    title: "Nokkomo Mints: four channels live (Shopify, Amazon FBA, Walmart, TikTok Shop); B2B wholesale is the growth motion",
    meta: "CMO / Co-founder",
  },
  {
    when: "2026",
    title: "WEG: AI marketing-automation platform live, 85+ recurring tasks automated with compliance-gated GenAI content",
    meta: "90+ jobs · 600+ tests",
  },
  {
    when: "May 2026",
    title: "Shipped hubspot-mcp v0.1.0: open-source MCP server for HubSpot CRM",
    meta: "13 tools · TypeScript · MIT",
    href: "https://github.com/daniel54269/hubspot-mcp",
  },
  {
    when: "May 2026",
    title: "Deployed danielmoran.dev on Vercel: Next.js portfolio with dashboard treatment",
    meta: "Next 15 · Tailwind · MDX",
  },
  {
    when: "Q1 2026",
    title: "Closed Director of Marketing role at Novadontics: 3 brands, 90-day HubSpot rebuild",
    meta: "May 2025 – Jan 2026",
  },
  {
    when: "Q4 2025",
    title: "Deployed Cowork content pipeline at WEG with Hugging Face MCP",
    meta: "Drive → Make.com → Buffer",
  },
  {
    when: "2024",
    title: "Nokkomo Mints: built and managed an 8-person UCLA intern team across creative, content, and Amazon ops",
    meta: "CMO / Co-founder",
  },
  {
    when: "2024",
    title: "Nokkomo Mints: Amazon ACOS 81% to 38% in 90 days, 3× spend scale",
    meta: "CMO / Co-founder",
  },
];
