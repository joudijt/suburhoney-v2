import type { Article } from "../types";

export const article: Article = {
  slug: "how-much-honey-is-safe-per-day",
  title: "How Much Honey Is Safe to Eat Per Day?",
  heading: "How much honey is a safe daily amount?",
  description:
    "How much honey per day is safe: WHO's added-sugar guideline works out to about 6 teaspoons total, from every source — not a honey-specific dose.",
  primaryKeyword: "how much honey per day",
  keywords: [
    "how much honey per day",
    "how much honey is safe to eat daily",
    "honey daily intake",
    "honey serving size",
    "how many tablespoons of honey per day",
    "safe amount of honey",
    "honey daily allowance",
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  readingMinutes: 4,
  icon: "/icons/ingrediant_01.webp",
  figureAlt:
    "Chamomile and lavender lying in warm light on a honey-coloured surface.",
  category: "Safety guide",
  blocks: [
    {
      type: "answer",
      question: "How much honey is safe to eat per day?",
      answer:
        "The World Health Organization recommends keeping free sugars — including the sugar naturally in honey — under 10% of daily energy intake, with a further conditional recommendation to go under 5% for additional benefit. 5% of a 2,000-calorie diet is about 25g, roughly 6 teaspoons, of free sugar from every source combined, not honey alone. There is no honey-specific dose in WHO's guidance — it is a whole-diet ceiling that honey shares with every other added or free sugar you eat that day.",
    },
    {
      type: "paragraph",
      text: "This question usually assumes there's a honey-specific number waiting to be found. There isn't — the actual guidance is about total sugar for the day, and honey is one entry on that day's list, not a category with its own separate allowance.",
    },
    {
      type: "heading",
      text: "What does WHO's guideline actually cover?",
      id: "who-guideline",
    },
    {
      type: "paragraph",
      text: "WHO's free-sugars guideline explicitly includes sugars naturally present in honey, syrups and fruit juice alongside sugar added to food and drink during manufacturing, cooking or at the table. The strong recommendation is under 10% of total energy intake; the conditional recommendation for additional benefit is under 5%, which works out to roughly 25g — about 6 teaspoons — for an average 2,000-calorie adult diet.",
    },
    {
      type: "table",
      caption: "What the WHO ceiling looks like in practice",
      columns: ["Sugar source that day", "Contribution to the 6-tsp ceiling"],
      rows: [
        ["1 tbsp honey (17.2g sugar)", "About 3.4 teaspoons on its own"],
        ["Sweetened drink, sauces, snacks", "Whatever their own labels list — this shares the same 6-teaspoon total"],
        ["Fruit eaten whole", "Not counted as free sugar under WHO's definition — this ceiling covers added and honey/syrup/juice sugars, not sugar inside whole fruit"],
      ],
    },
    {
      type: "heading",
      text: "How much honey is that, in tablespoons?",
      id: "in-tablespoons",
    },
    {
      type: "paragraph",
      text: "One tablespoon of honey carries about 17.2g of sugar — see <a href=\"/en/blog/honey-calories-and-sugar-content/\">honey calories and sugar content</a> for the full nutrition breakdown. That is already more than half of the 25g conditional ceiling on its own, before counting anything else eaten or drunk that day. It does not mean honey is forbidden past one spoon — it means a spoon of honey is a meaningful share of a whole day's sugar budget, worth weighing against everything else on the plate rather than treated as free.",
    },
    {
      type: "callout",
      tone: "note",
      title: "Malaysia's own guidance lands on the same number",
      text: "Malaysian public-health guidance, drawing on the same WHO figures, describes a healthy adult ceiling of about 50g (roughly 10 teaspoons) of added sugar per day at the 10% threshold, with the same further 5%/6-teaspoon benchmark for additional benefit. It is a total-diet figure, not a honey-specific one.",
    },
    {
      type: "heading",
      text: "Does this number apply to SUBUR specifically?",
      id: "not-a-subur-dose",
    },
    {
      type: "paragraph",
      text: "No. This is WHO's public guidance on total free sugar intake, reported here as background, not a SUBUR-specific serving recommendation. Nothing in this article or elsewhere on this site states a safe amount of SUBUR to eat per day — that would be inventing a figure no source publishes. What it does give you is the total-diet number your own honey habit sits inside, alongside everything else sweetened you eat that day.",
    },
    {
      type: "cta",
      heading: "Fit it into your day, not a fixed dose",
      text: "There is no honey-specific daily allowance — only a whole-diet sugar ceiling honey shares with everything else you eat. See what's actually in SUBUR's jar before deciding how it fits your own day.",
      label: "See the full ingredient list",
    },
  ],
  faqs: [
    {
      q: "How much honey is safe per day?",
      a: "WHO's free-sugars guideline recommends keeping total free sugar — including sugar naturally in honey — under 5% of daily energy for additional benefit, about 25g or 6 teaspoons for a 2,000-calorie diet. This is a whole-diet ceiling shared with every other sugar source that day, not a honey-specific dose.",
    },
    {
      q: "How many tablespoons of honey is that?",
      a: "One tablespoon of honey has about 17.2g of sugar, already more than half of the 25g conditional daily ceiling, before counting anything else. It is not a hard cap on honey specifically — it is a reminder that a spoon of honey is a meaningful share of a day's total sugar budget.",
    },
    {
      q: "Is there a specific safe amount of SUBUR per day?",
      a: "No. This site does not publish a SUBUR-specific daily serving figure, because no source supports one. The number in this article is WHO's general guidance on total added and free sugar, which applies to honey as a substance, not to any particular brand's recommended dose.",
    },
    {
      q: "Does fruit count toward this sugar ceiling?",
      a: "Not sugar inside whole fruit, no. WHO's free-sugars definition covers sugars added to food and drink plus sugars naturally present in honey, syrups and fruit juice — sugar still inside whole fruit is treated differently and is not counted toward this particular ceiling.",
    },
    {
      q: "What happens if I eat more honey than this on one day?",
      a: "No source reviewed treats a single day's excess as a specific danger — the guidance describes a general dietary pattern over time, not a daily hard limit with an immediate consequence. Public-health sugar guidance is about long-run averages, and this page reports that guidance rather than issuing a warning about any one day.",
    },
    {
      q: "Does this daily sugar limit apply differently to people with diabetes?",
      a: "This article covers the general public-health ceiling. Someone managing diabetes typically works to a more specific carbohydrate target set with a physician or dietitian — see <a href=\"/en/blog/honey-and-diabetes/\">can diabetics eat honey?</a> for how honey fits a diabetes eating plan specifically.",
    },
  ],
  related: ["honey-calories-and-sugar-content", "honey-and-diabetes", "honey-vs-sugar-which-is-healthier"],
};
