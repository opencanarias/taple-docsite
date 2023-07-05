# Segmentation

Nivel caso de uso:
  - Explicamos la importancia de tener testigos y aprobadores por país, donde cada uno solo pueda consultar los sujetos de tipo "Wine" que pertenezcan a su país.
  - Explicamos en qué consiste la segmentación por namespace.
  - Introducimos la idea de que PremiumWines tiene viñedos en España y Francia, lo que le permite producir botellas con diferentes orígenes. Destacamos la existencia de un organismo en España que puede aprobar el análisis de calidad (**SFO**).

Nivel Taple:
  - Cambiamos el namespace de SFO a Spain.
  - Cambiamos el namespace de PremiumWines a Spain y France.
  - Creamos una nueva botella con origen francés.
  - Emitimos un evento de medida de calidad para la botella.
  - Verificamos que este evento solo llega al organismo mundial (**WFO**).