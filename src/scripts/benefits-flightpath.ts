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

  function buildPath() {
    const cards = Array.from(wrap!.querySelectorAll<HTMLElement>("[data-flight-card]"));
    if (cards.length < 2) return;

    const wrapRect = wrap!.getBoundingClientRect();
    const points = cards.map((card) => {
      const r = card.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - wrapRect.left,
        y: r.top + r.height / 2 - wrapRect.top,
      };
    });

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const mx = (p0.x + p1.x) / 2;
      const my = (p0.y + p1.y) / 2;
      const dx = p1.x - p0.x;
      const dy = p1.y - p0.y;
      const len = Math.hypot(dx, dy) || 1;
      const perpX = -dy / len;
      const perpY = dx / len;
      const wave = Math.min(40, len * 0.28) * (i % 2 === 0 ? 1 : -1);
      const cx = mx + perpX * wave;
      const cy = my + perpY * wave;
      d += ` Q ${cx} ${cy} ${p1.x} ${p1.y}`;
    }

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
