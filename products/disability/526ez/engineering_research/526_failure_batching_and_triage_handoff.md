# 526 Failure re-try batching and triage handoff. 

## Purpose

A collection of key take aways from the knowledge transfer between Kyle Soskin
and Sam Stuckey, specificaly relevant to the work of batch retrying historical
failed 526 submissions, as well as on going triage.

## Context

### The Work

The following detail what happened, how it was being addressed, and why we are now transfering this work to a new team
- [Historical Epic](https://app.zenhub.com/workspaces/benefits-team-1-6138d7b57a2631001a4b7562/issues/gh/department-of-veterans-affairs/va.gov-team/44994)
- [Transitional Ticket](https://app.zenhub.com/workspaces/benefits-team-1-6138d7b57a2631001a4b7562/issues/gh/department-of-veterans-affairs/va.gov-team/62593)

### TL;DR
In mid 2022 it was discovered that we had roughly <nubmer of failures> outstanding on our 526 submission.  These failures had presented to end users as successful submissions, and due to a lack of cohesive monitoring these failures had not been address.  Here are some tickets and discussions related to that Issue, henceforth known as the "black hole".  The strategy for addressing the black hole failures includes the creation of an automatic retry and backup submission flow, as well as better logging and monitoring.  For the failed submissions that originally fell into the black hole we are leveraging this new backup submission functionality (aka a 'paper' submission) to re-enqueue these jobs.  The initial list of failures was compiled by Kyle Soskin, then sent to the VA> for review.  This list was deduped (many vet's had submitted multiple claims) and sent back as a master 'retry' list.  This was ~40k submissions.  Kyle has been re-enqueued these submissions manually in batches.  Currently 3 batches have been re-enqueued.  At the present time, there are less than 7k outstanding submissions to be resubmitted via the 'paper submission' flow.  The goal of this work and the focus of this document is the knowledge transfer that is occurring around how we rerun these failed jobs manually.

## The Batch Resbumission Flow

This work entails the manual resubmission of a large number of failed submissions via the backup flow, aka the 'paper submission'.

Downstream services are
- EVSS 526 PDF document generation
    - `asdf`
- Lighthouse Backup submission endpoint
    - `asdf`
### Identify the Submissions to retry

- TODO: link to kyles batch folders


### Notify 
```


