# How State Enabled 'Zero Silent Failures' for the 526 Form

This document is my personal perspective and memory of the history of remediation, how OCTO worked with team carbs, and at times against us in reaching zero silent failures for the form 526 submission on va.gov.  The purpose of this document is to illuminate, for posterity, how Team Carbs was able provide value by identifying and advocating for a better solution.

## Early Days

When our contract began, we inherited remediation of the Form 526 'silent' failure problem, a patchy way of dealing with it, a buggy app still generating failures, and a partially-incorrect assumption about how to track failures. Here is a break down.

### The V1 Remediation Process

This process involved taking a [scripted version of the Form 526 Submission backup path](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/526/batch_remediation/historical) code and manually running it against a list of submission IDs. This involved

- Using the script (created by Kyle Soskin, itterated on by Sam Stuckey) that essentially emulated the behavior of the backup submission path
- Referencing and updating a 'master list' of failed submission IDs, provided by OCTO.
- Creating a final packaged PDF stored with a signed, expiring link.

This way of doing it was rife with problems, more on that in the following sections. 

- Here is a document we created at that time to begin capturing the state of that work. ['Failure Batching and Triage Handoff'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/526_failure_batching_and_triage_handoff.md).
- Here is a subsequent document we created when we began identifying and raising problems with the process to stakeholders. ['How to close, once and for all, the 526 failure submission blackhole'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md)
  - this is where we begin to advocate for the idea of state.

### Application Bugs

The application was still generating 'lost submissions' or 'silent failures' while we were doing remediation. At this time, we were being told to focus on getting the 'master list' of failed submissions remediated, even though these failures were still coming in, untracked. This was an intial friction point with OCTO, where we began to advocate for bug fixes before remediation.

### Lack of Monitoring

OCTOs prescribed solution for tracking 'silent failures' was adding monitoring around known failure point.

- Identify possible failure points (third party API interactions).
- Design a common way of monitoring. This was the "third party interaction logging wrapper".
- Build a number of datadog dashboards tracking these interactions.
- Generate a Weekly Report of 'silent' (not actually silent) failures.

This was an insufficient solution for many reasons, which we began to voice at the time. I and go into in detail in the ['526 Safety Net'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md) document.

## Paradigm shift away from event monitoring to state

There were many problems with the way we were doing things, namely because **we were ignoring failures that were actually silent, and not tracking new failures**. Additionally when we did remediate something, we had no real way of tracking it. Here we pushed back again, but the marching orders continued to be "just finish the 'master list' first."

Specific problems we identified and raised at that time included...

### Problems with the 'Master List'

- The 'master list' got passed around a lot, modified non-programmatically, and had no version control. We had absolutely no way of ensuring data integrity.
- The 'master list' did not actually include actual 'silent' failures, it included 'noisy' failures, i.e. submissions that had successfully raised and recorded an error somewhere.
- the 'master list' was not accounting for new failures, which were still pouring in by the hundreds because we had not been given time to fix bugs.

### Problems with Monitoring

Monitoring can only capture 'noisy errors,' which were no where near 100% of our failures. [We suspected and raised this issue](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#---we-rely-on-failure-state-assignment---) but were largely ignored at this point. This is when we began to realize we were going to need an audit, which in turn required state.

Additionally, it was possible (and common) for a noisy failure to be alerted on, but then for nothing ever happened with that alert. Monitoring requires a dedicated person or team to ensure that the notified failures get addressed, which is essentially what the watch officers were brought in to do. This was a messy, slow, and only partially successful way of doing it. Here we started visualizing a 'Safety Net' that would hold failures, silent and noisy, until they were explicitly marked as remediated. This also required state.

### Our solution; 526 State

We realized that if we were going to do an audit, have real tracking of remediation, and someday a safety net, we would need a programmatic concept of state. [Here we document the early case for building a 'state machine'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md).

At this point, we were still under a good deal of pressure to keep up with the 'bleeding', that is the constant flow of 'silent' (noisy) failures. Things got muddled here when we took a first pass at designing the State Machine. THe initial planning sprawled a bit and became untenable with the inclusion of Document Upload, and ultimately OCTO simply said "no." State became something of a dirty word, because the use case we were advising wasn't well understood.

Despite our well documented and repeated insistence at this time that we needed some form of state to ever reach true 'zero silent failures', we were told it was not something we should focus on, and to keep up with remediation. Ultimately, we essentially built this in secret. We needed it to do what OCTO was asking, even though they seemed unwilling to acknowledge this truth.

## Bug fixes, in parallel.

While we were doing V1 remediation, and quietly building state into the Form 526 Submission model, We decided we should start generating lists of active, known bugs in the system categorized and ranked by how big of a problem they were. Again, OCTO didn't really want us doing this. They were being extremely prescriptive about "Remediate first, patch later."

We called this method of finding and ranking failures the ['Failure Scoreboard'](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/failure_reporting/failure_scoreboard.rb) and it was instrumental in identifying and patching failure points.

## The Audit

When we 'finished' the V1 remediation, OCTO effectively announced to the VA that we were done. Our team continued to insist that we were missing submissions, and after some pushback OCTO finally agreed to support the Audit. This was less of a fight than state, more of a gentle convincing, however again OCTO came to us with a prescriptive (and incorrect) way of doing this.

The OCTO version involved simply going through emails and CSVs and collecting records of what we were 'pretty sure' that we had sent. We raised the problems with the 'master list' method, and OCTO ultimately agreed to reach out to the downstream source of truth (VBMS) to get a new list of what they had received.

Upon receiving this list, we began to do the audit in the way that we had designed and originally advocated for, using the ['Exclusive Methodology'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology) and an ['Audit Funnel'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/funnel_logic.md).

This allowed us to identify several failures that were _actually silent_, such as [problems with our backup path polling](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#1-repair-our-backup-submission-polling-job) and the [paranoid success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md) edge case, as well as many submissions that had come in since the end of the previous remediation.

Once we had a clear picture of what was successful and what was remediated, **our first audit uncovered well over 100,000 submissions that had been missed** that were in a non-successful state.

## De-duplication

OCTO identified that we were submitting lots of duplicate submissions for remediation, when just one would suffice. At their request, we build de-duplicating tools to compare submissions for 'sameness' within an OCTO defined tolerance. Here we used state here to mark these duplicates as safe to ignore.

Here is the initial documentation about how we should de-duplicate using state, ['Identifying and Tagging Duplicates of Form526Submission'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/deduplicating_526_submissions.md), and here is a subsequent document about a problem we discovered while developing the de-duplicating tools, ['Complex de-duping'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/complex_submission_deduplication.md).

[De-duplication was done using the scripts in this directory](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/benefits/scripts/526/deduplication).

## State Improvements

At this point, OCTO was aware we were using state, but was neither supporting nor fighting further improvements. It seemed that the value had become somewhat evident, and so we continued to develop our concept of submission state. This was work done without OCTOs prompting or encouragement, based on our own ideas and research. This allowed us to accommodate edge cases and provide a more robust, easy to understand version for future developers. We created a distinct model `Form526SubmissionRemediation` and logic to allow for multiple remediations per submission. Some examples of problems this enhanced form of state tracking addressed are...

- The constantly expiring links we were using, as well as technical difficulties in the down stream ingestion processes.
- duplicate submission tracking
- lack of context around when / why something had been remediated or re remediated.

## State today and 'The Safety Net'

Through all of this, and even at the time of writing, OCTO has remained skeptical of the use of state for defining submission success. We thought a good way to demonstrate it's value was to create a non-technical, admin facing dashboard that simply displays a count of how many submissions are in a non-explicitly-successful state and require investigation. This was something our team conceived of and built of on our own, with no prompting and little buy-in from OCTO. This dashboard is currently **our only comprehensive source of truth for identifying 526 failures vets-api**.

### Why was / is there no buy-in for state?

**NOTE: These are best guesses and personal feelings from the author.**

First, state, especially within the va.gov API database, is not necessarily the best solution. There has been talk of an alternate solution where we use universal identifiers that would allow event and / or state monitoring across the entire life cycle of a submission. This would be a much better implementation, but as far as I know at the moment it's not under development or serious consideration. It's also worth noting that this would simply be a different, broader form of state tracking, where we are able to see if a submission has registered a 'success event'.

Second, it's weird architecture having our web API (which is essentially intended to be a simple data transformation system) be the source of truth for submissions. Ideally our source of truth would live much farther down stream with the VA or VBMS. However, the simple fact here is that **va.gov was being used as the system of record for recreating the submissions, as well as for several flavors of 'success tracking', and therefore was the logical place to put this state**, at least for now.

Third, I suspect there were a lot of misunderstandings in the early days about what state was for. Our team's first pass at it ended up trying to do too much and potentially obfuscated the usefulness of what we really needed it for.

All together, this seemed to create the perception that state was poorly conceived, overwrought, and generally weird and in the wrong place.

## Summary

The remediation effort we inherited would never have gotten us to true zero silent failures on its own. Our team developed a way of actually getting there, and despite a lot of setbacks and pushback from OCTO, developed this system while simultaneously handling remediation and bug fixes. In summary...

- Without state, we would've never had any reliable tracking of what had been remediated. Without the improvements, we never would've been able to keep up with the re-remediation and evolving needs of our stakeholders.
- Without state, we never would've actually found any truly silent failures. Looking at errors was only giving us 'noisy' failures.
- Without state, we never would've identified several obfuscated bugs, such as problems with our polling and the [paranoid success edge case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/paranoid_success_submissions.md)
- Without state, we never would've had a way to eliminate duplicates of failed submissions from remediation.

**TL;DR - Without the state that our team fought for, va.gov would not have reached zero silent failures during this contract.**
