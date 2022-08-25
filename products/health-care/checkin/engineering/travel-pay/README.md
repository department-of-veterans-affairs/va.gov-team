# Travel pay Details [WIP]

## Architecture Diagram

![diagram](./assets/Travel%20re-embursement.0.png)

## Landing Date

MVP Targeting Fall/Winter 2022

## Happy Path (MVP)

- During the check in flow, a veteran who is doing a `round trip`, `mileage only` travel from their `home address` can submit the BTSSS claim for the them automatically.
- This claim should show up in their current claims list. 

## Current assumptions

- We are displaying the question for all users. 
- During the check in process, We have access to the Veterans ICN, the veterans home address and the facility address. 
- No staff facing enhancements are happening for MVP 

## Big questions

- How can we programactally check the status of a claim? 
- What are the time restrictions for putting a claim in. (e.g. submit a claim before an appointment)
- What are the failures that we can expect?
- What does the feedback for a Veteran look like? (e.g. "I have submited a claim for this trip, now what?")
- How are calculating and displaying the mileage the Veteran is claiming?

## Small Questions

- Do we want to restrict this to a clinic for testing?
- Where in the API can we submit the milage amount? 
- How long does a VEIS token live? Can we reuse it? 

## Decisions 

For the MVP we are 

- Keeping the process linear and failing out fast if anything steps outside the happy path

## Iteration Two 

- Asyncronous Calls
- Performance Tweaks 
- Filter Eligilbity 
- Better feedback for veterans (textin/portal)
- Add more expenses to the claim