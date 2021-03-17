<!-- markdownlint-disable no-duplicate-heading -->

# Appointments test cases for the Lighthouse team

> Ideally, the health care team can create and manage their test data.

- [Appointments test cases for the Lighthouse team](#appointments-test-cases-for-the-lighthouse-team)
  - [Assumptions](#assumptions)
  - [To-Dos](#to-dos)
  - [Test Case : Upcoming Appointment, Questionnaire needs to be filled out](#test-case--upcoming-appointment-questionnaire-needs-to-be-filled-out)
    - [Description / Use case](#description--use-case)
    - [Lighthouse Data Needed](#lighthouse-data-needed)
  - [Test Case : Upcoming Appointment, Questionnaire is still in progress](#test-case--upcoming-appointment-questionnaire-is-still-in-progress)
    - [Description / Use case](#description--use-case-1)
    - [Lighthouse Data Needed](#lighthouse-data-needed-1)
  - [Test Case : Completed questionnaire for a future appointment](#test-case--completed-questionnaire-for-a-future-appointment)
    - [Description / Use Case](#description--use-case-2)
    - [Lighthouse data needed](#lighthouse-data-needed-2)
  - [Test Case : Cancelled Appointment with a Completed questionnaire](#test-case--cancelled-appointment-with-a-completed-questionnaire)
    - [Description / Use Case](#description--use-case-3)
    - [Lighthouse data needed](#lighthouse-data-needed-3)
  - [Test Case : Cancelled appointment no questionnaire response](#test-case--cancelled-appointment-no-questionnaire-response)
    - [Description / Use Case](#description--use-case-4)
    - [Lighthouse data needed](#lighthouse-data-needed-4)
  - [Test Case : Not Completed Questionnaire for a past appointment](#test-case--not-completed-questionnaire-for-a-past-appointment)
    - [Description / Use Case](#description--use-case-5)
    - [Lighthouse data needed](#lighthouse-data-needed-5)
  - [Test Case : Completed Questionnaire for a past appointment](#test-case--completed-questionnaire-for-a-past-appointment)
    - [Description / Use Case](#description--use-case-6)
    - [Lighthouse data needed](#lighthouse-data-needed-6)
  - [Test Case : Completed Questionnaire for a canceled appointment in the past](#test-case--completed-questionnaire-for-a-canceled-appointment-in-the-past)
    - [Description / Use Case](#description--use-case-7)
    - [Lighthouse data needed](#lighthouse-data-needed-7)
  - [Test Case : Not Completed Questionnaire for a canceled appointment in the past](#test-case--not-completed-questionnaire-for-a-canceled-appointment-in-the-past)
    - [Description / Use Case](#description--use-case-8)
    - [Lighthouse data needed](#lighthouse-data-needed-8)
  - [Test Case : Use has an appointment in the future with no Questionnaire](#test-case--use-has-an-appointment-in-the-future-with-no-questionnaire)
    - [Description / Use Case](#description--use-case-9)
    - [Lighthouse data needed](#lighthouse-data-needed-9)
  - [Test Case x : Template](#test-case-x--template)
    - [Description / Use Case](#description--use-case-10)
    - [Lighthouse data needed](#lighthouse-data-needed-10)

## Assumptions

- An Appointment will always have a valid Location, which has a valid Organization
- An Appointment in the future is within a year in the future
- An Appointment in the past is within a year in the past
- Unless stated otherwise, all Users have a valid ICN.
- Each test case should have its own User.

## To-Dos

- [ ] Add how we are verifying on our end
- [ ] Add how each test case ends up in the UI

## Test Case : Upcoming Appointment, Questionnaire needs to be filled out

### Description / Use case

This use case is the simple happy path. A user has an appointment with a questionnaire in the future and has not submitted a questionnaire response yet.

### Lighthouse Data Needed

- A User/Patient
- A future Appointment exists for this user with a date in the future
- A Questionnaire exists that is associated with this Appointment/Location/Organization

## Test Case : Upcoming Appointment, Questionnaire is still in progress

### Description / Use case

A user has an appointment with a questionnaire in the future and has not started a questionnaire response yet.

### Lighthouse Data Needed

- A User/Patient
- A future Appointment exists for this user with a date in the future
- A Questionnaire exists that is associated with this Appointment/Location/Organization

## Test Case : Completed questionnaire for a future appointment

### Description / Use Case

A user has an appointment with a questionnaire, and the user has completed the questionnaire.

### Lighthouse data needed

- A User/Patient
- A future Appointment exists for this user
- A Questionnaire exists that is associated with this Appointment/Location/Organization
- A Questionnaire Response exists for this Appointment

## Test Case : Cancelled Appointment with a Completed questionnaire

### Description / Use Case

A user has an appointment in the future that is canceled. The user has already filled out the questionnaire, so a questionnaire response should exist.

### Lighthouse data needed

- A User/Patient
- An canceled Appointment exists for this user with a date in the future
- A Questionnaire exists that is associated with this Appointment/Location/Organization
- A Questionnaire Response exists for this Appointment

## Test Case : Cancelled appointment no questionnaire response

### Description / Use Case

A user had an appointment with a questionnaire, but the appointment was canceled without filling out the questionnaire.

### Lighthouse data needed

- A User/Patient
- An canceled Appointment exists for this user with a date in the future
- A Questionnaire exists that is associated with this Appointment/Location/Organization

## Test Case : Not Completed Questionnaire for a past appointment

### Description / Use Case

The user has an appointment in the past with a questionnaire but did not fill out the questionnaire.

### Lighthouse data needed

- A User/Patient
- A past Appointment exists for this user with a date in the past
- A Questionnaire exists that is associated with this Appointment/Location/Organization

## Test Case : Completed Questionnaire for a past appointment

### Description / Use Case

A user has filled out a questionnaire for an appointment in the past.

### Lighthouse data needed

- A User/Patient
- An past Appointment exists for this user with a date in the past
- A Questionnaire exists that is associated with this Appointment/Location/Organization
- A Questionnaire Response exists for this Appointment

## Test Case : Completed Questionnaire for a canceled appointment in the past

### Description / Use Case

A user has filled out a questionnaire for an appointment in the past, but the appointment was canceled.

### Lighthouse data needed

- A User/Patient
- An canceled Appointment exists for this user with a date in the past
- A Questionnaire exists that is associated with this Appointment/Location/Organization
- A Questionnaire Response exists for this Appointment

## Test Case : Not Completed Questionnaire for a canceled appointment in the past

### Description / Use Case

A user has a canceled appointment in the past that they did not fill out the questionnaire.

### Lighthouse data needed

- A User/Patient
- An canceled Appointment exists for this user with a date in the past
- A Questionnaire exists that is associated with this Appointment/Location/Organization

## Test Case : Use has an appointment in the future with no Questionnaire

### Description / Use Case

A user has an upcoming appointment that does not have a questionnaire.

### Lighthouse data needed

- A User/Patient
- A future Appointment exists for this user at a Location/Organization that does not have a questionnaire

## Test Case x : Template

### Description / Use Case

### Lighthouse data needed
