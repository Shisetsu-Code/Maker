# Cinematic · integración de prueba

La familia añade nueve mundos ilustrados del repositorio [Temas](https://github.com/Shisetsu-Code/Temas), revisión `3370909b82c40ee1d8d91768dc6e22ed706132d8`: Piratas, Dioses griegos, Cyberpunk, Steampunk, Espacial/aliens, Vaqueros, Candyworld, Dinosaurios y Fénix. La prueba conserva los doce juegos ficticios de Temas, con búsqueda, filtros, favoritos, diálogos e iconos. No conecta cuentas, apuestas, depósitos, retiros ni proveedores reales.

## Probarla

[Abrir la vista previa Cinematic](https://cinematic-trial-rushybet-replica.braian-n-l.workers.dev/muestra/socio.html?world=pirates&cinematicColor=world#v=1&n=Tu%20casino&vista=lobby&disp=celular&pl=cinematic). Publicación de prueba: 31 de octubre de 2026. [PR de la integración](https://github.com/Shisetsu-Code/Maker/pull/4).

1. Elegir **Cinematic · prueba** en Plantilla del lobby.
2. En el editor, elegir **Mundo**. También se puede usar **Cambiar universo** dentro del lobby.
3. Cada mundo conserva su paleta. Activar **Usar los colores de mi marca** para aplicar los controles de color del Maker.
4. Nombre y logo usan los controles habituales. Fuentes, fondo y selección visual están disponibles.
5. Los cambios de elementos se guardan por mundo. El panel de caja continúa compartido.

Para cambiar la portada, seleccionar un texto de la portada, pulsar **Imagen de este bloque** y subir una imagen. Se actualiza también su fondo difuminado. Cambiar de mundo finaliza la selección visual para evitar editar un elemento de la pantalla anterior.

**Guardar ajustes** y **Descargar mi diseño** incluyen el mundo y el modo de color. Cargar un JSON antiguo sigue funcionando. Las preferencias de Cinematic usan `maker:cinematic:preferences:v1`; los filtros y favoritos del catálogo usan `maker:cinematic:catalog:v1`. Las reglas visuales usan scopes `cinematic_<mundo>:lobby`; el panel usa `cinematic:panel`.

Las direcciones `?world=pirates` hasta `?world=phoenix` permiten abrir el Maker con un mundo elegido; los valores desconocidos se ignoran. `cinematicColor=brand` aplica colores de marca y `cinematicColor=world` mantiene los del mundo.

## Código y recursos

- `public/muestra/cinematic/`: HTML, módulos, estilos y dieciocho AVIF locales (nueve portadas y nueve atlas de iconos).
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

La importación actualiza sólo los archivos originales seleccionados de Temas, su shell integrado y el registro del Maker. Los adaptadores específicos de Maker son archivos separados.

## Respaldo y recuperación

Antes de la prueba se verificaron un ZIP completo, un bundle del historial y hashes SHA-256. Base: `c68639cc32ba4329d79205b36d7e4eedfee610b5`. La rama remota `backup/pre-cinematic-20261031` conserva ese estado.

Copias locales, fuera de public:

```text
../Backups/Maker-pre-cinematic-20261031-c68639c.zip
../Backups/Maker-pre-cinematic-20261031-c68639c.bundle
../Backups/Maker-pre-cinematic-20261031-c68639c.json
```

El ZIP contiene 10.542 archivos seguidos por Git. El bundle se verificó como historial completo. Para recuperar código sin tocar la copia actual, clonar el bundle en otro directorio con la rama `codex/validate-templates-and-image-privacy`, o extraer el ZIP en una carpeta nueva. No usar un reset destructivo del trabajo actual para comparar versiones.

Los ajustes privados del navegador siguen en su origen; no forman parte del ZIP del código. Una URL de preview tiene almacenamiento independiente. Para trasladar ajustes propios entre ambas direcciones, usar **Guardar ajustes** y **Cargar ajustes**.

## Publicación y verificación

La prueba se publica con [Cloudflare Previews](https://developers.cloudflare.com/workers/previews/configuration/), bajo el Worker existente y con `previews: {}`. Sólo utiliza los recursos estáticos de esta rama y la API de demostración, sin bindings de datos. La URL es pública, igual que la demo existente. La versión activa previa es `277536e4-acd6-4821-9809-c7bb12b4e9f9` y se conserva para comparar.

La Preview `cinematic-trial` usa el despliegue `d0ccc109-0b4b-452d-95d6-0ee5f68ccf33`. Se repitió el recorrido completo de Cinematic y las cuatro comprobaciones HTTP del Worker sobre la URL publicada. Se comprobó además que la dirección original conserva su selector anterior y la dirección de prueba incorpora Cinematic.

```sh
npx wrangler preview --name cinematic-trial --worker-name rushybet-replica --ignore-base-config
```

La comprobación de privacidad habitual se ejecuta antes de construir o publicar. Se verifican 18 imágenes nuevas, 47 pruebas de módulos y los recorridos del editor. `tests/cinematic-maker-browser.cjs` prueba los nueve mundos, filtros/favoritos, nombre, logo, paletas, sustitución de portada, reglas por mundo, JSON, recarga, mensajes ajenos rechazados, panel/lobby, otra plantilla y móvil. Se mantienen las pruebas anteriores de las 17 plantillas.

## Límites visuales

Las portadas son recortes conceptuales pequeños, ampliados para la prueba. No se generan ilustraciones HD nuevas. Los nueve mundos comparten estructura y catálogo; cambian identidad, arte, iconos y ambientación. Las nuevas funciones de catálogo masivo o backend quedan fuera de esta prueba.
