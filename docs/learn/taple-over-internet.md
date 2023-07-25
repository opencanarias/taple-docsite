---
description: TAPLE communications over Internet
---

# Internet communications

Communications between TAPLE nodes are carried out via P2P protocol. This means that there are no central nodes channelling communications. While this has great advantages, it also poses certain challenges when communications must be conducted over the Internet. When using taple over the internet, the following issues need to be addressed:
- [Internet communications](#internet-communications)
  - [NAT](#nat)
    - [Conexiones salientes](#conexiones-salientes)
    - [Conexiones entrantes](#conexiones-entrantes)
  - [Node discovery and routing](#node-discovery-and-routing)

## NAT

Network address translation (NAT) is a method of mapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device[^1]. It is mainly used to allow devices on a private network to communicate with other devices over the Internet. Specifically, this mechanism will be responsible for changing in real time the IP addresses of the packets that are sent to the network to a valid public IP known by the router. This IP, which is addressable unlike the private IPs of each device, will in turn allow others to send their own messages to the network, with the router then being responsible for redistributing the traffic if deemed necessary.

[^1]: https://en.wikipedia.org/wiki/Network_address_translation

### Conexiones salientes

Explicar con más detalle la problemática por la que surge NAT. Nat en si no es un problema, es una solución. Al ser limitadas las direcciones IP4 se tuvo que desarrollar un mecanismo para compartir direcciones, y aquí es donde surge NAT. Si tenemos una red privada tras un router u otro dispositivo de enroutamiento, cuando un paqueta sale desde la red privada hacia internet, el router le asigna un puerto aleatorio y guarda en una tabla la relación entre el puerto de salida asignado y la ip interna y su puerto. Además cambia la ip y el puerto de los paquetes IP que salen. De esta forma, cuando alguien quiere responder a ese paquete, lo hace utilizando la IP del router y el puerto asignado. El router, consultando la tabla es capaz de saber a que ip y puerto de la red privada enviar la información. 

Poner imagen explicativa

### Conexiones entrantes

El comportamiento de NAT para conexiones salientes es automático, permitiendo qeu los equipos que estén en la red privada puedan comunicar con internet. Sin embargo, el proceso a la inversa no funciona. Si alguien desde internet quiere hablar directamente con alguien tras el router en la red privada no puede. el motivo es que el router ha asignado un puerto a las conexiones salientes del nodo interno, pero no sabe en que puertos está escuchando. 

Poner imagen explicativa

Actualmente en taple la solución pasa por configurar el router para redirigir las comunicaciones entrantes a un puerto determinado a la dirección y puerto internas del nodo TAPLE. 

## Node discovery and routing 
Cuando un nodo TAPLE arranca, excepto el primer nodo de la red, necesita conocer al menos un nodo. Es la forma en la que un nodo entra a formar parte de la red. Cuando el nodo arranca conecta con el/los nodos conocidos e intercambia información. Aquí entran en juego 2 protocolos de Libp2p, Identify y Kademlia. 

A través de Identify, cada nodo se presenta a los nodos con los que conectan, enviando por ejemplo la información sobre que IPs y puertos utiliza para escuchar conexiones entrantes. Cuando al arrancar un nodo A conecta con un nodo B, ambos se intercambian esta información. A conocía previamente a B, pero B no conocía a A. A partir de este momento B conoce a A. 

![smart-contracts-life-cycle](../img/nat-resolve.svg)

Pero no todos los nodos tienen que conectar con todos los nodos para conocerse. Aquí es donde entra en juego Kademlia. Kademlia actua como una libreta de direcciones distribuida en la que poder localizar nodos a partir de su controller_id y obtener su multiaddr. Cuando un nodo conecta con éxito con otro nodo guardar en Kademlia la relación entre su identificador y su multiaddr. De esta forma, cualquier nodo de la red puede localizar a otro nodo de la red.

Sin embargo, dentro del protoclo Identify la información de ips y puertos que se envían los nodos entre ellos se basa en las interfaces de red conocidas por el nodo en el momento del arranque. Si el nodo se encuentra en una red privada o detrás de un dispositivo de enrutamiento, las IPs que conoce no serán direccionables desde Internet. Esto significa que, aunque tengamos correctamente configurado el router para redirigir conexiones entrantes, únicamente aquellos que conozcan nuestra multiaddr correcta podrán conectar con nosotros, lo cual ocurre con los nodos principales de la red, sin embargo, el resto de nodos no será direccionable ya que no serán capaces de transmitir su multiaddr al resto de la red. (me he liado un poco explicándolo, si tienes dudas lo hablamos).

LibP2p ofrece diferentes mecanismos para sortear este problema basado en servidores intermedios ... aquí puedes enganchar con lo que tienes debajo

One way to solve this problem would be to somehow have the public addresses of the nodes included in the packets that are sent during the execution of the *Identify* protocol*. In this way, the routing tables of the nodes would be aware of them and would be able to route data packets. The TAPLE team has enabled the option to do just this via a [configuration](./client-config.md) variable specifiable during node startup. The variable named [External Address](./client-config.md#external-address), allows you to specify a list of listening addresses that will be injected into the *Identify* protocol packet and delivered to the other nodes in the network when a connection is established with them. It is important that these addresses are accompanied by the incoming port of the configured router.

:::note

Currently, these external addresses can only be specified at node startup and during node execution.

:::
