
# Product Outline Template
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*

---

## Overview
The VA.gov authenticated experience thus far has been primarily focused on the user journey for existing Veterans or other VA beneficiaries - i.e. Veterans or beneficiaries who are already active in and relatively familiar with VA.gov by way of claim submission, applying for health care and engaging with other VA-sponsored benefits. Upon performing research and discovery to gather a baseline understanding of the transition process from active duty military to Veteran status, the impact VA.gov can improve on the transition process. A distinct onboarding experience could improve the transition process and what that might look like on VA.gov. by providing a more direct list of actionable items that will help a veteran become acquainted with the VA.gov product as a whole and ease their transition of benefits application by frontloading crucial elements of VA.gov in order to improve the overall experience. 
This aligns with OCTO objective 1 for 2024: Our digital experiences are the best way to access VA health care and benefits.

## Problem Statement
VA.gov needs to have a defined onboarding experience on VA.gov. We hypothesize that a lack of digital onboarding guidance for newly transitioning Veterans presents challenges in efficiently and effectively getting Veterans the relevant services and resources they need, leading to potential frustrations, delays, and missed opportunities for support and access to eligible benefits.

## Desired User Outcomes

- Basic understanding of challenges associated with the transition process, specifically with regard to how VA.gov could remedy those pain points
- A simplified Onboarding experience that walks a new Veteran user through key activities and benefits they should do to get started.

## Undesired User Outcomes
- Scope creep: we cannot solve all challenges between DoD and VA regarding the process of transitioning from active duty to Veteran status
IIR and AuthExperience team will not be interfering with VES ongoing benefit recommendation work or welcome package

## Desired Business Outcomes

Before embarking on a large development effort to build an onboarding solution, we need to validate our hypothesis, learn more about the transition process, and define what a good onboarding experience looks like.
We need to answer the following questions:
What role does VA.gov play in how people onboard to VA as a whole?
How can we update VA.gov to make it easier to onboard at VA?
What does successful onboarding to the authenticated experience on VA.gov look like?
- Benefit eligibility
- Benefit Access
- Profile Completion
- ???

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)
- Increase the number of LOA3 users
- Gather key pieces of information for profile completion 


| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- Veterans who access VA.gov often access it via RealID, which authenticates them for LOA3.
- Veterans are not immediately navigating to their profile and completing all missing fields.
Users are not always the account holder (Veteran) 


## Solution Approach
After digesting the research and looking at the comparative analysis, we are tasked with finding ways to 
- incorporate an onboarding experience within an existing product and 
- overlaying the experience in a temporary manner so that users who do not need the onboarding experience can dismiss it. 

The initial phase will be rolled out to welcome Veterans who have not created a VA.gov account and prompt them to front-load data that VA.gov can then utilize when the Veteran is going through the existing benefit application experience. This provides a complementary support structure to the existing VA experience.gov while also utilizing a step-by-step type approach for those who might feel overwhelmed or as though they are not entitled to all the benefits offered on VA.gov.

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- All development will initially be behind a Feature Flag, which we can control the initial rollout to
- New Users will be determined by the account age
- The onboarding experience will appear for all accounts that are flagged as new, a User does not need to take any action to access this experience but they will be able to dismiss it.
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions
- [Transitioning Research 2/26/24]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/research-review.md))
- [Onboarding to VA.gov Product Outline 3/11/24]([url](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onboarding))
- [Comparative Analysis ]([url](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onboarding/discovery-research/comparative-analysis.md))
---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Iterate Innovate & Run
- GitHub Label: Veteran Onboarding
- Slack channel: [#iir-product-teams-public](https://dsva.slack.com/archives/C05RJS5DANT) 
			
</details>

#### Team Members

<details>
 
 - DEPO Lead: Jeff Barnes
 - PM: Kat Kufalk, Oddball
 - Engineering: Adam King, Oddball;
                Nick Sayre, AdHoc;
                John Rodriguez, AdHoc
 - Research/Design: Liza McRuer, AdHoc
 
</details>


#### Stakeholders

<details>
 
-   VES
-   VA mobile team
-   VHA and health modernization teams (MHV on VA.gov)
 
 
</details>
