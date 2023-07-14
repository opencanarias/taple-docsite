# Wine track

En este tutorial, te guiaremos a través del desarrollo de un caso de uso utilizando real através de Taple.

Este caso de uso puede ser un ejemplo realmente útil para comprobar la viabilidad de Taple en un caso de uso real, como podría ser el seguimiento del ciclo de vida de un tipo de vino de alta categoria, permitiendo certificar a sus compradores finales la calidad de su ciclo de vida hasta el momento de su adquisición. Alguno de los aspectos que podrían comprobarse son la temperatura, ya que este para su correcta conservación no debería rebasar un determinado rango.

El caso de uso se centra en el ciclo de vida del vino y abarca diversas etapas, como la creación de un nodo, la implementación de una gobernanza, la creación de eventos, la adición de esquemas y participantes, las invocaciones externas, las aprobaciones, las transferencias, la segmentación y el fin de vida de un sujeto.

Comenzaremos estableciendo el primer nodo llamado Wine Producers Organization (WPO), que será responsable de gestionar el caso de uso. A continuación, crearemos una gobernanza para formalizar el entorno en el que se desarrollará el caso de uso. La gobernanza será generada con un material criptográfico específico.

Una vez establecida la gobernanza, procederemos a crear eventos en Taple para modificar el estado de los sujetos en la red. Utilizaremos eventos de tipo "hecho" para modificar la gobernanza y agregar miembros a ella. Además, declararemos un esquema y un contrato inteligente para los sujetos de tipo "Wine" y los agregaremos a la gobernanza.

A medida que avanzamos en el tutorial, añadiremos participantes a la gobernanza, como Premium Wines y World Food Organization (WFO), asignándoles roles específicos. También permitiremos la ejecución de eventos por parte de agentes externos a la gobernanza y estableceremos aprobadores adicionales, como Spanish Food Organization (SFO), para garantizar la calidad y control.

Además, exploraremos la transferencia de propiedad de un sujeto de vino a un nuevo propietario externo a la gobernanza, y utilizaremos la segmentación por namespace para limitar la influencia de ciertos nodos en determinados contextos. A través de cambios en las políticas de gobernanza, simplificaremos el proceso de aprobación de eventos para los sujetos de vino.

Por último, abordaremos el fin de vida de un sujeto mediante la emisión de un evento de EOL (End of Life) para detener su ciclo de vida y evitar eventos posteriores.

A lo largo de este tutorial, te proporcionaremos instrucciones detalladas y los comandos necesarios para llevar a cabo cada paso. ¡Comencemos con el desarrollo de este emocionante caso de uso del ciclo de vida del vino en Taple!