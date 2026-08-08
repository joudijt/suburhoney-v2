import type { Article } from "../../articles/types";
import { BRAND_SELLER_URL } from "../../../config/site";

export const page: Article = {
  slug: "benefits",
  title: "Benefits of Subur Honey | Ten Named Ingredients for Couples",
  heading: "The Benefits of Subur Honey",
  description:
    "Why Malaysians reach for Subur Honey: ten named ingredients for fertility, vitality and daily stamina, blended into raw honeycomb with no artificial additives.",
  primaryKeyword: "manfaat madu subur honey",
  keywords: [
    "subur honey benefits",
    "khasiat madu subur",
    "honey for fertility Malaysia",
    "honey for couples benefits",
    "black seed honey vitality",
    "honey blend benefits Malaysia",
  ],
  published: "2026-07-24",
  updated: "2026-07-24",
  readingMinutes: 5,
  icon: "/icons/ingrediant_07.webp",
  figureAlt:
    "A man spooning Subur Honey from the jar, with raw honeycomb and a glass of tea on the table beside him.",
  category: "Benefits",
  blocks: [
    {
      type: "answer",
      question: "What are the benefits of Subur Honey?",
      answer:
        "Subur Honey blends raw honeycomb with nine other ingredients - black seed, saffron, ginseng, ginger, cinnamon, star anise, nutmeg, walnuts and almonds - each valued for fertility support, daily vitality and stamina. It is taken as a simple daily habit, one teaspoon on an empty stomach, rather than as a medicine.",
    },
    {
      type: "paragraph",
      text: "Subur was built around a simple idea: honey is already a trusted daily food across Malaysian households, so a jar of it is the most natural way to carry nine other ingredients people already buy one at a time. Every ingredient is <strong>named on the label</strong> - nothing hidden behind a vague \"proprietary blend\".",
    },
    {
      type: "heading",
      text: "What is Subur Honey good for?",
      id: "what-its-good-for",
    },
    {
      type: "list",
      items: [
        {
          term: "Fertility support, for him and her",
          text: "Black seed (habbatus sauda), ginseng and saffron are three of the most-searched ingredients for reproductive wellness in Malaysia, and all three sit in every jar of Subur.",
        },
        {
          term: "Daily stamina and energy",
          text: "Walnuts, almonds and cinnamon are eaten for sustained energy - the reason many households already keep them in the pantry separately.",
        },
        {
          term: "Male vitality",
          text: "Ginseng root is used for male strength and vitality, paired here with warming spices like ginger and nutmeg.",
        },
        {
          term: "A shared daily ritual for couples",
          text: "Many couples take Subur together each morning. See how <a href=\"/en/blog/honey-for-couples-malaysia/\">honey fits into a couple's daily routine</a> for the full picture.",
        },
      ],
    },
    {
      type: "heading",
      text: "Why raw honeycomb instead of processed honey?",
      id: "raw-honeycomb",
    },
    {
      type: "paragraph",
      text: "Raw honeycomb is the least processed form honey can take - nothing filtered out, nothing added in. Subur uses it as the base rather than a refined syrup, which is also why the jar naturally crystallises over time. That is a sign of a genuine raw blend, not a fault. Read more on <a href=\"/en/blog/how-to-identify-pure-honey/\">how to tell real honey from syrup</a> before you buy any jar, from us or anyone else.",
    },
    {
      type: "callout",
      tone: "warning",
      title: "What we will not claim",
      text: "Malaysia's Food Regulations 1985 prohibit any food product from being advertised as preventing, treating or curing a medical condition - infertility included. Subur is an everyday food, taken a spoon at a time. It is not a substitute for medical care, and anyone with a health concern should see a doctor.",
    },
    {
      type: "heading",
      text: "How do I take Subur Honey to get the benefit of the full blend?",
      id: "how-to-take",
    },
    {
      type: "steps",
      steps: [
        { title: "One teaspoon, empty stomach", text: "Taken first thing in the morning, before food or drink." },
        { title: "Wait around 15 minutes", text: "Then eat breakfast as usual." },
        { title: "Every day, not occasionally", text: "A daily spoon is the point. An occasional one is not the same habit." },
      ],
    },
    {
      type: "cta",
      heading: "See the full ten-ingredient blend",
      text: "Every ingredient in Subur Honey, what it is, and why it is there.",
      label: "Explore the ingredients",
    },
  ],
  faqs: [
    {
      q: "What are the main benefits of Subur Honey?",
      a: "Subur Honey combines raw honeycomb with nine other ingredients - including black seed, saffron and ginseng - valued for fertility support, daily vitality, stamina and male wellness. It is taken as a daily food, not a medicine.",
    },
    {
      q: "Is Subur Honey good for couples?",
      a: "Yes. Many couples in Malaysia take Subur together as part of a shared morning routine - honey and ingredients like black seed are taken by men and women alike.",
    },
    {
      q: "Does Subur Honey cure infertility or other conditions?",
      a: "No. Malaysian food law prohibits any food from being marketed as a cure or treatment. Subur is an everyday food, not a medical product. See a doctor for any medical concern.",
    },
    {
      q: "How is Subur Honey different from regular honey?",
      a: "Regular honey is honey alone. Subur is raw honeycomb blended with nine other named ingredients - black seed, saffron, ginger, ginseng, cinnamon, star anise, nutmeg, walnuts and almonds - chosen for couples taking it daily.",
    },
    {
      q: "Who supplies Subur Honey in Malaysia?",
      a: `Subur Honey is retailed through our partner network including <a href="${BRAND_SELLER_URL}" target="_blank" rel="noopener noreferrer">Berkat Madinah Store</a>, alongside our official Shopee and TikTok Shop channels.`,
    },
  ],
  related: [],
};
