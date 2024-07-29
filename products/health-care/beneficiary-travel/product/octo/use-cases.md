# Use Cases For API MVP 

## Phase 0 - Infrastructure

```
As an API, 
we should support a level of System to System Authentication and Authorization, 
So that various clients can utilize the API. 
```

```
As an API, 
we should defer Veteran Validation to the client systems,
So that this API is not integrating with multiple identity providers.  
```

```
As an API, 
we should have metrics on which client is making any given call within API,
so that we can have traceability and metrics available.
```

```
As an API, 
we should establish a client onboarding process,
so that we a way to onboard new clients.
```

```
As an API
we should be using Swagger as our documentation
so that we can share our specs with teams 
```

```
As an VA API
we should be hosting documentations in Lighthouse Developer Hub
so that our documentation can be available in a centralized location.
```

```
As an API, 
there should be a continuous deployment / continuous integration pipeline established
So that we can deliver features without having to wait for the next release cycle
```

```
As an API
I should have the ability to use a feature toggle based rollout strategy
so that updates and changes can be controlled without deployments
```

```
As an API
there should be a test harness that supports unit, e2e and other tests that needed
so that we ensure that regression does not happen we new features. 
```

```
As an API
there should be API versioning schema developed
so that we can iterate on features and not have to be concerned with backwards compatibility
```

```
As an API
there should at least two lower environments, dev and staging
so that clients can test their integrations
```

```
As an API
there should be metrics for latency
so that we have observability into the system when we go live
```

```
As an API
we should establishing an architecture to handle async processing of claims
so that we can make better claims while keeping calls into the API light and fast. 
```

```
As an API team
we should have metrics around success calls vs error'd out calls
so that we can monitor our systems
```

```
As an API
we should be able to maintain a p90 of under 3 secs
so that we can provide a fast modern experience. 
```

## Phase 1 - Simple Claim (porting over existing functionality, plus a little extra)

```
As a client application, 
I should be able to submit a milage only, round trip, from my house claim
so that we do not lose functionality 
```

```
As a client application, 
I should be able to query for the status claims for a Veteran
so that I can adjust the UX appropriately to not give the option to submit multiple claims
```

```
As an API, 
I should be able to `hold` onto a claim submission until after the appointment is checked out
so that the claim has a hiring chance of getting auto-adjudicated 
```

```
As an API, 
I should allow 1 claim to be submitted per day per facility
to help minimized rejected claims
```

```
As an API
I should be able to trace a claim created back to its client
so that troubleshooting is possible
```

```
As an API team
We should be able to see how the lifecycle of a claim, from submission to paid including metrics, atleast time to paid
so that we have visibility into claim times 
```

```
As an API team, 
we should have alerting on critical errors  that are sent to the support team
so that we can triage production problems
```

```
As an API team, 
we should be able to see how many claims created by the API are denied, with the reason why
so that we can plan future features to help reduce these denied claims (if any)
```
## Phase 1.1 Iteration On Query

> Note, the query for status of the claim should support pagination and filtering

```
As an API
I should provide query for status of claim results in a paginated manner( accepting a current page, limit per page, etc. )
so that this limits the load on both the client and our systems
```

```
As a client application, 
I should be able to query for the status claims for a Veteran and filter by a client provided list claim statuses
so that the client application can only show what the Veteran wants
```

```
As a client application, 
I should be able to query for the status claims for a Veteran and filter by a client provided date range
so that the client application can only show what the Veteran wants
```

## Phase 2 - Eligibility

```
As an API, 
Given a Veteran ICN,
I should be able to determine if the Veteran is eligible to submit a Travel Claim
So that client apps can only give the ability to submit to eligible Veterans 
```

```
As an API, 
Give a Veteran ICN and Appointment(s)
I should be able to determine if the appointment/ICN combination is eligible
```

```
As an API, 
Given a Veteran ICN, 
I should be able to tell th status of the Veterans BTSSS account (has direct deposit set, has an account, etc)
so that client apps can give a better UX for the Veterans
```

```
As an API 
we should be able to see a report/summary of reasons why a Veteran isn't eligible based on the API call 
so that we can plan future features (if any)
```

## Phase 3 - More types of claims


// TBD, lets not get too far ahead of ourselves