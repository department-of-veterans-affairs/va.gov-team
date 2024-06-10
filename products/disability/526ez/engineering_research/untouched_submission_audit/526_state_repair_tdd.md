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

## TODO

To acheive our stated goal of 'repairing 526 state' we need to do the following
### 1. Repair our Backup Submission Polling Job

#### Resources
- [the polling job]() <- START HERE WIP
  - This lives here
  - fix our Backup Submission Polling Job. 
  - Identify other possible pain points and fix them

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
