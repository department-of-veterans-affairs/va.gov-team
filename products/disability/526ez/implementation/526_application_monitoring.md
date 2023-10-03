# 526 Application Monitoring

## Purpose

Document the current state of our 526 monitoring.

## Context

- [Ticket to investigate](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)
- [Research and Proposal document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/KPI_alerting_with_datadog.md)

## KPIs, associated Monitors, and playbooks

### Playbook(s)
If you've arrived at this document via an alert in Slack or Issue in datadog, you are probably looking for a Playbook. Below each monitor / Alert below find the applicable playbook

   
### Monitors & Alerts
- [Form 526 Backup Submission Error. Investigate](https://vagov.ddog-gov.com/monitors/110156)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/form-526-backup-submission-error.md)
- [526 Completion rate is low](https://vagov.ddog-gov.com/monitors/157864)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Completion-rate-is-low.md)
- [526 Backup Submission Errors are high](https://vagov.ddog-gov.com/monitors/158397)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Backup-Submission-Errors-are-high.md)
- [526 Backup Submission Errors occurred today](https://vagov.ddog-gov.com/monitors/158396)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Backup-Submission-Errors-occurred-today.md)
- [526 final form submission success rate](https://vagov.ddog-gov.com/monitors/160278)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-final-form-submission-success-rate.md)
- [526 Submit Form 0781 success percentage](https://vagov.ddog-gov.com/monitors/160282)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Submit-Form-0781-success-percentage.md)
- [526 Submit Form 4142 success percentage](https://vagov.ddog-gov.com/monitors/160281)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Submit-Form-4142-success-percentage.md)
- [526 Submit Uploads success percentage](https://vagov.ddog-gov.com/monitors/160279)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Submit-Uploads-success-percentage.md)
- [EVSS General Latency](https://vagov.ddog-gov.com/monitors/161160)
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/EVSS-general-latency-watch.md)
- [LH IntentToFile traffic is low](https://vagov.ddog-gov.com/monitors/157810)
- [EVSS ITF traffic is low](https://vagov.ddog-gov.com/monitors/157809)
- [Benefits - IntentToFilesController errors](https://vagov.ddog-gov.com/monitors/153112)
 
### TODO:  
- add an alert that checks for retry exhaustion on 526 backup submission ([PR to add required metric for this is WIP]([url](https://github.com/department-of-veterans-affairs/vets-api/pull/14023)))
- Add an alert for any instance of a 429 (rate limit reached) from LH

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

