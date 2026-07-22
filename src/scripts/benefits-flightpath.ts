import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

interface Pt {
  x: number;
  y: number;
}

function smoothPath(points: Pt[]): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const cp1x = p1.x + (p2.x - p0.x) / 10;
    const cp1y = p1.y + (p2.y - p0.y) / 10;
    const cp2x = p2.x - (p3.x - p1.x) / 10;
    const cp2y = p2.y - (p3.y - p1.y) / 10;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

export function initBenefitsFlightpath() {
  gsap.registerPlugin(MotionPathPlugin);

  const wrap = document.querySelector<HTMLElement>("#benefits-flightpath");
  const path = document.querySelector<SVGPathElement>("#benefits-flight-line");
  const bee = document.querySelector<SVGGElement>("#benefits-flight-bee");
  if (!wrap || !path || !bee) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let dashTween: gsap.core.Tween | null = null;
  let motionTween: gsap.core.Tween | null = null;

  const MARGIN = 16;
  const WAVE = 10;

  function buildPath() {
    const cards = Array.from(wrap!.querySelectorAll<HTMLElement>("[data-flight-card]"));
    if (cards.length < 2) return;

    const wrapRect = wrap!.getBoundingClientRect();
    const boxes = cards.map((card) => {
      const r = card.getBoundingClientRect();
      return {
        left: r.left - wrapRect.left,
        right: r.right - wrapRect.left,
        top: r.top - wrapRect.top,
        bottom: r.bottom - wrapRect.top,
        cx: r.left + r.width / 2 - wrapRect.left,
        cy: r.top + r.height / 2 - wrapRect.top,
      };
    });

    // Row layout (side-by-side): route the path below the whole row, clearing every card's bottom edge.
    // Stacked layout (mobile column): route the path beside the column, clearing every card's outer edge.
    const xSpread = Math.max(...boxes.map((b) => b.cx)) - Math.min(...boxes.map((b) => b.cx));
    const ySpread = Math.max(...boxes.map((b) => b.cy)) - Math.min(...boxes.map((b) => b.cy));
    const isRow = xSpread >= ySpread;

    let points: Pt[];
    if (isRow) {
      const clearY = Math.max(...boxes.map((b) => b.bottom)) + MARGIN;
      points = boxes.map((b, i) => ({
        x: b.cx,
        y: clearY + (i % 2 === 0 ? 0 : WAVE),
      }));
      // pull entry/exit toward the outer bottom corners of the first/last card
      points[0] = { x: boxes[0].left + (boxes[0].right - boxes[0].left) * 0.18, y: boxes[0].bottom + MARGIN * 0.6 };
      points[points.length - 1] = {
        x: boxes[boxes.length - 1].left + (boxes[boxes.length - 1].right - boxes[boxes.length - 1].left) * 0.82,
        y: boxes[boxes.length - 1].bottom + MARGIN * 0.6,
      };
    } else {
      const clearX = Math.max(...boxes.map((b) => b.right)) + MARGIN;
      points = boxes.map((b, i) => ({
        x: clearX + (i % 2 === 0 ? 0 : WAVE),
        y: b.cy,
      }));
      points[0] = { x: boxes[0].right + MARGIN * 0.6, y: boxes[0].top + (boxes[0].bottom - boxes[0].top) * 0.18 };
      points[points.length - 1] = {
        x: boxes[boxes.length - 1].right + MARGIN * 0.6,
        y: boxes[boxes.length - 1].top + (boxes[boxes.length - 1].bottom - boxes[boxes.length - 1].top) * 0.82,
      };
    }

    path!.setAttribute("d", smoothPath(points));

    if (prefersReducedMotion) return;

    dashTween?.kill();
    motionTween?.kill();

    dashTween = gsap.to(path, {
      strokeDashoffset: -150,
      duration: 6,
      ease: "none",
      repeat: -1,
    });

    motionTween = gsap.to(bee, {
      motionPath: {
        path: path!,
        align: path!,
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      duration: 7,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(buildPath, 200);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) buildPath();
      });
    },
    { threshold: 0.1 }
  );
  io.observe(wrap);

  buildPath();
}
