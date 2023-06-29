# Adding events

## Create an event on the first node

To create an event in the first node we must execute the following command:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/requests' \
--header 'X-API-KEY: 1234' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "State": {
            "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
            "payload": {
                "Json": {
                    "temperature": 8,
                    "location": "Brazil",
                    "batch": {
                        "weight": 30,
                        "origin": "England"
                    }
                }
            }
        }
    }
}'
```

:::caution

Note that you will need to change the hash identifier of the subject of the first node to yours.

:::

If everything went correctly, you will get an output similar to the following:

```json
{
  "request": {
    "State": {
      "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
      "payload": {
        "Json": "{\"batch\":{\"origin\":\"England\",\"weight\":30},\"location\":\"Brazil\",\"temperature\":8}"
      }
    }
  },
  "request_id": "JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow",
  "timestamp": 1674044846395,
  "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
  "sn": null
}
```

We will need to accept the request of the event in order for it to be created and modify the state of the subject. As our governance specifies that all the subjects with that schema need to approve the request of events when the invoker is the owner of the subjects we have to accept the request. One thing that it is interesting is that we specified that the approvers are both nodes and the quorum is 0.5, so you can approve the request sending the approval from the node_1, the node that didn't create the event.

```bash
curl --silent --location --request PUT 'http://localhost:3001/api/approvals/JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow' \
--header 'X-API-KEY: 1234' \
--header 'Content-Type: application/json' \
--data-raw '{
    "approvalType": "Accept"
}'
```

And with this the subject state is updated.

### Check that the second node receives the creation of the event

To check that the second node has correctly received the creation of the event on the first node, you must execute the following command:

```bash
    curl --location --request GET 'http://localhost:3001/api/subjects/Paste your hash identifier here/events/1/'
```

:::caution

Note that you will need to change the hash identifier of the subject of the first node to yours.

:::

If everything went correctly, you will get an output similar to the following:

```json
{
    "event_content": {
        "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
        "event_request": {
            "request": {
                "State": {
                    "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
                    "payload": {
                        "Json": "{\"batch\":{\"origin\":\"England\",\"weight\":30},\"location\":\"Brazil\",\"temperature\":8}"
                    }
                }
            },
            "timestamp": 1674044846395,
            "signature": {
                "content": {
                    "signer": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                    "event_content_hash": "JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow",
                    "timestamp": 1674044846395
                },
                "signature": "SETHi4DxkG8xRazhdw5hwXh-_t5hGeXKSB-3JdP6pdEjw_XUHyIuoY5_POouKwc-gVpSnjpIbJWd_kgrcMLuOEBA"
            },
            "approvals": [
                {
                    "content": {
                        "signer": "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",
                        "event_request_hash": "JsMLjcmxqk1kHoENQJsX5iXnNzUCgkgfiUu1djaoTRow",
                        "approval_type": "Accept",
                        "expected_sn": 1,
                        "timestamp": 1674045301377
                    },
                    "signature": "SExzruT1ctKVGjAPwK8xuBwJQLDEV1MZz6WmRHFFlyTgajmUncS4BdjOf0Du3WsD8W8qsKELClLahgGWSa16rdBw"
                }
            ]
        },
        "sn": 1,
        "previous_hash": "JETtgt66SDcQjjBs0802-zOaZJgR7rJ-X5Dxy86ft8oI",
        "state_hash": "JjNBMUddVX8OPAau9ZbUDQzcZWkRY9H087BVkWo8dDgk",
        "metadata": {
            "namespace": "",
            "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
            "governance_version": 0,
            "schema_id": "Test",
            "owner": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
        },
        "approved": true
    },
    "signature": {
        "content": {
            "signer": "EG496wxlIoNCC2LEtA85Ha1ZCfJ_3EeFe80Mg8OCqHD0",
            "event_content_hash": "JMOrxftmL3qU9oqwxVaxDzHLnabbYqtU_UzlarWSiC9s",
            "timestamp": 1674045301378
        },
        "signature": "SEsUnJN1ofW7PLTcR2fkQESvEIDvhc5m_ZZ12ZbwVT8f-5TRGkAU6rPiwXo1-u_Pzl1CChSYmEeyLhqyIFwT1KCQ"
    }
}
```
