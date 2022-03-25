# Test Cases for QA

- [Test cases for QA](#test-cases-for-qa)
- [How to access in Staging](#how-to-access-in-staging)
- [Assumptions](#assumptions)
- [Test Case: User continues without changes](#test-case-user-continues-without-changes)
    - [Description / Use case](#description--use-case)
    - [Expected Outcome](#expected-outcome)
- [Test Case: Browser Times Out Before Submission](#test-case-browser-times-out-before-submission)
    - [Description / Use case](#description--use-case)
    - [Expected Outcome](#expected-outcome)
- [Test Case: Try to submit Form with Blank Values](#test-case-try-to-submit-form-with-blank-values)
    - [Description / Use case](#description--use-case)
    - [Expected Outcome](#expected-outcome)

## How to access in Staging

- Applies for all scenarios
  - Setup a pre check-in able appointment in stageing following [this doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md), or have one set up for you.
  - Get an ID for the appointment(s) that you wish to pre-check-in for and add it to this URL -> <https://staging.va.gov/health-care/pre-check-in/?id={ID}>

## Assumptions

- User has made an appointment and has received a pre-check-in text message. 

## Test Case: User Continues without Changes

### Description / Use Case 

User views the review and update contact information page(demographics), but does not make any changes. User clicks the Continue button without changes. 

### Expected Outcome 

The demographics updated status and timestamp get submited to vets-api and the user is routed to the next page.

## Test Case: Browser Times Out Before Submission

### Description / Use Case 

User clicks edit on information that wish to change and get routed to the edit screen. In the background, the web browser session times out before the form is submitted. Then, user clicks “Submit” to submit their changes to the form.  

### Expected Outcome 

Upon submitting the form, the user is shown session time out error messages. Information is not submitted to VA systems. If the user logs in to continue editing, the user is directed to the demographic information page. Their previously added input values are lost.

## Test Case: Try to submit Form with Blank Values

### Description / Use Case 

User views an edit page and clears all field values, including required fields.  

### Expected Outcome 

The required fields display an error message and the Update button becomes disabled preventing the user from clicking until they have corrected any error states shown on the fields.

## Test Case: Start New Session Before Submit

### Description / Use Case 

User views the edit demographic information page, makes updates to some required fields, but does not submit the form. Then, user goes to their text messages on their mobile device and clicks on the short url again to restart the pre-check-in process prior to expiration. In a new browser session, user views the edit demographic information page.   

### Expected Outcome 

Inputs from the user’s first session are not available (since they were never saved to VA systems). User can edit their information from what is currently available in VA systems.     

## Test Case: Unknown Error from Server on Submit

### Description / Use Case 

User views the edit demographic information page, makes updates to required fields and submits the form. However, there’s an error processing the data or the service is temporarily unavailable.  

### Expected Outcome 

Information is not saved in VA systems. Show error message to user. User must restart the pre-check-in process. 

## Test Case: Validation Error from Input Value 

### Description / Use Case 

User views the edit demographic information page, makes updates to the required fields and submits the form. However, information entered into one of the required fields (not including address, since it’s covered in a separate test case) does not meet validation criteria. E.g., email address does not include a domain.   

### Expected Outcome 

User is shown validation message on the edit page and the user’s information is not saved in VA systems. Input value from user is still present in the form. User can continue to update their input values or click “Cancel” to go back. 

## Test Case: Address Suggestions from USPS

### Description / Use Case 

User views the edit demographic information page, makes updates to the required fields and submits the form. However, address input value does not meet validation criteria from US Postal Service. 

### Expected Outcome 

Upon submission of the form, the VA systems are not updated. User sees one or more address suggestions in addition to the address they’ve entered. The most relevant suggested address is selected as the default and the user can submit the form with the new address. (Upon submission, the selected address will save to VA systems.) Or the user can select one of the other suggestions returned from US Postal Service, select their previously entered address or click “Cancel” to go back. 

## Test Case: Validation Error on Address, No Suggestions

### Description / Use Case 

User views the “Edit mailing address” page, makes updates to the required fields and submits the form. However, address input value does not match criteria from US Postal Service. 

### Expected Outcome 

Upon submission of the form, the VA systems are not updated. User does not see address suggestions. User sees a message that the address cannot be confirmed, but to confirm in order to have it saved to VA systems. User can either submit the form or click “Cancel” to go back. If user confirms, then the VA systems are updated. 

## Test Case: Missing Unit Number in Address

### Description / Use Case 

User views the “Edit mailing address” page, makes updates to the required fields and submits the form. However, address input value does not match criteria from US Postal Service,  specifically missing a unit number.

### Expected Outcome 

Upon submission of the form, the VA systems are not updated. User sees a message that the address may require a unit number and to either confirm in order to have it saved to VA systems or click “Cancel” to go back to enter in a unit number. If user confirms, then the VA systems are updated.   

## Test Case: Validation Error on Unit Number in Address 

### Description / Use Case 

User views the “Edit mailing address” page, makes updates to the required fields and submits the form. However, address input value does not match criteria from US Postal Service,  specifically the value of the unit number.

### Expected Outcome 

Upon submission of the form, the VA systems are not updated. User sees a message that the address entered may have a problem with the unit number and to either confirm in order to have it saved to VA systems or click “Cancel” to go back to enter in a unit number. If user confirms, then the VA systems are updated.   
