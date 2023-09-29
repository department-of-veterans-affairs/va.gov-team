# 526 Application Monitoring

## Purpose

Document the current state of our 526 monitoring.

## Context

- [Ticket to investigate](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)
- [Research and Proposal document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/KPI_alerting_with_datadog.md)

## KPIs, associated Monitors, and playbooks
    
## Monitors & Alerts
- [Form 526 Backup Submission Error. Investigate](https://vagov.ddog-gov.com/monitors/110156)
  - Watches for a non-zero number of 526 Backup Submission Errors (via logs)
  - [playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/backup_submission_error.md)
- [Document Service API slowdown or outage](https://vagov.ddog-gov.com/monitors/159640)
  - Watches for non-completion of requests to our third party Document Service (EVSS)
- [526 Completion rate is low](https://vagov.ddog-gov.com/monitors/157864)
  - Tracks count of 'cleanup' events executed by the 526 flow (`EVSS::DisabilityCompensationForm::SubmitForm526Cleanup`) per hour.  Alert triggers at less than 2.
- [526 Backup Submission Errors are high](https://vagov.ddog-gov.com/monitors/158397)
  - Tracks count of 526 Backup Submissions (`Sidekiq::Form526BackupSubmissionProcess::Submit`) with a status of `error` per hour.  Alert triggers at 30 or more.
- [526 Backup Submission Errors occurred today](https://vagov.ddog-gov.com/monitors/158396)
  - Tracks count of 526 Backup Submissions (`Sidekiq::Form526BackupSubmissionProcess::Submit`) with a status of `error` per day.  Alert triggers at 100 or more.
- [526 final form submission success rate](https://vagov.ddog-gov.com/monitors/160278)
  - Alerts if we fall below success response threshold (25%) over an hour
- [526 Submit Form 0781 success percentage](https://vagov.ddog-gov.com/monitors/160282)
  - Alerts if we fall below success response threshold (25%) over an hour
- [526 Submit Form 4142 success percentage](https://vagov.ddog-gov.com/monitors/160281)
  - Alerts if we fall below success response threshold (25%) over an hour
- [526 Submit Uploads success percentage](https://vagov.ddog-gov.com/monitors/160279)
  - Alerts if we fall below success response threshold (25%) over an hour
- [EVSS General Latency](https://vagov.ddog-gov.com/monitors/161160)
  - Alerts when request latency averages 45 seconds or more for 30 minutes
 
### TODO:  
- add an alert that checks for retry exhaustion on 526 backup submission
- add playbooks for each of these

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
