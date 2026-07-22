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
  const stream = document.querySelector<HTMLElement>(".honey-stream");
  const ripples = document.querySelectorAll<HTMLElement>(".ripple");
  const scrollCue = document.querySelector<HTMLElement>(".scroll-cue");
  const dipper = document.querySelector<HTMLElement>("#dipper");
  const ingredients = document.querySelectorAll<HTMLElement>(".ingredient");

  const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

  intro
    .to(stream, { opacity: 1, duration: 0.15 }, 0.3)
    .fromTo(stream, { scaleY: 0, transformOrigin: "top" }, { scaleY: 1, duration: 0.9, ease: "power2.in" }, 0.3)
    .to(stream, { opacity: 0, duration: 0.4 }, 1.15)
    .to(ripples, { scale: 6, opacity: 0, duration: 1.1, stagger: 0.15, ease: "power1.out" }, 1.05)
    .fromTo(
      jarImg,
      { opacity: 0, scale: 0.82, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.1, ease: "power2.out" },
      1.1
    )
    .fromTo(
      dipper,
      { opacity: 0, y: -20, rotate: 2 },
      { opacity: 1, y: 0, rotate: 8, duration: 1, ease: "power2.out" },
      1.3
    )
    .from(".hero-line", { y: 26, opacity: 0, duration: 0.8 }, 1.3)
    .from(".hero-line-accent", { y: 26, opacity: 0, duration: 0.8 }, 1.42)
    .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, 1.55)
    .from(".hero-badges > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, 1.65)
    .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6 }, 1.75)
    .to(ingredients, { opacity: 0.95, duration: 1, stagger: 0.08 }, 1.5)
    .to(scrollCue, { opacity: 1, duration: 0.8 }, 2.1);

  if (prefersReducedMotion) {
    gsap.set(
      [jarImg, dipper, ".hero-line", ".hero-line-accent", ".hero-desc", ".hero-badges > *", ".hero-cta", ingredients, scrollCue],
      { opacity: 1, y: 0, scale: 1, filter: "none" }
    );
    return;
  }

  intro.call(() => {
    gsap.to(jarTilt, { y: -14, rotate: 1.5, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
    if (dipper) {
      gsap.to(dipper, { y: -12, rotate: 5, duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }
    ingredients.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? -10 : 10,
        rotate: i % 2 === 0 ? 6 : -6,
        duration: 3.5 + i * 0.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  });

  if (jarTilt) {
    hero.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(jarTilt, {
        rotateY: relX * 10,
        rotateX: -relY * 10,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  }

  // Jar (and dipper, inside the same wrapper) drift and softly dissolve as Hero scrolls out.
  if (jarWrapper) {
    gsap
      .timeline({
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
      })
      .to(jarWrapper, { y: 130, scale: 0.85, opacity: 0.12, duration: 1, ease: "none" }, 0);
  }
}
