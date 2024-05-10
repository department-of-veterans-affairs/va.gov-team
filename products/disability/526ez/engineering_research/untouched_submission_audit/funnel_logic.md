# Untouched Submission Funnel Logic

## Purpose 
This document outlines how we went about identifying a sub-set of all of our `Form526Submission` records that we belive to be 'untouched'. 

## What is an Untouched Submission
An 'untouched' submission is another way of saying 'we have not fullied our end of the bargain here'. Some examples might be;
- A submission failed to deliver to the any of the external APIs that VBMS uses for ingestion and subsequently review.  E.G.  A submission failed it's initial attempts at submitting on the 'happy path' because of bad data.  It was then sent to the backup path where it retried for 24 hours, but the backup path API was experiencing a prolonged outage.  This submission never made it out of our app and now requires (or has received) remediation
- A submission was successfully sent to the backup path, but was transitioned to an `error` status by the backup paths internal validation mechanisms.  This should not be happening any more, but for a time our validations were not in sync.

For more information on the untouched submissions and the Audit as a whole, see these sources
- [Github issue for finding untouched submissions](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624)
- [Historical remediation work and context on the original 'black-hole' problem](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)
- [A document on 'Complex submission de-duplication' (more on this later)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/complex_submission_deduplication.md)

## Our Goal
Identify every `Form526Submission` record in our database for which we have not finished our job.  These are henceforth known as 'untouched' (as in they are just sitting there waiting to be fixed) submissions. To accomplish this goal, we've put every `Form526Submission` in our database through a series of filters, herin known as our 'funnel'.


## The Funnel

Our journey from 'every submission in our database' to 'just the untouched' ones requires three sequential layers:

1. the tagging layer
2. the deduplicating layer
3. the rule application layer

Each of these ingests a set of data and passes it's result to the next.  At a high level
- **The query layer** checks the following state conditions and applies a tag in the `aasm_state` value of the submission. Using these tags we can quickly eliminate successful or ignorable submissions, leaving behind submissions 'of interest'.  From these submissions we extract the associated user uuids and pass these to the deduplicating layer
- **The deduplicating layer** This layer accepts a list of potentially affected users in the form of their `user_uuid` values.  For each user we examine their submissions as a set for 'sameness', and sort them accordingly. These are passed as nested arrays (groups of submission ids per user) to the rule application layer.
- **The Rule application layer** You may have noticed that the last layer pulled in submissions that were not identified in the query layer. This is good, as we now want to inspect each duplicate set to see if any of it's memebers were successful, and if so when they were submitted relative to it's identical twins.  This layer identifies 0 or 1 submissions from a duplicate set to investigate.

At this point we have a list of submissions that should be investigated, and implicitly a list that should be ignored.  This is where we can do things like tag submissions as `ignoreable_duplicate`, count the number of 'untouched submissions', as well as the number of affected users.

What follows is a break down of the logic, step by step, that is applied in each layer.

### The Query layer

#### Determining State 

Beginning with every single Form526Submission record, our goal was to exclude the ones we knew to be successfully handled.  This exclusive methodology ensures that when in doubt, a submission will get a second look. We have 3 ways of identifying the state of a submission

- presence of a `submitted_claim_id`. This value is only populated when a submission is *successfully submitted* via the happy path. These submissions can be excluded.
- presence of a `backup_submitted_claim_id` paired with a `success` or `vbms` status in the Benefits Intake API (aka our backup path).*
- presence of a submissions `id` in the "intake list" given back to us by VBMS.**

* *The presence of this `backup_submitted_claim_id` indicates a successful handing off of the submission to the backup API, but unlike our happy path, this alone does not guarnatee success.  The Benefit Intake API has internal validation that runs on a submission *after* successful receipt of the HTTP request delivering the data.  In order to know the true state of a submission that has gone down the backup path, we need to give the Benefits Intake API time to run it's validation (usually a few seconds) and then query (or poll) it to get a submissions status.  Currently, if the Benefits Intake API marks a submission as an `error`, it becomes untouched, since there is no way (currently) for us to automatically correct this.  Many of these `error` submissions have already been remediated, but the rest are part of our untouched submission list.*

** *The "intake list" is a list of all the submissions that we previously have sent to VBMS for remediation, via our batching process or one of our other failsafes. [This list is available here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624#issuecomment-2061883846)*

#### Tagging / aasm_state

Based on the above determinations, we began work to 'tag' our submissions.  This was implemented as a state machine using the AASM gem, but is really more of a tagging system to represent the last, best information we have about a submissions place in our pipeline.  [The original technical design document for this work can be found here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/implementation/form_526_state_machine.md), however it's worth noting that this 'state machine' has changed alot since it's inception.  For the most up to day information on how it works, it's best to look at the [Form526Submission model code](https://github.com/department-of-veterans-affairs/vets-api/blob/d017c2391a2d44de38d06507a447a8f0434a852d/app/models/form526_submission.rb#L15) or [the collection of scripts that leverage this tagging for our audit](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/526/untouched_submission_audit).  

The state machine is mostly redundant; as mentioned above presence of IDs can be used for most of our submissions, but in the case of remediated submissions (from the intake list) it's a valuble way of marking submissions as 'ok to exclude'.  Some light code has been added to our submission workers to try and keep submission states up to date, but ultimately this information is not used outside of the audit.  

**TL;DR - state & tagging**: Submissions are either some version of successful (nothing to fix), safe to ignore (e.g. a duplicate of a successful submission), or 'untouched'.  

#### The actual Query

Now that we have our submissions 'tagged' with the appropriate state, we can query our database for those that have been left 'untouched'.  [This query is oulined in this script](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/untouched_submission_audit/query_runner.rb).  Here is a description of this logic without code:

- For every submission from the beginning of time, up until 3 days ago (trying to filter stuff that is still running retries on a submission worker)
- From the above, find every submission that does not have a success-type state
- From the remainder of the above, eliminate any that may still be in progress (these will have an associated `InProgressForm` record)
- from the remainder of the above, extract the associated user uuids

This leaves us with a list of users (by uuid) that may own one or more problematic submissions.  We pass this list of users (uuids) to the next layer

## The deduplicating layer

Here we take all of a users submissions and sort them into 'duplicate sets' or 'dupe groups'.  This process uses two code resources
- The [SubmissionDifferenceReport script](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/submission_difference_report.rb), the result of which is passed to...
- The [DuplicateSetBuilder](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/untouched_submission_audit/duplicate_set_builder.rb).

These objects work together to separate submissions into groups based on sameness. [All you could ever want to know and more about how this works here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/complex_submission_deduplication.md)

## The rule application layer

For every user, we will run 'rule application' on each of their duplicate sets.  The rules we with to apply are as follows:

[WIP]
3. 
