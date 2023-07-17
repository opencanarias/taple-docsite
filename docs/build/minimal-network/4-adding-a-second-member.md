# Adding a second member

Para añadir un segundo miembro podemos repetir el paso anterior pero cambiando levemente el body de la request. Para ello primero volveré a lanzar taple-keygen para crear un segundo material criptográfico que identifique al segundo miembro:

```bash
PRIVATE KEY ED25519 (HEX): 388e07385cfd8871f990fe05f82610af1989f7abf5d4e42884c8337498086ba0
CONTROLLER ID ED25519: E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM
PeerID: 12D3KooWRS3QVwqBtNp7rUCG4SF3nBrinQqJYC1N5qc1Wdr4jrze
```

Con lo que el body de la nueva request nos quedaría:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                    "op": "add",
                    "path": "/members/1",
                    "value": {
                    "id": "E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM",
                    "name": "Tutorial2"
                    }
                }
            ]
          }
      }
    }
  }
}
```

Debemos volver a aprobar la nueva request como en el caso anterior.

## Levantar el segundo nodo

El primer nodo va a estar mandando los eventos del sujeto de la governanza al controllador **E6AL_cLzXRIAnc3Hy2oX5K8CgnzPXPmyL1KyDo36DNdM**, cuyo PeerId (identificación en LibP2P, la librería de comunicación) es **12D3KooWRS3QVwqBtNp7rUCG4SF3nBrinQqJYC1N5qc1Wdr4jrze**. Lamentablemente no lo va a encontrar en su red porque no están conectados, con lo que a continuación procederemos a levantar el segundo nodo y conectarlo al primero:

```bash
docker run -p 3001:3000 -p 50001:50000 -e TAPLE_SECRET_KEY=388e07385cfd8871f990fe05f82610af1989f7abf5d4e42884c8337498086ba0 -e TAPLE_HTTP=true opencanarias/taple-client:0.2 -e TAPLE_NETWORK_KNOWN_NODE=/ip4/{addr}/tcp/50000/p2p/12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

Reemplazar addr con la ip con la que el segundo nodo puede encontrar al primero. Depende de si se lanzan los contenedores en una red docker, en la red host...

Ahora que está levantado y se conectan mediante la variable de entorno **TAPLE_NETWORK_KNOWN_NODE** le empezarán a llegar eventos de la governance al segundo nodo. Aunque aún no se guardarán en su base de datos. Esto se debe a que las governances siempre se tienen que preautorizar para permitir la recepción de sus eventos. Para esto se usa el endpoint **/api/allowed-subjects/{{governance_id}}** y el método **PUT**. Recordar que en este caso se debe lanzar en el segundo nodo, que por la configuración que hemos puesto estará escuchando en el puerto 3001 de localhost. Ahora sí que se acatualizará correctamente el segundo nodo con el sujeto de governance.

## Modificar la gobernanza

Como hemos visto anteriormente el contrato de la governance actualmente solo tiene un método para modificar su estado, el método Patch. Este método incluye un objeto con un atributo data que a su vez es un array que representa un json-patch. Dicho patch se aplicará al estado actual de la governance para modificarlo. También al realizar la modificación se comprueba que el estado obtenido sea válido para una governance, no solo realizando la validación con el propio esquema de governance sino también realizando comprobaciones exhaustivas, como que no existan miembros repetidos, cada schema definido tenga a su vez unas policies...

Para facilitar la obtención del resultado que queremos y generar el json-patch específico podemos usar la herramienta taple-patch, incluida entre las [taple-tools](../../learn/client-tools.md). A este ejecutable se le pasa el estado actual y el estado deseado y genera el patch correspondiente tras cuya aplicación se pasa de uno a otro.

y enviar la petición, hacer la aprobación etc...

Para hacer un ejemplo pondremos como aprobadores de la governanza a todos sus miembros, para ello debemos añadir el rol:

```json
{
    "namespace": "",
    "role": "APPROVER",
    "schema": {
        "ID": "governance"
    },
    "who": "MEMBERS"
}
```

Con lo que el json patch que tenemos que aplicar será:

```json
[
  {
    "op": "add",
    "path": "/roles/1",
    "value": {
        "namespace": "",
        "role": "APPROVER",
        "schema": {
            "ID": "governance"
        },
        "who": "MEMBERS"
    }
  }
]
```

Con lo que el body de la request quedará:

```json
{
  "request": {
    "Fact": {
      "subject_id": "{{governance_id}}",
      "payload": {
          "Patch": {
              "data": [
                {
                  "op": "add",
                  "path": "/roles/1",
                  "value": {
                      "namespace": "",
                      "role": "APPROVER",
                      "schema": {
                          "ID": "governance"
                      },
                      "who": "MEMBERS"
                  }
                }
              ]
          }
      }
    }
  }
}
```

Aunque el estado siguiente diga que los dos son aprobadores, para calcular los firmantes de las distintas fases se usa el estado actual del sujeto, previo a aplicar el cambio en el estado de este nuevo evento que estamos creando, con lo que el único aprobador ahora mismo seguirá siendo el primer nodo por ser el dueño de la governance, por lo que debemos repetir el paso previo de autorización.
