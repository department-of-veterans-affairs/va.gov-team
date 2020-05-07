# VA Vocational Rehabilitation & Employment (CH31)

- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: #vsa-ebenefits
- Staging EBN link: https://sqa.eauth.va.gov/ebenefits/vre
- Staging EBN Apply: https://sqa.eauth.va.gov/wssweb/wss-common-webparts/mvc/ebn/verifyVRE1900Application 
- Form: https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf
- VA.gov link (unauth landing page): https://www.va.gov/careers-employment/vocational-rehabilitation/
- VA.gov link (tool page): TBD
## WIP

### Table of Contents

# Executive Summary
- [Abstract](#abstract)
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)
- [OKRs](#okrs)


# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## Abstract

Veterans and related claimants can apply for "Chapter 31" benefits, or Vocational Rehabilitation and Employment benefits. This is a very simple application for which we should attempt to prefill all possible fields.

## User Problem Statement

eBenefits, in its current legacy state, is no longer the best version of what can be provided to Veterans, their dependents and caregivers, so that they can quickly and easily apply and obtain the benefits they deserve.

## Solution Goals

### User Goals

- **Veterans:** Apply for Vocational Rehabilitation and Employment benefits at the VA.

### Business Goals

- Deprecate eBenefits, move to VA.gov 

## Assumptions

- `[TODO: CONFIRM]` Product will submit form to Central Mail, no other BE integration
- LOA3 users may be able to apply with one click

## Requirements and Constraints

- Application should be available for all users: UNAUTH, LOA1, and LOA3
- Excerpr from systems requirement doc: In response to the receipt of a 28-1900 
- The system will display and check the following: Veteran or IDES (yes/no), service connected disability rating percentages and conditions (if 10% or more continue eligibility check); discharge other than dishonorable (continue eligibility check); served on or after September 16th 1940 (if yes to all four, Veteran is eligible to participate in an evaluation for chapter 31).

## Solution Approach

- Translate form to VA.gov, prefill logged in user info, submit to Central Mail. Current EBN functionality involves clicking a single button. 

## Value Propositions

### User Value

I can apply for CH31 benefits quickly and without mailing in a form or visiting a RO.

### Business Value

1. Sunset EBN
2. Increase CH31 applications

### KPIs
- Discoverability
- Number of online submissions
#### Baseline KPIs
tbd
### OKRs

--
## Go-to-Market
_How will Veterans find this product? How will they know it exists?_

- Comms isn't controlled by this team but discoverability may be a lever to pull
- Perhaps at account log-in/creation


---
## Results and Recommendations
### Results
- TBD after launch

### Recommendations
- TBD after launch
--- 

# Implementation Info

## Status

**May, 2020**  
- Kickoff with platform  

## Solution Narrative
- TBD

## Team
- VA Executive Sponsor `*`:
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- DEPO Product Lead: **Steve Kovacs** - steven.kovacs@va.gov  
- Product Manager: **Jason Wolf** - jwolf@governmentcio.com
- Designer: **James Adams** - jadams@governmentcio.com
- Frontend: **Jesse Cohn** - jesse.cohn@adhocteam.us
- Frontend: **Micah Chiang** - micah@adhocteam.us
- Backend: **Kathleen Crawford** - kcrawford@governmentcio.com
- Backend: **Derek Dyer** - ddyer@governmentcio.com

`*` = approval required for launch

## Resources and Documentation

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/discovery)
- [Research and Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/apply-CH36-VRE-counseling/research-design)

## NOTES

Form 1900: https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf

## eBenefts Screenshot

[Apply for CH31 on EBN](coming-soon.png)
