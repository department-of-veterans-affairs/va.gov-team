# Development Tasks for CH31, CH36, View Payments
Ascertain remiaining tasks for these features  
## Chapter 36 (Deadline October 26)
Based on mean velocities from the past 10 sprints or so, FE and BE should be completed by September 22 (Sprint 30)

👉 = In progress  
❌ = No longer needed  
✔ = Done  
🌀 = Collaboration cycle  


### Product
- Request formal 508 audit (1)  
- Load TestRail (2)  
- 🌀 Request QA Audit (1) 
- 🌀 Usability Prep and sessions (2)
- 🌀 UAT (2)
- 🌀 Staging Review (1)  
- 🌀 Privacy and Security Audit (2)  
Total = 11

### Front End
- ✔ [#12829](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12829) Add logic for showing/ hiding the Static Veteran Information page based on if the user is logged in or not (5)
- ❌ [#12830](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12830) Add logic for showing/ hiding Dependent Information and Dependent Address pages based on if user is logged in or not (5)
- ✔ [#12424](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12424) Add schema for CH36 to `vets-json-schema` repo (3)
- [#13172](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13172) Add unit tests for CH36 schema in `vets-json-schema` repo (3)
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
- 👉 [#12057](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12057) Perform internal accessibility audit (2)  
- 👉 [#13129](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13129) Flipper component for unauth landing page (3)  
Total = 49    
2 Sprints should be doable based on FE sprint average of: 30 points across 9 issues  

### Backend
- 👉 [#12901](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12901) PDF creation from CH36 form 
- [#12877](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12877) Test central mail integration (3)
- [#12101](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12101) Set up the controller (3)
- 👉 [#12105](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12105) Set up the model (5)
- 👉 [#12142](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12142) Set up a sidekiq job  (3)
- ✔ [#13273](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13273) Send SSN and DOB data to BGS (n)
- [?] Set up sentry events  (5)
- [?] Test submission against environment (5)  
  - Submitting unauth?
Total = 24  
2 Sprints should be doable based on BE sprint average of: 21 points across 7 issues

## View my VA payment history
### Product
- Request formal 508 audit (1)
- Load TestRail (2)
- Request QA Audit (1)
- Staging Review (1)
- Privacy and Security Audit (2)  
Total = 7

### Frontend
- 👉 [#12263](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12263) Implement copy edits (3)
- [#11926](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11926) Unit test `ViewPaymentsHeader` (5)
- [#11925](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11925) Unit test `ViewPaymentsLists` (5)
- [#11924](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11924) Unit test `Payments` (5)
- [#11991](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11991) Unit test `ViewPaymentsSidebar` (3)
- 👉 [#12000](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12000) Swap dummy content with real data from API call (BE + FE get together) (3)
- [#11991](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11991) Unit test Redux (3)
- [#12003](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12003) E2E test (5)
- [#13512](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13512) Meet with GA team (1)
- [#13513](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13513) Implement event names from GA team (2)
- [#12001](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12001) Internal a11y audit (2)  
Total = 37

### Backend
- Build a serializer (5)
- Set up the controller (3)
- Set up the model (5)
- Set up a sidekiq job  (3)
- Set up sentry events  (5)
- Test submission against environment (5)  
Total = 26

## Chapter 31
### Product
- Request formal 508 audit (1)
- Load TestRail (2)
- Request QA Audit (1)
- Staging Review (1)
- Privacy and Security Audit (2)  
Total = 7  

### Front End
- Flipper component on unauth landing page (8*)
- Unit test static Veteran Info page  (3)
- Unit test the non-static Veteran Info page  (3)
- Unit test the Veteran Address page  (3)
- Unit test Communication Preferences  (3)
- Unit test Additional Info page  (3)
- Add schema to `vets-json-schema`  (5)
- Unit test schema  (3)
- Connect and test BE endpoint for CH31 (2)
- E2E auth & unauth (3)
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
  
Mean FE Velocity/sprint [30 points across 9 issues]   
Mean BE Velocity/sprint [21 points across 7 issues]   

Sprint 29 (August 26 - September 8)  

Sprint 30 (September 9 - September 22)  

Sprint 31 (September 23 - October 6)  

Sprint 32 (October 7 - October 20)  
