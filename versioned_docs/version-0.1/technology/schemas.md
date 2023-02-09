# Schemas

In **TAPLE** each subject stores a microledger and a [state](./subjects.md#subject-state). The state is the representation of the information stored by a subject at a given instant, usually the current moment. The structure of this state is defined by a schema, which is nothing more than a set of rules that allow to define this structure, and therefore, to validate it.  

## Definition and distribution
Schemas are defined within a governance, and are therefore [distributed](./governance.md#governance-distribution) together with it. Different governance may define equivalent schemas, however, for all intents and purposes, since they belong to different governance, they are considered to be different schemas.

## Schema structure
The schemas are composed of 2 elements:
- A unique identifier. Each schema has an identifier that allows it to be referenced within the governance in which it is defined. Different schemas can be defined within the same governance. In addition, as long as they have different identifiers, you can create schemas with the same content. 
- A content. It is the data structure used to validate the status of the subjects. Within TAPLE [JSON-Schema](https://json-schema.org) is used for the definition of schemas.

```json
{
    "id": {"type":"string"},       // Schema ID within the governance
    "content": {"type": "object"}  // JSON-Schema object
}
```

### JSON Schema
The JSON Schema [specification](https://json-schema.org/specification.html) is in [DRAFT status in the IETF](https://json-schema.org/specification-links.html), however, it is widely used today and is practically considered a de facto standard.

JSON-Schema establishes a set of rules that model and validate a data structure. The following example defines a schema that models a simple data structure with 2 fields: id and value. It is also indicated that the id is mandatory and that no additional fields are allowed. 

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": [
    "id"
  ],
  "properties": {
    "id": {"type":"string"},
    "value": {"type":"integer"}
  }
}
```

:::tip Valid JSON Object

```json
{
    "id": "id_1",
    "value": 23
}
```

:::

:::danger Invalid JSON Objects

```json
{
    "value": 3 // id is not defined
}
```

```json
{
    "id": "id_3",
    "value": 3,
    "count": 5    // additional properties are not allowed
}
```

:::

:::info JSON Schema online validator

You can test this behavior using this [online and interactive JSON Schema validator](https://www.jsonschemavalidator.net/).

:::

If you want to learn how to define a a JSON-Schema visit the [Creating a JSON-Schema](../develop/operational-guides/creating-a-json-schema.md) page.



