<!-- markdownlint-disable no-duplicate-heading -->

# Test Cases for Pre-Check-in 
- [Test Cases for PreCheck-in](#test-cases-for-pre-check-in)
  - [Scope](#scope)
  - [Wireframes](#wireframes)
  - [How to access in Staging](#how-to-access-in-staging)
  - [Test Case A: Happy Path - Successful Pre-Check-in](#test-case-a-happy-path---successful-pre-check-in)
  - [Test Case B: Cannot Pre-Check-in on Day of Appointment](#test-case-B:-cannot-pre-check-in-on-day-of-appointment)
  - [Test Case C: Edge Case - Expired Token](#test-case-d-edge-case---expired-token)
  - [Test Case D: Edge Case - No token provided](#test-case-e-edge-case---no-token-provided)
  - [Test Case E: Edge Case - Malformed Token](#test-case-f-edge-case---malformed-token)
  - [Test Case F: Edge Case - User Tries to complete Pre-Check-in again after not completing an earlier attempt](#test-case-f:-edge-case---user-tries-to-complete-pre-check-in-again-after-not-completing-an-earlier-attempt)
  - [Test Case G: Edge Case - User Refreshes the app before finishing the Pre-Check-in process](#test-case-g-edge-case---user-refreshes-the-app-before-finishing-the-pre-check-in-process)

## Scope
This document is for is QA testing of the va.gov portion of the `Pre-Check-in` flow. This document does not include testing of VeText, CHIP, LoROTA, or any other downstream system.

## Wireframes 
- [In person Pre-Check-in](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/prototype/a/BE60720E-7D9D-46BD-AF86-6332C23E7D8B) in Sketch Cloud
- [Telephone Pre-Check-in](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/prototype/a/407FA16E-4716-43C8-8898-B25F96F61001) in Sketch Cloud

## How to access in Staging
- [Instructions for creating an appointment and generating a link to eCheck-in and Pre-Check-in in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-demos/staging-instructions.md)
- Our experience is un-authenticated. The URL for our experience is unique per appointment as it contains a token parameter that is a UUID and is generated for each appointment
    - UUIDs are constructed in a sequence of digits equal to 128 bits. The ID is in hexadecimal digits, meaning it uses the numbers 0 through 9 and letters A through F. The hexadecimal digits are grouped as 32 hexadecimal characters with four hyphens: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.
    - Sample URL: <https://staging.va.gov/health-care/appointment-check-in/?id=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX>

## Test Case A: Happy Path - Successful Pre-Check-in

### Use case
As a user, I do not need to update any of my contact information and can complete pre-check-in successfully.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User sees the appointment for which they are completing Pre-Check-in and clicks "Answer questions"
- User selects `No` or `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User should be on the `You've completed pre-check-in` page and see their appointment information 

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case B: Cannot Pre-Check-in on Day of Appointment

### Use case
As a user, I attempt to complete pre-check-in on the day of or after my appointment, which is not allowed.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application on the day of or after their appointment time
- User enters their last name and DOB and selects `Continue` to verify their identity
- User should be on the `Sorry, pre-check-in is no longer available` page and they cannot complete Pre-Check-in

### Assert (Expected Outcome)
- No errors are thrown
- User sees a `Sorry, pre-check-in is no longer available` page with appropriate messaging that matches the mockups

## Test Case C: Edge Case - Expired Token

### Note
This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case
As a user, I have clicked a link that is no longer valid (i.e., for which LoROTA data has been deleted). Technically, this test covers a 403 status code from CHIP, which is an expired token error.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application after the day of their appointment time
- User enters their last name and DOB and selects `Continue` to verify their identity
- User should see an error that indicates an account could not be found that matches their identity and they will not be allowed to complete Pre-Check-in

### Assert (Expected Outcome)
- Application does not crash
- User sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case D: Edge Case - No token provided

### Note
This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case
As a user, I have landed on the Pre-check-in page without a token.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application after the day of their appointment time
- User enters their last name and DOB and selects `Continue` to verify their identity
- User should be on the `Sorry, we can't complete pre-check-in` page and they not be allowed to complete Pre-Check-in

### Assert (Expected Outcome)
- Application does not crash
- User sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case E: Edge Case - Malformed Token

### Note
This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case
As a user, I have landed on the check-in page with a malformed/invalid token.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application after the day of their appointment time
- User enters their last name and DOB and selects `Continue` to verify their identity
- User should be on the `Sorry, we can't complete pre-check-in` page and will not be allowed to complete Pre-Check-in

### Assert (Expected Outcome)
- Application does not crash
- User sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case F: Edge Case - User Tries to complete Pre-Check-in again after not completing an earlier attempt

### Use case
As a user, I have clicked on a valid link to Pre-Check-in after previously not fully completing check-in for the same appointment. This is to simulate a user closing their app mid check-in and returning later to complete check-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application after the day of their appointment time
- User enters their last name and DOB and selects `Continue` to verify their identity
- User sees the appointment for which they are completing Pre-Check-in and clicks "Answer questions"
- User selects `Yes` or `No` to one of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User closes their browser
- User clicks their pre-check-in link to re-load the Pre-Check-in application
- User is taken back to the beginning of the Pre-Check-in process (i.e. "Answer questions" page)

### Assert (Expected Outcome)
- Application does not crash
- User is still allowed to complete Pre-Check-in.

## Test Case G: Edge Case - User Refreshes the app before finishing the Pre-Check-in process

### Use case
As a user, I have clicked on a valid link to Pre-check-in, and I have refreshed the page during the Pre-Check-in process. This is to simulate a user leaving the app and returning during the process on a mobile device that could reload the app in the middle of Pre-check-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User receives a Pre-Check-in link after confirming their appointment via text message (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their pre-check-in link to load the Pre-Check-in application after the day of their appointment time
- User enters their last name and DOB and selects `Continue` to verify their identity
- User sees the appointment for which they are completing Pre-Check-in and clicks "Answer questions"
- User selects `Yes` or `No` to one of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User closes their browser
- User clicks their pre-check-in link to re-load the Pre-Check-in application
- User is taken back to the beginning of the Pre-Check-in process (i.e. "Answer questions" page)

### Assert (Expected Outcome)
- Application does not crash
- User is still allowed to complete Pre-Check-in.
