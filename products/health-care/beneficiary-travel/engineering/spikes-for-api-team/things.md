<!-- markdownlint-disable no-duplicate-heading -->

# Spike ideas

## Problem: Using Non BTSSS Identifiers to create a claim

When we creating a claim, the API requires using identifiers that are only found in the BTSSS (MS Dynamics) System. In using BTSSS specific ids for contact and appointment references, we are creating a tight coupling of systems; causing synchronization and performance issues.

### Risks

- This approaches causes multiple API calls
  - Adds latency and performance concerns
    - Potentially performant heavy calls that interact with other systems (VIA, MPI, ES, etc)
    - More calls over the TIC
  - Adds brittleness and forces the client to create a state that can be lost
- data sync issues
  - Puts the use cases around what to do if information doesn't exist or align with other systems in front and the Veteran vs it *just working out* since `we know all these already`

### Proposed Spike

What does creating an endpoint that takes only non btsss information look like and how does it effect the workflow of creating a claim?

### Additional Notes

- This idea behind this spike is to keep all Dynamics related information isolated to dynamics as possible
  - Travel Pay API does all the dynamics system validation.
  - The only exception should be the claim id, since that can/will be references later
- We can still use the existing add expense/submit endpoints, this is just for claim creation

### Risks this aims to address

- no need to sync data if the the API controls the query for data
- fewer Travel Pay API calls

### Questions to answer

- What information would this new endpoint need to accept?
  - This would be behave similar to the existing create a claim endpoint (`POST /claim`) endpoint in we accept the details we need accept the details needed to create the claim and return a claim number.
- What would we need to validate for appointment?
  - Can we reasonably validate in the context of the request?
  - How much of this can we off load the existing rules engine?
  - How can we do this async/in the work flow? Can this be done in the API call?
- What do we need to validate for the Veteran?
  - Can we reasonably validate in the context of the request?
  - How much of this can we off load the existing rules engine?
  - How can we do this in the workflow? Can this be done in the API call?
- What risks would be introducing into the workflow?
- If a claim fails validation (user/appointment not found); what would happen to the claim?  Denied? Manual review?

### Acceptance Criteria

- Build a proof of concept API route that takes non-btsss ids to create a claim
- Answer the above Questions
- Review findings on an engineering call with the enigneer team

## Problem: Creating a token without a valid ICN

There is an......

IDK enough details here to create a ticket

### Risks

### Proposed Spike

### Additional Notes

### Risks this aims to address

### Questions to answer

### Acceptance Criteria

- Answer the above Questions
- Review findings on an engineering call with the enigneer team

## Problem: API Versioning

The API versioning schema should be related to the endpoints and functional not our release cycle

### Risks

Updating endpoints without updated functionality can cause unneeded overhead and updating documentation

### Proposed Spike

Iterating on our url versioning strategy to align better with

- best practices
- Features (that break/change functionality) not release cycles

### Additional Notes

- We can use the existing structure until we settle this new strategy

### Risks this aims to address

- Too many endpoints being deployed without any meaningful change

### Questions to answer

- How can iterate on our version strategy to coincide with features, not releases
- How do we determine when to update the URL version?
- Do we have a deprecation strategy in place
- Is this documented in a public place?
- What technical updates do we need to do to make this happen?

### Acceptance Criteria

- [ ] Questions are answered
- [ ] The engineering leadership (OCTO + Team leads) agree on a path forward
- [ ] Any tickets are created for follow on work

## Problem: API endpoint to get `eligible appointments`

- Currently, we are running into UX problems were we are giving Veterans an option to submit a claim with a low chance of getting approved.
- How can we drive the creation of claims that are more likely to be successful

### Risks

- Currently we stand the risk of allowing creation of claims that we predetermine if they will be approved or not
- If we let Veterans create low-chance/invalid claims, we will
  - loose Veteran confidence
  - Create extra work for staff members
  - overwhelm the system with junk claims

### Proposed Spike

Investigate what we can do to help guide the clients to creating claims with a better chance of approval.

### Additional Notes

1. Are there low hanging fruit rules that we can enforce on claims submission?
2. How are we monitoring the number of claims that are rejected?
3. Do we have a report to what are the leading causes of claims getting rejected?
4. How can we create an endpoints that returns what appointments are eligible for claims creation?

### Questions to answer

- [ ] Is there a way to re-use the rules engine in the context of an API call
- [ ] Are there low hanging fruit that we can implement some logic around the claims submission or in a separate endpoint
- [ ] Can we create an endpoint that returns the eligible appointments for a time range that is performant enough to develop and release

### Acceptance Criteria  

- [ ] Sequence diagrams are created demostrating where in the flows this new endpoint could be called
- [ ] Questions are answered
- [ ] The engineering leadership (OCTO + Team leads) agree on a path forward
- [ ] Any tickets are created for follow on work
