# Post Remediation Audit for Untouched Submissions

## Purpose
We are performing an audit of our va.gov (vets-api) database with the goal of identifying submissions that were never submitted to completion (relative to our platforms obligation).  This includes submissions that failed to reach a critical API, ones that were successfully submitted to an external APIs that were then quietly rejected within that APIs internal validation system, and silent failures within our own application that have not been remediated.  In laymens terms, **any veteran submitted 526 form where we failed to complete our contract on a submission**, ie. getting it from the veteran to the appropriate VA intake aparatus.

**NOTE: These submissions of intrest are described herin as 'untouched' submissions**\
**NOTE: For simplicity, the language of this document makes no distinction between submission forms, database records, or datbase record primary keys (submission Ids)**\

The following is documented:

- [x] A list of submissions that are 'untouched' **before** deduplication, aka our untouched 'short list'.
- [x] A breakdown of the process (logic and code) used to create this 'short list'.
- [ ] A list of submissions that are 'untouched' **after** deduplication.
- [ ] A break down of our deduplication process and what we deemed safe to ignore.

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

<img width="779" alt="Screenshot 2024-04-29 at 1 56 24 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/9a0e8b16-6aff-4783-8def-d5c6d34eea1a">

An explanation of the above chart:
- Submissions that had a value for `submitted_claim_id` are implicitly successful, because the prescence of this ID indicates that they successfully made their way down our 'happy path' submission process.  Therefore these were tagged as `delivered_to_primary`
- Submissions that had a value for `backup_submitted_claim_id` are considered **potentially** successful. They can be broken down into two categories
  - Backup submissions that receive a status of `vbms` or `success` inside of the Lighthouse Benefits Intake system (external API for backup path submission) are considered successful. Backup submissions may be initially (sync) accepted or rejected by this API, and ones that are accepted will later receive a status update (async). This API is later polled with the submissions `backup_submitted_claim_id`s for their final Lighthouse status, which informs their final va.gov (local) state.  These Lighthouse statuses can be the aforementioned success statuses (`vbms` and `success`), or a rejection status (`error`).  Submissions that receive a Lighthouse success status are designated in the audit as successful and are tagged with a state in our system of `finalized_as_successful`. 
  - Backup submissions that are rejected from the API outright (sync) are given a local state of `failed_backup_delivery`. The ones that are accepted and later transitioned to the `error` status (async) inside of Lighthouse Benefits Intake are tagged locally as `rejected_by_backup`. The differences between these states is not important for our audit. They are both failure states and therefor are considered 'untouched'.
    - Many of these failed backup submissions were later remediated, either as ad hoc tasks or as part of our large batch remediation delivery to VBMS.  These statuses may be `in_remediation`, `finalized_as_successful`, or `processed_in_batch_remediation`.  The difference between these states is not important for our audit, These are success states and are therefor excluded from our 'untouched'.
- Submissions the have neither a `submitted_claim_id`, nor a `backup_submitted_claim_id` indicate a problem (or set of problems) that prevented submission to either our primary or backup paths. These can be broken down into two categories.
  - The first is those that have been some flavor of remediated, be it in the aforementioned batch or ad hoc tasks, or some other way.  These are excluded from the short list as successful.
  - The second grouping is what we expect to be the meat of our short list, that is submissions that were some how missed during our remediation efforts.  The how and why of this isn't important to the audit.  What we care about here is simply dog-earing them as something that requires further attention.
 - `ignorable_duplicate` is a state the will primarily (but not necessarily) represent something from the 'slipped through the cracks' grouping.  It is going to be back filled onto our short list submissions in cases where we determine a submission is an exact duplicate, or close enough (More on that below) to be ignored by the audit and excluded form the short list.

Given the above tagging, the following script was used to generate our list of untouched submission ids.\
**NOTE:** we cap our query scope at "time of running minus 3 days".  This is because we want to avoid capturing submissions that may still be running through retries on the primary or backup path, or have not had time to reach a final Lighthouse Benefits Intake status.\
```ruby
# subtractive audit to identify untouched submissions
# requires BenefitsIntakeStatusPoll object from: 
# https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/failure_reporting/benefits_intake_status_poll.rb
arel = Form526Submission.arel_table
# between our primary and backup retries, plus the possible lag in LH status updating, this
base = Form526Submission.where(arel[:created_at].lt(Date.today - 3.days)); nil
back_ups = base.where.not(backup_submitted_claim_id: nil); nil
poll = BenefitsIntakeStatusPoll.new(guids: back_ups.pluck(:backup_submitted_claim_id), tracking_level: :all); nil
poll.processing_guids.count # should be 0 <- this indicates there is nothing in LH that may change

base.count # 2735264
remediated = base.where(aasm_state: :in_remediation).pluck(:id); nil
remediated.count # 168
batched = base.where(aasm_state: :processed_in_batch_remediation).pluck(:id); nil
batched.count # 39551
finalized = base.where(aasm_state: :finalized_as_successful).pluck(:id); nil
finalized.count # 8863
accepted_to_primary = base.where.not(submitted_claim_id: nil).pluck(:id); nil
accepted_to_primary.count # 2568474
accepted_to_backup = (poll.success_submissions.pluck(:id) + poll.vbms_submissions.pluck(:id)); nil
accepted_to_backup.count # 8997

touched_ids = (remediated + batched + finalized + accepted_to_primary + accepted_to_backup); nil
touched_ids.count # 2626053
all_ids = base.pluck(:id); nil
untouched_ids = all_ids - touched_ids; nil # trying to do a base.where.not(id: touched_ids) will TO
untouched_ids.count # 118261
untouched_subs = Form526Submission.where(id: untouched_ids); nil # dont really need to do this, but i like the sanity check
untouched_subs.count # 118261 <-should match untouched ids, if not something is very wrong
```

## Deduplication
[todo]

### What we excluded
[todo]

### How we excluded it
[todo]
