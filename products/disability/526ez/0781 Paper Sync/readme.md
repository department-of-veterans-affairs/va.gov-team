# 0781 Paper Sync Initiative

## Overview
Previously, Veterans filing for PTSD and other mental health conditions were provided two separate forms to provide additional information to support the claim for these conditions.

- VA Form 21-0781 Statement in Support of Claim for Services Connected for PTSD
- VA Form 21-0781a Statement in Support of Claim for Service Connected for PTSD Secondary to Personal Assault (for those claiming mental health conditions related to personal assault including military sexual trauma — MST)

These forms were replaced with an updated VA Form 21-0781 released in June 2024 which combines and replaces the previous forms.

For Veterans who have been diagnosed with PTSD (post traumatic stress disorder) or mental health issues, related to a traumatic event during their time of military service, and want to apply for related benefits or services, the VA.gov's new online 0781 form provides all the questions related for claiming mental health conditions and in-service traumatic events needed to submit a benefits claim. Unlike the previous version of the 0781 form, the new online form will be in compliance by being up to date with the most recent paper form version (June 2024).


### Changes to the form include
**Conditions for evaluation**

Accommodates a broader set of mental health conditions beyond PTSD, including anxiety, depression, bipolar disorder, and others.

**Unified Filing**

Combines questions across both legacy forms. Claimants no longer have to file separate forms for conditions related to combat events, and personal assault (including MST). The new form will also handle conditions stemming from other personal interactions and other event types.

**Streamlined Filing for Combat Event Related Conditions**

The new form reduces complexity with filing combat event related conditions and no longer requires the following information to file:
- Unit assignment and rank during incident.
- Medals or citations received because of incident.
- Details about persons killed or injured during incident.

**Revised Collection of Other Supporting Information**

Other sources of information revised to:
- Separate treatment information as a dedicated separate section.
- Reframe information gathering from other sources as supporting documents.  


## Problem Statement
VA Form 21-0781 is an optional form that Veterans with mental health conditions can fill out to provide additional information in support of their disability claim. In June 2024, VA released a new version of the form with critical updates, including adding new questions, removing triggering questions, and expanding the scope of the form to ask about not just PTSD, but also all other mental health conditions. The online version for 526 claims with PTSD, does not include the new questions from the 2024 form. 

Some of the key constraints and challenges associated with making this update included:

“Form within a form” - The team needed to build the new VA Form 21-0781 within the broader disability compensation application (VA Form 21-526EZ), which is an already lengthy form itself. There were also some areas where both forms were asking for the same information in slightly different ways, creating some areas of redundancy that needed to be addressed.

Sensitive subject matter - Filling out VA Form 21-0781 is a very emotionally burdensome experience as it asks Veterans about their traumatic experiences from the military and the behavioral changes they experienced as a result.

How might we make it easier for any Veteran with a mental health condition related to a traumatic event answer the questions that apply to the new (2024) form faster and easier? 
 
## Desired User Outcomes
- **Improved User Experience**: A streamlined and user-friendly form can make it easier for veterans to apply for benefits, reducing errors and frustration.
- **Increased Efficiency**: Simplifying the form and its processing can save time for both applicants and VA staff, leading to faster claim resolutions.
- **Improved information**: Users have the most current questions that will help rate their claim more efficiently. 

## Undesired User Outcomes
- **Delays in Processing**: If the form is incomplete or contains errors, it may take longer for the VA to process a claim.
- **Reduction in Benefits**: Changes to the claim might result in a reassessment that could lower a Veteran's benefits if new evidence doesn't support the original claim.
- **Denial of Claims**: If the updated information doesn't meet the VA's criteria, the claim could be denied.
  
## Desired Business Outcomes
- **Compliance and Accuracy**: Updating the form to meet current regulations and standards can reduce legal risks and improve the accuracy of submitted claims.
- **Employee satisfaction**: VA employees who evaluate claims will report a higher satisfaction score for claims received through VA.gov compared to similar claims received via paper.
- **Reduced manual intervention**: VA employees will perform fewer manual actions on claims submitted via VA.gov, such as combining duplicate claims or adding missing data.

## Undesired Business Outcomes
- **Missing information**: If the form is incomplete or contains errors it may lead to inefficiencies in managing reviewing the forms and increase in time to process claims. 
- **Completely expired form**: A Veteran submits an online benefit application that is no longer accepted. 
- **Silent submission failure**: A Veteran believes an online benefit transaction was successfully sent to VA, but it silently disappeared instead.
- **Full stoppage:** A Veteran cannot access or apply for a normally-available benefit online because of an obviously-broken and erroring feature.

---
## Measuring Success 


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| KPI                             | Baseline Value | Target Value | Actual Value | Link to Data Source |
|---------------------------------|----------------|--------------|--------------|---------------------|
| # of new 0781 |                |              |              |                     |
| # of in progress 0781                |                |              |              |                     |


#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

- New flow within the 526 disability claim for just the 0781 mental health questions that is available in all claims going forward. Veterans will no longer have to add PTSD as their condition in order to answer mental health questions. 
- Does not include a new section for requesting medical records speicifically for mental health. The effort was too large of a scope for the MVP. Instead we were able to use the existing supporting evidence questions and added a feature to track if they were related to any mental health conditions. 


### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product.
- Toggle switch that will direct users with new claims only down the new 0781 questions path
- A list and loop section for traumatic events
- A separate section for behavioral changes
- Questions regarding supporting documents related to mental health conditions
- Questions regarding treatment received for traumatic events and behavioral changes
- Tracking if traumatic events were treated at either or both VA and private medical providers
- Destruction action notifications 
  
--- 

## Launch Strategy
- [DBEX 0781 Paper Sync Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/disability-experience/team-docs/Release%20Plans/DBEX%200781%20Paper%20Sync%20Release%20Plan.md)

## Launch Dates
- *Target Launch Date*
  - tbd
- *Actual Launch Date* 
  - tbd
We'll closely monitor the canary deployment for performance issues, errors, and user feedback. We'll be looking at the following: 
- Number of claims in progress with new 0781 mental health data/form.
- Number of successful submissions with new 0781 mental health data/form.
- Number of failed submissions with new 0781 mental health data/form.
- Number of submissions with new 0781 mental health data/form down the primary path.
- Number of submissions with new 0781 mental health data/form down the secondary/backup path.
- Number of successful submissions with old 0781/a PTSD data/form.

---

## Solution Narrative
Create a new 0781 online form that will match the newest paper version of the PDF form. The data in the online form will be used in the generation of the new (2024) 0781 PDF that will be sent to the eFolder after a successful submit.


### Current Status

### Key Decisions

---
   
## Screenshots

### Before
See [526 Form Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1686768383603/3f4415dd2ddb71bbd104ebefd92a2c7b553ad792)

### After
See [0781 Mental Health Paper Sync](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742838742470/a65aef904518076608009f57241cfa96874485a8) for screen shots and flow diagrams. 

---

#### Communications

<details>

- Team Name: DBEX-Carbs
- GitHub Label: DBEX-Carbs
- Slack channel: #benefits-disability 
- Product POCs: Emily Theis
- Stakeholders: Disability Benefits Crew

</details>

#### Team Members

<details>
 
- Prod Manager: Lisa Capaccioli
- Delivery Lead: Amy Plange
- Des/Res Lead: Ruben Sun
- Des/Res: Qian Chen
- Des/Res: Evelyn Hilbrich Davis
- Full Stack Eng: Nathan Burgess
- Full Stack Eng: Alison Jones
- Full Stack Eng: JR Reed
- Lead Eng: Kyle Soskin
</details>
 
#### Stakeholders

<details>
 
Disability Benefits Crew: 
- Product Owner: Emily Theis
- Eng Lead: Sam Wiley
- Design Lead: Shannon Ford 
- OBA Lead: David Reis
 
</details>

## Resources
- [Github Epic 0781 Paper Sync 	](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87438)
- [Story Mapping Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718308823134/02c2c9ea74f16b276692af8f31eb65202acc7928?wid=0-1719930043260)
- [Figma 0781 redesigns](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=9856-83462&t=us3dJI6ZkhtJ0Wz8-4)
- [Figma 0781 redesigns-final](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=8144-135894)
- [Draft - 0781 Field Mapping Tracker](https://docs.google.com/spreadsheets/d/1pdJ5W-dJ56ysxrtkWl8d6Rsurf2nxXDqb8-7C9oGwcg/edit?gid=354068332#gid=354068332)
- [Final -0781 PS Field Mapping.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/0781%20Paper%20Sync/0781%20PS%20Field%20Mapping.md)
- [Final - 0781 PS New SubURL.md](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/0781%20Paper%20Sync/0781%20PS%20New%20SubURL.md)
- [0781 Paper Sync Staging Test Plan](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-526EZ-0781-mental-health.md)
- [0781 Mental Health Paper Sync Screenshots and Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742838742470/a65aef904518076608009f57241cfa96874485a8?showAddTemplatePopup=true)
