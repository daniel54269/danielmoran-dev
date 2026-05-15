export const site = {
  name: "Daniel Moran",
  title: "Daniel Moran — Marketing Engineer",
  headline: "Head of Marketing for early-stage B2B SaaS",
  positioning:
    "I run marketing like a product team. Build the systems, hire the team, write the copy, run the ads, read the data — and report a number to the board on Monday.",
  positioningShort:
    "Engineer first (5 yrs at Cubic, CS from USD), now leading marketing across B2B SaaS, DTC, and brand.",
  location: "Oceanside, CA",
  email: "daniel54269@gmail.com",
  linkedin: "https://www.linkedin.com/in/danieljosephmoran",
  github: "https://github.com/daniel54269",
  url: "https://danielmoran.dev",
  resumeHref: "/resume/Daniel-Moran-Head-of-Marketing.pdf",
  resumeEngineerHref: "/resume/Daniel-Moran-Marketing-Engineer.pdf",
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Marketing",
    items: [
      "HubSpot",
      "Salesforce",
      "GA4",
      "Meta Ads",
      "TikTok Ads",
      "Amazon Ads",
      "Google Ads",
      "Klaviyo",
      "Mailchimp",
      "Buffer",
      "SEMrush",
      "Hotjar",
      "Triple Whale",
      "Google Tag Manager",
    ],
  },
  {
    label: "Engineering & Automation",
    items: [
      "Python",
      "Java",
      "C / C++",
      "SQL",
      "Make.com",
      "Zapier",
      "n8n",
      "REST APIs",
      "Git",
      "Node.js",
      "Next.js",
    ],
  },
  {
    label: "AI & Agents",
    items: [
      "Claude",
      "Cowork",
      "MCP servers",
      "Hugging Face",
      "FLUX",
      "Suno",
      "Runway",
      "Prompt engineering",
      "Agent-based workflows",
    ],
  },
  {
    label: "Domain",
    items: [
      "B2B SaaS",
      "DTC",
      "eCommerce",
      "Shopify",
      "Amazon FBA",
      "Wealth management",
      "Dental / clinical",
      "Hospitality",
    ],
  },
];
