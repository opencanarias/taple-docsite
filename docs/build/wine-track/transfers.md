# Transfers

Llegados a este punto, tenemos un sujeto de tipo *Wine* que ha experimentado varias modificaciones de estado. Ahora nos interesa transferir la propiedad de este sujeto a un **ciudadano** que desee adquirirlo.

Cualquier sujeto que no haya finalizado su ciclo de vida en Taple puede ser transferido a un nuevo propietario, ya sea este parte o no de la gobernanza donde se haya declarado el sujeto.

Para llevar a cabo esta transferencia, debemos levantar un nuevo nodo que actuará como nuestro nuevo propietario externo a la gobernanza. Para hacerlo, seguiremos los siguientes pasos:

```bash
cargo run -- --http \
    --http.port 3004 \
    -k 4f0e3c9cd24ab3420b81220bb7ebccb4e42501d3667dea81838b3bfaae20c936 \
    -d "/tmp/data1" \
    --network.listen_addr "/ip4/0.0.0.0/tcp/50004" \
    --network.known_node "/ip4/172.17.0.1/tcp/50000/p2p/12D3KooWHHjN5vKSKeCWiBG3gHaDRDp6YzsEgu9iTesYqrWxAgFk"
```

Generamos la nueva clave pública para el sujeto sobre el nuevo nodo:

```bash
curl --location --request POST 'http://localhost:3004/api/keys' \
--form 'algorithm="Ed25519"'
```

Activamos la preautorización de la gobernanza desde la que queremos transferir el sujeto, dentro de los `providers` especificaremos al nodo propietario de la misma:

```bash
curl --location --location --request PUT 'http://localhost:3004/api/allowed-subjects/{{GOVERNANCE-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": ["EbwR0yYrCYpTzlN5i5GX_MtAbKRw5y2euv3TqiTgwggs"]
}'
```

Activamos la preautorización del sujeto que queremos transferir a este nuevo nodo:

```bash
curl --silent --location --request PUT 'http://localhost:3004/api/allowed-subjects/{{SUBJECT-ID}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "providers": []
}'
```

Tenemos que firmar la solicitud de transferencia con el material del nuevo nodo. Para hacerlo, ejecutaremos lo siguiente:

```bash
cargo run "2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198" "{\"Transfer\":{\"subject_id\":\"{{SUBJECT-ID}}\",\"public_key\":\"{{NEW-PUBLIC-KEY}}\"}}"
```

El resultado de esta ejecución lo incluiremos en la siguiente solicitud:

```bash
curl --silent --location --request POST 'http://localhost:3001/api/event-requests' \
--header 'Content-Type: application/json' \
--data-raw 'SIGN-RESULT'
```

Ahora, el nuevo nodo debería ser capaz de visualizar este nuevo sujeto y verificar que es el nuevo propietario del mismo. Para hacerlo, puedes ejecutar el siguiente comando:

```bash
curl --silent --location --request GET 'http://localhost:3004/api/subjects?subject_type=all&governanceid={{GOVERNANCE-ID}}'
```