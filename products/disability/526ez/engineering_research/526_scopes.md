# Form526Submission Scopes

## Context
### Purpose
An explanation the different scopes are on the Fomr526Submission model, what they should / shouldn't capture, and why we need them

### History

Why do we need these? These are the foundation of [the 'saftey net' I outline here]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md)), which is informed by learning from our [2023 / 2024 Form526Submission remediation "Code Yellow."]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)). They will be used to power Datadog dashboards and / or monitors that will keep us and all future VA.gov teams accountable to the state of our Form526Submission.

These scopes are where the rubber meets the road for our ["exclusive methodology"]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology)). They define the boundries of every known state a Form526Submission can be in, thereby allowing us to consider everything else "failure type" and in need of attention.

### Naming Convention
- do not append `_submissions` to the name. This is implicit.
- `*_type` implies a logical grouping of subscopes. These are the more powerful scopes for building abstractions for stakeholders.

### Logical Limitations
These scopes give us 100% coverage of Form526Submissions within the scope of va.gov. They even cover edgecase failures downstream to some extent ([see this doc on 'paranoid success' for more]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md))).  However, if Lighthouse, EVSS, VBMS, or any of the other isolated links in the submission life 'chain' fail silently, and no body tells us, we can't do anything about that. Therefor, we can say these scopes give us **100% coverage of va.gov, but nothing else.** Someday we might have a wholistic state solution that covers the entire lifecycle of a submission, but for now ensuring the integrity of our 'link in the chain' is the best we can do.

### Technical Limitations
It's not uncommon for these scopes to timeout when run from a command line. There are 'memory-light' versions scripted under each scope header below that can be used to acheive the same results without crashing your Postgres connection.

## Form526Submission Scopes

### pending_backup
### in_process
### accepted_to_primary_path
### accepted_to_backup_path
### rejected_from_backup_path
### remediated
### success_type
### failure_type
### incomplete_type
### success_by_age_type
### paranoid_success_type

