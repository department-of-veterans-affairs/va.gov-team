# Product Outline - Health care application
---

## Problem Statement

- How might we improve the experience of Veterans who are applying for VA health care online?

## Goal
- Enable Veterans to access VA Health care easily with any device, at any time, with or without assistance
 
## Desired User Outcomes
- Veterans are comfortable and confident applying online
- Less time to complete an application
- Ability to return and submit saved application
- Greater user understanding of what and why information is asked for in the application
- Increased trust and satisfaction with VA

## Undesired User Outcomes
- Longer time to apply
- More complex application
- Abandon online application process

## Desired Business Outcomes
- Fewer dropoffs/incomplete applications
- Fewer opt to apply in person
- Provide meaningful support to those that need it
- Increase in the number of online applications

## Undesired Business Outcomes
- False/incorrect applications
- Increased Support calls to walk through the online application process
- Application abandonments

---
## Measuring Success

### Key Performance Indicators (KPIs)

* How many Veterans are looking at the How to Apply page?
* How are Veterans getting to the How to Apply page?
* How many Veterans are completing and submitting the form online? 
* How does form completion compare to other forms on VA.gov?
* How many Veterans start the form but don’t complete it?
* Are there any points within the form where Veterans tend to get stuck?
* How are Veterans rating their experience using the form?
* How long does it take Veterans to fill out the online form?
* How many Veterans start filling out the form, save their progress, and then come back to it?
* What places in the form do Veterans tend to step away?
* How many Veterans don't complete the form after saving one in progress?
* Stretch: 
    * Proportion of eligible veterans that apply online
    * Proprotion of applications submitted online vs. on paper

#### Baseline KPI Values
* Coming soon

### Objectives and Key results (OKRs)

- Objective: More eligible Veterans apply for health care online
  - Key result: Number of applications increase
  - Key result: Proportion of applications submitted online vs. in person increases 
---
### New OKRs from 2022 Workshop
#### Objective 1: Increase use of the VA Health Care program
- Key result 1: Decrease number of applications that require additional review or revisions
- Key result 2: Increase % of Veterans who successfully apply for benefits online
- Key result 3: Increase % of Veterans who obtain approval for benefits

#### Objective 2: Increase trust and satisfaction with the VA Health Care application process
- Key result 1: Decrease application completion time
- Key result 2: Decrease application processing time (including follow-ups by customer support)
- Key result 3: Increase number of application completions across multiple devices for ease of use
- Key result 4: Decrease number of drop-off/exit rates while completing the application

#### Objective 3: Provide meaningful support to those that need it
- Key result 1: Increase % of meaningful support calls (i.e. less noise = more ppl who really need it are getting help)
- Key result 2: Increase number of application completions in a single session
- Key result 3: Decrease number of abandoned applications
---

## Assumptions
- If we make the online health care application:
  - More user friendly 
  - Give clearer explanation of required information + why it is required
  - Shorten the form to collect the minimum of what is needed to begin processing
  -  Provide reminders for authenticated users who have saved application, but not returned to it
-  then more Veterans will complete the health care application online.

## Solution Approach

- As of 10/2020, we're going to focus on:
 - Updating the UI to meet VA.gov design & accessibility standards
 - Adding a question distinguishing between mailing & residential addressses
 - Updating the questions on the online form to align with the new 10-10EZ
- As of 11/2020, we're going to focus on:
   - Validating assumptions regarding usage of the online form pre- and during COVID
   - Using that research to guide whether to focus our Q1 efforts on the form itself or how Veterans get to the form.
- As of 04/2021-05/2021, we're going to focus on:
   - Understanding what Veteran pain points are with the current application process (research and discovery)
   - Gain insight on offline workarounds used by VA staff who process applications
   - Updating any content around the health care application pages that may be a source of confusion
   - Understanding what methods can be used to prompt authenticated users to return to the application after save/exit
- As of 05/2021, we're going to focus on:
   - Testing design and content iterations based on research discovery to improve user experience
- As of 01/2022, we're going to focus on:
   - Creating dashboards in Datadog
   - Implementing Short-form Ph 1

--- 

## Go-to-market Strategy
- Coordinating with other VA outreach initiatives 
- Support from VAMCs
- [Coming soon: Link to Release Plan](#go-to-market-strategy)

## Launch Dates
- *Initial Launch Date*
  - April 2022
- *Actual Launch Date* 
  - Coming soon
- *What date will you evaluate impact after launch?*
  - July 2022
---

## Solution Narrative

### Current Status

- As of 05/2022, we are
   - Still testing Short Form with plans to launch first to Veterans with 50% or higher disability rating (authenticated)
   - Adding in-progress app reminders to authenticated applicants via VA Notify
   - Designing for Medicare Claim number field
   - Researching Household section redesigns

- As of 01/2022, we're going to focus on
   - Updating "sign as legal rep" section
   - Creating Datadog dashboards
   - Launching Ph Short-form for Veterans with 50% or higher disability rating (auth and non-auth)

- As of 10/2020, we're going to focus on:
   - Understanding what Veteran pain points are with the current applicaiton process (research and discovery)
   - Updating the UI to meet VA.gov design & accessibility standards
   - Adding a question distinguishing between mailing & residential addressses
   - Updating any content around the health care application pages that may be a source of confusion
   - Updating the questions on the online form to align with the new 10-10EZ



### Key Decisions

---
   
## Screenshots

### Before
 <details>
  <summary>How to apply</summary>
 
![How to Apply](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/screenshots/How%20to%20Apply.png)
</details>

 <details>
  <summary>Start your application</summary>
 
![Start your application](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/screenshots/Apply%20for%20heatlh%20care%20benefits.png)
</details>
 
 <details>
  <summary>Subway map</summary>
 
![Subway map](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/screenshots/Subway%20Map.png)
</details>
 
 <details>
  <summary>Review page</summary>
 
![Review page](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/health-benefits/healthcare-application/screenshots/Review%20Page.png)
</details>
 

### After

---

#### Communications

<details>

- Team Name: 10-10 Team
- GitHub Label: #1010-team, 1010-ez
- Slack channel: #1010-health-apps
- Product POCs: Chris D, George C, Danielle T
- Stakeholders: Lauren A, Dione D-L,/ Andrea S

</details>

#### Team Members

<details>
 
 - DEPO Lead: Lauren Alexanderson, Patrick Bateman
 - PM: Heather Justice, Mark Fallows
 - Engineering: Lisa Zapon, Lihan Li, Matt Long
 - Research/Design: Dené Gabaldón, Nick Osmanski
 
</details>


#### Stakeholders

<details>
 
- VHA, DEPO
- Dione D-L,/ Andrea S
 
</details>
