# External invocations

Surge una nueva necesidad: queremos que alguien externo a la gobernanza se encargue de ejecutar el método `organic-certification`, ya que se trata de un agente externo al sistema el que se debe encargar de esta acción y vemos la importancia de su inclusión.

Para lograr esto, comenzaremos realizando modificaciones en la gobernanza para incluir este nuevo rol. La ejecución debe seguir los siguientes pasos:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
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

Una vez lanzada la solicitud de actualización de la gobernanza, debemos obtener una vez más la petición de aprobación, para ello ejecutaremos:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Y copiaremos el valor del campo `id`, pero esta vez, será necesaria tambien la aprobación por parte de **WFO**, por ello tendremos que ejecutar las siguientes dos acciones:

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

Con todo esto, al lanzar una vez más una consulta sobre nuestra gobernanza debería de aparecernos su correspondiente nueva versión:

```bash
curl --silent --silent --location --request GET 'http://localhost:3002/api/subjects?subject_type=governances'
```

Llegó el momento de probar las ejecuciones de manera externa. Para ello, debemos generar la firma del evento que queremos emitir. Utilizaremos `taple-sign` con el siguiente comando, reemplazando `subject_id` por el identificador de nuestro sujeto de *Wine*:

```bash
cargo run "f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326" "{\"Fact\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"payload\":{\"OrganicCertification\":{\"fertilizers_control\":true,\"pesticides_control\":true,\"analytics\":true,\"additional_info\":\"test\"}}}}"
```

El resultado de esta ejecución lo incluiremos en la siguiente petición:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw 'SIGN-RESULT'
```

Para comprobar que la ejecución ha ido correctamente podemos lanzar el siguiente comando:

```bash
curl --silent --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

* **Nota**: El `sn` del sujeto debería ser 2.