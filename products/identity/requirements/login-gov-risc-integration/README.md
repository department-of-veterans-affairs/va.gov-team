# Feature: Login.gov RISC Integration (MVP)

## Description

Ingest and log RISC events from Login.gov to support proactive fraud analysis and detection. Events are fetched via the RISC API using existing OIDC authentication, parsed in vets-api, and logged to Datadog for review and correlation.

## Requirements Summary

| ID        | Requirement                                                                 | Type                   | Status     |
|-----------|------------------------------------------------------------------------------|------------------------|------------|
| REQ-0007  | Successfully authenticate with Login.gov’s RISC API using existing OIDC flow | Functional             | Completed |
| REQ-0008  | Fetch security events tied to a login session via RISC endpoint              | Functional             | Completed |
| REQ-0009  | Parse and log received RISC events in vets-api                               | Functional             | Completed |
| REQ-0010  | Ensure events are logged into Datadog                                        | Monitoring/Data        | Completed |
| REQ-0011  | Confirm integration does not impact sign-in performance                      | Non-Functional         | In Progress |
| REQ-0012  | Include basic evaluation of event types in at least one confirmed fraud case | Evaluation/Feature     | Planned     |
| REQ-0013  | Provide documentation of RISC event types for team & stakeholders            | Documentation/Content  | Planned     |

## Created
2025-06-02

## Last Updated
2025-06-02
