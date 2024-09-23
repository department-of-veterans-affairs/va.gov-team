# 10-10EZ Endpoint Monitoring Playbook
_last updated: 09-23-2024_  

## Overview
- This document outlines the current monitors in effect for the 10-10EZ to ensure we capture errors, failures and potential patterns of inconsistent activity.  Each monitor has the steps listed to follow in addressing, triaging and implementing a solution, as well as notifying all required stakeholders.

## Audience 
- Team members responding to [Datadog monitor alerts](https://vagov.ddog-gov.com/monitors/manage?q=1010ez&order=desc).

# Monitor: 10-10EZ anomaly monitor
## Slack & Email Alert: "Warn: 10-10EZ anomaly monitor"
- Within a four hour period, 25% of total submissions have been more than two times lower than the usual volume for at least 15 minutes.

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
- [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
     - [SOCKS access](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy) required 

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
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

## Slack & Email Alert: "Recovered: 1010EZ anomaly monitor"
- The volume of submissions has reached at or above 25 submissions over the last 12 hours

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

# Monitor: 1010EZ submission job has failed with no retries left
## Slack & Email Alert: "Triggered: 1010EZ submission job has failed with no retries left"
- At least one application submission has been retried 14 times, has failed and will not be retried again.

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Investigate the failure to determine root cause, engaging Enrollment System/Joshua Faulkner if needed
     - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
          - PM will open maintenance window in PagerDuty if needed
- Obtain Veteran contact information (Name, Phone number, Email address)
- Send the Veteran contact information via secure, encrypted email (from va.gov email address) to VHAHECEEDAdministrators@va.gov
     - Explain what has happened (submission failure) and provide the Veteran contact info.
     - Copy PO (Patrick Bateman) and PMs (Alex Seelig and Heather Justice - VA emails only)
- Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
- Continue communications on triage progress, fix implementation timelines, and any other pertinent details

---

# Monitor: 1010EZ controller error rate is above 5%
## Slack & Email Alert: "Triggered: 1010EZ controller error rate is above 5%"
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
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
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

## Slack & Email Alert: "Recovered: 1010EZ controller error rate is above 5%"
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



