# Initial Dry Run aka Dress Rehearsal

Goal: Gain insight and feedback into our validation/verification approach. Potentially begin testing earlier in our schedule. 

For the scope of this intiative, we will test the following approaches:
- Automated Test Scripts
- Integrated Testing

## Automated Test Scrips 

The test suite (Cypress) will run a series of steps mirroring a submitter's behavior to test the new Ask VA front-end on VA.gov.

Goal: Establish that the functional requirements of the Form as operating as expected for a Submitter. 

Context: The automated test will execute every action a human takes to complete an Inquiry. 
  
### Process

We will test the following flows:
- An Unauthenticated User, who is the Veteran, is looking for Insurance Information.
- An Authenticated User, who is the Veteran, is looking for Health Information.
- An Unauthenticated User, who is the Veteran, is looking for Health Information. 

For Overall Test Plan: We plan on developing further automated testing to mock additional user pathways for the Form, as well as the Dashboard. We will run the Cypress Test Suite with some regularity to confirm that as we build our existing features, it will still function as expected. 
  
Cadence: Test Script automation can still take sometime to run,  ex. 20 seconds to run per script (+/- depending on length of script). While an improvement on manual validation, we (AVA) may choose to be selective around which tests will be run as a part of our Build Pipeline (at the unit level in our continuous integration and deployment pipeline for all devs) or on a regular (Weekly) cadence. This will be determined by the dev team as to what is a core functional suite of tests to keep from creating a pipeline with a suite of tests that take significant time to run. 

## Tools required for AVA: Cypress

### Integration Testing

We will test the API integration between the submitter front-end (Ask VA on VA.gov) and the agent front-end (Dynamics CRM). We will be testing for the correct mapping of Category, Topic, and Subtopic for a collection of 12 permutations (1/10 of the 120 flows.) 

Goal: Confirm Inquiries are being correctly routed. 

Context: The Ask VA VA.gov team will sent a series of inquiries (a collection of 12) to CRM, who will respond with a field providing the mapping of the Queue each inquiry was routed to. This will confirm that the integration and mapping of our Inquiries remains successful. 
  
### Process: 

  - This collection will ping the CRM API with a collection of 12 submissions modeling an inquiry using a specific Category, Topic, Subtopic combination.
  - The Ask VA VA.gov team will check a response from the CRM API which contains the QueueID. The QueueID will provide information around what Queue each Inquiry in our collection was assigned.  
  - Ask VA VA.gov team will confirm that that the correct QueueID based on our previously established documentation (@joe can you add link to the file from Kyle re. the mapping?) was assigned via the Agent side and User Dashboard for the test user assigned.
  
Tools Required for AVA: Insomnia - https://insomnia.rest/

For Overall Test Plan: we will continue to write the additional 9 collections of 108 
