# Segmentation

Actualmente hemos conseguido que existan testigos y aprobadores de sujetos de tipo "Wine", pero este tiene un problema con uno de los últimos nodos que hemos añadido SFO, ya que este es de caracter Español y no nos interesaria por ejemplo que pudiese afectar en las decisiones que se tomasen en otros pasises como podrían ser Francia o Japón.

Para poder atender a esta necesidad surge un concepto denominado segmentación por namespace, este permite que se puedan definir permisos y roles concretos sobre determinados namespace, evitando así que nodos que no consideremos relevante para una determianda segmentación puedan influir sobre estos.

Con estos nuevos conocimientos ha llegado el momento de seguir adaptando nuestro caso de uso, PremiumWines no solamente tiene viñedos en España, sino que tambien tiene de estos en Francia, lo que le permite producir botellas con diferentes orígenes. Como ya sabemos, en España existe un organismo capaz de aprobar el analisis de calidad del producto (SFO), pero en el caso de Francia no es así, es por ello que esta responsabilidad le queda relegada a WFO.

Para conseguir lo que proponemos debemos realizar ciertos cambios en el esquema actual, estos son:

* *PremiumWines* debe poder crear sujetos en ambos paises, para ello debe ser creador en los *namespace* *Spain* y *France*.
* *WFO* pasa a ser testigo y aprobador de los vinos en España y Francia.
* Las *invocaciones externas* deben poder realizarse tanto en España como en Francia.
* *SFO* solo será aprobador y testigo de los "Wines" españoles.

La ejecución del siguiente comando conseguirá todo lo mencionado anteriormente:

```
curl --location --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": "JwjfsGzzG9pin4HahUX4qUS8XoQB0o4ntrF_17I7zORQ",
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

* **Nota**: Se han modificado el orden de algunos elementos en el esquema para que cuando se traten de consultar se vean con mayor claridad.

Una vez lanzada la solicitud de actualización de la gobernanza, debemos obtener una vez más la petición de aprobación, para ello ejecutaremos:

```
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Y copiaremos el valor del campo `id`, pero esta vez, será necesaria tambien la aprobación por parte de WFO, por ello tendremos que ejecutar las siguientes dos acciones:

```
curl --silent --location --request PATCH 'http://localhost:3000/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

```
curl --silent --location --request PATCH 'http://localhost:3002/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Si todo ha ido correctamente al ejecutar el siguiente comando el sn de la gobernanza debería ser 7 y deberían aparecer los cambios comentados anteriormente:

```
curl --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

Para comprobar que la segmentación por namespace funciona correctamente, comenzaremos por crear una botella francesa, para ello ejecutaremos el siguiente comando para crear su nuevo material criptográfico:

```
curl --location --request POST 'http://localhost:3001/api/keys' \
--form 'algorithm="Ed25519"'
```

Y a continuación este otro para crear la botella:

```
curl --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "France",
        "public_key": {{NEW-MC}},
        "name": "Wine"
        }
    }
}'
```

Si todo ha ido correctamente, al ejecutar el siguiente comando debería aparecer esta nueva botella junto con la tranferida anteriormente al ciudadano:

```
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Debemos copiar su `subject_id` ya que será necesario para los siguientes pasos.

Antes de probar la emisión del evento de certificación (para comprobar la segmentación) tenemos que inicializar la botella, para ello ejecutaremos:

```
curl --location --request POST 'http://localhost:3001/api/event-requests' \
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

Ahora al ejecutar de nuevo la consulta del sujeto este debería de tener un sn 1 y la información anterior:

```
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Ahora probaremos a emitir el evento de certificación. Para ello, generaremos la firma del evento que deseamos emitir utilizando `taple-sign`, con el siguiente formato, reemplazando `subject_id` por el identificador de nuestro sujeto de vino:

```
cargo run "f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326" "{\"Fact\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"payload\":{\"OrganicCertification\":{\"fertilizers_control\":false,\"pesticides_control\":false,\"analytics\":false,\"additional_info\":\"test\"}}}}"
```

El resultado de esta ejecución lo incluiremos en la siguiente petición:

```
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw 'SIGN-RESULT'
```

Si la segmentación ha ido correctamente, el mensaje para la aprobación de este sujeto solo debería haberle llegado a WFO, para consultarlo ejecutaremos:

```
curl --location --request GET 'http://localhost:3002/api/approval-requests?status=pending'
```

Compiaremos su `id` y la aceptaremos con la siguiente petición:

```
curl --location --request PATCH 'http://localhost:3002/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Ahora al consultar una ultima vez el sujeto debería aparecer su `sn` a 2 y la variable `organic_certified` a false:

```
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```