# Adding a second member

vamos a añadir un segundo miembro a la gobernanza. 

## Levantar el segundo nodo

ejecutar el nodo y poner la preautorización. No poner providers. Explicar que hace falta poner la preautorización por seguridad.

## Modificar la gobernanza

Aquí vamos a explicar como modificar la gobernanza.

Explicamos que la gobernanza tiene una estructura donde se definen una serie de cosas, entre ellos los participantes del caso de uso. Y que hay un contrato que es el qeu me permite modificar su estado. Actualmente el contrato tiene un único método para la modificación a través de un JSON-Patch (referencia a pagina de contrato de gobernanza).

Explicamos el procedimiento, modificar la gobernanza y hacer el patch entre ambos utilizando taple-patch

y enviar la petición, hacer la aprobación etc...
