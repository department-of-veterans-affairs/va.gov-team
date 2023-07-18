## Ask VA MVP 1- Product Outline

---

## Overview
AVA is an online portal that allows Veterans, caregivers, and supporting personnel in education, debt, loans, etc. to submit questions to VA and receive a secure message response.

Currently, Ask VA (AVA) resides within a stand-alone Microsoft portal that is inconsistent with the VA design standards, is not mobile-friendly, and has accessibility issues. 

AVA on the modernized VA.gov platform will be a digital support channel that works with other tools and features on VA.gov and VA ecosystem to quickly and accurately answer submitters' questions. Submitterss should feel it is easy and intuitive to submit their issues and receive adequate updates and information that results in a final resolution. Ultimately, we want AVA to feel part of a cohesive and submitter-centered approach to support.


## Problem Statement

Submitter should easily and intuitively be able to ask a question through Ask VA on VA.gov.
   - **Who**: The submitter - This could be the Veteran, their caregiver, their supporting personnel, or their dependents (authenticated or un-authenticated).
   - **What**: The current form design and content is not up to VA.gov design standards, mobile-friendly, and accessible for the submitter. The submitter wants to ask a question, submit documents, provide updates.
   - **Why**: This will empower more Veterans to seek access to VA benefits and services by letting them get answers to their questions.
   - **Where**: The form needs to reside in VA.gov so that it is easily locatable and can potentially integrate with other applications on the platform.
   - **How**: Contact the submitter via email, phone, or mail and dashboard.

**How might we** create an inquiry form that is easier for the Veterans to ask a question online?

 
## Desired Submitter Outcomes

Form Design, and Content, Mobile-Friendly Experience, 508 Compliance

As a Veteran
>I can ask my questions quickly through my phone or computer.\
>It's easy for me to find Ask VA on VA.gov.\
>It's accessible for me.

Integrate with VANotify and myVA
>Waiting for spike

Secure Messaging (SM) on VA.gov
>Waiting for spike

## Undesired Submitter Outcomes

As a Veteran
>I stop asking questions because AVA is difficult to use on my phone or computer\
>I cannot find Ask VA on VA.gov.\
>It's not accessible for me.

Integrate with VANotify and myVA
>Waiting for spike

Secure Messaging (SM) on VA.gov
>Waiting for spike

## Desired Business Objectives

- Streamline the process for submitters to receive answers to their questions
- Create a modernized mobile friendly, accessible online support experience aligned with VA Design standards
- Increase submitter Satisfaction

---
## Measuring Success


### Key Performance Indicators (KPIs)

- 70% of submitters are satisfied with their experience
- Rerouted cases are reduced by 50%
- Accessibility issues are eliminated
---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

Phase 1 MVP:
1. Stand up a page on VA.gov
>- Create a SPIKE to validate the instructions from the VA’s developer docs for adding a new application to the va.gov site.
2. Bring Ask VA up to VA.gov design standards
>- Narrow down scope of use cases; including authenticated vs. unauthenticated.
>- We need to see if the full scope can be implemented in the MVP after understanding use cases, taxonomy and routing rules.
>- Write topics and categories based on content style guide (without changing form functionality and output).
>- Write form questions based on content style guide (without changing form functionality and output).
>- Update UI to reflect the VA Design System.
>- Make it mobile-friendly.
>- Do iterative submitter research to test usability of new form design and content updates.
>- Make it 508 Compliant.
>- Complete necessary PRA updates.
3. Implement form on VA.gov
>- Understand current routing rules
>- Review existing Ask VA front-end and back-end code to see how it works
>- When Inquiry data is collected on VA.gov, it is sent to the Dynamics CRM for the agents to work through
>- Releasing this new form to a page on VA.gov
>- Build GitHub Actions workflows for deploying to DEV/STAGiNG/PROD, with automated tests and linting as the gatekeepers to those environments.
>- Understand how Dataverse and CxDW(?) play into this process.
>- Ensure devs have proper tools and permissions to build the legacy app, and work on the prototype code.
>- Ensure devs have proper access to resources in all environments.
>- Ensure devs/qa/pm have access to error logs.
>- Ensure devs/qa/pm/ux have access to analytics and reporting.
Add tools to build pipeline to run static analysis for 508 and mobile-friendly issues.
>- Understand auth and unauth access patterns. Be ready for oauth changes in the coming months from platform/identity team.

Below two dependent on spikes.\
4. Integrate with My VA Dashboard for 
>- Status on inquiries
>- Need more information/research with Ask AVA CRM team
5. VA Notify integration
>- MyVA is creating a notification center, and strategically wants to integrate there for authenticated submitters.
>- Spike on notifications on where it stands and how we would move it to VA gov, and how VA.gov will trigger the notifications.

Our first MVP will have brought the current Ask VA up to VA.gov design standards, made the form and dashboard accessible, and updated the content to make it more intuitive for our submitters. 

**Not included in the first MVP but will be in scope for future MVP:**
>- Surface resources using existing knowledge base
>- Inbox/secure messaging
>- Explore use of NLU/free text
>- AVA placement/integrations with chatbot and resources
>- Updated existing routing rules to smart routing



### Initiatives

Link to Initiative Brief on the overall project: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/AVA%20-%20Initiative%20Brief%20v2.docx

--- 

## Launch Strategy

Launch MVP once all the categories are redesigned.



Communication Plan:


- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

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

- Drafting product ouline and conducting discoveries/spikes

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
 
Stakeholder Map: https://docs.google.com/spreadsheets/d/1HlKmuuKAwiz6VnJIBNjI2t8Tet1Bc5tm6_fNLscDouw/edit#gid=0

</details>

