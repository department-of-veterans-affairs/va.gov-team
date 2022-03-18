# Test Cases for QA

## How to Test

-

## Assumptions

- User has made an appointment

## Test Case: Pre-Check-In is Expired

### Description / Use Case 

User clicks on the pre-check-in link from their mobile device at or after 12:01am on the day of their appointment.

### Expected Outcome 

## Test Case: User Submits Form without Changes

### Description / Use Case 

User views the edit demographic information page, but does not make any changes. User submits the form without changes. 

### Expected Outcome 

Information saves to VA systems. 

## Test Case: Browser Times Out Before Submission

### Description / Use Case 

User views the edit demographic information page. In the background, the web browser session times out before the form is submitted. Then, user clicks “Submit” to submit their changes to the form.  

### Expected Outcome 

Upon submitting the form, the user is shown session time out error messages. Information is not submitted to VA systems. If the user logs in to continue editing, the user is directed to the demographic information page. Their previously added input values are lost.

## Test Case: Submit Form with Blank Values

### Description / Use Case 

User views the edit demographic information page and clears all field values, including required fields. User clicks “Submit.”   

### Expected Outcome 

Information is not submitted to VA systems. Show relevant error messages for user to fill out required fields. User has the option to fill out the required fields and submit the form or click “Cancel” to go back. If user cancels, the user’s information in VA systems remains unchanged. 

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
