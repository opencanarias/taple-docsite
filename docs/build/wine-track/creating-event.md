# Creating an event

Nivel caso de uso:
  - Hacer referencia a que, para modificar un sujeto, es necesario generar un evento, y que existen diferentes tipos de eventos, incluyendo los eventos de hecho que provocan la evolución del contrato.
  - Comentar que cada esquema tiene un contrato asociado, y que la gobernanza es un caso especial, ya que el esquema es interno de Taple y también tiene un contrato interno. (Referencia a la documentación).
  - Comentar que el contrato de la gobernanza expone únicamente un método para modificarla utilizando un json patch. (Referencia a la documentación).
  - Informar que en el futuro se dará soporte a otros tipos de eventos de hecho.
  - Señalar que nuestro primer evento consistirá en añadirnos a nosotros mismos a la gobernanza. Aunque no es necesario, resulta interesante para poder referenciarnos a **WPO** dentro de los roles, lo cual es importante en caso de ceder la propiedad de la gobernanza a otro participante.

Nivel Taple:
  - Generar el json patch con la modificación de la gobernanza (pendiente de incluir esta herramienta dentro de Taple Tools).
  - Enviar el evento.