<!-- markdownlint-disable no-duplicate-heading -->

# Test Cases for Check-in 
- [Test Cases for Check-in with Travel Reimbursement](#test-cases-for-check-in-pre-mvp)
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
  - [Test Case C: Edge Case - Premature Check-in](#test-case-c-edge-case---premature-check-in)
    - [Note](#note)
    - [Use case](#use-case-2)
    - [Arrange (Data needed)](#arrange-data-needed-2)
    - [Act](#act-2)
    - [Assert (Expected Outcome)](#assert-expected-outcome-2)
  - [Test Case D: Edge Case - Expired Token](#test-case-d-edge-case---expired-token)
    - [Note](#note-1)
    - [Use case](#use-case-3)
    - [Arrange (Data needed)](#arrange-data-needed-3)
    - [Act](#act-3)
    - [Assert (Expected Outcome)](#assert-expected-outcome-3)
  - [Test Case E: Edge Case - No token provided](#test-case-e-edge-case---no-token-provided)
    - [Note](#note-2)
    - [Use case](#use-case-4)
    - [Arrange (Data needed)](#arrange-data-needed-4)
    - [Act](#act-4)
    - [Assert (Expected Outcome)](#assert-expected-outcome-4)
  - [Test Case F: Edge Case - Malformed Token](#test-case-f-edge-case---malformed-token)
    - [Note](#note-3)
    - [Use case](#use-case-5)
    - [Arrange (Data needed)](#arrange-data-needed-5)
    - [Act](#act-5)
    - [Assert (Expected Outcome)](#assert-expected-outcome-5)
  - [Test Case G: Edge Case - User Tries to check in again after already successfully checking in](#test-case-g-edge-case---user-tries-to-check-in-again-after-already-successfully-checking-in)
    - [Note](#note-4)
    - [Use case](#use-case-6)
    - [Arrange (Data needed)](#arrange-data-needed-6)
    - [Act](#act-6)
    - [Assert (Expected Outcome)](#assert-expected-outcome-6)
  - [Test Case H: Edge Case - User Tries to check in again after not completing an earlier check in attempt](#test-case-h-edge-case---user-tries-to-check-in-again-after-not-completing-an-earlier-check-in-attempt)
    - [Use case](#use-case-7)
    - [Arrange (Data needed)](#arrange-data-needed-7)
    - [Act](#act-7)
    - [Assert (Expected Outcome)](#assert-expected-outcome-7)
  - [Test Case I: Edge Case - User Refreshes the app before finishing the check in process](#test-case-i-edge-case---user-refreshes-the-app-before-finishing-the-check-in-process)
    - [Use case](#use-case-8)
    - [Arrange (Data needed)](#arrange-data-needed-8)
    - [Act](#act-8)
    - [Assert (Expected Outcome)](#assert-expected-outcome-8)

## Scope

This document is for is QA testing of the va.gov portion of the `Check-in` flow. This document does not include testing of VeText, CHIP, LoROTA, or any other downstream system.

## Wireframes 
#### Production Wireframes  
- [In person Pre-Check-in](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/prototype/a/BE60720E-7D9D-46BD-AF86-6332C23E7D8B) in Sketch Cloud
- [In person Check-in](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/prototype/a/9F9F9F9F-E205-4F5E-9177-DD4AD750828C) in Sketch Cloud
- [Telephone Pre-Check-in](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/prototype/a/407FA16E-4716-43C8-8898-B25F96F61001) in Sketch Cloud

#### Wireframes for Travel Remimbursement MVP
- [Travel Reimbursement MVP](https://app.abstract.com/projects/ab30c34e-e2f9-4d3e-bb96-3b683b006c24/branches/ecc65d23-3ae2-47cb-9a52-8ab4fa9dab29/commits/eab82af147bca0e28ee00e3734ee9290f1b77efb/files/585436fe-2120-45f4-b4f7-fbae01d258d9/layers/9B61B462-73BA-45CF-ABA4-215FD07B6D5A?collectionId=90b54a54-d2ee-4fae-ad07-73114aa02714&collectionLayerId=6311c53e-ab0c-484a-9e09-8ddcd43532a1&mode=design)

## How to access in Staging
- Our experience is un-authenticated
- The URL for our experience is unique per appointment
- The sample URL: <https://staging.va.gov/health-care/appointment-check-in/?id=VALID-TOKEN-HERE>
- [Instructions for creating an appointment and generating a link to eCheck-in and Pre-Check-in in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-demos/staging-instructions.md)

## Test Case A: Happy Path - Successful Check-in

> [Cypres Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/happy-path/base.happy.path.cypress.spec.js)

### Use case

- As a user, I do not need to update any information and can check-in successfully
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User verifies their identity
- User selects "Yes" to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User sees their appointments for today
- User selects the `Check-in now` button for one of their appointments
- User should be on the `You're checked in` page and see their appointment information and instructions about what to do next

### Assert (Expected Outcome)

- No errors are thrown
- The user sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case B: Happy Path - Needs to Update Information

> [Cypres Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/go-to-staff/need.to.update.cypress.spec.js)

### Use case

- As a user, I do need to update any information. To update my information, I need to see a staff member
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User verifies their identity
- User selects "No" to any of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User should be on the `Check in with a staff member` page and instructions that need to update their information with a staff member

### Assert (Expected Outcome)

- No errors are thrown
- The user sees a `Check in with a staff member` page with appropriate messaging that matches the mockups

## Test Case C: Edge Case - Premature Check-in

> Cypress Test [TBD]

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have clicked a link too early (i.e., for an appointment >30 min. in the future).
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User verifies their identity
- User sees any appointments for today that are >30 minutes in the future but are shown a time at which they will be allowed to check-in for each appointment

### Assert (Expected Outcome)

- Application does not crash
- The user sees instructions about when they will be allowed to check-in for their appointment

## Test Case D: Edge Case - Expired Token

> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/server.403.on.check-in.cypress.spec.js)

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have clicked a link that is no longer valid (i.e., for an appointment that happened yesterday)
- Technically, this test covers a 403 status code from CHIP, which is an expired token error.
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User sees an error page indicating that they can not check-in

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case E: Edge Case - No token provided

> [Cypress test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/no.token.provided.cypress.spec.js)

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have landed on the check-in page without a token
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User sees an error page indicating that they can not check-in

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case F: Edge Case - Malformed Token

> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/malformed.token.cypress.spec.js)

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage.

### Use case

- As a user, I have landed on the check-in page with a malformed/invalid token
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User sees an error page indicating that they can not check-in

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case G: Edge Case - User Tries to check in again after already successfully checking in

> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/errors/server.404.on.check-in.cypress.spec.js)

### Note

This case may not be different than other token-based edge cases, but calling this out for coverage. This case assumes that using a token that already been used will return a `404` error.

### Use case

- As a user, I have clicked on the same link prior to my appointment time to check in again after already successfully checking in.

### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User verifies their identity
- User selects "Yes" to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User sees their appointments for today; any appointments for which they have already checked-in show that they have already checked-in for those appointments
  - THIS NEEDS TO BE VERIFIED

### Assert (Expected Outcome)

- Application does not crash
- The user sees an `Error` screen with appropriate messaging that matches the mockups

## Test Case H: Edge Case - User Tries to check in again after not completing an earlier check in attempt

> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/session/session.reloads.on.refresh.cypress.spec.js)

### Use case

- As a user, I have clicked on a valid link to check-in after previously not fully completing checking in for the same appointment
  - this is to simulate a user closing their app mid check-in and returning later to complete check-in
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User verifies their identity
- User closes their app
- User clicks their check-in link to load the Check-in application
- User selects "Yes" to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User sees their appointments for today
- User selects the `Check-in now` button for an appointment
- User should be on the confirmation screen and see appropriate messaging that matches the mockups

### Assert (Expected Outcome)

- Application does not crash
- No errors are thrown
- The user sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case I: Edge Case - User Refreshes the app before finishing the check in process

> [Cypress Test](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/check-in/tests/session/session.reloads.on.refresh.cypress.spec.js)

### Use case

- As a user, I have clicked on a valid link to check-in, and I have refreshed the page during the check-in process
  - this is to simulate a user leaving the app and returning during the process on a mobile device that could reload the app in the middle of check-in
  
### Arrange (Data needed)

- See [How to acccess in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/health-care/checkin/engineering/qa/test-cases.md#how-to-access-in-staging)

### Act

- User clicks their check-in link to load the Check-in application
- User verifies their identity
- User selects "Yes" to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the last 7 days for another appointment, that question will not be asked 
- User sees their appointments for today
- User refreshes the page
- App is loaded at the at the beginning of the check-in process for the same appointment

### Assert (Expected Outcome)

- Application does not crash
- The user is still allowed to check-in.
