# Cinematic · integración de prueba

La familia incorpora **27 mundos** del repositorio [Temas](https://github.com/Shisetsu-Code/Temas), revisión `7c4165ba90352dce24ef2c7e888b83db0a1a1499`. Se conservan Piratas, Dioses griegos, Cyberpunk, Steampunk, Espacial/aliens, Vaqueros, Candyworld, Dinosaurios y Fénix, con sus nueve portadas mejoradas.

La ampliación del 1 de noviembre de 2026 añade Egipto oscuro, Japón samurái, China imperial, India palaciega, Vikingos, Atlántida, Dragones, Vampiros, Art Déco, Baile de máscaras, Día de Muertos, Alquimia, Reino de hielo, Bosque encantado, Automovilismo, Desierto posapocalíptico, El Dorado y Palacio astral. Incluye búsqueda de universos y filtros Todos/Nuevos/Originales; son mundos dentro de una sola familia del Maker. La prueba conserva doce juegos ficticios, con búsqueda, filtros, favoritos, diálogos e iconos. No conecta cuentas, apuestas, depósitos, retiros ni proveedores reales.

## Probarla

[Abrir la vista previa Cinematic](https://cinematic-trial-rushybet-replica.braian-n-l.workers.dev/muestra/socio.html?world=pirates&cinematicColor=world#v=1&n=Tu%20casino&vista=lobby&disp=celular&pl=cinematic). Publicación de prueba: 31 de octubre de 2026. [PR de la integración](https://github.com/Shisetsu-Code/Maker/pull/4).

1. Elegir **Cinematic · prueba** en Plantilla del lobby.
2. En el editor, elegir **Mundo**. También se puede usar **Cambiar universo** dentro del lobby.
3. Cada mundo conserva su paleta. Activar **Usar los colores de mi marca** para aplicar los controles de color del Maker.
4. Nombre y logo usan los controles habituales. Fuentes, fondo y selección visual están disponibles.
5. Los cambios de elementos se guardan por mundo. El panel de caja continúa compartido.

Para cambiar la portada, seleccionar un texto de la portada, pulsar **Imagen de este bloque** y subir una imagen. Se actualiza también su fondo difuminado. Cambiar de mundo finaliza la selección visual para evitar editar un elemento de la pantalla anterior.

**Guardar ajustes** y **Descargar mi diseño** incluyen el mundo y el modo de color. Cargar un JSON antiguo sigue funcionando. Las preferencias de Cinematic usan `maker:cinematic:preferences:v1`; los filtros y favoritos del catálogo usan `maker:cinematic:catalog:v1`. Las reglas visuales usan scopes `cinematic_<mundo>:lobby`; el panel usa `cinematic:panel`.

Las direcciones `?world=pirates`, `?world=japan`, `?world=astral` y los demás IDs registrados en `schema.mjs` permiten abrir el Maker con un mundo elegido; los valores desconocidos se ignoran. `cinematicColor=brand` aplica colores de marca y `cinematicColor=world` mantiene los del mundo.

## Código y recursos

- `public/muestra/cinematic/`: HTML, módulos, estilos, 27 portadas y los recursos originales conservados. Los nuevos módulos `expansion.mjs`, `expansion-icons.mjs`, `expansion-ui.mjs` y `expansion.css` definen los 18 mundos, sus 108 iconos vectoriales y los filtros de universos.
- `artwork/cinematic-hd/`: originales PNG de las 27 ilustraciones y manifiesto con dimensiones y hashes; fuera del directorio publicado.
- `scripts/prepare-cinematic-art.py`: reconstruye los AVIF desde esos originales, sin ampliar ni reducir sus dimensiones.
- `cinematic/maker-bridge.mjs`: contrato `__demo`, nombre/logo/colores, sincronización de portada y eventos del iframe. Sólo acepta mensajes del padre del mismo origen.
- `cinematic-controls.js/css` y `cinematic-settings.mjs`: selector secundario, preferencias, normalización y ámbito de edición.
- `scripts/install-cinematic.mjs`: importación reproducible del checkout de Temas y registro de la familia, sin duplicarla.

La política HTTP de Temas que impedía el iframe no se copia: la página integrada permite recursos locales y el editor del mismo origen. No se relajan las políticas de las otras plantillas. Los metadatos de procedencia se documentan aquí, fuera del directorio publicado, y no se copian los manifiestos de origen.

Para repetir la importación desde el checkout de esa revisión:

```sh
node scripts/install-cinematic.mjs ../Temas-review
python scripts/image_privacy.py --root public/muestra/cinematic
npm test
```

La importación actualiza sólo los archivos originales seleccionados de Temas, su shell integrado y el registro del Maker. Los adaptadores específicos de Maker son archivos separados. Se omite `expansion-art.mjs`: las 27 portadas son AVIF individuales locales, sin reconstruir recortes en canvas. La hoja de expansión se resuelve respecto de su módulo para cargar correctamente dentro del iframe anidado. La importación conserva las imágenes mejoradas y el contrato de edición visual.

## Respaldo y recuperación

Antes de la prueba se verificaron un ZIP completo, un bundle del historial y hashes SHA-256. Base: `c68639cc32ba4329d79205b36d7e4eedfee610b5`. La rama remota `backup/pre-cinematic-20261031` conserva ese estado.

Copias locales, fuera de public:

```text
../Backups/Maker-pre-cinematic-20261031-c68639c.zip
../Backups/Maker-pre-cinematic-20261031-c68639c.bundle
../Backups/Maker-pre-cinematic-20261031-c68639c.json
```

El ZIP contiene 10.542 archivos seguidos por Git. El bundle se verificó como historial completo. Para recuperar código sin tocar la copia actual, clonar el bundle en otro directorio con la rama `codex/validate-templates-and-image-privacy`, o extraer el ZIP en una carpeta nueva. No usar un reset destructivo del trabajo actual para comparar versiones.

La rama remota `backup/cinematic-nine-hd-20261101` conserva la versión de nueve mundos con arte mejorado, anterior a esta ampliación (`fb25702`). Los nueve PNG y AVIF anteriores no se modifican.

Los ajustes privados del navegador siguen en su origen; no forman parte del ZIP del código. Una URL de preview tiene almacenamiento independiente. Para trasladar ajustes propios entre ambas direcciones, usar **Guardar ajustes** y **Cargar ajustes**.

## Publicación y verificación

La prueba se publica con [Cloudflare Previews](https://developers.cloudflare.com/workers/previews/configuration/), bajo el Worker existente y con `previews: {}`. Sólo utiliza los recursos estáticos de esta rama y la API de demostración, sin bindings de datos. La URL es pública, igual que la demo existente. La versión activa previa es `277536e4-acd6-4821-9809-c7bb12b4e9f9` y se conserva para comparar.

La Preview `cinematic-trial` se actualiza independientemente de producción. Su primer despliegue fue `d0ccc109-0b4b-452d-95d6-0ee5f68ccf33`. Se repite el recorrido de Cinematic sobre la URL publicada. La dirección original conserva su selector anterior y la dirección de prueba incorpora Cinematic.

La ampliación de 27 mundos usa el despliegue de Preview `abc32a67-b7f0-46b1-9e09-e40366d4b39b`, publicado el 1 de noviembre de 2026. El recorrido completo del Maker y las comprobaciones de distribución de los 18 mundos nuevos en computadora/celular pasaron sobre la URL pública. La comprobación previa a publicar revisó 10.394 imágenes sin recursos inválidos ni metadatos pendientes.

```sh
npx wrangler preview --name cinematic-trial --worker-name rushybet-replica --ignore-base-config
```

La comprobación de privacidad habitual se ejecuta antes de construir o publicar. Se verifican 52 pruebas de módulos y tres pruebas de resolución, dimensiones, metadatos e integridad del manifiesto (`npm run test:art`), además de los recorridos del editor. `tests/cinematic-maker-browser.cjs` prueba los 27 mundos, resolución real de cada portada, buscador de universos, filtros 27/18/9, filtros/favoritos del catálogo, nombre, logo, paletas, sustitución de portada en mundos antiguos y nuevos, reglas por mundo, JSON, recarga, mensajes ajenos rechazados, panel/lobby, otra plantilla y móvil. `tests/cinematic-expansion-layout-browser.cjs` recorre los 18 mundos nuevos en computadora y celular, verifica desbordamientos y carga de recursos, y genera capturas representativas. Se mantienen las pruebas anteriores de las 17 plantillas.

## Marcos y separadores temáticos

El 2 de noviembre de 2026 se añadieron 27 conjuntos vectoriales de esquinas y líneas, definidos en `cinematic/frames.mjs` y presentados con `frames.css`. Incluyen cabo trenzado para Piratas, grecas para Olimpo, circuitos para Cyberpunk, engranajes para Steampunk, arcos ojivales para Vampiros, olas para Atlántida y plumas de fuego para Fénix. Los motivos se aplican a portada, categorías, separadores, tarjetas y pequeños acentos. Usan el color de acento vigente, incluido el modo de marca del Maker.

Las esquinas mantienen su proporción al cambiar de tamaño; en celular se reducen y las líneas laterales pierden intensidad. La capa decorativa está oculta a lectores de pantalla y no recibe clics. Se reemplaza el contorno anterior de la portada. El importador conserva estos adaptadores propios del Maker. `tests/cinematic-frames-browser.cjs` verifica los 27 motivos distintos, el cambio de mundo, una sola capa decorativa, ausencia de desbordamiento en computadora/celular y ausencia de errores de navegador.

## Resolución de las ilustraciones

El 31 de octubre se sustituyeron las nueve portadas conceptuales pequeñas por ilustraciones generadas individualmente. El 1 de noviembre se generaron otras 18: las 27 tienen resolución nativa de **1254 × 1254 píxeles**. No son 4K ni se han ampliado artificialmente. Los 27 AVIF suman 14.883.890 bytes, aproximadamente 15 MB; el conjunto incluye portada y miniaturas de universos, con carga diferida en la galería. Los nueve atlas de iconos originales se conservan; los nuevos iconos son vectoriales.

Los PNG y AVIF se reconstruyen sin EXIF, XMP ni comentarios mediante `python scripts/prepare-cinematic-art.py`. Para importar sólo algunas ilustraciones sin modificar las demás, usar `--import-sources ruta-local.json` con un mapa de IDs permitidos a archivos locales; ese archivo privado no se publica. El manifiesto no incluye rutas privadas. La rama `backup/cinematic-concept-20261031` conserva el estado conceptual anterior y los recursos originales siguen disponibles. La identidad de las portadas se normaliza a su ruta antigua para que las imágenes personalizadas ya guardadas continúen aplicándose.

Los 27 mundos comparten estructura y catálogo; cambian identidad, arte, iconos, detalles de marcos/botones y ambientación. Las nuevas funciones de catálogo masivo o backend quedan fuera de esta prueba.
