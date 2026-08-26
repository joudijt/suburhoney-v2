/**
 * Assign every article lead figure to a frame cut from the site's own photos,
 * rewrite src/config/articleFigures.ts, and rewrite `figureAlt` in all three
 * languages so no article claims a picture it does not have.
 *
 * Standing ruling (2026-08-26): reuse only, never generate. Rounds 1-4 shipped
 * 50 generated frames; this replaces every one of them.
 *
 * ⛔ The library is 18 frames cut from 10 photographs, against 48 article
 *    groups. Repeats inside one language are therefore unavoidable - the script
 *    PRINTS them rather than hiding them, and they are placed on topics that
 *    sit near each other so a reader who meets the same photo twice meets it on
 *    two related pages.
 *
 * ⛔ `figureAlt` is rewritten from the frame's own description. Round 4 shipped
 *    six alts describing frames that did not exist; deriving the alt from the
 *    crop table is the only thing that makes that impossible.
 *
 *   node scripts/make-article-crops.mjs && npm run optimize:images
 *   node scripts/assign-article-figures.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const REPO = process.cwd();
const IMG = path.join(REPO, "public/images");
const LANGS = ["en", "ms", "ar"];

/** frame id -> alt text in all three languages. Written to the crop, not to the topic. */
const ALT = {
  "honey-dipper": {
    en: "A wooden dipper lifting honey over an open glass jar, with honeycomb behind it.",
    ms: "Penyendok kayu mengangkat madu di atas balang kaca terbuka, dengan sarang madu di belakangnya.",
    ar: "مغرفة خشبية ترفع العسل فوق مرطبان زجاجي مفتوح، وخلفها قرص من شمع العسل.",
  },
  "honey-in-glass": {
    en: "An open glass jar of golden honey with a wooden dipper resting in it.",
    ms: "Balang kaca terbuka berisi madu keemasan dengan penyendok kayu di dalamnya.",
    ar: "مرطبان زجاجي مفتوح مملوء بعسل ذهبي وفيه مغرفة خشبية.",
  },
  "black-seed": {
    en: "Black seeds in a wooden scoop beside a small corked bottle of dark oil.",
    ms: "Biji habbatus sauda dalam senduk kayu di sebelah botol kecil bertutup gabus berisi minyak gelap.",
    ar: "حبة البركة في مغرفة خشبية بجانب زجاجة صغيرة بسدادة فلّين فيها زيت داكن.",
  },
  spoonful: {
    en: "A man lifting a wooden spoon of honey above an open jar of SUBUR honey.",
    ms: "Seorang lelaki mengangkat sudu kayu berisi madu di atas balang madu SUBUR yang terbuka.",
    ar: "رجل يرفع ملعقة خشبية من العسل فوق مرطبان عسل سُبور مفتوح.",
  },
  "tea-and-comb": {
    en: "A glass cup of tea and a slab of honeycomb on a wooden board beside an open jar of SUBUR honey.",
    ms: "Secawan teh dan seketul sarang madu di atas papan kayu, di sebelah balang madu SUBUR yang terbuka.",
    ar: "كوب شاي زجاجي وقطعة من شمع العسل على لوح خشبي بجانب مرطبان عسل سُبور مفتوح.",
  },
  "jar-alone": {
    en: "A jar of SUBUR honey standing alone against a plain cream background.",
    ms: "Sebalang madu SUBUR berdiri sendiri di hadapan latar krim yang kosong.",
    ar: "مرطبان عسل سُبور وحده أمام خلفية كريمية سادة.",
  },
  "jar-and-ingredients": {
    en: "A jar of SUBUR honey surrounded by its ingredients: star anise, saffron, ginger, walnut, almond, honeycomb and black seed.",
    ms: "Sebalang madu SUBUR dikelilingi bahannya: bunga lawang, safron, halia, walnut, badam, sarang madu dan habbatus sauda.",
    ar: "مرطبان عسل سُبور تحيط به مكوّناته: اليانسون النجمي والزعفران والزنجبيل والجوز واللوز وشمع العسل وحبة البركة.",
  },
  "ingredients-left": {
    en: "Star anise, saffron, ginger and coffee beans arranged around a jar of SUBUR honey.",
    ms: "Bunga lawang, safron, halia dan biji kopi disusun mengelilingi sebalang madu SUBUR.",
    ar: "يانسون نجمي وزعفران وزنجبيل وحبوب بنّ موزّعة حول مرطبان عسل سُبور.",
  },
  "couple-at-table": {
    en: "A couple sharing honey at a table set with tea, nuts and a jar of SUBUR honey.",
    ms: "Sepasang suami isteri berkongsi madu di meja yang dihidang dengan teh, kacang dan sebalang madu SUBUR.",
    ar: "زوجان يتشاركان العسل على مائدة عليها شاي ومكسّرات ومرطبان عسل سُبور.",
  },
  "board-and-nuts": {
    en: "Two glass bowls of nuts and a honey dipper on a wooden board, with a hand lifting a wooden spoon above them.",
    ms: "Dua mangkuk kaca berisi kacang dan penyendok madu di atas papan kayu, dengan sebelah tangan mengangkat sudu kayu.",
    ar: "وعاءان زجاجيان من المكسّرات ومغرفة عسل على لوح خشبي، ويد ترفع ملعقة خشبية فوقهما.",
  },
  "couple-sharing": {
    en: "A couple each holding a wooden spoon beside an open jar of SUBUR honey.",
    ms: "Sepasang suami isteri masing-masing memegang sudu kayu di sebelah balang madu SUBUR yang terbuka.",
    ar: "زوجان يحمل كلٌّ منهما ملعقة خشبية بجانب مرطبان عسل سُبور مفتوح.",
  },
  "table-setting": {
    en: "A table set with a jar of SUBUR honey, bowls of nuts, a dish of honey and a cup of tea.",
    ms: "Meja yang dihidang dengan sebalang madu SUBUR, mangkuk kacang, sepinggan madu dan secawan teh.",
    ar: "مائدة عليها مرطبان عسل سُبور وأوعية مكسّرات وطبق عسل وكوب شاي.",
  },
  "jar-and-comb": {
    en: "A jar of SUBUR honey beside honeycomb and almonds, with honey drizzling from a dipper above.",
    ms: "Sebalang madu SUBUR di sebelah sarang madu dan badam, dengan madu mengalir dari penyendok di atasnya.",
    ar: "مرطبان عسل سُبور بجانب شمع العسل واللوز، والعسل ينساب من مغرفة فوقه.",
  },
  "blossom-and-light": {
    en: "Chamomile and lavender lying in warm light on a honey-coloured surface.",
    ms: "Bunga kamomil dan lavender terletak dalam cahaya hangat di atas permukaan berwarna madu.",
    ar: "بابونج وخزامى في ضوء دافئ على سطح بلون العسل.",
  },
  "jar-and-botanicals": {
    en: "A jar of SUBUR honey with honeycomb, walnuts, ginger and lavender around its base.",
    ms: "Sebalang madu SUBUR dengan sarang madu, walnut, halia dan lavender di sekeliling tapaknya.",
    ar: "مرطبان عسل سُبور وحول قاعدته شمع العسل والجوز والزنجبيل والخزامى.",
  },
  "lavender-and-ginger": {
    en: "Lavender, chamomile and sliced ginger on a warm cream surface.",
    ms: "Lavender, kamomil dan halia yang dihiris di atas permukaan krim yang hangat.",
    ar: "خزامى وبابونج وشرائح زنجبيل على سطح كريمي دافئ.",
  },
  "jar-and-walnuts": {
    en: "A jar of SUBUR honey with honeycomb, walnuts and almonds at its base and honey pouring in.",
    ms: "Sebalang madu SUBUR dengan sarang madu, walnut dan badam di tapaknya, dan madu sedang dituang masuk.",
    ar: "مرطبان عسل سُبور عند قاعدته شمع العسل والجوز واللوز، والعسل يُسكب فيه.",
  },
  "spoon-close": {
    en: "A wooden spoon of honey held close over an open jar of SUBUR honey.",
    ms: "Sudu kayu berisi madu dipegang rapat di atas balang madu SUBUR yang terbuka.",
    ar: "ملعقة خشبية من العسل مرفوعة عن قرب فوق مرطبان عسل سُبور مفتوح.",
  },
  // The three photographs that were already the site's own and stay untouched.
  couples: {
    en: "A husband and wife holding a jar of SUBUR honey between them.",
    ms: "Sepasang suami isteri memegang sebalang madu SUBUR bersama.",
    ar: "زوج وزوجة يمسكان معاً مرطبان عسل سُبور.",
  },
  "pure-honey": {
    en: "A wooden dipper lifting honey from an open jar, with honeycomb behind it.",
    ms: "Penyendok kayu mengangkat madu dari balang terbuka, dengan sarang madu di belakangnya.",
    ar: "مغرفة خشبية ترفع العسل من مرطبان مفتوح، وخلفها شمع العسل.",
  },
};

/**
 * Article group key -> frame id.
 *
 * Assigned by subject. Where a topic has no matching frame it takes the most
 * generic on-brand one rather than an invented picture, which is what the
 * ruling says an unfillable slot must do.
 */
const ASSIGN = {
  // --- the three that were already the site's own photography ---------------
  "honey-for-couples-malaysia": "couples",
  "black-seed-honey-benefits": "black-seed",
  "how-to-identify-pure-honey": "pure-honey",

  // --- comb and wax --------------------------------------------------------
  "honeycomb-honey-malaysia": "jar-and-comb",
  "can-you-eat-honeycomb-wax": "tea-and-comb",
  "limatha-yatfu-al-shama-fawq-al-asal": "jar-and-comb",

  // --- buying, labels, provenance -----------------------------------------
  "where-to-buy-raw-honey-kuala-lumpur": "jar-alone",
  "beli-madu-online-atau-kedai-fizikal": "jar-alone",
  "shiraa-al-asal-online-fi-malizia": "jar-and-walnuts",
  "how-to-read-a-honey-label-malaysia": "ingredients-left",
  "mukawwinat-khaltat-al-asal-bil-aashab": "jar-and-ingredients",
  "logo-autentik-kkm-madu": "jar-and-comb",
  "al-asal-al-udwi-fi-malizia": "blossom-and-light",
  "kelulut-honey-standard-malaysia": "honey-dipper",
  "al-farq-bayn-al-asal-al-kham-wal-musaffa": "honey-in-glass",
  "what-does-raw-honey-mean": "honey-in-glass",
  "is-malaysian-honey-local-or-imported": "blossom-and-light",
  "what-is-arabic-honey": "jar-and-botanicals",
  "madu-khalta": "jar-and-ingredients",
  "beza-madu-tulen-dan-madu-campuran": "jar-and-ingredients",

  // --- types and comparisons ----------------------------------------------
  "types-of-honey-in-malaysia": "jar-and-ingredients",
  "manuka-honey-vs-local-honey": "honey-dipper",
  "what-is-sidr-honey": "table-setting",
  "madu-kelulut-vs-madu-tualang": "blossom-and-light",
  "honey-vs-gula-melaka": "spoonful",
  "is-honey-in-malaysia-fake": "jar-and-walnuts",

  // --- what the jar looks like --------------------------------------------
  "why-is-honey-dark-or-light": "honey-in-glass",
  "madu-berbuih": "honey-dipper",
  "madu-berasing-dua-lapisan": "honey-in-glass",
  "madu-beku-dalam-peti-sejuk": "table-setting",
  "how-to-store-honey-malaysia": "jar-alone",
  "tarikh-luput-madu": "jar-alone",
  "hal-lil-asal-tarikh-salahiya": "jar-alone",

  // --- ingredients ---------------------------------------------------------
  "madu-saffron": "ingredients-left",
  "asal-bil-zafaran": "ingredients-left",
  "honey-with-nuts-malaysia": "board-and-nuts",
  "tariqat-amal-asal-bil-mukassarat": "board-and-nuts",

  // --- kitchen and everyday use -------------------------------------------
  "honey-in-hot-drinks-malaysia": "tea-and-comb",
  "madu-campur-air-panas": "tea-and-comb",
  "al-ma-al-sakhin-wal-asal": "tea-and-comb",
  "baking-with-honey-malaysia": "spoon-close",
  "madu-untuk-masakan": "spoonful",
  "resepi-sarapan-guna-madu": "spoon-close",
  "waktu-terbaik-makan-madu": "spoonful",

  // --- gifting -------------------------------------------------------------
  "honeycomb-hantaran-gift-idea": "couple-at-table",
  "doorgift-madu-kahwin": "couple-at-table",
  "hadiah-madu-untuk-raya": "couple-sharing",
  "hadiyat-al-asal-lil-eid": "couple-sharing",
  "hadiya-min-malizia-lil-ahl": "table-setting",

  // --- safety: no branded "Made for Married Couples" jar in frame ----------
  "is-honey-safe-during-pregnancy": "lavender-and-ginger",
  "can-babies-have-honey": "honey-dipper",
  "hal-al-asal-masmuh-lil-atfal-aqal-min-sana": "honey-dipper",
  "honey-allergy-symptoms": "board-and-nuts",
  "is-honey-vegan": "blossom-and-light",

  // --- travel --------------------------------------------------------------
  "bringing-honey-on-a-plane-malaysia": "jar-alone",
  "naql-al-asal-fi-al-taira": "jar-alone",
  "idkhal-al-asal-ila-malizia": "jar-and-botanicals",
};

/** frame id -> the file it lives in. The three originals keep their names. */
const FILE = (id) =>
  ({ couples: "article-couples", "pure-honey": "article-pure-honey", "black-seed": "article-black-seed" })[id] ??
  `figure-${id}`;

/* --------------------------------------------------------------- go */
const sizes = {};
for (const id of new Set(Object.values(ASSIGN))) {
  const p = path.join(IMG, `${FILE(id)}.webp`);
  if (!fs.existsSync(p)) throw new Error(`${id}: ${p} does not exist — run make-article-crops + optimize:images first`);
  const meta = await sharp(p).metadata();
  sizes[id] = { w: meta.width, h: meta.height };
  if (!ALT[id]) throw new Error(`${id}: no alt text`);
}

// --- articleFigures.ts ------------------------------------------------------
const header = `import type { PageFigure } from "./pageFigures";

/**
 * Lead images rendered under the H1 on blog articles.
 *
 * Keyed by the article's **English slug** (or its own slug for single-language
 * articles), which is what \`ARTICLE_GROUPS\` in content/articles/index.ts uses to
 * tie the three locales of one article together. Blog slugs are deliberately
 * localized, so they cannot be the key the way page slugs are in
 * \`PAGE_FIGURES\` - resolve a locale slug through \`getCanonicalSlug()\` first.
 *
 * ⛔ GENERATED FILE. Written by scripts/assign-article-figures.mjs from the crop
 *    table in scripts/make-article-crops.mjs. Edit those, not this.
 *
 * Every frame here is a real cut of a photograph that is already on this site -
 * the standing ruling of 2026-08-26 is reuse only, never generate. The library
 * is eighteen frames from ten photographs against forty-eight article groups, so
 * a photograph carries two or three articles under different crop windows; the
 * repeats are listed at the end of this file.
 *
 * The declared width/height is the file's real size. Nothing is upscaled, and
 * every frame is 4:3 because the blog card band is a fixed \`aspect-[4/3]\` with
 * \`object-cover\` and scripts/qa/image-audit.mjs fails a content image that
 * renders at a ratio other than its own.
 */
export const ARTICLE_FIGURES: Record<string, PageFigure> = {
`;

let body = "";
for (const [key, id] of Object.entries(ASSIGN)) {
  const { w, h } = sizes[id];
  body += `  "${key}": {\n    src: "/images/${FILE(id)}.webp",\n    width: ${w},\n    height: ${h},\n  },\n`;
}
fs.writeFileSync(path.join(REPO, "src/config/articleFigures.ts"), header + body + "};\n", "utf8");

// --- figureAlt in every article --------------------------------------------
const idx = fs.readFileSync(path.join(REPO, "src/content/articles/index.ts"), "utf8");
const groups = [];
const gre = /\{\s*(?:en:\s*"([^"]+)",?\s*)?(?:ms:\s*"([^"]+)",?\s*)?(?:ar:\s*"([^"]+)",?\s*)?\}/g;
let g;
while ((g = gre.exec(idx))) if (g[1] || g[2] || g[3]) groups.push({ en: g[1], ms: g[2], ar: g[3] });

const perLang = { en: {}, ms: {}, ar: {} };
let touched = 0;
for (const [key, id] of Object.entries(ASSIGN)) {
  const grp = groups.find((x) => x.en === key || x.ms === key || x.ar === key);
  const targets = [];
  for (const l of LANGS) {
    const slug = grp?.[l] ?? key;
    const p = path.join(REPO, "src/content/articles", l, `${slug}.ts`);
    if (fs.existsSync(p)) targets.push([l, slug, p]);
  }
  for (const [lang, slug, p] of targets) {
    // A Set, not an array: a group reachable under two key names would otherwise
    // report itself as sharing a frame with itself.
    (perLang[lang][id] ??= new Set()).add(slug);
    let s = fs.readFileSync(p, "utf8");
    const alt = ALT[id][lang].replace(/"/g, '\\"');
    const RE = /figureAlt:\s*\n?\s*"(?:[^"\\]|\\.)*"/;
    if (!RE.test(s)) {
      console.warn(`  ! ${lang}/${slug}: no figureAlt to replace`);
      continue;
    }
    // ⛔ The check is on the REGEX, not on `s === before`. Alias keys reach the
    // same group under two names and touch the same file twice; the second
    // write is byte-identical to the first, which is success, not failure. The
    // first version compared strings and reported twelve correct files as
    // broken - and reported them again, louder, on a clean re-run.
    s = s.replace(RE, `figureAlt:\n    "${alt}"`);
    fs.writeFileSync(p, s, "utf8");
    touched++;
  }
}

console.log(`\n${Object.keys(ASSIGN).length} figure keys -> ${new Set(Object.values(ASSIGN)).size} frames`);
console.log(`${touched} figureAlt values rewritten from the crop table\n`);

console.log("--- frames that carry more than one article IN THE SAME language ---");
let repeats = 0;
for (const lang of LANGS) {
  for (const [id, slugs] of Object.entries(perLang[lang])) {
    if (slugs.size > 1) {
      repeats++;
      console.log(`  ${lang}  ${id.padEnd(22)} ${[...slugs].join(", ")}`);
    }
  }
}
console.log(
  `\n${repeats} shared frames. The library cannot do better: 18 frames, ${Object.keys(ASSIGN).length} keys.`,
);
