import type { Article } from "../../articles/types";
import { BRANCHES, BRAND_SELLER, BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "why-us",
  title: "Why Choose Subur Honey | Ten Named Ingredients, Raw Honeycomb, Nothing Hidden",
  heading: "Why Choose Subur Honey",
  description:
    "What sets Subur Honey apart: ten named ingredients, a raw honeycomb base, no artificial additives, and a blend made for married couples - sold only through Berkat Madinah Store, a name Klang Valley families already know.",
  primaryKeyword: "kenapa pilih madu subur",
  keywords: [
    "why choose subur honey",
    "subur honey vs regular honey",
    "authentic honey blend Malaysia",
    "honest honey brand Malaysia",
    "madu asli vs madu tulen",
    "honey for married couples Malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-08-14",
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
        "Subur Honey names all ten of its ingredients on the label, uses raw honeycomb rather than a processed syrup, contains no artificial colours or flavours, and is made for married couples taking it daily. It is sold only through Berkat Madinah Store, the Arabic grocery Klang Valley families already shop at.",
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
        ["Ingredient list", "All ten named on the label", "Usually an undisclosed blend"],
        ["Additives", "None artificial", "Frequently includes artificial flavour or colour"],
        ["Crystallisation", "Expected - a sign of raw honey", "Often prevented by processing"],
      ],
    },
    {
      type: "heading",
      text: "Is Subur Honey natural, and is it vegan?",
      id: "natural-vegan",
    },
    {
      type: "list",
      items: [
        { term: "All natural", text: "Every ingredient - honeycomb, black seed, saffron, ginseng, ginger, cinnamon, star anise, nutmeg, walnuts and almonds - is a whole, natural ingredient." },
        { term: "Not vegan", text: "Honey is a bee product, and strict vegan standards exclude it, so Subur is not vegan. Every other ingredient is a plant - there is no meat, dairy, egg or gelatine in the jar." },
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
      text: `Subur Honey is sold in Malaysia exclusively through <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">${BRAND_SELLER}</a> - a full Arabic grocery with two branches in Selangor, ${BRANCHES[0].area} and ${BRANCHES[1].area}. The Shopee storefront and the TikTok Shop are that same store trading online, not other sellers, and Subur is not stocked in supermarkets or pharmacies. See our full <a href="/en/retail/">retail channels</a> before buying, and our <a href="/en/#wholesale">wholesale programme</a> if you are a business - volume orders are supplied through the same store.`,
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
      text: "Subur Honey is an everyday food, not a medicine. Malaysian food law prohibits any food from being advertised as preventing, treating or curing a condition, and we hold to that on every page of this site - not only where the law requires it.",
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
      a: "Subur names all ten ingredients on the label, uses raw honeycomb instead of processed syrup, adds no artificial colours or flavours, and tells you the whole blend rather than hiding it behind an undisclosed formula.",
    },
    {
      q: "Is Subur Honey vegan?",
      a: "No. Honey is a bee product and strict vegan standards exclude it, so we do not call Subur vegan. Every other ingredient is a plant - no meat, dairy, egg or gelatine - and there are no artificial colours, flavours or fillers.",
    },
    {
      q: "Is Subur Honey a well-known name in Malaysia?",
      a: `It sells jar after jar through a shop people already trust: ${BRAND_SELLER}, the Arabic grocery Klang Valley families come back to. Every jar reaches you through that one seller - its ${BRANCHES[0].area} branch, its ${BRANCHES[1].area} branch, its own Shopee storefront or its own TikTok Shop.`,
    },
    {
      q: "Why does Subur Honey crystallise in the jar?",
      a: "Crystallisation is expected in raw, minimally processed honey and is a sign of authenticity, not a fault. It can be softened by standing the jar in warm - never boiling - water.",
    },
    {
      q: "Does Subur Honey treat or cure any medical condition?",
      a: "No. Subur Honey is an everyday food, not a medicine, and Malaysian food law prohibits marketing any food as a cure or treatment. For medical concerns, see a doctor.",
    },
  ],
  related: [],
};
