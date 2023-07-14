# Governance structure

me falta definir por ejemplo el quorum. Lo engancho en governance.md. Poner bien el enlace. 

In this page we will describe the governance structure and configuration. If you want to know more about what governance visit the [Governance](../discover/governance.md) page.

## Governance scheme

The governance in TAPLE is [modeled as a subject](../discover/governance.md#governance-as-a-subject). Governance is a special type of subject where the schema is not specified in the creation request. Instead, an internal TAPLE schema describing governance is implicitly applied. The governance schema has 4 sections: members, schemas, roles and policies.

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
            "PORCENTAJE": {
              "type": "number",
              "minimum": 0,
              "maximum": 1
            }
          },
          "required": ["PORCENTAJE"],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "BFT": {
              "type": "number",
              "minimum": 0,
              "maximum": 1
            }
          },
          "required": ["BFT"],
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

:::info Governance example

<details>
    <summary> Click to look a full governance example. Each section will be discussed separately in the following sections. </summary>

```json
{
"members": [
  {
    "name": "Company1",
    "id": "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y"
  },
  {
    "name": "Company2",
    "id": "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
  }
],
"schemas": [
  {
    "id": "Test",
    "schema": {
      "type": "object",
      "additionalProperties": false,
      "required": ["temperature", "location"],
      "properties": {
        "temperatura": {
          "type": "integer"
        },
        "localizacion": {
          "type": "string"
        }
      }
    },
    "initial_value": {
      "temperatura": 0,
      "localizacion": ""
    },
    "contract": {
      "raw": "dXNlIHNlcmRlOjp7U2VyaWFsaXplLCBEZXNlcmlhbGl6ZX07Cgptb2Qgc2RrOwoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgU3RhdGUgewogIHB1YiBvbmU6IHUzMiwKICBwdWIgdHdvOiB1MzIsCiAgcHViIHRocmVlOiB1MzIKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gU3RhdGVFdmVudCB7CiAgTW9kT25lIHsgZGF0YTogdTMyIH0sCiAgTW9kVHdvIHsgZGF0YTogdTMyIH0sCiAgTW9kVGhyZWUgeyBkYXRhOiB1MzIgfSwKICBNb2RBbGwgeyBvbmU6IHUzMiwgdHdvOiB1MzIsIHRocmVlOiB1MzIgfQp9CgojW25vX21hbmdsZV0KcHViIHVuc2FmZSBmbiBtYWluX2Z1bmN0aW9uKHN0YXRlX3B0cjogaTMyLCBldmVudF9wdHI6IGkzMiwgaXNfb3duZXI6IGkzMikgLT4gdTMyIHsKICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQp9CgpmbiBjb250cmFjdF9sb2dpYygKICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwKICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sCikgewogIGxldCBzdGF0ZSA9ICZtdXQgY29udHJhY3RfcmVzdWx0LmZpbmFsX3N0YXRlOwogIG1hdGNoIGNvbnRleHQuZXZlbnQgewogICAgICBTdGF0ZUV2ZW50OjpNb2RPbmUgeyBkYXRhIH0gPT4gewogICAgICAgIHN0YXRlLm9uZSA9IGRhdGE7CiAgICAgIH0sCiAgICAgIFN0YXRlRXZlbnQ6Ok1vZFR3byB7IGRhdGEgfSA9PiB7CiAgICAgICAgc3RhdGUudHdvID0gZGF0YTsKICAgICAgfSwKICAgICAgU3RhdGVFdmVudDo6TW9kVGhyZWUgeyBkYXRhIH0gPT4gewogICAgICAgIHN0YXRlLnRocmVlID0gZGF0YTsKICAgICAgfSwKICAgICAgU3RhdGVFdmVudDo6TW9kQWxsIHsgb25lLCB0d28sIHRocmVlIH0gPT4gewogICAgICAgIHN0YXRlLm9uZSA9IG9uZTsKICAgICAgICBzdGF0ZS50d28gPSB0d287CiAgICAgICAgc3RhdGUudGhyZWUgPSB0aHJlZTsKICAgICAgfQogIH0KICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7Cn0="
    }
  }
],
  "policies": [
    {
      "id": "Test",
      "validate": {
        "quorum": {
          "PROCENTAJE": 0.5
        }
      },
      "evaluate": {
        "quorum": "MAJORITY"
      },
      "approve": {
        "quorum": {
          "FIXED": 1
        }
      }
    },
    {
      "id": "governance",
      "validate": {
        "quorum": {
          "PROCENTAJE": 0.5
        }
      },
      "evaluate": {
        "quorum": "MAJORITY"
      },
      "approve": {
        "quorum": {
          "FIXED": 1
        }
      }
    }
  ],
  "roles": [
    {
      "who": "MEMBERS",
      "namespace": "",
      "role": "CREATOR",
      "schema": {
        "ID": "Test"
      }
    },
    {
      "who": "MEMBERS",
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "Test"
      }
    },
    {
      "who": "MEMBERS",
      "namespace": "",
      "role": "EVALUATOR",
      "schema": "ALL"
    },
    {
      "who": {
        "NAME": "Company1"
      },
      "namespace": "",
      "role": "APPROVER",
      "schema": "ALL"
    }
  ]
}
```

</details>

:::

### Members

This property defines the list of members in the network, meaning, users that have the right to participate in the network, and each member has the following properties:

- **name**. A short, colloquial name by which the node is known in the network. It serves no functionality other than being descriptive. It does not act as a unique identifier within the network.
- **id**. Corresponds to the controller-id of the node. Acts as a unique [identifier](../discover/identity.md#identifiers) within the network and corresponds to the node's cryptographic public key.

```json title="Members section example"
{
  "members": [
    {
      "name": "Company1",
      "id": "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y"
    },
    {
      "name": "Company2",
      "id": "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
    }
  ]
}
```

### Schemas

Defines the list of schemas that are allowed to be used in the subjects associated with governance. Each scheme includes the following properties:

- **id**. Schema unique identifier.
- **schema**. Schema description in JSON-Schema format.
- **initial_value**. Value that takes a newly created subject for this schema, because you can't specify the properties in a Creation Event.
- **contract**. The compiled contract in Raw String base 64.

```json title="Schemas section example"
{
  "schemas": [
    {
      "id": "Test",
      "schema": {
        "type": "object",
        "additionalProperties": false,
        "required": ["temperature", "location"],
        "properties": {
          "temperatura": {
            "type": "integer"
          },
          "localizacion": {
            "type": "string"
          }
        }
      },
      "initial_value": {
        "temperatura": 0,
        "localizacion": ""
      },
      "contract": {
        "raw": "dXNlIHNlcmRlOjp7U2VyaWFsaXplLCBEZXNlcmlhbGl6ZX07Cgptb2Qgc2RrOwoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSwgQ2xvbmUpXQpzdHJ1Y3QgU3RhdGUgewogIHB1YiBvbmU6IHUzMiwKICBwdWIgdHdvOiB1MzIsCiAgcHViIHRocmVlOiB1MzIKfQoKI1tkZXJpdmUoU2VyaWFsaXplLCBEZXNlcmlhbGl6ZSldCmVudW0gU3RhdGVFdmVudCB7CiAgTW9kT25lIHsgZGF0YTogdTMyIH0sCiAgTW9kVHdvIHsgZGF0YTogdTMyIH0sCiAgTW9kVGhyZWUgeyBkYXRhOiB1MzIgfSwKICBNb2RBbGwgeyBvbmU6IHUzMiwgdHdvOiB1MzIsIHRocmVlOiB1MzIgfQp9CgojW25vX21hbmdsZV0KcHViIHVuc2FmZSBmbiBtYWluX2Z1bmN0aW9uKHN0YXRlX3B0cjogaTMyLCBldmVudF9wdHI6IGkzMiwgaXNfb3duZXI6IGkzMikgLT4gdTMyIHsKICAgIHNkazo6ZXhlY3V0ZV9jb250cmFjdChzdGF0ZV9wdHIsIGV2ZW50X3B0ciwgaXNfb3duZXIsIGNvbnRyYWN0X2xvZ2ljKQp9CgpmbiBjb250cmFjdF9sb2dpYygKICBjb250ZXh0OiAmc2RrOjpDb250ZXh0PFN0YXRlLCBTdGF0ZUV2ZW50PiwKICBjb250cmFjdF9yZXN1bHQ6ICZtdXQgc2RrOjpDb250cmFjdFJlc3VsdDxTdGF0ZT4sCikgewogIGxldCBzdGF0ZSA9ICZtdXQgY29udHJhY3RfcmVzdWx0LmZpbmFsX3N0YXRlOwogIG1hdGNoIGNvbnRleHQuZXZlbnQgewogICAgICBTdGF0ZUV2ZW50OjpNb2RPbmUgeyBkYXRhIH0gPT4gewogICAgICAgIHN0YXRlLm9uZSA9IGRhdGE7CiAgICAgIH0sCiAgICAgIFN0YXRlRXZlbnQ6Ok1vZFR3byB7IGRhdGEgfSA9PiB7CiAgICAgICAgc3RhdGUudHdvID0gZGF0YTsKICAgICAgfSwKICAgICAgU3RhdGVFdmVudDo6TW9kVGhyZWUgeyBkYXRhIH0gPT4gewogICAgICAgIHN0YXRlLnRocmVlID0gZGF0YTsKICAgICAgfSwKICAgICAgU3RhdGVFdmVudDo6TW9kQWxsIHsgb25lLCB0d28sIHRocmVlIH0gPT4gewogICAgICAgIHN0YXRlLm9uZSA9IG9uZTsKICAgICAgICBzdGF0ZS50d28gPSB0d287CiAgICAgICAgc3RhdGUudGhyZWUgPSB0aHJlZTsKICAgICAgfQogIH0KICBjb250cmFjdF9yZXN1bHQuc3VjY2VzcyA9IHRydWU7Cn0="
      }
    }
  ]
}
```

:::info
Refer to ["Creating a JSON-Schema"](./json-schema.md) page for more information about JSON-Schema.
:::

### Roles

In this section, we define who are in charge of giving their consent for the event to progress through the different phases of its life cycle (evaluation, approval, and validation), and on the other hand, it also serves to indicate who can perform certain actions (creation of subjects and external invocation).

In the part of looking for signatories, if no roles are defined for a specific subject, either because they do not match with their schema, namespace... the person in charge of signing will be the owner of the governance.

- **who**. Indicates who the Role affects, it can be a specific id (public key), a member of the governance identified by their name, all members, both members and outsiders, or only outsiders.
- **namespace**. It makes the role in question only valid if it matches the namespace of the subject for which the list of signatories or permissions is being obtained.
-**role**. Indicates what phase it affects: ["VALIDATOR", "CREATOR", "ISSUER", "WITNESS", "APPROVER", "EVALUATOR"].
-**schema**. Indicates which schemas are affected by the Role. They can be specified by their id, all or those that are not governance.

```json title="Roles section example"
{
  "roles": [
    {
      "who": "MEMBERS",
      "namespace": "",
      "role": "CREATOR",
      "schema": {
        "ID": "Test"
      }
    },
    {
      "who": "MEMBERS",
      "namespace": "",
      "role": "WITNESS",
      "schema": {
        "ID": "Test"
      }
    },
    {
      "who": "MEMBERS",
      "namespace": "",
      "role": "EVALUATOR",
      "schema": "ALL"
    },
    {
      "who": {
        "NAME": "Company1"
      },
      "namespace": "",
      "role": "APPROVER",
      "schema": "ALL"
    }
  ]
}
```

### Policies

This property defines the permissions of the users previously defined in the members section, granting them roles with respect to the schemas they have defined. Policies are defined independently for each scheme defined in governance.

- **approve**. Defines who the approvators are for the subjects that are created with that schema. Also, the quorum required to consider an event as approved.
- **evaluate**. Defines who the evaluators are for the subjects that are created with that schema. Also, the quorum required to consider an event as evaluated.
- **validate**. Defines who the validators are for the subjects that are created with that schema. Also, the quorum required to consider an event as validated.

```json title="Example of policies for Test schema"
{
  "policies": [
    {
      "id": "Test",
      "validate": {
        "quorum": {
          "PROCENTAJE": 0.5
        }
      },
      "evaluate": {
        "quorum": "MAJORITY"
      },
      "approve": {
        "quorum": {
          "FIXED": 1
        }
      }
    },
    {
      "id": "governance",
      "validate": {
        "quorum": {
          "PROCENTAJE": 0.5
        }
      },
      "evaluate": {
        "quorum": "MAJORITY"
      },
      "approve": {
        "quorum": {
          "FIXED": 1
        }
      }
    }
  ]
}
```

:::caution

It is necessary to specify the permissions of all the schemes that are defined, there is no default assignment. Due to this, it is also necessary to specify the permissions of the governance scheme.

:::
