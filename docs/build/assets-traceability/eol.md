# End of life

Para concluir con el tutorial, vamos a establecer un último escenario: cuando las botellas no cumplen con los estándares de calidad, deben ser retiradas del mercado para evitar su distribución.

Para abordar esta situación, en Taple disponemos de una solución: el uso del evento [**EOL**](../../discover/events.md#end-of-life-event-eol). Este evento nos permite dar por finalizado el ciclo de vida de un sujeto en la red, lo que impide que se puedan emitir más eventos sobre él en el futuro.

Para probarlo, lo aplicaremos a la última botella que hemos creado (la Española). Para hacerlo, ejecutaremos lo siguiente:

```bash title="Node: Premium Wines"
curl --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "EOL": {
        "subject_id": {{SUBJECT-ID}}
        }
    }
}'
```

Si todo ha ido correctamente, al realizar una solicitud de consulta de sujetos, debería aparecer la botella con un valor de `sn` igual a 3 y el campo `active` establecido en `false`:

```bash title="Node: Premium Wines"
curl --location --request GET 'http://localhost:3001/api/subjects/{{SUBJECT-ID}}'
```

```json
{
    "subject_id": {{SUBJECT-ID}},
    "governance_id": {{GOVERNANCE-ID}},
    "sn": 3,
    "public_key": "E5DkRaljajwUZ1HrpgdkIxdTu0fbrg-nqoBJFHqm6GJY",
    "namespace": "Spain",
    "name": "Wine",
    "schema_id": "Wine",
    "owner": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "creator": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
    "properties": {
        "grape": "PinotNoir",
        "harvest": 3,
        "organic_certified": false,
        "origin": "spain",
        "temperature_control": {
            "last_check": 0,
            "temperature_ok": true
        }
    },
    "active": false
}
```

Lo que ocurriría ahora es que si intentáramos lanzar un nuevo evento sobre este sujeto, no se nos permitiría hacerlo. Para demostrarlo, intentaremos nuevamente lanzar un evento **EOL**:

```bash title="Node: Premium Wines"
curl --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "EOL": {
        "subject_id": {{SUBJECT-ID}}
        }
    }
}'
```

En este caso, nos devolvería un mensaje indicando que no se puede lanzar un evento sobre un sujeto que ha alcanzado el final de su ciclo de vida.

```
Subject Life Ended: {{SUBJECT-ID}}
```