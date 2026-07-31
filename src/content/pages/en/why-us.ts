import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "why-us",
  title: "Why Choose Subur Honey | Traditional Recipe, Transparent Ingredients",
  heading: "Why Choose Subur Honey",
  description:
    "What sets Subur Honey apart: ten named ingredients, raw honeycomb base, no artificial additives, and a traditional Middle Eastern recipe made for married couples and trusted by thousands of Malaysian households.",
  primaryKeyword: "kenapa pilih madu subur",
  keywords: [
    "why choose subur honey",
    "subur honey vs regular honey",
    "authentic honey blend Malaysia",
    "traditional honey brand Malaysia",
    "madu asli vs madu tulen",
    "honey for married couples Malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
  readingMinutes: 5,
  icon: "/images/honey-sticker.webp",
  figureAlt:
    "A jar of Subur Honey surrounded by the ten ingredients blended into it, including star anise, saffron, cinnamon, black seed and raw honeycomb.",
  category: "Our Story",
  blocks: [
    {
      type: "answer",
      question: "Why choose Subur Honey over another jar on the shelf?",
      answer:
        "Subur Honey names all ten of its ingredients on the label, uses raw honeycomb rather than a processed syrup, contains no artificial colours or flavours, and follows a Middle Eastern recipe made for married couples and built on generations of traditional use rather than a marketing trend. It is trusted by more than 5,000 customers across Malaysia.",
    },
    {
      type: "paragraph",
      text: "Malaysia's shelves are full of honey blends that promise a great deal and disclose very little. Subur was built the other way round: say less, show more. Every ingredient is named, every claim is one we can stand behind under Malaysian food law, and the base is raw honeycomb rather than a filtered syrup that only looks like honey.",
    },
    {
      type: "heading",
      text: "What makes Subur Honey different from regular honey?",
      id: "different-from-regular",
    },
    {
      type: "table",
      caption: "Subur Honey vs. a typical processed honey blend",
      columns: ["", "Subur Honey", "Typical processed blend"],
      rows: [
        ["Base", "Raw honeycomb", "Filtered, heat-treated syrup"],
        ["Ingredients", "10, all named on the label", "Often an unlisted \"proprietary blend\""],
        ["Additives", "None artificial", "Frequently includes artificial flavour or colour"],
        ["Recipe origin", "Traditional Middle Eastern", "Usually undisclosed"],
        ["Crystallisation", "Expected - a sign of raw honey", "Often prevented by processing"],
      ],
    },
    {
      type: "heading",
      text: "Is Subur Honey natural and vegan?",
      id: "natural-vegan",
    },
    {
      type: "list",
      items: [
        { term: "All natural", text: "Every ingredient - honeycomb, black seed, saffron, ginseng, ginger, cinnamon, star anise, nutmeg, walnuts and almonds - is a whole, natural ingredient." },
        { term: "Vegan", text: "Subur contains no animal-derived ingredients beyond the honey itself." },
        { term: "No artificial additives", text: "No artificial colours, no artificial flavours, no fillers." },
      ],
    },
    {
      type: "heading",
      text: "Who is behind Subur Honey?",
      id: "who-is-behind-it",
    },
    {
      type: "paragraph",
      text: `Subur Honey is retailed in Malaysia through <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a>, alongside our own official Shopee and TikTok Shop channels. See our full <a href="/en/retail/">retail channels</a> before buying, and our <a href="/en/#wholesale">wholesale programme</a> if you are a business.`,
    },
    {
      type: "quote",
      text: "Say less, show more. Every ingredient named, every jar the same recipe.",
      attribution: "The idea Subur is built on",
    },
    {
      type: "callout",
      tone: "warning",
      title: "What we do not claim",
      text: "Subur Honey is a traditional daily food, not a medicine. Malaysian food law prohibits any food from being advertised as preventing, treating or curing a condition, and we hold to that on every page of this site - not only where the law requires it.",
    },
    {
      type: "cta",
      heading: "See what is inside the jar",
      text: "Ten ingredients, each one named and explained.",
      label: "See the ingredients",
    },
  ],
  faqs: [
    {
      q: "What makes Subur Honey different from other honey brands in Malaysia?",
      a: "Subur names all ten ingredients on the label, uses raw honeycomb instead of processed syrup, adds no artificial colours or flavours, and is built on a traditional Middle Eastern recipe rather than an undisclosed formula.",
    },
    {
      q: "Is Subur Honey genuinely natural and vegan?",
      a: "Subur Honey is made entirely from natural ingredients with no animal-derived additions beyond the honey itself, and contains no artificial colours, flavours or fillers.",
    },
    {
      q: "How many customers trust Subur Honey?",
      a: "Subur Honey is trusted by more than 5,000 customers across Malaysia, sold through our official Shopee and TikTok Shop channels and our official supplier Berkat Madinah Store.",
    },
    {
      q: "Why does Subur Honey crystallise in the jar?",
      a: "Crystallisation is expected in raw, minimally processed honey and is a sign of authenticity, not a fault. It can be softened by standing the jar in warm - never boiling - water.",
    },
    {
      q: "Does Subur Honey treat or cure any medical condition?",
      a: "No. Subur Honey is a traditional daily food, not a medicine, and Malaysian food law prohibits marketing any food as a cure or treatment. For medical concerns, see a doctor.",
    },
  ],
  related: [],
};
