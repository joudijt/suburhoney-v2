import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function createDrip(host: Element | null, leftPct: string) {
  const tl = gsap.timeline();
  if (!host) return tl;
  const drop = document.createElement("span");
  drop.className = "drip-drop";
  drop.style.left = leftPct;
  host.appendChild(drop);
  tl.fromTo(
    drop,
    { y: "0%", opacity: 0, scale: 0.6 },
    { y: "58%", opacity: 1, scale: 1, duration: 0.5, ease: "power1.in" }
  ).to(drop, { opacity: 0, duration: 0.3 }, "+=0.05");
  return tl;
}

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
  const botanicals = document.querySelectorAll<HTMLElement>(".botanical");
  const bees = document.querySelectorAll<HTMLElement>(".bee");
  const scrollCue = document.querySelector<HTMLElement>(".scroll-cue");
  const dipper = document.querySelector<HTMLElement>("#dipper");
  const dripsHost = document.querySelector<HTMLElement>("#dipper-drips");

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
    .from(".hero-line", { y: 26, opacity: 0, duration: 0.8 }, 1.3)
    .from(".hero-line-accent", { y: 26, opacity: 0, duration: 0.8 }, 1.42)
    .from(".hero-desc", { y: 16, opacity: 0, duration: 0.7 }, 1.55)
    .from(".hero-badges > *", { y: 12, opacity: 0, duration: 0.5, stagger: 0.06 }, 1.65)
    .from(".hero-cta", { y: 14, opacity: 0, duration: 0.6 }, 1.75)
    .to(botanicals, { opacity: 0.85, duration: 1, stagger: 0.2 }, 1.4)
    .to(bees, { opacity: 0.9, duration: 0.8, stagger: 0.2 }, 1.6)
    .to(scrollCue, { opacity: 1, duration: 0.8 }, 2.1);

  if (prefersReducedMotion) {
    gsap.set(
      [jarImg, ".hero-line", ".hero-line-accent", ".hero-desc", ".hero-badges > *", ".hero-cta", botanicals, bees, scrollCue],
      { opacity: 1, y: 0, scale: 1, filter: "none" }
    );
    return;
  }

  intro.call(() => {
    gsap.to(jarTilt, { y: -14, rotate: 1.5, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });

    botanicals.forEach((el, i) => {
      gsap.to(el, {
        y: i % 2 === 0 ? -18 : 18,
        x: i % 2 === 0 ? 8 : -8,
        rotate: i % 2 === 0 ? 8 : -8,
        duration: 5 + i,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });

    bees.forEach((el, i) => {
      gsap.to(el, {
        x: i % 2 === 0 ? 26 : -22,
        y: i % 2 === 0 ? -16 : 14,
        rotate: i % 2 === 0 ? 6 : -6,
        duration: 4 + i * 1.3,
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

  // First scroll: dipper descends, pours honey, drips land on the jar, exits.
  if (dipper) {
    gsap
      .timeline({
        scrollTrigger: { trigger: "#hero", start: "top top", end: "+=220%", scrub: 1.4 },
      })
      .to(dipper, { opacity: 1, y: "48%", rotate: -3, duration: 1.8, ease: "power2.out" }, 0)
      .to(dipper, { rotate: -6, duration: 1.1 }, 1.8)
      .add(createDrip(dripsHost, "50%"), 2.3)
      .add(createDrip(dripsHost, "53%"), 2.7)
      .add(createDrip(dripsHost, "48%"), 3.1)
      .to(dipper, { rotate: -3, duration: 0.6 }, 3.6)
      .to(dipper, { y: "20%", opacity: 0, rotate: -1, duration: 1.6, ease: "power1.in" }, 4.2);
  }

  // Second scroll: the jar drifts and softly dissolves as Hero scrolls out, handing off to Benefits.
  if (jarWrapper) {
    gsap
      .timeline({
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: 1 },
      })
      .to(jarWrapper, { y: 130, scale: 0.85, opacity: 0.12, duration: 1, ease: "none" }, 0);
  }
}
