# Monitors and Alerts for the 10-10EZR application
- Last Edit date: 11/10/2023
- By Heather Justice (@hdjustice)

This document lists the various monitors and alerts in place for the 10-10EZR.

All alerts are set up to populate the **#health-tools-1010-apm** slack channel.


## Monitor: 10-10EZR anomaly monitor
### Warn: 1010EZR anomaly monitor
#### Alert Reason:
- Within a four hour period, total submissions have been more than two times lower than the usual volume for at least 15 minutes.
#### Team Actions:
- Determine if there have been any failures that is causing the low volume of submissions
- Communicate the issue to the Product Owner
- If any errors/failures are found within the form, the team will
     - Determine if a maintenance banner needs to be in place to stop further failures
     - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
     - Continue communications on triage progress, fix implementation timelines, and any other pertinent details
- If the failures originate outside the form, the team will work with other VA.gov teams to triage, if needed.

### Recovered: 1010EZ anomaly monitor
#### Alert Reason
- The volume of submissions has reached at or above the usual volume over the last 4 hours
#### Team Actions:
- No Action needed, this alert is letting us know that volumes are back to normal

## Monitor: 1010EZR controller error rate is above 5%
### Triggered: 1010EZR controller error rate is above 5%
#### Alert Reason:
- Errors being captured exceed 5% of total submissions over the last 4 hours.
#### Team Actions:
- Review the errors and VA.gov monitors to determine if the root cause is on the form or sitewide
- Communicate the issue to the Product Owner
- If any errors/failures are found within the form, the team will
     - Determine if a maintenance banner needs to be in place to stop further failures
     - Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
     - Continue communications on triage progress, fix implementation timelines, and any other pertinent details
- If the failures originate outside the form, the team will work with other VA.gov teams to triage, if needed.

### Recovered: 1010EZ controller error rate is above 5%
#### Alert Reason
- Errors being captured are now below 5% of total submissions over the last 4 hours
#### Team Actions:
- No Action needed, this alert is letting us know that the error rate is back to normal



## Monitor: 1010EZR submission job has failed retries
### Triggered: 1010EZR submission job has failed with no retries left
#### Alert Reason
- At least one application submission has been retried 24 times, has failed and will not be retried again.
#### Team Actions
- Communicate the issue to the Product Owner
- Investigate the failure to determine root cause, engaging Enrollment System/Joshua Faulkner if needed
- Determine if a maintenance banner needs to be in place to stop further failures
- Obtain Veteran contact information (Name, Phone number, Email address)
- Send the Veteran contact information via secure, encrypted email (from va.gov email address) to Amanda Scully and Antonio Presley (Confirm these names with PO)
     - Explain what has happened (submission failure) and provide the Veteran contact info.
     - Copy PO (Patrick Bateman) and Crew lead (Lauren Alexanderson)
- Create & assign a ticket, outlining the issue and steps to continue triage and/or implement a fix
- Continue communications on triage progress, fix implementation timelines, and any other pertinent details
- If the failures originate outside the form, the team will work with other VA.gov teams to triage, if needed.

---

# Monitors & Alerts not yet in place

## Monitor: 1010EZR submission alert for failed mailer
### Triggered: 1010EZR submission alert for failed mailer
#### Alert Reason:
- At least one application submission has failed all retries, and an email was triggered to be sent to the Veteran, however the mailer service has failed
#### Team Actions:
- 10-10 Health Apps team should have communicated the Veteran contact info to the HEC points of contact, mentioned in the "Failed with no retries" steps
- Communicate the mailer failure to the PO
- Work with other VA.gov teams to triage
### Recovered: 1010EZ submission alert for failed mailer
#### Alert Reason
- There have not been any further failures on the mailer service in the last 4 hours.
#### Team Actions:
- No Action needed, this alert is letting us know that the error rate is back to zero
