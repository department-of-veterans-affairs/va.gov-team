# Manual-UI Test Plan - Appointments on MHV on VA.gov 

## Project Summary Feature [#57667](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/57667)
MHV users will now use the Appointments tool on VA.gov. The changes are to update the URLs, breadcrumbs and page titles structure on the Appointments tool. The update will be consistent across the mulitple application on MHV on VA.gov.

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
On the VAOS homepage, the app displays the following for each status: 
- Upcoming appointments: displays up to 13 months of future booked VA and Community Care appointments including canceled VA and CC booked appointments 
- Pending requests: displays pending VA and Community Care appointment requests and prior 120 days of VA and Community Care canceled requests 
- Past appointments: displays up to 2 years of past VA and Community Care booked appointments (note: it does not display past canceled booked appointments) 

### Entry points to the new URL, breadcrumb and re-direct structure 

- [ ] Entering through the Authetnicated Experience - MyVA
   - [ ] Non-Cerner user
   - [ ] Cerner user
     
- [ ] Entering through the Public Websites 
   - [ ] Non-Cener user (widget)
   - [ ] Cerner user (widget)
     
- [ ] MHV legacy portal
    - [ ] User will start from the legacy portal tool and be routed to MHV landing page (...details need to be specified)
     
- [ ] Saved URLs
    - [ ] (...define URLs)  

### Use Cases
 
- [ ] Use Case 1 - Validate upcoming appointments in VAOS with the new URL, breadcrumb and re-direct changes

     Configuration setup in test environment must include: 
  - [ ] Test user should have VA (in person, video visit and phone call) and Community Care booked appointments including canceled appointments

* **Description**
  - Tester will validate that they could view the list of their upcoming appointments (future appts) in VAOS 
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

- [ ] Use Case 2 - Validate pending requests in VAOS with the new URL, breadcrumb and re-direct changes

     Configuration setup in test environment must include: 
  - [ ] Test user should have VA and Community Care pending requests including canceled requests

* **Description**
  - Tester will validate that they could view the list of their pending requests in VAOS 
    - [ ] Pending VA request - in person (at a Facility) 
    - [ ] Pending Community Care request
    - [ ] Canceled VA request - in person (at a Facility) 
    - [ ] Canceled Community Care request

- [ ] Use Case 3 - Validate past appointments in VAOS with the new URL, breadcrumb and re-direct changes

     Configuration setup in test environment must include: 
  - [ ] Test user should have past booked VA and Community Care appointments 

* **Description**
  - Tester will validate that they could view the list of their past booked appointments in VAOS 
    - [ ] Past booked VA appointment - in person (at a Facility) 
    - [ ] Past booked VA appointment - video connect (at a Facility) 
    - [ ] Past booked VA appointment - video connect (at an ATLAS location) 
    - [ ] Past booked VA appointment - video connect (at home, not a VA or ATLAS location) 
    - [ ] Past booked VA appointment - phone call 
    - [ ] Past booked Community Care appointment
    
- [ ] Use Case 4 - Validate appointment list for mobile devices with the new URL, breadcrumb and re-direct changes
      
      Configuration setup in test environment must include: 
  - [ ] Test user should have past booked, upcoming and pending VA and Community Care appointments

* **Description**
  - Tester will validate that the list of their past booked, upcoming and pending VA and Community Care appointments in VAOS looks as expected on mobile
    - [ ] Past booked, upcoming and pending VA and Community Care appointments - iOS devices
    - [ ] Past booked, upcoming and pending VA and Community Care appointments - Android devices

 - [ ] Use Case 5 - Direct scheduling worfklow with the new URL, breadcrumb and re-direct changes 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care
    - [ ] Facility
    - [ ] ....

  - [ ] Use Case 6 - Pending request worfklow with the new URL, breadcrumb and re-direct changes (VA) 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care
    - [ ] Facility
    - [ ] ....
   
  - [ ] Use Case 7 - Pending request worfklow with the new URL, breadcrumb and re-direct changes (Community care) 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care
    - [ ] Facility
    - [ ] .... 

  - [ ] Use Case 8 - Direct schedule (for COVID-19) worfklow with the new URL, breadcrumb and re-direct changes 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care
    - [ ] Facility
    - [ ] .... 
 
### User flow (+ Peter/UX team can add the link) 
- [ ] [Figma file]()

### Reference (if applicable) 
- [X] [Design file]()
- [X] [Copy doc]()

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report (+ Jeff will add the list of defects found for this initiative/assisted by Julia) 
- [ ] [Appointment List Redesign - Defect Report]()

### Traceability Report (+ Simi/developers will need to add this link)
- [ ] [VAOS](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests (+ Simi/developers will need to add this link)
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)

### Code coverage (+ Simi/developers will need to add this link)
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)
