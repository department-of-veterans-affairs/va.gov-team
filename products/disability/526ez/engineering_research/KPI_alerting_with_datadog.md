# KPI alerting with datadog

## Purpose

Document discovery and ideation around KPIs for enhancing our 526 health monitoring.

## Context

- [KPIs were originally defined here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
- [This epic was executed to wrap each KPI in logging]([url](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)) 
- [The Ticket]([url](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907) was created to track the leveraging of these KPIs and their new logging as Datadog dashboards and or alerts.

This document outlines suggestions that could be applied to each of these KPIs and their logging.

### Affected Actions

Of the aforementioned KPIs, these are the Class#methods wrapped in logging that would be the most vauable to alert on
- Form526Submission#submit_uploads
- Form526Submission#submit_form_0781
- Form526Submission#submit_form_8940
- Form526Submission#upload_bdd_instructions
- Form526Submission#submit_flashes
- Form526Submission#cleanup
- EVSS::DocumentUpload#pull_file_from_cloud!
- EVSS::DocumentUpload#perform_document_upload_to_evss
- EVSS::DisabilityCompensationForm#submit_complete_form
- V0::UploadSupportingEvidencesController#save_attachment_to_cloud!

## Proposals

### Completion options

#### 1. The "stared but didn't stop" check

At the moment we have several methods "wrapped" in logging using a previously developed feature, [outlined here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/implementation/reusable_logging_with_third_party_transaction_logger.md)
Each of these wrapper logs has a `started_at` and `ended_at` value in the respective log.  If we develop a query that checks for `started_at` logs that do not have an associated `ended_at` value, we should be able to pinpoint third party API failures, and alert if we start seeing a lot in one specific 3PI.

**The Query**
Using the method submit_form_4142 as and example
```
a = @payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.end_time:*
b = @payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.start_time:*
diff = a / b
```

The value `diff` should almost always be 1.  If we see a variation, we alert that we are having an outage for the endpoint used by this method

<img width="1042" alt="Screenshot 2023-09-11 at 2 32 21 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/50431410-518c-414e-9d2e-2b449fbef66c">

**Alternate implemenation with StatsD**

We could also (probably) add a statsD `start` and `stop` counter for each metric.  This would allow us to simplify the queries, making them faster and more grokable, but would require some coding work.


#### 2. The "Completion Percentile" check

This would be a check where we are looking only for `ended_at` logs against each of the existing KPIs (logged possible failure points).  If we knew the average rate at which sub steps were completed relative to the completion of the entire flow, it would be possible to see if the ratios changed.  The benefit of tracking ratios rather than simple count of completion is that we would have a more wholistic view of where users dropped off in form completion irrespective of possible external factors.  For instance, a low number of failures in a 24 hour day might actually be high relative to the number of forms started.

**The Query**

[TODO] implement a query that aggrigates this data

#### 3. Increase in Latency

This could be acheived by leveraging the `upload_duration` value included in each of our logging wrappers (although we should probably update this naming convention

** The Query **

For example, checking for `submit_form_4142` actions that take longer than 1 second:
`@payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.upload_duration:>1`

<img width="1327" alt="Screenshot 2023-09-12 at 12 02 19 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/0f73e2e3-6b6e-4540-8605-79f54c6e40ca">


### Interval based options

If we have not hit a 3pi for <unit of time> alert.  Queries here are trivial, as we simply look up the action using logs or statsD
`@payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.end_time:*`

**Note** that statsD would be preferable for this simple counting work.  Another point for the 'we should ad stats D to the logging wrapper' argument.

**Note** These intervals could all potentially be made smarter than the 'average' using the 'Completion Percentile' numbers, but that is out of scope for first pass.

#### 1. Absence in Interval

If we see an absence of traffi we could alert.  E.G we usually have ~1000 submissions a day, today we only had 0

#### 2. Decrease in Interval

If we see a slow down from our normal traffic we could alert.  E.G we usually have ~1000 submissions a day, today we only had 100

#### 3. Spike in Interval

This could indicate something stuck in a bad state, such as a loop.  E.G we usually have 100, now we have 1000.  A recent example was the NOD bug that causes infinite looping, or when there is an increase in failures causing more than usual retries.

### 4. Spike in Errors

By leveraging the `rescue` block of the logging wrapper we could track spikes in errors relative to specific 3PI methods.  This would require updating [This log]([url](https://github.com/department-of-veterans-affairs/vets-api/blob/d6849bc9b097f21a14fe6aaef26093e0ac9200fe/lib/logging/third_party_transaction.rb#L63)https://github.com/department-of-veterans-affairs/vets-api/blob/d6849bc9b097f21a14fe6aaef26093e0ac9200fe/lib/logging/third_party_transaction.rb#L63) to include the method name value as a default log, and then combining the error message with the default logs.

Coding is required for this one, but it's trivial.  [This simple PR is all we would need to add this monitoring]([url](https://github.com/department-of-veterans-affairs/vets-api/pull/13785)https://github.com/department-of-veterans-affairs/vets-api/pull/13785)



