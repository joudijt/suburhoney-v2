import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initReveal() {
  gsap.registerPlugin(ScrollTrigger);

  const groups = document.querySelectorAll<HTMLElement>("[data-reveal-group]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const items = entry.target.querySelectorAll<HTMLElement>("[data-reveal]");
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  groups.forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!items.length) return;
    gsap.set(items, { y: 28, opacity: 0 });
    io.observe(group);
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
