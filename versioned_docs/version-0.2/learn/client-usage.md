# Basic usage

## Compiling the code
Rust versión 1.66 or higher is required.

```bash
$ git clone -b release-0.2 https://github.com/opencanarias/taple-client.git
$ cd taple-client
$ sudo apt install -y libprotobuf-dev protobuf-compiler cmake
$ rustup target add wasm32-unknown-unknown
$ cargo install --path client
$ taple-client --version
```

However, if you prefer, you can run TAPLE-Client through the docker images without compiling the code.

## Running a node

The minimum parameters required to start a Taple node are as follows:

* **Secret Key**: This is the private key that the node will possess at the time of initialisation and represents its identity within the network. It can be generated using `taple-keygen`.
* **Network Listen Addr**: [Multiaddr](https://docs.libp2p.io/concepts/fundamentals/addressing/) representing the network interfaces through which the node will listen for incoming connections. If no value is set, the default value will be `/ip4/0.0.0.0/tcp/40040`. The `0.0.0.0` represents that the node will listen on all available network interfaces, While `40040` indicates the listening port. However, we can specify the interface and port as we see fit, for example, `/ip4/0.0.0.0/tcp/50000`.
* **Network Known Node**: Multiaddr representing known nodes at startup. Except for the first one, all other nodes in the network must specify at least one known node.

For more information about all the available options to start our node, please refer to [this section](./client-config.md).

We then start by generating our cryptographic material to identify the node. For this we use the [taple-keygen](./client-tools.md#taple-keygen) tool.

```bash title="Basic usage example"
taple-keygen
```

```bash title="Output"
controller_id: EOZZyrorTvTioKsOP8PcGCngSF0b49ZuRlie5xtkuyOU
peer_id: 12D3KooWDhATtx42CRiKBCPJt9EgcwaLzwemK4m9SbyRHfJtNE7W
private_key: b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e
```

Now, to start our first node, we must execute the following command:

```bash title="Running binary"
taple-client \
  -k b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e \
  --network.listen-addr "/ip4/0.0.0.0/tcp/50000"
```

If you prefer to run TAPLE-Client through its docker image, run the following:

```bash title="Running docker image"
docker run \
  -p 50000:50000 \
  -e TAPLE_ID_PRIVATE_KEY=b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e \
  -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000 \
  opencanarias/taple-client:0.2
```

:::warning

The TAPLE Client docker image sets, by default, an internal path to the container itself to host the database. In a production environment you will need to set an external path to the container to host the database in order not to lose the information. For this you will need to set the configuration variable [DB_PATH](./client-config.md#database-path).

:::

### REST API

Each node with TAPLE-Client has the capability to expose its REST API, [as mentioned earlier](./taple-client.md#api-rest). It is not mandatory, but it might be necessary depending on the role our node plays within the use case. We can achieve this by using the following three parameters:

* **http**: Enables the *API REST*.
* **http.port**: Sets the communication port for the API REST; if not specified, it defaults to 3000.
* **http.doc**: Exposes the documentation of the API REST in [OpenAPI](https://swagger.io/specification/) format.

Now, we will proceed to start the node. However, before doing so, we must ensure that we have turned off the nodes from the previous steps:

```bash title="Enabling API REST"
taple-client \
  -k b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e \
  --network.listen-addr "/ip4/0.0.0.0/tcp/50000" \
  --http \
  --http.port 3000 \
  --http.doc
```

If the previous node has been successfully initialized, you can access the node's documentation through [this link](http://localhost:3000/api/doc/json).

:::warning Exposing services

We note that the REST API is likely useful for your internal network. However, if you choose to expose the REST API endpoint publicly, you should deploy an additional authentication or rate-limiting mechanism to prevent abuse. Remember that event requests, if not signed, will be signed with the node's own identity. 

:::

### Database Backups

To safely back up the database, you must stop the TAPLE node before backing up the database. This way, we will guarantee the consistency of the database at all times. This is because **TAPLE Client** is using **[LevelDB](https://github.com/google/leveldb)** as database, in which hot backups are not supported so far.

In this **[section](./client-config.md#environment-variables)**, you can find the definition of the different environment variables including `TAPLE_DB_PATH` which represents the path where the database is located.