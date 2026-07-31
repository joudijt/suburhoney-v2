/**
 * Loads images that are present in the markup but not yet visible.
 *
 * The cursor bee and the store-modal sticker live inside hidden containers,
 * but sit inside the initial viewport. Shipping them with a real `src` would
 * put their requests on the critical path alongside the LCP hero jar.
 *
 * That competition is expensive on this host: a single file downloads at
 * several MB/s, but with ~29 concurrent HTTP/2 streams the origin drops to tens
 * of KB/s, which pushed the hero jar past 3s. So these images declare
 * `data-src` instead and are upgraded once the jar has painted.
 *
 * `loading="lazy"` cannot do this job - every one of these elements is inside
 * the initial viewport, so the browser fetches them immediately regardless.
 */
export function initDeferredImages() {
  if (typeof window === "undefined") return;

  let done = false;
  const load = () => {
    if (done) return;
    done = true;
    for (const img of document.querySelectorAll<HTMLImageElement>("img[data-src]")) {
      img.src = img.dataset.src!;
      img.removeAttribute("data-src");
    }
    for (const el of document.querySelectorAll<SVGImageElement>("image[data-href]")) {
      el.setAttribute("href", el.dataset.href!);
      el.removeAttribute("data-href");
    }
  };

  // Preferred trigger: the LCP jar has finished decoding, so the critical
  // path is clear.
  const jar = document.querySelector<HTMLImageElement>(".hero-jar-static");
  if (jar) {
    if (jar.complete) load();
    else jar.addEventListener("load", load, { once: true });
    jar.addEventListener("error", load, { once: true });
  }

  // Safety nets: pages without the hero (the blog), and any case where the jar
  // never fires. Nothing may stay unloaded because a trigger was missed.
  window.addEventListener("load", load, { once: true });
  setTimeout(load, 4000);
}
