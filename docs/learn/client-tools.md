# TAPLE Tools

TAPLE Tools are a group of utilities developed to facilitate the use of TAPLE Client, especially during testing and prototyping. In this section we will go deeper into them and how they can be obtained and used.

## Installation

There are different ways in which the user can acquire these tools. The first and most basic is the generation of their binaries through the compilation of their source code, which can be obtained through the public repositories. However, we recommend making use of the available images in conjunction with a series of scripts that abstract the use of these images, so that the user does not need to interact with the code directly. Considering this last option, you need to access the [repository](https://github.com/opencanarias/taple-client/tree/release-0.2/taple-tools) to get the scripts, located in the directory with the same name. These scripts will download the required image if needed. Essentially, once you have downloaded the scripts, run:

```bash
  git clone -b release-0.2 https://github.com/opencanarias/taple-client.git
  cd taple-client/taple-tools
  chmod +x ./scripts/taple-keygen
  chmod +x ./scripts/taple-sign
  chmod +x ./scripts/taple-patch
  ./scripts/taple-keygen -h
  ./scripts/taple-sign -h
  ./scripts/taple-patch -h
```

If you prefer to compile the code and work with the resulting binaries:

```bash
  git clone -b release-0.2 https://github.com/opencanarias/taple-client.git
  cd taple-client/taple-tools
  cargo install --path taple-keygen
  cargo install --path taple-sign
  taple-keygen -h
  taple-sign -h
  taple-patch -h
```

Note that regardless of the method you choose, the way to use the utilities is the same.

:::info
These utilities may be used relatively frequently, so we recommend that you include them in the PATH to simplify their use.
:::

## TAPLE Keygen

Any TAPLE node needs cryptographic material to function. To do so, it is necessary to generate it externally and then indicate it to the node, either by means of environment variables or through input parameters. The TAPLE Keygen utility satisfies this need by allowing, in a simple way, the generation of this cryptographic material. Specifically, its execution allows to obtain a ***private key*** in hexadecimal format, as well as the ***identifier (controller ID)*** which is the identifier at TAPLE level in which its format includes the public key, plus information of the cryptographic scheme used (you can obtain more information in the following **[link](../discover/identity.md)**). Finally, we can find the Peer ID that the node using the generated private key would have, which is what allows us to identify ourselves within the TAPLE network.

To use this utility:
```bash
  taple-keygen [OPTIONS] [MODE]
```

In which ***Mode*** is the argument specifying the cryptographic algorithm:
- ed25519 (Default)
- secp256k1

The existing options are:
```
  -h, --help           Print help information
  -V, --version        Print version information
```

Here is an example of use
```bash
taple-keygen
# Output
PRIVATE KEY ED25519 (HEX): 2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198
CONTROLLER ID ED25519: EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA
PeerID: 12D3KooWN3coLXzLcj8A5ftudcFF38PbZ3qHBkwgcLxPNYWnUiv3
```

:::info
It should be noted that currently only two algorithms are supported but TAPLE is intended to add new algorithms (more information can be found in the following **[link](../discover/index.md#objectives)**).
:::

## TAPLE Sign

This is an utility that is intended to facilitate the execution of external invocations. In order to provide context, [an external invocation](../discover/events.md#event-life-cycle) is the process by which a node proposes a change to a network subject that it does not control, i.e., of which it is not the owner. There are also a number of rules that regulate which network users have the ability to perform these operations. In either case, the invoking node must present, in addition to the changes it wishes to suggest, a valid signature to prove its identity.

TAPLE Sign allows precisely the latter, generating the necessary signature to accompany the request for changes. Additionally, as the utility is strictly intended for such a scenario, what is actually returned by its execution is the entire data structure (in JSON format) that must be delivered to other nodes in the network for them to consider the request.

For the correct operation of the utility, it is necessary to pass as arguments both the change request data and the private key in hexadecimal format to be used.

Thus, its use would be as follows:

```bash
taple-sign [OPTIONS] <PRIVATE_KEY> <REQUEST>
```

:::caution
It is important to note that currently only private keys of the ***ED25519*** algorithm are supported
:::
The format of the request must be ***JSON String***. Note that this implies that special characters must be escaped. Thus, for example, the following request in JSON format:
```json
{
  "Transfer": {
    "subject_id": "JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU",
    "public_key":"E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew"
  }
}
```

Would result in:

```
"{\"Transfer\":{\"subject_id\":\"JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU\",\"public_key\":\"E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew\"}}"
``` 

The existing options are:
```
    -h, --help           Print help information
    -V, --version        Print version information
```

Here is an example of use:
```bash
taple-sign "2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198" "{\"Transfer\":{\"subject_id\":\"JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU\",\"public_key\":\"E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew\"}}"

# Output
{
  "request": {
    "Transfer": {
      "subject_id": "JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU",
      "public_key": "E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew",
    }
  },
  "signature": {
    "signer": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
    "timestamp": 1689683051761526319,
    "value": "SERgux6drlM0eBapwv4rkJ-OkXz8ZlOqwTvVB0jkAA5lVKVq1kYNqQVKH7F7FIRgACUkHd8Dl-7R_3H89hg1JFDA"
  }
}
```

## TAPLE Patch

Se trata de una utilidad destinada a la generación de cambios de estado en un sujeto de tipo gobernanza. Esto se logra mediante la modificación de sus propiedades internas. Como ya ha sido mencionado en otros puntos de la documentación, las gobernanzas, en la definición de su contrato inteligente, establecen un único método de invocación que permite alterar sus propiedades. Este método recibe un parámetro que debe ser un objeto *JSON Patch*.

Taple Patch permite generar este *JSON Patch*. Para emplear esta utilidad, se deben proporcionar dos parámetros en formato *JSON String*. El primero de ellos corresponde a las propiedades antiguas de la gobernanza, mientras que el segundo representa las nuevas propiedades que deseamos agregar.

A continuación se muestra cómo se utiliza:
```bash
taple-patch [OPTIONS] <STATE> <NEW_STATE>
```

El formato de la solicitiud, al igual que en el Taple Sing debe ser JSON String. Tenga en cuenta que eso implica que los caracteres especiales deben ser escapados. Así, por ejemplo, la siguiente petición en formato JSON:
```json
{
  "members": [
    {
      "id": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
      "name": "Test"
    }
  ]
}
```

Would result in:
```
"{\"members\":[{\"id\":\"EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA\",\"name\":\"Test\"}]}"
```

The existing options are:
```
    -h, --help           Print help information
    -V, --version        Print version information
```

Here is an example of use:
```bash
taple-patch "{\"members\":[]}" "{\"members\":[{\"id\":\"EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA\",\"name\":\"Test\"}]}"

# Output
[
  {
    "op": "add",
    "path": "/members/0",
    "value": {
      "id": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
      "name": "Test"
    }
  }
]
```