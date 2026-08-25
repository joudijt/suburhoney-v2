# PRESS Round 2 — image inventory and assignment

## Existing repo images swept first (Stage 4a)

`public/images/` (38 files pre-round-2) and `assets-src/images/` (sources) reviewed in full.

| Path | What it actually shows | Verdict for round 2 |
|---|---|---|
| `article-couples.webp` | Real photograph: a Malaysian couple in wedding/formal dress holding a SUBUR jar | Already assigned to `honey-for-couples-malaysia` / `madu-suami-isteri` / `asal-al-zawjayn` (pre-round-1). Not reusable — subject-specific, already spoken for |
| `article-black-seed.webp`, `article-pure-honey.webp` | Real photographs, product-specific | Already assigned to their own pre-round-1 articles. Not reusable |
| `page-benefits.webp`, `page-benefits-square.webp`, `page-retail.webp`, `page-why-us.webp` | Page-hero graphics for the four standalone pages | Page-specific compositions (jar + ingredients spread, branch exterior, etc.) — a mismatch for a blog article about a different topic, per the spec's "photo of a place the article is not about" rule |
| `hero-bg-*`, `ritual-bg-*` | Full-bleed decorative background layers for the homepage | Not content photography, not croppable to a 4:3 article lead figure without losing the effect they're built for |
| `honey-jar-sticker.webp`, `honey-sticker.webp`, `bee-cursor.webp`, `logo-8.webp`, `jar.webp`, `jarncap.webp` | UI/decorative assets | Not article photography |
| `article-honeycomb-honey-malaysia.webp` … `article-asal-bil-zafaran.webp` (14 files) | Round-1's own generated still-life honey jars, one per round-1 article (or shared pair for the hot-water group) | Already assigned. `article-manuka-honey-vs-local-honey.webp` (two jars side by side, no text) is the one **reused** this round — see G6 below |

**Conclusion**: nothing in the existing inventory fits an unclaimed round-2 topic without repeating a frame another article already owns. Round 2 is generation-first, same as round 1 was (D20).

## Capability probe (2026-08-25, re-run at Stage 0)

`bin/imgen.py --probe`: `zimage` dead (HTTP 401, expired token — same as round 1) · `pollinations` OK. Every round-2 image therefore generated via the `pollinations` fallback path exclusively.

## Round 2 assignment table

18 lead-image slots, 2 resolved by reuse (G6 group), 16 by generation.

| Article (lang/slug) | Image key | Source | Derived file | Real pixel size | Bytes |
|---|---|---|---|---|---|
| en/honey-with-nuts-malaysia | `honey-with-nuts-malaysia` | generated (regenerated once — see below) | `article-honey-with-nuts-malaysia.webp` | 886×665 | 20 KB |
| en/honeycomb-hantaran-gift-idea | `honeycomb-hantaran-gift-idea` | generated | `article-honeycomb-hantaran-gift-idea.webp` | 886×665 | ~24 KB |
| en/is-honey-safe-during-pregnancy | `is-honey-safe-during-pregnancy` | generated | `article-is-honey-safe-during-pregnancy.webp` | 886×665 | ~22 KB |
| en/honey-allergy-symptoms | `honey-allergy-symptoms` | generated | `article-honey-allergy-symptoms.webp` | 886×665 | ~21 KB |
| en/honey-vs-gula-melaka | `honey-vs-gula-melaka` | generated | `article-honey-vs-gula-melaka.webp` | 886×665 | ~23 KB |
| en/is-honey-vegan | `is-honey-vegan` | generated | `article-is-honey-vegan.webp` | 886×665 | ~21 KB |
| ms/beli-madu-online-atau-kedai-fizikal | same | generated | `article-beli-madu-online-atau-kedai-fizikal.webp` | 886×665 | ~22 KB |
| ms/hadiah-madu-untuk-raya | same | generated (regenerated once — see below) | `article-hadiah-madu-untuk-raya.webp` | 886×665 | 34 KB |
| ms/madu-manuka-vs-madu-tempatan-malaysia | `manuka-honey-vs-local-honey` | **REUSE** — Round 1's English Manuka hero (two plain honey jars, no text) | `article-manuka-honey-vs-local-honey.webp` | 1200×900 | 44 KB |
| ms/doorgift-madu-kahwin | same | generated | `article-doorgift-madu-kahwin.webp` | 886×665 | ~26 KB |
| ms/resepi-sarapan-guna-madu | same | generated | `article-resepi-sarapan-guna-madu.webp` | 886×665 | 27 KB |
| ms/madu-untuk-masakan | same | generated | `article-madu-untuk-masakan.webp` | 886×665 | ~25 KB |
| ar/limatha-yatfu-al-shama-fawq-al-asal | same | generated | `article-limatha-yatfu-al-shama-fawq-al-asal.webp` | 886×665 | ~23 KB |
| ar/al-farq-bayn-asal-manuka-wal-asal-al-malizi | `manuka-honey-vs-local-honey` | **REUSE** — same asset as ms3 above, via G6 | `article-manuka-honey-vs-local-honey.webp` | 1200×900 | 44 KB |
| ar/mukawwinat-khaltat-al-asal-bil-aashab | same | generated | `article-mukawwinat-khaltat-al-asal-bil-aashab.webp` | 886×665 | 31 KB |
| ar/hal-al-asal-masmuh-lil-atfal-aqal-min-sana | same | generated | `article-hal-al-asal-masmuh-lil-atfal-aqal-min-sana.webp` | 886×665 | 17 KB |
| ar/shiraa-al-asal-online-fi-malizia | same | generated | `article-shiraa-al-asal-online-fi-malizia.webp` | 886×665 | 17 KB |
| ar/hadiyat-al-asal-lil-eid | same | generated | `article-hadiyat-al-asal-lil-eid.webp` | 886×665 | 19 KB |

**Reused: 2 of 18** (both the same file, via the new G6 cross-language group). **Generated: 16 of 18.**

## Dimension note (read before the next round touches this)

Every requested generation this round was `-W 1200 -H 900`, matching round 1's convention — but `pollinations`' anonymous tier clamped every result to **886×665** (still exactly 4:3), because `zimage` was dead for the whole round and nothing fell back to it. `articleFigures.ts` declares **886×665** for all 16 generated round-2 entries, not the requested 1200×900, because the declared size must match the file on disk or the page ships a lie (round-1's own README warning, `project_avoliveoil` precedent). The two **reused** entries keep their real 1200×900, inherited from the round-1 source file. Check the real pixel size again before assuming 1200×900 in a future round — the clamp may not be constant.

## Regenerated once (quality gate, Stage 6 finding)

- **`article-honey-with-nuts-malaysia.webp`** — first generation showed a jar packed with loose, whole-looking nut/kernel chunks and no honey liquid visible, directly contradicting the article's own point (walnut/almond are ground into the blend, never whole pieces) and `FACTS-COMMON.md`. Caught by the adversarial reviewer at Stage 6, regenerated with an explicit "no whole nut pieces, honey liquid clearly visible and dominant" prompt. Second result passes.
- **`article-hadiah-madu-untuk-raya.webp`** — first generation showed green leaves/herb sprigs floating in a yellow-green liquid that did not read as honey at all. Caught in my own Stage 4 review (before Stage 6), regenerated with "no leaves, no herbs" added to the prompt. Second result passes.

## Round payload ceiling

Ceiling set before Stage 4 (matching round 1's D5): **2.5 MB** for the round's own added image bytes.
**Actual: ~347 KB** (16 generated images + 0 bytes for the 2 reused entries). Comfortably under budget.
