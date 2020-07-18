# VAOS Incident Response Playbook

This playbook assumes that you are one of the primary developers responsible for the VAOS redesign application. It contains a series of instructions that you should follow in the event of an incident affecting production.

## Acknowledgement of the Incident

The first step is identifying that an incident has occurred. Anyone submitting code to vets-website or vets-api is responsible for ensuring the integrity of the application and the platform as a result of that code. While we all support one another in the event of an incident and ownership ultimately falls on the team collectively, it is important that we hold oureslves individually accountable for contributions we make and any adverse impacts that contribution might have as well. We do this through a combination of passive and active monitoring.

### Passive Monitoring and Alerting

As a developer on the VAOS-R team please join the [#vaos-alerts](https://dsva.slack.com/channels/vaos-alerts) channel in DSVA slack if you have not already. We have setup a number of dashboard in Grafana and these dashboards trigger alerts based on SLI to help identify disruptions in application.
In addition, you should join the #oncall channel in DSVA slack and be prepared to notify the folks in platform operations in the event of an incident. Particularly, and most notably if you suspect this incident to pose a security or PII concern.

The alerts in [#vaos-alerts](https://dsva.slack.com/channels/vaos-alerts) channel are triggered based on the following criteria and subject to change:

1. A Circuit Breakers Outage
2. Latency exceeding 8 seconds
3. Request Rate or Errors exceededing a predefined % of total request rate. (this one has yet to be implemented).

In addition, the Platform team monitoring the performance of the overall platform might reach out to folks on the [#vaos-eng](https://dsva.slack.com/channels/vaos-eng) channel in the event of issues they have identified as potentially dangerous and problematic.
A formal oncall schedule for the VAOS team might ultimately be implemented to help address a deficiency here if it is needed.

### Active Monitoring

As a developer on the VAOS-R team we are each responsible for our contributions. This means that shortly after a production deploy we monitor Sentry closely to see if there is an issues associated with recent coding changes. This should be standard operating procedure when you have merged code that is deployed on a given day.

In addition to monitoring Sentry, its important to be vigilant in monitoring threads and conversations happening on VA PPG Slack and to ask questions if you suspect that something being discussed might cause adverse issues to either the VAOS application or VA.gov platform.

### Incident Escalation

If you cannot address an issue yourself either because 

1) it is outside of your scope of influence to address the issue (detailed below), 
2) you are indisposed for whatever reason

you are still responsible for taking whatever means necessary to escalate the issue to someone who can address the issue in a timely manner.

#### VA Mobile Framework Issue Escalation Playbook

1. Identify 3 or more issues from Sentry or other logs and document the following:
    - Timestamp of the error or issue
    - VAMF specific URL that was invoked resulting in an error
    - The error payload
    - If the error payload includes a VAMF error ID, document this error id.
  
2. More holistically identify an overall trend and document the following:
    - How many total events occurred during a given a time frame?
    - How many unique IP addresses were affected by this incident?
  
3. Login to CAG and attempt to find the root cause of the incident in Kibana

    1. First change the time range for the query from "last 15 minutes" to "last 24 hours" or whatever is appropriate.
    2. Next copy and paste one of the error ids you found in Sentry in the search query.
    3. The results returned will most likely not provide a stack trace, but they will provide a pod-name for the next query.
    4. First adjust the time range to be within 1 minute of the last incident you identified in the previous query.
    5. Next search for "pod.name=<whatever the pod name was>"
    6. This should hopefully either point you to a new pod name, in which case you repeat steps 4-5, or you should see a stack trace.
    7. Open a VAOS-R JIRA ticket documenting everything you found from Sentry and Kibana. 
    8. Identify the criticality of the issue. 
    9. Assign the issue to Larry Norcross in Production Support.
    10. Open a corresponding Github in va.gov-team and link to the issue you opened in JIRA.
    11. Tag any appropriate people who should be aware in [#vaos-eng](https://dsva.slack.com/channels/vaos-eng) channel.

#### VA Platform Issue Escalation Playbook

You should also familiarize youself with the following set of responsibilities which you may be called on to perform as part of building on the VA.gov platform.

https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md
