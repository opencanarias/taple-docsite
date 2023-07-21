# Creating a governance

Once the **WPO** has a node in the TAPLE network, it's time to define the use case, which includes participants, interaction rules, information models, among other aspects. In the TAPLE network, this is accomplished by creating a [governance](../../discover/governance.md), where the specific functionality of the use case is specified.

To create a basic governance, the following steps are required:

* To begin, execute the following command to create a basic version of a governance:

  ```bash title="Node: WPO"
  curl --request POST 'http://localhost:3000/api/event-requests' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "request": {
      "Create": {
        "governance_id": "",
        "schema_id": "governance",
        "namespace": "",
        "name": "wine_track"
      }
    }
  }'
  ```

* As a result of the previous action, a `request-id` will be returned. Copy and use it in the following command:

  ```bash title="Node: WPO"
  curl --request GET 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
  ```

  This last command will provide a response like the following:

  ```json
  {
    "id": {{REQUEST-ID}},
    "subject_id": {{GOVERNANCE-ID}},
    "sn": 0,
    "state": "finished",
    "success": true
  }
  ```

  :::note
  Save the `subject_id` of the **governance**, as it will be needed in next steps of the tutorial.
  :::

* We can check the created governance using the following command:

  ```bash title="Node: WPO"
  curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
  ```

  The obtained result should be similar to the following:

  ```json
  {
    "subject_id": {{GOVERNANCE-ID}},
    "governance_id": "",
    "sn": 0,
    "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",
    "namespace": "",
    "name": "wine_track",
    "schema_id": "governance",
    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
    "properties": {
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
    },
    "active": true
  }
  ```