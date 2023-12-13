# Ask VA Phase 1 - Product Outline
Last updated by @beckyphung on December 13, 2023

**Jump to:**
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Outcomes and Objectives](#outcomes-and-objectives)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Launch Strategy](#launch-strategy)
- [Screenshots of Drafted Design Updates](#screenshots-of-drafted-design-updates)
- [Team and Stakeholders](#team-and-stakeholders)

## Overview
AVA on the modernized VA.gov platform will be a digital support channel that works with other tools and features on VA.gov and VA ecosystems to quickly and accurately answer submitters' questions. Submitters should feel it is easy and intuitive to submit their issues and receive adequate updates and information that results in a final resolution. Ultimately, we want AVA to feel part of a cohesive and submitter-centered approach to support.

## Problem Statement
Submitter should easily and intuitively be able to ask a question through Ask VA on VA.gov.
   - **Who**: The submitter - This could be the Veteran, their caregiver, their supporting personnel, or their dependents (authenticated or un-authenticated).
   - **What**: The current form design and content needs to better align with VA.gov design, content, and accessibility standards for the submitter. 
   - **Why**: The submitter will have a more cohesive and consistent experience with accessing VA support, benefits, and services on VA.gov.
   - **Where**: The form needs to reside in VA.gov so that it is easily locatable and can potentially integrate with other VA.gov applications (ex. Chatbot).

**How might we** create an inquiry form that is easier for Veterans and other users to ask VA a question online?

## Outcomes and Objectives  

### Desired Submitter Outcomes

Form Design, Content, Mobile-Friendly Experience, 508 Compliance

As a Veteran
>I can ask my questions or review my inquiries quickly through my phone or computer.\
>It's easy for me to find Ask VA on VA.gov.\
>It's accessible for me.

Integrate with VA Profile
As a Veteran
>If I am authenticated, I don't have to input additional information if it's available in VA Profile.\
>If I am authenticated, I can edit personal information on VA Profile and then come back to my inquiry form to finish asking my question on Ask VA.

AVA Dashboard
As an authenticated submitter
>I can see the status of my submitted inquires and manage my replies.

### Undesired Submitter Outcomes

As a Veteran
>I stop asking questions because the Ask VA form and dashboard are difficult to use on my phone or computer.\
>I can't find Ask VA on VA.gov.\
>It's not accessible for me.

Integrate with VA Profile
As a Veteran
>If I am authenticated, my information is not pre-filled if available on VA Profile.\
>If I am authenticated, I am not able to go to VA Profile to edit my info and then return to the form.

AVA Dashboard
As an authenticated submitter
>I am not able to see the status of my submitted inquiries and manage my replies.

### Desired Business Objectives
Our updates for Phase 1 will bring the current Ask VA up to VA.gov design, content, and accessibility standards and sunset the existing front-end portal of AVA after a sufficient transition period.

## Measuring Success

### Key Performance Indicators (KPIs)
You can view our KPIs in this [KPI Measurement doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20KPIs.md)

### Assumptions
Improving the front-end of Ask VA will:
- Reduce the time it takes to submit an inquiry
- Increase the percentage of submitters that complete asking a question
- Increase user satisfaction of the application
  
Transitioning the Ask VA front-end to VA.gov design, content, and accessibility standards will improve user experience and bring more cohesiveness with the other services that the VA offers.

## Solution Approach

### Bring Ask VA up to VA.gov design standards (Front-End Updates)
- Update topics and categories based on content style guide (without changing form functionality and output)
- Update form questions based on content style guide (without changing form functionality and output)
- Update UI to reflect the VA Design System
- Make it mobile-friendly
- Do iterative submitter research to test usability of new form design and content updates
- Make it 508 Compliant

### Implement form on VA.gov
- Understand current routing rules
- When submitters complete the Ask VA form on VA.gov, the implementation will send this data to the Dynamics CRM for the agents to process submitter questions
- Releasing this new form to a new page on VA.gov (va.gov/contact-us/ask-va)
- Update the Ask VA dashboard  to VA.gov design, content, and accessibiltiy standards

### Potential future features
- Surface resources using existing knowledge base
- Inbox/secure messaging
- Explore use of NLU/free text
- AVA placement/integrations with chatbot and resources
- Updated existing routing rules to smart routing
- Integration with VA Notify

### Our High Level Plan for Phase 1
1. Discovery Spikes - Conducted quick, timeboxed explorations to determine effort for potential features
2. **Create Prototype** (Current Status) - Develop coded prototype on staging.va.gov for usability test
3. Usability Testing - Conduct usability tests with Veterans and dependents 
4. Launch Phase 1 - Launch the Ask VA front-end form and dashboard on VA.gov
  
### Additional references
- See the complete scope of Phase 1 in this GitHub doc, [including Must Have/Nice to have features for Phase 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20MVP:%20Must%20Have%20+%20Nice%20to%20Have.md)
- Download the [Initiative Brief on the overall project here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/AVA%20-%20Initiative%20Brief%20v2.docx)

## Launch Strategy
- Launch Phase 1 after redesigning and developing form flows for each category, topic, and subtopic combination on VA.gov.
- Sunset the existing front-end of AVA (ask.va.gov on on the stand alone Microsoft portal) after ~6 months.
- Tentatively, go live in the second half of 2024.

### Communication Plan
- How are Veterans and others using this product going to know it exists?
- What marketing, outreach, or communications are necessary for this product to be successful?*
- [View a Release Plan template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/maste/platform/product-management/release-plan-template.md)

### Launch Dates
- *Target Launch Date*
  - TBD until further conversation with dependent teams
- *Actual Launch Date* 
  - TBD
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - TBD
   
## Screenshots of Drafted Design Updates

![Screenshot 2023-10-25 at 1 45 53 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135031740/35191692-b186-48d3-ae37-f8f13a097bff)

![Screenshot 2023-10-25 at 1 46 00 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135031740/6b7c8a1d-716a-4776-91f6-3f2e3d919051)

![Screenshot 2023-10-25 at 1 46 06 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/135031740/0cf35d27-5e39-4757-bc7c-d45f2000f525)

## Team and Stakeholders
### Communications

<details>

- Team Name: Ask VA Integration
- GitHub Label: https://github.com/department-of-veterans-affairs/ask-va
- Slack channel: #ask-va-public
- Product POCs: Becky Phung, Chante Lantos-Swett, Andrea Schneider, Ruchi Shah
- Stakeholders: Link: https://docs.google.com/spreadsheets/d/1HlKmuuKAwiz6VnJIBNjI2t8Tet1Bc5tm6_fNLscDouw/edit#gid=0 

</details>

### Team Members

<details>
 
 - DEPO Lead: Chante Lantos-Swett, Andrea Schneider, Becky Phung, Natalie Morales
 - PM: Ruchi Shah
 - Engineering: Joe Hall, Eddie Otero, Jacob Cheriathundam, Khoa Nguyen
 - Research/Design: Tyler Gindraux, Thomas Michaud, Becky Phung
 - Program: Em Allan
 
</details>

### Stakeholders

<details>

- [View VA Leadership and Partner Team Stakeholders in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696976895933/4f5410b3e8770441f4101cbabd565aa0cd13dac7?sender=u2d812b371596fee265408413)

</details>
