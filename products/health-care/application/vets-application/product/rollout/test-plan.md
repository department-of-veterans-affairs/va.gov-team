## To be completed before production deployment:
#### Integration test cases
- Open the form, complete required fields, and ensure form can be successfully submitted (DONE)
- Open the form, complete all required fields and optional fields, and ensure form can be successfully submitted (DONE)
- Open the form, complete no fields, and ensure form cannot be submitted
- Fields should be initialized on component render (DONE)
- User input should update stored value
- Editing previously completed fields should update stored value
- Completed status should be updated on Continue (or Save on review page) if section is valid
- Review status should be updated on Edit on review page
- Verified status should be updated on review page when checkbox is checked and on Edit
- Spouse address fields should be automatically populated with veteran's if they share an address
- Successful response back after submitting should include submission ID and timestamp
- Submit button language should change when clicked (DONE)
- Successful submission should redirect to the confirmation page
- Reloading the page halfway through should redirect to the introduction

#### Unit testing
- Front-end: data types, form updates, component rendering, etc.
- Back-end: validations, schema, API endpoints

#### Manual testing
- Verify data has been successfully submitted into ES
- Browser and device test

#### Usability testing
- Test UI with veterans to identify any remaining points of confusion

#### Monitoring
- Use AWS CloudWatch
- Verify that our app is up and running
- Verify that SOAP service/ES is up and running

## To be completed before press release at end of June:
#### Load testing
- Tool to be determined

#### Usability testing
- Test UI and submission with veterans to make sure their data is submitting to production ES correctly and their applications can be processed
- Test UI with blind veterans for 508 compliance
