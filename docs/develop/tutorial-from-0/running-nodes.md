# Running nodes

## Download docker image

The first step is to download the docker image hosted in [**Docker Hub**](https://hub.docker.com/r/opencanarias/taple-client). To do this, we run the following command:

```bash
    docker pull opencanarias/taple-client
```

To check that it has been downloaded correctly, execute the following command:

```bash
    docker images
```

Where you should see an output similar to the following:

```bash
    REPOSITORY           TAG       IMAGE ID       CREATED        SIZE
    opencanarias/taple-client   latest    c89c1118b5aa   20 hours ago   94.4MB
```

:::info

The version available in Docker Hub for this tutorial is version 0.1

:::

## Running the first node

Before launching any TAPLE node, we need cryptographic material to identify the node, to accomplish this, before each launch,  we need to run **taple-keygen**, getting the material we need:

```bash
$ taple-keygen ed25519
keygen
["taple-keygen", "ed25519"]
PRIVATE KEY ED25519 (HEX): da620c314e39bd464c0d8d8c18eba1d34d2537acbd2ec08c534a97e77fc40fd8
CONTROLLER ID ED25519: E5jAfbyK8sdmeCgXoDtRYdO2MJDwKd1_EN6aKbMEiJzw
PeerID: 12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo
```

In order to raise the first node, we must make use of some environment variables which you can find explained in detail in this **[section](../taple-client-config/#environment-variables)**. Also we will use the **PRIVATE KEY ED25519 (HEX)** that we got with the keygen tool in the **TAPLE_NODE_SECRETKEY** env variable. To raise the first node, we must execute the following command:

```bash
    docker run -d --rm -e TAPLE_HTTPPORT=3000 \
        -e TAPLE_NETWORK_ADDR=/ip4/0.0.0.0/tcp \
        -e TAPLE_NETWORK_P2PPORT=40000 \
        -e TAPLE_NODE_SECRETKEY=da620c314e39bd464c0d8d8c18eba1d34d2537acbd2ec08c534a97e77fc40fd8 \
        -e RUST_LOG=info \
        -p 3000:3000 \
        -p 40000:40000 \
        --name="node_0" \
        opencanarias/taple-client:latest
```

To check that the first node has been successfully lifted, run the following command:

```bash
    docker ps
```

Where you should see an output similar to the following:

```bash
    CONTAINER ID   IMAGE                       COMMAND   CREATED         STATUS        PORTS                                                                                      NAMES
    4b968e1fad34   opencanarias/taple:latest   "taple"   4 seconds ago   Up 3 seconds   0.0.0.0:3000->3000/tcp,:::3000->3000/tcp, 0.0.0.0:40000->40000/tcp, :::40000->40000/tcp   node_0
```

:::info

Note that this node also acts as a first.

:::

To know the address of the first node that we will use in later steps, you must execute the command ```docker logs node_0```.

```bash
    docker logs node_0
```

In which an output similar to the following can be seen:

```bash
    ...
    [2022-12-23T14:20:30Z INFO  network::network] RED: "/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo"
    ...
```

Usually Docker uses the default 172.17. 0.0/16 subnet for container networking. So if you are not specifying the network you should take the address of the docker network for the known nodes env variable in orden to communicate with appropriately between TAPLEs.

## Runing the second node

To raise a second node, we must follow the same steps as in previous **[section](#runing-the-first-node)** but with some small variations which are shown below:

```bash
    docker run -d --rm -e TAPLE_HTTPPORT=3001 \
        -e TAPLE_NETWORK_ADDR=/ip4/0.0.0.0/tcp \
        -e TAPLE_NETWORK_P2PPORT=40001 \
        -e TAPLE_NODE_SECRETKEY=ff1b755a8c86f84a930f93a883805db05b8fd76480431c243708dfac9dde087d \
        -e RUST_LOG=info \
        -e TAPLE_NETWORK_KNOWNNODES=/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo \
        -p 3001:3001 \
        -p 40001:40001 \
        --name="node_1" \
        opencanarias/taple-client:latest
```

As we can see, it has been necessary to change the ports and we have also added a new integer variable called **TAPLE_NETWORK_KNOWNODES** in which we must specify the address of the bootstrap node that we previously raised in **[Multiaddr](../../technology/glossary#multiaddr)** (/ip4/172.17.0.2/tcp/40000/p2p/12D3KooWRJvVv1oXdJxCNn6j5hsNSWs5zgDDt3Rq7yneouf1UdYo). This address is the one we have displayed in the previous step. This address can be generated from the information provided by the **taple-keygen** (through the PeerID) and then we compose the address according to our use case or we can see it as output when starting the node, as we have seen in this tutorial.
