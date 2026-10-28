# Maker — personalizador de casinos

[Demo en Cloudflare](https://rushybet-replica.braian-n-l.workers.dev) · [Repositorio](https://github.com/Shisetsu-Code/Maker)

Personalizador de muestra reconstruido a partir de capturas HAR, con trece plantillas, vista de lobby y panel, simulación de computadora/celular y edición de marca. Resort (Rushybet 2) permite editar portada y distribución. Bateupix, Cobraya, Lunabet, Multisala, Pinaplay, Celuapuestas40, Bet30 y CasinoTower30 son plantillas externas reconstruidas con recursos locales e interacciones demo.

## Qué se puede editar

- Plantilla desde un menú desplegable compacto, integrado al tema del Maker.
- Nombre, logo, colores, fuentes, tamaño, peso y fondos propios.
- Portada Resort: título, descripción, botón e imagen.
- Secciones Resort: portada, búsqueda/categorías, juegos y casino en vivo; mostrar, ocultar y ordenar.
- Guardar/cargar ajustes JSON y restablecer los ajustes nuevos.

Las imágenes se comprimen localmente y los ajustes permanecen en el navegador. No se envían diseños ni imágenes a un servidor. Los juegos abren vistas locales de demostración; no hay apuestas reales.

## Ejecutar y verificar

Usar Node.js **24.22.1 LTS** (`.nvmrc`) y npm **12.2.1**. El frontend se compila desde `src/client` y `src/styles`; Wrangler sirve `dist/public`.

```sh
npm ci
npm run check
npm run dev
```

Abrir `http://127.0.0.1:8787`. Con el servidor activo, ejecutar `npm run test:runtime`. Para probar el recorrido con navegador, ver [Pruebas](docs/PRUEBAS.md).

## Documentación

- [Manual del editor](docs/USO.md)
- [Arquitectura y mantenimiento](docs/ARQUITECTURA.md)
- [Dependencias y política de actualización](docs/DEPENDENCIAS.md)
- [Fuentes locales y licencias](docs/FUENTES.md)
- [Publicación y recuperación](docs/PUBLICACION.md)
- [Pruebas y límites](docs/PRUEBAS.md)
- [Plantilla Bateupix y sanitización](docs/BATEUPIX.md)
- [Plantillas Cobraya y Lunabet](docs/COBRAYA-LUNABET.md)
- [Plantilla Multisala](docs/MULTISALA.md)
- [Plantilla Pinaplay](docs/PINAPLAY.md)
- [Plantilla Celuapuestas40](docs/CELUAPUESTAS40.md)
- [Plantillas Bet30 y CasinoTower30](docs/BET30-CASINOTOWER30.md)

El nombre npm y el Worker conservan `rushybet-replica` para mantener la dirección existente. El repositorio de entrega es Maker. La carpeta `outputs/` contiene documentos de etapas previas; las especificaciones originales describen la recuperación inicial, no todas las funciones posteriores.

## Alcance

Las otras cuatro plantillas conservan la distribución capturada; banners y orden de secciones se editan en Resort. Su catálogo es una selección de ocho juegos. El panel es compartido. Los favoritos de Resort son de sesión y pueden diferir entre las vistas de computadora y celular. La verificación combina referencias estáticas y recorridos de navegador; no cubre cada posible combinación de catálogos o juegos. `npm run check:assets` genera el inventario comprobado. Los HAR, cookies, cabeceras y datos de sesión no se publican.
