# Governance structure

In this page we will describe the governance structure and configuration. If you want to know more about what governance visit the [Governance](../discover/governance.md) page.

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

## Members

This property allows us to define the conditions that must be met in the different phases of generating an event that requires the participation of different members, such as approval, evaluation, and validation.

- **name**. A short, colloquial name by which the node is known in the network. It serves no functionality other than being descriptive. It does not act as a unique identifier within the governance.
- **id**. Corresponds to the controller-id of the node. Acts as a unique [identifier](../discover/identity.md#identifiers) within the network and corresponds to the node's cryptographic public key.

## Schemas

Defines the list of [schemas](../discover/schemas.md) that are allowed to be used in the subjects associated with governance. Each scheme includes the following properties:

- **id**. Schema unique identifier.
- **schema**. Schema description in [JSON-Schema](./json-schema.md) format.
- **initial_value**. JSON Object that represents the initial state of a newly created subject for this schema.
- **contract**. The compiled [contract](../discover/smart-contracts.md) in Raw String base 64.

:::info
Refer to ["Creating a JSON-Schema"](./json-schema.md) page for more information about JSON-Schema.
:::

## Roles

In this section, we define who are in charge of giving their consent for the event to progress through the different phases of its life cycle (evaluation, approval, and validation), and on the other hand, it also serves to indicate who can perform certain actions (creation of subjects and external invocation).

- **who**. Indicates who the Role affects, it can be a specific id (public key), a member of the governance identified by their name, all members, both members and outsiders, or only outsiders.
  - **ID**{ID}: Public Key of the member.
  - **NAME**{NAME}: Name of the member.
  - **MEMBERS**: All members.
  - **ALL**: All members and externs.
  - **NOT_MEMBERS**: All externs.
- **namespace**. It makes the role in question only valid if it matches the namespace of the subject for which the list of signatories or permissions is being obtained. If it is not present or it's empty, it's assumed to apply universally, as if it were the wildcard *. For the time being, we are not supporting complex wildcards, but implicitly, if we set a namespace, it encompasses everything below it. For instance:
  - open is equivalent to open.*, but not to open*
  - open.dev is equivalent to open.dev.*, but not to open.dev*
  - If it's empty, it equates to everything, that is, *.
- **role**. Indicates what phase it affects:
  - **VALIDATOR**: For the [validation](../discover/event-validation-process.md) phase.
  - **CREATOR**: Indicates who can create subjects of this type.
  - **ISSUER**: Indicates who can invoke the [external invocation](../build/assets-traceability/external-invocations.md) of this type.
  - **WITNESS**: Indicates who are the [witness](../discover/glossary.md#witness) of the subject.
  - **APPROVER**: Indicates who are the [approvators](../discover/glossary.md#Approver) of the subject. Required for the [approval phase](../discover/event-approval-process.md).
  - **EVALUATOR**: Indicates who are the evaluators of the subject. Required for the [evaluation phase](../discover/event-evaluation-process.md).
- **schema**. Indicates which [schemas](../discover/schemas.md) are affected by the Role. They can be specified by their id, all or those that are not governance.
  - **ID**{ID}: Schema unique identifier.
  - **NOT_GOVERNANCE**: All schemas except governance.
  - **ALL**: All schemas.

## Policies

This property defines the permissions of the users previously defined in the members section, granting them roles with respect to the [schemas](../discover/schemas.md) they have defined. Policies are defined independently for each scheme defined in governance.

- **approve**. Defines who the approvators are for the subjects that are created with that schema. Also, the quorum required to consider an event as approved.
- **evaluate**. Defines who the evaluators are for the subjects that are created with that schema. Also, the quorum required to consider an event as evaluated.
- **validate**. Defines who the validators are for the subjects that are created with that schema. Also, the quorum required to consider an event as validated.

What these data define is the type of **quorum** that must be reached for the event to pass this phase. There are 4 types of quorum:

- **MAJORITY**: This is the simplest one, it means that the majority, that is, more than 50% of the voters must sign the petition. It always rounds up, for example, in the case where there are 4 voters, the MAJORITY quorum would be reached when 3 give their signature.
- **FIXED**{fixed}: It's pretty straightforward, it means that a fixed number of voters must sign the petition. For example, if a FIXED quorum of 3 is specified, this quorum will be reached when 3 voters have signed the petition.
- **PORCENTAJE**{porcentaje}: This is a quorum that is calculated based on a percentage of the voters. For example, if a PERCENTAGE quorum of 0.5 is specified, this quorum will be reached when 50% of the voters have signed the petition. It always rounds up.

In the event that a policy does not resolve for any member it will be returned to the governance owner. This allows, for example, that after the creation of the governance, when there are no declared members yet, the owner can evaluate, approve and validate the changes.

:::caution

It is necessary to specify the permissions of all the schemes that are defined, there is no default assignment. Due to this, it is also necessary to specify the permissions of the governance scheme.

:::
