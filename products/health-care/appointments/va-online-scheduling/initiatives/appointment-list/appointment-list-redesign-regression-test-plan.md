# Regression Test Plan - Appointment List Redesign

## Project Summary Epic [#38062](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/38062) 
Looking to improve the user experience in VAOS by updating the appointment list page to help the veterans view their upcoming appointments, pending apppointments and past appointments. The goal is to have the VAOS appointments list show the same information and value as the equivalent list in MyHealtheVet.

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
On the VAOS homepage, the app displays the following for each status: 
- Upcoming appointments: displays up to 13 months for future booked VA and Community Care appointments including canceled VA booked appointments (note: Community Care booked appointments cannot be canceled in VAOS). 
- Pending requests: displays pending VA and Community Care appointment requests and prior 120 days of VA and Community Care canceled requests 
- Past appointments: displays up to 2 years of past VA and Community Care booked appointments (note: it does not display past canceled booked appointments) 


### Use Cases
 
- Use Case 1 - Direct schedule an appointment at a VA facility 

Configuration setup in test environment must include: 
  - [ ] _Enter the criteria for the setup to test_

* **Description**
  - [ ] Book a health care appointment at the VA facility

- Use Case 2 - Request for an appointment at a VA facility 

* **Description**
  - [ ] Submit a health care appointment request at the VA facility 

- Use Case 3 - Request for an appointment at a Community Care provider 

**Configuration setup in test environment must include** 
  - [ ] _Enter the criteria for the setup to test_

* **Description**
  - [ ] Submit a health care appointment request at the Community Care provider 

- Use Case 4 - Cancel a booked VA appointment 

* **Description**
  - [ ] View the appointment details for a booked appointment and cancel the appointment

- Use Case 5 - Cancel a VA pending appointment  

* **Description**
  - [ ] View the pending details for a VA request and cancel the request 

- Use Case 6 - Cancel a Community Care pending appointment 

* **Description**
  - [ ] View the pending details for a Community Care request and cancel the request 


### User flow
- [ ] Figma file 

### Reference (if applicable) 
- [ ] Design file link
- [ ] Copy doc link 

### Test Users 
- Test user .MD file 

### Summary Defect Report
- [ ] TBD 
