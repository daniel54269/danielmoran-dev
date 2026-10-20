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
    // 10/16 Daniel's own breakdown ("Here are the details on the automation work for my resume. Use whatever helps").
    bullets: [
      { v: "m", t: "Designed, built, and run an in-house marketing operations automation platform that automated <b>100+ of the team's 116 recurring tasks</b> (6 keep a deliberate human sign-off): <b>112 automation jobs</b> on 128 scheduled tasks, built in about three months." },
      { v: "m", t: "Turn <b>1,800+ leads a week</b> into verified CRM records, with data-quality and duplicate audits and reconciled reporting across two Salesforce orgs and HubSpot." },
      { v: "m", t: "Run email and paid media on schedule: weekly webinar invite rounds, paced daily enrollment of tens of thousands of contacts, and dozens of compliance-checked event ads a week with wasted-spend and creative-fatigue alerts." },
      { v: "m", t: "Every AI-generated draft and creative is scanned against FINRA-style rules and logged; every production write is dry-run, read-back checked, and rollback-logged, guarded by <b>4,888 automated tests</b>." },
      { v: "m", t: "Built prospect-to-client attribution (rules engine, cost per client, ROI) and daily and weekly dashboards across ~20 connected platforms; manage <b>six-figure monthly paid media budgets</b> across Meta and Google with server-side conversion tracking." },
      { v: "m", t: "Automated webinars and seminars end to end: rooms, registrant imports, attendance reconciliation, recording uploads, live-stream checks within minutes of start, plus landing pages, sign-ups, and attendee lists." },
      { v: "m", t: "Ship AI-drafted blog posts, social posts, and ad creative, with SEO search-demand and content-gap reports." },
      { v: "m", t: "A watchdog checks the system four times a day and retries failed runs; an AI fixer ships code only after the full test suite passes." },
      { v: "e", t: "Designed and built an in-house marketing-operations platform: <b>112 automation jobs</b> on 128 scheduled tasks that automated <b>100+ of a marketing team's 116 recurring tasks</b>, built in about three months." },
      { v: "e", t: "Integrated <b>~20 platforms</b> through REST APIs and OAuth (two Salesforce orgs, HubSpot, Meta Marketing API, Google Ads, LinkedIn, YouTube, Google Workspace, GA4, Microsoft 365) processing <b>1,800+ leads a week</b>." },
      { v: "e", t: "Guarded with <b>4,888 automated tests</b> (pytest); every production write runs dry-run, test record, read-back, and rollback log; a watchdog retries failed runs and an AI fixer ships code fixes only after the full suite passes." },
      { v: "e", t: "Engineered LLM content pipelines that scan every AI-generated draft and creative against FINRA-style rules with an audit log; moving the first service to AWS." },
      { v: "e", t: "Automated platforms without usable APIs through <b>Playwright and the Chrome DevTools Protocol</b>, with a session keeper holding a dozen platforms signed in through single sign-on." },
    ],
  },
  {
    title: "Director of Marketing",
    org: "Novadontics",
    when: "May 2025 – Jan 2026 · Remote",
    bullets: [
      { v: "me", t: "Rebuilt HubSpot lifecycle and GTM attribution in 90 days; consolidated three siloed tracking setups into one reporting model used in weekly executive reviews." },
      { v: "me", t: "Ran marketing for <b>three brands</b> (Novadontics, Care Pulse, California Implant Institute), reporting directly to the CEO." },
      { v: "e", t: "Built Make.com automations replacing manual lead routing across brands, supporting retirement of fragmented external agency engagements." },
    ],
  },
  {
    title: "CMO / Co-founder",
    org: "Nokkomo Mints",
    when: "Sep 2023 – Present · North County San Diego",
    bullets: [
      { v: "me", t: "Cut Amazon Advertising ACOS from <b>81% to 38% in 90 days</b> (2024) while scaling daily spend 3×; brand now sells across Shopify, Amazon FBA, Walmart, and TikTok Shop." },
      { v: "m", t: "Built an intern program of <b>30 active interns across 8 universities</b>; co-led positioning, pack design, and go-to-market." },
      { v: "e", t: "Built an intern program now <b>30 active across 8 universities</b>; built weekly negative-keyword harvesting and creative-rotation systems for Amazon Ads." },
    ],
  },
  {
    title: "Founder",
    org: "HAZE Media Agency",
    when: "2019 – 2024 · San Diego, CA",
    bullets: [
      { v: "me", t: "Built an AI content pipeline (Claude, Drive, Make.com, Buffer, Instagram, TikTok) producing 30+ posts a month per brand." },
      { v: "m", t: "Built a repeatable TikTok creative framework for DTC, hospitality, and B2B clients; several seven-figure-view campaigns." },
    ],
  },
  {
    title: "Software & Systems Engineer",
    org: "Cubic Transportation Systems",
    when: "Jan 2019 – Apr 2024 · San Diego, CA",
    bullets: [
      { v: "e", t: "Built internal automation in <b>Java, Python, and C++</b> for application lifecycle management: testing, workflow, and defect tracking across multi-team transit fare-system programs." },
      { v: "m", t: "Built <b>Java, Python, and C++</b> automation for testing, workflow, and defect tracking across transit fare-system programs." },
      { v: "me", t: "Produced release reports for program managers and external customers; owned test environment configuration." },
    ],
  },
];

const openSource =
  "<b>hubspot-mcp</b> <i>(github.com/daniel54269/hubspot-mcp)</i> · Open-source Model Context Protocol server that lets Claude and Cursor read and write HubSpot CRM data. TypeScript, 13 tools (contact search, pipeline summary, contact updates, note creation). MIT.";

const skills = {
  m: [
    ["AI Marketing", "Generative AI · prompt engineering · AI content pipelines · AI lead scoring · AI compliance review · LLM agents · MCP · Claude"],
    ["Marketing", "Marketing automation · marketing operations · demand generation · ABM · customer journey &amp; funnel · segmentation &amp; personalization · lifecycle email &amp; retention · product marketing &amp; messaging · webinars &amp; events · SEO · project management"],
    ["Platforms", "HubSpot · Salesforce · GA4 analytics · Search Console · Meta Ads · Google Ads · LinkedIn Ads · YouTube · Amazon Ads · Shopify"],
    ["Engineering", "Python · SQL · TypeScript · Java · REST API integrations · Make.com · n8n · Git"],
  ],
  e: [
    ["Languages", "Python · TypeScript · Java · C/C++ · SQL · JavaScript/Node.js · PowerShell"],
    ["AI &amp; LLMs", "Claude · LLM agents · Model Context Protocol (MCP) servers · prompt engineering · LLM content pipelines · Hugging Face · evaluation &amp; guardrails"],
    ["Data &amp; Integration", "REST APIs &amp; OAuth · Playwright · Chrome DevTools Protocol · pytest · AWS (EC2) · data pipelines · Salesforce · HubSpot · GA4 · Make.com · n8n · Git"],
    ["Domain", "Marketing technology · financial services (FINRA) · healthcare/dental · eCommerce · transit systems"],
  ],
};

const variants = {
  marketing: {
    file: "Daniel-Moran-Resume.pdf",
    headline: "AI Marketing Manager · Automation, GenAI Content &amp; Attribution",
    summary:
      "AI marketing leader who automated 100+ of a marketing team's 116 recurring tasks with generative-AI content, built-in compliance review, multi-channel attribution, and analytics that cross-functional stakeholders act on. B.S. Computer Science, with five years of software engineering before marketing.",
    key: "m",
    openSourceFirst: false,
    // 10/16 Daniel tapped "Yes, both changes" (a resume coach: open with branding and highlights). Facts already on the resume only.
    highlights: [
      "Automated <b>100+ recurring tasks for a full marketing team</b> at Wealth Enhancement Group, built in about three months.",
      "Cut Amazon Ads ACOS from <b>81% to 38% in 90 days</b> while scaling daily spend 3×.",
      "Moved <b>1,800+ leads a week</b> into the CRM with <b>4,888 automated tests</b> guarding every production write.",
    ],
  },
  engineer: {
    file: "Daniel-Moran-Resume-AI-Engineer.pdf",
    headline: "AI Engineer · LLM Automation, MCP Servers &amp; Data Pipelines",
    summary:
      "Software engineer building production AI automation: 112 automation jobs that automated 100+ of a marketing team's 116 recurring tasks. B.S. Computer Science and five years at Cubic Transportation writing Java, Python, and C++; now building LLM pipelines, MCP servers, and tested CRM/data integrations in a regulated (FINRA) environment. Author of open-source hubspot-mcp. I ship guarded, tested systems and explain them clearly to non-technical stakeholders.",
    key: "e",
    openSourceFirst: true,
    highlights: [
      "Built a platform of <b>112 automation jobs</b> that automated 100+ of a marketing team's 116 recurring tasks.",
      "<b>4,888 automated tests</b> guard ~20 integrated platforms and <b>1,800+ leads a week</b>.",
      "Author of open-source <b>hubspot-mcp</b> (13 tools); five years of Java, Python, and C++ at Cubic.",
    ],
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
body { font-variant-ligatures: none; font-feature-settings: "liga" 0, "clig" 0; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; font-size: 9.1pt; line-height: 1.24; color: #111; margin: 0; }
header { display: flex; justify-content: space-between; align-items: flex-end; border-bottom: 1.5px solid #111; padding-bottom: 5px; }
h1 { font-size: 23pt; margin: 0; letter-spacing: -0.3px; }
.headline { color: #444; font-size: 10.5pt; margin-top: 1px; }
.contact { text-align: right; white-space: nowrap; font-size: 8.6pt; color: #333; line-height: 1.4; }
.summary { margin: 7px 0 2px; }
h2 { font-size: 9pt; letter-spacing: 0; text-transform: uppercase; margin: 8px 0 3px; padding-bottom: 2px; border-bottom: 0.75px solid #bbb; }
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
${v.highlights ? `<h2>Career Highlights</h2><ul>${v.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>` : ""}
<h2>Key Skills</h2><table>${skillRows}</table>
${v.openSourceFirst ? os : ""}
<h2>Experience</h2>${roleHtml}
${v.openSourceFirst ? "" : os}
<h2>Education</h2><div class="edu"><span><b>University of San Diego</b> · B.S. Computer Science</span></div>
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

// Optional, for a one-off copy: node resume/build.mjs [--headline "<text>"] [--out <folder>]
//   --out       renders into that folder instead of public/resume (and writes its scratch HTML there too)
//   --headline  replaces the marketing headline and renders ONLY the marketing resume (needs --out, so the public PDFs are never touched)
// With neither flag the output is exactly what it was.
const argv = process.argv.slice(2);
const arg = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : undefined; };
const customOut = arg("--out");
const customHeadline = arg("--headline");
if (argv.includes("--headline") && (!customHeadline || customHeadline.startsWith("--"))) throw new Error("--headline needs text");
if (customHeadline && !customOut) throw new Error("--headline needs --out <folder> (never writes into public/resume)");
if (argv.includes("--out") && (!customOut || customOut.startsWith("--"))) throw new Error("--out needs a folder");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const outDir = customOut ? path.resolve(customOut) : path.join(root, "public", "resume");
const buildDir = customOut ? outDir : path.join(here, "build");
mkdirSync(outDir, { recursive: true });
mkdirSync(buildDir, { recursive: true });

for (const [name, v0] of Object.entries(variants)) {
  if (customHeadline && name !== "marketing") continue;
  const v = customHeadline ? { ...v0, headline: esc(customHeadline) } : v0;
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
