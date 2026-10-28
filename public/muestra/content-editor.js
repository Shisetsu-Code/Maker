import { normalizeContent, SECTION_NAMES } from "./content-settings.mjs";
export function applyContent(value) {
  if (!document.querySelector("body.resort-view")) return;
  const content = normalizeContent(value),
    main = document.querySelector("main");
  for (const [selector, key] of [
    [".hero-copy h1", "title"],
    [".hero-copy p", "description"],
    [".hero-copy [data-scroll]", "button"],
  ]) {
    const el = document.querySelector(selector);
    if (el && el.textContent !== content[key]) el.textContent = content[key];
  }
  const art = document.querySelector(".hero-art");
  let image = art.querySelector("[data-banner-image]");
  if (!image) {
    image = document.createElement("img");
    image.dataset.bannerImage = "";
    image.className = "content-banner-image";
    image.alt = "";
    art.append(image);
  }
  for (const child of art.children)
    child.hidden = child === image ? !content.image : !!content.image;
  if (content.image && image.getAttribute("src") !== content.image)
    image.src = content.image;
  const nodes = {
    hero: main.querySelector(".hero"),
    discover: main.querySelector("#discover"),
    games: main.querySelector(".games-section"),
    lounge: main.querySelector(".lounge"),
  };
  let next = main.querySelector("footer");
  for (const key of [...content.sections].reverse()) {
    const node = nodes[key];
    node.hidden = content.hidden.includes(key);
    if (node.nextElementSibling !== next) main.insertBefore(node, next);
    next = node;
  }
}
export function mountContentEditor(editor, get, set, message) {
  const details = document.createElement("details");
  details.innerHTML =
    '<summary role="button">Banners y secciones · Resort</summary><p>Elegí Rushybet 2 para ver estos cambios. Las otras plantillas conservan su distribución.</p><label>Título de portada<textarea data-content="title" maxlength="100" rows="2"></textarea></label><label>Descripción<textarea data-content="description" maxlength="220" rows="3"></textarea></label><label>Texto del botón<input data-content="button" maxlength="45" type="text"></label><label>Imagen de portada<input data-banner-file type="file" accept="image/jpeg,image/png,image/webp"></label><div class="design-actions"><button type="button" data-banner-remove>Quitar imagen de portada</button></div><h4>Orden y visibilidad</h4><div data-sections></div>';
  editor.querySelector(".design-status").before(details);
  function paint() {
    const content = normalizeContent(get());
    for (const input of details.querySelectorAll("[data-content]"))
      if (document.activeElement !== input)
        input.value = content[input.dataset.content];
    const list = details.querySelector("[data-sections]");
    list.replaceChildren();
    content.sections.forEach((key, index) => {
      const row = document.createElement("div");
      row.className = "section-editor-row";
      const label = document.createElement("label"),
        check = document.createElement("input");
      check.type = "checkbox";
      check.checked = !content.hidden.includes(key);
      check.setAttribute("aria-label", "Mostrar " + SECTION_NAMES[key]);
      check.onchange = () => {
        const next = normalizeContent(get());
        next.hidden = check.checked
          ? next.hidden.filter((k) => k !== key)
          : [...next.hidden, key];
        set(next);
      };
      label.append(check, document.createTextNode(SECTION_NAMES[key]));
      row.append(label);
      for (const [symbol, delta] of [
        ["↑", -1],
        ["↓", 1],
      ]) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = symbol;
        button.setAttribute(
          "aria-label",
          (delta < 0 ? "Subir " : "Bajar ") + SECTION_NAMES[key],
        );
        button.disabled =
          index + delta < 0 || index + delta >= content.sections.length;
        button.onclick = () => {
          const next = normalizeContent(get());
          [next.sections[index], next.sections[index + delta]] = [
            next.sections[index + delta],
            next.sections[index],
          ];
          set(next);
        };
        row.append(button);
      }
      list.append(row);
    });
  }
  details.addEventListener("input", (event) => {
    const key = event.target.dataset.content;
    if (key) set({ ...normalizeContent(get()), [key]: event.target.value });
  });
  details.querySelector("[data-banner-remove]").onclick = () =>
    set({ ...normalizeContent(get()), image: "" });
  details.querySelector("[data-banner-file]").onchange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (
        !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
        file.size > 8 * 1024 * 1024
      )
        throw Error("Elegí JPG, PNG o WebP de hasta 8 MB.");
      const image = await createImageBitmap(file),
        ratio = Math.min(1, 1200 / Math.max(image.width, image.height)),
        canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * ratio);
      canvas.height = Math.round(image.height * ratio);
      canvas
        .getContext("2d")
        .drawImage(image, 0, 0, canvas.width, canvas.height);
      image.close();
      const result = canvas.toDataURL("image/webp", 0.78);
      if (result.length > 800000)
        throw Error("Probá una imagen de portada más pequeña.");
      set({ ...normalizeContent(get()), image: result });
    } catch (error) {
      message(error.message);
    }
    event.target.value = "";
  };
  paint();
  return { paint };
}
