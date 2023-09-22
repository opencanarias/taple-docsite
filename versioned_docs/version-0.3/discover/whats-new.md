# What's new in TAPLE

## New in 0.3
- [Foreign Function Interfaces](../learn/core-ffi.md) added. It is now possible to use TAPLE from other languages than Rust and evento from different architectures. 
- Initial support for mobile devices. A first version of the Android and iOS SDKs for 64-bit devices has been released. Check [specific projects](https://github.com/search?q=topic%3Ataple+topic%3Affi+org%3Aopencanarias++fork%3Atrue+archived%3Afalse&type=repositories) for current limitations. 

## New in 0.2
- [Smart contracts](./smart-contracts.md). Now the modifications of the state of the subjects is done through smart contracts. This allows for more advanced control over which parts of the state can be modified and who can make such modifications.
- [New event types](./events.md#event-types)): 
  - Transfer. Ownership of a subject can be transferred between participants.
  - EOL. It is now possible to declare that a subject has reached the end of its life cycle, preventing new events from being included in it.
- [New validation process](./event-validation-process.md). The validation process is now managed by the owner, reducing the network load and improving efficiency. 
- [Namespace segmentation](./subjects.md#namespace-and-segmentation). Using namespaces we can segment the participants of the use case in any of the phases of an event.
- Different database implementations are allowed

