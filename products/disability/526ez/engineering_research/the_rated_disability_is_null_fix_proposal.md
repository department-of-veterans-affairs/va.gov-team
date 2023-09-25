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

TL;DR - when a vet selects a disability, leaves their form for a while, then comes back to submit, the downstream data around that disablity has changed, rendering their form stale. Contentions are/were being queried by looking up the name of the disability and description so an old name contention name or description always errors out and the form will go to the eyes of the adjudicators which is what the entirety of the 526 flow is intended to mitigate


### The Backup Path (implemented and working)

This is already in place.  We are recognizing a subset of errors as 'non-retryable'.  This error falls into that category, and so this "solution" is more of a stop gap.  Ultimately the paper backup submission path is expensive to process (need for human interaction, etc) so this is not optimal.  Reducing the errors and preventing the user from getting to this point is what needs to be addressed.

### The pre-submission validation fix (Veteran UX change)

In this version, when loading the veteran facing review page, we will first validate their ratedDisablity selection.  If their previous selection is no longer a valid option, we will prompt them to return to this step of the form and reselect their disability

- this requires a fundamental UX change, and therefore we'll need to go through the collab cycle
- The technical requirements of this option are relatively simple.  There are several ways to implement, but a naive high level flow could be
  - Stand up a "validate form" endpoint. We already have the methods (maybe not enough) for validating form data/values so we'll be able to use much of the previous form validation pre submission. Some unrelated items such as the InProgressForm and ITF expirations already need to be checked before the final review and submit page
  - send it the rated disability selection (and whatever else we wnat to validate in the future)
  - pull the ratedDisability list from EVSS (or wherever)
    - if this is too slow, we could consider a caching solution
  - check for inclusion of our selection in that list
 
This version, while not technically complex, will take a while to get done due to the UX change. Without going into too much scope creep, we'll need a way to direct Veterans back to the page(s) that need further review and updating i.e. links on the R&S page to go to those parts of the form needing to be changed

[TODO] - diagram this flow

**the InProgressForm schema**
```
    t.string "user_uuid", null: false
    t.string "form_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.json "metadata"
    t.datetime "expires_at"
    t.text "form_data_ciphertext"
    t.text "encrypted_kms_key"
    t.date "verified_decryptable_at"
    t.uuid "user_account_id"
    t.index ["form_id", "user_uuid"], name: "index_in_progress_forms_on_form_id_and_user_uuid", unique: true
    t.index ["user_account_id"], name: "index_in_progress_forms_on_user_account_id"
    t.index ["user_uuid"], name: "index_in_progress_forms_on_user_uuid"
```

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

## The best option is.... 

Validating a Veteran's form prior to submission on the Review & Submit page looks to be the easiest but most time consuming as we'll have to run through the VA collab cycle as well as implementing new monitoring and logging metrics (possible dashboard?).  We should and will be validating the form data, whether the form and/or ITF has expired as a stopgap to a veteran submitting a form that always uses the backup submission process as a claim can never be auto-established. 

- The Veteran facing validation state, which leaves us with the following action items
  - Get a design for the UX
  - Spike and record the form validation logic (Look to the flow mural board for the user pathways
  - Proceed through the collab cycle with team and VA to implement
