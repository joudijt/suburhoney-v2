import gsap from "gsap";

export function initHero() {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollCue = document.querySelector<HTMLElement>(".scroll-cue");

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .from(".hero-line", { y: 26, opacity: 0, duration: 0.8 }, 0.2)
    .from(".hero-line-accent", { y: 26, opacity: 0, duration: 0.8 }, 0.32)
    .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, 0.45)
    .from(".hero-badges > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.55)
    .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6 }, 0.65)
    .to(scrollCue, { opacity: 1, duration: 0.8 }, 1);

  if (prefersReducedMotion) {
    gsap.set([".hero-line", ".hero-line-accent", ".hero-desc", ".hero-badges > *", ".hero-cta", scrollCue], {
      opacity: 1,
      y: 0,
    });
  }
}
