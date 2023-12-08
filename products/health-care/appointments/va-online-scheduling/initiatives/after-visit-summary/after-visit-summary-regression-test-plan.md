# Regression Test Plan - After Visit Summary 

## Project Summary Epic [#38062](https://app.zenhub.com/workspaces/vaos-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/38062) 
Adding the After Visit Summary feature in the application tool to allow the Veteran to view the summary of their visit with the provider. 

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

### User flow (+Ciera/Peter - please add) 
- [ ] [Figma file]() 

### Reference (if applicable) 
- [X] [Design file]()

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report (Jeff will update the file)
- [ ] [After Visit Summmary - Defect report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/after-visit-summary/after-vist-summary-defects.md) 

### Traceability Report (Simi - please add) 
- [ ] [VAOS](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests (Simi - please add) 
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)

### Code coverage (Simi - please add) 
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)
