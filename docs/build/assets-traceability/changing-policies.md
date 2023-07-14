# Changing policies

En el paso anterior hemos visto que actualmente se requiere que tanto **WFO** como **SFO** aprueben un evento de certificación para que se actualice su estado. Sin embargo, en el caso de España, esto no es necesario y solo necesitamos la aprobación de una de las entidades.

Por lo tanto, en esta sección del tutorial proponemos actualizar las políticas de gobernanza para que los sujetos de vino solo requieran la aprobación de una de las entidades mencionadas para considerar válida la emisión del evento.

Comenzaremos modificando nuevamente el esquema de gobernanza, esta vez actualizando la sección de políticas para el esquema *Wine*:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
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
                            "path": "/policies/1/approve/quorum",
                            "value": {
                                "FIXED": 1
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```


Una vez que hayamos enviado la solicitud de actualización de la gobernanza, deberemos obtener nuevamente la solicitud de aprobación. Para hacerlo, ejecutaremos el siguiente comando:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copiaremos el valor del campo `id`, pero en esta ocasión también será necesaria la aprobación por parte de **WFO**. Por lo tanto, realizaremos las siguientes dos acciones:

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

Si todo ha ido correctamente, al ejecutar el siguiente comando, el valor de `sn` de la gobernanza debería ser 8 y deberían aparecer los cambios mencionados anteriormente:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

Ahora crearemos un nuevo sujeto de botella de vino en España para probar nuestro cambio. Primero generaremos un nuevo controlador para este sujeto:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/keys' \
--form 'algorithm="Ed25519"'
```

Y a continuación, ejecutaremos el siguiente comando para crear la botella:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "Spain",
        "public_key": {{NEW-MC}},
        "name": "Wine"
        }
    }
}'
```

Antes de poder lanzar un evento de certificación, debemos inicializar la botella. Para hacerlo, ejecutaremos el siguiente comando:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{SUBJECT-ID}},
            "payload": {
                "Init": {
                    "harvest": 3,
                    "grape": "PinotNoir",
                    "origin": "spain"
                }
            }
        }
    }
}'
```

Al ejecutar nuevamente la consulta del sujeto, debería tener un valor de `sn` igual a 1 y mostrar la información anteriormente mencionada:

```bash
curl --silent --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Ahora probaremos a emitir el evento de certificación. Para ello, generaremos la firma del evento que deseamos emitir utilizando `taple-sign`, con el siguiente formato, reemplazando `subject_id` por el identificador de nuestro sujeto *Wine*:

```bash
cargo run "f855c6736463a65f515afe7b85d1418c096ed73852b42bbe4c332eb43d532326" "{\"Fact\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"payload\":{\"OrganicCertification\":{\"fertilizers_control\":false,\"pesticides_control\":false,\"analytics\":false,\"additional_info\":\"test\"}}}}"
```

El resultado de esta ejecución se incluirá en la siguiente solicitud:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw 'SIGN-RESULT'
```

Tras realizarla, debería aparecer la solicitud de aprobación a los nodos **WFO** y **SFO**. Puedes comprobarlo de la siguiente manera:

```bash
curl --silent --location --request GET 'http://localhost:3002/api/approval-requests?status=pending'
```

```bash
curl --silent --location --request GET 'http://localhost:3003/api/approval-requests?status=pending'
```

Intentaremos aprobarlo en uno de los dos nodos, por ejemplo, en **SFO**:

```bash
curl --silent --location --request PATCH 'http://localhost:3003/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Si todo ha ido correctamente al lanzar la petición de consulta de sujetos debería aparecernos con `sn` 2 y el `organic_certified` a false:

```bash
curl --silent --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```