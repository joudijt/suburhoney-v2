import {
  SITE_URL,
  SITE_NAME,
  BRAND_SELLER,
  BRAND_SELLER_URL,
  BRANCHES,
  WHATSAPP_NUMBER,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  SHOPEE_URL,
  TIKTOK_SHOP_URL,
} from "./site";

/**
 * The seller, as structured data.
 *
 * SUBUR Honey is sold only through Berkat Madinah. The two physical branches
 * and the store's own Shopee and TikTok Shop storefronts are one seller, not
 * four channels, so they share a single set of `sameAs` profiles and hang off
 * one parent organisation.
 *
 * Built here rather than inline in a component because two graphs need it -
 * the default graph in SEO.astro and the Retail page's own override - and a
 * second hand-written copy is a second thing to go stale.
 */
export const SELLER_ID = `${SITE_URL}/#berkat-madinah`;

export const SELLER_SAME_AS = [
  BRAND_SELLER_URL,
  SHOPEE_URL,
  TIKTOK_SHOP_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
];

export const branchId = (id: string) => `${SITE_URL}/#store-${id}`;

/** The product, as one entity referenced from several graphs. */
export const PRODUCT_ID = `${SITE_URL}/#product`;

/**
 * One LocalBusiness per branch, generated from BRANCHES so the schema cannot
 * drift from the Retail page.
 *
 * Deliberately absent: openingHours, geo, priceRange, aggregateRating. None
 * were supplied by the owner, and a wrong coordinate or an invented rating is
 * worse for the listing than an absent property - see FORGE-SPEC D3/D11.
 *
 * `telephone` and `sameAs` are deliberately absent too, and moved up to the
 * parent Organization. The owner supplied one WhatsApp number and one set of
 * profiles for the business, not one per location; repeating them here asserts
 * that this number reaches this branch and that this Instagram account *is*
 * this branch, neither of which anyone verified. It also made the two nodes
 * differ in `address` alone, which is how two locations of one chain get
 * merged into one entity. What separates them now is what the owner actually
 * gave us: a distinct @id, a distinct name and a distinct address.
 */
export const BRANCH_NODES = BRANCHES.map((branch) => ({
  "@type": ["LocalBusiness", "GroceryStore"],
  "@id": branchId(branch.id),
  name: `${BRAND_SELLER} — ${branch.area}`,
  url: BRAND_SELLER_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: branch.street,
    addressLocality: branch.locality,
    postalCode: branch.postcode,
    addressRegion: branch.region,
    addressCountry: "MY",
  },
  parentOrganization: { "@id": SELLER_ID },
}));

export const SELLER_NODE = {
  "@type": "Organization",
  "@id": SELLER_ID,
  name: BRAND_SELLER,
  url: BRAND_SELLER_URL,
  /* The one number the owner gave for the business, held once, here. */
  telephone: `+${WHATSAPP_NUMBER}`,
  sameAs: SELLER_SAME_AS,
  location: BRANCHES.map((branch) => ({ "@id": branchId(branch.id) })),
  /**
   * Carries the product-to-seller link that used to live on `Product.offers`.
   *
   * The Product node has no `offers` any more: an AggregateOffer must carry
   * `lowPrice` or `price`/`priceSpecification`, no price was supplied, and
   * inventing one is a checkable falsehood (FORGE-SPEC D9). An invalid offer
   * makes the whole Product node ineligible, so it is gone rather than faked.
   *
   * An OfferCatalog states "this store's range includes this product" without
   * an Offer and therefore without a price, which keeps the relationship the
   * `seller` reference expressed and costs nothing if Google ignores it.
   */
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/#catalog`,
    name: `${SITE_NAME} at ${BRAND_SELLER}`,
    itemListElement: [{ "@id": PRODUCT_ID }],
  },
};

/** The seller plus both branches, in the order a graph should list them. */
export const STORE_NODES = [SELLER_NODE, ...BRANCH_NODES];
