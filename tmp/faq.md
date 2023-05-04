# Frequently asked questions

<!--
## Hardware requirements
-->

<!--
## Security

### Que algoritmo de consenso usamos?
hacer referencia a technology/what-is-taple#ledger-single-ownership-model
-->

## 51% Attack
comentar que el modelo de unico propietario nos lleva a que no haga falta consenso para modificar un ledger, por lo que no hay ataque de 50%. Pero si podría haber problemas en la fase de validación

## Is it totally free?

Las preguntas son:

Pregunta: Si no existe minado, ¿Cómo se garantiza la seguridad de la blockchain TAPLE?

Respuesta: Lo primero es aclarar que TAPLE no es una blockchain, es una DLT. La seguridad en redes DLT no necesariamente está basada en minados (hay otras redes que no lo tienen tampoco) que están ligados a tipos de consenso.

En nuestra tecnología, partimos del concepto de MICROLEDGERS (no hay una única cadena, como en blockchain), que la mayor parte de los eventos son UNILATERALES, y que el SUJETO (donde radican los eventos de ciclo de vida) dispone de un par de claves de identidad criptográficas y un identificador que garantizan su identidad. Estas firmas son las que dan la seguridad de los eventos.

Este sujeto es manejado por un Propietario, que es quien, mediante varios mecanismos de protocolo, va añadiendo eventos que están firmados criptográficamente por él y por otros nodos, por lo que no puede producirse una alteración de la cadena de eventos. Es, según el modelo de gobernanza que se establezca para cada caso de uso, donde se establecen el número de firmas necesarias para aportar seguridad a un evento.

 

Pregunta: ¿Qué diferencia la blockchain TAPLE de otras que ofrecen las mismas características de trazabilidad?

Respuesta: Otras soluciones de trazabilidad usando blockchain tradicionales de cadena única no tienen las mismas características. Nuestra experiencia en realizar proyectos de trazabilidad sobre redes tipo Ethereum o Fabric nos han demostrado el problema de escalabilidad, rendimiento y consumo de energía, necesario para que sean operativas.

TAPLE aporta algo diferencial: el particionado del ledger en diferentes microledgers (uno por cada sujeto de trazabilidad) que pueden ser creados dinámicamente. Esta capilaridad es la que aporta la escalabilidad de la que carecen las soluciones descentralizadas de trazabilidad basadas en blockchain tradicional (ya sean soluciones con una cadena única como en Bitcoin, o en sesenta y cuatro shardings como en Ethereum 2).

 

Pregunta: ¿Qué tiene de especial la blockchain TAPLE para una economía circular?

Respuesta: La trazabilidad del ciclo de vida de activos y procesos son la clave para la digitalización de la economía circular, aportando además evidencias confiables de la misma. Nuestra tecnología TAPLE está diseñada para esa función. No es casualidad que TAPLE sea el acrónimo precisamente de "Seguimiento autónomo de eventos sobre la procedencia y el ciclo de vida" (Traceability (autonomous) of Provenance and Lifecycle events") .

TAPLE ha sido diseñado para que su ejecución pueda realizarse en dispositivos de baja capacidad, como pueden ser dispositivos IOT de Edge Computing. En Economía Circular este elemento es diferenciador. Poder acercar la capa de seguridad que aporta una DLT al momento de la generación del dato, al sensor, para minimizar la posibilidad de manipulación del dato de trazabilidad de procesos de economía circular. 

Y, al mismo tiempo, el uso de un lenguaje como Rust, que es de los más eficientes energéticamente, así como la eliminación de consenso (y el minado correspondiente) hace de TAPLE una solución energéticamente más sostenible que otras soluciones blockchain.

