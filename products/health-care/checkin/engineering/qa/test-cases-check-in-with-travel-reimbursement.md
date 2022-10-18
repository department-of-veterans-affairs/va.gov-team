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
- [In person Check-in w/ Travel Reimbursement]() ???????????????????

## How to access in Staging
- [Instructions for creating an appointment and generating a link to eCheck-in and Pre-Check-in in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-demos/staging-instructions.md)
- Our experience is un-authenticated. The URL for our experience is unique per appointment as it contains a token parameter that is a UUID and is generated for each appointment
    - UUIDs are constructed in a sequence of digits equal to 128 bits. The ID is in hexadecimal digits, meaning it uses the numbers 0 through 9 and letters A through F. The hexadecimal digits are grouped as 32 hexadecimal characters with four hyphens: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.
    - Sample URL: <https://staging.va.gov/health-care/appointment-check-in/?id=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX>

## Test Case A: Happy Path - Successful Check-in
> [Cypres Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/happy-path/base.happy.path.cypress.spec.js)

### Use case
As a user, I do not need to update any of my contact information and can check-in successfully.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB (or last 4 of their SSN) and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information and instructions about what to do next

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case B: Happy Path - Needs to Update Information
> [Cypres Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/go-to-staff/need.to.update.cypress.spec.js)

### Use case
As a user, my contact information is out-of-date and I will not be able to check-in using eCheck-in, but will need to check-in with a staff member so that I can update my contact information.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB (or last 4 of their SSN) and selects `Continue` to verify their identity
- User selects `No` to any of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User should be on the `Check in with a staff member` page and see instructions that they will need to check-in with a staff member

### Assert (Expected Outcome)
- No errors are thrown
- User sees a `Check in with a staff member` page with appropriate messaging that matches the mockups

