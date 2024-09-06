
# Statement of Benefits Product Outline
*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*

---

## Overview
*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.*
Our team will fix data issues in the existing Post-9/11 Statement of Benefits (SOB) and make it available 24/7 so Veterans may obtain accurate benefits informaiton. The Statement of Benefits (SOB) Tool is designed to provide detailed benefit utilization and entitlement information to Veterans awarded Post-9/11 GI Bill education benefits, as well as to surviving spouses or dependents utilizing transferred benefits from qualifying Veterans and active-duty service members meeting specific service criteria.

## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)*
- As a Veteran, I want 24/7 availability to view my education benefit eligibility and review remaining entitlements for education and training
- As a content resource, I want to ensure that SOB is enhanced to provide 24/7 availabillity to Veterans
- As a data producer, I want to resolve login, calculation, and data issues


*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.*
 
## Desired User Outcomes

- *Why would a user want to use this?*
  - Users already use SOB for their education benefits information. They want 24/7 availability to accurate benefits information 
- *With this problem solved, what should users be able to do/achieve that they couldn't before?*
  - Access the tool 24/7 and have access to accurate benefits information

## Undesired User Outcomes
- Unable to make SOB available 24/7
- Veterans are presented with innacurate benefits information 

## Desired Business Outcomes

- *Why would your business want this to exist?*
  - Improving the product would make it easier for Veterans to access their SOB education benefits information
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*
  - Provide accurate information to Veterans regarding their education benefits
  - Provide uninterrupted availability to the Statement of Benefits tool so that veterans may access benefits anytime

## Undesired Business Outcomes
- Unable to make SOB available 24/7
- Veterans are presented with innacurate benefits information
- Additional work effort for VA employees
- Increased downtime

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

- Objective: 24/7 access to SOB
  - Key result: Veterans can see their benefits at all times
- Objective: Veterans data displays correctly when logged in to SOB 
  - Key result: Veterans see accurate benefits information when logged in to SOB


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*
The most risky aspect is the assumption that batch processing would address 24/7 access to SOB. If this doesn't work, we would have to find an alternative mechanism to retrieve data. 

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*
  - Discover, analyze, and evaluate SOB for functionality.
  - Reolve login, calculation, and data issues.
   - Discover, analyze, and evaluate SOB data and system integrations.
   - We're starting here because OIT contracted us to do this work 
- *Why this solution / approach over other solutions / approaches?*
   - This approach is best because it will allow us to restore functionality to SOB for users and provide accurate benefits information  
- *What have you explicitly decided to not include in this initial set of functionality, and why?*
  - Right now we're focusing on restoring funcitonality and effectiveness to SOB. We've opted out of other, aesthetic changes to the website and extra features to get a working version out to users as soon as possible. We are not making any design changes to SOB because it is outside our scope of work. 
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*
  - We will make changes based identified bugs or issues within the application.  

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- Initiative | [Link to Initiative Brief](#)

--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*
- Statement of Benefits is a well known tool. Users will recieve communications through the VA about its updates. Our team will work with other VA communications teams throughout the process to ensure users have all necessary information regarding SOB changes. 
- *What marketing, outreach, or communications are necessary for this product to be successful?*
  - [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)
  - We do not have a release plan yet. Our team will begin writing a Release Plan late 2024 or early 2025.
  - Creating a SOB User Guide so the call center knows how to assist Veterans having difficulty managing the tool. 

## Launch Dates
- *Target Launch Date*
  - June 2024 - Discovery
  - July 2024 / August 2024 – Design and Development
  - September 2024 – Iteration and Testing, Bug Fixes
  - December 2024 – Deployment on VA.gov
  - April 2025 – Project End
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status
SOB is currently available from Sunday-Friday 6am-10pm & Saturday 6am-7pm ET to be available 24 hours/7 days a week.

### Key Decisions
- No major design changes, per Tammy Hurley 7/24 via SOB Requirements meeting 
- Remove date of birth from display in SOB because it’s incorrect and unnecessary, per Tammy Hurley 8/21 via email (EDM-121)  
- Not going to display VA file number since it’s often the same as a Veteran’s SSN and unnecessary to show since SOB is an authenticated application, per Tammy Hurley 8/28 during SOB Requirements meeting (EDM-155) 
- Moving forward with claimant-api because it is the most efficient way to solve data issues and make SOB available 24/7, approved by Tammy Hurley 8/28 during SOB Requirements meeting (EDM-156) 
- No longer displaying enrollment history in SOB because it’s not what Veterans are looking for. The purpose of SOB is to show schools Veterans have entitlement so they can defer payments and submit their enrollment information to the VA and they can get enrollment history elsewhere, per Cinda Quattrini 8/28 during SOB Requirements meeting (EDM-157) 
- Do not need to display who Veteran transferred entitlement to, per Cinda Quattrini 9/4 during SOB Requirements meeting (EDM-138) 

---
   
## Screenshots

### Before
![SOB Screenshot 2](https://github.com/user-attachments/assets/4356c300-fcc5-4468-bf1a-4134d054d6d0)
![SOB Screenshot 3](https://github.com/user-attachments/assets/34a7994e-ad68-43fd-a833-234f918d1b50)
![SOB Screenshot 1](https://github.com/user-attachments/assets/34936753-9792-414c-94ba-b70efaefebbf)



### After
We are not making any changes to the design of SOB.

---

#### Communications

<details>

- Team Name: Education Data Migration 
- GitHub Label: Education Data Migration
- Slack channel: edm-team
- Product POCs: Cassidy Beach (Cassidy.Beach@VA.gov), Theresa Simeone (Theresa.Simeone@VA.gov), Jason Wolf (Jason.Wolf1@VA.gov) 
- Stakeholders: Tammy Hurley (Tammy.Hurley1@VA.gov)
  OIT: Darla van Nieukerk (Darla.vanNieukerk@VA.gov)

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: Cassidy Beach (Cassidy.Beach@VA.gov)
 - Engineering: Vanson Samuel (Vanson.Samuel@VA.gov)
 - Research/Design: Sneha Kulkarni (Sneha.Kulkarni@VA.gov) 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
Office of Information and Technology 
 
</details>

