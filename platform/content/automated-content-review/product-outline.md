# Automated Content Review Product Outline

## Overview
Automated content reviews allows team members writing static and dynamic content on VA.gov to embrace self-service while adhering to content and plain language standards across the website.

## Problem Statement
The C/IA team spends a non-trivial, unquantifiable amount of human effort addressing “low-level” content support requests, i.e. support requests that can be addressed in an automated fashion, i.e. addressed without the involvement of a human reviewer. This results in increased unnecessary white glove C/IA support work.

Building on previous FE and BE work on “plain language linting”, HMW integrate automated content reviews into content editors’ workflows, both maximizing compliance and minimizing additional burden?
 
## Personas

* VFS content editors
* VSP content reviewer(s)


## Measuring Success

### Key Performance Indicators (KPIs)
* Utilization of plain language linter
* Number of remediations identified and addressed by the plain language linter
* Number of content review support requests, split by low-level errors vs high level errors

#### Baseline KPI Values
n/a

## Assumptions
* VFS content editors will be receptive to using an automated content reviewer (vs reaching out for human support).

## Solution Approach
To pull plain language linting through to the finish line, we will focus on two aspects: rules and enforcement (unprioritized).

* **Rules governing what the automated content reviewer identifies**: Review the preliminary set of content validation warnings ([2235](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2235).
* **Process governing how the automated content reviewer is used**: Identify various VFS content editing workflows, and potential spots within those workflows where an automated content reviewer can be inserted.


## Launch Dates
Launch Date: TBD

### Before
### After

## Reference Material
- Link to the following materials as relevant.
- VFS-facing Product README (in /platform)
- Release Plan
- Any product health or success dashboards

### Communications
- Team Name: VSP Content + Information Architecture
- GitHub Label: #content-ia-team
- Slack channel: #vsp-content-ia
= Product POCs: Liani Lye, Product Manager

### Stakeholders
_What offices/departments are critical to make this initiative successful?_
DEPO
