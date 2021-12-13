# Team Outline: Claims and Appeals
- GitHub Label: vsa, vsa-claims-appeals, benefits-crew
- Slack channel: [#vsa-claims-appeals](https://dsva.slack.com/channels/vsa-benefits-memorial), vsa-benefits-nod (dedicated channel for LightHouse and Claims & Appeals for Notice of Disagreement discussions)
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: Matt Self (matthewself.dvsa@gmail.com and Veronica Henry (ronnie.henry@gcio.com)
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

# Priorities (Updated 12/09/2021)

## Higher Level Review
Launched. This product had been under development for almost a year and delayed significantly due to 526 errors that are consistently impacting existing users. Also, BDD has recently launched and has been at 100%.  We are managing the errors/flow through BDD and have not seen any major issues.  Finally, NOD is on the horizon. 
  
## 526 Health and Technical Debt
This is our flagship product.  We have seen that our error rate drop to 8% but we still have some critical fixes to get us to 100%. The team After delay due to Notice of Disagreement development, the team was able to focus on resolving the majority of 526 errors. PIF in use (first identified in 2020) continues to be the single largest cause of submission failures.
  - This will never be zero and we need to find time for at least two engagements a week
  - We have engaged the team that owns PIF issue for help with clearing PIFs (we still hope for a more automated solution as for now, they need to be cleared manually)
  - Two types of errors - submission and presubmission
  - BDD support falls under 526 now.
  
## Letters
We are still potentially having some issues there.  We need to revisit letters health soon.

## Contention Auto Classification
As a Disability Compensation claimant, I need the online application to decipher the condition I have provided so that VA is able to classify the conditions and the correct exam can be ordered to verify the severity (and service connection) of my claim.

## Launch 8940 and 4192 Forms
As a veteran I need to use the online claims tool to share information about my unemployability so that VA can have everything needed to review my claim.

## Veteran (Call Center) Support
Though there are still periods where we don't receive as many support requests, tickets for 526, Claim Status Tool, and Letters have resurfaced. This is likely due to the new process established this year. 
  - Earlier this year, we had a series of calls with the Contact Center to re-engage
  - Agreed that Contact Center would open GitHub tickets for support issues. We will dedicate 10% of every sprint to support. 
  - We need to figure out how to get useful data in order to triage 
  
## Notice of Disagreement
Completed development Q3 2021
  - Release pending Board of Appeals (stakeholder) approval
  
## Claims and Appeals Status
  - Intial discovery began Q4 2021
  
## Supplemental Claims
Not even on our radar at the moment. 

## Blue Water Navy Veterans Identifiers
Legislation was recently passed to help Blue Water Navy veterans who served in Vietnam with potential exposure to Agent Orange, under very limiting parameters. This will require further discussion with Paul to properly scope, and might need to get further broken down if we'll need to ask a lot of stuff.
  
## IDES
Like BDD (somewhat).  Not on the radar for 2021



# Team Info

## Customer Support
First line is always Matt and Ronnie. However, our channel #vsa-claims-appeals is a great place to talk to anyone about a specific subject.  For specific questions regarding front-end, back-end, or design, you can always contact the individuals in the specific roles below.

|**Roles**              |**Assigned**                        |**Contact Information**         |
|-----------------------|------------------------------------|--------------------------------|
|DSVA Product Manager   |Matt Self                           |matt.self@va.gov                |
|Team Product Manager   |Veronica Henry                      |ronnie.henry@gcio.com           |
|Back-End Engineer      |Csaba Nemeth                        |csaba.nemeth@gcio.com           |
|Back-End Engineer      |Michel McDonald                     |michel.mcdonald@adhocteam.us    |
|Front-End Engineer     |Robin Garrison                      |robin.garrison@adhocteam.us     |
|Front-End Engineer     |Devon Hills                         |asha.gross@adhocteam.us.        |
|Design Researcher      |Christian Valla                     |cvalla@governmentcio.com        |
|Design Researcher      |Kevin Stachura                      |kstachura@govermentcio.com      |
|

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
Monday - 11:00am ET 15 min

Format:

- General Discussion

- What did I do yesterday?

- What will I do today?

- Any blockers?


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

### Issue - Story Point Estimates 

In an effort to standardize Claims & Appeals team estimates the below can act as a reference guide during team planning sessions and Github Issue tracking.  The below chart will be updated as we review the sprint pipeline reflected burndown and velocity estimations of previous sprint performance.   

| Scale  | Days/Weeks (Estimated)  | Story/Feature/Capability/Epic  | Description                                                            |
|--------|-------------------------|--------------------------------|------------------------------------------------------------------------|
| 1      | Partial Day             | Quick Fix / Very Small Story   | Trivial work, minor fixes                                              |
| 2      | 1 Day                   | Small Story                    | Easy task, work is known, can be executed quickly                      |
| 3      | 2-3 Days                | Story                          | Mostly known, doable                                                   |
| 5      | ~1 Week                 | Mid-Sized Story                | Becoming complex                                                       |
| 8      | 1.5 Weeks               | Large Story                    | complex task that will take a few days or longer                       |
| 13     | 2 Weeks / 1 Sprint      | Very Large Story / Feature     | Very complex / not all facets known, may take a full sprint or longer  |
| 21     | More than a sprint      | Feature / Capability (EPIC)    | Needs to be split                                                      |

Reminder: Story points are unitless cales of measurement which are sized in relation to other tasks. This idea of relative sizing is the fundamental driver in Agile estimation and should help keep work effort streamlined and provide scalability going forward. 

---

## Solution Narrative
- **September 2019**: Established roadmap prioritizations, began work on Higher Level Review and Origial Claims 
- **November 2019**: Finalizing "Higher Level Review" and "Original Claims"; started discovery of "Notice of Disagreement" and "BDD"
- **December 2019**: Identifying how to handle Legacy Issues in HLR; Blocked by MVI to complete environment testing due to server error issues. Began business and technical research on Benefits Delivery at Discharge, Claim Status API and Notice of Disagreement.
- **January 2020**: MVI integration for Original Claims (still being worked in February), finalize HLR design and work with AMO for approval, kick off Notice of Disagreement (delayed), begin working Benefits Delivery at Discharge plan (slightly delayed but plan completed by 2/7), lots of HLR bug fixes and updates based on accessibility reviews, prepare forms 8940 and 4192 for launch.
- **February 2020**: Complete MVI integration and complete Original Claims.  Possibly launch at the end of the month but given the MVI integration schedule it is not likely.  Complete HLR design and implementation, also shoot for March launch.  Get through initial usability testing with BDD.  Begin initial analysis of NOD, not expected to be prioritized over Original Claims, BDD, and HLR.
-  ** November 2020** HLR staged rollout
- **Decemeber 2020**: Roll out Benefits Delivery at Discharge.  At 100% by end of December. BDD will turn off on eBenefits by January 31st.
- **March 2021**: HLR launched.
- **April 2021**: NOD staged rollout.
- **June 2021**: 526 usability enhancements.

## Keywords
vsa, vsa-claims-appeals, HLR, 526, vsa-decision-review, NOD, Supplemental Claim, BDD, Original Claim, PTSD
