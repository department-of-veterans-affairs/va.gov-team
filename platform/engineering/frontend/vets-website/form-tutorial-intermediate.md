# Vets Website Form Tutorial - Intermediate

### Form Validation & Conditional Fields

Now that you've gone through and created a really simple form using the tutorial, let's take a look at how to handle some common use cases on forms.

## Custom validation

Because our forms are based on JSON Schema, you can rely on the built in types and pattern property to do a lot of your validation. However, sometimes you need validation rules that go beyond what JSON Schema offers. To write custom validation, we have a `ui:validations` helper:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field label',
      'ui:validations': [
        (errors, field) => {
          if (field && field.startsWith('bad')) {
            errors.addError("Sorry, you can't start this field with 'bad'");
          }
        }
      ]
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

`ui:validations` takes an array of functions, each of which is passed an errors object and the field data (plus some other parameters). So in the above example, if a user puts 'badString' in `myField`, then the form will display a validation error with the message passed in `addError()`.

One thing to note is that you can add `ui:validations` on any field or object in `uiSchema`, which allows you to validate groups of fields together:


```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    email: {
      'ui:title': 'Email',
    },
    confirmEmail: {
      'ui:title': 'Confirm email'
    },
    'ui:validations': [
      (errors, field) => {
        if (field.email !== field.confirmEmail) {
          errors.confirmEmail.addError('Sorry, your emails must match');
        }
      }
    ]
  },
  schema: {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      confirmEmail: {
        type: 'string'
      }
    }
  }
}
```

Since we moved the validation array up to the root of `uiSchema`, the field data it is passed is an object containing both `email` and `confirmEmail`, and we can set validation errors on either field.

## Custom validation error messages

In addition to the above custom validation, you can also customize the messages for the built in JSON Schema validation. For example, if I have some pattern validation, I can set an understandable message:


```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field',
      'ui:errorMessages': {
        pattern: 'Sorry, you must enter all digits'
      }
    },
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'string',
        pattern: '^\d+$'
      }
    }
  }
}
```

## Conditional required fields

In some cases you may want to have fields be required only under certain conditions. To handle that, you can use the `ui:required` helper:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field',
    },
    myOtherField: {
      'ui:title': 'My field',
      'ui:required': (formData) => formData.myField === 'test'
    },
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'string',
      }
      myOtherField: {
        type: 'string',
      }
    }
  }
}
```

In the above config, `myOtherField` will be required if `myField` equals "test". The `formData` parameter contains all of the form data, across all pages, so your conditional logic can be based on any other data in the form.

## Conditionally displayed fields

Often when building forms you'll need to hide and show fields based on form data or other information. Our form system has three ways of doing so.

### Expand under fields

A common pattern is to expand some fields "underneath" others, when a user enters information in a field that requires more information to be collected:

TODO: expandUnder image

To do that, you can use the `expandUnder` option:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field',
      'ui:widget': 'yesNo'
    },
    myConditionalField: {
      'ui:title': 'My conditional field',
      'ui:options': {
        expandUnder: 'myField'
      }
    },
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'boolean',
      }
      myConditionalField: {
        type: 'string',
      }
    }
  }
}
```

In the above example, `myConditionalField` will display whenever `myField` has a truthy value. You can add this to mutiple fields and all of them will be grouped under the `expandUnder` field. Note, however, that if any of these hidden fields are required when visible, you'll have to use `ui:required` to make sure they're not required when they're not displayed.

### Conditionally hidden fields

If you just need to hide or show a field, without the expand under treatment, you can use `hideIf`:


```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    myField: {
      'ui:title': 'My field',
      'ui:widget': 'yesNo'
    },
    myConditionalField: {
      'ui:title': 'My conditional field',
      'ui:options': {
        hideIf: (formData) => formData.myField !== true
      }
    },
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'boolean'
      }
      myConditionalField: {
        type: 'string'
      }
    }
  }
}
```

In the above example, `myConditionalField` is hidden when `myField` is not true (meaning it's false or undefined).

## Conditional pages

Another situation you may encounter is needing to make an entire page of the form conditional. You can do that with the `depends` property:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  depends: (form) => form.fieldOnAnotherPage !== 'test',
  uiSchema: {
    myField: {
      'ui:title': 'My field',
      'ui:widget': 'yesNo'
    }
  },
  schema: {
    type: 'object',
    properties: {
      myField: {
        type: 'boolean'
      }
    }
  }
}
```

The depends function is passed the current form data, so you can check different conditions and return false if want to skip a page. Note that you want to make sure you're checking data a user would enter before potentially reaching this page, otherwise they won't ever see it.

## View only data

In some cases, you may have fields that you don't need to submit along with the form data. A confirmation email field, for example. In other cases you may also want to group fields into objects but not have that grouping reflected in the submitted data. This can be useful if you need to conditionally hide a group of fields and don't want to write hideIf functions every individual field.

To keep a field from being submitted, you can prefix it with `view:`:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    email: {
      'ui:title': 'Email',
    },
    'view:confirmEmail': {
      'ui:title': 'Confirm email'
    }
  },
  schema: {
    type: 'object',
    properties: {
      email: {
        type: 'string'
      },
      'view:confirmEmail': {
        type: 'string'
      }
    }
  }
}
```

Since we've prefixed `confirmEmail` with `view:`, that field will be removed before submitting the completed form.

If you prefix an object with `view:`, some slightly different will happen:

```js
page1: {
  path: 'first-page',
  title: 'First Page',
  uiSchema: {
    email: {
      'ui:title': 'Email',
    },
    'view:confirmEmail': {
      'ui:title': 'Confirm email'
    }
  },
  schema: {
    type: 'object',
    properties: {
      'view:emails': {
        email: {
          type: 'string'
        },
        'confirmEmail': {
          type: 'string'
        }
      }
    }
  }
}
```

In this case, the form data that's submitted when a user completes a form would be:

```js
{
  email: 'test@test.com',
  confirmEmail: 'test@test.com'
}
```

If we had left off the `view:` prefix it would be:

```js
{
  emails: {
    email: 'test@test.com',
    confirmEmail: 'test@test.com'
  }
}
```

That should get you started with some of the common validation and conditional field scenarios. Many of the options above have extra parameters or options that may help with some less common scenarios, so make sure to check the form config spec for a full picture of all the options offered.

<hr>

Back: [Vets Website Form Tutorial - Basic](form-tutorial-basic.md)

Next: [Vets Website Form Tutorial - Advanced](form-tutorial-advanced.md)
