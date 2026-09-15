import type { Article } from "../types";
import { BRAND_SELLER } from "../../../config/site";

export const article: Article = {
  slug: "honey-brands-in-malaysia",
  title: "Honey Brands in Malaysia: How to Compare Them",
  heading: "How do you compare honey brands in Malaysia?",
  description:
    "How to compare honey brands in Malaysia using what can actually be checked: the ingredient list, the certification logos, the species named, and the seller.",
  primaryKeyword: "honey brands malaysia",
  keywords: [
    "honey brands malaysia",
    "best honey brand malaysia",
    "how to compare honey brands",
    "honey certification malaysia",
    "MeSTI GMP HACCP logo",
    "KKM autentik honey",
    "honey brand label check",
    "kelulut honey brands",
    "buying honey online malaysia",
  ],
  published: "2026-09-10",
  updated: "2026-09-10",
  readingMinutes: 5,
  icon: "/icons/ingrediant_10.webp",
  figureAlt:
    "A jar of SUBUR honey with honeycomb, walnuts, ginger and lavender around its base.",
  category: "Buying guide",
  blocks: [
    {
      type: "answer",
      question: "How do you compare honey brands in Malaysia?",
      answer:
        "Compare only what can be checked: the full ingredient list, whether a Food Safety Assurance logo such as Autentik, MeSTI, GMP or HACCP is present, whether a bee species or floral source is named, and who the seller is. Taste, colour and price tell you nothing about authenticity.",
    },
    {
      type: "heading",
      text: "Why not just rank the brands?",
      id: "why-not-rank",
    },
    {
      type: "paragraph",
      text: "Because nobody publishes the data a ranking would need. The Health Ministry's monitoring does not name the brands that failed, and no independent Malaysian testing programme publishes brand-level results. Any list that ranks honey brands is ranking marketing, or someone's palate, and presenting it as a finding.",
    },
    {
      type: "heading",
      text: "What can you actually verify on a jar?",
      id: "what-you-can-verify",
    },
    {
      type: "table",
      caption: "Four checkable things, and what each one proves",
      columns: ["What to look at", "What it tells you"],
      rows: [
        ["Full ingredient list", "What is in the jar. The only claim you can check without equipment"],
        ["Autentik / MeSTI / GMP / HACCP logo", "That the producer holds a Health Ministry food safety or authenticity certification"],
        ["Named species or floral source", "A specific, falsifiable claim, unlike \"natural\" or \"original\""],
        ["Named seller with a physical address", "Somewhere to return to, and someone accountable for the jar"],
      ],
    },
    {
      type: "paragraph",
      text: "The Health Ministry's own advice, published in February 2024, points at the second row: read the label and choose products carrying a Food Safety Assurance Programme logo — Autentik, MeSTI, GMP or HACCP. Our guide to <a href=\"/en/blog/how-to-read-a-honey-label-malaysia/\">reading a honey label in Malaysia</a> shows where each one appears.",
    },
    {
      type: "heading",
      text: "What does the Autentik certification mean?",
      id: "autentik-meaning",
    },
    {
      type: "paragraph",
      text: "It is the Health Ministry scheme aimed specifically at authenticity, and it certifies food that is not mixed with any added substance other than what the processing of that food requires. As of 21 July 2025 the ministry's published list of Autentik certificate holders for honey products named ten companies.",
    },
    {
      type: "callout",
      tone: "note",
      title: "A certification is a floor, not a ranking",
      text: "Holding Autentik, MeSTI, GMP or HACCP tells you a producer met a defined requirement. It does not rank one certified brand above another, and its absence is not proof of anything either — many small producers simply have not applied. Use it to narrow a shortlist, not to pick a winner.",
    },
    {
      type: "heading",
      text: "Do the words on the front of the jar help?",
      id: "words-on-the-front",
    },
    {
      type: "paragraph",
      text: "Mostly not, and some of them are restricted. A Malaysian food label may not carry <strong>\"compounded\"</strong>, <strong>\"medicated\"</strong>, <strong>\"tonic\"</strong> or <strong>\"health\"</strong>, or words of the same significance. The word <strong>\"pure\"</strong> is restricted too: it may only be used where the food meets the prescribed standard and is free from any added substance beyond those essential to processing.",
    },
    {
      type: "heading",
      text: "Does where you buy it matter more than the brand?",
      id: "where-you-buy",
    },
    {
      type: "paragraph",
      text: "Often, yes. A seller with a physical shop you can walk back into carries a reputational cost that an anonymous marketplace listing does not. It also narrows the supply chain: fewer hands between the producer and you means fewer points at which a jar can be substituted.",
    },
    {
      type: "paragraph",
      text: `SUBUR is a worked example of the narrow version: it is sold only through ${BRAND_SELLER}, its two Selangor branches and the store's own two marketplace storefronts, with no other retailer anywhere. The four routes are listed on the <a href="/en/retail/">retail page</a>. For the market as a whole, see <a href="/en/blog/buying-honey-in-malaysia-guide/">the guide to buying honey in Malaysia</a>.`,
    },
    {
      type: "cta",
      heading: "Compare the label, not the adjectives",
      text: "See all ten ingredients named on this jar, so you have something concrete to hold the next one against.",
      label: "See the full ingredient list",
    },
  ],
  faqs: [
    {
      q: "Which honey brand is best in Malaysia?",
      a: "No honest answer exists, because no brand-level testing data is published. The Health Ministry's monitoring does not name the products that failed, and no independent Malaysian programme publishes brand comparisons. Compare the ingredient list, the certification logos and the seller instead.",
    },
    {
      q: "What is the KKM Autentik certification?",
      a: "It is a Health Ministry scheme certifying authentic food, defined as food not mixed with any added substance other than what the processing of that food requires. The ministry publishes its certificate holders; the honey list named ten companies as of 21 July 2025.",
    },
    {
      q: "Does the absence of a certification logo mean a honey is fake?",
      a: "No. Certification schemes are voluntary and cost money to obtain, so many small producers have never applied. A logo narrows a shortlist by confirming a producer met a defined requirement; its absence is not evidence in either direction.",
    },
    {
      q: "Can a honey label legally say \"pure\"?",
      a: "Only in limited circumstances. The Food Regulations 1985 restrict the word to a food that meets the strength, purity or quality prescribed by the regulations and is free from any added substance apart from those essential in processing. It is not a word a producer may simply choose.",
    },
    {
      q: "What logos should I look for on a Malaysian honey jar?",
      a: "The Health Ministry advised consumers in February 2024 to read the label and choose food products carrying a Food Safety Assurance Programme logo: Autentik, MeSTI, GMP or HACCP. Autentik is the one aimed specifically at authenticity rather than at general food safety.",
    },
    {
      q: "Does buying from a physical shop reduce the risk?",
      a: "It shortens the supply chain and gives you somewhere to return to, which are both real advantages. It does not verify the honey itself. The checks on the label still apply, and a shop you trust is a complement to them rather than a replacement.",
    },
  ],
  related: ["how-to-read-a-honey-label-malaysia", "buying-honey-in-malaysia-guide"],
};
