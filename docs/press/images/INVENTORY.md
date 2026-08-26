# Article image inventory — every lead figure comes from the site's own photography

**Round: images, 2026-08-26.** The standing ruling is **reuse only, never generate**. Rounds 1–4
shipped 50 generated article images; all 50 were deleted and every article now carries a real cut
of a photograph that was already on this site.

## The library

Ten photographs exist in `assets-src/`:

| source | size | what is in it |
|---|---|---|
| `article-pure-honey.png` | 1536×1152 | dipper over an open jar, honeycomb behind — **no branding** |
| `article-couples.png` | 1252×939 | a couple holding the jar |
| `article-black-seed.png` | 800×600 | black seed and oil — **no branding** |
| `page-benefits.png` | 1536×1024 | a man spooning honey, jar, tea, comb |
| `page-benefits-square.png` | 1024×1024 | square cut of the same photo |
| `page-retail.png` | 1536×864 | the jar alone on cream |
| `page-why-us.png` | 1536×864 | the jar ringed by its ten ingredients |
| `ritual-bg-latin.png` | 1536×1024 | couple at a table, jar, nuts, tea |
| `ritual-bg-ar.png` | 1536×1024 | the mirrored composition |
| `hero-bg-latin.png` | 1983×793 | jar, comb, nuts, wild flowers, drizzle |
| `hero-bg-ar.png` | 1264×843 | jar, lavender, ginger, comb |

`scripts/make-article-crops.mjs` cuts **18 4:3 frames** from them. Windows are in that file, in
source pixels. Nothing is upscaled; `npm run optimize:images` caps at 1536 wide and every frame is
already under it.

## What each frame carries

`scripts/assign-article-figures.mjs` owns the assignment and writes both
`src/config/articleFigures.ts` and the `figureAlt` in all three languages, so an alt can never
describe a frame that does not exist.

| file | size | keys | article groups |
|---|---|---|---|
| `article-couples.webp` | 1252×939 | 1 | honey-for-couples-malaysia |
| `article-black-seed.webp` | 800×600 | 1 | black-seed-honey-benefits |
| `article-pure-honey.webp` | 1536×1152 | 1 | how-to-identify-pure-honey |
| `figure-jar-and-comb.webp` | 1057×793 | 3 | honeycomb-honey-malaysia, limatha-yatfu-al-shama-fawq-al-asal, logo-autentik-kkm-madu |
| `figure-tea-and-comb.webp` | 768×576 | 4 | can-you-eat-honeycomb-wax, honey-in-hot-drinks-malaysia, madu-campur-air-panas, al-ma-al-sakhin-wal-asal |
| `figure-jar-alone.webp` | 1152×864 | 7 | where-to-buy-raw-honey-kuala-lumpur, beli-madu-online-atau-kedai-fizikal, how-to-store-honey-malaysia, tarikh-luput-madu, hal-lil-asal-tarikh-salahiya, bringing-honey-on-a-plane-malaysia, naql-al-asal-fi-al-taira |
| `figure-jar-and-walnuts.webp` | 800×600 | 2 | shiraa-al-asal-online-fi-malizia, is-honey-in-malaysia-fake |
| `figure-ingredients-left.webp` | 1152×864 | 3 | how-to-read-a-honey-label-malaysia, madu-saffron, asal-bil-zafaran |
| `figure-jar-and-ingredients.webp` | 1152×864 | 4 | mukawwinat-khaltat-al-asal-bil-aashab, madu-khalta, beza-madu-tulen-dan-madu-campuran, types-of-honey-in-malaysia |
| `figure-blossom-and-light.webp` | 1057×793 | 4 | al-asal-al-udwi-fi-malizia, is-malaysian-honey-local-or-imported, madu-kelulut-vs-madu-tualang, is-honey-vegan |
| `figure-honey-dipper.webp` | 1536×1152 | 5 | kelulut-honey-standard-malaysia, manuka-honey-vs-local-honey, madu-berbuih, can-babies-have-honey, hal-al-asal-masmuh-lil-atfal-aqal-min-sana |
| `figure-honey-in-glass.webp` | 940×705 | 4 | al-farq-bayn-al-asal-al-kham-wal-musaffa, what-does-raw-honey-mean, why-is-honey-dark-or-light, madu-berasing-dua-lapisan |
| `figure-jar-and-botanicals.webp` | 1124×843 | 2 | what-is-arabic-honey, idkhal-al-asal-ila-malizia |
| `figure-table-setting.webp` | 1024×768 | 3 | what-is-sidr-honey, madu-beku-dalam-peti-sejuk, hadiya-min-malizia-lil-ahl |
| `figure-spoonful.webp` | 952×714 | 3 | honey-vs-gula-melaka, madu-untuk-masakan, waktu-terbaik-makan-madu |
| `figure-board-and-nuts.webp` | 620×465 | 3 | honey-with-nuts-malaysia, tariqat-amal-asal-bil-mukassarat, honey-allergy-symptoms |
| `figure-spoon-close.webp` | 1024×768 | 2 | baking-with-honey-malaysia, resepi-sarapan-guna-madu |
| `figure-couple-at-table.webp` | 1365×1024 | 2 | honeycomb-hantaran-gift-idea, doorgift-madu-kahwin |
| `figure-couple-sharing.webp` | 1365×1024 | 2 | hadiah-madu-untuk-raya, hadiyat-al-asal-lil-eid |
| `figure-lavender-and-ginger.webp` | 700×525 | 1 | is-honey-safe-during-pregnancy |

## The shortfall, stated plainly

**18 frames against 48 article groups.** A photograph therefore carries two, three or four
articles under different crop windows, and inside a single language some frames repeat. The
assignment script prints every repeat on each run; the current count is **19 shared frames**. The
heaviest is `figure-jar-alone.webp` — four Arabic articles, three Malay, three English — because
"a jar on a plain ground" is the honest picture for buying, storage, expiry and travel alike.

This is the cost of the ruling, not a defect in it. Closing it needs **new photography**, not a
generator:

- a jar in a Malaysian kitchen (hot drinks, baking, cooking — six articles share table frames)
- a hand holding the label close (four label / regulation articles)
- honey being poured into tea (three)
- an unbranded comb on a plain ground (four comb and wax articles)

## Rules that hold for the next round

- **Open every image before assigning it.** Two of the first-pass windows came back unusable — one
  was pure bokeh with no subject, one caught an empty half of the frame instead of the still life.
  Filenames and intentions both lie; only the picture is evidence.
- **Never let the alt be written by hand.** It comes from the crop table.
- **Safety articles avoid the branded jar.** Pregnancy, infants, allergy and vegan take frames
  with no pack in them.
- **A window that slices the jar in half is a reject**, and so is one that duplicates a window
  already taken.
