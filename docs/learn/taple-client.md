# TAPLE Client

Internamente TAPLE-Client se estructura en los siguientes módulos:

TAPLE Core is not a standalone application; it is a library that should be imported into another application called TAPLE Client. The latter is an open-source implementation for creating a Taple Node and represents the simplest way to work with our technology, providing all the necessary elements to build a node. Some of its functions include:

* Using the TAPLE Core library.
* Implementing a REST API to interact with the TAPLE network in an uncomplicated manner.
* Allowing the configuration of various mechanisms: configuration files, startup parameters, and environment variables.

Internally, TAPLE Client is structured into the following modules:

![taple-client](../img/taple-client.svg)

## TAPLE Core

Reference library written in Rust that implements most of the TAPLE functionality. Implement the encoding and decoding of information, interprets received messages, and performs other functions. For more information, refer to [this resource](core-architecture.md).

## Database

This module is responsible for storing the data collected through the network, enabling data persistence between different TAPLE executions. All data is stored in a [*Leveldb* database](https://github.com/google/leveldb).

## API REST

The REST API is a direct interaction method with TAPLE Client. It allows performing actions such as creating and querying subjects, executing events, approving state changes, among others. For more information, refer to [this resource](../api-rest/create-event-request.api.mdx).