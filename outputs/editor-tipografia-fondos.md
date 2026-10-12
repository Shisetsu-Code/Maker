# Editor de tipografía y fondos

Se agregan al personalizador las secciones Tipografía, Fondo con imagen propia y Acabados y guardado.

- Fuente original, sistema, Barlow, Archivo, Oswald y editorial serif.
- Tamaño del texto de 85 a 120%, y peso de títulos y botones.
- Imagen JPG, PNG o WebP de hasta 8 MB, comprimida dentro del navegador.
- Mostrar u ocultar la imagen, quitarla, ajustar posición, ajuste y oscurecimiento.
- Esquinas para las tarjetas de Rushybet y Resort.
- Guardar/cargar ajustes JSON y restablecer los ajustes nuevos.

Los ajustes se aplican a las vistas del lobby y panel y permanecen en este navegador. La imagen no se sube al servidor. Los enlaces de marca no contienen estos ajustes: para trasladarlos se usa el archivo. La descarga original del diseño también incluye `ajustes`.

Las superficies claras de Resort se conservan sobre el fondo para mantener la lectura. Las imágenes de logo conservan su propia tipografía.

Verificación: 20 pruebas unitarias; prueba de navegador en Edge que recorre tipografía, tamaño (incluidos textos anidados y nuevos), imagen, ocultar/mostrar, cambio de plantilla y panel, exportación/importación, restablecimiento y recarga. Se verificó que Archivo se cargue en el panel y que Resort conserve una superficie clara sobre una imagen oscura.
