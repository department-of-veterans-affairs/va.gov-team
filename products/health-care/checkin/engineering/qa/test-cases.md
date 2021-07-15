<!-- markdownlint-disable no-duplicate-heading -->

# Test Cases for Check-in Pre-MVP

- [Test Cases for Check-in Pre-MVP](#test-cases-for-check-in-pre-mvp)
  - [Scope](#scope)
  - [Resources](#resources)
  - [How to access in Staging](#how-to-access-in-staging)
  - [Assumptions](#assumptions)
  - [To-Dos](#to-dos)
  - [Test Case A: Happy Path - Successful Check-in](#test-case-a-happy-path---successful-check-in)
    - [Use case](#use-case)
    - [Arrange (Data needed)](#arrange-data-needed)
    - [Act](#act)
    - [Assert (Expected Outcome)](#assert-expected-outcome)
  - [Test Case B: Happy Path - Needs to Update Information](#test-case-b-happy-path---needs-to-update-information)
    - [Use case](#use-case-1)
    - [Arrange (Data needed)](#arrange-data-needed-1)
    - [Act](#act-1)
    - [Assert (Expected Outcome)](#assert-expected-outcome-1)
  - [Test Case C: Edge Case - Expired Token](#test-case-c-edge-case---expired-token)
    - [Note](#note)
    - [Use case](#use-case-2)
    - [Arrange (Data needed)](#arrange-data-needed-2)
    - [Act](#act-2)
    - [Assert (Expected Outcome)](#assert-expected-outcome-2)
  - [Test Case D: Edge Case - No token provided](#test-case-d-edge-case---no-token-provided)
    - [Note](#note-1)
    - [Use case](#use-case-3)
    - [Arrange (Data needed)](#arrange-data-needed-3)
    - [Act](#act-3)
    - [Assert (Expected Outcome)](#assert-expected-outcome-3)
  - [Test Case E: Edge Case - Malformed Token](#test-case-e-edge-case---malformed-token)
    - [Note](#note-2)
    - [Use case](#use-case-4)
    - [Arrange (Data needed)](#arrange-data-needed-4)
    - [Act](#act-4)
    - [Assert (Expected Outcome)](#assert-expected-outcome-4)
  - [Test Case F: Edge Case - User Tries to check in again after already successfully checking in](#test-case-f-edge-case---user-tries-to-check-in-again-after-already-successfully-checking-in)
    - [Note](#note-3)
    - [Use case](#use-case-5)
    - [Arrange (Data needed)](#arrange-data-needed-5)
    - [Act](#act-5)
    - [Assert (Expected Outcome)](#assert-expected-outcome-5)
  - [Test Case G: Edge Case - User Tries to check in again after not completing an earlier check in attempt](#test-case-g-edge-case---user-tries-to-check-in-again-after-not-completing-an-earlier-check-in-attempt)
    - [Use case](#use-case-6)
    - [Arrange (Data needed)](#arrange-data-needed-6)
    - [Act](#act-6)
    - [Assert (Expected Outcome)](#assert-expected-outcome-6)
  - [Test Case H: Edge Case - User Refreshes the app before finishing the check in process](#test-case-g-edge-case---user-refreshes-the-app-before-finishing-the-check-in-process)
    - [Use case](#use-case-7)
    - [Arrange (Data needed)](#arrange-data-needed-7)
    - [Act](#act-7)
    - [Assert (Expected Outcome)](#assert-expected-outcome-7)

## Scope

This document is for is QA testing of the va.gov portion of the `Check-in` flow. This document does not include testing of VeText, CHIP, LoROTA, or any other downstream system.

## Resources

- [Mock Ups for Pre-MVP - Test Case A & B](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/a/QbxZp4L/play)
- [Error State Mockup](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/a/MynDRab)

## How to access in Staging

- Our experience is un-authenticated
- The URL for our experience is unique per appointment
- The sample URL: <https://staging.va.gov/health-care/appointment-check-in/?id=VALID-TOKEN-HERE>

## Assumptions

- We have a way to generate links with valid tokens, with valid data, with LoROTA in Staging.

## To-Dos

- [ ] Validate Assumptions
- [ ] Create cypress tests for each test cases

## Test Case A: Happy Path - Successful Check-in

> [Cypres Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/happy-path/base.happy.path.cypress.spec.js)

### Use case

- As a user, I do not need to update any information and can check-in successfully
  
### Arrange (Data needed)

- A link to the check in-app with a valid LoROTA token

Example: <https://staging.va.gov/health-care/appointment-check-in/?id=VALID-TOKEN-HERE>

### Act

- The link Loads
- The user selects "No" to the `Update Information` question
- User selects the `Check-in now` button
- User should be on the confirmation screen and see appropriate messaging that matches the mockups

### Assert (Expected Outcome)

- No errors are thrown
- The user sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case B: Happy Path - Needs to Update Information

> [Cypres Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/go-to-staff/need.to.update.cypress.spec.js)

### Use case

- As a user, I do need to update any information. To update my information, I need to see a staff member
  
### Arrange (Data needed)

- A link to the check in-app with a valid LoROTA token

Example: <https://staging.va.gov/health-care/appointment-check-in/?id=VALID-TOKEN-HERE>

### Act

- The link Loads
- The user selects "`Yes` to the `Update Information` question
- User should be on the `See Staff` page

### Assert (Expected Outcome)

- No errors are thrown
- The user sees a `See Staff` screen with appropriate messaging that matches the mockups

## Test Case C: Edge Case - Expired Token

> No test made

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have clicked a link that is no longer valid (i.e., for an appointment that happened yesterday)
  
### Arrange (Data needed)

- A link to the check in-app with an expired LoROTA token

Example: <https://staging.va.gov/health-care/appointment-check-in/?id=EXPIRED-TOKEN-HERE>

### Act

- The link Loads
- User should see an error page 

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case D: Edge Case - No token provided

> No Cypress test created yet

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have landed on the check-in page without a token
  
### Arrange (Data needed)

- A link to the check in-app without any LoROTA token

Example: <https://staging.va.gov/health-care/appointment-check-in/>

### Act

- The link Loads
- User should see an error page

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case E: Edge Case - Malformed Token

> No Cypress test created yet

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have landed on the check-in page with a malformed/invalid token
  
### Arrange (Data needed)

- A link to the check in-app with a malformed LoROTA token

Example: <<https://staging.va.gov/health-care/appointment-check-in/?id=NOT> A VALID TOKEN>

### Act

- The link Loads
- User should see an error page

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case F: Edge Case - User Tries to check in again after already successfully checking in

> No Cypress test created yet

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have clicked on the same link prior to my appointment time to check in again after already successfully checking in. 
  
### Arrange (Data needed)

- A link to the check in-app with a LoROTA token that has already been used to check-in. 

Example: <https://staging.va.gov/health-care/appointment-check-in/?id=A_VALID_TOKEN>

### Act

- The link Loads
- The user sees an appropriate message

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case G: Edge Case - User Tries to check in again after not completing an earlier check in attempt

> No Cypress test created yet

### Use case

- As a user, I have clicked on a valid link to check-in after previously not fully completing checking in for the same appointment
  - this is to simulate a user closing their app mid check-in and returning later to complete check-in
  
### Arrange (Data needed)

- A link to the check in-app with a LoROTA token

Example: <https://staging.va.gov/health-care/appointment-check-in/?id=A_VALID_TOKEN>

### Act

- The user clicks the link
- The link Loads
- The user selects "No" to the `Update Information` question
- The user closes their app
- The user click the link
- The link Loads
- The user selects "No" to the `Update Information` question
- User selects the `Check-in now` button
- User should be on the confirmation screen and see appropriate messaging that matches the mockups

### Assert (Expected Outcome)

- Application does not crash
- No errors are thrown
- The user sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case H: Edge Case - User Refreshes the app before finishing the check in process

> No Cypress test created yet

### Use case

- As a user, I have clicked on a valid link to check-in, and I have refreshed the page during the check-in process
  - this is to simulate a user leaving the app and returning during the process on a mobile device that could reload the app in the middle of check-in
  
### Arrange (Data needed)

- A link to the check in-app with a LoROTA token

Example: <https://staging.va.gov/health-care/appointment-check-in/?id=A_VALID_TOKEN>

### Act

- The user clicks the link
- At some point, before clicking "check-in," the user refreshed the page.
- The app is loaded at the same point without failure. 

### Assert (Expected Outcome)

- Application does not crash
- The user is still allowed to check-in.
