# Initial Dry Run aka Dress Rehearsal

  Goal: From this process we hope to gain insight/ feedback into our validation/verification approach and potentially begin testing earlier in our schedule. 

  For the scope of this intiative, we will be testing the following approaches:

  - Automated Test Scripts
  - Integrated Testing

## Automated Test Scrips: 

The test suite (cypress) will run a series of steps mirroring a users behavior to test the front end UI of the AVA Interface (Submitter side).
Goal: Establish that the functional requirements of the Form as operating as expected for a Submitter. 
Context: The automated test will execute every action a human takes to complete an Inquiry. 
  
### Process: 

We will test the following flows:

- An Unauthenticated User, who is the Veteran, is looking for Insurance
- An Authenticated User, who is the Veteran, is looking for Health Information. 

For Overall Test Plan:  we plan on developing further automated testing to mock additional user pathways for the Form, as well as the Dashboard. We will run the Cypress Test Suite with some regularity to confirm that as we build our existing features will still function as expected. 
  
Cadence: Test Script automation can still take sometime to run,  ex. 20 seconds to run per script (+/- depending on length of script) , while an improvement on manual validation we (AVA) may choose to be selective around which tests will be run as a part of our Build Pipeline (at the unit level in our continuous integration and deployment pipeline for all devs. ) or on a regular (Weekly) cadence. This will be determined by the dev team as to what is a core functional suite of tests to keep from creating a pipeline with a suite of tests that take significant time to run. 

## Tools required for AVA: Cypress

### Integration Testing: 

We will test the API integration between AVA and CRM - Agent Portal. We will be testing for the correct mapping of Category/ Topic/ Sub-Topic for a collection of 12 permutations ( 1/10 of the 120 flows.) 
Goal: Confirm Inquiries are being correctly routed. 
Context: AVA will sent a series of Inquiries (a collection of 12) to CRM, who will respond with a field providing the mapping of the Queue each inquiry was routed to. This will confirm that the integration and mapping of our Inquiries remains successful. 
  
### Process: 

  - This collection will ping the CRM API with a collection of 12 submissions modeling an inquiry using specific Category/Topic/Sub-Topic.
  - AVA will check a response from the CRM API which contains the QueueID, the QeueID will provide information around what Queue each Inquiry in our collection was assigned.  
  - AVA + CRM will confirm that that the correct QueueID based on our previously established documentation (@joe can you add link to the file from Kyle re. the mapping?) was assigned via the CRM API and User Dashboard for the test user assigned.
  
Tools Required for AVA : Insomnia - https://insomnia.rest/

For Overall Test Plan: we will continue to write the additional 9 collections of 108 
  
