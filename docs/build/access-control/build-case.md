# Build the use case

## Nodes
Partiendo de los participantes mencionados en el apartado anterior, vamos a hablar cuales de ellos necesitan un nodo TAPLE, así como su motivo.

### Participants
- Empresa de renting: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Empresa de limpieza: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Empresa de seguros: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Cerradura inteligente: Se necesita un nodo TAPLE debido a que cada cerradura contendrá el el sujeto en cuestión y realizará los cambios sobre el mismo. Cabe destacar, que no conformará parte de la gobernanza sino que la empresa de renting creará el sujeto correspondiente y se lo transferirá. Esto se debe a que actuará como un externo ya que no se sabrá la identidad del vehículo hasta su adquisión por la empresa de renting.
- Cliente: No se necesita un nodo TAPLE, ya que los clientes actuarán como externos debido a que no se conoce su identidad hasta que se registren en la empresa de renting. Además, no conformorán parte de la gobernanza.
- Trabajadores de limpieza: No se necesita un nodo TAPLE, ya que los trabajadores actuarán como externos debido a que no se conoce su identidad hasta que se registren en la empresa de limpieza. Además, no conformorán parte de la gobernanza.

## Subjects
Cada una de las cerraduras gestionaría un sujeto cuyo estado estaría reflejado en las cerraduras de los vehículos. Para reflejar el estado del sujeto será necesario la definición de un esquema el cual contendrá el estado del vehículo así como el identificador del conductor autorizado para su uso. 

## Smart Contract
Dentro del contrato inteligente, definiremos la lógica de negocio. Cuando un usuario desee utilizar un vehículo, realizará una petición mediante una invocación externa al sujeto del mismo. Si el identificador de la petición coincide con el identificador del conductor autorizado para su uso especificado en el estado, el vehículo se abrirá. En caso contrario, la compañía de renting y la compañía de limpieza/mantenimiento recibirían una solicitud de aprobación sobre la invocación realizada de manera que cada una de ellas deberá comprobar en sus sistemas internos si la identidad del emisor es válida. Si se trata de un cliente, la compañía de renting votará afirmativamente y se desbloqueará la cerradura. De la misma manera, si se trata del personal de limpieza, la compañía de limpieza votará afirmativamente y por tanto podrá acceder al vehículo. Por el contrario, si se trata de un invocador no válido, ambos rechazarán la solicitud, denegando el acceso al vehículo. Cabe destacar que la fase de aproabción la podemos resolver de dos maneras posibles:
- La fase de aprobación se implemente en un contrato inteligente.
- La fase de aprobación la puede realizar un agente externo denominado aprobador.

El contrato inteligente lo conforman tres métodos:
- FREE -> Este método se encarga de pasar el estado del coche de RENTED a FREE y poner el id del conductor vacío.
- RENTED -> Este método se encarga de pasar el estado del coche de FREE a RENTED y rellenar el id con el identficador del conductor.
- OPEN -> Este método se encarga de comprobar si la persona que intente abrir el coche se corresponde con la persona especificada en el id del conductor. En caso de ser la misma, el coche se abre y en caso contrario, se solicita aprobación.

## Governance
Para conformar la gobernanza, partimos de la gobernanza por defecto y a continuación vamos aplicando los cambios necesarios para nuestro caso de uso.

### Members
Como ya habíamos mencionado con anterioridad, la gobernanza estará compuesta por los siguientes miembros:
- Compañía de alquiler
- Compañía de limpieza
- Compañía de seguros

Cabe destacar, que la compañía de alquiler será la propietaria de la misma.

### Schema
En el schema definiremos el estado en el que se encuentra el coche, que podrá ser libre o alquilado y además se definirá el identificador del conductor que tendrá acceso al vehículo en cuestión. En caso de estar libre, este campo estará vacío.

### Smart Contract
Para añadir el contrato inteligente, antes debemos pasarlo a base64. Para ello, puede usar el siguiente [conversor](https://base64.guru/converter).

### Policies
Para garantizar un mejor control y una mayor seguridad sobre la red, definiremos las policies con quorum de mayoría, evitándonos de esta manera un monopolio en el que puedan aparecer situaciones anómalas.

### Roles of participants
- Compañía de alquiler: Propietaria de la gobernanza y evaludadora de los contratos inteligentes.
- Compañía de limpieza: Aprobador del personal de limpieza y testigo para tener un registro de las limpiezas realizadas.
- Compañía de seguros: Testigo para tener un control del uso del coche y evaluadora para garantizar la seguridad de la red. 