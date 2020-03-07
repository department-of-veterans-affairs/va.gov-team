# Creating a Form Schema in Vets-JSON-Schema

When building a form, you'll need to create a JSON Schema document that lives in the [vets-json-schema](https://github.com/department-of-veterans-affairs/vets-json-schema) repo and is shared by both the front-end and back-end. This schema will be the contract for data submitted by the front-end to the back-end API.

## Getting started

Our schemas live in [src/schemas](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src/schemas) and are named by your form's official form number. Or, if your form isn't being built off of a paper form, it can be named by another id that you come up with.

Let's say we're creating a schema for form 21-22. We could create a file at `src/schema/21-22/schema.js` that looks like this:

```js
import schemaHelpers from '../../common/schema-helpers';

let schema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'APPOINTMENT OF VETERANS SERVICE ORGANIZATION AS CLAIMANT\'S REPRESENTATIVE',
  type: 'object',
  additionalProperties: false,
  definitions: {
  },
  properties: {
  },
  required: ['privacyAgreementAccepted']
};

[
  ['privacyAgreementAccepted']
].forEach((args) => {
  schemaHelpers.addDefinitionToSchema(schema, ...args);
});

export default schema;
```

We've filled in the title from the paper form, and left the definitions and properties empty. The `vets-json-schema` codebase has some helpers for adding common definitions, which you see in the code around `addDefinitionToSchema`. We're pulling in the common definition for `privacyAgreementAccepted`, which is in `src/common/definitions/js`. This is required for all of our forms.

## Defining your fields

Once you have the basic file structure, you'll want to start adding the fields you need. You'll probably want to dive into learning JSON Schema at this point, but the basics aren't too complicated (the non-basics can definitely be complicated!). Often we will start from the paper form and start adding fields for all of the data in the form.

So, for example, the 21-22 form has a name field. We have a common name definition, so we can add that to our schema:

```js
[
  ['privacyAgreementAccepted'],
  ['fullName', 'veteranFullName']
].forEach((args) => {
  schemaHelpers.addDefinitionToSchema(schema, ...args);
});
```

We're pulling in the `fullName` definition, and by adding a second item called `veteranFullName` to the array, we're adding it to the schema with that name, instead of `fullName`. If you were to run `npm run build` at this point, you would see a schema in `dist/21-22.schema.json` that looked like:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "APPOINTMENT OF VETERANS SERVICE ORGANIZATION AS CLAIMANT'S REPRESENTATIVE",
  "type": "object",
  "additionalProperties": false,
  "definitions": {
    "privacyAgreementAccepted": {
      "type": "boolean",
      "enum": [
        true
      ]
    },
    "fullName": {
      "type": "object",
      "properties": {
        "first": {
          "type": "string",
          "minLength": 1,
          "maxLength": 30
        },
        "middle": {
          "type": "string"
        },
        "last": {
          "type": "string",
          "minLength": 1,
          "maxLength": 30
        },
        "suffix": {
          "type": "string",
          "enum": [
            "Jr.",
            "Sr.",
            "II",
            "III",
            "IV"
          ]
        }
      },
      "required": [
        "first",
        "last"
      ]
    }
  },
  "properties": {
    "privacyAgreementAccepted": {
      "$ref": "#/definitions/privacyAgreementAccepted"
    },
    "veteranFullName": {
      "$ref": "#/definitions/fullName"
    }
  },
  "required": [
    "privacyAgreementAccepted"
  ]
}
```

You can see that we have a `veteranFullName` field and the definition for it pulled in now. You can also add your custom fields, that aren't common definitions. The 21-22 form has a "Name and Job Title of Official Representative" field, so we can add that as a string field:

```js
import schemaHelpers from '../../common/schema-helpers';

let schema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'APPOINTMENT OF VETERANS SERVICE ORGANIZATION AS CLAIMANT\'S REPRESENTATIVE',
  type: 'object',
  additionalProperties: false,
  definitions: {
  },
  properties: {
    nameAndTitle: {
      type: 'string'
    }
  },
  required: ['privacyAgreementAccepted']
};

[
  ['privacyAgreementAccepted']
].forEach((args) => {
  schemaHelpers.addDefinitionToSchema(schema, ...args);
});

export default schema;
```

You can continue on adding fields until you have all the data in the form covered.

## Schema tips

A couple of rules of thumb will help make the schema easier to use on both the front-end and the back-end:

1. Use the common definitions as much as possible. Many of these definitions have matching front-end components, so it'll make the development process quicker to re-use as much as possible.
2. Favor our common definitions and simpler structures over trying to match a third-party API 1:1. Often, you'll be writing a schema for a form that a `vets-api` service will be submitting to another VA API. An important purpose of APIs we build in `vets-api` is to do data transformation, so you don't have to match an internal VA API with your schema. You can start from our common definitions and make small tweaks to make sure you get all the data you need, then leave it to the code in `vets-api` to translate the form data into the submission to another API.

## Testing

Once you've got your schema written, you can write some unit tests for it. Unit tests go in `/test`, so for the 21-22 form we would create a file at `test/21-22/schema.spec.js` that looks like:

```js
import SchemaTestHelper from '../../support/schema-test-helper';
import schemas from '../../../dist/schemas';
import fixtures from '../../support/fixtures';
import _ from 'lodash';
import SharedTests from '../../support/shared-tests';

const schema = schemas['21-22'];

let schemaTestHelper = new SchemaTestHelper(
  schema,
  {
    privacyAgreementAccepted: true
  }
);
let sharedTests = new SharedTests(schemaTestHelper);

describe('21-22 schema', () => {
  sharedTests.runTest('fullName', ['veteranFullName']);
});

schemaTestHelper.testValidAndInvalid('nameAndTitle', {
  valid: [
    'Title'
  ],
  invalid: [
    3
  ]
});
```

There are two main parts in that file. You can run tests for the common definitions in the `describe` block. And you can run tests for specific fields by calling `schemaTestHelper.testValidAndInvalid`. Since our `nameAndTitle` field is a string, it should be valid when you pass it a string, but invalid when you pass it a number.

## Finishing up

Once you have your tests written, you can submit a PR with your changes. In that PR, make sure to bump the version of `vets-json-schema` in `package.json`, so the front-end will pick it up correctly.

## Updating vets-website and vets-api

Once you've merged your changes to master, you'll need to update the front-end and back-end repos to use the new schema. This doesn't need to happen immediately, but you'll have to do at some point.

### vets-website

In `vets-website` you should run these two commands:

```bash
yarn remove vets-json-schema
yarn add https://github.com/department-of-veterans-affairs/vets-json-schema.git\#<commit>
```

You will need to replace `<commit>` with the Git hash for the commit where your changes were merged into master.

### vets-api

Run `bundle update vets_json_schema` and everything should be updated correctly.

<hr>

Back: [Vets Website Form Map](form-map.md)

Next: [Vets API Introduction](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/backend/vets-api/README.md)
