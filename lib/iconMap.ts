// Map from skill name to simpleicons.org CDN slug.
// Tools without a SimpleIcons entry render as monogram tiles.
// Reference: https://simpleicons.org/

export const iconMap: Record<string, string> = {
  // Marketing
  HubSpot: "hubspot",
  Salesforce: "salesforce",
  GA4: "googleanalytics",
  "Google Analytics 4": "googleanalytics",
  "Meta Ads": "meta",
  "TikTok Ads": "tiktok",
  "Amazon Ads": "amazon",
  "Google Ads": "googleads",
  Klaviyo: "klaviyo",
  Mailchimp: "mailchimp",
  Buffer: "buffer",
  SEMrush: "semrush",
  Hotjar: "hotjar",
  GTM: "googletagmanager",
  "Google Tag Manager": "googletagmanager",

  // Engineering & Automation
  Python: "python",
  Java: "openjdk",
  "C / C++": "cplusplus",
  "C/C++": "cplusplus",
  SQL: "mysql",
  "Make.com": "make",
  Zapier: "zapier",
  n8n: "n8n",
  "REST APIs": "openapiinitiative",
  Git: "git",
  "Node.js": "nodedotjs",
  "Next.js": "nextdotjs",

  // AI & Agents
  Claude: "anthropic",
  "Hugging Face": "huggingface",
  // (Cowork, MCP servers, FLUX, Suno, Runway, agent-based workflows, prompt engineering, etc. fall through to monogram)

  // Domain (all fall through to monogram — no brand icons for verticals)
};

// Brand color hint for the monogram fallback (per category, optional).
export const categoryAccent: Record<string, string> = {
  Marketing: "#7c5cff",
  "Engineering & Automation": "#34d399",
  "AI & Agents": "#f59e0b",
  Domain: "#94a3b8",
};
