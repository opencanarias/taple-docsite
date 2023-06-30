# Architecture

Actualmente, la arquitectura de *Taple* se divide en varias herramientas que permiten obtener una funcionalidad completa para nuestra red. Entre ellas, podemos identificar las siguientes:

* [Taple Core](https://github.com/opencanarias/taple-core): Este es el núcleo de la tecnología *Taple* y contiene elementos como:
  * Protocolo de comunicación de la red.
  * Métodos de codificación de la información.
  * Forma de almacenar la información.
* [Taple Client](https://github.com/opencanarias/taple-client): Este es el método más sencillo para generar nuestros propios nodos *Taple* sin necesidad de codificar nuestro propio cliente para este propósito. Pone a nuestra disposición:
  * Un gran número de variables de configuración para adaptarse a nuestras necesidades.
  * Una API REST que nos permite interactuar con la red TAPLE.
* [Taple Tools](https://github.com/opencanarias/taple-tools): Este es un conjunto de utilidades destinadas a facilitar la interacción con la tecnología Taple, que se dividen en dos:
  * **Taple keygen**: Es una herramienta que permite la generación de material criptográfico necesario para el correcto funcionamiento de Taple. Debe generarse externamente y luego proporcionarse al nodo.
  * **Taple Sign**: Es una herramienta destinada a facilitar la ejecución de invocaciones externas (aquellas que implican un cambio en un sujeto de la red que no controlamos).