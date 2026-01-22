# Research Plan for Orion, OH Appointment Scheduling, January, 2026

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**The appointments tool on VA.gov lets users schedule and manage their appointments online.**
  
The Orion team is integrating health care appointment functionality from [facilities that use Oracle Health EHRM systems](https://digital.va.gov/ehr-modernization/ehr-deployment-schedule/) into the current VistA scheduling capabilities. This research will test functionality being built that will allow Veterans to schedule appointments into the Oracle Health EHRM.

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Auth under My HealtheVet**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**The tool has been available since 2018. As of May 2025, all My HealtheVet classic was redirected to this tool on VA.gov**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/2025-oracle-health-scheduling/oracle-health-scheduling-initiative-brief.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

 - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Taking Care of Myself`
- `Reinventing Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`
- `Dying`

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

Test whether the basic functionality of OH scheduling and AVS works on production for trusted users, and identify any issues that arise. 


### Goals

`1.` **Test Oracle Health scheduling functionality, and report any issues with the feature.**

`2.` **Test Oracle Health after-visit summary functionality, and report any issues with the feature.**

`3.` **(Stretch Goal) Better understand a user's mental model around how they choose providers.**


  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**We will resolve any major issues before opening up the functionality to more facilities. And any learnings about the provider list will be used to improve this pattern overall.** 

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

**`1.`Are participants able to easily complete all of the scheduling and after-visit summary scenarios?**

**`2.`Are any scenarios difficult to complete?**

**`3.`Are any features missing that are critical to scheduling an appointment?**

**`4.`(Stretch) What information and considerations are important to participants when choosing a new provider?**

**`5.`(Stretch) What information and considerations are important to participants when scheduling with an existing provider?**


### Hypotheses

---

- Users will be able to complete the scheduling scenarios they test with little difficulty.
- Users will be able to easily access and view their after-visit summaries
- Users will identify other features or details that would help them choose a provider more easily.

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**User acceptance testing (UAT)**

- UAT meets our main goal of testing the feature with live data before a broader release. This will help us uncover any major bugs/issues.
- If users report other improvements we could make to any of the tools, we will use that information along with other research/user feedback.

<details><summary>Additional resources</summary> 
	
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)


- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**
	
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2025-oh-scheduling-web-uat/conversation-guide.md)
- [Link to research notes doc](#) [TODO - the thought here is to have a Sharepoint doc where notetakers can capture their insights from the sessions in one spot. Need to determine if we want more than that for synthesis, like a task success matrix]
	
## Recruitment 🎯	

### Recruitment approach

OCTO will recruit "Trusted Users" who have access to the scheduling tool who can test on their account in production.

### Recruitment criteria

#### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **7**
- `Total:` **7**
- `Ideal completed sessions:` **5**

#### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

"Trusted user" participants who can schedule and request appointments at VA Central Ohio Health Care System
- Participant must be registered at VA Central Ohio Health Care System
- Participant must have completed an appointment within the last 3 years with a provider in a type of care that is schedulable through the tool. 
- Available types of care to schedule:
    - Amputation care
    - Audiology - Routine hearing exam
    - Audiology - Hearing aid support
    - Eye care - Opthalmology
    - Eye care - Optometry
    - MOVE! weight management program
    - Nutrition and food
    - Pharmacy
    - Sleep medicine - CPAP
    - Sleep medicine - General (including home sleep testing)
    - Social work
- We'll need to know the type of care and provider we can test with for each participant

## Timeline 🗓️

### Prepare

### Research sessions
- `Planned dates of research:` **01/14-01/28** - To be pushed forward as needed depending on feature complete date

### Length of sessions
- `Session length:` **45m** - Expecting 30 minute sessions, with a 15 minute buffer to dig into any odd issues that arise.
- `Buffer time between sessions:` **None**
- `Maximum Sessions per day:` **5**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

[TODO - Note any times that no one is available in this section once we have dates solidified.]
  
## Team Roles  🕵️👩‍💻👩‍🔬       

- `Moderator:` **Peter Russo**	
- `Research guide writing and task development (usually but not always same as moderator):` **Peter Russo** - @outerpress		
- `Participant recruiting & screening:`	**OCTO**	
- `Project point of contact:` **Peter Russo and Kristen McConnell**		
- `Note-takers:` **Steve Straily** 	
- Observer sign up sheet - [TODO for UAE only]

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
