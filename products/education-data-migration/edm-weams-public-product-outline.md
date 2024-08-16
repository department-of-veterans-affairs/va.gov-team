# WEAMS Public Product Outline 

## Overview 

*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.* 

Our team will enhance VA education tools by migrating WEAMS Public  ("WP") data into the Comparison Tool. The current-state design and functionality of  WEAMS Public site will be analyzed to identify any future WP functionality via an extract from WEAMS corporate and GIDS, including updated institution, license, certification, and exam information. 


## Problem Statement 

*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)* 

- As a Veteran, I want to view up-to-date institution, license, certification, and exam information in WP 
- As a Developer, I want to ensure that the displayed data in WP is error-free and renders correctly 
- As a UX Designer, I want to confirm that users are able to navigate the YRT with little-to-no errors so that they can access YRT data.
- By migrating data from YRT into Comparison Tool, EDM can ensure data consistency. In addition, the enhancement of available information will ease the process of acquiring data.  

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.* 

## Desired User Outcomes 

- *Why would a user want to use this?* 
  - Users want to see relevant, accurate information across tools. Information should be consistent throughout VA education benefit tools to reduce benefit miscalculations. 
- *With this problem solved, what should users be able to do/achieve that they couldn't before?* 
  - Users will be able to view institutional, license, certification, and exam information in an easy-to-read, 508-approved format.  

## Undesired User Outcomes 

- Veterans are unable to access up-to-date institution, license, certification, and exam information  
- Veterans are presented with inaccurate benefits information 
- Unexpected errors or outages 

 ## Desired Business Outcomes 

- *Why would your business want this to exist?* 
  - Improving the product would continue the enhancement of VA's education benefit tools, ensuring data alignment 
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?* 
  - Provide accurate information to Veterans regarding their education benefits 
  - Provide institution, license, certification, and exam information 

## Undesired Business Outcomes 

- Veterans are presented with innacurate benefits information 
- Additional work effort for VA employees 
  
--- 

## Measuring Success 

### Key Performance Indicators (KPIs) 

* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?* 

- Number of users who accessed the tool within (X time frame) 
- Numnber of users who experienced errors in a session within (X time frame) 
- Number of reported issues to the Contact center related to YRT 

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
- Objective: WP data into CT using GIDS and WEAMS Corporate 
  - Key result: WP data appears in CT without data discrepancies 
- Objective: Veterans data displays correctly 
  - Key result: Veterans see accurate benefits information for institutions, programs, certifications, and licenses 

--- 

## Assumptions 

- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality* 
  - The riskiest assumption that WP will interface correctly into CT. 

## Solution Approach 

- *What are you going to build now, and why have you decided to start there?* 
  - Discover, analyze, and evaluate WP into CT using GIDS and WEAMS Corporate for functionality. 
  - Reolve login, calculation, and data issues.
  - Discover, analyze, and evaluate SOB data and system integrations.
  - We're starting here because OIT contracted us to do this work 
- *Why this solution / approach over other solutions / approaches?* 
   - This approach is best because it will allow us to enhance overall VA benefit tools functionality for users and provide accurate benefits information  
- *What have you explicitly decided to not include in this initial set of functionality, and why?* 
  - The focus remains on ensuring data accuracy between WP, Weams Corporate, and GIDS. Minor aesthetic changes, in addition to institution / programs / licenses/ certifications updates will occur.  
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?* 
  - We will make changes based on requested / vetted Business requests and identified bugs or issues within the application.  

### Initiatives 

*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)* 
- Initiative | [Link to Initiative Brief](#) 

--- 

## Launch Strategy 

- *How are Veterans and others using this product going to know it exists?* 
Users will receive communications through the VA about its updates. Our team will work with other VA communications teams throughout the process to ensure users have all necessary information regarding WP changes. 
- *What marketing, outreach, or communications are necessary for this product to be successful?* 
  - [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) 
  -User guide will be consolidated 

## Launch Dates 

- *Target Launch Date* 
  - June 2024 - Discovery 
  - July 2024 / August 2024 – Design and Development 
  - September 2024 – Iteration and Testing, Bug Fixes 
  - February 2025 – Deployment 
  - April 2025 – Project End 
- *Actual Launch Date* 
  - tbd 
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?* 
  - tbd
    
--- 

## Solution Narrative 

### Current Status 

Both Comparison Tool and WP are both currently live in PRODUCTION and functional.  

### Key Decisions 

- Update licenses and certs, exams, and programs to display correctly in WP (EDM-86) 
- Decision Point: Determine if school info should display for WP (EDM-88) 
- Decision Point: Determine if Advanced Pay needs to be displayed (EDM-92) 

--- 

## Screenshots 

### Before 

### After 
N/A 
--- 

#### Communications 

<details> 

- Team Name: Education Data Migration 
- GitHub Product Label: edm-weams-public (needs to be created – will be created with kickoff ticket) 
- Team GitHub Label: education-data-migration 
- Slack channel: edm-team 
- Product POCs: Cassidy Beach (Cassidy.Beach@VA.gov), Theresa Simeone (Theresa.Simeone@VA.gov), Jason Wolf (Jason.Wolf1@VA.gov) 
- Stakeholders:  
OIT – Darla van Nieukerk (Darla.vanNieukerk@VA.gov) 
EDU – Robert Holbrook (Robert.holbrook@va.gov) 
WEAMS Development – Warren Majors (Warren.Majors@va.gov) 

</details> 

#### Team Members 

<details> 

- DEPO Lead: Jason Wolf (Jason.wolf1@va.gov)       
- PM: Cassidy Beach (Cassidy.Beach@VA.gov) 
- Engineering: Vanson Samuel (Vanson.Samuel@VA.gov) 
- Research/Design: Sneha Kulkarni (Sneha.Kulkarni@VA.gov) 

</details> 

 

#### Stakeholders 

<details> 

_What offices/departments are critical to make this initiative successful?_ 

Office of Information and Technology 
Education Service | Veterans Benefits Administration 

</details> 
