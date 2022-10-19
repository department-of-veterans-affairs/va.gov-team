<!-- markdownlint-disable no-duplicate-heading -->

# Test Cases for Check-in with Travel Reimbursement
  - [Scope](#scope)
  - [Wireframes](#wireframes)
  - [How to access in Staging](#how-to-access-in-staging)
  - [Test Case A: Happy Path - Successful Check-in - Choose Not to File](#test-case-a-happy-path---successful-check-in---choose-not-to-file)
  - [Test Case B: Happy Path - Successful Check-in - Claim Filed](#test-case-b-happy-path---successful-check-in---claim-filed)
  - [Test Case C: Happy Path - Successful Check-in - Claim Not Filed](#test-case-c-happy-path---successful-check-in---claim-not-filed)  
  - [Test Case D: Happy Path - Needs to Update Information - Choose Not to File](#test-case-d-happy-path---needs-to-update-information---choose-not-to-file)
  - [Test Case E: Happy Path - Needs to Update Information - Claim Filed](#test-case-e-happy-path---needs-to-update-information---claim-filed)
  - [Test Case F: Happy Path - Needs to Update Information - Claim Not Filed](#test-case-f-happy-path---needs-to-update-information---claim-not-filed) 

## Scope
This document is for is QA testing of the va.gov portion of the `Check-in` flow. This document does not include testing of VeText, CHIP, LoROTA, or any other downstream system.

## Wireframes 
- [In person Check-in w/ Travel Reimbursement](https://app.abstract.com/projects/ab30c34e-e2f9-4d3e-bb96-3b683b006c24/branches/ecc65d23-3ae2-47cb-9a52-8ab4fa9dab29/commits/3a08956dcf7267d7d3af8b6cae9c4456a017d20e/files/585436fe-2120-45f4-b4f7-fbae01d258d9/layers/9B61B462-73BA-45CF-ABA4-215FD07B6D5A?collectionId=90b54a54-d2ee-4fae-ad07-73114aa02714&collectionLayerId=6311c53e-ab0c-484a-9e09-8ddcd43532a1&mode=design) 

## How to access in Staging
- [Instructions for creating an appointment and generating a link to eCheck-in and Pre-Check-in in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-demos/staging-instructions.md)
- Our experience is un-authenticated. The URL for our experience is unique per appointment as it contains a token parameter that is a UUID and is generated for each appointment
    - UUIDs are constructed in a sequence of digits equal to 128 bits. The ID is in hexadecimal digits, meaning it uses the numbers 0 through 9 and letters A through F. The hexadecimal digits are grouped as 32 hexadecimal characters with four hyphens: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.
    - Sample URL: <https://staging.va.gov/health-care/appointment-check-in/?id=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX>

## Test Case A: Happy Path - Successful Check-in - Choose Not to File

### Use case
As a user, I do NOT need to update any of my contact information and I DO NOT want to file a travel reimbursement claim.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `No` to the question "Would you like to file a travel reimbursement claim now?"
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information, instructions about what to do next, and information about how to file a travel reimbursement claim later

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case B: Happy Path - Successful Check-in - Claim Filed

### Use case
As a user, I do NOT need to update any of my contact information and I WOULD like to file a travel reimbursement claim and I meet the criteria for filing via eCheck-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `Yes` to each of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information, an acknowledgment that their travel reimbursement claim was filed, and instructions about what to do next for their appointment and their travel claim

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case C: Happy Path - Successful Check-in - Claim Not Filed

### Use case
As a user, I do NOT need to update any of my contact information and I WOULD like to file a travel reimbursement claim, but I DO NOT meet the criteria for filing via eCheck-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `No` to one of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
  - NOTE: if `No` is selected for one of the questions, the subsequent questions will not be asked
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information, an acknowledgment that their travel reimbursement claim could not be filed, and instructions about what to do next for their appointment and an alternate method for filing their travel claim 

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case D: Happy Path - Needs to Update Information - Choose Not to File

### Use case
As a user, my contact information is out-of-date and I will need to check-in with a staff member. I also choose NOT to file a travel reimbursement claim.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `No` to any of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `No` to the question "Would you like to file a travel reimbursement claim now?"
- User should be on the `Check in with a staff member` page and see instructions that they will need to check-in with a staff member and information about how to file a travel reimbursement claim later

### Assert (Expected Outcome)
- No errors are thrown
- User sees a `Check in with a staff member` page with appropriate messaging that matches the mockups

## Test Case E: Happy Path - Needs to Update Information - Claim Filed

### Use case
As a user, my contact information is out-of-date and I will need to check-in with a staff member. I also WOULD like to file a travel reimbursement claim and I meet the criteria for filing via eCheck-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `No` to any of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `Yes` to each of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
- User should be on the `Check in with a staff member` page and see instructions that they will need to check-in with a staff member, an acknowledgment that their travel reimbursement claim was filed, and instructions about what to do next for their appointment and their travel claim

### Assert (Expected Outcome)
- No errors are thrown
- User sees a `Check in with a staff member` page with appropriate messaging that matches the mockups

## Test Case F: Happy Path - Needs to Update Information - Claim Not Filed

### Use case
As a user, my contact information is out-of-date and I will need to check-in with a staff member. I also WOULD like to file a travel reimbursement claim, but I DO NOT meet the criteria for filing via eCheck-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `No` to any of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `No` to one of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
- User should be on the `Check in with a staff member` page and see instructions that they will need to check-in with a staff member, an acknowledgment that their travel reimbursement claim could not be filed, and instructions about what to do next for their appointment and an alternate method for filing their travel claim 

### Assert (Expected Outcome)
- No errors are thrown
- User sees a `Check in with a staff member` page with appropriate messaging that matches the mockups
