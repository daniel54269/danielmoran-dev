export const site = {
  name: "Daniel Moran",
  title: "Daniel Moran — Marketing Engineer",
  headline: "Engineer turned marketer · Senior IC · Head of Marketing",
  positioning:
    "Engineer turned marketer. I build the systems, write the copy, run the ads, and read the data.",
  positioningShort:
    "CS from USD, 5 years at Cubic, now operating across B2B SaaS, DTC, and brand.",
  location: "Oceanside, CA",
  email: "daniel54269@gmail.com",
  linkedin: "https://www.linkedin.com/in/danieljosephmoran",
  github: "https://github.com/daniel54269",
  url: "https://danielmoran.dev",
  resumeHref: "/resume/Daniel-Moran-General.pdf",
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
