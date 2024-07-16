# Regression Test Plan - Appointment Details Redesign

## Project Summary Epic [#52872](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/52872) 

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))


### Use Cases
 
- [X] Use Case 1 - Direct schedule an appointment at a VA facility 

     Configuration setup in test environment must include: 
  - [X] The type of care for a given facility VATS setting must be configured for direct scheduling 

* **Description**
  - [X] Book a health care appointment at the VA facility

- [X] Use Case 2 - Request for an appointment at a VA facility 

     Configuration setup in test environment must include: 
  - [X] The type of care for a given facility VATS setting must be configured for requests 

* **Description**
  - [X] Submit a health care appointment request at the VA facility 

- [X] Use Case 3 - Request for an appointment at a Community Care provider 

     Configuration setup in test environment must include: 
     - [X] Type of care that is set up for Community Care in staging is Podiatry 
     - [X] Closet city to select is Dayton, OH 
     - [X] Best test user for Community Care: patient999@id.me 
    
* **Description**
  - [X] Submit a health care appointment request at the Community Care provider 

- [X] Use Case 4 - Cancel a booked VA appointment 

* **Description**
  - [X] A test user must have an upcoming booked appointment 
  - [X] View the appointment details for a booked appointment and cancel the appointment

- [X] Use Case 5 - Cancel a VA pending appointment  

* **Description**
  - [X] A test user must have a request in the Pending view
  - [X] View the pending details for a VA request and cancel the request 

- [X] Use Case 6 - Cancel a Community Care pending appointment 

* **Description**
  - [X] A test user must have a Community Care pending request 
  - [X] View the pending details for a Community Care request and cancel the request 

- [X] Use Case 7 - Cannot cancel a Community Care booked appointment 

* **Description**
  - [X] A test user must have a Community Care booked appointment 
  - [X] View the appointment details for a Community Care appointment and user should not see a Cancel link

### User flow
- [X] [Figma file](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=0%3A1&t=YhZr2QXznYwJ72lf-0) 

### Reference (if applicable) 
- [X] [Design file]()

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Traceability Report 
- [X] [Appointments](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests 
- [X] [File path](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow)
- [X] [VA appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/DetailsVA.util.jsx)
- [X] [Telehealth appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/DetailsVideo.jsx)
- [X] [Community Care appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/DetailsCC.jsx)

### Code coverage
- [X] [File path](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/tests/e2e/workflows/appointment-list-workflow)
- [X] [VA appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/DetailsVA.util.jsx)
- [X] [Telehealth appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/DetailsVideo.jsx)
- [X] [Community Care appointment details](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/appointment-list/components/ConfirmedAppointmentDetailsPage/DetailsCC.jsx)
