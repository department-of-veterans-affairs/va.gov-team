## Ask VA MVP 1- Product Outline

---

## Overview
AVA on the modernized VA.gov platform will be a digital support channel that works with other tools and features on VA.gov and VA ecosystems to quickly and accurately answer submitters' questions. Submitters should feel it is easy and intuitive to submit their issues and receive adequate updates and information that results in a final resolution. Ultimately, we want AVA to feel part of a cohesive and submitter-centered approach to support.


## Problem Statement

Submitter should easily and intuitively be able to ask a question through Ask VA on VA.gov.
   - **Who**: The submitter - This could be the Veteran, their caregiver, their supporting personnel, or their dependents (authenticated or un-authenticated).
   - **What**: The current form design and content needs to better align with VA.gov design and accessibility standards for the submitter. 
   - **Why**: This will empower more Veterans to seek access to VA benefits and services.
   - **Where**: The form needs to reside in VA.gov so that it is easily locatable and can potentially integrate with other VA.gov applications (ex. Chatbot).

**How might we** create an inquiry form that is easier for Veterans and other users to ask VA a question online?

 
## Desired Submitter Outcomes

Form Design, and Content, Mobile-Friendly Experience, 508 Compliance

As a Veteran
>I can ask my questions quickly through my phone or computer.\
>It's easy for me to find Ask VA on VA.gov.\
>It's accessible for me.

Integrate with VA Profile
As a Veteran
>If I am authenticated, Information is pre-filled for me if it's available on VA Profile.\
>If I am authenticated, I am able to edit personal information on VA Profile and then come back to my inquiry form to finish asking my question on Ask VA.

AVA Dashboard
As an authenticated submitter
>I am able to see the status of my submitted inquires and manage my replies

## Undesired Submitter Outcomes

As a Veteran
>I stop asking questions because AVA is difficult to use on my phone or computer\
>I cannot find Ask VA on VA.gov.\
>It's not accessible for me.

Integrate with VA Profile
As a Veteran
>If I am authenticated, my information is not pre-filled if available on VA Profile.\
>If I am authenticated, I am not able to go to VA Profile to edit my info and then return to the form.

AVA Dashboard
As an authenticated submitter
>I am not able to see the status of my submitted inquiries and manage my replies.\

## Desired Business Objectives

- Our Phase 1 MVP will have brought the current Ask VA up to VA.gov design and accessibility standards, updated the content to make it more intuitive for our submitters, and sunset the existing front-end portal of AVA.

---
## Measuring Success


### Key Performance Indicators (KPIs)

- [KPI Measurement doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20KPIs.md)
---

## Assumptions
- Improving the front-end of Ask VA will reduce the time it takes to submit an inquiry, increase the percentage of submitters that complete asking a question, and increase user satisfaction of the application.
- Transitioning Ask VA front-end to VA.gov design and content standards will improve user experience, and bring more cohesiveness with the other services that the VA offers.

## Solution Approach

Bring Ask VA up to VA.gov design standards (Front-End Updates)
- Update topics and categories based on content style guide (without changing form functionality and output).
- Update form questions based on content style guide (without changing form functionality and output).
- Update UI to reflect the VA Design System.
- Make it mobile-friendly.
- Do iterative submitter research to test usability of new form design and content updates.
- Make it 508 Compliant.

Implement form on VA.gov
- Understand current routing rules
- When Inquiry data is collected on VA.gov, the implementation will send this data to Dynamics CRM for the agents to answer the questions.
- Releasing this new form to a page on VA.gov
- Update the dashboard front-end to VA.gov design and content standards

More Detail can be found here: 
1. [Must Have/Nice to have features for Phase 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20MVP:%20Must%20Have%20+%20Nice%20to%20Have.md)
2. High Level Plan
- Discovery Spikes
- **Create Prototype** (Current Status)
- Usability Testing
- Launch Phase 1

Our first MVP will have brought the current Ask VA up to VA.gov design standards, made the form and dashboard accessible, and updated the content to make it more intuitive for our submitters. 

**Not included in the first MVP but will be in scope for future MVP:**
>- Surface resources using existing knowledge base
>- Inbox/secure messaging
>- Explore use of NLU/free text
>- AVA placement/integrations with chatbot and resources
>- Updated existing routing rules to smart routing
>- VA Notify integration

### Initiatives

Link to Initiative Brief on the overall project: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/AVA%20-%20Initiative%20Brief%20v2.docx

--- 

## Launch Strategy

>- Launch MVP once all the categories are redesigned and developed on the new front-end.
>- Sunset the existing front-end of AVA (which is on the stand alone Microsoft portal) after ~6 months.
>- Tentatively, planning to go live in the second half of 2024.

Communication Plan:

- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - TBD until further conversation with dependent teams
- *Actual Launch Date* 
  - TBD
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - TBD

---

## Solution Narrative

### Current Status

>- 1. Discovery Spikes
>- 2. **Create Prototype** (Current Status)
>  3. Usability Testing
>  4. Updates to product after usability testing
>  5. Launch Phase 1

### Key Decisions

- Release all categories at one time
  
---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Ask VA Integration
- GitHub Label: https://github.com/department-of-veterans-affairs/ask-va
- Slack channel: #ask-va-public
- Product POCs: Chante Lantos-Swett, Andrea Schneider, Ruchi Shah
- Stakeholders: Link: https://docs.google.com/spreadsheets/d/1HlKmuuKAwiz6VnJIBNjI2t8Tet1Bc5tm6_fNLscDouw/edit#gid=0 

</details>

#### Team Members

<details>
 
 - DEPO Lead: Chante Lantos-Swett, Andrea Schneider
 - PM: Ruchi Shah
 - Engineering: Joe Hall, Eddie Otero, Jacob Cheriathundam, Khoa Nguyen
 - Research/Design: Tyler Gindraux, Thomas Michaud, Becky Phung
 - Program: Em Allan
 
</details>


#### Stakeholders

<details>
 
- [Business Line Stakeholders](https://docs.google.com/spreadsheets/d/1HlKmuuKAwiz6VnJIBNjI2t8Tet1Bc5tm6_fNLscDouw/edit#gid=0)

- [Leadership and Partner Teams Stakeholders](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696976895933/4f5410b3e8770441f4101cbabd565aa0cd13dac7?sender=u2d812b371596fee265408413)

</details>

