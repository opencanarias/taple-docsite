# Creating a JSON-Schema

The following example is by no means definitive of all the value JSON Schema can provide. For this you will need to go deep into the specification itself -- learn more at [json schema specification.](https://json-schema.org/specification.html).

Let's pretend we're interacting with a JSON based car registration. This registration has a car which has:

* An manufacturer identifier: `chassisNumber`
* Identification of country of registration: `licensePlate`
* Number of kilometers driven: `mileage`
* An optional set of tags: `tags`.

For example:

```json
{
  "chassisNumber": 72837362,
  "licensePlate": "8256HYN",
  "mileage": 60000,
  "tags": [ "semi-new", "red" ]
}
```

While generally straightforward, the example leaves some open questions. Here are just a few of them:

* What is `chassisNumber`?
* Is `licensePlate` required?
* Can the `mileage` be less than zero (0)?
* Are all of the `tags` string values?

When you're talking about a data format, you want to have metadata about what keys mean, including the valid inputs for those keys. **JSON Schema** is a proposed IETF standard how to answer those questions for data.

## Starting the schema

To start a schema definition, let's begin with a basic JSON schema.

We start with four properties called **keywords** which are expressed as [JSON](https://www.json.org/) keys.

> Yes. the standard uses a JSON data document to describe data documents, most often that are also JSON data documents but could be in any number of other content types like `text/xml`.

* The [`$schema`](https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.1.1) keyword states that this schema is written according to a specific draft of the standard and used for a variety of reasons, primarily version control.
* The [`$id`](https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.2.1) keyword defines a URI for the schema, and the base URI that other URI references within the schema are resolved against.
* The [`title`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9.1) and [`description`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9.1) annotation keywords are descriptive only. They do not add constraints to the data being validated. The intent of the schema is stated with these two keywords.
* The [`type`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.1.1) validation keyword defines the first constraint on our JSON data and in this case it has to be a JSON Object.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object"
}
```

We introduce the following pieces of terminology when we start the schema:

* [Schema Keyword](https://json-schema.org/draft/2020-12/json-schema-core.html#section-8.1.1): `$schema` and `$id`.
* [Schema Annotations](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-9.1): `title` and `description`.
* [Validation Keyword](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.1.1): `type`.

## Defining the properties

`chassisNumber` is a numeric value that uniquely identifies a car. Since this is the canonical identifier for a var, it doesn't make sense to have a car without one, so it is required.

In JSON Schema terms, we update our schema to add:

* The [`properties`](https://json-schema.org/draft/2020-12/json-schema-core.html#section-10.3.2.1) validation keyword.
* The `chassisNumber` key.
  * `description` schema annotation and `type` validation keyword is noted -- we covered both of these in the previous section.
* The [`required`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.5.3) validation keyword listing `chassisNumber`.


```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object",
  "properties": {
    "chassisNumber": {
      "description": "Manufacturer's serial number",
      "type": "integer"
    }
  },
  "required": [ "chassisNumber" ]
}
```

* `licensePlate` is a string value that acting as a secondary identifier. Since there isn't a car without a registration it also is required.
* Since the `required` validation keyword is an array of strings we can note multiple keys as required; We now include `licensePlate`.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object",
  "properties": {
    "chassisNumber": {
      "description": "Manufacturer's serial number",
      "type": "integer"
    },
    "licensePlate": {
      "description": "Identification of country of registration",
      "type": "string"
    }
  },
  "required": [ "chassisNumber", "licensePlate" ]
}
```

## Going deeper with properties

According to the car registry, they cannot have negative mileage. ;)

* The `mileage` key is added with the usual `description` schema annotation and `type` validation keywords covered previously. It is also included in the array of keys defined by the `required` validation keyword.
* We specify that the value of `mileage` must be greater than or equal to zero using the [`minimum`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.2.5) validation keyword.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object",
  "properties": {
    "chassisNumber": {
      "description": "Manufacturer's serial number",
      "type": "integer"
    },
    "licensePlate": {
      "description": "Identification of country of registration",
      "type": "string"
    },
    "mileage": {
      "description": "Number of kilometers driven",
      "type": "number",
      "minimum": 0
    }
  },
  "required": [ "chassisNumber", "licensePlate", "mileage" ]
}
```

Next, we come to the `tags` key.

The car registry has established the following:

* If there are tags there must be at least one tag,
* All tags must be unique; no duplication within a single car.
* All tags must be text.
* Tags are nice but they aren't required to be present.

Therefore:

* The `tags` key is added with the usual annotations and keywords.
* This time the `type` validation keyword is `array`.
* We introduce the [`items`](https://json-schema.org/draft/2020-12/json-schema-core.html#section-10.3.1.2) validation keyword so we can define what appears in the array. In this case: `string` values via the `type` validation keyword.
* The [`minItems`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.4.2) validation keyword is used to make sure there is at least one item in the array.
* The [`uniqueItems`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.4.3) validation keyword notes all of the items in the array must be unique relative to one another.
* We did not add this key to the `required` validation keyword array because it is optional.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object",
  "properties": {
    "chassisNumber": {
      "description": "Manufacturer's serial number",
      "type": "integer"
    },
    "licensePlate": {
      "description": "Identification of country of registration",
      "type": "string"
    },
    "mileage": {
      "description": "Number of kilometers driven",
      "type": "number",
      "minimum": 0
    },
    "tags": {
      "description": "Tags for the car",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "uniqueItems": true
    }
  },
  "required": [ "chassisNumber", "licensePlate", "mileage" ]
}
```

## Nesting data structures

Up until this point we've been dealing with a very flat schema -- only one level. This section demonstrates nested data structures.

* The `dimensions` key is added using the concepts we've previously discovered. Since the `type` validation keyword is `object` we can use the `properties` validation keyword to define a nested data structure.
  * We omitted the `description` annotation keyword for brevity in the example. While it's usually preferable to annotate thoroughly in this case the structure and key names are fairly familiar to most developers.
* You will note the scope of the `required` validation keyword is applicable to the dimensions key and not beyond.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object",
  "properties": {
    "chassisNumber": {
      "description": "Manufacturer's serial number",
      "type": "integer"
    },
    "licensePlate": {
      "description": "Identification of country of registration",
      "type": "string"
    },
    "mileage": {
      "description": "Number of kilometers driven",
      "type": "number",
      "minimum": 0
    },
    "tags": {
      "description": "Tags for the car",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "uniqueItems": true
    },
    "dimensions": {
      "type": "object",
      "properties": {
        "length": {
          "type": "number"
        },
        "width": {
          "type": "number"
        },
        "height": {
          "type": "number"
        }
      },
      "required": [ "length", "width", "height" ]
    }
  },
  "required": [ "chassisNumber", "licensePlate", "mileage" ]
}
```

## References outside the schema

So far our JSON schema has been wholly self contained. It is very common to share JSON schema across many data structures for reuse, readability and maintainability among other reasons.

For this example we introduce a new JSON Schema resource and for both properties therein:
* We use the `minimum` validation keyword noted earlier.
* We add the [`maximum`](https://json-schema.org/draft/2020-12/json-schema-validation.html#section-6.2.2) validation keyword.
* Combined, these give us a range to use in validation.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/geographical-location.schema.json",
  "title": "Longitude and Latitude",
  "description": "A geographical coordinate on a planet (most commonly Earth).",
  "required": [ "latitude", "longitude" ],
  "type": "object",
  "properties": {
    "latitude": {
      "type": "number",
      "minimum": -90,
      "maximum": 90
    },
    "longitude": {
      "type": "number",
      "minimum": -180,
      "maximum": 180
    }
  }
}
```

Next we add a reference to this new schema so it can be incorporated.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://example.com/car.schema.json",
  "title": "Car",
  "description": "A registered car",
  "type": "object",
  "properties": {
    "chassisNumber": {
      "description": "Manufacturer's serial number",
      "type": "integer"
    },
    "licensePlate": {
      "description": "Identification of country of registration",
      "type": "string"
    },
    "mileage": {
      "description": "Number of kilometers driven",
      "type": "number",
      "minimum": 0
    },
    "tags": {
      "description": "Tags for the car",
      "type": "array",
      "items": {
        "type": "string"
      },
      "minItems": 1,
      "uniqueItems": true
    },
    "dimensions": {
      "type": "object",
      "properties": {
        "length": {
          "type": "number"
        },
        "width": {
          "type": "number"
        },
        "height": {
          "type": "number"
        }
      },
      "required": [ "length", "width", "height" ]
    },
    "geoPositioning": {
      "description": "Coordinates of the warehouse where the car is located.",
      "$ref": "https://example.com/geographical-location.schema.json"
    }
  },
  "required": [ "chassisNumber", "licensePlate", "mileage" ]
}
```

## Taking a look at data for our defined JSON Schema

We've certainly expanded on the concept of a car since our earliest sample data (scroll up to the top). Let's take a look at data which matches the JSON Schema we have defined.

```json

  {
    "chassisNumber": 1,
    "licensePlate": "8256HYN",
    "mileage": 60000,
    "tags": [ "semi-new", "red" ],
    "dimensions": {
      "length": 4.005,
      "width": 1.932,
      "height": 1.425
    },
    "geoPositioning": {
      "latitude": -78.75,
      "longitude": 20.4
    }
  }
```
:::note Attribution

This tutorial is based on ["Getting Started Step-By-Step"](https://json-schema.org/learn/getting-started-step-by-step.html) JSON-Schema tutorial. If you want to learn more about JSON-Schema, visit the [JSON-Schema website](https://json-schema.org) for the original tutorial and other resources.

:::
