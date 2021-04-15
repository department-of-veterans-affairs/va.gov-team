<!-- markdownlint-disable no-duplicate-heading -->

# Test cases for QA

- [Test cases for QA](#test-cases-for-qa)
  - [Assumptions](#assumptions)
  - [To-Dos](#to-dos)
  - [Test Case : Upcoming Appointment, Questionnaire needs to be filled out](#test-case--upcoming-appointment-questionnaire-needs-to-be-filled-out)
    - [Description / Use case](#description--use-case)
  - [Test Case : Upcoming Appointment, Questionnaire is still in progress](#test-case--upcoming-appointment-questionnaire-is-still-in-progress)
    - [Description / Use case](#description--use-case-1)
  - [Test Case : Completed questionnaire for a future appointment](#test-case--completed-questionnaire-for-a-future-appointment)
    - [Description / Use Case](#description--use-case-2)
  - [Test Case : Cancelled Appointment with a Completed questionnaire](#test-case--cancelled-appointment-with-a-completed-questionnaire)
    - [Description / Use Case](#description--use-case-3)
  - [Test Case : Cancelled appointment no questionnaire response](#test-case--cancelled-appointment-no-questionnaire-response)
    - [Description / Use Case](#description--use-case-4)
  - [Test Case : Not Completed Questionnaire for a past appointment](#test-case--not-completed-questionnaire-for-a-past-appointment)
    - [Description / Use Case](#description--use-case-5)
  - [Test Case : Completed Questionnaire for a past appointment](#test-case--completed-questionnaire-for-a-past-appointment)
    - [Description / Use Case](#description--use-case-6)
  - [Test Case : Completed Questionnaire for a canceled appointment in the past](#test-case--completed-questionnaire-for-a-canceled-appointment-in-the-past)
    - [Description / Use Case](#description--use-case-7)
  - [Test Case : Not Completed Questionnaire for a canceled appointment in the past](#test-case--not-completed-questionnaire-for-a-canceled-appointment-in-the-past)
    - [Description / Use Case](#description--use-case-8)
  - [Test Case : Use has an appointment in the future with no Questionnaire](#test-case--use-has-an-appointment-in-the-future-with-no-questionnaire)
    - [Description / Use Case](#description--use-case-9)

## How to access in Staging 
- Applies for all scenarios
- https://staging.va.gov/health-care/health-questionnaires/questionnaires
  - Currently, all test account return the same data 
- We do have a Drupal page that people can visit and log into their questionnaire manager, but most will go directly from text or email to the link above).
  - Drupal page: https://staging.va.gov/health-care/health-questionnaires/

## Assumptions

- An Appointment will always have a valid Location, which has a valid Organization
- An Appointment in the future is within a year in the future
- An Appointment in the past is within a year in the past
- Unless stated otherwise, all Users have a valid ICN.
- Each test case should have its own User.

## To-Dos

## Test Case : Upcoming Appointment, Questionnaire needs to be filled out

### Description / Use case

This use case is the simple happy path. A user has an appointment with a questionnaire in the future and has not submitted a questionnaire response yet.

### Expected Outcome
The user would be able to access their "Not started" questionnaire from the [To Do section of the questionnaire manager page](https://zpl.io/aXlD9Yg), fill out the questionnaire, submit it, then the completed questionnaire would appear on the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

Wireframes of the page of the actual questionnaire:
1. Introduction (https://zpl.io/2yN8yep)
2. Veteran information (https://zpl.io/2y4jW1J)
3. Prepare for your appointment (https://zpl.io/amGKole)
4. Confirmation (https://zpl.io/anjMj4k)

## Test Case : Upcoming Appointment, Questionnaire is still in progress

### Description / Use case

A user has an appointment with a questionnaire in the future and started to fill out the questionnaire. But they haven't submitted, so no questionnaire response has been created yet.

### Expected Outcome
The user would be able to access their "In-progress" questionnaire from the [To Do section of the questionnaire manager page](https://zpl.io/aXlD9Yg), fill out the questionnaire (same wireframes links as the first test case, submit it, then the completed questionnaire would appear on the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF of their questionnaire responses.

## Test Case : Completed questionnaire for a future appointment

### Description / Use Case

A user has an appointment with a questionnaire, and the user has completed the questionnaire.

### Expected Outcome
The user would be able to access their completed questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case : Cancelled Appointment with an In-progress questionnaire

### Description / Use Case

A user has an appointment in the future that is canceled. The user has already started to fill out the questionnaire, but they didn't submit their responses before the appointment was canceled.


### Expected Outcome
The user would be able to access their "Canceled" questionnaire from the [To Do section of the questionnaire manager page](https://zpl.io/aXlD9Yg). Their in-progress answers are available to view via a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) with their in-progress responses.

## Test Case : Cancelled Future Appointment with a Completed questionnaire

### Description / Use Case

A user has an appointment in the future that is canceled. The user has already filled out the questionnaire, so a questionnaire response should exist.

### Expected Outcome
The user would be able to access their "Canceled" questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case : Cancelled appointment no questionnaire response

### Description / Use Case

A user had an appointment with a questionnaire, but the appointment was canceled without filling out the questionnaire.

### Expected Outcome
This questionnaire should not appear anywhere on the questionnaire manager.

## Test Case : Not Completed Questionnaire for a past appointment

### Description / Use Case

The user has an appointment in the past with a questionnaire but did not fill out the questionnaire.

### Expected Outcome
This questionnaire should not appear anywhere on the questionnaire manager.

## Test Case : Completed Questionnaire for a past appointment

### Description / Use Case

A user has filled out a questionnaire for an appointment in the past.

### Expected Outcome
The user would be able to access their completed questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.

## Test Case : Completed Questionnaire for a canceled appointment in the past

### Description / Use Case

A user has filled out a questionnaire for an appointment in the past, but the appointment was canceled.

### Expected Outcome
The user would be able to access their "Canceled" questionnaire from the [Completed section of the questionnaire manager page](https://zpl.io/2y4XrMJ) with a button to "View and print questions." The button would open a PDF (Wireframe of PDF [page 1](https://zpl.io/VOlMez8) and [page 2](https://zpl.io/VQ6o5Y5)) of their questionnaire responses.


## Test Case : Not Completed Questionnaire for a canceled appointment in the past

### Description / Use Case

A user has a canceled appointment in the past that they did not fill out the questionnaire.

### Expected Outcome
This questionnaire should not appear anywhere on the questionnaire manager.

## Test Case : Use has an appointment in the future with no Questionnaire

### Description / Use Case

A user has an upcoming appointment that does not have a questionnaire.

### Expected Outcome
This questionnaire should not appear anywhere on the questionnaire manager.
