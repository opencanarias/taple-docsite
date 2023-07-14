# Creating a subject

Llegados a este punto, ya tenemos todo lo necesario para comenzar a crear sujetos de tipo *Wine*. Por lo tanto, nuestro nodo denominado **Premium Wines** será el encargado de llevar a cabo esta acción.

Comenzaremos creando un nuevo material criptográfico en este nodo para nuestro sujeto. Ejecutaremos el siguiente comando:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/keys' \
--form 'algorithm="Ed25519"'
```

Guardamos el resultado de la ejecución y lo pegamos en la siguiente ejecución que es la encargada de generar el evento de **génesis** sobre el sujeto:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "",
        "public_key": {{SUBJECT-MC}},
        "name": "Wine"
        }
    }
}'
```

Lanzamos lo siguiente sobre el mismo nodo para comprobar que se ha creado correctamente:

```bash
curl --silent --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Copiaremos su `subject_id` ya que lo necesitarmeos para actualizarlo.

Lanzaremos nuestro primer evento para la modificación del estado inicial con el método `Init`:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{SUBJECT-ID}},
            "payload": {
                "Init": {
                    "harvest": 1,
                    "grape": "CabernetSauvignon",
                    "origin": "spain"
                }
            }
        }
    }
}'
```

Si todo ha ido correctamente, al ejecutar el siguiente comando el sujeto debería de verse como actualizado: 

```bash
curl --silent --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Su sn debería ser 1, `harvest` sería *1*, `grape` sería *CabernetSauvignon* y `origin` sería *spain*.