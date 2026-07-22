import gsap from "gsap";

const NEIGHBORS: number[][] = [
  [1, 3, 4],
  [0, 2, 4, 5],
  [1, 5, 6],
  [4, 7],
  [0, 1, 3, 5, 7, 8],
  [1, 2, 4, 6, 8, 9],
  [2, 5, 9],
  [3, 4, 8],
  [4, 5, 7, 9],
  [5, 6, 8],
];

export function initHoneycomb() {
  const section = document.querySelector<HTMLElement>("#ingredients");
  const honeycomb = document.querySelector<HTMLElement>("#honeycomb");
  if (!section || !honeycomb) return;

  const cells = Array.from(honeycomb.querySelectorAll<HTMLElement>(".hex-cell"));
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.set(cells, { opacity: 0, scale: 0.6 });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        gsap.to(cells, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: { each: 0.08, from: "center" },
          ease: "back.out(1.4)",
          onComplete: () => {
            if (!prefersReducedMotion) startIdleFloat();
          },
        });
      });
    },
    { threshold: 0.25 }
  );
  io.observe(honeycomb);

  function startIdleFloat() {
    cells.forEach((cell, i) => {
      gsap.to(cell, {
        y: `+=${4 + (i % 3) * 2}`,
        duration: 3 + (i % 4) * 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.15,
      });
    });
  }

  if (prefersReducedMotion) {
    gsap.set(cells, { opacity: 1, scale: 1 });
  }

  // Hover: elevate hovered cell, shimmer sweep, nudge neighbors away.
  cells.forEach((cell, i) => {
    const shape = cell.querySelector<HTMLElement>(".hex-shape");
    const shimmer = cell.querySelector<HTMLElement>(".hex-shimmer");

    cell.addEventListener("mouseenter", () => {
      gsap.to(cell, { scale: 1.1, y: -6, zIndex: 20, duration: 0.4, ease: "power2.out", overwrite: "auto" });
      shape?.classList.add("is-hovered");
      if (shimmer) {
        gsap.fromTo(shimmer, { x: "-150%" }, { x: "220%", duration: 0.7, ease: "power1.inOut" });
      }

      const hoveredRect = cell.getBoundingClientRect();
      const hoveredCenter = { x: hoveredRect.left + hoveredRect.width / 2, y: hoveredRect.top + hoveredRect.height / 2 };

      NEIGHBORS[i]?.forEach((n) => {
        const neighbor = cells[n];
        if (!neighbor) return;
        const rect = neighbor.getBoundingClientRect();
        const center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        const dx = center.x - hoveredCenter.x;
        const dy = center.y - hoveredCenter.y;
        const dist = Math.hypot(dx, dy) || 1;
        const push = 7;
        gsap.to(neighbor, {
          x: (dx / dist) * push,
          y: (dy / dist) * push,
          scale: 0.96,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    });

    cell.addEventListener("mouseleave", () => {
      gsap.to(cell, { scale: 1, y: 0, zIndex: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
      shape?.classList.remove("is-hovered");

      NEIGHBORS[i]?.forEach((n) => {
        const neighbor = cells[n];
        if (!neighbor) return;
        gsap.to(neighbor, { x: 0, y: 0, scale: 1, duration: 0.45, ease: "power2.out", overwrite: "auto" });
      });
    });

    cell.addEventListener("click", () => openPanel(cell));
  });

  // Occasional ambient shimmer on a random cell.
  if (!prefersReducedMotion) {
    setInterval(() => {
      const cell = cells[Math.floor(Math.random() * cells.length)];
      const shimmer = cell?.querySelector<HTMLElement>(".hex-shimmer");
      if (shimmer) {
        gsap.fromTo(shimmer, { x: "-150%" }, { x: "220%", duration: 1, ease: "power1.inOut" });
      }
    }, 3200);
  }

  // Decorative bees drifting slowly around the honeycomb.
  if (!prefersReducedMotion) {
    section.querySelectorAll<HTMLElement>(".hc-bee").forEach((bee, i) => {
      gsap.to(bee, {
        x: i % 2 === 0 ? 30 : -26,
        y: i % 2 === 0 ? -18 : 16,
        rotate: i % 2 === 0 ? 6 : -6,
        duration: 5 + i * 1.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }

  // Detail panel
  const panel = document.querySelector<HTMLElement>("#ingredient-panel");
  const backdrop = panel?.querySelector<HTMLElement>(".ingredient-panel-backdrop");
  const card = panel?.querySelector<HTMLElement>(".ingredient-panel-card");
  const panelImage = document.querySelector<HTMLImageElement>("#panel-image");
  const panelName = document.querySelector<HTMLElement>("#panel-name");
  const panelDesc = document.querySelector<HTMLElement>("#panel-desc");

  function openPanel(cell: HTMLElement) {
    if (!panel || !backdrop || !card || !panelImage || !panelName || !panelDesc) return;
    panelImage.src = cell.dataset.icon || "";
    panelImage.alt = cell.dataset.alt || "";
    panelName.textContent = cell.dataset.name || "";
    panelDesc.textContent = cell.dataset.description || "";

    panel.classList.remove("hidden");
    gsap.to(backdrop, { opacity: 1, duration: 0.3 });
    gsap.fromTo(card, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
  }

  function closePanel() {
    if (!panel || !backdrop || !card) return;
    gsap.to(backdrop, { opacity: 0, duration: 0.25 });
    gsap.to(card, {
      opacity: 0,
      y: 24,
      duration: 0.25,
      ease: "power1.in",
      onComplete: () => panel.classList.add("hidden"),
    });
  }

  panel?.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closePanel));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel && !panel.classList.contains("hidden")) closePanel();
  });
}
