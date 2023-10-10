# Proposal to remove Rated Disability Validation

Our application is encountering the following error in the 526 form submission flow:
`form526.disabilities[0].ratedDisability.isInvalid`

This error accounts for ~50% of our 526 errors.

## The affect field
TODO: ???
possibly `ratedDisabilityId` or `diagnosticCode`?  EVSS should be able to tell us exactly what value is failing, if we can't figure it out first.  It seems like we may actually be failing on two validated fields, as seen in this example:

```
"[{\"key\"=>\"form526.disabilities[0].ratedDisability.isInvalid\", \"severity\"=>\"ERROR\", \"text\"=>\"The rated disability being claimed for increase was not found for Disability\"}, {\"key\"=>\"form526.disabilities[1].ratedDisability.isInvalid\", \"severity\"=>\"ERROR\", \"text\"=>\"The rated disability being claimed for increase was not found for Disability\"}}]"
If you look carefully you notice that they send our error twice
form526.disabilities[0].ratedDisability.isInvalid
form526.disabilities[1].ratedDisability.isInvalid
The difference is the number in the square brackets, which implies that these are two actual valid failures, meaning we are failing two validations.  THey do not tell us exactly which key (value name) is failing.  However, since we have two options, and two failures, it follows that both values are being  validated and need to allow for an empty string.
```

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
