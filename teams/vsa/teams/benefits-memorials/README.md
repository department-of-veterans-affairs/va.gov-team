# Product Outline: Benefits and Memorials
- GitHub Label: vsa-benefits
- Slack channel: vsa-benefits-memorial, vsa-benefits-nod (dedicated channel for LightHouse and BAM for Notice of Disagreement discussions)
- VA.gov link: n/a
- Demo video link: n/a
- Product POCs: Andrea Schneider (andrea.schneider@va.gov) and Luke Majewski (lmajewski@governmentcio.com)
- [Team Charter and Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials/charter.md)
---

### Table of Contents

# Executive Summary 
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
  

# Roadmap and Team
- [Solution Narrative](#solution-narrative)
- [Keywords](#Keywords)
- [Team](#team)

---

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

---

## Solution Narrative
- **September 2019**: Established roadmap prioritizations, began work on Higher Level Review and Origial Claims 
- **November 2019**: Finalizing "Higher Level Review" and "Original Claims"; started discovery of "Notice of Disagreement" and "BDD"
- **December 2019**: Identifying how to handle Legacy Issues in HLR; Blocked by MVI to complete environment testing due to server error issues. Began business and technical research on Benefits Delivery at Discharge, Claim Status API and Notice of Disagreement.
- **January 2020**: MVI integration for Original Claims (still being worked in February), finalize HLR design and work with AMO for approval, kick off Notice of Disagreement (delayed), begin working Benefits Delivery at Discharge plan (slightly delayed but plan completed by 2/7), lots of HLR bug fixes and updates based on accessibility reviews, prepare forms 8940 and 4192 for launch.
- **February 2020**: Complete MVI integration and complete Original Claims.  Possibly launch at the end of the month but given the MVI integration schedule it is not likely.  Complete HLR design and implementation, also shoot for March launch.  Get through initial usability testing with BDD.  Begin initial analysis of NOD, not expected to be prioritized over Original Claims, BDD, and HLR.

- [Roadmap](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials/Benefits%20and%20Memorials%20Roadmap.png)
- ATO documentation: Part of general VSA ATO - Luke will update with a link when he finds one.

## Keywords
vsa-benefits, HLR, 526, vsa-decision-review, NOD, Supplemental Claim, BDD, Original Claim

## Team
|**Roles**              |**Assigned**                        |
|-----------------------|------------------------------------|
|DSVA Product Manager   |Andrea Schneider                    |
|Team Product Manager   |Luke Majewski                       |
|Back End Engineer      |Silvio Luthi                        |
|Front End Engineer     |Nicholas Sprinkle                   |
|Front End Engineer     |Robin Garrison                      |
|Design Researcher      |Christian Valla                     |
|Design Researcher      |Kevin Stachura                      |
