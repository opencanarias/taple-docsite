# TAPLE Tools

TAPLE Tools are a group of utilities developed to facilitate the use of TAPLE Client, especially during testing and prototyping. In this section we will go deeper into them and how they can be obtained and used.

## Installation

There are different ways in which the user can acquire these tools. The first and most basic is the generation of their binaries through the compilation of their source code, which can be obtained through the public repositories. However, we recommend making use of the available docker images in conjunction with a series of scripts that abstract the use of these images, so that the user does not need to compile the code. 

### Compiling binaries

```bash
git clone -b release-0.2 https://github.com/opencanarias/taple-client.git
cd taple-client
sudo apt install -y libprotobuf-dev protobuf-compiler cmake
cargo install --path tools/keygen
cargo install --path tools/patch
cargo install --path tools/sign
taple-keygen -h
taple-sign -h
taple-patch -h
```

### Using docker images

```bash
git clone -b release-0.2 https://github.com/opencanarias/taple-client.git
cd taple-client
chmod +x ./tools/scripts/taple-keygen
chmod +x ./tools/scripts/taple-sign
chmod +x ./tools/scripts/taple-patch
./tools/scripts/taple-keygen -h
./tools/scripts/taple-sign -h
./tools/scripts/taple-patch -h
```

:::tip

These utilities may be used relatively frequently, so we recommend that you include the scripts in the PATH to simplify their use.

:::

## TAPLE Keygen

Any TAPLE node needs cryptographic material to function. To do so, it is necessary to generate it externally and then indicate it to the node, either by means of environment variables or through input parameters. The TAPLE Keygen utility satisfies this need by allowing, in a simple way, the generation of this cryptographic material. Specifically, its execution allows to obtain a ***private key*** in hexadecimal format, as well as the ***identifier (controller ID)*** which is the identifier at TAPLE level in which its format includes the public key, plus information of the cryptographic scheme used (you can obtain more information in the following **[link](../discover/identity.md)**). 

```bash title="Basic usage example"
taple-keygen
```

```bash title="Output"
controller_id: EOZZyrorTvTioKsOP8PcGCngSF0b49ZuRlie5xtkuyOU
peer_id: 12D3KooWDhATtx42CRiKBCPJt9EgcwaLzwemK4m9SbyRHfJtNE7W
private_key: b088fb74588dff74d5683b804d742418874db000e25ffec189fa313e825e1f7e
```

:::info

X and the other tools accept different execution arguments. For more information, try **--help**, for example:
```bash
taple-keygen --help
```

:::

## TAPLE Sign

This is an utility that is intended to facilitate the execution of external invocations. In order to provide context, [an external invocation](../discover/events.md#event-life-cycle) is the process by which a node proposes a change to a network subject that it does not control, i.e., of which it is not the owner. There are also a number of rules that regulate which network users have the ability to perform these operations. In either case, the invoking node must present, in addition to the changes it wishes to suggest, a valid signature to prove its identity.

TAPLE Sign allows precisely the latter, generating the necessary signature to accompany the request for changes. Additionally, as the utility is strictly intended for such a scenario, what is actually returned by its execution is the entire data structure (in JSON format) that must be delivered to other nodes in the network for them to consider the request.

For the correct operation of the utility, it is necessary to pass as arguments both the event request data and the private key in hexadecimal format to be used.

```bash title="Basic usage example"
taple-sign 2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198 '{"Transfer":{"subject_id":"JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU","public_key":"E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew"}}'
```

```json title="Output"
{
  "request": {
    "Transfer": {
      "subject_id": "JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU",
      "public_key": "E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew"
    }
  },
  "signature": {
    "signer": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
    "timestamp": 1690284971374522723,
    "value": "SE5QkVNuFJh5cj4ZViiGC760gsocR6EqdoGNrzFNB0WusuzslcfElgdTt6Ag_Qe17Fg1lja8f5zd81M91OKo6XCQ"
  }
}
```

:::caution

It is important to note that currently only private keys of the ***ED25519*** algorithm are supported

:::

:::tip

If you need to pass the evento request to taple-sign through a pipe instead of as an argument, you can use the [xargs](https://man7.org/linux/man-pages/man1/xargs.1.html) utility. For example,
```bash
echo '{"Transfer":{"subject_id":"JjyqcA-44TjpwBjMTu9kLV21kYfdIAu638juh6ye1gyU","public_key":"E9M2WgjXLFxJ-zrlZjUcwtmyXqgT1xXlwYsKZv47Duew"}}' | xargs -0 -I {} taple-sign "2a71a0aff12c2de9e21d76e0538741aa9ac6da9ff7f467cf8b7211bd008a3198" {}
```

:::

## TAPLE Patch
Currently the [contract that handles governance changes](./governance-schema-and-contract.md) only allows one type of event that includes a **JSON-Patch**.

JSON-Patch is a data format that represents changes to JSON data structures. Thus, starting from an initial structure, after applying the JSON-Patch, an updated structure is obtained. In the case of TAPLE, the JSON-Patch defines the changes to be made to the data structure that represents governance when it needs to be modified. TAPLE Patch allows us to calculate the JSON-Patch in a simple way if we have the original governance and the modified governance.

```bash title="Basic usage example"
taple-patch '{"members":[]}' '{"members":[{"id":"EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA","name":"ACME"}]}'
```

```bash title="Output"
[
  {
    "op": "add",
    "path": "/members/0",
    "value": {
      "id": "EtbFWPL6eVOkvMMiAYV8qio291zd3viCMepUL6sY7RjA",
      "name": "ACME"
    }
  }
]
```

Once the JSON-Patch is obtained it can be included in an event request to be sent to the governance owner.


:::tip

Although TAPLE-Patch has been developed to facilitate modifications to TAPLE governance, it is really just a utility that generates a JSON-PATH from 2 JSON objects, so it can be used for other purposes.
:::