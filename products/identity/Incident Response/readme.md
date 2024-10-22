# Incident Response

## Overview

This document describes the overall response process for any suitably severe incident related to components owned by the OCTO Identity Team. The incident response process is split into four categories: the determination incident impact, the incident declaration, ongoing incident management, and finally, the resolution of the incident.

## Determination of Incident Impact

- If a production monitor or alert has triggered, determine the priority of the incident:
    - This will justify whether an incident must be declared, or if simple monitoring is sufficient
    - Incident priorities are organized using P1, P2, P3, P4 levels
    - P1 level incidents require an official incident declaration
    - If a production alert for SSOe or SiS is active for 15 minutes or longer, it qualifies as a P1 and must be declared as an incident in Datadog.
- The [incident declaration guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md) document can be used to determine the priority of an incident.

## Declaring an Incident

- Incident management is performed through [Datadog Incidents](https://vagov.ddog-gov.com/incidents)
- Specific instructions for declaring an incident are described in [datadog incident management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Datadog%20Incident%20Management.md)
- If an incident requires code changes by the OCTO Identity team, in addition to the incident declaration, an Out of Band deploy is likely necessary. Follow the Platform OOB [process](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies#DeploymentPolicies-Requestingout-of-banddeploys)

## Ongoing Incident Management

- After an incident is declared, ongoing communication about the state of the incident are expected until resolution
- Every 30 minutes, if the incident is not resolved, create a notification in the [declared incident page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Incident%20Response/Datadog%20Incident%20Management.md#declared-incident-page)
    - Performing this action will post a message in the `#identity-support` Slack channel

## Resolving an Incident

- When the alert has resolved, or incident has otherwise resolved, the datadog incident status can be set to `Resolved` and a notification should be sent from within Datadog to notify all relevant parties
- Datadog can be used to generate a Post Mortem of the incident
- System recovery procedure [documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Incident%20Response/System%20Recovery%20Procedures) can be consulted to determine proper testing and communication after incident resolution
