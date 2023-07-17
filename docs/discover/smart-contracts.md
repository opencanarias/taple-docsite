---
description: Business logic that controls changes in subjects
---

# Smart Contracts

Smart contracts are programmes that are typically executed within a DLT/blockchain network to modify the state of the network itself. Unlike traditional contracts, smart contracts do not rely on intermediaries as they are based on decentralised technology that automates and executes digital transactions and agreements.

A smart contract is composed of logic code and predefined rules that specify the conditions and actions to be carried out. These rules can range from simple conditions to more complex logic involving multiple parties and conditions.

Smart contracts offer numerous advantages, such as eliminating intermediaries, reducing costs and completion times, eliminating human error and building trust by mathematically verifying transactions. They also enable the automation of complex business processes and the creation of new decentralised business models.

It is important to note that smart contracts are not perfect and their implementation must take into account security and legal considerations. In addition, programming smart contracts requires a high level of technical expertise to ensure that the code is secure and functional.

## TAPLE Smart Contracts

Smart contracts in TAPLE provide an efficient and secure way to modify the state of a given subject in the network. 

In TAPLE, smart contracts are written in [Rust](./under-the-hood.md#rust) programming language, taking advantage of its efficiency, speed and security features. Once this program is defined, it is compiled in WebAssembly and the code is executed when necessary on those nodes acting as evaluators.

:::info

Visit [this page](../learn/smart-contracts.md) to learn more about the process of creating, distributing and executing smart contracts in TAPLE.

:::

A relevant aspect is that contracts must be registered in the governance in order to be distributed and known by all interested nodes. This allows nodes acting as evaluators to have the same contract. This ensures that the execution of the contract in the evaluating nodes generates the same output for the same input.

:::info Relationship to the life cycle of the event

Contracts are executed in the evaluation phase of the events. Visit the [event-life-cycle](./events.md#event-life-cycle) and [evaluation process](./event-evaluation-process.md) pages to learn more about this topic.

:::
