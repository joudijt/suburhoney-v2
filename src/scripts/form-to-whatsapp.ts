/**
 * Every form on the site is UI-only - there is no backend to receive a
 * submission (see CLAUDE.md). Rather than silently doing nothing on submit,
 * each field's label + value gets folded into a WhatsApp message so the
 * enquiry actually reaches someone.
 *
 * Fields are read by walking the DOM (label -> its input/select/textarea)
 * instead of by `name`, so this works with whatever fields a form has
 * without a separate field-name-to-label map to keep in sync.
 */
export function initFormsToWhatsApp(whatsappNumber: string) {
  document.querySelectorAll<HTMLFormElement>("form[data-whatsapp-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const lines: string[] = [];
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        "input, select, textarea"
      ).forEach((field) => {
        // An untouched <select> still "has a value" - its first option. That
        // is a placeholder like "Select type", not a real answer.
        if (field instanceof HTMLSelectElement && field.selectedIndex <= 0) return;

        const value = field.value.trim();
        if (!value) return;

        const label = field.closest("div")?.querySelector("label")?.textContent?.replace(/\*\s*$/, "").trim();
        lines.push(`${label || field.name || "Field"}: ${value}`);
      });

      if (lines.length === 0) return;

      const heading = form.dataset.whatsappHeading || "New enquiry from suburhoney.com";
      const message = [heading, "", ...lines].join("\n");
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener");
      form.reset();
    });
  });
}
