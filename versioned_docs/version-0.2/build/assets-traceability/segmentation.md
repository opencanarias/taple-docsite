# Segmentation

Currently, we have witnesses and approvers for the *Wine* subjects. However, a problem arises with one of the nodes we added, **SFO**, as it is specific to Spain, and we do not want it to influence decisions made in other countries.

To address this need, the concept of segmentation by namespace emerges. This allows us to define specific permissions and roles for certain namespaces, ensuring that only nodes we consider valid can access specific information based on our interests.

With this new knowledge, it is time to continue adapting our use case. *PremiumWines* not only has vineyards in Spain but also in France, allowing them to produce bottles with different origins. As we know, in Spain, there is an organization (**SFO**) capable of approving the quality analysis of the product, but this is not the case in France, where this responsibility falls on **WFO**.

To achieve what we propose, we need to make some changes to the current schema:

- *PremiumWines* should be able to create subjects in both countries, so it must be a creator in the "Spain" and "France" namespaces.
- *WFO* becomes a witness and approver for wines in both Spain and France.
- External invocations should be allowed in both Spain and France.
- *SFO* will only be an approver and witness for Spanish wines.

First, let's check the roles of the governance before making these changes:

```json
{
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
        },
        {
            "namespace": "",
            "role": "CREATOR",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "PremiumWines"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "VALIDATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "EVALUATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        }
    ]
}
```

We will make changes to the roles declared in the governance. Here's how the properties should look after the modifications:

```json
{
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
        },
        {
            "namespace": "Spain",
            "role": "CREATOR",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "PremiumWines"
            }
        },
        {
            "namespace": "France",
            "role": "CREATOR",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "PremiumWines"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "VALIDATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "EVALUATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "France",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "France",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        },
        {
            "namespace": "France",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        },
        {
            "namespace": "Spain",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        }
    ]
}
```

To generate these changes, we will use our tool [**TAPLE-Patch**](../../learn/client-tools.md#taple-patch) following this procedure:

```bash title="Another terminal"
taple-patch '{"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WPO"}},{"namespace":"","role":"CREATOR","schema":{"ID":"Wine"},"who":{"NAME":"PremiumWines"}},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"VALIDATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"EVALUATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}},{"namespace":"","role":"ISSUER","schema":{"ID":"Wine"},"who":"NOT_MEMBERS"},{"namespace":"","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"SFO"}},{"namespace":"","role":"APPROVER","schema":{"ID":"Wine"},"who":{"NAME":"SFO"}}]}' '{"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WPO"}},{"namespace":"Spain","role":"CREATOR","schema":{"ID":"Wine"},"who":{"NAME":"PremiumWines"}},{"namespace":"France","role":"CREATOR","schema":{"ID":"Wine"},"who":{"NAME":"PremiumWines"}},{"namespace":"","role":"APPROVER","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"VALIDATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"","role":"EVALUATOR","schema":{"ID":"governance"},"who":{"NAME":"WFO"}},{"namespace":"Spain","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}},{"namespace":"France","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}},{"namespace":"Spain","role":"APPROVER","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}},{"namespace":"France","role":"APPROVER","schema":{"ID":"Wine"},"who":{"NAME":"WFO"}},{"namespace":"Spain","role":"ISSUER","schema":{"ID":"Wine"},"who":"NOT_MEMBERS"},{"namespace":"France","role":"ISSUER","schema":{"ID":"Wine"},"who":"NOT_MEMBERS"},{"namespace":"Spain","role":"WITNESS","schema":{"ID":"Wine"},"who":{"NAME":"SFO"}},{"namespace":"Spain","role":"APPROVER","schema":{"ID":"Wine"},"who":{"NAME":"SFO"}}]}'
```

The result obtained will be:

```json
[
    {
        "op": "replace",
        "path": "/roles/2/namespace",
        "value": "Spain"
    },
    {
        "op": "replace",
        "path": "/roles/3/namespace",
        "value": "France"
    },
    {
        "op": "replace",
        "path": "/roles/3/role",
        "value": "CREATOR"
    },
    {
        "op": "replace",
        "path": "/roles/3/schema/ID",
        "value": "Wine"
    },
    {
        "op": "replace",
        "path": "/roles/3/who/NAME",
        "value": "PremiumWines"
    },
    {
        "op": "replace",
        "path": "/roles/4/role",
        "value": "APPROVER"
    },
    {
        "op": "replace",
        "path": "/roles/5/role",
        "value": "VALIDATOR"
    },
    {
        "op": "replace",
        "path": "/roles/6/role",
        "value": "EVALUATOR"
    },
    {
        "op": "replace",
        "path": "/roles/6/schema/ID",
        "value": "governance"
    },
    {
        "op": "replace",
        "path": "/roles/7/namespace",
        "value": "Spain"
    },
    {
        "op": "replace",
        "path": "/roles/7/role",
        "value": "WITNESS"
    },
    {
        "op": "replace",
        "path": "/roles/7/who",
        "value": {
        "NAME": "WFO"
        }
    },
    {
        "op": "replace",
        "path": "/roles/8/namespace",
        "value": "France"
    },
    {
        "op": "replace",
        "path": "/roles/8/who/NAME",
        "value": "WFO"
    },
    {
        "op": "replace",
        "path": "/roles/9/namespace",
        "value": "Spain"
    },
    {
        "op": "replace",
        "path": "/roles/9/who/NAME",
        "value": "WFO"
    },
    {
        "op": "add",
        "path": "/roles/10",
        "value": {
        "namespace": "France",
        "role": "APPROVER",
        "schema": {
            "ID": "Wine"
        },
        "who": {
            "NAME": "WFO"
        }
        }
    },
    {
        "op": "add",
        "path": "/roles/11",
        "value": {
        "namespace": "Spain",
        "role": "ISSUER",
        "schema": {
            "ID": "Wine"
        },
        "who": "NOT_MEMBERS"
        }
    },
    {
        "op": "add",
        "path": "/roles/12",
        "value": {
        "namespace": "France",
        "role": "ISSUER",
        "schema": {
            "ID": "Wine"
        },
        "who": "NOT_MEMBERS"
        }
    },
    {
        "op": "add",
        "path": "/roles/13",
        "value": {
        "namespace": "Spain",
        "role": "WITNESS",
        "schema": {
            "ID": "Wine"
        },
        "who": {
            "NAME": "SFO"
        }
        }
    },
    {
        "op": "add",
        "path": "/roles/14",
        "value": {
        "namespace": "Spain",
        "role": "APPROVER",
        "schema": {
            "ID": "Wine"
        },
        "who": {
            "NAME": "SFO"
        }
        }
    }
]
```

Next, we will invoke the governance contract method responsible for updating its properties:

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
                            "op": "replace",
                            "path": "/roles/2/namespace",
                            "value": "Spain"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/namespace",
                            "value": "France"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/role",
                            "value": "CREATOR"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/schema/ID",
                            "value": "Wine"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/who/NAME",
                            "value": "PremiumWines"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/4/role",
                            "value": "APPROVER"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/5/role",
                            "value": "VALIDATOR"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/6/role",
                            "value": "EVALUATOR"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/6/schema/ID",
                            "value": "governance"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/7/namespace",
                            "value": "Spain"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/7/role",
                            "value": "WITNESS"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/7/who",
                            "value": {
                                "NAME": "WFO"
                            }
                        },
                        {
                            "op": "replace",
                            "path": "/roles/8/namespace",
                            "value": "France"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/8/who/NAME",
                            "value": "WFO"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/9/namespace",
                            "value": "Spain"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/9/who/NAME",
                            "value": "WFO"
                        },
                        {
                            "op": "add",
                            "path": "/roles/10",
                            "value": {
                                "namespace": "France",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": {
                                    "NAME": "WFO"
                                }
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/11",
                            "value": {
                                "namespace": "Spain",
                                "role": "ISSUER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": "NOT_MEMBERS"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/12",
                            "value": {
                                "namespace": "France",
                                "role": "ISSUER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": "NOT_MEMBERS"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/13",
                            "value": {
                                "namespace": "Spain",
                                "role": "WITNESS",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": {
                                    "NAME": "SFO"
                                }
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/14",
                            "value": {
                                "namespace": "Spain",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": {
                                    "NAME": "SFO"
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

After sending the governance update request, we will receive an approval notification. To do this, run the following command:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copy the value of the `id` field from the notification and request approval from **WPO** and **WFO**:

```bash title="Node: WPO"
curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"state": "RespondedAccepted"}'
```

```bash title="Node: WFO"
curl --request PATCH 'http://localhost:3002/api/approval-requests/{{PREVIUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"state": "RespondedAccepted"}'
```

If everything went well, when you execute the following command, the governance `sn` should be 7, and the changes made earlier should be displayed:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

<details>
 <summary>Click to look at the full governance.</summary>

```json
{
    "subject_id": {{GOVERNANCE-ID}},
    "governance_id": "",
    "sn": 7,
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
            },
            {
                "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
                "name": "PremiumWines"
            },
            {
                "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
                "name": "WFO"
            },
            {
                "id": "EaHFQQ0ADaLuRgQsIZxYNU8BAj_cBub7MZdpoZsRf-GY",
                "name": "SFO"
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
            },
            {
                "approve": {
                    "quorum": "MAJORITY"
                },
                "evaluate": {
                    "quorum": "MAJORITY"
                },
                "id": "Wine",
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
            },
            {
                "namespace": "Spain",
                "role": "CREATOR",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "PremiumWines"
                }
            },
            {
                "namespace": "France",
                "role": "CREATOR",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "PremiumWines"
                }
            },
            {
                "namespace": "",
                "role": "APPROVER",
                "schema": {
                    "ID": "governance"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "",
                "role": "VALIDATOR",
                "schema": {
                    "ID": "governance"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "",
                "role": "EVALUATOR",
                "schema": {
                    "ID": "governance"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "WITNESS",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "France",
                "role": "WITNESS",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "APPROVER",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "France",
                "role": "APPROVER",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "ISSUER",
                "schema": {
                    "ID": "Wine"
                },
                "who": "NOT_MEMBERS"
            },
            {
                "namespace": "France",
                "role": "ISSUER",
                "schema": {
                    "ID": "Wine"
                },
                "who": "NOT_MEMBERS"
            },
            {
                "namespace": "Spain",
                "role": "WITNESS",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "SFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "APPROVER",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "SFO"
                }
            }
        ],
        "schemas": [
            {
                "contract": {
                    "raw": "dXNlIHRhcGxlX3NjX3J1c3QgYXMgc2RrOw0KdXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lLCBQYXJ0aWFsRXEpXSANCmVudW0gR3JhcGUgew0KICAgIENhYmVybmV0U2F1dmlnbm9uLA0KICAgIENoYXJkb25uYXksDQogICAgUGlub3ROb2lyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICBwdWIgbGFzdF9jaGVjazogdTMyLA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9vazogYm9vbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFN0YXRlIHsNCiAgICBwdWIgaGFydmVzdDogdTMyLA0KICAgIHB1YiBncmFwZTogT3B0aW9uPEdyYXBlPiwNCiAgICBwdWIgb3JpZ2luOiBTdHJpbmcsDQogICAgcHViIG9yZ2FuaWNfY2VydGlmaWVkOiBPcHRpb248Ym9vbD4sDQogICAgcHViIHRlbXBlcmF0dXJlX2NvbnRyb2w6IFRlbXBlcmF0dXJlQ29udHJvbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIFN0YXRlRXZlbnQgew0KICAgIEluaXQgew0KICAgICAgICBoYXJ2ZXN0OiB1MzIsDQogICAgICAgIGdyYXBlOiBTdHJpbmcsDQogICAgICAgIG9yaWdpbjogU3RyaW5nLA0KICAgIH0sDQogICAgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICAgICAgdGVtcGVyYXR1cmU6IGYzMiwNCiAgICAgICAgdGltZXN0YW1wOiB1MzIsDQogICAgfSwNCiAgICBPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIHBlc3RpY2lkZXNfY29udHJvbDogYm9vbCwNCiAgICAgICAgYW5hbHl0aWNzOiBib29sLA0KICAgICAgICBhZGRpdGlvbmFsX2luZm86IFN0cmluZywNCiAgICB9LA0KfQ0KDQpjb25zdCBURU1QRVJBVFVSRV9SQU5HRTogKGYzMiwgZjMyKSA9ICgxMC4wLCAxNi4wKTsNCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwNCiAgICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sDQopIHsNCiAgICBsZXQgc3RhdGUgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIFN0YXRlRXZlbnQ6OkluaXQgew0KICAgICAgICAgICAgaGFydmVzdCwNCiAgICAgICAgICAgIGdyYXBlLA0KICAgICAgICAgICAgb3JpZ2luLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNvbnRleHQuaXNfb3duZXIgJiYgIWNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbGV0IGdyYXBlID0gbWF0Y2ggZ3JhcGUuYXNfc3RyKCkgew0KICAgICAgICAgICAgICAgICAgICAiQ2FiZXJuZXRTYXV2aWdub24iID0+IFNvbWUoR3JhcGU6OkNhYmVybmV0U2F1dmlnbm9uKSwNCiAgICAgICAgICAgICAgICAgICAgIkNoYXJkb25uYXkiID0+IFNvbWUoR3JhcGU6OkNoYXJkb25uYXkpLA0KICAgICAgICAgICAgICAgICAgICAiUGlub3ROb2lyIiA9PiBTb21lKEdyYXBlOjpQaW5vdE5vaXIpLA0KICAgICAgICAgICAgICAgICAgICBfID0+IE5vbmUsDQogICAgICAgICAgICAgICAgfTsNCiAgICAgICAgICAgICAgICBpZiBncmFwZS5pc19zb21lKCkgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS5oYXJ2ZXN0ID0gKmhhcnZlc3Q7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmdyYXBlID0gZ3JhcGU7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbiA9IG9yaWdpbi50b19zdHJpbmcoKTsNCiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpUZW1wZXJhdHVyZUNvbnRyb2wgew0KICAgICAgICAgICAgdGVtcGVyYXR1cmUsDQogICAgICAgICAgICB0aW1lc3RhbXAsDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY29udGV4dC5pc19vd25lciAmJiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZSkgew0KICAgICAgICAgICAgICAgIGlmIGNoZWNrX3RlbXBlcmF0dXJlX2luX3JhbmdlKCp0ZW1wZXJhdHVyZSkNCiAgICAgICAgICAgICAgICAgICAgJiYgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC50ZW1wZXJhdHVyZV9vaw0KICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rID0gZmFsc2U7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wubGFzdF9jaGVjayA9ICp0aW1lc3RhbXA7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgICAgICBmZXJ0aWxpemVyc19jb250cm9sLA0KICAgICAgICAgICAgcGVzdGljaWRlc19jb250cm9sLA0KICAgICAgICAgICAgYW5hbHl0aWNzLA0KICAgICAgICAgICAgYWRkaXRpb25hbF9pbmZvLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbWF0Y2ggc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgew0KICAgICAgICAgICAgICAgICAgICBTb21lKG9yZ2FuaWNfY2VyaWZpZWQpID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIG9yZ2FuaWNfY2VyaWZpZWQNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhY2hlY2tfaXNfb3JnYW5pYygNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICphbmFseXRpY3MsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgTm9uZSA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiBjaGVja19pc19vcmdhbmljKCpmZXJ0aWxpemVyc19jb250cm9sLCAqcGVzdGljaWRlc19jb250cm9sLCAqYW5hbHl0aWNzKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKHRydWUpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUoZmFsc2UpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5hcHByb3ZhbF9yZXF1aXJlZCA9IHRydWU7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfQ0KfQ0KDQpmbiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZTogJlN0YXRlKSAtPiBib29sIHsNCiAgICBsZXQgaW5pdGlhbF9ncmFwZSA9IG1hdGNoIHN0YXRlLmdyYXBlIHsNCiAgICAgICAgU29tZShfKSA9PiBmYWxzZSwNCiAgICAgICAgTm9uZSA9PiB0cnVlLA0KICAgIH07DQogICAgaWYgc3RhdGUuaGFydmVzdCA9PSAwICYmIGluaXRpYWxfZ3JhcGUgJiYgc3RhdGUub3JpZ2luID09IGZvcm1hdCEoIiIpIHsNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgIH0NCiAgICByZXR1cm4gdHJ1ZTsNCn0NCg0KZm4gY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UodGVtcGVyYXR1cmU6IGYzMikgLT4gYm9vbCB7DQogICAgaWYgdGVtcGVyYXR1cmUgPj0gVEVNUEVSQVRVUkVfUkFOR0UuMCAmJiB0ZW1wZXJhdHVyZSA8PSBURU1QRVJBVFVSRV9SQU5HRS4xIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0NCg0KZm4gY2hlY2tfaXNfb3JnYW5pYyhmZXJ0aWxpemVyc19jb250cm9sOiBib29sLCBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsIGFuYWx5dGljczogYm9vbCkgLT4gYm9vbCB7DQogICAgaWYgZmVydGlsaXplcnNfY29udHJvbCAmJiBwZXN0aWNpZGVzX2NvbnRyb2wgJiYgYW5hbHl0aWNzIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0="
                },
                "id": "Wine",
                "initial_value": {
                    "grape": null,
                    "harvest": 0,
                    "organic_certified": null,
                    "origin": "",
                    "temperature_control": {
                        "last_check": 0,
                        "temperature_ok": true
                    }
                },
                "schema": {
                    "additionalProperties": false,
                    "description": "Representation of a bottle of wine",
                    "properties": {
                        "grape": {
                            "description": "Type of grape",
                            "enum": [
                                "CabernetSauvignon",
                                "Chardonnay",
                                "PinotNoir",
                                null
                            ],
                            "type": [
                                "string",
                                "null"
                            ]
                        },
                        "harvest": {
                            "description": "Harvest number",
                            "type": "integer"
                        },
                        "organic_certified": {
                            "description": "Certificate authenticating whether it is organic or not",
                            "type": [
                                "boolean",
                                "null"
                            ]
                        },
                        "origin": {
                            "description": "Origin of the grape",
                            "type": "string"
                        },
                        "temperature_control": {
                            "additionalProperties": false,
                            "description": "Values to be changed in the temperature control event",
                            "properties": {
                                "last_check": {
                                    "description": "Timestamp of last check",
                                    "type": "integer"
                                },
                                "temperature_ok": {
                                    "description": "Value that corroborates whether the wine cold chain has been complied with",
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "last_check",
                                "temperature_ok"
                            ],
                            "type": "object"
                        }
                    },
                    "required": [
                        "harvest",
                        "grape",
                        "origin",
                        "organic_certified",
                        "temperature_control"
                    ],
                    "type": "object"
                }
            }
        ]
    },
    "active": true
}
```

</details>

Once we have implemented *namespace* segmentation, we will perform tests to verify its correct functioning.

Let's create a French wine bottle using the following command:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "France",
        "name": "Wine"
        }
    }
}'
```

When you perform this action, you will receive a `request-id`, which you should copy and use in the following command:

```bash title="Node: Premium wines"
curl --request GET 'http://localhost:3001/api/event-requests/{{REQUEST-ID}}/state'
```

This last command will give you a response similar to the following:

```json
{
    "id": {{REQUEST-ID}},
    "subject_id": {{SUBJECT-ID}},
    "sn": 0,
    "state": "finished",
    "success": true
}
```

:::note
Save the `subject_id` of the **subject**, as you will need it for subsequent steps in the tutorial.
:::

To check our new wine bottle, execute the following command:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 0,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "France",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": null,
        "harvest": 0,
        "organic_certified": null,
        "origin": "",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```

But if we execute:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/subjects/{{SUBJECT-ID}}'
```

We get 404 arror because of the segmentation we have applied changing the namespace, which determine who are the witnesses of the subject.

:::caution
Copy its `subject_id` as it will be necessary for the following steps.
:::

Initialize the bottle before testing the certification event issuance:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{SUBJECT-ID}},
            "payload": {
                "Init": {
                    "harvest": 2,
                    "grape": "Chardonnay",
                    "origin": "france"
                }
            }
        }
    }
}'
```

Now, when you execute the subject query again, it should have a `sn` value of 1 and display the previously mentioned information:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 1,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "France",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "Chardonnay",
        "harvest": 2,
        "organic_certified": null,
        "origin": "france",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```

We will test issuing the certification event. To do this, we will generate the event signature we want to issue using [TAPLE-Sign](../../learn/client-tools.md#taple-sign), with the following format, replacing `subject_id` with the identifier of our wine subject:

```bash title="Another terminal"
taple-sign 'f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326' '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"OrganicCertification":{"fertilizers_control":false,"pesticides_control":false,"analytics":false,"additional_info":"test"}}}}'
```

The result of this execution will be included in the following request:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw {{SIGN-RESULT}}
```

This will give us a result similar to the following:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
        "subject_id": {{SUBJECT-ID}},
        "payload": {
            "OrganicCertification": {
            "additional_info": "test",
            "analytics": false,
            "fertilizers_control": false,
            "pesticides_control": false
            }
        }
        }
    },
    "signature": {
        "signer": "EzzmRjc8CtjzHu3MKmuTgnmOTgrJlYZj1D2DCZ9nN7Vk",
        "timestamp": 1689858060412988735,
        "value": "SEiF6C6zhFxzxs56nY6vk4ySTl7zvpV2gExTiiGlbxKI-HVvizL6eYmjV9IjE8GJMzOIQkok8rUehRVK9cNgSfCg"
    }
}'
```

If the segmentation has been successfully applied, the approval message for this subject should only have been received by **WFO**. To check it, execute the following command:

```bash title="Node: WFO"
curl --request GET 'http://localhost:3002/api/approval-requests?status=pending'
```

Copy its `id` and use it to accept it with the following request:

```bash title="Node: WFO"
curl --request PATCH 'http://localhost:3002/api/approval-requests/{{PREVIUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"state": "RespondedAccepted"}'
```

Now, when you query the subject again, it should show a `sn` value of 2, and the `organic_certified` field should be `false`:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

```json
{
    "subject_id": {{SUBJECT_ID}},
    "governance_id": {{GOVERNANCE_ID}},
    "sn": 2,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "France",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "Chardonnay",
        "harvest": 2,
        "organic_certified": false,
        "origin": "france",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```