# [Design Review a11y findings] Review of 21-526EZ PTSD and MST Form Updates

> [!NOTE]
> **Design Review Status:** `Complete`

## Benefits - Disability Experience Team 2
- **Figma Prototype(s):** `Pending Notification of Updates` Version will be updated for the design review with annotations.
- **Team Slack Channel:** #benefits-disability-design
- **CAIA A11y Ticket:** [#83191](https://github.com/department-of-veterans-affairs/va.gov-team/issues/83191)
- **Date of Audit:** `5/23/2024`
- **Timing:** CAIA's Content Team is at full capacity, so the Design Review by CAIA A11Ys can take place prior to the content team providing feedback.


## Product team
- Team name: Disability Benefits Experience Team 2 (Carbs)
- OCTO product owner: Emily Theis
- Product name: 21-526EZ
- Product manager: Sarah Ortiz Shields
- Slack channel: #benefits-disability-design
- Dedicated content writer on your team (if you have one): N/A
- Dedicated a11y specialist on your team (if you have one): N/A

## CAIA Auditor(s)
- `EVAN`

## Background

> Forms 0781 and 0781a for claiming PTSD or MST as service-connected conditions are embedded into the 526ez form flow. These forms are in the process of being updated and combined into one new form for claiming PTSD, MST, and other mental health conditions resulting from traumatic events. The current experience for claiming PTSD/MST is long and retraumatizing. Our shadowing research revealed many usability issues with this section of the form, and observed that it can double the time it takes a Veteran to submit a claim. We first want to update the online 526 experience to reflect the changes to the 0781 and 0781a forms. We anticipate that these updates address many of the usability issues we identified, and that future enhancements can be documented and added to the backlog to be prioritized according to OCTO's framework.

> I am working on wireframing and mapping out the new online 0781 flow (this is an iterative process as we are validating the flow with VBA stakeholders). The updated paper form 0781 will be released June 21.


## Design Review 
 
- [x] Review version(s) of a new form updates, in Figma.
- [x] Governance has already reviewed for **Design Intent**.

### Resources Utilized in the Design Review
- [x] **CAIA Intake Ticket**: [CAIA Intake] Disability Benefits: 526EZ - Updates to PTSD and MST questions
[#80870](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80870)
- [x] **Collaboration Cycle Ticket**: [#80848](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80848)) 
- [x] **Figma Annotations** c/o Jina Ryu ([legend here](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2226%3A6943&t=5dMnUmMbYamJA3Qf-1))

#### Screens by Figma Section

- [x] [Intro](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2595%3A20780&t=5dMnUmMbYamJA3Qf-1)
- [x] [Event details](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2595%3A20780&t=5dMnUmMbYamJA3Qf-1)
- [x] [Behavior changes](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2846%3A25271&t=5dMnUmMbYamJA3Qf-1)
- [x] [Treatment details](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2846%3A37663&t=5dMnUmMbYamJA3Qf-1)
- [x] [Supporting documents](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2595%3A73397&t=5dMnUmMbYamJA3Qf-1)
- [x] [Support alert component](https://www.figma.com/design/r3Aj9FtLFS989mlVeBsgJg/0781-Redesign?node-id=2226%3A6445&t=5dMnUmMbYamJA3Qf-1)

Thanks CAIA team! Appreciate your collaboration with us on this :) 

## CAIA A11Y Review

### Slack 🧵
_Additional information can be found in the [DSVA Slack channel for #benefits-disability-design thread for the Design Review](https://dsva.slack.com/archives/C053UDWMH7U/p1717013306857709)._

### General Recommendations
For annotations, provide fieldset and legend annotations for the radio button groups to avoid any confusion in the development phase. The group label (the main question) and all the radio buttons within the group would be wrapped within the "fieldset" annotation. The group label and any hint text if available would be wrapped within the legend annotation.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129999082/685f18a3-06aa-403a-ada4-7830a0b27a3a)


### Screen Recommendations

#### 0.1 - Option to Fill Out 0781
There is a significant amount of information on this page that a user would need to read/navigate through before getting to the main question for this screen. We are recommending to break down this screen into two separate screens, as this will assist in minimizing mental fatigue as the user navigates through the content. 

##### Screen One
The first screen could be a Yes/No radio button question asking if the veteran feels that they have a mental health condition and refer to the traumatic event and mental health additional info components. One of the additional components could be broken down into heading and body text (possibly the traumatic event component) to avoid additional tap stops prior to the mental health condition radio button question. 

##### Screen Two
The second screen would contain the "Would you like to provide a statement on your mental health conditions?" radio button question, along with the five-part process list. The list can be ordered before since it is static text and wont affect the tab order. 

#### 4.2 - Upload Supporting Documents
The "How to upload files" text has the visual appearance of a heading, though is not annotated as a heading level. Also, the importance of a user knowing how to upload a file is high enough for a heading level to be designated to the text programmatically. Consider making this text a h3/h4 depending on the finalized heading hierarchy on the screen.

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129999082/baf396da-3729-4abf-8f3c-9811321a6c5a)



## Next Steps
- **CAIA Content Team:** Feedback from the content team is pending team availability.
- **Governance Team:** **Midpoint** review.
- **CAIA A11Ys can assist with:**
    - [ ] A **pre-Midpoint review** and/or
    - [ ] Help with the [**Staging artifact** ticket](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Staging-review.1810137181.html#Stagingreview-Artifacts).
