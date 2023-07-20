# Transfers

En esta sección, abordaremos la transferencia de la propiedad de un sujeto de tipo *Wine* a un **ciudadano** interesado en adquirirlo.

Cualquier sujeto que no haya completado su ciclo de vida en Taple puede ser transferido a un nuevo propietario, independientemente de si este último forma parte o no de la gobernanza en la que se ha declarado.

Para llevar a cabo esta transferencia, necesitamos configurar un nuevo nodo que actuará como el nuevo propietario externo a la gobernanza. Para ello, seguiremos estos pasos:

```bash title="Node: Citizen"
docker run opencanarias/taple-client:0.2 \
    -p 3004:3000 \
    -p 50004:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_SECRET_KEY=2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198 \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50004 \
    -e TAPLE_NETWORK_KNOWN_NODE=/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk 
```

Hasta este punto, al crear el sujeto, no hemos tenido que declarar su clave pública, aunque siempre hemos tenido la posibilidad de hacerlo. Sin embargo, en este caso es diferente, ya que al realizar una transferencia, el nuevo propietario debe generar una clave pública con la que desee gestionar el sujeto que se le transferirá. Para lograrlo, debe ejecutar lo siguiente:

```bash
curl --request POST 'http://localhost:3004/api/keys' \
--form 'algorithm="Ed25519"'
```

Esto generará una `public_key`, que debe ser copiada y guardada para su uso posterior.

Activaremos la preautorización de la gobernanza desde la que deseamos transferir el sujeto. Dentro de los `providers`, especificaremos el nodo propietario de la misma. Debido a que no somos miembros de la gobernanza, nadie nos la enviará automáticamente, por lo que debemos autorizarla y, al mismo tiempo, informar a nuestro nodo de sus posibles proveedores. En este caso, solicitaremos la gobernanza al nodo **WPO**, ya que es su dueño:

```bash
curl --request PUT 'http://localhost:3004/api/allowed-subjects/{{GOVERNANCE-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": ["EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs"]
}'
```

Además de lo anterior, también será necesario preautorizar el sujeto que deseamos recibir, yaa que no somos testigos ni de la gobernanza ni de los sujetos de tipo *Wine*:

```bash
curl --request PUT 'http://localhost:3004/api/allowed-subjects/{{SUBJECT-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": []
}'
```

Ahora debemos firmar la solicitud de transferencia con el material del nuevo nodo. Para ello, ejecutaremos lo siguiente:

```bash title="Another terminal"
taple-sing "2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198" "{\"Transfer\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"public_key\":\"{{PUBLIC-KEY}}\"}}"
```

El resultado de esta ejecución se incluirá en la siguiente solicitud:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw {{SIGN-RESULT}}
```

Esto generará un resultado similar a lo siguiente:

```bash title="Node: Premium Wines"
curl --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Transfer": {
        "subject_id": {{SUBJECT-ID}},
        "public_key": {{PUBLIC-KEY}}
        }
    },
    "signature": {
        "signer": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
        "timestamp": 1689854029987763078,
        "value": "SEoXC-I8aNu1P6cS7SwDj9J6SrSDNdCnLdqj5o2Pb4nEqcQR5FHooO5qHwuQUd9FQPLWmHZ_3D2uNEzxRMSGYlCQ"
    }
}'
```

Una vez completados los pasos anteriores, el nuevo nodo debería ser capaz de visualizar este sujeto, y la identidad del propietario debería corresponderse con la del nodo **Citizen**:

```bash title="Node: Citizen"
curl --request GET 'http://localhost:3004/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 4,
    "public_key": {{PUBLIC-KEY}},
    "namespace": "",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
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