# [WIP] SM Exchange


## TODOs

- [ ] Add Threading to the model
- [ ] Add Messaging pool handling to the sequence diagrams
- [ ] Add FHIR APIs
- [ ] Add teams responsbilities 

## Assumptions (Need to be validated and Open to challenged)

- ✅ MHV is the source of truth for all Messaging data
- We need to map OH data into our own model to support capabilities that are not supported by OH
- Between the FHIR APIs and OH SM APIs we have all the data we need
- ✅The existing MHV SM API (the one used by va.gov today) can be reused for the SM Exchange
  - Or atleast thats the goal
- ✅OH is sending data to an URL via a webhook in an Atom feed format
- The only reason we are sending data back to OH is so that the message shows up in the OH clinician UI
- The correct data is available through the process (example: we can get the facility information at the correct time)
- ✅The SM Exchange and MHV and OH communicate using RESTful APIs

## Technical Measures of Success

- The SM Exchange is an isolated system between MHV and OH
- The Messaging backend (MHV) is fully abstracted away from the SM Exchange
- The SM Exchange does not have any knowledge or dependency on MHV database structure or the OH database structure
- The architecture is scalable, monitorable and resilent 

## MVP Target

- create an endpoint that can be hit with a cURL command and sends a message to OH
- create an endpoint that can consume OH Atom feed and that can upload a message to the MHV

## Unknowns to work through

###  Auth between MHV and SM Exchange

- With the MHV APIs and SM Exchange being different systems, how are we going authentication? 
- Does the Existing MHV API support system to system authencitation?

### OH ATOM Feed

- Whats the first step in getting a webhook added? 
- How does the OH Atom feed handle a failed push?
  - We found a thing called `msvc_retry_message_publication`, how we can configure this?
- With messages getting retried, we need to figure out how to handle a duplicate message being sent
  - This should be an extreme use case, and doesn't need to be solved this iteration
  - Does the existing MVH API (the one used by va.gov) do any duplicate message handling? Should it?
  - Ideas include:
    - query the  MHV API with OH MessageId
    - The MHV API does some locking/checking before inserting into the MHV datastore

### Threads Creation

- For a new message when does the tread Id get created?
  - How can get a Thread Id? 
    - MVH API? 
      - API endpoint that accepts a OH Message Id and returns a MHV Core Thread id
    - Asking for it <- prefferred ->
    - Sending it in with out and Core MHV handles that


### Historical Data

- For the migration, could we use the same feed processor in the SM Exchange
  - We should, see [below](#create-session)
- How are we determining a Patient is new?



## High Level diagram

![High level diagram](./assets/MHV%20Oracle%20Health%20Integrations%20-%20Messaging%20(1).png)

## MVP Diagram

### Goals

- Provide infrastructure for the pipeline between OH and MHV
- Send a message to OH (or a cURL)
- Send a message from OH to MHV 

### More detailed diagram

![Diagram](./assets/sm%20exchange.v5.drawio.png)


### Tech stack

- AWS Lambdas, using JavaScript
- Queue: Existing queu technology

### Notes

- All communcation between the SM Exchange and MVH are RESTful API Calls
- All communcation between the SM Exchange and OH are RESTful API Calls
- Using a Queue to handle the parsing and translation of messages
  - Since this will be a longer running task, a queue provides a resilient way to handle messages
  - Keeps the action of recieving a message light and fast
- * for the connection between the SM exchange and MHV, there might be a need a queue to retry failures
- SM Exchange does not know about threads, that is completely handled in the MHV API Data Layer
- Services that need to be mocked 
  - OH FHIR APIs
  - OH Messaging API
  - OH Atom Feed

## Sequence

### Create Session 

![Sequence diagram of Creating a new Session](./assets/Create%20Session.v1.svg)

### MHV to OH 

![Sequence diagram of MHV to OH](./assets/MHV%20to%20OH.v2.svg)

### OH to MHV 

![Sequence diagram of OH to MHV](./assets/OH%20to%20MHV.v2.svg)

## APIs needed

### MHV

> Do not have docs yet

- Create new Message

### Cerner

- OH Messaging API 2.0 docs: https://wiki.cerner.com/pages/releaseview.action?pageId=1962423118
- Understanding Messaging API Considerations doc: https://wiki.cerner.com/display/public/reference/Understand+Messaging+REST+2.0+Considerations+for+Consumers
- Info on translating from VA.gov user `CRNR200` id to OH FHIR Patient Identifier: https://dsva.slack.com/archives/CMT4MFPS6/p1701186719575159?thread_ts=1701184169.148299&cid=CMT4MFPS6

### TODO: Determine FHIR APIs