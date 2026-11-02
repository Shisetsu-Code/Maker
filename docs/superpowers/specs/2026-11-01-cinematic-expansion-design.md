# Ampliación Cinematic a 27 mundos

El usuario autorizó incorporar los 18 mundos nuevos revisados de Temas y repetir el proceso de ilustración individual cuando la calidad sea insuficiente. Los 18 recursos nuevos son provisionales de 247–600 px: se sustituirán todos por arte nuevo nativo de al menos 1200 px por lado, sin ampliación artificial. Se conservarán intactos los nueve originales mejorados y las reglas guardadas de edición visual.

Se amplía la misma familia Cinematic, sin crear otras 18 familias del Maker. Temas queda fijado en 7c4165ba90352dce24ef2c7e888b83db0a1a1499. Se importan módulos, iconos vectoriales, estilos y filtros de universos; el arte se sirve por mundo como AVIF local independiente, evitando el recorte dinámico en canvas. Se adaptan importación reproducible, allowlists, selectores, ámbito por mundo, exportación/importación y pruebas.

Se mantiene la Preview cinematic-trial y la PR4 existentes; producción no cambia. Antes de modificar se conserva una rama de respaldo. Los PNG maestros, manifiesto de dimensiones/hashes y documentación quedan fuera de public. Recursos publicados sin EXIF/XMP/comentarios ni rutas privadas.

Alternativas: copiar los atlas pequeños sería rápido pero repetiría la mala calidad; ampliar artificialmente no recuperaría detalle. Se aplica la solución ya aprobada: ilustraciones individuales nuevas.
