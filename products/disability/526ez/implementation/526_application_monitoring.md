# 526 Application Monitoring

## Purpose

Document the current state of our 526 monitoring.

## Context

- [Ticket to investigate](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)
- [Research and Proposal document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/KPI_alerting_with_datadog.md)

## KPIs, associated Monitors, and playbooks

NOTE: these KPIs (key points of interest) represent a mix of litteral service objects and more subjective places / actions that have been deemed monitoring-worthy.  All Items are listed in the following format:

- KPI
  - Description:
  - Monitors:
    - Relevant Monitor or Dashboard
      - Playbook for alerts (if applicable
    - relevant Monitor or Dashboard
 
etc.


- EVSS::DisabilityCompensationForm::SubmitForm526AllClaim
- EVSS::DisabilityCompensationForm::SubmitUploads
- EVSS::DisabilityCompensationForm::UploadBddInstructions
- CentralMail::SubmitForm4142Job
- EVSS::DisabilityCompensationForm::SubmitForm0781
- EVSS::DisabilityCompensationForm::SubmitForm8940
- EVSS::DisabilityCompensationForm::SubmitForm526Cleanup
- Sidekiq::Form526BackupSubmissionProcess::Submit

## Dashboards
- [Form 526 Disability Compensation](https://vagov.ddog-gov.com/dashboard/ygg-v6d-nza/form-526-disability-compensation?refresh_mode=sliding&from_ts=1695135168409&to_ts=1695307968409&live=true)
    - a wholistic health monitor that tracks the following events
      - Intent to file submitted
      - Valid form submitted
        - This event implies that all of our ancillary services (listed above) have worked as expected) **except for the BackupSubmissionProcess job**
      - Submission Accepted by EVSS
        - A failure here can indicate either a problem with our submitted data or an outage with the EVSS submission Endpoint
- [Benefits - 526 Backup Submission](https://vagov.ddog-gov.com/dashboard/u9b-62v-t48/benefits---526-backup-submissions?refresh_mode=sliding&from_ts=1695305477278&to_ts=1695309077278&live=true)
  - Tracks enqueuing and dequeuing of backup submission jobs.
    - No explicit information about success or failure
     
## Monitors & Alerts
- [Form 526 Backup Submission Error. Investigate](https://vagov.ddog-gov.com/monitors/110156)
  - Watches for a non-zero number of 526 Backup Submission Errors (via logs)
    - ALERTS: kyle.soskin@adhocteam.us, sam.stuckey@oddball.io, Slack benefits-ce-dd-notifications
- [Document Service API slowdown or outage](https://vagov.ddog-gov.com/monitors/159640)
  - Watches for non-completion of requests to our third party Document Service (EVSS)
    - ALERTS: Slack benefits-ce-dd-notifications
- [526 Completion rate is low](https://vagov.ddog-gov.com/monitors/157864)
  - Tracks count of 'cleanup' events executed by the 526 flow (`EVSS::DisabilityCompensationForm::SubmitForm526Cleanup`) per hour.  Alert triggers at less than 2.
    - ALERTS: Slack benefits-ce-dd-notifications
- [526 Backup Submission Errors are high](https://vagov.ddog-gov.com/monitors/158397)
  - Tracks count of 526 Backup Submissions (`Sidekiq::Form526BackupSubmissionProcess::Submit`) with a status of `error` per hour.  Alert triggers at 30 or more.
    - ALERTS: Slack benefits-ce-dd-notifications
- [526 Backup Submission Errors occurred today](https://vagov.ddog-gov.com/monitors/158396)
  - Tracks count of 526 Backup Submissions (`Sidekiq::Form526BackupSubmissionProcess::Submit`) with a status of `error` per day.  Alert triggers at 100 or more.
    - ALERTS: Slack benefits-ce-dd-notifications
   
## WIP additions
We are in the process of fortifying our monitors with alerts specific to every 3rd party API interaction.  "Document Service API slowdown or outage" listed above was the first of these new monitor / alerts to be added.  [Upcomming additions are documented here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/KPI_alerting_with_datadog.md)
