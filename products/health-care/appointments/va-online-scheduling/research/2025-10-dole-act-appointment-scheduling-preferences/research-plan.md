---
# Research Plan Metadata
title: "Research Plan for Health Care (Appointments), E.  Dole Act Section 145 Appointment Scheduling Preferences, December 2025"
date: 2025-11-26
last_updated: 2025-11-26
team: "Health Care (Appointments)"
product: "E. Dole Act Section 145 Appointment Scheduling Preferences"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Currently, Veterans lack self-service options to specify and update their health care scheduling preferences. This limitation leads to inefficient scheduling processes, increased administrative workload.  Elizabeth Dole Act specifies that VA must enable Veterans to document the following 4 preferences regarding community care scheduling: How and when the Veteran prefers to be contacted about an appointment for health care; Whether the Veteran prefers to schedule appointments without the assistance of the Department, if able; Whether the Veteran prefers to select a provider without the assistance of the Department, if able; Whether Veterans prefer appointments to be scheduled during certain days or times of day."
  product_location: "This is part of the authenticated experience on VA.gov."
  user_familiarity: "This MVP expands preferences to include appointment scheduling preferences in Profile on VA.gov."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/appointment-scheduling-preferences"

# Research Design
methodology: "Remote, moderated, one-hour concept testing sessions involving interview questions and interactions with 2 prototypes. A total of 18 participants will be divided into 2 main groups.  Each main group will be further divided into 3 sub-groups, with 3 participants in each sub-group.  Both main groups will begin with Task 1.  Group 1 (9 participants): Start with Task 2, then move to Task 3.  Group 2 (9 participants): Start with Task 3, then move to Task 2."
research_format: 
  location: remote
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand the mental model of users to determine where all health preferences should be selected (could be multiple places)."
  - goal_2: "Identify the preferences that hold significance and relevance to Veterans when they schedule health care appointments."

research_questions:
  - "What problems are Veterans encountering when a scheduler makes their appointment for them?  What changes would Veterans like to see?"
  - "What information do Veterans wish schedulers already knew about their preferences, so they didn't have to share that information with them each time?"
  - "Where do Veterans expect to find all health preferences?  Do some preferences belong in different sections?  What would Veterans expect to find in scheduling preferences?  Should some preferences be found in multiple sections that are crosslinked?"
  - "What do Veterans think these preferences will impact? Which preferences are confusing for Veterans to understand? Which preferences do Veterans think are valuable?  Do Veterans want these preferences to apply to only certain scenarios?  Or are these universal?"
  - "Do Veterans mention any changes, problems, or use cases that the current design solves or does not address?"
  - "Do Veterans want to see any metadata about changes to a preference?"
  - "Do Veterans propose additional preference types they would like implemented?"

hypotheses:
  - "Veterans will not find generic male/female provider preferences of value unless the Veteran can specify the provider's gender by specialty."
  - "Veterans will not find the best method of contact of value unless they can specify the method of contact by day and time of day."
  - "Veterans will not find appointment time preferences of value unless they can specify the preferences by the day and time window."
  - "Veterans will not find general time frames for contact by phone (such as morning or evening) of value unless they can specify the window that they are available to receive the call."
  - "Veterans would expect some preferences to exist at a global level, such as in profile, while other preferences should exist at the episode of care level, such as when scheduling one appointment."
  - "Veterans will expect to find certain health preferences in multiple places."

expected_outcomes: "Determine where these preferences should live.  Understand the Veteran perceived value of each preference and how Veterans expect VA to utilize their preferences, such as what workflow do they expect to be adjusted based upon their answer.  Gather feedback on usability of proposals."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Perigean will recruit all participants."
  
  primary_criteria:
    - "Must be enrolled in VA healthcare"
    - "Must have either a desktop/laptop, mobile device, or a tablet and must be willing to share their screen while they use the prototype"
    - "At least 6 Veterans with cognitive disabilities"
    - "Please do not recruit Veterans who use assistive tech devices, as the Figma prototyping tool is not compatible with these devices"
    
  secondary_criteria:
    - "50% age 55-64+"
    - "25% Lives in a rural area"
    - "10% women"
    - "15% black"
    - "12% Hispanic"
    - "3% Asian"
    - "1% Native American"
    - "1% LGBTQ"
    
  screener_questions:
    - question: "Do you have an email and password for either Login.gov or ID. me that you use to sign into VA.gov?"
      qualifying_response: "Yes - move to question 2; No - do not recruit"
    - question: "Are you enrolled in VA healthcare?"
      qualifying_response: "Yes - move to question 3; No - do not recruit"
    - question: "Have you scheduled or attempted to schedule a medical appointment in the last 12 months?"
      qualifying_response: "Yes - move to question 4; No - do not recruit"
    - question: "Have you been diagnosed with (formally or informally) a cognitive disability? This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, or other cognitive disabilities."
      qualifying_response: "Yes - recruit at least 6; No - recruit for other requirements; I prefer not to answer"

participants:
  veterans: 18
  caregivers: 0
  dependents: 0
  total_recruited: 27
  completed_sessions_goal: 18
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2025-12-08 to 2025-12-15"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 60
  max_sessions_per_day: See moderators' schedule for minimum and maximum sessions per day by moderator. 
  
# Strategic Alignment
octo_priorities:
  - objective: "VA's digital experiences are the easiest and most efficient way to access VA health care and benefits."
      
veteran_journey_phases:
  - "Taking care of myself"
  - "Retiring"
  - "Aging"
    
# Research Repository Tracking
related_research:
  conversation_guide: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2025-10-dole-act-appointment-scheduling-preferences/conversation-guide.md"
  prototype: "https://www.figma.com/proto/NoK2Isx56zi0ZSSNA510Wd/Dole-Act--Concept-Testing-Prototypes?node-id=41-24048&p=f&t=NPm1Q2OOD6M9VB5g-1&scaling=min-zoom&con"
    
tags:
  - "health-care"
  - "appointments"
  - "concept-testing"
  - "veteran-preferences"
  - "authenticated"
  - "dole-act"
---

# Research Plan for Health Care (Appointments), E. Dole Act Section 145 Appointment Scheduling Preferences, December 2025
> [! NOTE]
> *Questions about how to set up your research study?  Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel. * 

## Background 🏗️
<details><summary>Briefly describe the background of your product. </summary>

`What problem is your product trying to solve?`

Currently, Veterans lack self-service options to specify and update their health care scheduling preferences.  This limitation leads to inefficient scheduling processes, increased administrative workload. 

Elizabeth Dole Act specifies that VA must enable Veterans to document the following 4 preferences regarding community care scheduling:
- How and when the Veteran prefers to be contacted about an appointment for health care. 
- Whether the Veteran prefers to schedule appointments without the assistance of the Department, if able.
- Whether the Veteran prefers to select a provider without the assistance of the Department, if able.
- Whether Veterans prefer appointments to be scheduled during certain days or times of day.

### Desired User Outcomes
- As a Veteran, I want VA to know my preferences for self-scheduling, so that I am connected to the best and fastest option for me to make my appointments.
- As a scheduler, I want to know the Veteran's preferences, so I may connect them to the soonest, best care. 

`Where is your product situated on VA. gov?  (ex: auth vs. unauth)`

This is part of the authenticated experience on VA.gov.

`What is Veterans' familiarity with this tool?  Is this a new product or an iteration on an existing one?`

This MVP expands preferences to include appointment scheduling preferences in Profile on VA.gov.

`Product Brief`

**[E. Dole Act, Section 145 Appointment Scheduling Preferences product brief](https://github.com/department-of-veterans-affairs/va. gov-team/blob/master/products/identity-personalization/profile/appointment-scheduling-preferences).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support?  Work with your VA lead and product manager as needed.</summary>

`Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits.`

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points. 
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error. 

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va. gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?  Are there moments that matter? </summary>

- Taking care of myself
- Retiring
- Aging

</details>

> [!TIP]
> Delete journeys not supported by this research. 

## Research Goals 🥅
`What are you trying to learn from this research?`

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1. ` **Understand the mental model of users to determine where all health preferences should be selected (could be multiple places).**

`2.` **Identify the preferences that hold significance and relevance to Veterans when they schedule health care appointments.**

### Outcome
`How will this research advance your product to the next phase in the design process?  What will you do with your learnings?`

---

- Determine where these preferences should live
- Understand the Veteran perceived value of each preference and how Veterans expect VA to utilize their preferences, such as what workflow do they expect to be adjusted based upon their answer
- Gather feedback on usability of proposals

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the [conversation guide. ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***

`What will I do with what I learn from this question?`

`Does this question serve the goals of my study?`

**`1.` What problems are Veterans encountering when a scheduler makes their appointment for them? What changes would Veterans like to see?**

**`2.` What information do Veterans wish schedulers already knew about their preferences, so they didn't have to share that information with them each time?**

**`3.` Where do Veterans expect to find all health preferences? **
   - Do some preferences belong in different sections? 
   - What would Veterans expect to find in scheduling preferences?
   - Should some preferences be found in multiple sections that are crosslinked?

**`4.` What do Veterans think these preferences will impact? **
   - Which preferences are confusing for Veterans to understand?
   - Which preferences do Veterans think are valuable?
   - Do Veterans want these preferences to apply to only certain scenarios?  Or are these universal?

**`5.` Do Veterans mention any changes, problems, or use cases that the current design solves or does not address?**

**`6.` Do Veterans want to see any metadata about changes to a preference?**

**`7.` Do Veterans propose additional preference types they would like implemented?**

> [!TIP]
> Enter more questions as needed

### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study! 

**Think through these prompts to develop strong hypotheses:**

`What do you intend to learn and measure from this study?`

`What do you already know about this problem space?`

`What do you think users will do or think about this product?  (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don't skip this step!)`

`Write a generalized statement that combines what you know + what you think will happen during the study. `

---

1. Veterans will not find generic male/female provider preferences of value unless the Veteran can specify the provider's gender by specialty.
2. Veterans will not find the best method of contact of value unless they can specify the method of contact by day and time of day.
3.  Veterans will not find appointment time preferences of value unless they can specify the preferences by the day and time window. 
4. Veterans will not find general time frames for contact by phone (such as morning or evening) of value unless they can specify the window that they are available to receive the call.
5. Veterans would expect some preferences to exist at a global level, such as in profile, while other preferences should exist at the episode of care level, such as when scheduling one appointment. 
6. Veterans will expect to find certain health preferences in multiple places. 

---

## Methodology 🛠️
***Describe the method you're planning.  You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. ***

<details><summary>Examples of common research methods include</summary>

- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design`
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`
- `Concept testing - appropriate for evaluative research`

</details>

Remote, moderated, one-hour concept testing sessions involving interview questions and interactions with 2 prototypes. 

A total of 18 participants will be divided into 2 main groups.  Each main group will be further divided into 3 sub-groups, with 3 participants in each sub-group. 

Both main groups will begin with Task 1. 

**Group 1 (9 participants): Start with Task 2, then move to Task 3**
- Sub-group 1a: Starts with prompt "Find where you would select your preference for a male or female provider."
- Sub-group 1b: Starts with prompt "Find where you would select a preference for a scheduler to contact you to schedule a medical appointment."
- Sub-group 1c: Starts with prompt "Find where you would specify what day and times you prefer to have your medical appointments."

**Group 2 (9 participants): Start with Task 3, then move to Task 2**
- Sub-group 2a: Starts with prompt "Find where you would select your preference for a male or female provider."
- Sub-group 2b: Starts with prompt "Find where you would select your preference for a scheduler to contact you to schedule a medical appointment."
- Sub-group 2c: Starts with prompt "Find where you would specify what day and times you prefer to have your medical appointments."

<details><summary>Additional resources</summary>

- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act. md) to educate yourself on how PRA affects your research.
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants. 1958773044.html) to understand how Perigean recruits, and what to expect. 
- If conducting testing on mobile, refer to the [mobile research guidelines. ](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#Conducting)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability inclusion guidance.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/inclusive-research-recommendations.md)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/research-safety-and-emergency-exit-strategies)

</details>

### Location
Where will you be holding the research sessions?  Be sure to include whether this is remote or in-person research.  [Learn more about setting up in-person research. ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/in-person-research-setup.md)

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**

Sessions will take place remotely via the Zoom meeting platform. 

**Points of Contact:** 
- Slack feedback channel and MS Teams chat
- Nina Anusavice
- Tim Licitra
- Kristen McConnell

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

**For moderated usability tests:**
- [Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/research/2025-10-dole-act-appointment-scheduling-preferences/conversation-guide.md)
- [Elizabeth Dole Act, Section 145 MVP Prototype](https://www.figma.com/proto/NoK2Isx56zi0ZSSNA510Wd/Dole-Act--Concept-Testing-Prototypes?node-id=41-24048&p=f&t=NPm1Q2OOD6M9VB5g-1&scaling=min-zoom&con)

## Recruitment 🎯
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources:
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment. md) to learn how to be inclusive in your recruitment approach.

### Recruitment approach
*Who is your intended audience for this research (e.g.  Veterans, caregivers, VSOs, SMEs), and how will you recruit them?*

We will partner with Perigean to recruit 22 Veterans; all efforts will be made to recruit a diverse sample. 

Perigean will recruit all participants. 

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses.  Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question. 
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. 
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md)
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study.

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1. 5x** your ideal completed sessions number *(e.g.  for 10 ideal completed sessions, request 15 total participants)*

- `Veterans:` **18**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **22**
- `Ideal completed sessions:` **18**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?*

- Must be enrolled in VA healthcare
- Must have either a desktop/laptop, mobile device, or a tablet and must be willing to share their screen while they use the prototype
- At least 6 Veterans with cognitive disabilities
- Please do not recruit Veterans who use assistive tech devices, as the Figma prototyping tool is not compatible with these devices

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?*

- 50% age 55-64+
- 25% Lives in a rural area
- 10% women
- 15% black
- 12% Hispanic
- 3% Asian
- 1% Native American
- 1% LGBTQ

#### Screener Questions

1. Do you have an email and password for either Login. gov or ID.me that you use to sign into VA.gov?
   - If Yes, then move to question 2.
   - If No, then do not recruit. 

2. Are you enrolled in VA healthcare?
   - If Yes, then move to question 3.
   - If No, then do not recruit.

3. Have you scheduled or attempted to schedule a medical appointment in the last 12 months? 
   - If yes, then move to question 4. 
   - If no, then do not recruit.

4. Have you been diagnosed with (formally or informally) a cognitive disability?  This includes any intellectual disability, ADHD, Autism Spectrum Disorder, severe, persistent mental illness, brain injury, or other cognitive disabilities.
   - If Yes, then recruit at least 6. 
   - If No, then recruit for other requirements. 
   - I prefer not to answer.

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review. 1781891143.html) 8-9 days prior to the first planned research session.**

### Optional Kick-off Call with Perigean

- `Suggested dates and times:
    - December 1: 2-6pm EST
    - December 2: 9:30am -1pm EST
    - Flexible the rest of the week.
- 
- Perigean notetaker - Yes, for every session unless noted. 
- Timeline: TBD

### Prepare
*When will the thing you are testing be finalized?  Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781891017.html).*

**A pilot session is required.  Please indicate the date and name of a mock participant for a pilot session.**
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **TBD**
- `Date and time of pilot session:` **TBD**

### Research sessions
- `Planned dates of research:` **12/08-12/15/2025**

### Length of sessions
- `Session length:` **60 minutes**

- `Buffer time between sessions:` **60 minutes**

- `Maximum Sessions per day:` **See Availability table below.**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST)**

**Moderating Schedule**

**Note:** Please stop further recruitment once 18 sessions have been completed. 
All times are in EST.

| Date   | Tim (1-2 sessions)         | Nina (2-3 sessions)          |
| ------ | ---------------- | ---------------- |
| 12/8   | 8-4              | 10-6             |
| 12/9   | 10-2             | 10-6             |
| 12/10  | 8-4              | 10-6             |
| 12/11  | 8-12 and 2-4           | 10-12 and 2-6         |
| 12/12  | 8-4              | 10-5             |
| 12/15  | 8-4              | 10-6             |
| **Min/Max sessions for a total of 27** | **6-12 sessions**  |**12-18 sessions**|

## Team Roles 🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section. ** We previously required email addresses.  VA's GitHub policy restricts personal email disclosure. 
>
> **Please list the names of people in each role. ** In the Slack study channel, send an email and primary phone number for the moderator.  Also send emails for the notetaker, accessibility specialist, and other key team members.

- `Moderators, Research guide writing and task development, Note-takers:`
  - Nina Anusavice
  - Tim Licitra

- `Participant recruiting & screening:`
  - Perigean

- `Project point of contact:`
  - Kristen McConnell
  - Nina Anusavice
  - Tim Licitra

## Approvals ✅
- `Reviewed and approved by TBD on TBD`
