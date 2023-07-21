# Creating a subject

At this point, we are capable of tracking the life cycle of our wine bottles through *Wine* type [subjects](../../discover/subjects.md), which are defined in our Taple network. Additionally, we have the entity **Premium Wines**, which will be responsible for carrying out this action.

Let's start by launching a **genesis** event to create our first *Wine* type subject:

```bash title="Node: Premium wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "",
        "name": "Wine"
        }
    }
}'
```

Upon performing this action, we will receive a `request-id`, which we need to copy and use in the following command:

```bash title="Node: Premium wines"
curl --request GET 'http://localhost:3001/api/event-requests/{{REQUEST-ID}}/state'
```

The last command will provide a response like the following:

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
Keep the `subject_id` of the **subject**, as we'll need it in later steps of the tutorial.
:::

We can query the created subject using the following command:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 0,
    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",
    "namespace": "",
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

Now that we have reached this point, the first subject has been created. However, as we can see in the previous information block, it has a default initialization with the *body* we defined in the **genesis** event. Therefore, our next step will be to modify the basic characteristics of the subject to represent the production of a wine bottle produced by **Premium Wines**. We'll achieve this through the `Init` event we declared in the *smart contract* of *Wine* subjects.

The characteristics we want our bottle to have are as follows:
* Harvest number: 1
* Grape type: Cabernet Sauvignon
* Origin: Spain

Therefore, the command we need to execute is the following:

```bash  title="Node: Premium wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{SUBJECT-ID}},
            "payload": {
                "Init": {
                    "harvest": 1,
                    "grape": "CabernetSauvignon",
                    "origin": "spain"
                }
            }
        }
    }
}'
```

If everything has gone correctly, running the following command should update the subject with an `sn` value of 1 and reflect the changes mentioned above:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 1,
    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",
    "namespace": "",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "CabernetSauvignon",
        "harvest": 1,
        "organic_certified": null,
        "origin": "spain",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```