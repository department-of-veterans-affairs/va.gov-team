# How to close, once and for all, the 526 submission failure black hole

## TL;DR
1. we need to know, with certainty, at anytime what submissions in our system require remediation.
2. we need to have a plan for surfacing these.
3. we need a playbook for fixing them so anyone with the proper access is able to.

This document focuses on how we can address #1. This work will unblock #2, which will in turn give us something upon which to focus the efforts of #3.

## Mission Statement
We need a simple, reliable, and sustainable way to check 
requires manual intervention to pass through our system, a.k.a. remediation.

## The Problem

We have done a ton of remediation, auditing, and more remediation over that last year.  Soon, everything we set out to remediate will be remediated. That leave two big questions to answer...

1. Does the mean there is nothing else to remediate?
2. Will there be more failures that require remediation in the future?

Simply put, our 'problem statement' is that the answers here are
1. No, we haven't gotten everything, because they are still coming in.
2. Yes, there will always be more, because things can always go wrong.

## Q1. Does that mean there is nothing else to remediate?
No. There are currently failed submissions in our database that require remediation, or are in a state where we aren't sure. They have not stopped coming in since we began remediation.

Our current 'system' here is remembering the dates on which we began a remediation, thus sectioning off everything after for future consideration. This is and extremely brittle system that requires reliably recording and communicating the date. Additionally, if we find a bug in our earlier remediation efforts (which has happened several times) then the system breaks.

## Q2. Will there be more failures that require remediation in the future?
Yes. Though we have patched all the holes we know of in the production code, there are two reasons we have to say 'yes' to this question.
1. We are still seeing a trickle of submissions that were started before bug fixes went out get completed and fail
2. Stuff happens, and we need a way to ensure it doesn't spiral into a massive problem like it did this last time around.

## The solution is transparency
We need a simple, reliable, and sustainable way to check the state of a 526 Submission. With robust state in place, we unblock automated failure reporting, which seems like the logical next step towards making sure everything get's remediated.

### How do we get there?

One way to do this (the 'naive' solution) is to use our Form526Submission state machine. Currently it's buggy.  To get this state machine to 100% working we need to ensure the following events result in a success-type submission, for every submission, every time.

- When a submission succeeds via the happy path
- When a submission succeeds via the backup path
- When a submission fails both
- When a submission succeeds via manual remediation  

By ensuring these 4 events are recorded, no matter how they transpire, we will have a data-point in our database that allows us to run a query that tells us exactly which submissions are in a failure state, and which are in a success state.

### How is this different from the weekly report?

The weekly report is *pretty good* but it's not perfect.  Looking back at this list...

- When a submission succeeds via the happy path
  - this is captured accurately
- When a submission succeeds via the backup path
  - this is captured **pretty well but not with 100% accuracy**
- When a submission fails both
  - this is captured accurately
- When a submission succeeds via manual remediation
  - this is not captured, by design. However, if we wanted to expand the 'one week' report to
    'the last year' report, the current report breaks down because there is not a 100% reliable 
    data-point for remediation.

This is because the weekly report relies on the available data, i.e.
- presence of `submitted_claim_id` indicates happy path success
- presence of `backup_submitted_claim_id` to indicate backup path success but this is not 100% accurate! The true measure here would be presence of `backup_submitted_claim_id` *and* a success state for this submission, from Lighthouse Benefits Intake API. More on this later
- absence of either indicates failure, which is correct **if** the timeline is short enough, e.g. one week.  However, if we stretched the report to even a few weeks or months, we would be incorrectly flagging some successful submissions (handled by remediation) as failures

### So how did we do the audit?

For the audit [we built a
'funnel'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md)
to look at existing data such as `submitted_claim_id` and
`backup_submitted_claim_id`, but then also 
applied de-duplication, rules, and comparison against a master list of 'remediated' submissions. 

### Why can't we just use the funnel in the weekly report?

A few reasons.

- The master list of remediated submissions is every changing (as we remediate) and not in the database to boot. It's a big list, so importing it and using it in the funnel is non-trivial
- The de-duping logic is not in production codebase.
- the 'rule layer' (basically grab the earliest non-successful submission from a set of duplicates) is not in the production codebase.

### So how do we get a wholistic picture, at anytime, of what submissions are in a state of needing remediation

We do what I said above, and ensure that the for critical life cycle events are recorded somewhere permanent and easily accessible via application code, i.e. the Database

If we break it down the work required for each event:

- When a submission succeeds via the happy path
  - nothing to do here, we have a solid data-point in `submitted_claim_id` in the Database
- When a submission succeeds via the backup path
  - Fix our Lighthouse Benefits Intake API polling. This is a mechanism that checks that all important second data-point here, i.e. pass / fail state in the receiving API.
    This already exists, it's just not working as well as it should. When we have this data-point, we need to record it in the Database.  Currently we are attempting to use
    the `Form526Submission#aasm_state` to do this. It's not a terrible solution, but there may be a better one. For now, we can proceed assuming that's what we'll do.
- When a submission fails both
  - this is captured accurately, on a short timeline, however if we expand our report to a few weeks or months we loose visibility into what has been remediated. This
    can / kind of already is / should probably be recorded in the `aasm_state` value
- When a submission succeeds via manual remediation
  - We have attempted to capture this in the `aasm_state` field, however given the rapid iterations on our funnel logic, these tags are not currently reliable. This
  event is also interesting in that it can only happen outside the application via admin / developer intervention. Are goal here is to ensure that when this happens, it is
  recorded in the database. There are a few ways to handle this, more on that later.

## Next Steps
These are some options. we may not need to do all of them, and there may be better solutions revealed upon closer inspection

### The best option IMHO
Ask Lighthouse Benefits Intake to give us a synchronous response when we submit to them via the backup path. This would eliminate our need for brittle polling, and with it the vast majority of our complexity. IMHO this is the best option, as it would also mirror what happens on the happy path. If we were able to get this, we could use the existing paradigm of `backup_submitted_claim_id` presence to indicate success on the backup path, leaving only remediation to be considered.

### The complex, brittle option
- IF the above cannot happen, we need to do a few things to expand our existing State Machine (OR come up with a different solution altogether, as long as it satisfies our mission statement).
  - then we should close the backup path / Lighthouse Benefits Intake polling loop. This is debugging of current code.
  - Simplify the 526 State Machine. Right now there are many verbose tags, we should probably whittle it down to the key data-points
  - Sync with team 1 on 'wholistic state'. How would they like to see backup state jive with what they have?  Remember, happy path is handled, and that's primarily what they are doing.
