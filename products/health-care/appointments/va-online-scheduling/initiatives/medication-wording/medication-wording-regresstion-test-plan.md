# Regression Test Plan - Medication Wording

## Project Summary Epic [#82400](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/82400)

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))


### Use Cases
 
- [X] Use Case 1 - Direct schedule an appointment at a VA facility 
     Configuration setup in test environment must include: 
  - [X] The type of care for a given facility VATS setting must be configured for direct scheduling 

- [X] Use Case 2 - Submit an appointment request at a VA facility 

- [X] Use Case 3 - Submit a Community Care appointment request

- [X] Use Case 4 - View a VA appointment request (pending)

- [X] Use Case 5 - View a Community Care request (pending)

- [X] Use Case 6 - View a canceled VA appointment request (pending)

- [X] Use Case 7 - View a canceled VA appointment request (pending) 

* **Description**
  - [X] Book a health care appointment at the VA facility

### User flow
- [X] [Figma file](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=0%3A1&t=YhZr2QXznYwJ72lf-0) 

### Reference (if applicable) 
- [ ] [Design file]() - need file 

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Traceability Report 
- [X] [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/medication-wording/medication-wording-tracability-report-qa.md)

### E2E tests 
- [X] [Test file path](src/applications/vaos/tests/e2e/workflows/appointment-list-workflow)
- [X] [Past Appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow/past-appointments.cypress.spec.js) 
- [X] [Pending Appointment details E2E tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow/pending-appointments.cypress.spec.js)
- [X] [Upcoming Appointment details E2E tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow)
- [X] [Community Care Appointment Details page unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/tests/DetailsCC.unit.spec.js) 
- [X] [Telehealth Appointments details Page unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/tests/DetailsVA.unit.spec.js)
- [X] [Va Appointment Details page unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/tests/DetailsVideo.unit.spec.js)
  

### Code coverage
- [X] [Test file path](src/applications/vaos/tests/e2e/workflows/appointment-list-workflow)
- [X] [Past Appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow/past-appointments.cypress.spec.js) 
- [X] [Pending Appointment details E2E tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow/pending-appointments.cypress.spec.js)
- [X] [Upcoming Appointment details E2E tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow)
- [X] [Community Care Appointment Details page unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/tests/DetailsCC.unit.spec.js) 
- [X] [Telehealth Appointments details Page unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/tests/DetailsVA.unit.spec.js)
- [X] [Va Appointment Details page unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/tests/DetailsVideo.unit.spec.js)
