import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initHero() {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);

  const hero = document.querySelector<HTMLElement>("#hero");
  if (!hero) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const jarWrapper = document.querySelector<HTMLElement>("#hero-jar-wrapper");
  const jarOpen = document.querySelector<HTMLElement>(".hero-jar-open");
  const jarSealed = document.querySelector<HTMLElement>(".hero-jar-sealed");
  const jarTilt = document.querySelector<HTMLElement>(".jar-tilt");
  const jarMouth = document.querySelector<HTMLElement>("#jar-mouth");
  const ingredients = document.querySelectorAll<HTMLElement>(".ingredient");

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  // each ingredient's own flight path into the jar's mouth, computed from real layout
  const flights = Array.from(ingredients).map((el) => {
    const startRect = el.getBoundingClientRect();
    const mouthRect = jarMouth?.getBoundingClientRect();
    const dx = mouthRect ? mouthRect.left - (startRect.left + startRect.width / 2) : 0;
    const dy = mouthRect ? mouthRect.top - (startRect.top + startRect.height / 2) : 0;
    return { el, dx, dy };
  });

  intro
    .to(ingredients, { opacity: 1, duration: 0.4, stagger: 0.06 }, 0.1)
    .fromTo(jarOpen, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.6 }, 0.1);

  flights.forEach(({ el, dx, dy }, i) => {
    intro.to(
      el,
      { x: dx, y: dy, scale: 0.15, opacity: 0, rotate: "+=140", duration: 0.75, ease: "power2.in" },
      0.75 + i * 0.09
    );
  });

  const jarSealTime = 0.75 + flights.length * 0.09 + 0.35;

  intro
    .to(jarOpen, { opacity: 0, scale: 0.96, duration: 0.3 }, jarSealTime)
    .fromTo(
      jarSealed,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.4)" },
      jarSealTime
    )
    .from(".hero-line", { y: 26, opacity: 0, duration: 0.8 }, jarSealTime + 0.3)
    .from(".hero-line-accent", { y: 26, opacity: 0, duration: 0.8 }, jarSealTime + 0.42)
    .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, jarSealTime + 0.55)
    .from(".hero-badges > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, jarSealTime + 0.65)
    .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6 }, jarSealTime + 0.75);

  if (prefersReducedMotion) {
    gsap.set(ingredients, { opacity: 0 });
    gsap.set(jarOpen, { opacity: 0 });
    gsap.set(
      [jarSealed, ".hero-line", ".hero-line-accent", ".hero-desc", ".hero-badges > *", ".hero-cta"],
      { opacity: 1, y: 0, x: 0, scale: 1, rotate: 0 }
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
