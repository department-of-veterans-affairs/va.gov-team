# 526 State Repair Technical Design Document

## Pupose
[In a previous document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md) we have laid out why we need to do the work described herin. The goal of this document is to break down the work into actionable segments.

## Key terms and and concepts
- **submission**: Refers to an instance of the class `Form526Submission` and the veteran submitted claim it represents, used for brevity.
- **failure**: Refers to a failure to process a submission. Also refered to as "not-done" and "failure like state."
- **in process**: Referes to an instance of `Form526Submission` that is not yet ready to be defined as a success or failure. More on this below. [TODO - link]()
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

#### Implementation Design
This will depend on what we identify as the problems with our polling job.

### 2. Rebuild State from the ground up

#### The Problem(s)

##### -- Bloated, Confusing State Machine --

Currently, we have the following states, `:delivered_to_primary, :failed_primary_delivery, :rejected_by_primary, :delivered_to_backup, :failed_backup_delivery, :rejected_by_backup, :in_remediation, :finalized_as_successful, :unprocessable, :processed_in_batch_remediation, :ignorable_duplicate`. Many of these names are confusing, such as `failed_backup_delivery`, which indicates a failed HTTP request, vs `rejected_by_backup` which indicates a "fail" type status assignment via Benefits Intake polling.

Other states were created for the purpose of remediation, and have no real value to the application processing logic outside of saving datapoints about what was remediated when, such as `processed_in_batch_remediation`.  In practice this means the same thing as `finalized_as_successful` or `in_remediation`, which is that for these submissions we have "fullfilled our contract" with the veteran, ie. moved the submission from our web api to the appropriate next step ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#what-is-an-untouched-submission).) These mean more or less the same thing, but with an ultimately unsuccessful nod to context tracking. 

**TL;DR: Our solution must re-define state as simply and clearly as possible, eliminating bloat and providing a sustainable technical implementation upon which to build stakeholder facing tools.**

##### -- Redundant Sources of Truth --

We have states that create a duplicate source of truth with other, better, more reliable datapoints. For example, `delivered_to_primary` is another way of saying that the submission should have a `submitted_claim_id`. This is the datapoint we use to set the state, as there is no other meaninful way to define it. This becomes confusing in the case where a submission has a `submitted_claim_id` and so is technically in a state of `delivered_to_primary`, but for one reason or another ended up on one of our "remediated submission lists" ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#determining-state).) This creates a situation where we have a submission that rightly belongs to two states, `delivered_to_primary` and / or one of the aformentioned remdeation type states (`processed_in_batch_remediation`, `ignorable_duplicate`, `in_remediation`, `finalized_as_successful`)

**TL;DR: Our solution must eliminate redundant sources of truth.**

##### -- Complex Remediation Lifecycle --

Remediation is an imperfect process. Once a submission has been identified as needing remediation (i.e. it is in a failure state) it is common to send it for remediation more than once. There are a few reaons for this, primarily that remediation is a mostly manual, human process involving long communication chains, expiring documents, and follow up requests. 

This complicates our ability to define the state of a submission once it's remediation lifecycle has begun. By definition "in remediation" is a success-type state, however if there is futher work required later on, it would also be true to say that we have not fulfilled our contract with the veteran, and therefore the submission is also in a failure-type state. If we use a binary (pass / fail) system, we end up with a contradiction that can only be resolved by accepting bad data, or loosing good data.

For this reason, we must consider the remediation lifecycle / process to be potentially "complex", that is, a submission can have many remediations, or a remediation can have many stages, and they are all worth tracking. We don't want to delete information about when a submission was sent for remediation the first time, but we do need to have a way to account for follow up work. This puts us in a situation where it's become more dificult to say with certainy that a submission is ever truely succesfull, and so the best option left to us is to define "success, so far...", thus allowing us to eliminate a submission from monitoring, while allowing for the possiblity of future work. Our solution must account for this.

In a perfect world, there are be ways to define "true success." This could be global tracking ID and an API to tell us an adjudicator has closed the submission, or the time to rebuild our application to be a true pass-through system that never owns vet data. For now, vets-api is the first link in a long chain of data holders, and is therefor the best place to revisit should something get broken or go missing down the line.

**TL;DR: Our solution must support ongoing remediation**

##### -- Evidentiary Chain of Custody (aka Version Control) --

I'm borrowing a familiar legal term here to underscore the importance of a sub-problem that we are facing. To restate our high level goal, we need a "source of truth" for which submissions have been successfuly handled, and which have not. Tagging give us the programatic representations of these states, but does little to address how submissions enter a success state, or why.

Database records representing happy path submissions receive adjustments via application code to put them in a success type state (addition of `submitted_claim_id`). These programatic processes have had the benefit of design, peer review, testing, version control, and redundancy. For everything else there is polling and remediation, and the process by which we track success for these is at best messy, at worst non-existent.  

I'm putting aside backup path polling for a moment, as that will be addressed by the aforementioned work to [fix our backup submission polling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#1-repair-our-backup-submission-polling-job). For our remediated submissions, we have what I'll call the Master List.

This "list" is comprised of a patchwork of data assembled from shared documents, revisted emails, slack messages, unrecorded conversations, and more.  What's worse, the Master List is **litteraly only conceptual**. If you asked for it today, several people would have to coordinate efforts to assemble it over the course of days. What's even worse still is that this list benefits from none of the aforementioned protections awarded to our happy path submission data. Changes to this list receive no oversight or review and are highly manual. If a submission were missed, put in the wrong place, or simply mistyped, then that small mistake becomes a real world veteran who's claim will potentially not be processed. Given this fact, we can accept nothing less than 100% accuracy in recording what has been remediated. Even one incorrectly categorized submission is too many. 

Our system is error prone, and our results must be error free, a clear contradiction . We must fix this, and no solution to 526 remediation can be considered complete without addressing this discrepancy.

**TL;DR: Our solution must codify changes to the history of a submissions remediation lifecycle**

##### -- Filtering out in-process submissions --

At a high level, an 'in process' submission is one that our application is still attempting to process it via the the primary and backup paths. During this time, there are a lot of murkey substates that we are ignoring; for our purpouses they are unimportant. For instance, the presence of an associated `InProgressForm` could indicate a submission is still in progress, or it could mean it's being run on a worker but not yet at the stage of the process where that `InProgressForm` record is removed. Fixing this complexity is out of scope, and ultimately it's not relevant to our goal which is to *find submissions that need remediation*.

At a high level, 'in process submissions' are either
- still being run on a retyring, async sidekiq worker (happy or backup path)
- has been sent to the backup path but has not yet received a finalized state from our polling mechanism

I will propose multiple ways to capture this state in the implementation section.

**TL;DR: Our solution must define 'in process' submissions for exclussion**

##### Reliance on failure state assignment
In our first version of the state machine, we relied heavily on failure state assignment. For instance, if a submission worker exhausted it's retries, we expected it assign a failure type state using sidekiq's built in `sidekiq_retries_exhausted` functionality. This worked most of the time, but ultimatey, given our stated goal of ensuring we *never miss a single submission* to which end we are using **exclusive methodology**, we have to assume that this code can break or fail to execute, thus failing to assign a failure type state. If this were to happen and we only relied on failure type states, then we would miss that submission. This methodology fails to meet the standard set forward by our stated goals, and in practice, ended up being squirly and is part of the reason our current state machine cannot be trusted.

Failure state assignment is still a good idea, and we should do it. When it works (which is most of the time) it gives us context on what failed, when, why, etc.  However, we cannot exclusively rely on it. We need to use an exclusive methodology, in which anything that is not explicitly successful (or in progress) is considered a failure. 

**TL;DR - Our solution must provide redundancy accouting for submission failure outside of failure-state assignment.**

### Acceptance Criteria

To recap the above, our new solution must do these things
1. Be simple
2. Remove redundant sources of truth
3. Support complex remediation lifecycles
4. Codify changes to the history of a submissions remediation lifecycle
5. Define 'in process' submissions for the purpose of exclusion
6. Not rely on failure-state assignment

### Implementation Design

Using a state machine to track remediation breaks down when we consider the compleixty of the remediation lifecycle and our need to codify context. Remember that our 526 state is really only required to track everything after the happy path fails. Defining the state of post-happy-path submissions is actually two sub problems
- record successful backup path submission
- record instances of remediation

The first is a boolean that is handled by the fixing of our polling. The second in a one-to-many relationship. Our first pass at a 'state machine' was opaque and insufficuent precisely because we were trying to track two very different types of data with one value. In this spirit I propose we
1. remove the `Form526Submission`'s `aasm_state` value (and related state machine code) altogether and replace it with a simple boolean field, `accepted_by_backup_path`. This is as simple and non-redundant as it gets.
2. create the model `SubmissionRemediation`

#### 1. accepted_by_backup_path boolean for backup submissions

When you break down the state machine, this is actually the only thing we need to track. Everything up to this point, including complete failures, can either be account for with the presence or absense of the `.*submitted_claim_id` values, or is not something we actually care about tracking. Here's a breakdown;
- `delivered_to_primary` is implied by the presence of a `submitted_claim_id`
- `failed_primary_delivery` is implied by the absense of a `submitted_claim_id`. This was initially intended as a transitional state for submissions that were on their way to the backup path, however there is no real reason to track it *if* we only consider submissions outside of the retry window
- rejected_by_primary
- delivered_to_backup
- failed_backup_delivery
- rejected_by_backup
- in_remediation
- finalized_as_successful
- unprocessable
- processed_in_batch_remediation
- ignorable_duplicate

#### 2. SubmissionRemediation model for remediations

We could call this `Form526Submissions::Remediation` but we also remediate other submission types. If we keep it non-specific, we may be able to reuse this model as a polymorphic solution for other form remediations in the future.

failed happy path
was sent to backup path <- needs polling
was approved by backup path <- based on polling
was rejected by backup path <- based on polling
was remediated


## Dependancies

## Risks

## Scaling
