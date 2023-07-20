# Creating a subject

En este punto, ya seremos capaces de dar seguimiento al ciclo de vida de nuestras botellas de vino mediante [sujetos](../../discover/subjects.md) del tipo *Wine*, los cuales están definidos en nuestra red Taple. Además, tenemos a la entidad **Premium Wines**, que será la responsable de llevar a cabo esta acción.

Comenzaremos lanzando un evento de **génesis** para crear nuestro primer sujeto del tipo *Wine*:

```bash title="Node: Premium wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Create": {
        "governance_id": {{GOVERNANCE-ID}},
        "schema_id": "Wine",
        "namespace": "",
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

Podemos consultar el sujeto creado utilizando el siguiente comando:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 0,
    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",
    "namespace": "",
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


Una vez hemos llegado a este punto, el primer sujeto ha sido creado, pero como podemos observar en el bloque de información anterior, tiene una inicialización por defecto con el *body* que definimos en el evento de **génesis**. Por lo tanto, nuestro siguiente paso será modificar las características básicas del sujeto para representar la producción de una botella de vino producida por **Premium Wines**. Esto lo lograremos mediante el evento `Init` que hemos declarado en el *smart contract* de los sujetos *Wine*.

Las características que deseamos que tenga nuestra botella son las siguientes:
* Harvest number: 1
* Grape type: Cabernet sauvignon
* Origin: spain

Por lo tanto, el comando que deberemos ejecutar será el siguiente:

```bash  title="Node: Premium wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
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

Si todo ha ido correctamente, al ejecutar el siguiente comando, el sujeto debería actualizarse con un valor `sn` de 1 y reflejar los cambios mencionados anteriormente:

```bash title="Node: Premium Wines"
curl --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 1,
    "public_key": "E-_PigfpbWeFsQzMXENgEQPQR5ea4FfoSFAqdZtx7lS0",
    "namespace": "",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "CabernetSauvignon",
        "harvest": 1,
        "organic_certified": null,
        "origin": "spain",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": true
}
```