# SM Exchange

## Assumptions (Need to be validated and Open to challenged)

- ✅ MHV is the source of truth for all Messaging data
- We need to map OH data into our own model to support capabilities that are not supported by OH
- Between the FHIR APIs and OH SM APIs we have all the data we need
- The existing MHV SM API (the one used by va.gov today) can be reused for the SM Exchange
- OH is sending data to an URL via a webhook in an Atom feed format
- The only reason we are sending data back to OH is so that the message shows up in the OH clinician UI
- The correct and data is availible through the process (example: we can get the facility information at the correct time)
- The SM Exchange and MHV and OH commincate using RESTful APIs

## Technical Measures of Success

- The SM Exchange is an isolated system between MHV and OH
- The Messaging backend (MHV) is fully abstracted away from the SM Exchange
- The SM Exchange does not have any knowledge or dependency on MHV database structure or the OH database structure
- The arichecture is scalable, monitorable and resilent 

## MVP Target

- create an endpoint that can be hit with a cURL command and sends a message to OH
- create an endpoint that can consume OH Atom feed and that can upload a message to the MHV

## Risks

- Historical Data not being populated


## High Level diagram

![High level diagram](./assets/MHV%20Oracle%20Health%20Integrations%20-%20Messaging%20(1).png)

## MVP Diagram

### Goals

- Provide infrastructure for the pipeline between OH and MHV
- Send a message to OH (or a cURL)
- Send a message from OH to MHV 

### More detailed diagram

![Diagram](./assets/sm%20exchange.v2.drawio.png)

### Notes

- All communcation between the SM Exchange and MVH are RESTful API Calls
- All communcation between the SM Exchange and OH are RESTful API Calls
- Using a Queue to handle the parsing and translation of messages
  - Since this will be a longer running task, a queue provides a resilant way to handle messages
  - Keeps the action of recieving message light and fast
- Services that need mocked 
  - OH FHIR APIs
  - OH Messaging API
  - OH Atom Feed

## Sequence

### MHV to OH 

![Sequence diagram of MHV to OH](./assets/MHV%20to%20OH.v2.svg)

### OH to MHV 

![Sequence diagram of OH to MHV](./assets/OH%20to%20MHV.v2.svg)

## APIs needed

### MHV

- TBD

### Cerner

- OH Messaging API 2.0 docs: https://wiki.cerner.com/pages/releaseview.action?pageId=1962423118
- Understanding Messaging API Considerations doc: https://wiki.cerner.com/display/public/reference/Understand+Messaging+REST+2.0+Considerations+for+Consumers
- Info on translating from VA.gov user `CRNR200` id to OH FHIR Patient Identifier: https://dsva.slack.com/archives/CMT4MFPS6/p1701186719575159?thread_ts=1701184169.148299&cid=CMT4MFPS6

## Unknowns

- How does the OH Atom feed handle a failed push

