import gsap from "gsap";

export function initRitual() {
  const container = document.querySelector<HTMLElement>("#ritual-steps");
  if (!container) return;

  const texts = container.querySelectorAll<HTMLElement>(".ritual-text");
  const lines = container.querySelectorAll<HTMLElement>(".ritual-line");

  gsap.set(texts, { y: 10 });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        texts.forEach((text, i) => {
          tl.to(text, { opacity: 1, y: 0, duration: 0.55 });
          const line = lines[i];
          if (line) {
            tl.to(line, { scaleY: 1, duration: 0.5, ease: "power2.inOut" });
          }
        });
      });
    },
    { threshold: 0.4 }
  );

  io.observe(container);
}
