# Approvals

Nivel caso de uso:
  - En primer lugar, explicamos el problema surgido en el punto anterior, donde lanzamos una actualización de estado que modifica el sujeto sin ninguna supervisión.
  - Luego, explicamos el rol de aprobador en Taple y su utilidad para resolver este problema, indicando que se podría limitar quién puede realizar el control de calidad, asegurando que solo las empresas autorizadas puedan llevar a cabo esta acción.

Nivel Taple:
  - Creamos el nodo aprobador junto con su  corresponditente material criptográfico.
  - Lo incluimos en la gobernanza:
    - Nombre: Spanish Food Organization (SFO).
    - Roles:
      - Aprobador y testigo de sujetos de tipo Wine con namespace *.
  - Modificamos el contrato para que el control de calidad requiera la aprobación del aprobador.
  - Realizamos una prueba lanzando otra solicitud de evento de control de calidad, y observamos que esta vez se requiere la aprobación.
  - Rechazamos la solicitud para verificar que se genera un evento en la cadena indicando su denegación.