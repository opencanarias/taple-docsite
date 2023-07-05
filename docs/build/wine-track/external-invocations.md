# External invocations

Nivel caso de uso:
  - Explicar la necesidad que tenemos ahora de que alguien externo a la gobernanza se encargue de ejecutar la organic-certification, ya que el encargado no debería requerir ni un nodo ni estar adscrito a la gobernanza.

Nivel Taple:
  - Modificamos la gobernanza para permitir las invociones externas: 
    Roles
      - NOT_MEMBERS: ISSUER schema Wine para namespace *.
  - Creamos el material criptográfico para el invocador externo.
  - Lanzamos el evento de certificación orgánica (organic-certification) con el mencionado material criptográfico, el cual es enviado al propietario.
