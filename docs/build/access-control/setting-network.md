# Setting up the network
Next, we will proceed to form the network with the elements seen in the previous section.

## Running a nodes
To start with the use case, the first thing we will do is to raise the necessary nodes for it. To do this, you must execute the various commands presented in the following sections.

Before raising the nodes, make sure to download the appropriate **TAPLE Client** image from Dockerhub:

```bash
docker pull opencanarias/taple-client:0.2
```

:::info

In this tutorial, we are going to raise several nodes on the same local network, using the IP addresses assigned by docker. Note that these may not be exactly the same as the ones you get and you may need to change them. Also, we will raise each node on a different p2p and http port.

:::

### Rental Company node 
```bash title="Node: Rental Company"
docker run \
    -p 3000:3000 \
    -p 50000:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_ID_PRIVATE_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \
    opencanarias/taple-client:0.2
```

### Cleaning Company node
```bash title="Node: Cleaning Company"
docker run \
    -p 3001:3000 \
    -p 50001:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_ID_PRIVATE_KEY=4f0e3c9cd24ab3420b81220bb7ebccb4e42501d3667dea81838b3bfaae20c936 \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50001 \
    -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
    opencanarias/taple-client:0.2
```

### Security Company node
```bash title="Node: Security Company"
docker run \
    -p 3002:3000 \
    -p 50002:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_ID_PRIVATE_KEY=6d3103185146ecedd28d3759df693999927e69aacb55e1aa9fe7ac17555da81c \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50002 \
    -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
    opencanarias/taple-client:0.2
```

### Vehicle node
In this use case, we would have one node per vehicle, but to simplify the example, we will limit the use case to the interaction with one vehicle.

```bash title="Node: Vehicle"
docker run \
    -p 3003:3000 \
    -p 50003:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_ID_PRIVATE_KEY=2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198 \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50003 \
    -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
    opencanarias/taple-client:0.2
```

:::info

It should be noted that for the node survey, we have previously generated the cryptographic material using the **[TAPLE Keygen](../../learn/client-tools.md#taple-keygen)** tool.

:::

## Creating and updating governance
Once we have raised all the nodes, we proceed to the network configuration. For this, the creation of the governance is required. As the rental company is the owner of the use case, it is necessary that the creation of the governance is done by this entity. The steps necessary for its creation and updating will be described below.

### Creating governance
To begin, we create the governance by executing the following command:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data '{
      "request": {
        "Create": {
            "governance_id": "",
            "schema_id": "governance",
            "namespace": "",
            "name": "Access_control"
        }
      }
    }'
```

Once the above command is executed, the "**request-id**" of the event will be returned. It is necessary to save it for future steps.

Once created, we check that the governance has been created successfully. To do this, we execute the following command:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Note that in the request, you must replace **{{REQUEST-ID}}** with the value copied above.

:::

This last command, will provide a response like the following:

```bash
{
  "id": {{REQUEST-ID}},
  "subject_id": {{GOVERNANCE-ID}},
  "sn": 0,
  "state": "finished",
  "success": true
}
```

**Note:** Save the "**subject_id**" corresponding to the governance, as it will be needed in the next steps of the tutorial.

Finally, to check the governance, we must execute the following command:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Note that in the request, you must replace **{{GOVERNANCE-ID}}** with the previously saved governance hash identifier.

:::

Once our governance is initialized we can start formalizing the access control use case. However, the current governance is empty, so we must make updates to it to adapt it to our use case.

### Updating governance
Based on the initial governance previously seen:

<details>
  <summary>Initial JSON governance</summary>

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

</details>

and after filling in the corresponding fields, we would be left with the following:

<details>
  <summary>Final JSON governance</summary>

```json
{
    "members": [
        {
            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "name": "RentalCompany"
        },
        {
            "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
            "name": "CleaningCompany"
        },
        {
            "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
            "name": "SecurityCompany"
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
                "quorum": {
                    "FIXED": 1
                }
            },
            "evaluate": {
                "quorum": "MAJORITY"
            },
            "id": "car",
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
            "role": "CREATOR",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "RentalCompany"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "RentalCompany"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "RentalCompany"
            }
        },
        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "RentalCompany"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "CleaningCompany"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "CleaningCompany"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "CleaningCompany"
            }
        },
        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "CleaningCompany"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "SecurityCompany"
            }
        },
        {
            "namespace": "",
            "role": "EVALUATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "SecurityCompany"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "car"
            },
            "who": {
                "NAME": "SecurityCompany"
            }
        },
        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "car"
            },
            "who": "NOT_MEMBERS"
        }
    ],
    "schemas": [
        {
            "contract": {
                "raw":"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg=="
            },
            "id": "car",
            "initial_value": {
                "last_position": {
                    "latitude": 0.0,
                    "longitude": 0.0
                },
                "status": "FREE"
            },
            "schema": {
                "additionalProperties": false,
                "description": "State_of_car",
                "properties": {
                    "last_position": {
                        "description": "Contains_the_record_of_the_last_position_of_the_car",
                        "properties": {
                            "latitude": {
                                "description": "Define_the_latitude_of_the_car_geolocation",
                                "type": "number"
                            },
                            "longitude": {
                                "description": "Define_the_length_of_the_car_geolocation",
                                "type": "number"
                            }
                        },
                        "type": "object"
                    },
                    "status": {
                        "description": "Defines_whether_the_car_is_free_or_rented",
                        "enum": [
                            "FREE",
                            "RENTED"
                        ],
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "last_position"
                ],
                "type": "object"
            }
        }
    ]
}
```

</details>

To generate the above changes, we will use our **[TAPLE-Patch](../../learn/client-tools.md#taple-patch)** tool as follows:

```bash title="Another terminal"
taple-patch '{"members":[],"policies":[{"approve":{"quorum":"MAJORITY"},"evaluate":{"quorum":"MAJORITY"},"id":"governance","validate":{"quorum":"MAJORITY"}}],"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"}],"schemas":[]}' '{"members":[{"id":"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs","name":"RentalCompany"},{"id":"Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI","name":"CleaningCompany"},{"id":"EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU","name":"SecurityCompany"}],"policies":[{"approve":{"quorum":"MAJORITY"},"evaluate":{"quorum":"MAJORITY"},"id":"governance","validate":{"quorum":"MAJORITY"}},{"approve":{"quorum":{"FIXED":1}},"evaluate":{"quorum":"MAJORITY"},"id":"car","validate":{"quorum":"MAJORITY"}}],"roles":[{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":"MEMBERS"},{"namespace":"","role":"CREATOR","schema":{"ID":"car"},"who":{"NAME":"RentalCompany"}},{"namespace":"","role":"APPROVER","schema":{"ID":"car"},"who":{"NAME":"RentalCompany"}},{"namespace":"","role":"WITNESS","schema":{"ID":"car"},"who":{"NAME":"RentalCompany"}},{"namespace":"","role":"ISSUER","schema":{"ID":"car"},"who":{"NAME":"RentalCompany"}},{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":{"NAME":"CleaningCompany"}},{"namespace":"","role":"WITNESS","schema":{"ID":"car"},"who":{"NAME":"CleaningCompany"}},{"namespace":"","role":"APPROVER","schema":{"ID":"car"},"who":{"NAME":"CleaningCompany"}},{"namespace":"","role":"ISSUER","schema":{"ID":"car"},"who":{"NAME":"CleaningCompany"}},{"namespace":"","role":"WITNESS","schema":{"ID":"governance"},"who":{"NAME":"SecurityCompany"}},{"namespace":"","role":"EVALUATOR","schema":{"ID":"governance"},"who":{"NAME":"SecurityCompany"}},{"namespace":"","role":"WITNESS","schema":{"ID":"car"},"who":{"NAME":"SecurityCompany"}},{"namespace":"","role":"ISSUER","schema":{"ID":"car"},"who":"NOT_MEMBERS"}],"schemas":[{"contract":{"raw":"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg=="},"id":"car","initial_value":{"last_position":{"latitude":0.0,"longitude":0.0},"status":"FREE"},"schema":{"additionalProperties":false,"description":"State_of_car","properties":{"last_position":{"description":"Contains_the_record_of_the_last_position_of_the_car","properties":{"latitude":{"description":"Define_the_latitude_of_the_car_geolocation","type":"number"},"longitude":{"description":"Define_the_length_of_the_car_geolocation","type":"number"}},"type":"object"},"status":{"description":"Defines_whether_the_car_is_free_or_rented","enum":["FREE","RENTED"],"type":"string"}},"required":["status","last_position"],"type":"object"}}]}'
```

You should then get the following output:

```bash title="Another terminal"
[
  {
    "op": "add",
    "path": "/members/0",
    "value": {
      "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
      "name": "RentalCompany"
    }
  },
  {
    "op": "add",
    "path": "/members/1",
    "value": {
      "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
      "name": "CleaningCompany"
    }
  },
  {
    "op": "add",
    "path": "/members/2",
    "value": {
      "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
      "name": "SecurityCompany"
    }
  },
  {
    "op": "add",
    "path": "/policies/1",
    "value": {
      "approve": {
        "quorum": {
          "FIXED": 1
        }
      },
      "evaluate": {
        "quorum": "MAJORITY"
      },
      "id": "car",
      "validate": {
        "quorum": "MAJORITY"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/1",
    "value": {
      "namespace": "",
      "role": "CREATOR",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "RentalCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/2",
    "value": {
      "namespace": "",
      "role": "APPROVER",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "RentalCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/3",
    "value": {
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "RentalCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/4",
    "value": {
      "namespace": "",
      "role": "ISSUER",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "RentalCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/5",
    "value": {
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "governance"
      },
      "who": {
        "NAME": "CleaningCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/6",
    "value": {
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "CleaningCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/7",
    "value": {
      "namespace": "",
      "role": "APPROVER",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "CleaningCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/8",
    "value": {
      "namespace": "",
      "role": "ISSUER",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "CleaningCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/9",
    "value": {
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "governance"
      },
      "who": {
        "NAME": "SecurityCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/10",
    "value": {
      "namespace": "",
      "role": "EVALUATOR",
      "schema": {
        "ID": "governance"
      },
      "who": {
        "NAME": "SecurityCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/11",
    "value": {
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "car"
      },
      "who": {
        "NAME": "SecurityCompany"
      }
    }
  },
  {
    "op": "add",
    "path": "/roles/12",
    "value": {
      "namespace": "",
      "role": "ISSUER",
      "schema": {
        "ID": "car"
      },
      "who": "NOT_MEMBERS"
    }
  }, 
  {
    "op": "add",
    "path": "/schemas/0",
    "value": {
      "contract": {
        "raw": "dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg=="
      },
      "id": "car",
      "initial_value": {
        "last_position": {
          "latitude": 0.0,
          "longitude": 0.0
        },
        "status": "FREE"
      },
      "schema": {
        "additionalProperties": false,
        "description": "State_of_car",
        "properties": {
          "last_position": {
            "description": "Contains_the_record_of_the_last_position_of_the_car",
            "properties": {
              "latitude": {
                "description": "Define_the_latitude_of_the_car_geolocation",
                "type": "number"
              },
              "longitude": {
                "description": "Define_the_length_of_the_car_geolocation",
                "type": "number"
              }
            },
            "type": "object"
          },
          "status": {
            "description": "Defines_whether_the_car_is_free_or_rented",
            "enum": [
              "FREE",
              "RENTED"
            ],
            "type": "string"
          }
        },
        "required": [
          "status",
          "last_position"
        ],
        "type": "object"
      }
    }
  }
]
```

Now, it will be necessary to issue a fact event to the governance to add this new information. To do this, we execute the following command:

```bash title="Node: Rental Company"
curl --request POST 'http://localhost:3000/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data '{
        "request": {
            "Fact": {
                "subject_id": "{{GOVERNANCE-ID}}",
                "payload": {
                    "Patch": {
                        "data": [
                            {
                                "op": "add",
                                "path": "/members/0",
                                "value": {
                                  "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
                                  "name": "RentalCompany"
                                }
                            },
                            {
                                "op": "add",
                                "path": "/members/1",
                                "value": {
                                  "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
                                  "name": "CleaningCompany"
                                }
                            },
                            {
                                "op": "add",
                                "path": "/members/2",
                                "value": {
                                  "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
                                  "name": "SecurityCompany"
                                }
                            },
                            {
                                "op": "add",
                                "path": "/policies/1",
                                "value": {
                                    "approve": {
                                        "quorum": {
                                            "FIXED": 1
                                        }
                                    },
                                    "evaluate": {
                                        "quorum": "MAJORITY"
                                    },
                                    "id": "car",
                                    "validate": {
                                        "quorum": "MAJORITY"
                                    }
                                }
                            },  
                            {
                                "op": "add",
                                "path": "/roles/1",
                                "value": {
                                    "namespace": "",
                                    "role": "CREATOR",
                                    "schema": {
                                        "ID": "car"
                                    },
                                    "who": {
                                        "NAME": "RentalCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/2",
                                "value": {
                                    "namespace": "",
                                    "role": "APPROVER",
                                    "schema": {
                                        "ID": "car"
                                    },
                                    "who": {
                                        "NAME": "RentalCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/3",
                                "value": {
                                    "namespace": "",
                                    "role": "WITNESS",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": {
                                      "NAME": "RentalCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/4",
                                "value": {
                                    "namespace": "",
                                    "role": "ISSUER",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": {
                                      "NAME": "RentalCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/5",
                                "value": {
                                    "namespace": "",
                                    "role": "WITNESS",
                                    "schema": {
                                      "ID": "governance"
                                    },
                                    "who": {
                                      "NAME": "CleaningCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/6",
                                "value": {
                                    "namespace": "",
                                    "role": "WITNESS",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": {
                                      "NAME": "CleaningCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/7",
                                "value": {
                                    "namespace": "",
                                    "role": "APPROVER",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": {
                                      "NAME": "CleaningCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/8",
                                "value": {
                                    "namespace": "",
                                    "role": "ISSUER",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": {
                                      "NAME": "CleaningCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/9",
                                "value": {
                                    "namespace": "",
                                    "role": "WITNESS",
                                    "schema": {
                                      "ID": "governance"
                                    },
                                    "who": {
                                      "NAME": "SecurityCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/10",
                                "value": {
                                    "namespace": "",
                                    "role": "EVALUATOR",
                                    "schema": {
                                      "ID": "governance"
                                    },
                                    "who": {
                                      "NAME": "SecurityCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/11",
                                "value": {
                                    "namespace": "",
                                    "role": "WITNESS",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": {
                                      "NAME": "SecurityCompany"
                                    }
                                }
                            },
                            {
                                "op": "add",
                                "path": "/roles/12",
                                "value": {
                                    "namespace": "",
                                    "role": "ISSUER",
                                    "schema": {
                                      "ID": "car"
                                    },
                                    "who": "NOT_MEMBERS"
                                }
                            },
                            {
                                "op": "add",
                                "path": "/schemas/0",
                                "value": {
                                  "contract": {
                                    "raw": "dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg=="
                                  },
                                  "id": "car",
                                  "initial_value": {
                                    "last_position": {
                                      "latitude": 0.0,
                                      "longitude": 0.0
                                    },
                                    "status": "FREE"
                                  },
                                  "schema": {
                                    "additionalProperties": false,
                                    "description": "State_of_car",
                                    "properties": {
                                      "last_position": {
                                        "description": "Contains_the_record_of_the_last_position_of_the_car",
                                        "properties": {
                                          "latitude": {
                                            "description": "Define_the_latitude_of_the_car_geolocation",
                                            "type": "number"
                                          },
                                          "longitude": {
                                            "description": "Define_the_length_of_the_car_geolocation",
                                            "type": "number"
                                          }
                                        },
                                        "type": "object"
                                      },
                                      "status": {
                                        "description": "Defines_whether_the_car_is_free_or_rented",
                                        "enum": [
                                          "FREE",
                                          "RENTED"
                                        ],
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "status",
                                      "last_position"
                                    ],
                                    "type": "object"
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

:::caution

Note that in the request, you must replace {{GOVERNANCE-ID}} with the previously saved governance hash identifier.

:::

In governance, governance roles and policies are defined. By default, any change in governance requires the approval of the majority of members. At this point, the only one who will be asked for approval is the owner, since no members have been defined in the governance yet. Next, it will be necessary to obtain the new update request. To do this, we execute the following:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copy the value of the "id" field and accept the update request on the governance by executing the following command:

```bash title="Node: Rental Company"
curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
    --header 'Content-Type: application/json' \
    --data-raw '{"state": "RespondedAccepted"}'
```

:::caution

Note that in the request, you must replace {{PREVIUS-ID}} with the value copied from above.

:::

Finally, we will make a query to the governance to verify that the change has been made correctly. If everything has been done as planned, we should see how the "sn" field has increased in value and the members, the schema, the contract and the policies should appear. To do this, run the following command:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

Before continuing, in order for nodes that are members of the governance and are not owners of the governance, to be able to access and interact with the governance, we must grant prior permissions to the governance. To do this, we execute the following commands:

```bash title="Node: Cleaning Company"
curl --request PUT 'http://localhost:3001/api/allowed-subjects/{{GOVERNANCE-ID}}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "providers": []
    }'
```

```bash title="Node: Security Company"
curl --request PUT 'http://localhost:3002/api/allowed-subjects/{{GOVERNANCE-ID}}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "providers": []
    }'
```

Finally, we consult the governance from the previously authorized nodes to verify that they have received the governance correctly. To do this, we execute the following commands:

```bash title="Node: Cleaning Company"
curl 'http://localhost:3001/api/subjects/{{GOVERNANCE-ID}}'
```

```bash title="Node: Security Company"
curl 'http://localhost:3002/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Note that in the above requests, you must replace {{GOVERNANCE-ID}} with the previously saved governance hash identifier.

:::

## Creating subject and transferring ownership
### Creation of the subject
At this point, we have everything we need to start creating subjects of type "**Car**". Therefore, our node named Rental Company will be in charge of carrying out this action. To do so, we execute the following command:

```bash title="Node: Rental Company"
curl --request POST 'http://localhost:3000/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data '{
        "request": {
            "Create": {
                "governance_id": {{GOVERNANCE-ID}},
                "schema_id": "car",
                "namespace": "",
                "name": "Car-1"
            }
        }
    }'
```

:::caution

Note that in the request, you must replace **{{GOVERNANCE-ID}}** with the previously saved governance hash identifier.

:::

Once the above command is executed, the "**request-id**" of the event will be returned. It is necessary to save it for future steps.

Then, we execute the following command to check the status of the request:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Note that in the request, you must replace **{{REQUEST-ID}}** with the value copied above.

:::

This last command, will provide a response like the following:

```bash
{
  "id": {{REQUEST-ID}},
  "subject_id": {{SUBJECT-ID}},
  "sn": 0,
  "state": "finished",
  "success": true
}
```

**Note:** Save the "**subject_id**" corresponding to the subject, as it will be needed in the next steps of the tutorial.

Next, we run the following command to verify that it has been created correctly:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/subjects/{{SUBJECT-ID}}'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the value copied from above.

:::

### Subject transfer
Once the subject is created, we are ready to transfer the ownership of this subject to the car. It should be noted that any subject that has not completed its life cycle in **TAPLE** can be transferred to a new owner, whether or not it is part of the governance where the subject has been declared.

Next, since the vehicle is not a member of the governance, the vehicle node will not receive it directly, so it needs to actively request it. For this, it is necessary to know the "**id**" of the governance and at least the identifier of a member of the governance to be able to request it. Having this clear, we should execute the following command:

```bash title="Node: Vehicle"
curl --request PUT 'http://localhost:3003/api/allowed-subjects/{{GOVERNANCE-ID}}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "providers": ["EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs"]
    }'
```

:::caution

Note that in the request, you must substitute **{{GOVERNANCE-ID}}** for the previously saved governance hash identifier.

:::

Now, we activate the pre-authorization of the subject that we want to transfer to this new node. To do this, we execute the following command:

```bash title="Node: Vehicle"
curl --request PUT 'http://localhost:3003/api/allowed-subjects/{{SUBJECT-ID}}' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "providers": []
    }'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the hash identifier of the previously saved subject.

:::

It should be noted that in this case it is not necessary to set a provider, since when we obtain the property of the same, it will send it to us automatically.

So far, when creating the subject, we have not had to declare its public key, although we have always had the possibility to do so. In TAPLE, transfers always occur upon a request from the future owner. For this, he must know the "**subject_id**" of the subject to be able to authorize it, i.e. when messages arrive, accept it, and in addition, he needs to create a key pair. In its transfer request, it sends to the current owner the public key to be used after the transfer. To generate a public key, we must execute the following:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/keys' \
    --form 'algorithm="Ed25519"'
```

**Note:** Save the "**public_key**" field, as it will be needed for later steps in the tutorial.

Next, we need to sign the transfer request with the cryptographic material of the new node. To do this, we will use our **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** tool and execute the following command:

```bash title="Another terminal"
taple-sign "2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198" '{"Transfer":{"subject_id":"{{SUBJECT-ID}}","public_key":"{{PUBLIC-KEY}}"}}'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the previously created subject identifier hash and **{{PUBLIC_KEY}}** with the previously saved key.

:::

We will then include the result of the previous execution in the next request:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{{SIGN-RESULT}}'
```

:::caution

Note that in the request, you must replace **{{SIGN-RESULT}}** with the result of the previous request.

:::

Leaving us with something similar to the following:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Transfer": {
        "subject_id": "{{SUBJECT-ID}}",
        "public_key": "{{PUBLIC-KEY}}"
        }
    },
    "signature": {
        "signer": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
        "timestamp": 1690370240429930638,
        "value": "SEU8NJSZMH4r2MWL71oJHIDkjlr9ia1flwkxlQrkC1sMdarJrtMYmiAJqPIahbYPeAge50PRXyHKmLz84TZhhVDQ"
    }
}'
```

Finally, the new node should be able to visualize this new subject and verify that it is the new owner of the subject. To do this, we execute the following command:

```bash title="Node: Vehicle"
curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}'
```

:::caution

Note that in the request, you must substitute **{{SUBJECT-ID}}** for the hash identifier of the previously saved subject.

:::