# 526 State Repair work Technical Design Document

## Pupose
[In this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md) we lay out why we need this work done. This document breaks down the work into ticketable segments.

## Summary
At the top level, we (stake holders and engineers) need to know, at a glance, what submissions in our database require remediation. By surfacing this data we unblock remediation efforts, admin dashboards for tracking failures, and the construction of reusable developer / programatic tools for working with failures.

To accomplish this goal, our first step is knowing what submissions have failed.  Unfortunately, 'failure' is a nebulous concept that can be arrived at any number of unpredictable ways. Therefor, the best way to find what has failed is to use an *exclusive methodology* and instead identify and eliminate everything that is explicitly successful, and consider everything else a failure-like state. This is currently a long, complex process (see our [Audit Funnel for more details](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)). The work described herin is designed to streamline, codify, and automate this process.

### This is important, don't skip this paragraph
A "state machine" is a codified way of describing changes in data based on system events. It's a programmatic concept, **not a user facing tool**. There is no state-machine dashboard or admin login. The Stakeholder facing layer will be Datadog monitors built on top of code on top of the state machine. That will come later; this work is required to unblock that work but it is different. **The stakeholder facing data will be a dashboard tracking failed submissions per unit time.**

## TODO
Under the hood, this will be accomplished by
- standing up / repairing our 526 state machine
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

Feedback to incorporate:

I kind of would like to know if there are any dependencies or risks that would keep us from starting this work or even finishing it? It sounds like Lighthouse is one of them, but I need that to be more specific. What exactly do we need and why (the benefits).

You also mentioned two options. I would like more details (technical approach) on these. Tell me more about what the (currently two, but as you mentioned there might be more) options are by adding the pros and cons of each option and then (eventually after you have reviewed them ) the team’s recommendation for which option we should go with. Think about scalability, dependencies, unknowns, risks, etc. Anything that might help you identify just how much work this will involve. You will eventually have to “map” this out for a high level estimate.

Our goal for this sprint will be to show this planned Epic to Emily and Sam. How we have outlined the need (problem statement) and the benefits of doing the Epic (why), and most importantly what it would take to get it done (high level requirements). We should all work on this together with you. You know it best, so your input is needed the most.

What you want to use for your discovery tool is up to you. We can create a mural board for visioning and mapping if that is easier. Google Document if that is faster, or even if you want to keep working in Github. If you need to create a diagram or chart I leave that up to you on the tool (does VA use Lucid chart?). (FYI Product people love diagrams by the way.) Once we feel comfortable with the scope of work we’ll create an Epic and the features, and tasks to go with them. It’s easier to do that when you feel more confident you have enough information to start so you don’t have to do it over again.
