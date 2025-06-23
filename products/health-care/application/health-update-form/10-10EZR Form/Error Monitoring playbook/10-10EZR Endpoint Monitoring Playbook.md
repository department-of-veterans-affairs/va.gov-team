# 10-10EZR Endpoint Monitoring Playbook 
_last updated: 5/16/2025_  

## Overview

- This document outlines the current monitors in effect for the 10-10EZ to ensure we capture errors, failures and potential patterns of inconsistent activity. Each monitor has the steps listed to follow in addressing, triaging and implementing a solution, as well as notifying all required stakeholders.
- [ZSF Dashboard](https://vagov.ddog-gov.com/dashboard/w4w-uc4-u6u/10-10-health-apps---zsf?fromUser=true&refresh_mode=paused&from_ts=1741505356000&to_ts=1742244634000&live=false)

## Audience

- Team members responding to [Datadog monitor alerts](https://vagov.ddog-gov.com/monitors/manage?q=1010).

# Monitor: 10-10EZR anomaly monitor

## Slack & Email Alert: "Warn: 10-10EZR anomaly monitor"

- Within a four hour period, total submissions have been more than two times lower than the usual volume for at least 15 minutes.

### Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
  - #1010-health-apps channel
  - #health-tools-1010-apm channel
  - #vfs-platform-support channel
- [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
  - [SOCKS access](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy) required

### Steps

- Alerts must be addressed timely. During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- The team member will determine if there have been any failures that is causing the low volume of submissions, requesting assistance from other team members as needed
  - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- If any errors/failures are found within the form, the team will
  - [PM] Communicate the issue to the Product Owner
  - Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
    - PM will open maintenance window in PagerDuty if needed
  - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
  - Continue communications on triage progress, fix implementation timelines, and any other pertinent details

## Slack & Email Alert: "Recovered: 1010EZR anomaly monitor"

- The volume of submissions has reached at or above the usual volume over the last 4 hours

### Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
  - #1010-health-apps channel
  - #health-tools-1010-apm channel
  - #vfs-platform-support channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps

- No Action needed, this alert is letting us know that volumes are back to normal

---

# Monitor: 1010EZR submission job has failed with no retries left

## Slack & Email Alert: "Triggered: 1010EZR submission job has failed with no retries left"

- At least one application submission has been retried 16 times, has failed and will not be retried again.

### Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
  - #1010-health-apps channel
  - #health-tools-1010-apm channel
  - #vfs-platform-support channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps

- Alerts must be addressed timely. During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Investigate the failure to determine root cause, engaging Enrollment System/Joshua Faulkner if needed
  - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- Determine if a PagerDuty maintenance banner needs to be in place to stop further failures - PM will open maintenance window in PagerDuty if needed
- Obtain Veteran contact information (Name, Phone number, Email address)
- Send the Veteran contact information via **secure, encrypted email** (from va.gov email address) to VHAHECEEDAdministrators@va.gov
  - Explain what has happened (submission failure) and provide the Veteran contact info.
  - Copy PO (Patrick Bateman) and team PMs (VA emails only)
- Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
- Continue communications on triage progress, fix implementation timelines, and any other pertinent details

---

# Monitor: 1010EZR controller error rate is above 5%

## Slack & Email Alert: "Triggered: 1010EZR controller error rate is above 5%"

- Errors being captured exceed 5% of total submissions over the last 4 hours.
  - This can mean any kind of errors, including validation, submission, timeouts, etc

### Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
  - #1010-health-apps channel
  - #health-tools-1010-apm channel
  - #vfs-platform-support channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps

- Alerts must be addressed timely. During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Investigate the failure to determine root cause, engaging Enrollment System/Joshua Faulkner if needed
  - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- Communicate the issue to the Product Owner
- If any errors/failures are found within the form, the team will
  - Determine if a maintenance banner needs to be in place to stop further failures
    - PM will open maintenance window in PagerDuty if needed
  - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
  - Continue communications on triage progress, fix implementation timelines, and any other pertinent details

## Slack & Email Alert: "Recovered: 1010EZR controller error rate is above 5%"

- Errors being captured are now below 5% of total submissions over the last 4 hours

### Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
  - #1010-health-apps channel
  - #health-tools-1010-apm channel
  - #vfs-platform-support channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps

- No Action needed, this alert is letting us know that the error rate is back to normal

---

# TBD - Needs Updating - Monitor: "1010EZR Silent Failure on sending submission failure email [VA Notify callback]"
## Slack & Email Alert: "1010EZR Silent Failure on sending submission failure email [VA Notify callback]"

- A 10-10EZR Form submission has failed submission, and the email that is sent to the Veteran has failed sending through VANotify.
- We should have already seen a `1010EZR submission job has failed with no retries left` failure, and then this monitor would trigger roughly 24 hours later if the email also fails (The email send operation is in a sidekiq job that has 16 retries).

### Required access

- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
  - #1010-health-apps channel
  - #health-tools-1010-apm channel
  - #vfs-platform-support channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps - Needs review & revision for EZR (the info below is specific for EZ)
- CONFIRM [THIS MONITOR](https://vagov.ddog-gov.com/monitors/370871) IS CORRECT, SPECIFICALLY THE FUNCTION IDENTIFIED. IF DIFFERENT, THE [ZSF DASHBOARD](https://vagov.ddog-gov.com/dashboard/w4w-uc4-u6u/10-10-health-apps-zsf?fromUser=false&fullscreen_end_ts=1747407573916&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1746802773916&fullscreen_widget=8940342090768042&refresh_mode=sliding&from_ts=1746802354974&to_ts=1747407154974&live=true) WILL NEED AN UPDATE

- There should be a corresponding rails log named `Error notification to user failed to deliver` and with metadata containing the notification_id and form id (`{ notification_record_id: notification_record.id, form_number: metadata['form_number'] }`). The form id is `10-10EZ`.
- Query the database with `VANotify::Notification.find_by(notification_id: notification_id)` to find the failed notification record. The `to` attribute will be the Veteran's email address that we attempted to send the email message to. This email should correspond to a Personal Information Log from roughly 24 hours prior that is created when a 10-10EZ Form fails submission. Use this log to:
  - Obtain Veteran contact information (Name, Phone number)
  - Send the Veteran contact information via **secure, encrypted email** (from va.gov email address) to VHAHECEEDAdministrators@va.gov
  - Explain what has happened (submission failure) and provide the Veteran contact info.
  - Copy PO (Patrick Bateman) and team PMs (VA emails only)
