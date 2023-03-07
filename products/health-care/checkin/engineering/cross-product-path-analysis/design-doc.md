## CIE Cross Product Path Analysis Design Doc

Author(s): **Adrian Rollett**

Last Updated: **March 7, 2023**

Status: **Draft** | In Review | Approved

Approvers:

* Stephen Barrs
* Patrick Bateman
* Shawn Adams

## Overview

### Problem statement

The data needed to answer questions like the following are siloed in disparate stores, greatly increasing the complexity of improving services for Veterans & Staff.

- Of all Veterans who sent a check-in SMS last Tuesday, how many eventually succeeded in checking in?
- On average, how long does it take from the time an SMS is received until a check-in link is sent?
- As a MSA, how might I know what actions a Veteran has already taken before coming to me for help?

### Objective

Provide a data storage & analysis service for tracing Veteran journeys across different products (VEText, CHIP, vets-website), meeting the following requirements:

- Aggregate relevant data from disparate systems
- Provide data visualization tools for synthesized data, ideally including [funnel charts](https://en.wikipedia.org/wiki/Funnel_chart) and [Sankey diagrams](https://en.wikipedia.org/wiki/Sankey_diagram).
- Facilitate real-time data analysis & visualization
- Allow scaling to millions of data points per day
- Provide an API for retrieving high-level Veteran interactions by ICN & date

This document is intended to facilitate review & approval of the project solution by VA technical staff & stakeholders & provide clear implementation guidance to project engineers.

### Background



### High Level Design


## Specifics


### Detailed Design



### Code Location


### Debugging



### Caveats

TBD


### Security Concerns


| Concern | Resolution |
|-------- | ---------- |

### Privacy Concerns



### Open Questions and Risks

- Datadog Log Forwarding Release timeline - slated for late Q1/early Q2, but could slip
- 


### Work Estimates


| Scope       | Estimate       |
| ----------- | -------------- |


### Alternatives


### Future Work

* Provide API 


## Revision History

| Date        | Revisions made | Author         |
| ----------- | -------------- | -------------- |
| Mar 7, 2023 | Initial Draft  | Adrian Rollett |
