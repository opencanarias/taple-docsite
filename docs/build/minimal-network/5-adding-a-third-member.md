# Adding a third member

## Levantar el tercer nodo

Para añadir un tercer miembro repetimos los pasos anteriores, lo primero es crear el material criptográfico con taple-keygen:

```bash
PRIVATE KEY ED25519 (HEX): 984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6
CONTROLLER ID ED25519: E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE
PeerID: 12D3KooWS4nPvBjbftvVQa4one9dQbneK66wVSLpZNSoTopxuNr4
```

Para lanzar el docker:

```bash
docker run -p 3002:3000 -p 50002:50000 \ 
-e TAPLE_SECRET_KEY=984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6 \ 
-e TAPLE_HTTP=true opencanarias/taple-client:0.2 \ 
-e TAPLE_NETWORK_KNOWN_NODE=/ip4/{addr}/tcp/50000/p2p/12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B \ 
-e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

## Modificar la gobernanza

Ahora lanzaremos el evento que añade al tercer miembro a la governance, pero para comprobar el funcionamiento de las aprobaciones votaremos que sí con un nodo y que no con el otro, lo que dejará el evento como rechazado por la fase de aprobación. Aún así se añadirá a la cadena del sujeto, pero no modificará el estado del mismo.

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
                    "path": "/members/2",
                    "value": {
                    "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                    "name": "Tutorial3"
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
                            "path": "/members/2",
                            "value": {
                                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                                "name": "Tutorial3"
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

Debemos primero preguntar por las aprobaciones pendientes en **/api/approval-requests?status=pending** usando un **GET**. El id del json de respuesta es lo que debemos usar para aprobarla. En **/api/approval-requests/{id}** usando un **PATCH** añadiremos el id recibido para lanzar el voto.

```bash
curl --silent 'http://localhost:3000/api/approval-requests?status=pending'
```

Respuesta:

```json
[
    {
        "id": "J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4",
        "request": {
            "event_request": {
                "Fact": {
                    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/2",
                                    "value": {
                                        "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                                        "name": "Tutorial3"
                                    }
                                }
                            ]
                        }
                    }
                },
                "signature": {
                    "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "timestamp": 1689759413015509263,
                    "value": "SE1YEBQE1PdzwbtCnydZ1GnEw03Z8XkTZtXguYoCs3JqzuG5RIP00KxL_QIMCItUQsSip22mnZfmNScVpxAtyYCA"
                }
            },
            "sn": 4,
            "gov_version": 3,
            "patch": [
                {
                    "op": "add",
                    "path": "/members/2",
                    "value": {
                        "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                        "name": "Tutorial3"
                    }
                }
            ],
            "state_hash": "Jv3BSUFzl7zq2cFldSbl0YjpZ1JEqCVzGG0plg6OT4GA",
            "hash_prev_event": "JZt9JQi5x5-nmkwacYO3H6qjvCg8dgOOVyDCPNuQlpFY",
            "signature": {
                "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
                "timestamp": 1689759413045110844,
                "value": "SEu793Au3GbvoNUw8CEfAJBZj5RlspzpJdk3eJzB16u0Q7jLB04JN5WykLusqQzOyjDNquPMrs0HE5qCVEACJTBA"
            }
        },
        "reponse": null,
        "state": "Pending"
    }
]
```

En el nodo 1 la aprobaremos pero en el 2 la rechazaremos. Como el quorum es Majority significa que los dos deben aprobarla para que se apruebe. Con lo que si uno de los dos la rechaza quedará como rechazada porque no se podrá llegar al quorum de aceptación.

Nodo 1:

```json
{"approvalType": "Accept"}
```

```bash
curl --silent --request PATCH 'http://localhost:3000/api/approval-requests/J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data '{"approvalType": "Accept"}'
```

Nodo 2:

```json
{"approvalType": "Reject"}
```

```bash
curl --silent --request PATCH 'http://localhost:3001/api/approval-requests/J8NvGJ6XzV3ThfWdDN4epwXDFTY9hB2NKcyGEPbVViO4' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data '{"approvalType": "Reject"}'
```

Comprobamos que el estado no se ha modificado buscando nuestros sujetos, sin embargo el sn del sujeto sí que habrá aumentado en 1:

```json
[
    {
        "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
        "governance_id": "",
        "sn": 4,
        "public_key": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
        "namespace": "",
        "name": "tutorial",
        "schema_id": "governance",
        "owner": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
        "creator": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
        "properties": {
            "members": [
                {
                    "id": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
                    "name": "Tutorial1"
                },
                {
                    "id": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
                    "name": "Tutorial2"
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
                    "who": "MEMBERS"
                }
            ],
            "schemas": []
        },
        "active": true
    }
]
```

También podemos buscar un evento en concreto con la api de eventos: **/api/subjects/{id}/events/{sn}** cuyo id es el SubjectId del sujeto, el sn es el evento concreto que vamos a buscar (si no se añade nada devolverá todos los eventos del sujeto) y la petición es de tipo **GET**.

```bash
curl --silent 'http://localhost:3000/api/subjects/Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M/events/4' \
--header 'X-API-KEY: 1234'
```

```json
{
    "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
    "event_request": {
        "Fact": {
            "subject_id": "Jz6RNP5F7wNoSeCH65MXYuNVInyuhLvjKb5IpRiH_J6M",
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/2",
                            "value": {
                                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                                "name": "Tutorial3"
                            }
                        }
                    ]
                }
            }
        },
        "signature": {
            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
            "timestamp": 1689759413015509263,
            "value": "SE1YEBQE1PdzwbtCnydZ1GnEw03Z8XkTZtXguYoCs3JqzuG5RIP00KxL_QIMCItUQsSip22mnZfmNScVpxAtyYCA"
        }
    },
    "sn": 4,
    "gov_version": 3,
    "patch": [
        {
            "op": "add",
            "path": "/members/2",
            "value": {
                "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                "name": "Tutorial3"
            }
        }
    ],
    "state_hash": "Jv3BSUFzl7zq2cFldSbl0YjpZ1JEqCVzGG0plg6OT4GA",
    "eval_success": true,
    "appr_required": true,
    "approved": false,
    "hash_prev_event": "JZt9JQi5x5-nmkwacYO3H6qjvCg8dgOOVyDCPNuQlpFY",
    "evaluators": [
        {
            "signer": "EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4",
            "timestamp": 1689759413042189699,
            "value": "SE__Vz_7yc3L0qJRXTnWzGRq0FsT3EGhe67WWLHkHcF7kqWKg6nldkWnx9od7byTTV_dNG_dwW26ShFbrLu1fLAg"
        }
    ],
    "approvers": [
        {
            "signer": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
            "timestamp": 1689759533754268083,
            "value": "SEeUWADKs25krS0mxYuqLBQe8umbs39Fs5Nbp85_7X_Sa959mBmZFDFZ5FGgJu3EPK1Pm3KgDp0vmLpq0aZ7S5DQ"
        }
    ],
    "signature": {
        "signer": "EZalVAn6l5irr7gnYnVmfHOsPk8i2u4AJ0WDKZTmzt9U",
        "timestamp": 1689759533772217255,
        "value": "SEpn7Y28DrVFNKpk8qJB4_U2MQrQeJFa4UscRTg_Y1HVBrdjO-sy7J0f6-pGkLguKu2XdlQvXpNHOTeas1wkAICQ"
    }
}
```

Ahora repetiremos la misma petición pero votaremos que sí con ambos nodos, lo que hará que se apruebe la petición y se modifique el estado del sujeto. Aprobamos la governance en el tercer nodo y veremos como la tendremos actualizada en un corto periodo de tiempo.
