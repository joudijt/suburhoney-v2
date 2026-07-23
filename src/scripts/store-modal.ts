import gsap from "gsap";

export function initStoreModal() {
  if (typeof window === "undefined") return;

  const modal = document.querySelector<HTMLElement>("#store-modal");
  const panel = modal?.querySelector<HTMLElement>(".store-modal-panel");
  const overlay = document.querySelector<HTMLElement>("#store-modal-overlay");
  const closeBtn = document.querySelector<HTMLElement>("#store-modal-close");
  const triggers = document.querySelectorAll<HTMLElement>("[data-store-modal-trigger]");
  if (!modal || !panel) return;

  const open = () => {
    modal.classList.remove("pointer-events-none");
    modal.setAttribute("aria-hidden", "false");
    gsap.set(modal, { opacity: 0 });
    gsap.set(panel, { scale: 0.92, opacity: 0, y: 16 });
    gsap.to(modal, { opacity: 1, duration: 0.25, ease: "power2.out" });
    gsap.to(panel, { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.6)" });
  };

  const close = () => {
    gsap.to(panel, { scale: 0.92, opacity: 0, y: 16, duration: 0.2, ease: "power2.in" });
    gsap.to(modal, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.add("pointer-events-none");
        modal.setAttribute("aria-hidden", "true");
      },
    });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      open();
    });
  });

  overlay?.addEventListener("click", close);
  closeBtn?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}
