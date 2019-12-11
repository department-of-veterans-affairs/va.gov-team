# Forms in Production

Now that you have a form in production, making future changes requires some extra care.

## Changing your form schema

Once you're in production and you're also using the save in progress functionality, you have a dilemma when you want to change some fields or some validation on your form. Since there are forms that are saved, if you change the structure of the form, the saved data may no longer match and result in confusing validation errors for a user. Similarly, if validation changes, a user might have already gone past that field and won't know how to fix the new error.

To address this issue, we have the ability to write "migrations" for form data. This way, you can update a user's data to match the new structure, as well as move their position in the form back, if they need to adjust something. Migrations are functions, run in a sequence, based on the "version" of the form, which is saved along with the form data.

Migrations go in the form config object:

```js
const formConfig = {
   ...
   version: 1,
   migrations: [
     ({ formData, metadata, formId }) => {
       // do something
       return {
         formData,
         metadata
       };
     }
   ]
   ...
};
```

We typically start at version 0 and increment each time we need to add a migration. Migrations are functions that get `formData`, `metadata`, and `formId` as arguments. And they must return the `formData` and `metadata`, with any changes that they have made. For example, here is a migration that the health care application uses to convert an old url:

```js
({ formData, metadata }) => {
  const url = metadata.returnUrl || metadata.return_url;
  let newMetadata = metadata;

  if (url === '/household-information/child-information') {
    newMetadata = _.set('returnUrl', '/household-information/dependent-information', metadata);
  }

  return { formData, metadata: newMetadata };
}
```

If the current return URL (which is the URL a user will return to when the load a saved form) matches the outdated one, we update it. The `formData` is not changed in this case.

Another example from the health care application was to fix a bug in our form structure:

```js
(savedData) => {
  const newData = savedData;
  newData.formData = _.unset('isSpanishHispanicLatino', savedData.formData);

  if (typeof _.get('view:demographicCategories.isSpanishHispanicLatino', newData.formData) === 'undefined') {
    newData.formData = _.set('view:demographicCategories.isSpanishHispanicLatino', false, newData.formData);
    return newData;
  }

  return newData;
}
```

In this example, we're moving an incorrectly located `isSpanishHispanicLatino` flag and setting it in the right spot.

Writing migrations is not very common, but you may need to do it if you end up modifying a form that's already in production.

<hr>

Back: [Vets Website Save in Progress](save-in-progress.md)

Next: [Vets Website Form Map](form-map.md)
