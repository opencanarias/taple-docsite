# End of life

Actualmente, existe un problema con los eventos en los que hemos estado trabajando, ya que no hemos descartado ninguno. Esto es especialmente grave en el caso de las botellas españolas y francesas, ya que en su último evento han perdido la certificación orgánica.

Sin embargo, hay una solución para este problema, que es el uso del evento [**EOL**](../../discover/events.md#end-of-life-event-eol). Este evento nos permite finalizar el ciclo de vida de un sujeto en la red, impidiendo que se emitan más eventos sobre él en el futuro.

Para probar este evento, lo aplicaremos a la última botella que hemos creado (la española). Para hacerlo, ejecutaremos lo siguiente:

```bash
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

Si todo ha ido correctamente, al lanzar la solicitud de consulta de sujetos, debería aparecer la botella con un valor de `sn` igual a 3 y el campo `active` establecido en `false`:

```bash
curl --location --request GET 'http://localhost:3001/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```

Lo que ocurriría ahora es que si intentáramos lanzar un nuevo evento sobre este sujeto, no se nos permitiría hacerlo. Para probarlo, intentaremos nuevamente lanzar un evento **EOL**:

```bash
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

Nos devolvería un mensaje indicando que no se puede lanzar un evento sobre un sujeto que ha alcanzado el final de su ciclo de vida:

```
Subject Life Ended: {{SUBJECT-ID}}
```