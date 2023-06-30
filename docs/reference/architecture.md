# Architecture

*TAPLE* architecture is divided into several tools that allow us to obtain a complete functionality for our network. Among them, we can identify the following:

* [TAPLE Core](https://github.com/opencanarias/taple-core): This is the core of the *TAPLE* technology and contains elements such as:
  * Network communication protocol.
  * Information encoding methods.
  * Way of storing the information.
* [TAPLE Client](https://github.com/opencanarias/taple-client): This is the simplest method to generate our own *TAPLE* nodes without the need to code our own application. It puts at our disposal:
  * A large number of configuration variables to suit our needs.
  * A REST API that allows us to interact with the TAPLE network.
* [TAPLE Tools](https://github.com/opencanarias/taple-tools): This is a set of utilities designed to facilitate interaction with TAPLE technology, which are divided into two:
  * **Taple keygen**: This is a tool that allows the generation of cryptographic material necessary for the correct functioning of TAPLE. It must be generated externally and then provided to the node.
  * **Taple Sign**: This is a tool designed to facilitate the execution of external invocations (those that involve a change in a network subject that we do not control).