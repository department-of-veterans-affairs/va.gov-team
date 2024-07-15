# 526 State Repair Technical Design Document

## Purpose
[In a previous document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md) we have laid out why we need to do the work described herein. The goal of this document is to break down the work into actionable segments, and provides aditional context on what we are currently not doing, but should be.

## TL;DR
we need to...
1. [Fix our 526 backup submission polling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#1-repair-our-backup-submission-polling-job)
2. [Rebuild our 526 state](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#2-rebuild-state-from-the-ground-up)
3. [Backfil our data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#3-backfill-our-new-state)

## Key terms and concepts
- **submission**: Refers to an instance of the class `Form526Submission` and the veteran submitted claim it represents, used for brevity.
- **failure**: Refers to a failure to process a submission. Also referred to as "not-done", "failure like state."
- **In process / In progress**: "In process" Refers to an instance of `Form526Submission` that is not yet ready to be defined as a success or failure. "In progress" refers to a submission that a Veteran is still working on, and is a sub-set of "in process". I'm intentionally using similar language because they are, for our purposes, functionally the same in how we handle them. We don't want to get into the details of these sub-states, just know that anything "in process" can be excluded when we attempt to identify failures.
- **success**: Refers to submission for which there is currently no further or planned work required from us, the vets-api team, in order to fulfill our contract with the submitting veteran. The submission has passed successfully through our system to the relevant next step. Also referred to as "done" and "success type state". 
- **remediation**: Any process outside of the "happy path" or "backup path" form submission flow for 526 that is used to move a submission into a success state.  Typically this involves a developer and stake holder working closely to identify failed submissions and package them into a processable format, then passing that package off to relevant parties.
- **state machine**: A "state machine" is a codified way of describing changes in data based on system events. It's a programmatic concept, not a user facing tool. *The Stakeholder facing layer will be Datadog tools that show failed submissions per unit time.*
- **Time boxed pending state**: A grace-period in which a submission that is neither explicitly success nor failure type may be considered 'in process'. When this expires, if a submission has not become success type, it defaults to failure type. 

## Resources
- [Original document describing the work of "Auditing" our database for untouched submissions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/post_remediation_audit_for_untouched_submissions.md).
- [The document describing the failures of the current system and outlining the need to fix it](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md)
- [A description of how tags were initially applied in the first pass of our state machine](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)
  
## Summary
At the top level, we (stake holders and engineers) need to know, at a glance, what submissions in our database require remediation. By surfacing this data we will unblock future remediation efforts and the creation of admin dashboards and insight tools.

### Note on Exclusive Methodology
Though our goal is to find submissions that have failed, failure is an inherently unpredictable process and therefore impossible to codify with 100% accuracy. *Success* and *In-process* states, on the other hand are clearly defined by rigorous criteria. Therefore, the best way to identify what has failed, or can be said to be in a *failure-like state* is to use an **exclusive methodology** where in we start by identifying that which can be excluded (success and in-process submissions), leaving behind everything else, which we will consider a failure. This ensures that when unpredictable events occur, we err on the side of caution by considering potential unknowns as failure-type. [more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)

### The final, stakeholder facing value of this work...

- Unblocks the creation of Admin facing Datadog tools that allow insight into what has failed, when failures are happening, and related alerting.
- Creates a sustainable, reusable developer workflow for debugging and remediating failures.
- Future proofs our 526 submission infrastructure against "black holes", like the one that kicked off our remediation work and subsequent audit(s).

## TODO
### 1. Repair our Backup Submission Polling Job
#### Problem Statement
We have or have had many submissions that seem stuck in a state of `delivered_to_backup`. This may be due to a problem with the 526 Benefits Intake Status job, [defined here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_status_polling_job.rb).  `delivered_to_backup` is a transitory state, implying that a submission was successfully delivered to the Benefits Intake API. However, the purpose of this job is to do a daily query against the Benefits Intake Polling API with every submission in a state of `delivered_to_backup` with the goal of transitioning them into a pass / fail state based on the results of that poll.  The Benefits Intake API assigns these their own internal status of `vbms` or `success` if the submission passed their internal validations, or a status of `error` or `expired` (TODO: double check that `expired` is the correct name for this status) if the submission fails their internal processing. 

Upon investigation of a random set of submissions that were still in the `delivered_to_backup` state, the majority *should* have been transitioned based on their Benefits Intake status. This implies that the job is doing something wrong.

#### Acceptance Criteria
- When running, the `Form526StatusPollingJob` polls *all* applicable submissions, i.e. those in the state of `delivered_to_backup`
- When returning a "pass" type status for a submission, the submission is successfully and reliably transitioned into a state of `finalized_as_successful`
- When returning a "fail" type status for a submission, the submission is successfully and reliably transitioned into a state of `rejected_by_backup`

#### Implementation Design
This will depend on what we identify as the problems with our polling job.

### 2. Rebuild State from the ground up

#### Problem Statement

At a high level, there are 3 distinct things we should be doing that we are not. We need to:
- Correctly identify submissions that can be ignored (successful or in-process) to facilitate our [exclusive methodology](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology).
- Record this data in a way that guarantees data integrity, i.e. in our Database.
- Add an API on top of this data that allows us to easily view subsets of submissions based on state.

What follows in this section is a breakdown of how our application is currently failing to meet these objectives. This is an indepth defense of my proposed solution, so if you are just here for the fix, skip ahead to the [acceptance criteria](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#acceptance-criteria-1)

##### -- We have a bloated, confusing state machine --

Currently, we have the following states, `:delivered_to_primary, :failed_primary_delivery, :rejected_by_primary, :delivered_to_backup, :failed_backup_delivery, :rejected_by_backup, :in_remediation, :finalized_as_successful, :unprocessable, :processed_in_batch_remediation, :ignorable_duplicate`. Many of these names are confusing, such as `failed_backup_delivery`, which indicates a failed HTTP request, vs `rejected_by_backup` which indicates a "fail" type status assignment via Benefits Intake polling.

Other states were created for the purpose of remediation, and have no real value to the application processing logic outside of saving data points about what was remediated when, such as `processed_in_batch_remediation`.  In practice this means the same thing as `finalized_as_successful` or `in_remediation`, which is that for these submissions we have "fulfilled our contract" with the veteran, i.e. moved the submission from our web API to the appropriate next step ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#what-is-an-untouched-submission).) These mean more or less the same thing, but with an ultimately unsuccessful nod to context tracking. 

What's potentially even more confusing is that, although these are success-type states, it's possible we still may need to do follow up work for remediation. More on this below in the section about [complex remediation lifecycles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#---we-are-not-accounting-for-the-complex-remediation-lifecycle---)

TL;DR: Our solution must re-define state as simply and clearly as possible, eliminating bloat and providing a sustainable technical implementation upon which to build stakeholder facing tools.

##### -- We have redundant sources of truth --

We have states that create a duplicate source of truth with other, better, more reliable data points. For example, `delivered_to_primary` is another way of saying that the submission should have a `submitted_claim_id`. This is the data point we use to set the state, as there is no other meaningful way to define it. This becomes confusing in the case where a submission has a `submitted_claim_id` and so is technically in a state of `delivered_to_primary`, but for one reason or another ended up on one of our "remediated submission lists" ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#determining-state).) This creates a situation where we have a submission that rightly belongs to two states, `delivered_to_primary` and / or one of the aforementioned remediation type states (`processed_in_batch_remediation`, `ignorable_duplicate`, `in_remediation`, `finalized_as_successful`).

This has lead to confusion when other teams or stakeholders investigate submissions and assume that 526 state should be trusted.

TL;DR: Our solution must eliminate redundant sources of truth.

##### -- We are not accounting for the 'Complex Remediation Lifecycle' --

Remediation is an imperfect process. Once a submission has been identified as needing remediation (i.e. it is in a failure state) it is common to send it for remediation more than once. There are a few reasons for this, primarily that remediation is a mostly manual, human process involving long communication chains, expiring documents, and follow up requests. 

This complicates our ability to define the state of a submission once it's remediation lifecycle has begun. By definition "in remediation" is a success-type state, however if there is further work required later on, it would also be true to say that we have not fulfilled our contract with the veteran, and therefore the submission is also in a failure-type state. If we use a binary (pass / fail) system, we end up with a contradiction that can only be resolved by accepting bad data, or loosing good data.

For this reason, we must consider the remediation lifecycle / process to be potentially "complex", that is, a submission can have many remediations, or a remediation can have many stages, and they are all worth tracking. We don't want to delete information about when a submission was sent for remediation the first time, but we do need to have a way to account for follow up work. This puts us in a situation where it's become more difficult to say with certainty that a submission is ever truly successful, and so the best option left to us is to define "success, so far...", thus allowing us to eliminate a submission from monitoring, while allowing for the possibility of future work. Our solution must account for this.

In a perfect world, there are be ways to define "true success." This could be global tracking ID and an API to tell us an adjudicator has closed the submission, or the time to rebuild our application to be a true pass-through system that never owns vet data. For now, vets-api is the first link in a long chain of data holders, and is therefor the best place to revisit should something get broken or go missing down the line.

TL;DR: Our solution must support ongoing remediation

##### -- There is no 'Evidentiary Chain of Custody' for remediation --

I'm borrowing a familiar legal term here to underscore the importance of a sub-problem that we are facing. To restate our high level goal, we need a "source of truth" for which submissions have been successfully handled, and which have not. Tagging give us the programmatic representations of these states, but does little to address how submissions enter a success state, or why.

Database records representing happy path submissions receive adjustments via application code to put them in a success type state (addition of `submitted_claim_id`). These programmatic processes have had the benefit of design, peer review, testing, version control, and redundancy. For everything else there is polling and remediation, and the process by which we track success for these is at best messy, at worst non-existent.  

I'm putting aside backup path polling for a moment, as that will be addressed by the aforementioned work to [fix our backup submission polling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#1-repair-our-backup-submission-polling-job). For our remediated submissions, we have what I'll call the Master List.

This "list" is comprised of a patchwork of data assembled from shared documents, revisited emails, slack messages, unrecorded conversations, and more.  What's worse, the Master List is **literally only conceptual**. If you asked for it today, several people would have to coordinate efforts to assemble it over the course of days. What's even worse still is that this list benefits from none of the aforementioned protections awarded to our happy path submission data. Changes to this list receive no oversight or review and are highly manual. If a submission were missed, put in the wrong place, or simply mistyped, then that small mistake becomes a real world veteran who's claim will potentially not be processed. Given this fact, we can accept nothing less than 100% accuracy in recording what has been remediated. Even one incorrectly categorized submission is too many. 

Our system is error prone, and our results must be error free, a clear contradiction . We must fix this, and no solution to 526 remediation can be considered complete without addressing this discrepancy.

TL;DR: Our solution must codify changes to the history of a submissions remediation lifecycle

##### -- We rely on failure state assignment --

In our first version of the state machine, we relied heavily on failure state assignment. For instance, if a submission worker exhausted it's retries, we expected it assign a failure type state using sidekiq's built in `sidekiq_retries_exhausted` functionality. This worked most of the time, but ultimately, given our stated goal of ensuring we *never miss a single submission* to which end we are using **exclusive methodology**, we have to assume that this code can break or fail to execute, thus failing to assign a failure type state. If this were to happen and we only relied on failure type states, then we would miss that submission. This methodology fails to meet the standard set forward by our stated goals, and in practice, ended up being squirely and is part of the reason our current state machine cannot be trusted.

Failure state assignment is still a good idea, and we should do it. When it works (which is most of the time) it gives us context on what failed, when, why, etc.  However, we cannot exclusively rely on it. We need to use an exclusive methodology, in which anything that is not explicitly successful (or in progress) is considered a failure. 

TL;DR - Our solution must provide redundancy accounting for submission failure outside of failure-state assignment.

### Acceptance Criteria

To recap our [stated, high-level goals](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#problem-statement-1), Our solution must do these three things:

- **Create data:** Identify submissions that can be ignored (successful or in-process) to facilitate exclusive methodology.
- **Record data:** This data should live in our database, not external documents.
- **Expose data:** We need codified ways of interacting with this data and viewing submissions by state.

Our implementation must also:

1. Be simple and easy to grok
2. Remove redundant sources of truth
3. Support complex remediation lifecycles
4. Codify changes to the history of a submission's remediation lifecycle
5. Not rely on failure-state assignment


### Implementation Design

We can ticket and complete the following tasks, in this order

#### 1. Facilitate Recording of Data
Part of the reason we are still auditing our data is because we didn't take time to set up a sustainable process for recording it the first time around. Our first step is to facilitate the recording of success-type and in-process type submission states. To this end, our tasks are


##### a. Create a Form526SubmissionRemediation model

This allows us to do a few things. First, track every remediation effort with flexible context data in a text field where we can add data about the remediation effort, e.g. "remediated as part of the 2024 Code Yellow". Second, we will be able to track multiple remediations for a single submission. We should know about every time a submission was sent for remediation. This will preserve valuable context about why a submission was remediated, how many times it was remediated, and give us bread crumbs in case of failed efforts down the line. Third, a free standing model for remediation allows us to give instances their own tags or state, which will be useful in the case of follow up requests that require reverting a submission to failure state, or marking a submission as a duplicate. By creating this model we will support complex remediation lifecycle and codify changes to a remediation lifecycle. Serves our goal of **Recording Data**.

**Model Structure**
- `form526_submission_id` - Foreign key to facilitate submission `has_many` remediations / remediation `belongs_to` submission association
- `lifecycle` - Array to record bits of context. These will be required for `create` and `update` actions. 
- `success` - Boolean with a default of `true`
- `created_at` - critical for accessing the most recent remediation
- `updated_at` - why not
- `ignored_as_duplicate` - boolean with default of `false`.

**Model Validations**
- `create` and `update` actions require a string providing context on the change
- if `ignored_as_duplicate: true` then `success: true` must also be the case. Otherwise we would have be a paradox, as an ignorable duplicate is fundamentally a submission where we have determined there is no further remedial action required.
- `form526_submission_id` must be present. 

**Model Methods**
- `mark_as_unsuccessful`
  - transition the record to `success: false` and log the change to Datadog.
  - also requires a `context` argument to be added to the `lifecycle` value
  - timestamps the incoming `context` string before saving
- `ignored_as_duplicate?`

**NOTE:** These will never be created by application code. They will be created manually by a developer, most likely via a script at the time of remediation.  Having our application automatically create these when it thinks it's found a failure state breakes the [exclusive methodolgy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology) by expecting our application to identify failure states.

##### b. Add `backup_submitted_claim_status` enum to the `Form526Submission` model

This enum will have 3 allowed values, `:accepted`, `:rejected` and `nil`. Also serves our goal of simplifying state, removing redundant sources of truth, not relying on failure state assignment, and **recording data**.

- `nil` is the default state.
  - A submission with a `submitted_claim_id` will remain `nil` forever.
  - A submission with a `backup_submitted_claim_id` and a `backup_submitted_claim_status` of `nil` is assumed to still be processing, unless otherwise identified as a failure by the analyzing agent (e.g. a scope on the model that looks for stuff that's been pending *too long*).
- A submission with a `backup_submitted_claim_id` and a `backup_submitted_claim_status` of `:accepted` is success type.
- A submission with a `backup_submitted_claim_id` and a `backup_submitted_claim_status` of `:rejected` is failure type.
- *Anything else is a failure-type state.* Remember we are using the *exclusive methodology*, therefore if a submission ever gets in a weird state where it has some mismatch of the above data points, we default to assuming it needs investigation. Remediation may or may not be necessary, but that will be determined by investigation.

NOTE: we are *not* adding a `processing` state. While tempting, this would violate our need for elimination of duplicate sources of truth. 

##### c. Add methods and scopes to the `Form526Submission` model to leverage the data in the `SubmissionRemediation` model.

By adding scopes and helper methods to `Form526Submission` we allow for simple, robust interaction with the new underlying data provided by the `SubmissionRemediation` model and the `accepted_by_backup_path` enum.  This serves our goal of making our state simple and **exposing data**.

- `remediated?` (instance method) that checks if a submission's most recent `submission_remediation` exists and has a value of `success: true`. Note that this doesn't imply success or failure state on it's own. The purpose of this method is to help demystify this logic for future developers and stakeholders.
- `success_type?` (instance method) returns a boolean based on the following criteria
  - has a `submitted_claim_id` and a `backup_submitted_claim_status` of `nil`
  - has a `backup_submitted_claim_id` and a `backup_submitted_claim_status` of `accepted`
  - has a *most recent* `submission_remediation` record with a value of `success: true`
- `in_process?` (instance method) returns a boolean based on the following criteria
  - `true` if a submission does not have a `submitted_claim_id` or a `backup_submitted_claim_id` and is within the time boxed pending state. (e.g. it's a day old)
  - `false` if a submission does not have a `submitted_claim_id` or a `backup_submitted_claim_id` and the time boxed pending state has expired (e.g. it's a week old)
- `failure_type?` (instance method) true if the above `success_type?` and `in_process?` are both `false`
- `duplicate?` (instance method) checks for the most recent `submission_remediation` value for `ignored_as_duplicate`
- `success_type` (scope) queries all submission records that would meet the same criteria defined in the `success_type?` method.
- `in_process` (scope) queries all submissions that meet the same criteria defined in the `in_process?` method.
- `failure_type` (scope) anything that is not captured by the above `success_type` or `in_process` scope.

When all is said and done, the `failure_type` scope is what we've been after since day one. With this tool in place, everything we've done in the past year to identify and track failures will be reduced to the following rails command; `Form526Submission.failure_type`. 

#### 2. Remove the `aasm_state` value and legacy state machine code.

As a sanity check, let's see how all of this data would be captured by our new paradigm;

- `delivered_to_primary` is implied by the presence of a `submitted_claim_id`. Even if a submission also somehow has a `backup_submitted_claim_id` and remediations, we still know it was technically delivered to primary.  This is a success type submission.
- `failed_primary_delivery` is implied by the absence of a `submitted_claim_id`. This was originally a transitional state, however there is no need to have an explicit state here; the submission will either soon receive a `backup_submitted_claim_id`, or will never receive either, putting it into a time boxed pending state based failure state.
- `rejected_by_primary` A meaningless state, since the primary path was a synchronous acceptance. This is also implied by the absence of a `submitted_claim_id`.
- `delivered_to_backup` implied by the presence of `backup_submitted_claim_id` and a `backup_submitted_claim_status` of `nil`. This grouping is also subject to the timebox aged limit.
- `failed_backup_delivery` implied by the absence of both `submitted_claim_id` and `backup_submitted_claim_id` and the timebox age limit
- `rejected_by_backup` implied by presence of a `backup_submitted_claim_id` and a `backup_submitted_claim_status` of `:rejected`
- `in_remediation` implied by the presence of a `submission_remediation`, except now we also have context and `success` state on the remediation.
- `finalized_as_successful` this was a catch-all to say we were done with it. This has been replaced by the concept of success type submissions.
- `unprocessable` Intended as a generic failure state, this was never used. There are now other, better ways to determine failure-state.
- `processed_in_batch_remediation` This was a remediation-specific state, which (after our final backfill) will be implied by presence of a `submission_remediation` with applicable `context`, e.g. "Processed as part of 2024 code yellow remediation batch"
- `ignorable_duplicate` Another remediation-specific state, which we will preserve for posterity with the presence of a `submission_remediation` record with a value of `ignored_as_duplicate: true`.

The old state machine is now redundant, and has been problematic, so we just need to remove it. This serves our goal of making state simple and removing duplicate sources of truth.

#### 3. Backfill our new state

At this point we will have robust systems in place to track our backup path and remediation submission states! We will need to ingest some data to cover the last year of remediation.

##### a. Run a final audit and backfill our new state

Now that we have our ways of tracking state, and ways to expose it for testing, we can run a final audit and backfill with actual quality checks.  This will be much faster and easier than our last audit, because we already have all the pieces in place to do it. This will mean taking all of the submissions that have been sent for remediation and backfilling them with their correct `submission_remediation` record context. This step will **create data**. 

Two sources we will use for this data are
- the list we got from VBMS (Alex's team) with every submission ID that was submitted during the early batching days
- the list of follow up submissions that we identified in the audit and submitted (or will soon re-submit) for subsequent remediation
  - a subset of these will be given the `ignored_as_duplicate: true` tag using the audit funnel logic.
 
NOTE: probably a good idea to poke around and see if there is anything else stakeholders or team members may remember as a source of truth we should review here. Note that it's ok if we forget things, because we will have the ability to easily rinse and repeat in the next stage.
 
##### b. Review / Remediate any remaining failure type submissions

At this point we will have the ability to very easily pull a list of submissions that are 'failure type'. This may be 0, it may be 1000. If it's more than a few, then it's likely we need to revisit our backfill lists and make sure it wasn't simply missed. Once we have fully backfilled every single remediation instance with it's appropriate state, anything left will (probably) require remediation. At this point we will have a simple, foolproof way of identifying submissions in need of remediation!

## Conclusion
To summarize, we are going to do the following
1. Fix our backup submission polling
2. Rebuild or Form526Submission state

  A. Add a `SubmissionRemediation` model
  B. Add a `backup_submitted_claim_state` enum
  C. Add an API (model level methods) for working with this new data
  D. Remove our old state machine

3. Audit and backfill our state

These steps will ensure we have a simple, maintainable, scaleable, risk free, and foolproof concept of Form526Submission state.
