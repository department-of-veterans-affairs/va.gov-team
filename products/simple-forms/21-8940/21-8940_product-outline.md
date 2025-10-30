# 21-8940 Form Digitization

---

## Overview
The PingWind team will create a digital version of VA 21-8940 (Veterans Application for Increased Compensation Based on Unemployability), which will enable users to apply online for Individual Unemployability disability benefits for a service-connected condition that prevents the applicant from keeping a steady job. This online form will make it easier to request these benefits without having to mail in a paper form.

## Problem Statement
As part of the Benefits Intake Optimization Project, the VA has a goal to digitize 11 new forms by 11/11/2025. Form VA 21-8940 is on the list of those 11 forms. This is a critical form for Veterans to apply for increased compensation if they are unable to maintain a steady job due to their service-connected condition(s). The current process is entirely paper based, and dependent on physical mail. Currently, there is no option to submit this form electronically.

## Desired User Outcomes

- *Why would a user want to use this?*

- Digital submission avoids mailing delays and reduces the potential for lost forms
- Users can submit online from anywhere, with options to save progress, and receive confirmations
- This could give assistive technology users an option to complete the form without assistance, by leveraging an accessible, online version

- *With this problem solved, what should users be able to do/achieve that they couldn't before?*

By digitizing VA Form 21-8940, users will gain new capabilities:

- Submit the form online quickly and securely, without having to rely on traditional mail
- Users will receive confirmation that the VA received their submission
- Users will access support resources in context, making the submission process more efficient

## Undesired User Outcomes

- Veterans/users are not comfortable with using technology to complete the forms
- Backend technical issues prevent the forms from being successfully submitted

## Desired Business Outcomes

- *Why would your business want this to exist?*

- The transition away from paper forms to electronic intake reduces scanning costs and manual processing. Operational overhead reduced.
- Improved data fidelity by moving away from optical character recognition and optimized preparation for automation.
- Validation of claimant inputs and optimization of those inputs for automation and a reduction in errors, reducing processing delays. 
- This supports the agency's broader mandate to optimize benefits intake and provide modern, user-friendly services.

- *With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Sets the foundation for additional enhancements and automation, further improving processing times and improving the Veteran experience.

## Undesired Business Outcomes

- Users don't adopt the new forms and take advantage of the automation and improved processing times.
- Technical issues/defects resulting in processing delays.

---
## Measuring Success

### Key Performance Indicators (KPIs)

1.**Digital Submission Adoption Rate**
- % of VA Form submissions completed digitally vs. paper
- Tracks whether users prefer and successfully adopt the digital option

2.**Processing Time (Cycle Time)**
- Average time from user submission to processing
- Critical for business efficiency and reducing backlog

3.**Information Fidelity**
- Improvement in information fidelity over OCR scanning
- Reduction in errors and improved optimization for automation

### Objectives and Key results (OKRs)
*What are the measurable targets you're aiming for that delivers value for Veterans?*

**Objective:** Improve form submission experience and processing efficiency for beneficiaries
 - **Key result 1:** Increase digital adoption of Form
  - *Value to Veterans:* More survivors can complete the form electronically, avoiding mail delays and uncertainty
  - **Key result 2:** Reduce average processing time
  - *Value to Veterans:* Faster processing reduces uncertainty and ensures timely benefit continuation

---

## Assumptions

- Team assumes platform teams are prepared and ready to expedite processes in order to meet the aggressive timeline.
- Team assumes that we will be able to make users aware of the availability of the electronic form option once the electronic form flow is deployed into production.

## Solution Approach

- *What are you going to build now, and why have you decided to start there?*

PWS is explicit that the team is building toward an MVP of the form, as defined in the PWS.

- *Why this solution / approach over other solutions / approaches?*

This solution/approach takes advantage of existing code/APIs on the va.gov platform, speeding development and aligning to the existing architecture.

- *What have you explicitly decided to not include in this initial set of functionality, and why?*

Any user-desired enhancements to the MVP, as defined in the PWS.

- *How will the solution / approach evolve after this initial build (knowing that this will likely change as you learn from users along the way)?*

Primarily anticipate only enhancements to the MVP form after the initial release. Enhancements may include the ability to prepopulate information and improvements in UI/UX.

- *Does your solution include the VA Health and Benefits mobile application? Explain why or why not.*

No - this is an electronic form option on VA.gov.

### Supporting research

- *Is this work supported by user research?* 

The team is not aware of any supporting research performed prior to the contract start.

  - *If this work is **not supported by existing user research**, will this work include user research?*

We do intend to do usability testing once the form is in production.

    - *If this work **will include user research**, please briefly state what you hope to learn from that research.*

The team intends to determine ways to make the form more user friendly and improve the Veteran/user experience in completing the form.

    - *If this work **does not cite nor include user research**, please state why and be prepared to defend your decision.*

The team is not aware of any supporting research performed prior to the contract start.


### Initiatives


--- 

## Launch Strategy
- *How are Veterans and others using this product going to know it exists?*

TBD; team will work with VBA and the va.gov team as needed

- *What marketing, outreach, or communications are necessary for this product to be successful?*

TBD; communications to the Veteran/user community to inform them of the availability of the digitized form and the support that is available to assist.

## Launch Dates
- *Target Launch Date*
  - 11/3/2025
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Benefits Intake Optimization - PingWind
- GitHub Label: benefits-intake-pingwind
- Slack channel: # bio-pingwind
- Product POCs:
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM:
 - Engineering: 
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_

VBA – Compensation
OIT
 
</details>

