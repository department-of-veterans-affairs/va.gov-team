<!-- markdownlint-disable no-duplicate-heading -->

# Test Cases for Check-in 
  - [Scope](#scope)
  - [Wireframes](#wireframes)
  - [How to access in Staging](#how-to-access-in-staging)
  - [Test Case A: Happy Path - Successful Check-in](#test-case-a-happy-path---successful-check-in)
  - [Test Case B: Happy Path - Needs to Update Information](#test-case-b-happy-path---needs-to-update-information)
  - [Test Case C: Edge Case - Expired Token](#test-case-d-edge-case---expired-token)
  - [Test Case D: Edge Case - No token provided](#test-case-e-edge-case---no-token-provided)
  - [Test Case E: Edge Case - Malformed Token](#test-case-f-edge-case---malformed-token)
  - [Test Case F: Edge Case - User Tries to check in again after not completing an earlier check in attempt](#test-case-h-edge-case---user-tries-to-check-in-again-after-not-completing-an-earlier-check-in-attempt)
  - [Test Case G: Edge Case - User Refreshes the app before finishing the check in process](#test-case-i-edge-case---user-refreshes-the-app-before-finishing-the-check-in-process)

## Scope
This document is for is QA testing of the va.gov portion of the `Check-in` flow. This document does not include testing of VeText, CHIP, LoROTA, or any other downstream system.

## Wireframes 
- [In person Check-in](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/prototype/a/9F9F9F9F-E205-4F5E-9177-DD4AD750828C) in Sketch Cloud

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

## Test Case C: Edge Case - Expired Token
> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/server.403.on.check-in.cypress.spec.js)

### Note
This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case
As a user, I have clicked a link that is no longer valid (i.e., for an appointment that happened on or before yesterday and for which LoROTA data has been deleted). Technically, this test covers a 403 status code from CHIP, which is an expired token error.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User clicks a previously-obtained check-in link that was for an appointment that happened on or before yesterday
- User enters their last name and DOB (or last 4 of their SSN) and selects `Continue` to verify their identity
- User should see an error that indicates an account could not be found that matches their identity and they will not be allowed to complete Check-in

### Assert (Expected Outcome)
- Application does not crash
- User sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case D: Edge Case - No token provided
> [Cypress test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/no.token.provided.cypress.spec.js)

### Note
This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case
As a user, I have landed on the check-in page without a token.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User clicks a check-in link that is missing the token to load the Check-in application
- User should be on the `We couldn't check you in` page and they not be allowed to complete Check-in

### Assert (Expected Outcome)
- Application does not crash
- User sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case E: Edge Case - Malformed Token
> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/malformed.token.cypress.spec.js)

### Note
This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case
As a user, I have landed on the check-in page with a malformed/invalid token.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User clicks a check-in link that has a malformed token to load the Check-in application
- User should be on the `We couldn't check you in` page and they not be allowed to complete Check-in

### Assert (Expected Outcome)
- Application does not crash
- User sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case F: Edge Case - User Tries to check in again after not completing an earlier check in attempt
> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/session/session.reloads.on.refresh.cypress.spec.js)

### Use case
As a user, I have clicked on a valid link to check-in after previously not fully completing check-in for the same appointment. This is to simulate a user closing their app mid check-in and returning later to complete check-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments scheduled for today and receives a Check-in link 
    - A link can also be generated internally by using the Staging Tool
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB (or last 4 of their SSN) and selects `Continue` to verify their identity
- User selects `Yes` to one of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User closes their browser
- User clicks their check-in link to re-load the Check-in application
- User is taken back to the beginning of the check-in process (i.e. first question to answer or identity verification)

### Assert (Expected Outcome)
- Application does not crash
- User is still allowed to check-in.

## Test Case G: Edge Case - User Refreshes the app before finishing the check in process
> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/session/session.reloads.on.refresh.cypress.spec.js)

### Use case
As a user, I have clicked on a valid link to check-in, and I have refreshed the page during the check-in process. This is to simulate a user leaving the app and returning during the process on a mobile device that could reload the app in the middle of check-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments, that is scheduled for today, and receives a Check-in link 
    - NOTE: a link can also be generated internally by using the Staging Tool
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB (or last 4 of their SSN) and selects `Continue` to verify their identity
- User selects `Yes` to one of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User refreshes the webpage
- User is taken back to the beginning of the check-in process (i.e. first question to answer)

### Assert (Expected Outcome)
- Application does not crash
- User is still allowed to check-in.
