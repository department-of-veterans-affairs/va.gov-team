# Async Services and Related Monitoring

## Purpose

Document discovery, open questions, and findings related to the "code yellow" request from VA that we document all of our async services within 526 and their related dashboards, monitors, and alerts.

## Context
- [The final deliverable is filling out this ticket](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/1273)

## Playbook(s)
If you've arrived at this document via an alert in Slack or Issue in datadog, you are probably looking for a Playbook.  Eventually, there will be multiple playbooks for groups of alerts, but for now we have one, top level playbook.

[If you are responding to an alert, use this playbook as your guide](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-submit-form-0781-success-percentage.md)


## List of Services

The following are all of our async services within the 526 form flow

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
