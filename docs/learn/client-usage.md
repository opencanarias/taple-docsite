# Basic usage

## Running a node

<!--
Explicar los parámetros básicos para ejecutar un nodo. Poner referencia a la página de configuración con todas las opciones.

Podemos tomar como referencia la página del tutorial antiguo de running nodes, hacer para la versión ejecutable, y despues comentar que se puede hacer con docker y que lo más fácil es usar variables de entorno. Hacer referencia ala pagina de configuración donde se explica como se traducen paŕametros de linea de comandos a variables de entorno y poner un ejemplo. 
-->
Los parámetros mínimos necesarios para iniciar un nodo de Taple son los siguientes:

  * **http**: Es una indicación fundamental que se utiliza para especificar que se desea utilizar el protocolo HTTP para la ejecución de la *API REST*.
  * **secret key**:  Es la clave privada que poseerá el nodo al iniciarse. Es de gran importancia ya que permite identificar al nodo dentro de la red. Puede generarse utilizando `taple-keygen`.
  * **network listen addr**: Es la dirección a través de la cual el nodo recibirá los mensajes enviados por la red. En la mayoría de la documentación, esta dirección será `0.0.0.0`, que es el valor predeterminado que permite escuchar todos los mensajes de la red. El puerto *P2P* por convenio hemos hecho que empece siempre en el 5000.

:::caution
Para obtener más información sobre todas las opciones disponibles para iniciar nuestro nodo, consulte [esta sección](client-config.md).
:::

### Running with binary

Antes de ejecutar un nodo de Taple, necesitaremos generar un nuevo material criptográfico para identificar el nodo. Por lo tanto, primero ejecutaremos el archivo binario `taple-keygen` para obtenerlo:

```bash
./taple-keygen 
PRIVATE KEY ED25519 (HEX): 7a747ddf55cf9b2ceb3b41a7c7ce9f88f835c120644e3c7522d97520668c8520
CONTROLLER ID ED25519: Eup853UZkZaGQEqPBSUMY_dJWCLrmjy6BuPllWEiSdcM
PeerID: 12D3KooWNNrpZmxF8WKoxM9yMBSixZNM7bic9scaGJDb2ioL4AQa
```

Ahora, para iniciar nuestro primer nodo, debemos ejecutar el siguiente comando:

```bash
./taple-client --http \
  --http.port 3000 \
  -k 7a747ddf55cf9b2ceb3b41a7c7ce9f88f835c120644e3c7522d97520668c8520 \
  --network.listen_addr "/ip4/0.0.0.0/tcp/50000"
```

### Running with Docker

El uso del archivo binario de Taple Client no es la única forma de iniciar un nodo de Taple, ya que también podemos lograr lo mismo utilizando la imagen de Docker. En este caso, los pasos a seguir son los siguientes:

Descargamos la imagen de Taple Client de Docker:

```bash
docker pull opencanarias/taple-client:0.2
```

Generaremos un nuevo material criptográfico para identificar el nodo ejecutando `taple-keygen`:

```bash
./taple-keygen 
PRIVATE KEY ED25519 (HEX): 7a747ddf55cf9b2ceb3b41a7c7ce9f88f835c120644e3c7522d97520668c8520
CONTROLLER ID ED25519: Eup853UZkZaGQEqPBSUMY_dJWCLrmjy6BuPllWEiSdcM
PeerID: 12D3KooWNNrpZmxF8WKoxM9yMBSixZNM7bic9scaGJDb2ioL4AQa
```

Ahora, para iniciar nuestro primero nodo, debemos ejecutar el siguiente comando:

```bash
docker run opencanarias/taple-client:0.2 \
  -p 3000:3000 \
  -p 50000:50000 \
  -e TAPLE_HTTP=true \
  -e TAPLE_SECRET_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
  -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```

## REST API

Cada nodo de Taple tiene la capacidad de exponer su API REST y su documentación de forma opcional. Para lograrlo, el nodo debe iniciarse con los siguientes dos parámetros:

  * **http**: Expone el *API REST*.
  * **http.doc**: Expone su documentación.

A continuación se muestra un ejemplo de cómo llamar a un endpoint de Taple, en este caso a la página de documentación:

```bash
curl --location --request GET 'http://localhost:3001/api/doc/json'
```

:::note
Para consultar todos los endpoints de esta versión de Taple sin abandonar la documentación, puede consultar [esta sección](../api-rest/create-a-new-event-request.api.mdx).
:::

## Backups

To safely back up the database, you must stop the TAPLE node before backing up the database. This way, we will guarantee the consistency of the database at all times. This is because **TAPLE Client** is using **[LevelDB](https://github.com/google/leveldb)** as database, in which hot backups are not supported so far.

In this **[section](./client-config.md#environment-variables)**, you can find the definition of the different environment variables including `TAPLE_DATABASE_PATH` which represents the path where the database is located.