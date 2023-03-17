# Product Outline – Income Limits Web App

## Overview

Income is one aspect that determine's a Veteran's eligibility for benefits from VA. An [existing application](https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits) allows Veterans, their caregivers, family members, and others to look up the financial thresholds based on location and number of dependents.

[See Mural of existing application here.](https://app.mural.co/t/vagov6717/m/vagov6717/1657807571797/ee2497db0a9c637538f51e38546ffe3eaea508c0?sender=ua604735c5cf1162b042a4310)

## Problem Statement

The [existing Income Limits web application](https://www.va.gov/healthbenefits/apps/explorer/AnnualIncomeLimits/HealthBenefits) is difficult to maintain the data to accurately provide information to Veterans, their caregivers, family members, and others to look up the financial thresholds based on location and number of dependents. In addition, the current application lacks plain language or clearly defined use cases/usability design and testing to validate that it is intuitively aligned to problems for the Veteran and providing information that is clear and easy to understand.

How might we rebuild this application so that we clearly define the Veteran use cases for this application and modernize the application to better align with how Veterans need to make use of income, location, dependent information as it relates to VA benefit eligibility?

- *As a Veteran I need to understand how income, location, and dependents are a factor in my eligibility determination for VA benefits so that I can understand how this is part - but not all of - the calculation for my eligibility for VA benefits.*
- *As a Veteran I need to be able to find the income threshold for my locality so that I can understand whether or not my financial threshold contributes to or detracts from my eligibility for VA benefits.*
- *As a Veteran I need to be able to model changes in my life circumstances to see if such changes may impact my eligibility for VA benefits.*
- *As a Veteran who determines that they are eligible based on income/location/dependents I need to know what next steps I may need to take to determine additional eligibility criteria.*
- *As a Veteran who determines that they are eligible based on income/location/dependents I need to know what next steps I may need to take to apply for a VA benefit or service.*
- *As a Veteran who determines that they may be ineligible based on income/location/dependents I need to know what, if any, next steps I may need to take to determine additional eligibility criteria*
- *As a Veteran who determines that they may be ineligible based on income/location/dependents I need to know what, if any, next steps I may be able to take to protest the ineligibility criteria*

 
## Desired User Outcomes

- Veteran understands in plain language how income/location/dependents are used as a component to their eligibility for benefits.
- Moving on from “What might I be eligible for?” to action (applying) with a better understanding of the evaluation process.
- In the case of an optional life change, Veteran has more information on which to base a decision.

## Undesired User Outcomes

*I'm not sure these are right* 

- Confusion or frustration with tool itself.
- Feeling confused by the information presented by the tool.
- Discouraging a Veteran from pursuing benefits.

## Desired Business Outcomes

- Increase the use of VA’s self-service tools, and reduce phone calls to the VA.
- Better serve veterans by helping them get faster access to information about some factors affecting benefit eligibility.

## Undesired Business Outcomes

- Increased phone call load to VA about income limits (caused by confusion, etc)

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

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
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- *Why this solution / approach over other solutions / approaches?*
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
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

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: 
 - Engineering:
 - Research/Design: 
 
</details>


## Stakeholders


Primary stakeholders are in VHA Member Services

### Relevant VA org structure

Veteran Health Administration (VHA) > [Undersecretary for Health] > Operations > Member Services

Under Member Services are:
  - Healthcare Eligibility Center (HEC)
    - EED (Enrollment and Eligibility) – _believe this is a child office to HEC_
  - Veterans Transportation Program (VTP) – manages beneficiary travel reimbursement program

### Individuals

#### In HEC: 
**Business SME:**
- Lindsey Peace – our main stakeholder and SME. She works in the Income Verification Division at HEC, so she has expertise in assessing which priority group Veterans are placed (only for Veterans whose priority group is affected by income, typically groups 5-8)

**Technical SME in HEC:**
- Joshua Faulkner (tech) – tech SME regarding the Veteran Enrollment System (VES), which keeps a well-governed database of income limits/thresholds going back years
  - Josh is our key to accessing the VES database, if we use that as (part of) our database

#### In EED:
**Business SMEs:**
- Simone Gully (actully Enrollment Standardization Office (ESO)) - SME on how Veterans get enrolled, and how the enrollment systems work
- Antonio Presley – SME on how Veterans get enrolled, and how the enrollment systems work

#### Technical SMEs in Member Services:
- Steve Ward - Requirements Office within Member Services, reports to Eric Swain. SME in limits themselves, builds a spreadsheet with new numbers for each year and distributes to owners of various systems within VHA that need to update their limits/thresholds annually (eg VistA)
  - Steve would be a key player if we need to maintain our own database of income limits, as he is a trusted source of annual updates

#### Other SMEs in Member Services
- Stacy Rine – Executive Assistant in Member Services - she and Eric Swain were our original points of contact. However, we later learned that she was associated with the old wizard for reasons of history; she passed us to HEC (Lindsey) and is no longer involved.
- Eric Swain - Systems Management at VHA - one of our original points of contact. We spoke once, but he's not hands-on with the data. May have been the project manager for the old income limits wizard. No longer involved.

### Review prior to launch

For copy and information provided to Veterans in the app:
- Lindsey Peace has identified herself as our primary reviewer and fact checker
- She has looked to other SMEs (above) for help understanding benefits and how eligibility is determined for Veterans in certain circumstances - specifically those who receive a VA pension, aid-and-attendance, or housebound benefits.

For calcluations of the actual thresholds:
- Lindsey Peace currently has approval responsibility for the new numbers every year. However, she expressed discomfort with that and would prefer the responsibility go to a more technical stakeholder who can independently validate thresholds (e.g., against the raw HUD tables on which GMT numbers are based).
- We anticipate engaging with Steve Ward or Josh Faulkner to confirm that our app is returning the correct threshold amounts for Veterans in specific circumstances.
  - Josh's VES database has a table of GMT (geographic means test, i.e. zip code driven) thresholds which the new Income Limits app will either 1) use directly via database connection or 2) check our results against.

For annual updates of thresholds:
- TBD – We hope to leverage an external database that will be updated annually. For numbers that we have to import manually every year, we expect to have to re-certify with Josh or Lindsey


