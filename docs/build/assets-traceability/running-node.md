# Running a node

Para iniciar el desarrollo de nuestro caso de uso, debemos establecer nuestro primer nodo, que será *Wine Producers Organization* (**WPO**). Esta organización ha sido mencionada previamente en la formalización del caso de uso y serán los responsables de su gestión.

Para llevar a cabo esto, crearemos el nodo **WPO** siguiendo estos pasos:

```bash
cargo run -- --http \
    --http.port 3000 \
    -k 74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
    -d "/tmp/data" \
    --network.listen_addr "/ip4/0.0.0.0/tcp/50000"
```

```bash
docker run opencanarias/taple-client:0.2 \
    -p 3000:3000 \
    -p 50000:50000 \
    -e TAPLE_HTTP=true \
    -e TAPLE_SECRET_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
    -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
```