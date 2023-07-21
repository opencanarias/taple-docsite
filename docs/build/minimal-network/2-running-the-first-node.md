# Running the first node

To launch a taple node, you must execute the [taple-client](https://github.com/opencanarias/taple-client) binary, located in the client folder of the repository. To use its Docker image, go to the page on [dockerhub](https://hub.docker.com/r/opencanarias/taple-client).

If we do not have the image or we do not have the latest version, download it with:

```bash
docker pull opencanarias/taple-client:0.2
```

We can execute it by launching:

```bash
docker run opencanarias/taple-client:0.2
```

However, this will give us an error, as we must specify certain aspects of the configuration mandatorily.

The first thing we must mandatorily add to the configuration is the private key. We can generate a valid one using taple-tools, which is found in the same repository as the client in the taple-tools directory, and on [dockerhub](https://hub.docker.com/r/opencanarias/taple-tools). Specifically, its keygen binary, which will create the necessary cryptographic material for the node. An output without extra configuration will give us a result such as:

```bash
PRIVATE KEY ED25519 (HEX): f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a
CONTROLLER ID ED25519: EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4
PeerID: 12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B
```

What we must add to the TAPLE_SECRET_KEY environment variable is the private key, in this case: f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a.

:::caution IMPORTANT
It's important to highlight that the same cryptographic scheme should be used when generating the key and adding it to the client, keygen and client use ed25519 by default.
:::

Another environment variable we must add is **TAPLE_HTTP**, which will allow us to launch the http server to be able to use the REST API. For this, you must set **TAPLE_HTTP=true**.

Once we have these two variables, we will be able to launch the node with the minimum configuration (port 3000 is the default for the http service).

```bash
docker run -p 3000:3000 -p 50000:50000 \ 
-e TAPLE_SECRET_KEY=f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a \ 
-e TAPLE_HTTP=true opencanarias/taple-client:0.2 \ 
-e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```
