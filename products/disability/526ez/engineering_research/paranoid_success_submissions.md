# Paranoid Success Submissions

## Purpose
Define what these are, why we need them, and how to remove them should we ever not need them.

## Resources
- [PR adding this feature](https://github.com/department-of-veterans-affairs/vets-api/pull/17621)
- [Slack thread where we decide to build this](https://dsva.slack.com/archives/C053U7BUT27/p1721337336243199)
- ['Exclusive methodology' and why it's important](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology)
- [Form526StatusPollingJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_status_polling_job.rb)

## What is a "paranoid success"?

A `Form526Submission` is defined as "paranoid success" when it meets the following criteria
- it was submitted to the Benefits Intake API (our backup path)
- it was assigned a status of `success` in Benefits Intake API
- it is **less** than a year old

### Why do we need it?

[According to the Benefits Intake documentation](https://developer.va.gov/explore/api/benefits-intake/docs?version=current)...

"
'Success' is the final status for a small percentage of submissions with claim types, Veteran types, or exception processes that are not worked in VBMS
"

This means that for all intents and purposes, when Benefits Intake gives a submission a status of `success`, it is successful, we are done with it and can exclude it from our failure reporting.
Our `Form526StatusPollingJob` runs every night to capture these Benefits Intake statuses and mirror them in our database. (see exclusive methodology doc for more). 

There is an edge case however, wherein a submission can have a status of `success` but later be changed to any other state. Because the `Form526StatusPollingJob` only polls "pending submissions" and we need to treat `success` as a local success state (not pending), this change won't be captured by the standard nightly polling. We need to reflect this change in our system to prevent this failure from remaining silent. 

To capture these changes, if they happen, we run a slightly modified "paranoid" version of the `Form526StatusPollingJob` once a week. This paranoid job will only "check up" on the submissions with the flaky `success` state in Benefits Intake.  These are represented locally by a `backup_submitted_claim_status` of `paranoid_success`.  A `paranoid_success` submission can be treated as successful for reporting, because we know if it changes we will capture the change with our weekly paranoid job.

### The 'next step' problem

There is a reasonable case to be made that there are better ways to deal with this edge case. "Paranoid success" logic is a clunky solution that involves multiple sources of truth and tracking what is essentially in an error in a totally different application. However, *someone* needs to be watching for it, otherwise it becomes a silent failure. When the failure happens, someone (human or application) needs to catch it and take the 'next step', e.g. send an alert, get it into the remediation pipeline, notify the vet, something. Right now the vets-api team owns the 'next step'. We take the next step by assigning the submission a state based on what Benefits Intake has updated it to, most likely `rejected`. When a submission is `rejected` from Benefits Intake, it is 'failure type' and automagically swept up in our failure tracking system (see 'exclusive methodology' for more). For more context, visit the slack thread linked above, but TL;DR is this; the lift was light, the overhead is low, and we have the better failure tracking / remediation system.

### Success by Age vs Paranoid Success

There is a second scope `success_by_age_type` that is similar to `paranoid_success_type`. "success by age" submission meets the following criteria
- it was submitted to the Benefits Intake API (our backup path)
- it was assigned a status of `success` in Benefits Intake API
- it is **MORE** than a year old

After a year of "checking up" on a paranoid success submission, we say "enough is enough" and consider it successful for all time, unless someone explicitly tells us different. To put it another way, a paranoid success matures into a "success by age" if it remains a `success` for one year in Benefits Intake.

Note that "success by age" is implicit. We do not change the database record. It is identified by it's `paranoid_success` value and it's age.

### How can we not need / remove this

This feature will become obsolete if any of the following become true

- Someone else (e.g. Benefits Intake team) accepts ownership of the 'next step' problem
- Benefits Intake `success` status becomes immutable, eliminating the edge case
- We migrate off of Benefits Intake

If we no longer need it, then it's safe to simply transition any `paranoid_success` submissions to `accepted` via a script or rake task, then remove the unused code. It's important that the `paranoid_success` is not deleted without first marking these submissions as `accepted`, otherwise they will show up as 'failure type'.
