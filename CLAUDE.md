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

### Routing

`/` is not a page. `public/.htaccess` 301s it to `/en/`. `src/pages/index.astro` is only a
fallback for `astro dev`/`astro preview`, where no rewrite exists.

**Do not replace that fallback with `Astro.redirect()`.** In static output there is no server to
emit an HTTP redirect, so Astro writes a stub page with a *2 second* meta refresh and a visible
link to the target — users saw the stub, clicked the link, and the pending refresh fired too.

Every URL the site emits carries a trailing slash (`/en/`, `/en/blog/`), because Apache serves
`en/index.html` and 301s `/en` to `/en/`. Canonical, hreflang and the sitemap all build their
URLs from `localeUrl()` in `src/config/site.ts` — keep them on that one helper, they drifted
apart once already.

`robots.txt` and `sitemap.xml` are **generated** (`src/pages/robots.txt.ts`,
`src/pages/sitemap.xml.ts`), not files in `public/`. Editing them by hand is how the sitemap
ended up listing a single URL on a domain the site no longer used.

### Articles

Nine guides — three topics × en/ms/ar — under `src/content/articles/{locale}/`.

They are **typed block structures, not markdown** (`types.ts`). Every block renders through
`src/components/article/Blocks.astro`, so layout cannot drift between articles, and the blocks
that matter to machines generate the JSON-LD from the same objects the reader sees. Adding a
block type means extending the union and adding a case to that component.

- **`answer` block comes first in every article.** It is the 40–60 word direct answer, and it is
  what answer engines quote. It must stand alone out of context.
- **Slugs differ per locale** on purpose — a Malay reader searches Malay words. hreflang therefore
  cannot be derived from the path, and comes from `ARTICLE_GROUPS` in
  `src/content/articles/index.ts`. Adding a translation means adding it to its group.
- The sitemap and `llms.txt`/`llms-{ar,ms}.txt` are generated from the article registry. Do not
  hand-maintain them; both went stale that way already.
- `table` blocks render twice — stacked cards below `sm`, a real table above. A sideways-scrolling
  table is a bad answer on a 375px screen.

**Content rule: no health claims.** Malaysia's Food Regulations 1985 sub-reg 18(6) prohibits food
and its advertising from claiming to prevent, treat or cure any condition, and infertility counts.
Penalty is up to RM10,000 or two years. Every article uses traditional-use framing and says so
explicitly. Do not let a future article drift into "helps you conceive".

### Reveal animations

`src/scripts/reveal.ts` observes **individual `[data-reveal]` items**, never their group.
Observing the group breaks on any group taller than the viewport, because IntersectionObserver
caps the intersection ratio at `viewportHeight / elementHeight` — an ~8000px article body can
never reach a 0.15 threshold on an 812px phone, and 15 of 25 sections stayed invisible forever.
Reduced-motion and missing IntersectionObserver both fall back to showing content immediately.
**Content must never be able to end up permanently invisible.**

### Images

`public/*.webp` is **generated output** — edit the original in `assets-src/`, then rebuild.
Target sizes live in the `TARGETS` table in `scripts/optimize-images.mjs`, each set to 2x its
largest on-screen size. `jarncap.png` is the one PNG that still ships, because social crawlers
fetch it as the Open Graph image.

Anything invisible on first paint but still inside the initial viewport uses **`data-src` instead
of `src`**, and `src/scripts/deferred-images.ts` upgrades it once the hero jar has painted. This
covers the cursor bee and the store-modal sticker — both sit inside a hidden container until a
script or a click reveals them.

**Do not "fix" that back to plain `src`.** `loading="lazy"` cannot replace it either — every one
of those elements is inside the initial viewport, so the browser would fetch it immediately.
The reason is measured, see the performance section below.

The flying-ingredients jar animation lives in the Ritual section now (`ritual-jar-motion.ts`),
not the Hero — it plays once via `IntersectionObserver` when Ritual scrolls into view, then the
jar stays put. Its images use plain `loading="lazy"` rather than `data-src`, because they're
below the fold from the start: nothing here is racing the LCP jar for bandwidth. The Hero's own
jar (`.hero-jar-static`) is now a single static sealed-jar image with no animation at all.

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
