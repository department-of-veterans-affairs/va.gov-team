# Product Outline Template
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*

---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

Add ML model to handle cases not explicitly handled in the CC Taxonomy data. 

## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*
 
We are helping veterans fill out their forms with ML modeling to find clinical classifications for their conditions. This will reduce the time and effort of staff and end users to redo forms and proceed to their next steps with 536EZ forms: disability eligibility forms. 

## Desired User Outcomes

- *Why would a user want to use this?*
  - So the VSR/RVSR processing the claim does not need to manually determine and assign classifications for each condition, and the risk for inaccurate classifications is decreased. These lead to reduced processing time.
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
  - Users should have more timely and accurate information on the medical exams that may be needed to complete their claim.
  - VSRs/RVSRs will have reduced instances of needing to determine and assign the classifications.

## Undesired User Outcomes
  - Inaccurate classifications that VSRs/RVSRs have to manually correct.

## Desired Business Outcomes

- *Why would your business want this to exist?*
  - To reduce overhead on manually updating each variation of condition/contention to review 
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
  - Focus less on overhead of Taxonomy matching data 

## Undesired Business Outcomes

- Exposure of PII through model artifacts
  - if not properly scrubbed or secured 

---

## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
  * Datadog > [Benefits - Disability - Conditions Classification API Metrics](https://vagov.ddog-gov.com/dashboard/977-iqs-6ic/benefits-disability-conditions-classification-api-metrics?fromUser=false&refresh_mode=sliding&from_ts=1749496154645&to_ts=1749668954645&live=true)
* _What are the most important metrics that track with this product/initiative's success?_
  * Overall Claim Coverage 
* _Include links to Domo or Google Analytics Dashboards/Reports_
  * N/A
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._
  * [Benefits - Disability - Conditions Classification API Metrics](https://vagov.ddog-gov.com/dashboard/977-iqs-6ic/benefits-disability-conditions-classification-api-metrics?fromUser=false&refresh_mode=sliding&from_ts=1749496154645&to_ts=1749668954645&live=true)

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
    - Expanded Contention Classifier runs without issue 
  - Key result: 
    - Contention Classification Coverage remaining the same or better 

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - integration for ML model of contention classification into expanded contention classification api
  - This is the existing API endpoint that vets-api uses to match contention classification 
- *Why this solution / approach over other solutions / approaches?*
  - This does not change the existing API and its handling of processing
  - From AI team, the AI model ONNX file contains potential PII and PHI in a S3 bucket that is only accessible for this process
    - This reduces the risk of PII/PHI from being accessible if any data is available from reverse engineering 
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - AWS RDS or Aurora because of issues converting ONNX file into (No)SQL data 
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - ML model will update over time to provide better input matching 

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)
  - 

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
  - N/A
- *What marketing, outreach, or communications are necessary for this product to be successful?*
  - N/A
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)
  - N/A

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

- Team Name:      Conditions Team 
- GitHub Label:   Va.gov Conditions Team Project 
- Slack channel:  #va-dbc-conditions-team
- Product POCs:   AI Team
- Stakeholders:   AI Team, Deployment DevOps Team 

</details>

#### Team Members

<details>
 
 - DEPO Lead:       Emily Theis
 - PM:              Jack Bates
 - Engineering:     Zach Murray, Lisa Chung
 - Research/Design: Kim Ladin 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
