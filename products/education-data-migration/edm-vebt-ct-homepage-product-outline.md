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

- *Why would your business want this to exist?* 
  - The business does not care that this exists, the creation of a homepage was required by CAIA. 
- *With this problem solved, what should your business be able to do/achieve that they couldn't before?* 
  - Nothing the business can do that they couldn't before, but the homepage will make navigating through CT easier for users. 

## Undesired Business Outcomes 

- EDM and VEBT Team do not meet contract timeline. All work must be completed and in production by the beginning of April 2025. 
  
--- 

## Measuring Success 

### Key Performance Indicators (KPIs) 

* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?* 

- Amount of clicks for each page on CT homepage (School and Employer, L&C, exam)
- Pages within the tool will have their own KPIs

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
- Objective:   Consolidate offshoots of CT so the tool is easier to navigate 
  - Key result: Users can navigate to all CT pages from a single homepage  
--- 

## Assumptions 

- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality* 
  - Being able to complete the homepage on time.  

## Solution Approach 

- *What are you going to build now, and why have you decided to start there?* 
  - We are building a homepage for CT. We decided to start here because we were instructed by CAIA to create a homepage.  
- *Why this solution / approach over other solutions / approaches?* 
   - This approach is best because it will allow us to enhance overall VA benefit tools functionality for users and provide accurate benefits information  
- *What have you explicitly decided to not include in this initial set of functionality, and why?* 
  - We decided to include three sections, instead of adding additional information, to allow users to select from three broad categories and avoid overloading the homepage with information.   
- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?* 
  - We will make changes based on requested / vetted Business requests and identified bugs or issues within the application.
  - Very few changes will be made to the homepage until after April 2025, when associated tools launch in CT.

### Initiatives 

*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)* 
- Initiative | [Link to Initiative Brief](#) 

--- 

## Launch Strategy 

- *How are Veterans and others using this product going to know it exists?* 
Users will receive communications through the VA about its updates. Our team will work with other VA communications teams throughout the process to ensure users have all necessary information regarding WP changes. 
- *What marketing, outreach, or communications are necessary for this product to be successful?* 
  - [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) 
  - User guide will be consolidated 

## Launch Dates 

- *Target Launch Date* 
  - March 2025 – Deployment 
  - April 2025 – Project End 
- *Actual Launch Date* 
  - March 25 or 31, 2025
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?* 
  - May 2025 
    
--- 

## Solution Narrative 

### Current Status 

Both CT currently lives in PRODUCTION and functional.  

### Key Decisions 

- Design Kickoff with CAIA for WP in CT 10/22-learned about requirement for CT homepage
- Discussed CAIA requirement for CT homepage internally 10/23. Shared with VEBT team in WSM/VEBT Integration Touchpoint and learned that they were working on something similar for Schools and Employers
- EDM informed they're required to create a CT homepage 10/26/2024
- Decision Point: Continue to work on the design for a CT homepage (EDM-320). Decided on horizontal layout. Approved 10/30/2024
- VEBT presented VEBT’s mockups for Comparison Tool 10/30
  - Change the way the landing page works-navigate the search based on what the user is looking for
  - Each link takes you to a specific search -not overwhelming the
- Potential new location for National Exams
  - Informed CAIA that we’re moving forward with the CT homepage (in collaboration with VEBT), including National Exams, instead of moving them to a Drupal page as OCTO suggested
  - CT Homepage incorporating Darla and Jodie’s suggestions. VEBT had their requirements meeting to present CT homepage 11/12
  - Stakeholders preferred paragraph format to display page information
--- 

## Screenshots 
### CT Homepage

#### Before 
Doesn't exist

#### After 
Desktop: ![image](https://github.com/user-attachments/assets/897b4daa-6bb1-478f-8a27-f794817d2be1)
Mobile: ![image](https://github.com/user-attachments/assets/f9127f29-165e-486b-b390-01fe7e5a124e)

--- 

#### Communications 

<details> 

- Team Name: Education Data Migration 
- GitHub Product Label: edm-weams-public (needs to be created – will be created with kickoff ticket) 
- Team GitHub Label: education-data-migration 
- Slack channel: edm-team 
- Product POCs: Cassidy Beach (Cassidy.Beach@VA.gov), Theresa Simeone (Theresa.Simeone@VA.gov), Kara Ciprich (Kara.Ciprich@VA.gov) 
- Stakeholders:  
OIT – Darla van Nieukerk (Darla.vanNieukerk@VA.gov) 
EDU – Robert Holbrook (Robert.holbrook@va.gov), Cinda Quattrini (Cinda.Quattrini@va.gov)

</details> 

#### Team Members 

<details> 

- DEPO Lead:       
- PM: Cassidy Beach (Cassidy.Beach@VA.gov) 
- Engineering: Vanson Samuel (Vanson.Samuel@VA.gov) 
- Research/Design: Sneha Kulkarni (Sneha.Kulkarni@VA.gov), Ariana Adili (Ariana.Adili@VA.gov)

</details> 

 

#### Stakeholders 

<details> 

_What offices/departments are critical to make this initiative successful?_ 

Office of Information and Technology 
Education Service | Veterans Benefits Administration 

</details> 
