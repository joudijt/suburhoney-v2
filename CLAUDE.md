# SUBUR Honey — suburhoney.com

Marketing site for SUBUR Honey, a Middle Eastern honey blend sold in Malaysia by Berkat Madinah
Store. Static Astro build, three locales, deployed over FTPS to shared hosting.

**Live:** https://suburhoney.com (first deploy 2026-07-23)
**Repo:** https://github.com/joudijt/suburhoney-v2.git — branch `master`

## Stack

| Piece | Version / notes |
| --- | --- |
| Astro | 7.1.3, `output: "static"` |
| React | 19 (via `@astrojs/react`) |
| Tailwind | v4 through `@tailwindcss/vite` — no `tailwind.config.js` |
| Animation | GSAP 3.15 + ScrollTrigger |
| Fonts | self-hosted `@fontsource-variable` Inter + Playfair Display |
| QA | `playwright` devDependency |

Node `>=22.12` required.

## Architecture

```
assets-src/               ORIGINAL images. Never served - too heavy.
src/
  config/site.ts          SITE_URL, LOCALES, LOCALE_META (dir/ogLocale/label), store URLs
  scripts/
    deferred-images.ts    swaps data-src -> src once the LCP jar has painted
  pages/
    index.astro           redirect stub -> /en/
    [lang]/index.astro    the homepage, one per locale
    [lang]/blog/index.astro
scripts/
  optimize-images.mjs     assets-src/ -> public/*.webp, run by `npm run build`
  ftp-deploy.py           FTPS upload + orphan cleanup + size verification
public/                   generated .webp, .htaccess, robots.txt, sitemap.xml, llms*.txt
```

### Images

`public/*.webp` is **generated output** — edit the original in `assets-src/`, then rebuild.
Target sizes live in the `TARGETS` table in `scripts/optimize-images.mjs`, each set to 2x its
largest on-screen size. `jarncap.png` is the one PNG that still ships, because social crawlers
fetch it as the Open Graph image.

Anything invisible on first paint uses **`data-src` instead of `src`**, and
`src/scripts/deferred-images.ts` upgrades it once the hero jar has painted. This covers the
sealed jar, the ten hero ingredient icons, the cursor bee, and the store-modal sticker — all of
which sit at `opacity: 0` or inside a hidden container until GSAP or a click reveals them.

**Do not "fix" that back to plain `src`.** `loading="lazy"` cannot replace it either — every one
of those elements is inside the initial viewport, so the browser would fetch it immediately.
The reason is measured, see the performance section below.

Locales are `en`, `ar`, `ms`. Arabic is RTL, driven by `LOCALE_META.ar.dir === "rtl"`.
Adding a locale means touching `LOCALES` + `LOCALE_META` and the per-locale copy dictionaries.

## Develop

`AGENTS.md` requires background mode:

```sh
npm install
npx astro dev --background     # prints the port — it is NOT always 4321
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Performance

Measured on production, 1440x900 Chrome:

| | before | after |
| --- | --- | --- |
| Page weight | 2.91 MB | 542 KB |
| Images | 2.75 MB | 384 KB |
| LCP | 3028 ms | ~1650 ms |
| CLS | 0.0009 | ~0.001 |

Two separate problems, and it matters not to confuse them:

1. **Payload.** Every image was an unoptimized PNG — the hero jar was 513 KB at 400x639, and
   ten icons totalling ~1 MB were painted at 14-17 px. Fixed by `scripts/optimize-images.mjs`.
2. **Origin concurrency.** Shrinking the payload alone moved LCP by *nothing* (3028 -> 3164 ms).
   This host serves a single file at ~3.9 MB/s, but with ~29 concurrent HTTP/2 streams it
   collapses to ~33 KB/s — a 26 KB GSAP chunk waited 4.1 s for its first byte. Cutting the
   first-paint request set from 29 to 2 (`data-src` deferral) is what actually halved LCP.

So when tuning this site, **count requests on the critical path, not just kilobytes**. Adding one
eagerly-loaded image to the hero costs far more here than its file size suggests.

Still on the table: putting Cloudflare (free tier) in front would serve static files from the
edge and stop the origin being the bottleneck at all. Needs a DNS change, so it is the owner's
call.

## Deploy

```sh
npm run build                  # optimizes images, then builds -> dist/ (57 files / 1.6 MB)

set SUBUR_FTP_PASS=...
python scripts/ftp-deploy.py --dry-run --clean    # always look first
python scripts/ftp-deploy.py --clean
```

`--clean` deletes remote files that are no longer in `dist/`, which is how superseded PNGs and
stale hashed CSS get removed. `PROTECTED` in that script guards `cgi-bin`, `.well-known` and
`.ftpquota`. The script uploads to `/` on the FTPS host.

- Host **`ftp.suburhoney.com`**, explicit **FTPS on port 21**, passive.
  The `ftp.madinah.com.my` hostname that appears in the hosting hand-off **does not resolve** —
  do not retry it.
- User `claudesuburhoney@suburhoney.com`. The password contains `%`, `[`, `{` — pass it via an
  env var or a file, never interpolated into a shell command.
- The account is **chrooted to the docroot**: `/` is the web root. There is no `public_html`.
- Leave `cgi-bin/`, `.well-known/`, `.ftpquota` alone.
- Large PNGs can time out mid-`STOR`. The uploader must reconnect and retry, otherwise an image
  lands truncated with no error.
- **Verify by comparing `SIZE <remote>` against the local byte count for every file**, then curl
  all 7 routes. A clean STOR return value is not proof.

No `.htaccess` is deployed. Apache defaults already give `/en` → 301 → `/en/` and a real 404 on
missing paths.

## Open issue

`src/config/site.ts:1` sets `SITE_URL = "https://suburhoney.netlify.app"`. That value feeds the
canonical, hreflang and OG tags on every page, and the same domain is hardcoded in
`public/robots.txt`, `public/sitemap.xml` and `public/llms.txt`. On suburhoney.com this points
search engines at the Netlify deployment. `sitemap.xml` also lists only `/`, missing all six
locale pages. Both need fixing once the owner confirms which domain is canonical.
