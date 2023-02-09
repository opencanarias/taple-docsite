# TAPLE Tools

A set of tools and utilities aimed at facilitating interaction with TAPLE technology is available to the user. In this section we will go deeper into them and how they can be obtained and used.

## Installation

There are different ways in which the user can acquire these tools. The first and most basic is the generation of their binaries through the compilation of their source code, which can be obtained through the public repositories. However, we recommend making use of the available images in conjunction with a series of scripts that abstract the use of these images, so that the user does not need to interact with the code directly. Considering this last option, you need to access the [repository](https://github.com/opencanarias/taple-tools) to get the scripts, located in the directory with the same name. These scripts will download the required image if needed. Essentially, once you have downloaded the scripts, run:


```bash
  git clone https://github.com/opencanarias/taple-tools.git
  cd taple-tools
  chmod +x ./scripts/taple-keygen
  chmod +x ./scripts/taple-sign
  ./scripts/taple-keygen -h
  ./scripts/taple-sign -h
```

If you prefer to compile the code and work with the resulting binaries:

```bash
  git clone https://github.com/opencanarias/taple-core.git
  git clone https://github.com/opencanarias/taple-tools.git
  cd taple-tools
  cargo install --path taple-keygen
  cargo install --path taple-sign
  taple-keygen -h
  taple-sign -h
```

Note that regardless of the method you choose, the way to use the utilities is the same.

:::info
These utilities may be used relatively frequently, so we recommend that you include them in the PATH to simplify their use.
:::

## TAPLE Keygen

Any TAPLE node needs cryptographic material to function. To do so, it is necessary to generate it externally and then indicate it to the node, either by means of environment variables or through input parameters. The TAPLE Keygen utility satisfies this need by allowing, in a simple way, the generation of this cryptographic material. Specifically, its execution allows to obtain a ***private key*** in hexadecimal format, as well as the ***identifier (controller ID)*** which is the identifier at TAPLE level in which its format includes the public key, plus information of the cryptographic scheme used (you can obtain more information in the following **[link](../technology/identity)**). Finally, we can find the Peer ID that the node using the generated private key would have, which is what allows us to identify ourselves within the TAPLE network.

To use this utility:
```
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
PRIVATE KEY ED25519 (HEX): 2999aa4107f2ce1c8699623db0bb79295e40fa6975a3f54ffe93249ade16d775
CONTROLLER ID ED25519: EGVIxhXCVPSjGJ2vEl6Be-CytEbaSdMfRGHn-UXrgEfU
PeerID: 12D3KooWBXD44QCJEes2199hTGeutyG3a2cmv2YG1Y3Fi8By12fv
```

:::info
It should be noted that currently only two algorithms are supported but TAPLE is intended to add new algorithms (more information can be found in the following **[link](../technology/what-is-taple#objectives)**).
:::

## TAPLE Sign

This is an utility that is intended to facilitate the execution of external invocations. In order to provide context, [an external invocation](../technology/event-life-cycle.md) is the process by which a node proposes a change to a network subject that it does not control, i.e., of which it is not the owner. There are also a number of rules that regulate which network users have the ability to perform these operations. In either case, the invoking node must present, in addition to the changes it wishes to suggest, a valid signature to prove its identity.

TAPLE Sign allows precisely the latter, generating the necessary signature to accompany the request for changes. Additionally, as the utility is strictly intended for such a scenario, what is actually returned by its execution is the entire data structure (in JSON format) that must be delivered to other nodes in the network for them to consider the request.

For the correct operation of the utility, it is necessary to pass as arguments both the change request data and the private key in hexadecimal format to be used.

Thus, its use would be as follows:

```
taple-sign [OPTIONS] <PRIVATE_KEY> <REQUEST>
```

:::caution
It is important to note that currently only private keys of the ***ED25519*** algorithm are supported
:::
The format of the request must be ***JSON String***. Note that this implies that special characters must be escaped. Thus, for example, the following request in JSON format:
```json
{
  "subject_id":"Js6jwJIfGm362YXrlaCgybjIfbdB6vjNo4RGu_cDoi6Q",
  "payload":{
    "Json":{
      "test":"test"
    }
  }
}
```

Would result in:

```
"{\"subject_id\":\"Js6jwJIfGm362YXrlaCgybjIfbdB6vjNo4RGu_cDoi6Q\",\"payload\":{\"Json\":{\"test\":\"test\"}}}"
``` 

The existing options are:
```
    -h, --help           Print help information
    -V, --version        Print version information
```

Here is an example of use
```bash
taple-sign 2999aa4107f2ce1c8699623db0bb79295e40fa6975a3f54ffe93249ade16d775 \
"{\"subject_id\":\"Js6jwJIfGm362YXrlaCgybjIfbdB6vjNo4RGu_cDoi6Q\",\"payload\":{\"Json\":{\"test\":\"test\"}}}"

# Output

{
  "request": {
    "State": {
      "subject_id": "Js6jwJIfGm362YXrlaCgybjIfbdB6vjNo4RGu_cDoi6Q",
      "payload": {
        "Json": {
          "test": "test"
        }
      }
    }
  },
  "timestamp": 1673956776446,
  "signature": {
    "content": {
      "signer": "EGVIxhXCVPSjGJ2vEl6Be-CytEbaSdMfRGHn-UXrgEfU",
      "event_content_hash": "JwR68kZu1xlZrsJhUa9PuJkwSp7AaVUkL4L8uNrSfhEs",
      "timestamp": 1673956776446
    },
    "signature": "SEYHtydTm7D8-lnXKNMC-ZZljI5pynbwTR1zBh0O6q_jzfCEYHI22tlGjso2s7OJ_IOK9McMVcJKSzY2asuQ3ZBw"
  }
}
```
