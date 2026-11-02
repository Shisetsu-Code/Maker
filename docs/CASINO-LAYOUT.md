# Base estandarizada de casino

Actualización del 2 de noviembre de 2026. Cinematic tiene 28 mundos: los 27 existentes y **Las Vegas de medianoche / MIDNIGHT**, con una portada individual de 1254×1254 píxeles. Todos usan el mismo HTML, catálogo, navegación y contrato de presentación.

## Elegir distribución

En el Maker, elegir Cinematic y usar **Distribución → Casino** o **Cinemática**. Los diseños anteriores mantienen la distribución Cinemática. El enlace `?world=vegas&layout=casino` abre la nueva presentación; cualquier otro mundo también admite `layout=casino`.

Casino reduce la portada, muestra categorías y catálogo antes, mantiene la búsqueda accesible al desplazarse y añade Ruleta, Blackjack y Recientes. El catálogo se organiza en Destacados, Nuevos, En vivo y Más juegos. Cada juego pertenece a una sola sección, incluso si se cambia el orden. Al buscar o filtrar se muestra una cuadrícula de resultados. Los botones de juego abren la vista previa de demostración existente.

## Controles compartidos

- Altura de portada: mínima; el contenido puede hacerla crecer para evitar recortes.
- Columnas en computadora: 3–6; celular: 2–3.
- Tamaño de tarjetas: compactas, normales o grandes.
- Adornos: apagados, sutiles o completos.
- Texto promocional: texto plano, hasta 180 caracteres.
- Orden de secciones: tres preajustes; el JSON admite cualquier orden válido completo.

Estos controles son comunes a todos los mundos; arte, identidad, paleta y ornamentos siguen siendo temáticos. Las sustituciones de texto/imagen del editor visual continúan guardándose por mundo. Guardar/cargar ajustes y descargar diseño incluyen `cinematic.presentation`. Un JSON anterior sin esa propiedad se normaliza a la vista Cinemática y los valores predeterminados. Los recientes se guardan localmente como IDs válidos de juegos abiertos, separados del diseño exportado.

## Código

`casino-settings.mjs` normaliza y acota los valores. `cinematic/catalog-layout.mjs` agrupa y filtra los datos sin duplicar juegos. `cinematic/casino.mjs` adapta el DOM compartido y `casino.css` aplica una cuadrícula común que prevalece sobre los estilos particulares de cada mundo. No hay una distribución distinta escrita para cada tema. `vegas.mjs` registra el mundo y sus seis iconos vectoriales.

El runtime `app.mjs`, `schema.mjs`, `icons.mjs`, `icon-registry.mjs` y `expansion-ui.mjs` pertenece ahora al Maker. El importador sólo refresca los módulos/estilos de ambientación seleccionados del commit fijado de Temas, el modelo base y el shell; conserva los adaptadores y controles propios. Así una reimportación no elimina funciones del Maker. Los PNG maestros y el manifiesto permanecen fuera de `public/`.

## Respaldo y recuperación

Antes del cambio se guardó la rama remota `backup/pre-casino-layout-20261102`, en `8c1ddd64619966869a96b1216f3cd9ec844c87e2`. También se creó y verificó el bundle `../Backups/Maker-pre-casino-layout-20261102.bundle`, con historial completo. Para comparar o recuperar, clonar el bundle en otra carpeta con esa rama; no sobrescribir el trabajo actual. Las preferencias privadas del navegador no forman parte del respaldo de código.

## Validación y alcance

`npm test` cubre normalización, partición sin duplicados y filtros. `tests/casino-maker-browser.cjs` recorre los 28 mundos en computadora/celular, categorías y recientes, controles, promoción segura, exportación/importación/recarga y regreso a Cinemática. Comprueba además que los juegos llegan a la primera pantalla móvil y que el botón de portada no se recorta. Se mantienen las pruebas previas del editor y las de integridad/metadatos de las 28 imágenes.

El catálogo continúa con doce juegos ficticios. La búsqueda de ruleta/blackjack usa los nombres de esta muestra; el futuro adaptador de API deberá proveer su tipo explícito. No se incorporan saldos, autenticación, pagos ni apuestas reales. Se actualiza sólo la Preview de Cinematic.

Resultado: 55 pruebas Node, tres de integridad/resolución/metadatos y ocho de privacidad correctas. El recorrido de Casino de 28 mundos en computadora/celular y el recorrido anterior completo del Maker pasaron también sobre la URL pública. La publicación revisó 10.395 imágenes sin inválidas ni metadatos pendientes. Despliegue de Preview: `54de5a04-9fc9-4302-9a19-94588a28966a`.

[Probar Las Vegas con distribución Casino](https://cinematic-trial-rushybet-replica.braian-n-l.workers.dev/muestra/socio.html?world=vegas&layout=casino&cinematicColor=world#v=1&n=Tu%20casino&vista=lobby&disp=celular&pl=cinematic).
