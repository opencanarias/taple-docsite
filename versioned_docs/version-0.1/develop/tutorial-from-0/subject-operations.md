# Creating subjects

## Create subject in the first node

To create a subject in the first node, you must execute the following command:

```bash
    curl --silent --location --request POST 'http://localhost:3000/api/requests' \
--header 'X-API-KEY: 1234' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
            "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
            "namespace": "",
            "schema_id": "Test",
            "payload": {
                "Json": {
                    "temperature": 10,
                    "location": "Spain",
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

Note that you will need to change the hash identifier(**governance_id**) of the governance to yours.

:::

If everything went correctly, you should get the subject creation event as a response, with output similar to the following:

```json
{
  "request": {
    "Create": {
      "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
      "schema_id": "Test",
      "namespace": "",
      "payload": {
        "Json": "{\"batch\":{\"origin\":\"England\",\"weight\":30},\"location\":\"Spain\",\"temperature\":10}"
      }
    }
  },
  "request_id": "JRVNy_8BnYRlqxd_7xDLG8rZq0hNF9ioOg-sNqkFJsnY",
  "timestamp": 1674044147023,
  "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
  "sn": 0
}
```

Also, if we execute the command seen above `docker logs node_0`, we can check that the node has received the information correctly, obtaining as output something similar to the following:

```bash
    [2023-01-18T12:15:47Z INFO  protocol::command_head_manager::inner_manager] Subject JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M event 0 signed
    [2023-01-18T12:15:47Z INFO  protocol::command_head_manager::inner_manager] Subject JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M created

```

### Check that the second node receives the creation of the subject

To check that the second node has correctly received the creation of the subject in the first node, run the following command:

```bash
    curl --location --request GET 'http://localhost:3001/api/subjects/<Subject_ID>'
```

:::caution

Note that you will need to change the governance hash identifier to your own.

:::

If everything went correctly, you should see an output similar to the following:

```json
{
  "subject_id": "JNGBYkgJAe_dr_89OBRLA-PIPK4bhdo9olYjXlPSQu0M",
  "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
  "sn": 0,
  "public_key": "EG496wxlIoNCC2LEtA85Ha1ZCfJ_3EeFe80Mg8OCqHD0",
  "namespace": "",
  "schema_id": "Test",
  "owner": "E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw",
  "properties": "{\"batch\":{\"origin\":\"England\",\"weight\":30},\"location\":\"Spain\",\"temperature\":10}"
}
```

## Create a subject in the second node

To perform this step, we follow the same procedure and recommendations as in this **[section](#create-subject-in-the-first-node)** but changing the API port, as follows:

```bash
   curl --silent --location --request POST 'http://localhost:3001/api/requests' \
--header 'X-API-KEY: 1234' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
            "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
            "namespace": "",
            "schema_id": "Test",
            "payload": {
                "Json": {
                    "temperature": 15,
                    "location": "England",
                    "batch": {
                        "weight": 13,
                        "origin": "Spain"
                    }
                }
            }
        }
    }
}'
```

### Check that the first node receives the creation of the subject

To check that the first node has correctly received the creation of the subject in the second node, run the following command:

```bash
    curl --location --request GET 'http://localhost:3000/api/subjects/<Subject_id>'
```

:::caution

Note that you will need to change the governance hash identifier to your own.

:::

If everything went correctly, you should see an output similar to the following:

```json
{
  "subject_id": "JAN75VaMhfcqxic6bSkvA9fNJwPNVyp97_qZRh3jXJvE",
  "governance_id": "J_ToQAWBYtLOWDNMQGHrfyJ3BCd1I_BAHAak5CKbV1n4",
  "sn": 0,
  "public_key": "Ef1qyRu7ScI4l1BZWFSQCL69qQ-VxshEESW1iFOk5qbg",
  "namespace": "",
  "schema_id": "Test",
  "owner": "EQ7-HJs33eYvcm-lON9WXu9GsAws7lKI693xDIegftLw",
  "properties": "{\"batch\":{\"origin\":\"Spain\",\"weight\":13},\"location\":\"England\",\"temperature\":15}"
}
```
