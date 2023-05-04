# Bus fleet tracking

Con la finalidad de comprender el funcionamiento de la tecnología TAPLE, se ha planteado un caso de uso sencillo para la trazabilidad en el sector del transporte, ya que nos ayudará a visualizar un caso de uso real, así como la importancia del mismo para ayudar a mejorar el funcionamiento tanto de la entidad como de los usuarios.

## Explicaión del caso de uso

A continuación, podrá visualizar una imagen con la representación del caso de uso.

![Bus Tracking](../img/uc-bus-tracking.png)

Como podemos apreciar en la imagen, la red está formada por los siguientes integrantes:
- 4 autobuses
- Ayuntamiento de la zona de implantación
- Entidad propietaria de los autobuses
- 2 paradas de autobuses

En este caso, los autobuses como miembros participantes de la red tendrán un sujeto en representación al autobús en el que tendremos como información de los mismos los siguientes datos:
- Velocidad del autobús
- Kilométros del vehículo
- Ubicación del vehículo especificada en:
    - Latitud
    - Longitud

Por otro lado tenemos el ayuntamiento y la compañía de autobuses que actuarán como validadores sobre los eventos producidos por los autobuses y por último, tenemos dos paradas de autobuses que contendrán un panel con la información actualizada de los autobuses.

Este caso de uso, ha sido planteado con la finalidad de que los usuarios situados en las paradas de autobuses estén informados a tiempo real sobre el autobús del que desean hacer uso. Además, se mantendrá informado al ayuntamiento y entidad propietaria en todo momento, pudiendo estos hacer otros cálculos pertinentes como puede ser el consumo de combustible o la emisión de gases durante el trayecto.

## Definición de la gobernanza y schema

### Gobernanza
El primer paso que debemos realizar antes de definir la gobernanza, es identificar los miembros que van a conformar nuestra red. En nuestro caso, estará formada por 8 miembros que son:
- Autobuses uno, dos, tres y cuatro.
- Ayuntamiento de la zona de implantación
- Entidad propietaria de los autobuses
- Paradas de autobuses número uno y dos

Quedando la definición de miembros de la siguiente manera:

```json
    "members": [
        {
            "id": "Bus 1",
            "tags": {},
            "description": "Bus number one",
            "key": "Paste the Controller ID of taple-node"
        },
        {
            "id": "Bus 2",
            "tags": {},
            "description": "Bus number two",
            "key": "Paste the Controller ID of taple-node2"
        },
        {
            "id": "Bus 3",
            "tags": {},
            "description": "Bus number three",
            "key": "Paste the Controller ID of taple-node3"
        },
        {
            "id": "Bus 4",
            "tags": {},
            "description": "Bus number four",
            "key": "Paste the Controller ID of taple-node4"
        },
        {
            "id": "Town Hall",
            "tags" : {},
            "description": "Town Hall of the area of implementation",
            "key" : "Paste the Controller ID of taple-node5"
        },
        {
            "id": "Bus Company",
            "tags": {},
            "description": "Company owning the buses",
            "key": "Paste the Controller ID of taple-node6"
        },
        {
            "id": "Bus stop 1",
            "tags": {},
            "description": "Bus stop number one",
            "key": "Paste the Controller ID of taple-node7"
        },
        {
            "id": "Bus stop 2",
            "tags": {},
            "description": "Bus stop number two",
            "key": "Paste the Controller ID of taple-node8"
        }
    ]
```

### Schema
Una vez hemos definido los miembros de la gobernanza, el siguiente paso que debemos realizar es definir las propiedades de los sujetos mediante el schema. En este caso, las propiedades de nuestros sujetos son las que hemos nombrado anteriormente que tendrán los autobuses, quedando el schema de la siguiente manera:

```json
    "schemas": [
        {
            "id": "Bus",
            "tags": {},
            "content": {
                "type": "object",
                "additionalProperties": false,
                "required": [
                    "speed",
                    "kilometers",
                    "location"
                ],
                "properties": {
                    "speed": {"type": "integer"},
                    "kilometers": {"type": "integer"},
                    "location": {
                        "type": "object",
                        "additionalProperties": false,
                        "required": [ "latitude", "longitude" ],
                        "properties": {
                            "latitude": {"type": "number"},
                            "longitude": {"type": "number"}
                        }
                    }
                }
            }
        }
    ]
```

## Caso de uso en acción

Suponiendo que hemos levantado una red con 4 nodos según la imagen represantada al comienzo de la explicación y respetando el número de miembros que forman la gobernanza, los pasos a seguir serían los siguientes:
1. Crear la gobernanza
2. Crear los sujetos
3. Crear eventos sobre los sujetos
4. Comprobar que las paradas de autobuses reciben los nuevos estados

### Crear la gobernanza

Para crear la gobernanza, ejecute el siguiente comando:

```bash
    curl --location --request POST 'http://localhost:<Paste company node port>/api/event_request' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Create": {
                    "governance_id": "",
                    "namespace": "",
                    "schema_id": "",
                    "payload": {
                        "Json": {
                            "members": [
                                {
                                    "id": "Bus 1",
                                    "tags": {},
                                    "description": "Bus number one",
                                    "key": "Paste the Controller ID of taple-node"
                                },
                                {
                                    "id": "Bus 2",
                                    "tags": {},
                                    "description": "Bus number two",
                                    "key": "Paste the Controller ID of taple-node2"
                                },
                                {
                                    "id": "Bus 3",
                                    "tags": {},
                                    "description": "Bus number three",
                                    "key": "Paste the Controller ID of taple-node3"
                                },
                                {
                                    "id": "Bus 4",
                                    "tags": {},
                                    "description": "Bus number four",
                                    "key": "Paste the Controller ID of taple-node4"
                                },
                                {
                                    "id": "Town Hall",
                                    "tags" : {},
                                    "description": "Town Hall of the area of implementation",
                                    "key" : "Paste the Controller ID of taple-node5"
                                },
                                {
                                    "id": "Bus Company",
                                    "tags": {},
                                    "description": "Company owning the buses",
                                    "key": "Paste the Controller ID of taple-node6"
                                },
                                {
                                    "id": "Bus stop 1",
                                    "tags": {},
                                    "description": "Bus stop number one",
                                    "key": "Paste the Controller ID of taple-node7"
                                },
                                        {
                                    "id": "Bus stop 2",
                                    "tags": {},
                                    "description": "Bus stop number two",
                                    "key": "Paste the Controller ID of taple-node8"
                                }
                            ],
                            "schemas": [
                                {
                                    "id": "Bus",
                                    "tags": {},
                                    "content": {
                                        "type": "object",
                                        "additionalProperties": false,
                                        "required": [
                                            "speed",
                                            "kilometers",
                                            "location"
                                        ],
                                        "properties": {
                                            "speed": {"type": "integer"},
                                            "kilometers": {"type": "integer"},
                                            "location": {
                                                "type": "object",
                                                "additionalProperties": false,
                                                "required": [ "latitude", "longitude" ],
                                                "properties": {
                                                    "latitude": {"type": "number"},
                                                    "longitude": {"type": "number"}
                                                }
                                            }
                                        }
                                    }
                                }
                            ],
                            "policies": [
                                {
                                    "id": "Bus",
                                    "validation": {
                                        "quorum": 0.5,
                                        "validators": [
                                            "Paste the Controller ID of taple-node5",
                                            "Paste the Controller ID of taple-node6",
                                            "Paste the Controller ID of taple-node7",
                                            "Paste the Controller ID of taple-node8"
                                        ]
                                    },
                                    "approval": {
                                        "quorum": 0.5,
                                        "approvers": [
                                            "Paste the Controller ID of taple-node5",
                                            "Paste the Controller ID of taple-node6"
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
                                            "approvalRequired": false,
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
                                            "Paste the Controller ID of taple-node5",
                                            "Paste the Controller ID of taple-node6"
                                        ]
                                    },
                                    "approval": {
                                        "quorum": 1.0,
                                        "approvers": [
                                            "Paste the Controller ID of taple-node5",
                                            "Paste the Controller ID of taple-node6"
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
                                            "approvalRequired": false,
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

Recuerde pegar el puerto de su nodo en la petición.

:::

### Crear los sujetos

En este paso debemos crear 4 sujetos que se corresponderán con los 4 autobuses que habíamos mencionado con anterioridad. Para ello, debemos ejecutar los siguientes comandos:

<details>
  <summary>Creando sujeto - Autobús 1</summary>

```bash
    curl --location --request POST 'http://localhost:<Paste node port bus one>/api/event_request' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Create": {
                    "governance_id": "Paste your hash identifier here",
                    "namespace": "Bus1",
                    "schema_id": "Bus",
                    "payload": {
                        "Json": {
                            "speed": 40,
                            "kilometers": 20000,
                            "location": {
                                "latitude": 28.46824,
                                "longitude": -16.25462
                            }
                        }
                    }
                }
            }
        }'
```
</details>

<details>
  <summary>Creando sujeto - Autobús 2</summary>

```bash
    curl --location --request POST 'http://localhost:<Paste node port bus two>/api/event_request' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Create": {
                    "governance_id": "Paste your hash identifier here",
                    "namespace": "Bus2",
                    "schema_id": "Bus",
                    "payload": {
                        "Json": {
                            "speed": 20,
                            "kilometers": 40000,
                            "location": {
                                "latitude": 28.46824,
                                "longitude": -16.25462
                            }
                        }
                    }
                }
            }
        }'
```
</details>

<details>
  <summary>Creando sujeto - Autobús 3</summary>

```bash
    curl --location --request POST 'http://localhost:<Paste node port bus three>/api/event_request' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Create": {
                    "governance_id": "Paste your hash identifier here",
                    "namespace": "Bus3",
                    "schema_id": "Bus",
                    "payload": {
                        "Json": {
                            "speed": 100,
                            "kilometers": 30320,
                            "location": {
                                "latitude": 28.46824,
                                "longitude": -16.25462
                            }
                        }
                    }
                }
            }
        }'
```
</details>


<details>
  <summary>Creando sujeto - Autobús 4</summary>

```bash
    curl --location --request POST 'http://localhost:<Paste node port bus four>/api/event_request' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Create": {
                    "governance_id": "Paste your hash identifier here",
                    "namespace": "Bus4",
                    "schema_id": "Bus",
                    "payload": {
                        "Json": {
                            "speed": 80,
                            "kilometers": 50030,
                            "location": {
                                "latitude": 28.46824,
                                "longitude": -16.25462
                            }
                        }
                    }
                }
            }
        }'
```
</details>

:::caution

Recuerde pegar el puerto de su nodo en la petición. Además, Tenga en cuenta que deberá cambiar el identificador hash (**governance_id**) de la gobernanza por el suyo.

:::

### Crear eventos

Para crear un evento sobre los sujetos debemos ejecutar el siguiente comando:

```bash
    curl --location --request POST 'http://localhost:<Paste bus node port>/api/event_request' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "State": {
                    "subject_id": "Paste your hash identifier here",
                    "payload": {
                        "Json": {
                            "speed": 85,
                            "kilometers": 50100,
                            "location": {
                                "latitude": 28.46824,
                                "longitude": -16.25462
                            }
                        }
                    }
                }
            }
        }'
```

:::caution

Recuerde pegar el puerto de su nodo en la petición. Tenga en cuenta que tendrá que cambiar el hash identificador al del sujeto que desea modificar.

:::

### Comprobar que las paradas de autobuses reciben los nuevos estados

Para comprobar que la parada de autobús ha recibido correctamente correctamente los eventos realizado, ejecute los siguientes comandos:

<details>
  <summary>Comprobando evento del sujeto - Autobús 1</summary>

```bash
    curl --location --request GET 'http://localhost:<Paste bus stop node port>/api/subjects/Paste your hash identifier here/events?from=0&quantity=50'
```
</details>

<details>
  <summary>Comprobando evento del sujeto - Autobús 2</summary>

```bash
    curl --location --request GET 'http://localhost:<Paste bus stop node port>/api/subjects/Paste your hash identifier here/events?from=0&quantity=50'
```
</details>

<details>
  <summary>Comprobando evento del sujeto - Autobús 3</summary>

```bash
    curl --location --request GET 'http://localhost:<Paste bus stop node port>/api/subjects/Paste your hash identifier here/events?from=0&quantity=50'
```
</details>

<details>
  <summary>Comprobando evento del sujeto - Autobús 4</summary>

```bash
    curl --location --request GET 'http://localhost:<Paste bus stop node port>/api/subjects/Paste your hash identifier here/events?from=0&quantity=50'
```
</details>

:::caution

Recuerde pegar el puerto de su nodo en la petición. Tenga en cuenta que tendrá que pegar el hash identificador del sujeto.

:::