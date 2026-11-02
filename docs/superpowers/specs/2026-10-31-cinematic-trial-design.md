# Prueba Cinematic en Maker

El usuario aprobó probar la familia Cinematic del repositorio Temas después de hacer un backup. Es una integración experimental reversible para comparar visualmente, sin cambiar el catálogo de las plantillas existentes ni conectar apuestas, cuentas o pagos.

## Diseño acordado

Una opción Cinematic en el selector del Maker y un selector secundario con nueve mundos: piratas, dioses griegos, cyberpunk, steampunk, espacial, vaqueros, Candyworld, dinosaurios y fénix. Se conserva su interfaz funcional y catálogo de doce juegos ficticios. Se usan los recursos del commit `3370909b82c40ee1d8d91768dc6e22ed706132d8` de Temas; no se modifica ese repositorio.

La paleta del mundo será la opción inicial; un control explícito permite aplicar los colores de la marca del Maker. Nombre, logo, fuentes, fondos y selección visual se integran con el editor. Las ediciones visuales del lobby se guardan por mundo; el panel sigue siendo compartido. Los ajustes JSON incluyen mundo y modo de color.

## Enfoques y decisión

- Nueve plantillas duplicadas: se descartó porque repite código y llena el selector.
- Una familia con nueve mundos: propuesta en el análisis y aceptada por el usuario; comparte navegación, estado y catálogo.
- Reemplazar una plantilla actual: se descartó para permitir comparación y recuperación sencilla.

## Límites de la prueba

Se conserva el arte conceptual de baja resolución para evaluar la integración. No se generan ilustraciones HD ni se desarrolla API/WSS, pagos o autenticación. Los recursos son locales y pasan por las comprobaciones de privacidad existentes. La política del sitio de origen no se copia globalmente: el documento integrado permite la vista previa del mismo origen, mantiene recursos locales y acepta los módulos de edición.

## Respaldo y entrega

Estado anterior `c68639cc32ba4329d79205b36d7e4eedfee610b5`, rama remota `backup/pre-cinematic-20261031`, ZIP y bundle verificados en `../Backups/`, fuera de public. Los ajustes privados del navegador permanecen en su almacenamiento local. Se trabaja en `codex/cinematic-family-trial`, con PR y URL de vista previa separada; la versión activa se conserva para comparar.

## Verificación

Comprobar una opción adicional y nueve mundos; conservación de filtros/favoritos, nombre/logo/colores, móvil, panel/lobby, selección de texto e imagen por mundo, exportación/importación/recarga y retorno a las plantillas originales. Revisar todos los recursos nuevos, pruebas generales y construcción antes de publicar la vista previa.
