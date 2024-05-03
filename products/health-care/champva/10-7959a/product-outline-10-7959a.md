
# Product Outline: 10-7959a CHAMPVA Claim Form

## Overview
For beneficiaries enrolled in CHAMPVA (Civilian Health and Medical Program of the Department of Veterans Affairs), filing a claim online would be faster and easier than going through the current paper process.

## Problem Statement
For *In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*

How might we help family members of Veterans get the coverage they need for their claims?
 
## Desired User Outcomes

- Veterans are able to fill out the registration form online on VA.gov
- Veterans spend less time, effort and money filling out and mailing paperwork
- Veterans spend less time spent waiting to hear back on their application status

## Undesired User Outcomes


## Desired Business Outcomes

- *Why would your business want this to exist?*
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

## Undesired Business Outcomes


---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__


#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- Families and beneficiaries of Veterans prefer to fill out forms online rather than on paper.

## Solution Approach

Provide stand alone FMP registration form online with forms sent to PEGA for further processing.

In scope:
- Build out form leveraging existing workflows, design system and content infrastructure as much as possible to avoid custom work
- General flow, patterns and components (v3) follow existing standards in design system as well as accessibility standards
- Fillable fields with pre fill for signed in users
- Digital signature with date stamp accepted by CHAMPVA team
- PDF output of completed form with required meta data and unique identifier
- Integration with PEGA for forms and documents
- Authenticated and unauthenticated experience
- End to end testing with PEGA
  
Out of scope:
- Integration with VES (this will need to be addressed in the future)
- Checking for eligibility requirements
- new list and loop pattern
  
Risks or dependencies:
- PEGA solution will need to be able to house files and handle the different workflows required for different documents and teams
- Integration with PEGA is still being developed

Other considerations:
- Content migration effort to va.gov and expansion of family member benefits hub - coordinate on timing
- VA notify(?) and notifications in general
- handling for mobile app

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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

Key Deliverables:
- [design](https://www.figma.com/file/Tfhq5h2LwXEeEEtFBAAFOv/10-7959a?type=design&node-id=13-80&mode=design&t=YuafvBbuKozoXYFY-0)
- research
- testing plan

### Key Decisions

---
   
## Screenshots

### Before
[PDF](https://www.va.gov/vaforms/medical/pdf/vha-10-7959a-fill.pdf)

### After

---

#### Communications

<details>

- Team Name: IVC Forms team
- GitHub Label: ivc-forms
- Slack channel: ivc-forms
- Product POCs: Mary Wang
- Stakeholders: Erick Maes

</details>

#### Team Members

<details>
 
 - DEPO Lead: Premal Shah
 - PM: Mary Wang
 - Engineering: Michael Clement
 - Research/Design: Rachael Penfil, Steven Straily, Brian Wilke
 
</details>


#### Stakeholders

<details>
 
 - OIT
 - CHAMPVA
   
</details>

