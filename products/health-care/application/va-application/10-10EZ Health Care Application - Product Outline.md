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


### Objectives and Key results (OKRs)

- Objective: More eligible Veterans apply for health care online
  - Key result: Number of applications increase
  - Key result: Proportion of applications submitted online vs. in person increases 
---
### New OKRs from 2022 Workshop
#### Objective 1: Increase use of the VA Health Care program
- Key result 1: Decrease number of applications that require additional review or revisions
- Key result 2: Increase % of Veterans who successfully apply for benefits online
   - As of 9/2022, we have seen a 6 month overall increasing trend of the number of applications started and subsequently submitted

|Product|	Apr|	May|	Jun|	Jul|	Aug|	Sep|
|-------|----|----|----|----|----|----|
|10-10 EZ	|53.87%	|71.97%	|66.33%	|86.51%	|89.46%	|91.87%|



- Key result 3: Increase % of Veterans who obtain approval for benefits

#### Objective 2: Increase trust and satisfaction with the VA Health Care application process
- Key result 1: Decrease application completion time
- Key result 2: Decrease application processing time (including follow-ups by customer support)
- Key result 3: Increase number of application completions across multiple devices for ease of use
- Key result 4: Decrease number of drop-off/exit rates while completing the application

#### Objective 3: Provide meaningful support to those that need it
- Key result 1: Increase % of meaningful support calls (i.e. less noise = more ppl who really need it are getting help)
- Key result 2: Increase number of application completions in a single session
   - As of 9/2022, we have seen a 6-month increasing trend for the percentage of applications completed in a single session

|Product|	Apr|	May|	Jun|	Jul|	Aug|	Sep|
|-------|----|----|----|----|----|----|
|10-10 EZ - Average sessons to complete|	1.38|	1.37|	1.38|	1.42|	1.45|	1.45|
|% of 1 session|	59.20%|	65.44%|	67.88%|	72.45%|	71.74%|	71.76%|
|% of 2 sessions|	22.89%|	21.93%|	21.27%|	19.74%|	20.32%|	19.97%|
|% of 3 sessions|	17.91%	|12.63%|	10.85%|	7.81%	|7.94%	|8.27%|
|Totals|11,903|	14,737|	14,065|	11,548|	10,673|	9,391|



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
- As of 9/2022, we're going to focus on:
   - Improving the flow and burden of completing the Household section of the form




--- 

## Go-to-market Strategy
- Coordinating with other VA outreach initiatives 
- Support from VAMCs


## Launch Dates
- 10-10 EZ form has been available online for a number of years.  Only in 2020/2021, has the form been revisited for updates and improvements.
---

## Solution Narrative

### Current Status

- As of 11/2022, we are
   - Monitoring the recent 100% launch of the Short Form, resulting in a trending 25-30% application submission being through the Short Form flow, and a 99% submission rate of total Short Form applications.
   - Monitoring the recent 100% launch of in-progress application email reminders to authenticated applicants via VA Notify
   - Preparing for moderated research sessions on the Household section optimization design


### Key Decisions
- Reference the ["Things to know" document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/10-10EZ%20-%20Things%20to%20know.md) for various notes that we collected and documented
- American Indian question
   - The decision to phrase the Indian health question, by listing the qualifications/definitions of "Indian", was made due to the HEC Leadership stakeholders questioning our decision to phrase the question initially as "Are you an American Indian or Alaska Native?" rather than match the paper form verbiage "Are you an Indian?".  Our initial Online language had been approved in late 2021, however once we were ready to release in August 2022, the language format came up again.  Reference the [Stakeholder meeting notes]https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/product/Bi-weekly%20Stakeholder%20Mtg%20notes from August and September 2022
- Self-Identifying Gender Identity (SIGI)
   - The decision to use the terms on this feature to identify various Gender types was made based on extensive research on this topic in 2021, aligning with the current format in the VA.gov Profile, and using plain language to reflect a comfortable, conversational format.  The HEC Leadership stakeholders have questioned the use of the terms on the Online form being different from the paper form (Man vs Male, Woman vs Female, etc), and have submitted to CICPO (Compliance integrity) for review.  Reference the [Stakeholder meeting notes]https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/application/va-application/product/Bi-weekly%20Stakeholder%20Mtg%20notes from October and November 2022
---
   
## Screenshots

### Before

 

### After
[Sketch File of all screens](https://www.sketch.com/s/da85cf44-4503-4e98-834e-ff068b242ef6/p/0C3B7020-8169-4FF2-AB5C-AF52BC4E34C2/canvas)

---

#### Communications

<details>

- Team Name: 10-10 Team
- GitHub Label: #1010-team, 1010-ez
- Slack channel: #1010-health-apps
- Product POCs: Chris D, George C, Danielle T
- Stakeholders: Lauren Alexanderson, Christopher Hawkins, Tarsha Tremble, Stacey Echols

</details>

#### Team Members

<details>
 
 - DEPO Lead: Lauren Alexanderson, Patrick Bateman, Katherine Lawyer
 - PM: Heather Justice, Mark Fallows
 - Engineering: Lisa Zapon, Lihan Li, Matt Long
 - Research/Design: Nick Osmanski, Jessica Stump
 
</details>


#### Stakeholders

<details>
 
- VHA, HEC
Tarsha Tremble, Christopher Hawkins, Stacey Echols
 
</details>
