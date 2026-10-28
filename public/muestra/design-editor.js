import {
  DEFAULT_SETTINGS,
  normalizeSettings,
  designCSS,
} from "./design-settings.mjs";
import { applyContent, mountContentEditor } from "./content-editor.js";
const STORAGE = "rushybet:design-extras:v1";
let settings = { ...DEFAULT_SETTINGS };
try {
  settings = normalizeSettings(
    JSON.parse(localStorage.getItem(STORAGE) || "null"),
  );
} catch {}
const host = document.getElementById("filas");
const contentStyles = document.createElement("link");
contentStyles.rel = "stylesheet";
contentStyles.href = new URL("content-editor.css", import.meta.url).href;
document.head.append(contentStyles);
if (host) setupEditor();
else setupView();

function setupView() {
  const fonts = document.createElement("link");
  fonts.rel = "stylesheet";
  fonts.href = "/assets/external/fonts.googleapis.com/css2.b4918935dc26.css";
  document.head.append(fonts);
  const style = document.createElement("style");
  style.id = "design-custom-style";
  document.head.append(style);
  const sizes = new WeakMap();
  let scheduled = false;
  function textSizes() {
    if (settings.scale === 100) return;
    const nodes = [];
    for (const node of document.querySelectorAll(
      "body :is(div,span,p,h1,h2,h3,h4,a,button,label,th,td,small,strong,input,textarea,select)",
    )) {
      if (node.closest("svg,script,style")) continue;
      if (
        !["INPUT", "TEXTAREA", "SELECT"].includes(node.tagName) &&
        ![...node.childNodes].some(
          (child) => child.nodeType === 3 && child.textContent.trim(),
        )
      )
        continue;
      nodes.push(node);
    }
    const pending = nodes.filter((node) => !sizes.has(node));
    if (!pending.length) {
      for (const node of nodes) node.classList.add("design-scaled-text");
      return;
    }
    const ancestors = new Set();
    for (const node of pending) {
      for (let ancestor = node; ancestor; ancestor = ancestor.parentElement)
        ancestors.add(ancestor);
    }
    const transitions = [...ancestors].map((node) => ({
      node,
      properties: ["transition-duration", "transition-delay"].map((name) => ({
        name,
        value: node.style.getPropertyValue(name),
        priority: node.style.getPropertyPriority(name),
      })),
    }));
    const root = document.documentElement;
    const previous = root.style.getPropertyValue("--design-text-scale");
    const priority = root.style.getPropertyPriority("--design-text-scale");
    // Even a 1 ms transition can retain an ancestor's scaled font size while
    // measuring a new child. Measure the original cascade without transitions
    // so inherited, explicit, em and percentage sizes keep their own bases.
    try {
      for (const { node, properties } of transitions)
        for (const { name } of properties)
          node.style.setProperty(name, "0s", "important");
      root.style.setProperty("--design-text-scale", "1", "important");
      const measured = pending.map((node) => [
        node,
        getComputedStyle(node).fontSize,
      ]);
      for (const [node, size] of measured) {
        sizes.set(node, size);
        node.style.setProperty("--design-base-size", size);
      }
      for (const node of nodes) node.classList.add("design-scaled-text");
    } finally {
      try {
        if (previous)
          root.style.setProperty("--design-text-scale", previous, priority);
        else root.style.removeProperty("--design-text-scale");
        // Commit the restored scale before transitions are enabled again.
        for (const node of ancestors) getComputedStyle(node).fontSize;
      } finally {
        for (const { node, properties } of transitions)
          for (const { name, value, priority } of properties) {
            if (value) node.style.setProperty(name, value, priority);
            else node.style.removeProperty(name);
          }
      }
    }
  }
  function apply(value) {
    settings = normalizeSettings(value);
    const css = designCSS(settings);
    if (style.textContent !== css) style.textContent = css;
    applyContent(settings.content);
    textSizes();
  }
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      textSizes();
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("message", (event) => {
    if (
      event.source !== parent ||
      event.origin !== location.origin ||
      event.data?.tipo !== "design-extras"
    )
      return;
    apply(event.data.settings);
  });
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE)
      try {
        apply(JSON.parse(event.newValue));
      } catch {}
  });
  apply(settings);
}

function setupEditor() {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = new URL("design-editor.css", import.meta.url).href;
  document.head.append(link);
  const editor = document.createElement("section");
  editor.className = "design-editor";
  editor.setAttribute("aria-label", "Tipografía y fondos personalizados");
  editor.innerHTML = `<h3>Tu estilo, más a fondo</h3><p>Se aplica al lobby y al panel de todas las plantillas. Se guarda en este navegador.</p>
  <details><summary>Tipografía</summary><label>Familia de letra<select name="font"><option value="original">Original de la plantilla</option><option value="system">Moderna · sistema</option><option value="barlow">Barlow · suave</option><option value="archivo">Archivo · geométrica</option><option value="oswald">Oswald · compacta</option><option value="editorial">Editorial · serif</option></select></label><label>Tamaño del texto <output data-output="scale"></output><input name="scale" type="range" min="85" max="120" step="5"></label><label>Peso de títulos y botones<select name="weight"><option value="original">Original</option><option value="400">Ligero</option><option value="600">Seminegrita</option><option value="700">Negrita</option></select></label></details>
  <details><summary>Fondo con imagen propia</summary><label>Elegir imagen (JPG, PNG o WebP)<input name="imageFile" type="file" accept="image/jpeg,image/png,image/webp"></label><img data-preview alt="Vista previa del fondo" hidden><label><input name="imageEnabled" type="checkbox">Mostrar mi imagen de fondo</label><label>Oscurecer para leer mejor <output data-output="shade"></output><input name="shade" type="range" min="0" max="90" step="5"></label><label>Posición<select name="position"><option value="center">Centro</option><option value="top">Arriba</option><option value="bottom">Abajo</option></select></label><label>Ajuste<select name="fit"><option value="cover">Cubrir la pantalla</option><option value="contain">Mostrar la imagen completa</option></select></label><div class="design-actions"><button type="button" data-remove>Quitar imagen</button></div></details>
  <details><summary>Acabados y guardado</summary><label>Esquinas de tarjetas<select name="radius"><option value="original">Originales</option><option value="0">Rectas</option><option value="8">Sutiles</option><option value="16">Redondeadas</option><option value="24">Muy redondeadas</option><option value="30">Suaves</option></select></label><div class="design-actions"><button type="button" data-export>Guardar ajustes</button><button type="button" data-import>Cargar ajustes</button><button type="button" data-reset>Restablecer estos ajustes</button></div><input data-json type="file" accept="application/json,.json" hidden><p>El archivo incluye tu imagen de fondo. Los enlaces de marca conservan los colores; estos ajustes se comparten con el archivo.</p></details><p class="design-status" role="status" aria-live="polite"></p>`;
  editor
    .querySelectorAll("summary")
    .forEach((summary) => summary.setAttribute("role", "button"));
  editor.querySelector("[name=radius]").parentElement.firstChild.textContent =
    "Esquinas · Rushybet y Resort";
  host.before(editor);
  const status = editor.querySelector(".design-status");
  let contentUI;
  function message(text) {
    status.textContent = text;
  }
  function paint() {
    for (const key of [
      "font",
      "scale",
      "weight",
      "radius",
      "imageEnabled",
      "shade",
      "position",
      "fit",
    ]) {
      const input = editor.querySelector(`[name="${key}"]`);
      if (input.type === "checkbox") input.checked = settings[key];
      else input.value = String(settings[key]);
    }
    for (const key of ["scale", "shade"])
      editor.querySelector(`[data-output="${key}"]`).value =
        settings[key] + "%";
    const image = editor.querySelector("[data-preview]");
    image.hidden = !settings.image;
    if (settings.image) image.src = settings.image;
    else image.removeAttribute("src");
  }
  function send(frame) {
    try {
      frame.contentWindow?.postMessage(
        { tipo: "design-extras", settings },
        location.origin,
      );
    } catch {}
  }
  function broadcast() {
    document.querySelectorAll("iframe").forEach(send);
  }
  function save() {
    settings = normalizeSettings(settings);
    try {
      localStorage.setItem(STORAGE, JSON.stringify(settings));
      message("Ajustes guardados en este navegador.");
    } catch {
      message(
        "El navegador no pudo guardarlos. Usá «Guardar ajustes» para conservarlos.",
      );
    }
    paint();
    contentUI?.paint();
    broadcast();
  }
  editor.addEventListener("input", (event) => {
    const input = event.target;
    if (
      !Object.hasOwn(DEFAULT_SETTINGS, input.name) ||
      input.name === "image" ||
      input.name === "content"
    )
      return;
    settings[input.name] =
      input.type === "checkbox" ? input.checked : input.value;
    save();
  });
  const frames = new WeakSet();
  function connect() {
    for (const frame of document.querySelectorAll("iframe"))
      if (!frames.has(frame)) {
        frames.add(frame);
        frame.addEventListener("load", () => send(frame));
        send(frame);
      }
  }
  new MutationObserver(connect).observe(
    document.getElementById("escena") || document.body,
    { childList: true, subtree: true },
  );
  connect();
  editor
    .querySelector("[name=imageFile]")
    .addEventListener("change", async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      try {
        if (
          !["image/jpeg", "image/png", "image/webp"].includes(file.type) ||
          file.size > 8 * 1024 * 1024
        )
          throw Error("Elegí un JPG, PNG o WebP de hasta 8 MB.");
        const image = await createImageBitmap(file);
        const ratio = Math.min(1, 1600 / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(image.width * ratio));
        canvas.height = Math.max(1, Math.round(image.height * ratio));
        canvas
          .getContext("2d")
          .drawImage(image, 0, 0, canvas.width, canvas.height);
        image.close();
        const result = canvas.toDataURL("image/webp", 0.82);
        if (result.length > 1600000)
          throw Error(
            "La imagen tiene mucho detalle. Probá una versión más pequeña.",
          );
        settings.image = result;
        settings.imageEnabled = true;
        save();
      } catch (error) {
        message(error.message || "No pudimos leer esa imagen.");
      }
      event.target.value = "";
    });
  editor.querySelector("[data-remove]").onclick = () => {
    settings.image = "";
    save();
  };
  editor.querySelector("[data-reset]").onclick = () => {
    settings = { ...DEFAULT_SETTINGS };
    save();
  };
  editor.querySelector("[data-export]").onclick = () => {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify({ version: 1, ajustes: settings }, null, 2)], {
        type: "application/json",
      }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "ajustes-diseno.json";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  editor.querySelector("[data-import]").onclick = () =>
    editor.querySelector("[data-json]").click();
  editor.querySelector("[data-json]").onchange = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 4 * 1024 * 1024)
        throw Error("El archivo debe pesar menos de 4 MB.");
      const value = JSON.parse(await file.text());
      const data = value.ajustes || value;
      if (
        !data ||
        typeof data !== "object" ||
        !Object.keys(DEFAULT_SETTINGS).some((key) => Object.hasOwn(data, key))
      )
        throw Error("Ese archivo no contiene ajustes de diseño.");
      settings = normalizeSettings(data);
      save();
    } catch (error) {
      message(error.message || "No pudimos cargar ese archivo.");
    }
    event.target.value = "";
  };
  contentUI = mountContentEditor(
    editor,
    () => settings.content,
    (value) => {
      settings.content = value;
      save();
    },
    message,
  );
  window.__designExtras = { estado: () => ({ ...settings }) };
  paint();
}
