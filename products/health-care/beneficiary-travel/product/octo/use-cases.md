# Use Cases For API MVP 

<!-- TODO:

- [ ] analytics for phase 1
- [ ] use cases for phase 2
- [ ] analytics for phase 2
- [ ] proof read
- [ ] send over
 -->

## Phase 0 - Infrastructure

As an API, 
This system should support a level of System to System Authentication and Authorization, 
So that various clients can utilize the API 

As an API, 
This system should defer Veteran Validation to the client systems
So that this API is not integrating with multiple identity providers  

As an API, 
we should have metrics on which client is making any given claim within API
so that we can have traceability and metrics available 

As an API, 
we should establish a client onboarding process
so that we a way to onboard new clients

As an API
we should be using Swagger as our documentation
so that we can share our specs with teams 

As an VA API
we should be hosting documentations in Lighthouse Developer Hub
so that our documentation can be available in a centralized location.

As an API, 
there should be a continuous deployment / continuous integration pipeline established
So that we can deliver features without having to wait for the next release cycle

As an API
there should be a test harness that supports unit, e2e and other tests that needed
so that we ensure that regression does not happen we new features. 

As an API
there should be API versioning schema developed
so that we can iterate on features and not have to be concerned with backwards compatibility

As an API
there should at least two lower environments, dev and staging
so that clients can test their integrations

As an API
there should be metrics for latency and errors
so that we have observability into the system when we go live

As an API
we should establishing an architecture to handle async processing of claims
so that we can make better claims while keeping calls into the API light and fast. 

## Phase 1 - Simple Claim (porting over existing functionality, plus a little extra)

As a client application, 
I should be able to submit a milage only, round trip, from my house claim
so that we do not lose functionality 

As a client application, 
I should be able to query for the status claims for a Veteran
so that I can adjust the UX appropriately to not give the option to submit multiple claims

As an API, 
I should be able to `hold` onto a claim submission until after the appointment is checked out
so that the claim has a hiring chance of getting auto-adjudicated 

As an API, 
I should allow 1 claim to be submitted per day per facility
to help reduce waste, fraud and abuse


## Phase 2 - Eligibility

As an API, 
Given a Veteran ICN,
I should be able to determine if the Veteran is eligible to submit a Travel Claim
So that client apps can only give the ability to submit to eligible Veterans 

As an API, 
Give a Veteran ICN and Appointment(s)
I should be able to determine if the appointment/ICN combination is eligible

As an API, 
Given a Veteran ICN, 
I should be able to tell th status of the Veterans BTSSS account (has direct deposit set, has an account, etc)
so that client apps can give a better UX for the Veterans


## Phase 3 - More types of claims
