# Multi-form - AI Experiment - Initiative Brief
- Epic - [#109698](https://github.com/department-of-veterans-affairs/va.gov-team/issues/109698)
- [VA GPT guidance on creating a holistic experience](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Multi-form%20Completion/VA%20GPT%20guidance%20on%20holistic%20form%20completion%20experience.md)
- [Mural - AI prototyping experiment](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746467375767/c971bec1894623ca05ae32976dee99ca538c7f47)
- [Mural - AI Experiment brainstorm & planning](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1746708567334/89dc9187ed20ce833ffec9675c53a685a17cf120?wid=0-1747147180759)

## AI Experiment
- The team will conduct an experiment researching AI tools, using the tools to design and create a working prototype, and documenting the experience
- The experiment will focus on the MVP of Multi-form completion (see Outcome Summary below)
- Expectation for all teammates to swarm and collaborate on all aspects of this experiment. NO SILOS
- As a result of this experiment, the team expects to have a working prototype and readout on the experience to share with the Product Owner and Design Lead

### Scope
- In Scope
     - MVP logic mapped out with user personas
     - Medium fidelity prototype created
     - AI, Prompt library, Decisions and Sprint experience documented by UX and Engineering
     - Optional scope (stretch goal): Prefilling 2nd form with input from 1st form
- Out of Scope
     - Changing the forms
     - Changing the question flow
     - Sending content to APIs

### Documentation
- Daily log of happenings
- Documented Prototype
- Research readout with contributions from all teammates
- Pros/Cons, Worked/Didn't work/Sorta worked
- Prompt Library
- Decision log

### Timeline
- The team will time-box this experiment to a 5-day design sprint
- The sprint will begin on Thursday, May 15, 2025
- The sprint will end on Wednesday, May 21, 2025

### AI Tools that might be used during the experiment (not an exhaustive list)
- GH Copilot
- Claude
- Figma AI
- Cursor/Agentic AI
- DeepWiki
- NotebookLM
- V0/Vercel
- Chat GPT/VA GPT
- Lovable

## Outcome Summary
- Patrick (PO) challenged us to think about the larger health care journey, beyond our forms. This was something the team came up with during our offsite in DC as a logical way to connect the 10-10 forms with other aspects of enrollment or health care benefits mgmt
- Enabling Veterans to complete multiple forms using the same data input.
- **MVP Scope**: Prompting for 10-10CG and/or 10-10D upon completion of 10-10EZ and receipt of "enrolled" determination for Veterans with 70% or higher disability rating
- **Stretch Goal**: Prefill second form with previously entered data from first form

- This will streamline the application process, reduce redundancy, and enhance the overall Veteran experience.

**Related/Associated product(s)**
- Product | [10-10EZ product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Health%20Care%20Application%20Product%20Outline.md)
- Product | [10-10CG product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Caregiver%20application%20product-outline.md)
- Product | [10-10EZR product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZR%20Form/10-10EZR%20Product%20Brief%20(standalone%20form).md)
- Product | [10-10D product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10d-product-outline.md)

## Problem
- Veterans often need to complete multiple forms when applying for various benefits and services.
- Currently, each form requires separate data entry, which is time-consuming, repetitive, and can lead to errors. This results in a frustrating experience and potential delays in accessing needed benefits.
- The problem is occurring because forms are currently treated as independent entities without data sharing.
- This initiative furthers OCTO-DE's mission by improving efficiency, reducing burden on Veterans, and enhancing VA’s digital experiences to be the easiest and most efficient way to access VA health care and benefits

## Desired User Outcomes
- A Veteran would want to be notified of programs they may be eligible for based on input entered on an initial form and VA-known information, saving time, and reducing effort
- (stretch) A Veteran will want to avoid repetitive data entry when applying for multiple benefits.


## Desired Business Outcomes
- Improved user satisfaction when using VA.gov and applying for benefits and services
- Decrease time and frustration among Veterans and family members when using VA.gov

---
## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - There is a risk that Veterans will want to enter different information on different forms, for a variety of personal reasons
  
- **Usability Risks** (can people figure out how to use it):
  - There is a risk that Veterans will not know how it works or be concerned about how their data is gathered across forms
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - There are some technical feasibility risks here due to many form types and inconsistent fields being used.
  - Profile, which is to be a Source of Record, does not hold all the data we would like to use to complete these forms
  - Pulling data from one form to another may be difficult or not feasible
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - The risk with Stakeholders is unknown.  There would not be changes to the information collected and sent to downstream systems, only in the way the data is gathered from the Veteran.

### Scope within this experiment
- MVP: Prompt users with the next logical form after completing the first. 
- Stretch: Prefill the next form with entered data.

--- 
  
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: 10-10  Health Apps
- GitHub Label(s): 1010-team
- Slack channel:  1010-health-apps
- Product POCs: Heather Justice

</details>


#### Stakeholders
<details>
  
- Office/Department: OCTO-DE
- Contact(s): Patrick Bateman, Lauren Alexanderson
 
</details>
