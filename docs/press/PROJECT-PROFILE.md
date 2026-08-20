# PRESS — Project profile: SUBUR Honey (suburhoney.com)

Written by PRESS Stage 0 on 2026-08-20. Every line cites the file that proved it.

| Question | Answer | Source | Type | Confidence |
|---|---|---|---|---|
| Where articles live | `src/content/articles/{en,ar,ms}/<slug>.ts`, one module per article | repo tree | Code | High |
| Article data shape | Typed block union — `answer`, `heading`, `paragraph`, `list`, `steps`, `table`, `callout`, `ingredients`, `quote`, `cta` + `faqs[]` | `src/content/articles/types.ts` | Code | High |
| Registry | `ARTICLES` (render order) + `ARTICLE_GROUPS` (cross-locale slug pairing) | `src/content/articles/index.ts` | Code | High |
| Slug drift assert | **None.** No slugs.json, no throw on mismatch. Registry is the only source | `src/content/articles/index.ts` | Code | High |
| Languages | `en`, `ar` (RTL), `ms` — `LOCALES` + `LOCALE_META` | `src/config/site.ts` | Code | High |
| Routes | `src/pages/[lang]/blog/[slug].astro` via `getStaticPaths()` over `getArticles(lang)`; static output | `src/pages/[lang]/blog/[slug].astro`, `astro.config.mjs` | Code | High |
| URL shape | `https://suburhoney.com/{lang}/blog/{slug}/` — trailing slash mandatory, built only by `localeUrl()` | `src/config/site.ts` | Code | High |
| Build | `npm run build` = optimize-images → `scripts/ai/surfaces.mjs` → `astro build` | `package.json` | Code | High |
| Deploy | `SUBUR_FTP_PASS=… python scripts/ftp-deploy.py` — FTPS `ftp.suburhoney.com`, chrooted to docroot, SIZE-verified | `scripts/ftp-deploy.py`, memory `reference_suburhoney_hosting` | Code+Doc | High |
| Existing gates | `npm run check:ai` (facts drift), `node scripts/qa/banned-terms.mjs` (+ `--dir=dist`), `ai:coverage`, `ai:gate`, `ai:answers`, `scripts/qa/image-audit.mjs` | `package.json`, `scripts/qa/` | Code | High |
| AI surfaces | `/llms.txt`, `/llms-ar.txt`, `/llms-ms.txt`, `/llms-full.txt` (all generated endpoints, enumerate **all** articles), `/about.md`, `/faq.md`, `/AGENTS.md`, `AI-FACTS.yml` | `src/pages/llms*.ts`, `scripts/ai/surfaces.mjs` | Code | High |
| Sitemap | Generated endpoint `src/pages/sitemap.xml.ts` — **articles are enumerated from `ARTICLE_GROUPS`, not from `ARTICLES`** | `src/pages/sitemap.xml.ts` | Code | High |
| Robots / IndexNow | `src/pages/robots.txt.ts`; `npm run ai:indexnow -- --sitemap` | `package.json` | Code | High |
| Single source of truth | `src/config/site.ts` — `BRANCHES`, `WHATSAPP_NUMBER`, `SHOPEE_URL`, `TIKTOK_SHOP_URL`, `BRAND_SELLER*`. `AI-FACTS.yml` is generated from it and `check:ai` fails on drift | `src/config/site.ts`, `scripts/ai/facts-sync.mjs` | Code | High |
| Article images | One 4:3 lead figure per article, keyed by **canonical English slug** in `src/config/articleFigures.ts`; alt text per locale on `Article.figureAlt`. Blog cards reuse it via `data-src` deferral | `src/config/articleFigures.ts`, `src/pages/[lang]/blog/index.astro` | Code | High |
| OG image | Site default `\/jarncap.png` (400×639) unless a page passes `image` to `Layout` — articles currently pass none | `src/components/SEO.astro` | Code | High |

## Traps found in Stage 0 that this round must handle

1. **Sitemap ignores ungrouped articles.** `sitemap.xml.ts` loops `ARTICLE_GROUPS`. Any article
   that is not part of a 3-language group would ship unlisted. Fixed in Stage 5.
2. **hreflang invents dead URLs.** `SEO.astro` `hreflangFor()` falls back to
   `localeUrl(l, path)` for any locale missing from `alternates` — for a single-language article
   that emits `/{other}/blog/<this-slug>/`, which 404s. Fixed in Stage 5.
3. **Banned-terms gate is stricter than normal English.** `traditional`, `tradition`,
   `Middle East`, `for generations`, `تقليدي`, `الشرق الأوسط`, `tradisional`, `timur tengah`,
   `turun-temurun` all fail the build gate. Writers get the full list in the brief.
4. **Existing article word counts set the floor** — the nine live articles run long-form; the round
   sits at the top of the 800–1,000 band so it does not read as a quality drop.
5. **Request count beats bytes on this host** (29→2 first-paint requests halved LCP). One lead
   image per article, deferred, is the site's convention — not hero + two inline + OG.

## Market and legal ceiling

- **Market:** Malaysia (`ogLocale` `*_MY`, prices absent, retail is two Selangor branches).
  Arabic audience is Arabic speakers **inside Malaysia**, not the Gulf.
- **Ceiling:** Malaysia Food Regulations 1985 — food and its advertising may not claim to prevent,
  reduce, treat or cure any condition. Infertility is a condition, so fertility promises are
  illegal, not merely aggressive. Traditional-use framing only, no medical verbs, no dosage claims,
  no statute numbers quoted in body copy (all three llms files got sub-reg 18(6) wrong once
  already, and Malay invented an RM10,000 figure).
- **Facts that exist:** two branch addresses, WhatsApp number, Shopee storefront, TikTok Shop,
  ingredient list. **No price, no email, no rating, no customer count, no certification** — all
  deliberately blank. An article may not fill any of them.

## Capability probe (2026-08-20)

| Dependency | Result |
|---|---|
| `bin/imgen.py --probe` | `zimage` **dead** (401, expired token) · `pollinations` **ok** (0.3 s) |
| Search Console | **UNAVAILABLE** — Cogny MCP free quota exhausted for the period. Stage 1 runs without GSC data; recorded in GATE.md rather than silently skipped |
| Keyword tool | No paid keyword API on this machine. Demand evidence is live SERP/autocomplete/PAA/competitor-title research, and every figure is labelled with how it was obtained |
| Deploy credentials | FTPS user + password known (`reference_suburhoney_hosting`) |
| Git | `E:\suburhoney-v2`, branch `master`, HEAD `23452bc`, tree clean, in sync with `origin/master` |
