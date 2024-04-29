# Post Remediation Audit for Untouched Submissions

## Purpose
We are performing an audit of our va.gov (vets-api) database with the goal of identifying submissions that were never submitted to completion, releative to our platform.  This includes submissions that failed to reach a critical API, ones that were passed on by us to external APIs that were then quietly rejected, silent failures within our application that have not been remediated.  In laymens terms, **any veteran submitted 526 form where we failed to complete our contract on a submission**, ie. getting it from the veteran to the appropriate VA intake aparatus.

**NOTE: these submissions are described herin as 'untouched' submissions**
**NOTE: for simplicity, the language of this document makes no distinction between submission forms, database records, or datbase record primary keys (submission Ids)**

The following is documented:
-[x] A list of submissions that are 'untouched' **before** deduplication.
-[ ] A list of submissions that are 'untouched' **after** deduplication.
-[ ] A break down of our deduplication process and what we deemed safe to ignore.
-[ ] The code (or links to it) used to generate these 'untouched' submission lists.

### CAVEAT: The results of this audit are not conclusive.
Our next steps will involve comparison with a similar audit being performed by VBMS.

## Context
[todo]

## The short list, aka untouched-un-deduped
[todo]


```ruby
# paste ids here
```

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
