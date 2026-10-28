# Vistas recuperadas de Maker

Estas fuentes conservan la aplicación de las cinco vistas React que existían en
Maker `b6d354e`. React, React DOM y Zod se importan desde los paquetes mantenidos;
los catálogos grandes viven en `../catalogs/`. El build consume estas fuentes,
sin recuperar ni analizar los antiguos bundles de `public`.

Los archivos `classic-lobby.js`, `panel.js`, `azul.js`, `blaze.js` y `brasa.js`
son los puntos de arranque. Las entradas de `../entries/` siguen importando esas
mismas rutas. Cada carpeta contiene módulos por responsabilidad, con nombres
descriptivos para los componentes y operaciones principales.

## Contrato de inicialización

La aplicación recuperada inicializaba sus valores en una secuencia concreta:
catálogos, adaptadores demo, contextos React, esquemas Zod, estilos, comunicación
con el editor y montaje. Mover esas instrucciones directamente al nivel superior
de módulos ESM cambiaría su orden por el recorrido de los imports.

Por eso los módulos declaran sus funciones y bindings, y exponen una función
`initialize…` cuando tienen instrucciones de inicialización. El archivo de
arranque llama esas funciones una sola vez, en el orden de la aplicación
original. Los módulos que solo contienen funciones no necesitan inicializador.

- Las dependencias entre módulos son imports y exports explícitos de bindings.
- Ningún módulo asigna un valor a un binding importado. El estado y sus
  escritores permanecen en el mismo módulo.
- Algunos componentes conservan referencias circulares del programa capturado.
  No se leen valores de esos ciclos al importar: los inicializadores ordenados
  realizan las lecturas y efectos.
- No se debe ordenar alfabéticamente la secuencia de inicializadores ni llamar
  uno de ellos durante un render. Tampoco son funciones de reinicio.
- Para añadir una API reutilizable fuera de la vista, es preferible extraer un
  contrato puro con sus entradas explícitas. No se debe depender de que un
  import de un componente monte la aplicación.

La herramienta de recuperación valida la propiedad de cada binding y rechaza
escrituras entre módulos. Antes de escribir, vuelve a parsear el resultado y
compara las funciones y la secuencia completa de inicialización con el AST de
entrada. Esta comprobación no sustituye las pruebas de navegador.

## Mapa de responsabilidades

### Lobby clásico

| Módulo                                            | Responsabilidad                                                             |
| ------------------------------------------------- | --------------------------------------------------------------------------- |
| `demo-guards`, `demo-services`, `demo-actions`    | Avisos y adaptadores de la demo; conserva los módulos diferidos originales. |
| `demo-game-request`                               | Normalización pura del pedido para abrir un juego demo.                     |
| `game-catalog`, `game-search`, `game-preferences` | Catálogo, índices, orden, favoritos y recientes.                            |
| `brand-loader`, `brand-theme`                     | Animación de carga y transformación de la marca.                            |
| `account-security`, `account-helpers`             | Verificación, teléfonos y utilidades de cuenta.                             |
| `game-cards`, `lobby-sections`                    | Tarjetas, carruseles, secciones y carga diferida.                           |
| `mobile-lobby`, `desktop-lobby`                   | Componentes visuales de cada disposición.                                   |
| `legacy-support-chat`, `support-chat`             | Las dos rutas de soporte que conserva la captura.                           |
| `lobby-controller`, `demo-winners`                | Estado de la pantalla principal y datos de ganadores demo.                  |
| `preview-bridge`, `runtime`                       | Contrato con el editor, actualización de marca y montaje.                   |

### Panel

| Módulo                                                              | Responsabilidad                                                             |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `demo-dialogs`, `demo-services`                                     | Avisos, confirmaciones y adaptadores demo.                                  |
| `money-and-phone`, `demo-media`, `activity-ledger`, `cashier-rules` | Formatos, validaciones, medios y reglas recuperadas del panel.              |
| `state-schema`, `demo-operations`, `demo-api`                       | Esquema del estado, operaciones locales y adaptador que usa la interfaz.    |
| `cashier-controls`, `cash-transactions`, `approval-screen`          | Operaciones de caja, movimientos, pedidos y aprobaciones demo.              |
| `motion`, `ui-components`, `navigation`                             | Animaciones, componentes compartidos y navegación.                          |
| `referrals`, `monitoring`, `activity-screen`, `dashboard`           | Referidos, monitoreo, registro y resumen.                                   |
| `player-management`, `staff-management`, `casino-management`        | Gestión demo de jugadores, equipo y paneles.                                |
| `settings-screen`, `flyer-library`, `support-chat`                  | Configuración, flyers y conversaciones.                                     |
| `panel-shell`, `preview-bridge`                                     | Composición general y aplicación de marca/logo del editor.                  |
| `demo-data`, `state-store`, `dashboard-projection`, `runtime`       | Datos iniciales, persistencia local, proyección para la interfaz y montaje. |

### Azul

| Módulo                                   | Responsabilidad                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| `demo-guards`, `game-catalog`            | Interacciones demo y catálogo.                                           |
| `brand-colors`, `theme`                  | Colores derivados, recoloración de iconos y cambios de disposición.      |
| `asset-paths`                            | Conversión pura de rutas de recursos, utilizable desde herramientas.     |
| `element-adapter`                        | Adaptación de contenido, estilos y recursos con la configuración activa. |
| `desktop-layout`, `desktop-controller`   | JSX capturado y comportamiento de escritorio.                            |
| `mobile-layout`, `mobile-controller`     | JSX capturado y comportamiento de móvil.                                 |
| `rendering`, `preview-bridge`, `runtime` | Estilos, raíz React, comunicación con el editor y estado del preview.    |

### Blaze

| Módulo                                                     | Responsabilidad                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------------- |
| `demo-guards`, `game-catalog`, `element-adapter`           | Avisos, image slots capturados, catálogo y adaptación de elementos. |
| `authentication`, `game-search`, `game-player`             | Acceso, búsqueda y pantalla de juego.                               |
| `identity-verification`, `bet-history`, `account-settings` | Verificación demo, historial y cuenta.                              |
| `providers`, `statistics`, `help-center`, `wallet`         | Proveedores, estadísticas, ayuda y billetera demo.                  |
| `lobby-layout`, `lobby-controller`                         | Composición y comportamiento del lobby.                             |
| `brand-theme`, `preview-bridge`, `runtime`                 | Tema, contrato con el editor, estilos y montaje.                    |

### Brasa

| Módulo                                           | Responsabilidad                                    |
| ------------------------------------------------ | -------------------------------------------------- |
| `demo-guards`, `game-catalog`, `element-adapter` | Avisos, catálogo y adaptación de elementos.        |
| `colors`, `brand-theme`                          | Conversión de colores y tema.                      |
| `lobby-layout`, `lobby-controller`               | JSX capturado y comportamiento del lobby.          |
| `rendering`, `preview-bridge`, `runtime`         | Estilos, contrato con el editor, estado y montaje. |

## Contratos puros para herramientas y pruebas

```js
import { normalizeDemoGameRequest } from "./classic-lobby/demo-game-request.js";
import { resolveAzulAsset } from "./azul/asset-paths.js";

normalizeDemoGameRequest({
  demo: true,
  vendorCode: " pragmatic ",
  gameCode: " example ",
  channel: "mobile",
});
// { demo: true, vendorCode: "pragmatic", gameCode: "example", channel: "mobile" }

resolveAzulAsset("assets/hero-bg.png");
// "azul/assets/hero-bg.webp"
```

`normalizeDemoGameRequest` mantiene la validación original: objeto, `demo: true`,
códigos de proveedor y juego no vacíos después de trim y de hasta 120 caracteres.
Solo el canal `mobile` se conserva; los demás toman `desktop`. Los pedidos
inválidos devuelven `null`.

`resolveAzulAsset(value, configuration, overrides)` acepta una configuración
explícita `{ base, ext }` y un mapa de reemplazos por ruta normalizada. Sus valores
predeterminados son `{ base: "azul/", ext: ".webp" }` y `{}`. Las entradas que no
son strings que comienzan con `assets/` se devuelven intactas. El adaptador de la
vista llama la misma función con la configuración y los reemplazos actuales.

La única corrección de recurso incorporada a esta separación es el logo
predeterminado de Azul: `azul/assets/logo.webp` no estaba presente en la captura.
Sin un reemplazo personalizado se utiliza `rushybet/rushybet-logo.webp`, que sí
está disponible y corresponde a la marca predeterminada. La clave del mapa de
reemplazos sigue siendo `azul/assets/logo.webp`, por lo que una marca propia
mantiene su prioridad. Las demás rutas y configuraciones conservan su conversión.

## Límites de la recuperación

Los componentes de layout conservan árboles JSX grandes porque esos árboles
son una unidad visual de la captura. No se dividieron por número de líneas, ni
se reimplementaron sus controles. También se conservan nombres locales cortos,
expresiones compactas, adaptadores diferidos y ciertas rutas heredadas que no
corresponden a nuevas funciones del producto.

La separación permite trabajar sobre un área concreta y sustituirla con pruebas
de comportamiento. No convierte los adaptadores demo, los saldos locales ni las
pantallas de acceso en servicios de producción.

`tools/reconstruction/recover-views.mjs` es una herramienta de recuperación,
fuera del build habitual. Su modo `--modularize-existing` exige las cinco fuentes
monolíticas recuperadas y falla si recibe un arranque ya modularizado. Volver a
recuperar desde una referencia reemplaza estas fuentes; no debe usarse como
formateador ni como paso de desarrollo cotidiano.
