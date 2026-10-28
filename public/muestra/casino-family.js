import "./bateupix.js";
const slug = document.body.dataset.catalog;
try {
  const data = await (await fetch(slug + "/catalog.json")).json(),
    root = document.querySelector("#bf-categories");
  for (const group of data.groups) {
    const b = document.createElement("button");
    b.dataset.filter = "collection:" + group.id;
    b.textContent = group.name;
    root.append(b);
  }
} catch {
  document.querySelector("#bf-categories").textContent =
    "Podés explorar los juegos en el catálogo.";
}
