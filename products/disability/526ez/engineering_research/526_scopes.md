# Form526Submission Scopes

## Context
### Purpose
An explanation the different scopes are on the Form526Submission model, what they should / shouldn't capture, and why we need them

### History

Why do we need these? These are the foundation of [the 'safety net' I outline here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md), which is informed by learning from our [2023 / 2024 Form526Submission remediation "Code Yellow."]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)). They will be used to power Datadog dashboards and / or monitors that will keep us and all future VA.gov teams accountable to the state of our Form526Submission.

These scopes are where the rubber meets the road for our ["exclusive methodology"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology). They define the boundaries of every known state a Form526Submission can be in, thereby allowing us to consider everything else "failure type" and in need of attention.

### Naming Convention
- do not append `_submissions` to the name. This is implicit.
- `*_type` implies a logical grouping of sub-scopes. These are the more powerful scopes for building abstractions for stakeholders.

### Logical Limitations
These scopes give us 100% coverage of Form526Submissions within the scope of va.gov. They even cover edge case failures downstream to some extent ([see this doc on 'paranoid success' for more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md)).  However, if Lighthouse, EVSS, VBMS, or any of the other isolated links in the submission life 'chain' fail silently, and no body tells us, we can't do anything about that. Therefor, we can say these scopes give us **100% coverage of va.gov, but nothing else.** Someday we might have a wholistic state solution that covers the entire lifecycle of a submission, but for now ensuring the integrity of our 'link in the chain' is the best we can do.

### Technical Limitations
It's not uncommon for these scopes to timeout when run from a command line. This is mittigated a bit by using `.pluck(:id)` to execute subqueries where we are able.

### MAX_PENDING_TIME
this is a duration that we use to delineate between "this is too new to call it a failure" and "this is old enough that we can consider it a failure, unless it meets one of our success type criteria."  This is not an arbitrary number. At the time of writing, it is set at 3 weeks. We picked that number to allow for the cumulative duration of
- Benefits Intake APIs 'max time' until status assignment, [as outlined in their docs](https://developer.va.gov/explore/api/benefits-intake/docs?version=current) (2 weeks).
- The ~48 hours it can take for a round of primary path retries to run
- The ~48 hours it can take for a round of backup path retries to run
- unexpected latency and sanity of about 3 days

NOTE: There are many submissions that fail *faster* than this, however trying to capture them based on the statuses of their associated processing jobs becomes brittle quickly, and so we are preferring a more robust implementation wherein we use this for anything uncertain.

NOTE: If a submission is explicitly rejected from the backup path, then we can go ahead and consider it failed. This is the only exception to the pending time rule.

## Form526Submission Scopes

### pending_backup
All of the following must be true:

- This submission has been sent to the backup path (has a `backup_submitted_claim_id`)
- has a value of `nil` for `backup_submitted_claim_status`
- This submission has no 'success type' markers such as a successful remediation or primary path acceptance
- this submission is less than `MAX_PENDING_TIME` old

### in_process
All of the following must be true:

- has not been sent to the primary path (no `submitted_claim_id`)
- has not been sent to the backup path (no `backup_submitted_claim_id`)
- is less than the `MAX_PENDING_TIME` old
- cannot be considered `remediated` (this would be a success type indicator)
- cannot be considered `with_exhausted_backup_jobs` (this would be a failure type indicator)

### accepted_to_primary_path

- has been sent to the primary path (has a `submitted_claim_id`)
- has been sent either to LH (with successful PDF upload) or EVSS
- now looks at both accepted_to_evss_primary_path and accepted_to_lighthouse_primary_path scopes

### accepted_to_evss_primary_path

- has been sent to the primary path (has a `submitted_claim_id`)
- the submit endpoint is either null or it's not LH ('claims_api')

### accepted_to_lighthouse_primary_path

- has been sent to the primary path (has a `submitted_claim_id`)
- was submitted to LH's 'claim_api'
- the PDF was uploaded successfully (via synchronous polling of the LH Benefits Claims API)

### accepted_to_backup_path
All of the following must be true:

- has a non-nil value for `backup_submitted_claim_id`
- has a value of `accepted` for `backup_submitted_claim_status`

### rejected_from_backup_path
All of the following must be true:
- has a non-nil value for `backup_submitted_claim_id`
- has a value of `rejected` for `backup_submitted_claim_status`

### remediated

- The **most recently created** associated `Form526SubmissionRemediation` object has a value of `true` for it's attribute `success`

NOTE: even if a submission has a `Form526SubmissionRemediation` with a value of `success: true`, we will not consider that submission remediated unless it is the **most recently created remediation**. We do it this way because remediation is a complex process. We don't want to delete data about past remediations, if they exist, but we do want to consider the most up to date information about the submission correct. If a submission was remediated last week and for some reason the developer opted to create a new remediation but not transition the old remediation to `success: false`, we trust that the new remediation is necessary and should be the source of truth.

NOTE: Remediation is an inherently an 'override' to other statuses. A submission could have every other failure marker, but if the most recent remediation associated with it has a status of `success: true`, then it's a successful submission

### paranoid_success
[Document with more context on what this is](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md)

All of the following must be true
- has a non-nil value for `backup_submitted_claim_id`
- has a value of `paranoid_success` for attribute `backup_submitted_claim_status`
- is less than 1 year old

### success_by_age
[Document with more context on what this is](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md)

All of the following must be true
- has a non-nil value for `backup_submitted_claim_id`
- has a value of `paranoid_success` for attribute `backup_submitted_claim_status`
- is more than 1.year old

NOTE: 1 year is a semi-arbitrary date agreed upon with OCTO. After that we are OK with saying "we've done our best, and we want to stop watching it". This could easily be increased to several years, as the query / job that checks this is very light, fast, and infrequent.

NOTE: `paranoid_success` and `success_by_age` are two sides of the same coin. It is a strict binary, a submission that is `paranoid_success` becomes `success_by_age` after 1 year

### success_type
**Any** of the following top-level bullets being true makes a submission `success_type`. 

- A submission can be considered `accepted_to_primary_path`
- A submission can be considered `accepted_to_backup_path`
- A submission can be considered `remediated`
- A submission can be considered `paranoid_success`
- A submission can be considered `success_by_age`

### incomplete_type
**Any** of the following top-level bullets being true makes a submission `incomplete_type`. 

- A submission can be considered `pending_backup`
- A submission can be considered `in_process`

### failure_type

Anything and everything that is not `success_type` or `incomplete_type`. This is our most important scope, the others all serve this one in some way. This is the query that tells us at a glance exactly how many failed submissions are hanging out in our system requiring human intervention to reach a state of completeness.

NOTE: in spirit we are just saying `where not success_type or incomplete_type`, however this was causing postgres timeouts. the current implementation filters each subcondition 1 by 1

#### failure_type edge case

We build the failure_type scope with a step by step, subtracive query to avoid timeouts in the database. There is an edge case where a submission succeeds the happy path during the execution of this filtering. The way it works is essentially that by the time we subtract everything `in_process`, the submission is no longer in process. This seesm to only happen on the happy path so we have addressed it in [this pull request](https://github.com/department-of-veterans-affairs/vets-api/pull/18364)

### with_exhausted_primary_jobs
All of the following must be true
- has no `submitted_claim_id`
- has at least 1 associated instance of `Form526JobStatus` with
  - a failure type state (`exhausted` or `non_retryable_error`)
  - a `job_class` of `SubmitForm526AllClaim`

### with_exhausted_backup_jobs
All of the following must be true
- has no `backup_submitted_claim_id`
- has at least 1 associated instance of `Form526JobStatus` with
  - a failure type state (`exhausted` or `non_retryable_error`)
  - a `job_class` of `BackupSubmission`
 
NOTE: It's reasonable to assume that any submission in this scope *also* has exhausted primary jobs, however they are logically distinct and therefor we **do not care about `submitted_claim_id` presence or absence.
