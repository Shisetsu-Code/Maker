import { TEMPLATE_REGISTRY } from "../src/client/editor/template-registry.js";

const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
  );

/** The editor registry is the single source of the public template choices. */
export function syncTemplateChoices(html, registry = TEMPLATE_REGISTRY) {
  const group = /(<div\b[^>]*\bid="seg-plantilla"[^>]*>)[\s\S]*?(<\/div>)/;
  if (!group.test(html))
    throw new Error("Maker HTML is missing the template selector");
  const buttons = Object.entries(registry).map(
    ([id, entry]) =>
      `        <button type="button" class="tocable" role="radio" data-valor="${escapeHTML(id)}" aria-checked="${id === "clasica"}">${escapeHTML(entry.label)}</button>`,
  );
  return html.replace(
    group,
    (_, start, end) =>
      `${start}\n        <span class="seg-pastilla" aria-hidden="true"></span>\n${buttons.join("\n")}\n      ${end}`,
  );
}
