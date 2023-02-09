# Defining the governance

Once the two nodes are up, the first thing we need to do is to create a governance, since it is the definition of the rules by which the members of the network interact. Initially, we will create a basic governance that will include the two existing nodes and a simple schema. For more information about governance and schemas, please visit the following sections:  **[Governance configuration](../operational-guides/governance-configuration)** and **[Creating a JSON-Schema](../operational-guides/creating-a-json-schema.md)**.

## Create a governance

Below you can find an example of how to create a governance and schema by node_0.

```bash
    curl --silent --location --request POST 'http://localhost:3000/api/requests' \
--header 'X-API-KEY;' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
            "governance_id": "",
            "namespace": "",
            "schema_id": "governance",
            "payload": {
                "Json": {
                    "members": [
                        {
                            "id": "Company1",
                            "tags": {},
                            "description": "Headquarters in Spain",
                            "key": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
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
                                    "temperature": {
                                        "type": "integer"
                                    },
                                    "location": {
                                        "type": "string"
                                    },
                                    "batch": {
                                        "type": "object",
                                        "additionalProperties": false,
                                        "required": [
                                            "weight",
                                            "origin"
                                        ],
                                        "properties": {
                                            "weight": {
                                                "type": "number",
                                                "minimum": 0
                                            },
                                            "origin": {
                                                "type": "string"
                                            }
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
                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
                                ]
                            },
                            "approval": {
                                "quorum": 0.5,
                                "approvers": [
                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
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
                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
                                ]
                            },
                            "approval": {
                                "quorum": 0.5,
                                "approvers": [
                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw"
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

- In the "**members**" object, you must define the members as the name suggests. To do this, you must specify the "**id**" with which you want to identify the member, an empty object in the "**tags**" field (for now), a description about the member in the "**description**" field and finally in the "**key**" field you will contain the **Controller ID** of the node you want to associate it with. To display the **Controller ID** of the nodes, you must execute the following command:

  ```bash
      docker logs node_0
  ```

- In the "**schemas**" object, you must define the schemas as its own indicates. To do this, you must specify the "**id**" with which you want to identify the schema, an empty object in the "**tags**" field (for now) and finally, in the "**content**" field, you must specify a valid **[JSON-Schema](https://json-schema.org/)**. In this case, we have taken this JSON-Schema as an example:

  ```json
  {
    "type": "object",
    "additionalProperties": false,
    "required": ["temperature", "location", "batch"],
    "properties": {
      "temperature": { "type": "integer" },
      "location": { "type": "string" },
      "batch": {
        "type": "object",
        "additionalProperties": false,
        "required": ["weight", "origin"],
        "properties": {
          "weight": { "type": "number", "minimum": 0 },
          "origin": { "type": "string" }
        }
      }
    }
  }
  ```

  After executing the command, if everything went correctly, you should get a response similar to the following:

  ```json
  {
    "request": {
      "Create": {
        "governance_id": "",
        "schema_id": "governance",
        "namespace": "",
        "payload": {
          "Json": "{\"members\":[{\"description\":\"Headquarters in Spain\",\"id\":\"Company1\",\"key\":\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\",\"tags\":{}}],\"policies\":[{\"approval\":{\"approvers\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\"],\"quorum\":0.5},\"id\":\"Test\",\"invokation\":{\"all\":{\"allowance\":false,\"approvalRequired\":false},\"external\":{\"allowance\":false,\"approvalRequired\":false},\"owner\":{\"allowance\":true,\"approvalRequired\":true},\"set\":{\"allowance\":false,\"approvalRequired\":false,\"invokers\":[]}},\"validation\":{\"quorum\":0.5,\"validators\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\"]}},{\"approval\":{\"approvers\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\"],\"quorum\":0.5},\"id\":\"governance\",\"invokation\":{\"all\":{\"allowance\":false,\"approvalRequired\":false},\"external\":{\"allowance\":false,\"approvalRequired\":false},\"owner\":{\"allowance\":true,\"approvalRequired\":true},\"set\":{\"allowance\":false,\"approvalRequired\":false,\"invokers\":[]}},\"validation\":{\"quorum\":0.5,\"validators\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\"]}}],\"schemas\":[{\"content\":{\"additionalProperties\":false,\"properties\":{\"batch\":{\"additionalProperties\":false,\"properties\":{\"origin\":{\"type\":\"string\"},\"weight\":{\"minimum\":0,\"type\":\"number\"}},\"required\":[\"weight\",\"origin\"],\"type\":\"object\"},\"location\":{\"type\":\"string\"},\"temperature\":{\"type\":\"integer\"}},\"required\":[\"temperature\",\"location\",\"batch\"],\"type\":\"object\"},\"id\":\"Test\",\"tags\":{}}]}"
        }
      }
    },
    "request_id": "JjCi34th9vt66TQY4AgTpjZrBRgz-DsUuo4lJHhf0qM0",
    "timestamp": 1674042123545,
    "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
    "sn": 0
  }
  ```

  In addition, if we execute the command seen above `docker logs node_0`, we can check that the node has received the governance creation information correctly, obtaining as output something similar to the following:

  ```bash
      [2023-01-18T11:42:03Z INFO  protocol::command_head_manager::inner_manager] Subject J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4 event 0 signed
      [2023-01-18T11:42:03Z INFO  protocol::command_head_manager::inner_manager] Subject J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4 created
  ```

## Adding the second node to governance

To add a node to the governance we must execute the following command:

```bash
    curl --silent --location --request POST 'http://localhost:3000/api/requests' \
--header 'X-API-KEY;' \
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
                                    "temperature": {
                                        "type": "integer"
                                    },
                                    "location": {
                                        "type": "string"
                                    },
                                    "batch": {
                                        "type": "object",
                                        "additionalProperties": false,
                                        "required": [
                                            "weight",
                                            "origin"
                                        ],
                                        "properties": {
                                            "weight": {
                                                "type": "number",
                                                "minimum": 0
                                            },
                                            "origin": {
                                                "type": "string"
                                            }
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
                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"
                                ]
                            },
                            "approval": {
                                "quorum": 0.5,
                                "approvers": [
                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"
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
                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"
                                ]
                            },
                            "approval": {
                                "quorum": 0.5,
                                "approvers": [
                                    "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
                                    "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw"
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

As we can see, we have added a new member in this case **Company2** to which we have specified as "**key**" the **Controller ID** of the new node that we have raised (second node). To visualize the **Controller ID** of the nodes, you must execute the following command:

```bash
    docker logs node_1
```

If everything went correctly you will get an output similar to the following:

```json
{
  "request": {
    "State": {
      "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
      "payload": {
        "Json": "{\"members\":[{\"description\":\"Headquarters in Spain\",\"id\":\"Company1\",\"key\":\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\",\"tags\":{}},{\"description\":\"Headquarters in England\",\"id\":\"Company2\",\"key\":\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\",\"tags\":{}}],\"policies\":[{\"approval\":{\"approvers\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\",\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\"],\"quorum\":0.5},\"id\":\"Test\",\"invokation\":{\"all\":{\"allowance\":false,\"approvalRequired\":false},\"external\":{\"allowance\":false,\"approvalRequired\":false},\"owner\":{\"allowance\":true,\"approvalRequired\":true},\"set\":{\"allowance\":false,\"approvalRequired\":false,\"invokers\":[]}},\"validation\":{\"quorum\":0.5,\"validators\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\",\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\"]}},{\"approval\":{\"approvers\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\",\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\"],\"quorum\":0.5},\"id\":\"governance\",\"invokation\":{\"all\":{\"allowance\":false,\"approvalRequired\":false},\"external\":{\"allowance\":false,\"approvalRequired\":false},\"owner\":{\"allowance\":true,\"approvalRequired\":true},\"set\":{\"allowance\":false,\"approvalRequired\":false,\"invokers\":[]}},\"validation\":{\"quorum\":0.5,\"validators\":[\"E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw\",\"EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw\"]}}],\"schemas\":[{\"content\":{\"additionalProperties\":false,\"properties\":{\"batch\":{\"additionalProperties\":false,\"properties\":{\"origin\":{\"type\":\"string\"},\"weight\":{\"minimum\":0,\"type\":\"number\"}},\"required\":[\"weight\",\"origin\"],\"type\":\"object\"},\"location\":{\"type\":\"string\"},\"temperature\":{\"type\":\"integer\"}},\"required\":[\"temperature\",\"location\",\"batch\"],\"type\":\"object\"},\"id\":\"Test\",\"tags\":{}}]}"
      }
    }
  },
  "request_id": "JKDhdco-Bg7Ecbip15q1x61CqbXqdIUeQ1TeYBzqdwhI",
  "timestamp": 1674042802696,
  "subject_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
  "sn": null
}
```

Now, we must perform the approval process to add or deny the access of the new member to the governance. To do this, we can see how in the response we have a field "**request_id**" which contains the hash identifier of the approval request with the format shown below:

```bash
    "JKDhdco-Bg7Ecbip15q1x61CqbXqdIUeQ1TeYBzqdwhI"
```

This hash identifier will be used to perform the approval system in which 50% of the members belonging to the governance must approve in favor of adding the new member. To do this, we execute the following command:

```bash
    curl --silent --location --request PUT 'http://localhost:3000/api/approvals/JKDhdco-Bg7Ecbip15q1x61CqbXqdIUeQ1TeYBzqdwhI' \
--header 'X-API-KEY;' \
--header 'Content-Type: application/json' \
--data-raw '{
    "approvalType": "Accept"
}'
```

:::caution

Note that you will need to change the hash identifier of the approval request to yours.

:::

If we do not want to approve the introduction of the new member to the governance, we must change "**Accept**" in the request to "**Reject**". If the approval process was successful you will get `null` as a response.

In this case, having only one member in the governance, your approval is the only one necessary for the introduction of the new member. As in this case we have accepted, we could visualize that the member 2 has been intruded by executing the `docker logs node_1` obtaining as output:

```bash
    [2023-01-18T11:55:59Z INFO  protocol::command_head_manager::inner_manager] Subject J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4 event 1 signed
```
