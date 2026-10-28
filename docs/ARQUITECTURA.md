# Arquitectura y mantenimiento

## Fuentes y compilación

Maker conserva sus trece plantillas y sus URLs, pero las seis aplicaciones JavaScript recuperadas ahora se construyen desde fuentes mantenidas. La compilación normal no necesita un HAR ni reemplazos de texto sobre código minificado.

| Capa | Ubicación | Responsabilidad |
|---|---|---|
| Entradas del navegador | `src/client/entries/` | Editor, lobby clásico, panel, Azul, Blaze y Brasa. |
| Editor y registro | `src/client/editor/` | Sesión, marca, colores, logo, enlaces, controles, vistas, presentación y exportación. `template-registry.js` define las trece plantillas. |
| Vistas React | `src/client/views/` | Componentes, estado y comportamiento de las pantallas recuperadas. Importan React/React DOM/Zod desde npm. |
| Catálogos compartidos | `src/client/catalogs/` | Datos originales separados del código y deduplicados durante la recuperación. |
| Estilos generados | `src/styles/` | Tailwind, tema original, utilidades de compatibilidad y CSS de la aplicación. |
| Plantillas DOM y recursos | `public/muestra/` y `public/assets/` | HTML, CSS, imágenes, fuentes y módulos propios de Resort y las plantillas añadidas. Son fuentes estáticas mantenidas, sin React vendorizado. |
| Runtime Cloudflare | `src/worker.mjs`, `src/demo-api.mjs` | Assets, alias de miniaturas y contratos de demostración. |
| Resultado publicable | `dist/public/` | Copia de recursos más seis bundles nuevos y `app.css`. Se genera y no se versiona. |

`npm run build` usa esbuild y Tailwind de la versión fijada en `package-lock.json`. Genera también `dist/build-manifest.json`, el grafo de entradas `dist/build-metafile.json` y mapas de código en `dist/sourcemaps/`. Los mapas quedan fuera del directorio de assets que sube Wrangler. Los avisos de licencia de las dependencias se conservan junto a los bundles.

Node.js 24.22.1 LTS y npm 12.2.1 son las herramientas de construcción. El servidor se ejecuta en workerd, no en un proceso Node. La configuración de Workers y las pruebas de runtime comprueban esa separación.

## Modificar o añadir una plantilla

Editar `src/client/editor/template-registry.js`: identificador estable, etiqueta, ruta, colores y capacidades. `scripts/template-choices.mjs` genera las opciones del HTML de salida desde ese registro; el selector visible de `template-picker.js` sigue usando los mismos controles, teclado y estado deshabilitado.

Los identificadores existentes forman parte de los enlaces guardados y del almacenamiento del navegador: no renombrarlos al cambiar una etiqueta visual. Mantener la ruta de cada vista y comprobar lobby, panel compartido, computadora y celular.

Las plantillas adicionales usan módulos DOM propios:

- `resort.html/css/js`: catálogo curado, búsqueda, favoritos y preview local. Portada y orden de secciones editables.
- `bateupix.js`: controlador compartido de ocho catálogos locales. Pinaplay, Celuapuestas40, Multisala y la familia Bet30/CasinoTower30 añaden sus módulos o estilos específicos.
- `design-settings.mjs` y `content-settings.mjs`: normalización de ajustes, imágenes locales, textos y secciones permitidas.
- `design-editor.js` y `content-editor.js`: controles, persistencia y comunicación de vistas del mismo origen.

`node scripts/install-lobby-templates.mjs` regenera el HTML de las siete familias generadas y sincroniza el selector con el registro. No modifica JavaScript compilado. Bateupix y Resort conservan sus páginas propias. Para añadir una sección Resort, extender `SECTION_NAMES`, el mapa de nodos, los valores iniciales y comprobar ocultado/orden/restablecimiento.

## Datos y comportamiento conservado

El código de marca mantiene el formato de hash versión uno. Los ajustes adicionales usan `rushybet:design-extras:v1` en localStorage; se normalizan al leer, importar y editar. Las imágenes del usuario se comprimen y guardan como data URL. Los diseños se comparten por JSON; no se sincronizan automáticamente entre equipos.

Las vistas aceptan mensajes sólo desde su padre del mismo origen. Los textos de contenido se asignan con `textContent`. La tipografía usa tamaños base medidos sin escala para evitar multiplicaciones sucesivas. Los catálogos importados contienen únicamente los campos públicos permitidos por cada sanitizador.

`/api/muestra/juego-demo` abre una vista de demostración local. El panel es una simulación. El repositorio no contiene todavía el backend comercial de cuentas, prepago, APIs por cliente, RTP, cobros ni provisión automática de dominios. Esas integraciones necesitan sus contratos de API y otro trabajo explícito; la reconstrucción conserva el alcance del Maker existente.

## Recuperación y procedencia

El HAR inicial no contiene el proyecto fuente original ni source maps del Maker. Se recuperaron las instrucciones del navegador y se contrastaron con el commit `b6d354e9108f72598f319b02a358d01a4089671c`, que ya incorpora las trece plantillas. Conservar ese punto de comparación evita perder las mejoras posteriores a la captura.

`tools/reconstruction/` documenta la extracción única de las vistas y sus hashes de procedencia. Es una herramienta de auditoría/migración, fuera del build habitual; volver a ejecutarla sobre fuentes ya editadas puede sobrescribir trabajo y debe hacerse en un directorio de análisis separado.

Para inspeccionar una captura futura:

```sh
node scripts/recover.mjs --out work/capture-public "captura.har"
```

No recuperar una captura directamente encima de `public/`: el HAR puede contener versiones anteriores del código. Revisar el manifiesto intermedio y trasladar sólo los recursos necesarios. Para actualizar catálogos de las plantillas adicionales, usar sus sanitizadores específicos, que aceptan JSON en texto o base64 y proyectan los campos autorizados. Los HAR y sus datos de sesión quedan fuera del repositorio.

Los antiguos scripts que buscaban nombres minificados como `Bn`, `Wn` o `Nr` fueron retirados. Las siguientes modificaciones se hacen sobre módulos, registro y estilos fuente; los bundles se regeneran.

## Verificación y actualizaciones

Consultar [PRUEBAS.md](PRUEBAS.md) para contratos, recorridos y comparación visual; [PUBLICACION.md](PUBLICACION.md) para Cloudflare y Workers for Platforms. El verificador de recursos analiza la salida `dist/public`, los catálogos y los mapeos de imágenes. Resuelve los alias de miniaturas del Worker y la conversión de PNG a WebP que hace Azul antes de comprobar existencia.

Las versiones directas están fijadas y Dependabot propone actualizaciones semanales de npm y GitHub Actions. React/React DOM y Tailwind/CLI se actualizan en grupo. Una versión reciente y una auditoría sin avisos son verificaciones puntuales: mantenerlas exige revisar y probar las actualizaciones posteriores.
