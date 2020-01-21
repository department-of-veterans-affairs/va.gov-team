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
This is a custom validation, a feature that comes with our form system. Documentation for custom validation can be found [here](https://react-jsonschema-form.readthedocs.io/en/latest/validation/). The custom validation we are passing in references values inside the `21-686C-schema.json` file inside `vets-json-schema`. As you can see, for instance, we are referencing `militaryAddress.properties.countryDropdown` as the schema for `countryDropdown`. The values we are passing into this custom validation are then validated against the `21-686c-schema.json` file when the form is submitted. There are a few inconsistancies here that will need to be addressed. First, as indicated above, the custom validation we added does not match the shape of the schema inside `21-686c-schema.json`.

Also the schemas we are referencing inside our custom validation don't match the validations inside the different shapes inside the json schema. For instance we are referencing `militaryAddress.properties.countryDropdown` which looks like this

```
"countryDropdown": {
          "type": "string",
          "maxLength": 50,
          "enum": [
            "USA",
            "Country Not In List",
            "Afghanistan",
            "Albania",
            "Algeria",
            "Angola",
            "Anguilla",
            "Antigua",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Azores",
            "Bahamas",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Barbuda",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia",
            "Bosnia-Herzegovina",
            "Botswana",
            "Brazil",
            "Brunei",
            "Bulgaria",
            "Burkina Faso",
            "Burma",
            "Burundi",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cape Verde",
            "Cayman Islands",
            "Central African Republic",
            "Chad",
            "Chile",
            "China",
            "Colombia",
            "Comoros",
            "Congo, Democratic Republic of",
            "Congo, People's Republic of",
            "Costa Rica",
            "Cote d'Ivoire",
            "Croatia",
            "Cuba",
            "Cyprus",
            "Czech Republic",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "England",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Ethiopia",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "Gabon",
            "Gambia",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Great Britain",
            "Great Britain and Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guatemala",
            "Guinea",
            "Guinea, Republic of Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran",
            "Iraq",
            "Ireland",
            "Israel (Jerusalem)",
            "Israel (Tel Aviv)",
            "Italy",
            "Jamaica",
            "Japan",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kosovo",
            "Kuwait",
            "Kyrgyzstan",
            "Laos",
            "Latvia",
            "Lebanon",
            "Leeward Islands",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Macedonia",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Mali",
            "Malta",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mexico",
            "Moldavia",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Namibia",
            "Nepal",
            "Netherlands",
            "Netherlands Antilles",
            "Nevis",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger",
            "Nigeria",
            "North Korea",
            "Northern Ireland",
            "Norway",
            "Oman",
            "Pakistan",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines",
            "Philippines (restricted payments)",
            "Poland",
            "Portugal",
            "Qatar",
            "Republic of Yemen",
            "Romania",
            "Russia",
            "Rwanda",
            "Sao-Tome/Principe",
            "Saudi Arabia",
            "Scotland",
            "Senegal",
            "Serbia",
            "Serbia/Montenegro",
            "Seychelles",
            "Sicily",
            "Sierra Leone",
            "Singapore",
            "Slovakia",
            "Slovenia",
            "Somalia",
            "South Africa",
            "South Korea",
            "Spain",
            "Sri Lanka",
            "St. Kitts",
            "St. Lucia",
            "St. Vincent",
            "Sudan",
            "Suriname",
            "Swaziland",
            "Sweden",
            "Switzerland",
            "Syria",
            "Taiwan",
            "Tajikistan",
            "Tanzania",
            "Thailand",
            "Togo",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey (Adana only)",
            "Turkey (except Adana)",
            "Turkmenistan",
            "Uganda",
            "Ukraine",
            "United Arab Emirates",
            "United Kingdom",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela",
            "Vietnam",
            "Wales",
            "Western Samoa",
            "Yemen Arab Republic",
            "Zambia",
            "Zimbabwe"
          ]
        },

```
However inside `21-686c-schema.json` none of the `countryDropdown` schemas match this schema for  `militaryAddress.properties.countryDropdown`. The same is true of `domesticAddress.properties.city` which we reference in the custom validation for city. In `domesticAddress.properties.city` the schema looks like this

```
"city": {
          "type": "string",
          "maxLength": 30,
          "pattern": "^(?!\\s)(?!.*?\\s{2,})[^<>%$#@!^&*0-9]+$"
        },
```

However the city schemas inside `21-686c-schema.json` looks like this

```
"city": {
              "type": "string",
              "maxLength": 30,
              "minLength": 1,
              "pattern": "^(?!\\s)(?!.*?\\s{2,})[^<>%$#@!^&*0-9]+$"
            },
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

## The solution we went with

In order to solve this we ended up greatly simplifying the `locationOfMarriage` property on both the frontend and the backend, this allowed us to not only align the fronend and schema files but also to match the form fields on the paper version of the 686 form mutch more closely.  It turned out that in order to simplify the `locationOfMarriage` property we needed to fix both of the issues called out above as well as a third issue we were not aware of at the time we made this doc. Here is how we fixed the issues -

### The schema mismatches

So originally the frontend schema was requiring data be present for 4 properties and if any of those fields were empty the form would fail validation. Here is what the schema looked like for those 4 properties -

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

We wanted to simplify the `locationSchema`, so we changed it to be like this -

```
const locationSchema = {
  type: 'object',
  required: ['city', 'state'],
  properties: {
    state: location.oneOf[0].properties.state,
    city: location.oneOf[0].properties.city,
  },
};
```

We then changed the schema file so that the first item inside the `oneOf` loop of properties matched these like this -

```
"location": {
      "type": "object",
      "oneOf": [
        {
          "required": [
            "city",
            "state"
          ],
          "properties": {
            "city": {
              "type": "string",
              "maxLength": 30,
              "pattern": "^(?!\\s)(?!.*?\\s{2,})[^<>%$#@!^&*0-9]+$"
            },
            "state": {
              "type": "string",
              "maxLength": 30,
              "pattern": "^(?!\\s)(?!.*?\\s{2,})[^<>%$#@!^&*0-9]+$"
            }
          },
          "additionalProperties": false
        },

```

This would show simply two text fields on the front end asking for simple text. 

### The validation error we didn't know about

At the same time these schemas didn't match there was also another layer to this that made it so that simply fixing the schemas to match did not fix the problem. We began console logging the data being validated and found that the `locationOfMarriage` was inside a nested schema called `marriageHistory`, however when we console logged what was being validated it said that the data for `locationOfMarriage` was being validated against a different nested property called `marriages` inside the `marriageInformation` object. Inside this was a reference to locations that did not match what we updated the schemas to so the validation was still failing. To fix this we adjusted the `marriages` property to be an empty object and the validation then passed becasue by changing it to an empty object in effect we were not using this layer of validation anymore.

The code we added looks like this - 

```
marriages: {
  type: 'array',
  items: {
  type: 'object',
  properties: {},
  },
},
```

