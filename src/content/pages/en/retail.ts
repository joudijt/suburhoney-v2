import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL, SHOPEE_URL, TIKTOK_SHOP_URL } from "../../../config/site";

export const page: Article = {
  slug: "retail",
  title: "Where to Buy Subur Honey in Malaysia | Retail",
  heading: "Where to Buy Subur Honey (Retail)",
  description:
    "Buy Subur Honey retail in Malaysia via Shopee, TikTok Shop or Berkat Madinah Store. Available in 250g, 400g and 500g jars. See every verified channel here.",
  primaryKeyword: "beli madu subur",
  keywords: [
    "buy subur honey",
    "beli madu subur online",
    "subur honey Shopee",
    "subur honey TikTok Shop",
    "madu subur harga",
    "Berkat Madinah Store honey",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
  readingMinutes: 4,
  icon: "/jarncap.webp",
  figureAlt:
    "A sealed jar of Subur Honey on a plain cream background.",
  category: "Retail",
  blocks: [
    {
      type: "answer",
      question: "Where can I buy Subur Honey retail?",
      answer:
        "Subur Honey is sold retail through three verified channels: our official Shopee store, our official TikTok Shop, and our official supplier Berkat Madinah Store. Jars come in 250g, 400g and 500g sizes (±5%). Buying through a listing that is not one of these three is not something we can verify or support.",
    },
    {
      type: "paragraph",
      text: "Retail is for anyone buying a jar or a few for themselves, family or friends. If you are a shop, pharmacy or reseller looking to stock Subur Honey in volume, see our <a href=\"/en/#wholesale\">wholesale programme</a> instead - the pricing and process are different.",
    },
    {
      type: "heading",
      text: "Which platforms sell Subur Honey?",
      id: "where-to-buy",
    },
    {
      type: "table",
      caption: "Verified retail channels",
      columns: ["Channel", "Best for", "Link"],
      rows: [
        ["Shopee (official store)", "Fastest checkout, Shopee vouchers and buyer protection", "Visit our Shopee store"],
        ["TikTok Shop (official store)", "Buying directly from a TikTok video or live", "Visit our TikTok Shop"],
        ["Berkat Madinah Store", "Our official supplier, with stores across Malaysia", "Visit Berkat Madinah Store"],
      ],
    },
    {
      type: "heading",
      text: "What sizes does Subur Honey come in?",
      id: "sizes",
    },
    {
      type: "list",
      items: [
        { term: "250g", text: "A starter jar, good for trying the daily habit before committing to a larger size." },
        { term: "400g", text: "The most common size for a single person's daily teaspoon routine." },
        { term: "500g", text: "Best value per gram, suited to couples taking it together or a household that goes through a jar quickly." },
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Weights are ±5%",
      text: "As printed on every label, jar weight can vary by up to 5% - normal for a raw, hand-filled honey product and not a packaging error.",
    },
    {
      type: "heading",
      text: "Is Subur Honey available outside Malaysia?",
      id: "outside-malaysia",
    },
    {
      type: "paragraph",
      text: "Right now Subur Honey ships within Malaysia through the channels above. If you are outside Malaysia, the fastest way to check current shipping options is directly through our <a href=\"" + SHOPEE_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">Shopee store</a> or <a href=\"" + TIKTOK_SHOP_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">TikTok Shop</a>, since delivery zones are managed by the platform.",
    },
    {
      type: "cta",
      heading: "Not sure which jar is right for you?",
      text: "See what is inside every jar and why, ingredient by ingredient.",
      label: "See the benefits",
    },
  ],
  faqs: [
    {
      q: "Where can I buy Subur Honey in Malaysia?",
      a: `Subur Honey is available through three verified retail channels: our official Shopee store, our official TikTok Shop, and our official supplier <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a>.`,
    },
    {
      q: "What sizes are available?",
      a: "Subur Honey comes in 250g, 400g and 500g jars, each with a weight tolerance of ±5%, printed on the label.",
    },
    {
      q: "Is there a difference between retail and wholesale pricing?",
      a: "Yes. Retail is single-jar pricing for individual buyers through Shopee, TikTok Shop or Berkat Madinah Store. Businesses buying in volume should use our wholesale enquiry form instead, which has separate bulk pricing.",
    },
    {
      q: "How do I know a Subur Honey listing is genuine?",
      a: "Only buy through our official Shopee store, our official TikTok Shop, or Berkat Madinah Store. We cannot verify the authenticity of jars sold through any other listing or seller.",
    },
    {
      q: "Does Subur Honey ship outside Malaysia?",
      a: "Shipping zones are managed by the selling platform. Check current delivery options directly on our Shopee or TikTok Shop listing before ordering.",
    },
  ],
  related: [],
};
