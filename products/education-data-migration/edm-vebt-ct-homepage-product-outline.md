# CT Homepage Product Outline 

## Overview 

*After you've explored the problem and through testing / hypothesis have identified the ideal solution, write up one sentence describing the solution you'll be creating.* 

Our team will add a homepage to Comparison Tool (CT) that provides links to the School and Employer, License and Certification (L&C), National Exam (exam) pages to break apart information being added to Comparison Tool by category.


## Problem Statement 

*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address. [Here's a sample problem statement definition activity you can try on your team to help generate this](https://www.atlassian.com/team-playbook/plays/problem-framing)* 

- As a Veteran I want to quickly and easily access all information within CT.  
- As a Backend Developer I want to ensure each page operates is error-free and renders correctly, and pulls data users expect to see. 
- As a Frontend Developer I want to see the three pages to chose from so users can access the information they need.
- As a UX Designer I want to confirm that users are able to navigate the CT Homepage little-to-no errors so that they can access the information they need.
- By creating a CT Homepage Education Data Migration (EDM) and Veteran Education Benefit Tools (VEBT) Teams can ensure users have easy access to information and comply with CAIA guidlines.

*Follow your problem description up with a "How might we... _______" statement re-framing that challenge as an opportunity. Don't hint too much at what the solution might be, you should have enough of a focal point here to guide your ideas, but plenty of freedom to think laterally and innovatively as you experiment and prototype later.* 
How might we create one place where users can access School and Employer, L&C, and National Exam data? 

## Desired User Outcomes 

- *Why would a user want to use this?* 
  - Users want to access all three data categories from a single homepage.  
- *With this problem solved, what should users be able to do/achieve that they couldn't before?* 
  - Users will be able to view program, L&C, and exam information on a single page in an easy-to-read, 508-approved format.  

## Undesired User Outcomes 

- Veterans are unable to access School and Employer, License and Certification (L&Cs), National Exam pages
- Users are unable to navigate the page or discern the difference between each page
- Users are confused about what happened to the existing CT homepage 
- Veterans are presented with inaccurate benefits information 
- Unexpected errors or outages 

 ## Desired Business Outcomes 

- !!! STOPPED WORK HERE !!!!!!!!!!!!!!! *Why would your business want this to exist?* 
  - Improving the product would continue the enhancement of VA's education benefit tools, ensuring alignment on display of data
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?* 
  - Provide accurate information to Veterans regarding their education benefits 
  - Provide program, L&C, and exam information 

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
  - Key result: Veterans see accurate benefits information for programs, L&Cs, exams 

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
- Decision Point: Determine if school info should display for WP (EDM-88) Yes, school contact information should be migrated to Comparison Tool per Brian Grubb 9/3/2024 who gained permission from Kaprice Dyson via email because they're already listed in CT. EDM-133 created to act on this decision
- Decision Point: Determine if Advance Payment needs to be displayed (EDM-92) Yes, Advance Payment needs to be displayed in CT per Robert Holbrook 9/4 via email (information gathered from his policy POCs). This primarily applies for Chapter 35 students but is not separately distinguishable. 

--- 

## Screenshots 
### WEAMS Public National Exams 

#### Before 
![WP Exam 1](https://github.com/user-attachments/assets/4f982ca3-519c-4f4e-8bb1-5bc0f9046550)
![WP Exam 2](https://github.com/user-attachments/assets/4f92ebd4-e296-4040-b7e5-1163ae6f49d6)
![WP Exam 3](https://github.com/user-attachments/assets/a62cf254-dd2a-4a82-9346-7bcb9b16822e)

#### After 

### WEAMS Public Licenses and Certifications 

#### Before 
##### Licenses
![WP LC 1](https://github.com/user-attachments/assets/e5dc4a24-5ab7-42e2-9f9e-7ddeb9a918bd)
![WP LC 2](https://github.com/user-attachments/assets/cbf88752-1e7f-4092-8d6d-12cf17777258)
![WP LC 3](https://github.com/user-attachments/assets/81ed359e-12fc-49e5-86c7-15495dbf9fe8)
![WP LC 4](https://github.com/user-attachments/assets/c7d2139e-bbd1-4af5-9ba3-5cb774234449)

##### Certifications
![WP LC 5](https://github.com/user-attachments/assets/299c6e91-ed71-445d-b0a6-4e02fa75be4f)
![WP LC 6](https://github.com/user-attachments/assets/8ffc15af-187f-418f-a81f-7cfbb385a115)
![WP LC 7](https://github.com/user-attachments/assets/c31e1dc8-bf56-499c-9daf-04e0c4ea949e)
![WP LC 8](https://github.com/user-attachments/assets/b772a106-67ee-4fb4-a7fb-ed7fa91c8830)

#### After 

### WEAMS Public Institutions (and Programs) 

#### Before 
![WP I 1](https://github.com/user-attachments/assets/b1e562fa-87a6-49e1-958d-35ff0a65bf40)
![WP I 2](https://github.com/user-attachments/assets/1de9135d-8722-491c-9d7a-a5e99392dbb5)
![WP I 3](https://github.com/user-attachments/assets/c8dfcfeb-fc30-410e-8064-bc08d834ab77)
![WP I 4](https://github.com/user-attachments/assets/6b6c3da0-3ca8-4468-bdc0-f8e9aec044f5)
![WP I 5](https://github.com/user-attachments/assets/14a5e9e8-33ed-484c-b222-0e5e56a5f09f)
![WP I 6](https://github.com/user-attachments/assets/aeb3d42c-f301-4582-acd7-57366da3a002)

#### After 

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
