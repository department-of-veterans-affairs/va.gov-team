```
{
  "type": "object",
  "enum": [
    "red",
    "amber",
    "green"
  ],
  "properties": {
    "stringType": {
      "type": "string",
      "minLength": 2,
      "maxLength": 3,
      "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$",
      "format": "date, time, date-time, email, hostname, ipv4, ipv6, uri, iri, uri-template, json-pointer, relative-json-pointer",
      "contentMediaType": "text/html"
    },
    "integerType": {
      "type": "number",
      "minimum": 0,
      "exclusiveMinimum": 5,
      "exclusiveMaximum": 100,
      "maximum": 100,
      "multipleOf": 5
    },
    "objectType": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "minProperties": 2,
      "maxProperties": 3,
      "propertyNames": {
        "pattern": "^[A-Za-z_][A-Za-z0-9_]*$"
      },
      "patternProperties": {
        "^S_": {
          "type": "string"
        },
        "^I_": {
          "type": "integer"
        }
      },
      "dependencies": {
        "credit_card": [
          "billing_address"
        ]
      },
      "required": [
        "name",
        "email"
      ]
    },
    "arrayType": {
      "type": "array",
      "items": {
        "type": "number"
      },
      "contains": {
        "type": "number"
      },
      "additionalItems": {
        "type": "string"
      },
      "minItems": 2,
      "maxItems": 3,
      "uniqueItems": true
    },
    "booleanType": {
      "type": "boolean"
    },
    "nullType": {
      "type": "null"
    },
    "Annotations": {
      "title": "Match anything",
      "description": "This is a schema that matches anything.",
      "default": "Default value",
      "examples": [
        "Anything",
        4035
      ],
      "$comment": "this is a comment"
    },
    "contentMediaTypeImage": {
      "type": "string",
      "contentEncoding": "base64",
      "contentMediaType": "image/png"
    },
    "theEnd": {}
  }
}
```
