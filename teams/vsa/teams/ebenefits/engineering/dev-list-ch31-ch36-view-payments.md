# Development Tasks for CH31, CH36, View Payments
Ascertain remaining tasks for these features  
## Chapter 36 (Deadline January 4, 2020)
Based on mean velocities from the past 10 sprints or so, FE and BE should be completed by September 22 (Sprint 30)

👉 = In progress  
❌ = No longer needed  
✔ = Done  
🌀 = Collaboration cycle  
🔽 = Lower priority  
⭐ = For stakeholder review 


### Product
- ✔ Request formal 508 audit (1)  (Happening in staging review)
- ✔ Load TestRail (2)  
- 🌀✔ Request QA Audit (1) 
- 🌀✔ Usability Prep and sessions (2)
- 🌀 Staging Review (1)  
- 🌀 Privacy and Security Audit (2) 
- 🌀 UAT (2)   
Total = 11

### Front End
- ✔ [#12829](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12829) Add logic for showing/ hiding the Static Veteran Information page based on if the user is logged in or not (5)
- ❌ [#12830](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12830) Add logic for showing/ hiding Dependent Information and Dependent Address pages based on if user is logged in or not (5)
- ✔ [#12424](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12424) Add schema for CH36 to `vets-json-schema` repo (3)
- ✔ [#13172](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13172) Add unit tests for CH36 schema in `vets-json-schema` repo (3)
- ✔ [#12833](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12833) Unit test static Veteran Information page (3)
- ✔ [#12049](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12049) Unit test Veteran Information page (3)
- ✔ [#12048](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12049) Unit test for Claimant Info page (3)
- ❌ [#12832](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12832) Unit Test Veteran Address page (3)
- ❌ [#12053](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12053) Unit test Contact Preferences page (3)
- ✔ [#12831](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12831) Unit test Claimant Address page (3)
- ✔ [#12834](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12834) Connect and test BE endpoint for CH36 (2)
- ✔ [#12059](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12059) e2e Test Dependent workflow (3)
- ✔ [#12835](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12835) e2e test Veteran workflow NOT logged in (3)
- ✔ [#11235](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11235) Meet with Analytics team to get GA events for chapter 36 form (1)
- ✔ [#12055](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12834) Add GA events to form (3)
- ✔ [#12057](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12057) Perform internal accessibility audit (2)  
- ✔ [#13129](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13129) Flipper component for unauth landing page (3)  
Total = 49    
2 Sprints should be doable based on FE sprint average of: 30 points across 9 issues  

### Backend
- ✔ [#12901](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12901) PDF creation from CH36 form 
- ✔ [#12877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12877) Submits via Central Mail Submission for CH36 (3)
- ✔ [#12101](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12101) Set up the controller (3)
- ✔ [#12105](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12105) Set up the model (5)
- ❌ [#12142](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12142) Set up a sidekiq job  (3)
- ✔ [#13273](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13273) Send SSN and DOB data to BGS (3)
- [?] Set up sentry events  (5)
- [?] Test submission against environment (5)  
  - Submitting unauth? Nah, wrap it in the controller 
Total = 24  
2 Sprints should be doable based on BE sprint average of: 21 points across 7 issues

## View my VA payment history (No established deadline)
### Product
- Request formal 508 audit (1)  
- Load TestRail (2)  
- Request QA Audit (1)  
- Staging Review (1)  
- Privacy and Security Audit (2)   
Total = 7

### Frontend
- ✔ [#12263](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12263) Implement copy edits (3)
- 🔽 [#11926](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11926) Unit test `ViewPaymentsHeader` (5)
- ✔ [#11925](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11925) Unit test `ViewPaymentsLists` (5)
- ✔ [#11924](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11924) Unit test `Payments` (5)
- 🔽 [#11991](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11991) Unit test `ViewPaymentsSidebar` (3) `low priority`
- ✔ [#12000](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12000) Swap dummy content with real data from API call (BE + FE get together) (3)
- ✔ [#11991](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11991) Unit test Redux (3)
- ✔ [#12003](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12003) E2E test (5)
- ✔ [#13512](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13512) Meet with GA team (1)
- ❌ [#13513](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13513) Implement event names from GA team (2)
- ✔ [#12001](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12001) Internal a11y audit (2)  
Total = 37

### Backend
- ✔ Build a serializer (5)
- ✔ Set up the controller (3)
- ❌ Set up the model (5)
- ❌ Set up a sidekiq job  (3)
- ✔ Set up sentry events  (5)
- Test submission against environment (5)  
Total = 26

## Chapter 31 (Deadline December 2020)
### Product
- Request formal 508 audit (1)
- ✔ Load TestRail (2)
- ✔ Request QA Audit (1)
- Contact Center documentation (3)
- Staging Review (1)
- Privacy and Security Audit (2)  
Total = 10  

### Front End
- [12473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12473) Flipper component on unauth landing page (8*)
- ✔ [12421](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12421) Unit test static Veteran Info page  (3)
- ✔ Unit test the non-static Veteran Info page (3)
- ✔ [14918](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14918) Unit test the Veteran Address page  (3)
- ✔ [12034](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12034) Unit test Communication Preferences  (3)
- ✔ [#12050](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12050) Unit test Additional Info page  (3)
- ✔ [14910](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14910) Add schema to `vets-json-schema`  (5) ⭐
- ✔ [14911](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14911) Unit test schema  (3) 
- ✔ [12471](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12471) Connect and test BE endpoint for CH31 (2) ⭐
- ✔ [12056](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12056) E2E auth & unauth (3)
- Meet with GA team (1)
- Implement event names from GA team (2)
- Internal a11y audit (2)  
Total = 41  

### Back End
- EVSS usage discovery (SPIKE)  

**Using EVSS**
- Endpoint testing, see what format data needs to be in (3)  

**Using VRE API**
- Endpoint testing, see what format data needs to be in (3)  
- Create a service to integrate (5)  

**Regardless of lower environment**
- Build a serializer (5)  
- Set up the controller (3)  
- Set up the model (5)
- Set up a sidekiq job  (3)
- Set up sentry events  (5)
- Test submission against environment (5)  
Total = 29 - 34
  
Product Subtotal (21)  
FE Subtotal (128)  
BE Subtotal (79-84)  
  
## View my VA Representative
### Product
- Request formal 508 audit (1)  (Now happening in staging review)
- Load TestRail (2)  
- 🌀 Request QA Audit (1) 
- 🌀 Usability Prep and sessions (2)
- 🌀 Staging Review (1)  
- 🌀 Privacy and Security Audit (2) 
- 🌀 UAT (2)

### Frontend
- Initial feature scaffolding
- First pass at custom view components
- Initial Redux code for API calls
- Refine custom view components to better match mockup
- Build one custom view component action
- Unit tests for Redux implementation
- Unit tests for custom view component
- Swap dummy API call in Redux for correct URL and adjust data structure
- Meet with Analytics team and get Google Analytics event names
- Add Google events to View Task
- Internal accessibility audit
- 508 testing

### Backend
- Build a serializer (5)
- Set up the controller (3)
- Set up the model (5)
- Set up a sidekiq job  (3)
- Set up sentry events  (5)
- Test submission against environment (5) 

## Appoint my VA Representative (with Search inline with form)
### Product
- Request formal 508 audit (1)  (Now happening in staging review)
- Load TestRail (2)  
- 🌀 Request QA Audit (1) 
- 🌀 Usability Prep and sessions (2)
- 🌀 Staging Review (1)  
- 🌀 Privacy and Security Audit (2) 
- 🌀 UAT (2)

### Building View VA Rep
- [15545](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15545) Initial feature scaffolding
- [15549](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15549) First pass at custom view components
- [15551](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15551) Initial Redux code for API calls
- [15552](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15552) Refine custom view components to better match mockup
- [15553](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15553) Unit tests for Redux implementation
- [15555](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15555) Unit tests for custom view component
- [15556](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15556) Swap dummy API call in Redux for correct URL and adjust data structure
- [15557](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15557) Meet with Analytics team and get Google Analytics event names
- [15558](https://github.com/department-of-veterans-affairs/va.gov-team/issues/15558) Add Google events to View Task
- Internal accessibility audit
- 508 testing

### Building Search
- Scaffold component structure for Search form
- Scaffold component structure for Search results
- Scaffold component for confirmation page
- Add basic logic to search form and search results
- Add basic logic for confirmation page
- Add more complex logic to search form and search results
- Initial Redux code for API calls
- Refine components to better match mockup (repeat for as many main components as needed)
- Unit test component logic for search form component
- Unit test component logic for search results component
- Unit test component logic for confirmation page
- Unit test Redux code
- Swap dummy API call in Redux for correct URL and adjust data structure as needed
- Work with back end team on outgoing payload structure
- Meet with Analytics team and get Google Analytics event names
- Add Google events to components
- Internal accessibility audit


### Backend
- Request formal 508 audit (1)  (Now happening in staging review)
- Load TestRail (2)  
- 🌀 Request QA Audit (1) 
- 🌀 Usability Prep and sessions (2)
- 🌀 Staging Review (1)  
- 🌀 Privacy and Security Audit (2) 
- 🌀 UAT (2)

## Search for a VA Representative
### Product
- Request formal 508 audit (1)  (Now happening in staging review)
- Load TestRail (2)  
- 🌀 Request QA Audit (1) 
- 🌀 Usability Prep and sessions (2)
- 🌀 Staging Review (1)  
- 🌀 Privacy and Security Audit (2) 
- 🌀 UAT (2)

### Frontend
### Backend

  
  
  
  
Mean FE Velocity/sprint [30 points across 9 issues]   
Mean BE Velocity/sprint [21 points across 7 issues]   

Sprint 29 (August 26 - September 8)  

Sprint 30 (September 9 - September 22)  

Sprint 31 (September 23 - October 6)  

Sprint 32 (October 7 - October 20)  
