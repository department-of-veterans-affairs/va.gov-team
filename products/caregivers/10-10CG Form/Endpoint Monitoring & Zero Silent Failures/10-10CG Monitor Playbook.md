# 10-10CG Endpoint Monitoring Playbook
_last updated: 09-23-2024_  

## Overview
- This document outlines the current monitors in effect for the 10-10CG to ensure we capture errors, failures and potential patterns of inconsistent activity.  Each monitor has the steps listed to follow in addressing, triaging and implementing a solution, as well as notifying all required stakeholders.

## Audience 
- Team members responding to [Datadog monitor alerts](https://vagov.ddog-gov.com/monitors/manage?q=1010ez&order=desc).

# Monitor: 10-10CG anomaly monitor
## Slack & Email Alert: "Triggered: 1010CG anomaly monitor"
- There have been less than 25 submissions in the last 12 hours

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)
     - [SOCKS access](https://depo-platform-documentation.scrollhelp.site/getting-started/accessing-internal-tools-via-socks-proxy) required 

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- The team member will determine if there have been any failures that is causing the low volume of submissions, requesting assistance from other team members as needed
     - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- If any errors/failures are found within the form, the team will
     - Communicate the issue to the Product Owner
     - Communicate on the #vecms-carma_vadotgov_development_external Slack channel to inform the CG Stakeholders
     - Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
          - PM will open maintenance window in PagerDuty if needed
     - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
     - Continue communications on triage progress, fix implementation timelines, and any other pertinent details

## Slack & Email Alert: "Recovered: 1010CG anomaly monitor"
- The volume of submissions has reached at or above 25 submissions over the last 12 hours

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- No Action needed, this alert is letting us know that volumes are back to normal

---

# Monitor: 1010CG submission job has failed retries
## Slack & Email Alert: "Triggered: 1010CG submission job has failed ten retries"
- At least one application submission has been retried 10 times, and has failed. The submission will retry 4 more times before failing completely

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Follow the [Ultimate failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Vets-api%20retries%20for%20MuleSoft%20-%20Ultimate%20Failures%20process.md) process outlining that the 10-10 Health Apps team will:
     - Investigate the failure to determine root cause
          - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
     - Communicate on the #vecms-carma_vadotgov_development_external Slack channel to inform the CG Stakeholders and continue to update progress
     - If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
     - Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
          - PM will open maintenance window in PagerDuty if needed
     - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
     - Continue communications on triage progress, fix implementation timelines, and any other pertinent details

## Slack & Email Alert: "Triggered: 1010CG submission job has failed with no retries left"
- At least one application submission has been retried 14 times over the course of 24 hours, has failed and will not be retried again

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Follow the [Ultimate failures](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Vets-api%20retries%20for%20MuleSoft%20-%20Ultimate%20Failures%20process.md) process outlining that the 10-10 Health Apps team will:
     - Retrieve the PDF application file from the Production environment
          - Send the PDF application file via an encrypted email to vha12cspcarmaehr@va.gov, including the timestamp of the submission from VA.gov.
     - Investigate the failure to determine root cause
          - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
     - Communicate on the #vecms-carma_vadotgov_development_external Slack channel to inform the CG Stakeholders and continue to update progress
     - If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
     - Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
          - PM will open maintenance window in PagerDuty if needed
     - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
     - Continue communications on triage progress, fix implementation timelines, and any other pertinent details
---

# Monitor: 1010CG controller error rate is above 10%
## Slack & Email Alert: "Triggered: 1010CG controller error rate is above 10%"
- Errors being captured exceed 10% of total submissions over the last 1 day (24 hours)

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Investigate the failure to determine root cause
     - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- Communicate on the #vecms-carma_vadotgov_development_external Slack channel to inform the CG Stakeholders and continue to update progress
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
     - PM will open maintenance window in PagerDuty if needed
- Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
- Continue communications on triage progress, fix implementation timelines, and any other pertinent details

## Slack & Email Alert: "Recovered: 1010CG controller error rate is above 10%"
- Errors being captured are now below 10% of total submissions over the last 1 day (24 hours)

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- No Action needed, this alert is letting us know that the error rate is back to zero

---

# Monitor: 1010CG Non-submission controller error rate is above 10%
## Slack & Email Alert: "Triggered 1010CG Non-submission controller error rate is above 10%"
- Errors being captured are above 10% of total submissions over the last 2 hours
- These errors are not submission errors, but all other errors that could occur including validation, timeouts, etc

### Required access
- [OCTO Datadog instance](https://vagov.ddog-gov.com/), read-only access
- [DSVA Slack](dsva.slack.com)
     - #1010-health-apps channel
     - #health-tools-1010-apm channel
     - #vfs-platform-support channel
     - #vecms-carma_vadotgov_development_external channel
- SOCKS access to review [Sentry logs](http://sentry.vfs.va.gov/organizations/vsp/issues/)

### Steps
- Alerts must be addressed timely.  During working hours, the alerts must be addressed as priority over other work.
- First team member (Engineer, Data Analyst, PM) to respond to the alert within the #health-tools-1010-apm Slack Channel will add an emoji or comment on the alert thread that they are reviewing the issue
- Investigate the failure to determine root cause
     - This includes reviewing Datadog, Sentry logs, Platform Support slack channel for other reports, etc.
- Communicate on the #vecms-carma_vadotgov_development_external Slack channel to inform the CG Stakeholders and continue to update progress
- If the failures are found to originate outside the form or the root cause is not readily apparent, the team will open a Platform Support ticket for assistance
- Determine if a PagerDuty maintenance banner needs to be in place to stop further failures
     - PM will open maintenance window in PagerDuty if needed
- Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
- Continue communications on triage progress, fix implementation timelines, and any other pertinent details

