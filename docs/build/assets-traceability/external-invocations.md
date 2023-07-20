# External invocations

Se ha planteado una nueva necesidad: la certificación del origen orgánico del vino. Para llevar a cabo esta tarea, un laboratorio deberá visitar nuestras tierras o viñedos y realizar una serie de análisis y pruebas que determinarán si el origen del vino es orgánico o no. Sin embargo, existen muchas empresas que ofrecen este servicio, y no es eficiente incorporarlas todas en la gobernanza o exigirles que tengan su propio nodo.

Para resolver este problema, emplearemos una nueva función de Taple denominada *invocaciones externas*. Para llevar a cabo estas invocaciones en la red, no es necesario tener un nodo completo; será suficiente con tener acceso a uno de los nodos existentes y contar con un par de claves que nos permitan firmar la petición para certificar la identidad de la invocación.

Para lograr esta actualización, se llevarán a cabo modificaciones en los roles dentro de las propiedades de la gobernanza. Primero, revisaremos su estado actual:

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
        }
    ]
}
```

El cambio que deseamos realizar se aplicará al apartado de *roles* y será el siguiente:

```json
{
    "roles": [

        ...

        {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        }
    ]
}
```

Utilizaremos nuestra herramienta [**TAPLE-Patch**](../../learn/client-tools.md#taple-patch) para generar dichos cambios, siguiendo el siguiente procedimiento:

```bash title="Another terminal"
taple-patch "{\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WPO\"}},{\"namespace\":\"\",\"role\":\"CREATOR\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"PremiumWines\"}},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"VALIDATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"EVALUATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}}]}" "{\"roles\":[{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"governance\"},\"who\":\"MEMBERS\"},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WPO\"}},{\"namespace\":\"\",\"role\":\"CREATOR\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"PremiumWines\"}},{\"namespace\":\"\",\"role\":\"APPROVER\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"VALIDATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"EVALUATOR\",\"schema\":{\"ID\":\"governance\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"WITNESS\",\"schema\":{\"ID\":\"Wine\"},\"who\":{\"NAME\":\"WFO\"}},{\"namespace\":\"\",\"role\":\"ISSUER\",\"schema\":{\"ID\":\"Wine\"},\"who\":\"NOT_MEMBERS\"}]}"
```

Una vez completado el proceso, obtendremos el siguiente resultado:

```json
[
    {
        "op": "add",
        "path": "/roles/7",
        "value": {
            "namespace": "",
            "role": "ISSUER",
            "schema": {
                "ID": "Wine"
            },
            "who": "NOT_MEMBERS"
        }
    }
]
```

A continuación, procederemos a invocar el método del contrato de gobernanza responsable de actualizar sus propiedades. Para ello, ejecutaremos lo siguiente:

```bash title="Node: WPO"
curl --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{GOVERNANCE-ID}},
            "payload": {
                "Patch": {
                    "data": [{
                        "op": "add",
                        "path": "/roles/7",
                        "value": {
                            "namespace": "",
                            "role": "ISSUER",
                            "schema": {
                                "ID": "Wine"
                            },
                            "who": "NOT_MEMBERS"
                        }
                    }]
                }
            }
        }
    }
}'
```

Después de lanzar la solicitud de actualización de la gobernanza, debemos obtener nuevamente una solicitud de aprobación:

```bash title="Node: WPO"
curl --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copiaremos el valor del campo `id`. Sin embargo, en esta ocasión, será necesaria también la aprobación por parte de **WFO**. Por lo tanto, realizaremos las siguientes dos acciones:

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

Con todas estas acciones, al consultar nuestra gobernanza una vez más, debería aparecer la nueva versión correspondiente:

```bash title="Node: WPO"
curl --silent --request GET 'http://localhost:3002/api/subjects?subject_type=governances'
```

```json
{
    "subject_id": {{GOVERNANCE-ID}},
    "governance_id": "",
    "sn": 5,
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
            }
        ],
        "schemas": [
            {
                "contract": {
                    "raw": "dXNlIHRhcGxlX3NjX3J1c3QgYXMgc2RrOw0KdXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lLCBQYXJ0aWFsRXEpXSANCmVudW0gR3JhcGUgew0KICAgIENhYmVybmV0U2F1dmlnbm9uLA0KICAgIENoYXJkb25uYXksDQogICAgUGlub3ROb2lyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICBwdWIgbGFzdF9jaGVjazogdTMyLA0KICAgIHB1YiB0ZW1wZXJhdHVyZV9vazogYm9vbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFN0YXRlIHsNCiAgICBwdWIgaGFydmVzdDogdTMyLA0KICAgIHB1YiBncmFwZTogT3B0aW9uPEdyYXBlPiwNCiAgICBwdWIgb3JpZ2luOiBTdHJpbmcsDQogICAgcHViIG9yZ2FuaWNfY2VydGlmaWVkOiBPcHRpb248Ym9vbD4sDQogICAgcHViIHRlbXBlcmF0dXJlX2NvbnRyb2w6IFRlbXBlcmF0dXJlQ29udHJvbCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIFN0YXRlRXZlbnQgew0KICAgIEluaXQgew0KICAgICAgICBoYXJ2ZXN0OiB1MzIsDQogICAgICAgIGdyYXBlOiBTdHJpbmcsDQogICAgICAgIG9yaWdpbjogU3RyaW5nLA0KICAgIH0sDQogICAgVGVtcGVyYXR1cmVDb250cm9sIHsNCiAgICAgICAgdGVtcGVyYXR1cmU6IGYzMiwNCiAgICAgICAgdGltZXN0YW1wOiB1MzIsDQogICAgfSwNCiAgICBPcmdhbmljQ2VydGlmaWNhdGlvbiB7DQogICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2w6IGJvb2wsDQogICAgICAgIHBlc3RpY2lkZXNfY29udHJvbDogYm9vbCwNCiAgICAgICAgYW5hbHl0aWNzOiBib29sLA0KICAgICAgICBhZGRpdGlvbmFsX2luZm86IFN0cmluZywNCiAgICB9LA0KfQ0KDQpjb25zdCBURU1QRVJBVFVSRV9SQU5HRTogKGYzMiwgZjMyKSA9ICgxMC4wLCAxNi4wKTsNCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwNCiAgICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sDQopIHsNCiAgICBsZXQgc3RhdGUgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIFN0YXRlRXZlbnQ6OkluaXQgew0KICAgICAgICAgICAgaGFydmVzdCwNCiAgICAgICAgICAgIGdyYXBlLA0KICAgICAgICAgICAgb3JpZ2luLA0KICAgICAgICB9ID0+IHsNCiAgICAgICAgICAgIGlmIGNvbnRleHQuaXNfb3duZXIgJiYgIWNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7IC8vIFNvbG8gbG8gcHVlZGRlIGhhY2VyIGVsIHByb3BpZXRhcmlvw6cNCiAgICAgICAgICAgICAgICBsZXQgZ3JhcGUgPSBtYXRjaCBncmFwZS5hc19zdHIoKSB7DQogICAgICAgICAgICAgICAgICAgICJDYWJlcm5ldFNhdXZpZ25vbiIgPT4gU29tZShHcmFwZTo6Q2FiZXJuZXRTYXV2aWdub24pLA0KICAgICAgICAgICAgICAgICAgICAiQ2hhcmRvbm5heSIgPT4gU29tZShHcmFwZTo6Q2hhcmRvbm5heSksDQogICAgICAgICAgICAgICAgICAgICJQaW5vdE5vaXIiID0+IFNvbWUoR3JhcGU6OlBpbm90Tm9pciksDQogICAgICAgICAgICAgICAgICAgIF8gPT4gTm9uZSwNCiAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgICAgIGlmIGdyYXBlLmlzX3NvbWUoKSB7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLmhhcnZlc3QgPSAqaGFydmVzdDsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZ3JhcGUgPSBncmFwZTsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JpZ2luID0gb3JpZ2luLnRvX3N0cmluZygpOw0KICAgICAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIFN0YXRlRXZlbnQ6OlRlbXBlcmF0dXJlQ29udHJvbCB7DQogICAgICAgICAgICB0ZW1wZXJhdHVyZSwNCiAgICAgICAgICAgIHRpbWVzdGFtcCwNCiAgICAgICAgfSA9PiB7DQogICAgICAgICAgICBpZiBjb250ZXh0LmlzX293bmVyICYmIGNoZWNrX3N1YmplY3RfaGFzX2JlZW5faW5pdGlhdGVkKHN0YXRlKSB7DQogICAgICAgICAgICAgICAgaWYgY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UoKnRlbXBlcmF0dXJlKQ0KICAgICAgICAgICAgICAgICAgICAmJiBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLnRlbXBlcmF0dXJlX29rDQogICAgICAgICAgICAgICAgew0KICAgICAgICAgICAgICAgICAgICBzdGF0ZS50ZW1wZXJhdHVyZV9jb250cm9sLmxhc3RfY2hlY2sgPSAqdGltZXN0YW1wOw0KICAgICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICAgIHN0YXRlLnRlbXBlcmF0dXJlX2NvbnRyb2wudGVtcGVyYXR1cmVfb2sgPSBmYWxzZTsNCiAgICAgICAgICAgICAgICAgICAgc3RhdGUudGVtcGVyYXR1cmVfY29udHJvbC5sYXN0X2NoZWNrID0gKnRpbWVzdGFtcDsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgICAgIFN0YXRlRXZlbnQ6Ok9yZ2FuaWNDZXJ0aWZpY2F0aW9uIHsNCiAgICAgICAgICAgIGZlcnRpbGl6ZXJzX2NvbnRyb2wsDQogICAgICAgICAgICBwZXN0aWNpZGVzX2NvbnRyb2wsDQogICAgICAgICAgICBhbmFseXRpY3MsDQogICAgICAgICAgICBhZGRpdGlvbmFsX2luZm8sDQogICAgICAgIH0gPT4gew0KICAgICAgICAgICAgaWYgY2hlY2tfc3ViamVjdF9oYXNfYmVlbl9pbml0aWF0ZWQoc3RhdGUpIHsNCiAgICAgICAgICAgICAgICBtYXRjaCBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCB7DQogICAgICAgICAgICAgICAgICAgIFNvbWUob3JnYW5pY19jZXJpZmllZCkgPT4gew0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgb3JnYW5pY19jZXJpZmllZA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmICFjaGVja19pc19vcmdhbmljKA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqZmVydGlsaXplcnNfY29udHJvbCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKnBlc3RpY2lkZXNfY29udHJvbCwNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKmFuYWx5dGljcywNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICApDQogICAgICAgICAgICAgICAgICAgICAgICB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUub3JnYW5pY19jZXJ0aWZpZWQgPSBTb21lKGZhbHNlKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgICAgICBOb25lID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIGNoZWNrX2lzX29yZ2FuaWMoKmZlcnRpbGl6ZXJzX2NvbnRyb2wsICpwZXN0aWNpZGVzX2NvbnRyb2wsICphbmFseXRpY3MpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5vcmdhbmljX2NlcnRpZmllZCA9IFNvbWUodHJ1ZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLm9yZ2FuaWNfY2VydGlmaWVkID0gU29tZShmYWxzZSk7DQogICAgICAgICAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9DQogICAgfQ0KfQ0KDQpmbiBjaGVja19zdWJqZWN0X2hhc19iZWVuX2luaXRpYXRlZChzdGF0ZTogJlN0YXRlKSAtPiBib29sIHsNCiAgICBsZXQgaW5pdGlhbF9ncmFwZSA9IG1hdGNoIHN0YXRlLmdyYXBlIHsNCiAgICAgICAgU29tZShfKSA9PiBmYWxzZSwNCiAgICAgICAgTm9uZSA9PiB0cnVlLA0KICAgIH07DQogICAgaWYgc3RhdGUuaGFydmVzdCA9PSAwICYmIGluaXRpYWxfZ3JhcGUgJiYgc3RhdGUub3JpZ2luID09IGZvcm1hdCEoIiIpIHsNCiAgICAgICAgcmV0dXJuIGZhbHNlOw0KICAgIH0NCiAgICByZXR1cm4gdHJ1ZTsNCn0NCg0KZm4gY2hlY2tfdGVtcGVyYXR1cmVfaW5fcmFuZ2UodGVtcGVyYXR1cmU6IGYzMikgLT4gYm9vbCB7DQogICAgaWYgdGVtcGVyYXR1cmUgPj0gVEVNUEVSQVRVUkVfUkFOR0UuMCAmJiB0ZW1wZXJhdHVyZSA8PSBURU1QRVJBVFVSRV9SQU5HRS4xIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0NCg0KZm4gY2hlY2tfaXNfb3JnYW5pYyhmZXJ0aWxpemVyc19jb250cm9sOiBib29sLCBwZXN0aWNpZGVzX2NvbnRyb2w6IGJvb2wsIGFuYWx5dGljczogYm9vbCkgLT4gYm9vbCB7DQogICAgaWYgZmVydGlsaXplcnNfY29udHJvbCAmJiBwZXN0aWNpZGVzX2NvbnRyb2wgJiYgYW5hbHl0aWNzIHsNCiAgICAgICAgcmV0dXJuIHRydWU7DQogICAgfQ0KICAgIHJldHVybiBmYWxzZTsNCn0="
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

Ahora, procederemos a probar las ejecuciones de manera externa. Para ello, generaremos la firma del evento que queremos emitir utilizando [**TAPLE-Sign**](../../learn/client-tools.md#taple-sign) con el siguiente comando. Reemplazaremos `subject_id` con el identificador de nuestro sujeto de *Wine*:

```bash title="Another terminal"
taple-sign "f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326" "{\"Fact\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"payload\":{\"OrganicCertification\":{\"fertilizers_control\":true,\"pesticides_control\":true,\"analytics\":true,\"additional_info\":\"test\"}}}}"
```

El resultado de esta ejecución lo incluiremos en la siguiente petición:

```bash title="Node: Premium wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw {{PREVIUS-RESULT}}
```

Esto nos dará como resultado algo similar a lo siguiente:

```bash title="Node: Premium wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{SUBJECT-ID}},
            "payload": {
                "OrganicCertification": {
                "additional_info": "test",
                "analytics": true,
                "fertilizers_control": true,
                "pesticides_control": true
                }
            }
        }
    },
    "signature": {
        "signer": "EzzmRjc8CtjzHu3MKmuTgnmOTgrJlYZj1D2DCZ9nN7Vk",
        "timestamp": 1689842680899014786,
        "value": "SEE-Mx-t9xXHCy6SPllVADy3-LrWk91N6btpAPFGAqi8eie3kAF4Q0WokMtt0Z_A7gIeik7b_64R_asyTavsL4Dg"
    }
}'
```

Para verificar que la ejecución ha sido exitosa, podemos lanzar el siguiente comando:

Si todo ha ido correctamente, al ejecutar el siguiente comando, el sujeto debería actualizarse con un valor `sn` de 2 y reflejar los cambios mencionados anteriormente:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 2,
    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",
    "namespace": "",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "CabernetSauvignon",
        "harvest": 1,
        "organic_certified": true,
        "origin": "spain",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```