# Problem: Using Non BTSSS Identifiers to create a claim

When we creating a claim, the API requires using identifiers that are only found in the BTSSS (MS Dynamics) System. In using BTSSS specific ids for contact and appointment references, we are creating a tight coupling of systems; causing synchronization and performance issues.

This is an another push to iterate on the existing portal centric architecture into a more API centric architecture.

## Risks

- Depending on where the source ID comes from, may require more work from product teams
- This approaches causes multiple API calls
  - Adds latency and performance concerns
    - Potentially performant heavy calls that interact with other systems (VIA, MPI, ES, etc)
    - More calls over the TIC
- data sync issues
  - Puts the use cases around what to do if information doesn't exist or align with other systems in front and the Veteran vs it *just working out* since `we know all these already`

## Proposed Spike

What does creating an endpoint that takes only non btsss information look like and how does it effect the workflow of creating a claim?

Something like

```
POST /Claim

Params

- ICN
- Appointment identifier
- Appointment source (EHR/VistA)

Returns
A claim
```

## Additional Notes

- This idea behind this spike is to keep all Dynamics related information isolated to dynamics as possible
  - Travel Pay API does all the dynamics system validation.
  - The only exception should be the claim id, since that can/will be references later
- We can still use the existing add expense/submit endpoints, this is just for claim creation

## Risks this aims to address

- no need to sync data if the the API controls the query for data
- fewer Travel Pay API calls

## Questions to answer

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

## Acceptance Criteria

- Build a proof of concept API route that takes non-btsss ids to create a claim
- Answer the above Questions
- Review findings on an engineering call with the enigneer team
