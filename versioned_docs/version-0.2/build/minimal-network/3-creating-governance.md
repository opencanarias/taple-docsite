# Creating the governance

Now that we have been able to launch our first node, the first thing we must do for it to be useful is to create a [governance](../../discover/governance.md). Governances are special subjects that define the rules of the use case at hand. Without governance, there can be no subjects. Both its [scheme and its smart contract](../../learn/governance-schema-and-contract.md) are fixed and defined in Taple's code. The same goes for its [structure](../../learn/governance-structure.md).

An interesting aspect of the Taple-client API is the different possibilities for using the event request submission endpoint. The most orthodox way would be to include the request and the signature of the request. For this, Taple-sign can be used (included in [taple-tools](../../learn/client-tools.md)) to sign the request. But you can also omit the signature in the body of the request and have the client sign it with our own private key. This obviously cannot be done for external invocations where the signer is not the owner of the node. Another change intended to increase simplicity for Genesis/Creation events is that the public key can be omitted from the body and the client will create one for us. In general, before creating a subject, you should call the cryptographic material creation API to generate a pair of keys **/api/keys** and the **POST** method. This API returns the value of the public key of the KeyPair to include it in the Create and Transfer events.

To do this, we must launch an event request using the taple-client API. The endpoint we must use is **/api/event-requests** and the method is **POST**. This endpoint supports different configurations to make life easier for the user:

So, if we opt for the third way, the body of the post call that creates the governance would end up like:

```json
{
  "request": {
    "Create": {
      "governance_id": "",
      "schema_id": "governance",
      "namespace": "",
      "name": "tutorial"
    }
  }
}
```

```bash
curl --silent --location 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data '{
  "request": {
    "Create": {
      "governance_id": "",
      "schema_id": "governance",
      "namespace": "",
      "name": "tutorial"
    }
  }
}'
```

The response we get when launching the event request is the id of the request itself. If we want to know what ended up being the SubjectId of the governance, we must consult the endpoint **/api/event-requests/{id}** and the method **GET**. The response to this endpoint returns information about the request that includes the SubjectId of the governance.

```bash
curl --silent 'http://127.0.0.1:3000/api/event-requests/Jr4kWJOgdIhdtUMTqyLbu676-k8-eVCd8VQ9ZmLWpSdg/state' \
```

Response:

```json
{
    "id": "Jr4kWJOgdIhdtUMTqyLbu676-k8-eVCd8VQ9ZmLWpSdg",
    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
    "sn": 0,
    "state": "finished",
    "success": true
}
```

We can also ask for the list of subjects at **/api/subjects** using the **GET** method. In this case, we will get a list of the subjects we have on the node, in this case, we will only have the governance we just created.

Since we are the owners of the subject, it can be said that we are witnesses of it. The only role that is defined by default in the initial state of the governance is the one that makes all members of the governance witnesses of it, but in the case of the members, it comes empty. In the next step, we will add ourselves as members of the governance. This is because the initial state has no members, and to actively participate in the use case, we must add ourselves as members. Although this step is not mandatory, it depends on the use case.

The endpoint to use is the same as for creation, but the type of event will be FACT:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                    "op": "add",
                    "path": "/members/0",
                    "value": {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                    }
                }
            ]
          }
      }
    }
  }
}
```

```bash
curl --silent 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data '{
    "request": {
        "Fact": {
            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/0",
                            "value": {
                                "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                                "name": "Tutorial1"
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

Replace {{governance_id}} with the SubjectId of the governance we have created. The id of our user we get from when we used taple-keygen in the previous step. It is our KeyIdentifier, which identifies our public key. The Patch method is the only one that currently contains the contract of the governance and it simply applies a json-patch to its state. This method requires the Approval phase.

As we mentioned earlier, the creator will be the signer in all phases if no one else is defined, so for this event 1 we will be the [Evaluator](../../discover/event-evaluation-process.md), [Approver](../../discover/event-approval-process.md), and [Validator](../../discover/event-validation-process.md). Evaluation and validation work automatically, but the approval part requires user intervention through the API (provided the environment variable that automatically approves is not defined).

For this, we must first ask for pending approvals at **/api/approval-requests?status=pending** using a **GET**.

```bash
curl --silent 'http://localhost:3000/api/approval-requests?status=pending'
```

```json
[
    {
        "id": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",
        "request": {
            "event_request": {
                "Fact": {
                    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/0",
                                    "value": {
                                        "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                                        "name": "Tutorial1"
                                    }
                                }
                            ]
                        }
                    }
                },
                "signature": {
                    "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "timestamp": 1689758738346603498,
                    "value": "SEUhyEBzC8cXdmqORBLXtgyYuFh3zXFywBVjRnGvU70nLdjs5blDDUiUla4IaiOWqcBPt5U89vfoDFa-V-5QjDCw"
                }
            },
            "sn": 1,
            "gov_version": 0,
            "patch": [
                {
                    "op": "add",
                    "path": "/members/0",
                    "value": {
                        "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                        "name": "Tutorial1"
                    }
                }
            ],
            "state_hash": "J9ZorCKUeboco5eBZeW_NYssO3ZYLu2Ano_tThl8_Fss",
            "hash_prev_event": "Jg-2hzd0QEdqDdtRqe_ITljdbTWKPYSl1hO1XyrgwM8A",
            "signature": {
                "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
                "timestamp": 1689758738381216200,
                "value": "SE1GJs9v-OFtsveJQWi0HYRfkT4LkPCdu_7H_BUaTLg2Dpt5bTTBR8zLt6TiSbohsI0kdyQeOrYMHFxIRbKovYDg"
            }
        },
        "reponse": null,
        "state": "Pending"
    }
]
```

The id of the json response is what we must use to approve it. At **/api/approval-requests/{id}** using a **PATCH**, we will add the received id to cast the vote. As in our case, we want to approve it, the body should be:

```json
{"state": "RespondedAccepted"}
```

```bash
curl --silent --request PATCH 'http://localhost:3000/api/approval-requests/JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ' \
--header 'Content-Type: application/json' \
--data '{"state": "RespondedAccepted"}'
```

```json
{
    "id": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",
    "request": {
        "event_request": {
            "Fact": {
                "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
                "payload": {
                    "Patch": {
                        "data": [
                            {
                                "op": "add",
                                "path": "/members/0",
                                "value": {
                                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                                    "name": "Tutorial1"
                                }
                            }
                        ]
                    }
                }
            },
            "signature": {
                "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                "timestamp": 1689758738346603498,
                "value": "SEUhyEBzC8cXdmqORBLXtgyYuFh3zXFywBVjRnGvU70nLdjs5blDDUiUla4IaiOWqcBPt5U89vfoDFa-V-5QjDCw"
            }
        },
        "sn": 1,
        "gov_version": 0,
        "patch": [
            {
                "op": "add",
                "path": "/members/0",
                "value": {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                }
            }
        ],
        "state_hash": "J9ZorCKUeboco5eBZeW_NYssO3ZYLu2Ano_tThl8_Fss",
        "hash_prev_event": "Jg-2hzd0QEdqDdtRqe_ITljdbTWKPYSl1hO1XyrgwM8A",
        "signature": {
            "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
            "timestamp": 1689758738381216200,
            "value": "SE1GJs9v-OFtsveJQWi0HYRfkT4LkPCdu_7H_BUaTLg2Dpt5bTTBR8zLt6TiSbohsI0kdyQeOrYMHFxIRbKovYDg"
        }
    },
    "reponse": {
        "appr_req_hash": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",
        "approved": true,
        "signature": {
            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
            "timestamp": 1689758795610296081,
            "value": "SE34M3kRw9Uj2V_FaDq5Kz4h_8HSbkAiaH40XxpcPleLPJ_CnNbVso6L4GkdNNF2othwlDzTzk3BqyzyKlpIVDCg"
        }
    },
    "state": "Responded"
}
```
