# Post Remediation Audit for Untouched Submissions

## Purpose
We are performing an audit of our va.gov (vets-api) database with the goal of identifying submissions that were never submitted to completion, releative to our platform.  This includes submissions that failed to reach a critical API, ones that were passed on by us to external APIs that were then quietly rejected, silent failures within our application that have not been remediated.  In laymens terms, **any veteran submitted 526 form where we failed to complete our contract on a submission**, ie. getting it from the veteran to the appropriate VA intake aparatus.

**NOTE: these submissions are described herin as 'untouched' submissions**\
**NOTE: for simplicity, the language of this document makes no distinction between submission forms, database records, or datbase record primary keys (submission Ids)**\

The following is documented:

- [x] A list of submissions that are 'untouched' **before** deduplication.
- [ ] A list of submissions that are 'untouched' **after** deduplication.
- [ ] A break down of our deduplication process and what we deemed safe to ignore.
- [ ] The code (or links to it) used to generate these 'untouched' submission lists.

### CAVEAT: The results of this audit are not conclusive.
Our next steps will involve comparison with a similar audit being performed by VBMS.

## Context
- [This document describing the historical context of the 526 remediation effort](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)
- [This Github issue tracking our va.gov side audit](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624)

## The short list, aka untouched-un-deduped
This is our 'short list' of possible untouched submissions.  When it is de-duplicated, what is left will be our final audit result (relative to this effort).

[The short list is available here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80624#issuecomment-2083431369)

### How we got this list

[todo]
- tagging (state)
- the script

## Deduplication
[todo]

### What we excluded
[todo]

### How we excluded it
[todo]
