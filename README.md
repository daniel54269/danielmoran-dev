# daniel-moran-site

Personal site for Daniel Moran | AI Marketing Manager · Automation, GenAI Content & Attribution. Live at https://danielmoran.dev.

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
- **Résumé PDFs** in `public/resume/` are generated. Edit `resume/build.mjs` (bullets tagged per variant: AI Marketing, AI Engineer) and run `npm run resume`.
- **LinkedIn copy** lives in `resume/linkedin.md`.

## Deploying

Push to `main`. Vercel builds and deploys to https://danielmoran.dev automatically. No env vars required.

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
