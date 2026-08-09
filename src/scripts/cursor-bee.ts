export function initCursorBee() {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const bee = document.querySelector<HTMLElement>("#bee-cursor");
  const beeImg = bee?.querySelector<HTMLElement>(".bee-cursor-img");
  if (!bee || !beeImg) return;

  // Touch-vs-mouse is decided from real input, not an upfront `matchMedia`
  // snapshot: `(hover: hover) and (pointer: fine)` is unreliable on some
  // non-touch laptops (hybrid trackpad drivers, docked/scaled displays,
  // RDP/VM sessions can report `pointer: coarse` with no touch hardware at
  // all), and a false read there used to hide the bee permanently with no
  // way to recover since `.bee-cursor` defaults to `display: none` until a
  // script adds `.is-active`. A genuine `touchstart` disables it for the
  // session; a genuine mouse move enables it - whichever fires first wins.
  let activated = false;
  let disabled = false;

  function activate() {
    if (activated || disabled) return;
    activated = true;
    document.documentElement.classList.add("cursor-bee-active");
    bee.classList.add("is-active");
    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener(
    "touchstart",
    () => {
      disabled = true;
    },
    { passive: true, once: true }
  );

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let posX = mouseX;
  let posY = mouseY;
  let angle = 0;

  let hovering = false;
  let idleSince = performance.now();
  const IDLE_DELAY = 180;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      idleSince = performance.now();
      activate();
    },
    { passive: true }
  );

  const interactiveSelector = "a, button, [role='button'], input, select, textarea, summary, [data-cursor-hover]";
  document.addEventListener(
    "pointerover",
    (e) => {
      if (!activated) return;
      const target = e.target as Element | null;
      if (target?.closest(interactiveSelector)) {
        hovering = true;
        bee.classList.add("is-hovering");
      }
    },
    { passive: true }
  );
  document.addEventListener(
    "pointerout",
    (e) => {
      if (!activated) return;
      const target = e.target as Element | null;
      if (target?.closest(interactiveSelector)) {
        hovering = false;
        bee.classList.remove("is-hovering");
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "pointerdown",
    (e) => {
      // Touch taps fire pointerdown too; only pop a sparkle once a real mouse
      // has activated the bee, or a tap on a touch device leaves gold flecks
      // behind with no bee ever visible to explain them.
      if (!activated) return;
      beeImg.classList.remove("is-clicking");
      requestAnimationFrame(() => beeImg.classList.add("is-clicking"));
      setTimeout(() => beeImg.classList.remove("is-clicking"), 260);
      spawnSparkle(e.clientX, e.clientY);
    },
    { passive: true }
  );

  function spawnSparkle(x: number, y: number) {
    const sparkle = document.createElement("span");
    sparkle.className = "bee-sparkle";
    sparkle.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 300);
  }

  let rafId = 0;

  function tick() {
    const now = performance.now();
    const lerp = hovering ? 0.22 : 0.13;

    const prevX = posX;
    const prevY = posY;
    posX += (mouseX - posX) * lerp;
    posY += (mouseY - posY) * lerp;

    const dx = posX - prevX;
    const dy = posY - prevY;
    const speed = Math.hypot(dx, dy);
    const isFlying = speed > 0.35;

    if (isFlying) {
      idleSince = now;
      beeImg.classList.add("is-flying");
      const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
      let delta = targetAngle - angle;
      delta = ((delta + 180) % 360) - 180;
      angle += delta * 0.16;
    } else {
      beeImg.classList.remove("is-flying");
    }

    const idleFor = now - idleSince;
    const idleT = now / 1000;
    const bob = Math.sin(idleT * 2.1) * (idleFor > IDLE_DELAY ? 3 : 1.2);

    const scale = hovering ? 1.1 : 1;
    const tilt = hovering ? 6 : 0;

    bee.style.transform = `translate3d(${posX}px, ${posY + bob}px, 0) translate(-50%, -50%) rotate(${angle + tilt}deg) scale(${scale})`;

    rafId = requestAnimationFrame(tick);
  }

  window.addEventListener("beforeunload", () => cancelAnimationFrame(rafId));
}
