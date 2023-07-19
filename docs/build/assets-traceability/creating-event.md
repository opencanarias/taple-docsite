# Creating an event

Una vez que hemos inicializado nuestra gobernanza para comenzar a formalizar el caso de uso del ciclo de vida del vino, es necesario llenarla y adaptarla a nuestras necesidades. Para realizar estas modificaciones, debemos generar un evento en la red. En *Taple*, existen diferentes tipos de eventos, como el evento de **génesis**, que se utiliza para crear la gobernanza. Sin embargo, en este caso, necesitamos generar un evento de tipo **hecho**, que permite modificar el estado de un sujeto en la red.

Estos eventos de **hecho** interactúan con las operaciones definidas en el *smart contract* del sujeto y actúan sobre ellas. En el caso de la gobernanza, su contrato es especial, ya que tanto su esquema como su contrato son [internos de Taple](../../learn/governance-schema-and-contract.md).

El contrato de la gobernanza expone solo un método para modificarla, que se debe utilizar mediante *json-patch*.

Comenzaremos verificando los cambios que deseamos realizar en las propiedades de la gobernanza. Al final del paso anterior, nuestra gobernanza debería tener un aspecto similar al siguiente:

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

Ahora, necesitamos incluir al miembro que creó la gobernanza, lo cual daría lugar a un *json* como este:

```json
{
    "members": [
        {
            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "name": "WPO"
        }
    ],
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
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WPO"
            }
        }
    ],
    "schemas": []
}
```

Para generar los cambios mencionados, utilizaremos nuestra herramienta [**TAPLE-Patch**](../../learn/client-tools.md#taple-patch) de la siguiente manera:

```bash title="Another terminal"
taple-patch "{\"members\":[],\"policies\":[{\"approve\":{\"quorum\":\"MAJORITY\"},\"evaluate\":{\"quorum\":\"MAJORITY\"},\"id\":\"governance\",\"validate\":{\"quorum\":\"MAJORITY\"}}],\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"}],\"schemas\":[]}" "{\"members\":[{\"id\":\"EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs\",\"name\":\"WPO\"}],\"policies\":[{\"approve\":{\"quorum\":\"MAJORITY\"},\"evaluate\":{\"quorum\":\"MAJORITY\"},\"id\":\"governance\",\"validate\":{\"quorum\":\"MAJORITY\"}}],\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WPO\"}}],\"schemas\":[]}"
```

El resultado será el siguiente:

```json
[
  {
    "op": "add",
    "path": "/members/0",
    "value": {
      "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
      "name": "WPO"
    }
  },
  {
    "op": "add",
    "path": "/roles/1",
    "value": {
      "namespace": "",
      "role": "APPROVER",
      "schema": {
        "ID": "governance"
      },
      "who": {
        "NAME": "WPO"
      }
    }
  }
]
```

Ahora, es el momento de llamar al método del contrato de la gobernanza que se encarga de la actualización de sus propiedades. Para ello, ejecutaremos lo siguiente:

```bash title="Node WPO"
curl --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{GOVERNANCE-ID}},
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/0",
                            "value": {
                            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
                            "name": "WPO"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/1",
                            "value": {
                                "namespace": "",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "governance"
                                },
                                "who": {
                                    "NAME": "WPO"
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

:::info
Tenga en cuenta que los cambios que se encuentran dentro de la lista `data` son los cambios que se realizarán en la gobernanza mediante *json-patch*.
:::

En este punto, debemos hablar sobre un nuevo concepto: [la emisión de ciertos eventos requieren de aprobación](../../discover/event-approval-process.md), lo cual se define a nivel del contrato inteligente para un sujeto. En el caso de la gobernanza, sus cambios deben ser aprobados por aquellos miembros cuyo rol dentro de la gobernanza ha sido especificado como aprobador. En caso de no existir aprobadores definidos, el propietario de la gobernanza asume este papel.

Por lo tanto, debemos consultar nuestra lista de solicitudes de aprobación pendientes en el sistema:

```bash title="Node WPO"
curl --request GET 'http://localhost:3000/api/approval-requests?status=pending'
```

El resultado de esta operación será una lista con un único elemento, que representa el evento que espera ser aprobado. Para aprobar esta solicitud de actualización de la gobernanza, copiaremos el valor que aparece en su campo `id` y ejecutaremos el siguiente comando:

```bash title="Node WPO"
curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIOUS-ID}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Luego, consultamos la gobernanza nuevamente para verificar los cambios. El resultado debería mostrar un campo `sn` igual a 1 y la inclusión del nuevo miembro:

```bash title="Node WPO"
curl --request GET 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

```json
{
    "subject_id": {{GOVERNACE-ID}},
    "governance_id": "",
    "sn": 1,
    "public_key": "EcQ7syPhhduUOSlco7pqTdird_iVhGwOXAz8xIHcM7KU",
    "namespace": "",
    "name": "wine_track",
    "schema_id": "governance",
    "owner": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
    "creator": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
    "properties": {
        "members": [
        {
            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "name": "WPO"
        }
        ],
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
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
            "ID": "governance"
            },
            "who": {
            "NAME": "WPO"
            }
        }
        ],
        "schemas": []
    },
    "active": true
}
```