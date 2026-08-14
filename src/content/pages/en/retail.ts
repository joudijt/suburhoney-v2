import type { Article } from "../../articles/types";
import { BRANCHES, BRAND_SELLER, BRAND_SELLER_URL, SHOPEE_URL, TIKTOK_SHOP_URL, WHATSAPP_URL } from "../../../config/site";

export const page: Article = {
  slug: "retail",
  title: "Where to Buy Subur Honey in Malaysia | Retail",
  heading: "Where to Buy Subur Honey (Retail)",
  description:
    "Subur Honey is sold only through Berkat Madinah Store - its two Selangor branches, its Shopee storefront and its TikTok Shop. Available in 250g, 400g and 500g jars.",
  primaryKeyword: "beli madu subur",
  keywords: [
    "buy subur honey",
    "beli madu subur online",
    "subur honey Shopee",
    "subur honey TikTok Shop",
    "madu subur harga",
    "Berkat Madinah Store honey",
    "Berkat Madinah Ampang",
    "Berkat Madinah Batu Caves",
    "arab store selangor",
  ],
  published: "2026-07-24",
  updated: "2026-08-14",
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
        `Subur Honey is sold exclusively through ${BRAND_SELLER}. You can buy it in person at either of its two branches in Selangor - Ampang Jaya and Batu Caves - or online from the store's own Shopee and TikTok Shop storefronts. Jars come in 250g, 400g and 500g sizes (±5%). It is not stocked in supermarkets or pharmacies.`,
    },
    {
      type: "paragraph",
      text: `One seller, four ways to reach it. ${BRAND_SELLER} is a full Arabic grocery, not a shelf in a supermarket, and it is the only retailer of Subur Honey. The four ways are its ${BRANCHES[0].area} branch, its ${BRANCHES[1].area} branch, its own Shopee storefront and its own TikTok Shop. The two storefronts are the same shop trading online - they are not other sellers, and there is no other way to buy it. WhatsApp is a contact line for questions about stock, not a purchase channel.`,
    },
    {
      type: "heading",
      text: "Where are the Berkat Madinah branches?",
      id: "branches",
    },
    {
      type: "table",
      caption: `${BRAND_SELLER} - both branches`,
      columns: ["Branch", "Address"],
      rows: BRANCHES.map((branch) => [branch.area, branch.full]),
    },
    {
      type: "paragraph",
      text: `Both branches are in Selangor, inside the Klang Valley. To check what is on the shelf before you travel, message the store on <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.`,
    },
    {
      type: "heading",
      text: "How can I buy Subur Honey online?",
      id: "where-to-buy",
    },
    {
      type: "table",
      caption: `The four ways to buy from ${BRAND_SELLER}`,
      columns: ["Channel", "Best for", "Where"],
      rows: [
        [`In store - ${BRANCHES[0].area}`, "Buying in person and seeing the jar before you pay", BRANCHES[0].full],
        [`In store - ${BRANCHES[1].area}`, "Buying in person and seeing the jar before you pay", BRANCHES[1].full],
        ["Shopee (the store's own storefront)", "Fastest checkout, Shopee vouchers and buyer protection", "Visit the Shopee storefront"],
        ["TikTok Shop (the store's own storefront)", "Buying directly from a TikTok video or live", "Visit the TikTok Shop storefront"],
      ],
    },
    {
      type: "callout",
      tone: "note",
      title: "Why the Shopee storefront says \"arabianvillagemalaysia\"",
      text: `That is ${BRAND_SELLER}'s trading name on the marketplaces - the same shop, listed under the name it sells its Arabic grocery range with. Buying there is buying from the store itself, not from a reseller.`,
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
      text: "What if I want to buy in volume?",
      id: "wholesale-supply",
    },
    {
      type: "paragraph",
      text: `Retail is for anyone buying a jar or a few for themselves, family or friends. Shops and resellers who want to carry Subur Honey are supplied through ${BRAND_SELLER} as well - exclusivity does not stop at the counter. Start with our <a href="/en/#wholesale">wholesale enquiry</a> and it is routed to the store, which handles volume pricing and stock.`,
    },
    {
      type: "heading",
      text: "Is Subur Honey available outside Malaysia?",
      id: "outside-malaysia",
    },
    {
      type: "paragraph",
      text: "Right now Subur Honey ships within Malaysia through the channels above. If you are outside Malaysia, the fastest way to check current shipping options is directly through the store's <a href=\"" + SHOPEE_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">Shopee storefront</a> or <a href=\"" + TIKTOK_SHOP_URL + "\" target=\"_blank\" rel=\"noopener noreferrer\">TikTok Shop</a>, since delivery zones are managed by the platform.",
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
      a: `Subur Honey is sold only through <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">${BRAND_SELLER}</a> - in person at ${BRANCHES[0].full}, or at ${BRANCHES[1].full}, or online from the store's own Shopee and TikTok Shop storefronts.`,
    },
    {
      q: "How many Berkat Madinah branches are there?",
      a: `Two, both in Selangor: ${BRANCHES[0].area} (${BRANCHES[0].full}) and ${BRANCHES[1].area} (${BRANCHES[1].full}).`,
    },
    {
      q: "Is Subur Honey sold in supermarkets or pharmacies?",
      a: `No. ${BRAND_SELLER} is the exclusive retailer, so the only places to buy it are the two branches and the store's own Shopee and TikTok Shop storefronts.`,
    },
    {
      q: "Are the Shopee and TikTok Shop stores run by someone else?",
      a: `No. Both storefronts belong to ${BRAND_SELLER} - "arabianvillagemalaysia" is the store's marketplace trading name, not a separate seller.`,
    },
    {
      q: "What sizes are available?",
      a: "Subur Honey comes in 250g, 400g and 500g jars, each with a weight tolerance of ±5%, printed on the label.",
    },
    {
      q: "Is there a difference between retail and wholesale pricing?",
      a: `Yes. Retail is single-jar pricing, whether you buy in branch or on the store's Shopee or TikTok Shop storefront. Businesses buying in volume should use our wholesale enquiry form, which is supplied through ${BRAND_SELLER} at separate bulk pricing.`,
    },
    {
      q: "How do I know a Subur Honey listing is genuine?",
      a: `Buy from ${BRAND_SELLER} itself - either branch, its Shopee storefront or its TikTok Shop. We cannot verify the authenticity of jars offered by any other listing or seller.`,
    },
    {
      q: "Does Subur Honey ship outside Malaysia?",
      a: "Shipping zones are managed by the selling platform. Check current delivery options directly on the store's Shopee or TikTok Shop listing before ordering.",
    },
  ],
  related: [],
};
