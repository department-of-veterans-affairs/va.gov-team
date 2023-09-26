# The 'ratedDisability is Null' error fix proposal

## Context
- [The ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64394)
- [The rated disability API endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatedDisabilities)

## Axioms
In this scenario
- We have a rateABLE disability list.  a vet selects from this list.
- A vet has one or more ratED disabilities already associated with thier user by some downstream mechanism



### The Error
the following error: `form526.disabilities[].ratedDisability.isInvalid`, hencforth known as The Error

### What

- IF a veteran has an existing 'rated Disability', aka a disability that is approved, adjutacated, registered with the VA
  - THEN they submit a suplemental claim (526 requesting a change relative to this 'rated Disability')
    - THEN they receive this error

## WAIT! We need to talk about "The Reconciliation Black Box"

From the outset, it's important to note that if a vet's disability classification has been changed, before we can do anything code-wise we need to answer the question "who has the legal right to change this designation, and by what process?"  This problem manifests in multiple ways and with multiple apparent solutions.  For now, we will refer to any instance of this complexity as the **"Reconciliation Black Box"** for simplicity.

More clarity on this is given in each example in the upcomming **Why** section of this document
   
### Why

The Error is caused by a mismatch between the **rateABLE** disability in the supplemental form and the **ratED** disability in the vet's already-accepted previous submission.  From a purely technical standpoint, here are the ways that data is (could be) getting out of sync.  

- A Vet submits a claim for 'Disability X', which is accepted, adjudecated, and 'rated'.
- 3 months later, our downstream system changes the name / id / identifier of 'Disability X' to 'Disabilty X2'
- 6 months later...

- **Scenario 1**
- The Vet logs in to submit a suplemental claim.  Purusing the list of **rateABLE** disabilities, they do not see 'Disability X'.  They do however see 'Disability X2' and
  - IF they deduce the designation has changed and select 'Disability X2'...
    - Is it legal for them to submit a suplemental request for a Disability designation different than their previously adjudicated one?
      - IF yes, we can continue the form.
      - IF NO, we enter the **"Reconciliation Black Box"**, wherein we need to add something to make the form submittable, which could be human intervention
  - IF they DO NOT deduce the change in designation
    - We enter the **"Reconciliation Black Box"**, in this instance reconciling their understanding with the new paradigm, possibly by showing a support contact


[TODO] - START HERE and continue the brain dump
- **Scenario 2**
- submits a suplemental claim for 'Disaility X2' (the new designation) and gets The Error
  - This implies that our downstream services for rateABLE and ratED disabilities have been updated and synced, but the ratED disability associated with the vet's previous submission has not been update (i.e. is still listed as 'Disability X')
    - If this is the case, a backfil is required in the downstream service to reconcile this data, however we need to ask the question "can someone at EVSS legaly change a vet's disability designation?" This puts someone downstream into the '**Reconciliation Black Box**' flow.
 
  **Scenario 2**
  - 6 months later, the Vet submits a suplemental claim for **Disaility X** and get's The Error
    - This implies
      - IF the rateABLE service has been updated, then we have stale form data.  (i.e. the form saved the designation before it was updated and submitted it after it was updated)
        - If this is the case, we could (from a technical perspective) validate the form, and ask the vet to choose a different rateABLE disability from the list.  However, this this puts us in the '**Reconciliation Black Box**' flow.
      - OR if the rateABLE service has **not** been updated, then we are working with bad data and work is required in the downstream service to reconcile this.  (This is unlikely, as implies our Vet's ratED disability was updated but not the rateABLE disability list.
  

## The Reconciliation Black Box, part 2

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

