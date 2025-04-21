
# Beneficiary Travel Self-Service System (BTSSS) on VA.gov Product Outline
---

## Overview

VA aims to improve the tooling and accessibility of the beneficiary travel system and experience. As part of our mission to improve Veteran access to care, the existing claim submission systems needs to be integrated more intentionally with VA.gov and VA Health and Benefits mobile application in order to make it easier for Veterans to find and use this benefit.

## Problem Statement

The existing BTSSS system is siloed from other systems and the current VA.gov Veteran experience. Veterans are not able to easily discover, access, authenticate into and complete travel claims using BTSSS due to a complex user experience that was not built using human centered design principles.

Staff travel clerks often have to take manual steps to fix, validate, and process claims that were entered erroneously or on paper.
 
## Desired User Outcomes

- Able to interact with travel reimbursement functionality directly on VA.gov and VA Flagship mobile app
- Able to interact travel reimbursement functionality where it is needed by leveraging an API-first approach
- Enjoy a simple, intuitive experience that meets all VA.gov accessibility, design standards, and performance standards
- Positive feedback through Medallia
 
## Undesired User Outcomes

- Increased usage of the existing Veteran-facing BTSSS portal
- Frustration preventing submission of claims

## Desired Business Outcomes

- Increase digital travel reimbursement claim submissions
- Increase travel claim submission accuracy
- Decrease the number of manually reviewed claims

## Undesired Business Outcomes

- Re-writing the BTSSS backend, business rules, or processing pipelines
- Creating additional work for travel reimbursement staff

---
## Measuring Success

### Key Performance Indicators (KPIs)
| Product KPI                                                                      | Baseline | Target | Data Source |
|----------------------------------------------------------------------------------|----------|--------|-------------|
| % / # of claims submitted in VA.gov matching at least 'in process' status in BTSSS | --       | 100%   | PowerBI     |
| Claims created by API = claims processed by BTSSS                                | --       | 100%   | Datadog     |
| Qualitative feedback                                                              | --       | --     | Medallia    |
| Travel Pay API errors                                                             | --       | 0%     | Datadog     |
| Technical error rate in claim submission on VA.gov                               | 0        | 0      | Datadog     |
| # / % Claims from VA.gov in auto-adjudication                                    | --       | 0%     | PowerBI     |
| Claim volume increase from VA.gov                                                | --       | 30%    | PowerBI     |
| vets API errors                                                                   | --       | 0      | Datadog     |


### Objectives and Key results (OKRs)
- Objective: Improve the usability of VA.gov for beneficiary travel claims
  - Key result: Increase number of users who access TBD by X%

- Objective: Improve reporting of beneficiary travel claims digital tools usage
  - Key result: We are able to track migration progress from the legacy Travel Claims Portal to VA.gov
  - Key result: We are able to establish baseline metrics for the VA.gov experience
 
- Objective: Increase the number of Veterans who are eligible to submit a claim.
  - Key result: Number of valid, payable claims submitted increases by X%
  - Key result: Number of eligible Veterans enrolled is increased by X%

- Objective: Decrease time to payment.
  - Key result: 90% of SMOCs are auto-adjudicated on VA.gov.
  - Key result: 90% of claims are eligible for immediate approval and payment status
   
---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

### Initiatives

- MVP - Status of a Claim: The Travel Pay Status Page, [now viewable](https://staging.va.gov/my-health/travel-pay/claims) to 100% of Veterans
- Simple, Mileage-Only Claims (SMOC) on VA.gov - [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/initiatives/SMOC/smoc_initiative%20brief.md)
- Claim Details v2 (Appealing a denied claim) - [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/initiatives/claim_details_v2/claim_details_v2_initiative_brief.md)
- Complex Claims - [Initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/initiatives/claim_details_v2/claim_details_v2_initiative_brief.md)

--- 

## Launch Strategy
-[Travel Pay Status Page Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

-[SMOC Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/SMOC%20Rollout%20Plan.md)

## Rollout Dates
- *Target Launch Date - Travel Pay Status Page*
  - May 2024
- *Actual Launch Date* 
  - January 2025
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - March 20, 2025
 
- *Target Launch Date - SMOC*
  - December 2024
- *Actual Launch Date* 
  - April 2025
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - June 2025

---

See [Decision Log](./decision-log.md)

---
   
## Screenshots

### Before

Travel Claims Portal - Dashboard

![BTSSS-TCP-Dashboard](https://github.com/laurenernest/va.gov-team/assets/72046525/6d335e38-1139-4986-a754-5bf36e607ee8)

Travel Claims Portal - Appointments List

![BTSSS-TCP-Appointments List](https://github.com/laurenernest/va.gov-team/assets/72046525/6b139471-c8de-4bce-992a-a91e1671cc9d)


### After

_What offices/departments are critical to make this initiative successful?_
 -VTP
 -VEO
 -OCTO
 -Call Center
