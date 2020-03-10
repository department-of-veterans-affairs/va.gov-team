# Overview

When creating forms using the VA form system it can be a little confucing as to how to structure your code so that it will be easy to maintain and easy to understand later. Here is what we reccomend - 

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
