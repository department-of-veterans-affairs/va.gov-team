---
# Research Plan Metadata
title: "Research Plan for Chatbot Team, VA Chatbot, OCT 2025"
date: 2025-10-01
last_updated: 2005-10-13
team: "Chatbot Team"
product: "VA Chatbot"
product_area: "Virtual Agent"

# Background Context
background:
  problem_statement: "The VA Chatbot aims to help Veterans self-serve and access information on VA.gov more easily, ultimately reducing call volume and supporting task completion without human assistance. The product assumes that improved digital experiences can shift behavior away from phone-based support, but gaps may exist in understanding edge cases, digital literacy, and accessibility for all user groups. "
  product_location: "The chatbot is currently designed for unauthenticated users and is available on pages like [Contact Us](https://www.va.gov/contact-us/virtual-agent/). This placement is suitable for broad, early engagement but may need further exploration regarding visibility across the site and integration with authenticated experiences as the product matures."
  user_familiarity: "Updated version ov Virtual Agent"
  product_brief_url: "[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/Chatbot%20PoC%20Initiative.md]"

# Research Design
methodology: "Moderated usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: "NA"
    point_of_contact: "Lucas Wright"
    equipment: "NA"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Increase the accuracy of the answers provided by the VA chatbot."
  - goal_2: "Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov."
  - goal_3: "mprove the design by finding painpoints in the current proof of concept designs to accomidate any/all level of users."

research_questions:
  - "Is the chatbot design easy to use and understand for users of all technical ability?"
  - "Are users able to find answers to simple questions without authentication?"
  - "Are the disclaimers and warnings timely and useful?"
  - "Are users getting frustrated if questions are not properly answered?"
  - "Are the lenghts of answers appropriate?"
  - "How can we improve design?"
  - "Are interactions quick and get the user to their intended destination in a timely manner?"
  -  "How does the chatbot impact Veterans’ perceptions of VA digital services?"
  - "What prevents users from trying or returning to the chatbot?"
  - "Are there differences in experience based on device type or internet access?"

hypotheses:
  - "y utilizing LLM and/or AI in the 3 proof of concept designs, we will be able to more accurately answer Veterans' questions and help them complete tasks on VA.gov by interacting with users and responding to feedback. Also, the answers will be clear, trustworty and channel agnostic."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "[e.g., lean maximum variation]"
  
  primary_criteria:
    - "[At least 3 of 20 people must be women]"
    - "[At least 4 of 20 people must identify as Black or African American]"
    - "[- `At least 4 of 20 people must identify as Hispanic/Latina/Latinx]"
    - "[t least 3 of 20 people must identify as Asian]"
    - "[MAt least 1 of 20 people must identify as Native, American Indian or Alaska Native]"
    - "[At least 1 of 20 people must identify as Native Hawaiian or Pacific Islander]"
    - "[At least 8 of 20 people must identify as having a cognitive disability]"
    - "[At least 10 of 20 people must be over the age of 55]"
    
  secondary_criteria:
    - "[At least 3 of 20 Veterans have been out of service for less than 1 year]"
    - "[At least 5 of 20 Veterans have a yearly household income of $49,000 or less]"
    - "[At least 4 of 20 people must live in rural areas]"
    - "[At least 3 of 20 people must have no degree]"
    - "[At least 1 of 20 people must be an expatriate]"
    - "[t least 3 of 20 people must have been discharged with a designation other than honorable]"
    - "[At least 2 of 20 people must identify as being born outside of the US]"
    - "[At least 3 of 20 people must identify as gay, lesbian or bisexual]"
    - "[At least 2 of 20 people must identify as transgender]"
    - "[At least 2 of 20 people must identify as nonbinary, gender fluid, gender queer or two spirit]"
    - "[At least 2 of 20 people must use assistive technology to help them complete the user study]"
    
      
participants:
  veterans: 15
  caregivers: 3
  dependents: 2
  total_recruited: 20
  completed_sessions_goal: 18
  
# Timeline & Sessions
timeline:
  pilot_date: "YYYY-MM-DD"
  pilot_participant: "[Name]"
  research_dates: "2025-10-27 to 2025-11-07"
  research_review_submission: "YYYY-MM-DD"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 2"
    key_results:
      - "[100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.]"
      - "[100% of VA employees have access to a valuable Generative AI tool to help with their work.]"
      
veteran_journey_phases:
  - "[Joining]"
  - "[Serving]"
  - "[Getting Out]"
  - "[Starting Up]"
  - "[Taking Care of Myself]"
  - "[Reinventing Myself]"
  - "[Putting Down Roots]"
  - "[Retiring]"
  - "[Aging]"
  - "[Dying]"
    
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

	# Research Plan for [Chatbot Team, Chatbot, Oct 2025]


## Background 🏗️
<details><summary>Originally created in 2021, the VA Chatbot is a well-developed and maintained virtual agent that helps users solve problems and complete tasks on their own with little to no human involvement at any time of day, resulting in decreased time Veterans spend waiting for an outcome, and ultimately decreased call center calls – especially for calls involving simple questions and/or solutions.</summary> 
	
---

**Problem Statement:**

The VA Chatbot aims to help Veterans self-serve and access information on VA.gov more easily, ultimately reducing call volume and supporting task completion without human assistance. The product assumes that improved digital experiences can shift behavior away from phone-based support, but gaps may exist in understanding edge cases, digital literacy, and accessibility for all user groups. 
  
**Product Placement:**
The chatbot is currently designed for unauthenticated users and is available on pages like [Contact Us](https://www.va.gov/contact-us/virtual-agent/). This placement is suitable for broad, early engagement but may need further exploration regarding visibility across the site and integration with authenticated experiences as the product matures.
  
**Veteran Familiarity & Adoption Challenges:**
This is an iteration on the existing Ask VA/VA Chatbot. While familiarity may exist for some users, the shift to a more advanced, AI-driven experience could pose challenges—especially for less tech-savvy Veterans or those with accessibility needs. The research should investigate barriers related to trust, discoverability, and ease of use.

**Second Round of Testing:**
After conduction the first round of research, we have selected the best prototype option and have further developed that candidate.  Now we are continuing the research to further refind and improve on the Chatbot.

**Product Brief**

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/Chatbot%20PoC%20Initiative.md)

[Google Doc product brief](https://docs.google.com/document/d/114fKRhqjoKr_TvqFSE-_hklefcrSCiz4/edit)

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

**Alignment:**

The research supports OCTO’s objectives around platform efficiency, security, and generative AI adoption. Key results such as secure authentication and broad employee access to AI tools are partially addressed, but the chatbot’s current unauthenticated focus means some objectives (like secure credential use) may not be fully aligned.

**Relevance of Key Results:**

Increasing answer accuracy and protecting user information are highly relevant and reflected in the research goals.
To strengthen alignment, the plan could include explicit measures for data security, monitoring for PHI/PII entry, and plans for future integration with authenticated services.


`Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.`

> - **Key Result:** 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.
> - **Key Result:** 100% of VA employees have access to a valuable Generative AI tool to help with their work.

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


### Goals

**Clarity & Focus:**

The goals are clear, actionable, and generally measurable (accuracy, readability, pain points). However, specific success metrics (e.g., target accuracy rates, satisfaction thresholds) would make them more robust.


`1.` **Increase the accuracy of the answers provided by the VA chatbot.**

`2.` **Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov.**

`3.` **Improve the design by finding pain points in the current proof of concept designs to accomidate any/all level of users.** 
  
### Outcome

---

**By finding the pain points and increasing the accuracy of the answers we can improve the design of the chatbot which will give Veterans confidence in using the VA chatbot. Ultimately, with confidence that they are getting correct answers, the error rate will decline and total calls to VA call centers will decline as well. The plan to use findings to iterate on chatbot design is appropriate. Additional outcomes to consider: defining accessibility benchmarks, strategies for ongoing improvement, and recommendations for scaling beyond the POC phase.** 


---

### Research questions

**`1.`Is the chatbot design easy to use and understand for users of all technical ability?**

**`2.`Are users able to find answers to simple questions without authentication?**

**`3.`Are the disclaimers and warnings timely and useful?**

**`4.`Are users getting frustrated if questions are not properly answered?**

**`5.`Are the lenghts of answers appropriate?**

**`6.`How can we improve design?**

**`7.`Are interactions quick and get the user to their intended destination in a timely manner?**

**`8.`How does the chatbot impact Veterans’ perceptions of VA digital services?**

**`9.`What prevents users from trying or returning to the chatbot?**

**`10.`Are there differences in experience based on device type or internet access?**


### Hypotheses
 

---

**By utilizing LLM and/or AI in the 3 proof of concept designs, we will be able to more accurately answer Veterans' questions and help them complete tasks on VA.gov by interacting with users and responding to feedback. Also, the answers will be clear, trustworty and channel agnostic.** 


---
  
## Methodology  🛠️

**For round 2 of research we will be conducting two differnt methods of research.  The first will be moderated usability testing using outside Veterans from Perigean.  The second method will be to recruit internal Veterans from within VA by using a survey to select the users. Those users will then be give 2 weeks to test the chatbot and use it as any user would, after which we will hold qualitative focus group feedback sessions in small 5-7 person groups.**




### Location

- [X] **Remote**
  
   Microsoft Teams meetings.

- [ ] **In-person**

</details>


## Research materials 📔

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/ConversationGuide(PerigeanVets).md)
- [Link to prototype](https://dev.va.gov/contact-us/virtual-agent/)

**For unmoderated testing & focus group:**
- [Link to survey](https://docs.google.com/forms/d/1WxwFTuKoo1xqiVTMmrRkvAPCeGJLCryMMQXoFgcqW_w/edit)
- [Link to email with instructions](url goes here)
- [Link to prototype](https://dev.va.gov/contact-us/virtual-agent/)
- [Link to conversation guide](url goes here)



**Past User Research Data:**

It is worth noting that there was a [ample research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research) for the virtual-agent product and the team includes developers from this product team. The finding from the first round of moderated user testing that was completed in July & August of 2025 can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-07-Chatbot%20User%20Testing/ResearchFindings.md). All of this user research and feedback has been applied to proof of concept version of the chatbot that users will be using for this round of testing.

	
## Recruitment 🎯	
For the first portion of this testing, we will be using users outside of the VA that are facilitated by Perigean.  

For the second portion of this testing we will be targeting Veterans within the VA by using this [survey](https://docs.google.com/forms/d/1WxwFTuKoo1xqiVTMmrRkvAPCeGJLCryMMQXoFgcqW_w/edit).

### Recruitment approach
For the first portion of this testing we are targeting Veterans outside of the VA who fall within the scope of the underserved groups.  We strive to reach those Veterans from diverse ethnic backgrounds, those with disabilities, those using assistive technologies, those with other than honorable discharge, those born outside of the United States, those with limited technical experience or aptitude and those from within the LGBTQI+ coummunity.

For the second portion of this testing we are looking to gather feedback from those within the VA organization.  As such, we are looking to get a fairly even dispursement of Veterans from OCTO, VES, VEO, VRM and the Unified Communications Team.  In addition, we would also like to find those Veterans that meet the above criteria for portion one listed above.

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**



- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria.
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/pre-mhv-prototype/generative-research-study-1/2020-12.research-plan1.md)



- `Veterans:` **[15]**
- `Caregivers:` **[3]**
- `Dependents:` **[2]**
- `Total:` **[20]**
- `Ideal completed sessions:` **[18]**
- `Minimum completed sessions:` **[10]**

### Primary criteria (must-haves)

- `At least 3 of 20 people must be women`
- `At least 4 of 20 people must identify as Black or African American`
- `At least 4 of 20 people must identify as Hispanic/Latina/Latinx`
- `At least 3 of 20 people must identify as Asian`
- `At least 1 of 20 people must identify as Native, American Indian or Alaska Native`
- `At least 1 of 20 people must identify as Native Hawaiian or Pacific Islander`
- `At least 8 of 20 people must identify as having a cognitive disability`
- `At least 10 of 20 people must be over the age of 55`

#### Secondary criteria (nice-to-haves)

- `At least 3 of 20 Veterans have been out of service for less than 1 year`
- `At least 5 of 20 Veterans have a yearly household income of $49,000 or less`
- `At least 4 of 20 people must live in rural areas`
- `At least 3 of 20 people must have no degree`
- `At least 1 of 20 people must be an expatriate`
- `At least 3 of 20 people must have been discharged with a designation other than honorable`
- `At least 2 of 20 people must identify as being born outside of the US`
- `At least 3 of 20 people must identify as gay, lesbian or bisexual`
- `At least 2 of 20 people must identify as transgender`
- `At least 2 of 20 people must identify as nonbinary, gender fluid, gender queer or two spirit`
- `At least 2 of 20 people must use assistive technology to help them complete the user study`

## Timeline 🗓️
Ideally we would like to begin the usability testing the week of October 27 for the first portion of the research that uses Veterans sourced by Parigean.  With the current government shutdown, however, the second portion of the research may be delayed due to VA employees on furlough. 

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[10/27 02:00 PM CST]**

### Prepare
There is an active version deployed to the dev environment currently.  However, the team may conduct some bug bashing next week to further refine and improve the application. 

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **[Enter name]**
- `Date and time of pilot session:` **[Enter time]** 

### Research sessions
- `Planned dates of research:` **[Enter dates 10/27-11/07]**

### Length of sessions
- `Session length: **[45-60 minutes]**
  
- `Buffer time between sessions: **[60 minutes]**
  
- `Maximum Sessions per day: **[3 sessions per day]**

### Availability

- `[10/27, Monday, 12:00 PM-6:00 PM] EST`
- `[10/28, Tuesday, 12:00 PM-6:00 PM] EST`
- `[10/29, Wednesday, 2:00 PM-6:00 PM] EST`
- `[10/30, Thursday, 12:00 PM-3:00 PM] EST`
- `[10/31, Friday, 10:00 AM-2:00 PM] EST`
- `[11/03, Monday, 12:00 PM-6:00 PM] EST`
- `[11/05, Wednesday, 12:00 PM-6:00 PM] EST`
- `[11/06, Thursday, 12:00 PM-6:00 PM] EST`
- `[11/07, Friday, 10:00 AM-1:00 PM] EST`
- `[11/07, Friday, 3:30 PM-6:00 PM] EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- Moderator: **Lucas Wright**	lucas.wright@va.gov and/or lucas.wright@oddball.io
- Research guide writing and task development (usually but not always same as moderator): **Lucas Wright**		
- Participant recruiting & screening:	**Lucas Wright**	
- Project point of contact: **Lucas Wright, Ann-Marie Raposo, Selia Straus**		

- `Note-takers:` **will vary by team member per session**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **Luciana Morais (PO)**
- **Michelle Dooley (PO)**
- **Anita DeWitt**
- **Adam Whitlock**
- **Ann-Marie Raposo**
- **Brandon Marrone**
- **Nida Qamar**
- **Samreen Zarroug**
- **Satish Srinivasan**
- **Selia Straus**
- **Elliot Mackinnon**
- **Matthew Kerns**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
