import gsap from "gsap";

/* The flying-ingredients scene that used to run on page load in the Hero -
   here it plays once, when this section scrolls into view, then the jar
   just sits there. No idle bob, no pointer tilt - it settles and stays put. */
export function initRitualJar() {
  if (typeof window === "undefined") return;

  const wrapper = document.querySelector<HTMLElement>("#ritual-jar-wrapper");
  const jarOpen = document.querySelector<HTMLElement>(".ritual-jar-open");
  const jarSealed = document.querySelector<HTMLElement>(".ritual-jar-sealed");
  const jarMouth = document.querySelector<HTMLElement>("#ritual-jar-mouth");
  const ingredients = document.querySelectorAll<HTMLElement>(".ritual-ingredient");
  if (!wrapper || !jarOpen || !jarSealed) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
    gsap.set(ingredients, { opacity: 0 });
    gsap.set(jarOpen, { opacity: 0 });
    gsap.set(jarSealed, { opacity: 1 });
    return;
  }

  gsap.set(jarOpen, { opacity: 0 });

  function playIntro() {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

    // each ingredient's own flight path into the jar's mouth, computed from
    // real layout - dx/dy between two elements is scroll-position-invariant,
    // so this is safe to compute right when the section comes into view.
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
      );
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        playIntro();
      }
    },
    { threshold: 0.35 }
  );
  io.observe(wrapper);
}
