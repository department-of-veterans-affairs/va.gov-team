# Product Outline - STEM Scholarship Application Automated Decision
---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*

## Problem Statement
### Problem #1: 
**Who** STEM applicants
**What** Ineligible STEM applicants are waiting 30 days for a decision
**Why** 
**Where** 

### Problem Statement: The STEM application processing team continues to receive a large number of ineligible STEM applications which takes time away from the team's ability to review and process eligible applicants. In addition, applicants are waiting 30 days to hear back on their application being either approved or denied. 
**Who** STEM application processing team
**What** The application processing team has historically received a large number of ineligible STEM applications
**Why** This has been problematic because it delays the team's ability to review and process eligible applicants 
**Where**

### How might we allow create a system that gives ineligible applicants a decision immediately and prevents the processing team from having to review most ineligible applications?

## Desired User Outcomes
- All interested users are able to apply for the scholarship
- Ineligible applicants get an immediate decision (no longer have to wait 30 days)

## Undesired User Outcomes
- Users are frustrated by an automated decision (feeling the human review experience allows for exceptions to the rules where appropriate)

## Desired Business Outcomes
- Application processing team no longer has to review as many ineligible STEM applications

## Undesired Business Outcomes
- The number of appeals due to STEM denials increases significantly is problematic for the appeals team.


---
## Measuring Success

### Key Performance Indicators (KPIs)
*What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
_What are the most important metrics that track with this product/initiative's success?_
_Include links to Domo or Google Analytics Dashboards/Reports_

- **Significant decrease in the number of STEM applications reviewed by the processing team**
- Tracking the number of automated decisions made compared to the number of people who leave the form due to ineligibility. 

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
- There will be clear guidance from the VA regarding eligibility v. ineligibility as it relates to the automated decisions. 

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
- 
We are going to develop business logic to assess applicant answers and remaining entitlement to determine if the an automated denial is warranted based on criteria provided by our EDU stakeholder. Automated denials will generate a new spool file document type to send to The Image Management System (TIMS) for permanent record of the decision. An email will be sent to the applicant informing them there has been a decision. An item will be added to the claims status page with the denial record, details, and a link to appeals rights and procedures. Applications where automated denial is not warranted will be processed as normal.

- *Why this solution / approach over other solutions / approaches?*

This would provide almost immediate decision for ineligible applicants and reduce processing burden for the Regional Processing Office.

- *What have you explicitly decided to not include in this initial set of functionality, and why?*

There will be no indication of the status for normally processed applications, because there is no visibility into the systems for processing the applications and no way to receive status returns.

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

Status for normally processed applications could be added, if external systems provide opportunities for integration.

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*

The decision email will be sent to applicants whose applications are automatically denied, otherwise it will be irrelevent.

- *What marketing, outreach, or communications are necessary for this product to be successful?*

Education Service will be updated via project briefings and demos

- [Link to Release Plan](#go-to-market-strategy)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch?*
  - 
---

## Solution Narrative

## Incident Response@Daniel Shawkey)
- Points of contact for your system: Dan Shawkey (shawkey_daniel@bah.com, @Daniel Shawkey)
- Points of contact for dependent VA backends: 
- Links to dashboards that help identify and debug application issues: 

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: BAH
- GitHub Label: bah-stem
- Slack channel: bah-team
- Product POCs: Darrell Neel, Amy Knox
- Stakeholders: VA Education Services

</details>

#### Team Members

<details>
 
 - DEPO Lead: Matt Self
 - PM: Will McCormack
 - Engineering: Dan Shawkey
 - Research/Design: Amy Knox
 - Product Manager: Darrell Neel 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

