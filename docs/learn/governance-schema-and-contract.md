# Governance schema and contract

Governances in Taple are special subjects. Governances have a specific schema and contract defined within the TAPLE code. This is the case because prior configuration is necessary. This schema and contract must be the same for all participants in a network, otherwise failures can occur because a different result is expected, or the schema is valid for one participant but not for another. This schema and contract do not appear explicitly in the governance itself, but are within Taple and cannot be modified.

:::info Governance Schema

<details>
 <summary>Click to look at the full governance schema.</summary>

```json
{
  "$defs": {
    "role": {
      "type": "string",
      "enum": ["VALIDATOR", "CREATOR", "ISSUER", "WITNESS", "APPROVER", "EVALUATOR"]
    },
    "quorum": {
      "oneOf": [
        {
          "type": "string",
          "enum": ["MAJORITY"]
        },
        {
          "type": "object",
          "properties": {
            "FIXED": {
              "type": "number",
              "minimum": 1,
              "multipleOf": 1
            }
          },
          "required": ["FIXED"],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "PERCENTAGE": {
              "type": "number",
              "minimum": 0,
              "maximum": 1
            }
          },
          "required": ["PERCENTAGE"],
          "additionalProperties": false
        }
      ]
    }
  },
  "type": "object",
  "additionalProperties": false,
  "required": [
    "members",
    "schemas",
    "policies",
    "roles"
  ],
  "properties": {
    "members": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "id": {
            "type": "string",
            "format": "keyidentifier"
          }
        },
        "required": [
          "id",
          "name"
        ],
        "additionalProperties": false
      }
    },
    "roles": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "who": {
            "oneOf": [
            {
              "type": "object",
              "properties": {
                "ID": {
                  "type": "string"
                }
              },
              "required": ["ID"],
              "additionalProperties": false
            },
            {
              "type": "object",
              "properties": {
                "NAME": {
                  "type": "string"
                }
              },
              "required": ["NAME"],
              "additionalProperties": false
            },
            {
              "const": "MEMBERS"
            },
            {
              "const": "ALL"
            },
            {
              "const": "NOT_MEMBERS"
            }
          ]
        },
        "namespace": {
          "type": "string"
        },
        "role": {
          "$ref": "#/$defs/role"
        },
        "schema": {
          "oneOf": [
            {
              "type": "object",
              "properties": {
                "ID": {
                  "type": "string"
                }
              },
              "required": ["ID"],
              "additionalProperties": false
            },
            {
              "const": "ALL"
            },
            {
              "const": "NOT_GOVERNANCE"
            }
            ]
          }
        },
        "required": ["who", "role", "schema", "namespace"],
        "additionalProperties": false
      }
    },
    "schemas": {
      "type": "array",
      "minItems": 0,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "schema": {
            "$schema": "http://json-schema.org/draft/2020-12/schema",
            "$id": "http://json-schema.org/draft/2020-12/schema",
            "$vocabulary": {
              "http://json-schema.org/draft/2020-12/vocab/core": true,
              "http://json-schema.org/draft/2020-12/vocab/applicator": true,
              "http://json-schema.org/draft/2020-12/vocab/unevaluated": true,
              "http://json-schema.org/draft/2020-12/vocab/validation": true,
              "http://json-schema.org/draft/2020-12/vocab/meta-data": true,
              "http://json-schema.org/draft/2020-12/vocab/format-annotation": true,
              "http://json-schema.org/draft/2020-12/vocab/content": true
            },
            "$dynamicAnchor": "meta",
            "title": "Core and validation specifications meta-schema",
            "allOf": [
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/core",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/core": true
                },
                "$dynamicAnchor": "meta",
                "title": "Core vocabulary meta-schema",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "$id": {
                    "$ref": "#/$defs/uriReferenceString",
                    "$comment": "Non-empty fragments not allowed.",
                    "pattern": "^[^#]*#?$"
                  },
                  "$schema": {
                    "$ref": "#/$defs/uriString"
                  },
                  "$ref": {
                    "$ref": "#/$defs/uriReferenceString"
                  },
                  "$anchor": {
                    "$ref": "#/$defs/anchorString"
                  },
                  "$dynamicRef": {
                    "$ref": "#/$defs/uriReferenceString"
                  },
                  "$dynamicAnchor": {
                    "$ref": "#/$defs/anchorString"
                  },
                  "$vocabulary": {
                    "type": "object",
                    "propertynames": {
                      "$ref": "#/$defs/uriString"
                    },
                    "additionalProperties": {
                      "type": "boolean"
                    }
                  },
                  "$comment": {
                    "type": "string"
                  },
                  "$defs": {
                    "type": "object",
                    "additionalProperties": {
                      "$dynamicRef": "#meta"
                    }
                  }
                },
                "$defs": {
                  "anchorString": {
                    "type": "string",
                    "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
                  },
                  "uriString": {
                    "type": "string",
                    "format": "uri"
                  },
                  "uriReferenceString": {
                    "type": "string",
                    "format": "uri-reference"
                  }
                }
              },
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/applicator",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/applicator": true
                },
                "$dynamicAnchor": "meta",
                "title": "Applicator vocabulary meta-schema",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "prefixItems": {
                    "$ref": "#/$defs/schemaArray"
                  },
                  "items": {
                    "$dynamicRef": "#meta"
                  },
                  "contains": {
                    "$dynamicRef": "#meta"
                  },
                  "additionalProperties": {
                    "$dynamicRef": "#meta"
                  },
                  "properties": {
                    "type": "object",
                    "additionalProperties": {
                      "$dynamicRef": "#meta"
                    },
                    "default": {}
                  },
                  "patternProperties": {
                    "type": "object",
                    "additionalProperties": {
                      "$dynamicRef": "#meta"
                    },
                    "propertynames": {
                      "format": "regex"
                    },
                    "default": {}
                  },
                  "dependentschemas": {
                    "type": "object",
                    "additionalProperties": {
                      "$dynamicRef": "#meta"
                    },
                    "default": {}
                  },
                  "propertynames": {
                    "$dynamicRef": "#meta"
                  },
                  "if": {
                    "$dynamicRef": "#meta"
                  },
                  "then": {
                    "$dynamicRef": "#meta"
                  },
                  "else": {
                    "$dynamicRef": "#meta"
                  },
                  "allOf": {
                    "$ref": "#/$defs/schemaArray"
                  },
                  "anyOf": {
                    "$ref": "#/$defs/schemaArray"
                  },
                  "oneOf": {
                    "$ref": "#/$defs/schemaArray"
                  },
                  "not": {
                    "$dynamicRef": "#meta"
                  }
                },
                "$defs": {
                  "schemaArray": {
                    "type": "array",
                    "minItems": 1,
                    "items": {
                      "$dynamicRef": "#meta"
                    }
                  }
                }
              },
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/unevaluated",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
                },
                "$dynamicAnchor": "meta",
                "title": "Unevaluated applicator vocabulary meta-schema",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "unevaluatedItems": {
                    "$dynamicRef": "#meta"
                  },
                  "unevaluatedProperties": {
                    "$dynamicRef": "#meta"
                  }
                }
              },
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/validation",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/validation": true
                },
                "$dynamicAnchor": "meta",
                "title": "validation vocabulary meta-schema",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "type": {
                    "anyOf": [
                      {
                        "$ref": "#/$defs/simpleTypes"
                      },
                      {
                        "type": "array",
                        "items": {
                          "$ref": "#/$defs/simpleTypes"
                        },
                        "minItems": 1,
                        "uniqueItems": true
                      }
                    ]
                  },
                  "const": true,
                  "enum": {
                    "type": "array",
                    "items": true
                  },
                  "multipleOf": {
                    "type": "number",
                    "exclusiveMinimum": 0
                  },
                  "maximum": {
                    "type": "number"
                  },
                  "exclusiveMaximum": {
                    "type": "number"
                  },
                  "minimum": {
                    "type": "number"
                  },
                  "exclusiveMinimum": {
                    "type": "number"
                  },
                  "maxLength": {
                    "$ref": "#/$defs/nonNegativeInteger"
                  },
                  "minLength": {
                    "$ref": "#/$defs/nonNegativeIntegerDefault0"
                  },
                  "pattern": {
                    "type": "string",
                    "format": "regex"
                  },
                  "maxItems": {
                    "$ref": "#/$defs/nonNegativeInteger"
                  },
                  "minItems": {
                    "$ref": "#/$defs/nonNegativeIntegerDefault0"
                  },
                  "uniqueItems": {
                    "type": "boolean",
                    "default": false
                  },
                  "maxContains": {
                    "$ref": "#/$defs/nonNegativeInteger"
                  },
                  "minContains": {
                    "$ref": "#/$defs/nonNegativeInteger",
                    "default": 1
                  },
                  "maxProperties": {
                    "$ref": "#/$defs/nonNegativeInteger"
                  },
                  "minProperties": {
                    "$ref": "#/$defs/nonNegativeIntegerDefault0"
                  },
                  "required": {
                    "$ref": "#/$defs/stringArray"
                  },
                  "dependentRequired": {
                    "type": "object",
                    "additionalProperties": {
                      "$ref": "#/$defs/stringArray"
                    }
                  }
                },
                "$defs": {
                  "nonNegativeInteger": {
                    "type": "integer",
                    "minimum": 0
                  },
                  "nonNegativeIntegerDefault0": {
                    "$ref": "#/$defs/nonNegativeInteger",
                    "default": 0
                  },
                  "simpleTypes": {
                    "enum": [
                      "array",
                      "boolean",
                      "integer",
                      "null",
                      "number",
                      "object",
                      "string"
                    ]
                  },
                  "stringArray": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "uniqueItems": true,
                    "default": []
                  }
                }
              },
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/meta-data",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/meta-data": true
                },
                "$dynamicAnchor": "meta",
                "title": "Meta-data vocabulary meta-schema",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "title": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "default": true,
                  "deprecated": {
                    "type": "boolean",
                    "default": false
                  },
                  "readOnly": {
                    "type": "boolean",
                    "default": false
                  },
                  "writeOnly": {
                    "type": "boolean",
                    "default": false
                  },
                  "examples": {
                    "type": "array",
                    "items": true
                  }
                }
              },
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/format-annotation",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
                },
                "$dynamicAnchor": "meta",
                "title": "Format vocabulary meta-schema for annotation results",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "format": {
                    "type": "string"
                  }
                }
              },
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/content",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/content": true
                },
                "$dynamicAnchor": "meta",
                "title": "content vocabulary meta-schema",
                "type": [
                  "object",
                  "boolean"
                ],
                "properties": {
                  "contentEncoding": {
                    "type": "string"
                  },
                  "contentMediaType": {
                    "type": "string"
                  },
                  "contentschema": {
                    "$dynamicRef": "#meta"
                  }
                }
              }
            ],
            "type": [
              "object",
              "boolean"
            ],
            "$comment": "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
            "properties": {
              "definitions": {
                "$comment": "\"definitions\" has been replaced by \"$defs\".",
                "type": "object",
                "additionalProperties": {
                  "$dynamicRef": "#meta"
                },
                "deprecated": true,
                "default": {}
              },
              "dependencies": {
                "$comment": "\"dependencies\" has been split and replaced by \"dependentschemas\" and \"dependentRequired\" in order to serve their differing semantics.",
                "type": "object",
                "additionalProperties": {
                  "anyOf": [
                    {
                      "$dynamicRef": "#meta"
                    },
                    {
                      "$ref": "meta/validation#/$defs/stringArray"
                    }
                  ]
                },
                "deprecated": true,
                "default": {}
              },
              "$recursiveAnchor": {
                "$comment": "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
                "$ref": "meta/core#/$defs/anchorString",
                "deprecated": true
              },
              "$recursiveRef": {
                "$comment": "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
                "$ref": "meta/core#/$defs/uriReferenceString",
                "deprecated": true
              }
            }
          },
          "initial_value": {},
          "contract": {
            "type": "object",
            "properties": {
              "raw": {
                "type": "string"
              },
            },
            "additionalProperties": false,
            "required": ["raw"]
          },
        },
        "required": [
          "id",
          "schema",
          "initial_value",
          "contract"
        ],
        "additionalProperties": false
      }
    },
    "policies": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "id", "approve", "evaluate", "validate"
        ],
        "properties": {
          "id": {
            "type": "string"
          },
          "approve": {
            "type": "object",
            "additionalProperties": false,
            "required": ["quorum"],
            "properties": {
              "quorum": {
                "$ref": "#/$defs/quorum"
              }
            }
          },
          "evaluate": {
            "type": "object",
            "additionalProperties": false,
            "required": ["quorum"],
            "properties": {
              "quorum": {
                "$ref": "#/$defs/quorum"
              }
            }
          },
          "validate": {
            "type": "object",
            "additionalProperties": false,
            "required": ["quorum"],
            "properties": {
              "quorum": {
                "$ref": "#/$defs/quorum"
              }
            }
          }
        }
      }
    }        
  }
}
```

</details>

:::

And its initial state is:

```json
{
    "members": [],
    "roles": [
        {
        "namespace": "",
        "role": "WITNESS",
        "schema": {
            "ID": "governance"
        },
        "who": "MEMBERS"
        }
    ],
    "schemas": [],
    "policies": [
        {
        "id": "governance",
        "approve": {
            "quorum": "MAJORITY"
        },
        "evaluate": {
            "quorum": "MAJORITY"
        },
        "validate": {
            "quorum": "MAJORITY"
        }
        }
    ]
}
```

Essentially, the initial state of the governance defines that all members added to the governance will be witnesses, and a majority of signatures from all members is required for any of the phases in the lifecycle of governance change events. However, it does not have any additional schemas, which will need to be added according to the needs of the use cases.

The governance contract is:

```rust title="Governance Contract"
mod sdk;
use std::collections::HashSet;
use thiserror::Error;
use sdk::ValueWrapper;
use serde::{de::Visitor, ser::SerializeMap, Deserialize, Serialize};

#[derive(Clone)]
#[allow(non_snake_case)]
#[allow(non_camel_case_types)]
pub enum Who {
    ID { ID: String },
    NAME { NAME: String },
    MEMBERS,
    ALL,
    NOT_MEMBERS,
}

impl Serialize for Who {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        match self {
            Who::ID { ID } => {
                let mut map = serializer.serialize_map(Some(1))?;
                map.serialize_entry("ID", ID)?;
                map.end()
            }
            Who::NAME { NAME } => {
                let mut map = serializer.serialize_map(Some(1))?;
                map.serialize_entry("NAME", NAME)?;
                map.end()
            }
            Who::MEMBERS => serializer.serialize_str("MEMBERS"),
            Who::ALL => serializer.serialize_str("ALL"),
            Who::NOT_MEMBERS => serializer.serialize_str("NOT_MEMBERS"),
        }
    }
}

impl<'de> Deserialize<'de> for Who {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        struct WhoVisitor;
        impl<'de> Visitor<'de> for WhoVisitor {
            type Value = Who;
            fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
                formatter.write_str("Who")
            }
            fn visit_map<A>(self, mut map: A) -> Result<Self::Value, A::Error>
            where
                A: serde::de::MapAccess<'de>,
            {
                // They should only have one entry
                let Some(key) = map.next_key::<String>()? else {
                    return Err(serde::de::Error::missing_field("ID or NAME"))
                };
                let result = match key.as_str() {
                    "ID" => {
                        let id: String = map.next_value()?;
                        Who::ID { ID: id }
                    }
                    "NAME" => {
                        let name: String = map.next_value()?;
                        Who::NAME { NAME: name }
                    }
                    _ => return Err(serde::de::Error::unknown_field(&key, &["ID", "NAME"])),
                };
                let None = map.next_key::<String>()? else {
                    return Err(serde::de::Error::custom("Input data is not valid. The data contains unkown entries"));
                };
                Ok(result)
            }
            fn visit_string<E>(self, v: String) -> Result<Self::Value, E>
            where
                E: serde::de::Error,
            {
                match v.as_str() {
                    "MEMBERS" => Ok(Who::MEMBERS),
                    "ALL" => Ok(Who::ALL),
                    "NOT_MEMBERS" => Ok(Who::NOT_MEMBERS),
                    other => Err(serde::de::Error::unknown_variant(
                        other,
                        &["MEMBERS", "ALL", "NOT_MEMBERS"],
                    )),
                }
            }
            fn visit_borrowed_str<E>(self, v: &'de str) -> Result<Self::Value, E>
            where
                E: serde::de::Error,
            {
                match v {
                    "MEMBERS" => Ok(Who::MEMBERS),
                    "ALL" => Ok(Who::ALL),
                    "NOT_MEMBERS" => Ok(Who::NOT_MEMBERS),
                    other => Err(serde::de::Error::unknown_variant(
                        other,
                        &["MEMBERS", "ALL", "NOT_MEMBERS"],
                    )),
                }
            }
        }
        deserializer.deserialize_any(WhoVisitor {})
    }
}

#[derive(Clone)]
#[allow(non_snake_case)]
#[allow(non_camel_case_types)]
pub enum SchemaEnum {
    ID { ID: String },
    NOT_GOVERNANCE,
    ALL,
}

impl Serialize for SchemaEnum {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        match self {
            SchemaEnum::ID { ID } => {
                let mut map = serializer.serialize_map(Some(1))?;
                map.serialize_entry("ID", ID)?;
                map.end()
            }
            SchemaEnum::NOT_GOVERNANCE => serializer.serialize_str("NOT_GOVERNANCE"),
            SchemaEnum::ALL => serializer.serialize_str("ALL"),
        }
    }
}

impl<'de> Deserialize<'de> for SchemaEnum {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        struct SchemaEnumVisitor;
        impl<'de> Visitor<'de> for SchemaEnumVisitor {
            type Value = SchemaEnum;
            fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
                formatter.write_str("Schema")
            }
            fn visit_map<A>(self, mut map: A) -> Result<Self::Value, A::Error>
            where
                A: serde::de::MapAccess<'de>,
            {
                // They should only have one entry
                let Some(key) = map.next_key::<String>()? else {
                    return Err(serde::de::Error::missing_field("ID"))
                };
                let result = match key.as_str() {
                    "ID" => {
                        let id: String = map.next_value()?;
                        SchemaEnum::ID { ID: id }
                    }
                    _ => return Err(serde::de::Error::unknown_field(&key, &["ID", "NAME"])),
                };
                let None = map.next_key::<String>()? else {
                    return Err(serde::de::Error::custom("Input data is not valid. The data contains unkown entries"));
                };
                Ok(result)
            }
            fn visit_string<E>(self, v: String) -> Result<Self::Value, E>
            where
                E: serde::de::Error,
            {
                match v.as_str() {
                    "ALL" => Ok(Self::Value::ALL),
                    "NOT_GOVERNANCE" => Ok(Self::Value::NOT_GOVERNANCE),
                    other => Err(serde::de::Error::unknown_variant(
                        other,
                        &["ALL", "NOT_GOVERNANCE"],
                    )),
                }
            }
            fn visit_borrowed_str<E>(self, v: &'de str) -> Result<Self::Value, E>
            where
                E: serde::de::Error,
            {
                match v {
                    "ALL" => Ok(Self::Value::ALL),
                    "NOT_GOVERNANCE" => Ok(Self::Value::NOT_GOVERNANCE),
                    other => Err(serde::de::Error::unknown_variant(
                        other,
                        &["ALL", "NOT_GOVERNANCE"],
                    )),
                }
            }
        }
        deserializer.deserialize_any(SchemaEnumVisitor {})
    }
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Role {
    who: Who,
    namespace: String,
    role: RoleEnum,
    schema: SchemaEnum,
}

#[derive(Serialize, Deserialize, Clone)]
pub enum RoleEnum {
    VALIDATOR,
    CREATOR,
    ISSUER,
    WITNESS,
    APPROVER,
    EVALUATOR,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Member {
    id: String,
    name: String,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Contract {
    raw: String,
}

#[derive(Serialize, Deserialize, Clone)]
#[allow(non_snake_case)]
#[allow(non_camel_case_types)]
pub enum Quorum {
    MAJORITY,
    FIXED(u64),
    PERCENTAGE(f64),
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Validation {
    quorum: Quorum,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Policy {
    id: String,
    approve: Validation,
    evaluate: Validation,
    validate: Validation,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct Schema {
    id: String,
    schema: serde_json::Value,
    initial_value: serde_json::Value,
    contract: Contract,
}

#[repr(C)]
#[derive(Serialize, Deserialize, Clone)]
pub struct Governance {
    members: Vec<Member>,
    roles: Vec<Role>,
    schemas: Vec<Schema>,
    policies: Vec<Policy>,
}

// Define "Event family".
#[derive(Serialize, Deserialize, Debug)]
pub enum GovernanceEvent {
    Patch { data: ValueWrapper },
}

#[no_mangle]
pub unsafe fn main_function(state_ptr: i32, event_ptr: i32, is_owner: i32) -> u32 {
    sdk::execute_contract(state_ptr, event_ptr, is_owner, contract_logic)
}

// Contract logic with expected data types
// Returns the pointer to the data written with the modified state.
fn contract_logic(
    context: &sdk::Context<Governance, GovernanceEvent>,
    contract_result: &mut sdk::ContractResult<Governance>,
) {
    // It would be possible to add error handling
    // It could be interesting to do the operations directly as serde_json:Value instead of "Custom Data".
    let state = &mut contract_result.final_state;
    let _is_owner = &context.is_owner;
    match &context.event {
        GovernanceEvent::Patch { data } => {
            // A JSON PATCH is received
            // It is applied directly to the state
            let patched_state = sdk::apply_patch(data.0.clone(), &context.initial_state).unwrap();
            if let Ok(_) = check_governance_state(&patched_state) {
                *state = patched_state;
                contract_result.success = true;
                contract_result.approval_required = true;
            } else {
                contract_result.success = false;
            }
        }
    }
}

#[derive(Error, Debug)]
enum StateError {
    #[error("A member's name is duplicated")]
    DuplicatedMemberName,
    #[error("A member's ID is duplicated")]
    DuplicatedMemberID,
    #[error("A policy identifier is duplicated")]
    DuplicatedPolicyID,
    #[error("No governace policy detected")]
    NoGvernancePolicy,
    #[error("It is not allowed to specify a different schema for the governnace")]
    GovernanceShchemaIDDetected,
    #[error("Schema ID is does not have a policy")]
    NoCorrelationSchemaPolicy,
    #[error("There are policies not correlated to any schema")]
    PoliciesWithoutSchema,
}

fn check_governance_state(state: &Governance) -> Result<(), StateError> {
    // We must check several aspects of the status.
    // There cannot be duplicate members, either in name or ID.
    check_members(&state.members)?;
    // There can be no duplicate policies and the one associated with the governance itself must be present.
    let policies_names = check_policies(&state.policies)?;
    // Schema policies that do not exist cannot be indicated. Likewise, there cannot be
    // schemas without policies. The correlation must be one-to-one
    check_schemas(&state.schemas, policies_names)
}

fn check_members(members: &Vec<Member>) -> Result<(), StateError> {
    let mut name_set = HashSet::new();
    let mut id_set = HashSet::new();
    for member in members {
        if name_set.contains(&member.name) {
            return Err(StateError::DuplicatedMemberName);
        }
        name_set.insert(&member.name);
        if id_set.contains(&member.id) {
            return Err(StateError::DuplicatedMemberID);
        }
        id_set.insert(&member.id);
    }
    Ok(())
}

fn check_policies(policies: &Vec<Policy>) -> Result<HashSet<String>, StateError> {
    // Check that there are no duplicate policies and that the governance policy is included.
    let mut is_governance_present = false;
    let mut id_set = HashSet::new();
    for policy in policies {
        if id_set.contains(&policy.id) {
            return Err(StateError::DuplicatedPolicyID);
        }
        id_set.insert(&policy.id);
        if &policy.id == "governance" {
            is_governance_present = true
        }
    }
    if !is_governance_present {
        return Err(StateError::NoGvernancePolicy);
    }
    id_set.remove(&String::from("governance"));
    Ok(id_set.into_iter().cloned().collect())
}

fn check_schemas(
    schemas: &Vec<Schema>,
    mut policies_names: HashSet<String>,
) -> Result<(), StateError> {
    // We check that there are no duplicate schemas.
    // We also have to check that the initial states are valid according to the json_schema
    // Also, there cannot be a schema with id "governance".
    for schema in schemas {
        if &schema.id == "governance" {
            return Err(StateError::GovernanceShchemaIDDetected);
        }
        // There can be no duplicates and they must be matched with policies_names
        if !policies_names.remove(&schema.id) {
            // Not related to policies_names
            return Err(StateError::NoCorrelationSchemaPolicy);
        }
    }
    if !policies_names.is_empty() {
        return Err(StateError::PoliciesWithoutSchema);
    }
    Ok(())
}
```

The governance contract is currently designed to only support one method/event - the "Patch". This method allows us to send changes to the governance in the form of JSON-Patch, a standard format for expressing a sequence of operations to apply to a JavaScript Object Notation (JSON) document.

For instance, if we have a default governance and we want to make a change, such as adding a member, we would first calculate the JSON-Patch to express this change. This can be done using any tool that follows the JSON Patch standard RFC 6902, or with the use of our own tool, [taple-patch](../learn/client-tools.md#taple-patch).

This way, the governance contract leverages the flexibility of the JSON-Patch standard to allow for a wide variety of state changes while maintaining a simple and single method interface.

The contract has a close relationship with the schema, as it takes into account its definition to obtain the state before the execution of the contract and to validate it at the end of such execution.

Currently, it only has one function that can be called from an event of type **Fact**, the Patch method: **Patch { data: ValueWrapper }**. This method obtains a JSON patch that applies the changes it includes directly on the properties of the governance subject. At the end of its execution, it calls the function that checks that the final state obtained after applying the patch is a valid governance.
