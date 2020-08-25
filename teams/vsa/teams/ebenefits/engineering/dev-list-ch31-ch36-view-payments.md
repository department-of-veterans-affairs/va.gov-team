# Development Tasks for CH31, CH36, View Payments
Ascertain remiaining tasks for these features  
## Chapter 36 (Deadline October 26)
Based on mean velocities from the past 10 sprints or so, FE and BE can be completed by September 22 (Sprint 30)
### Product
- Request formal 508 audit (1)  
- Load TestRail (2)  
- Request QA Audit (1)  
- Staging Review (1)  
- Privacy and Security Audit (2)  
Total = 7

### Front End
- Add logic for showing/ hiding the Static Veteran Information page based on if the user is logged in or not (5)
- Add logic to for showing/ hiding dependent information and dependent address pages based on if user is logged in or not (5)
- Add schema for chapter 36 to `vets-json-schema` repo (3)
- Add unit tests for chapter 36 schema in `vets-json-schema` repo (3)
- Unit test static Veteran Information page (3)
- Unit test Veteran Information page (3)
- Unit test Veteran Address page (3)
- Unit test Contact Preferences page (3)
- Unit test Dependent Information page (3)
- Unit test Dependent Address page (3)
- Connect and test BE endpoint for CH36 (2)
- e2e test Dependent workflow (3)
- e2e test Veteran workflow NOT logged in (3)
- e2e test Veteran workflow logged in (3) 
- Meet with Analytics team to get GA events for chapter 36 form (1)
- Add GA events to form (3)
- Perform internal accessibility audit (2)
Total = 50  
2 Sprints should be doable

### Backend
- Test central mail integration (3)
- Set up the controller (3)
- Set up the model (5)
- Set up a sidekiq job  (3)
- Set up sentry events  (5)
- Test submission against environment (5)
Total = 24
2 Sprints should be doable

## View my VA payment history
### Product
- Request formal 508 audit (1)
- Load TestRail (2)
- Request QA Audit (1)
- Staging Review (1)
- Privacy and Security Audit (2)
Total = 7

### Frontend
- Implement copy edits (3)
- Unit test `ViewPaymentsHeader` (5)
- Unit test `ViewPaymentsLists` (5)
- Unit test `Payments` (5)
- Unit test `ViewPaymentsSidebar` (3)
- Swap dummy content with real data from API call (BE + FE get together) (3)
- Unit test Redux (3)
- E2E test (5)
- Meet with GA team (1)
- Implement event names from GA team (2)
- Internal a11y audit (2)
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
