# Creating an event

- Referenciar que para modificar un sujeto hay que generar un evento, que existen dif. tipos de eventos y que unos son los eventos de hecho que provocan la evolución del contrato.
- Comentar que cada esquema tiene un contrato asociado y que la gobernanza es un caso especial y que el esquema es interno de taple, tambien tiene un contrato interno (poner la referencia en la documentación).
- Comentar que el contrato de la gobernanza espone únicamente un metodo para modificarla a partir de un json patch (poner referencia a la documentación).
- Informar de que en el futuro se dará sopoprte a otros tipos de eventos de hecho.
- Señalar que nuestro primer evento consistirá en añadirnos a nosotros mismos a la gobernanza, que no es necesario, pero si que interesante para poder referenciarnos a **WPO** dentro de los roles, lo cual es importante para si el futuro cedemos la propiedad de la gobernanza a otro participante.
- Pasos a realizar:
  - Generar el json patch con la modificación de la gobernanza (pendiente de incluir esta herramienta dentro de taple-tools).
  - Enviar evento.