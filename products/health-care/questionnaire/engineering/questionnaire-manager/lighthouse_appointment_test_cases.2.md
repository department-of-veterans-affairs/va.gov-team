<!-- markdownlint-disable no-duplicate-heading -->

# Appointments test cases for the Lighthouse team

> Ideally, the health care team can create and manage their test data.

- [Appointments test cases for the Lighthouse team](#appointments-test-cases-for-the-lighthouse-team)
  - [Summary](#summary)
  - [Assumptions](#assumptions)
  - [Scenarios](#scenarios)
    - [Appointment Data is incomplete](#appointment-data-is-incomplete)
      - [Data Needed](#data-needed)
    - [Facility(Organization)/Clinic(Location) information is missing](#facilityorganizationcliniclocation-information-is-missing)
      - [Data needed](#data-needed-1)
    - [Upper limits  of data](#upper-limits--of-data)
      - [Data needed](#data-needed-2)

## Summary

After trying to map out more complex use cases, it was found that the [basic ones](lighthouse_appointment_test_cases.md) plus the addition of deleting Questionnaire Responses

## Assumptions

- Unless stated otherwise, all Users have a valid ICN.
- We have the ability to delete Questionnaire Responses.
- This data can be accessed in Sandbox and Staging

## Scenarios

### Appointment Data is incomplete

- The only data that is required for a [FHIR appointment](http://www.hl7.org/fhir/appointment.html) is `status` and `participants`. We need to test our system with what data will be missing

#### Data Needed

- a Minimal Appointment
- An appointment with everything

### Facility(Organization)/Clinic(Location) information is missing

- We know that some of the Location/Facility are missing details such as phone number or a display friendly name. Can we have those be linked to an appointment with a questionnaire?

#### Data needed

- An appointment with a questionnaire at a facility/clinic that is missing at least a phone number

### Upper limits  of data

We need a user, separate from the [first user](lighthouse_appointment_test_cases.md) that has a few hundred appointments (365). This will allows use to tests loads and have an upper limits of our system.

#### Data needed

- User with a few hundred valid appointments (with a questionnaire) in the next year.
- To really test our system, each appointment would be at a different Facility/clinic