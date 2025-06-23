
	# Research Plan for IVC team, Form 10-10d supporting documents, 04/2025

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

Form 10-10d is the application for CHAMPVA benefits for the spouse or child of a Veteran with disabilities or the surviving spouse or child of a Veteran who has died. Currently, Veterans and family members of Veterans can either fill out and complete form 10-10d on VA.gov, or they can download and fill out the PDF and then mail it in for processing. 

This study will support improving the existing 10-10d digital flow so that users provide just enough information to support their eligibility for the CHAMPVA program at the time of submitting their application. This initiative is trying to solve the following high-level questions:
* How might we make it easier for family members and beneficiaries to apply for and receive benefits?
* How might we improve the experience of family members and beneficiaries applying for benefits online?

  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Currently unauthenticated, but there will be an authenticated flow**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**The 1010d application is currently live. This is an iteration on the current form to determine if there is a better way to ask for supporting documentation.**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10d-product-outline.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

</details>


### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Starting Up` Depending on their disability status and eligibility for Tricare, the Veteran and/or family may qualify for benefits through CHAMPVA at this point in their health care journey.
- `Putting Down Roots` As the Veteran puts down roots, if they are qualified for CHAMPVA, they will need to revisit the application for their dependents over time. Veterans and their dependents who didn’t previously qualify for CHAMPVA may be eligible if the Veteran’s disability status changes.
- `Aging` Disability status can change as Veterans age; Veterans or their dependents may become eligible for benefits through CHAMPVA as Veterans’ disability statuses change. There are moments in these scenarios where caregivers, dependents, adopted children, or step-children may be more likely to fill out the application on someone else’s behalf.

</details>


## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **Understand users’ expectations around what documentation they are required to provide when submitting a CHAMPVA application**

`2.` **Understand where and when users expect to upload supporting documentation for their application**

`3.` **Understand how users expect uploading documents supports their CHAMPVA application, and their responsibilities to provide supporting information** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**We will synthesize the data from this study and create a summary report of our learnings. This research will inform decisions around where users upload supporting documentation when completing form 10-10d, application for CHAMPVA benefits.**

**Moreover, the team is currently preparing to [integrate form 10-7959c (Other Health Insurance Certification) into form 10-10d](integrate form 10-7959c (Other Health Insurance Certification) into form 10-10d); learnings from this study will inform how additional subsections of the integrated form experience handle and instruct users to upload supporting documentation.** 

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)
	
`Goal 1: Understand users’ expectations around what documentation is required to provide when submitting a CHAMPVA application`

**`1.`Do users understand what supporting documentation they’ll need to upload with form 10-10d based on the information provided before they start the application?**

**`2.`Does the explanation for why we require some documentation for the CHAMPVA application on the intro page make sense?**

  
`Goal 2: Understand where and when users expect to upload supporting documentation for their application`

**`1.`Do users prefer to upload supporting documents at the time of answering a related question (Prototype Rose), or all at once at the end of the CHAMPVA application (Prototype Donna)?**

**`2.`Does integrated file upload (Prototype Rose)or uploading all documentation at the end (Prototype Donna) better support users’ short-term memory recall when completing the application (including file upload)?**

`Goal 3: Understand how users expect uploading documents supports their CHAMPVA application, and their responsibilities to provide supporting information.`

**`1.` Does the user understand they need to provide the front and back of Medicare and Private Health Insurance cards? Are there any situations where this requirement is a burden for users?
    * Does the v3 file upload component help users to successfully upload front/back views of their Medicare and Private Health Insurance cards?**

**`2.` Do users know how to provide additional documentation after submitting their CHAMPVA application?**

**`3.`Would users want any additional confirmation around uploading files**

**`4.` Does the user understand how to fix a faulty document when it fails to upload?**


### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

**Prototype Donna (uploading all docs at the end of the form) will have faster task completion times, but will have lower recall about the supporting documents required (Goal 2 Q1&2)**

**Participants will prefer uploading docs within the applicant loop (Prototype Rose) because the relationship between form fields and required documents will be clearer (Goal 2 Q1&2)** 

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

<details><summary>Examples of common research methods include</summary> 
	
- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design` 
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`

</details>

**We will perform usability testing on the entire form 10-10d flow based on two supporting documents concepts:** 
* **Concept Rose: supporting documents are uploaded within the applicant or health insurance subsections of the form**
* **Concept Donna: all supporting documents are uploaded at the end of the form, before submission**

**Think-aloud protocol will be used for each task and concept test, to understand how the user understands and is responding to the flow of the 10-10d application as they perform the tasks given to them.**

**Each participant will conduct all three tasks on both design concepts, with the order of the design concepts randomized to reduce first view and learning effects biases.**

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [x] **Remote**
- [ ] **In-person**
      

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews:** 
	
- `[Link to conversation guide]([url goes here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/research/users/2025-05-1010d-supportingdocs-usability-test/conversation-guide.md))`

**For moderated usability tests:** 
- `[Link to conversation guide](url goes here)`
- `[Link to prototype](url goes here)`

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- `[Link to email with instructions](url goes here)`
- `[Link to prototype or OptimalSort session for group A](url goes here)`
- `[Link to prototype or OptimalSort session for group B](url goes here)`



**If recruiting outside of Perigean’s participant database:**
- `[Link to recruitment flyer](url goes here)`
	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 

**Our intended audience for this research is Veterans and Dependents who have applied for benefits through the CHAMPVA program. We will be utilizing Perigean to help us recruit our participants. We will use the lean maximum variation inclusive recruitment strategy outlined by OCTO.**

> [!NOTE] 
> - Perigean **CANNOT** recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
> - Perigean can also support remote, [unmoderated studies](https://depo-platform-documentation.scrollhelp.site/research-design/perigean-recruiting-process-for-unmoderated-studie), however, these studies require strict recruitment requirements. 
> - Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria

> [!NOTE]
> - **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
> - Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> [!TIP]
> - The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
> - Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
> - Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

**List the total number and type (Veterans, caregivers, etc.) of participants for this study:**

- `Veterans:` **[n]**
- `Caregivers:` **[n]**
- `Dependents:` **[n]**
- `Total:` **[n]**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `[Place primary criteria here between hash marks when in edit mode]`
- `primary criteria`
- `primary criteria`
- **`Add more criteria as needed`**

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `[Place secondary criteria here between hash marks when in edit mode]`
- `secondary criteria`
- `secondary criteria`
- **`Add more criteria as needed`**

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.** 

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates MM/DD-MM/DD]**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **1 hour**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **30 minutes**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **3**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST, etc.;** ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
>
> **Place time slots between `hash marks` when in edit mode.**

- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `[MM/DD, Day, TT:TT AM/PM-TT:TT AM/PM] EST`
- `Add more slots as needed`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Renata Keck**	
- `Research guide writing and task development (usually but not always same as moderator):` **Renata Keck**		
- `Participant recruiting & screening:`	**[Enter full name]**	
- `Project point of contact:` **[Enter full name]**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Enter full name]**	
- `Note-takers:` **[Enter full name]** ***or*** **[Designate Perigean]**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
