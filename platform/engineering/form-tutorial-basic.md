# Vets Website Form Tutorial - Basic

#### Creating Your First Form

In this doc, we'll walk through creating a new form and making some simple changes.

## Setting up

If you haven't already, get [vets-website](https://github.com/department-of-veterans-affairs/vets-website) set up and running on your machine.

The first step after that is to get the basic scaffolding set up for a new application. We have a [generator tool](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/GeneratorOptions.md) to help you set up the files needed for the new React app and form. In the root of `vets-website`, you should install and run Yeoman and the generator:

```bash
npm install -g yo
npm install -g @department-of-veterans-affairs/generator-vets-website

yo @department-of-veterans-affairs/vets-website
```

You can answer the questions with the [documentation](https://github.com/department-of-veterans-affairs/vets-website/blob/master/docs/GeneratorOptions.md) as a guide, or if you're just looking to try things out, here are the answers I'm using for this tutorial:

- What's the name of your application? This will be the default page title. `My new form`
- What folder in `src/applications/` should your app live in? This can be a subfolder. `new-form`
- What should be the name of your app's entry bundle? `newForm`
- What's the root url for this app? `/new-form`
- Is this a form app? `Y`
- Where can I find the vagov-content repo? This path can be absolute or relative to vets-website. `./`
- What's your form number? `XX-230`
- What's the Google Analytics event prefix you want to use? `new-form-`
- What's the respondent burden of this form in minutes? `30`
- What's the OMB control number for this form? `XX3344`
- What's the OMB expiration date (in M/D/YYYY format) for this form? `5/31/2020`
- What's the benefit description for this form? `new form benefits`
- Which form template would you like to start with? `Choose 'BLANK: A form without any fields'`

After you run the generator, run `yarn watch` (or restart it if you already had it running) and navigate to http://localhost:3001/new-form. You should see something like this:

![](../../assets/forms/initial-form.png)

## Updating your form

Now that you're up and running, we can add a new page and field to our form. If you open up `src/applications/new-form/config/form.js`, you should see a `formConfig` variable:

```js
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

There's a lot of information already there, and you can check out the [form config specifications](https://github.com/usds/us-forms-system/tree/master/docs) to see what each property means. For now, we're going to look at the content of the form, which lives in `chapters`.

At the most basic level, our forms consist of: widgets, fields, pages, and chapters.

- **Widgets** are the basic form controls, things like `<input/>` and `<select/>` elements.
- **Fields** are the next level up and contain a widget and a `<label/>`, plus some extra optional description information.
- We then have **pages**, which are collections of fields.
- **Chapters** are collections of pages.

We can see in the config that there's already one chapter, with one page inside it, called `page1`. In the `page1` object there are a few pieces of information, which we can mostly ignore for now. The important properties for us right now are `uiSchema` and `schema`. `schema` is the initial structure of our page, in the form of a [JSON Schema](https://spacetelescope.github.io/understanding-json-schema/). This describes the type of data that will result from a user filling in our form. It's also used by the form library to determine what fields and widgets to display in the application, except when overridden by `uiSchema`. `uiSchema` is an object that has extra, user interface-focused information to help render the form.

Let's add a property to `schema`:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'string'
      }
    }
  }
}
```

Now if you go to http://localhost:3001/new-form/first-page you should see this:

![](../../assets/first-field.png)

That's not the most exciting field, but it's a field! We can add a title to it by adding to `uiSchema`:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field label'
    }
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'string'
      }
    }
  }
}
```

That makes it look a little more presentable:

![](../../assets/field-with-label.png)

Note that `uiSchema` doesn't follow exactly the same structure as `schema`: you don't need the `properties` object. This is because `uiSchema` treats everything without a `ui:` prefix as a field name, with one exception for array fields.

Changing the the `type` property in your field will change the data accepted and also the way it displays on the form. You can change it to be `boolean` and get a checkbox and `number` to get a number input. If you want a `select` box, you use JSON Schema's `enum` property:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field label'
    }
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'string',
        'enum': [
          'First option',
          'Second option'
        ]
      }
    }
  }
}
```

That will get you a select box with options:

![](../../assets/select-field.png)

Some types of data might have different valid ways of asking the user for input. For example, a field that uses `enum` could also use radio buttons. You can change that with `ui:widget`:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field label',
      'ui:widget': 'radio'
    }
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'string',
        'enum': [
          'First option',
          'Second option'
        ]
      }
    }
  }
}
```

Now the form offers two radio buttons to choose from:

![](../../assets/radio-buttons.png)

You can also mark fields as required, which will prevent you from moving to the next page without filling them out:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field label',
      'ui:widget': 'radio'
    }
  },
  schema: {
    type: 'object',
    required: ['myField'],
    properties: {
      myField: {
        type: 'string',
        'enum': [
          'First option',
          'Second option'
        ]
      }
    }
  }
}
```

If you do fill in the required information and click Continue, you'll end up on the review page. The review page for our forms is generated based on your chapters and pages and provides a quick way to review the data that you've entered:

![](../../assets/review.png)

Note that if you refresh in the middle of the form, your data will be lost and the review page won't have any content to edit.

Once you've reviewed your form, you have to click the checkbox to agree to the privacy policy and then you can submit! For now, though, that Submit button will fail because there's no api to submit the data to.

That's it! Continue on in our documentation to learn about building more complex forms and the whole process for building and submitting a new form.

<hr>

Back: [Vets Website Development](../development.md)

Next: [Vets Website Form Tutorial - Intermediate](form-tutorial-intermediate.md)
