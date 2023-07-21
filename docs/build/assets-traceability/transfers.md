# Transfers

In this section, we will address the transfer of ownership of a subject of type *Wine* to a **citizen** interested in acquiring it.

Any subject that has not completed its lifecycle in Taple can be transferred to a new owner, regardless of whether the new owner is part of the governance or not.

To carry out this transfer, we need to set up a new node that will act as the new external owner outside the governance. We will follow these steps:

```bash title="Node: Citizen"
docker run \
    -p 3004:3000 \
    -p 50004:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_ID_PRIVATE_KEY=2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198 \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50004 \
    -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
    opencanarias/taple-client:0.2
```

Up to this point, when creating the subject, we have not had to declare its public key, although we always had the possibility to do so. However, in this case, it's different because, during the transfer, the new owner must generate a public key with which they want to manage the subject being transferred to them. To do this, they must execute the following:

```bash title="Node: Citizen"
curl --request POST 'http://localhost:3004/api/keys' \
--form 'algorithm="Ed25519"'
```

This will generate a `public_key`, which must be copied and saved for later use.

Next, we will activate the preauthorization of the governance from which we want to transfer the subject. Within the `providers`, we will specify the node that owns it. Since we are not members of the governance, no one will send it to us automatically, so we must authorize it and inform our node of its possible providers. In this case, we will request the governance from the **WPO** node, as it is the owner:

```bash title="Node: Citizen"
curl --request PUT 'http://localhost:3004/api/allowed-subjects/{{GOVERNANCE-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": ["EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs"]
}'
```

In addition to the above, it will also be necessary to preauthorize the subject that we want to receive since we are not witnesses to either the governance or the subjects of type *Wine*:

```bash title="Node: Citizen"
curl --request PUT 'http://localhost:3004/api/allowed-subjects/{{SUBJECT-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": []
}'
```

Now, we need to sign the transfer request with the material from the new node. To do this, we will use our [TAPLE-Sign tool](../../learn/client-tools.md#taple-sign) and execute the following command:

```bash title="Another terminal"
taple-sing '2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198' '{"Transfer":{"subject_id":"{{SUBJECT-ID}}","public_key":"{{PUBLIC-KEY}}"}}'
```

The result of this execution will be included in the following request:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw {{SIGN-RESULT}}
```

This will generate a result similar to the following:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Transfer": {
        "subject_id": {{SUBJECT-ID}},
        "public_key": {{PUBLIC-KEY}}
        }
    },
    "signature": {
        "signer": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
        "timestamp": 1689854029987763078,
        "value": "SEoXC-I8aNu1P6cS7SwDj9J6SrSDNdCnLdqj5o2Pb4nEqcQR5FHooO5qHwuQUd9FQPLWmHZ_3D2uNEzxRMSGYlCQ"
    }
}'
```

Once the above steps are completed, the new node should be able to view this subject, and the owner's identity should correspond to the **Citizen** node:

```bash title="Node: Citizen"
curl --request GET 'http://localhost:3004/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 4,
    "public_key": {{PUBLIC-KEY}},
    "namespace": "",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "CabernetSauvignon",
        "harvest": 1,
        "organic_certified": true,
        "origin": "spain",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```