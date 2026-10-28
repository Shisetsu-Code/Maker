# Fuentes locales y procedencia

Las hojas de Google Fonts incluidas en Maker se sirven íntegramente desde el
propio sitio. No necesitan consultar la API de Google Fonts ni descargar fuentes
en el navegador. Se conservaron las versiones y los subconjuntos exactos que ya
declaraban los CSS; esta operación no convierte ni modifica archivos tipográficos.

## Inventario

La reconstrucción conserva **8 CSS, 391 declaraciones `@font-face`, 121 WOFF2 y
16 familias**. Los archivos tipográficos suman **2.497.504 bytes**. Dieciséis
WOFF2 ya estaban recuperados; se incorporaron las otras 105 variantes, que suman
2.061.564 bytes, desde sus URLs públicas originales de `fonts.gstatic.com`.

Los ocho CSS son idénticos a los del commit de referencia, salvo la sustitución
de `https://fonts.gstatic.com/` por `/assets/external/fonts.gstatic.com/`. Se
mantienen el orden de las reglas, `font-family`, `font-style`, `font-weight`,
`font-display`, `unicode-range` y todas las demás declaraciones. Los dieciséis
archivos previamente recuperados conservaron sus bytes.

| Familia               | WOFF2 | Versión interna del archivo | Licencia de distribución                                                    |
| --------------------- | ----: | --------------------------- | --------------------------------------------------------------------------- |
| Anton                 |     3 | 2.116                       | OFL-1.1                                                                     |
| Archivo               |     3 | 2.001                       | OFL-1.1                                                                     |
| Barlow                |    12 | 1.408                       | OFL-1.1                                                                     |
| Barlow Condensed      |    12 | 1.408                       | OFL-1.1                                                                     |
| Bebas Neue            |     2 | 2.000                       | OFL-1.1                                                                     |
| Big Shoulders Display |     3 | 2.002                       | OFL-1.1                                                                     |
| Figtree               |     2 | 2.002                       | OFL-1.1                                                                     |
| IBM Plex Mono         |    10 | 2.3                         | OFL-1.1                                                                     |
| Inter                 |    14 | 4.001                       | OFL-1.1                                                                     |
| Manrope               |     6 | 4.504                       | OFL-1.1                                                                     |
| Oswald                |     5 | 4.103                       | OFL-1.1                                                                     |
| Roboto                |    18 | 3.015                       | OFL-1.1                                                                     |
| Roboto Condensed      |    14 | 3.008                       | OFL-1.1; también se conserva el aviso Apache-2.0 incorporado en esa versión |
| Saira                 |     3 | 1.101                       | OFL-1.1                                                                     |
| Saira Condensed       |     9 | 0.072                       | OFL-1.1                                                                     |
| Unbounded             |     5 | 1.701                       | OFL-1.1                                                                     |

Las versiones de esta tabla proceden de la tabla `name` de los WOFF2. Los
directorios `v13`, `v20`, etc. de Google identifican sus recursos de distribución;
no se presentan aquí como versiones internas de las fuentes.

## Archivos y manifiesto

- CSS: `public/assets/external/fonts.googleapis.com/*.css`.
- Fuentes: `public/assets/external/fonts.gstatic.com/s/<familia>/<versión>/<archivo>.woff2`.
- Manifiesto: [`public/assets/external/fonts.gstatic.com/manifest.json`](../public/assets/external/fonts.gstatic.com/manifest.json).
- Licencias y avisos completos: `public/assets/external/fonts.gstatic.com/licenses/<familia>/`.

El manifiesto registra la URL original exacta, ruta local, número de bytes y
SHA-256 de cada WOFF2. Vincula cada archivo con las declaraciones CSS que lo
utilizan, incluidos familia, peso, estilo y rango Unicode. Distingue los archivos
que ya existían de los descargados y conserva el estado HTTP y MIME comprobados
para estos últimos. También registra los hashes de los CSS y las fuentes
inmutables de cada licencia.

Todos los archivos descargados respondieron **HTTP 200** y **`font/woff2`**. El
localizador verifica la firma `wOF2`, la longitud declarada de la cabecera, la
presencia de tablas y el límite de tamaño antes de guardar un archivo. Una
comprobación adicional con FontTools pudo leer las tablas de los 121 WOFF2.

## Uso sin red

La comprobación habitual no descarga ni escribe archivos:

```sh
node scripts/localize-fonts.mjs --check
```

La operación de localización tampoco usa Internet por defecto:

```sh
node scripts/localize-fonts.mjs
```

Valida los archivos existentes y, si hay alguna URL original cuyo WOFF2 ya está
guardado, cambia solamente esa URL a su ruta local. La función
`localizeSharedFonts()` que utiliza `installDesignEditor()` conserva este mismo
comportamiento sin red. Nunca elimina variantes ni bloques `@font-face`. Si
falta un archivo, la operación falla con una indicación explícita del comando de
descarga; conserva los CSS.

El build normal consume los recursos versionados en Git. No se debe añadir
`--download` a la compilación, a la instalación del editor ni al despliegue.

## Recuperar archivos faltantes o incorporar variantes declaradas

La descarga exige una opción explícita:

```sh
node scripts/localize-fonts.mjs --download --concurrency 4
node scripts/localize-fonts.mjs --check
```

El script permite entre uno y seis trabajos simultáneos; usa cuatro por defecto.
Solo descarga las rutas WOFF2 versionadas declaradas por los CSS desde
`https://fonts.gstatic.com/s/…` y los archivos de licencia fijados a commits de
`google/fonts`. Rechaza redirecciones y recursos de otros orígenes. No consulta
la API de Google Fonts ni reproduce solicitudes del HAR.

En una red que requiera las variables de proxy del entorno, Node 24 permite
ejecutar el mismo paso explícito con:

```sh
node --use-env-proxy scripts/localize-fonts.mjs --download --concurrency 4
```

Si ya hay un manifiesto, cada archivo existente o recuperado debe coincidir con
su SHA-256 registrado. Una diferencia de integridad se informa como error; no se
actualiza silenciosamente el hash. Las fuentes nuevas necesitan una licencia
verificada por familia en `scripts/localize-fonts.mjs` antes de incorporarlas.

Los CSS se reescriben únicamente después de validar todos los archivos y sus
licencias. Si una descarga falla por estado HTTP, MIME, formato o hash, se
conservan las URLs y las declaraciones anteriores. Los archivos válidos ya
descargados quedan disponibles para reintentar; no se inventan sustituciones.

## Licencias y avisos de autoría

Las dieciséis licencias se verificaron individualmente en el repositorio
[oficial `google/fonts`, commit `9862abc066c9b83bf84c3e8ed1fc2d8d48f9bbf0`](https://github.com/google/fonts/tree/9862abc066c9b83bf84c3e8ed1fc2d8d48f9bbf0/ofl).
Se conserva el `OFL.txt` íntegro de cada familia, con su aviso de autoría y sus
nombres reservados cuando los declara. El manifiesto enlaza cada copia con su
archivo oficial y registra su hash; no se reemplazaron los avisos por una
licencia genérica compartida.

### Roboto Condensed 3.008: conservar las dos referencias

Los catorce WOFF2 de Roboto Condensed conservan en su tabla `name` el copyright
de Google de 2011 y una URL de Apache License 2.0. Los
[metadatos oficiales de Google Fonts](https://github.com/google/fonts/blob/9862abc066c9b83bf84c3e8ed1fc2d8d48f9bbf0/ofl/robotocondensed/METADATA.pb)
declaran OFL y vinculan expresamente esos archivos con la versión 3.008 y el
commit de origen `8aa699a9a715be7ecf6be41171e2851a580f0fb8`. La
[migración oficial de agosto de 2023](https://github.com/google/fonts/commit/ae50998cbcab558ae1f047ad5c724ec7261980ca)
añadió `OFL.txt` y trasladó los archivos de la familia desde `apache/` a `ofl/`.

Para no perder ninguno de estos avisos, la carpeta local de Roboto Condensed
incluye:

- `OFL.txt`, copiado de la distribución oficial fijada por commit.
- `APACHE-2.0.txt`, copiado de la
  [licencia histórica oficial](https://github.com/google/fonts/blob/7b64519fb0fd8b03b563b32ff55d2362db2c90bf/apache/robotocondensed/LICENSE.txt).
- `METADATA.pb`, con la declaración OFL y el vínculo a la versión exacta.

El manifiesto identifica esta diferencia explícitamente. No se modificaron los
metadatos de los WOFF2 ni se cambiaron las fuentes por otra versión.

## Apariencia y regresiones

La localización conserva el aspecto que producen las fuentes originales cuando
están disponibles. Un equipo que antes bloquease Google Fonts podrá mostrar
ahora las variantes que antes caían en una fuente de sustitución; esa diferencia
de disponibilidad debe distinguirse de un cambio en los archivos o estilos.

```sh
node --test tests/localize-fonts.test.mjs
```

Las pruebas cubren la operación sin red, la conservación de todas las
declaraciones, la idempotencia, la descarga explícita y deduplicada, el rechazo de
HTTP/MIME/WOFF2 inválidos sin alterar CSS, la integridad frente al manifiesto y
los avisos de Roboto Condensed. La comprobación de los recursos versionados
también se ejecuta sin red.
