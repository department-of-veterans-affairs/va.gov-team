
Overview
This file is to house the research findings from ticket #2929

[Original Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2929)


Validation Errors

When completing the form, if you select that you are married and then continue with the form filling out the spouse data, it causes the form to have a validaiton error on submit no matter what you put into the fields for spouse data. We have tried refreshing the page, starting the form over and entering in different data, nothing seems to work. There is no data to acompany the validation error to tell you what is incorrect or missing. It should be noted if you skip the spouse portion of the forms by selecting that you are not married there is no validation error.

We have added console logging of all validation errors inside the `isValidForm` validation method inside validation.js in the form system and stepped through the form and all of the validaiton errors clear as we step through the form and fill out the fields. It appears this is only validating based on `required` but at the end in the form state when trying to submit there is still a validation error with no futher information.

Erik Hansen who worked on the form before us indicated that when he was working on the form there was an issue with the form data not matching the schema and the validation that happens against the schema is what is stopping the form from submitting. We will investigate this by comparing the form data before submit to the form schema.


Console Errors (this is a known issue with the VA form system)

Number Of Marriges
There is a field in the form chapter `householdInformation` called `marriges` that is set up as a number field however as soon as a number is entered in the field a console error is thrown that the formData prop is invalid. This leads us to beleive that this field is being validated, or only accepting, strings as the only acceptable input. There is further evidence of this notion in that the full schema file for this form in the vets-json-schema repo ( 21-686C-schema.json ) the `marriges` field is 

The code that places this form field in the form starts on line 427 of the 686 form config file at src/applications/disability-benefits/686/config.form.js

