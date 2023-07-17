# Running the first node

(explicar como ejecutar taple-client. Hacer referencia al basic usage y la configuración)

Para levantar un nodo taple se debe ejecutar el binario [taple-client](https://github.com/opencanarias/taple-client), situado en la carpeta client del repositorio. Para usar su imagen docker ir a la página en [dockerhub](https://hub.docker.com/r/opencanarias/taple-client). Si nos colocamos en la raíz del repositorio podemos ejecutarlo lanzando:

```bash
docker run opencanarias/taple-client:0.2
```

Pero esto nos dará un error, ya que hay que especificar ciertos aspectos de la configuración de forma obligatoria, ejecutando el comando de ayuda (en el repo) obtenemos la siguiente información:

```bash
Node for a TAPLE network

Usage: taple-client [OPTIONS]

Options:
  -d, --dbpath <dbpath>
          Path where to store the database
  -k, --secret_key <secret_key>
          Secret Key in hexadecimal to import into the node
      --key_derivator <key_derivator>
          Key derivator to use by the TAPLE [default: ed25519] [possible values: ed25519, secp256k1]
      --digest_derivator <digest_derivator>
          Digest derivator to use by the TAPLE [default: Blake3_256] [possible values: Blake3_256, Blake3_512, SHA2_256, SHA2_512, SHA3_256, SHA3_512]
  -h, --help
          Print help
  -V, --version
          Print version

network(Network protocol configurations):
  -a, --network.listen_addr <network.listen_addr>
          Listening address for protocol messages
      --network.known_node <network.known_node>
          Known nodes at startup
  -p, --network.external_addresses <network.external_addresses>
          Known external addresses at startup

http(Server HTTP configurations):
      --http.port <http.port>  Port HTTP for the API REST
      --http.addr <http.addr>  Listening ADDR for the API REST
      --http.doc               Flag to activate OpenAPI documentation endpoint 
      --http                   Flag to activate HTTP server

experimental(Unstable configurations):
      --sc.build_path <sc.build_path>  Path in which contracts are compiled
```

Lo primero que debemos añadir obligatoriamente en la configuración es la clave privada. Podemos generar una válida usando taple-tools, que se encuentra en el mismo repositorio que el client en el directorio taple-tools, y en el [dockerhub](https://hub.docker.com/r/opencanarias/taple-tools). En concreto su binario **keygen**, que creará el material criptográfico necesario para el nodo. Una salida sin configuración extra nos dará un reesultado tal que:

```bash
PRIVATE KEY ED25519 (HEX): f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a
CONTROLLER ID ED25519: EnyisBz0lX9sRvvV0H-BXTrVtARjUa0YDHzaxFHWH-N4
PeerID: 12D3KooWLXexpg81PjdjnrhmHUxN7U5EtfXJgr9cahei1SJ9Ub3B
```

Lo que debemos añadir a la variable de entorno **TAPLE_SECRET_KEY** es la private key, en este caso: f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a.

:::caution IMPORTANT
Es importante destacar que se debe usar el mismo esquema criptográfico al generar la clave y añadirla en el client, keygen y client usan por defecto **ed25519**.
:::

Otra variable de entorno que debemos añadir es **TAPLE_HTTP**, que nos permitirá levantar el servidor http para poder usar la API REST. Para ello se debe poner **TAPLE_HTTP=true**.

Una vez tengamos esas dos variables podremos levantar el nodo con la configuración mínima (el puerto 3000 es el del servido http por defecto).

```bash
docker run -p 3000:3000 -p 50000:50000 -e TAPLE_SECRET_KEY=f78e9b42c3f265d0c5bf613f47bf4fb8fa3f18b3b38dd4e90ca7eed497e3394a -e TAPLE_HTTP=true opencanarias/taple-client:0.2 -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```
