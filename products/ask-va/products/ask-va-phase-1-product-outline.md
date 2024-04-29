# Ask VA Phase 1 - Product Outline
Last updated by @beckyphung on January 8, 2024

**Jump to:**
- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Outcomes](#outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Launch Strategy](#launch-strategy)
- [Examples of Design Updatess](#examples-of-design-updates)
- [Team and Stakeholders](#team-and-stakeholders)

## Overview
Ask VA (AVA) on the modernized VA.gov platform will be a digital support channel that works with other tools and features on VA.gov and VA ecosystems to quickly and accurately answer submitters' questions. Submitters should feel it is easy and intuitive to submit their issues and receive adequate updates and information that results in a final resolution. Ultimately, we want AVA to feel part of a cohesive and submitter-centered approach to support.

## Problem Statement
Submitter should easily and intuitively be able to ask a question through Ask VA on VA.gov.
   - **Who**: The submitter - This could be the Veteran, their caregiver, their supporting personnel, or their dependents (authenticated or un-authenticated).
   - **What**: The current form design and content needs to better align with VA.gov design, content, and accessibility standards for the submitter. 
   - **Why**: The submitter will have a more cohesive and consistent experience with accessing VA support, benefits, and services on VA.gov.
   - **Where**: The form needs to reside in VA.gov so that it is easily locatable and can potentially integrate with other VA.gov applications (ex. Chatbot).

**How might we** create an inquiry form that is easier for Veterans and other users to ask VA a question online?

## Outcomes
We expect Veterans and other submitters to meet these outcomes after we launch Phase 1: 

### Desired submitter outcomes
1. **Better submission experience**: It's easier for Veterans and other submitters to send questions on VA.gov through AVA. (Learn more about [our design strategy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/Strategy))
2. **Better dashboard experience**: While signed in on VA.gov, it's easier for Veterans and other submitters to view and reply to past AVA questions. (Learn more about [our design strategy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/Strategy).](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/Strategy).
3. **More seamless experience**: Veterans’ and other submitters’ AVA experience and data is more consistent and seamless with other VA channels.
4. **CRM integration**: Veterans and other submitters continue to reliably communicate with VA through AVA.

### Undesired submitter outcomes
1. **Worse submission experience**: It's _harder_ for Veterans and other submitters to send questions on VA.gov through AVA.
2. **Worse dashboard experience**: While signed in on VA.gov, it's _harder_ for Veterans and other submitters to view and reply to past AVA questions.
3. **More disjointed experience**: Veterans’ and other submitters’ AVA experience and data is _less_ consistent and seamless with other VA channels.
4. **Unsuccessful CRM integration**: Veterans and other submitters _cannot_ reliably communicate with VA through AVA.

### Desired Business Outcomes
1. **More internal alignment**: There’s improved internal alignment on OCTO, VES, and MCT goals and improved relationships with stakeholders regarding Ask VA because we’re working closer together.
2. **More stability**: We create a more stable product that is better supported by existing VA enterprise assets, additional resources (such as the VA.gov Platform team), user testing, and data.

### Undesired Business Outcomes
1. **Less internal alignment**: There’s _less_ internal alignment on OCTO, VES, and MCT goals and _worse_ relationships with stakeholders regarding Ask VA because we’re working closer together.
2. **Less stability**: We create a _less_ stable product that _isn’t_ better supported by existing VA enterprise assets, additional resources (such as the VA.gov Platform team), user testing, and data.

## Measuring Success

### Key Performance Indicators (KPIs)
Key Performance Indicators (KPIs) help us understand how Ask VA is meeting expected submitter outcomes. Objectives and Key results (OKRs) help us measure success of specific targeted objectives.

View our KPIs in this [KPI Measurement doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20KPIs.md)

### Objectives and key results (OKRs)
These OKRs measure the success of our Phase 1 launch.

####  Objective 1: Bring form and dashboard up to VA.gov design, accessibility, content, and information architecture standards
- Key result 1.1: Complete VA.gov platform collaboration cycle steps
- Key result 1.2: **Satisfaction** - Increase customer satisfaction score (CSAT) from the current ask.va.gov benchmark
- Key result 1.3: **Task completion** - Increase the percentage of successful sent questions from the current ask.va.gov benchmark
- Key result 1.4: **Rerouting** - Decrease the percentage of questions that are rerouted at least once by agents to another queue from the current ask.va.gov benchmark

#### Objective 2: Integrate with enterprise assets, such as VA Profile, as necessary and possible for Phase 1
- Key result 2.1: Explore integrations with enterprise assets (VANotify, VA Profile, My VA, Medallia feedback surveys)
- Key result 2.2: Execute successful integration with VA Profile
- Key result 2.3: Execute successful integration with Medallia feedback surveys

#### Objective 3: Integrate successfully with the AVA back-end in Dynamics CRM 
- Key result 3.1: Develop and deploy API endpoints to send and receive data from AVA Dynamics CRM
- Key result 3.2: There are 0 fatal errors in sending or receiving data needed for VA agents to answer submitter questions

### Assumptions
Improving the front-end of Ask VA will:
- Increase user satisfaction of the application
- Decrease the time it takes to ask a question
- Increase the percentage of submitters that complete asking a question
- Decrease the percentage of questions that are rerouted by agents
- Decrease the resolution time of a question

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
- See the complete scope of Phase 1 in this GitHub doc, [including Must Have/Nice to have features for Phase 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/Phase%201%20MVP%20Must%20Have%20+%20Nice%20to%20Have.md)
- Download the [Initiative Brief on the overall project here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/AVA%20-%20Initiative%20Brief%20v2.docx)

## Launch Strategy
- Launch Phase 1 after redesigning and developing form flows for each category, topic, and subtopic combination on VA.gov.
- Sunset the existing front-end of AVA (ask.va.gov on on the stand alone Microsoft portal) after a sufficient period of time.
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
   
## Examples of Design Updates

These examples represent our designs as of December 15, 2023.

![Homepage-design-changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Notes/Images/Homepage-design-changes-Dec-23.png)
![Topic-design-changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Notes/Images/Topic-design-changes-Dec-23.png)
![Dashboard-design-changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/research/Notes/Images/Dashboard-design-changes-Dec-23.png)

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
