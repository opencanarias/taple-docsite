# What is Nat?
This is an IP address translation mechanism typically used by routers. It is mainly used to allow devices on a private network to communicate with other devices over the Internet. Specifically, this mechanism will be responsible for changing in real time the IP addresses of the packets that are sent to the network to a valid public IP known by the router. This IP, which is addressable unlike the private IPs of each device, will in turn allow others to send their own messages to the network, with the router then being responsible for redistributing the traffic if deemed necessary.

# The effect of NAT on TAPLE nodes

NAT features affect any application that communicates with the Internet, and TAPLE is no exception. If you have a node on a computer in a LAN network and you want to communicate with another one in another network, this will only be possible if them and their routers are properly configured.

## Problem with routers
Routers must be configured to enable an incoming port and redirect incoming messages to the device with the TAPLE node.

## Problem with TAPLE nodes
From the point of view of TAPLE, the main problem is in the network layer and more specifically, in the [Identify protocol](https://github.com/libp2p/specs/tree/master/identify), used in the initial phases of communication between nodes for the exchange of basic information, such as the listening addresses of each of them or their public keys. When this protocol is active, the nodes exchange their listening addresses with each other. The problem is that the nodes do not know what their public IPs are and TAPLE does not yet implement any mechanism to discover them, so the IPs that would be delivered would all be private, making any further communication process impossible, even if the router is properly configured. 

Another problem is that the port that is opened in the router for the emission of the protocol packets with the set of addresses is only outgoing, so it cannot be used to receive subsequent messages. As mentioned in the previous section, this makes it necessary to establish an incoming port.

![smart-contracts-life-cycle](../img/nat-resolve.svg)

# Solve NAT problem.

One way to solve this problem would be to somehow have the public addresses of the nodes included in the packets that are sent during the execution of the *Identify* protocol*. In this way, the routing tables of the nodes would be aware of them and would be able to route data packets. The TAPLE team has enabled the option to do just this via a [configuration](./client-config.md) variable specifiable during node startup. The variable, named ***External Addresses***, allows you to specify a list of listening addresses that will be injected into the *Identify* protocol packet and delivered to the other nodes in the network when a connection is established with them. It is important that these addresses are accompanied by the incoming port of the configured router.

:::note
Currently, these external addresses can only be specified at node startup and during node execution.
:::
