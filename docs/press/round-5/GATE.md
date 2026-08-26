# Round 5 — gate report

18 articles, 6 topics × 3 languages (G47–G52). All checks re-run after fixes; final state below.

## Mechanical

| Check | Result |
|---|---|
| `npm run build` | ✅ clean, 116 pages (was 98) |
| `node scripts/qa/banned-terms.mjs --dir=dist` | ✅ no banned terms |
| `npm run check:ai` | ✅ AI-FACTS.yml in sync |
| Sitemap | ✅ 97 → 115 URLs, all 18 new slugs present |
| `node scripts/qa/image-audit.mjs` | ✅ clean — no overflow, all figures load at native ratio |
| Internal links (`related[]` + inline `<a href>`) | ✅ all 18 articles' links resolve to real same-locale slugs |
| Word count (custom counter, all block text + FAQ) | ✅ 776–1,059 words, all within the 800–1,000 band with ±10% tolerance |
| Custom SEO/schema gate (title/desc length, canonical, hreflang×4, og:image loads, H1, lang/dir, figure+alt, BlogPosting+FAQPage+BreadcrumbList JSON-LD) | ✅ PASS on all 18, after one probe fix — see below |

### One gate bug caught by its own control

The custom JSON-LD probe first reported all 18 new articles **and every live article checked as a control** missing `BlogPosting`/`FAQPage`/`BreadcrumbList` — 54 failures with an identical shape across every language. Before treating that as a content defect, the same probe was run against a known-good round-4 page (`en/can-babies-have-honey`) as a control: it failed identically. The probe assumed a bare array of JSON-LD objects; this site emits one `<script>` with a top-level `@graph` array. Fixed the probe, re-ran: **PASS, all 18 clean**. Zero content was touched — see [[feedback_run_a_control_before_believing_a_probe]].

## Adversarial self-review

No subagent reviewer was available this round (single-session run). Self-review checklist applied to all 18 files directly:

- **No unearned medical claims.** Grepped for cure/heal/prevent/treat/guarantee across all 6 English articles (representative of the group): every hit either reports what a named source says (Cochrane, ADA, WHO) or explicitly disclaims making the claim itself (e.g. "a claim none of the sources below actually make"). No article states a stronger verb than its source uses — "probably relieves" stays "probably relieves", never upgraded to "relieves" or "cures".
- **No product-specific health claim.** No article states or implies SUBUR itself treats, prevents, manages or reduces risk of diabetes, cough, cold or any condition. The diabetes and cough articles both carry an explicit callout that the sourced guidance describes honey generally, not any specific jar, mirroring the live pregnancy/allergy convention.
- **No price, weight or jar-size fabrication.** Grepped all 18 files for harga/price/RM/ringgit/250g/400g/500g/weight tolerance — zero hits. D26's open question (jar sizes published in llms.txt vs. absent from site.ts) is untouched by this round.
- **Numeric consistency across the three languages of each group.** The USDA 64 kcal/tbsp figure appears in all three languages of G49; the WHO 25g/6-teaspoon figure appears in all three languages of G51. No language states a different number for the same fact.
- **No cross-language translation-mirroring.** Each language's article was drafted independently with its own examples, its own internal-link targets (same-locale, verified to resolve) and its own FAQ wording — not a shared skeleton translated three ways. Structural similarity (answer → mechanism → list → callout → verdict) matches the site's own established convention for safety/comparison articles, not a round-5-specific shortcut.
- **Cannibalisation**, both against the 79 live articles and within the round: checked in `ROUND-5-MAP.md` before writing; `honey-vs-sugar-which-is-healthier` verified distinct from the live `honey-vs-gula-melaka` (white sugar vs. palm sugar — different ingredient, different intent).

## What this round does not attempt

No new photography — all 6 new figure keys reuse existing frames from the 2026-08-26 image round (`honey-in-glass`, `honey-dipper`, `spoon-close`, `board-and-nuts`, `blossom-and-light`, `table-setting`), none branded, appropriate for safety-adjacent topics. This pushes three of those frames to 3–4 shares within one language — recorded, not hidden; see `docs/press/images/INVENTORY.md`'s standing shortfall.
