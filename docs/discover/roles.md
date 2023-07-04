# Roles

## Owner
Subject owner participant, who owns one or several subjects. They have total control over the subject because they possess the cryptographic material with permission to modify the subject.

:::tip
Subject ownership can be obtained by creating it or receiving it from the previous owner.
:::

## Evaluator
Evaluators assume a crucial role within the governance framework, being accountable for conducting the evaluation process. This process entails the execution of a smart contract, aimed at validating a targeted state change.

## Approver 
In order for certain event requests to obtain approval and be appended to a subject's micro-logger, a series of signatures is necessary. The acquisition of these signatures is contingent upon the evaluation's outcome. During the assessment of a contract, a decision is made regarding the need for approval, which may be influenced by the roles of the requesting issuer.

## Validator
Validators are nodes that ensure the uniqueness of the chain without actually possessing a copy of it. They accomplish this by providing their [security signature](./events.md#validators-signature). A validator commits to generating different hashes for the same subject ID and sequence number (SN), thus guaranteeing the uniqueness of each entry in the chain.

## Witness
Participant interested in having a copy of the subject and the information it stores. While the existence of witnesses is not strictly necessary, it is the only means to ensure network copies of the subject beyond the owner.

## Issuer
Participant who initiates a request to modify a subject. It can be the owner of a subject or another participant with sufficient permissions. In addition, an issuer can be a member of the governance or it can be completely external and anonymous.