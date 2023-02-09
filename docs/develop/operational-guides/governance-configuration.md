# Governance configuration
In this page we will describe the governance structure and configuration. If you want to know more about what governance visit the [Governance](../../technology/governance.md) page. 

## Governance scheme
The governance in TAPLE is [modeled as a subject](../../technology/governance.md#governance-as-a-subject). Governance is a special type of subject where the schema is not specified in the creation request. Instead, an internal TAPLE schema describing governance is implicitly applied. The governance schema has 3 sections: members, schemas and policies.

:::info Governance Schema

<details>
 <summary>Click to look at the full governance schema.</summary>

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": ["members", "schemas", "policies"],
  "properties": {
    "members": {
      "type": "array",
      "minItems": 1 /* There must be a minimum of one member*/,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "tags": {
            "type": "object",
            "patternProperties": {
              "^.*$": {
                "anyOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "additionalProperties": false
          },
          "description": {
            "type": "string"
          },
          "key": {
            "type": "string"
          }
        },
        "required": ["id", "tags", "key"],
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
          "tags": {
            "type": "object",
            "patternProperties": {
              "^.*$": {
                "anyOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "additionalProperties": false
          },
          "content": {
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
            "title": "Core and Validation specifications meta-schema",
            "allOf": [
              {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "$id": "https://json-schema.org/draft/2020-12/meta/core",
                "$vocabulary": {
                  "https://json-schema.org/draft/2020-12/vocab/core": true
                },
                "$dynamicAnchor": "meta",
                "title": "Core vocabulary meta-schema",
                "type": ["object", "boolean"],
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
                    "propertyNames": {
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
                "type": ["object", "boolean"],
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
                    "propertyNames": {
                      "format": "regex"
                    },
                    "default": {}
                  },
                  "dependentSchemas": {
                    "type": "object",
                    "additionalProperties": {
                      "$dynamicRef": "#meta"
                    },
                    "default": {}
                  },
                  "propertyNames": {
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
                "type": ["object", "boolean"],
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
                "title": "Validation vocabulary meta-schema",
                "type": ["object", "boolean"],
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
                "type": ["object", "boolean"],
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
                "type": ["object", "boolean"],
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
                "title": "Content vocabulary meta-schema",
                "type": ["object", "boolean"],
                "properties": {
                  "contentEncoding": {
                    "type": "string"
                  },
                  "contentMediaType": {
                    "type": "string"
                  },
                  "contentSchema": {
                    "$dynamicRef": "#meta"
                  }
                }
              }
            ],
            "type": ["object", "boolean"],
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
                "$comment": "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
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
          }
        },
        "required": ["id", "tags", "content"],
        "additionalProperties": false
      }
    },
    "policies": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["validation", "id", "approval", "invokation"],
        "properties": {
          "id": {
            "type": "string"
          },
          "validation": {
            "type": "object",
            "additionalProperties": false,
            "required": ["quorum", "validators"],
            "properties": {
              "quorum": {
                "type": "number",
                "minimum": 0,
                "maximum": 1.0
              },
              "validators": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "approval": {
            "type": "object",
            "additionalProperties": false,
            "required": ["quorum", "approvers"],
            "properties": {
              "quorum": {
                "type": "number",
                "minimum": 0,
                "maximum": 1.0
              },
              "approvers": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          },
          "invokation": {
            "type": "object",
            "additionalProperties": false,
            "required": ["owner", "set", "all", "external"],
            "properties": {
              "owner": {
                "type": "object",
                "properties": {
                  "allowance": {
                    "type": "boolean"
                  },
                  "approvalRequired": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false,
                "required": ["allowance", "approvalRequired"]
              },
              "set": {
                "type": "object",
                "properties": {
                  "allowance": {
                    "type": "boolean"
                  },
                  "approvalRequired": {
                    "type": "boolean"
                  },
                  "invokers": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                },
                "additionalProperties": false,
                "required": ["allowance", "approvalRequired", "invokers"]
              },
              "all": {
                "type": "object",
                "properties": {
                  "allowance": {
                    "type": "boolean"
                  },
                  "approvalRequired": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false,
                "required": ["allowance", "approvalRequired"]
              },
              "external": {
                "type": "object",
                "properties": {
                  "allowance": {
                    "type": "boolean"
                  },
                  "approvalRequired": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false,
                "required": ["allowance", "approvalRequired"]
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
    "id": "Company1",
    "tags": {},
    "description": "Headquarters in Spain",
    "key": "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y"
  },
  {
    "id": "Company2",
    "tags": {},
    "description": "Headquarters in United Kingdom",
    "key": "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
  }
],
"schemas": [
  {
    "id": "Test",
    "tags": {},
    "content": {
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
    }
  }
],
  "policies": [
    {
      "id": "Test",
      "validation": {
        "quorum": 0.5,
        "validators": [
          "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y",
          "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
        ]
      },
      "approval": {
        "quorum": 1.0,
        "approvers": [
          "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y",
          "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
        ]
      },
      "invokation": {
        "owner": {
          "allowance": true,
          "approvalRequired": false
        },
        "set": {
          "allowance": true,
          "approvalRequired": true,
          "invokers": ["EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"]
        },
        "all": {
          "allowance": true,
          "approvalRequired": true
        },
        "external": {
          "allowance": false,
          "approvalRequired": false
        }
      }
    },
    {
      "id": "governance",
      "validation": {
        "quorum": 0.5,
        "validators": [
          "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y",
          "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
        ]
      },
      "approval": {
        "quorum": 0.5,
        "approvers": [
          "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y",
          "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
        ]
      },
      "invokation": {
        "owner": {
          "allowance": true,
          "approvalRequired": true
        },
        "set": {
          "allowance": true,
          "approvalRequired": false,
          "invokers": []
        },
        "all": {
          "allowance": false,
          "approvalRequired": false
        },
        "external": {
          "allowance": false,
          "approvalRequired": false
        }
      }
    }
  ]
}
```

</details>

:::

### Members
This property defines the list of members in the network, meaning, users that have the right to participate in the network, and each member has the following properties:
- **id**. A short, colloquial name by which the node is known in the network. It serves no functionality other than being descriptive. It does not act as a unique identifier within the network.
- **description**. A longer text that serves to further define the subject. It serves no functionality other than being descriptive.
- **dey**. Corresponds to the controller-id of the node. Acts as a unique [identifier](../../technology/identity#identifiers) within the network and corresponds to the node's cryptographic public key.

```json title="Members section example"
{
  "members": [
    {
      "id": "Company1",
      "tags": {},
      "description": "Headquarters in Spain",
      "key": "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y"
    },
    {
      "id": "Company2",
      "tags": {},
      "description": "Headquarters in United Kingdom",
      "key": "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
    }
  ]
}
```

### Schemas
Defines the list of schemas that are allowed to be used in the subjects associated with governance. Each scheme includes the following properties:
- **id**. Schema unique identifier.
- **content**. Schema description in JSON-Schema format. 

```json title="Schemas section example"
{
  "schemas": [
    {
      "id": "Test",
      "tags": {},
      "content": {
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
      }
    }
  ]
}
```

:::info
Refer to ["Creating a JSON-Schema"](./creating-a-json-schema.md) page for more information about JSON-Schema.
:::

### Policies
This property defines the permissions of the users previously defined in the members section, granting them roles with respect to the schemas they have defined. Policies are defined independently for each scheme defined in governance. 
- **Validators**. Defines who the validators are for the subjects that are created with that schema. Also, the quorum required to consider an event as validated.
- **Approvers**. Defines who the approvers are, those who are in charge of voting on whether a request is approved or rejected. Also, the quorum required to consider an event as approved.
- **Invokation**. Defines in which cases a prior approval must be made before creating the event and its subsequent validation. It is based solely on who the invoker of the request is. It also has the following fields:
  - **Owner**. Represent the owner of the subject.
  - **Set**. Defines an array of Ids to represent a subset of members of the governance.
  - **All**. Represent all other members of the governance.
  - **External**. Represent Ids that do not belong to the governance.

Once one of the fields matches the invoker (from bottom to top), the **allowance** property of it is used to check that the invoker has the necessary permissions to make the invocation. The **approvalRequired** field is used to define whether that request needs to be approved.


```json title="Example of policies for Test schema"
{
  "id": "Test",
  "validation": {
    "quorum": 0.5,
    "validators": [
      "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y",
      "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
    ]
  },
  "approval": {
    "quorum": 1.0,
    "approvers": [
      "ED8MpwKh3OjPEw_hQdqJixrXlKzpVzdvHf2DqrPvdz7Y",
      "EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"
    ]
  },
  "invokation": {
    "owner": {
      "allowance": true,
      "approvalRequired": false
    },
    "set": {
      "allowance": true,
      "approvalRequired": true,
      "invokers": ["EXjEOmKsvlXvQdEz1Z6uuDO_zJJ8LNDuPi6qPGuAwePU"]
    },
    "all": {
      "allowance": true,
      "approvalRequired": true
    },
    "external": {
      "allowance": false,
      "approvalRequired": false
    }
  }
}
```

:::caution

It is necessary to specify the permissions of all the schemes that are defined, there is no default assignment. Due to this, it is also necessary to specify the permissions of the governance scheme. 

:::
