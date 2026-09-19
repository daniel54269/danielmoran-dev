// Résumé source of truth. Two variants render from the same content:
//   marketing → public/resume/Daniel-Moran-Resume.pdf
//   engineer  → public/resume/Daniel-Moran-Resume-AI-Engineer.pdf
// Run: npm run resume   (uses the locally installed Edge/Chrome in headless mode, no dependencies)

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");

const contact = {
  name: "Daniel Moran",
  lines: [
    "daniel54269@gmail.com · 760-855-6324",
    "linkedin.com/in/danieljosephmoran · github.com/daniel54269",
    "danielmoran.dev · North County San Diego, CA",
  ],
};

// Bullets tagged m (marketing), e (engineer), or both.
const roles = [
  {
    title: "Digital Marketing Specialist",
    org: "Wealth Enhancement Group",
    when: "Aug 2025 – Present · San Diego, CA",
    bullets: [
      { v: "m", t: "Designed and run an <b>AI marketing-automation platform (90+ scheduled jobs)</b> that took <b>85+ recurring tasks</b> off the marketing team across seminars, webinars, paid social, and reporting." },
      { v: "e", t: "Built and operate an <b>AI automation platform of 90+ scheduled jobs</b> (Python, REST APIs, LLMs) that automates <b>85+ recurring marketing operations</b> across seminars, webinars, paid social, CRM, and reporting." },
      { v: "m", t: "Built generative-AI content pipelines (ad copy, webinar invites, blog drafts, event creative); every prospect-facing asset passes an automated FINRA compliance screen, human sign-off, and an audit log." },
      { v: "e", t: "Engineered LLM content-generation pipelines with automated compliance screening, human-in-the-loop approval gates, and an audit trail for every AI-generated asset in a FINRA-regulated environment." },
      { v: "m", t: "Architected a multi-channel attribution model tying paid search, seminars, webinars, and digital ads to new-client outcomes, with auditable matching and deduplication; leadership uses it for budget decisions." },
      { v: "e", t: "Designed a multi-channel attribution data model with deterministic matching, deduplication, and reconciliation across 8 sources (GA4, Search Console, Meta, LinkedIn, YouTube, HubSpot, Salesforce, ClickMeeting)." },
      { v: "m", t: "Unified GA4, Search Console, Meta, LinkedIn, YouTube, HubSpot, Salesforce, and ClickMeeting into weekly cross-channel reporting and a QoQ executive dashboard, replacing ~6 analyst hours/week of spreadsheets." },
      { v: "e", t: "Built Salesforce and HubSpot integrations with gated, canary-verified write pipelines and <b>600+ automated tests</b> protecting production CRM data; AI lead-quality scoring over <b>5,000+ records/week</b>." },
      { v: "m", t: "Run competitive ad research and benchmarking; coordinate delivery across the marketing team, an outside contractor, and compliance; manage six-figure monthly paid media across Meta and Google." },
    ],
  },
  {
    title: "Director of Marketing",
    org: "Novadontics",
    when: "May 2025 – Jan 2026 · Remote",
    bullets: [
      { v: "me", t: "Reported to the CEO; owned marketing across three brands (Novadontics, Care Pulse, California Implant Institute): email, social, paid media, analytics, and events." },
      { v: "me", t: "Rebuilt HubSpot lifecycle and GTM attribution in 90 days; consolidated three siloed tracking setups into one reporting model used in weekly executive reviews." },
      { v: "m", t: "Represented California Implant Institute at industry events and trade shows, with pipeline conversations captured in the CRM the same week." },
      { v: "e", t: "Built Make.com automations replacing manual lead routing across brands, supporting retirement of fragmented external agency engagements." },
    ],
  },
  {
    title: "CMO / Co-founder",
    org: "Nokkomo Mints",
    when: "Sep 2023 – Present · North County San Diego",
    bullets: [
      { v: "me", t: "Cut Amazon Advertising ACOS from 81% to 38% in 90 days while scaling daily spend 3×; delivered <b>913% YoY revenue growth</b> (2024). Brand now sells across Shopify, Amazon FBA, Walmart, and TikTok Shop." },
      { v: "m", t: "Recruited and managed <b>eight UCLA interns</b> across creative, content production, and Amazon operations; co-led product positioning, pack design, and go-to-market narrative." },
      { v: "e", t: "Recruited and managed <b>eight UCLA interns</b>; built weekly negative-keyword harvesting and creative-rotation systems for Amazon Ads." },
    ],
  },
  {
    title: "Founder",
    org: "HAZE Media Agency",
    when: "2019 – 2024 · San Diego, CA",
    bullets: [
      { v: "me", t: "Built an end-to-end AI content pipeline (Claude/Cowork → Drive → Make.com → Buffer → IG/TikTok) producing 30+ posts/month per brand with minimal manual work." },
      { v: "m", t: "Developed a repeatable TikTok creative framework used across DTC, hospitality, and B2B clients, with several seven-figure-view campaigns." },
    ],
  },
  {
    title: "Software & Systems Engineer",
    org: "Cubic Transportation Systems",
    when: "Jan 2019 – Apr 2024 · San Diego, CA",
    bullets: [
      { v: "e", t: "Built internal automation in <b>Java, Python, and C++</b> for application lifecycle management: testing, workflow, and defect tracking across multi-team transit fare-system programs." },
      { v: "m", t: "Built internal automation in <b>Java, Python, and C++</b> for testing, workflow, and defect tracking across multi-team transit fare-system programs." },
      { v: "me", t: "Owned test environment configuration and release reporting consumed by program managers and external customers." },
    ],
  },
];

const openSource =
  "<b>hubspot-mcp</b> <i>(github.com/daniel54269/hubspot-mcp)</i> · Open-source Model Context Protocol server that lets Claude and Cursor read and write HubSpot CRM data. TypeScript, 13 tools (contact search, pipeline summary, contact updates, note creation). MIT.";

const skills = {
  m: [
    ["AI Marketing", "Generative AI · prompt engineering · AI content pipelines · AI governance &amp; compliance review · LLM agents · MCP · Claude · Hugging Face"],
    ["Marketing", "Product &amp; campaign strategy · multi-channel attribution · competitive analysis · lifecycle email · webinars &amp; events · A/B and cohort analysis"],
    ["Platforms", "HubSpot · Salesforce · GA4 · Search Console · GTM · Meta Ads · Google Ads · LinkedIn · YouTube · Amazon Ads · Klaviyo · Shopify"],
    ["Engineering", "Python · Java · C/C++ · SQL · TypeScript · Node.js · Next.js · REST APIs · Make.com · n8n · Git"],
  ],
  e: [
    ["Languages", "Python · TypeScript · Java · C/C++ · SQL · JavaScript/Node.js"],
    ["AI &amp; LLMs", "Claude · LLM agents · Model Context Protocol (MCP) servers · prompt engineering · LLM content pipelines · Hugging Face · evaluation &amp; guardrails"],
    ["Data &amp; Integration", "REST APIs · data pipelines · Salesforce · HubSpot · GA4 · Make.com · n8n · Zapier · automated testing · Git · Next.js"],
    ["Domain", "Marketing technology · financial services (FINRA) · healthcare/dental · eCommerce · transit systems"],
  ],
};

const variants = {
  marketing: {
    file: "Daniel-Moran-Resume.pdf",
    headline: "AI Marketing Manager · Automation, GenAI Content &amp; Attribution",
    summary:
      "AI marketing leader who builds the systems behind the marketing: generative-AI content with built-in compliance review, multi-channel attribution, and automation that takes recurring work off the team. B.S. Computer Science and five years of software engineering at Cubic Transportation, applied to marketing at Wealth Enhancement Group, Novadontics, and Nokkomo Mints. I turn complex AI and data work into clear, decision-ready stories.",
    key: "m",
    openSourceFirst: false,
  },
  engineer: {
    file: "Daniel-Moran-Resume-AI-Engineer.pdf",
    headline: "AI Engineer · LLM Automation, MCP Servers &amp; Data Pipelines",
    summary:
      "Software engineer building production AI automation. B.S. Computer Science and five years at Cubic Transportation writing Java, Python, and C++; now building LLM pipelines, MCP servers, and tested CRM/data integrations in a regulated (FINRA) environment. Author of open-source hubspot-mcp. I ship guarded, tested systems and explain them clearly to non-technical stakeholders.",
    key: "e",
    openSourceFirst: true,
  },
};

const has = (b, key) => b.v.includes(key);

function render(v) {
  const roleHtml = roles
    .map((r) => {
      const items = r.bullets.filter((b) => has(b, v.key)).map((b) => `<li>${b.t}</li>`).join("");
      return `<div class="role"><div class="role-head"><span><b>${r.title}</b>, <i>${r.org}</i></span><span class="when">${r.when}</span></div><ul>${items}</ul></div>`;
    })
    .join("");
  const os = `<h2>Selected Open Source</h2><p class="os">${openSource}</p>`;
  const skillRows = skills[v.key].map(([k, val]) => `<tr><th>${k}</th><td>${val}</td></tr>`).join("");
  return `<!doctype html><html><head><meta charset="utf-8"><title>${contact.name} Résumé</title><style>
@page { size: Letter; margin: 0.45in 0.5in; }
* { box-sizing: border-box; }
body { font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 9.4pt; line-height: 1.28; color: #111; margin: 0; }
header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1.5px solid #111; padding-bottom: 5px; }
h1 { font-size: 23pt; margin: 0; letter-spacing: -0.3px; }
.headline { color: #444; font-size: 10.5pt; margin-top: 1px; }
.contact { text-align: right; white-space: nowrap; font-size: 8.6pt; color: #333; line-height: 1.4; }
.summary { margin: 7px 0 2px; }
h2 { font-size: 9pt; letter-spacing: 2px; text-transform: uppercase; margin: 8px 0 3px; padding-bottom: 2px; border-bottom: 0.75px solid #bbb; }
.role { margin-bottom: 4px; }
.role-head { display: flex; justify-content: space-between; }
.role-head i { color: #444; }
.when { color: #444; font-size: 8.6pt; white-space: nowrap; }
ul { margin: 1px 0 0; padding-left: 15px; }
li { margin: 0.5px 0; }
.os { margin: 0; }
table { border-collapse: collapse; width: 100%; }
th { text-align: left; vertical-align: top; width: 1.25in; padding: 1px 0; }
td { padding: 1px 0; }
.edu { display: flex; justify-content: space-between; }
</style></head><body>
<header><div><h1>${contact.name}</h1><div class="headline">${v.headline}</div></div><div class="contact">${contact.lines.join("<br>")}</div></header>
<p class="summary">${v.summary}</p>
${v.openSourceFirst ? os : ""}
<h2>Experience</h2>${roleHtml}
${v.openSourceFirst ? "" : os}
<h2>Education</h2><div class="edu"><span><b>University of San Diego</b> · B.S. Computer Science</span><span class="when">2018 – 2022</span></div>
<h2>Skills</h2><table>${skillRows}</table>
</body></html>`;
}

const browsers = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/chromium",
  "/usr/bin/google-chrome",
];
const browser = process.env.CHROME_PATH || browsers.find((b) => existsSync(b));
if (!browser) throw new Error("No Chrome/Edge found. Set CHROME_PATH.");

const outDir = path.join(root, "public", "resume");
const buildDir = path.join(here, "build");
mkdirSync(buildDir, { recursive: true });

for (const [name, v] of Object.entries(variants)) {
  const html = path.join(buildDir, `${name}.html`);
  writeFileSync(html, render(v));
  const pdf = path.join(outDir, v.file);
  execFileSync(browser, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${pdf}`,
    pathToFileURL(html).href,
  ], { stdio: "ignore" });
  console.log(`✓ ${name} → public/resume/${v.file}`);
}
