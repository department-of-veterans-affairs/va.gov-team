# Untouched Submission Funnel Logic

## Purpose 
This document outlines how we went about identifying a sub-set of all of our `Form526Submission` records that we belive to be 'untouched'. 

## What is an Untouched Submission
An 'untouched' submission is another way of saying 'we have not fullied our end of the bargain here'. Some examples might be;
- A submission failed to deliver to the any of the external APIs that VBMS uses for ingestion and subsequently review.  E.G.  A submission failed it's initial attempts at submitting on the 'happy path' because of bad data.  It was then sent to the backup path where it retried for 24 hours, but the backup path API was experiencing a prolonged outage.  This submission never made it out of our app and now requires manual intervention.
- A submission was successfully sent to the backup path, but was transitioned to an `error` status by the external APIs validation mechanisms.  This should not be happening any more, but for a time our validations were not in sync.

For more information on the untouched submissions and the Audit as a whole, see these sources
- [Github issue for finding untouched submissions](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624)
- [Historical remediation work and context on the original 'black-hole' problem](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)
- [A document on 'Complex submission de-duplication' (more on this later)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/complex_submission_deduplication.md)

## Our Goal
Identify every `Form526Submission` record in our database for which we have not finished our job.  These are henceforth known as 'untouched' (as in they are just sitting there waiting to be fixed) submissions. To accomplish this goal, we've put every `Form526Submission` in our database through a series of filters, herin known as our 'funnel'.

## Key Terms
- **untouched submission:** A submission that requires remediation in order to fullfil our obligation to the veteran and our partners
- **success type submission / success state:** A submission known to have successfully been passed to the appropriate partner via our 'happy path', 'backup path', or 'remediation path'. *NOTE: herein when we talk about 'success', we are not implying anything about the adjudication process.  We mean that we 'successfully' got the submission from the veteran to the appropriate next step.*
- **duplicate**: a submission that, based on the content of it's `form_json` value is either exactly the same as another submission from the same user, or close enough based on the rules we will outline in our funnel.

## The Funnel

Our journey from 'every submission in our database' to 'just the untouched' ones requires three sequential layers:

1. the query layer
2. the de-duplicating layer
3. the rule application layer

Each of these ingests a set of data and passes it's result to the next.  At a high level:

- **The query layer** checks various datapoints on and around the submission record, determining (and applying) a state. State is held in the `aasm_state` value of the submission. Using these tags we can quickly eliminate successful submissions, leaving behind submissions 'of interest'.  From these submissions we extract the associated user uuids (not submission IDs) and pass these to the de-duplicating layer. Note that we do not *need* to record state in the `aasm_state` value, if we are running the entire funnel in a single script we can simply pass the results on.
- **The de-duplicating layer** This layer accepts a list of potentially affected users in the form of their `user_uuid` values.  For each user we examine all of their submissions. This user submission set is broken down into duplicate sets (dupe-sets) based on 'sameness'. The result of this layer is an array of arrays, where each sub-array is a dupe-set.
- **The Rule application layer** For each dupe-set, we apply a set of rules, resulting in 0 or 1 submissions per dupe-set that need to be investigated as 'untouched'.

At this point we have a list of submissions that should be investigated, and implicitly a list that should be ignored.  This is where we can do things like tag submissions as `ignoreable_duplicate`, count the number of 'untouched submissions', as well as the number of affected users, or simply report the untouched submission IDs and their associated user values.

What follows is a break down of the logic, step by step, that is applied in each layer.

### The Query layer

#### Determining State 

Beginning with every single Form526Submission record, our goal is to exclude the ones we knew to be some flavor of successfully handled.  This exclusive methodology ensures that when in doubt, a submission will get a second look. We have 3 definitions of 'success' with which to filter our submissoins.

- presence of a `submitted_claim_id`. This value is only populated when a submission is *successfully submitted* via the happy path. These submissions can be excluded.
- presence of a `backup_submitted_claim_id` paired with a `success` or `vbms` status in the Benefits Intake API (aka our backup path). The presence of this `backup_submitted_claim_id` indicates a successful handing off of the submission to the backup API, but unlike our happy path, this alone does not guarnatee success.  The Benefit Intake API has internal validation that runs on a submission *after* successful receipt of the HTTP request delivering the data.  In order to know the true state of a submission that has gone down the backup path, we need to give the Benefits Intake API time to run it's internal validation (usually a few seconds) and then query (aka poll) it to get a submissions status.  Currently, if the Benefits Intake API marks a submission as an `error`, it becomes instantly 'untouched', since there is no way (currently) for us to automatically correct this.  Many of these `error` submissions have already been remediated, but the rest are part of our untouched submission list.
- presence of a submission's `id` on the "intake list" given back to us by VBMS. The "intake list" is a list of all the submissions that we previously have sent to VBMS for remediation, via our batching process or one of our other failsafes. [This list is available here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624#issuecomment-2061883846)

#### Tagging or filtering by aasm_state

In this layer, we are simply trying to eliminate everything that isn't a success-type submission. We can do this in one of two ways
1. Programtically apply the rules outlined above in [Determining State](TODO - link this). [This script can be used to apply success states](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/untouched_submission_audit/apply_success_states.rb).  Or, if you just want to return the affected submission, simply subtract the success_type states from all `Form526Submission` records, e.g. `Form526Submission.where.not(id: (primary_success.pluck(:id) + backup_success.pluck(:id) + remediated_success.pluck(:id)))`
2. IF we've already tagged our submissions, we can write an active record query to eliminate any success-type submissions by their `aasm_state`. That query look like this `Form526Submission.where.not(aasm_state: %w[delivered_to_primary finalized_as_successful processed_in_batch_remediation])`

Tagging of 526 submissions (use of the `aasm_state` value) was implemented as a state machine using the AASM gem, but due to technical limitations and rapid itteration on our rule set, it's ended up as more of an tagging system.  [The original technical design document for this work can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/implementation/form_526_state_machine.md). 

**aasm_state is not to be considered a valid source of truth for submission state, as of the time of writting this (05/29/2024).** For the most up to day information on how it works, it's best to look at the [Form526Submission model code](https://github.com/department-of-veterans-affairs/vets-api/blob/d017c2391a2d44de38d06507a447a8f0434a852d/app/models/form526_submission.rb#L15) or [the collection of scripts that leverage this tagging for our audit.](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/526/untouched_submission_audit). While there is some real time in-application tagging via our submission workers and a [Benefits Intake Polling Job](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_status_polling_job.rb) (for the backup path), it's buggy.  **The only thing the `aasm_state` machine is currently good for is tagging and eliminating success type submissions at the mouth of this funnel.**

At the end of this layer, remember we want a list of user uuids, not just submission ids.  Assuming we used one of the methods above to get a list of untouched submissions, we can simply `untouched_submissions.pluck(:user_uuid).uniq`.  

## The de-duplicating layer

Here we take all of a users submissions and sort them into dupe-sets.  This process uses two code resources
- The [SubmissionDifferenceReport script](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/submission_difference_report.rb), the result of which is passed to...
- The [DuplicateSetBuilder](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/untouched_submission_audit/duplicate_set_builder.rb).

These objects work together to separate submissions into groups based on sameness. [All you could ever want to know and more about how this works is documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/complex_submission_deduplication.md)

This layer returns an array of arrays.  The top level array represents all of the submission IDs for a user.  The nested arrays are the sub-sets, grouped by sameness, a.k.a. a users dupe-sets. 

**NOTE: if you want a detailed diff of the submissions, check out the aforementioned `SubmissionDifferenceReport`.  It can create granular diffs, similar to a "git diff" between code versions.**

## The Rule application layer

For every user, we will run 'rule application' on each of their duplicate sets.  The goal here is to return 0 or 1 submissions that require attention.  The reason there can be 0 or 1 (but no more than 1) is the natural result of the following rules

Given a set of duplicate submissions (a dupe-set, as defined previously)
- IF the set contains a success
  - AND the success was the first submission created (by `created_at` (all duplicates are duplicates of *this* submission)
    - IGNORE this and all other submissions in the dupe set.  This is a set where we have a successful duplicate
  - BUT there are duplicates that were created *before* the given successful submission
    - INVESTIGATE the earliest duplicate in the set (by `created_at`
    - IGNORE the rest

[WIP]
