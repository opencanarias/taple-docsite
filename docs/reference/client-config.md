# TAPLE Client configuration

The configuration of a TAPLE node can be done at different levels, each of which overwrites the previous one in case of conflict. The order, and consequently the list of existing options, is as follows:
- Default configuration.
- Configuration by **.toml** file.
- Configuration by input parameters.
- Configuration by environment variables.

## Configuration by file

All TAPLE nodes can be configured using a settings.toml file that is located in the same location as the binary. This file does not have to specify all possible parameters, only those that are of interest to overwrite with respect to the default parameters.

Below is an example of these files with all possible parameters:

```toml
    httpport = 3000
    httpaddr = "0.0.0.0"
    # swaggerui = true
    # devmode = false

    [network]
    p2pport = 40000
    addr = "/ip4/0.0.0.0/tcp"
    knownodes = []
    [node]
    # Possible values: ed25519, secp256k1
    keyderivator = "Ed25519"
    # Possible values: Blake3_256, Blake3_512, SHA2_256, SHA2_512, SHA3_256, SHA3_512
    digestderivator = "Blake3_256"
    factor = 0.25
    timeout = 3000
    # Possible values:
    # "dissabled" - Disabled -> Vote process depends of the user intervention
    # "always_yes" - AlwaysYes -> Vote YES to all event requests
    # "always_no" - AlwaysNo -> Vote NO to all event requests
    passvotation = "dissabled"

    [database]
    path = "./store"
```
## Environment variables

There are several environment variables that can be used to configure the operation of a TAPLE node. 

:::caution
Bear in mind that any configuration through these variables will overwrite the one that has been done through the previous configuration file.
:::

- **TAPLE_HTTPPORT**: Port on which the REST API of the TAPLE node will be executed. Port 3000 is used by default.
- **TAPLE_HTTPADDR**: Listening address of the REST API of the TAPLE node. By default ***0.0.0.0.0***, which implies listening for requests from all available interfaces.
- **TAPLE_SWAGGERUI**: Specifies whether swagger-ui is activated.
- **TAPLE_NETWORK_P2PPORT**: Port for the transmission and reception of TAPLE protocol messages. Default is ***50000***.
- **TAPLE_NETWORK_ADDR**: Listening address for TAPLE protocol messages in **[Multiaddr](../discover/glossary.md#multiaddr)** format. Default, ***/ip4/0.0.0.0.0/tcp***.
- **TAPLE_NETWORK_KNOWNODES**: List of bootstrap nodes available in the network. Each item in the list must be a **[Multiaddr](../discover/glossary.md#multiaddr)** address that also specifies the PeerID of the node via the ***/p2p*** parameter. The elements are separated from each other by ***"; "***. By default no bootstrap node is specified.
- **TAPLE_NODE_SEED**: Allows to specify a seed for the generation of the node's internal cryptographic material. Note that, once a cryptographic material is generated, the node will not admit any other and will load it from its database. This is an optional configuration parameter. If neither this nor a private key to be imported is specified, a random cryptographic material shall be generated.
- **TAPLE_NODE_SECRETKEY**: Allows to specify a private key to import. This must be in hexadecimal format. It cannot be specified at the same time as a seed.
- **TAPLE_NODE_KEYDERIVATOR**: Specifies the cryptographic algorithm to be used for private key generation. Supported: Ed25519 (default) and Secp256k1.
- **TAPLE_NODE_DIGESTDERIVATOR**: Specifies the hashing algorithm to be used for identifier generation. Supported: Blake3_256 (default), Blake3_512, SHA2_256, SHA2_512, SHA3_256 and SHA3_512.
- **TAPLE_NODE_FACTOR**: Percentage of available nodes to send protocol messages to. Default 0.25.
- **TAPLE_NODE_TIMEOUT**: Timeout in milliseconds between sending the same message during the transmission of events and signatures. Default 3000.
- **TAPLE_NODE_DEVMODE**: Specifies whether to enable developer mode.
- **TAPLE_NODE_PASSVOTATION**: Specifies the response vote to all vote requests. It requires the ***TAPLE_NODE_DEVMODE*** enabled. Supported:  "dissabled" (default), "always_yes" and "always_no".
- **TAPLE_DATABASE_PATH**: Path in which to store the database. Default ***/tmp/data***.
:::danger
We strongly recommend to change **TAPLE_DATABASE_PATH** default path to any directory outside of ***/tmp/***. This directory is cleaned by the Linux system each time it is suspended or shut down.
:::

## Input parameters

In addition to environment variables, a node can be configured through input parameters. These allow you to specify the same elements as the environment variables. In case of conflict, however, the latter prevail.

The list of input parameters is given below. The same list can be obtained through the ***--help*** option.

```sh
    Node for a TAPLE network 

    Usage: taple_client [OPTIONS] 

    Options:
          --hp <httpport>    Port HTTP for the API REST
          --ui               Flag to activate swagger-ui
          --ha <httpaddr>    Listening ADDR for the API REST
      -h, --help             Print help
      -V, --version          Print version

    network:
          --knownnodes <knownnodes>  List of access points to use by the node. Each element is separated by ';'
      -a, --addr <addr>              Listening address for protocol messages
      -p, --p2pport <p2pport>        Port for the node to listen for protocol messages 

    node:
      -v, --passvotation <passvotation>  To vote to response to all vote request. It requires the dev mode enabled [possible values: dissabled, always_yes, always_no]
          --kd <keyderivator>            Key derivator to use by the TAPLE [possible values: ed25519, secp256k1]
      -s, --seed <seed>                  Seed to use to generate the MC
      -f, --factor <factor>              Replication factor to use by the node
      -m, --devmode                      Flag to activate the developer mode
          --dd <digestderivator>         Digest derivator to use by the TAPLE [possible values: Blake3_256, Blake3_512, SHA2_256, SHA2_512, SHA3_256, SHA3_512]
      -k, --secretkey <secretkey>        Secret Key in hexadecimal to import into the node
      -t, --timeout <timeout>            Replication factor to use by the node 
    
    database:
      -d, --databasepath <path>  Path where to store the database
```
