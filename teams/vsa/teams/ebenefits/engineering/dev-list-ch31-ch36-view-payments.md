# Development Tasks for CH31, CH36, View Payments
Ascertain remiaining tasks for these features  
## Chapter 36
### Product
- Request formal 508 audit
- Load TestRail
- Request QA Audit
- Staging Review
- Privacy and Security Audit

### Front End
- Add logic for showing/ hiding the Static Veteran Information page based on if the user is logged in or not
- Add logic to for showing/ hiding dependent information and dependent address pages based on if user is logged in or not
- Add schema for chapter 36 to `vets-json-schema` repo
- Add unit tests for chapter 36 schema in `vets-json-schema` repo
- Unit test static Veteran Information page
- Unit test Veteran Information page
- Unit test Veteran Address page
- Unit test Contact Preferences page
- Unit test Dependent Information page
- Unit test Dependent Address page
- Connect and test BE endpoint for CH36
- e2e test Dependent workflow
- e2e test Veteran workflow NOT logged in
- e2e test Veteran workflow logged in
- Meet with Analytics team to get GA events for chapter 36 form
- Add GA events to form
- Perform internal accessibility audit

### Back End
- Test central mail integration  
- Set up the controller
- Set up the model
- Set up a sidekiq job
- Set up sentry events
- Test submission against environment

## View my VA payment history
### Product
- Request formal 508 audit
- Load TestRail
- Request QA Audit
- Staging Review
- Privacy and Security Audit

### Frontend
- Implement copy edits
- Unit test `ViewPaymentsHeader`
- Unit test `ViewPaymentsLists`
- Unit test `Payments`
- Unit test `ViewPaymentsSidebar`
- Swap dummy content with real data from API call (BE + FE get together)
- Unit test Redux
- E2E test
- Meet with GA team
- Implement event names from GA team
- Internal a11y audit

### Backend
- Build a serilaizer
- Set up the controller
- Set up the model
- Set up a sidekiq job
- Set up sentry events
- Test against chosen environment

## Chapter 31
### Product
- Request formal 508 audit
- Load TestRail
- Request QA Audit
- Staging Review
- Privacy and Security Audit

### Front End
- Flipper component on unauth landing page
- Unit test static Veteran Info page
- Unit test the non-static Veteran Info page
- Unit test the Veteran Address page
- Unit test Communication Preferences
- Unit test Additional Info page
- Add schema to `vets-json-schem`
- Unit test schema
- Connect and test BE endpoint for CH31
- E2E auth & unauth
- Meet with GA team
- Implement event names from GA team
- Internal a11y audit

### Back End
- EVSS usage discovery (SPIKE)

**Using EVSS**
- Endpoint testing, see what format data needs to be in

**Using VRE API**
- Endpoint testing, see what format data needs to be in
- Create a service to integrate

**Regardless of lower environment**
- Build a serilaizer
- Set up the controller
- Set up the model
- Set up a sidekiq job
- Set up sentry events
- Test against chosen environment


Sprint 29 (August 26 - Septmeber 8)

Sprint 30 (September 9 - September 22)

Sprint 31 (September 23 - October 6)
