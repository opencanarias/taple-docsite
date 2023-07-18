# TAPLE Client configuration

La configuración de un nodo de TAPLE se puede realizar en diferentes niveles, y cada nivel sobrescribe al anterior en caso de conflicto. El orden de precedencia, de mayor a menor, es el siguiente:

- Configuración mediante variables de entorno.
- Configuración mediante parámetros de entrada.
- Configuración mediante archivo **.toml**.
- Configuración por defecto.

## Naming convention

### Variables de entornos
* Todo en mayúsculas.
* Separados por `_`.
* Empiezan con `TAPLE`.
* Si está dentro de una agrupación sería lo siguiente en aparecer. 
* Ejemplo: `TAPLE_NETWORK_LISTEN_ADDR`.

### Parámetros de entrada
* Todo en minúsculas.
* Separados por `-`.
* Si está dentro de una agrupación esta será lo primero en aparecer y separará el siguiente elemento con un punto.
* Ejemplo: `network.listen-addr`.

### Archivo .toml
* Todo en minúsculas.
* Separado por `-`.
* Si se encuentra dentro de una agrupación, esta debe ser declarada en su parte superior.
* Ejemplo: 
    ```
    [network]
    listen-addr=VALUE
    ```

## Configurations

### General group
A nivel de la configuración mediante archivo **.toml**, los que aparecen en este apatado no necesitan ningún tipo de agrupación.

#### Database path
Ruta donde se almacena la base de datos.

- Variables de entorno: `TAPLE_DB_PATH`
- Parámetros de entrada: `-d` o `--db-path`
- Archivo **.toml**: `db-path`
- Valor por defecto: `HOME_PATH/.taple/db`, si este no existe se usará `tmp/.taple/db`

#### Smart contracts build path
Ruta donde se compilan los contratos inteligentes.

- Variables de entorno: `TAPLE_SC_BUILD_PATH`
- Parámetros de entrada: `-s` o `--sc-build-path`
- Archivo **.toml**: `sc-build-path`
- Valor por defecto: `HOME_PATH/.taple/sc`, si este no existe se usará `tmp/.taple/sc`

#### Private key
Clave privada que identificará al nodo.

- Variables de entorno: `TAPLE_ID_PRIVATE_KEY`
- Parámetros de entrada: `-k` o `--id-private-key`
- Archivo **.toml**: `id-private-key`
- Valores posibles: Claves privadas generadas con la herramienta `taple-keygen`.

#### Key derivator
Tipo de derivador de claves que será utilizado por el nodo Taple.

- Variables de entorno: `TAPLE_ID_KEY_DERIVATOR`
- Parámetros de entrada: `--id-key-derivator`
- Archivo **.toml**: `id-key-derivator`
- Valor por defecto: `ed25519`
- Valores posibles: `ed25519`, `secp256k1`

#### Digest derivator
Tipo de derivador de compendio que será utilizado por el nodo Taple.

- Variables de entorno: `TAPLE_DIGEST_DERIVATOR`
- Parámetros de entrada: `--id-digest-derivator`
- Archivo **.toml**: `id-digest-derivator`
- Valor por defecto: `Blake3_256`
- Valores posibles: `Blake3_256`, `Blake3_512`, `SHA2_256`, `SHA2_512`, `SHA3_256`, `SHA3_512`

#### Help
Muestra ayuda sobre los parámetros existentes en Taple.

- Parámetros de entrada: `-h` o `--help` 

#### Version
Muestra la versión del nodo actual de Taple.

- Parámetros de entrada: `-v` o `--version`

### Network protocol group
A nivel de la configuración mediante archivo **.toml**, los que aparecen en este apatado necesitan estar agrupados bajo `[network]`.

#### Listen address
Dirección desde la que el nodo Taple escuchan los mensaje que le son enviados.

- Variables de entorno: `TAPLE_NETWORK_LISTEN_ADDR`
- Parámetros de entrada: `--network.listen-addr`
- Archivo **.toml**: `listen-addr`
- Valores posibles: `/ip4/DIRECTION/tcp/P2P-PORT`

#### Known node
Nodo conocido en el momento de arranque de Taple.

- Variables de entorno: `TAPLE_NETWORK_KNOWN_NODE`
- Parámetros de entrada: `--network.known-node`
- Archivo **.toml**: `known-node`
- Valores posibles: `/ip4/DIRECTION/P2P-DESTINATION-PORT/p2p/PEER-ID`

#### External Addresses
Direcciones externas conocidas en el momento de arranque de Taple.

- Variables de entorno: `TAPLE_NETWORK_EXTERNAL_ADDRESSES`
- Parámetros de entrada: `--network.external-addr`
- Archivo **.toml**: `external-addr`

### Server HTTP group
A nivel de la configuración mediante archivo **.toml**, los que aparecen en este apatado necesitan estar agrupados bajo `[http]`.

#### Enable/disable API REST
Flag necesario para permitir las comunicaciones API REST.

- Variables de entorno: `TAPLE_HTTP`
- Parámetros de entrada: `--http`
- Archivo **.toml**: `http`
- Valor por defecto: `false`

#### Enable/disable documentation
Flag necesario para permitir la visión de la documentación a traves de su endpoint.

- Variables de entorno: `TAPLE_HTTP_DOC`
- Parámetros de entrada: `--http.doc`
- Archivo **.toml**: `doc`
- Valor por defecto: `false`

#### Port
Puerto a traves del que se podrá realizar la comunicación con el API REST.

- Variables de entorno: `TAPLE_HTTP_PORT`
- Parámetros de entrada: `--http.port`
- Archivo **.toml**: `port`

#### Address
Dirección de escucha para la API REST.

- Variables de entorno: `TAPLE_HTTP_ADDR`
- Parámetros de entrada: `--http.addr`
- Archivo **.toml**: `addr`