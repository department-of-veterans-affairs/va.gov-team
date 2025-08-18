# Platform ATO Approach Outline

## Communications
- GitHub Label: ATO
- Slack channel: N/A
- Product POCs: Michael Spurgeon (michael.spurgeon@adhocteam.us)

## The Problem
ATO is a requirement for launching any new product on the VA.gov platform, but as we've expanded to allow other contracting teams to launch products on VA.gov ATO responsibility and liability has become unclear.

The centerpiece of the ATO questions revolve around the `vets-api` backend repo. *Currently*, Ad Hoc under the Vet.gov contract is responsible for all ATO for the Veteran-facing Services Platform, and for all digital services built on that platform. 

**Risks of Current ATO Landscape**
- If services built by platform user have ATO violations, because Ad Hoc is the approval gate for ATO; Ad Hoc is liable for the result
- Services built by external contract teams could change our ATO risk status *(currently moderate risk status)*
- Services built by external contract teams could make it more difficuilt for our internal team to obtain new ATO approval
- If Ad Hoc is responsible for filing all of the ATO for the platform, we could become a bottleneck for other teams who are trying to launch services on the Va.gov platform

## Goals
### 1. Platform User Goals
- Get ATO approval as quickly as possible
- Avoid impacting the current ATO risk status of the VA.gov platform
### 2. VA Business Goals
- Maintain the safety of Veterans information

### 3. Platform Team Goals
- Don't assume liability/responsibility for external teams ATO violations
- Don't take on the burden of filing external teams ATO requests

## Assumptions

## Questions
Is it possible to create an ATO process that enables external teams to assume responsibility for their own ATO within the VA.gov platform, without impacting the ATO status of the internal team?


## Requirements
#### In Scope 

#### Out of Scope

## Solution Approach

## Value Propositions

## KPIs

---

# Implementation Info

## Status

### Notes from our initial ATO Discussion 12/3/18
```
Problem Statement:
- Complexity around sharing ATO. Today we're deployed in the same infrastructure - `vets-api` serves all of the Vets.gov. Now we're adding additional users of `vets-api` that will be consuming vets-api outside of vets.gov . 
   - using vets-api data in additional instances would require us to update out ATO to serve 3rd parties as well as the original user (veterans)
  - It's hard to get ATO approved because the 3rd party use case wasn't outlined initially. There may be risks in broadening the ATO (disrupting our current ATO).
  - Could potentially change our risk status (currently moderate risk status). It would potentially change how we handle data and manage sign on.

- Ad Hoc under the Vets contract is responsible for maintaining the ATO for the system. If there are changes to the ATO (i.e. 4142 by Booz - Ad Hoc is responsible for update the PIA)

- If API's change for any program using `vets-api` - Vets.gov contract is responsible for updating ATO
  - If this is an non Ad Hoc contractor, we're assuming liability for another contractor's work. (i.e. if a SSN leak happens from another contractor's work [separate, not sub], it creates an ambiguity of who's responsible).
  - Another reason that this is a problem - prioritization of work is dependent on an external program

- If an external contractor asks for data that is not currently apart of the ATO, it could change our ATO risk status.

- If Ad Hoc is in charge of managing everyone's ATO, we may become a bottleneck for other contract teams.
```

### Notes from 2nd ATO Discussion 12/11/18 - Two ATO Paths

**Internal** - External teams build within Va.gov's core development infrastructure -> Ad Hoc will have to control the ATO process and security checks for the external teams.
Challenges:
1. Ad Hoc has to manage the ATO process for external teams that build on the Va.gov Platform
2. Our engineers need to conduct more robust PR reviews to ensure security of external team's development
3. Ad Hoc is responsible/liable for any ATO violations that happen from external team development on the Va.gov Platform
- Security Risk = High
- Technology Operations Risk = Low

**External** - External teams build outside of Va.gov's core development infrastructure -> Ad Hoc does not have to control the external teams ATO process or security checks.
Challenges:
1. Ad Hoc will have to alter VA.gov's technical infrastructure to support integrations with external development
2. In the short term (potentially long term as well), it will be much more difficult for new teams to develop and launch applications on VA.gov
3. Separation of services gives Ad Hoc less control of the development process which may result in fragmentation of the veteran's user experience
- Security Risk = Low
- Technology Operations Risk = High

## Technical Decisions

## Product Decisions

## Team

- VA Digital Strategist(s): 
- Product Manager:  
- Design Lead: 
- Eng Lead: 
- Engineers:
