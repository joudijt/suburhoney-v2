import gsap from "gsap";

/* The flying-ingredients jar animation moved to the Ritual section - see
   ritual-jar-motion.ts. This is left with just the text entrance. */
export function initHero() {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targets = [".hero-line", ".hero-line-accent", ".hero-desc", ".hero-badges > *", ".hero-cta"];

  if (prefersReducedMotion) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return;
  }

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(".hero-line", { y: 26, opacity: 0, duration: 0.8 }, 0.1)
    .from(".hero-line-accent", { y: 26, opacity: 0, duration: 0.8 }, 0.22)
    .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, 0.35)
    .from(".hero-badges > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.45)
    .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6 }, 0.55);
}
