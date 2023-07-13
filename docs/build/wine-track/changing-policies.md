# Changing policies

En el paso anterior hemos visto como unicamente necesitamos que WFO apruebe o rechace un evento de certificación para que se actualice su estado y es logico ya que únicamente necesitamos que alguna de las entidades dispuestas a ello se encargue de realizar esta acción. Pero actualmente en el caso de españa no ocurre, ya que necesitamos que tanto WFO como SFO voten una aprobación para que se emita el evento.

Es por ello que en este apartado del tutorial proponemos actualizar las políticas de gobernanza de manera que los sujetos vino solo necesiten la aprobació de una de las entidades anteriores para considerar valida la emisión del evento.

Comenzaremos una vez más modificando el esquema de la gobernanza, pero esta vez actualizando el apartado policies para el esquema "Wine":

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

Si todo ha ido correctamente al ejecutar el siguiente comando el sn de la gobernanza debería ser 8 y deberían aparecer los cambios comentados anteriormente:

```
curl --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

Ahora crearemos un nuevo sujeto de botella de vino en españa para probar nuestro cambio, primero generamos un nuevo controlador para este sujeto:

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
        "namespace": "Spain",
        "public_key": {{NEW-MC}},
        "name": "Wine"
        }
    }
}'
```