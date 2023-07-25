# Setting up the network
A continuación, procederemos a conformar la red con los elementos vistos en la sección anterior.

## Running a nodes
Para comenzar con el caso de uso lo primero que haremos será levantar los nodos necesarios para el mismo. Para ello, debe ejecutar los distintos comandos que se presentan en lo sucesivos apartados.

### Rental Company node 
```bash
    docker run \
        -p 3000:3000 \
        -p 50000:50000 \
        -e TAPLE_HTTP=true \
        -e TAPLE_ID_PRIVATE_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
        -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

### Cleaning Company node
```bash
    docker run \
        -p 3001:3000 \
        -p 50001:50000 \
        -e TAPLE_HTTP=true \
        -e TAPLE_ID_PRIVATE_KEY=4f0e3c9cd24ab3420b81220bb7ebccb4e42501d3667dea81838b3bfaae20c936 \
        -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50001 \
        -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
        opencanarias/taple-client:0.2
```

### Security Company node
```bash
    docker run \
        -p 3002:3000 \
        -p 50002:50000 \
        -e TAPLE_HTTP=true \
        -e TAPLE_ID_PRIVATE_KEY=6d3103185146ecedd28d3759df693999927e69aacb55e1aa9fe7ac17555da81c \
        -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50002 \
        -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
        opencanarias/taple-client:0.2
         
```

### Vehicle node
```bash
    docker run \
        -p 3003:3000 \
        -p 50003:50000 \
        -e TAPLE_HTTP=true \
        -e TAPLE_ID_PRIVATE_KEY=2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198 \
        -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50003 \
        -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk \
        opencanarias/taple-client:0.2
```

## Creating and updating governance
Una vez hemos levantado todos los nodos, procedemos a la configuración de la red. Para ello, se requiere la creación de la gobernnaza. Como la compañía de renting es la propietaria del caso de uso, es necesaria que la creación de la misma sea por dicha entidad. A continuación, se describirán los pasos necesarios para su creación y actualización.

Para comenzar, creamos la gobernanza con la ejecución del siguiente comando:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data '{
          "request": {
            "Create": {
              "governance_id": "",
              "schema_id": "governance",
              "namespace": "",
              "name": "Access_control"
            }
          }
        }'
```

Una vez ejecutado el comando anterior, se nos devolverá el "**request-id**" del evento.

:::tip

Se recomienda guardar el "**request_id**" devuelto por la petición anterior.

:::

Una vez creada, comprobamos que la gobernanza se ha creado con éxito. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{REQUEST-ID}}** por el valor copiado anteriormente.

:::

Este último comando, proporcionará una respuesta como la siguiente:

```bash
    {
      "id": {{REQUEST-ID}},
      "subject_id": {{GOVERNANCE-ID}},
      "sn": 0,
      "state": "finished",
      "success": true
    }
```

:::tip

Se recomienda guardar el "**subject_id**" correspondiente a la gobernanza, ya que será necesario en los próximos pasos del tutorial.

:::

Por último, para comprobar la gobernanza, debemos ejecutar el siguiente comando:

```bash
    curl 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

Una vez inicializada nuestra gobernanza podemos empezar a formalizar el caso de uso del control de acceso. Sin embargo, la gobernanza actual está vacía, por lo que debemos hacerle actualizaciones a la misma para adaptarla a nuestro caso de uso.

Para realizar estas actualizaciones, es necesario generar un evento, los cuales veremos con detalle en las siguientes secciones.

### Adding Schema, Smart Contract and Policies
Lo primero que debemos hacer, es incluir en nuestra gobernanza la definición del esquema que modela el sujeto del coche al que queremos realizar el control de acceso, el contrato inteligente que regula el control de acceso, así como las políticas necesarias para el caso de uso.

Por lo tanto, será necesario emitir un evento de hecho a la gobernanza para agregar esta nueva información. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data '{
            "request": {
                "Fact": {
                    "subject_id": "{{GOVERNANCE-ID}}",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/schemas/0",
                                    "value": {
                                        "id": "car",
                                        "schema": {
                                            "description": "Estado del coche",
                                            "type": "object",
                                            "properties": {
                                                "status": {
                                                    "description": "Define si el coche está libre o ocupado",
                                                    "type": "string",
                                                    "enum": ["FREE", "RENTED"]
                                                },
                                                "driver": {
                                                    "description": "Contiene el identificador del cliente autorizado para su uso",
                                                    "type": "string"
                                                }
                                            },
                                            "required": [
                                                "status",
                                                "driver"
                                            ],
                                            "additionalProperties": false
                                        },
                                        "initial_value": {
                                            "status": "FREE",
                                            "driver": ""
                                        },
                                        "contract": {
                                            "raw":"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQp1c2UgdGFwbGVfc2NfcnVzdCBhcyBzZGs7DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0NCmVudW0gU3RhdGVzQ2FyIHsNCiAgICBGUkVFLA0KICAgIFJFTlRFRCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IENhciB7DQogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAvLyBGUkVFIFJFTlRFRA0KICAgIHB1YiBkcml2ZXI6IFN0cmluZywgICAgLy8gRHJpdmVyIElEDQp9DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUpXQ0KZW51bSBDYXJFdmVudCB7DQogICAgUmVtb3ZlRHJpdmVyIHt9LA0KICAgIEFzc2lnbkRyaXZlciB7IGlkOiBTdHJpbmcgfSwNCiAgICBPcGVuRG9vciB7IGlkOiBTdHJpbmcgfSwNCn0NCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LA0KICAgIGNvbnRyYWN0X3Jlc3VsdDogJm11dCBzZGs6OkNvbnRyYWN0UmVzdWx0PENhcj4sDQopIHsNCiAgICBsZXQgbG9jayA9ICZtdXQgY29udHJhY3RfcmVzdWx0LmZpbmFsX3N0YXRlOw0KICAgIG1hdGNoICZjb250ZXh0LmV2ZW50IHsNCiAgICAgICAgQ2FyRXZlbnQ6OlJlbW92ZURyaXZlciB7fSA9PiBtYXRjaCBsb2NrLnN0YXR1cyB7DQogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30NCiAgICAgICAgICAgIFN0YXRlc0Nhcjo6UkVOVEVEID0+IHsNCiAgICAgICAgICAgICAgICBsb2NrLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsNCiAgICAgICAgICAgICAgICBsb2NrLmRyaXZlciA9ICIiLnRvX3N0cmluZygpOw0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSwNCiAgICAgICAgQ2FyRXZlbnQ6OkFzc2lnbkRyaXZlciB7IGlkIH0gPT4gbWF0Y2ggbG9jay5zdGF0dXMgew0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpGUkVFID0+IHsNCiAgICAgICAgICAgICAgICBsb2NrLnN0YXR1cyA9IFN0YXRlc0Nhcjo6UkVOVEVEOw0KICAgICAgICAgICAgICAgIGxvY2suZHJpdmVyID0gaWQudG9fc3RyaW5nKCk7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30NCiAgICAgICAgfSwNCiAgICAgICAgQ2FyRXZlbnQ6Ok9wZW5Eb29yIHsgaWQgfSA9PiBtYXRjaCBsb2NrLnN0YXR1cyB7DQogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4gew0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5hcHByb3ZhbF9yZXF1aXJlZCA9IHRydWU7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gew0KICAgICAgICAgICAgICAgIGlmIGxvY2suZHJpdmVyICE9IGlkLnRvX3N0cmluZygpIHsNCiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9LA0KICAgIH0NCn0NCg=="
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/policies/1",
                                    "value": {
                                        "approve": {
                                            "quorum": "MAJORITY"
                                        },
                                        "evaluate": {
                                            "quorum": "MAJORITY"
                                        },
                                        "id": "car",
                                        "validate": {
                                            "quorum": "MAJORITY"
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

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

Una vez emitido el evento, será necesario obtener la nueva solicitud de actualización. Para hacerlo, ejecutamos lo siguiente:

```bash
    curl 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copiaremos el valor del campo "**id**" y aceptaremos la solicitud de actualización sobre la gobernanza ejecutando el siguiente comando:

```bash
    curl 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{"state": "RespondedAccepted"}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

Por último, realizaremos una consulta a la gobernanza para verificar que el cambio se ha efectuado correctamente. Si todo ha sido realizado según lo previsto, debemos apreciar como el campo "**sn**" ha incrementado su valor y tanto el esquema, el contrato y las policies deberían aparecer. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

### Adding Rental Company to governance
Ahora, debemos incluir en nuestra gobernanza al miembro que la ha creado, que en nuestro caso es la compañía de renting. Esto lo podemos hacer de la siguiente manera:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data '{
            "request": {
                "Fact": {
                    "subject_id": "{{GOVERNANCE-ID}}",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/0",
                                    "value": {
                                        "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
                                        "name": "RentalCompany"
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/1",
                                    "value": {
                                        "namespace": "",
                                        "role": "CREATOR",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "RentalCompany"
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/2",
                                    "value": {
                                        "namespace": "",
                                        "role": "APPROVER",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "RentalCompany"
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/3",
                                    "value": {
                                        "namespace": "",
                                        "role": "WITNESS",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "RentalCompany"
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

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

A continuación, realizamos una consulta para verificar si la solicitud se encuentra en espera de aprobación en el sistema. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/approval-requests?status=pending'
```

Ahora copiaremoss del campo "**id**" y aceptaremos la solicitud actualización de la gobernanza de la siguiente manera:

```bash
    curl 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{"state": "RespondedAccepted"}'
```
:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

Finalmente, consultamos la gobernanza de manera que podemos apreciar com el campo "**sn**" ha incrementado en una unidad, así como la inclusión de este nuevo miembro en la gobernanza. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

### Adding Cleaning Company to governance
A continuación procedemos a incluir como miembro de la gobernanza a la compañía de limpieza. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data '{
            "request": {
                "Fact": {
                    "subject_id": "{{GOVERNANCE-ID}}",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/1",
                                    "value": {
                                        "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
                                        "name": "CleaningCompany"
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/4",
                                    "value": {
                                        "namespace": "",
                                        "role": "WITNESS",
                                        "schema": {
                                            "ID": "governance"
                                        },
                                        "who": {
                                            "NAME": "CleaningCompany"
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/5",
                                    "value": {
                                        "namespace": "",
                                        "role": "WITNESS",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "CleaningCompany"
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/6",
                                    "value": {
                                        "namespace": "",
                                        "role": "APPROVER",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "CleaningCompany"
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/7",
                                    "value": {
                                        "namespace": "",
                                        "role": "ISSUER",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "CleaningCompany"
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

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

A continuación, realizamos una consulta para verificar si la solicitud se encuentra en espera de aprobación en el sistema. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/approval-requests?status=pending'
```

Ahora copiaremoss del campo "**id**" y aceptaremos la solicitud actualización de la gobernanza de la siguiente manera:

```bash
    curl 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{"state": "RespondedAccepted"}'
```
:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

Antes de continuar, para que el nodo pueda acceder e interactuar con la gobernanza, debemos otorgar permisos previos a la gobernanza. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3001/api/allowed-subjects/{{GOVERNANCE-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "providers": []
        }'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

Por último, consultamos la gobernanza desde el nuevo nodo y deberíamos apreciar com el campo "**sn**" ha incrementado su valor, así como la inclusión de este nuevo miembro en la gobernanza. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3001/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

### Adding Security Company to governance
Ahora, ya sólo nos queda por incluir el último miembro que conformará parte de la gobernanza en este caso de uso, la compañía de seguros. Para incluirlo, seguimos la misma dinámica que con los apartados anteriores, por lo que debemos ejecutar el siguiente comando:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data '{
            "request": {
                "Fact": {
                    "subject_id": "{{GOVERNANCE-ID}}",
                    "payload": {
                        "Patch": {
                            "data": [
                                {
                                    "op": "add",
                                    "path": "/members/2",
                                    "value": {
                                    "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
                                    "name": "SecurityCompany"
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/8",
                                    "value": {
                                        "namespace": "",
                                        "role": "WITNESS",
                                        "schema": {
                                            "ID": "governance"
                                        },
                                        "who": {
                                            "NAME": "SecurityCompany"
                                        }
                                    }
                                },                        
                                {
                                    "op": "add",
                                    "path": "/roles/9",
                                    "value": {
                                        "namespace": "",
                                        "role": "EVALUATOR",
                                        "schema": {
                                            "ID": "governance"
                                        },
                                        "who": {
                                            "NAME": "SecurityCompany"
                                        }
                                    }
                                },
                                {
                                    "op": "add",
                                    "path": "/roles/10",
                                    "value": {
                                        "namespace": "",
                                        "role": "WITNESS",
                                        "schema": {
                                            "ID": "car"
                                        },
                                        "who": {
                                            "NAME": "SecurityCompany"
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

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

A continuación, realizamos una consulta para verificar si la solicitud se encuentra en espera de aprobación en el sistema. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/approval-requests?status=pending'
```

Ahora copiaremoss del campo "**id**" y aceptaremos la solicitud actualización de la gobernanza de la siguiente manera:

```bash
    curl 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{"state": "RespondedAccepted"}'
```
:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

Ahora, nos encontramos con la misma situación que la compañía de limpieza, ya que este nuevo nodo, tampoco podrá acceder e interactuar con la gobernanza sin ser preautorizado. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3002/api/allowed-subjects/{{GOVERNANCE-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "providers": []
        }'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

Por último, consultamos la gobernanza desde el nuevo nodo y deberíamos apreciar com el campo "**sn**" ha incrementado su valor, así como la inclusión de este nuevo miembro en la gobernanza. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3002/api/subjects/{{GOVERNANCE-ID}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

## Creating subject and transferring ownership
### Creation of the subject
Llegados a este punto, ya tenemos todo lo necesario para comenzar a crear sujetos de tipo "**Car**". Por lo tanto, nuestro nodo denominado Rental Company será el encargado de llevar a cabo esta acción. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data '{
            "request": {
                "Create": {
                "governance_id": "{{GOVERNANCE-ID}}",
                "schema_id": "car",
                "namespace": "",
                "name": "Car"
                }
            }
        }'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** por el hash identificador de la gobernanza anteriormente guardado.

:::

Una vez ejecutado el comando anterior, se nos devolverá el "**request-id**" del evento.

:::tip

Se recomienda guardar el "**request_id**" devuelto por la petición anterior.

:::

A continuación, ejecutamos el siguiente comando para comprobar el estado de la petición:

```bash
    curl 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{REQUEST-ID}}** por el valor copiado anteriormente.

:::

Este último comando, proporcionará una respuesta como la siguiente:

```bash
    {
      "id": {{REQUEST-ID}},
      "subject_id": {{GOVERNANCE-ID}},
      "sn": 0,
      "state": "finished",
      "success": true
    }
```

:::tip

Se recomienda guardar el "**subject_id**" correspondiente a la gobernanza, ya que será necesario en los próximos pasos del tutorial.

:::

A continuación, ejecutamos el siguiente comando para comprobar que se ha creado correctamente:

```bash
    curl 'http://localhost:3000/api/subjects/{{PREVIUS-ID}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

### Subject transfer
Una vez creado el sujeto, ya estamos listos para transferir la propiedad de este sujeto al coche. Cabe destacar que cualquier sujeto que no haya finalizado su ciclo de vida en **TAPLE** puede ser transferido a un nuevo propietario, ya sea este parte o no de la gobernanza donde se haya declarado el sujeto.

Hasta ahora, al crear el sujeto, no hemos tenido que declarar su clave pública, aunque siempre hemos tenido la posibilidad de hacerlo. Sin embargo, en este caso, es diferente porque, durante la transferencia, el nuevo propietario debe generar una clave pública con la que quiera gestionar el sujeto que se le transfiere. Para ello, debemos ejecutar lo siguiente:

```bash
    curl 'http://localhost:3003/api/keys' \
        --form 'algorithm="Ed25519"'
```

:::tip

Se recomienda guardar el campo "**public_key**", ya que será necesario para pasos posteriores en el tutorial.

:::

A continuacióm, debemos activar la preautorización de la gobernanza desde la que queremos transferir el sujeto, especificando dentro de los providers el hash identificador del nodo propietario de la misma. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3003/api/allowed-subjects/{{GOVERNANCE-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "providers": ["EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs"]
        }'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{GOVERNANCE-ID}}** el hash identificador de la gobernanza anteriormente guardado.

:::

Ahora, activamos la preautorización del sujeto que queremos transferir a este nuevo nodo. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3003/api/allowed-subjects/{{SUBJECT-ID}}' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "providers": []
        }'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** por el hash identificador del sujeto anteriormente guardado.

:::

Ahora, necesitamos firmar la solicitud de transferencia con el material del nuevo nodo. 

A continuación, tenemos que firmar la solicitud de transferencia con el material criptográfico del nuevo nodo. Para ello, utilizaremos nuestra herramienta **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** y ejecutaremos el siguiente comando:

```bash
    taple-sign "6d3103185146ecedd28d3759df693999927e69aacb55e1aa9fe7ac17555da81c" '{"Transfer":{"subject_id":"{{SUBJECT-ID}}","public_key":"{{PUBLIC-KEY}}"}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** por el hash identificador del sujeto creado con anterioridad y **{{PUBLIC_KEY}}** por la clave anteriormente guardada.

:::

A continuación, el resultado de la ejecución anterior, lo incluiremos en la siguiente solicitud:

```bash
    curl 'http://localhost:3000/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw {{SIGN-RESULT}}
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SIGN-RESULT}}** por el resultado de la petición anterior.

:::

Quedándonos algo similar a la siguiente:

```bash
    curl 'http://localhost:3000/api/event-requests' \
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

Por último, el nuevo nodo debería ser capaz de visualizar este nuevo sujeto y verificar que es el nuevo propietario del mismo. Para ello, ejecutamos el siguiente comando:

```bash
    curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}''
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** el hash identificador del sujeto anteriormente guardado.

:::