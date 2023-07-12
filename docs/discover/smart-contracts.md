---
description: Business logic that controls changes in subjects
---

# Smart Contracts

asegurarnos de poner que se usa rust, que se ejecuta en un entorno controlado en web assembly

## ¿Qué son los Smart Contracts?

Los contratos inteligentes, son programas que se ejecutan dentro de una red blockchain. A diferencia de los contratos tradicionales, los smart contracts no dependen de intermediarios o terceros de confianza para validar o hacer cumplir los acuerdos. Estos se basan en la tecnología descentralizada blockchain que se encarga de automatizar y ejecutar las transacciones y acuerdos digitales.

Un smart contract está compuesto por código lógico y reglas predefinidas que especifican las condiciones y las acciones que se deben llevar a cabo. Estas reglas pueden variar desde simples condiciones hasta lógica más compleja que involucra múltiples partes y condiciones.

Cuando se desencadenan las condiciones especificadas en el smart contract, como por ejemplo, el pago de una determinada cantidad de criptomonedas o la verificación de una fecha, el contrato se ejecuta automáticamente y las acciones acordadas se llevan a cabo de manera precisa y transparente. La ejecución del contrato se registra en la blockchain, lo que garantiza la inmutabilidad de los resultados y la transparencia de todas las transacciones realizadas.

Los smart contracts ofrecen numerosas ventajas, como la eliminación de intermediarios, la reducción de costos y tiempos de transacción, la eliminación de errores humanos y la creación de confianza mediante la verificación matemática de las transacciones. También permiten la automatización de procesos comerciales complejos y la creación de nuevos modelos de negocio descentralizados.

Es importante destacar que los smart contracts no son perfectos y su implementación debe tener en cuenta aspectos de seguridad y consideraciones legales. Además, la programación de smart contracts requiere de un alto nivel de conocimientos técnicos para asegurar que el código sea seguro y funcional.

## Smart contracts en Taple

### ¿Qué funcionalidad aportan a taple?

Los contratos inteligentes en Taple proporcionan una forma eficiente y segura de alterar el estado de un sujeto determinado en la red. La manera de conseguir esto es mediante la lógica y reglas que son definidas previamente, lo que permite automatizar procesos complejos y elimnar la necesidad de confiar en intermediarios.

### Características específicas

En Taple, los contratos inteligentes se escriben en el lenguaje de programación Rust. Una vez que este programa está definido, WebAssembly se encarga de compilar y ejecutar el código solo en momentos precisos en aquellos nodos que actúen como evaluadores.

Un aspecto relevante es que este contrato debe estar registrado en la gobernanza para ser distribuido y conocido por todos los nodos interesados. Esto requerirá que los nodos que actúen como evaluadores posean el mismo contrato, lo que permite una ejecución equitativa en cualquiera de los nodos de este tipo, dando en cada uno de ellos la misma respuesta para una misma entrada de datos.

Además de lo anterior, otro aspecto de suma importancia es que los contratos definidos se asocian a un único esquema, y son los que actúan, en función de las reglas preestablecidas por el creador del contrato, en la modificación de todos aquellos sujetos que han sido generados a través del mismo.

### Relación en el ciclo de vida del evento

La relación que existe entre los contratos y el ciclo de vida de un evento se puede describir de la siguiente manera:

1. Durante la fase de evaluación, se envía a los evaluadores una solicitud de invocación del contrato, quienes se encargan de ejecutarlo y generar el evento correspondiente.
2. Una vez completado este paso, los evaluadores devuelven información importante, como el resultado (éxito o fracaso), el json-patch para actualizar el estado del sujeto, ciertos hashes para brindar garantías criptográficas, la versión de la gobernanza aplicada, la firma del evaluador y si el evento requiere aprobación.