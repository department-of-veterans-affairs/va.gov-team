
# Product Outline: 21-686c (Application Request to Add and/or Remove Dependents) and 21-674 (Request for Approval of School Attendance)

## Overview
The online 686c form allows Veterans to add or remove dependents from their VA disability or pension benefits. The online form flow is integrated with the 21-674 form (Request for Approval of School Attendance), which is used when claiming benefits for a Veteran's child who is at least 18 years old, but under 23, and attending school.
- [About VA Form 21-686c (Application Request to Add and/or Remove Dependents)](https://www.va.gov/find-forms/about-form-21-686c/) 
- [About VA Form 21-674 (Request for Approval of School Attendance)](https://www.va.gov/find-forms/about-form-21-674/)
- Launched on VA.gov: May 2018
- 686c annual submission volume: 342,750 (2024)
- 674 annual submission volume: 73,300 (2024)

## Incident Response
- Points of Contact
   - Jacob Worrell (Product Manager) | jacob.worrell@va.gov / jacob.worrell@adhocteam.us | jacobworrell (github)
   - Wayne Weibel (Engineering Lead) | ? / wayne.weibel@adhocteam.us | wayne-weibel (github)
   - Sanja Bajovic (OCTO Product Owner) | sanja.bajovic2@va.gov | sanjabaj2 (github)
- [Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/engineering/686-674_Monitoring_Playbook.md)
- [Security Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/engineering/686-674_Playbook_Security.md)
- Engineering [readme](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/engineering/README.md)

## Vison
VA’s vision for Dependents Management on VA.gov is to create an accessible, efficient experience for Veterans and their families to manage and verify dependent information. This will ensure appropriate financial calculations and prevent over- (resulting in debt) and under-payments.

## Problem Statement
Dependent information is used accross many forms and experiences on VA.gov (pension, disability, VA profile, etc.), and there is no unified user experience when interacting with dependency information.

### Some specific problems of the application:
- Hasn’t been proven to lead to faster or more accurate decisions.
- Hasn't validated the proof of concept for the dependent verification MVP (VA Form 21- 0538), which is critical to ensure it offers a more effective experience than the paper form for Veterans and is actionable for both claims adjudicators and automation.
- Leverages complex software, which slows development time and increases risk of critical bugs and production issues, especially related to form version updates.

### Known User Pain Points:
- Lack of intuitive and accessible dependent management experience.
- Inability to edit dependent information.
- Awareness of need to verify dependents.
- Inability to verify dependents (digital MVP of VA Form 21-0538 is a work in-progress and proof of concept needs to be validated).
- Poor findability, clarity, and interoperability of the dependent management experience across VA.gov.
- Cumbersome for Veterans to start, re-start, edit, navigate, and review their application while filling out.
- Having to provide information that the VA already has access to, leading to unnecessary effort, delays, and abandonment.
 
## Desired User Outcomes

- Zero claims fail: Zero Veterans will submit a claim or associated evidence on VA.gov that silently fails in the background.
- Zero incomplete claims: Zero Veterans will submit a claim on VA.gov and then be immediately requested by VA for additional information due to out-of-date or incomplete forms.
- Faster claim decisions: Veterans submitting claims via VA.gov will receive decisions at least as quickly as those submitting similar claims via paper.
- Increased digital usage: There will be a measurable increase in the proportion of claims submitted through VA.gov, compared to traditional paper submissions.
- Improved digital experience: Veterans submitting claims through VA.gov will experience a more streamlined, user-friendly process than submitting paper claims, with increased satisfaction (CSAT) and ease of completion.

## Desired Business Outcomes
- Timely form updates: Application forms will be updated to reflect paper form changes within a maximum of one year, with an optimal target of under six months.
- Employee satisfaction: VA employees who evaluate claims will report a higher satisfaction score for claims received through VA.gov compared to similar claims received via paper.
- Reduced manual intervention: VA employees will perform fewer manual actions on claims submitted via VA.gov, such as combining duplicate claims or adding missing data.
- Reduced product maintenance burden: Product development teams working on VA.gov will experience a reduced burden in maintaining applications and supporting artifacts (such as design files, product documentation, etc.) ensuring stable operations and minimal production issues.
- Faster error detection and resolution: Mean time to detection and mean time to resolution of application errors will be tracked and reduced throughout the project lifecycle.

## Outcomes to be Avoided
-  Increased time or effort for Veterans to submit claims.
-  Increased the time or effort for VA employees to process claims.
-  More development letters sent to Veterans requesting additional information due to incomplete or incorrect digital claim submissions.
-  Reduced decision accuracy for claims submitted on VA.gov.
-  Increased complexity in making updates to the application, which could hinder future improvement and/or increase production issues.
-  Increased investment in tasks that do not contribute to government priorities or deliver value to end-users (Such as system re-architecture without proper consultation and approval of government platform leads or repeated research of well-known or deprioritized topic areas)

---
## Measuring Success


### Key Performance Indicators (KPIs)
<!--* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_-->

| KPI                             | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------------|----------------|--------------|--------------|---------------------|
| # of 686 online claims per year |                |              |              |                     |
| # of 674 online claims per year |                |              |              |                     |
| # of claim errors               |                |              |              |                     |
| # of claim failures             |                |              |              |                     |
| # of session to complete claim  |                |              |              |                     |

### Objectives and Key results (OKRs)
<!--_What are the measurable targets you're aiming for that delivers value for Veterans?_-->

- Objective: Online 686/674 claims are processed as quickly as possible (automated processing)
  - Key result: Average # of days to process an online 686 form
  - Key result: Average # of days to process an online 674 form

- Objective: Veterans have a positive experience when completing the online 686/674 form flow
  - Key result:
  - Key result: 
---

## Priorities

- [Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1692908527043/0da94b7ded52e8a943d798bcb8ae39697c2fb56f?wid=71-1692908552841)


### Initiatives
- [2023 Validate Zip Codes for Military Bases Outside the U.S.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/21-686C-military-base-outside-the-US-address-issues/initiative-brief.md) (This validation was eventually added to the platform-level address design component.)
- [2024/25 686 and 674 Online form Updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/form_updates/Initiative-Brief-686-674-Form-Updates.md)
- [2024/25 Dependent Verification Tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/dependents/dependency_verification/initiative-brief-dependent-verification-tool.md)

--- 
## Key Launch Dates
- October 5, 2023: Backup submission pathway (result of Code Yellow 1 initative)
- August 15, 2024: Update VA.gov to submit the Aug 2022 version of the 686c (instead of the Sep 2018 version).
- August 15, 2024: Updated VA.gov to submit the Oct 2021 version of the 674 (instead of the Jun 2019 version).
- November 12, 2024: Implemented “Action needed” emails to alert Veterans of a claim failure.
- December 2, 2024: Annual net worth value was updated from $155,356 to the 2025 value of $159,240. This needs to be manually updated every year by November 30 Ticket to automate update is [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/96876).
- January 2025: 674-only claims sent to RBPS for automated processing. Previously, VA.gov added a "manual" flag to 674-only claims that off-ramped them in BGS for manual processing (before they reached RBPS).

---
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
