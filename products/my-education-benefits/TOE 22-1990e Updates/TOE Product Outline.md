# 22-1990e TOE Product Outline

---

## Overview
Updating the 22-1990e Transfer of Entitlement (TOE) Form for Authenticated Users

## Problem Statement
Currently, the authenticated experience as a user applying for TOE benefits requires a lot of manual data entry, and no ability to receive a near-real time decision, which results in waiting times of up to 30 days for a decision. This is an opportunity to improve processes for over 120,000 TOE students (14% of all edu beneficiaries) that applied via the 22-1990e (data as of FY2020). 
Thus,
**How might we improve TOE claims processing while also considering the user experience?** 

## Desired User Outcomes

Veterans and their families should be able to: 
- Apply for TOE education benefits by reviewing data VA has on file for them and adjusting it, instead of providing new data that needs to be manually reviewed
- Obtain an immediate decision about their benefit eligibility (at least for a percentage of user base)
- Receive digital communications with status updates and documentation regarding their elgibility
- Seemlessly notify desired school(s) about their eligibility
- Stay informed of pertinent information being communicated from the school they are attending to VA

## Desired Business Outcomes

- Automation of education benefits application processing, without manual review, which should yield:
  - Shorter education application processing times for veterans so they can use their benefits promptly
  - Lower workload on VCE's thanks to automation of common education benefit applications, allowing them to put resources on higher value tasks
## Undesired Business Outcomes
- Delays on processing of TOE applications.

---
## Measuring Success


### Key Performance Indicators (KPIs)
To measure the effectiveness of the application in accomplishing its objectives, we will track:

- Visitor traffic to the website
- Time spent completing each page and identify any sections that may be making aplicants spend a sizeable amount of time completing
- Abandon rate by page
- Percentage of users that complete a submission after starting an application
- Percentage of users getting an automated approval/denial letter as opposed to requiring a manual review to identify automation improvements

---

## Assumptions
VA.gov environment will be able to communicate with the Digital GI Bill (DGIB) services environment. DGIB environment will contain services to obtain veteran personal information, contact information, service history, TOE sponsor information, letters, and submitted applications.

## Solution Approach

*What are you going to build now, and why have you decided to start there?*
- Improving the 22-1990e is a part of the larger goal to modernize and digitize the GI Bill for Veterans. 

*What have you explicitly decided to not include in this initial set of functionality, and why?*
- The updates to the 22-1990e will be primarily for authenticated users. At the current time, we want to prioritize the forms that will facilitate better claims processing and thus a more impactful experience in their education journey.  

*How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
- Our My Education Benefits team will continue to observe other VA education edu benefit forms and see how we can best improve them. 
--- 

## Go-to-market Strategy
How are Veterans and others using this product going to know it exists?

Veterans will be informed about My Education Benefits through a multi-tiered strategy. From focus groups, we've learned that many Veterans get their updates from the website so information will be posted there, as well as through other means including social media, blogs, media outreach, and more.

What marketing, outreach, or communications are necessary for this product to be successful?

- GI Bill Student Newsletter and SCO Newsletter blog posts
- VAntage Point blog
- Social media posts
- benefits.VA.gov website updates (including a potential DGIB campaign landing page)
- Email comms
- Product Features video walking users through the new My Education Benefits experience
- Media Outreach
- Mentions at the GI Bill School Tour

## Launch Dates
- *Target Launch Date*
  - January 2023

---

## Solution Narrative

### Current Status
Application is under development slated for January 2023 release.

### Key Decisions
- Backend services will live on DGIB environment. The application will use Local vets-api endpoints that will serve proxies that generate jwt tokens to communicate with DGIB services. 
- Support only for Post 9/11 (Chapter 33) GI Bill on first release. Other chapters will be added on future releases.

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

Team Name: My Education Benefits
GitHub Label: @department-of-veterans-affairs/my-education-benefits
Slack channel: education-benefits
Product POCs: Cesar Santiago (tech lead), Audra Ayotte(Businesss Lead), Leelah Holmes (Design Lead)
Stakeholders: Tammy Hurley, Robert Holbrook, Ricardo Da Silva

</details>

#### Team Members

<details>
 
Cesar Santiago: Tech Lead
Audra Ayotte: HCD Lead
Leelah Holmes: Design Lead
 
</details>


#### Stakeholders

<details>
 
Education Service | Veterans Benefits Administration
 
</details>
