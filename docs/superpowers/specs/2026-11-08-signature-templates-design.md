# Tres plantillas originales para Maker

## Objetivo

Ampliar el selector de 17 a 20 plantillas con Aureum, Kitsune y Orbit. Mantener el nivel de acabado de las plantillas recientes: portada ilustrada, navegación, catálogo real de demostración, personalización de marca y edición de elementos en escritorio y celular.

## Dirección elegida

Se agregan diseños originales sobre el editor existente. Adaptar otras capturas HAR requeriría referencias nuevas que no fueron proporcionadas; variar sólo colores no aportaría suficiente variedad visual. La decisión de implementar tres temas y sus nombres es de diseño, tomada para resolver el pedido abierto del usuario.

- **Aureum:** club editorial, verde profundo, champán y marfil, títulos serif y composición amplia.
- **Kitsune:** santuario japonés nocturno, zorro blanco, bermellón y tinta; bloques de descubrimiento expresivos.
- **Orbit:** estación espacial, azul profundo y menta, tipografía técnica y navegación lateral en escritorio.

Las portadas son imágenes originales sin textos incrustados. Títulos, botones y navegación permanecen en HTML editable. Los diseños usan recursos locales del repositorio para un catálogo curado compartido; no dependen de redes de terceros.

## Arquitectura y contratos

- `scripts/signature-lobbies-page.mjs` exporta `signatureLobbiesPage(slug, name)` y genera las tres páginas. `signature-lobbies.css` contiene el sistema visual y variaciones por `data-catalog`.
- `signature-catalog.mjs` contiene juegos locales y filtrado. `signature-lobbies.js` controla búsqueda, categorías, proveedor, favoritos, menú y diálogos. Se conserva el protocolo `window.__demo` (`vars`, `disc`, `imgs`, `estado`) y los mensajes con origen y padre comprobados.
- `scripts/install-lobby-templates.mjs` registra presets, nombres, rutas y opciones; genera HTML reproducible. Las páginas incluyen `design-editor.js` y `data-catalog` para el editor visual y su persistencia por plantilla.
- Los juegos abren únicamente la API demo existente. No se agregan pagos, cuentas reales ni motores de apuestas. El panel compartido conserva su comportamiento.
- El código sigue el JavaScript nativo y CSS del proyecto, sin bibliotecas nuevas.

## Calidad y límites

Comprobar anchuras de 1440, 768, 393 y 320 píxeles; recursos decodificables; teclado y foco; ausencia de desplazamiento horizontal; textos legibles sobre las portadas; preferencia de movimiento reducido. Los favoritos permanecen en sesión, como en las plantillas actuales. Cada tema debe funcionar dentro del editor y como página independiente.

## Verificación

Mantener los 41 tests existentes en verde. Probar el contrato de catálogo y registro idempotente, y realizar recorridos de navegador sobre las tres plantillas: filtros combinados, búsqueda vacía, favoritos, juego local, diálogos, marca, selección en Maker, recarga y edición visual. Guardar capturas de escritorio y celular para revisión.
