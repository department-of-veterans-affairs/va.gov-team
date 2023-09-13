# Manual-UI Test Plan - Appointments on MHV on VA.gov 

## Project Summary Feature [#57667](https://app.zenhub.com/workspaces/appointments-team-603fdef281af6500110a1691/issues/gh/department-of-veterans-affairs/va.gov-team/57667)
MHV users will now use the Appointments tool on VA.gov. The changes are to update the URLs, breadcrumbs, page titles, and re-directs structure on the Appointments tool. The update will be consistent across the mulitple application on MHV on VA.gov.

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
     
- [ ] Saved URLs - see copy doc for details
    - [ ] [Copy doc - all scheduling flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/schedule-all-flows.md#scheduling---all-flows)
    - [ ] [Copy doc - VA direct schedule flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/schedule-va.md)
    - [ ] [Copy doc - COVID-19 workflow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/schedule-va-covid.md#va-direct-schedule-covid-vaccine-appointment-content)
    - [ ] [Copy doc - VA request flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/request-va.md)
    - [ ] [Copy doc - CC request flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/content/request-cc.md)

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

- [ ] Use Case 5 - Validate the direct scheduling worfklow with the new URL, breadcrumb and re-direct changes 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care page
    - [ ] Choose a VA location page
    - [ ] How to schedule page
    - [ ] Choose a VA clinic page
    - [ ] Schedule this appointment page
    - [ ] Choose a date and time page
    - [ ] Choose a reason for this appointment page
    - [ ] Confirm your contact informaiton page
    - [ ] Review your appointment details page
    - [ ] Confirmation details page after scheduling the appointment 

- [ ] Use Case 6 - Validate pending request worfklow with the new URL, breadcrumb and re-direct changes (at a VA faciltiy) 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care page
    - [ ] Facility type page
    - [ ] VA location page
    - [ ] Appointment Date and time page
    - [ ] Reason for this appointment page
    - [ ] Type of appointment page
    - [ ] Confirm your contact information page
    - [ ] Review your appointment details page
    - [ ] Confirmation details page after submitting the request 
   
- [ ] Use Case 7 - Validate pending request worfklow with the new URL, breadcrumb and re-direct changes (for Community care only) 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool
  - [ ] Tester can test with Audiolgy and Podiatry as a type of care

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] Type of care page
    - [ ] Choose an appointment day and time page
    - [ ] What's the closet city to you page
    - [ ] Request a provider page
    - [ ] Preferred language page
    - [ ] Reason for this appointment page
    - [ ] Confirm your contact information page
    - [ ] Review the appointment details page
    - [ ] Confirmation details page after submitting the request 

- [ ] Use Case 8 - Validate direct schedule (for COVID-19) worfklow with the new URL, breadcrumb and re-direct changes 
      
      Configuration setup in test environment must include: 
  - [ ] Tester will go through each step of the direct scheduling workflow in the tool

* **Description**
  - Tester will confirm the the URL, breadcrumb and re-direct for each page in the workflow 
    - [ ] COVID-19 vaccine appointment plan ahead page
    - [ ] Recieved a COVID-19 page
    - [ ] Second dose online page (user must select Yes on the received a COVID-19 quesiton)
    - [ ] Choose a location page (user must select No on the received a COVID-19 question)
    - [ ] Choose a clinic page
    - [ ] Choose a date page
    - [ ] When to plan a second dose page
    - [ ] Confirm your contact information page
    - [ ] Review your appointment details page
    - [ ] Confirmation details page after scheduling the appointment
 
### User flow (+ Peter/UX team can add the link) 
- [ ] [Figma file]()

### Reference (if applicable) 
- [ ] [Design file]()
- [ ] [Copy doc]()

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report (+ Jeff will add the list of defects found for this initiative/assisted by Julia) 
- [X] [Appointments on MHV on VA.gov - Defect Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/navigation-link/navigation-link-defect-summary.md)

### Traceability Report (+ Simi/developers will need to add this link)
- [ ] [VAOS](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/frontend-support-dashboard/unit-test-coverage-report/)

### E2E tests (+ Simi/developers will need to add this link)
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)

### Code coverage (+ Simi/developers will need to add this link)
- [ ] File path: `vets-website/src/applications/vaos/appointment-list/components/AppointmentsPageV2`
- [ ] [Product's code link](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/vaos/appointment-list/components/AppointmentsPageV2)
