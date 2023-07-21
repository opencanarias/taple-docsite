# Adding a third member

## Launching the third node

To add a third member we repeat the previous steps, the first thing is to create the cryptographic material with taple-keygen:

```bash
PRIVATE KEY ED25519 (HEX): 984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6
CONTROLLER ID ED25519: E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE
PeerID: 12D3KooWS4nPvBjbftvVQa4one9dQbneK66wVSLpZNSoTopxuNr4
```

To launch the docker:

```bash
docker run -p 3002:3000 -p 50002:50000 \ 
-e TAPLE_SECRET_KEY=984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6 \ 
-e TAPLE_HTTP=true \ 
-e TAPLE_NETWORK_KNOWN_NODE=/ip4/{addr}/tcp/50000/p2p/12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B \ 
-e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \
opencanarias/taple-client:0.2
```

## Modificar la gobernanza

Now we will launch the event that adds the third member to the governance, but to check the operation of the approvals we will vote yes with one node and no with the other, which will leave the event as rejected by the approval phase. It will still be added to the subject's chain, but it will not modify its state.

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
                    "path": "/members/2",
                    "value": {
                    "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                    "name": "Tutorial3"
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
                            "path": "/members/2",
                            "value": {
                                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                                "name": "Tutorial3"
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

We must first ask for pending approvals at **/api/approval-requests?status=pending** using a **GET**. The id of the response json is what we must use to approve it. At **/api/approval-requests/{id}** using a **PATCH** we will add the received id to cast the vote.

```bash
curl --silent 'http://localhost:3000/api/approval-requests?status=pending'
```

Response:

```json
[
    {
        "id": "J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4",
        "request": {
            "event_request": {
                "Fact": {
                    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/2",
                                    "value": {
                                        "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                                        "name": "Tutorial3"
                                    }
                                }
                            ]
                        }
                    }
                },
                "signature": {
                    "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "timestamp": 1689759413015509263,
                    "value": "SE1YEBQE1PdzwbtCnydZ1GnEw03Z8XkTZtXguYoCs3JqzuG5RIP00KxL_QIMCItUQsSip22mnZfmNScVpxAtyYCA"
                }
            },
            "sn": 4,
            "gov_version": 3,
            "patch": [
                {
                    "op": "add",
                    "path": "/members/2",
                    "value": {
                        "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                        "name": "Tutorial3"
                    }
                }
            ],
            "state_hash": "Jv3BSUFzl7zq2cFldSbl0YjpZ1JEqCVzGG0plg6OT4GA",
            "hash_prev_event": "JZt9JQi5x5-nmkwacYO3H6qjvCg8dgOOVyDCPNuQlpFY",
            "signature": {
                "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
                "timestamp": 1689759413045110844,
                "value": "SEu793Au3GbvoNUw8CEfAJBZj5RlspzpJdk3eJzB16u0Q7jLB04JN5WykLusqQzOyjDNquPMrs0HE5qCVEACJTBA"
            }
        },
        "reponse": null,
        "state": "Pending"
    }
]
```

In node 1 we will approve it but in node 2 we will reject it. As the quorum is Majority, this means that both must approve it for it to be approved. So if one of the two rejects it, it will be rejected because the quorum for acceptance cannot be reached.

Node 1:

```json
{"approvalType": "Accept"}
```

```bash
curl --silent --request PATCH 'http://localhost:3000/api/approval-requests/J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data '{"approvalType": "Accept"}'
```

Node 2:

```json
{"approvalType": "Reject"}
```

```bash
curl --silent --request PATCH 'http://localhost:3001/api/approval-requests/J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data '{"approvalType": "Reject"}'
```

We verify that the state has not been modified by looking for our subjects, however, the sn of the subject will have increased by 1:

```json
[
    {
        "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
        "governance_id": "",
        "sn": 4,
        "public_key": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
        "namespace": "",
        "name": "tutorial",
        "schema_id": "governance",
        "owner": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
        "creator": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
        "properties": {
            "members": [
                {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                },
                {
                    "id": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
                    "name": "Tutorial2"
                }
            ],
            "policies": [
                {
                    "approve": {
                        "quorum": "MAJORITY"
                    },
                    "evaluate": {
                        "quorum": "MAJORITY"
                    },
                    "id": "governance",
                    "validate": {
                        "quorum": "MAJORITY"
                    }
                }
            ],
            "roles": [
                {
                    "namespace": "",
                    "role": "WITNESS",
                    "schema": {
                        "ID": "governance"
                    },
                    "who": "MEMBERS"
                },
                {
                    "namespace": "",
                    "role": "APPROVER",
                    "schema": {
                        "ID": "governance"
                    },
                    "who": "MEMBERS"
                }
            ],
            "schemas": []
        },
        "active": true
    }
]
```

We can also search for a specific event with the event api: **/api/subjects/{id}/events/{sn}** whose id is the SubjectId of the subject, the sn is the specific event that we are going to search for (if nothing is added it will return all the events of the subject) and the request is of type **GET**.

```bash
curl --silent 'http://localhost:3000/api/subjects/Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M/events/4' \
--header 'X-API-KEY: 1234'
```

```json
{
    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
    "event_request": {
        "Fact": {
            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/2",
                            "value": {
                                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                                "name": "Tutorial3"
                            }
                        }
                    ]
                }
            }
        },
        "signature": {
            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
            "timestamp": 1689759413015509263,
            "value": "SE1YEBQE1PdzwbtCnydZ1GnEw03Z8XkTZtXguYoCs3JqzuG5RIP00KxL_QIMCItUQsSip22mnZfmNScVpxAtyYCA"
        }
    },
    "sn": 4,
    "gov_version": 3,
    "patch": [
        {
            "op": "add",
            "path": "/members/2",
            "value": {
                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                "name": "Tutorial3"
            }
        }
    ],
    "state_hash": "Jv3BSUFzl7zq2cFldSbl0YjpZ1JEqCVzGG0plg6OT4GA",
    "eval_success": true,
    "appr_required": true,
    "approved": false,
    "hash_prev_event": "JZt9JQi5x5-nmkwacYO3H6qjvCg8dgOOVyDCPNuQlpFY",
    "evaluators": [
        {
            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
            "timestamp": 1689759413042189699,
            "value": "SE__Vz_7yc3L0qJRXTnWzGRq0FsT3EGhe67WWLHkHcF7kqWKg6nldkWnx9od7byTTV_dNG_dwW26ShFbrLu1fLAg"
        }
    ],
    "approvers": [
        {
            "signer": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
            "timestamp": 1689759533754268083,
            "value": "SEeUWADKs25krS0mxYuqLBQe8umbs39Fs5Nbp85_7X_Sa959mBmZFDFZ5FGgJu3EPK1Pm3KgDp0vmLpq0aZ7S5DQ"
        }
    ],
    "signature": {
        "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
        "timestamp": 1689759533772217255,
        "value": "SEpn7Y28DrVFNKpk8qJB4_U2MQrQeJFa4UscRTg_Y1HVBrdjO-sy7J0f6-pGkLguKu2XdlQvXpNHOTeas1wkAICQ"
    }
}
```

Now we will repeat the same request but we will vote yes with both nodes, which will approve the request and modify the state of the subject. We approve the governance in the third node and we will see how it will be updated in a short period of time.
