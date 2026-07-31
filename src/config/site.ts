export const SITE_URL = "https://suburhoney.com";
export const SITE_NAME = "SUBUR Honey";
export const BRAND_SELLER = "Berkat Madinah Store";
export const BRAND_SELLER_URL = "https://madinah.com.my/en/";

/**
 * Where to buy. Shopee points at the shop page rather than the single-item deep
 * link we were given, so visitors land on the full range instead of one listing.
 */
export const SHOPEE_URL = "https://shopee.com.my/arabianvillagemalaysia";
export const TIKTOK_SHOP_URL = "https://vt.tiktok.com/ZSX2MbR9G/?page=TikTokShop";

/** Social accounts belong to the parent store and are shared across its brands. */
export const INSTAGRAM_URL = "https://www.instagram.com/berkatmadinah";
export const FACEBOOK_URL = "https://www.facebook.com/share/1DMS971Fwk/";

/** Digits only, no +/spaces/dashes - the format wa.me links require. */
export const WHATSAPP_NUMBER = "601111119912";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const LOCALES = ["en", "ar", "ms"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { ogLocale: string; dir: "ltr" | "rtl"; label: string }> = {
  en: { ogLocale: "en_MY", dir: "ltr", label: "English" },
  ar: { ogLocale: "ar_MY", dir: "rtl", label: "العربية" },
  ms: { ogLocale: "ms_MY", dir: "ltr", label: "Bahasa Melayu" },
};

/** Every page that should be indexed, as a locale-less path. */
export const INDEXABLE_PATHS = ["/", "/blog/", "/benefits/", "/retail/", "/why-us/", "/contact/"] as const;

/**
 * The one place a public URL is built.
 *
 * Apache serves /en/index.html and 301s /en to /en/, so every URL we emit -
 * canonical, hreflang, sitemap - has to carry the trailing slash. Without it
 * the canonical tag pointed at a URL that immediately redirected.
 *
 * Keep canonical, hreflang and the sitemap on this single helper: they drifted
 * out of sync once already.
 */
export function localeUrl(lang: Locale, path = "/"): string {
  const suffix = path === "/" ? "/" : path;
  return `${SITE_URL}/${lang}${suffix}`;
}
