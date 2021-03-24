# VA Veteran Readiness & Employment (CH31)  
_(previously Vocational Rehabilitaion and Employment)_

- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: [#vsa-ebenefits](https://dsva.slack.com/channels/vsa-ebenefits)
- Initial paths: https://xd.adobe.com/view/397eb9d2-4b41-4e8c-6d56-b47ae93c54f1-4f4f/screen/435bca4a-b907-41ee-9284-648cd2f5f114/Chapter-31-Screens-1
- Staging EBN link: https://sqa.eauth.va.gov/ebenefits/vre
- Staging EBN Apply: https://sqa.eauth.va.gov/wssweb/wss-common-webparts/mvc/ebn/verifyVRE1900Application 
- Form: https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf
- Staging VA.gov link (unauth landing page): https://staging.va.gov/careers-employment/vocational-rehabilitation/
- Staging VA.gov link (tool page): https://staging.va.gov/careers-employment/vocational-rehabilitation/apply/
- VA.gov link (unauth landing page): https://www.va.gov/careers-employment/vocational-rehabilitation/
- VA.gov link (tool page): https://staging.va.gov/careers-employment/vocational-rehabilitation/apply/

## Product Outline

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

Claimants can apply for Chapter 31 Veteran Readiness & Employment benefits.

## User Problem Statement

As a Veteran or Servicemember I need to understand and apply for CH31 benefits.

## Solution Goals

### User Goals

- **Veterans:** Apply for Veteran Readiness & Employment benefits at the VA.
- **Field:** Receive a higher volume qualified applicants 

### Business Goals

- Sunset eBenefits
- Provide applicants with a brief orientation to increase qualified conversions

## Assumptions

- Product will submit form to VR&E CMS System via custom API

## Requirements and Constraints

- Application should be available for all users: UNAUTH, LOA1, and LOA3
- Excerpt from systems requirement doc: 
> In response to the receipt of a 28-1900, the system will display and check the following: Veteran or IDES (yes/no), service connected disability rating percentages and conditions (if 10% or more continue eligibility check); discharge other than dishonorable (continue eligibility check); served on or after September 16th 1940 (if yes to all four, Veteran is eligible to participate in an evaluation for chapter 31).

## Solution Approach

- Translate form to VA.gov, prefill logged in user info, submit to VBMS and integrate with their new VRE API + system.  
- Incorporate new orientation content for better qualify applicants.  

## Value Propositions
### User Value
I can apply for CH31 benefits quickly and without mailing in a form or visiting a RO.

### Business Value
1. Sunset EBN
2. Increase CH31 applications

### KPIs
- Conversion rate
  - % of people who make it from application completion to first counseling interview
- Time to complete
-   - N amount of time to get through the form beofre either submission or abandonment

#### Baseline KPIs
TBD

### OKRs
1. Improve abandonment/conversion rate
2. Improve time to complete

--
## Go-to-Market

_How will Veterans find this product? How will they know it exists?_

- VR&E performs outreach
- Veteran personal networks often recommend this program

---
## Results and Recommendations

### Results
- TBD after launch

### Recommendations
- TBD after launch
--- 

# Implementation Info

## Status
May, 2020: Kickoff with platform   
Dec 1 2020: e2e integration Testing, scaffold form component   
Jan 2021: Collaboration with VRE API Team,   
Feb 2021: Frontend complete, testing Orientation  
March 2021: Finalize orientation content, collab cycle activities  
April 2021: UAT, Launch requested for April 19, 2021  

## Team
- VA Executive Sponsor `*`: Jessica Bland, Alison Rosen
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`: 
- DEPO Product Lead: **Steve Kovacs** - steven.kovacs@va.gov, **Matt Self** - matt.self@va.gov. **Sabrina Mohamed** - sabrina.mohamed@va.gov  
- Product Manager: **Jason Wolf** - jwolf@governmentcio.com
- Designer: **James Adams** - jadams@governmentcio.com
- Frontend: **Jesse Cohn** - jesse.cohn@adhocteam.us
- Frontend: **Micah Chiang** - micah@adhocteam.us
- Backend: **Kathleen Crawford** - kcrawford@governmentcio.com
- Backend: **Derek Dyer** - ddyer@governmentcio.com

`*` = approval required for launch

## Resources and Documentation

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/discovery)
- [Research and Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/research-design)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/release-plan.md)
- [Internal 508 Audit](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/apply-vre-ch31/508)
- 
## NOTES

Form 1900: https://www.vba.va.gov/pubs/forms/VBA-28-1900-ARE.pdf

## Before and After Screenshots

[Apply for CH31 on EBN](coming-soon.png)
[Apply for CH31 on VA.gov](coming-soon.png)
