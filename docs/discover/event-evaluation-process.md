# Event evaluation process

The evaluation phase consists of the issuer generating an event request with the event type and its content. Currently, evaluation is only present in Fact type events. These events affect a certain subject to establish a fact that may or may not modify the subject's properties. A context is also sent containing the necessary information for the evaluators to execute the smart contract that contains the evaluation logic for our subject, such as previous properties, whether the issuer is the owner of the subject, etc.

The evaluators are defined by the governance, so they must possess it in order to carry out the evaluation, otherwise they would not have access to the contract, which in turn is stored in the state of the governance.

The result of applying the event to the subject in terms of property modification is carried out by the evaluators. They have the ability to compile and execute smart contracts compiled in web assembly.

The Fact event request contains the necessary information to execute one of the functions of the contract (or not, in which case a failed evaluation occurs and the subject owner is notified). The response includes whether the evaluation was successful or failed, if it is necessary to go through the approval phase and the JSON patch that, when applied to the subject's properties, will produce the state change, as well as the hash of the updated state.

The resulting JSON patch is not included in what the evaluators sign, but it is in the response, since two different JSON patches can produce the same changes in the subject's state, and the definitive JSON patch that is saved in the event might not be the same as the one sent by a validator, and therefore its signature cannot be verified with only the information from the final event.

The evaluators response is signed by them so that the witnesses can verify that quorum has been reached in the evaluation phase and that the correct evaluators have signed.

The evaluators will only carry out the evaluation if the version of the governance that the subject's owner has coincides with that of the evaluator. If it is lower or higher, an appropriate message for each case is sent to the subject's owner.

For issuers, when the governance to which the subject is assigned is updated, the process must be restarted from the beginning of the evaluation, whether you were still in the evaluation phase or already in the approval phase. This is because events must be evaluated/approved with the latest version of governance available.

```mermaid
sequenceDiagram
participant Issuer as Issuer/Subject Owner
participant Governance as Governance
participant Evaluators as Evaluators

Issuer->>Evaluators: Generate Event Request
Evaluators->>Governance: Check Governance Access
alt Governance Access Granted
    Evaluators->>Evaluators: Execute Smart Contract
    alt Evaluation Successful
        Evaluators->>Issuer: Return Evaluation Response and Evaluator's Signature
    else Evaluation Failed
        Evaluators->>Issuer: Return Evaluation Response (with failed status) and Evaluator's Signature
    end
else Governance Access Denied
end

alt Governance Version Matches
    Evaluators->>Issuer: Proceed with Evaluation
else Governance Version Mismatch
    Evaluators->>Issuer: Send Appropriate Message
    Issuer->>Issuer: Restart Evaluation Process
end

```
