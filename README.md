# daniel-moran-site

Personal site for Daniel Moran | Marketing Engineer · Growth & AI Automation.

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Editing content

- **Case studies** live in `content/work/*.mdx`. Front-matter drives the cards on `/` and `/work` (metrics, stack, ordering, featured flag).
- **Bio / positioning** lives in `lib/site.ts`.
- **Skills grid** also in `lib/site.ts`.
- **Résumé PDFs** in `public/resume/`. To regenerate from the master markdown source, see `../resume/`.

## Deploying

Repo → Vercel → point `hazemediaagency.com` at the deployment. No env vars required.

Before flipping DNS from Shopify:
1. Export any Shopify customer / order data first.
2. Verify the Vercel preview URL renders correctly on mobile.
3. Pull `https://www.hazemediaagency.com/sitemap.xml` after cutover and resubmit to Google Search Console.

## Adding a case study

Drop a new `content/work/<slug>.mdx` with this front-matter shape:

```mdx
---
title: "..."
client: "..."
domain: "..."
role: "..."
year: "..."
headline: "..."
description: "..."
metric:
  - { label: "...", value: "..." }
stack: ["...", "..."]
order: 5
featured: true
---
```

Rebuild. It appears on `/` (if `featured: true`), `/work`, and `/work/<slug>` automatically.
