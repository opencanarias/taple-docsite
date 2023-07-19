# Creating the governance

Ahora que hemos podido levantar nuestro primer nodo, lo primero que debemos hacer para que sea útil es crear una [governance](../../discover/governance.md). Las governances son sujetos especiales que definen las reglas del caso de uso en cuestión. Sin governance no pueden existir sujetos. Tanto su [esquema como su smart contract](../../learn/governance-schema-and-contract.md) son fijos y están definidos en el código de Taple. Lo mismo con su [estructura](../../learn/governance-structure.md).

Un aspecto interesante de la API del Taple-client es las diferentes posibilidades para usar el endpoint de envío de event requests. La forma más ortodoxa sería incluir la request y la firma de la request. Para ello se puede usar Taple-sign (incluido en las [taple-tools](../../learn/client-tools.md)) para firmar la request. Pero también se puede omitir la firma en el body de la request y que sea el client quien se encargue de firmarlo con nuestra propia clave privada. Esto obviamente no se puede hacer para invocaciones externas donde el firmante no es el propietario del nodo. Otro cambio destinado a aumentar la sencillez para los eventos de Génesis/Creación es que se puede omitir la public key del body y el client creará una por nosotros. En general antes de crear un sujeto habría que llamar a la api de creación de material criptográfico para generar un par de claves **/api/keys** y el método **POST**. Dicha API devuelve el valor de la public key del KeyPair para incluirlo en los eventos de Create y Transfer.

Para ello debemos lanzar una event request usando el API de taple-client. El endpoint que debemos usar es **/api/event-requests** y el método **POST**. Este endpoint admite diferentes configuraciones para facilitarle la vida al usuario:

Con lo cual, si optamos por la tercera vía el body del post de la llamada que crea la governance se nos quedaría en:

```json
{
  "request": {
    "Create": {
      "governance_id": "",
      "schema_id": "governance",
      "namespace": "",
      "name": "tutorial"
    }
  }
}
```

```bash
curl --silent --location 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data '{
  "request": {
    "Create": {
      "governance_id": "",
      "schema_id": "governance",
      "namespace": "",
      "name": "tutorial"
    }
  }
}'
```

La respuesta que obtenemos al lanzar la event request es la id de la propia request, si queremos saber cuál ha acabado siendo el SubjectId de la governance debemos consultar el endpoint **/api/event-requests/{id}** y el método **GET**. En la respuesta de este endpoint se nos devuelve inforamación de la request que incluye el SubjectId de la governance.

```bash
curl --silent 'http://127.0.0.1:3000/api/event-requests/Jr4kWJOgdIhdtUMTqyLbu676-k8-eVCd8VQ9ZmLWpSdg/state' \
--header 'X-API-KEY: 1234'
```

Respuesta:

```json
{
    "id": "Jr4kWJOgdIhdtUMTqyLbu676-k8-eVCd8VQ9ZmLWpSdg",
    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
    "sn": 0,
    "state": "finished",
    "success": true
}
```

También podemos pedir la lista de sujetos en **/api/subjects** con el método **GET**. En este caso se nos devolverá una lista de los sujetos que tenemos en el nodo, en este caso solo tendremos la governance que acabamos de crear.

Al ser los dueños del sujeto se puede decir que somos testigos del mismo. El único rol que se define por defecto en el estado inicial de la governance es el que hace que todos los miembros de la governanza sean testigos de la misma, pero en el caso de los miembros viene vacío. En el siguiente paso nos añadiremos como miembros de la governance. Esto se debe a que el estado inicial no tiene ningún miembro, y para participar activamente en el caso de uso debemos añadirnos como miembros. Aunque este paso no es obligatorio, depende del caso de uso.

El endpoint a usar es el mismo que el de la creación, pero el tipo de evento será FACT:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                    "op": "add",
                    "path": "/members/0",
                    "value": {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                    }
                }
            ]
          }
      }
    }
  }
}
```

```bash
curl --silent 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data '{
    "request": {
        "Fact": {
            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/0",
                            "value": {
                                "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                                "name": "Tutorial1"
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

Reemplazar {{governance_id}} por el SubjectId de la governance que hemos creado. El id de nuestro usuario lo sacamos de cuando usamos taple-keygen en el paso anterior. Es nuestro KeyIdentifier, que identifica nuestra clave pública. El método Patch es el único que contiene el contrato de la governance actualmente y simplemente aplica un json-patch a su estado. Este método hace que sea necesaria la fase de Aprobación.

Como hemos comentado anteriormente el creador será el firmante en todas las fases si no se define a nadie más, por lo que para este evento 1 nosotros seremos [Evaluador](../../discover/event-evaluation-process.md), [Aprobador](../../discover/event-approval-process.md) y [Validador](../../discover/event-validation-process.md). La evaluación y la validación funcionan automáticamente, pero la parte de aprobación requiere intervención del usuario a través de la API (siempre que no esté definida la variable de entorno que hace que se apruebe automáticamente).

Para ello debemos primero preguntar por las aprobaciones pendientes en **/api/approval-requests?status=pending** usando un **GET**.

```bash
curl --silent 'http://localhost:3000/api/approval-requests?status=pending'
```

```json
[
    {
        "id": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",
        "request": {
            "event_request": {
                "Fact": {
                    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/0",
                                    "value": {
                                        "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                                        "name": "Tutorial1"
                                    }
                                }
                            ]
                        }
                    }
                },
                "signature": {
                    "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "timestamp": 1689758738346603498,
                    "value": "SEUhyEBzC8cXdmqORBLXtgyYuFh3zXFywBVjRnGvU70nLdjs5blDDUiUla4IaiOWqcBPt5U89vfoDFa-V-5QjDCw"
                }
            },
            "sn": 1,
            "gov_version": 0,
            "patch": [
                {
                    "op": "add",
                    "path": "/members/0",
                    "value": {
                        "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                        "name": "Tutorial1"
                    }
                }
            ],
            "state_hash": "J9ZorCKUeboco5eBZeW_NYssO3ZYLu2Ano_tThl8_Fss",
            "hash_prev_event": "Jg-2hzd0QEdqDdtRqe_ITljdbTWKPYSl1hO1XyrgwM8A",
            "signature": {
                "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
                "timestamp": 1689758738381216200,
                "value": "SE1GJs9v-OFtsveJQWi0HYRfkT4LkPCdu_7H_BUaTLg2Dpt5bTTBR8zLt6TiSbohsI0kdyQeOrYMHFxIRbKovYDg"
            }
        },
        "reponse": null,
        "state": "Pending"
    }
]
```

El id del json de respuesta es lo que debemos usar para aprobarla. En **/api/approval-requests/{id}** usando un **PATCH** añadiremos el id recibido para lanzar el voto. Como en nuestro caso queremos aprobarla el body debe ser:

```json
{"approvalType": "Accept"}
```

```bash
curl --silent --request PATCH 'http://localhost:3000/api/approval-requests/JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data '{"approvalType": "Accept"}'
```

```json
{
    "id": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",
    "request": {
        "event_request": {
            "Fact": {
                "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
                "payload": {
                    "Patch": {
                        "data": [
                            {
                                "op": "add",
                                "path": "/members/0",
                                "value": {
                                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                                    "name": "Tutorial1"
                                }
                            }
                        ]
                    }
                }
            },
            "signature": {
                "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                "timestamp": 1689758738346603498,
                "value": "SEUhyEBzC8cXdmqORBLXtgyYuFh3zXFywBVjRnGvU70nLdjs5blDDUiUla4IaiOWqcBPt5U89vfoDFa-V-5QjDCw"
            }
        },
        "sn": 1,
        "gov_version": 0,
        "patch": [
            {
                "op": "add",
                "path": "/members/0",
                "value": {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                }
            }
        ],
        "state_hash": "J9ZorCKUeboco5eBZeW_NYssO3ZYLu2Ano_tThl8_Fss",
        "hash_prev_event": "Jg-2hzd0QEdqDdtRqe_ITljdbTWKPYSl1hO1XyrgwM8A",
        "signature": {
            "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
            "timestamp": 1689758738381216200,
            "value": "SE1GJs9v-OFtsveJQWi0HYRfkT4LkPCdu_7H_BUaTLg2Dpt5bTTBR8zLt6TiSbohsI0kdyQeOrYMHFxIRbKovYDg"
        }
    },
    "reponse": {
        "appr_req_hash": "JYHOLieD0u6Q-GjURtjZ_JAXDgP6h87fMB9h2FiYk1OQ",
        "approved": true,
        "signature": {
            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
            "timestamp": 1689758795610296081,
            "value": "SE34M3kRw9Uj2V_FaDq5Kz4h_8HSbkAiaH40XxpcPleLPJ_CnNbVso6L4GkdNNF2othwlDzTzk3BqyzyKlpIVDCg"
        }
    },
    "state": "Responded"
}
```
