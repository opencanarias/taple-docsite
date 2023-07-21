# Running a Node

The *Wine Producers Organization* (hereinafter referred to as **WPO**) is the entity responsible for proposing the business model and, consequently, will be in charge of managing the network. To achieve this, the first step is to set up a TAPLE node representing the **WPO**, which will allow interaction to configure the rest of the use case.

Below, we will describe the steps to create the WPO node:

* First, make sure to download the appropriate Taple Client image from Dockerhub:

    ```bash bash title="Node: WPO"
    docker pull opencanarias/taple-client:0.2
    ```

* Next, we will start the node using the following command:

    ```bash title="Node: WPO"
    docker run opencanarias/taple-client:0.2 \
        -p 3000:3000 \
        -p 50000:50000 \
        -e TAPLE_HTTP=true \
        -e TAPLE_SECRET_KEY=74c417de2174f3a76b0b98343cea3aa35bfd3860cac8bf470092c3e751745c1a \
        -e TAPLE_NETWORK_LISTEN_ADDR=/ip4/0.0.0.0/tcp/50000
    ```