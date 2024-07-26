# Manual-UI Test Plan - Appointment Details Redesign 

## Project Summary Epic [#52872](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/52872) 


## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
Upcoming Appointment Details: VA/Community Care Booked Appointments
Pending Appointment Details: VA/Community Care Requests
Past Appointment Details: VA/Community Care Booked Appointments


### Use Cases
 
- [X] Use Case 1 - Validate upcoming appointments in VAOS 

     Configuration setup in test environment must include: 
  - [X] Test user should have VA (in person, video visit and phone call) and Community Care booked appointments including canceled appointments

* **Description**
  - Tester will validate that they could view the list of their upcoming appointments (future appts) in Appointments Tool 
    - [X] Booked VA appointment - in person (at a Facility) 
    - [X] Booked VA appointment - video connect (at a Facility) 
    - [X] Booked VA appointment - video connect (at an ATLAS location) 
    - [X] Booked VA appointment - video connect (at home, not a VA or ATLAS location) 
    - [X] Booked VA appointment - phone call 
    - [X] Booked Community Care appointment
    - [X] Canceled VA appointment - in person (at a Facility) 
    - [X] Canceled VA appointment - video connect (at a Facility) 
    - [X] Canceled VA appointment - video connect (at an ATLAS location) 
    - [X] Canceled VA appointment - video connect (at home, not a VA or ATLAS location) 
    - [X] Canceled VA appointment - phone call 
    - [X] Canceled Community Care appointment

- [X] Use Case 2 - Validate pending requests in Appointments Tool 

     Configuration setup in test environment must include: 
  - [X] Test user should have VA and Community Care pending requests including canceled requests

* **Description**
  - Tester will validate that they could view the list of their pending requests in Appointments Tool 
    - [X] Pending VA request - in person (at a Facility) 
    - [X] Pending Community Care request
    - [X] Canceled VA request - in person (at a Facility) 
    - [X] Canceled Community Care request

- [X] Use Case 3 - Validate past appointments in Appointments Tool

     Configuration setup in test environment must include: 
  - [X] Test user should have past booked VA and Community Care appointments 

* **Description**
  - Tester will validate that they could view the list of their past booked appointments in Appointment Tools 
    - [X] Past booked VA appointment - in person (at a Facility) 
    - [X] Past booked VA appointment - video connect (at a Facility) 
    - [X] Past booked VA appointment - video connect (at an ATLAS location) 
    - [X] Past booked VA appointment - video connect (at home, not a VA or ATLAS location) 
    - [X] Past booked VA appointment - phone call 
    - [X] Past booked Community Care appointment
    
- [X] Use Case 4 - Validate appointment list for mobile devices.
      
      Configuration setup in test environment must include: 
  - [X] Test user should have past booked, upcoming and pending VA and Community Care appointments

* **Description**
  - Tester will validate that the list of their past booked, upcoming and pending VA and Community Care appointments in VAOS looks as expected on mobile
    - [X] Past booked, upcoming and pending VA and Community Care appointments - iOS devices
    - [X] Past booked, upcoming and pending VA and Community Care appointments - Android devices
 

### User flow
- [X] [Figma file](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=0%3A1&t=YhZr2QXznYwJ72lf-0) 

### Reference (if applicable) 
- [ ] [Design file]()

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report
- [X] [Appointment List Redesign - Defect Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-details-redesign/appontment-details-redesign-defects.md)

### Traceability Report 
- [X] [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-details-redesign/appointment-details-redesign-tracebility-report-qa.md)

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
