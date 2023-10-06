# Proposal to remove Rated Disability Validation

Our application is encountering the following error in the 526 form submission flow:
`form526.disabilities[0].ratedDisability.isInvalid`

This error accounts for ~50% of our 526 errors.

## The affected field
Possibly `ratedDisabilityId` or `diagnosticCode`?  EVSS should be able to tell us exactly what value is failing, if we can't figure it out first.  It seems like we may actually be failing on two validated fields, as seen in this example:

```
"[{\"key\"=>\"form526.disabilities[0].ratedDisability.isInvalid\", \"severity\"=>\"ERROR\", \"text\"=>\"The rated disability being claimed for increase was not found for Disability\"}, {\"key\"=>\"form526.disabilities[1].ratedDisability.isInvalid\", \"severity\"=>\"ERROR\", \"text\"=>\"The rated disability being claimed for increase was not found for Disability\"}}]"
If you look carefully you notice that they send our error twice
form526.disabilities[0].ratedDisability.isInvalid
form526.disabilities[1].ratedDisability.isInvalid
```

The difference is the number in the square brackets, which implies that these are two actual valid failures, meaning we are failing two validations.  THey do not tell us exactly which key (value name) is failing.  However, since we have two options, and two failures, it follows that both values are being  validated and need to allow for an empty string.

## Proposal
EVSS will remove presence validations on this value
We want to allow for null values on this submission.

## Rational
- VBA does not use these codes to process their form intake.
- The mechanism that validates the codes is comming out of sync with existing ratedDisabilities, meaning that this is not a valid failure
- Given that EVSS is being deprecated, we are proposing that this endpoint allows for empty or null values, rather than completely removing the validation, which might have broader, unitended consequenses.

## The Work

### For EVSS
Update their validations on 
- /form526/v2/getPDF
- /form526/v2/submit

To allow for empty values

### For DBX 
Update our submission logic to take the following steps
- catch this error after an intial submission attempt
- modify the form to exclude this data, replacing it with an empty string
- Reattempt our form submission
  - includes PDF generation and final submission.


# DISCOVERY - The 'ratedDisability is Null' error fix proposal

## Context
- [The ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64394)
- [The rated disability API endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatedDisabilities)

### The Error
the following error: `form526.disabilities[].ratedDisability.isInvalid`, hencforth known as The Error

## What is happening

- IF a veteran has an existing 'rated Disability', aka a disability that is approved, adjutacated, registered with the VA
  - THEN they submit a suplemental claim (526 requesting a change relative to this 'rated Disability')
    - THEN they receive this error
   
## How is this happening?

When a veteran submits a suplemental claim, they are presented with a representation of the rated disability they are attempting to supplement.  If, in the time since this disability was rated, the classification of this disability has changed, then we will get The Error when we attempt form submission.  

## How do we fix it

We need to normalize the data.  This could happen in several ways.

### Option 1: Ask the Vet to make the change

When they are filling out the submission form, at the appropriate point in the flow we inform them that the designation has changed and they need to 'select' the disability they are applying in relation to.  This would presumably be a list of 1 option, or even just an aknowledgement check.  In this way, they have 'updated' their classification to match the new paradigm.  When they submit the form, their new designation will either 
  - match their previously rated Disability because someone at VA has changed it
  - not match their previously rated Disability and we overwrite it with their new selection
  - not match their previously rated Disablity and we put their application into a 'needs review' state or something similar.

### Option 2: We Let the VA make the change ahead of time

When rated disability codes, descriptions, or designations change, the Vet's rated Disability is passed on to the VA for updating.  In this way, the onus of making the change falls on the VA.  In this scenario we would presumably want to alert the vet of this change, e.g. via email.  Now, when they are filling out their supplemental claim they see the **new** rated disability, and when they submit their form everything matches.

### Option 3: We automagically make the change when the problem occurs

In this option, we present the vet with their familiar rated disability description, OR, we inform them that by submitting this form they are changing their rated Disability to the new description.  Either way, when they submit the form we would
  - check for a mismatch
  - use some sort of 'equivalency service' to switch over their rated disability
    - this requires discussion of who would own it (probably our downstream partner)
  - accept the form submission and everything works.

### Option 4: We don't change the rated disability

In this option, we simply prevent the problem by implementing some process by which a veterans existing rated disability remains static and supplemental claims create new rated disabilities.  This is a potentially expensive and labor intensive process.
