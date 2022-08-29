# Travel pay Details [WIP]

## Architecture Diagram

![diagram](./assets/Travel%20re-embursement.0.png)

## Landing Date

MVP Targeting Fall/Winter 2022


## Happy Path (MVP)

- During the check in flow, a veteran who is doing a `round trip`, `mileage only` travel from their `home address` can submit the BTSSS claim for the them automatically.
- This claim should show up in their current claims list. 
- Should not increase staff workload

## Current assumptions

- We are displaying the question for all users. 
- During the check in process, We have access to the Veterans ICN, the veterans home address and the facility address. 
- No staff facing enhancements are happening for MVP 
- Little flexibility in the BTSSS API, assumed  none until something is needed. 

## Small Questions

- Do we want to restrict this to a clinic for testing?

## Outstanding Questions

>ASKED IN EMAIL ON 8/26

1. We didn't see anything in the docs about mileage. We know a mileage amount from the Veteran's home, and the facility is needed. Does the BTSSS endpoint handle that calculation? Or that is up to the client (our team) to handle generating that value. If it is on our team, how do we pass the mileage to the API? 
1. Does a claim made in this system show up in the Travel Pay Benefits portal for the Veteran?
1. Assumption to confirm; The corresponding appointment must have a status of [checked-out], or the system would send the claim to a manual review process. We would rather not submit claims that would increase the manual review process.
1. Once a claim is submitted, we get back a [claimNumber]. Is there a way to get the status of that claim (using the [claimNumber] or something else) ?
1. Word on the street is that there is an endpoint that we can use to check a Veteran's eligibility status (Do they have an account set up, Is direct deposit setup, etc.) Does that exist? If so, can we have some docs? 


> not asked yet

1. what headers does the POST to submit a claim need?
1. What is our `clientNumber`?
1. Does the BTS3 have functionality in place to hold a claim for ~36 hours before processing? If not, is that going to be built into BTS3 or would Patient Check In need to build that on our side?
1. Do you have a list of sites where Veterans are not eligible for travel pay. For example, Manila, Philippines.
1. Do Veterans receive a confirmation email when they create a new claim in BTSSS? Or, are there any other notifications such as a text message? If not, at what point do they first hear back about the status of their claim? And, is the notification an email, text, letter, etc? Within Patient Check In, to the extent possible, we'd like to be able to set expectations on when or how Veterans will be notified about next steps.
Do Veterans receive a one-way reimbursement for showing up for a cancelled appointment? (For example, this was mentioned from the Corpus Christi travel office.)
1. What are the failures from the API/Flow/Process that we should be expecting
1. If an appoinment needs to be [checked-out] If so, when does that status get flipped to [checked-out]?
1. How long does a VEIS token live? Can we reuse it for different Veterans?
1. I feel like we should roll this out per clinic. Thoughts?  

## Decisions 

For the MVP we are 

- Keeping the process linear and failing out fast if anything steps outside the happy path



### POST for token 

curl --location --request POST 'https://login.microsoftonline.us/f7c49e36-971b-42c7-b244-a88eed6c0bf6/oauth2/v2.0/token' \
--form 'grant_type=" client_credentials"' \
--form 'client_id=" <your SPN client id provided by VAEC>"' \
--form 'client_secret=" <your SPN client secret provided by VAEC>' \
--form 'scope="4a77476c-ceed-45db-ad7e-ac2bbbc4f72a/.default"'


## Answers

**Q: - What are the time restrictions for putting a claim in. (e.g. submit a claim before an appointment)**
**A:** - The appointment has to have a `checked-out` state

## Iteration Two 

- Asyncronous Calls
- Performance Tweaks 
- Filter Eligilbity 
- Better feedback for veterans (textin/portal)
- Add more expenses to the claim