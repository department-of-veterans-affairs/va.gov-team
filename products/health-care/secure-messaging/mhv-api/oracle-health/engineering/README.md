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

### Tech Stack

![Diagram](./assets/sm%20exchange.v1.drawio.png)



## Sequence

### MHV to OH 

![Sequence diagram of MHV to OH](./assets/MVH%20to%20OH.svg)

### OH to MHV 

![Sequence diagram of OH to MHV](./assets/OH%20to%20MHV.png)

## APIs needed

### MHV

### Cerner

## Unknowns

- How does the OH Atom feed handle a failed push


## Notes

- Initial load on first patient accesss
