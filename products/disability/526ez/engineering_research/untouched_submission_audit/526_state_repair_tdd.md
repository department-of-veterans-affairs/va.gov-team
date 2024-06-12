# 526 State Repair work Technical Design Document

## Pupose
[In this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md) we lay out why we need this work done. This document breaks down the work into ticketable segments.

## Summary
At the top level, we (stake holders and engineers) need to know, at a glance, what submissions in our database require remediation. By surfacing this data we unblock remediation efforts, admin dashboards for tracking failures, and the construction of reusable developer / programatic tools for working with failures.

To accomplish this goal, our first step is knowing what submissions have failed.  Unfortunately, 'failure' is a nebulous concept that can be arrived at any number of unpredictable ways. Therefor, the best way to find what has failed is to use an *exclusive methodology* and instead identify and eliminate everything that is explicitly successful, and consider everything else a failure-like state. This is currently a long, complex process (see our [Audit Funnel for more details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)). The work described herin is designed to streamline, codify, and automate this process.

The final, stakeholder facing value of doing this work is
- Unblocking the creation of Admin facing Datadog tools that allow insight into what has failed, when failures are happening, and related alerting
- A sustainable, reusable developer workflow for debugging and remediating failures (de-bus-valuing me).

### An important note on what this is and isn't
A "state machine" is a codified way of describing changes in data based on system events. It's a programmatic concept, not a user facing tool. There is no state-machine dashboard or admin login. **The Stakeholder facing layer will be Datadog tools that show failed submissions per unit time.** That will come later; this work is required to unblock that work but it is different. This is important to keep in mind because the states being added have been designed to allow for programatic opperation on the data, not to be user facing bit's of information. Stakeholder input should be limited to the desired end result, rather than implementation details. The state machine is not the place to track things like how a submission was remediated. That information will not be lost, but it is being removed from this part of the application.

To acheive our stated goal of 'repairing 526 state' we need to do the following, ideally in the order described below.

## 1. Repair our Backup Submission Polling Job
### Problem
We have many submissions that seem stuck in a state of `delivered_to_backup`. This may be due to a problem with the 526 Benefits Intake Status job, [defined here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_status_polling_job.rb).  `delivered_to_backup` is a transitory state, implying that a submission was successfully delivered to the Benefits Intake API. However, the purpose of this job is to do a daily query against the Benefits Intake Polling API with every submission in a state of `delivered_to_backup` with the goal of transitioning them into a pass / fail state based on the results of that poll.  The Benefits Intake API assigns these their own internal status of `vbms` or `success` if the submission passed their internal validations, or a status of `error` or `expired` (TODO: double check that `expired` is the correct name for this status) if the submission fails their internal processing. 

Upon investigation of a random set of submissions that were still in the `delivered_to_backup` state, the majority *should* have been transitioned on based on their Benefits Intake status. This implies that the job is doing something wrong.

### Acceptance Criteria
- When running, the `Form526StatusPollingJob` polls *all* applicable submissions, i.e. those in the state of `delivered_to_backup`
- When returning a "pass" type status for a submission, the submission is successfuly and reliably transitioned into a state of `finalized_as_successful`
- When returning a "fail" type status for a submission, the submission is successfuly and reliably transitioned into a state of `rejected_by_backup`

## 2. Simplify or Replace our State

### The Problem
Currently, we have the following states
`:delivered_to_primary, :failed_primary_delivery, :rejected_by_primary, :delivered_to_backup, :failed_backup_delivery, :rejected_by_backup, :in_remediation, :finalized_as_successful, :unprocessable, :processed_in_batch_remediation, :ignorable_duplicate`

Many of these are confusing, such as `failed_backup_delivery`, which indicates a failed HTTP request, vs `rejected_by_backup` which indicates a "fail" type status assignment via Benefits Intake polling.

Other states were created for the purpose of remediation, and have no real value to the application processing logic outside of saving datapoints about what was remediated when, such as `processed_in_batch_remediation`.  In practice this means the same thing as `finalized_as_successful` or `in_remediation`, which is that for these submissions we have "fullfilled our contract" with the veteran, ie. moved the submission from our web api to the appropriate next step ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#what-is-an-untouched-submission).)

Finally, perhaps worst of all, we have states that create a duplicate source of truth with other, better, more reliable datapoints. For example, `delivered_to_primary` is another way of saying that the submission should have a `submitted_claim_id`. This is the datapoint we use to set the state, there is no other meaninful way to define it. This becomes confusing in the case where a submission has a `submitted_claim_id` and so is technically `delivered_to_primary`, but for one reason or another ended up on one of our "remediated submission lists" ([more](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md#determining-state).) This creates a situation where we have a submission that rightly belongs to two states, `delivered_to_primary` and / or one of the aformentioned remdeation type states (`processed_in_batch_remediation`, `ignorable_duplicate`, `in_remediation`, `finalized_as_successful`)

#### Why is 526 State it in such a bad way?

Short answer is rapid itteration, uncertainty around what data was important, and too many cooks in the kitchen. Unfortunately, due to the speed at which this evolved documentation is limited, but these are the most relevant paths for for context

- [Original document describing the work of "Auditing" our database for untouched submissions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/post_remediation_audit_for_untouched_submissions.md)
- [The document describing the failures of the current system and outlining the need to fix it](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md)
- [A description of how tags were initially applied](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)

Additionally, there was an attempt to use the state machine to keep track of how a submission was remediated, ie. `processed_in_batch_remediation`, `in_remediation`, `ignorable_duplicate` Per VA stakeholders we **do want to know which remediation path a submission went down**, at least to the extent possible. There are a number of ways that submissions can be remediated, and it's also possible, likely even that some will have more than one remediation. 

#### Evidentiary Chain of Custody

I'm borrowing a familiar term here to describe another sub-problem we are facing. To restate our high level goal here, we need a "source of truth" for what has been remediated and when. 

Tagging things is only half the battle. We need a record of how, when, why, and by whom a submission was marked as "done", otherwise we run the risk of having false positives in subsequent audits. The current system is messy, involving passing lists, going back to reference CSVs, slack messages, unrecorded conversations, humans typing things out, copy pasting, programatically filtering, and so on. Initially the audit was designed to deal with this by once and for all creating a system of marking things as "done" or "not done", relative to our contract with the Veteran. However, due to the problems outlined in our ["closing the black hole" doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md), we cannot say with certainty that we've done this.

In the future, we will likely find more submissions that need remediating. If someone opens a list of "remediated by batch" ids and puts the id on there, we need a record of that. If a submission previously marked remediated is kicked back to us for more work, and it needs to be removed and re-remediated a different way, we need a record of that.  Otherwise, we are setting ourselves up for a situation where a veteran or Congress comes to us with specific questions about a (or many) lost submission(s), and we won't be able to tell them what happened.

For a solution to be considered complete, it must account for this problem. 

### Acceptance Criteria
Our new solution must
- refine our existing states to the bare minimum
  - Makes this more readable for layment and future developers
  - Makes this less failure prone
- remove redundant sources of truth
  - remove any state prior to backup path
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
