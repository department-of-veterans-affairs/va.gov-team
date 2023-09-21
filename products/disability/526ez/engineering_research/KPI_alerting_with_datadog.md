# KPI alerting with datadog


## Purpose

Document discovery and ideation around KPIs for enhancing our 526 health monitoring.

## Context

- [KPIs were originally defined here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
- [This epic was executed to wrap each KPI in logging](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)
- [The Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907) was created to track the leveraging of these KPIs and their new logging as Datadog dashboards and or alerts.

This document outlines suggestions that could be applied to each of these KPIs and their logging.

## UPDATE:

much of this logging can be done using our APM http monitors.  There is a good chance that we will not need to rely on these logs, as the AMP metrics are superior in their extremely narrow focus on these http calls.  The logs will still be valuable for debugging context, should something go wrong later.

[Here is an example of such an APM http metric](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api-net-http%20%40http.url%3A%2FVONAPP2%2Fwss-form526-services-web-v2%2Frest%2Fform526%2Fv2%2Fsubmit%20&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=service-entry&spanViewType=metadata&start=1695224015297&end=1695310415297&paused=false)_

# New Version

We are going to wrap every call to an external API inside 526 in an alert for completion percentage.

#### Services
- [EVSS::DisabilityCompensationForm::SubmitForm526AllClaim](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20service%3Avets-api-sidekiq%20resource_name%3A%22EVSS%3A%3ADisabilityCompensationForm%3A%3ASubmitForm526AllClaim%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=false&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanID=1791546065952901402&spanType=service-entry&spanViewType=metadata&timeHint=1695326331445&trace=21735948997749732733955759380469362079&traceID=2173594899774973273&start=1695325450910&end=1695326350910&paused=false)
- [EVSS::DisabilityCompensationForm::SubmitUploads](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20service%3Avets-api-sidekiq%20resource_name%3A%22EVSS%3A%3ADisabilityCompensationForm%3A%3ASubmitUploads%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=false&messageDisplay=inline&netviz=sent_vol%3A%3A%2Ctcp_r_pct%3A%3A%2Crtt%3A%3A&query_translation_version=v0&shouldShowLegend=true&sort=time&spanID=4573667175093202738&spanType=service-entry&spanViewType=metadata&timeHint=1695326372600&trace=32945782089482382383390664279735256267&traceID=3294578208948238238&start=1695325630909&end=1695326530909&paused=false)
- [EVSS::DisabilityCompensationForm::UploadBddInstructions](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api-sidekiq%20resource_name%3A%2AUploadBddInstructions%2A&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanID=3122318481817664512&spanType=service-entry&spanViewType=metadata&timeHint=1695328541454&trace=AgAAAYq5dJsOLP2crwAAAAAAAAAYAAAAAEFZcTVkS0tXQUFBdnExOXlKSjVjeHhRXwAAACQAAAAAMDE4YWI5NzYtNzY2ZC00YWZlLWIxZTUtMWYxZmI2YzE2NGU2&traceID=4545283713099860807&start=1694120002231&end=1695329602231&paused=false)
- [CentralMail::SubmitForm4142Job](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api-sidekiq%20resource_name%3A%2ASubmitForm4142Job%2A&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=true&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanID=4307896737575819045&spanType=service-entry&spanViewType=metadata&timeHint=1695329407284&trace=AgAAAYq5gdE0U6QJegAAAAAAAAAYAAAAAEFZcTVnZDVHQUFCU3pmcExWOUhxUDFrMgAAACQAAAAAMDE4YWI5ODQtYTg0MS00OTU1LWI0MGEtNmNjZjkzMDRiMmI4&traceID=3916368892844635930&start=1694120002231&end=1695329602231&paused=false)
    - /EmmsAPI/VADocument/upload
- [EVSS::DisabilityCompensationForm::SubmitForm0781](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api-sidekiq%20resource_name%3A%22EVSS%3A%3ADisabilityCompensationForm%3A%3ASubmitForm0781%22&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=false&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanType=service-entry&spanViewType=metadata&start=1695327493379&end=1695328393379&paused=false)
- EVSS::DisabilityCompensationForm::SubmitForm8940
  - WTF isn't this shown at all in DD?  do we never run it?
- [Sidekiq::Form526BackupSubmissionProcess::Submit](https://vagov.ddog-gov.com/apm/traces?query=%40_top_level%3A1%20env%3Aeks-prod%20service%3Avets-api-net-http%20%40http.url%3A%2FVONAPP2%2Fwss-form526-services-web-v2%2Frest%2Fform526%2Fv2%2Fsubmit%20%40http.status_code%3A200&cols=core_service%2Ccore_resource_name%2Clog_duration%2Clog_http.method%2Clog_http.status_code&graphType=flamegraph&historicalData=false&messageDisplay=inline&query_translation_version=v0&shouldShowLegend=true&sort=time&spanID=2908977379013637359&spanType=service-entry&spanViewType=metadata&timeHint=1695328251388&trace=28451570105195143232908977379013637359&traceID=2845157010519514323&start=1695327434055&end=1695328334055&paused=false)
  - /VONAPP2/wss-form526-services-web-v2/rest/form526/v2/submit

#### URLS
- /VONAPP2/wss-form526-services-web-v2/rest/form526/v2/ratedDisabilities


# Old version (Logging Based)

All of this is here for posterity, and some of it still applies.  however, consider everything above this section the more correct information.

### Affected Actions

Of the aforementioned KPIs, these are the Class#methods wrapped in logging that would be the most vauable to alert on are the Form 526 Submission sub-actions (3PIs)
- Form526Submission#submit_uploads
  - [DONE: completion monitor](https://vagov.ddog-gov.com/monitors/159640)
    - TODO: update this.  it will not currently work as the rescue clause in the logging wrapper ensures the completion logger will always run
- Form526Submission#submit_form_0781
- Form526Submission#submit_form_8940
- Form526Submission#upload_bdd_instructions
- Form526Submission#submit_flashes
- Form526Submission#cleanup

Here is each 3PI's completion log charged:


<img width="682" alt="Screenshot 2023-09-12 at 2 08 15 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/0528cfdb-275f-4906-98c7-b9a04bd1f9c5">


Additionaly, before final submission it would make sense to monitor these currently logged actions:
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

[Here is a spike PR that should do that work](https://github.com/department-of-veterans-affairs/vets-api/pull/13788)


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

#### 4. Spike in Errors

By leveraging the `rescue` block of the logging wrapper we could track spikes in errors relative to specific 3PI methods.  This would require updating [This log](https://github.com/department-of-veterans-affairs/vets-api/blob/d6849bc9b097f21a14fe6aaef26093e0ac9200fe/lib/logging/third_party_transaction.rb#L63) to include the method name value as a default log, and then combining the error message with the default logs.

Coding is required for this one, but it's trivial.  [This simple PR is all we would need to add this monitoring](https://github.com/department-of-veterans-affairs/vets-api/pull/13785)



