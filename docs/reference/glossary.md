# Glossary 

## A

### Approver
Some event requests require a series of signatures to be approved and become part of a subject's microledger. This signature collection is a voting process where participants can vote in favor or against. These participants, defined in governance, are the approvers.

## B

### Bootstrap
It is part of the Kademlia protocol. It is the name of the node that is used for all news nodes that want to join the P2P Network to be discovered by all others.

### Blockchain
Blockchain is a subtype of DLT, and therefore we can say that it is fundamentally a distributed, decentralized, shared, and immutable database. 

## C

### Cryptography
It is the practice and study of techniques for secure communication in the presence of adversarial behavior.

## D

### DLT
- Immutable and tamper-resistant. It implements cryptographic security mechanisms that prevent its content from being altered, or at least, if any node tries to modify the information, it can be easily detected and blocked.
Stands for "Distributed Ledger Technology". A DLT is nothing more than a database that acts as such a ledger but also has, to a greater or lesser extent, the following characteristics:
* It is distributed and decentralised.
* Shared.
* Immutable and tamper-resistant.

## E

### Edge Devices
A device that provides an entry point into enterprise or service provider core networks.

### Event
The incident that occurs when the state of a subject is intended to be modified.

## F

### Fog Computing
It is an architecture that uses edge devices to carry out a substantial amount of computation, storage and communication locally and routed over the internet backbone.


### Fog GateWay
Synonym for Edge Devices. A device that provides an entry point into enterprise or service provider core networks.

## G

### Governance
Governance is a structure through which a participant or user of a system agrees to use the system. We can easily say that there are three principles that dictate governance. These principles include:

* Governing
* Rules
* Participants

## K

### Kademlia
It is a DTL that defines the structure of the network and how the information is exchanged through node lookups. The communications it's done using UDP and in the process, an overlay network of nodes identified by an ID is created. This ID is not only to useful to identify the node but also useful to determine the *distance* between two nodes so the protocol can determine with whom it should communicate.

## L

### Ledger
A ledger is an accounting concept that basically defines a ledger in which information is always being added, usually in the form of transactions.

## M

### Microledger
The microledger is a set of events chained together using cryptographic mechanisms.

### Multiaddr
A **[multiaddress](https://github.com/multiformats/multiaddr)** (often abbreviated multiaddr), is a convention for encoding multiple layers of addressing information into a single “future-proof” path structure. It human-readable and machine-optimized encodings of common transport and overlay protocols and allows many layers of addressing to be combined and used together.

## N

### Node
It is a computer connected to other computers that follows rules and shares information.

## P 

### P2P
It is a distributed application architecture that partitions tasks or workloads between peers equally privileged and equipotent participants in the network that make up.


## S

### Subject
Subjects are a logical entity or process that stores all the data necessary to define itself and that emits events throughout its life cycle with an order of emission determined by itself.

## T

### TAPLE
Stands for "Tracking (Autonomous) of Provenance and Lifecycle Events​". TAPLE is a permissioned DLT solution for traceability of assets and processes.

### TAPLE Client
Official client to create a TAPLE Node. It is the easiest way to work with TAPLE as it is a simple console application that provides everything needed to build a node (TAPLE Core, API Rest and different mechanisms settings).

### TAPLE Core
It is the library that implements most of the TAPLE functionality (creation and management of subjects and their associated microledgers, implementation of the P2P protocol for communication between nodes and database persistence). Any application that wants to be part of a TAPLE network must make use of this library from the API it exposes.

### TAPLE Network
It is the P2P network created by all the TAPLE nodes in operation.

### Transaction
It is an agreement or communication between 2 different entities to accept a change in the state of a subject.

## V

### Validator
The validator is a network participant who provides the security signature to the subject. The validator maintains a complete copy of the subjects it validates and commits to the network not to accept more than one version of the same event. 

## W

### Witness
Participant interested in having a copy of the subject and the information it stores.