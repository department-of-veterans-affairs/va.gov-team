
Overview
This file is to house the research findings from ticket #2929

[Original Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2929)


## Validation Errors

When completing the form, if you select that you are married and then continue with the form filling out the spouse data, it causes the form to have a validaiton error on submit no matter what you put into the fields for spouse data. We have tried refreshing the page, starting the form over and entering in different data, nothing seems to work. There is no data to acompany the validation error to tell you what is incorrect or missing. It should be noted if you skip the spouse portion of the forms by selecting that you are not married there is no validation error.

We have added console logging of all validation errors inside the `isValidForm` validation method inside validation.js in the form system and stepped through the form and all of the validaiton errors clear as we step through the form and fill out the fields. It appears this is only validating based on `required` but at the end in the form state when trying to submit there is still a validation error with no futher information.

Erik Hansen who worked on the form before us indicated that when he was working on the form there was an issue with the form data not matching the schema and the validation that happens against the schema is what is stopping the form from submitting. We will investigate this by comparing the form data before submit to the form schema.

### Upon speaking with Erik Hansen

It seems that there are incionsistancies between the shape of the Form Submission Data and the shape of the JSON Schema for the data. These inconsistancies are what is causing the validation errors. We now need to compare the two data structures and see how we can fix this.

-------------------------------------------------------------------------------------------------------------------------

## Console Errors (this is a known issue with the VA form system)

Number Of Marriges
There is a field in the form chapter `householdInformation` called `marriges` that is set up as a number field however as soon as a number is entered in the field a console error is thrown that the formData prop is invalid. This leads us to beleive that this field is being validated, or only accepting, strings as the only acceptable input. There is further evidence of this notion in that the full schema file for this form in the vets-json-schema repo ( 21-686C-schema.json ) the `marriges` field is 

The code that places this form field in the form starts on line 427 of the 686 form config file at src/applications/disability-benefits/686/config.form.js

## Notable Issue
Regarding the idea that prefill goes away on refresh for both local and staging - it turns out this is expected behavior, the save in progress is set up so that it treats local environments differently and does not pre-fill on refresh. this is set based on logic inside platform/forms/save-in-progress/RoutedSavableApp.jsx . I have also verified that neither of the issues under things to check out happen on staging either.

## List of bugs discovered as of 12/6/2019
1. Page refresh erases all data from the UI
2. Attempting to expand the children tab on the review page throws a console error and removes the section from the DOM.
3. Schema invalidation error when attempting to submit.
4. Server error when attempting to submit. (422 unprocessable entity)
5. Attempting to submit doesn’t update the corresponding status in the form object.
6. When refreshing the page after problem #2, spouse information is removed from the review page, leaving only three sections. This also coincides with problem #1, the remaining three sections are blank.
7. Using the browser back button allows you to go back, but all fields are empty. In order to regain your data, you have to use the URL to navigate to /disability-benefits/apply/dependents/, the start of the form, where upon you can click on continue application, thereby retrieving all of your existing data.
8. Continuing the form drops you at the unmarried children page, even if you previously reached the review and submit page.
9. Currently, `transformForSubmit` is invoked after each form page goes through validation, so a validation error is thrown. If you refresh the page and resubmit the data, then `transformForSubmit` is invoked beforehand, and the data can be submitted to the backend.
