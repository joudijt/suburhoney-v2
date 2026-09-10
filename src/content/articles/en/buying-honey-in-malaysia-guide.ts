import type { Article } from "../types";
import { BRANCHES, BRAND_SELLER } from "../../../config/site";

export const article: Article = {
  slug: "buying-honey-in-malaysia-guide",
  title: "Honey in Malaysia: A Buyer's Guide to the Market",
  heading: "Buying honey in Malaysia: what is actually on the shelf",
  description:
    "A guide to honey in Malaysia: which honeys are sold here, what the label is required to carry, which certifications mean something, and what to check first.",
  primaryKeyword: "honey malaysia",
  keywords: [
    "honey malaysia",
    "buying honey in malaysia",
    "honey types malaysia",
    "malaysian honey standard",
    "honey label malaysia",
    "KKM autentik logo",
    "imported honey malaysia",
    "where to buy honey malaysia",
    "is malaysian honey real",
  ],
  published: "2026-09-10",
  updated: "2026-09-10",
  readingMinutes: 5,
  icon: "/jarncap.webp",
  figureAlt:
    "A jar of SUBUR honey surrounded by its ingredients: star anise, saffron, ginger, walnut, almond, honeycomb and black seed.",
  category: "Buying guide",
  blocks: [
    {
      type: "answer",
      question: "What should you know before buying honey in Malaysia?",
      answer:
        "Malaysia splits honey two ways: honey from Apis bees, and kelulut honey from stingless bees. The Food Regulations 1985 define what may be called honey and set compositional limits. Two Malaysian Standards cover quality, and the Health Ministry runs an Autentik certification scheme. Everything else on a label is marketing.",
    },
    {
      type: "heading",
      text: "What kinds of honey are sold in Malaysia?",
      id: "kinds-of-honey",
    },
    {
      type: "paragraph",
      text: "The Health Ministry's own split is a simple one: in Malaysia honey is classified by the bee species that produced it, either honey from Apis bees or kelulut honey from stingless bees. Everything else on a shelf sits inside those two categories or is imported.",
    },
    {
      type: "table",
      caption: "The bee behind the name",
      columns: ["Honey", "Bee"],
      rows: [
        ["Tualang", "Apis dorsata, on Koompassia excelsa trees"],
        ["Gelam", "Apis dorsata, from Melaleuca cajuputi, abundant in Terengganu"],
        ["Kelulut", "Stingless bees, such as Heterotrigona itama"],
      ],
    },
    {
      type: "heading",
      text: "What does the law require a honey label to carry?",
      id: "what-the-law-requires",
    },
    {
      type: "paragraph",
      text: "The Food Regulations 1985 define honey as the sugary product obtained from the comb of the honey bee, and then set compositional limits — reducing sugars, water, ash, hydroxymethylfurfural, apparent sucrose and acidity. A product that fails those limits is not compliant, whatever the front of the jar says.",
    },
    {
      type: "paragraph",
      text: "The same regulations restrict some words outright. A food label may not carry <strong>\"compounded\"</strong>, <strong>\"medicated\"</strong>, <strong>\"tonic\"</strong> or <strong>\"health\"</strong>, or words of the same significance, and no food label may claim the food is suitable for preventing, alleviating, treating or curing a condition. The specific numbers are set out in our article on <a href=\"/en/blog/is-honey-in-malaysia-fake/\">whether honey in Malaysia is fake</a>.",
    },
    {
      type: "heading",
      text: "Are there Malaysian Standards for honey?",
      id: "malaysian-standards",
    },
    {
      type: "paragraph",
      text: "Two, both published in 2025 by the Department of Standards Malaysia. MS 2782:2025 is <em>Honey (Apis sp.) — Specification</em>, and MS 2683:2025 is <em>Dehydrated kelulut (stingless bee) honey — Specification</em>, a first revision that supersedes the 2017 version. SIRIM Berhad is the appointed agent that develops and distributes them.",
    },
    {
      type: "callout",
      tone: "note",
      title: "A Malaysian Standard is voluntary",
      text: "Standards Malaysia says so directly: the use of Malaysian Standards is voluntary except where a regulatory authority makes them mandatory, and compliance does not of itself confer immunity from legal obligations. A jar that mentions a standard is telling you something useful — but not that anyone checked.",
    },
    {
      type: "heading",
      text: "Which certification marks actually mean something?",
      id: "certification-marks",
    },
    {
      type: "paragraph",
      text: "The Health Ministry's advice, published in February 2024, is to read the label and choose products carrying a Food Safety Assurance Programme logo — Autentik, MeSTI, GMP or HACCP. The Autentik scheme is the one aimed specifically at authenticity: it certifies food not mixed with any added substance beyond what the processing requires.",
    },
    {
      type: "paragraph",
      text: "As of 21 July 2025 the ministry's list of Autentik certificate holders for honey products named ten companies. At farm level, the Department of Agriculture's myGAP scheme covers beekeeping, with a public directory of apiculture and meliponiculture holdings. Our article on <a href=\"/en/blog/how-to-read-a-honey-label-malaysia/\">reading a honey label in Malaysia</a> shows where each of these appears on a jar.",
    },
    {
      type: "heading",
      text: "So what should you check first?",
      id: "what-to-check-first",
    },
    {
      type: "list",
      title: "In order, at the shelf",
      items: [
        { term: "The ingredient list", text: "The only part of a label you can verify yourself. If it is replaced by a phrase like \"exclusive blend\", you have nothing to check." },
        { term: "A Food Safety Assurance logo", text: "Autentik, MeSTI, GMP or HACCP." },
        { term: "The species or floral source", text: "A named bee or plant is a specific claim. \"Natural\" and \"original\" are not." },
        { term: "The seller", text: "A shop you can return to is worth more than any word on a jar." },
      ],
    },
    {
      type: "paragraph",
      text: `SUBUR is sold only through ${BRAND_SELLER}, at its ${BRANCHES[0].area} and ${BRANCHES[1].area} branches in Selangor or through the store's own Shopee and TikTok Shop storefronts — the four routes are set out on the <a href="/en/retail/">retail page</a>. It is a blend rather than a single-source honey; <a href="/en/blog/what-is-a-honey-blend/">what a honey blend actually is</a> explains the difference.`,
    },
    {
      type: "cta",
      heading: "Read the ingredients, not the adjectives",
      text: "See all ten ingredients named on the label, and where each of them comes from.",
      label: "See the full ingredient list",
    },
  ],
  faqs: [
    {
      q: "What does Malaysian law define honey as?",
      a: "The Food Regulations 1985 define honey as the sugary product obtained from the comb of the honey bee, and then set compositional limits covering reducing sugars, water, ash, hydroxymethylfurfural, apparent sucrose and acidity. A product outside those limits is not compliant regardless of its labelling.",
    },
    {
      q: "Which Malaysian Standards cover honey?",
      a: "MS 2782:2025, Honey (Apis sp.) — Specification, and MS 2683:2025, Dehydrated kelulut (stingless bee) honey — Specification, which is a first revision superseding the 2017 edition. Both are issued by the Department of Standards Malaysia, with SIRIM Berhad appointed as the distributing agent.",
    },
    {
      q: "What is the KKM Autentik scheme?",
      a: "It is a Health Ministry certification for authentic food, defined as food not mixed with any added substance other than what the processing of that food requires. The ministry publishes a list of certificate holders; the honey list named ten companies as of 21 July 2025.",
    },
    {
      q: "Is compliance with a Malaysian Standard compulsory?",
      a: "No. Standards Malaysia states that the use of Malaysian Standards is voluntary except so far as a regulatory authority makes them mandatory, and that compliance does not of itself confer immunity from legal obligations. The Food Regulations 1985 are the mandatory layer.",
    },
    {
      q: "Which body issues Malaysian Standards for honey?",
      a: "The Department of Standards Malaysia. It has appointed SIRIM Berhad as the agent to develop, distribute and sell Malaysian Standards, so the documents themselves are obtained through SIRIM while the standards remain the department's own publications.",
    },
    {
      q: "How much honey does Malaysia import?",
      a: "UN Comtrade figures reported by Malaysia for 2023 show imports of 3,423,650 kg of natural honey against exports of 406,484 kg. There is no published national production figure, so the share of consumption that is imported cannot be calculated honestly from these numbers alone.",
    },
  ],
  related: ["types-of-honey-in-malaysia", "is-honey-in-malaysia-fake"],
};
