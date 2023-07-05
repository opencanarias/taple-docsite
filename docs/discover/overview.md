# Overview
TAPLE is designed, not as a single application, but also as a set of specifications, libraries and utilities. The aim is to enable integration and interoperability with different applications, devices and architectures. 

The following diagram shows the usual elements of a TAPLE network. A brief description of each of them is given below so that we can obtain an overview before going into more detail.

![Net overview](../img/net-overview.png)

## TAPLE Node
Running instance of a TAPLE compliant application and therefore implementing the TAPLE communication protocol, it can be part of a TAPLE network and can exchange information with other nodes. A TAPLE node can be an application running on a server, an app on a user's mobile phone or a small service on an IoT device with limited connectivity.

## TAPLE Core
Reference library that implements most of the TAPLE functionality. An application that wants to be part of a TAPLE network can make use of this library from the API it exposes. Some of its functions are:
- Creation and management of [subjects](./subjects.md) and their associated [microledgers](./subjects.md#microledger) 
- Implementation of the [P2P](../reference/glossary.md#p2p) protocol for communication between nodes.
- Database persistence

:::caution Important

TAPLE Core is not a stand-alone application that can be run directly, but a library that has to be used from some application. See [TAPLE Client](#taple-client).

:::

## TAPLE Client
Reference application to create a TAPLE Node. It is the easiest way to work with TAPLE as it is a simple console application that provides everything needed to build a node. Some of its functions are:
- Use the TAPLE Core library
- Implements a Rest API to interact with the TAPLE network in a simple way
- Allows configuration by different mechanisms: configuration files, start-up parameters and environment variables

## Subjects
TAPLE implements a ledger partitioning mechanism based on [subjects](./subjects.md). Subjects are logical entities that represent an asset or process within a TAPLE network. In this way, instead of all participants having the same ledger, each participant stores only the subjects in which it is interested. 

Each subject consists of 2 elementos: 
- a small ledger, known as [microledger](./subjects.md#microledger). The microledger is a structure of chained [events](./events.md). Each of these events models any fact that we want to store associated with that subject, such as a modification of its properties or even its creation. 
- a [subject state](./subjects.md#subject-state), the representation of the information stored by a subject at a given instant, usually the current moment.

There is only one owner for each subject, being the only one with the effective capacity to make changes to the subject. All other participants wishing to make a change in a subject must send the owner an [event request](./events.md#event-life-cycle). 

## Governances
Governance is the definition of the rules of cooperation of the different network participants within the same use case. It defines the participants of the use case, the types of subjects and their structure, the smart contracts that will be in charge of modifying the states of these subjects, and the rules that define the permissions and roles of the different participants. The same node, and therefore the same identity, can act with different roles in different governance, but also within the same governance.

### Owned governances
Within the TAPLE network, governance is managed as a special type of subject. Therefore, like any other subject, they have a single owner.

:::info

To learn more about structure and functionality of the governances visit this page: [Governance](./governance.md).

:::

## Participants

### Identity
Each TAPLE node is associated with **a unique identity** representing its owner. However, the same identity can be associated with different governances in order to participate in different use cases. Based on the owner's needs and level of commitment, the identity can act in different roles within the network. 

:::info

To learn more about identity visit this page: [Identity](./identity.md).

:::