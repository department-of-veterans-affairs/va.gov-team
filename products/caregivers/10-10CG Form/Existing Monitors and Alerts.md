# Monitors and Alerts
- Last Edit date: 10/16/2023

This document lists the various monitors and alerts in place for the 10-10CG.

All alerts are set up to populate the **#health-tools-1010-apm** slack channel.


## Monitor: 10-10CG anomaly monitor
### No data: 1010CG anomaly monitor
#### Alert Reason:
- There have not been any applications submitted in the last two hours.
#### Action:
- 10-10 Health Apps team will determine if there have been any failures that is causing the low volume of submissions
- If any errors/failures are found, this information will be communicated on the #vecms-carma_vadotgov_development_external channel
### Triggered: 1010CG anomaly monitor
#### Alert Reason:
- Over the last 15 minutes, the volume of submissions has been more than 2 times below the predicted values for the time of day
#### Action:
- 10-10 Health Apps team will ensure there have not been any failures that is causing the low volume of submissions
- If any errors/failures are found, this information will be communicated on the #vecms-carma_vadotgov_development_external channel.
### Recovered: 1010CG anomaly monitor
#### Alert Reason
- The volume of submissions has reached at or above the predicted values for the time of day
#### Action:
- No Action needed, this alert is letting us know that volumes are back to normal
## Monitor: 1010CG submission job has failed retries
### Triggered: 1010CG submission job has failed ten retries
#### Alert Reason
- At least one application submission has been retried 10 times, and has failed.  The submission will retry 4 more times before failing completely
#### Action
- We have a “Catastrophic failures” process outlining that the 10-10 Health Apps team will 
- Review the failures
- Determine if a maintenance banner needs to be in place to stop further failures, 
- Communicate on the #vecms-carma_vadotgov_development_external channel
### Triggered: 1010CG submission job has failed with no retries left
#### Alert Reason
- At least one application submission has been retried 14 times over the course of 24 hours, has failed and will not be retried again.
#### Action
- We have a “Catastrophic failures” process outlining that the 10-10 Health Apps team will 
- Retrieve the PDF application file from the Production environment
- Send the PDF application file via an encrypted email to vha12cspcarmaehr@va.gov, including the timestamp of the submission from VA.gov.
- Determine if a maintenance banner needs to be in place to stop further failures, 
- Communicate on the #vecms-carma_vadotgov_development_external channel about the alert being received, PDF being sent, setting the maintenance banner, and assisting with triage
## Monitor: 1010CG controller error rate is above 10%
### Triggered: 1010CG controller error rate is above 10%
#### Alert Reason:
- Errors being captured exceed 10% of total submissions over the last 1 day (24 hours).
#### Action:
- 10-10 Health Apps team will review the errors and va.gov monitors to determine if the root cause is on the form or sitewide
- If the errors are found to origination from the form processes, this information will be communicated on the #vecms-carma_vadotgov_development_external channel
- If the errors originate outside the form, the team will work with other VA.gov teams to triage, if needed.
### Recovered: 1010CG controller error rate is above 10%
#### Alert Reason
- Errors being captured are now below 10% of total submissions over the last 1 day (24 hours).
#### Action:
- No Action needed, this alert is letting us know that the error rate is back to normal
