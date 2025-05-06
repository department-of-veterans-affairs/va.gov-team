## Product Outline: Logged-in Dashboard `MyVA v3.0`

- Status: `DRAFT`
- Last Update: 4/17/2025

## Table of Contents 
- [Communications](#communications)
- [Roles](#roles)
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Analytics](#analytics)
- [Important Artifacts](#important-artifacts)
- [Research](#research)
- [Design](#design)
- [Frontend](#frontend)
- [Backend](#backend)
- [Security](#security)
- [How to Access and Test](#How-to-Access-and-Test)

## Communications 
- **Github Label:** authenticated-experience, my-va-dashboard
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)
## Roles
[My VA is maintained by the authenticated experience team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team).
## Overview

[Upon sign in, Veterans expect to see actionable tasks and notifications, that are relevant to them, in a centralized location](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/discovery-and-research/user-research/findings-summary.md#participants-want-a-page-that-is-focused-on-current-information-specific-to-them-rather-than-generalized-information-for-all-veterans). My VA aims to surface actionable and dynamic Veteran benefits.
 

Our goal with 3.0 is to redesign the logged-in landing page to be dynamic, action-oriented and notifications-driven, enabling Veterans to quickly understand what needs attention and take relevant next steps.

## Problem Statement
Veterans currently land on a My VA page that is not optimized for immediate action or visibility into time-sensitive updates that are relevant to them. The experience for some sections is static, and Veterans often miss important information or fail to complete important service workflows because these tasks are not highlighted prominently.

How might we reimagine the logged-in landing experience to surface timely, relevant, and personalized actions so that Veterans can confidently manage their benefits and services?
- To start, we plan to remove many of the static links and content that have built up over time, and instead highlight personalized, dynamic information. 
- We intend to[ use new components from the design patterns team that emphasize actions](https://www.figma.com/design/UOx5GSKdZW9GVAjy7078hT/AE-Design-Patterns---Critical-Action?node-id=2-129)

### We’re envisioning this work will be completed in 4 stages: 

- [Phase 1 - Cleanup and overhaul](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108656)   
  - Remove static links and sections   
  - Reorganize / restructured IA
  - Build/Rebuild using our MyVA Governance Documentation 
- [Phase 2 - Refocus using Notifications Center Build and Authenticated Menu Revamp](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108657)   
- [Phase 3 - Enhance card components with dynamic contextual alerts](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108658)   
- [Phase 4 - Incorporate new dynamic components (eg. GI benefits)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/108659)

 ## User Outcomes 

### Desired 
- Veterans are able to see what needs their attention right away (e.g., unread messages, pending document uploads, important deadlines, upcoming appointments).
- Veterans can take quick action on priority items navigating quickly to the relevant onsite experience.
- Veterans can navigate to centralized hubs when actions are not required, such as claims tracker, recent payments, etc.

### Undesired 
- Veterans feel overwhelmed by too many notifications or unclear action prompts.
- Veterans overlook important items due to poor prioritization or information hierarchy.
- Veterans encounter irrelevant or redundant alerts that lead to frustration or distrust.
- Veterans encounter static information that is not relevant to them.
- The new design removes reliable paths to information and tools causing confusion for users. (eg. "the website changes too often," is a refrain we've heard)

## Business Outcomes 

### Desired
- Increase in completion rates for key workflows (e.g., uploading documents, attending appointments).
- Reduction in call center volume due to improved self-service.
- Improved Veteran trust and satisfaction with VA.gov as a digital platform.

### Undesired 
- Increase in support requests due to unclear new design or highlighted information.
- Drop-off in usage if the redesigned experience feels cluttered or intrusive.
- Misalignment with existing systems of record or internal data infrastructure.

## Analytics 

### Key Performance Indicators (KPIs)

NEED TO DISCUSS JUST TOSSED IDEAS IN HERE 
| Category             | KPI                             |
|----------------------|-----------------------------------|
| Ease of use          | Task success rate                 | 
| Ease of use          | Time to first action          |
| Ease of use          | Reduction in search terms on MyVA     |
| Service completion   | Document upload completion        | 
| Service completion   |  Appointment confirmation      |
| Service completion   |  Increase in actions completed (tbd how to measure)   |
| Trust/Satisfaction   | Customer Satisfaction (CSAT) Improvements |
| Health               | % of users engaging with actionable content | 
| Health               |  Bounce rate on MyVA page      |

#### Baseline KPI Values

TBD we need to determine what we want to measure first

### Objectives and Key Results (OKRs)

#### OCTO Crew OKR
- FY25 OCTO DE Goal 1: O1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.
- 1.1 Improve satisfaction with our web and mobile products by 5 points.

#### Team OKR
THIS IS JUST AN IDEA WE CAN CONSIDER -  TO OPERATIONALIZE IT A BIT
- Objective: Make the logged-in experience more actionable and Veteran-centered.
  - Key result: Increase first-action completion within 2 minutes of login by x%.
  - Key result: Increase engagement with top-priority actions by x%
  - Key result: Improve Veteran satisfaction (CSAT) with MyVA page by x%%.

## Important Artifacts
- [Redesign Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/104965)
- [OCTO-Blue-Sky-2.0-2024-Leave-behind.pdf](https://github.com/user-attachments/files/19196922/OCTO-Blue-Sky-2.0-2024-Leave-behind.pdf)
- [My Va Reimagined - research vs. current dashboard](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741893873095/0f0731fe9f8ee4467870e1ef0eb5e374d5b50226)
- [Governance Sharepoint doc](https://dvagov.sharepoint.com/:f:/s/AuthenticatedExperience2/Ep2R4PocTxdEtUMALnYk-W4BO5237d_jVlhszL-S66Nmog?e=CEWWxR) - Auth Exp > Documents > AE Governance

## Research
- [03/2025 My VA Secondary Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/research/2025-03-secondaryresearch/research-findings.md)

## Design

### Screenshots of legacy versions

<details><summary>Legacy versions</summary> 

<details><summary>Version 1.0</summary> 

![My VA 1.0 all widgets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/screenshots/Dashboard-Updated-All%20Features.png)
 
 </details>

<details><summary>Version 2.0 -- July 2021</summary> 

![My VA 2.0 All Sections](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/design-ia/assets/My%20VA%202.0_Desktop_%20All%20sections.jpg)

</details>
 
<details><summary>Addition of Benefit payments and debts -- April 2022</summary>  

![My VA with benefits payments and debts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/My%20VA_April%202022.jpeg)
 
</details>

<details><summary>Addition of Onsite Notifications and Payments and debts V2 -- December 2022</summary>
 
 ![My VA w/onsite notifications and payments V2](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/documentation/images/19911c5a-6d17-40f2-94a4-7cefed5d7d7f.png)
 
 </details>
 
 <details><summary>Implementation of Audit UX Improvements (reduction of conditional states) -- April 2023</summary>
 
 ![My VA audit UX improvements 2023](https://github.com/department-of-veterans-affairs/va.gov-team/assets/45603961/5ef20fa8-b0cc-4099-b8e3-df9782c71961)
 
 </details>

</details>


## Frontend

## Backend

## Security 

## How to access and Test
