# Creating a governance

Una vez creado el primer nodo que actuará como dueño del caso de uso, es necesario formalizar el entorno en el que se llevará a cabo dicho caso de uso. Esta formalización se realiza a través de la implementación de una estructura conocida como gobernanza. A continuación, se describirán los pasos necesarios para su creación.

Para comenzar, generamos el material criptográfico necesario para la gobernanza en el nodo previamente creado:

```bash
curl --silent  --location --request POST 'http://localhost:3000/api/keys' \
--form 'algorithm="Ed25519"'
```

Copiamos el resultado generado por la petición anterior y lo sustituimos en `public_key`:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
  "request": {
    "Create": {
      "governance_id": "",
      "schema_id": "governance",
      "namespace": "",
      "public_key": {{MC-GENERATED}},
      "name": "wine_track"
    }
  }
}'
```

Comprobamos si la gobernanza se ha creado con éxito:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```

Guardamos el `id` de la gobernanza, ya que será necesario para pasos posteriores en el tutorial.