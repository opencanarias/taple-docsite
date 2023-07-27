# Interacting with the network
Ahora que ya tenemos nuestra red preparada y configurada, pasaremos a simular el funcionamiento del caso de uso. Para simplificar la interacción, limitaremos el caso de uso a la interacción con un vehículo.

## Alquilar vehículo
El primer caso al que nos enfrentamos, es cuando un cliente llega a la compañía de alquiler con la intención de alquilar un vehículo. Para ello, debemos emitir un evento sobre el sujeto mediante una invocación externa, ya que el propietario del mismo es el vehículo. Cabe destacar, que el estado inicial del sujeto es el siguiente:

```bash
    {
      "last_position": {
        "latitude": 0.0,
        "longitude": 0.0
      },
      "status": "FREE"
    }
```

Antes de realizar la solicitud, generaremos la firma del evento que queremos emitir utilizando **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** con el siguiente comando:

```bash title="Another terminal"
    taple-sign "74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Rent":{}}}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** por el hash identificador del sujeto.

:::

A continuación, el resultado de la ejecución anterior, lo incluiremos en la siguiente solicitud:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw {{SIGN-RESULT}}
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SIGN-RESULT}}** por el resultado de la petición anterior.

:::

Quedándonos algo similar a la siguiente:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
          "request": {
            "Fact": {
              "subject_id": "{{SUBJECT-ID}}",
              "payload": {
                "Rent": {}
              }
            }
          },
          "signature": {
            "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "timestamp": 1690371065334972628,
            "value": "SEw7Ca_HkBGhaUder4KZI23PX0rsKjn-qMOL7wtnfh_CcGA6ktgkZc3o6zhLuF26_af3Z3syN0aKR3JCltZPBEAw"
          }
        }'
```

Si todo ha ido bien, deberíamos apreciar como ha incrementado el campo "**sn**" y ha cambiado el estado del vehículo de FREE a RENTED. Para ello, ejecutamos el siguiente comando:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}''
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** el hash identificador del sujeto anteriormente guardado.

:::

Además, como habíamos mencionado anteriormente, el vehículo cada 10 minutos emite un evento para actualizar la geolocalización del coche. Este evento se lanza de la siguiente manera:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Fact": {
                    "subject_id": {{SUBJECT-ID}},
                    "payload": {
                        "UpdatePosition": {
                            "latitude": -30.0,
                            "longitude": -64.0
                        }
                    }
                }
            }
        }'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** el hash identificador del sujeto anteriormente guardado.

:::

Una vez ejectuda, deberíamos apreciar como ha incrementado el campo "**sn**" y se ha actualizado la geolocalización del vehículo. Para ello, ejecutamos el siguiente comando:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}''
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** el hash identificador del sujeto anteriormente guardado.

:::

## Apertura del vehículo al conductor asignado
Ahora, el conductor asignado llega al vehículo y mediante su NFC, provoca que el coche emita una petición de evento firmada similar a la siguiente:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Fact": {
                    "subject_id": {{SUBJECT-ID}},
                    "payload": {
                        "Open": {}
                    }
                }
            }
        }'
```

A continuación, la compañía de renting y la compañía de limpieza/mantenimiento recibirían una solicitud de aprobación sobre la invocación realizada de manera que cada una de ellas deberá comprobar en sus sistemas internos si la identidad del emisor es válida y votar afirmativamente o negativamente. En este caso, se trata del conductor al que se le ha alquilado el coche por lo que la compañía de reting deberá aceptar la solicitud y la compañía de limpieza/mantenimiento denegar la misma. Como estamos frente a un quorum de 1, la solicitud se aceptará y por tanto el vehículo se abrirá. Antes de pasar a la fase de votación, será necesario obtener la nueva solicitud de actualización. Para hacerlo, ejecutamos lo siguiente:

```bash title="Node: Rental Company"
    curl 'http://localhost:3000/api/approval-requests?status=Pending'
```

:::tip

Se recomienda guardar el valor del campo "**id**" devuelto por la petición anterior.

:::

Ahora, ya estamos listos para la fase aprobación. Para ello, debemos ejecutar el siguiente comando:

```bash title="Node: Rental Company"
    curl 'http://localhost:3000/api/approval-requests/{{PREVIUS-ID}}' \
        --header 'Content-Type: application/json' \
        --data '{"state": "RespondedAccepted"}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

Cabe destacar, que si en la fase de aprobación, votamos primero desde el nodo de la compañía de renting, no hace falta votar desde la compañía de limpieza, ya que ya se ha alcanzado el quorum.

Por último, para comprobar que la puerta del vehículo se ha abierto satisfactorimente, debemos ejecutar el siguiente comando:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{REQUEST-ID}}** por el valor copiado anteriormente.

:::

donde podemos apreciar que el evento se ha efectuado correctamente, obteniendo una salida similar a la siguiente:

```bash
    {
        "id": "{{REQUEST-ID}}",
        "subject_id": "{{SUBJECT-ID}}",
        "sn": 4,
        "state": "finished",
        "success": true
    }
```

Si ambas compañías hubiesen votado negativamente en la solicitud, ésta se rechazaría y el vehículo no se abriría. La salida que obtendríamos sería similar a la siguiente:

```bash
    {
        "id": "{{REQUEST-ID}}",
        "subject_id": "{{SUBJECT-ID}}",
        "sn": 4,
        "state": "finished",
        "success": false
    }
```

## Liberar vehículo
A continuación, cuando el cliente ha finalizado con la disposición del vehículo, la compañía de renting, debe actualizar su estado para ponerlo en como libre. Para ello, debemos emitir un evento sobre el sujeto mediante una invocación externa. Cabe destacar, que el estado actual del sujeto es el siguiente:

```bash
    {
      "last_position": {
        "latitude": -30.0,
        "longitude": -64.0
      },
      "status": "RENTED"
    }
```

Antes de realizar la solicitud, generaremos la firma del evento que queremos emitir utilizando **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** con el siguiente comando:

```bash title="Another terminal"
    taple-sign "74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Unrental":{}}}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** por el hash identificador del sujeto.

:::

A continuación, el resultado de la ejecución anterior, lo incluiremos en la siguiente solicitud:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw {{SIGN-RESULT}}
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SIGN-RESULT}}** por el resultado de la petición anterior.

:::

Quedándonos algo similar a la siguiente:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
          "request": {
            "Fact": {
              "subject_id": "{{SUBJECT-ID}}",
              "payload": {
                "Unrental": {}
              }
            }
          },
          "signature": {
            "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "timestamp": 1690448459062654370,
            "value": "SEMOYViWsNV9PNsWEkmQTy82-O5Lb_pMcvpurF3XC1LPnHldtHarEogHYOEvrifxuyeO-X_XHlAoI3jE2nmb4IDg"
          }
        }'
```

Si todo ha ido bien, deberíamos apreciar como ha incrementado el campo "**sn**" y ha cambiado el estado del vehículo de RENTED a FREE. Para ello, ejecutamos el siguiente comando:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/subjects/{{SUBJECT-ID}}''
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** el hash identificador del sujeto anteriormente guardado.

:::

## Apertura del vehículo al personal de limpieza
Ahora, nos enfrentamos al caso de uso de que un personal de limpieza/mantenimiento, desea abrir el vehículo. El personal adjudicado a realizar dicho servicio, llega al vehículo y mediante su NFC, provoca que el coche emita una petición de evento firmada similar a la siguiente:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "request": {
                "Fact": {
                    "subject_id": {{SUBJECT-ID}},
                    "payload": {
                        "Open": {}
                    }
                }
            }
        }'
```

A continuación, la compañía de renting y la compañía de limpieza/mantenimiento recibirían una solicitud de aprobación sobre la invocación realizada de manera que cada una de ellas deberá comprobar en sus sistemas internos si la identidad del emisor es válida y votar afirmativamente o negativamente. En este caso, se trata de peronal de limpieza/mantenimiento, por lo que la compañía de limpieza/mantenimiento aceptará la solicitud y el vehículo se abrirá ya que estamos frente a un quorum de 1. Antes de pasar a la fase de votación, será necesario obtener la nueva solicitud de actualización. Para hacerlo, ejecutamos lo siguiente:

```bash title="Node: Cleaning Company"
    curl 'http://localhost:3001/api/approval-requests?status=Pending'
```

:::tip

Se recomienda guardar el valor del campo "**id**" devuelto por la petición anterior.

:::

Ahora, ya estamos listos para la fase aprobación. Para ello, debemos ejecutar el siguiente comando:

```bash title="Node: Cleaning Company"
    curl 'http://localhost:3001/api/approval-requests/{{PREVIUS-ID}}' \
        --header 'Content-Type: application/json' \
        --data '{"state": "RespondedAccepted"}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{PREVIUS-ID}}** por el valor copiado del anteriormente.

:::

Cabe destacar, que si en la fase de aprobación, votamos primero desde el nodo de la compañía de limpieza/mantenimiento, no hace falta votar desde la compañía de renting, ya que ya se ha alcanzado el quorum.

Por último, para comprobar que la puerta del vehículo se ha abierto satisfactorimente, debemos ejecutar el siguiente comando:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{REQUEST-ID}}** por el valor copiado anteriormente.

:::

donde podemos apreciar que el evento se ha efectuado correctamente, obteniendo una salida similar a la siguiente:

```bash
    {
        "id": "{{REQUEST-ID}}",
        "subject_id": "{{SUBJECT-ID}}",
        "sn": 6,
        "state": "finished",
        "success": true
    }
```

Si ambas compañías hubiesen votado negativamente en la solicitud, ésta se rechazaría y el vehículo no se abriría. La salida que obtendríamos sería similar a la siguiente:

```bash
    {
        "id": "{{REQUEST-ID}}",
        "subject_id": "{{SUBJECT-ID}}",
        "sn": 6,
        "state": "finished",
        "success": false
    }
```

## Evento rechazado
Como último caso, debemos comprobar qué pasa si intentamos liberar un coche que ya está libre o si se intenta alquilar un vehículo que ya está alquilado. En esta caso, lo haremos sobre liberar un coche que ya está libre, pero sería de la misma manera para el otro caso. Cabe destacar, que el estado actual del sujeto es el siguiente:

```bash
    {
      "last_position": {
        "latitude": -30.0,
        "longitude": -64.0
      },
      "status": "FREE"
    }
```

Antes de realizar la solicitud, generaremos la firma del evento que queremos emitir utilizando **[TAPLE-Sign](../../learn/client-tools.md#taple-sign)** con el siguiente comando:

```bash title="Another terminal"
    taple-sign "74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a" '{"Fact":{"subject_id":"{{SUBJECT-ID}}","payload":{"Unrental":{}}}}'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SUBJECT-ID}}** por el hash identificador del sujeto.

:::

A continuación, el resultado de la ejecución anterior, lo incluiremos en la siguiente solicitud:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw {{SIGN-RESULT}}
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{SIGN-RESULT}}** por el resultado de la petición anterior.

:::

Quedándonos algo similar a la siguiente:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests' \
        --header 'Content-Type: application/json' \
        --data-raw '{
          "request": {
            "Fact": {
              "subject_id": "{{SUBJECT-ID}}",
              "payload": {
                "Unrental": {}
              }
            }
          },
          "signature": {
            "signer": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
            "timestamp": 1690449443680394417,
            "value": "SE515s9pudglgPnny6xDu3T-roK2nrbKCjWcqmdHNmNvmiIceIIF9e7aZYXq8YZysaNoM1lCShjUiiLw-4R2AjDw"
          }
        }'
```

Una vez ejecutado el comando anterior, se nos devolverá el "**request-id**" del evento.

:::tip

Se recomienda guardar el "**request_id**" devuelto por la petición anterior.

:::

A continuación, ejecutamos el siguiente comando para comprobar el estado de la petición:

```bash title="Node: Vehicle"
    curl 'http://localhost:3003/api/event-requests/{{REQUEST-ID}}/state'
```

:::caution

Tenga en cuenta que en la petición, deberá sustituir **{{REQUEST-ID}}** por el valor copiado anteriormente.

:::

donde podemos apreciar que ha incrementado el campo "**sn**" y que el evento se ha rechazado, obteniendo una salida similar a la siguiente:

```bash
    {
        "id": "{{REQUEST-ID}}",
        "subject_id": "{{SUBJECT-ID}}",
        "sn": 7,
        "state": "finished",
        "success": false
    }
```