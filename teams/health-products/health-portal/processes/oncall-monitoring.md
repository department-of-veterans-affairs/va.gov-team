# Monitoring On-Call

**Purpose**: Respond to system alerts and maintain service reliability

Created: 2025-07-25

## Overview

The Health Portal on VA.gov relies on multiple systems to enable the health experience. When something goes wrong with VA.gov or any of the systems we rely on, we should know what to do or who to reach out to. The on-call rotation places responsibility on an on-call engineer for responding to those situations.

## How we work

This process will evolve as VA tools and capabilities allow us to mature our capabilities.[^1] For the immediate future, we'll need to actively monitor Slack channels for errors from our [MHV Datadog monitors](https://vagov.ddog-gov.com/monitors/manage?q=team%3Amhv).[^2] In the near future, we should be able to have PagerDuty alert engineers when something goes wrong.

### Late 2025 process

An engineer from each tool team will be on-call for a 7 day period, with a new rotation starting every Thursday. On-call engineers will monitor their tools' Slack `-alerts` channel and the `mhv-on-vagov-alerts` channel. The on-call engineer will investigate issues that arise, and coordinate with relevant partners, e.g. MHV Backend, on actions needed to resolve issues.

The OCTO Watch Officer on-call may reach out when a Priority 1 and 2 (P1 and P2) monitor reaches or maintains an "error" state. The on-call engineer will take responsibility to respond to the Watch Officer and provide updates and resolution when needed.

We will also utilize Slack groups that allow us to manage who is on-call and provide an easier way for folks to get in touch with the right person. Slack groups will be named according to team, with `-oncall` at the end, e.g. `@mhv-medical-records-oncall`.

### Future process

When PagerDuty is migrated and configured to alert engineers when something goes wrong, periodic checking of Slack will be less important. Instead, engineers will acknowledge notifications from PagerDuty and begin the triage process in response.


### Relation to Investigator On-call

In addition to on-call responsibilities for monitoring, teams also have responsibilities for handling technical questions and research that arise during sprints. See [Investigator On-Call](./investigator-oncall.md) for details.

## How to respond to an alert or incident

Please be familiar with the [VA Platform Incident Response for application teams](https://depo-platform-documentation.scrollhelp.site/developer-docs/incident-response-documentation-for-application-te). The process outlines 4 steps for determining severity and validity of the alert, communications, working the problem, and wrapping things up. Some additional context for MHV Frontent:

1. Determine the incident priority
  - Our monitors often trigger alerts due to upstream systems issues. If we see this, we should ensure the upstream team is aware of the issue and working to resolve it.
2. Communicate
  - We have a communication plan for making sure teammates, stakeholders, and partners are informed of the issue. [LINK NEEDED].
3. Work the problem
  > Don’t be afraid to enlist help from Platform support and/or OCTO engineering points of contact.
  - The oncall engineer and an incident commander should enlist help immediately in a Priority 1 (P1) incident.
  - Notes are important to help us understand the issue and track progress.
4. Wrap things up
  - Follow the post-mortem process, and plan to share lessons learned with the teams and stakeholders.

VA.gov and the MHV Frontend (`vets-website` and `vets-api`) depend on many other systems for data and functionality, and we should be prepared to inform and engage with those system owners to resolve issues

### Caveats

The alerts that come from Datadog can tell you when something is happening, but won't provide clear information about what is going wrong. The VA's monitors often use a measurement tool called [`statsd`](https://github.com/statsd/statsd) to monitor for statistical anomalies, but at the cost of links to logs that can provide more detail.

## Tools and Resources

- [Platform OnCall docs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/OnCall)
- [Datadog](https://vagov.ddog-gov.com/): the tool that provides monitoring and logging capabilities
- [PagerDuty](https://dsva.pagerduty.com/): provides notifications, escalation, and on-call scheduling capabilities.[^1]
- Slack channels
  - mhv-on-vagov-alerts
  - mhv-medical-records-alerts
  - mhv-medications-alerts-issues
  - mhv-secure-messaging-alerts
  - va-cto-supply-reordering-alerts
  - mhv-platform-alerts
- [Investigator OnCall](./investigator-oncall.md)




## Notes

[^1]: As of July 2025, PagerDuty has not been configured for notifications, escalation or on-call rotation scheduling. Current use is for controlling maintenance windows. Full use of PagerDuty functionality is pending a migration to a new PagerDuty instance.

[^2]: There is ongoing work to improve the Datadog monitors to improve signal-to-noise and trigger "error" states when something is truly wrong. As of July 2025, monitors need work to provide high signal and low noise.

[^3]: TODO: Identify points of contact
