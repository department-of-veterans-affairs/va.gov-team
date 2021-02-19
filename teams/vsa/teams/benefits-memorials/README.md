# Team Outline: Claims and Appeals
- GitHub Label: vsa-benefits
- Slack channel: [#vsa-benefits-memorial](https://dsva.slack.com/channels/vsa-benefits-memorial), vsa-benefits-nod (dedicated channel for LightHouse and BAM for Notice of Disagreement discussions)
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: Matt Self (matthewself.dvsa@gmail.com and Veronica Henry (vhenry@governmentcio.com)
- [Team Charter and Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials/charter.md)
---

# Table of Contents

## [Team Info](#team-info)

## [Executive Summary](#executive-summary)
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)
- [Features](#features)
  - [Decision Review: Higher Level Review and Notice of Disagreement](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews)
  - [Original Claims](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/claim)
  - [Benefits Delivery at Discharge](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/disability-compensation-claim/bdd)
  - [Claim Status API](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/claim-appeal-status/claim-status-api)
  - [Notice of Disagreement](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/decision-reviews/Notice-of-Disagreement)
  
## Roadmap and Team
- [Solution Narrative](#solution-narrative)
- [Keywords](#Keywords)
- [Team](#team)

# Priorities (Updated 1/12/2021)

## Higher Level Review
We are within days/weeks of launching.  This product has been in work for almost a year and delayed significantly due to 526 errors that are consistently impacting existing users. Also, BDD has recently launched and has been at 100%.  We are managing the errors/flow through BDD and have not seen any major issues.  Finally, NOD is on the horizon. 
- Launch Higher Level Review
  - Focus on UAT, currently not finding candidates (banner has been put up on eBenefits)
  - No updated launch date at this time
  
## 526 Health and Technical Debt
This is our flagship product.  We have seen that our error rate drop from 20% to 8% but we still have some critical fixes to get us to 100%. The team agrees that focusing on 526 before new work is brought on is the ideal scenario.  However, we have Notice of Disagreement.
  - This will never be zero and we need to find time for at least two engagements a week
  - Continued major issue with 526 being fixed
  - Two types of errors - submission and presubmission
  - BDD support falls under 526 now.
  
## Letters
We are still potentially having some issues there.  We need to revisit letters health soon.

## Contention Auto Classification
As a Disability Compensation claimant, I need the online application to decipher the condition I have provided so that VA is able to classify the conditions and the correct exam can be ordered to verify the severity (and service connection) of my claim.

## Launch 8940 and 4192 Forms
As a veteran I need to use the online claims tool to share information about my unemployability so that VA can have everything needed to review my claim.

## Veteran (Call Center) Support
Related to 526 health (and in some ways Claims Status Tool) the traffic from Call Center has died down.  This is likely not due to less calls from veterans (although we do hope there has been a reduction) and most likely due no longer receiving them from call center.
  - Has not been prioritized for a while, likely time to have another look at customer support calls
  - Suggest getting a weekly meeting set up (action for Luke and Ronnie)
  - We need this data in order to bring prioritization recommendations to our customer
  
## Notice of Disagreement
This is a customer that has a direct line to the secretary's office and we have been delaying them for months.  Matt and Lighthouse worked on a delivery plan which has our team starting in January.
  - Prepare for Notice of Disagreement design and implementation
  - Work to get plan updated
  
## Claims and Appeals Status
  - Fell down the priority list, however we have been making file upload fixes
  
## Supplemental Claims
Not even on our radar at the moment.  NOD 100% if we are doing new work.

## Blue Water Navy Veterans Identifiers
Legislation was recently passed to help Blue Water Navy veterans who served in Vietnam with potential exposure to Agent Orange, under very limiting parameters. This will require further discussion with Paul to properly scope, and might need to get further broken down if we'll need to ask a lot of stuff.
  
## IDES
Like BDD (somewhat).  Not on the radar for 2021



# Team Info

## Customer Support
First line is always Matt and Luke. However, our channel #vsa-benefits-memorial is a great place to talk to anyone about a specific subject.  For specific questions regarding front-end, back-end, or design, you can always contact the individuals in the specific roles below.

|**Roles**              |**Assigned**                        |**Contact Information**         |
|-----------------------|------------------------------------|--------------------------------|
|DSVA Product Manager   |Matt Self                           |matt.self@va.gov                |
|Team Product Manager   |Veronica Henry                      |vhenry@governmentcio.com        |
|Back-End Engineer      |Anna Carey                          |anna@adhocteam.us               |
|Back-End Engineer      |Ed Mangimelli                       |ed.mangimelli@adhocteam.us      |
|Front-End Engineer     |Nicholas Sprinkle                   |nick.sprinkle@oddball.io        |
|Front-End Engineer     |Robin Garrison                      |robin.garrison@adhocteam.us     |
|Design Researcher      |Christian Valla                     |cvalla@governmentcio.com        |
|Design Researcher      |Kevin Stachura                      |kstachura@govermentcio.com      |

# Executive Summary

## User Problem Statement
As a Veteran, I want to easily discover, apply for, track, and manage my disability compensation claims on va.gov so that I can have a personalized, guided experiences that provides me access to vital information about VA benefits and services I deserve.

## Solution Goals
Help users manage their entire Disability Compensation claims, reviews and appeals process seamlessly online.

### User Goals
- With resources better presented to the user, they should be able to find and apply for disability benefits with better efficacy.
- By digitizing forms and making them available to be completed online, users will significantly experience shorter turnaround time within every step of their claims process.

### Business Goals
Ensure that as many resources produced by the VA are being leveraged to as many Veterans possible.

## Assumptions
Prioritizations identified for Benefits and Memorials on va.gov align with other systems that are needed to integrate with va.gov. 

## Requirements and Constraints
Onboarding, access and domain knowledge has some upfront challenges.

## Discovery Takeaways
The key to implementing what has been learned is at least two-fold: stay organized and communicate as much as possible.  Notes are useless if they cannot be easily accessed and talking things through with your team allows for shared understanding, team cohesion and improved culture. 

## Solution Approach
Identify and prioritize roadmap, build out backlog, build out target dates of completed products.

## Value Propositions
Probably the largest is the placement of resources closer to the user and their anticiapted increased usage.

#### User Value
Having the same type of experience on a government website as they would on a private company website.

#### Business Value
Money spent on programs at the VA will be better utilized.  Increased usage of digital forms and auto establishment will further reduce costs.  Digital flows will also have additional validation and eliminate back-and-forth with claims personnel.  Each product will have a business value proposition that has more details.

## [KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials/VA%20KPI%20Setting%20-%20VSA%20Benefits%20and%20Appeals.xlsx)

## Sprint Ceremony Schedule

- *Stand-up: people & product check-ins*
Monday and Wednesday - 11:00am ET 15 min

Format:

- General Discussion

- What I did yesterday?

- What will I do today?

- Any impediments?


*Sprint Planning*

Outline team and member focus, goals for sprint:

- 1st Wednesday of every sprint

- 1-2 hour(s)

*Retro*

Review accomplishments from prior sprint, what went well, areas for improvement, what to start doing:

- 2nd Tuesday of every sprint

- 30 min

*Grooming*

Assess and update workload for remainder of sprint:

- 2nd Thursday of every sprint

- 1-hour


---

## Solution Narrative
- **September 2019**: Established roadmap prioritizations, began work on Higher Level Review and Origial Claims 
- **November 2019**: Finalizing "Higher Level Review" and "Original Claims"; started discovery of "Notice of Disagreement" and "BDD"
- **December 2019**: Identifying how to handle Legacy Issues in HLR; Blocked by MVI to complete environment testing due to server error issues. Began business and technical research on Benefits Delivery at Discharge, Claim Status API and Notice of Disagreement.
- **January 2020**: MVI integration for Original Claims (still being worked in February), finalize HLR design and work with AMO for approval, kick off Notice of Disagreement (delayed), begin working Benefits Delivery at Discharge plan (slightly delayed but plan completed by 2/7), lots of HLR bug fixes and updates based on accessibility reviews, prepare forms 8940 and 4192 for launch.
- **February 2020**: Complete MVI integration and complete Original Claims.  Possibly launch at the end of the month but given the MVI integration schedule it is not likely.  Complete HLR design and implementation, also shoot for March launch.  Get through initial usability testing with BDD.  Begin initial analysis of NOD, not expected to be prioritized over Original Claims, BDD, and HLR.
- **Decemeber 2020**: Roll out Benefits Delivery at Discharge.  At 100% by end of December. BDD will turn off on eBenefits by January 31st.
- **January 2021**: Expected launch of HLR.

## Keywords
vsa-benefits, HLR, 526, vsa-decision-review, NOD, Supplemental Claim, BDD, Original Claim, PTSD
