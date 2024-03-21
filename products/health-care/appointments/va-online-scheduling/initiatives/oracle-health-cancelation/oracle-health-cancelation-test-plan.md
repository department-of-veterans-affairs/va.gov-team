# Manual-UI Test Plan - Oracle Health Cancelation 

## Project Summary Epic [#]() 
Appointments tool on VA.gov will be integrated with the Oracle Health system. The application will display upcoming, canceled and past appointments from Oracle Health. The Veteran will need the ability to cancel an Oracle Health booked appointment or request. 

## Business Rules (more details can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/vaos_business_rules.md#appointments-list))
On the VAOS homepage, the app displays the following for each status: 
- VA and Community Care upcoming appointments: displays up to 13 months of future booked VA and Community Care appointments including canceled VA and CC booked appointments
- Oracle Health upcoming appointments: 
- Pending VA and CC requests: displays pending VA and Community Care appointment requests and prior 120 days of VA and Community Care canceled requests
- Pending Oralce Health requests: 
- Past appointments - VA and CC: displays up to 2 years of past VA and Community Care booked appointments (note: it does not display past canceled booked appointments) 
- Past appointments - Oracle Health
  
### Use Cases
 
- [ ] Use Case 1 - Validate upcoming appointments in VAOS 

     Configuration setup in test environment must include: 
  - [ ] Test user should have VA (in person, video visit and phone call) and Community Care booked appointments including canceled appointments

* **Description**
  - Tester will validate that they could view the list of their upcoming appointments (future appts) in VAOS 
    - [ ] Booked Oracle Health appointment - in person (at a Facility) 
    - [ ] Booked Oracle Health appointment - video connect (at a Facility) 
    - [ ] Booked Oracle Health appointment - video connect (at an ATLAS location) 
    - [ ] Booked Oracle Health appointment - video connect (at home, not a VA or ATLAS location) 
    - [ ] Booked Oracle Health appointment - phone call 
    - [ ] Canceled Oracle Health appointment - in person (at a Facility) 
    - [ ] Canceled Oracle Health appointment - video connect (at a Facility) 
    - [ ] Canceled Oracle Health appointment - video connect (at an ATLAS location) 
    - [ ] Canceled Oracle Health appointment - video connect (at home, not a VA or ATLAS location) 
    - [ ] Canceled Oracle Health appointment - phone call
          

- [ ] Use Case 2 - Validate pending requests in VAOS 

     Configuration setup in test environment must include: 
  - [ ] Test user should have VA and Community Care pending requests including canceled requests

* **Description**
  - Tester will validate that they could view the list of their pending requests in VAOS 
    - [ ] Pending VA request - in person (at a Facility) 
    - [ ] Pending Community Care request
    - [ ] Canceled VA request - in person (at a Facility) 
    - [ ] Canceled Community Care request

- [ ] Use Case 3 - Validate past appointments in VAOS

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
    
- [ ] Use Case 4 - Validate appointment list for mobile devices.
      
      Configuration setup in test environment must include: 
  - [ ] Test user should have past booked, upcoming and pending VA and Community Care appointments

* **Description**
  - Tester will validate that the list of their past booked, upcoming and pending VA and Community Care appointments in VAOS looks as expected on mobile
    - [ ] Past booked, upcoming and pending VA and Community Care appointments - iOS devices
    - [ ] Past booked, upcoming and pending VA and Community Care appointments - Android devices
 

### User flow
- [  [Figma file]() 

### Reference (if applicable) 
- [ ] [Design file]()
- [ ] [Copy doc]()

### Test Users 
- [X] [VAOS test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-vaos.md)

### Summary Defect Report
- [ ] [TBD - Defect Report]()

### Traceability Report 
- [ ] [TBD]()

### E2E tests 
- [ ] File path: `TBD`
- [ ] [Product's code link]()

### Code coverage
- [ ] File path: `TBD`
- [ ] [Product's code link]()
