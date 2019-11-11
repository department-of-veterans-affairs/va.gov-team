
Overview
This file is to house the research findings from ticket #2929

[Original Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2929)


Console Errors

Number Of Marriges
There is a field in the form chapter `householdInformation` called `marriges` that is set up as a number field however as soon as a number is entered in the field a console error is thrown that the formData prop is invalid. This leads us to beleive that this field is being validated, or only accepting, strings as the only acceptable input. There is further evidence of this notion in that the full schema file for this form in the vets-json-schema repo ( 21-686C-schema.json ) the `marriges` field is 

The code that places this form field in the form starts on line 427 of the 686 form config file at src/applications/disability-benefits/686/config.form.js

