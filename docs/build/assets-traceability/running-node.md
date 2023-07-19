# Running a node

La *Wine Producers Organization* (en adelante **WPO**) es la entidad encargada de proponer el modelo de negocio y, por tanto, será responsable de gestionar la red. Para lograrlo, el primer paso es levantar un nodo de TAPLE que represente a la **WPO** y con el cual sea posible interactuar para configurar el resto del caso de uso.

A continuación, describiremos los pasos para crear el nodo WPO:

* En primer lugar, asegurémonos de descargar la imagen adecuada del Taple Client desde Dockerhub:

    ```bash bash title="Node WPO"
    docker pull opencanarias/taple-client:0.2
    ```

* Posteriormente, levantaremos el nodo utilizando el siguiente comando:

    ```bash title="Node WPO"
    docker run opencanarias/taple-client:0.2 \
        -p 3000:3000 \
        -p 50000:50000 \
        -e TAPLE_HTTP=true \
        -e TAPLE_SECRET_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
        -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
    ```