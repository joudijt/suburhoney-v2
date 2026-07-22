import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export function initBenefitsFlightpath() {
  gsap.registerPlugin(MotionPathPlugin);

  const wrap = document.querySelector<HTMLElement>("#benefits-flightpath");
  const path = document.querySelector<SVGPathElement>("#benefits-flight-line");
  const bee = document.querySelector<SVGGElement>("#benefits-flight-bee");
  if (!wrap || !path || !bee) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let dashTween: gsap.core.Tween | null = null;
  let motionTween: gsap.core.Tween | null = null;

  const MARGIN = 14;
  const LOOP_R = 14;

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

    const xSpread = Math.max(...boxes.map((b) => b.cx)) - Math.min(...boxes.map((b) => b.cx));
    const ySpread = Math.max(...boxes.map((b) => b.cy)) - Math.min(...boxes.map((b) => b.cy));
    const isRow = xSpread >= ySpread;
    const first = boxes[0];
    const last = boxes[boxes.length - 1];

    // u = position along the main flow axis, v = position along the clearance axis.
    // Row: u=x, v=y (path bows below the row). Stacked: u=y, v=x (path bows to the right of the column).
    const toXY = isRow ? (u: number, v: number) => ({ x: u, y: v }) : (u: number, v: number) => ({ x: v, y: u });

    const start = isRow ? { u: first.left, v: first.cy } : { u: first.top, v: first.cx };
    const end = isRow ? { u: last.right, v: last.cy } : { u: last.bottom, v: last.cx };
    const clearBase = isRow
      ? Math.max(...boxes.map((b) => b.bottom)) + MARGIN
      : Math.max(...boxes.map((b) => b.right)) + MARGIN;

    const loopU = (start.u + end.u) / 2;
    const loopV = clearBase + LOOP_R;
    const k = 0.5523 * LOOP_R;

    const A = { u: loopU - LOOP_R, v: loopV };
    const T = { u: loopU, v: loopV - LOOP_R };
    const R = { u: loopU + LOOP_R, v: loopV };
    const Bo = { u: loopU, v: loopV + LOOP_R };
    const cross = { u: loopU - LOOP_R * 0.85, v: loopV + LOOP_R * 0.35 };
    const exitPt = { u: loopU + LOOP_R * 1.4, v: clearBase };

    const P = (u: number, v: number) => {
      const p = toXY(u, v);
      return `${p.x} ${p.y}`;
    };

    let d = `M ${P(start.u, start.v)}`;
    // start -> A: dip away from the card first (down/back) before sweeping toward the loop.
    d += ` C ${P(start.u - LOOP_R * 0.4, start.v + (clearBase - start.v) * 0.5)}, ${P(A.u - (A.u - start.u) * 0.15, A.v)}, ${P(A.u, A.v)}`;
    // loop: A -> T -> R -> Bo -> cross (a full decorative swirl)
    d += ` C ${P(A.u, A.v - k)}, ${P(T.u - k, T.v)}, ${P(T.u, T.v)}`;
    d += ` C ${P(T.u + k, T.v)}, ${P(R.u, R.v - k)}, ${P(R.u, R.v)}`;
    d += ` C ${P(R.u, R.v + k)}, ${P(Bo.u + k, Bo.v)}, ${P(Bo.u, Bo.v)}`;
    d += ` C ${P(Bo.u - k * 0.5, Bo.v + k * 0.2)}, ${P(cross.u + (Bo.u - cross.u) * 0.3, cross.v + (Bo.v - cross.v) * 0.3)}, ${P(cross.u, cross.v)}`;
    // cross -> exitPt -> end: sweep out and rise into the last card's outer edge from outside it.
    d += ` C ${P(cross.u + (exitPt.u - cross.u) * 0.3, cross.v)}, ${P(exitPt.u - (exitPt.u - cross.u) * 0.3, exitPt.v)}, ${P(exitPt.u, exitPt.v)}`;
    d += ` C ${P(exitPt.u + (end.u - exitPt.u) * 0.7, exitPt.v)}, ${P(end.u + LOOP_R * 0.3, end.v + (exitPt.v - end.v) * 0.3)}, ${P(end.u, end.v)}`;

    path!.setAttribute("d", d);

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
      duration: 8,
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
