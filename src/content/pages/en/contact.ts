import type { Article } from "../../articles/types";
import { BRANCHES, BRAND_SELLER, BRAND_SELLER_URL, SHOPEE_URL, TIKTOK_SHOP_URL, WHATSAPP_URL } from "../../../config/site";

export const page: Article = {
  slug: "contact",
  title: "Contact Subur Honey | Malaysia's Honey for Married Couples",
  heading: "Contact Subur Honey",
  description:
    "How to reach Subur Honey, a honey blend for married couples across Malaysia: WhatsApp, the two Berkat Madinah Store branches in Selangor, the store's own Shopee and TikTok Shop storefronts, and our online form for wholesale enquiries.",
  primaryKeyword: "hubungi madu subur",
  keywords: [
    "contact subur honey",
    "subur honey wholesale enquiry",
    "hubungi madu subur",
    "subur honey customer service",
    "Berkat Madinah Store branches",
    "honey for married couples Malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-08-14",
  readingMinutes: 3,
  icon: "/logo-8.webp",
  category: "Contact",
  blocks: [
    {
      type: "answer",
      question: "How can I contact Subur Honey?",
      answer:
        "Subur Honey is sold only through Berkat Madinah Store, so every route reaches the same seller: WhatsApp, either of its two Selangor branches, its own Shopee storefront and its own TikTok Shop. Use those for order and product questions, and our online form for wholesale enquiries.",
    },
    {
      type: "heading",
      text: "Where can I visit in person?",
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
      text: `Both branches are in Selangor, inside the Klang Valley. ${BRAND_SELLER} is the exclusive retailer of Subur Honey: its <a href="${SHOPEE_URL}" target="_blank" rel="noopener noreferrer">Shopee storefront</a> and its <a href="${TIKTOK_SHOP_URL}" target="_blank" rel="noopener noreferrer">TikTok Shop</a> are the same shop trading online, not separate sellers, and Subur is not stocked in supermarkets or pharmacies. To check what is on the shelf before you travel, message the store on <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>.`,
    },
    {
      type: "heading",
      text: "I run a business and want to stock Subur Honey - what next?",
      id: "wholesale-enquiries",
    },
    {
      type: "paragraph",
      text: `Wholesale enquiries go through a dedicated form, not general contact - it asks for the details needed to quote you properly the first time, rather than back-and-forth. Find it in the <a href="/en/#wholesale">wholesale section on our homepage</a>. Volume orders are supplied through ${BRAND_SELLER} as well, which handles bulk pricing and stock.`,
    },
    {
      type: "heading",
      text: "See the full picture first",
      id: "see-more",
    },
    {
      type: "list",
      items: [
        { text: "Not sure which jar size to buy? See <a href=\"/en/retail/\">where and how to buy retail</a>." },
        { text: "Curious what is actually in the blend? See the <a href=\"/en/benefits/\">full list of benefits</a>." },
        { text: "Want the brand story first? See <a href=\"/en/why-us/\">why customers choose Subur</a>." },
      ],
    },
  ],
  faqs: [
    {
      q: "How can I contact Subur Honey right now?",
      a: `Message <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">${BRAND_SELLER}</a> on <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a>, or through its own Shopee or TikTok Shop storefront, for order and product questions. It is the exclusive retailer of Subur Honey, so all of those reach the same people. For business orders, use the wholesale enquiry form on the homepage.`,
    },
    {
      q: "Where are the Berkat Madinah Store branches?",
      a: `There are two, both in Selangor: ${BRANCHES[0].area} (${BRANCHES[0].full}) and ${BRANCHES[1].area} (${BRANCHES[1].full}).`,
    },
    {
      q: "Is there a phone number or email for Subur Honey?",
      a: `<a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">WhatsApp</a> is the direct line to the store. A dedicated phone and email channel is being set up; until then WhatsApp, Shopee chat, TikTok Shop messages, the wholesale form, or simply walking into either branch are the fastest ways to reach us.`,
    },
    {
      q: "How do I ask about a wholesale or bulk order?",
      a: `Use the wholesale enquiry form in the wholesale section of our homepage. It is built specifically for business orders, and stock is supplied through ${BRAND_SELLER}, which handles bulk pricing.`,
    },
    {
      q: "Can I ask a product question before I buy?",
      a: `Yes - message ${BRAND_SELLER} on WhatsApp, or through its own Shopee or TikTok Shop storefront. Staff at either branch can answer in person too.`,
    },
  ],
  related: [],
};
