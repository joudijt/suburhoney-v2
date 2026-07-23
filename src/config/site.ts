export const SITE_URL = "https://suburhoney.netlify.app";
export const SITE_NAME = "SUBUR Honey";
export const BRAND_SELLER = "Berkat Madinah Store";
export const BRAND_SELLER_URL = "https://madinah.com.my/en/";

export const SHOPEE_URL = "https://shopee.com.my/";
export const TIKTOK_SHOP_URL = "https://www.tiktok.com/ar/";

export const LOCALES = ["en", "ar", "ms"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { ogLocale: string; dir: "ltr" | "rtl"; label: string }> = {
  en: { ogLocale: "en_MY", dir: "ltr", label: "English" },
  ar: { ogLocale: "ar_MY", dir: "rtl", label: "العربية" },
  ms: { ogLocale: "ms_MY", dir: "ltr", label: "Bahasa Melayu" },
};
