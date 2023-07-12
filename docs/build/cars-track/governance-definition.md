# Governance definition

Cada uno de los participantes mencionados en el apartado anterior, tendrían un nodo TAPLE. De ellos, las tres empresas compartirían la gobernanza, ya que son los participantes conocidos en el caso de uso. Los clientes y el personal de limpieza serán externos ya que no se sabrá su identidad hasta que se registren en la empresa en cuestión. De la misma manera, cada cerradura es externa, ya que no se sabrá la identidad del vehículo hasta su adquisión por la empresa de renting. Cada una de las cerraduras gestionaría un sujeto cuyo estado estaría reflejado en las cerraduras de los vehículos. Para reflejar el estado del sujeto será necesario la definición de un esquema el cual contendrá el estado del vehículo así como el identificador del conductor autorizado para su uso. 

De esta forma, cuando un usuario desee utilizar un vehículo, realizará una petición mediante una invocación externa al sujeto del mismo. Si el identificador de la petición coincide con el identificador del conductor autorizado para su uso especificado en el estado, el vehículo se abrirá. En caso contrario, la compañía de renting y la compañía de limpieza/mantenimiento recibirían una solicitud de aprobación sobre la invocación realizada de manera que cada una de ellas deberá comprobar en sus sistemas internos si la identidad del emisor es válida. Si se trata de un cliente, la compañía de renting votará afirmativamente y se desbloqueará la cerradura. De la misma manera, si se trata del personal de limpieza, la compañía de limpieza votará afirmativamente y por tanto podrá acceder al vehículo. Por el contrario, si se trata de un invocador no válido, ambos rechazarán la solicitud, denegando el acceso al vehículo. Cabe destacar que la fase de aproabción la podemos resolver de dos maneras posibles:
- La fase de aprobación se implemente en un contrato inteligente.
- La fase de aprobación la puede realizar un agente externo denominado aprobador.

## Roles of the participants
- Compañía de alquiler: Propietaria de la gobernanza y evaludadora de los contratos inteligentes.
- Compañía de limpieza: Aprobador del personal de limpieza y testigo para tener un registro de las limpiezas realizadas.
- Compañía de seguros: Testigo para tener un control del uso del coche y evaluadora para garantizar la seguridad de la red. 

## Creamos la gobernanza

Para crear la gobernanza simplemente debemos definir el siguiente json:

```json
    {
      "request": {
        "Create": {
          "governance_id": "",
          "schema_id": "governance",
          "namespace": "",
          "name": "Access_control"
        }
      }
    }
```

## Añadimos miembros y roles

El primer miembro que debemos añadir a la gobernanza es la compañía de reting, ya que es la propietaria de la misma. Para ello, debemos definir el siguiente json:

```json
    {
        "request": {
            "Fact": {
              "subject_id": "Identificador de la gobernanza",
                "payload": {
                    "Patch": {
                          "data": [
                            {
                                "op": "add",
                                "path": "/members/0",
                                "value": {
                                    "id": "Identificador del nodo de la compañía de renting",
                                    "name": "RentalCompany"
                                }
                            },
                        ]
                    }
                }
            }
        }
    }
```

A continuación, procedemos a añadir a la compañía de limpieza/mantenimiento a la gobernanza así como a la definición de sus roles. Para ello, debemos definir el siguiente json:

```json
    {
        "request": {
            "Fact": {
                "subject_id": "Identificador de la gobernanza",
                "payload": {
                    "Patch": {
                        "data": [{
                            "op": "add",
                            "path": "/members/1",
                            "value": {
                            "id": "Identificador del nodo de la compañía de renting",
                            "name": "CleaningCompany"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/1",
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
                            "path": "/roles/2",
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
                            "path": "/roles/3",
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
                        }]
                    }
                }
            }
        }
    }
```

Por último, ya sólo nos quedaría añadir a la gobernanaza y especificar los roles de la compañía de seguros. Para ello, debemos definir el siguiente json:

```json
    {
       "request": {
            "Fact": {
                "subject_id": "Identificador de la gobernanza",
                "payload": {
                    "Patch": {
                        "data": [{
                            "op": "add",
                            "path": "/members/2",
                            "value": {
                            "id": "Identificador del nodo de la compañía de renting",
                            "name": "SecurityCompany"
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
                                    "NAME": "SecurityCompany"
                                }
                            }
                        },                        
                        {
                            "op": "add",
                            "path": "/roles/5",
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
                            "path": "/roles/6",
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
                        }]
                    }
                }
            }
        }
    }

```

:::caution

Tenga en cuenta que deberá modificar el campo "**subject_id**" y "**id**" por los identificadores hash correspondientes a su despliegue.

:::

## Creamos el contrato

## Definimos el schema
El esquema que utilizaremos para llevar el control de acceso a los vehículos es el siguiente:

```json
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
    }
```

## Añadimos el schema y el contrato inteligente

Para añadir el schema y el contrato inteligente debemos definir el siguiente json:

```json
    {
        "request": {
            "Fact": {
                "subject_id": "Identificador de la gobernanza",
                "payload": {
                    "Patch": {
                        "data": [{
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
                                    "raw": "bW9kIHNkazsNCnVzZSBzZXJkZTo6e0Rlc2VyaWFsaXplLCBTZXJpYWxpemV9Ow0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSwgUGFydGlhbEVxKV0gDQplbnVtIEdyYXBlIHsNCiAgICBDYWJlcm5ldFNhdXZpZ25vbiwNCiAgICBDaGFyZG9ubmF5LA0KICAgIFBpbm90Tm9pciwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFRlbXBlcmF0dXJlQ29udHJvbCB7DQogICAgcHViIGxhc3RfY2hlY2s6IHUzMiwNCiAgICBwdWIgdGVtcGVyYXR1cmVfb2s6IGJvb2wsDQp9DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0NCnN0cnVjdCBTdGF0ZSB7DQogICAgcHViIGhhcnZlc3Q6IHUzMiwNCiAgICBwdWIgZ3JhcGU6IE9wdGlvbjxHcmFwZT4sDQogICAgcHViIG9yaWdpbjogU3RyaW5nLA0KICAgIHB1YiBvcmdhbmljX2NlcnRpZmllZDogT3B0aW9uPGJvb2w+LA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9jb250cm9sOiBUZW1wZXJhdHVyZUNvbnRyb2wsDQp9DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUpXQ0KZW51bSBTdGF0ZUV2ZW50IHsNCiAgICBJbml0IHsNCiAgICAgICAgaGFydmVzdDogdTMyLA0KICAgICAgICBncmFwZTogU3RyaW5nLA0KICAgICAgICBvcmlnaW46IFN0cmluZywNCiAgICB9LA0KICAgIFRlbXBlcmF0dXJlQ29udHJvbCB7DQogICAgICAgIHRlbXBlcmF0dXJlOiBmMzIsDQogICAgICAgIHRpbWVzdGFtcDogdTMyLA0KICAgIH0sDQogICAgT3JnYW5pY0NlcnRpZmljYXRpb24gew0KICAgICAgICBmZXJ0aWxpemVyc19jb250cm9sOiBib29sLA0KICAgICAgICBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIGFuYWx5dGljczogYm9vbCwNCiAgICAgICAgYWRkaXRpb25hbF9pbmZvOiBTdHJpbmcsDQogICAgfSwNCn0NCg0KY29uc3QgVEVNUEVSQVRVUkVfUkFOR0U6IChmMzIsIGYzMikgPSAoMTAuMCwgMTYuMCk7DQoNCiNbbm9fbWFuZ2xlXQ0KcHViIHVuc2FmZSBmbiBtYWluX2Z1bmN0aW9uKHN0YXRlX3B0cjogaTMyLCBldmVudF9wdHI6IGkzMiwgaXNfb3duZXI6IGkzMikgLT4gdTMyIHsNCiAgICBzZGs6OmV4ZWN1dGVfY29udHJhY3Qoc3RhdGVfcHRyLCBldmVudF9wdHIsIGlzX293bmVyLCBjb250cmFjdF9sb2dpYykNCn0NCg0KZm4gY29udHJhY3RfbG9naWMoDQogICAgY29udGV4dDogJnNkazo6Q29udGV4dDxTdGF0ZSwgU3RhdGVFdmVudD4sDQogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8U3RhdGU+LA0KKSB7DQogICAgbGV0IHN0YXRlID0gJm11dCBjb250cmFjdF9yZXN1bHQuZmluYWxfc3RhdGU7DQogICAgbWF0Y2ggJmNvbnRleHQuZXZlbnQgew0KICAgICAgICBTdGF0ZUV2ZW50OjpJbml0IHsNCiAgICAgICAgICAgIGhhcnZlc3QsDQogICAgICAgICAgICBncmFwZSwNCiAgICAgICAgICAgIG9yaWdpbiwNCiAgICAgICAgfSA9PiB7DQogICAgICAgICAgICBpZiBjb250ZXh0LmlzX293bmVyICYmICFjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZSkgeyAvLyBTb2xvIGxvIHB1ZWRkZSBoYWNlciBlbCBwcm9waWV0YXJpb8OnDQogICAgICAgICAgICAgICAgbGV0IGdyYXBlID0gbWF0Y2ggZ3JhcGUuYXNfc3RyKCkgew0KICAgICAgICAgICAgICAgICAgICAiQ2FiZXJuZXRTYXV2aWdub24iID0+IFNvbWUoR3JhcGU6OkNhYmVybmV0U2F1dmlnbm9uKSwNCiAgICAgICAgICAgICAgICAgICAgIkNoYXJkb25uYXkiID0+IFNvbWUoR3JhcGU6OkNoYXJkb25uYXkpLA0KICAgICAgICAgICAgICAgICAgICAiUGlub3ROb2lyIiA9PiBTb21lKEdyYXBlOjpQaW5vdE5vaXIpLA0KICAgICAgICAgICAgICAgICAgICBfID0+IE5vbmUsDQogICAgICAgICAgICAgICAgfTsNCiAgICAgICAgICAgICAgICBpZiBncmFwZS5pc19zb21lKCkgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS5oYXJ2ZXN0ID0gKmhhcnZlc3Q7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmdyYXBlID0gZ3JhcGU7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbiA9IG9yaWdpbi50b19zdHJpbmcoKTsNCiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpUZW1wZXJhdHVyZUNvbnRyb2wgew0KICAgICAgICAgICAgdGVtcGVyYXR1cmUsDQogICAgICAgICAgICB0aW1lc3RhbXAsDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY29udGV4dC5pc19vd25lciAmJiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZSkgew0KICAgICAgICAgICAgICAgIGlmIGNoZWNrX3RlbXBlcmF0dXJlX2luX3JhbmdlKCp0ZW1wZXJhdHVyZSkNCiAgICAgICAgICAgICAgICAgICAgJiYgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC50ZW1wZXJhdHVyZV9vaw0KICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rID0gZmFsc2U7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wubGFzdF9jaGVjayA9ICp0aW1lc3RhbXA7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgICAgICBmZXJ0aWxpemVyc19jb250cm9sLA0KICAgICAgICAgICAgcGVzdGljaWRlc19jb250cm9sLA0KICAgICAgICAgICAgYW5hbHl0aWNzLA0KICAgICAgICAgICAgYWRkaXRpb25hbF9pbmZvLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbWF0Y2ggc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgew0KICAgICAgICAgICAgICAgICAgICBTb21lKG9yZ2FuaWNfY2VyaWZpZWQpID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIG9yZ2FuaWNfY2VyaWZpZWQNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhY2hlY2tfaXNfb3JnYW5pYygNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICphbmFseXRpY3MsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgTm9uZSA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiBjaGVja19pc19vcmdhbmljKCpmZXJ0aWxpemVyc19jb250cm9sLCAqcGVzdGljaWRlc19jb250cm9sLCAqYW5hbHl0aWNzKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKHRydWUpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUoZmFsc2UpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgIH0NCn0NCg0KZm4gY2hlY2tfc3ViamVjdF9oYXNfYmVlbl9pbml0aWF0ZWQoc3RhdGU6ICZTdGF0ZSkgLT4gYm9vbCB7DQogICAgbGV0IGluaXRpYWxfZ3JhcGUgPSBtYXRjaCBzdGF0ZS5ncmFwZSB7DQogICAgICAgIFNvbWUoXykgPT4gZmFsc2UsDQogICAgICAgIE5vbmUgPT4gdHJ1ZSwNCiAgICB9Ow0KICAgIGlmIHN0YXRlLmhhcnZlc3QgPT0gMCAmJiBpbml0aWFsX2dyYXBlICYmIHN0YXRlLm9yaWdpbiA9PSBmb3JtYXQhKCIiKSB7DQogICAgICAgIHJldHVybiBmYWxzZTsNCiAgICB9DQogICAgcmV0dXJuIHRydWU7DQp9DQoNCmZuIGNoZWNrX3RlbXBlcmF0dXJlX2luX3JhbmdlKHRlbXBlcmF0dXJlOiBmMzIpIC0+IGJvb2wgew0KICAgIGlmIHRlbXBlcmF0dXJlID49IFRFTVBFUkFUVVJFX1JBTkdFLjAgJiYgdGVtcGVyYXR1cmUgPD0gVEVNUEVSQVRVUkVfUkFOR0UuMSB7DQogICAgICAgIHJldHVybiB0cnVlOw0KICAgIH0NCiAgICByZXR1cm4gZmFsc2U7DQp9DQoNCmZuIGNoZWNrX2lzX29yZ2FuaWMoZmVydGlsaXplcnNfY29udHJvbDogYm9vbCwgcGVzdGljaWRlc19jb250cm9sOiBib29sLCBhbmFseXRpY3M6IGJvb2wpIC0+IGJvb2wgew0KICAgIGlmIGZlcnRpbGl6ZXJzX2NvbnRyb2wgJiYgcGVzdGljaWRlc19jb250cm9sICYmIGFuYWx5dGljcyB7DQogICAgICAgIHJldHVybiB0cnVlOw0KICAgIH0NCiAgICByZXR1cm4gZmFsc2U7DQp9"
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
                        }]
                    }
                }
            }
        }
    }
```

:::caution

Tenga en cuenta que deberá modificar el campo "**subject_id**" por el identificador hash correspondiente a su gobernanza.

:::