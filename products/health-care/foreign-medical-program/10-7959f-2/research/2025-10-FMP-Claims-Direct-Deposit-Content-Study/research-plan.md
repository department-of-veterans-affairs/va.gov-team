---
# Research Plan Metadata
title: "Research Plan for Health Apps, FMP Claims Form 10-7959f-2, October 2025"
date: 2025-10-14
last_updated: 2025-10-14
team: "Health Apps UX Team"
product: "Foreign Medical Program - Claims"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Adding direct deposit content around Foreign Medical Program Claims that does not introduce confusion or misunderstanding from the Veteran about set up because it is a different process than other VA benefits."
  product_location: "Health care benefits hub"
  user_familiarity: "New online form, testing new content additions"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-2/product-outline.md"

# Research Design
methodology: "semi-structured interviews with a Figma prototype"
research_format: 
  location: remote 
  moderated: true 
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand perceived content comprehension for the topic of direct deposit specifically for FMP claims."
  - goal_2: "Discover, if any, of the direct deposit content is confusing or misunderstood by the Veteran and could be a potential risk."
  - goal_3: "Gain insight into any improvements or recommendations to increase clarity of the direct deposit content for FMP claims."

research_questions:
  - "How do Veterans react to the direct deposit informational alert on the introduction page?"
  - "Do Veterans most often click to the static page to 'learn how to setup' or do they stay in the form flow?"
  - "Do Veterans confuse or quickly assume that their bank account information for FMP is the same as what they use for disability compensation?"
  - "Do Veterans express frustration about the separate direct deposit setup process for FMP claims and if so, what is their biggest pain point?"
  - "Do any Veterans say the direct deposit process mentioned in the content would be a blocker for them in filing online?"

hypotheses:
  - "There will be some but minimal confusion about direct deposit being a separate process than what is used for VA Benefits."
  - "Most Veterans will not have an issue with the one-time setup instructions directed to FSC, but may comment on it being inconvenient."

expected_outcomes: "Better understand risks with content comprehension around direct deposit content and instructions within FMP claims."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "[Current disability rating of 10-100]"
    - "[Living abroad]"
    - "[At least 2 participants who are female]"
    - "[At least 2 participants who are over 55 years old]"

  secondary_criteria:
    - "No more than 2 participants per each race/demographics category"
    
  screener_questions:
    - question: "Do you currently receive monthly disability compensation for a service connected condition?"
      qualifying_response: "Yes"
      
participants:
  veterans: 12
  caregivers: 0
  dependents: 0
  total_recruited: 12
  completed_sessions_goal: 8
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "TBD"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 45-60
  buffer_minutes: 45
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits."
    key_results: 
      - "Improve satisfaction with our web and mobile products by 5 points."
      - "Reduce the total time Veterans spend waiting for a response by 50%, towards a goal of less than 4 seconds per transaction."
      - "100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error."
  - objective: "OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA."
    key_results:
      - "100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential."
      
veteran_journey_phases:
  - "Taking Care of Myself"
  - "Reinventing Myself"
  - "Putting Down Roots"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Link to related past research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/foreign-medical-program/10-7959f-1/research/users)"
    
tags:
  - "product-area"
  - "methodology"
  - "participant-type"
  - "research-phase"

---

# Research Plan for [Health Apps, FMP Claims VA Form 10-7959f-2, October 2025]


## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**[Understand perceived content comprehension on some proposed content around the direct deposit process for FMP claims.]**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**[Health care hub - Forign Medical Program - Form 10-7959f-2 FMP Claims]**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**[This is a new online form that has gone through staging reivew, this is testing additional direct deposit content and flows only.]**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-2/product-outline.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result 1:** 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.


</details>



### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	

- `Taking Care of Myself`
- `Reinventing Myself`
- `Putting Down Roots`


</details>


## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **[Understand perceived content comprehension for the topic of direct deposit specifically for FMP claims.]**

`2.` **[Discover, if any, of the direct deposit content is confusing or misunderstood by the Veteran and could be a potential risk.]**

`3.` **[Gain insight into any improvements or recommendations to increase clairity of the direct deposit content for FMP claims.]**
  
### Outcome

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**Gague risk of new direct deposit content on a form and a static page on VA.gov - so that it is not introducing confusion for Veterans or an increase in calls/processing work.** 

---

### Research questions	
`What will I do with what I learn from this question?`
`Does this question serve the goals of my study?`

**`1. [How do Veterans react to the direct deposit informational alert on the introduction page?]**`

**`2. [Do Veterans most often click to the static page to "learn how to setup" or do they stay in the form flow?]**`

**`3. [Do Veterans confuse or quickly assume that their bank account information for FMP is the same as what they use for disability compensation?]**`

**`4. [Do Veterans express frustration about the separate direct deposit setup process for FMP claims and if so, what is their biggest pain point?]**`

**`5. [Do any Veterans say the direct deposit process mentioned in the content would be a blocker for them in filing online?]**`



### Hypotheses
 
---

**[Enter hypotheses here:]** 
- We assume that overall there will be some but minimal confusion about direct deposit being a separate process than what is used for VA Benefits.
- Most Veterans will not have an issue with the one-time setup instructions directed to FSC, but may comment on it being incovenient.

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 


**[Semi-structured interviews with a Figma prototype]**

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

- [x] **Remote**
- [ ] **In-person**
      


## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews / content usability test:** 
	
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/foreign-medical-program/10-7959f-2/research/2025-10-FMP-Claims-Direct-Deposit-Content-Study/conversation-guide.md)
- [Link to prototype](url goes here)


## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**


### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **[12]**
- `Caregivers:` **[0]**
- `Dependents:` **[0]**
- `Total:` **[12]**
- `Ideal completed sessions:` **[8]**

### Primary criteria (must-haves)
- `[Place primary criteria here between hash marks when in edit mode]`
-  Do you currently receive monthly disabilty compensation for a service connected condition? (Must answer yes to qualify) 
-  Are you currently living abroad? (Must answer yes to qualify) 
-  At least 2 participants who are female 
-  At least 2 participants who are 55 years or older 

#### Secondary criteria (nice-to-haves)
- No more than 3 participants per each race/demographics category


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
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **[45-60 minutes]**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **[45 minutes]**
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)` **[3]**

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

- `Moderator:` **[Health Apps UX Team]**	
- `Research guide writing and task development (usually but not always same as moderator):` **[Health Apps UX Team]**		
- `Participant recruiting & screening:`	**[Perigean]**	
- `Project point of contact:` **[Enter full name]**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[Not needed for this study]**	
- `Note-takers:` **[Health Apps UX Team]** ***or*** **[Designate Perigean]**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
