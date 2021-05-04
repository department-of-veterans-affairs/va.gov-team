<!-- markdownlint-disable no-duplicate-heading -->

# Test cases for QA

- [Test cases for QA](#test-cases-for-qa)
  - [How to access in Staging](#how-to-access-in-staging)
  - [Assumptions](#assumptions)
  - [To-Dos](#to-dos)
  - [Test Case A: Upcoming Appointment, Questionnaire needs to be filled out](#test-case-a-upcoming-appointment-questionnaire-needs-to-be-filled-out)
    - [Description / Use case](#description--use-case)
    - [Expected Outcome](#expected-outcome)
  - [Test Case B: Upcoming Appointment, Questionnaire is still in progress](#test-case-b-upcoming-appointment-questionnaire-is-still-in-progress)
    - [Description / Use case](#description--use-case-1)
    - [Expected Outcome](#expected-outcome-1)
  - [Test Case C: Completed questionnaire for a future appointment](#test-case-c-completed-questionnaire-for-a-future-appointment)
    - [Description / Use Case](#description--use-case-2)
    - [Expected Outcome](#expected-outcome-2)
  - [Test Case D: Cancelled Appointment with an In-progress questionnaire](#test-case-d-cancelled-appointment-with-an-in-progress-questionnaire)
    - [Description / Use Case](#description--use-case-3)
    - [Expected Outcome](#expected-outcome-3)
  - [Test Case E: Cancelled Future Appointment with a Completed questionnaire](#test-case-e-cancelled-future-appointment-with-a-completed-questionnaire)
    - [Description / Use Case](#description--use-case-4)
    - [Expected Outcome](#expected-outcome-4)
  - [Test Case F: Cancelled appointment no questionnaire response](#test-case-f-cancelled-appointment-no-questionnaire-response)
    - [Description / Use Case](#description--use-case-5)
    - [Expected Outcome](#expected-outcome-5)
    - [JSON Overrides](#json-overrides)
  - [Test Case G: Not Completed Questionnaire for a past appointment](#test-case-g-not-completed-questionnaire-for-a-past-appointment)
    - [Description / Use Case](#description--use-case-6)
    - [Expected Outcome](#expected-outcome-6)
    - [JSON Overrides](#json-overrides-1)
  - [Test Case H: Completed Questionnaire for a past appointment](#test-case-h-completed-questionnaire-for-a-past-appointment)
    - [Description / Use Case](#description--use-case-7)
    - [Expected Outcome](#expected-outcome-7)
  - [Test Case I: Completed Questionnaire for a canceled appointment in the past](#test-case-i-completed-questionnaire-for-a-canceled-appointment-in-the-past)
    - [Description / Use Case](#description--use-case-8)
    - [Expected Outcome](#expected-outcome-8)
  - [Test Case J: Not Completed Questionnaire for a canceled appointment in the past](#test-case-j-not-completed-questionnaire-for-a-canceled-appointment-in-the-past)
    - [Description / Use Case](#description--use-case-9)
    - [Expected Outcome](#expected-outcome-9)
    - [JSON Overrides](#json-overrides-2)
  - [Test Case K: Use has an appointment in the future with no Questionnaire](#test-case-k-use-has-an-appointment-in-the-future-with-no-questionnaire)
    - [Description / Use Case](#description--use-case-10)
    - [Expected Outcome](#expected-outcome-10)
    - [JSON Overrides](#json-overrides-3)

## How to access in Staging

- Applies for all scenarios
  - <https://staging.va.gov/health-care/health-questionnaires/questionnaires>
    - Currently, all test account return the same data
- We do have a Drupal page that people can visit and log into their questionnaire manager, but most will go directly from text or email to the link above).
  - Drupal page: <https://staging.va.gov/health-care/health-questionnaires/>

## Assumptions

- An Appointment will always have a valid Location, which has a valid Organization
- An Appointment in the future is within a year in the future
- An Appointment in the past is within a year in the past
- Unless stated otherwise, all Users have a valid ICN.
- Each test case should have its own User.

## To-Dos

- [X] Add brief expected-outcomes
- [X] Add specific design-prototype links
- [ ] Add access-instruction(s) w/ test-usernames but NOT passwords
- [ ] [VSA-QA] Add TestRail test-case links

## Test Case A: Upcoming Appointment, Questionnaire needs to be filled out

### Description / Use case

This use case is the simple happy path. A user has an appointment with a questionnaire in the future and has not submitted a questionnaire response yet.

### Expected Outcome

The user would be able to access their "Not started" questionnaire from the [To Do section of the questionnaire manager page](https://zpl.io/aXlD9Yg), fill out the questionnaire, submit it, then the completed questionnaire would appear on the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

Wireframes of the page of the actual questionnaire (applies to every scenario where the user can fill out the questionnaire):

1. Introduction (<https://zpl.io/2yN8yep>)
2. Veteran information (<https://zpl.io/2y4jW1J>)
3. Prepare for your appointment (<https://zpl.io/amGKole>)
4. Confirmation (<https://zpl.io/anjMj4k>)

## Test Case B: Upcoming Appointment, Questionnaire is still in progress

### Description / Use case

A user has an appointment with a questionnaire in the future and started to fill out the questionnaire. But they haven't submitted, so no questionnaire response has been created yet.

### Expected Outcome

The user would be able to access their "In-progress" questionnaire from the [To Do section of the questionnaire manager page](https://zpl.io/aXlD9Yg), fill out the questionnaire (same wireframes links as the first test case, submit it, then the completed questionnaire would appear on the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF of their questionnaire responses.

## Test Case C: Completed questionnaire for a future appointment

### Description / Use Case

A user has an appointment with a questionnaire, and the user has completed the questionnaire.

### Expected Outcome

The user would be able to access their completed questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case D: Cancelled Appointment with an In-progress questionnaire

### Description / Use Case

A user has an appointment in the future that is canceled. The user has already started to fill out the questionnaire, but they didn't submit their responses before the appointment was canceled.

### Expected Outcome

The user would be able to access their "Canceled" questionnaire from the [To Do section of the questionnaire manager page](https://zpl.io/aXlD9Yg). Their in-progress answers are available to view via a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) with their in-progress responses.

## Test Case E: Cancelled Future Appointment with a Completed questionnaire

### Description / Use Case

A user has an appointment in the future that is canceled. The user has already filled out the questionnaire, so a questionnaire response should exist.

### Expected Outcome

The user would be able to access their "Canceled" questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case F: Cancelled appointment no questionnaire response

### Description / Use Case

A user had an appointment with a questionnaire, but the appointment was canceled without filling out the questionnaire.

### Expected Outcome

This questionnaire should not appear anywhere on the questionnaire manager.

### JSON Overrides

| what you will see | api call  | json to use |
| ---- | --------  | ----------- |
| see 1 upcoming | GET /health_quest/v0/questionnaire_manager| [JSON](./json/up.coming.appointment.json) |
| load a cancelled appointment with no data | GET /health_quest/v0/questionnaire_manager| [JSON](./json/cancelled.future.appointment.json) |

## Test Case G: Not Completed Questionnaire for a past appointment

### Description / Use Case

The user has an appointment in the past with a questionnaire but did not fill out the questionnaire.

### Expected Outcome

This questionnaire should not appear anywhere on the questionnaire manager.

### JSON Overrides

| what you will see | api call  | json to use |
| ---- | --------  | ----------- |
| see 1 upcoming | GET /health_quest/v0/questionnaire_manager| [JSON](./json/up.coming.appointment.json) |
| load a past appointment with no response | GET /health_quest/v0/questionnaire_manager| [JSON](./json/past.appointment.json) |

## Test Case H: Completed Questionnaire for a past appointment

### Description / Use Case

A user has filled out a questionnaire for an appointment in the past.

### Expected Outcome

The user would be able to access their completed questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case I: Completed Questionnaire for a canceled appointment in the past

### Description / Use Case

A user has filled out a questionnaire for an appointment in the past, but the appointment was canceled.

### Expected Outcome

The user would be able to access their "Canceled" questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case J: Not Completed Questionnaire for a canceled appointment in the past

### Description / Use Case

A user has a canceled appointment in the past that they did not fill out the questionnaire.

### Expected Outcome

This questionnaire should not appear anywhere on the questionnaire manager.

### JSON Overrides

| what you will see | api call  | json to use |
| ---- | --------  | ----------- |
| see 1 upcoming | GET /health_quest/v0/questionnaire_manager| [JSON](./json/up.coming.appointment.json) |
| load a cancelled appointment in the past  with no data | GET /health_quest/v0/questionnaire_manager| [JSON](./json/cancelled.past.appointment.json) |

## Test Case K: Use has an appointment in the future with no Questionnaire

### Description / Use Case

A user has an upcoming appointment that does not have a questionnaire.

### Expected Outcome

No questionnaire should not appear anywhere on the questionnaire manager for this appointment.

**NOTE:** The API returns an empty array for this scenario, the JSON is intentionally empty

### JSON Overrides

| what you will see | api call  | json to use |
| ---- | --------  | ----------- |
| see 1 upcoming | GET /health_quest/v0/questionnaire_manager| [JSON](./json/up.coming.appointment.json) |
| load a appointment with no questionnaire| GET /health_quest/v0/questionnaire_manager| [JSON](./json/cancelled.past.appointment.json) |
