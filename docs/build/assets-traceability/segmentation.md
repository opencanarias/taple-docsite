# Segmentation

Actualmente, hemos logrado tener testigos y aprobadores para los sujetos de tipo *Wine*. Sin embargo, surge un problema con uno de los nodos que hemos agregado, **SFO**, ya que este es específico de España y no nos interesa que pueda influir en decisiones que se tomen en otros países como Francia o Japón.

Para abordar esta necesidad, surge el concepto de segmentación por namespace, que permite definir permisos y roles específicos para determinados namespaces, evitando así que los nodos que consideremos irrelevantes para una segmentación determinada puedan influir en ella.

Con este nuevo conocimiento, es hora de seguir adaptando nuestro caso de uso. *PremiumWines* no solo tiene viñedos en España, sino también en Francia, lo que le permite producir botellas con diferentes orígenes. Como ya sabemos, en España existe un organismo (**SFO**) capaz de aprobar el análisis de calidad del producto, pero en el caso de Francia no es así, por lo que esta responsabilidad recae en **WFO**.

Para lograr lo que proponemos, debemos realizar algunos cambios en el esquema actual. Estos son:

- *PremiumWines* debe poder crear sujetos en ambos países, por lo tanto, debe ser creador en los *namespaces* "Spain" y "France".
- *WFO* pasa a ser testigo y aprobador de los vinos tanto en España como en Francia.
- Las invocaciones externas deben poder realizarse tanto en España como en Francia.
- *SFO* solo será aprobador y testigo de los vinos españoles.

La ejecución del siguiente comando logrará todo lo mencionado anteriormente:

```bash
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

* **Nota**: Se ha modificado el orden de algunos elementos en el esquema para que, al realizar consultas, se visualicen con mayor claridad.

Una vez que se haya enviado la solicitud de actualización de la gobernanza, debemos obtener nuevamente la notificación de aprobación. Para hacerlo, ejecutaremos el siguiente comando:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copiaremos el valor del campo `id`, pero en esta ocasión será necesaria también la aprobación por parte de **WFO**. Por lo tanto, realizaremos las siguientes dos acciones:

```bash
curl --silent --location --request PATCH 'http://localhost:3000/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

```bash
curl --silent --location --request PATCH 'http://localhost:3002/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Si todo ha ido correctamente, al ejecutar el siguiente comando, el valor de `sn` de la gobernanza debería ser 7 y deberían aparecer los cambios mencionados anteriormente:

```bash
curl --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

Para verificar que la segmentación por *namespace* funciona correctamente, comenzaremos creando una botella de vino francesa. Para hacerlo, ejecutaremos el siguiente comando para generar su nuevo material criptográfico:

```bash
curl --location --request POST 'http://localhost:3001/api/keys' \
--form 'algorithm="Ed25519"'
```

Y a continuación, ejecutaremos el siguiente comando para crear la botella de vino:
```bash
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

Si todo ha ido correctamente, al ejecutar el siguiente comando, deberías ver la nueva botella creada junto con la botella transferida anteriormente al **ciudadano**:

```bash
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Debemos copiar su `subject_id`, ya que será necesario para los siguientes pasos.

Antes de probar la emisión del evento de certificación para comprobar la segmentación, debemos inicializar la botella. Para hacerlo, ejecutaremos el siguiente comando:

```bash
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

Ahora, al ejecutar nuevamente la consulta del sujeto, debería tener un valor de `sn` igual a 1 y mostrar la información previamente mencionada:

```bash
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Probaremos a emitir el evento de certificación. Para ello, generaremos la firma del evento que deseamos emitir utilizando `taple-sign`, con el siguiente formato, reemplazando `subject_id` por el identificador de nuestro sujeto de vino:

```bash
cargo run "f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326" "{\"Fact\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"payload\":{\"OrganicCertification\":{\"fertilizers_control\":false,\"pesticides_control\":false,\"analytics\":false,\"additional_info\":\"test\"}}}}"
```

El resultado de esta ejecución se incluirá en la siguiente solicitud:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw 'SIGN-RESULT'
```

Si la segmentación se ha realizado correctamente, el mensaje de aprobación para este sujeto solo debería haber sido recibido por **WFO**. Para consultarlo, ejecutaremos el siguiente comando:

```bash
curl --location --request GET 'http://localhost:3002/api/approval-requests?status=pending'
```

Copiaremos su `id` y lo utilizaremos para aceptarla mediante la siguiente solicitud:

```bash
curl --location --request PATCH 'http://localhost:3002/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Ahora, al consultar una vez más el sujeto, debería mostrarse un valor de `sn` igual a 2 y el campo `organic_certified` debería ser `false`.

```bash
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```