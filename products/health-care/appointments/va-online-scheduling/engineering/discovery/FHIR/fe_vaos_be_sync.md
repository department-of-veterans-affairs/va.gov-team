# FE - BE FHIR new appointment flow issues to resolve

As of 4/27/20

## Locations can't currently be filtered by type of care a facility offers

### Proposed solutions

1. Extend the FHIR spec with `type` schema from the v4 FHIR spec
   - FE can filter out facilities that don't offer certain types of care at all

#### Assumptions
- There's a mapping of the types that will be used on Location to the current types of care defined for VAOS

### Status

Solution 1 amenable to both BE and FE, but not explicitly agreed upon

## Locations can't currently be filtered by the VATS defined request and direct supported flags

### Proposed solutions

1. Attempt to filter Locations down from HealthcareServices available
   - Potentially pulls down too much data to be workable
   - Unclear how it would apply for appointment requests
2. Move the VATS criteria check to a resource after Location
   - Forces users who are trying to schedule at a facility that offers a type of care, but doesn't support online scheduling of it to make an extra click (somewhere between 0 and 16% of users)
   - Unclear if this is acceptable to Lauren or other stakeholders
3. Extend the Location resource to support VATS flags
   - Would be an array of data, one item for each Location `type`, with two flags each
   - BE is concerned about a conceptual conflict with FHIR schedulable resources
   - BE prefers to avoid non v4 related FHIR spec extensions
4. Create new non-FHIR endpoint (or adapt existing one) to fetch flags for all facilities at a site, call that endpoint in parallel with Location resource fetch
   - Poor API consumer experience, confusing to future consumers

#### Assumptions
- There's a mapping of the types that will be used on Location to the current types of care defined for VAOS

### Status

Unresolved. FE team prefers 3, BE prefers something other than 3. 1 would likely be acceptable to both, but we can't currently tell if it's feasible due to outstanding questions around appointment requests and issues with VSP staging.

## VA online scheduling policy checks are done in Appointment resource, and the FE needs them to happen earlier

### Proposed solutions

1. Create new non-FHIR endpoint to consolidate eligibility criteria, including VATS supported flags
   - UX is basically the same as before
   - Potentially confusing to future clients, who must consume FHIR and non-FHIR endpoints for scheduling
2. Prevent the return of HealthcareService resources if one of these criteria fails
   - The service could return an appropriate 4xx status code and include the reason in the `OperationOutcome` resource.
   - Would require adding a patient search parameter to HealthcareResource, which it appears will already be happening
   - UX is basically the same as before, but is more inline with the model of only returning resources that are actionable
      - This model was stated as the preferred direction by Stephen Barrs, Lauren A, and Mike R in Tampa in 1/2020
   - Unclear how this would apply to requests

#### Blockers
- It's very hard to map out a FHIR-based path for this without an understanding of the appointment request flow

### Status

Unresolved. FE prefers 2, but it's unclear if the BE believes this to be a good direction and/or feasible
