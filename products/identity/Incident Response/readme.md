# Incident Response

## Overview

This document describes the overall response process for any suitably severe incident related to components owned by the OCTO Identity Team. The incident response process is split into three distinct categories: the determination of the severity of the incident, the incident declaration, and the incident resolution. 

## Determination of Incident Severity

* If a production monitor or alert has triggered, first, the severity of the incident must be determined.
* Incident priorities are organized using P1, P2, P3, P4 levels
* P1 level incidents require an official incident declaration
* The [incident declaration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/67c819fcfbb0282f77f0c5daeb978c1efcc98d26/products/identity/Incident%20Response/Incident%20Declaration.md) document can be used to determine the severity of an incident.

## Declaring an Incident
* Create incident in datadog
* Comms
* Every 30 minutes, provide update
* Post updates to identity support channel

## Resolving an Incident
* Close out incident in datadog by creating postmortem in datadog
* If an incident requires code changes by the OCTO Identity team, follow the Platform OOB [process](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies#DeploymentPolicies-Requestingout-of-banddeploys)

## Postmortem

* Datadog will create postmortem automatically
