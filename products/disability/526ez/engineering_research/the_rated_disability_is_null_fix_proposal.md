# The 'ratedDisability is Null' error fix proposal

## Context
- [The ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64394)
- [The rated disability API endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatedDisabilities)

### Axioms
In this scenario
- We have a rateABLE disability list.  a vet selects from this list.
- A vet has one or more ratED disabilities already associated with thier user by some downstream mechanism

### The Error
the following error: `form526.disabilities[].ratedDisability.isInvalid`, hencforth known as The Error

## What is happening

- IF a veteran has an existing 'rated Disability', aka a disability that is approved, adjutacated, registered with the VA
  - THEN they submit a suplemental claim (526 requesting a change relative to this 'rated Disability')
    - THEN they receive this error

## WAIT! We need to talk about "The Reconciliation Black Box"

From the outset, it's important to note that if a vet's disability classification has been changed, before we can do anything code-wise we need to answer the question "who has the legal right to change this designation, and by what process?"  This problem manifests in multiple ways and with multiple apparent solutions.  For now, we will refer to any instance of this complexity as the **"Reconciliation Black Box"** for simplicity.

More clarity on this is given in each example in the upcomming **Why** section of this document
   
## How is this happening?

The Error is caused by a mismatch between the **rateABLE** disability in the supplemental form and the **ratED** disability in the vet's already-accepted previous submission.  From a purely technical standpoint, here are the ways that data is (could be) getting out of sync.  

- A Vet submits a claim for 'Disability X', which is accepted, adjudecated, and 'rated'.
- 3 months later, our downstream system changes the name / id / identifier of 'Disability X' to 'Disabilty X2'
- 6 months later...

- **Scenario 1**
  - The Vet logs in to submit a suplemental claim.  Purusing the list of **rateABLE** disabilities, they do not see 'Disability X'.  They do however see 'Disability X2' and
    - IF they deduce the designation has changed and select 'Disability X2'...
      - Is it legal for them to submit a suplemental request for a Disability designation different than their previously adjudicated one?
        - IF yes, we can continue the form.
          - They submit the form with 'Disability X2' and get **The Error**
            - This implies that their already **ratED disability** has not been updated to reflect the new designation.  This puts our downstream service in the **"Reconciliation Black Box"** where now they need to change the vet's designation, and probably let the vet know.
        - They submit the form with 'Disability X2' and everything works
          - we are happy!
        - IF NO, we enter the **"Reconciliation Black Box"**, wherein we need to add something to make the form submittable, which could be human intervention
    - IF they DO NOT deduce the change in designation
      - We enter the **"Reconciliation Black Box"**, in this instance reconciling their understanding with the new paradigm, possibly by showing a support contact

- **Scenario 2**
  - The Vet logs in to complete a supplemental claim they they started 8 months ago (before 'Disability X' was changed to 'Disability X2').  When they started the form, they got past the rateABLE Disability secion, so 'Disabilty X' is already saved on their form submission.  They submit their form and get The Error.
    - In this case we have stale form data.  We could prevent this by validating the form before submission and asking them to go back and select a valid rateABLE disability.  This puts us back into **Scenario 1**
  

## The Reconciliation Black Box, part 2

Now that we understand how we may end up in a scenario where we might have to stop and say "is this legal?", we can identify potential fixes.

### Fix 1: Your form has been flagged for review
In this version, we allow the vet to submit their form with the mismatched or changed Disability designation.  We put the form into a 'manual review' state where either they need to reach out to the VA adjudicators, or the adjudicators would need to reach out to them.

### Fix 2: Your form cannot be submitted, please call support**
In this version, we validate the form, catch the mismatch, and simply give them a customer support number.  This puts the onus on the Vet to resolve the discrepancy before continuing to submit their form.  (NOTE: this feels mean, i do not like this option)

### Fix 3: Everything is legal, we just need to adjust the data
In this version, there is not **"Reconciliation Black Box"**.  We are simply trusting the Vet to figure out how to select the correct disability from the list and submit it.  If they are confused, they can call the VA.  

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

#### Fix 3.1: Thanks for the form, but now we get The Error
In this sub-version, we have accepted the Vet's good faith best attempt, but run into The Error.  We now have a situation where the data provided to the **rateABLE** disabilities list does not match the vet's existing **ratED** disability.  This means our downstream service needs to reconcile their data

## Questions for Stake Holders

To proceed, we need to know, Assuming a Vet has a **ratED** disability and the **rateABLE** disability list has changed:
1. Can / should we allow them to select the "new" (updated) disability from our rateABLE disability list?
- IF yes
  - Do we go with a **Fix 1** option where we put the application in a new state, allowing a human to reconcile the data discrepancy?
- IF NO
  - What do we do?  It feels like we can't let them proceed with the form?

2. Does our downstream service partner (EVSS / LH) have the right to backfill / change the ratED disability for the vet?
  - IF YES
    - Have they?
  - IF NO
    - They will need some sort of reconciliation system to associated historical ratED disabilities with the new rateABLE supplemental claims.


*Micah: The fix we proposed is becoming too narrow as it's based around one specific scenario. Expectations of the number of application errors this will solve are not realistic at this point. In the end, the backup method may be the best solution for the errors related to rated disabilities*
