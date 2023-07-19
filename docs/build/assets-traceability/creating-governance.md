# Creating a governance

Una vez que **WPO** dispone de un nodo en la red TAPLE, es el momento de definir el caso de uso,  que incluye los participantes, las reglas de interacción, los modelos de información, entre otros aspectos. En la red TAPLE, esto se realiza mediante la creación de una [gobernanza](../../discover/governance.md), donde se especifica la funcionalidad concreta del caso de uso.


Para crear una gobernanza básica se requiere de la realización de los siguientes pasos:

* Para comenzar, ejecutamos el siguiente comando para crear una versión básica de una gobernanza:

  ```bash title="Node WPO"
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

* Como resultado de la acción anterior se nos devolverá un `request-id`, debemos copiarlo y utilizar en el siguiente comando: 

  ```bash title="Node WPO"
  curl --request GET 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
  ```

  Este último comando nos proporcionará una respuesta como la siguiente:

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
  Guarda el `subject_id` de la **gobernanza**, ya que se necesitará en pasos posteriores del tutorial.
  :::

* Podemos consultar la gobernanza creada utilizando el siguiente comando:

  ```bash title="Node WPO"
  curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
  ```

  El resultado obtenido debería ser similar al siguiente:

  ```json
  {
    "subject_id": {{GOVERNANCE-ID}},
    "governance_id": "",
    "sn": 0,
    "public_key": "EcQ7syPhhduUOSlco7pqTdird_iVhGwOXAz8xIHcM7KU",
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