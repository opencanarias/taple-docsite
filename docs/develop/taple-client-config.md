# TAPLE Client configuration

The configuration of a TAPLE node can be done at different levels, each of which overwrites the previous one in case of conflict. The order, and consequently the list of existing options, is as follows:
- Default configuration.
- Configuration by **.toml** file.
- Configuration by environment variables.
- Configuration by input parameters.

## Configuration by file

All TAPLE nodes can be configured using a settings.toml file that is located in the same location as the binary. This file does not have to specify all possible parameters, only those that are of interest to overwrite with respect to the default parameters.

Below is an example of these files with all possible parameters:

```toml
httpport = 3000
httpaddr = "0.0.0.0"
# apikey = "foo"
# swaggerui = true

[settings.network]
p2pport = 40000
addr = "/ip4/0.0.0.0/tcp"
accesspoints = []
[settings.node]
# Possible values: ed25519, secp256k1
key-derivator = "Ed25519"
# Possible values: Blake3_256, Blake3_512, SHA2_256, SHA2_512, SHA3_256, SHA3_512
digest-derivator = "Blake3_256"
replication-factor = 0.25
timeout = 3000
# Possible values:
# 0 - Disabled -> Vote process depends of the user intervention
# 1 - AlwaysYes -> Vote YES to all event requests
# 2 - AlwaysNo -> Vote NO to all event requests
passvotation = 0

[settings.database]
path = "./store"
```
## Environment variables

There are several environment variables that can be used to configure the operation of a TAPLE node. 

:::caution
Bear in mind that any configuration through these variables will overwrite the one that has been done through the previous configuration file.
:::

- **TAPLE_HTTPPORT**: Port on which the REST API of the TAPLE node will be executed. Port 3000 is used by default.
- **TAPLE_HTTPADDR**: Listening address of the REST API of the TAPLE node. By default ***0.0.0.0.0***, which implies listening for requests from all available interfaces.
- **TAPLE_NETWORK_P2PPORT**: Port for the transmission and reception of TAPLE protocol messages. Default is ***50000***.
- **TAPLE_NETWORK_ADDR**: Listening address for TAPLE protocol messages in **[Multiaddr](../technology/glossary.md/#multiaddr)** format. Default, ***/ip4/0.0.0.0.0/tcp***.
- **TAPLE_NETWORK_KNOWNODES**: List of bootstrap nodes available in the network. Each item in the list must be a **[Multiaddr](../technology/glossary.md/#multiaddr)** address that also specifies the PeerID of the node via the ***/p2p*** parameter. The elements are separated from each other by ***"; "***. By default no bootstrap node is specified.
- **TAPLE_NODE_SEED**: Allows to specify a seed for the generation of the node's internal cryptographic material. Note that, once a cryptographic material is generated, the node will not admit any other and will load it from its database. This is an optional configuration parameter. If neither this nor a private key to be imported is specified, a random cryptographic material shall be generated.
- **TAPLE_NODE_SECRETKEY**: Allows to specify a private key to import. This must be in hexadecimal format. It cannot be specified at the same time as a seed.
- **TAPLE_KEYDERIVATOR**: Specifies the cryptographic algorithm to be used for private key generation. Supported: Ed25519 (default) and Secp256k1.
- **TAPLE_DIGESTDERIVATOR**: Specifies the hashing algorithm to be used for identifier generation. Supported: Blake3_256 (default), Blake3_512, SHA2_256, SHA2_512, SHA3_256 and SHA3_512.
- **TAPLE_REPLICATIONFACTOR**: Percentage of available nodes to send protocol messages to. Default 0.25.
- **TAPLE_TIMEOUT**: Timeout in milliseconds between sending the same message during the transmission of events and signatures. Default 3000.
- **TAPLE_DATABASE_PATH**: Path in which to store the database. Default ***/tmp/data***.
:::danger
We strongly recommend to change **TAPLE_DATABASE_PATH** default path to any directory outside of ***/tmp/***. This directory is cleaned by the Linux system each time it is suspended or shut down.
:::

## Input parameters

In addition to environment variables, a node can be configured through input parameters. These allow you to specify the same elements as the environment variables. In case of conflict, however, the latter prevail.

The list of input parameters is given below. The same list can be obtained through the ***--help*** option.

```sh
       --hp <HTTPPORT>                Port HTTP for the API REST
       --ha <HTTPADDR>                Listening ADDR for the API REST
   -p, --p2pport <P2PPORT>            Port for the node to listen for protocol messages
   -a, --addr <ADDR>                  Listening address for protocol messages
       --accesspoints <ACCESSPOINTS>  List of access points to use by the node. Each element is separated by ';'
   -s, --seed <SEED>                  Seed to use to generate the MC
   -k, --secretkey <SECRETKEY>        Secret Key in hexadecimal to import into the node
       --kd <KEYDERIVATOR>            Key derivator to use by the TAPLE [possible values: ed25519, secp256k1]
       --dd <DIGESTDERIVATOR>         Digest derivator to use by the TAPLE [possible values: blake3-256, blake3-512, sha2-256, sha2-512, sha3-256, sha3-512]
   -f, --factor <FACTOR>              Replication factor to use by the node
   -t, --timeout <TIMEOUT>            Time to wait fot each message sended
       --apikey <APIKEY>              API KEY for the api rest server
   -d, --databasepath <DATABASEPATH>  Path where to store the database
   -m, --devmode                      Flag to activate the developer mode
   -v, --passvotation <PASSVOTATION>  To vote to response to all vote request. It requires the dev mode enabled [possible values: disabled, always-yes, always-no]
       --ui                           Flag to activate swagger-ui
   -h, --help                         Print help information
   -V, --version                      Print version information
```