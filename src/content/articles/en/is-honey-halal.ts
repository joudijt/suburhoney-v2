import type { Article } from "../types";

export const article: Article = {
  slug: "is-honey-halal",
  title: "Is Honey Halal? What JAKIM Certification Actually Covers",
  heading: "Is honey halal?",
  description:
    "Is honey halal in Malaysia? What JAKIM's MS1500 standard actually checks, and why a seller stating no unprovable certificate isn't the same as denying it.",
  primaryKeyword: "is honey halal",
  keywords: [
    "is honey halal",
    "adakah madu halal",
    "halal honey malaysia",
    "JAKIM halal certification",
    "MS1500 halal standard",
    "halal certified honey brand",
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  readingMinutes: 4,
  icon: "/icons/ingrediant_09.webp",
  figureAlt:
    "A jar of SUBUR honey with honeycomb, walnuts, ginger and lavender around its base.",
  category: "Buying guide",
  blocks: [
    {
      type: "answer",
      question: "Is honey halal?",
      answer:
        "Honey itself is a bee product, not derived from an animal in the sense halal food rules are concerned with — there is no slaughter and no animal-derived processing step inherent to honey extraction. Whether a specific jar carries JAKIM certification is a separate question about that seller's paperwork, not about honey as a substance. In Malaysia, JAKIM is the sole issuer of halal certificates, audited against the MS 1500:2019 standard.",
    },
    {
      type: "paragraph",
      text: "These are two different questions that get asked as one: \"is honey halal\" (the substance) and \"is this jar certified\" (the paperwork). This page answers both, separately, because conflating them is how a shopper ends up either wrongly worried or wrongly reassured.",
    },
    {
      type: "heading",
      text: "What does JAKIM certification actually check?",
      id: "what-jakim-checks",
    },
    {
      type: "paragraph",
      text: "JAKIM (Jabatan Kemajuan Islam Malaysia) is the sole body that issues halal certificates in Malaysia, and its audits are benchmarked against Malaysian Standard MS 1500:2019, \"Halal Food — General Requirements\". For a food product, that generally means checking ingredient sourcing (no non-halal cross-contamination anywhere in the supply chain) and processing, hygiene and premises controls throughout production.",
    },
    {
      type: "list",
      title: "What a MS1500 audit looks at",
      items: [
        { term: "Ingredients", text: "Every component must be halal-sourced, with evidence, and no cross-contamination from non-halal materials." },
        { term: "Processing and hygiene", text: "Good manufacturing practice, and dedicated, clean handling, storage and equipment." },
        { term: "Certifying body", text: "JAKIM alone issues the certificate in Malaysia — no other body's mark carries the same legal standing here." },
      ],
    },
    {
      type: "heading",
      text: "Why doesn't this page just say whether SUBUR is certified?",
      id: "why-not-just-say",
    },
    {
      type: "callout",
      tone: "note",
      title: "SUBUR's own stated position",
      text: "SUBUR's ingredients are honey, honeycomb, nuts and spices — all named on the label — with no alcohol and no animal-derived ingredient other than the honey itself. This site does not publish a certificate number it cannot show you, because an unprovable number is worse than no claim at all. For certification status specifically, ask the retailer directly — Berkat Madinah, on WhatsApp.",
    },
    {
      type: "paragraph",
      text: "That is a deliberate policy, not a gap in this article. A number printed on a page proves nothing without the document behind it, and a shopper who wants to verify certification is better served by asking the seller directly than by reading a claim here that they'd still have to verify anyway.",
    },
    {
      type: "heading",
      text: "Is honey ever NOT halal?",
      id: "when-not-halal",
    },
    {
      type: "paragraph",
      text: "The substance itself is not the issue in ordinary cases — the question that actually varies is what else is in the jar. A blended product with alcohol-based flavourings, gelatine, or other animal-derived additives could raise a genuine question that pure honey wouldn't. SUBUR's own ingredient list — see the full breakdown — names everything in it, which is what lets a buyer check for exactly that kind of addition themselves rather than taking anyone's word for it.",
    },
    {
      type: "heading",
      text: "What about a foreign halal logo on an imported jar?",
      id: "foreign-logo",
    },
    {
      type: "paragraph",
      text: "Malaysia recognises some, but not all, foreign halal-certifying bodies through mutual recognition arrangements — a logo from one country doesn't automatically carry the same standing as JAKIM's mark here. If a jar is imported and carries a certification mark you don't recognise, the reliable path is the same as for a local product: ask JAKIM or the seller directly rather than assuming a foreign logo settles the question on its own.",
    },
    {
      type: "cta",
      heading: "Check the ingredients, then ask about certification",
      text: "See SUBUR's full named ingredient list. For halal certification status specifically, contact Berkat Madinah directly rather than relying on any number printed on a page.",
      label: "See the full ingredient list",
    },
  ],
  faqs: [
    {
      q: "Is honey halal?",
      a: "Honey itself is a bee product with no animal-derived processing step inherent to its extraction, and is not the kind of substance halal food rules typically restrict. Whether a specific jar is JAKIM-certified is a separate, seller-specific question.",
    },
    {
      q: "What does JAKIM halal certification check?",
      a: "JAKIM audits against Malaysian Standard MS 1500:2019, checking ingredient sourcing for halal compliance and cross-contamination risk, plus processing, hygiene and premises controls throughout production.",
    },
    {
      q: "Is SUBUR Honey halal certified?",
      a: "SUBUR's ingredients — honey, honeycomb, nuts and spices, all named on the label — contain no alcohol and no animal-derived ingredient beyond the honey itself. This site does not publish a certificate number it cannot show; for certification status, contact the retailer, Berkat Madinah, directly on WhatsApp.",
    },
    {
      q: "Can honey ever not be halal?",
      a: "Plain honey itself is not typically the issue. A blended product could raise a question if it contained alcohol-based additives, gelatine or other animal-derived ingredients — which is why checking the full ingredient list of any specific product matters more than a general rule about honey.",
    },
    {
      q: "Who certifies halal food in Malaysia?",
      a: "JAKIM (Jabatan Kemajuan Islam Malaysia) is the sole issuer of halal certificates in Malaysia, auditing against the MS 1500:2019 standard.",
    },
    {
      q: "Does SUBUR contain any animal ingredients besides honey?",
      a: "No — its stated ingredients are honey, honeycomb, nuts and spices, with no alcohol and no animal-derived component other than the honey itself. See the full ingredient list for the complete breakdown.",
    },
  ],
  related: ["honey-with-nuts-malaysia", "how-to-read-a-honey-label-malaysia", "is-honey-vegan"],
};
