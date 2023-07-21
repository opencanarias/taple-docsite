# Basic usage

## Running a node

The minimum parameters required to start a Taple node are as follows:

* **Secret Key**: This is the private key that the node will possess upon initialization. It is of utmost importance as it allows the identification of the node within the network. It can be generated using `taple-keygen`.
* **Network Listen Addr**: [Multiaddr](https://docs.libp2p.io/concepts/fundamentals/addressing/) representing the network interfaces through which the node will listen for incoming connections. If no value is set, the default value will be `/ip4/0.0.0.0/tcp/40040`. The `0.0.0.0` represents that the node will listen on all available network interfaces through port `40040`. However, we can specify the interface and port as we see fit, for example, `/ip4/0.0.0.0/tcp/50000`.

For more information about all the available options to start our node, please refer to [this section](client-config.md).

:::warning Exposing services

We note that the REST API is likely useful for your internal network. However, if you choose to expose the REST API endpoint publicly, you should deploy an additional authentication or rate-limiting mechanism to prevent abuse. Remember that event requests, if not signed, will be signed with the node's own identity. 

:::

Comenzamos entonces generando nuestro material criptográfico para indentificar al nodo. Por tanto, primero ejecutaremos el archivo binario `taple-keygen` para obtenerlo: 

```bash
taple-keygen 
```

```
PRIVATE KEY ED25519 (HEX): 7a747ddf55cf9b2ceb3b41a7c7ce9f88f835c120644e3c7522d97520668c8520
CONTROLLER ID ED25519: Eup853UZkZaGQEqPBSUMY_dJWCLrmjy6BuPllWEiSdcM
PeerID: 12D3KooWNNrpZmxF8WKoxM9yMBSixZNM7bic9scaGJDb2ioL4AQa
```

### Running with binary

Ahora, para iniciar nuestro primer nodo, debemos ejecutar el siguiente comando:

```bash
./taple-client --http \
  --http.port 3000 \
  -k 7a747ddf55cf9b2ceb3b41a7c7ce9f88f835c120644e3c7522d97520668c8520 \
  --network.listen-addr "/ip4/0.0.0.0/tcp/50000"
```

### Running with Docker

Ahora, para iniciar nuestro primero nodo, debemos ejecutar el siguiente comando:

```bash
docker run opencanarias/taple-client:0.2 \
  -p 50000:50000 \
  -e TAPLE_HTTP=true \
  -e TAPLE_SECRET_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
  -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

## REST API

Each node with TAPLE-Client has the capability to expose its REST API, as mentioned earlier. It is not mandatory, but it might be necessary depending on the role our node plays within the use case. In our case, enabling this feature and its documentation is necessary. We can achieve this by using the following three parameters:

* **http**: Enables the *API REST*.
* **http.port**: Sets the communication port for the API REST; if not specified, it defaults to 3000.
* **http.doc**: Exposes the documentation of the API REST in [OpenAPI](https://swagger.io/specification/) format.

Now, we will proceed to start the node. However, before doing so, we must ensure that we have turned off the nodes from the previous steps:

```bash title="Binary option"
./taple-client --http \
  --http.port 3000 \
  -k 7a747ddf55cf9b2ceb3b41a7c7ce9f88f835c120644e3c7522d97520668c8520 \
  --network.listen-addr "/ip4/0.0.0.0/tcp/50000" \
  --http.doc
```

or

```bash title="Docker option"
docker run opencanarias/taple-client:0.2 \
  -p 3000:3000 \
  -p 50000:50000 \
  -e TAPLE_HTTP=true \
  -e TAPLE_SECRET_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
  -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \
  -e TAPLE_HTTP_DOC
```

If the previous node has been successfully initialized, you can access the node's documentation through [this link](http://localhost:3000/api/documentation).

:::note
To explore all the endpoints of this version of Taple without leaving the documentation, you can refer to [this section](../api-rest/create-event-request.api.mdx).
:::

## Backups

To safely back up the database, you must stop the TAPLE node before backing up the database. This way, we will guarantee the consistency of the database at all times. This is because **TAPLE Client** is using **[LevelDB](https://github.com/google/leveldb)** as database, in which hot backups are not supported so far.

In this **[section](./client-config.md#environment-variables)**, you can find the definition of the different environment variables including `TAPLE_DB_PATH` which represents the path where the database is located.