# Manual-UI Test Plan - Medication Wording Test Plan

## Project Summary Epic [#82400](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/82400) 


## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
Upcoming Appointment Details: VA/Community Care Booked Appointments
Pending Appointment Details: VA/Community Care Requests
Past Appointment Details: VA/Community Care Booked Appointments

### Use Cases
 
- [X] Use Case 1 - Validate upcoming appointments in VAOS with the updated Medication Wording content 
     Configuration setup in test environment must include: 
  - [X] Test user should have VA (in person, video visit and phone call) and Community Care booked appointments including canceled appointments

* **Description**
  - Tester will validate that they could view the Medication Wording content on the details page 
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
 

### User flow
- [X] [Figma file](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=0%3A1&t=YhZr2QXznYwJ72lf-0) 

### Reference (if applicable) 
- [ ] [Design file]() - need file 

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report
- [ ] File -
 
### Traceability Report 
- [X] [Appointments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/appointment-details-redesign/appointment-details-redesign-tracebility-report-qa.md)

### E2E tests 
- [ ] Dev

### Code coverage
- [ ] Dev
