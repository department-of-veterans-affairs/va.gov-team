# Regression Test Plan - Print List 

## Project Summary Epic [#58395](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/58395) 
Looking to improve the user experience in VAOS by adding a print tertiary button on the upcoming appointments, pending apppointments and past appointments list. 

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
On the VAOS homepage, the app displays the following for each status: 
- Upcoming appointments: displays up to 13 months of future booked VA and Community Care appointments including canceled VA and CC booked appointments 
- Pending requests: displays pending VA and Community Care appointment requests and prior 120 days of VA and Community Care canceled requests 
- Past appointments: displays up to 2 years of past VA and Community Care booked appointments (note: it does not display past canceled booked appointments) 


### Use Cases
 
- [ ] Use Case 1 - Direct schedule an appointment at a VA facility 
     Configuration setup in test environment must include: 
  - [ ] The type of care for a given facility VATS setting must be configured for direct scheduling 

* **Description**
  - [ ] Book a health care appointment at the VA facility

- [ ] Use Case 2 - Request for an appointment at a VA facility 

     Configuration setup in test environment must include: 
  - [ ] The type of care for a given facility VATS setting must be configured for requests 

* **Description**
  - [ ] Submit a health care appointment request at the VA facility 

- [ ] Use Case 3 - Request for an appointment at a Community Care provider 

     Configuration setup in test environment must include: 
     - [ ] Type of care that is set up for Community Care in staging is Podiatry 
     - [ ] Closet city to select is Dayton, OH 
     - [ ] Best test user for Community Care: patient999@id.me 
    
* **Description**
  - [ ] Submit a health care appointment request at the Community Care provider 

- [ ] Use Case 4 - Cancel a booked VA appointment 

* **Description**
  - [ ] A test user must have an upcoming booked appointment 
  - [ ] View the appointment details for a booked appointment and cancel the appointment

- [ ] Use Case 5 - Cancel a VA pending appointment  

* **Description**
  - [ ] A test user must have a request in the Pending view
  - [ ] View the pending details for a VA request and cancel the request 

- [ ] Use Case 6 - Cancel a Community Care pending appointment 

* **Description**
  - [ ] A test user must have a Community Care pending request 
  - [ ] View the pending details for a Community Care request and cancel the request 

- [ ] Use Case 7 - Cannot cancel a Community Care booked appointment 

* **Description**
  - [ ] A test user must have a Community Care booked appointment 
  - [ ] View the appointment details for a Community Care appointment and user should not see a Cancel link

### User flow
- [X] [Figma file](https://www.figma.com/file/xRs9s6QWoBPRhpdYCGc3cV/User-Flow?node-id=0%3A1&t=YhZr2QXznYwJ72lf-0) 

### Reference (if applicable) 
- [X] [Design file](https://www.figma.com/file/JpGM8LGBCqAlL8qh3DmFk8/Home-Page-Redesign?node-id=1172%3A81535&t=90yvScbbe8TiN61c-0)
- [X] [Copy doc](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report
- [X] [Summary Defect Report - Print list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/print-appointment-list/print-list-defects.md) 

### Traceability Report 
- [X] [VAOS](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests 
- [X] File path: vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2
- [X] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/tests/e2e/flows)
  
### Code coverage
- [X] File path: vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2
- [X] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components)
