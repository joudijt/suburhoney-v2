/**
 * Builds the two product still-lifes used as page lead images (retail, why-us)
 * from the real brand assets - jarncap plus the ten ingredient icons - so no
 * scene is fabricated as a photograph that was never taken.
 *
 * Output lands in assets-src/, which `npm run optimize:images` then turns into
 * the public/*.webp the pages actually load. Run this only when the jar asset,
 * the icon set, or the brand palette changes; the PNGs are committed, so a
 * normal build does not need it.
 *
 * `node scripts/make-page-figures.mjs` from the project root.
 */
import sharp from 'sharp';

const W = 1536;
const H = 864;

const CREAM = '#F8F4EC';
const CREAM_SOFT = '#FFFDF8';
const GOLD = '#E6A826';

/** Cream backdrop, gold bloom, and a contact shadow sitting at the jar's base. */
const backdrop = ({ shadowCy, shadowRx }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="base" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0%" stop-color="${CREAM_SOFT}"/>
      <stop offset="100%" stop-color="${CREAM}"/>
    </linearGradient>
    <radialGradient id="bloom" cx="50%" cy="46%" r="52%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.30"/>
      <stop offset="65%" stop-color="${GOLD}" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft" x="-60%" y="-300%" width="220%" height="700%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#base)"/>
  <rect width="${W}" height="${H}" fill="url(#bloom)"/>
  <ellipse cx="${W / 2}" cy="${shadowCy}" rx="${shadowRx}" ry="22"
           fill="#7A4E0E" opacity="0.28" filter="url(#soft)"/>
</svg>`;

const jarAt = async (h) => {
  const input = await sharp('public/jarncap.webp').resize({ height: h }).png().toBuffer();
  const { width } = await sharp(input).metadata();
  return { input, width, height: h };
};

/* ---------- retail: single hero jar, the thing you are buying ---------- */
{
  const jar = await jarAt(640);
  const left = Math.round(W / 2 - jar.width / 2);
  const top = Math.round(H - 110 - jar.height);
  const base = top + jar.height - 8;

  await sharp(Buffer.from(backdrop({ shadowCy: base, shadowRx: jar.width * 0.42 })))
    .composite([{ input: jar.input, left, top }])
    .png()
    .toFile('assets-src/images/page-retail.png');
  console.log('page-retail.png  jar', `${jar.width}x${jar.height}`, 'shadow at y=' + base);
}

/* ---------- why-us: the jar plus its ten named ingredients ---------- */
{
  const jar = await jarAt(500);
  const jarLeft = Math.round(W / 2 - jar.width / 2);
  const jarTop = Math.round(H - 120 - jar.height);
  const base = jarTop + jar.height - 8;

  /* Explicit mirrored scatter. An arc through the centre put two icons behind
     the jar, so the positions are given as a left cluster and mirrored right,
     all of them clear of the jar's x-range (605-931 at this size). */
  const leftCluster = [
    { x: 132, y: 150, size: 112 },
    { x: 330, y: 292, size: 96 },
    { x: 104, y: 430, size: 104 },
    { x: 318, y: 566, size: 96 },
    { x: 150, y: 690, size: 108 },
  ];

  const icons = [];
  for (let i = 0; i < 10; i++) {
    const spot = leftCluster[i % 5];
    const onRight = i >= 5;
    const n = String(i + 1).padStart(2, '0');
    icons.push({
      input: await sharp(`public/icons/ingrediant_${n}.webp`)
        .resize({ width: spot.size })
        .png()
        .toBuffer(),
      left: onRight ? W - spot.size - spot.x : spot.x,
      top: spot.y,
    });
  }

  await sharp(Buffer.from(backdrop({ shadowCy: base, shadowRx: jar.width * 0.42 })))
    .composite([...icons, { input: jar.input, left: jarLeft, top: jarTop }])
    .png()
    .toFile('assets-src/images/page-why-us.png');
  console.log('page-why-us.png  jar', `${jar.width}x${jar.height}`, `x-range ${jarLeft}-${jarLeft + jar.width}`, `+ ${icons.length} icons`);
}
