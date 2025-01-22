
# Product Outline: 21-686c (Application Request to Add and/or Remove Dependents) and 21-674 (Request for Approval of School Attendance)

## Overview
The online 686c form allows Veterans to add or remove dependents from their VA benefits. The online form flow is integrated with the 21-674 form (Request for Approval of School Attendance), which is used when claiming benefits for a Veteran's child who is at least 18 years old, but under 23, and attending school.
- [About VA Form 21-686c (Application Request to Add and/or Remove Dependents)](https://www.va.gov/find-forms/about-form-21-686c/) 
- [About VA Form 21-674 (Request for Approval of School Attendance)](https://www.va.gov/find-forms/about-form-21-674/)
- Launched on VA.gov: May 2018
- 686c annual submission volume: 342,750 (2024)
- 674 annual submission volume: 73,300 (2024)

## Problem Statement
Dependent information is used accross many forms and experiences on VA.gov (pension, disability, VA profile, etc.), and there is no unified user experience when interacting with dependency information.

How might we provide a unified experience for Veterans when they need to view, add, remove, or update their dependent inforation across VA.gov?
 
## Desired User Outcomes

- The 686 and 674 online form flow submits information that can be successfully processed by downstream systems
- Claims that fail to submit are successfully processed through a backup submission flow
- Veterans have a positive experience when completing the 686/674 online forms
- Veterans do not encounter accessibility issues with completing the online 686/674 form
- Veterans have a cohesive experience on VA.gov when updating and viewing dependent information

## Undesired User Outcomes
- Online claims experience processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome
- Online claims are lost

## Desired Business Outcomes
- Online form submissions can be successfuly processed through RBPS

## Undesired Business Outcomes
- 686 and 674 online form submissions generate claim errors that prevent automated processing 

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                             | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------------|----------------|--------------|--------------|---------------------|
| # of 686 online claims per year |                |              |              |                     |
| # of 674 online claims per year |                |              |              |                     |
| # of claim errors               |                |              |              |                     |
| # of session to complete claim  |                |              |              |                     |

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Online 686/674 claims are processed as quickly as possible (automated processing)
  - Key result: Average # of days to process an online 686 form
  - Key result: Average # of days to process an online 674 form

- Objective: Veterans have a positive experience when completing the online 686/674 form flow
  - Key result: 
  - Key result: 
---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Priorities

- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=71-1692908552841)

  ### Now

  ### Next

  ### Later

### Initiatives
- [2023 Validate Zip Codes for Military Bases Outside the U.S.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/21-686C-military-base-outside-the-US-address-issues/initiative-brief.md) (This validation was eventually added to the platform-level address design component.)
- [2024 686 and 674 Online form Updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/Initiative-Brief-686-674-Form-Updates.md)
- [2024 Dependent Verification Tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)

--- 
## Key Launch Dates
- October 5, 2023: Backup submission pathway (result of Code Yellow 1 initative)
- August 15, 2024: Update VA.gov to submit the Aug 2022 version of the 686c (instead of the Sep 2018 version).
- August 15, 2024: Updated VA.gov to submit the Oct 2021 version of the 674 (instead of the Jun 2019 version).
- November 12, 2024: Implemented “Action needed” emails to alert Veterans of a claim failure.
- December 2, 2024: Annual net worth value was updated from $155,356 to the 2025 value of $159,240. This needs to be manually updated every year by November 30 Ticket to automate update is [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96876).
- January 2025: 674-only claims sent to RBPS for automated processing. Previously, VA.gov added a "manual" flag to 674-only claims that off-ramped them in BGS for manual processing (before they reached RBPS).

---
## Known Issues

## Key Decisions

---
   
## Design Resources
- [Design Readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/686c-674/Design/README.md)
- [686/674 Form Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1687976281975/2a9c6ca9ea6d955afa7977c777bbb72b15280903?sender=u934f98f179a86c76e6ee9592)
- [Wireframes](https://www.figma.com/file/7W55oNwdVXvXOTI9SaFzQ7/686c-Add-or-Remove-Dependents?type=design&node-id=8-9&mode=design&t=kcdjZspxOR8ocdvT-0)

## Engineering Resources
- Engineering Readme
- Staging URL: https://staging.va.gov/view-change-dependents/add-remove-form-21-686c-v2/introduction 
- Production URL: https://www.va.gov/view-change-dependents/add-remove-form-21-686c-v2/introduction
- Submission flows: [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697740873991/4be42fcadc013be6b3d65bd620522ee68e8e0faf?wid=0-1708962483237) and [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727757799534/c7c5f5a6dc1b8f451ecab5f02afa70a9325b93c8)
- Code Repository: [Vets-API](https://github.com/department-of-veterans-affairs/vets-api) and [Vets-Website](https://github.com/department-of-veterans-affairs/vets-website)
- [DataDog Dashboard](https://vagov.ddog-gov.com/dashboard/vad-969-xqc/benefits-dependents-686674?fromUser=false&refresh_mode=sliding&from_ts=1729703196402&to_ts=1737479196402&live=true)
- [DataDog Monitors](https://vagov.ddog-gov.com/monitors/manage?q=dependent&order=desc)
- [Backup submission reporting](https://vagov.ddog-gov.com/dashboard/66t-jtz-guk/686c-674-backup-submission-reporting?fromUser=false&refresh_mode=sliding&from_ts=1736874419874&to_ts=1737479219874&live=true)
- [Count of claims off-ramped for manual processing](https://vagov.ddog-gov.com/logs?query=%40payload.txt%3AClaim%5C%20set%5C%20to%5C%20manual%5C%20by%2A&agg_m=count&agg_m_source=base&agg_q=%40payload.txt&agg_q_source=base&agg_t=count&cols=host%2Cservice%2C%40payload.txt&fromUser=true&messageDisplay=inline&refresh_mode=paused&storage=flex_tier&stream_sort=desc&top_n=10&top_o=top&viz=toplist&x_missing=true&from_ts=1704088800000&to_ts=1726080480000&live=false)
- [674 Zero Silent Failures Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/dependents_21-674/checklist.md)
- [686 Zero Silent Failures Checklist](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/findings/dependents_21-686c/checklist.md)

---

#### Communications
- Team Name: Benefits Dependent Experience Team
- GitHub Team Label: dependents-benefits
- GitHub Product Label: 686, 674
- Slack channel: benefits-dependents-management
- Product POCs: Sanja Bajovic (OCTO), Laura Steele (VFS Team)
- VBA Stakeholders: Kevin Schneider (OBA), David Reis (OBA), Kayce White (Comp Service)

#### Stakeholders
- Office/Department:
   - OCTO: Sanja Bajovic (PO and Tech Lead), Dene Gabaldon (Design Lead)
   - VBA: Kevin Schneider (OBA), David Reis (OBA), Kayce White (Comp Service)
   - RBPS: Team: Baha Khaled
   - Privacy Officer: Lakisha Wright (lakisha.wright@va.gov)

#### Team Members
 - OCTO Product Owner: Sanja Bajovic
 - OCTO Technical Lead: Sanja Bajovic
 - OCTO Design Lead: Dene Gabaldon
 - Delivery Lead: Amy Plange
 - Product Manager: Laura Steele
 - Backend Engineering: Matthew Knight (lead), Micah Frazier, Evan Smith
 - Frontend Engineering: Sean Midgley, Dakota Larson
 - Research/Design: Ajia Wallace, Fiorella Geedi, Ruben Sun
