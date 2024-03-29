---
description: Ledger partitioning mechanism in TAPLE 
---

# Subjects

The TAPLE network performs [ledger partitioning](./index.md#partitioning-of-the-ledger-by-assets) on a per-subject basis. Instead of having a single ledger shared by all participants, the information is structured on a subject-by-subject basis. Subjects are logical entities that represent an asset or process within a TAPLE network. 

Each subject complies with the following: 

- They contain a single [microledger](#microledger).  
- It has a [state](#subject-state) modelled by a schema. 
- It has a single [owner](#ownership-model).
- It depends on a [governance](#belonging-to-a-governance). 

## Microledger

Each subject contains internally a ledger in which the events that affect only that subject are recorded, the microledger. This microledger is a set of events chained together using cryptographic mechanisms. It is similar to a blockchain in that the different elements of the chain are related by including the cryptographic fingerprint of the immediately preceding element, but, unlike blockchains in which each block can include a set of transactions, possibly from different accounts, in the microledger each element represents a single event of the subject itself.

![Ledger differences](../img/ledger-differences.svg)

:::info

To learn more about the microledger structure visit the [Events](./events.md) page.

:::

## Subject state

The state is the representation of the information stored by a subject at a given instant, usually the current moment. The state is obtained by applying, one after the other, the different microledger events on the initial state of the subject defined in its [genesis-event](./events.md#create-event). 

![Subjects](../img/subject-state.svg)

:::info

The state structure must correspond to a valid schema. To learn more about schemas visit the [Schemas](./schemas.md) page. 

:::

:::caution Important

Unlike other DLTs, TAPLE does not have data tables. The information is stored in a single entity, the subject state. This entity must represent only the final state of our subject, while the details of the different events will be stored in the microledger.

:::

## Ownership model
Any subject has a single owner, this being the only participant in the network that can make effective modifications to the subject, i.e., add events in the micro-ledger. However, other participants, the issuers, can generate event requests. These event requests are signed by the issuer and sent to the owner of the subject.

:::info

To learn more about issuers and event requests visit the [Event Life Cycle](./events.md#event-life-cycle) page. 

:::

## Belonging to a governance
A subject always exists within a use case. [Governance](./governance.md) is the definition of the rules by which the use case is governed. What types of subjects can be created or who can create them are some of the rules that are defined in the governance. Although a subject can only belong to one governance, a TAPLE node can manage subjects of different governance, so that the same node can participate simultaneously in different use cases.

### Namespace and segmentation
When a subject is created, certain information is associated with it, such as governance, schema and a namespace. The namespace is associated with the use case and governance, as it is the mechanism by which stakeholders can be segmented. In the same use case, not all participants may be interested in all subjects, but only in a subset of them.

:::info

To learn more about namespaces and segmentation look at the [roles configuration section.](../learn/governance-structure.md#roles).

:::

## Subject Identifier and cryptographic keys
Each subject, at the time of its creation, is assigned a pair of cryptographic keys with which to sign the events of its micro-logger. From the public key and other metadata, its **Subject Identifier (subjectId)** is generated, which uniquely represents it in the network.
