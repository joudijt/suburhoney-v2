import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initReveal() {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!items.length) return;
    gsap.from(items, {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: group,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.15;
    gsap.to(el, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}
