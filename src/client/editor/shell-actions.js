/** Connect the presentation action to the existing full-view control. */
export function mountShowDesignAction(
  container,
  createAction,
  root = document,
) {
  const action = createAction(
    "btn-mandar-diseno",
    "Mostrar diseño",
    "i-expand",
    true,
    "Mostrar diseño",
  );
  action.boton.addEventListener("click", () =>
    root.getElementById("btn-entera")?.click(),
  );
  container.prepend(action.ancla);
}
