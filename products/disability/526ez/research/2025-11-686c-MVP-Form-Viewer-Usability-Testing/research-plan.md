---
# Research Plan Metadata
title: "Research Plan for [Team, Product, Date]"
date: YYYY-MM-DD
last_updated: YYYY-MM-DD
team: "[Team Name]"
product: "[Product Name]"
product_area: "[e.g., authenticated/unauthenticated]"

# Background Context
background:
  problem_statement: "[What problem is your product trying to solve?]"
  product_location: "[Where is this situated on VA.gov?]"
  user_familiarity: "[New product or iteration?]"
  product_brief_url: "[URL]"

# Research Design
methodology: "[e.g., usability testing, semi-structured interviews, card sort]"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: "[Location name if applicable]"
    point_of_contact: "[Name if applicable]"
    equipment: "[Equipment details if applicable]"
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "[First research goal]"
  - goal_2: "[Second research goal]"
  - goal_3: "[Third research goal]"

research_questions:
  - "[Research question 1]"
  - "[Research question 2]"
  - "[Research question 3]"
  - "[Research question 4]"
  - "[Research question 5]"

hypotheses:
  - "[Hypothesis 1]"
  - "[Hypothesis 2]"
  - "[Hypothesis 3]"

expected_outcomes: "[How will findings advance the product?]"

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[Must-have criterion 1]"
    - "[Must-have criterion 2]"
    - "[Must-have criterion 3]"
    
  secondary_criteria:
    - "[Nice-to-have criterion 1]"
    - "[Nice-to-have criterion 2]"
    
  screener_questions:
    - question: "[Screener question text]"
      qualifying_response: "[Expected answer]"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 0
  total_recruited: 0
  completed_sessions_goal: 0
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "YYYY-MM-DD to YYYY-MM-DD"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1"
    key_results: 
      - "[Specific KR if applicable]"
  - objective: "Objective 2"
    key_results:
      - "[Specific KR if applicable]"
      
veteran_journey_phases:
  - "[e.g., Getting Out]"
  - "[e.g., Starting Up]"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research]"
    
tags:
  - "[product-area]"
  - "[methodology]"
  - "[participant-type]"
  - "[research-phase]"
---

# Research Plan for [Team, Product, Date]


## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

As a part of the Fully Digital Forms project MVP, we need a Form Viewer that can render structured form data and replace the current form PDF -- both for VSRS working the claim and for Veterans saving as a copy of their submission. See more information in the super epic.

The current PDF-based way of capturing VA.gov submissions has the following problems for Veterans:
* When data-to-PDF mapping or overflow logic isn't built perfectly, data is silently omitted, cut off, and lost. When data is silently lost, Veterans claims get delayed or inaccurately decided upon
* An overflow PDF page is created for 87% of VA.gov-submitted disability applications, 70% of Veteran’s pension applications, and 99% of time-of-need burial applications.
* PDF mapping or overflow issues happen regularly.
* Veterans do not consistently get a clean copy of the questions they were asked and the answers they provided to VA. VA.gov has implemented the "copy of submission" paradigm in at least 3 ways across the platform. There's a vague or invisible relationship between what they were asked on VA.gov and the document that will be used for their claim adjudication.

The proposed solutions aim to create a single form viewer that allows Veterans to view and save a copy of their form submission and VSRs to view the form in a manner that maintains data integrity and either integrates within or enhances their claim processing workflow. With a focus on scalability to other forms, we aim to determine if a single form viewer that is shared between Veterans and VSRs can address both their needs while not being detrimental to the other.

  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

For Veterans, using authenticated access to VA.gov, the form viewer will act as a copy of submission, appearing on (or linked from):

* the confirmation page after submitting the form (this is the goal of the 2025 MVP)
* MyVA 
* This is the long-term goal, which enables access to the copy of submission after leaving the confirmation page
* This location need to be validated with research and in coordination with the MyVA team 


  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**Veteran experience:** Providing a copy of submission is a tested [design pattern](https://design.va.gov/patterns/help-users-to/keep-a-record-of-submitted-information) on VA.gov for a few forms; however, this will be the first instance of providing a record of submission for form 686c and the interaction (linking it out instead of including it within an accordion) will deviate slightly from what is already established.
The ability to download and print the confirmation page (which automatically contains the copy of submission) is included within the design pattern – a feature we hope to parallel in our tested concept.


`Product Brief`

Super Epic: [#117360](https://github.com/department-of-veterans-affairs/va.gov-team/issues/117360) Create a submitted form viewer - Veteran and VSR user interface for submitted forms from structured json data.


</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Joining`
- `Serving`
- `Getting Out`
- `Starting Up`
- `Taking Care of Myself`
- `Reinventing Myself`
- `Putting Down Roots`
- `Retiring`
- `Aging`
- `Dying`

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` Understand current user processes/ workflows with regards to accessing and using the form output

`2.` Gauge users' expectations, reactions, and preferences for how the form sections, questions, and answers are laid out.

`3.` Evaluate whether users are able to navigate through the form viewer and identify their preferred methods

`4.` Understand what information is most important and preferences for how it would be displayed

`5.` Understand how the proposed concepts compare to the current solution and what would be ideal – including how the proposed concepts impact downstream tasks 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

* Inform whether or not the Veteran can share the same form viewer source component
    * If not, document what specific, differentiating aspects are crucial for each user type
* Inform changes to the baseline design (layout of the form output's contents)
* Inform which a la carte (interactive) features to integrate within the MVP
* Validate if the concepts fit within the user workflow – and if it doesn't, inform improvements to the design to increase workflow optimization
* Determine where and how the Veteran accesses the form output 
* Inform if the copy of submission will be accessed via a new tab vs. new page from confirmation page
* Inform if future efforts should be dedicated to accessing the form viewer from MyVA

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question? Does this question serve the goals of my study?`

_"Form output" is the generic term we'll be using in this document. For Veteran's we will most likely refer to it as the "copy of submission". For VSRs, we will most likely refer to it as the "application or form submission."_

**Goal 1: Understand current user processes/ workflows with regards to accessing and using the form output**

* Context: When and how would Veterans and VSRs use or encounter this form output?
* What do Veterans and VSRs do with the information from the form output? What happens next in their workflow?

**Goal 2: Gauge users' expectations, reactions, and preferences for how the form sections, questions, and answers are laid out**

* Is the general layout and content hierarchy understood by Veterans and VSRs?
* Baseline concept: Can Veterans and VSRs easily distinguish sections and repeating subsections (such as multiple children) from another?

**Goal 3: Evaluate whether users are able to navigate through the form viewer and identify their preferred methods**

* How do Veterans and VSRs normally navigate form outputs? Scrolling, keyboard tabbing, etc.?
* Are Veterans and VSRs typically looking for specific information or looking at the form output in it's entirety?  
* What would Veterans and VSRs expect to happen when they click on the navigational components, and would they use it? 

**Goal 4: Understand what information is most important and preferences for how it would be displayed**

* Is there information that's missing that Veterans and VSRs would like to see?
    * Is there information that Veterans and VSRs would like to be emphasized?
* Is there too much information? What would Veterans and VSRs like to remove or de-emphasize?

**Goal 5: Understand how the proposed concepts compare to the current solution and what would be ideal – including how the proposed concepts impact downstream tasks**

* How do these concepts compare to how Veterans and VSRs would normally view the form output?
    * Are there any features or qualities that are missing?
* Is there anything Veterans and VSRs would wish to have?



### Hypotheses
* Most participants will appreciate the simplified, yet comprehensive nature of the form output.
* Most participants will comment on the "clean" look (e.g., visual hierarchy, reduction of visual elements like a grid) that makes it easy to read – especially when VSRs compare it to the legacy paper/ PDF form.
* Some participants will probably desire the ability to use a navigation menu throughout the page, not just at the top of the page (using the "on this page" component).
* Some will download and/or print the copy of submission for record-keeping and contingency purposes. Others will not do so, expecting the ability to access the copy at another time.
* When asked how they would access the copy of submission, most will probably agree that accessing it via the confirmation page is appropriate. Some will probably allude to accessing it from their authenticated account (MyVA) if accessed at a time beside immediately post-submission.
* A few Veterans will probably desire the ability to edit their responses from the form viewer, which is an interaction that is not feasible since the submission is already complete.
* [If comprehensive form with blanks are presented] Some Veterans may be confused when presented with sections and questions that are not related to what they filled out themselves online.

  
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

**[Enter methodology here]**

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

- [ ] **Remote**
- [ ] **In-person**
      
> [!NOTE]
> If in-person, include:

- `Location:` **[Enter text]**
- `Point of contact:` **[Enter text]**
- `Equipment used for research:` **[Enter text]**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews:** 
	
- [Link to conversation guide](url goes here)

**For moderated usability tests:** 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)



**If recruiting outside of Perigean’s participant database:**
- [Link to recruitment flyer](url goes here)
	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 
- Perigean **CANNOT** recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, [unmoderated studies](https://depo-platform-documentation.scrollhelp.site/research-design/perigean-recruiting-process-for-unmoderated-studie), however, these studies require strict recruitment requirements. 
- Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*


- `Veterans:` **[n]**
- `Caregivers:` **[n]**
- `Dependents:` **[n]**
- `Total:` **[n]**
- `Ideal completed sessions:` **[n]**

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

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

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
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **[Enter time length]**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **[Enter buffer time]**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **[Enter NUM per day]**

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

- `Moderator:` **[Enter full name]**	
- `Research guide writing and task development (usually but not always same as moderator):` **[Enter full name]**		
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
