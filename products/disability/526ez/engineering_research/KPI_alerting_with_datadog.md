# KPI alerting with datadog


## Purpose

Document discovery and ideation around KPIs for enhancing our 526 health monitoring.

## Context

- [KPIs were originally defined here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/57489)
- [This epic was executed to wrap each KPI in logging](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/60952)
- [The Ticket](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907) was created to track the leveraging of these KPIs and their new logging as Datadog dashboards and or alerts.

This document outlines suggestions that could be applied to each of these KPIs and their logging.


## Services that make API calls
- [EVSS::DisabilityCompensationForm::SubmitForm526AllClaim](https://vagov.ddog-gov.com/monitors/160278) submission success rate
- [EVSS::DisabilityCompensationForm::SubmitUploads](https://vagov.ddog-gov.com/monitors/160279) submission success rate
- [EVSS::DisabilityCompensationForm::UploadBddInstructions](https://vagov.ddog-gov.com/monitors/160280) run success rate (sems flat, probably ok to remove)
- [CentralMail::SubmitForm4142Job](https://vagov.ddog-gov.com/monitors/160281) submission success rate
- [EVSS::DisabilityCompensationForm::SubmitForm0781](https://vagov.ddog-gov.com/monitors/160282) success rate
- EVSS::DisabilityCompensationForm::SubmitForm8940
  - WTF isn't this shown at all in DD?  do we never run it?
- Percentage of Backup submissions run relative to total jobs
  - TODO
- Percentage of complete failures (both normal and backup)
  - TODO

### Bonus calls we can track

- EVSS::DocumentUpload#pull_file_from_cloud!
- EVSS::DocumentUpload#perform_document_upload_to_evss
- EVSS::DisabilityCompensationForm#submit_complete_form
- V0::UploadSupportingEvidencesController#save_attachment_to_cloud!

## Proposals

### 1. Completion Percentage

For each of these Services there is a central API interaction with a third party.  These interactions are tracked with logs tagged `try` and `succeed`.  To generate a completion percentage for each interaction, we count the `succeed` logs and divide by the `try` logs specific to each parent class object.  This gives us a number ~1.  If we dip below .7 (70%) we alert.  

NOTE: occasionally we will see spikes above 100%.  This is caused by previously failing jobs 'catching up' as they retry.

- [EVSS::DisabilityCompensationForm::SubmitForm526AllClaim](https://vagov.ddog-gov.com/monitors/160278) submission success rate
- [EVSS::DisabilityCompensationForm::SubmitUploads](https://vagov.ddog-gov.com/monitors/160279) submission success rate
- [EVSS::DisabilityCompensationForm::UploadBddInstructions](https://vagov.ddog-gov.com/monitors/160280) run success rate (sems flat, probably ok to remove)
- [CentralMail::SubmitForm4142Job](https://vagov.ddog-gov.com/monitors/160281) submission success rate
- [EVSS::DisabilityCompensationForm::SubmitForm0781](https://vagov.ddog-gov.com/monitors/160282) success rate
- EVSS::DisabilityCompensationForm::SubmitForm8940
  - WTF isn't this shown at all in DD?  do we never run it?
- Percentage of Backup submissions run relative to total jobs
  - TODO
- Percentage of complete failures (both normal and backup)
  - TODO

### 2. Latancey Threshold

This could be acheived by leveraging the `upload_duration` value included in each of our logging wrappers (although we should probably update this naming convention

** The Query **

For example, checking for `submit_form_4142` actions that take longer than 1 second:
`@payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.upload_duration:>1`

<img width="1327" alt="Screenshot 2023-09-12 at 12 02 19 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/15328092/0f73e2e3-6b6e-4540-8605-79f54c6e40ca">


- [EVSS::DisabilityCompensationForm::SubmitForm526AllClaim]()
- [EVSS::DisabilityCompensationForm::SubmitUploads]()
- [EVSS::DisabilityCompensationForm::UploadBddInstructions]()
- [CentralMail::SubmitForm4142Job]()
- [EVSS::DisabilityCompensationForm::SubmitForm0781]()
- EVSS::DisabilityCompensationForm::SubmitForm8940


### Interval based options

If we have not hit a 3pi for <unit of time> alert.  Queries here are trivial, as we simply look up the action using logs or statsD
`@payload.wrapped_method:Form526Submission#submit_form_4142 AND @payload.end_time:*`

**Note** that statsD would be preferable for this simple counting work.  Another point for the 'we should ad stats D to the logging wrapper' argument.

**Note** These intervals could all potentially be made smarter than the 'average' using the 'Completion Percentile' numbers, but that is out of scope for first pass.

#### 1. Absence in Interval

If we see an absence of traffic we could alert.  E.G we usually have ~1000 submissions a day, today we only had 0

#### 2. Decrease in Interval

If we see a slow down from our normal traffic we could alert.  E.G we usually have ~1000 submissions a day, today we only had 100

#### 3. Spike in Interval

This could indicate something stuck in a bad state, such as a loop.  E.G we usually have 100, now we have 1000.  A recent example was the NOD bug that causes infinite looping, or when there is an increase in failures causing more than usual retries.

#### 4. Spike in Errors

By leveraging the `rescue` block of the logging wrapper we could track spikes in errors relative to specific 3PI methods.  This would require updating [This log](https://github.com/department-of-veterans-affairs/vets-api/blob/d6849bc9b097f21a14fe6aaef26093e0ac9200fe/lib/logging/third_party_transaction.rb#L63) to include the method name value as a default log, and then combining the error message with the default logs.

Coding is required for this one, but it's trivial.  [This simple PR is all we would need to add this monitoring](https://github.com/department-of-veterans-affairs/vets-api/pull/13785)



