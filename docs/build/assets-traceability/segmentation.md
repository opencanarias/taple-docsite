# Segmentation

Actualmente, hemos logrado tener testigos y aprobadores para los sujetos de tipo *Wine*. Sin embargo, surge un problema con uno de los nodos que hemos agregado, **SFO**, ya que este es específico de España y no nos interesa que pueda influir en decisiones que se tomen en otros países.

Para abordar esta necesidad, surge el concepto de segmentación por namespace. Esta permite definir permisos y roles específicos para determinados namespaces, permitiendo que únicamente los nodos que consideremos como validos puedan acceder a una información u otra en función de nuestros intereses.

Con este nuevo conocimiento, es hora de seguir adaptando nuestro caso de uso. *PremiumWines* no solo tiene viñedos en España, sino también en Francia, lo que le permite producir botellas con diferentes orígenes. Como ya sabemos, en España existe un organismo (**SFO**) capaz de aprobar el análisis de calidad del producto, pero en el caso de Francia no es así, por lo que esta responsabilidad recae en **WFO**.

Para lograr lo que proponemos, debemos realizar algunos cambios en el esquema actual. Estos son:

- *PremiumWines* debe poder crear sujetos en ambos países, por lo tanto, debe ser creador en los *namespaces* "Spain" y "France".
- *WFO* pasa a ser testigo y aprobador de los vinos tanto en España como en Francia.
- Las invocaciones externas deben poder realizarse tanto en España como en Francia.
- *SFO* solo será aprobador y testigo de los vinos españoles.

Procederemos a modificar las propiedades de la gobernanza para implementar estos cambios. Para ello, seguiremos estos pasos:

Comenzaremos comprobando el aspecto de los roles de la gobernanza antes de realizar estos cambios:

```json
{
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
        },
        {
            "namespace": "",
            "role": "CREATOR",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "PremiumWines"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "VALIDATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "EVALUATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        },
        {
            "namespace": "",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        }
    ]
}
```

Realizaremos los cambios en los roles declarados en la gobernanza. A continuación, se muestra cómo deberían quedar las propiedades:

```json
{
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
        },
        {
            "namespace": "Spain",
            "role": "CREATOR",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "PremiumWines"
            }
        },
        {
            "namespace": "France",
            "role": "CREATOR",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "PremiumWines"
            }
        },
        {
            "namespace": "",
            "role": "APPROVER",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "VALIDATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "",
            "role": "EVALUATOR",
            "schema": {
                "ID": "governance"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "France",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "France",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "WFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        },
        {
            "namespace": "France",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        },
        {
            "namespace": "Spain",
            "role": "WITNESS",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        },
        {
            "namespace": "Spain",
            "role": "APPROVER",
            "schema": {
                "ID": "Wine"
            },
            "who": {
                "NAME": "SFO"
            }
        }
    ]
}
```

Para generar dichos cambios, utilizaremos nuestra herramienta [**TAPLE-Patch**](../../learn/client-tools.md#taple-patch) siguiendo este procedimiento:

```bash title="Another terminal"
taple-patch "{\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WPO\"}},{\"namespace\":\"\",\"role\":\"CREATOR\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"PremiumWines\"}},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"VALIDATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"EVALUATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"ISSUER\",\"schema\":{\"ID\":\"Wine\"},\"who\":\"NOT_MEMBERS\"},{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"SFO\"}},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"SFO\"}}]}" "{\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WPO\"}},{\"namespace\":\"Spain\",\"role\":\"CREATOR\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"PremiumWines\"}},{\"namespace\":\"France\",\"role\":\"CREATOR\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"PremiumWines\"}},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"VALIDATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"EVALUATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"Spain\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"France\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"Spain\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"France\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"Spain\",\"role\":\"ISSUER\",\"schema\":{\"ID\":\"Wine\"},\"who\":\"NOT_MEMBERS\"},{\"namespace\":\"France\",\"role\":\"ISSUER\",\"schema\":{\"ID\":\"Wine\"},\"who\":\"NOT_MEMBERS\"},{\"namespace\":\"Spain\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"SFO\"}},{\"namespace\":\"Spain\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"SFO\"}}]}"
```

El resultado obtenido será:

```json
[
    {
        "op": "replace",
        "path": "/roles/2/namespace",
        "value": "Spain"
    },
    {
        "op": "replace",
        "path": "/roles/3/namespace",
        "value": "France"
    },
    {
        "op": "replace",
        "path": "/roles/3/role",
        "value": "CREATOR"
    },
    {
        "op": "replace",
        "path": "/roles/3/schema/ID",
        "value": "Wine"
    },
    {
        "op": "replace",
        "path": "/roles/3/who/NAME",
        "value": "PremiumWines"
    },
    {
        "op": "replace",
        "path": "/roles/4/role",
        "value": "APPROVER"
    },
    {
        "op": "replace",
        "path": "/roles/5/role",
        "value": "VALIDATOR"
    },
    {
        "op": "replace",
        "path": "/roles/6/role",
        "value": "EVALUATOR"
    },
    {
        "op": "replace",
        "path": "/roles/6/schema/ID",
        "value": "governance"
    },
    {
        "op": "replace",
        "path": "/roles/7/namespace",
        "value": "Spain"
    },
    {
        "op": "replace",
        "path": "/roles/7/role",
        "value": "WITNESS"
    },
    {
        "op": "replace",
        "path": "/roles/7/who",
        "value": {
        "NAME": "WFO"
        }
    },
    {
        "op": "replace",
        "path": "/roles/8/namespace",
        "value": "France"
    },
    {
        "op": "replace",
        "path": "/roles/8/who/NAME",
        "value": "WFO"
    },
    {
        "op": "replace",
        "path": "/roles/9/namespace",
        "value": "Spain"
    },
    {
        "op": "replace",
        "path": "/roles/9/who/NAME",
        "value": "WFO"
    },
    {
        "op": "add",
        "path": "/roles/10",
        "value": {
        "namespace": "France",
        "role": "APPROVER",
        "schema": {
            "ID": "Wine"
        },
        "who": {
            "NAME": "WFO"
        }
        }
    },
    {
        "op": "add",
        "path": "/roles/11",
        "value": {
        "namespace": "Spain",
        "role": "ISSUER",
        "schema": {
            "ID": "Wine"
        },
        "who": "NOT_MEMBERS"
        }
    },
    {
        "op": "add",
        "path": "/roles/12",
        "value": {
        "namespace": "France",
        "role": "ISSUER",
        "schema": {
            "ID": "Wine"
        },
        "who": "NOT_MEMBERS"
        }
    },
    {
        "op": "add",
        "path": "/roles/13",
        "value": {
        "namespace": "Spain",
        "role": "WITNESS",
        "schema": {
            "ID": "Wine"
        },
        "who": {
            "NAME": "SFO"
        }
        }
    },
    {
        "op": "add",
        "path": "/roles/14",
        "value": {
        "namespace": "Spain",
        "role": "APPROVER",
        "schema": {
            "ID": "Wine"
        },
        "who": {
            "NAME": "SFO"
        }
        }
    }
]
```

Luego, invocaremos el método del contrato de gobernanza responsable de actualizar sus propiedades:

```bash title="Node: WPO"
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
                            "op": "replace",
                            "path": "/roles/2/namespace",
                            "value": "Spain"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/namespace",
                            "value": "France"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/role",
                            "value": "CREATOR"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/schema/ID",
                            "value": "Wine"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/3/who/NAME",
                            "value": "PremiumWines"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/4/role",
                            "value": "APPROVER"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/5/role",
                            "value": "VALIDATOR"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/6/role",
                            "value": "EVALUATOR"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/6/schema/ID",
                            "value": "governance"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/7/namespace",
                            "value": "Spain"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/7/role",
                            "value": "WITNESS"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/7/who",
                            "value": {
                                "NAME": "WFO"
                            }
                        },
                        {
                            "op": "replace",
                            "path": "/roles/8/namespace",
                            "value": "France"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/8/who/NAME",
                            "value": "WFO"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/9/namespace",
                            "value": "Spain"
                        },
                        {
                            "op": "replace",
                            "path": "/roles/9/who/NAME",
                            "value": "WFO"
                        },
                        {
                            "op": "add",
                            "path": "/roles/10",
                            "value": {
                                "namespace": "France",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": {
                                    "NAME": "WFO"
                                }
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/11",
                            "value": {
                                "namespace": "Spain",
                                "role": "ISSUER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": "NOT_MEMBERS"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/12",
                            "value": {
                                "namespace": "France",
                                "role": "ISSUER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": "NOT_MEMBERS"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/13",
                            "value": {
                                "namespace": "Spain",
                                "role": "WITNESS",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": {
                                    "NAME": "SFO"
                                }
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/14",
                            "value": {
                                "namespace": "Spain",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "Wine"
                                },
                                "who": {
                                    "NAME": "SFO"
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

Después de enviar la solicitud de actualización de la gobernanza, obtendremos la notificación de aprobación. Para ello, ejecutaremos el siguiente comando:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copiaremos el valor del campo `id` de la notificación y solicitaremos la aprobación a **WPO** y **WFO**:

```bash title="Node: WPO"
curl --request PATCH 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

```bash title="Node: WFO"
curl --request PATCH 'http://localhost:3002/api/approval-requests/{{PREVIUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Si todo ha ido correctamente, al ejecutar el siguiente comando, el `sn` de la gobernanza debería ser 7 y se mostrarán los cambios realizados anteriormente:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

```json
{
    "subject_id": {{GOVERNANCE-ID}},
    "governance_id": "",
    "sn": 7,
    "public_key": "E8tVWEasubIp7P9fzk_HttNCsABymV9m9xEPAfr-QV7M",
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
            },
            {
                "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
                "name": "PremiumWines"
            },
            {
                "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
                "name": "WFO"
            },
            {
                "id": "EaHFQQ0ADaLuRgQsIZxYNU8BAj_cBub7MZdpoZsRf-GY",
                "name": "SFO"
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
            },
            {
                "approve": {
                    "quorum": "MAJORITY"
                },
                "evaluate": {
                    "quorum": "MAJORITY"
                },
                "id": "Wine",
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
            },
            {
                "namespace": "Spain",
                "role": "CREATOR",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "PremiumWines"
                }
            },
            {
                "namespace": "France",
                "role": "CREATOR",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "PremiumWines"
                }
            },
            {
                "namespace": "",
                "role": "APPROVER",
                "schema": {
                    "ID": "governance"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "",
                "role": "VALIDATOR",
                "schema": {
                    "ID": "governance"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "",
                "role": "EVALUATOR",
                "schema": {
                    "ID": "governance"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "WITNESS",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "France",
                "role": "WITNESS",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "APPROVER",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "France",
                "role": "APPROVER",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "WFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "ISSUER",
                "schema": {
                    "ID": "Wine"
                },
                "who": "NOT_MEMBERS"
            },
            {
                "namespace": "France",
                "role": "ISSUER",
                "schema": {
                    "ID": "Wine"
                },
                "who": "NOT_MEMBERS"
            },
            {
                "namespace": "Spain",
                "role": "WITNESS",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "SFO"
                }
            },
            {
                "namespace": "Spain",
                "role": "APPROVER",
                "schema": {
                    "ID": "Wine"
                },
                "who": {
                    "NAME": "SFO"
                }
            }
        ],
        "schemas": [
            {
                "contract": {
                    "raw": "dXNlIHRhcGxlX3NjX3J1c3QgYXMgc2RrOw0KdXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lLCBQYXJ0aWFsRXEpXSANCmVudW0gR3JhcGUgew0KICAgIENhYmVybmV0U2F1dmlnbm9uLA0KICAgIENoYXJkb25uYXksDQogICAgUGlub3ROb2lyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICBwdWIgbGFzdF9jaGVjazogdTMyLA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9vazogYm9vbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFN0YXRlIHsNCiAgICBwdWIgaGFydmVzdDogdTMyLA0KICAgIHB1YiBncmFwZTogT3B0aW9uPEdyYXBlPiwNCiAgICBwdWIgb3JpZ2luOiBTdHJpbmcsDQogICAgcHViIG9yZ2FuaWNfY2VydGlmaWVkOiBPcHRpb248Ym9vbD4sDQogICAgcHViIHRlbXBlcmF0dXJlX2NvbnRyb2w6IFRlbXBlcmF0dXJlQ29udHJvbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIFN0YXRlRXZlbnQgew0KICAgIEluaXQgew0KICAgICAgICBoYXJ2ZXN0OiB1MzIsDQogICAgICAgIGdyYXBlOiBTdHJpbmcsDQogICAgICAgIG9yaWdpbjogU3RyaW5nLA0KICAgIH0sDQogICAgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICAgICAgdGVtcGVyYXR1cmU6IGYzMiwNCiAgICAgICAgdGltZXN0YW1wOiB1MzIsDQogICAgfSwNCiAgICBPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIHBlc3RpY2lkZXNfY29udHJvbDogYm9vbCwNCiAgICAgICAgYW5hbHl0aWNzOiBib29sLA0KICAgICAgICBhZGRpdGlvbmFsX2luZm86IFN0cmluZywNCiAgICB9LA0KfQ0KDQpjb25zdCBURU1QRVJBVFVSRV9SQU5HRTogKGYzMiwgZjMyKSA9ICgxMC4wLCAxNi4wKTsNCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwNCiAgICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sDQopIHsNCiAgICBsZXQgc3RhdGUgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIFN0YXRlRXZlbnQ6OkluaXQgew0KICAgICAgICAgICAgaGFydmVzdCwNCiAgICAgICAgICAgIGdyYXBlLA0KICAgICAgICAgICAgb3JpZ2luLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNvbnRleHQuaXNfb3duZXIgJiYgIWNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbGV0IGdyYXBlID0gbWF0Y2ggZ3JhcGUuYXNfc3RyKCkgew0KICAgICAgICAgICAgICAgICAgICAiQ2FiZXJuZXRTYXV2aWdub24iID0+IFNvbWUoR3JhcGU6OkNhYmVybmV0U2F1dmlnbm9uKSwNCiAgICAgICAgICAgICAgICAgICAgIkNoYXJkb25uYXkiID0+IFNvbWUoR3JhcGU6OkNoYXJkb25uYXkpLA0KICAgICAgICAgICAgICAgICAgICAiUGlub3ROb2lyIiA9PiBTb21lKEdyYXBlOjpQaW5vdE5vaXIpLA0KICAgICAgICAgICAgICAgICAgICBfID0+IE5vbmUsDQogICAgICAgICAgICAgICAgfTsNCiAgICAgICAgICAgICAgICBpZiBncmFwZS5pc19zb21lKCkgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS5oYXJ2ZXN0ID0gKmhhcnZlc3Q7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmdyYXBlID0gZ3JhcGU7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbiA9IG9yaWdpbi50b19zdHJpbmcoKTsNCiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpUZW1wZXJhdHVyZUNvbnRyb2wgew0KICAgICAgICAgICAgdGVtcGVyYXR1cmUsDQogICAgICAgICAgICB0aW1lc3RhbXAsDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY29udGV4dC5pc19vd25lciAmJiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZSkgew0KICAgICAgICAgICAgICAgIGlmIGNoZWNrX3RlbXBlcmF0dXJlX2luX3JhbmdlKCp0ZW1wZXJhdHVyZSkNCiAgICAgICAgICAgICAgICAgICAgJiYgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC50ZW1wZXJhdHVyZV9vaw0KICAgICAgICAgICAgICAgIHsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rID0gZmFsc2U7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wubGFzdF9jaGVjayA9ICp0aW1lc3RhbXA7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgICBTdGF0ZUV2ZW50OjpPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgICAgICBmZXJ0aWxpemVyc19jb250cm9sLA0KICAgICAgICAgICAgcGVzdGljaWRlc19jb250cm9sLA0KICAgICAgICAgICAgYW5hbHl0aWNzLA0KICAgICAgICAgICAgYWRkaXRpb25hbF9pbmZvLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgbWF0Y2ggc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgew0KICAgICAgICAgICAgICAgICAgICBTb21lKG9yZ2FuaWNfY2VyaWZpZWQpID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIG9yZ2FuaWNfY2VyaWZpZWQNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhY2hlY2tfaXNfb3JnYW5pYygNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICphbmFseXRpY3MsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQ0KICAgICAgICAgICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgTm9uZSA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICBpZiBjaGVja19pc19vcmdhbmljKCpmZXJ0aWxpemVyc19jb250cm9sLCAqcGVzdGljaWRlc19jb250cm9sLCAqYW5hbHl0aWNzKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKHRydWUpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUoZmFsc2UpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5hcHByb3ZhbF9yZXF1aXJlZCA9IHRydWU7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfQ0KfQ0KDQpmbiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZTogJlN0YXRlKSAtPiBib29sIHsNCiAgICBsZXQgaW5pdGlhbF9ncmFwZSA9IG1hdGNoIHN0YXRlLmdyYXBlIHsNCiAgICAgICAgU29tZShfKSA9PiBmYWxzZSwNCiAgICAgICAgTm9uZSA9PiB0cnVlLA0KICAgIH07DQogICAgaWYgc3RhdGUuaGFydmVzdCA9PSAwICYmIGluaXRpYWxfZ3JhcGUgJiYgc3RhdGUub3JpZ2luID09IGZvcm1hdCEoIiIpIHsNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgIH0NCiAgICByZXR1cm4gdHJ1ZTsNCn0NCg0KZm4gY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UodGVtcGVyYXR1cmU6IGYzMikgLT4gYm9vbCB7DQogICAgaWYgdGVtcGVyYXR1cmUgPj0gVEVNUEVSQVRVUkVfUkFOR0UuMCAmJiB0ZW1wZXJhdHVyZSA8PSBURU1QRVJBVFVSRV9SQU5HRS4xIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0NCg0KZm4gY2hlY2tfaXNfb3JnYW5pYyhmZXJ0aWxpemVyc19jb250cm9sOiBib29sLCBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsIGFuYWx5dGljczogYm9vbCkgLT4gYm9vbCB7DQogICAgaWYgZmVydGlsaXplcnNfY29udHJvbCAmJiBwZXN0aWNpZGVzX2NvbnRyb2wgJiYgYW5hbHl0aWNzIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0="
                },
                "id": "Wine",
                "initial_value": {
                    "grape": null,
                    "harvest": 0,
                    "organic_certified": null,
                    "origin": "",
                    "temperature_control": {
                        "last_check": 0,
                        "temperature_ok": true
                    }
                },
                "schema": {
                    "additionalProperties": false,
                    "description": "Representation of a bottle of wine",
                    "properties": {
                        "grape": {
                            "description": "Type of grape",
                            "enum": [
                                "CabernetSauvignon",
                                "Chardonnay",
                                "PinotNoir",
                                null
                            ],
                            "type": [
                                "string",
                                "null"
                            ]
                        },
                        "harvest": {
                            "description": "Harvest number",
                            "type": "integer"
                        },
                        "organic_certified": {
                            "description": "Certificate authenticating whether it is organic or not",
                            "type": [
                                "boolean",
                                "null"
                            ]
                        },
                        "origin": {
                            "description": "Origin of the grape",
                            "type": "string"
                        },
                        "temperature_control": {
                            "additionalProperties": false,
                            "description": "Values to be changed in the temperature control event",
                            "properties": {
                                "last_check": {
                                    "description": "Timestamp of last check",
                                    "type": "integer"
                                },
                                "temperature_ok": {
                                    "description": "Value that corroborates whether the wine cold chain has been complied with",
                                    "type": "boolean"
                                }
                            },
                            "required": [
                                "last_check",
                                "temperature_ok"
                            ],
                            "type": "object"
                        }
                    },
                    "required": [
                        "harvest",
                        "grape",
                        "origin",
                        "organic_certified",
                        "temperature_control"
                    ],
                    "type": "object"
                }
            }
        ]
    },
    "active": true
}
```

Una vez que hemos implementado la segmentación por *namespace*, procederemos a realizar pruebas para comprobar su correcto funcionamiento.

Crearemos una botella de vino francesa utilizando el siguiente comando:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "France",
        "name": "Wine"
        }
    }
}'
```

Al realizar esta acción, recibiremos un `request-id`, el cual debemos copiar y utilizar en el siguiente comando:

```bash title="Node: Premium wines"
curl --request GET 'http://localhost:3001/api/event-requests/{{REQUEST-ID}}/state'
```

Este último comando nos proporcionará una respuesta como la siguiente:

```json
{
    "id": {{REQUEST-ID}},
    "subject_id": {{SUBJECT-ID}},
    "sn": 0,
    "state": "finished",
    "success": true
}
```

:::note
Guarda el `subject_id` del **sujeto**, ya que lo necesitaremos en pasos posteriores del tutorial.
:::

Para comprobar nuestra nueva botella de vino ejecutaremos el siguiente comando:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 0,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "France",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": null,
        "harvest": 0,
        "organic_certified": null,
        "origin": "",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```

:::caution
Debemos copiar su `subject_id`, ya que será necesario para los siguientes pasos.
:::

Inicializaremos la botella antes de probar la emisión del evento de certificación:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{SUBJECT-ID}},
            "payload": {
                "Init": {
                    "harvest": 2,
                    "grape": "Chardonnay",
                    "origin": "france"
                }
            }
        }
    }
}'
```

Ahora, al ejecutar nuevamente la consulta del sujeto, debería tener un valor de `sn` igual a 1 y mostrar la información previamente mencionada:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 1,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "France",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "Chardonnay",
        "harvest": 2,
        "organic_certified": null,
        "origin": "france",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```

Probaremos a emitir el evento de certificación. Para ello, generaremos la firma del evento que deseamos emitir utilizando [TAPLE-Sign](../../learn/client-tools.md#taple-sign), con el siguiente formato, reemplazando `subject_id` por el identificador de nuestro sujeto de vino:

```bash title="Another terminal"
taple-sign "f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326" "{\"Fact\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"payload\":{\"OrganicCertification\":{\"fertilizers_control\":false,\"pesticides_control\":false,\"analytics\":false,\"additional_info\":\"test\"}}}}"
```

El resultado de esta ejecución se incluirá en la siguiente solicitud:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw 'SIGN-RESULT'
```

Esto nos dará como resultado algo similar a lo siguiente:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
        "subject_id": {{SUBJECT-ID}},
        "payload": {
            "OrganicCertification": {
            "additional_info": "test",
            "analytics": false,
            "fertilizers_control": false,
            "pesticides_control": false
            }
        }
        }
    },
    "signature": {
        "signer": "EzzmRjc8CtjzHu3MKmuTgnmOTgrJlYZj1D2DCZ9nN7Vk",
        "timestamp": 1689858060412988735,
        "value": "SEiF6C6zhFxzxs56nY6vk4ySTl7zvpV2gExTiiGlbxKI-HVvizL6eYmjV9IjE8GJMzOIQkok8rUehRVK9cNgSfCg"
    }
}'
```

Si la segmentación se ha realizado correctamente, el mensaje de aprobación para este sujeto solo debería haber sido recibido por **WFO**. Para consultarlo, ejecutaremos el siguiente comando:

```bash title="Node: WFO"
curl --request GET 'http://localhost:3002/api/approval-requests?status=pending'
```

Copiaremos su `id` y lo utilizaremos para aceptarla mediante la siguiente solicitud:

```bash title="Node: WFO"
curl --request PATCH 'http://localhost:3002/api/approval-requests/{{PREVIUS-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Ahora, al consultar una vez más el sujeto, debería mostrarse un valor de `sn` igual a 2 y el campo `organic_certified` debería ser `false`:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

```json
{
    "subject_id": "JGptSjgfJyXX4AZekYBAbcFDZNmJQKexenqxu8A4UKvE",
    "governance_id": "JqqF3qMDn6aNjdcExVzRQ4yn9-zQVXLJ6guGFT2RIz60",
    "sn": 2,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "France",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "Chardonnay",
        "harvest": 2,
        "organic_certified": false,
        "origin": "france",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```