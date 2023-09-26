# The 'ratedDisability is Null' error fix proposal

## Context
- [The ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64394)
- [The rated disability API endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatedDisabilities)

### The Problem
the following error: `form526.disabilities[].ratedDisability.isInvalid`

### What

- IF a veteran has an existing 'rated Disability', aka a disability that is approved, adjutacated, registered with the VA
  - THEN they submit a suplemental claim (526 requesting a change relative to this 'rated Disability')
    - THEN they receive this error
   
### Why

Here's what's happening

- A Vet submits a claim for Disability X
- 3 months later, our downstream system changes the name / id / identifier of 'Disability X' to 'Disabilty X2'
- 6 months later, the Vet submits a suplemental claim for Disaility (??)
  - This is where the scenarios diverge.  If the supplemental claim is submitted with 'Disability X2', that would imply a few things:
    - The downstream service that provides our list of ratable Disabilities (list to choose from) has been updated with the new designation
    - The downstream record of the Veterans claim **has not been updated** to match this new designation.
    - In this case, there is no amount of 526 flow validation that will fix this.  The downstream system is responsible for but has not done the requisite backfill of the veterans disability record with the new designation.
  - Alternatively, if the supplemental claim is submitted with 'Disability X' (the original designation) then there are a few posibilities
    - **1** The rateable Disability endpoint has not been updated, but the vet's rated disability record has.
      - If this is the case, then this is a problem that must be address by a backfill in the downstream system
    - **2** Both the ratable Disability endpoint and the vets rated disability record have been updated, but the form data associated with the veterans submission has grown stale, i.e. they started the form _before_ the change over, and submitted it after
      - If this is the case, then this is a problem we could address in the 526 flow with a validation / UX update.
     
## Critical Take aways

If we can get difinitive answers to the two following questions (yes or no, should be simple) then we will know exactly how to proceed.

### Question 1:

If a requests comes in with Disability X and Disability X is NOT IN THE EVSS SYSTEM AT ALL, is this the error that will be returned? 

#### What does this tell us?

In this scenario, we know that our form is submitting stale data.  If Disability X is not in the EVSS system at all, then we know that there is no way it could have been presented as an option to the veteran in the ratable disability selection.  If the answer here is yes, we should add the Validation / UX change.

### Question 2:

If a request comes in with Disability Y and Disabilty Y is IN THE SYSTEM BUT NOT A RATED DISABILITY ASSOCIATED WITH THIS VETERAN, is this the error that will be returned?

#### What does this tell us?

In this scenario, we know that either the rateable disability options changed but our vet's rated disability record did not, or vice versa.  This means that the solution is a backfil of EVSS data, and they are the owners of this bug.

### Summary

If our downstream services are changing data but not normalizing it, then there is nothing we can do prevent this error.  We need a universal and static data point to match these disability.  'Guess work' solutions like "knee pain SOUNDS like lower knee pain, so let's submit that instead" would be prohibitively dangerous to attempt.

## If we did want to add validation

When loading the veteran facing review page, we will first validate their ratedDisablity selection.  If their previous selection is no longer a valid option, we will prompt them to return to this step of the form and reselect their disability

- this requires a fundamental UX change, and therefore we'll need to go through the collab cycle
- The technical requirements of this option are relatively simple.  There are several ways to implement, but a naive high level flow could be
  - Stand up a "validate form" endpoint. We already have the methods (maybe not enough) for validating form data/values so we'll be able to use much of the previous form validation pre submission. Some unrelated items such as the InProgressForm and ITF expirations already need to be checked before the final review and submit page
  - send it the rated disability selection (and whatever else we wnat to validate in the future)
  - pull the ratedDisability list from EVSS (or wherever)
    - if this is too slow, we could consider a caching solution
  - check for inclusion of our selection in that list
 
This version, while not technically complex, will take a while to get done due to the UX change. Without going into too much scope creep, we'll need a way to direct Veterans back to the page(s) that need further review and updating i.e. links on the R&S page to go to those parts of the form needing to be changed

![Validation with new UX flow](https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/4ad02e53-a02e-4ecf-af87-e9019242357d)

## Action Items
- Ask these two questions of EVSS
  - If a requests comes in with Disability X and Disability X is NOT IN THE EVSS SYSTEM AT ALL, is this the error that will be returned?
  - If a request comes in with Disability Y and Disabilty Y is IN THE SYSTEM BUT NOT A RATED DISABILITY ASSOCIATED WITH THIS VETERAN, is this the error that will be returned?

