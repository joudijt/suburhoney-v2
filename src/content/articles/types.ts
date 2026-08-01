import type { Locale } from "../../config/site";

/**
 * Articles are structured data, not freeform markdown.
 *
 * Two reasons. Every section then renders through a component we control, so
 * the design and the mobile behaviour cannot drift from one article to the
 * next. And the blocks that matter for machines - the answer box, the FAQ, the
 * steps - are typed, so the JSON-LD is generated from the same source the
 * reader sees instead of being maintained twice and going stale.
 */

/** The 40-60 word direct answer. Answer engines lift this; put the real answer in it, not a tease. */
export interface AnswerBlock {
  type: "answer";
  /** The question a reader actually typed, phrased their way. */
  question: string;
  /** Self-contained answer. Must make sense quoted alone, with no surrounding context. */
  answer: string;
}

export interface HeadingBlock {
  type: "heading";
  /** Phrase as a question where a reader would ask one - it wins featured snippets and AI citations. */
  text: string;
  id: string;
}

export interface ParagraphBlock {
  type: "paragraph";
  /** May contain inline <strong> and <a href> - rendered as trusted HTML, author-controlled only. */
  text: string;
}

export interface ListBlock {
  type: "list";
  ordered?: boolean;
  title?: string;
  /** item.text may contain inline <strong> and <a href> - see ParagraphBlock. */
  items: { term?: string; text: string }[];
}

export interface StepsBlock {
  type: "steps";
  title?: string;
  steps: { title: string; text: string }[];
}

/** Comparison tables. Rendered as cards on phones - a scrolling table is a bad mobile answer. */
export interface TableBlock {
  type: "table";
  caption?: string;
  columns: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: "callout";
  tone: "note" | "warning" | "tradition";
  title: string;
  /** May contain inline <strong> and <a href> - see ParagraphBlock. */
  text: string;
}

/** Reuses the ten ingredient icons already on the site. */
export interface IngredientsBlock {
  type: "ingredients";
  title?: string;
  items: { icon: string; name: string; text: string }[];
}

export interface QuoteBlock {
  type: "quote";
  text: string;
  attribution?: string;
}

export interface CtaBlock {
  type: "cta";
  heading: string;
  text: string;
  label: string;
}

export type Block =
  | AnswerBlock
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | StepsBlock
  | TableBlock
  | CalloutBlock
  | IngredientsBlock
  | QuoteBlock
  | CtaBlock;

export interface Faq {
  q: string;
  a: string;
}

export interface Article {
  /** Per-locale slug: Malay readers search Malay words, so the URL should carry them. */
  slug: string;
  title: string;
  /** Shown as the H1 when it needs to be shorter or punchier than the SEO title. */
  heading: string;
  description: string;
  /** The primary query this page is built to answer. One per article. */
  primaryKeyword: string;
  /** Secondary queries the page should also satisfy. Used for the keyword meta and internal review. */
  keywords: string[];
  published: string;
  updated: string;
  readingMinutes: number;
  /** Icon from /icons used as the card and hero motif. */
  icon: string;
  /**
   * Translated alt text for the lead image. The image itself is
   * locale-independent, so only the alt text lives here - the file and its
   * dimensions are in config/pageFigures.ts for the standalone pages (keyed by
   * slug) and config/articleFigures.ts for blog articles (keyed by the
   * canonical English slug, since blog slugs are localized). Left unset means
   * no lead image renders.
   */
  figureAlt?: string;
  category: string;
  blocks: Block[];
  faqs: Faq[];
  /** Slugs of related articles in the SAME locale. */
  related: string[];
}

export type ArticleMap = Record<Locale, Article[]>;
