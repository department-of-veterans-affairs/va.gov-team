## 3506 - Validation Error Issues - Summary
This is a more extensive explanation of issue #3 documented in the list found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/engineering/686FrontEndResearch.md)

### The Problem
The current 686 is accompanied by a `21-686c-schema.json` file generated from `vets-json-schema`. In this file, marriages is an array containing data 
related to all marriages a veteran has had, including location of marriage:
```
"marriages": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "dateOfMarriage",
          "locationOfMarriage",
          "spouseFullName"
        ],
        "properties": {
          "dateOfMarriage": {
            "$ref": "#/definitions/date"
          },
          "locationOfMarriage": {
            "$ref": "#/definitions/location"
          },
          "spouseFullName": {
            "$ref": "#/definitions/fullName"
          },
          "dateOfSeparation": {
            "$ref": "#/definitions/date"
          },
          "locationOfSeparation": {
            "$ref": "#/definitions/location"
          }
        },
        ...
```
This `locationOfMarriage` property references a definition of location that looks like this:
```
"location": {
      "type": "object",
      "properties": {},
      "oneOf": [
        {
          "required": [
            "countryDropdown",
            "city",
            "state"
          ],
          "properties": {
            "countryDropdown": {
              "type": "string",
              "enum": [
                "USA"
              ],
              "default": "USA"
            },
            "city": {
              "type": "string",
              "maxLength": 30,
              "minLength": 1,
              "pattern": "^(?!\\s)(?!.*?\\s{2,})[^<>%$#@!^&*0-9]+$"
            },
            "state": {
              "type": "string",
              "maxLength": 50,
              "enum": [
               <list of state abbrevs>
              ],
              "enumNames": [
                <list of state names>
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "required": [
            "countryDropdown",
            "countryText"
          ],
          "properties": {
            "countryDropdown": {
              "type": "string",
              "enum": [
                "Country Not In List"
              ],
              "default": "Country Not In List"
            },
            "countryText": {
              "type": "string",
              "maxLength": 50,
              "minLength": 1,
              "pattern": "^(?!\\s)(?!.*?\\s{2,})[^<>%$#@!^&*0-9]+$"
            }
          },
          "additionalProperties": false
        },
        {
          "required": [
            "countryDropdown"
          ],
          "properties": {
            "countryDropdown": {
              "type": "string",
              "enum": [
              <list of countries>
              ]
            }
          },
          "additionalProperties": false
        }
      ]
    },
 ```
On the frontend, the schema used for `locationOfMarriage` looks like this:
```
const locationSchema = {
  type: 'object',
  properties: {
    countryDropdown: militaryAddress.properties.countryDropdown,
    countryText: internationalAddressText.properties.countryText,
    city: domesticAddress.properties.city,
    state: location.oneOf[0].properties.state,
  },
};
```

and this is where the issue arises. The discrepancy between what is on the frontend and what is in the schema file causes the frontend 
to throw a validation error when attempting to submit the form. Evidence for `locationOfMarriage` being the root cause can be seen in the
browser console:
```
...
  errors: [
    0: {
    ...
    instance: {
      city: 'Washington',
      countryDropdown: 'USA',
      countryText: undefined,
      state: 'DC'
    },
    message: 'is not exactly one from [subschema 0], [subschema 1], [subschema 2]',
    ...
    },
  ],
  ...
```

### Potential Solutions
Some thoughts that come to mind for ways to move forward:
1. Rebuild the location of marriage frontend field - We have to ask ourselves why the two schemas above diverge from one another. Though we have a `transformForSubmit` that can take care of 
ensuring data matches up with the schema file, the frontend should really try and be consistent with what is in the schema file to begin with.
2. Fix the current functionality - for some reason, on initial submission form page validation occurs before `transformForSubmit` is ever invoked. Page refresh, reentering data, 
and then resubmitting seems to hit `transformForSubmit` as expected. An option could be to investigate this further and fix whatever is going wrong.
