# Travel pay Details [WIP]

## Architecture Diagram

![diagram](./assets/Travel%20re-embursement.0.png)

## Landing Date

MVP Targeting Fall/Winter 2022

## Happy Path

- DUring check in a veteran is doing a round trip, mileage only travel from their home address, we want to submit the BTSSS claim for the them automatically. 

## Current assumptions

- We are displaying the question for all users. 
- Keeping the process/api call syncronous for the first version 
- We have access to the Veterans ICN, the veterans home address and the facility address
- No staff facing enhancements are happening for MVP 

## Big questions

- How can we programactally check the status of a claim? 
- What are the time restrictions for putting a claim in. (e.i. submit a claim before an appointment)
- What are the failures that we can expect?

## Small Questions

- Do we want to restrict this to a clinic for testing?
- How are calculating and displaying the mileage the Veteran is claiming?
- Where in the API can we submit the milage amount? 
- How long does a token live? Can we reuse it? 

## Decisions 

For the MVP we are 

- Keeping the process linear and failing out fast if anything steps outside the happy path

## Iteration Two 

- Asyncronous Calls
- Performance Tweaks 
- Filter Eligilbity 
- Better feedback for veterans (textin/portal)