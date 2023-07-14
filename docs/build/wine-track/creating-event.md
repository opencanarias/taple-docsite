# Creating an event

Ya hemos inicializado nuestra gobernanza para comenzar a formalizar el caso de uso del ciclo de vida del vino. Sin embargo, la gobernanza actual está vacía, por lo tanto, debemos comenzar a llenarla y adaptarla a nuestro caso de uso.

Para realizar estas modificaciones, es necesario generar un evento. *Taple* admite diferentes tipos de eventos, como el evento de **génesis**, que fue el que provocó la creación de la gobernanza. Sin embargo, el tipo de evento que necesitamos realizar ahora es el evento de **hecho**, el cual permite modificar el estado de un sujeto en la red.

Internamente, estos eventos de **hecho** se comunican con una de las operaciones declaradas en el *smart contract* del sujeto y actúan sobre ella. En el caso de la gobernanza, es algo especial, ya que tanto su esquema como su contrato son [internos de Taple](referencia-a-la-documentación).

El contrato de la gobernanza expone solo un método para modificarla, el cual debe ser utilizado mediante [*json-patch*](referencia-a-la-documentación).

Siguiendo todo lo mencionado anteriormente, para modificar la gobernanza e incluir al miembro que la ha creado, debemos seguir los siguientes pasos:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
        "Fact": {
            "subject_id": {{GOVERNANCE-ID}},
            "payload": {
                "Patch": {
                    "data": [
                        {
                            "op": "add",
                            "path": "/members/0",
                            "value": {
                            "id": "EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs",
                            "name": "WPO"
                            }
                        },
                        {
                            "op": "add",
                            "path": "/roles/1",
                            "value": {
                                "namespace": "",
                                "role": "APPROVER",
                                "schema": {
                                    "ID": "governance"
                                },
                                "who": {
                                    "NAME": "WPO"
                                }
                            }
                        }
                    ]
                }
            }
        }
    }
}'
```

* **Nota**: Tenga en cuenta que lo que se encuentra dentro de las lista `data` se tratan de los cambios que se realizarán en la gobernanza mediante *json-patch*.

Una vez ejecutado esto, se nos devolverá el `request-id` del evento y debemos guardarlo.

A continuación, realizamos una consulta para verificar si la solicitud se encuentra en espera de aprobación en el sistema:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/event-requests/{{REQUEST-ID}}/state'
```

Esta debería de aparecer en estado pendiente.

Ahora debemos obtener el identificicador de la petición de cambio de la gobernanza, para ello ejecutamos:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Copiaremos el valor del campo `id` y aceptaremos la solicitud actualización de la gobernanza:

```bash
curl --silent --location --request PATCH 'http://localhost:3000/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Consultamos la gobernanza una vez más, obteniendo como resultado un `sn` 1 y el la inclusión de este nuevo miembro:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/subjects?subject_type=governances'
```