# Test Cases for QA

- [How to access in Staging](#how-to-access-in-staging)
- [Assumptions](#assumptions)
- [Test Case: User Continues without Changes](#test-case-user-continues-without-changes)
  - [Description / Use Case](#description--use-case)
  - [Expected Outcome](#expected-outcome)
- [Test Case: Browser Times Out Before Submission](#test-case-browser-times-out-before-submission)
  - [Description / Use Case](#description--use-case-1)
  - [Expected Outcome](#expected-outcome-1)
- [Test Case: Try to submit Form with Blank Values](#test-case-try-to-submit-form-with-blank-values)
  - [Description / Use Case](#description--use-case-2)
  - [Expected Outcome](#expected-outcome-2)
- [Test Case: Start New Session Before Submit](#test-case-start-new-session-before-submit)
  - [Description / Use Case](#description--use-case-3)
  - [Expected Outcome](#expected-outcome-3)
- [Test Case: Unknown Error from Server on Submit](#test-case-unknown-error-from-server-on-submit)
  - [Description / Use Case](#description--use-case-4)
  - [Expected Outcome](#expected-outcome-4)
- [Test Case: Validation Error from Input Value](#test-case-validation-error-from-input-value)
  - [Description / Use Case](#description--use-case-5)
  - [Expected Outcome](#expected-outcome-5)
- [Test Case: Address Suggestions from the Lighthouse Address Validation service](#test-case-address-suggestions-from-the-lighthouse-address-validation-service)
  - [Description / Use Case](#description--use-case-6)
  - [Expected Outcome](#expected-outcome-6)
- [Test Case: Validation Error on Address, No Suggestions](#test-case-validation-error-on-address-no-suggestions)
  - [Description / Use Case](#description--use-case-7)
  - [Expected Outcome](#expected-outcome-7)
- [Test Case: Missing or bad Unit Number in Address](#test-case-missing-or-bad-unit-number-in-address)
  - [Description / Use Case](#description--use-case-8)
  - [Expected Outcome](#expected-outcome-8)
- [Test Case: Home address same as mailing address](#test-case-home-address-same-as-mailing-address)
  - [Description / Use Case](#description--use-case-9)
  - [Expected Outcome](#expected-outcome-9)

## How to access in Staging

- Applies for all scenarios
  - Setup a pre check-in able appointment in staging following [this doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md), or have one set up for you.
  - Get an ID for the appointment(s) that you wish to pre-check-in for and add it to this URL -> <https://staging.va.gov/health-care/pre-check-in/?id={ID}>

## Assumptions

- User has made an appointment and has received a pre-check-in text message. 

## Test Case: User Continues without Changes

### Description / Use Case 

User views the review and update contact information page(demographics), but does not make any changes. User clicks the Continue button without changes. 

### Expected Outcome 

The demographics updated status and timestamp get submitted to vets-api and the user is routed to the next page.

## Test Case: Browser Times Out Before Submission

### Description / Use Case 

User clicks edit on information and gets routed to the edit screen. In the background, the web browser session times out before the form is submitted. Then, user clicks “Submit” to submit their changes to the form.  

### Expected Outcome 

Upon submitting the form, the user is shown session time out error messages. Information is not submitted to VA systems. If the user logs in to continue editing, the user is directed to the demographic information page. Their previously added input values are lost.

## Test Case: Try to submit Form with Blank Values

### Description / Use Case 

User views, edits page and then clears all field values, including required fields. User clicks "Update."  

### Expected Outcome 

The required fields display an error message and the "Update" button becomes disabled preventing the user from clicking until they have corrected any error states shown on the fields.

## Test Case: Start New Session Before Submit

### Description / Use Case 

User views an edit page, makes updates to required fields, but does not submit the form. Then, user goes to their text messages on their mobile device and clicks on the short url again to restart the pre-check-in process prior to expiration. In a new browser session, user views the review and update contact information page(demographics).   

### Expected Outcome 

Inputs from the user’s first session are not available (since they were never saved to VA systems). User can edit their information from what is currently available in VA systems.     

## Test Case: Unknown Error from Server on Submit

### Description / Use Case 

User views an edit page, makes updates to required fields and submits the form, they get routed back to the demographic overview page and hit the Continue button. However, there’s an error processing the data or the service is temporarily unavailable.  

### Expected Outcome 

Information is not saved in VA systems. Show error message to user. User must restart the pre-check-in process. 

## Test Case: Validation Error from Input Value 

### Description / Use Case 

User views an edit page, makes updates to the required fields. However, information entered into one of the required fields (not including address, since it’s covered in a separate test case) does not meet validation criteria. E.g., email address does not include a domain.   

### Expected Outcome 

User is shown validation message on the edit page and the Update button is disabled. Input value from user is still present in the form. User can continue to update their input values or click “Cancel” to go back to the review and update contact information page(demographics). 

## Test Case: Address Suggestions from the Lighthouse Address Validation service

### Description / Use Case 

User views the edit address page, makes updates to the required fields and submits the form. However, address input value does not match criteria from the Lighthouse Address Validation service. 

### Expected Outcome 

If the service returns a low confidence score for the submitted address, but also returns suggestions, the user will be routed to an address confirmation page. On this page the user can either select an address from the suggestions or select their originally entered address and click the "Use this address" button. After clicking the button they are routed back to the review and update contact information page(demographics) where they can see the address that they selected. The user can also click the cancel button from the address confirmation screen, this will route the user back to the edit screen to either make more edits and submit again or cancel out completely.

## Test Case: Validation Error on Address, No Suggestions

### Description / Use Case 

User views the edit address page, makes updates to the required fields and submits the form. However, address input value does not match criteria from the Lighthouse Address Validation service. 

### Expected Outcome 

If the service returns a low confidence score but doesn’t return suggestions, the user will be routed to an address confirmation screen, but they won’t have a list of suggestions. The user can click the "Use this address" button to confirm that they still want to use the address. After clicking the button they are routed back to the review and update contact information page(demographics) where they can see the address that they edited. The user can also click the cancel button from the address confirmation screen, this will route the user back to the edit screen to either make more edits and submit again or cancel out completely.

## Test Case: Missing or bad Unit Number in Address

### Description / Use Case 

User views the edit address page, makes updates to the required fields and submits the form. However, address input value does not match criteria from the Lighthouse Address Validation service. 

### Expected Outcome 

If the service returns that the address has a bad or missing unit number, the user will be routed to an address confirmation screen with a message regarding the unit number. The user can click the "Use this address" button to confirm that they still want to use the address. After clicking the button they are routed back to the overview page where they can see the address that they edited. The user can also click the cancel button from the address confirmation screen, this will route the user back to the edit screen to either make more edits and submit again or cancel out completely.

## Test Case: Home address same as mailing address

### Description / Use Case 
TBD

### Expected Outcome 
TBD

## Test Case: User Authorization

### Description / Use Case 
TBD

### Expected Outcome 
TBD

## Test Case: Edit demographics again before confirming appointment

### Description / Use Case 
TBD

### Expected Outcome 
TBD
