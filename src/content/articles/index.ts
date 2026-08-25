import type { Locale } from "../../config/site";
import type { Article } from "./types";

import { article as enCouples } from "./en/honey-for-couples-malaysia";
import { article as enBlackSeed } from "./en/black-seed-honey-benefits";
import { article as enPure } from "./en/how-to-identify-pure-honey";
import { article as enComb } from "./en/honeycomb-honey-malaysia";
import { article as enWax } from "./en/can-you-eat-honeycomb-wax";
import { article as enWhereToBuy } from "./en/where-to-buy-raw-honey-kuala-lumpur";
import { article as enTypes } from "./en/types-of-honey-in-malaysia";
import { article as enStorage } from "./en/how-to-store-honey-malaysia";
import { article as enManuka } from "./en/manuka-honey-vs-local-honey";
import { article as enOrigin } from "./en/is-malaysian-honey-local-or-imported";

// Round 2 (2026-08-25).
import { article as enHoneyNuts } from "./en/honey-with-nuts-malaysia";
import { article as enHantaran } from "./en/honeycomb-hantaran-gift-idea";
import { article as enPregnancy } from "./en/is-honey-safe-during-pregnancy";
import { article as enAllergy } from "./en/honey-allergy-symptoms";
import { article as enGulaMelaka } from "./en/honey-vs-gula-melaka";
import { article as enVegan } from "./en/is-honey-vegan";

import { article as msCouples } from "./ms/madu-suami-isteri";
import { article as msBlackSeed } from "./ms/habbatus-sauda-dan-madu";
import { article as msPure } from "./ms/cara-kenal-madu-asli";
import { article as msComb } from "./ms/sarang-madu-boleh-dimakan";
import { article as msCrystallised } from "./ms/madu-beku-dalam-peti-sejuk";
import { article as msBlend } from "./ms/beza-madu-tulen-dan-madu-campuran";
import { article as msFoam } from "./ms/madu-berbuih";
import { article as msRitual } from "./ms/waktu-terbaik-makan-madu";
import { article as msHotWater } from "./ms/madu-campur-air-panas";
import { article as msShops } from "./ms/kedai-madu-asli-selangor";

// Round 2 (2026-08-25).
import { article as msOnlineOrShop } from "./ms/beli-madu-online-atau-kedai-fizikal";
import { article as msRaya } from "./ms/hadiah-madu-untuk-raya";
import { article as msManuka } from "./ms/madu-manuka-vs-madu-tempatan-malaysia";
import { article as msDoorgift } from "./ms/doorgift-madu-kahwin";
import { article as msSarapan } from "./ms/resepi-sarapan-guna-madu";
import { article as msMasakan } from "./ms/madu-untuk-masakan";

import { article as arCouples } from "./ar/asal-al-zawjayn";
import { article as arBlackSeed } from "./ar/habbat-al-barakah-wal-asal";
import { article as arPure } from "./ar/kayfa-tamiz-al-asal-al-asli";
import { article as arWhereToBuy } from "./ar/ayna-ashtari-asal-fi-kuala-lumpur";
import { article as arWax } from "./ar/tariqat-akl-al-asal-bil-shama";
import { article as arStorage } from "./ar/hifz-al-asal-fi-al-jaw-al-ratb";
import { article as arMalaysian } from "./ar/al-asal-al-malizi";
import { article as arExpiry } from "./ar/hal-lil-asal-tarikh-salahiya";
import { article as arHotWater } from "./ar/al-ma-al-sakhin-wal-asal";
import { article as arSaffron } from "./ar/asal-bil-zafaran";

// Round 2 (2026-08-25).
import { article as arFloat } from "./ar/limatha-yatfu-al-shama-fawq-al-asal";
import { article as arManuka } from "./ar/al-farq-bayn-asal-manuka-wal-asal-al-malizi";
import { article as arIngredients } from "./ar/mukawwinat-khaltat-al-asal-bil-aashab";
import { article as arInfant } from "./ar/hal-al-asal-masmuh-lil-atfal-aqal-min-sana";
import { article as arOnlineBuy } from "./ar/shiraa-al-asal-online-fi-malizia";
import { article as arEidGift } from "./ar/hadiyat-al-asal-lil-eid";


// Round 3 (2026-08-25).
import { article as enFakeHoney } from "./en/is-honey-in-malaysia-fake";
import { article as enSidr } from "./en/what-is-sidr-honey";
import { article as enHotDrinks } from "./en/honey-in-hot-drinks-malaysia";
import { article as enBaking } from "./en/baking-with-honey-malaysia";
import { article as enLabel } from "./en/how-to-read-a-honey-label-malaysia";
import { article as enColour } from "./en/why-is-honey-dark-or-light";

// Round 3 (2026-08-25).
import { article as msExpiry } from "./ms/tarikh-luput-madu";
import { article as msKelulutTualang } from "./ms/madu-kelulut-vs-madu-tualang";
import { article as msKhalta } from "./ms/madu-khalta";
import { article as msPregnancy } from "./ms/madu-untuk-ibu-mengandung";
import { article as msColour } from "./ms/kenapa-madu-jadi-gelap";
import { article as msSaffron } from "./ms/madu-saffron";

// Round 3 (2026-08-25).
import { article as arSidr } from "./ar/al-farq-bayn-asal-al-sidr-wal-asal-al-malizi";
import { article as arFlight } from "./ar/naql-al-asal-fi-al-taira";
import { article as arRawFiltered } from "./ar/al-farq-bayn-al-asal-al-kham-wal-musaffa";
import { article as arLabel } from "./ar/qiraat-mulsaq-al-asal-fi-malizia";
import { article as arNutsRecipe } from "./ar/tariqat-amal-asal-bil-mukassarat";
import { article as arGiftHome } from "./ar/hadiya-min-malizia-lil-ahl";
/** Newest first - this is the order the blog index renders. */
export const ARTICLES: Record<Locale, Article[]> = {
  en: [
    enFakeHoney,
    enSidr,
    enHotDrinks,
    enBaking,
    enLabel,
    enColour,
    enHoneyNuts,
    enHantaran,
    enPregnancy,
    enAllergy,
    enGulaMelaka,
    enVegan,
    enComb,
    enWax,
    enWhereToBuy,
    enTypes,
    enStorage,
    enManuka,
    enOrigin,
    enCouples,
    enBlackSeed,
    enPure,
  ],
  ms: [
    msExpiry,
    msKelulutTualang,
    msKhalta,
    msPregnancy,
    msColour,
    msSaffron,
    msOnlineOrShop,
    msRaya,
    msManuka,
    msDoorgift,
    msSarapan,
    msMasakan,
    msComb,
    msCrystallised,
    msBlend,
    msFoam,
    msRitual,
    msHotWater,
    msShops,
    msCouples,
    msBlackSeed,
    msPure,
  ],
  ar: [
    arSidr,
    arFlight,
    arRawFiltered,
    arLabel,
    arNutsRecipe,
    arGiftHome,
    arFloat,
    arManuka,
    arIngredients,
    arInfant,
    arOnlineBuy,
    arEidGift,
    arWhereToBuy,
    arWax,
    arStorage,
    arMalaysian,
    arExpiry,
    arHotWater,
    arSaffron,
    arCouples,
    arBlackSeed,
    arPure,
  ],
};

/**
 * The same article in more than one language, keyed by locale.
 *
 * Slugs are deliberately different per locale - a Malay reader searches Malay
 * words, so /ms/blog/madu-suami-isteri earns the click that
 * /ms/blog/honey-for-couples-malaysia would not. That means hreflang cannot be
 * derived from the slug, so the translations are declared here instead.
 *
 * A group is a claim that two URLs are the same page in different languages.
 * Most of round 1 is NOT grouped, and that is deliberate rather than an
 * oversight: the three languages were researched separately and they want
 * different things. Malay searchers arrive holding a jar and worrying about
 * crystals and foam; Arabic searchers want to know where a shop is and what to
 * do with the wax; English searchers are comparing categories. Only where the
 * same question has real demand in more than one language does a group exist -
 * and even then each article is written from its own language's research, not
 * translated.
 *
 * An article in no group builds fine. It simply gets no hreflang alternates,
 * which is the honest signal for content that exists in one language only.
 */
export const ARTICLE_GROUPS: Record<Locale, string>[] = [
  { en: "honey-for-couples-malaysia", ms: "madu-suami-isteri", ar: "asal-al-zawjayn" },
  { en: "black-seed-honey-benefits", ms: "habbatus-sauda-dan-madu", ar: "habbat-al-barakah-wal-asal" },
  { en: "how-to-identify-pure-honey", ms: "cara-kenal-madu-asli", ar: "kayfa-tamiz-al-asal-al-asli" },

  // Round 1. G1 comb and wax, G2 buying in person: all three languages ask it.
  { en: "can-you-eat-honeycomb-wax", ms: "sarang-madu-boleh-dimakan", ar: "tariqat-akl-al-asal-bil-shama" },
  {
    en: "where-to-buy-raw-honey-kuala-lumpur",
    ms: "kedai-madu-asli-selangor",
    ar: "ayna-ashtari-asal-fi-kuala-lumpur",
  },

  // Round 2. G6: the Manuka-vs-local comparison, researched independently in
  // all three languages (the English piece is Round 1's, the other two are
  // Round 2's own demand findings) but answering the same core question, so it
  // earns hreflang like any other three-language group.
  {
    en: "manuka-honey-vs-local-honey",
    ms: "madu-manuka-vs-madu-tempatan-malaysia",
    ar: "al-farq-bayn-asal-manuka-wal-asal-al-malizi",
  },
] as Record<Locale, string>[];

/**
 * Two-language groups, kept separate from the three-language list above only
 * for readability - they are concatenated below and behave identically.
 *
 * G3 honey and hot water: Malay and Arabic searchers both ask it, English ones
 * do not. G4 storage in a tropical climate and G5 what "Malaysian honey" means:
 * English and Arabic, not Malay - the Malay demand goes to crystallisation and
 * foam instead, which are their own articles.
 */
const PARTIAL_GROUPS = [
  { ms: "madu-campur-air-panas", ar: "al-ma-al-sakhin-wal-asal" },
  { en: "how-to-store-honey-malaysia", ar: "hifz-al-asal-fi-al-jaw-al-ratb" },
  { en: "types-of-honey-in-malaysia", ar: "al-asal-al-malizi" },
  { en: "what-is-sidr-honey", ar: "al-farq-bayn-asal-al-sidr-wal-asal-al-malizi" }, // G7
  { en: "why-is-honey-dark-or-light", ms: "kenapa-madu-jadi-gelap" }, // G8
  { ms: "tarikh-luput-madu", ar: "hal-lil-asal-tarikh-salahiya" }, // G9
  { en: "is-honey-safe-during-pregnancy", ms: "madu-untuk-ibu-mengandung" }, // G10
  { ms: "madu-saffron", ar: "asal-bil-zafaran" }, // G11
  { en: "how-to-read-a-honey-label-malaysia", ar: "qiraat-mulsaq-al-asal-fi-malizia" }, // G12
] as Partial<Record<Locale, string>>[];

const GROUPS = [...ARTICLE_GROUPS, ...PARTIAL_GROUPS] as Partial<Record<Locale, string>>[];

export function getArticles(lang: Locale): Article[] {
  return ARTICLES[lang] ?? [];
}

export function getArticle(lang: Locale, slug: string): Article | undefined {
  return getArticles(lang).find((a) => a.slug === slug);
}

/** The equivalent slug in every other locale, for hreflang and the language switcher. */
export function getTranslations(lang: Locale, slug: string): Partial<Record<Locale, string>> {
  return GROUPS.find((g) => g[lang] === slug) ?? {};
}

/**
 * The English slug of whichever group this article belongs to - the one stable
 * id an article has across locales, since the slugs themselves are localized.
 * Used to look a shared, language-independent asset up once instead of
 * repeating it in all three content files.
 *
 * Returns undefined for an article that is in no group, and for a group with no
 * English member (G3, hot water, is Malay and Arabic only). Callers resolving an
 * asset must fall back to the article's own slug rather than dropping the asset
 * - see ARTICLE_FIGURES.
 */
export function getCanonicalSlug(lang: Locale, slug: string): string | undefined {
  return GROUPS.find((g) => g[lang] === slug)?.en;
}

/**
 * The key an article's shared assets are filed under: the group's English slug
 * where one exists, otherwise the article's own slug. One place, so the blog
 * index and the article page cannot disagree about which image a card shows.
 */
export function getAssetKey(lang: Locale, slug: string): string {
  return getCanonicalSlug(lang, slug) ?? slug;
}
