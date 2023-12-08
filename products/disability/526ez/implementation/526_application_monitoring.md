# 526 Application Monitoring

## Purpose

Document the current state of our 526 monitoring.

## Context

- [Ticket to investigate](https://app.zenhub.com/workspaces/disability-benefits-experience-team-carbs-6470c8bfffee9809b2634a52/issues/gh/department-of-veterans-affairs/va.gov-team/61907)
- [Research and Proposal document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/engineering_research/KPI_alerting_with_datadog.md)

If you've arrived at this document via an alert in Slack or Issue in datadog, you are probably looking for a Playbook. Below each monitor / Alert below find the applicable playbook

## Monitors, Alerts, & Playbooks

## StatsD is expensive
**note** when possible, use a log.  StatsD is expensive

Use cases for logging
- need context from the application
- one off event occurances

Use cases for StatsD
- need a cumulative number for metrics.  [

If you aren't sure, [read the docs](https://docs.datadoghq.com/developers/dogstatsd/?tab=hostagent) for check with your lead

### Types
**Percentage**
These monitors will track the percentage of successful API interactions with one of our 3rd party services.  They use the formula
(Number of API calls marked SUCCESS + 1 / Number of API calls marked TRY + 1) *100, or litterally `((a + 1) / (b + 1) * 100)`.  The `+1`s avoid for division errors caused by zero traffic, as 0 / 0 (which is not a number) will register as some sort of panic state in datadog.  The `*100`) is to allow us to use the logical `100` percent, rather than `1`

**Throughput**
[TODO]

**Latency**
[TODO]

**Traffic**
Measures the traffic to an endpoint or service, indicating that if it's atypically low, we might have a problem. or if it's atypcially high, we may be in danger of an outage.

**Number of exceptions**
[TODO]

**One off**
A monitor where any single event is considered alertable, e.g. a catastrophic failure to submit through any service or retry.

**Catastrophic**
If you see this, the application is blowing up

### Playbooks
- [Benefits - IntentToFilesController rate limit Error](https://vagov.ddog-gov.com/monitors/153112)
  - type: **catastrophic**
  - If this happens, we have hit a rate limit in Lighthouse.  This means all requests to this endpoint will fail for X amount of time
  - [Playbook]]([asdf](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/downstream_timeout.md))
  - TODO: playbook for this is needed
- [Form 526 Backup Submission Error. Investigate](https://vagov.ddog-gov.com/monitors/110156)
   - type: One off
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/form-526-backup-submission-error.md)
- [526 Completion rate is low](https://vagov.ddog-gov.com/monitors/157864)
   - type: Number of completions
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Completion-rate-is-low.md)
- [526 Backup Submission Errors are high](https://vagov.ddog-gov.com/monitors/158397)
   - type: Number of exceptions
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Backup-Submission-Errors-are-high.md)
- [526 Backup Submission Errors occurred today](https://vagov.ddog-gov.com/monitors/158396)
   - Number: of exceptions
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Backup-Submission-Errors-occurred-today.md)
- [526 final form submission success rate](https://vagov.ddog-gov.com/monitors/160278)
   - type: percentage
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-final-form-submission-success-rate.md)
- [526 Submit Form 0781 success percentage](https://vagov.ddog-gov.com/monitors/160282)
   - type: percentage
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Submit-Form-0781-success-percentage.md)
- [526 Submit Form 4142 success percentage](https://vagov.ddog-gov.com/monitors/160281)
   - type: percentage
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Submit-Form-4142-success-percentage.md)
- [526 Submit Uploads success percentage](https://vagov.ddog-gov.com/monitors/160279)
   - type: percentage
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/526-Submit-Uploads-success-percentage.md)
- [EVSS General Latency](https://vagov.ddog-gov.com/monitors/161160)
   - type: latency
   - [Playbook](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/playbooks/526/EVSS-general-latency-watch.md)
- [LH IntentToFile traffic is low](https://vagov.ddog-gov.com/monitors/157810)
  - type: traffic
- [EVSS ITF traffic is low](https://vagov.ddog-gov.com/monitors/157809)
  - type: traffic
- [526 Catastrophic submission failure - backup worker exhausted](https://vagov.ddog-gov.com/monitors/164793)
  - type: One off.  Any instance of this alert requires
     - Capturing context from the applicable logs 
     - Logging the failed Submission Information (TODO: link spreadsheet)
     - Kick off "Emergency Failsafe Process" (TODO: link to this document)
  - Playbook (TODO - this will overlap with the "Emergency Failsafe Process" which is WIP)
 
### TODO:  
- Add links to "Emergency Failsafe Process"
- [Add an alert for any instance of a 429 (rate limit reached) from LH per Marks suggestion](https://dsva.slack.com/archives/C05URMLM09Z/p1696264159183519?thread_ts=1696264035.396779&cid=C05URMLM09Z)
  - per mark:
```
Email api@va.gov with your va.gov email (historically how we resolved these)
Attach a screenshot of the error
Include a brief contextual explanation and a request to increase the rate limit
Make sure this is with your va.gov email
Ping the relevant LH PO in #vfs-evss-service-migration
For example, this was Kayla Watanabe for ITF
Janet Coutinho for general increase/not sure which one
```
- Document endpoints we are not capturing


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

