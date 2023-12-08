# Manual-UI Test Plan - After Visit Summmary

## Project Summary Epic [#57980](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/57980) 
Adding the After Visit Summary feature in the application tool to allow the Veteran to view the summary of their visit with the provider. 

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
On the VAOS homepage, the app displays the following for each status: 
- Upcoming appointments: displays up to 13 months of future booked VA and Community Care appointments including canceled VA and CC booked appointments 
- Pending requests: displays pending VA and Community Care appointment requests and prior 120 days of VA and Community Care canceled requests 
- Past appointments: displays up to 2 years of past VA and Community Care booked appointments (note: it does not display past canceled booked appointments) 

### Use Cases

- [ ] Use Case 1 - Validate past appointments in VAOS

     Configuration setup in test environment must include: 
  - [ ] Test user should have past booked VA and [Community Care appointments ??] 

* **Description**
  - Tester will validate that they could view the list of their past booked appointments in VAOS 
    - [ ] Past booked VA appointment - in person (at a Facility) 
    - [ ] Past booked VA appointment - video connect (at a Facility)  - need to verify if AVS is available for this appointment type
    - [ ] Past booked VA appointment - video connect (at an ATLAS location) - need to verify if AVS is available for this appointment type
    - [ ] Past booked VA appointment - video connect (at home, not a VA or ATLAS location) - need to verify if AVS is available for this appointment type
    - [ ] Past booked VA appointment - phone call - need to verify if AVS is available for this appointment type
    - [ ] Past booked Community Care appointment - need to verify if AVS is available for this appointment type

- [ ] Use Case 2 - Validate After Visit Summary link on the Past appointment details page

     Configuration setup in test environment must include: 
  - [ ] Test user must have an After Visit Summary linked to the appointment response (appointment IEN) 

* **Description**
  - Tester will validate that they could view the After Visit Summary link on the Past appointments details page
    - [ ] Past booked VA appointment - in person (at a Facility)
    - [ ] Add any additonal appointment types (delete if needed)

- [ ] Use Case 3 - Validate there is no After Visit Summary link on the Past appointment details page (no alert in the response)

     Configuration setup in test environment must include: 
  - [ ] Test user must NOT have an After Visit Summary linked to the appointment response (appointment IEN) 

* **Description**
  - Tester will validate that there is no After Visit Summary link available on the Past appointment details page
    - [ ] Past booked VA appointment - in person (at a Facility)
    - [ ] Add any additonal appointment types (delete if needed)
     
- [ ] Use Case 3 - Validate there is a broken link in the appointment response and the UI is displaying an alert message on the Past appointment details page (must trigger an alert in the response)

     Configuration setup in test environment must include: 
  - [ ] Test user must have an After Visit Summary alert in the response body [details in the controller???]

* **Description**
  - Tester will validate that there is no After Visit Summary link available on the Past appointment details page
    - [ ] Past booked VA appointment - in person (at a Facility)
    - [ ] Add any additonal appointment types (delete if needed)
          
### After-visit Summary MVP Test Cases in TestRails
-  [X] [TestRails](https://dsvavsp.testrail.io/index.php?/suites/view/2735&group_by=cases:title&group_order=asc&display_deleted_cases=0)

### User flow (confirm with Ciera and Peter)
- [X] [Figma file](https://www.figma.com/file/VHHxvo1QA1ndWc0TBhfkNq/Add-After-Visit-Summary?type=design&node-id=2012%3A35639&mode=design&t=TWu7CJ3mbxrLx9YS-1) 

### Reference (if applicable) 

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report (Jeff can add any FE defects) 
- [ ] Summary Defect Report(https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/after-visit-summary/after-vist-summary-defects.md)

### Traceability Report (Simi & Corey to add)
- [ ] [VAOS](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests (Simi & Corey to add)
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)

### Code coverage (Simi & Corey to add)
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)
