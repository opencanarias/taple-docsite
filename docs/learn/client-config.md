# TAPLE Client configuration

The configuration of a TAPLE-Cient node can be done in different ways. The supported mechanisms are listed below, from the highest to the lowest priority:

- Environment variables.
- Input parameters.
- File **settings.toml**.
- Default value.

## General options

### Database path

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Path where the database is stored</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_DB_PATH</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>-d</code>, <code>--db-path</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>db-path</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >Any valid writable folder path. Default to <code>$HOME_PATH/.taple/db</code>. if it does not exist or does not have write permissions, it uses <code>tmp/.taple/db</code></td>
  </tr>
</table>

### ID private key

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Private key identifying the node's owner</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_ID_PRIVATE_KEY</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>-k</code>, <code>--id-private-key</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>id-private-key</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >Private keys associated with an identity in TAPLE. HEX format</td>
  </tr>
</table>

### ID key derivator

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >key derivative to be used by the Taple node.</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_ID_KEY_DERIVATOR</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--id-key-derivator</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>id-key-derivator</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td ><code>ed25519 (default)</code>, <code>secp256k1</code></td>
  </tr>
</table>

## Network

### Listen address

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Network interface on which incoming connections are listened for</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_NETWORK_LISTEN_ADDR</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>-a</code>, <code>--network.listen-addr</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[network]<br/>listen-addr</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >A valid multiaddr representing a listen interface. More than 1 value can be specified. Default value: <code>/ip4/0.0.0.0/tcp/40040</code></td>
  </tr>
</table>

### Known node

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Address of a known node at start-up</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_NETWORK_KNOWN_NODE</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--network.known-node</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[network]<br/>known-node</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >A valid multiaddr. More than 1 value can be specified.</td>
  </tr>
</table>

### External Address

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Public address known at start-up</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_NETWORK_EXTERNAL_ADDR</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--network.external-addr</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[network]<br/>external-addr</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >A valid multiaddr. More than 1 value can be specified.</td>
  </tr>
</table>

## API REST

### Enable/disable

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Enable/disable API REST</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_HTTP</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--http</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[http]<br/>http</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >Boolean value. Default: <code>false</code></td>
  </tr>
</table>

### Enable/disable documentation

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Enable/disable API REST documentation</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_HTTP_DOC</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--http.doc</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[http]<br/>doc</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >Boolean value. Default: <code>false</code></td>
  </tr>
</table>

### Port

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >API REST port</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_HTTP_PORT</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--http.port</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[http]<br/>port</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >A valid port number. Default: <code>3000</code></td>
  </tr>
</table>

### Address

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Network interface on which incoming connections are listened for</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_HTTP_ADDR</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--http.addr</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[http]<br/>addr</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >A valid network interface. Default: <code>0.0.0.0</code></td>
  </tr>
</table>

## Smart contracts

### Build path

<table>
  <tr>
    <td ><b>Description</b></td>
    <td >Path where smart contracts are compiled</td>
  </tr>
  <tr>
    <td ><b>EnvVar</b></td>
    <td ><code>TAPLE_SC_BUILD_PATH</code></td>
  </tr>
  <tr>
    <td ><b>Input param</b></td>
    <td ><code>--sc.build-path</code></td>
  </tr>
  <tr>
    <td ><b>settings.toml</b></td>
    <td ><code>[sc]<br/>build-path</code></td>
  </tr>
  <tr>
    <td ><b>Admited values</b></td>
    <td >Any valid writable folder path. Default to <code>$HOME_PATH/.taple/sc</code>. if it does not exist or does not have write permissions, it uses <code>tmp/.taple/sc</code></td>
  </tr>
</table>