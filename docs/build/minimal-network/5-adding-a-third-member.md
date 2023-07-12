# Adding a third member

## Levantar el tercer nodo

Para añadir un tercer miembro repetimos los pasos anteriores, lo primero es crear el material criptográfico con taple-keygen:

```bash
PRIVATE KEY ED25519 (HEX): 984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6
CONTROLLER ID ED25519: E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE
PeerID: 12D3KooWS4nPvBjbftvVQa4one9dQbneK66wVSLpZNSoTopxuNr4
```

Para lanzar el docker:

```bash
docker run -p 3002:3000 -p 50002:50000 -e TAPLE_SECRET_KEY=984af9a964bd6534418696814fa96244e7d719d51877e8e449514e941ff0c7d6 -e TAPLE_HTTP=true opencanarias/taple-client:0.2 -e TAPLE_NETWORK_KNOWN_NODE=/ip4/{addr}/tcp/50000/p2p/12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

## Modificar la gobernanza

Ahora lanzaremos el evento que añade al tercer miembro a la governance, pero para comprobar el funcionamiento de las aprobaciones votaremos que sí con un nodo y que no con el otro, lo que dejará el evento como rechazado por la fase de aprobación. Aún así se añadirá a la cadena del sujeto, pero no modificará el estado del mismo.

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
                    "path": "/members/2",
                    "value": {
                    "id": "E8WyEDqEvAZUOlZzydwtr1bYZHQ25gtNR2617PezbgoE",
                    "name": "Tutorial3"
                    }
                }
            ]
          }
      }
    }
  }
}
```

Debemos primero preguntar por las aprobaciones pendientes en **/api/approval-requests?status=pending** usando un **GET**. El id del json de respuesta es lo que debemos usar para aprobarla. En **/api/approval-requests/{id}** usando un **PATCH** añadiremos el id recibido para lanzar el voto.

En el nodo 1 la aprobaremos pero en el 2 la rechazaremos. Como el quorum es Majority significa que los dos deben aprobarla para que se apruebe. Con lo que si uno de los dos la rechaza quedará como rechazada porque no se podrá llegar al quorum de aceptación.

Nodo 1:

```json
{"approvalType": "Accept"}
```

Nodo 2:

```json
{"approvalType": "Reject"}
```

Comprobamos que el estado no se ha modificado buscando nuestros sujetos, sin embargo el sn del sujeto sí que habrá aumentado en 1. También podemos buscar un evento en concreto con la api de eventos: **/api/subjects/{id}/events/{sn}** cuyo id es el SubjectId del sujeto, el sn es el evento concreto que vamos a buscar (si no se añade nada devolverá todos los eventos del sujeto) y la petición es de tipo **GET**.

Ahora repetiremos la misma petición pero votaremos que sí con ambos nodos, lo que hará que se apruebe la petición y se modifique el estado del sujeto. Aprobamos la governance en el tercer nodo y veremos como la tendremos actualizada en un corto periodo de tiempo.
