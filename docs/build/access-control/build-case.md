# Build the use case

## Nodes
Partiendo de los participantes mencionados en el apartado anterior, vamos a hablar cuales de ellos necesitan un nodo TAPLE, así como su motivo.

### Participants
- Empresa de renting: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Empresa de limpieza: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Empresa de seguros: Se necesita un nodo TAPLE ya que es un participante conocido y conformará parte de la gobernanza.
- Cerradura inteligente: Cada vehículo dispondrá de un nodo TAPLE al que será transferida la propiedad del sujeto que representa al propio vehículo. Cabe destacar, que este nodo no conformará parte de la gobernanza ya que no va a tener ningún rol dentro de la mismo sino simplemente van a ser holders de los sujetos.
- Cliente: No se necesita un nodo TAPLE, ya que el caso de uso traza los accesos a los vehículos, por lo que los clientes no necesitan tener esa información. Ellos, solamente necesitan un sistema para abrir las cerraduras inteligentes y para eso lo único que se requiere, es una identidad con la que generar las invocaciones que provocarán la apertura de la cerradura inteligente si están autorizados.
- Trabajadores de limpieza: No se necesita un nodo TAPLE, ya que el caso de uso traza los accesos a los vehículos, por lo que los trabajadores no necesitan tener esa información. Ellos solamente necesitan un sistema para abrir las cerraduras inteligentes y para eso lo único que se requiere, es una identidad con la que generar las invocaciones que provocarán la apertura de la cerradura inteligente si están autorizados.

## Subjects
Cada una de las cerraduras gestionaría un sujeto cuyo estado estaría reflejado en las cerraduras de los vehículos. Para reflejar el estado del sujeto será necesario la definición de un esquema el cual contendrá el estado del vehículo así como el identificador del conductor autorizado para su uso. 

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
En el schema definiremos el estado en el que se encuentra el coche, que podrá ser libre o alquilado y además se definirá el identificador del conductor que tendrá acceso al vehículo en cuestión. En caso de estar libre, este campo estará vacío.

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
            "driver": {
                "description": "Contiene el identificador del cliente autorizado para su uso",
                "type": "string"
            }
        },
        "required": [
            "status",
            "driver"
        ],
        "additionalProperties": false
    }
```

</details>

### Smart Contract
Dentro del contrato inteligente, definiremos la lógica de negocio. Cuando un usuario desea realizar la apertura de una cerradura inteligente de un vehículo, será necesario que envíe una petición de evento firmada. A partir de esta firma, si el identificador de la petición del solicitante, coincide con el identificador del conductor autorizado para su uso especificado en el estado, el vehículo se abrirá. En caso contrario, la compañía de renting y la compañía de limpieza/mantenimiento recibirían una solicitud de aprobación sobre la invocación realizada de manera que cada una de ellas deberá comprobar en sus sistemas internos si la identidad del emisor es válida. Si se trata de un usuario autorizado en la compañía de renting, ésta votará afirmativamente y se desbloqueará la cerradura. De la misma manera, si se trata del personal de limpieza, la compañía de limpieza votará afirmativamente y por tanto podrá acceder al vehículo. Por el contrario, si se trata de un invocador no válido, ambos rechazarán la solicitud, denegando el acceso al vehículo. Cabe destacar que el control de acceso lo podemos resolver de dos maneras posibles:
- Si se trata de un cliente, el control de acceso se implementa en un contrato inteligente.
- Si no se trata de un cliente, el control de acceso se requiere la fase de aprobación. Ésta es realizada por un agente externo denominado aprobador.

El contrato inteligente lo conforman tres métodos:
- RemoveDriver: Este método se encarga de pasar el estado del coche de RENTED a FREE y poner el id del conductor vacío.

    <details>
      <summary>RemoveDriver method</summary>

    ```rs
        CarEvent::RemoveDriver {} => match lock.status {
            StatesCar::FREE => {}
            StatesCar::RENTED => {
                lock.status = StatesCar::FREE;
                lock.driver = "".to_string();
                contract_result.success = true;
            }
        }
    ```

    </details>

- AssingDriver: Este método se encarga de pasar el estado del coche de FREE a RENTED y rellenar el id con el identficador del conductor.

    <details>
      <summary>AssingDriver method</summary>

    ```rs
        CarEvent::AssignDriver { id } => match lock.status {
            StatesCar::FREE => {
                lock.status = StatesCar::RENTED;
                lock.driver = id.to_string();
                contract_result.success = true;
            }
            StatesCar::RENTED => {}
        }
    ```

    </details>

- OpenDoor: Este método se encarga de comprobar si la persona que intente abrir el coche se corresponde con la persona especificada en el id del conductor. En caso de ser la misma, el coche se abre y en caso contrario, se solicita aprobación.

    <details>
      <summary>OpenDoor method</summary>

    ```rs
        CarEvent::OpenDoor { id } => match lock.status {
            StatesCar::FREE => {
                contract_result.approval_required = true;
                contract_result.success = true;
            }
            StatesCar::RENTED => {
                if lock.driver != id.to_string() {
                    contract_result.approval_required = true;
                }
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
        "raw": "dXNlIHNlcmRlOjp7RGVzZXJpYWxpemUsIFNlcmlhbGl6ZX07DQp1c2UgdGFwbGVfc2NfcnVzdCBhcyBzZGs7DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUsIENsb25lKV0NCmVudW0gU3RhdGVzQ2FyIHsNCiAgICBGUkVFLA0KICAgIFJFTlRFRCwNCn0NCg0KI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQ0Kc3RydWN0IENhciB7DQogICAgcHViIHN0YXR1czogU3RhdGVzQ2FyLCAvLyBGUkVFIFJFTlRFRA0KICAgIHB1YiBkcml2ZXI6IFN0cmluZywgICAgLy8gRHJpdmVyIElEDQp9DQoNCiNbZGVyaXZlKFNlcmlhbGl6ZSwgRGVzZXJpYWxpemUpXQ0KZW51bSBDYXJFdmVudCB7DQogICAgUmVtb3ZlRHJpdmVyIHt9LA0KICAgIEFzc2lnbkRyaXZlciB7IGlkOiBTdHJpbmcgfSwNCiAgICBPcGVuRG9vciB7IGlkOiBTdHJpbmcgfSwNCn0NCg0KI1tub19tYW5nbGVdDQpwdWIgdW5zYWZlIGZuIG1haW5fZnVuY3Rpb24oc3RhdGVfcHRyOiBpMzIsIGV2ZW50X3B0cjogaTMyLCBpc19vd25lcjogaTMyKSAtPiB1MzIgew0KICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQ0KfQ0KDQpmbiBjb250cmFjdF9sb2dpYygNCiAgICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PENhciwgQ2FyRXZlbnQ+LA0KICAgIGNvbnRyYWN0X3Jlc3VsdDogJm11dCBzZGs6OkNvbnRyYWN0UmVzdWx0PENhcj4sDQopIHsNCiAgICBsZXQgbG9jayA9ICZtdXQgY29udHJhY3RfcmVzdWx0LmZpbmFsX3N0YXRlOw0KICAgIG1hdGNoICZjb250ZXh0LmV2ZW50IHsNCiAgICAgICAgQ2FyRXZlbnQ6OlJlbW92ZURyaXZlciB7fSA9PiBtYXRjaCBsb2NrLnN0YXR1cyB7DQogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4ge30NCiAgICAgICAgICAgIFN0YXRlc0Nhcjo6UkVOVEVEID0+IHsNCiAgICAgICAgICAgICAgICBsb2NrLnN0YXR1cyA9IFN0YXRlc0Nhcjo6RlJFRTsNCiAgICAgICAgICAgICAgICBsb2NrLmRyaXZlciA9ICIiLnRvX3N0cmluZygpOw0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5zdWNjZXNzID0gdHJ1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgfSwNCiAgICAgICAgQ2FyRXZlbnQ6OkFzc2lnbkRyaXZlciB7IGlkIH0gPT4gbWF0Y2ggbG9jay5zdGF0dXMgew0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpGUkVFID0+IHsNCiAgICAgICAgICAgICAgICBsb2NrLnN0YXR1cyA9IFN0YXRlc0Nhcjo6UkVOVEVEOw0KICAgICAgICAgICAgICAgIGxvY2suZHJpdmVyID0gaWQudG9fc3RyaW5nKCk7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4ge30NCiAgICAgICAgfSwNCiAgICAgICAgQ2FyRXZlbnQ6Ok9wZW5Eb29yIHsgaWQgfSA9PiBtYXRjaCBsb2NrLnN0YXR1cyB7DQogICAgICAgICAgICBTdGF0ZXNDYXI6OkZSRUUgPT4gew0KICAgICAgICAgICAgICAgIGNvbnRyYWN0X3Jlc3VsdC5hcHByb3ZhbF9yZXF1aXJlZCA9IHRydWU7DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgU3RhdGVzQ2FyOjpSRU5URUQgPT4gew0KICAgICAgICAgICAgICAgIGlmIGxvY2suZHJpdmVyICE9IGlkLnRvX3N0cmluZygpIHsNCiAgICAgICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LmFwcHJvdmFsX3JlcXVpcmVkID0gdHJ1ZTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgY29udHJhY3RfcmVzdWx0LnN1Y2Nlc3MgPSB0cnVlOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9LA0KICAgIH0NCn0NCg=="
    }
```

</details>

### Policies
Para garantizar un mejor control y una mayor seguridad sobre la red, definiremos las policies con quorum de mayoría, evitándonos de esta manera un monopolio en el que puedan aparecer situaciones anómalas.

<details>
  <summary>Policies JSON</summary>

```json
    {
        "op": "add",
        "path": "/policies/1",
        "value": {
            "approve": {
                "quorum": "MAJORITY"
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
- Compañía de alquiler: Propietaria de la gobernanza y evaludadora de los contratos inteligentes. Al ser propietaria de la gobernanza, no es necesario especificar roles sobre la misma ya que por defecto los adquiere todos.

- Compañía de limpieza: Aprobador del personal de limpieza y testigo para tener un registro de las limpiezas realizadas.

    <details>
      <summary>Roles cleaning company</summary>

    ```json
        [
            {
                "op": "add",
                "path": "/roles/1",
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
                "path": "/roles/2",
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
                "path": "/roles/3",
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
                "path": "/roles/4",
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
                "path": "/roles/5",
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
                "path": "/roles/6",
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