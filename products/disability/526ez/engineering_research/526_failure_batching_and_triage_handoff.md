# 526 Failure re-try batching and triage handoff

## Purpose

A collection of key take aways from the knowledge transfer between Kyle Soskin
and Sam Stuckey, specificaly relevant to the work of batch retrying historical
failed 526 submissions, as well as ongoing triage.

## Resources
- [Kyles document of commonly used code snippits](https://github.com/kylesoskin/vets-api-code-snippets/blob/main/README.md)
  
## Context

### The Work

The following detail what happened, how it was being addressed, and why we are now transfering this work to a new team
- [Historical Epic](https://app.zenhub.com/workspaces/benefits-team-1-6138d7b57a2631001a4b7562/issues/gh/department-of-veterans-affairs/va.gov-team/44994)
- [Transitional Ticket](https://app.zenhub.com/workspaces/benefits-team-1-6138d7b57a2631001a4b7562/issues/gh/department-of-veterans-affairs/va.gov-team/62593)

### TL;DR
In mid 2022 it was discovered that we had roughly ~150k failed user submissions
in our 526 form that had never been addressed.  These failures had presented to
end users as non-failures with a message to the effect of "We cqn't submit this
now, but we will keep trying.  Due to a lack of cohesive monitoring these
failures quitely piled up where no one was looking, leaving veterans in the
dark about the status of their claims.  This problem is coliquially known to the team (now) as the "black hole" problem, as
these submissions had effectively vanished.  See the afforementioned tickets for more context
on the bug and the initial strategy to address it.

For these historical failures, after de-duping the original 150k (Some vets had
tried multiple submissions), Kyle Soskin from veteran-benefits-team-1 was tasked with
a multi faceted project to begin correcting this problem. A major part of this
work has been enabling the VBA to manually resubmit these forms. Our part of this process (or more specificially, Kyle's part until now)
was / is to run a time consuming and semi-manual process wherin we use
our existing code (via a production rails console) to generate PDFs which are in turn sent in
bacthes to VBA for re-submission (how they actually leverage these files towards
resubmitting is a black box and beyond the scope of our work.)

This process requires enhanced security credentials, 
knowledge of our existing available infrastructure for generating these PDFs,
and some proprietery scripting by kyle. Until now, the onus for this work, as
well as related or adjacent triage, was falling soley on him due to the siloing
of this knowledge.

The purpose of this knowledge transfer is to
1. Allow Kyle to be moved off on to other work, and Sam to pick up where he left
   off.
2. Allow Sam the insight needed to document and potentially automate this
   process.
3. Ultimately De-silo the knowledge and hopefully remove the need for dangrous production access

## The Batch Resbumission Flow

[This section has been moved to our playbook folder, see step-by-step here](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526-submission-failure-manual-submission.md)


## Suggested Improvements

**NOTE: This section is no longer relevant.  Keeping it for historical context.**

### Why 
The problems with the current solution are primarily
- rails production console access.  This is a well known security concnern, not only because of potential bad actors but because of simple mistakes.
- copy pasting. Introduces overhead for doing the work AND sharing the reusable code.  Introduces the possibility of syntax related bugs.  There is no oversight of the code being run.  Also, ArgoCD (our prefered interface) doesn't like it.
- lack of transparency and context sharing around input / output.  IF someone starts the process, and another person needs to finish it, then we end up in a situation where the starting dev will probably have to hand off information about the state of the process, e.g. what IDs have been uploaded, error logs, what IDs remain, etc.

[This slack thread breaks down my proposal to itterate.](https://dsva.slack.com/archives/C053U7BUT27/p1694192774356649)

### What

At a high level
- Start comminting frequently used scripts to the codebase, either as rake tasks or rails scripts
  - this subjects them to the oversite of code review
  - de-silos the knowledge
  - removes the danger of monkey patching live production code
- Start importing script input data from S3 (e.g. a list of submission ids to process)
  - removes the need to copy / paste this data
  - creates a single source of truth in the case a large, changing pool of 'todo' tasks
- Start exporting script output to CSV files for persistance and transparency.
  - removes danger of loosing valuble data to shell crash or terminal truncation
  - shares output context with team in the case a large, changing pool of 'todo' tasks

[See this design document for a full outline of how we can execute this transition](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/process_improvement_proposal_for_scriptable_tasks.md)



