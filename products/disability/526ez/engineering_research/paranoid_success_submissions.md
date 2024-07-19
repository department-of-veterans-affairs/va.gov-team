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
Our `Form526StatusPollingJob` runs every night to capture these Benefits Intake statuses and mirror them in our database. (see excusive methodology doc for more). 

There is an edge case however, wherein a submission can have a status of `success` but later be changed to any other state. Because the `Form526StatusPollingJob` only polls "pending submissions" and we need to treat `success` as a local success state (not pending), this change won't be captured by the standard nightly polling. We need to reflect this change in our system to prevent this failure from remaining silent. 

To capture these changes, if they happen, we run a slightly modified "paranoid" version of the `Form526StatusPollingJob` once a week. This paranoid job will only "check up" on the submissions with the flakey `success` state in Benefits Intake.  These are represented localy by a `backup_submitted_claim_status` of `paranoid_success`.  A `paranoid_success` submission can be treated as successful for reporting, because we know if it changes we will capture the change with our weekly paranoid job.

### Success by Age vs Paranoid Success

There is a second scope `success_by_age_type` that is similar to `paranoid_success_type`. "success by age" submission meets the following criteria
- it was submitted to the Benefits Intake API (our backup path)
- it was assigned a status of `success` in Benefits Intake API
- it is **MORE** than a year old

After a year of "checking up" on a paranoid success submission, we say "enough is enough" and consider it successful for all time, unless someone explicitly tells us different. To put it another way, a paranoid success matures into a "success by age" if it remains a `success` for one year in Benefits Intake.
