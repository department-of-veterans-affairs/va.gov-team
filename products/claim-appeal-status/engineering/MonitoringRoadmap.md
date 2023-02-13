# Monitoring Roadmap
We need to create a better process for application monitoring so that our team is the first to identify critical issues with our applications. This document provides detailed action items in the short term and ideas for improvement in the long term.

## Monitoring Goals
1. Our team should be the **first to know** that our applications are in error. This enables us to be proactive in our response to incidents.
2. Our monitoring/alerting should be **purposeful**. Purposeful monitoring allows us to respond more quickly to incidents by being focused on what matters.
3. It should be **easy to enable** monitoring/alerting for our applications. This reduces the barrier to adding monitoring and raises the priority by reducing the complexity.

## Scope
This roadmap looks at monitoring through the lens of a "red alert"; if there's an incident, how can we know about it as fast as possible? Providing monitoring solutions for measuring KPIs or reporting metrics other than for measuring error rates/counts is not in scope here.

## Current
Currently, our process for monitoring is ad hoc and disorganized. We have a Sentry dashboard for the Decision Letter Download app. This was created to watch for errors as we stage-released the new Decision Letter Download application, not necessarily for long-term incident monitoring. In addition to the DLD dashboard, we have alerts set up that will email the team if an incident occurs. We also have Sentry alerts set up for the Claims Status Tool.

These alerts only represent 2 of our applications. In addition, they seem to inconsistently fire, and when they do, they don't alert everyone on the team. Finally, alerting is reactive, which is fine in the short term, but long term we'll want to implement proactive & predictive monitoring.

## Roadmap
### Now
- [`first-to-know`] **Reconfigure team membership**:
The current team we're on (`#vfs-ebenefits`) has a bunch of people not on our squad(s). Reducing this to just the folks on our squad(s), including the PM, will allow us (and only us) to be the first to know if there is a problem. We can then share out as needed. 
- [`easy-to-enable`] **Document Sentry queries for finding incident stats for all apps (FE/BE)**:
Documenting the Sentry queries will allow us to have a source of truth that enables automation and easy reporting in the furture
- [`first-to-know`] **Manual, daily report of sentry issues across all applications**:
This is the easiest thing to do for us to get started with more robust monitoring. It represents a good amount of developer time and is prone to human error.
- [`purposeful`] **Set up sentry dashboard for all applications**:
Enables "at-a-glance" incident monitoring. Still a manual process, but takes a shorter time to digest.
- [`first-to-know`] **Set up sentry alerting for all applications**:
Adds automation to our monitoring - if there's a problem, we'll be notified.

### Later
- [`easy-to-enable`] **Add and document sentry tags for easier reporting/dashboard creation**:
Adding Sentry tags allows us to easily query Sentry for related logs
- [`purposeful`] **Set up cloudwatch monitoring/alerting/dashboard(s)**:
Cloudwatch is a more powerful monitoring tool with better alerting capabilities
- [`first-to-know`] **Alerting slack integration**:
Email alerts are fine, but integrating alerts with Slack will ensure real-time incident tracking
- [`first-to-know`] **Synthetic API tests**:
Synthetic API tests allow us to "health-check" our backend endpoints periodically. This requires a tool like Cloudwatch or Datadog, or can be manually accomplished with significant effort

### Someday
- [`first-to-know`] **Incorporate health checking of external services**:
Similar to Synthectic API tests of our own endpoints, periodic pinging of external services would allow us to know if a service is working as expected
- [`first-to-know`] **Synthetic UI tests**:
The pinnacle of incident monitoring - essentially allows us to run Acceptance or E2E tests periodically. This will catch frontend incidents as they happen.