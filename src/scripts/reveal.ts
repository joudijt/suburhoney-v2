import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Scroll reveals.
 *
 * Each [data-reveal] inside a [data-reveal-group] starts faded down and rises
 * into place as it reaches the viewport.
 *
 * Items are observed individually. Observing the *group* - which is what this
 * did originally - breaks the moment a group is taller than the viewport,
 * because IntersectionObserver caps the ratio at viewportHeight/elementHeight.
 * An article body around 8000px tall can never reach a 0.15 threshold on an
 * 812px phone, so 15 of 25 sections stayed invisible no matter how far the
 * reader scrolled. Per-item observation has no such size dependency.
 *
 * Items entering together are still staggered: intersections are collected for
 * one frame and released as a batch, which keeps the original look without
 * relying on how the markup happens to be grouped.
 */
export function initReveal() {
  gsap.registerPlugin(ScrollTrigger);

  const groups = document.querySelectorAll<HTMLElement>("[data-reveal-group]");
  const items: HTMLElement[] = [];
  groups.forEach((group) =>
    group.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => items.push(el))
  );
  if (!items.length) return;

  const show = (els: HTMLElement[], stagger: number) =>
    gsap.to(els, { y: 0, opacity: 1, duration: 0.8, stagger, ease: "power3.out", overwrite: "auto" });

  // Content must never be stuck invisible. Anyone who cannot see the animation -
  // reduced motion, or a browser without IntersectionObserver - gets the text.
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    gsap.set(items, { y: 0, opacity: 1, clearProps: "transform" });
    return;
  }

  gsap.set(items, { y: 28, opacity: 0 });

  let pending: HTMLElement[] = [];
  let frame = 0;
  const flush = () => {
    frame = 0;
    const batch = pending;
    pending = [];
    if (batch.length) show(batch, batch.length > 1 ? 0.12 : 0);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        pending.push(entry.target as HTMLElement);
      }
      if (pending.length && !frame) frame = requestAnimationFrame(flush);
    },
    // threshold 0 fires as soon as any part of the item appears, so a section
    // taller than the viewport still reveals. The negative bottom margin holds
    // it back until the item is properly on screen rather than clipping the edge.
    { threshold: 0, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((el) => io.observe(el));

  // Anything already on screen at load - the article header, the top of the
  // blog index - should not wait for a scroll that may never come.
  requestAnimationFrame(() => {
    const visible = items.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    if (visible.length) {
      visible.forEach((el) => io.unobserve(el));
      show(visible, 0.12);
    }
  });

  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.15;
    gsap.to(el, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
    });
  });
}
