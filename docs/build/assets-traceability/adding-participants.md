# Adding participants

## Premium wines

Perfecto, ahora tenemos el esquema que nos permitirá crear sujetos de tipo *Wine*. Sin embargo, si reflexionamos sobre ello, nos daremos cuenta de que no tenemos a nadie que pueda emitir eventos sobre este nuevo esquema, ya que no ha sido especificado en la gobernanza. Por lo tanto, debemos añadir un nuevo participante a nuestra red que se encargue de esta tarea.

Comenzaremos levantando el nodo:

```bash
cargo run -- --http \
    --http.port 3001 \
    -k 4f0e3c9cd24ab3420b81220bb7ebccb4e42501d3667dea81838b3bfaae20c936 \
    -d "/tmp/data1" \
    --network.listen_addr "/ip4/0.0.0.0/tcp/50001" \
    --network.known_node "/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk"
```

Un problema que enfrentamos es que el nodo actualmente no podrá acceder a esta gobernanza. Por lo tanto, antes de avanzar, debemos otorgar permisos previos a la gobernanza. Para hacerlo, ejecutaremos lo siguiente:

```bash
curl --silent --location --request PUT 'http://localhost:3001/api/allowed-subjects/{{GOVERNANCE-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": []
}'
```

Una vez que hemos habilitado al nuevo nodo para recibir notificaciones de la gobernanza, debemos realizar modificaciones en la misma. Todos los nuevos miembros que agreguemos a la gobernanza son testigos de ella, pero debemos asegurarnos además de que este nuevo nodo pueda crear sujetos de tipo *Wine*. Para lograrlo, debemos ejecutar lo siguiente:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
    "Fact": {
        "subject_id": {{GOVERNANCE-ID}},
            "payload": {
                "Patch": {
                    "data": [{
                        "op": "add",
                        "path": "/members/1",
                        "value": {
                        "id": "Ee-ZvImOQSgRBDR9XH0uQ5gbVv4828h_o5GuLbWFWaLI",
                        "name": "PremiumWines"
                        }
                    },
                    {
                        "op": "add",
                        "path": "/roles/2",
                        "value": {
                            "namespace": "",
                            "role": "CREATOR",
                            "schema": {
                                "ID": "Wine"
                            },
                            "who": {
                                "NAME": "PremiumWines"
                            }
                        }
                    }]
                }
            }
        }
    }
}'
```

Una vez emitido el evento, será necesario obtener la nueva petición de actualización, para ello ejecutamos:

```bash
curl --silent --location --request GET 'http://localhost:3000/api/approval-requests?status=Pending'
```

Compiaremos el valor del campo `id` y acepateremos la solicitud actualización de la gobernanza:

```bash
curl --silent --location --request PATCH 'http://localhost:3000/api/approval-requests/{{ID-ANTERIOR}}' \
--header 'x-api-key: 1453' \
--header 'Content-Type: application/json' \
--data-raw '{"approvalType": "Accept"}'
```

Consultamos la gobernanza desde el nuevo nodo y ahora debería de tener un `sn` 3 y el cambio efectuado en los roles:

```bash
curl --silent --silent --location --request GET 'http://localhost:3001/api/subjects?subject_type=governances'
```

## World Food Organization

Actualmente, **WPO** es el único dueño de la gobernanza y tiene el poder exclusivo de aprobar los cambios en la misma. Sin embargo, esto presenta un problema, ya que su poder es único y, por ejemplo, los consumidores en el mundo no tienen representación ni influencia sobre los cambios que se realizan en esta gobernanza. Por lo tanto, surge la necesidad de agregar un nuevo miembro a la gobernanza, *World Food Organization* (**WFO**), que actuará como segundo validador de la gobernanza y evitará el monopolio existente de **WPO**.

Por lo tanto, permitiremos que **WFO** tenga roles de aprobador, validador y evaluador de la gobernanza. También le permitiremos ser testigo de los sujetos de tipo *Wine*, ya que le interesa recopilar estadísticas de consumo.

Comenzaremos levantando el nodo **WFO**:

```bash
cargo run -- --http \
    --http.port 3002 \
    -k 6d3103185146ecedd28d3759df693999927e69aacb55e1aa9fe7ac17555da81c \
    -d "/tmp/data2" \
    --network.listen_addr "/ip4/0.0.0.0/tcp/50002" \
    --network.known_node "/ip4/127.0.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk"
```

Nos encontramos con un problema similar al nodo anterior, ya que este nuevo nodo tampoco podrá acceder a la gobernanza de forma predeterminada. Por lo tanto, antes de avanzar, debemos preautorizar la gobernanza para que el nuevo nodo pueda acceder a ella. A continuación, ejecutaremos lo siguiente:

```bash
curl --silent --location --request PUT 'http://localhost:3002/api/allowed-subjects/{{GOVERNANCE-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": []
}'
```

Modificamos la gobernanza para incluirlo y darle roles comentados anteriormente:

```bash
curl --silent --location --request POST 'http://localhost:3000/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw '{
    "request": {
    "Fact": {
        "subject_id": {{GOVERNANCE-ID}},
            "payload": {
                "Patch": {
                    "data": [{
                        "op": "add",
                        "path": "/members/2",
                        "value": {
                        "id": "EICgJYOXXRFqDMiFsrCcUgPYnCSgUT-zwe66LP8rDpPU",
                        "name": "WFO"
                        }
                    },
                    {
                        "op": "add",
                        "path": "/roles/3",
                        "value": {
                            "namespace": "",
                            "role": "APPROVER",
                            "schema": {
                                "ID": "governance"
                            },
                            "who": {
                                "NAME": "WFO"
                            }
                        }
                    },
                    {
                        "op": "add",
                        "path": "/roles/4",
                        "value": {
                            "namespace": "",
                            "role": "VALIDATOR",
                            "schema": {
                                "ID": "governance"
                            },
                            "who": {
                                "NAME": "WFO"
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
                                "NAME": "WFO"
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
                                "ID": "Wine"
                            },
                            "who": {
                                "NAME": "WFO"
                            }
                        }
                    }]
                }
            }
        }
    }
}'
```

Una vez ejecutado este comando debemos obtener de nuevo la petición de actualización, para ello ejecutamos:

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

Consultamos la gobernanza desde el nuevo nodo y ahora debería de tener un `sn` 4 y el cambio efectuado en los roles:

```bash
curl --silent --silent --location --request GET 'http://localhost:3002/api/subjects?subject_type=governances'
```