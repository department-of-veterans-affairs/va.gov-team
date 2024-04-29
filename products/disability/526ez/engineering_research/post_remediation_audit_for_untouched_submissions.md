# Post Remediation Audit for Untouched Submissions

## Purpose
We are performing an audit of our va.gov (vets-api) database with the goal of identifying submissions that were never submitted to completion, releative to our platform.  This includes submissions that failed to reach a critical API, ones that were passed on by us to external APIs that were then quietly rejected, silent failures within our application that have not been remediated.  In laymens terms, **any veteran submitted 526 form where we failed to complete our contract on a submission**, ie. getting it from the veteran to the appropriate VA intake aparatus.

**NOTE: these submissions are described herin as 'untouched' submissions**\
**NOTE: for simplicity, the language of this document makes no distinction between submission forms, database records, or datbase record primary keys (submission Ids)**\

The following is documented:

- [x] A list of submissions that are 'untouched' **before** deduplication.
- [ ] A list of submissions that are 'untouched' **after** deduplication.
- [ ] A break down of our deduplication process and what we deemed safe to ignore.
- [ ] The code (or links to it) used to generate these 'untouched' submission lists.

### CAVEAT: The results of this audit are not conclusive.
Our next steps will involve comparison with a similar audit being performed by VBMS.

## Context
- [This document describing the historical context of the 526 remediation effort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)
- [This Github issue tracking our va.gov side audit](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624)

## The short list, aka untouched-un-deduped
This is our 'short list' of possible untouched submissions.  When it is de-duplicated, what is left will be our final audit result (relative to this effort).

[The short list is available here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624#issuecomment-2083431369)

### How we got this list

#### The addition of 'state' to our Form 526 submissions
First we added a rough 'state machine' to our 526 Submission model.  Based on the following logical groupings, we began tagging submissions. This diagram outlines how we are logically grouping
submissions and what the expected state of these submissions should be.  After our previous tagging work, we expect this to be correct in everycase where we were able to define a submissions state.  In case of missed submissions, e.g. not present in a remediation batch, we will not have a state

submission groupings:
<img width="781" alt="Screenshot 2024-04-29 at 1 53 01 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/706a689a-f8e1-442b-9832-068616c6fbd6">


An explanation of the above chart:
- Submissions that had a value for `submitted_claim_id` are implicitly successful, because the prescence of this ID indicates that they successfully made their way down our 'happy path' submission process.  Therefor these were tagged as `delivered_to_primary`
- Submissions that had a value for `backup_submitted_claim_id` are considered **potentially** successful. They can be broken down into two categories
  - backup submissions that receive a status of `vbms` or `success` in the Lighthouse Benefits Intake system are considered successful.  This system is where our backup path pushes too.  Backup submissions may be accepted or rejected by this API, and ones that are accepted will later receive a status update.  These can be the aforementioned success statuses (`vbms` and `success`), or a rejection status (`error`).  Submissions that are accepted by the API and later transisioned to a success status are designated in the audit as successful and are tagged with a state in our system of `finalized_as_successful`.
  - backup submissions that are rejected from the API outright are given a state of `failed_backup_delivery`. The ones that are accepted and later transitioned to the `error` status inside of Lighthouse Benefits Intake are tagged as `rejected_by_backup`. The difference is between these states is not important for our audit. They are both failure states.
    - Many of these failed backup submissions were later remediated, either as ad hoc tasks or as part of our large batch remediation delivery to VBMS.  These statuses may be `in_remediation`, `finalized_as_successful`, or `processed_in_batch_remediation`.  The difference internal the audit is trivial, these are excluded from our audit as successful.
- Submissions the have neither a `submitted_claim_id`, nor a `backup_submitted_claim_id` indicate a problem that has been remediated, or will still require remediation.  These can be broken down into two categories.
  - The first is those that have been some flavor of remediated, be it in the aforementioned batch or ad hoc tasks, or some other way.  These are excluded from the short list as successful.
  - The second grouping is what we expect to be the meat of our short list, that is submissions that were some how missed during our remediation efforts.  The how and why of this isn't important to the audit.  What we care about here is simply dog-earing them as something that requires further attention.
 - `ignorable_duplicate` is a state the will primarily (but not necessarily) represent something from the 'slipped through the cracks' grouping.  It is going to be back filled onto our short list submissions in cases where we determine a submission is an exact duplicate, or close enough (More on that below) to be ignored.


## Deduplication
[todo]

### What we excluded
[todo]

### How we excluded it
[todo]
