# Adding a new node

## Running the third node

To set up a new node, we will follow the steps of this **[section](./governance-operations)** changing again the ports and generating a new private key with the **keygen** tool, as follows:

```bash
    docker run -d --rm -e TAPLE_HTTPPORT=3002 \
        -e TAPLE_NETWORK_ADDR=/ip4/0.0.0.0/tcp \
        -e TAPLE_NETWORK_P2PPORT=40002 \
        -e TAPLE_NODE_SECRETKEY=f4a03d8632a71a82a0215d77faf7af868fa04f027a0ddb9f5d64c044a49a9fae \
        -e RUST_LOG=info \
        -e TAPLE_NETWORK_KNOWNNODES=/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo \
        -p 3002:3002 \
        -p 40002:40002 \
        --name="node_2" \
        opencanarias/taple-client:latest
```

## Adding the third node to governance

To add the third node to the governance it will be done in the same way as in this **[paragraph](./governance-operations/#adding-the-second-node-to-governance)** but in this case, unlike the first time, there are 2 nodes within the same governance, so it will be necessary the signature of acceptance of any of them to introduce the new node to the governance. Otherwise, the new node will not be introduced into the governance.

```bash
    curl --location --request POST 'http://localhost:3000/api/requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "State": {
                    "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
                    "payload": {
                        "Json": {
                            "members": [
                                {
                                    "id": "Company1",
                                    "tags": {},
                                    "description": "Headquarters in Spain",
                                    "key": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
                                },
                                {
                                    "id": "Company2",
                                    "tags": {},
                                    "description": "Headquarters in England",
                                    "key": "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"
                                },
                                {
                                    "id": "Company3",
                                    "tags": {},
                                    "description": "Headquarters in France",
                                    "key": "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"
                                }
                            ],
                            "schemas": [
                                {
                                    "id": "Test",
                                    "tags": {},
                                    "content": {
                                        "type": "object",
                                        "additionalProperties": false,
                                        "required": [
                                            "temperature",
                                            "location",
                                            "batch"
                                        ],
                                        "properties": {
                                            "temperature": {"type": "integer"},
                                            "location": {"type": "string" },
                                            "batch": {
                                                "type": "object",
                                                "additionalProperties": false,
                                                "required": [ "weight", "origin" ],
                                                "properties": {
                                                    "weight": {"type": "number", "minimum": 0},
                                                    "origin": {"type": "string"}
                                                }
                                            }
                                        }
                                    }
                                }
                            ],
                            "policies": [
                                {
                                    "id": "Test",
                                    "validation": {
                                        "quorum": 0.5,
                                        "validators": [
                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",
                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"
                                        ]
                                    },
                                    "approval": {
                                        "quorum": 0.5,
                                        "approvers": [
                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",
                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"
                                        ]
                                    },
                                    "invokation": {
                                        "owner": {
                                            "allowance": true,
                                            "approvalRequired": true
                                        },
                                        "set": {
                                            "allowance": false,
                                            "approvalRequired": false,
                                            "invokers": []
                                        },
                                        "all": {
                                            "allowance": false,
                                            "approvalRequired": false
                                        },
                                        "external": {
                                            "allowance": false,
                                            "approvalRequired": false
                                        }
                                    }
                                },
                                {
                                    "id": "governance",
                                    "validation": {
                                        "quorum": 0.5,
                                        "validators": [
                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",
                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"
                                        ]
                                    },
                                    "approval": {
                                        "quorum": 0.5,
                                        "approvers": [
                                            "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                                            "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",
                                            "EX2w7ObRxqHCeybeNvMo7bkxm1oReVI8Hkk82M79xLok"
                                        ]
                                    },
                                    "invokation": {
                                        "owner": {
                                            "allowance": true,
                                            "approvalRequired": true
                                        },
                                        "set": {
                                            "allowance": false,
                                            "approvalRequired": false,
                                            "invokers": []
                                        },
                                        "all": {
                                            "allowance": false,
                                            "approvalRequired": false
                                        },
                                        "external": {
                                            "allowance": false,
                                            "approvalRequired": false
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

Note that in the above command you must change the "**subject_id**" field with the hash identifier of your governance.
        
```json
    "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4"
```

:::

## Check that the third node receives all

To check that the third node has received everything correctly you must execute the following command:

```bash
    curl --location --request GET 'http://localhost:3002/api/subjects'
```

If everything went correctly you will get the three subjects that we already created.

Also, if we execute the command seen above ```docker logs node_2```, we can check that the node has received the information correctly.
