# Interacting with the network
Now that we have our network set up and configured, we will move on to simulate the operation of the use case. To simplify the interaction, we will limit the use case to the interaction with a vehicle.

## Rent a vehicle
The first case we face is when a client comes to the rental company with the intention of renting a vehicle. To do this, we must issue a "**Rent**" event on the subject by means of an external invocation, since the owner of the subject is the vehicle. It should be noted, that the initial state of the subject is as follows:

```json
{
    "last_position": {
        "latitude": 0.0,
        "longitude": 0.0
    },
    "status": "FREE"
}
```

Before making the request, we will generate the signature of the event we want to issue using **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** with the following command:

```bash title="Another terminal"
taple-sign "74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Rent":{}}}}'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the hash identifier of the subject.

:::

We will then include the result of the previous execution in the next request:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{{SIGN-RESULT}}'
```

:::caution

Note that in the request, you must replace **{{SIGN-RESULT}}** with the result of the previous request.

:::

Leaving us with something similar to the following:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "request": {
        "Fact": {
            "subject_id": "{{SUBJECT-ID}}",
            "payload": {
                "Rent": {}
            }
        }
        },
        "signature": {
        "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
        "timestamp": 1690371065334972628,
        "value": "SEw7Ca_HkBGhaUder4KZI23PX0rsKjn-qMOL7wtnfh_CcGA6ktgkZc3o6zhLuF26_af3Z3syN0aKR3JCltZPBEAw"
        }
    }'
```

If everything went well, we should see that the "**sn**" field has increased and the vehicle status has changed from FREE to RENTED. To do this, run the following command:

```bash title="Node: Vehicle"
curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}'
```

In addition, as mentioned above, every 10 minutes the vehicle broadcasts an event to update the geolocation of the car. This event is triggered as follows:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "request": {
            "Fact": {
                "subject_id": {{SUBJECT-ID}},
                "payload": {
                    "UpdatePosition": {
                        "latitude": -30.0,
                        "longitude": -64.0
                    }
                }
            }
        }
    }'
```

It should be noted that in this case the request is not signed as the request is issued by the owner and will be signed internally.

:::caution

You should know that the client's REST API supports both signed and unsigned requests and if they are unsigned, the request is signed with the owner's cryptographic material. To learn more, visit this **[link](../../learn/client-usage.md#rest-api)**.

:::

Once executed, we should see how the "**sn**" field has increased and the vehicle's geolocation has been updated. To do this, run the following command:

```bash title="Node: Vehicle"
curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}'
```

:::caution

Note that in the above requests, you must replace **{{SUBJECT-ID}}** with the hash identifier of the previously saved subject.

:::

## Opening of the vehicle to the assigned driver
Before proceeding to unlock the vehicle, the client must generate a key pair using the **[TAPLE Keygen](../../learn/client-tools.md#taple-keygen)** tool as follows:

```bash
taple-keygen
```

obtaining as output the following:

```bash
controller_id: EHQNUnel9CCeL9E8Ov8UmQyn436zBUOBb_zJVf0qs04M
peer_id: 12D3KooWBmcwLJ9JyjgeBHo1gVT5Xc9YEMexNxqCracbYC4AsjEi
private_key: 3a7bd6128eb89f9c6f2e7f82575bf1c9cad7521a29e2ca56f87920b41ae84507
```

You must then inform the rental company of your public key, which in this case is: `EHQNUnel9CCeL9E8Ov8UmQyn436zBUOBb_zJVf0qs04M`.

Now, the assigned driver arrives at the vehicle and using their NFC, triggers the car to issue a signed event request similar to the following:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "request": {
        "Fact": {
            "subject_id": "{{SUBJECT_ID}}",
            "payload": {
                "Open": {}
            }
        }
        },
        "signature": {
        "signer": "EHQNUnel9CCeL9E8Ov8UmQyn436zBUOBb_zJVf0qs04M",
        "timestamp": 1690967017498090720,
        "value": "SEFa0SD1pGMrt7AIV2VHIKsTchP118O2BDN2_43vPihJ0M03vcDuq6spqgEXwgccQqxf2pidSDBEHPtZrafeUgBQ"
        }
    }'
```

:::caution

Note that to generate the content of the above request it is necessary to execute the following command:

```bash title="Another terminal"
taple-sign "3a7bd6128eb89f9c6f2e7f82575bf1c9cad7521a29e2ca56f87920b41ae84507" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Open":{}}}}'
```
Remember to replace the **{{SUBJECT-ID}}**.

:::

Then, the rental company and the cleaning/maintenance company would receive a request for approval on the invocation made so that each of them must check in their internal systems if the identity of the issuer is valid and vote yes or no. In this case, it is the driver to whom the car has been leased, so the rental company must accept the request and the cleaning/maintenance company must deny it. In this case, it is the driver to whom the car has been rented so the reting company should accept the request and the cleaning/maintenance company should deny the request. As we are facing a quorum of 1, the request will be accepted and therefore the vehicle will be opened. Before moving on to the voting phase, it will be necessary to get the new request for approval. To do so, we execute the following:

```bash title="Node: Rental Company"
curl 'http://localhost:3000/api/approval-requests?status=Pending'
```

obtaining as output the following:

```bash title="Node: Rental Company"
[
    {
        "id": "JKQ3GyHKPqp52Czjytyzt9CubBQ6uw3atRED8derXxDc",
        "request": {
            "event_request": {
                "Fact": {
                    "subject_id": "{{SUBJECT_ID}}",
                    "payload": {
                        "Open": {}
                    }
                },
                "signature": {
                    "signer": "EHQNUnel9CCeL9E8Ov8UmQyn436zBUOBb_zJVf0qs04M",
                    "timestamp": 1690971689672314415,
                    "value": "SEeqYTA30jlswpTNLcWsNB9_yzmRd75Kg-z2mvtf4ijkvBq7WkXep6U3uTIcoza-4mpZM84lCPAHe1Ck-uo-TUCg"
                }
            },
            "sn": 4,
            "gov_version": 1,
            "patch": [],
            "state_hash": "Jk8BpV-OXeyGmHem8fdmBKWqGYr06WqHVCBWwKxrC9E8",
            "hash_prev_event": "JL8CRP7RumsWx532ndo8NHNJMQ-lEtdc8TnoqeydZgKI",
            "signature": {
                "signer": "EF-yDpvFF5Vt9NYYCYCix1bT171UqC2vG71HGCJSwH10",
                "timestamp": 1690971723297119730,
                "value": "SEhAMKMCGfnbKcRICfvYpSHjPl9NNOnvs3_VyqySFzv66uBmImRIZq9EcwgWoGj8cHzEjLiNXNsax_f7sBNJXeAA"
            }
        },
        "reponse": null,
        "state": "Pending"
    }
]
```

where we can check that the "**signer**" corresponds to the client identifier.

**Note:** Save the value of the "**id**" field returned by the previous request.

Now, we are ready for the approval phase. To do this, we must execute the following command:

```bash title="Node: Rental Company"
curl --request POST 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
    --header 'Content-Type: application/json' \
    --data '{"state": "RespondedAccepted"}'
```

:::caution

Note that in the request, you must replace **{{PREVIUS-ID}}** with the value copied from above.

:::

It should be noted that if, in the approval phase, we vote first from the rental company node, there is no need to vote from the cleaning company, since the quorum has already been reached.

Finally, to check that the vehicle door has been successfully opened, we must execute the following command:

```bash title="Node: Vehicle"
curl 'http://localhost:3003/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Note that in the request, you must replace **{{REQUEST-ID}}** with the value copied above.

:::

where we can see that the event has been performed correctly, obtaining an output similar to the following:

```bash
{
    "id": "{{REQUEST-ID}}",
    "subject_id": "{{SUBJECT-ID}}",
    "sn": 4,
    "state": "finished",
    "success": true
}
```

If both companies had voted negative on the application, the application would be rejected and the vehicle would not be opened. The output we would get would be similar to the following:

```bash
{
    "id": "{{REQUEST-ID}}",
    "subject_id": "{{SUBJECT-ID}}",
    "sn": 4,
    "state": "finished",
    "success": false
}
```

## Unrental vehicle
Then, when the client has finished with the disposal of the vehicle, the rental company must update its status to set it as free. To do this, we must issue an event on the subject by means of an external invocation. It should be noted that the current state of the subject is as follows:

```json
{
    "last_position": {
        "latitude": -30.0,
        "longitude": -64.0
    },
    "status": "RENTED"
}
```

Before making the request, we will generate the signature of the event we want to issue using **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** with the following command:

```bash title="Another terminal"
taple-sign "74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Unrental":{}}}}'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the hash identifier of the subject.

:::

We will then include the result of the previous execution in the next request:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{{SIGN-RESULT}}'
```

:::caution

Note that in the request, you must replace **{{SIGN-RESULT}}** with the result of the previous request.

:::

Leaving us with something similar to the following:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "request": {
        "Fact": {
            "subject_id": "{{SUBJECT-ID}}",
            "payload": {
                "Unrental": {}
            }
        }
        },
        "signature": {
        "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
        "timestamp": 1690448459062654370,
        "value": "SEMOYViWsNV9PNsWEkmQTy82-O5Lb_pMcvpurF3XC1LPnHldtHarEogHYOEvrifxuyeO-X_XHlAoI3jE2nmb4IDg"
        }
    }'
```

If everything went well, we should see that the "**sn**" field has increased and the vehicle status has changed from RENTED to FREE. To do this, run the following command:

```bash title="Node: Vehicle"
curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}''
```

:::caution

Note that in the request, you must substitute **{{SUBJECT-ID}}** for the hash identifier of the previously saved subject.

:::

## Opening of the vehicle to cleaning personnel
Now, we are faced with the use case that a cleaning/maintenance personnel wants to open the vehicle. Before proceeding to open the vehicle, the awarded personnel must generate a key pair using the **[TAPLE Keygen](../../learn/client-tools.md#taple-keygen)** tool as follows:

```bash
taple-keygen
```

obtaining as output the following:

```bash
controller_id: EBKUYdoJZCkIr2UnIc22LmeAIHKDQQIFFDFzoMN34gC4
peer_id: 12D3KooWA8VozHkYiNv9hwYKh37B61o8JSEzXCGA1WfxbZbAgwS5
private_key: e34a939ab13fd7a2785949ddd180f4c502dcd4a28c98788edd3933834c7f88bb
```

You must then inform the cleaning company of your public key, which in this case is: `EBKUYdoJZCkIr2UnIc22LmeAIHKDQQIFFDFzoMN34gC4`.

Now, the personnel assigned to perform such service, arrives at the vehicle and using their NFC, causes the car to issue a signed event request similar to the following:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "request": {
        "Fact": {
            "subject_id": "{{SUBJECT_ID}}",
            "payload": {
                "Open": {}
            }
        }
        },
        "signature": {
        "signer": "EBKUYdoJZCkIr2UnIc22LmeAIHKDQQIFFDFzoMN34gC4",
        "timestamp": 1690972286292619899,
        "value": "SEcF4CFdv3WpKkh7zLgahR-XI2yYdF1HJcG-gI4hzRQPWXYVLgeFq608Tgx2dvOAe37WKMTdJWV5wk-V3oMN6bCA"
        }
    }'
```

:::caution

Note that to generate the content of the above request it is necessary to execute the following command:

```bash title="Another terminal"
taple-sign "e34a939ab13fd7a2785949ddd180f4c502dcd4a28c98788edd3933834c7f88bb" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Open":{}}}}'
```
Remember to replace the **{{SUBJECT-ID}}**.

:::

Then, the rental company and the cleaning/maintenance company would receive a request for approval on the invocation made so that each of them must check in their internal systems if the identity of the issuer is valid and vote yes or no. In this case, it is the cleaning/maintenance personnel, so the cleaning/maintenance company will accept the request and the vehicle will be opened since we are facing a quorum of 1. In this case, we are dealing with cleaning/maintenance personnel, so the cleaning/maintenance company will accept the request and the vehicle will be opened since we are facing a quorum of 1. Before moving on to the voting phase, it will be necessary to obtain the new update request. To do this, we run the following:

```bash title="Node: Cleaning Company"
curl 'http://localhost:3001/api/approval-requests?status=Pending'
```

obtaining as output the following:

```bash title="Node: Cleaning Company"
[
    {
        "id": "J9soJTgfN5u16U1mFcqNBYgi6r3qrfBWmWqczZUc_Vfs",
        "request": {
            "event_request": {
                "Fact": {
                    "subject_id": "{{SUBJECT_ID}}",
                    "payload": {
                        "Open": {}
                    }
                },
                "signature": {
                    "signer": "EBKUYdoJZCkIr2UnIc22LmeAIHKDQQIFFDFzoMN34gC4",
                    "timestamp": 1690972286292619899,
                    "value": "SEcF4CFdv3WpKkh7zLgahR-XI2yYdF1HJcG-gI4hzRQPWXYVLgeFq608Tgx2dvOAe37WKMTdJWV5wk-V3oMN6bCA"
                }
            },
            "sn": 6,
            "gov_version": 1,
            "patch": [],
            "state_hash": "Jk8BpV-OXeyGmHem8fdmBKWqGYr06WqHVCBWwKxrC9E8",
            "hash_prev_event": "Ju5EjCcdY9VXQFNDKSr1oZAnDcMTsap-Iv3cbCTjHHzY",
            "signature": {
                "signer": "EF-yDpvFF5Vt9NYYCYCix1bT171UqC2vG71HGCJSwH10",
                "timestamp": 1690972446119230523,
                "value": "SEobTNPEy_Pc4R6aOVnYdzNGYbfvT7oqgk9RFgUcxtuCklbN1f2PMtfSeqBFNTOHplYJs2SNKt_KQw6FNmI4xbBw"
            }
        },
        "reponse": null,
        "state": "Pending"
    }
]
```

where we can check that the "**signer**" corresponds to the client identifier.

**Note:** Save the value of the "**id**" field returned by the previous request.

Now, we are ready for the approval phase. To do this, we must execute the following command:

```bash title="Node: Cleaning Company"
curl --request POST 'http://localhost:3001/api/approval-requests/{{PREVIUS-ID}}' \
    --header 'Content-Type: application/json' \
    --data '{"state": "RespondedAccepted"}'
```

:::caution

Note that in the request, you must replace **{{PREVIUS-ID}}** with the value copied from above.

:::

It should be noted that if, in the approval phase, we vote first from the cleaning/maintenance company node, there is no need to vote from the rental company, since the quorum has already been reached.

Finally, to check that the vehicle door has been opened successfully, we must execute the following command:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Note that in the request, you must replace **{{REQUEST-ID}}** with the value copied above.

:::

where we can see that the event has been performed correctly, obtaining an output similar to the following:

```bash
{
    "id": "{{REQUEST-ID}}",
    "subject_id": "{{SUBJECT-ID}}",
    "sn": 6,
    "state": "finished",
    "success": true
}
```

If both companies had voted negative on the application, the application would be rejected and the vehicle would not be opened. The output we would get would be similar to the following:

```bash
{
    "id": "{{REQUEST-ID}}",
    "subject_id": "{{SUBJECT-ID}}",
    "sn": 6,
    "state": "finished",
    "success": false
}
```

## Event rejected
As a last case, we must check what happens if we try to release a car that is already free or if we try to rent a vehicle that is already rented. In this case, we will do it about releasing a car that is already free, but it would be the same way for the other case. It should be noted that the current status of the subject is as follows:

```json
{
    "last_position": {
        "latitude": -30.0,
        "longitude": -64.0
    },
    "status": "FREE"
}
```

Before making the request, we will generate the signature of the event we want to issue using **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** with the following command:

```bash title="Another terminal"
taple-sign "74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Unrental":{}}}}'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the hash identifier of the subject.

:::

We will then include the result of the previous execution in the next request:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{{SIGN-RESULT}}'
```

:::caution

Note that in the request, you must replace **{{SIGN-RESULT}}** with the result of the previous request.

:::

Leaving us with something similar to the following:

```bash title="Node: Vehicle"
curl --request POST 'http://localhost:3003/api/event-requests' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "request": {
        "Fact": {
            "subject_id": "{{SUBJECT-ID}}",
            "payload": {
                "Unrental": {}
            }
        }
        },
        "signature": {
        "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
        "timestamp": 1690449443680394417,
        "value": "SE515s9pudglgPnny6xDu3T-roK2nrbKCjWcqmdHNmNvmiIceIIF9e7aZYXq8YZysaNoM1lCShjUiiLw-4R2AjDw"
        }
    }'
```

Once the above command is executed, the "**request-id**" of the event will be returned. It is necessary to save it for future steps.

Then, we execute the following command to check the status of the request:

```bash title="Node: Vehicle"
curl 'http://localhost:3003/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Note that in the request, you must replace **{{REQUEST-ID}}** with the value copied above.

:::

where we can see that it has incremented the field "**sn**" and that the event has been rejected, obtaining an output similar to the following:

```json
{
    "id": "{{REQUEST-ID}}",
    "subject_id": "{{SUBJECT-ID}}",
    "sn": 7,
    "state": "finished",
    "success": false
}
```

## Security company
As the security company is the witness of both the governance and the vehicles, it will be able to visualize the status of the vehicles at any time. To do so, the following command must be executed:

```bash title="Node: Security Company"
curl 'http://localhost:3002/api/subjects/{{SUBJECT-ID}}'
```

:::caution

Note that in the request, you must replace **{{SUBJECT-ID}}** with the corresponding hash identifier.

:::