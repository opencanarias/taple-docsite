---
description: Classification of participants based on their interests
---

# Roles

Each network participant interacts with the network based on different interests. These interests are represented in TAPLE as roles.

## Owner
Subject owner participant, who owns one or several subjects. They have total control over the subject because they possess the cryptographic material with permission to modify the subject.

:::tip
Subject ownership can be obtained by creating it or receiving it from the previous owner.
:::

## Issuer
Participant who initiates a request to modify a subject. It can be the owner of a subject or another participant with sufficient permissions. In addition, an issuer can be a member of the governance or it can be completely external and anonymous.

## Evaluator
Evaluators assume a crucial role within the governance framework, being responsible for carrying out the evaluation process. This process performs the execution of a smart contract, which usually results in a change in the state of the subject.

:::info

Learn more about the [evaluation process](./event-evaluation-process.md)

:::

## Approver 
In order for certain event requests to obtain approval and be appended to a subject's micro-logger, a series of signatures is necessary. The acquisition of these signatures is contingent upon the evaluation's outcome. During the assessment of a contract, a decision is made regarding the need for approval, which may be influenced by the roles of the requesting issuer.

:::info

Learn more about the [approval process](./event-approval-process.md)

:::

## Validator
Validators are nodes that ensure the uniqueness of the chain without actually possessing a copy of it. They accomplish this by providing their [signature](./events.md#validators-signature). A validator receives a proof of existence of the event and signs it. In addition, it undertakes not to sign, for the same subject ID and sequence number (SN), two different versions of an event, thus guaranteeing the uniqueness of each entry in the chain.

:::info

Learn more about the [validation process](./event-validation-process.md)

:::


## Witness
Participant interested in having a copy of the subject and the information it stores. While the existence of witnesses is not strictly necessary, it is the only means to ensure network copies of the subject beyond the owner.
