# The 526 Claim Submission Safety Net

This document outlines how we ensure 100% coverage for submission failures relative the Form 526 Submission within vets-api.

## TL;DR

By making failure the default state for a `Form526Submission` record we ensure that, as long as our definition of success doesn't change, `Form526Submission` records can never fail silently.

## How to get to 100% coverage in theory

[For technical implementation details, skip to this section.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#how-we-did-this-in-practice-on-526)

### Track success, not failure

This idea is at the heart of what we did with 526.  Hooks, logs, and data points that represent instances of a failure are great for getting a general picture of application health, but failure is inherently unpredictable, and therefor attempts to define and capture it can never be truly comprehensive.  Logs can fail to run, database transactions can fail, etc.

Instead, by defining what is a success we can consider everything else potentially failed, thereby ensuring that if it exists, it won't be missed. When failure is the default, silent failure is impossible.

I'll be referring to this a lot as our ['Exclusive Methodology'](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/526_state_repair_tdd.md#note-on-exclusive-methodology)

### Separate 'Failure' from 'Cause of Failure'

Our goal is to find every failure, no mater how surprising. Within our "everything that's not explicit success" group, some submissions will not have clear failure indicators. For this reason we should think of failure as 'failure like' or 'failure type' in order to denote that though we don't know immediately if this is truly a failure, it's not a success, which is close enough.

### Define 'Scope of Responsibility'

Ultimately we want full end to end coverage for a submission. This could be accomplished with wholistic state, or a series of tightly coupled 'scopes of responsibility'.

We do not currently have wholistic state, so it's critical to define the scope of our responsibility relative to failure tracking. For my team, this was form 526 submission from the moment it enters vets-api until the moment it reaches a success state within vets-api. For the purpose of our '100% coverage' I'm assuming nothing about what happens before or after a submission exists within the scope of responsibility. This is practical and necessary to do both in theory and in practice.

### Have an airtight definition of success

This will likely be a multifaceted definition, but if the scope of responsibility is tight enough, it is perfectly possible to do. A quick nod to the difficulty of maintaining this definition over time, but [more on that later.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#how-we-stay-at-100)

Success will be defined by a 'handshake' with the receiving entity. For 526 this ranged from [the simplicity of a synchronous response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#happy-path), to the complexity of a [multi-layered polling solution that runs async for a up to a year](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#note-on-the-paranoid-success-edge-case).

The important thing is to know exactly when a submission has reached it's success state, or when it has run out of time to reach it's success state, which we cover in the next section.

### Account for transitional state(s)

We could call this 'in process' or 'in progress', but essentially it's anything that cannot *yet* be clearly defined as success or failure. The key here is to ensure that **this is a temporary state**. If submissions languish here indefinitely then at some point they should simply be considered failure, otherwise we have no clear way to report them.  For 526, we did this with a 3 week timebox from the time of creation. After that, it's a failure.

### Use State, not Events

We define success based on 'state', not 'event'. We do this because it is simple and robust. E.g. If a submission is sent to the happy path and the request returns successfully with a "submitted claim id", that looks a lot like a success but **it's not successful until that submitted_claim_id is recorded in the database.**  

We do not care about what has happened to a submission, we only care where it is now.

While we could theoretically log every state change as an event, that quickly becomes prohibitively complex to implement and leverage in any practical sort of reporting.

## How we did this in practice on 526

### Scope of Responsibility

This was defined for us and constrained by our available resources. That definition is...

- From the moment a 526 form data set is submitted via the va.gov website
- Until that data set is confirmed to be successfully received by the next link in the chain. Currently this is EVSS or Lightouse Benefits Intake.

### Definitions of success

There are 3 ways a submission can reach a success state in our scope of responsibility.  Again, for our purpose here we don't care about [how](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#bonus-use-state-not-events) or [why](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#separate-failure-from-cause-of-failure) they reached this state.  However, for posterity each section contains a description of the most typical means by which these states are arrived at.

#### Happy Path

*AKA: Primary Path, Auto-establishment path*

**Old version**
- IF a submission has a value for `submitted_claim_id`
- THEN it is considered successful

- the vets-api app enqueues the [SubmitForm526AllClaim](https://github.com/department-of-veterans-affairs/vets-api/blob/4a88293ea5203af450f88189eec1f1f3041aae16/app/models/form526_submission.rb#L106) job
- This job attempts to submit this claim to an external API (currently EVSS) with retries.
- The job receives a success response from the external api containing a foreign key.
- The job saves this foreign key on the `Form526Submission` as it's `submitted_claim_id`.

**Current version**
The current version includes a case for success the old way as well as a new way in which a submission is successfully sent to the Lighthouse Claims API and a successful PDF upload status is returned later via polling. [see this ticket for more details!]https://github.com/department-of-veterans-affairs/va.gov-team/issues/90175).

This state is typically reached via the following steps

#### Backup Path

- IF a submission has a value for `backup_submitted_claim_id`
- AND a submission has a value of `accepted` or `paranoid_success` for it's `backup_submitted_claim_status` value
- THEN it is considered successful

This state is typically reached via the following steps

- the Happy Path job fails or exhausts it's retries.
- the Happy Path job enqueues the [Form526BackupSubmissionProcess::Submit](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/sidekiq/form526_backup_submission_process/submit.rb) job.
- this job submits to the Lighthouse [Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake)
- The job receives a success response from the external api containing a foreign key.
- The job saves this foreign key on the `Form526Submission` as it's `backup_submitted_claim_id`. (NOTE: though logically similar within our application, these are a very different ID type within the final VA system).
- The [Form526StatusPollingJob](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_status_polling_job.rb) polling job will use the `backup_submitted_claim_id` to poll the benefits-intake API for updates to the submissions status for up to [3 weeks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#account-for-transitional-states).
- This polling identifies that the benefits intake API has assigned this submission a status of 'vbms' or 'success'
- a status of 'vbms' is reflected locally as a value of `accepted` in the submission's `backup_submitted_claim_status` value
- a status of 'success' is reflected locally as a value of `paranoid_success` in the submission's `backup_submitted_claim_status` value

##### note on the 'Paranoid Success' edge case

A status of `vbms` from Benefits Intake can be safely treated as the end of our scope of responsibility. However, an edge case was uncovered where some submissions given a status of `success` in Benefits Intake could later be transitioned back into 'processing', and therefor we have to assume they could still fail. For that reason we created a secondary polling solution that will continue watching for changes to any `Form526Submissions` with a `backup_submitted_claim_status` of `paranoid_success` for up to 1 year. After 1 year, we assume our scope of responsibility has ended and the submission is considered 'successful by age'. 

We treat paranoid success as success instead of possible failure in order to give a common sense picture of our applications state without needing the 1 year delay on these.

#### Remediation

- IF a submission has one or more associated instances of `Form526SubmissionRemediation`
- AND the most recently created of those has a value of `true` for it's attribute `success`
- THEN this is considered successful

[For more on how we remediate duplicate submissions, see this document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/deduplicating_526_submissions.md)

##### why have multiple remediations with a success state?

Remediation of form 526 submissions was a very long and complex process. Many submissions were at one time considered 'remediated', but later needed to be remediated again. This is due to the fact that remediation was a highly manual process involving coordination of humans for manual processing way downstream. Technical limitations and inevitable communication problems contributed as well, and we needed a way to not lose the context of why things had been remediated multiple times.

We only look at the most recent `Form526SubmissionRemediation` for `success: true` because we assume if someone initiated a new remediation, there was a good reason. The 'success' value provides a way for a developer to mark something as "no longer considered remediated" without needing to delete that remediation record and the context it provides.

Remediation is manual and error prone, this record helps us maintain context without sacrificing our tight definition of success.

More on how to mark a 526 Submission as remediated here (TODO - write and link)

### Definitions of in process

#### Happy Path / Backup Path / Remediation

- IF a submission has no explicit failure indicators
- AND it does not have a `submitted_claim_id` or `backup_submitted_claim_id`
- AND it is less than 3 weeks old
- THEN it is assumed to be "in processes"

We do not distinguish between in processes on the Primary, Backup, and Remediation paths. There is no practical value added by knowing if something is in flight on the happy path or backup path worker. We could technically extrapolate this information using submissions associated `Form526JobStatus` records, but this would blur the lines of [tracking failure vs success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#track-success-not-failure). 

Additionally, this change over happens programmatically, i.e. fast. By the time we gathered this data it's likely to be irrelevant.

**TL;DR - in processes is intentionally nebulous.**

As far as delineating 'in process remediation', it's antithetical to the goal. If a remediation is in process, then that submission is [failure like](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#separate-failure-from-cause-of-failure).  If a remediation is complete, then that submission is in a success state.

## How we stay at 100%

### Maintain our definitions 

It all comes back to our 'scope of responsibility'. There are many very real limitations to this system, such as the currently ongoing question of whether or not we can consider a submission successful [when one or more of it's user provided documents failed to upload](https://github.com/orgs/department-of-veterans-affairs/projects/1263/views/7?filterQuery=-label%3A%22DBEX-TREX%22+-status%3ADone+epic-name%3A%27Veteran+Evidence+Doc+Silent+Failures+-+Discovery%27&pane=issue&itemId=71160732). Our definition of success  assumes that a `Form526Submission` is delivered whole to a single success state, but if pieces of it can fall away in transition, then we need to account for that.

#### KNOWN LIMITATION: Vet doc upload success

Since the inception of the safety net, our definition of success has already changed in one way.  Success must also include the successful delivery of Veteran provided documents to their own success state. This is not currently reflected in this system.

One way we could address this limitations is by updating our [Form526Submisison 'scopes'](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/scopes/form526_submission_state.rb).  These were designed to be modular, easy to grok, and easy to update.

For example, if we want to change our definition of success relative to the primary path to include successful document upload, we could change this...

```
  scope :accepted_to_primary_path, lambda {
    where.not(submitted_claim_id: nil)
  }
```

To something like this

```
  scope :accepted_to_primary_path, lambda {
    where.not(submitted_claim_id: nil)
    where(vet_docs_successfully_uploaded: true)
  }
```

As you can see this references a new subsidiary state `vet_docs_successfully_uploaded`, which would need to be set upon completion of document upload. This is a naive implementation, but the idea is the point; represent document upload as state, then leverage that state in our 'definition of success'.  The critical takeaway is that **every new bit of state must maintain the 'exclusive methodology'**.

#### KNOWN ISSUE: Primary Path polling

There has also been talk about adding polling to the primary path. Same as above, if we do this our definition of success changes. So we would need to change...

```
  scope :accepted_to_primary_path, lambda {
    where.not(submitted_claim_id: nil)
  }
```

To something like this...

```
  scope :accepted_to_primary_path, lambda {
    where.not(submitted_claim_id: nil)
      .where(submitted_claim_status: :accepted)
  }
```

This mirrors how we handle polling on the backup path.  Same deal here, we need to maintain our 'exclusive methodology' and avoid something like this

```
  scope :accepted_to_primary_path, lambda {
    where.not(submitted_claim_id: nil)
      .where.not(submitted_claim_status: :rejected)
      .where.not(submitted_claim_status: ni)
      .where.not(submitted_claim_status: :expired)
  }
```

The bad version relies on identifying failure, not success, [which means we can't trust it.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#track-success-not-failure)

##### **UPDATE: this was rolled out and addressed!**  

[The changes outlined in this issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90175) successfully extended the saftey net to cover a new definition of success on our happy path

## Can we build something better?

Almost certainly, yes. Think of this system as plugging all the holes in the bottom of the boat, but the rest of the convoy is still sinking, pirates are coming, there's a sea monster, etc. There is a lot more to do until we get to true 100% coverage for even the 526 form.

As of the time of writing this there are conversations going on in the VA about universal tracking IDs or even a wholistic solution for state.  Whether or not we use this exact solution elsewhere, or even on 526 in the long term, I think what we've done here demonstrates that 100% coverage well within reach.

I believe the key is using exclusive methodology to implement whatever solution the organization decides on.

## What do we do with this information, now that we have it?

All of this work boils down to one thing, which is knowing at a glance which submissions are in some failure type state and require manual intervention.  That is represented now in our [Benefits - Form 526 Disability Compensation dashboard (in Datadog)](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/benefits---form-526-disability-compensation?fromUser=false&refresh_mode=sliding&from_ts=1723574123356&to_ts=1726166123356&live=true) as one big number.  This number will never go down unless we manually remediate these submissions. In this way, we can avoid using CSVs or github issues to track lists of Submission IDs that need remediation. Instead, we can simply use `Form526Submission.failure_type` in a production console to reliably return exactly what is in a failure state, based on the above rules.

There are many ways we could inspire action on these submissions, e.g. alerts or weekly remediation tasks. For now, we have a big scary number that I'm hoping people will be unable to ignore or forget about. 

<img width="1192" alt="Screenshot 2024-09-11 at 3 04 21 PM" src="https://github.com/user-attachments/assets/c4e7c184-5d96-40dc-ab01-14ed3119846a">

### Other stuff we could do

I mentioned [our new 526 scopes above](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#known-limitation-vet-doc-upload-success). These power our `failure_type` scope, but can also be useful unto themselves. For example, if we want to know the percentage of submissions that went to the backup path over the last week we could do the following...

```
at = Form526Submission.arel_table
subs = Form526Submission.where(at[:created_at].gt(1.week.ago))
100 * (subs.with_exhausted_primary_jobs.count / subs.all.count)
```

Or if we wanted to see the unique reasons we've run remediations, we could do this...

```
Form526Submission.remediated.map do |sub|
  sub.last_remediation.lifecycle
end.uniq
```

Currently OCTO leadership receives a weekly email with numbers like 'how many submissions did we process', 'how many failed the primary path', and so on. This was our old way of trying to keep track of what was in a failure state, but these metrics still have use. We could easily stand up a Datadog dashboard widget or alert that uses our new [state logging](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/sidekiq/form526_state_logging_job.rb) data, if we wanted to make this weekly report automatic. 

## Summary

We spent over a year developing [various types of audits to capture submission failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/untouched_submission_audit/closing_the_blackhole.md) during our Code Yellow remediations.  Now, as long as we maintain our [safety net's axioms](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/the-526-failure-saftey-net.md#how-to-get-to-100-coverage-in-theory), this labor is no longer necessary.  `Form526Submission.failure_type` gives us a complete picture.

By using an exclusive methodology, we make it possible to ensure that submissions are not able to slip through the cracks, doing our part to ensure no veteran will ever wait for benefits any longer than they have to.
