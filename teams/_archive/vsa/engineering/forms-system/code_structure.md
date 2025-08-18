# Overview

When creating forms using the VA form system it can be a little confusing as to how to structure your code so that it will be easy to maintain and easy to understand later. Here is what we reccomend - 

All of our forms begin with a `form.js` file inside of a `/config` folder, this file is intended to house your `schema` and your `uiSchema`. This is how the form generator sets it up and this works fine when you have a simple form, however for a more advanced form we reccomend that you keep this file but also break your `schema` and your `uiSchema` across smaller files so they are easier to maintain. Here is a rough example of what your `form.js` will look like when you have your `schema` and `uiSchema` inside it -

```
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
        page1: {
          path: 'first-page',
          title: 'First Page',
          uiSchema: {
          },
          schema: {
            type: 'object',
            properties: {
            }
          }
        }
      }
    }
  }
};
```

The area you will focus most of your time on while coding your form will be the `chapters` and `pages` inside the `formConfig` object, this object stores all of the information that our form system uses to "build" your form. 

The most logical way we reccomend breaking your code up is to create a separate folder for each chapter and then inside that folder to create a folder for each page in that respective chapter with a JavaScript file named for the page as well as an `index.js` used to import the pages, like this -

```
| config
| -- chapters
  | --- chapter1
    |---- index.js
    |---- page1
      | ----- page1.js
```

We have named the folders and files `chapter1` and `page1.js` but you normally would want to name the folders and files more like what your form is for, so for instance if you were making a form for submitting education benefits and your first chapter was to get the veteran's basic information you could name the folders and files like this -

```
| config
| -- chapters
  | --- veteranInformation
    |---- index.js
    |---- basic-information
      | ----- basic-information.js
```

Inside your `basicInformation.js` file you would put your `schema` and `uiSchema` for that page of the form, like this - 

```
export const schema = {
  type: 'object',
  properties: {
  }
}

export const uiSchema = {

}
```
Then you would import these inside your `index.js` file and export them like this -

```
import * as veteranInformation from './basic-information/basic-information';

export { veteranInformation };
```
Then inside your `form.js` file you will import and use the `schema` and `uiSchema` like this -

```
import { veteranInformation } from './chapters/veteran-information';

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
        page1: {
          path: 'first-page',
          title: 'First Page',
          uiSchema: veteranInformation.uiSchema,
          schema: veteranInformation.schema,
          }
        }
      }
    }
  }
};
```


