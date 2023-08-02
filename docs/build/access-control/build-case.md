# Build the use case

In this page, we are going to consider the configuration of TAPLE to support the defined use case. To do so, we will define the corresponding schemas as well as the members, roles and policies. In addition, we will define the smart contract.

## Nodes
Starting from the participants mentioned in the previous section, we will discuss which of them need a TAPLE node and why.

### Participants
- Rental company: A TAPLE node is needed as it is a known participant and will be part of the governance.
- Cleaning company: A TAPLE node is needed as it is a known participant and will be part of the governance.
- Security company: A TAPLE node is needed as it is a known participant and will form part of the governance.
- Smart locks: Each vehicle will have a TAPLE node to which the ownership of the subject representing the vehicle itself will be transferred. It should be noted that this node will not be part of the governance as it will not have any role within it but will simply be holders of the subjects and will be responsible for managing the events that arrive from clients or cleaning staff.
- Clients: As the use case is based on tracing the accesses to the vehicles, the clients do not need to have historical information of these accesses, so it is not necessary for them to have a TAPLE node. They only need a system to open the smart locks and for that the only thing required is a valid identity in TAPLE with which to sign the requests to open the smart locks.
- Cleaning workers: As the use case is based on tracing vehicle accesses, the cleaning staff does not need to have historical information of these accesses, so it is not necessary for them to have a TAPLE node. They only need a system to open the smart locks and for that all that is required is a valid identity in TAPLE with which to sign the requests to open the smart locks.

## Subjects
Each of the locks would manage a subject whose status would be reflected in the vehicle locks. To reflect the state of the subject it will be necessary to define a schema which will contain the state of the vehicle as well as the geolocation of the vehicle.

## Governance
To set up the governance, we start with the default governance and then apply the necessary changes for our use case.

<details>
  <summary>Governance JSON</summary>

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

### Members
As previously mentioned, the governance will be composed of the following members:
- Rental Company
    
    <details>
      <summary>Member rental company JSON</summary>

    ```json
        {
            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "name": "RentalCompany"
        }
    ```

    </details>

- Cleaning Company

    <details>
      <summary>Member cleaning company JSON</summary>

    ```json
        {
            "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
            "name": "CleaningCompany"
        }
    ```

    </details>

- Security Company

    <details>
      <summary>Member security company JSON</summary>

    ```json
        {
            "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
            "name": "SecurityCompany"
        }
    ```

    </details>

It should be noted that the rental company will own it.

### Schema
In the schema we will define the state in which the car is, which can be free or rented, and we will also define the geolocation of the vehicle.

<details>
  <summary>Schema JSON</summary>

```json
    "schema": {
        "description": "State_of_car",
        "type": "object",
        "properties": {
            "status": {
                "description": "Defines_whether_the_car_is_free_or_rented",
                "type": "string",
                "enum": ["FREE", "RENTED"]
            },
            "last_position": {
                "description": "Contains_the_record_of_the_last_position_of_the_car",
                "type": "object",
                "properties": {
                    "latitude": {
                        "description": "Define_the_latitude_of_the_car_geolocation",
                        "type": "number"
                    },
                    "longitude": {
                        "description": "Define_the_length_of_the_car_geolocation",
                        "type": "number"
                    }
                }
            }
        },
        "required": [
            "status",
            "last_position"
        ],
        "additionalProperties": false
    }
```

</details>

### Smart Contract
Within the smart contract, we will define the business logic. When a user wants to perform a smart lock opening on a vehicle, it will be necessary for him to send a signed event request. Then, the rental company and the cleaning/maintenance company would receive an approval request about the invocation made so that each of them will have to check in their internal systems if the identity of the sender is valid. If it is an authorized user at the rental company, the rental company will vote yes and the lock will be unlocked. In the same way, if it is the cleaning personnel, the cleaning company will vote in the affirmative and therefore will be able to access the vehicle. On the contrary, if it is an invalid summoner, both will reject the request, denying access to the vehicle. It should be noted that in this example, the approval process will be manual, but in a real case, the TAPLE API could be integrated into an external system that automates this task.

The smart contract is made up of four methods:
- Unrental: This method takes care of changing the status of the car from RENTED to FREE.

    <details>
      <summary>Unrental method</summary>

    ```rust
        CarEvent::Unrental {} => match car.status {
            StatesCar::FREE => {}
            StatesCar::RENTED => {
                car.status = StatesCar::FREE;
                contract_result.success = true;
            }
        }
    ```

    </details>

- Rent: This method takes care of changing the status of the car from FREE to RENTED.

    <details>
      <summary>Rent method</summary>

    ```rust
        CarEvent::Rent {} => match car.status {
            StatesCar::FREE => {
                car.status = StatesCar::RENTED;
                contract_result.success = true;
            }
            StatesCar::RENTED => {}
        }
    ```

    </details>

- Open: This method checks whether the person trying to open the car is an authorized person. For this purpose, approval is requested.

    <details>
      <summary>Open method</summary>

    ```rust
        CarEvent::Open {} => {
            contract_result.approval_required = true;
            contract_result.success = true;
        }
    ```

    </details>

- UpdatePosition: This method updates the geolocation of the car every 10 minutes.

    <details>
      <summary>UpdatePosition method</summary>

    ```rust
        CarEvent::UpdatePosition {
            latitude,
            longitude,
        } => {
            car.last_position.latitude = latitude.round();
            car.last_position.longitude = longitude.round();
            contract_result.success = true;
        }
    ```

    </details>

To add the smart contract, we must first convert it to base64. To do this, you can use the **[base64](https://manpages.ubuntu.com/manpages/xenial/en/man1/base64.1.html)** utility available on Linux. Below, you can see an example:

```bash title="Another terminal"
    base64 main.rs
```

The result returned will be the base64 encoded contract. In this case, it is as follows:

```bash title="Another terminal"
    dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg==
```

<details>
  <summary>Smart Contract in base64</summary>

```json
    "contract": {
        "raw":"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07CnVzZSB0YXBsZV9zY19ydXN0IGFzIHNkazsKCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0KZW51bSBTdGF0ZXNDYXIgewogICAgRlJFRSwKICAgIFJFTlRFRCwKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgUG9zaXRpb24gewogICAgbGF0aXR1ZGU6IGYzMiwKICAgIGxvbmdpdHVkZTogZjMyLAp9CgojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldCnN0cnVjdCBDYXIgewogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAgICAgICAvLyBGUkVFIFJFTlRFRAogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gQ2FyRXZlbnQgewogICAgVW5yZW50YWwge30sCiAgICBSZW50IHt9LAogICAgT3BlbiB7fSwKICAgIFVwZGF0ZVBvc2l0aW9uIHsgbGF0aXR1ZGU6IGYzMiwgbG9uZ2l0dWRlOiBmMzIgfSwKfQoKI1tub19tYW5nbGVdCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7CiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykKfQoKZm4gY29udHJhY3RfbG9naWMoCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LAogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwKKSB7CiAgICBsZXQgY2FyID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7CiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7CiAgICAgICAgQ2FyRXZlbnQ6OlVucmVudGFsIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgewogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gewogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsKICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsKICAgICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgQ2FyRXZlbnQ6OlJlbnQge30gPT4gbWF0Y2ggY2FyLnN0YXR1cyB7CiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7CiAgICAgICAgICAgICAgICBjYXIuc3RhdHVzID0gU3RhdGVzQ2FyOjpSRU5URUQ7CiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30KICAgICAgICB9LAogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IHsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsKICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOwogICAgICAgIH0KICAgICAgICBDYXJFdmVudDo6VXBkYXRlUG9zaXRpb24gewogICAgICAgICAgICBsYXRpdHVkZSwKICAgICAgICAgICAgbG9uZ2l0dWRlLAogICAgICAgIH0gPT4gewogICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7CiAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxvbmdpdHVkZSA9IGxvbmdpdHVkZS5yb3VuZCgpOwogICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7CiAgICAgICAgfQogICAgfQp9Cg=="
    }
```

</details>

### Policies
To ensure better control and greater security over the network, we will define policies on the subject.

<details>
  <summary>Policies JSON</summary>

```json
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
```

</details>

An approval quorum of the form **"FIXED": 1** is defined, as we only need either the rental company or the cleaning company to vote in the affirmative for the vehicle to be opened.

### Roles of participants
- Rental company: Owner of governance and evaluator of smart contracts. As it is the owner of the governance, it is not necessary to specify roles on it, since by default it acquires all of them. However, it is necessary to define the roles of the subject. In this case, it is necessary that it has the following roles:

    - CREATOR: Since it will be in charge of creating the subject.
    - APPROVER: Because it will be involved in the approval phase when a vehicle opening is required.
    - WITNESS: To have a record of what happens in the subject.
    - ISSUER: Since it is necessary to perform events on the subject.

    <details>
      <summary>Roles rental company</summary>

    ```json
        [
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
            }
        ]
    ```

    </details>

- Cleaning company: Approver of the cleaning personnel and witness to have a record of the cleanings performed. In this case, the following roles will be defined:

    - WITNESS (governance): You should be a witness to governance so that you have a record of what happens.
    - WITNESS (car): You will need to witness the subject, as you need to have a record of the subject.
    - APPROVER: Because it will be involved in the approval phase when a vehicle opening is required.
    - ISSUER: Since it is necessary to perform events on the subject.

    <details>
      <summary>Roles cleaning company</summary>

    ```json
        [
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
            }
        ]
    ```

    </details>

- Security company: Witness to have a control of the use of the car and evaluator to guarantee the security of the network. In this case, the following roles will be defined:

    - EVALUATOR: In this way, we ensure that the network is more secure.
    - WITNESS (governance): You should be a witness to governance so that you have a record of what happens.
    - WITNESS (car): You will need to witness the subject, as you need to monitor the subject.

    <details>
      <summary>Roles security company</summary>

    ```json
        [
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
            }
        ]
    ```

    </details>

### External roles
Finally, we must add permissions to issue external events on the subject, as clients and cleaning staff will act on the vehicle in this way.

<details>
  <summary>External roles</summary>

 ```json
    [
        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "car"
            },
            "who": "NOT_MEMBERS"
        }
    ]
```

 </details>
