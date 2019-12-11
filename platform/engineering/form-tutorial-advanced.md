# Vets Website Form Tutorial - Advanced

#### Using Common Definitions

All of our forms share schemas with the back-end through `vets-json-schema`, the repository where we store JSON Schemas for validating data submitted to a `vets-api` API endpoint. Assuming you've created one of those schemas, the next step is to incorporate that into your form, along with other common definitions we've built.

## Adding your schema

Assuming you've created your form using our form scaffolding generator, you should have some commented out lines in your `config/form.js` file:

```js
// import fullSchema from 'vets-json-schema/dist/VIC-schema.json';

// ...code omitted...

// const { } = fullSchema.properties;

// const { } = fullSchema.definitions;
```

If you uncomment those lines and update the import path to match your schema's file name, you can start pulling in individual definitions and properties to use in your form. We try to use the properties from the shared schema as much as possible, since it helps keep the front-end and back-end in sync and avoid validation errors in production. For example, if you want to import an `email` field from your schema, you can do something like this:

```js
import fullSchema from 'vets-json-schema/dist/VIC-schema.json';

// ...code omitted...

const {
  email
} = fullSchema.properties;

// const { } = fullSchema.definitions;

const formConfig = {
   // ...code omitted...
   page1: {
     path: 'first-page',
     title: 'First Page',
     uiSchema: {
       email: {
         'ui:title': 'My field label'
       }
     },
     schema: {
       type: 'object',
       properties: {
         email
       }
     }
   }
   // ...code omitted...
};
```

Here we're using Javascript's object shorthand syntax to set the `email` property to the object from the shared schema properties. That way we know we're using the same field name and using the same definition type as what will be used by the back-end. Note that we still need to be careful that we include all the fields we need from `fullSchema`.

## Using a common front-end definition

We have a collection of common definitions and fields on the front-end for you to use in your form. Let's try using our common full name field:

```js
import fullSchema from 'vets-json-schema/dist/VIC-schema.json';
import fullNameUI from 'platform/forms/definitions/fullName';
// ...code omitted...

const {
  veteranFullName
} = fullSchema.properties;

const {
  fullName
} = fullSchema.definitions;

const formConfig = {
  // ...code omitted...
  defaultDefinitions: {
    fullName
  },
  // ...code omitted...
    page1: {
      path: 'first-page',
      title: 'First Page',
      uiSchema: {
        veteranFullName: fullNameUI
      },
      schema: {
        type: 'object',
        properties: {
          veteranFullName
        }
      }
    }
   // ...code omitted...
};
```

There are a few things going on here. One, we've pulled the `fullName` definition from `fullSchema`. JSON Schema's method of code reuse has you put definitions in a `definitions` object in the schema, then reference them with a `$ref` property, so we have to account for that on the front-end. We can do that by importing it from `fullSchema.definitions` and adding it to the `definitions` object in our form config object.

Second, we've imported `fullNameUI` from our common front-end definitions. For this field, we just have some `uiSchema` configuration that sets labels and widget types. Other fields are more complex, and may require you to call a function to generate the right configuration, and possibly import something for the regular `schema` object as well.

Finally, in the code you can see that we're using `fullNameUI` in the `uiSchema` object, and we're using `veteranFullName` like we used `email` previously.

## Modifying common definitions

Often you'll need to slightly modify common definitions on the front-end to change a label or some conditional logic. The way we typically do that is to use our data utilities to set values on the schema. For example, say we needed to make our `veteranFullName` field expand underneath another field:

```js
import _ from 'lodash/fp';
import fullSchema from 'vets-json-schema/dist/VIC-schema.json';
import fullNameUI from 'platform/forms/definitions/fullName';
// ...code omitted...

const {
  veteranFullName
} = fullSchema.properties;

const {
  fullName
} = fullSchema.definitions;

const formConfig = {
   // ...code omitted...
  defaultDefinitions: {
    fullName
  },
  // ...code omitted...
    page1: {
      path: 'first-page',
      title: 'First Page',
      uiSchema: {
        myField: {
          'ui:title': 'My field',
          'ui:widget': 'yesNo'
        },
        veteranFullName: _.merge(fullNameUI, {
          'ui:options': {
            expandUnder: 'myField'
          }
        })
      },
      schema: {
        type: 'object',
        properties: {
          myField: { type: 'boolean' },
          veteranFullName
        }
      }
    }
   // ...code omitted...
};
```

We've imported the [Lodash FP (functional programming) library](https://github.com/lodash/lodash/wiki/FP-Guide) and using its `merge` function to merge our `ui:options` into the `fullNameUI` object, so that we don't have to redefine all of the configuration in there. All of the Lodash FP methods treat objects as immutable, not modifying anything you pass in to them, so you can reuse `fullNameUI` in another spot in your form without worrying about having to remove the `ui:options` configuration we added.

## Things to watch out for

The point of having these common definitions and sharing a schema between the front-end and back-end is to encourage consistency in our forms and to reduce errors when submitting a form to a `vets-api` endpoint. But following the guide above won't completely prevent those issues. Here are some things to keep in mind:

- Since we're importing individual fields from `fullSchema`, it can be easy to miss required field rules, since we often import those directly. Make sure you're marking all the necessary fields as required in your form config.
- Importing individual fields makes it easy to group them in ways specific to the front-end, so make sure if you are grouping things, you're using property names prefixed with `view:` to remove that grouping before submitting.

<hr>

Back: [Vets Website Form Tutorial - Intermediate](form-tutorial-intermediate.md)

Next: [Vets Website Writing Tests](writing-tests.md)
