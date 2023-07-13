---
description: Definition of the data structures that model the state of subjects
---

# Schemas

In **TAPLE** each subject stores a microledger and a [state](./subjects.md#subject-state). The state is the representation of the information stored by a subject at a given instant, usually the current moment. The structure of this state is defined by a schema, which is nothing more than a set of rules that allow to define this structure, and therefore, to validate it.  

## Definition and distribution
Schemas are defined within a governance, and are therefore [distributed](./governance.md#governance-distribution) together with it. Different governance may define equivalent schemas, however, for all intents and purposes, since they belong to different governance, they are considered to be different schemas.

## Schema structure
The schemas are composed of 2 elements:
- A unique identifier. Each schema has an identifier that allows it to be referenced within the governance in which it is defined. Different schemas can be defined within the same governance. In addition, as long as they have different identifiers, you can create schemas with the same content. 
- A content. It is the data structure used to validate the status of the subjects. 

```json
{
    "id": {"type":"string"},       
    "content": {"type": "object"}  
}
```

Within TAPLE [JSON-Schema](https://json-schema.org) is used for the definition of schemas.

:::info

If you want to learn how to define a a JSON-Schema visit the [Learn JSON-Schema](../learn/json-schema.md) page.

:::



