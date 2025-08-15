Check out these other related docs:
- [add item list loop](list_loop_v2_add_item.md) with a separate add item page
- [contact info list loop](list_loop_v3_contact_info.md) which allows editing contact info in 3 separate pages

---

# Overview

There are times when you may need to allow the user to enter a list of items, such as a list of children or a list of spouses, and then allow them to enter detailed information about each list item on a subsequent page. Designers at the VA may refer to this as a `list loop` and for our purposes here we will refer to it as a `list loop`. The way this is achieved in our form system is with an `array` of form field objects - a good way to think of this conceptually is that we allow the first page where the user enters each item in the list as the items in the `array` and then each subsequent page ( where the user enters details about each list item ) is then bound to that  `array` in the code using a special JSON property. Here is how it works.

### Creating an Array of Items

If we stick with our example of a list of children let's say you have received a design that requires a Veteran to enter in each of their kids and then on subsequent pages to enter in details about each respective kid. Let's go through what it would look like to build this. First we need to tell the form system that we are creating an array and we do that in the first page, where we ask the user to enter in each of their children. We do this by adding the child object, that is the collection of form fields that will capture all of the initial information on the first page ( in your design this is probably name, birthday, and some other information ), to our form schema. In this code example we have named the child object `childrenToAdd` -

```
export const informationSchema = {
  type: 'object',
  properties: {
    childrenToAdd: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          first: {},
          middle: {},
          last: {},
          ssn: {},
          birthDate: {},
        },
      },
    },
  },
};

```
There are a few things worth pointing out in this code, first you can see that we have left the JSON objects for `first`, `middle`, `last`, `ssn`, and `birthDate` empty for right now. Normally you would fill these in with the details of what each of those fields need to include but we left them blank for the sake of brevity. The next thing you may notice is that `childrenToAdd` is of `type: 'array'` and this is where we are setting up the  `array` that will be used to capture subsequent pages of information about each child that is entered in. We could have called this array anything but it is important to point out that whatever you name this array it will need to be referenced by this same name in the schemas for the subsequent pages. One last thing that might be interesting to note is that we also added `minItems: 1`, this is optional but it is best practice. This tells the form system that it should create at least one of these children when the form is loaded and that is helpful for things like if you are making fields conditionally required ( because in order to make them donditionally required you will need to reference something else in the form for the condition and if there is not at least one of these items this could cause an error ).

Once we have the first page we then need to create the next page, where for the sake of our example we may be capturing some more details about each child. Here is what the code looks like for a second page where we ask for the address of each child entered -

```
export const addressSchema = {
  type: 'object',
  properties: {
    childrenToAdd: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          state: {},
          street: {},
          city: {},
          postal: {},
        },
      },
    },
  },
};
```
You may notice that this is very similar to the first page and that is because we still want to make sure we reference the same `array` called `childrenToAdd` so that the form system knows what array we are talking about and it knows where to put the information the user adds.

### Importing and using our pages

We wrote both of these schemas as exporting a  `constant` named `schema`, but how do we actually use this? So inside your  `form.js` file inside your config you need to do a few things. First you need to import these `schema` objects and assign them, let's say we want to name our two pages `Child Information` and `Child Address`, here is what the imports and the usage would look like -

```
import { informationSchema } from './our-child-information-file.js';
// you would most likely import a uiSchema as well

import { addressSchema } from './our-child-address-file.js';
// again you would most likely import a uiSchema as well

import IntroductionPage from '../containers/IntroductionPage';
import ConfirmationPage from '../containers/ConfirmationPage';


const formConfig = {
  urlPrefix: '/',
  submitUrl: '/v0/api',
  trackingPrefix: 'new-form-',
  introduction: IntroductionPage,
  confirmation: ConfirmationPage,
  formId: 'XX-230',
  version: 0,
  prefillEnabled: true,
  savedFormMessages: {
    notFound: 'Please start over to apply for new form benefits.',
    noAuth: 'Please sign in again to continue your application for new form benefits.'
  },
  title: 'My new form',
  defaultDefinitions: {
  },
  chapters: {
    chapter1: {
      title: 'Chapter 1',
      pages: {
        childInformation: {
          path: 'child-information',
          title: 'Child Information',
          schema: informationSchema,
          // you would most likely use your uiSchema here
          }
        },
        childAddress: {
          path: 'child-address/:index',
          title: 'Child Address',
          showPagePerItem: true,
          arrayPath: 'childrenToAdd',
          schema: addressSchema,
          // you would most likely use your uiSchema here
        },
      }
    }
  }
};

```
There are a few things worth pointing out here, first we import our `informationSchema` and our `addressSchema` that we creating earlier. Normally you would separately create a uiSchema to go with each of these that holds the corresponding UI information about how the fields should be displayed, error messages, etc. Once we import both of the `schema` objects we then assign them to pages within our `formConfig` object with a few special properties. First we set up two pages, then in the second page we make sure that the `path` includes `/:index`, this is because we are creating an array and on each page item in the array the form system needs to know what item to associate what data with. On the second page we also add the property `showPagePerItem: true` and this ensures that we will get separate pages for each item in the array. What this will look like in reality is that on the first page of our form the user will enter in a few children, then they will be shown a   `childAddress` page for the first child, then a separate `childAddress` page for the second child, and so on for all of the children entered.

Something else worth mentioning is that we included `arrayPath: 'childrenToAdd'` and this is because this is the name we gave to our `array` inside the form `schema` objects so we need to reference it here and then the form system will take care of connecting all of the dots as to what data goes with each item in the `array`.
