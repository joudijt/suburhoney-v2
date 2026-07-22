import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initHero() {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector<HTMLElement>("#hero");
  if (!hero) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const jarWrapper = document.querySelector<HTMLElement>("#hero-jar-wrapper");
  const jarImg = document.querySelector<HTMLElement>(".hero-jar");
  const jarTilt = document.querySelector<HTMLElement>(".jar-tilt");
  const scrollCue = document.querySelector<HTMLElement>(".scroll-cue");

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .fromTo(jarImg, { opacity: 0, scale: 0.85, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" }, 0.2)
    .from(".hero-line", { y: 26, opacity: 0, duration: 0.8 }, 0.5)
    .from(".hero-line-accent", { y: 26, opacity: 0, duration: 0.8 }, 0.62)
    .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, 0.75)
    .from(".hero-badges > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, 0.85)
    .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6 }, 0.95)
    .to(scrollCue, { opacity: 1, duration: 0.8 }, 1.3);

  if (prefersReducedMotion) {
    gsap.set(
      [jarImg, ".hero-line", ".hero-line-accent", ".hero-desc", ".hero-badges > *", ".hero-cta", scrollCue],
      { opacity: 1, y: 0, scale: 1 }
    );
    return;
  }

  intro.call(() => {
    if (jarTilt) {
      gsap.to(jarTilt, { y: -14, rotate: 1.5, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }
  });

  if (jarTilt) {
    hero.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(jarTilt, {
        rotateY: relX * 8,
        rotateX: -relY * 8,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }

  // Jar drifts and softly dissolves as Hero scrolls out.
  if (jarWrapper) {
    gsap
      .timeline({
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
      })
      .to(jarWrapper, { y: 130, scale: 0.85, opacity: 0.12, duration: 1, ease: "none" }, 0);
  }
}
