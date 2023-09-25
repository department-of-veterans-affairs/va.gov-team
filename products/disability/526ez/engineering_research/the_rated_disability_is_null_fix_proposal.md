# The 'ratedDisability is Null' error fix proposal

## Context
- [The ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/64394)
- [The rated disability API endpoint](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/form_526/getRatedDisabilities)


### The Problem

The following error is one of our most-raised errors in the 526 submission flow:

`form526.disabilities[].ratedDisability.isInvalid`

Kyle Soskin describes how this issue is caused:

```
This issue happens because we query and store the result, of the veterans rated disabilities, and then never re-check or requery that before submitting, This CURRENTLY causes an error in auto-establishment submission AND the backup paper submission. HOWEVER soon (in a few sprints) this will not cause an error in the backup paper submission path.
Example situation that causes this error:
01/20/2023 - Vet starts filing 526 claims
01/20/2023 - During that filling out of the form, we query for rated disabilities for them to select, they select "Leg Pain"
01/20/2023 - We save the in-progress form for the vet so they can come back later to fill it out if they dont go the whole way to submission in this session, including the rated disability, "Leg Pain"
01/20/2023 - Vet abandons form half way
06/01/2023 - Vet comes back to complete the form, previously saved in-progress values populate so they can pickup where they left-off
06/01/2023 - Vet completes form and presses "Submit", the value for the rated disabilty string is "Leg Pain", however, in the time from when they started (01/20/2023), to now (06/01/2023), their rated disability was changed from "Leg Pain" to "Lower Leg Pain",  IN THE VA's system, so it gives that error (edited)
```

TL;DR - when a vet selects a disability, leaves their form for a while, then comes back to submit, the downstream data around that disablity has changed, rendering their form stale.

## Possible Solutions
There basically 3.5 ways to solve this:

### The Backup path way

In this version, we attempt to capture these errors or premept them with validation, resulting in a submission that we know will not pass the automated submission process.  IN this case we forgo any further submission and push it to the backup path, aka a human processed, paper submission.  This will work as the backup path submission **does not share this validation** and the submission will eventually be 
reconciled by a human being.

A version of this is already in place.  We are recognizing a subset of errors as 'non-retryable'.  This error falls into that category, and so this "solution" is more of a stop gap.  Ultimatly the paper backup submission path is more expensive to process, so we consider this option suboptimal.
- TODO: validate that this is true ^^
- TODO: diagram this flow

### The pre-submission validation fix (Veteran UX change)

In this version, when loading the veteran facing review page, we will first validate their ratedDisablity selection.  If their previous selection is no longer a valid option, we will prompt them to return to this step of the form and reselect their disability

- this requires a fundemental UX change, and therefore the full colab cycle will be advisable
- The technical requirements of this option are relatively simple.  There are several ways to implement, but a naive high level flow could be
  - stand up a "validate form" endpoint (if one doesn't exist)
  - send it the rated disability selection (and whatever else we wnat to validate in the future)
  - pull the ratedDisability list from EVSS (or wherever)
    - if this is too slow, we could consider a caching solution
  - check for inclusion of our selection in that list
 
This version, while not technically complex, will take a while to get done due to the UX change.

[TODO] - diagram this flow

### The post-submission automagical fix (non-Veteran facing)

In this version, we allow a veteran to submit their form as usual.  When we enqueue the Form submission, we add a step that will do an inclusion check (similar to the one in the previous option) of our selection against the rated disability list.
Assuming we identify a mismatch, we will modify the veterans submission using a yet-to-be implemented service.  Once the formm is corrected, it can be submitted.  This implementation is more technically complex and would require the following

- validation logic in the 526 submission worker
- Form data correction logic (probably in a new service).  At a naive, high level, this could work something like this
  - We need some bit of data to hook into here to allow us to stay in sync with our down stream source of truth, e.g. a `uuid` for rated disabilities.
    - TODO: does such a thing exist?  does it never change?  Are we storing it on the `inProgressForm` model?  Can we?
  - We cannot do this with string matching on the name.  We need a hard, solid, static data point to operate on, otherwise we risk submitting the wrong disability, which would be a disaster for the Vet and the VA.

[TODO]: what do we actually store on `inProgressForm`?  Could we change that in a way that would allow us to stay consistant with the underlying source of truth?
**The rated disability response object**
```
{
  "data": {
    "attributes": {
      "rated_disabilities": [
        {
          "decision_code": "SVCCONNCTED",
          "decision_text": "Service Connected",
          "name": "Diabetes mellitus0",
          "effective_date": "2018-03-27T21:00:41.000+0000",
          "rated_disability_id": "0",
          "rating_decision_id": "63655",
          "rating_percentage": "100",
          "related_disability_date": "2018-03-27T21:00:41.000+0000",
          "special_issues": [
            {
              "code": "TRM",
              "name": "Personal Trauma PTSD"
            }
          ]
        }
      ]
    },
    "id": {},
    "type": "evss_disability_compensation_form_rated_disabilities_response"
  }
}
```
[TODO] - diagram this flow

### The post-submission notifiy the vet of a problem (Veteran facing) fix

In this option, we essentially do the same thing we did in the previous Veteran facing option where we blocked form submission to re-capture their intended selection.  However in this option we could allow the submission, then catch the error on the worker, then notify them via email of a problem they need to sign in and correct.
This seems slower, more confusing, and no less invasive than the vet-facing form validation option above, only including it for completness.  The one potential upside here would be not needing to pull the rated disability list at submission time, but if that proves prohibitive I would argue that caching is a better solution anyway.

## The best option is.... 

- IF there is a hard datapoint we can store in the inProgressForm we can do the **automagical** form update.  To answer this question:
  - deterimine what, if any of the provided datapoints are STATIC
  - determine how we save the disability contention information on this model
  - IF there is something we can use, then update the inProgressForm to use it and implement the **vet facing validation** and switching services
- IF NOT then we need to do the Vet facing validation state, which leaves us with the following action items
  - Get a design for the UX
  - Spike the form validation logic
  - Address colab cycle requirements and go from there
