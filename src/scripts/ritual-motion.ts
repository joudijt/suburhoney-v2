import gsap from "gsap";

export function initRitual() {
  const container = document.querySelector<HTMLElement>("#ritual-steps");
  if (!container) return;

  const steps = container.querySelectorAll<HTMLElement>(".ritual-step");
  const texts = container.querySelectorAll<HTMLElement>(".ritual-text");
  const lines = container.querySelectorAll<HTMLElement>(".ritual-line");

  gsap.set(texts, { y: 10 });

  // The connector line's top/height were fixed CSS values (top-11, h-7) that
  // only line up when the circle sits exactly at the top of a single-line
  // step. Step text wraps to 2 lines on narrow phones, and items-center then
  // re-centers the circle, so a fixed offset drifts off the real circle
  // position. Measuring the actual circle rects keeps the line attached to
  // both circles regardless of how the text wraps.
  const positionLines = () => {
    steps.forEach((step, i) => {
      const line = lines[i];
      const nextStep = steps[i + 1];
      if (!line || !nextStep) return;
      const circle = step.querySelector<HTMLElement>(":scope > div");
      const nextCircle = nextStep.querySelector<HTMLElement>(":scope > div");
      if (!circle || !nextCircle) return;
      const stepRect = step.getBoundingClientRect();
      const circleRect = circle.getBoundingClientRect();
      const nextCircleRect = nextCircle.getBoundingClientRect();
      line.style.top = `${circleRect.bottom - stepRect.top}px`;
      line.style.height = `${Math.max(nextCircleRect.top - circleRect.bottom, 0)}px`;
    });
  };

  positionLines();
  document.fonts?.ready.then(positionLines);
  window.addEventListener("resize", positionLines);

  // Steps are observed individually, not the whole container. On short mobile
  // viewports the container is taller than the screen, so its intersection
  // ratio can never clear a 0.4 threshold - steps after the first stayed
  // stuck at opacity 0 no matter how far the page scrolled.
  const reveal = (i: number) => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.to(texts[i], { opacity: 1, y: 0, duration: 0.55 });
    const line = lines[i];
    if (line) tl.to(line, { scaleY: 1, duration: 0.5, ease: "power2.inOut" });
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        const i = Array.from(steps).indexOf(entry.target as HTMLElement);
        if (i !== -1) reveal(i);
      });
    },
    { threshold: 0, rootMargin: "0px 0px -8% 0px" }
  );

  steps.forEach((step) => io.observe(step));
}
