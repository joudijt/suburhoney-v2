import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "contact",
  title: "Contact Subur Honey | Malaysia's Honey for Married Couples",
  heading: "Contact Subur Honey",
  description:
    "How to reach Subur Honey, the honey blend for married couples across Malaysia: retail questions via Shopee and TikTok Shop, wholesale enquiries via our online form, and support through our official supplier Berkat Madinah Store.",
  primaryKeyword: "hubungi madu subur",
  keywords: [
    "contact subur honey",
    "subur honey wholesale enquiry",
    "hubungi madu subur",
    "subur honey customer service",
    "honey for married couples Malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
  readingMinutes: 3,
  icon: "/logo-8.webp",
  category: "Contact",
  blocks: [
    {
      type: "answer",
      question: "How can I contact Subur Honey?",
      answer:
        "Subur Honey is the honey blend made for married couples across Malaysia. The fastest ways to reach us are our official Shopee and TikTok Shop channels for order and product questions, our online form for wholesale enquiries, and our official supplier Berkat Madinah Store. You can also message us directly on WhatsApp.",
    },
    {
      type: "heading",
      text: "I run a business and want to stock Subur Honey - what next?",
      id: "wholesale-enquiries",
    },
    {
      type: "paragraph",
      text: "Wholesale enquiries go through a dedicated form, not general contact - it asks for the details our team needs to quote you properly the first time, rather than back-and-forth. Find it in the <a href=\"/en/#wholesale\">wholesale section on our homepage</a>.",
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
      a: `Message us through our official Shopee or TikTok Shop for order and product questions, use the wholesale enquiry form on the homepage for business orders, or reach our official supplier <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a> directly.`,
    },
    {
      q: "Is there a phone number or email for Subur Honey?",
      a: "A dedicated phone and email contact channel is being set up. Until then, Shopee chat, TikTok Shop messages, the wholesale form and Berkat Madinah Store are the fastest ways to reach us.",
    },
    {
      q: "How do I ask about a wholesale or bulk order?",
      a: "Use the wholesale enquiry form in the wholesale section of our homepage. It is built specifically for business orders so our team can quote you accurately.",
    },
    {
      q: "Can I ask a product question before I buy?",
      a: "Yes - message our official Shopee or TikTok Shop store directly, or reach out to our official supplier Berkat Madinah Store.",
    },
  ],
  related: [],
};
