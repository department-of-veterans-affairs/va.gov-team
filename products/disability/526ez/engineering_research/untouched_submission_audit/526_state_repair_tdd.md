# 526 State Repair Technical Design Document

## Pupose
[In a previous document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md) we have laid out why we need to do the work described herin. The goal of this document is to break down the work into actionable segments.

## Key terms and and concepts
- **submission**: Refers to an instance of the class `Form526Submission` and the veteran submitted claim it represents, used for brevity.
- **failure**: Refers to a failure to process a submission. Also refered to as "not-done" and "failure like state."
- **success**: Referes to successful, complete, nothing-left-to-do processing of a submission. The submission has passed successfully through our system from the Veteran to the relevant next step. Also refered to as "fulfilling our contract", "done", and "success type states". 
- **remediation**: Any process out side of the "happy path" or "backup path" form submission flow for 526 that is used to move a submission into a success state.  Typically this involves a developer and stake holder working closely to identify and package failures in a processable format, then passing that package off to relevant parties.
- **State machine**: A "state machine" is a codified way of describing changes in data based on system events. It's a programmatic concept, not a user facing tool. There is no state-machine dashboard or admin login. *The Stakeholder facing layer will be Datadog tools that show failed submissions per unit time.* That will come later; this work is required to unblock that work, but they are different.
- **Exclusive methodology**: Unfortunately, 'failure' is a nebulous state at which a submission can arrive in any number of ways. Therefore, the best way to identify what has failed is to use an *exclusive methodology* to identify and eliminate everything from a set (all submissions) that is explicitly *successful*. Then, we can simply consider everything else a failure-like state. An *exclusive methodology* is necesary to prevent missed edge cases, in which a bug, logic change, or unforseen circumstance creates a new path to failure. Determining success state for the purpose of exclusion is currently a long and complex process that not enough people know how to execute from end to end. ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)). 

## Resources
- [Original document describing the work of "Auditing" our database for untouched submissions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/post_remediation_audit_for_untouched_submissions.md)
- [The document describing the failures of the current system and outlining the need to fix it](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md)
- [A description of how tags were initially applied](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)
  
## Summary
At the top level, we (stake holders and engineers) need to know, at a glance, what submissions in our database require remediation. By surfacing this data we will unblock future remediation efforts and the creation of admin dashboards and insight tools. Simply put we need to see when a submission fails, and the process of looking should be easy.

### The final, stakeholder facing value
This work will

- Unblock the creation of Admin facing Datadog tools that allow insight into what has failed, when failures are happening, and related alerting.
- Create a sustainable, reusable developer workflow for debugging and remediating failures (de-bus-valuing me).

## TODO
### 1. Repair our Backup Submission Polling Job
#### Problem Statement
We have or have had many submissions that seem stuck in a state of `delivered_to_backup`. This may be due to a problem with the 526 Benefits Intake Status job, [defined here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_status_polling_job.rb).  `delivered_to_backup` is a transitory state, implying that a submission was successfully delivered to the Benefits Intake API. However, the purpose of this job is to do a daily query against the Benefits Intake Polling API with every submission in a state of `delivered_to_backup` with the goal of transitioning them into a pass / fail state based on the results of that poll.  The Benefits Intake API assigns these their own internal status of `vbms` or `success` if the submission passed their internal validations, or a status of `error` or `expired` (TODO: double check that `expired` is the correct name for this status) if the submission fails their internal processing. 

Upon investigation of a random set of submissions that were still in the `delivered_to_backup` state, the majority *should* have been transitioned on based on their Benefits Intake status. This implies that the job is doing something wrong.

#### Acceptance Criteria
- When running, the `Form526StatusPollingJob` polls *all* applicable submissions, i.e. those in the state of `delivered_to_backup`
- When returning a "pass" type status for a submission, the submission is successfuly and reliably transitioned into a state of `finalized_as_successful`
- When returning a "fail" type status for a submission, the submission is successfuly and reliably transitioned into a state of `rejected_by_backup`

### 2. Rebuild State from the ground up

#### The Problem(s)

##### Bloated, Confusing State Machine

Currently, we have the following states, `:delivered_to_primary, :failed_primary_delivery, :rejected_by_primary, :delivered_to_backup, :failed_backup_delivery, :rejected_by_backup, :in_remediation, :finalized_as_successful, :unprocessable, :processed_in_batch_remediation, :ignorable_duplicate`. Many of these names are confusing, such as `failed_backup_delivery`, which indicates a failed HTTP request, vs `rejected_by_backup` which indicates a "fail" type status assignment via Benefits Intake polling.

Other states were created for the purpose of remediation, and have no real value to the application processing logic outside of saving datapoints about what was remediated when, such as `processed_in_batch_remediation`.  In practice this means the same thing as `finalized_as_successful` or `in_remediation`, which is that for these submissions we have "fullfilled our contract" with the veteran, ie. moved the submission from our web api to the appropriate next step ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#what-is-an-untouched-submission).) These mean more or less the same thing, but with an ultimately unsuccessful nod to context tracking. 

**TL;DR: Our solution must re-define state as simply and clearly as possible, eliminating bloat and providing a sustainable technical implementation upon which to build stakeholder facing tools.**

##### Redundant Sources of Truth

We have states that create a duplicate source of truth with other, better, more reliable datapoints. For example, `delivered_to_primary` is another way of saying that the submission should have a `submitted_claim_id`. This is the datapoint we use to set the state, as there is no other meaninful way to define it. This becomes confusing in the case where a submission has a `submitted_claim_id` and so is technically in a state of `delivered_to_primary`, but for one reason or another ended up on one of our "remediated submission lists" ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#determining-state).) This creates a situation where we have a submission that rightly belongs to two states, `delivered_to_primary` and / or one of the aformentioned remdeation type states (`processed_in_batch_remediation`, `ignorable_duplicate`, `in_remediation`, `finalized_as_successful`)

**TL;DR: Our solution must eliminate redundant sources of truth.**

##### Complex Remediation Lifecycle

Remediation is an imperfect process. Once a submission has been identified as needing remediation (i.e. it is in a failure state) it is common to send it for remediation more than once. There are a few reaons for this, primarily that remediation is a mostly manual, human process involving long communication chains, expiring documents, and follow up requests. 

This complicates our ability to define the state of a submission once it's remediation lifecycle has begun. By definition "in remediation" is a success-type state, however if there is futher work required later on, it would also be true to say that we have not fulfilled our contract with the veteran, and therefore the submission is also in a failure-type state. If we use a binary (pass / fail) system, we end up with a contradiction that can only be resolved by accepting bad data, or loosing good data.

For this reason, we must consider the remediation lifecycle / process to be potentially "complex", that is, a submission can have many remediations, or a remediation can have many stages, and they are all worth tracking. We don't want to delete information about when a submission was sent for remediation the first time, but we do need to have a way to account for follow up work. This puts us in a situation where it's become more dificult to say with certainy that a submission is ever truely succesfull, and so the best option left to us is to define "success, so far...", thus allowing us to eliminate a submission from monitoring, while allowing for the possiblity of future work. Our solution must account for this.

In a perfect world, there are be ways to define "true success." This could be global tracking ID and an API to tell us an adjudicator has closed the submission, or the time to rebuild our application to be a true pass-through system that never owns vet data. For now, vets-api is the first link in a long chain of data holders, and is therefor the best place to revisit should something get broken or go missing down the line.

**TL;DR: Our solution must support ongoing remediation**

##### Evidentiary Chain of Custody (aka Version Control)

I'm borrowing a familiar legal term here to underscore the importance of a sub-problem that we are facing. To restate our high level goal, we need a "source of truth" for which submissions have been successfuly handled, and which have not. Tagging give us the programatic representations of these states, but does little to address how submissions enter a success state, or why.

Database records representing happy path submissions receive adjustments via application code to put them in a success type state (addition of `submitted_claim_id`). These programatic processes have had the benefit of design, peer review, testing, version control, and redundancy. For everything else there is polling and remediation, and the process by which we track success for these is at best messy, at worst non-existent.  

I'm putting aside backup path polling for a moment, as that will be addressed by the aforementioned work to [fix our backup submission polling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#1-repair-our-backup-submission-polling-job). For our remediated submissions, we have what I'll call the Master List.

This "list" is comprised of a patchwork of data assembled from shared documents, revisted emails, slack messages, unrecorded conversations, and more.  What's worse, the Master List is **litteraly only conceptual**. If you asked for it today, several people would have to coordinate efforts to assemble it over the course of days. What's even worse still is that this list benefits from none of the aforementioned protections awarded to our happy path submission data. Changes to this list receive no oversight or review and are highly manual. If a submission were missed, put in the wrong place, or simply mistyped, then that small mistake becomes a real world veteran who's claim will potentially not be processed. Given this fact, we can accept nothing less than 100% accuracy in recording what has been remediated. Even one incorrectly categorized submission is too many. 

Our system is error prone, and our results must be error free, a clear contradiction . We must fix this, and no solution to 526 remediation can be considered complete without addressing this discrepancy.

**TL;DR: Our solution must codify instances of remediation context**

### Acceptance Criteria

Our new solution must do these things
1. be simple
2. remove redundant sources of truth
3. Support complex remediation lifecycles
4. Support "Evidentary Chain of Custody"

- remove redundant sources of truth
  - remove any state prior to backup path success or failure. These are implied by the presence of `submitted_claim_id` or `backup_submitted_claim_id`. If a submission has neither of these it is automatically considered to be in a failure like state.
  - Note to exclude submissions still in progress from the above consideration.
- Support complex remediation lifecycles
  - If a submission is remediated and sent back, we need to be able to continue to track it's progress without reverting it to a meaningless state. There are two reasonble ways of doing this
    - Keep 526 State where it is, simplified in the `aasm_state` value.  Additional context will need to be tracked in some sort of version control (so github).  I imagine this would be lists of submissions checked in and updated with signed PRs so we have a "chain of custody". 






failed happy path
was sent to backup path <- needs polling
was approved by backup path <- based on polling
was rejected by backup path <- based on polling
was remediated


## Dependancies

## Risks

## WIP

- define dependancies (e.g. LH)
- define risks
- discuss scalability
- discuss unknowns
