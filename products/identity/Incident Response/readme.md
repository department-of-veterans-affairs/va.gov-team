# Incident Response

## Overview

This document describes the overall response process for any suitably severe incident related to components owned by the OCTO Identity Team. The incident response process is split into four categories: the determination of the severity of the incident, the incident declaration, ongoing incident management, and finally, the resolution of the resolution. 

## Determination of Incident Severity

* If a production monitor or alert has triggered, first, the severity of the incident must be determined.
* Incident priorities are organized using P1, P2, P3, P4 levels
* P1 level incidents require an official incident declaration
* The [incident declaration guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/67c819fcfbb0282f77f0c5daeb978c1efcc98d26/products/identity/Incident%20Response/Incident%20Declaration.md) document can be used to determine the severity of an incident.

## Declaring an Incident
* Incident management is performed through [Datadog Incidents](https://vagov.ddog-gov.com/incidents)
* Specific instructions for declaring an incident are described in [datadog incident management](https://github.com/department-of-veterans-affairs/va.gov-team/blob/46456243acc2110580f0a2ffb3d2e6696b4bb48a/products/identity/Incident%20Response/Incident%20Declaration%20Guidelines.md)
* If an incident requires code changes by the OCTO Identity team, in addition to the incident declaration, an Out of Band deploy is likely necessary. Follow the Platform OOB [process](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies#DeploymentPolicies-Requestingout-of-banddeploys)

## Ongoing Incident Management 
* After an incident is declared through [Datadog Incidents](https://vagov.ddog-gov.com/incidents), ongoing communication about the state of the incident are expected until resolution
* Every 30 minutes, if the incident is not resolved, create a [notification](https://github.com/department-of-veterans-affairs/va.gov-team/blob/dbe25426a273705ab34e1be4e64fe7d0a2827d04/products/identity/Incident%20Response/Datadog%20Incident%20Management.md) in the Datadog Incident
  * Performing this action will post a message in the `#identity-support` Slack channel

## Resolving an Incident
* When monitor has resolved, or incident has otherwise resolved, the [Datadog Incident](https://vagov.ddog-gov.com/incidents) status can be set to `Resolved`
* Datadog will automatically create a Post Mortem of the incident, and will send a notification in the `#identity-support` Slack channel of the incident resolution
