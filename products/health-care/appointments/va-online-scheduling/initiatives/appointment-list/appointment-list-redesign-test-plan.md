# Manual-UI Test Plan - Appointment List Redesign 

## Project Summary Epic [#38062](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/38062) 
Looking to improve the user experience in VAOS by updating the appointment list page to help the veterans view their upcoming appointments, pending apppointments and past appointments. The goal is to have the VAOS appointments list show the same information and value as the equivalent list in MyHealtheVet.

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
On the VAOS homepage, the app displays the following for each status: 
- Upcoming appointments: displays up to 13 months for future booked VA and Community Care appointments including canceled VA booked appointments (note: Community Care booked appointments cannot be canceled in VAOS). 
- Pending requests: displays pending VA and Community Care appointment requests and prior 120 days of VA and Community Care canceled requests 
- Past appointments: displays up to 2 years of past VA and Community Care booked appointments (note: it does not display past canceled booked appointments) 
- 

### Use Cases
 
- [ ] Use Case 1 - Validate upcoming appointments in VAOS 

Configuration setup in test environment must include: 
  - [ ] Test user should have VA (in person, video visit and phone call) and Community Care booked appointments including canceled appointments. 

* **Description**
  - Tester will validate that they could view their upcoming appointments (future appts) in VAOS 
    - [ ] Booked VA appointment - in person (at a Facility) 
    - [ ] Booked VA appointment - video connect (at a Facility) 
    - [ ] Booked VA appointment - video connect (at an ATLAS location) 
    - [ ] Booked VA appointment - video connect (at home, not a VA or ATLAS location) 
    - [ ] Booked VA appointment - phone call 
    - [ ] Booked Community Care appointment
    - [ ] Canceled VA appointment - in person (at a Facility) 
    - [ ] Canceled VA appointment - video connect (at a Facility) 
    - [ ] Canceled VA appointment - video connect (at an ATLAS location) 
    - [ ] Canceled VA appointment - video connect (at home, not a VA or ATLAS location) 
    - [ ] Canceled VA appointment - phone call 
    - [ ] Canceled Community Care appointment

- [ ] Use Case 2 - Validate pending requests in VAOS 

Configuration setup in test environment must include: 
  - [ ] Test user should have VA and Community Care pending requests including canceled requests. 

* **Description**
  - Tester will validate that they could view their upcoming appointments (future appts) in VAOS 
    - [ ] Pending VA request - in person (at a Facility) 
    - [ ] Pending Community Care request
    - [ ] Canceled VA request - in person (at a Facility) 
    - [ ] Canceled Community Care request

- [ ] Use Case 3

* **Description**
  - lorem ipsum

### User flow
- [ ] Figma file 

### Reference (if applicable) 
- [ ] Design file link
- [ ] Copy doc link 

### Test Users 
- Test user .MD file 

### Summary Defect Report
- [ ] TBD 

### E2E tests 
- [ ] _Developer to provide a link to the product's code_

### Code coverage
- [ ] _Developer to provide a link to the product's code_
