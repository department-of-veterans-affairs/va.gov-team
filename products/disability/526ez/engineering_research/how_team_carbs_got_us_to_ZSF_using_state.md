## Early Days

When our contract began, we inherited remediation of the Form 526 'silent' failure problem, a patchy way of dealing with it, a buggy app still generating failures, and a few incorrect assumptions from OCTO about how to track failures. Here is a break down.

### The V1 Remediation Process

This was handed off to Me. It involved taking a scripted version of the Form 526 Submission backup path code and manually running it against a list of submission IDs. This involved

- Using the script (created by Kyle Soskin) that essentially emulated the behavior of the backup submission path
- Referencing and updating A 'master list' of failed submission IDs, provided by OCTO
- Creating a final packaged PDF stored with a signed, expiring link.

This way of doing it was rife with problems, more on that in the following sections. 

- Here is a document I wrote at that time to begin capturing the state of that work. ['Failure Batching and Triage Handoff'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md)
- Here is a subsequent document I wrote when I began identifying and raising problems with the process to stakeholders. ['How to close, once and for all, the 526 failure submission blackhole'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md)
  - this is where I begin to advocate for the idea of state.

### Application Bugs

The application was still generating 'lost submissions' or 'silent failures' while we were doing remediation. At this time, we were being told to focus on getting the 'master list' of failed submissions remediated, even though these failures were still coming in, untracked.

### Lack of Monitoring

OCTOs prescribed solution for tracking 'silent failures' was adding monitoring around known failure point.

- Identify possible failure points (third party API interactions).
- Design a common way of monitoring. This was the "third party interaction logging wrapper".
- Build a number of datadog dashboards tracking these interactions.
- Weekly Report [todo]

This was an insufficient solution for many reasons, which I began to voice at the time and go into in detail in my ['526 Safety Net'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md) document.

## Paradigm shift away from monitoring to state

There were many problems with the way we were doing things, namely because we were ignoring failures that were actually silent, and not tracking new failures. Additionally when we did remediate something, we had no real way of tracking it. Here I pushed back again, but the marching orders continued to be "Just finish the 'master list'". 

Specific problems I identified and raised at that time included...

### Problems with the 'Master List'
- The 'master list' got passed around a lot, modified non-programmatically, and had no version control. We had absolutely no way of ensuring data integrity.
- The 'master list' did not actually include 'silent failures', it included 'noisy failures', meaning submissions that had successfully raised and recorded an error.
- the 'master list' was not accounting for new failures, which were still pouring in by the thousands because we had not been given time to fix bugs.

### Problems with Monitoring

Again, monitoring can only capture 'noisy errors,' which were no where near 100% of our failures. I suspected and raised this over and over, but was largely ignored at this point. This is when I began to realize we were going to need an audit, which in turn required state.

Additionally, it was possible (and common) for a noisy failure to be alerted on, but then nothing ever happened. Monitoring requires a dedicated person or team to ensure that the notified failures get addressed, which is essentially what the watch officers were brought in to do. This was a messy, slow, and only partially successful way of doing it at best. Here I started visualizing a 'safety net' that would hold failures, silent and noisy, until they were explicitly marked as remediated, which again required state.

### My solution; State

I realized that if we were going to do an audit, have real tracking of remediation, and someday a safety net, we would need a programmatic concept of state. [Here I document my case for building a 'state machine'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md).

At this point, we were still under a good deal of pressure to keep up with the 'bleeding', that is the constant flow of 'noisy failures' (at this time called silent by OCTO). Things got muddled here when Nathan took the first pass at designing the State Machine. 

Nathan took the first pass at designing this, but his initial planning got a bit muddled up with Document Upload, and ultimately OCTO simply said "no." State became something of a dirty word, because the use case I was advising wasn't well understood.

Despite my documented, repeated insistence at this time that we needed some form of State to ever reach true ZSF, I was told it was not something we should focus on, and to keep up with remediation. Ultimately, I essentially built this in secret. We needed it to do what OCTO was asking, even though they seemed unwilling to hear our case.

## Bug fixes, in parallel.

While I was doing V1 remediation and secretly building state into the Form 526 Submission model, Thomas asked me to start generating lists of active, known bugs in the system categorized and ranked by how big of a problem they were. Again, OCTO didn't really want us doing this, they were being extremely prescriptive about "Remediate first, patch later."

We called this method of finding and ranking failures the ['Failure Scoreboard'](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/failure_reporting/failure_scoreboard.rb) and it was instrumental in identifying and patching failure points.

## The Audit

When we 'finished' the V1 remediation, OCTO effectively announced we were done. I took it upon myself to again insist to multiple stake holders that we were missing submissions, and after some pushback Emily finally agreed to support the Audit. I think the value of this was slightly more evident than state, so this was less of a fight, and more of a gentle convincing, however again OCTO came to us with a prescriptive (and incorrect) way of doing this.

The OCTO version involved simply going through emails and CSVs and collecting records of what we were 'pretty sure' that we had sent. I raised the problem with the 'master list' method, and Emily agreed to reach out to the downstream source of truth (VBMS) to get a new list of what they had received.

Upon receiving this list, I began to do the audit in the way that I had designed and originally advocated for, using my ['Exclusive Methodology'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology) ['Audit Funnel'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md) which I designed for the purpose, essentially treating all submissions as potentially failed and eliminating from that set anything we could prove was successful.

This allowed us to identify several failures that were actually silent, such as [problems with our backup path polling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#1-repair-our-backup-submission-polling-job) , and the [paranoid success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md) edge case, the latter of which litterlly no one on our team or OCTO knew about, and would've just continued to quietly existed if I hadn't decided to look into it without OCTOs prompting.

Once we had a clear picture of what was successful and what was remediated, I was able to uncover well over 100,000 submissions that had been missed that were in a non-successful state.

## De-duplication

OCTO identified that we were submitting lots of duplicate submissions for remediation, when one would suffice. I build de-duplicating tools to compare submissions for 'sameness' within an OCTO defined tolerance. Again, we used State here to mark these duplicates as safe to ignore. This would have been useless work without State.

Here is the initial documentation about how we should de-duplicate, ['Identifying and Tagging Duplicates of Form526Submission'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/deduplicating_526_submissions.md), and here is a subsequent document about a problem I discovered while developing our de-duplicating tools, ['Complex de-duping'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/complex_submission_deduplication.md)

[De-duplication was done using the scripts in this directory](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/526/deduplication).

## State Improvements

At this point, OCTO was aware I was using state, but was neither supporting nor fighting further improvements. It seemed that the value had become somewhat self evident, and so I continued to develop our concept of submission state. This was work done entirely without OCTOs prompting or encouragement, based on my own designs and research. This allowed us to accommodate edge cases and provide a more robust, easy to understand version for future developers. I created a distinct model to allow and logic to allow for multiple remediation per submission. Some examples of problems this enhanced form of state tracking addressed...

- the constantly expiring links we were using, as well as technical difficulties in the down stream ingestion processes.
- duplicate submission tracking
- lack of context around when / why something had been remediated or re remediated.

## State today and 'The Safety Net'

Through all of this, and even at the time of writing, OCTO has remained skeptical of the use of state
for defining submission success. I felt a good way to demonstrate value was to create a
non-technical, admin facing dashboard that simply displayed a count of how many
submissions were in a non-explicitly-successful state and required
investigation. This was, as was so much of this, something I conceived and built of on my own,
with no prompting and little buying from OCTO. This dashboard is currently **our only comprehensive source of truth for identifying failures**.

### Why was / is there no buy in for state?

This is my best guesses / feelings.

First, state, especially within the va.gov API database, is not necessarily the best solution. There has been talk of an alternate solution where we use universal identifiers that would allow event and / or state monitoring across the entire life cycle of a submission. This would be a much better solution, but as I know, at the moment it's not under serious consideration.

It's also worth noting that this would simply be a different, broader form of state tracking, where we are able to see if a submission has registered a 'success event'.

Second, it's weird having the web API be the source of truth for submissions. Ideally, vet-api would be a thin pass through API and our source of truth would be much farther down stream. However, the simple fact here is that **va.gov was being used as the system of record for recreating the submissions, as well as for several flavors of 'success tracking', and therefore is the logical place for this state**, at least for now.

Third, I suspect there were a lot of misunderstandings in the early dates about what state was for. Nathan's first pass at it ended up trying to do too much, and obfuscated the usefulness of what I was actually advocation for.

All together, this seemed to create the perception that State was poorly conceived, overwrought, and generally weird and in the wrong place.

## Summary

The remediation effort we inherited would never have gotten us to true zero silent failures. We developed a way of actually getting there, and despite a lot of setbacks and pushback from stake holders, developed this system while simultaneously handling the remediation they asked for, as well as fixing the root causes.

- Without state, we would've never had any reliable tracking of what had been remediated. Without the improvements, we never would've been able to keep up with the re-remediation and evolving needs of our stakeholders.
- Without state, we never would've actually found any truly silent failures. Looking at errors was only giving us 'noisy' failures.
- Without state, we never would've identified several obfuscated bugs, such as problems with our polling and the [paranoid success edge case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md)
- Without state, we never would've had a way to eliminate duplicates of failed submissions from remediation.

**TL;DR - Without the state that I and our team fought for, we would not have reached zero silent failures on this contract.**
