# Creating an event

Once we have initialized our governance to begin formalizing the use case for the wine life cycle, it's necessary to fill it and adapt it to our needs. To make these modifications, we must generate an event in the network. In *Taple*, there are different types of events, such as the **genesis** event, which is used to create the governance. However, in this case, we need to generate an event of type **fact**, which allows modifying the state of a subject in the network.

These **fact** events interact with the operations defined in the subject's *smart contract* and act upon them. In the case of governance, its contract is special, as both its schema and contract are [internal to Taple](../../learn/governance-schema-and-contract.md).

The governance contract exposes only one method for modification, which must be used through *json-patch*.

Let's start by verifying the changes we want to make in the governance properties. At the end of the previous step, our governance should look similar to the following:

```json
{
    "members": [],
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
        }
    ],
    "schemas": []
}
```

Now, we need to include the member who created the governance, which would result in a *json* like this:

```json
{
    "members": [
        {
            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "name": "WPO"
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
            "who": {
                "NAME": "WPO"
            }
        }
    ],
    "schemas": []
}
```

To generate the mentioned changes, we will use our [**TAPLE-Patch**](../../learn/client-tools.md#taple-patch) tool as follows:

```bash title="Another terminal"
taple-patch "{\"members\":[],\"policies\":[{\"approve\":{\"quorum\":\"MAJORITY\"},\"evaluate\":{\"quorum\":\"MAJORITY\"},\"id\":\"governance\",\"validate\":{\"quorum\":\"MAJORITY\"}}],\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"}],\"schemas\":[]}" "{\"members\":[{\"id\":\"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs\",\"name\":\"WPO\"}],\"policies\":[{\"approve\":{\"quorum\":\"MAJORITY\"},\"evaluate\":{\"quorum\":\"MAJORITY\"},\"id\":\"governance\",\"validate\":{\"quorum\":\"MAJORITY\"}}],\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WPO\"}}],\"schemas\":[]}"
```

The result will be as follows:

```json
[
  {
    "op": "add",
    "path": "/members/0",
    "value": {
      "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
      "name": "WPO"
    }
  },
  {
    "op": "add",
    "path": "/roles/1",
    "value": {
      "namespace": "",
      "role": "APPROVER",
      "schema": {
        "ID": "governance"
      },
      "who": {
        "NAME": "WPO"
      }
    }
  }
]
```

Now, it's time to call the method of the governance contract responsible for updating its properties. To do this, we will execute the following:

```bash title="Node: WPO"
curl --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{GOVERNANCE-ID}},
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/0",
                            "value": {
                            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
                            "name": "WPO"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/1",
                            "value": {
                                "namespace": "",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "governance"
                                },
                                "who": {
                                    "NAME": "WPO"
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

:::info
Please note that the changes found within the `data` list are the changes that will be made to the governance through *json-patch*.
:::

At this point, we need to discuss a new concept: [emitting certain events requires approval](../../discover/event-approval-process.md), which is defined at the smart contract level for a subject. In the case of governance, its changes must be approved by those members whose role within the governance has been specified as an approver. If no approvers are defined, the owner of the governance assumes this role.

Therefore, we must check our list of pending approval requests in the system:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/approval-requests?status=pending'
```

The result of this operation will be a list with a single element, representing the event waiting to be approved. To approve this request to update the governance, copy the value shown in its `id` field and execute the following command:

```bash title="Node: WPO"
curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIOUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Then, we check the governance again to verify the changes. The result should show an `sn` field equal to 1 and the inclusion of the new member:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

```json
{
    "subject_id": {{GOVERNACE-ID}},
    "governance_id": "",
    "sn": 1,
    "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",
    "namespace": "",
    "name": "wine_track",
    "schema_id": "governance",
    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
    "properties": {
        "members": [
        {
            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "name": "WPO"
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
            "who": {
            "NAME": "WPO"
            }
        }
        ],
        "schemas": []
    },
    "active": true
}
```