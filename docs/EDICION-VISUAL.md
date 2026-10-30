# Edición visual de las plantillas

El editor permite modificar elementos de la interfaz en las 17 plantillas, tanto en el lobby como en el panel. Los cambios de contenido se guardan por **plantilla y pantalla**; los controles generales de tipografía/fondo conservan su alcance compartido.

## Uso

1. Elegir la plantilla y abrir **Editar elementos de la plantilla** dentro del editor.
2. Pulsar **Seleccionar en vista previa** y tocar una imagen, texto, botón, campo o bloque. En celular el editor se aparta para dejar seleccionar; vuelve a abrirse al elegir un elemento.
3. Cambiar el contenido o su estilo desde los controles que aparecen.
4. Pulsar **Terminar selección** o Esc para volver a usar los botones del casino normalmente.

Durante la selección los clics eligen elementos y no ejecutan sus acciones. La navegación y los juegos demo vuelven a responder al terminar. «Mostrar diseño» y «Descargar mi diseño» terminan la selección automáticamente.

## Qué se puede cambiar

- Imágenes visibles, miniaturas, portadas y fondos de elementos: subir JPG, PNG o WebP, elegir cubrir/contener y posición, o recuperar la imagen original.
- Textos de títulos, párrafos, etiquetas y botones, conservando iconos y acciones. Si un título tiene varios fragmentos con formatos distintos, tocar el fragmento que se quiere editar.
- Textos de ayuda de campos mediante su placeholder; no se alteran valores de cuenta ni comportamiento de formularios.
- Color de texto, fondo y borde; tamaño y peso de letra; alineación, esquinas, espacio interior, ancho, alto y grosor del borde.
- Visibilidad del elemento o del bloque contenedor.

**Imagen de este bloque** permite llegar a una portada situada detrás de un texto o a un fondo CSS. **Seleccionar bloque contenedor** sube a la sección/tarjeta que contiene el elemento; Alt + clic también permite seleccionar un bloque.

La misma imagen se identifica por su recurso original y sus copias dentro de una plantilla comparten el cambio. Las tarjetas con imagen se identifican por el recurso del juego, para que un filtro no aplique la modificación a otra tarjeta situada en la misma posición.

## Recuperar y guardar

La lista **Cambios de esta plantilla** permite volver a seleccionar o restaurar un elemento, incluso si está oculto. Hay deshacer/rehacer, restauración de un elemento y restauración de la pantalla actual. La secuencia de escritura se agrupa para que deshacer sea útil al editar textos.

El guardado es local en IndexedDB y no envía imágenes ni contenido a un servidor. **Guardar ajustes** produce un JSON versión 2 con los ajustes generales y todos los cambios de elementos; **Descargar mi diseño** también incluye el contenido dentro de `ajustes.elementos`. **Cargar ajustes** acepta ambos formatos y los archivos versión 1 anteriores. El restablecimiento general de ajustes también elimina las modificaciones de elementos; estas modificaciones de contenido pueden recuperarse desde el historial de elementos durante esa sesión.

Las imágenes se convierten a WebP en el navegador, con un máximo de 1.600 px en su lado mayor y 600.000 caracteres por recurso. Se admiten hasta 40 imágenes propias, con un presupuesto conjunto de 16 MiB de datos codificados, y hasta 150 cambios por pantalla. La importación admite archivos de hasta 24 MiB. Si falla el guardado del navegador, se muestra un aviso para exportar una copia. Los enlaces de marca no contienen estos recursos: para compartirlos hay que usar el JSON.

## Alcance y mantenimiento

Se edita la interfaz exterior del casino, no el contenido interno de motores de juego o iframes ajenos. Las versiones de computadora y celular pueden tener textos o estructuras distintos; en esos casos se selecciona y edita cada versión. Si una plantilla cambia su estructura en una actualización futura, puede ser necesario restaurar o volver a seleccionar algún bloque.

- `element-settings.mjs`: normalización y límites de reglas, selectores y recursos.
- `element-store.mjs`: carga y guardado local en IndexedDB.
- `element-editor.js/css`: panel, selección, historial, archivos y comunicación con la vista activa.
- `element-view.js`: selección visual, aplicación/restauración de cambios y seguimiento de contenido dinámico.

No se acepta HTML, JavaScript ni CSS arbitrario. Los textos se asignan a nodos de texto, los estilos se limitan a propiedades y valores permitidos, las imágenes propias son raster codificado y los mensajes sólo se aceptan desde la ventana padre o los iframes activos del mismo origen. Los ajustes no modifican los archivos del catálogo ni servicios externos.

## Verificación

`npm test` cubre normalización, aislamiento por plantilla/pantalla y seguimiento de tarjetas. Con Playwright disponible en `WORKSPACE_NODE_MODULES` y `DEMO_ORIGIN` apuntando al servidor:

```sh
node tests/element-editor-browser-smoke.cjs
node tests/element-editor-coverage-browser.cjs
node tests/element-overlap-browser.cjs
node tests/editor-browser-smoke.cjs
```

El primer recorrido prueba selección, texto/estilo, imagen, ocultar, historial, recarga, aislamiento, tarjetas filtradas y archivos. El segundo modifica un texto existente en cada una de las 17 plantillas y verifica selección móvil. El tercero conserva la cobertura de tipografía, fondos, Resort y compatibilidad con archivos anteriores.
