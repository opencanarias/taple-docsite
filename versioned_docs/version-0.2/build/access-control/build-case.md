# Build the use case

## Nodes
Partiendo de los participantes mencionados en el apartado anterior, vamos a hablar cuales de ellos necesitan un nodo TAPLE, así como su motivo.

### Participants
- Empresa de renting: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Empresa de limpieza: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Empresa de seguros: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Cerradura inteligente: Cada vehículo dispondrá de un nodo TAPLE al que será transferida la propiedad del sujeto que representa al propio vehículo. Cabe destacar, que este nodo no conformará parte de la gobernanza ya que no va a tener ningún rol dentro de la mismo sino simplemente van a ser holders de los sujetos.
- Cliente: No se necesita un nodo TAPLE, ya que el caso de uso traza los accesos a los vehículos, por lo que los clientes no necesitan tener esa información. Ellos, solamente necesitan un sistema para abrir las cerraduras inteligentes y para eso lo único que se requiere, es una identidad con la que generar las invocaciones que provocarán una solicitud de apertura de la cerradura inteligente.
- Trabajadores de limpieza: No se necesita un nodo TAPLE, ya que el caso de uso traza los accesos a los vehículos, por lo que los trabajadores no necesitan tener esa información. Ellos solamente necesitan un sistema para abrir las cerraduras inteligentes y para eso lo único que se requiere, es una identidad con la que generar las invocaciones que provocarán una solicitud de apertura de la cerradura inteligente.

## Subjects
Cada una de las cerraduras gestionaría un sujeto cuyo estado estaría reflejado en las cerraduras de los vehículos. Para reflejar el estado del sujeto será necesario la definición de un esquema el cual contendrá el estado del vehículo así como la geolocalización del vehículo. 

## Governance
Para conformar la gobernanza, partimos de la gobernanza por defecto y a continuación vamos aplicando los cambios necesarios para nuestro caso de uso.

<details>
  <summary>Governance JSON</summary>

```json
    {
      "request": {
        "Create": {
          "governance_id": "",
          "schema_id": "governance",
          "namespace": "",
          "name": "Access_control"
        }
      }
    }
```

</details>

### Members
Como ya habíamos mencionado con anterioridad, la gobernanza estará compuesta por los siguientes miembros:
- Compañía de alquiler
    
    <details>
      <summary>Member rental company JSON</summary>

    ```json
        {
            "op": "add",
            "path": "/members/0",
            "value": {
                "id": "Identificador del nodo de la compañía de renting",
                "name": "RentalCompany"
            }
        }
    ```

    </details>

- Compañía de limpieza

    <details>
      <summary>Member cleaning company JSON</summary>

    ```json
        {
            "op": "add",
            "path": "/members/1",
            "value": {
            "id": "Identificador del nodo de la compañía de renting",
            "name": "CleaningCompany"
            }
        }
    ```

    </details>

- Compañía de seguros

    <details>
      <summary>Member cleaning company JSON</summary>

    ```json
        {
            "op": "add",
            "path": "/members/2",
            "value": {
            "id": "Identificador del nodo de la compañía de renting",
            "name": "SecurityCompany"
            }
        }
    ```

    </details>

Cabe destacar, que la compañía de alquiler será la propietaria de la misma.

### Schema
En el schema definiremos el estado en el que se encuentra el coche, que podrá ser libre o alquilado y además se definirá la geolocalización del vehículo.

<details>
  <summary>Schema JSON</summary>

```json
    "schema": {
        "description": "Estado del coche",
        "type": "object",
        "properties": {
            "status": {
                "description": "Define si el coche está libre o ocupado",
                "type": "string",
                "enum": ["FREE", "RENTED"]
            },
            "last_position": {
                "description": "Contiene el registro de la última posición del coche",
                "type": "object",
                "properties": {
                    "latitude": {
                        "description": "Define la latitud de la geolocalización del coche",
                        "type": "number"
                    },
                    "longitude": {
                        "description": "Define la longitud de la geolocalización del coche",
                        "type": "number"
                    }
                }
            }
        },
        "required": [
            "status",
            "last_position"
        ],
        "additionalProperties": false
    }
```

</details>

### Smart Contract
Dentro del contrato inteligente, definiremos la lógica de negocio. Cuando un usuario desea realizar la apertura de una cerradura inteligente de un vehículo, será necesario que envíe una petición de evento firmada. A continuación, la compañía de renting y la compañía de limpieza/mantenimiento recibirían una solicitud de aprobación sobre la invocación realizada de manera que cada una de ellas deberá comprobar en sus sistemas internos si la identidad del emisor es válida. Si se trata de un usuario autorizado en la compañía de renting, ésta votará afirmativamente y se desbloqueará la cerradura. De la misma manera, si se trata del personal de limpieza, la compañía de limpieza votará afirmativamente y por tanto podrá acceder al vehículo. Por el contrario, si se trata de un invocador no válido, ambos rechazarán la solicitud, denegando el acceso al vehículo.

El contrato inteligente lo conforman cuatro métodos:
- Unrental: Este método se encarga de pasar el estado del coche de RENTED a FREE.

    <details>
      <summary>Unrental method</summary>

    ```rust
        CarEvent::Unrental {} => match car.status {
            StatesCar::FREE => {}
            StatesCar::RENTED => {
                car.status = StatesCar::FREE;
                contract_result.success = true;
            }
        }
    ```

    </details>

- Rent: Este método se encarga de pasar el estado del coche de FREE a RENTED.

    <details>
      <summary>Rent method</summary>

    ```rust
        CarEvent::Rent {} => match car.status {
            StatesCar::FREE => {
                car.status = StatesCar::RENTED;
                contract_result.success = true;
            }
            StatesCar::RENTED => {}
        }
    ```

    </details>

- Open: Este método se encarga de comprobar si la persona que intente abrir el coche se corresponde con una persona autorizada. Para ello, se solicita aprobación.

    <details>
      <summary>Open method</summary>

    ```rust
        CarEvent::Open {} => match car.status {
            StatesCar::FREE => {
                contract_result.approval_required = true;
                contract_result.success = true;
            }
            StatesCar::RENTED => {
                contract_result.approval_required = true;
                contract_result.success = true;
            }
        }
    ```

    </details>

- UpdatePosition: Este método se encarga de actualizar la geolocalización del coche cada 10 minutos.

    <details>
      <summary>UpdatePosition method</summary>

    ```rust
        CarEvent::UpdatePosition {
            latitude,
            longitude,
        } => match car.status {
            StatesCar::FREE => {
                car.last_position.latitude = latitude.round();
                car.last_position.longitude = longitude.round();
                contract_result.success = true;
            }
            StatesCar::RENTED => {
                car.last_position.latitude = latitude.round();
                car.last_position.longitude = longitude.round();
                contract_result.success = true;
            }
        }
    ```

    </details>

Para añadir el contrato inteligente, antes debemos pasarlo a base64. Para ello, puede usar la utilidad **[base64](https://manpages.ubuntu.com/manpages/xenial/en/man1/base64.1.html)** disponible en Linux.

<details>
  <summary>Smart Contract in base64</summary>

```json
    "contract": {
        "raw":"dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQp1c2UgdGFwbGVfc2NfcnVzdCBhcyBzZGs7DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0NCmVudW0gU3RhdGVzQ2FyIHsNCiAgICBGUkVFLA0KICAgIFJFTlRFRCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IFBvc2l0aW9uIHsNCiAgICBsYXRpdHVkZTogZjMyLA0KICAgIGxvbmdpdHVkZTogZjMyLA0KfQ0KDQojW2Rlcml2ZShTZXJpYWxpemUsIERlc2VyaWFsaXplLCBDbG9uZSldDQpzdHJ1Y3QgQ2FyIHsNCiAgICBwdWIgc3RhdHVzOiBTdGF0ZXNDYXIsICAgICAgIC8vIEZSRUUgUkVOVEVEDQogICAgcHViIGxhc3RfcG9zaXRpb246IFBvc2l0aW9uLCAvLyBsYXRpdHVkZSBsb25naXR1ZGUNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldDQplbnVtIENhckV2ZW50IHsNCiAgICBVbnJlbnRhbCB7fSwNCiAgICBSZW50IHt9LA0KICAgIE9wZW4ge30sDQogICAgVXBkYXRlUG9zaXRpb24geyBsYXRpdHVkZTogZjMyLCBsb25naXR1ZGU6IGYzMiB9LA0KfQ0KDQojW25vX21hbmdsZV0NCnB1YiB1bnNhZmUgZm4gbWFpbl9mdW5jdGlvbihzdGF0ZV9wdHI6IGkzMiwgZXZlbnRfcHRyOiBpMzIsIGlzX293bmVyOiBpMzIpIC0+IHUzMiB7DQogICAgc2RrOjpleGVjdXRlX2NvbnRyYWN0KHN0YXRlX3B0ciwgZXZlbnRfcHRyLCBpc19vd25lciwgY29udHJhY3RfbG9naWMpDQp9DQoNCmZuIGNvbnRyYWN0X2xvZ2ljKA0KICAgIGNvbnRleHQ6ICZzZGs6OkNvbnRleHQ8Q2FyLCBDYXJFdmVudD4sDQogICAgY29udHJhY3RfcmVzdWx0OiAmbXV0IHNkazo6Q29udHJhY3RSZXN1bHQ8Q2FyPiwNCikgew0KICAgIGxldCBjYXIgPSAmbXV0IGNvbnRyYWN0X3Jlc3VsdC5maW5hbF9zdGF0ZTsNCiAgICBtYXRjaCAmY29udGV4dC5ldmVudCB7DQogICAgICAgIENhckV2ZW50OjpVbnJlbnRhbCB7fSA9PiBtYXRjaCBjYXIuc3RhdHVzIHsNCiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7fQ0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gew0KICAgICAgICAgICAgICAgIGNhci5zdGF0dXMgPSBTdGF0ZXNDYXI6OkZSRUU7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9LA0KICAgICAgICBDYXJFdmVudDo6UmVudCB7fSA9PiBtYXRjaCBjYXIuc3RhdHVzIHsNCiAgICAgICAgICAgIFN0YXRlc0Nhcjo6RlJFRSA9PiB7DQogICAgICAgICAgICAgICAgY2FyLnN0YXR1cyA9IFN0YXRlc0Nhcjo6UkVOVEVEOw0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIFN0YXRlc0Nhcjo6UkVOVEVEID0+IHt9DQogICAgICAgIH0sDQogICAgICAgIENhckV2ZW50OjpPcGVuIHt9ID0+IG1hdGNoIGNhci5zdGF0dXMgew0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpGUkVFID0+IHsNCiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuYXBwcm92YWxfcmVxdWlyZWQgPSB0cnVlOw0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICAgIFN0YXRlc0Nhcjo6UkVOVEVEID0+IHsNCiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuYXBwcm92YWxfcmVxdWlyZWQgPSB0cnVlOw0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSwNCiAgICAgICAgQ2FyRXZlbnQ6OlVwZGF0ZVBvc2l0aW9uIHsNCiAgICAgICAgICAgIGxhdGl0dWRlLA0KICAgICAgICAgICAgbG9uZ2l0dWRlLA0KICAgICAgICB9ID0+IG1hdGNoIGNhci5zdGF0dXMgew0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpGUkVFID0+IHsNCiAgICAgICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sYXRpdHVkZSA9IGxhdGl0dWRlLnJvdW5kKCk7DQogICAgICAgICAgICAgICAgY2FyLmxhc3RfcG9zaXRpb24ubG9uZ2l0dWRlID0gbG9uZ2l0dWRlLnJvdW5kKCk7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gew0KICAgICAgICAgICAgICAgIGNhci5sYXN0X3Bvc2l0aW9uLmxhdGl0dWRlID0gbGF0aXR1ZGUucm91bmQoKTsNCiAgICAgICAgICAgICAgICBjYXIubGFzdF9wb3NpdGlvbi5sb25naXR1ZGUgPSBsb25naXR1ZGUucm91bmQoKTsNCiAgICAgICAgICAgICAgICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7DQogICAgICAgICAgICB9DQogICAgICAgIH0sDQogICAgfQ0KfQ=="
    }
```

</details>

### Policies
Para garantizar un mejor control y una mayor seguridad sobre la red, definiremos las policies sobre el sujeto.

<details>
  <summary>Policies JSON</summary>

```json
    {
        "op": "add",
        "path": "/policies/1",
        "value": {
            "approve": {
                "quorum": {
                    "FIXED": 1
                }
            },
            "evaluate": {
                "quorum": "MAJORITY"
            },
            "id": "car",
            "validate": {
                "quorum": "MAJORITY"
            }
        }
    }
```

</details>

### Roles of participants
- Compañía de alquiler: Propietaria de la gobernanza y evaludadora de los contratos inteligentes. Al ser propietaria de la gobernanza, no es necesario especificar roles sobre la misma ya que por defecto los adquiere todos. Sin embargo, si debemos definir los roles sobre el sujeto.

    <details>
      <summary>Roles rental company</summary>

    ```json
        [
            {
                "op": "add",
                "path": "/roles/1",
                "value": {
                    "namespace": "",
                    "role": "CREATOR",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "RentalCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/2",
                "value": {
                    "namespace": "",
                    "role": "APPROVER",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "RentalCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/3",
                "value": {
                    "namespace": "",
                    "role": "WITNESS",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "RentalCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/4",
                "value": {
                    "namespace": "",
                    "role": "ISSUER",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "RentalCompany"
                    }
                }
            }
        ]
    ```

    </details>

- Compañía de limpieza: Aprobador del personal de limpieza y testigo para tener un registro de las limpiezas realizadas.

    <details>
      <summary>Roles cleaning company</summary>

    ```json
        [
            {
                "op": "add",
                "path": "/roles/5",
                "value": {
                    "namespace": "",
                    "role": "WITNESS",
                    "schema": {
                        "ID": "governance"
                    },
                    "who": {
                        "NAME": "CleaningCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/6",
                "value": {
                    "namespace": "",
                    "role": "WITNESS",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "CleaningCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/7",
                "value": {
                    "namespace": "",
                    "role": "APPROVER",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "CleaningCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/8",
                "value": {
                    "namespace": "",
                    "role": "ISSUER",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "CleaningCompany"
                    }
                }
            }
        ]
    ```

    </details>

- Compañía de seguros: Testigo para tener un control del uso del coche y evaluadora para garantizar la seguridad de la red. 

    <details>
      <summary>Roles security company</summary>

    ```json
        [
            {
                "op": "add",
                "path": "/roles/9",
                "value": {
                    "namespace": "",
                    "role": "WITNESS",
                    "schema": {
                        "ID": "governance"
                    },
                    "who": {
                        "NAME": "SecurityCompany"
                    }
                }
            },                        
            {
                "op": "add",
                "path": "/roles/10",
                "value": {
                    "namespace": "",
                    "role": "EVALUATOR",
                    "schema": {
                        "ID": "governance"
                    },
                    "who": {
                        "NAME": "SecurityCompany"
                    }
                }
            },
            {
                "op": "add",
                "path": "/roles/11",
                "value": {
                    "namespace": "",
                    "role": "WITNESS",
                    "schema": {
                        "ID": "car"
                    },
                    "who": {
                        "NAME": "SecurityCompany"
                    }
                }
            }
        ]
    ```

    </details>