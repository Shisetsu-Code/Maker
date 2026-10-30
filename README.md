# Maker — personalizador de casinos

[Demo en Cloudflare](https://rushybet-replica.braian-n-l.workers.dev) · [Repositorio](https://github.com/Shisetsu-Code/Maker)

Personalizador de muestra reconstruido a partir de capturas HAR, con diecisiete plantillas, vista de lobby y panel, simulación de computadora/celular y edición de marca. Resort (Rushybet 2) permite editar portada y distribución. Las plantillas externas Bateupix, Cobraya, Lunabet, Multisala, Pinaplay, Celuapuestas40, Bet30, CasinoTower30, Fenarys, Fortuna SJK, RavenBet y LuckRex usan recursos locales e interacciones demo.

## Qué se puede editar

- Plantilla desde un menú desplegable compacto, integrado al tema del Maker.
- Selección directa en la vista previa para editar imágenes, textos, botones, campos y bloques de las 17 plantillas.
- Estilos y visibilidad por elemento, restauración y deshacer/rehacer; guardado independiente por plantilla y pantalla.
- Nombre, logo, colores, fuentes, tamaño, peso y fondos propios.
- Portada Resort: título, descripción, botón e imagen.
- Secciones Resort: portada, búsqueda/categorías, juegos y casino en vivo; mostrar, ocultar y ordenar.
- Guardar/cargar ajustes JSON y restablecer los ajustes nuevos.

Las imágenes se comprimen localmente y los ajustes permanecen en el navegador. Los archivos de ajustes y de diseño incluyen las imágenes propias y las modificaciones de elementos. No se envían diseños ni imágenes a un servidor. Los juegos abren vistas locales de demostración; no hay apuestas reales.

## Ejecutar y verificar

```sh
npm ci
python -m pip install -r requirements-privacy.txt
npm test
npm run dev
```

Abrir `http://127.0.0.1:8787`. Con el servidor activo, ejecutar `npm run test:runtime`. Para probar el recorrido con navegador, ver [Pruebas](docs/PRUEBAS.md).

## Documentación

- [Manual del editor](docs/USO.md)
- [Edición visual de elementos](docs/EDICION-VISUAL.md)
- [Arquitectura y mantenimiento](docs/ARQUITECTURA.md)
- [Publicación y recuperación](docs/PUBLICACION.md)
- [Pruebas y límites](docs/PRUEBAS.md)
- [Privacidad, limpieza de imágenes y validación de navegación](docs/PRIVACIDAD-Y-VALIDACION.md)
- [Plantilla Bateupix y sanitización](docs/BATEUPIX.md)
- [Plantillas Cobraya y Lunabet](docs/COBRAYA-LUNABET.md)
- [Plantilla Multisala](docs/MULTISALA.md)
- [Plantilla Pinaplay](docs/PINAPLAY.md)
- [Plantilla Celuapuestas40](docs/CELUAPUESTAS40.md)
- [Plantillas Bet30 y CasinoTower30](docs/BET30-CASINOTOWER30.md)
- [Fenarys, Fortuna SJK, RavenBet y LuckRex](docs/FENARYS-FORTUNA-RAVENBET-LUCKREX.md)

El nombre npm y el Worker conservan `rushybet-replica` para mantener la dirección existente. El repositorio de entrega es Maker. La carpeta `outputs/` contiene documentos de etapas previas; las especificaciones originales describen la recuperación inicial, no todas las funciones posteriores.

## Alcance

Las cuatro plantillas originales conservan la distribución capturada, con edición visual de contenido y visibilidad. Resort añade controles específicos de portada y orden de secciones. Su catálogo es una selección de ocho juegos. El panel es compartido. Los favoritos de Resort son de sesión y pueden diferir entre las vistas de computadora y celular. Los recursos originales no capturados usan una vista previa local de respaldo. Los HAR, cookies, cabeceras y datos de sesión no se publican. La construcción comprueba privacidad y metadatos antes de permitir el despliegue; ver el alcance y los límites en la revisión de privacidad.
