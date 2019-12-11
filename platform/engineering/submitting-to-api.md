# Submitting your form to an API


Once you've finished writing your form, you will want to set up the submission to a back-end API. You have a few options for handling this in our form system.

## Setting a submit URL

The primary option for setting up your form submission is to the set the `submitURL` property in the form config. By setting this the form library will handle all of the default data transformation and managing the `fetch` call to submit your data and display the correct confirmation page or error information.

There are also some related configuration properties you may want to set:

- `submitErrorText`: This lets you set some custom error text after our default server error message, which you can use to direct users to a specific help desk number or support avenue.
- `trackingPrefix`: You likely already set this, but if you're at the point where you're submitting the form, you should make sure it's correct.

## Customizing how your data is transformed

You may want to customize the final data that you submit to the back-end API. You can do this with the `transformForSubmit` config property. This is a function that will receive the form data and the form config object. For example, one of our education forms does this:

```js
import { transformForSubmit } from '../../common/schemaform/helpers';

export function transform(formConfig, form) {
  const formData = transformForSubmit(formConfig, form);
  return JSON.stringify({
    educationBenefitsClaim: {
      form: formData
    }
  });
}
```

It calls the default `transformForSubmit` function so that it does all the default transformations, but it takes the result and wraps it in an `educationBenefitsClaim` object. You may also have situations where you want to modify the data before doing the default transforms, if you need to get the data into a shape that doesn't work well with the user experience you want on the form.

### Writing a custom submission process

You also have the option of writing your own submit function and bypassing the default process entirely. You probably won't need to do this, but if you need to make multiple API calls or poll for a status, this might be the best option. The main requirement for using this function is that it needs to return a promise. If the promise rejects, an error state will be displayed. If the promise resolves, then the confirmation page will be shown. Here's a very simple example:

```js
import { transformForSubmit } from '../common/schemaform/helpers';

function submit(form, formConfig) {
  const data = transformForSubmit(form, formConfig);

  return fetch('/v0/myapi', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(resp => {
      if (resp.ok) {
        return resp.json();
      }

      return new Error('vets_client_error: Network request failed');
    })
    .catch(respOrError => {
      if (respOrError instanceof Response) {
        return new Error(`vets_server_error: ${respOrError.statusText}`);
      }

      return respOrError;
    });
}
```

You can then set the `submit` property in the form config to this function.

Some things to note:

- Whatever is in a successful response will go into the Redux state at `form.submission.response`
- The error message text is important; you need to start the message with `vets_server_error` to show the server error message and likewise `vets_client_error` for the client error message (which is an error on the user's browser, like the Internet being down). For example, here's the error shown for client errors:

![](../../assets/client_error.png)

And here's the error message for a server error:

![](../../assets/server_error.png)

As long as you return a promise and throw the expected errors, you can do whatever else you need to do in this submit function.

<hr>

Back: [Vets Website Writing Tests](writing-tests.md)

Next: [Vets Website Save in Progress](save-in-progress.md)
