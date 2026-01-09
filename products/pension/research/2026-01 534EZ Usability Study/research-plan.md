---
# Research Plan Metadata
title: "Research Plan for Bio-Huntridgelabs, VA Form 21P-534EZ (Application for DIC, Survivors Pension, and/or Accrued Benefits), Jan 2026"
date: 2026-01-07
last_updated: 2026-01-07
team:  "Bio-Huntridgelabs"
product: "VA Form 21P-534EZ"
product_area: "authenticated/unauthenticated"

# Background Context
background: 
  problem_statement:  "The current process for surviving spouses and children to apply for Dependency and Indemnity Compensation (DIC), Survivors Pension, and accrued benefits using VA Form 21P-534EZ requires the manual completion and mailing of paper forms. Our objective is to modernize this experience by moving the form online."
  product_location: "Available under Family and caregiver benefits on VA.gov"
  user_familiarity: "This is for surviving spouses and children of a Veteran. The online application offers a modernized experience that builds upon the familiar foundation of the traditional PDF form."
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/product-outline-21-534EZ. md"

# Research Design
methodology:  "usability testing"
research_format: 
  location: remote
  in_person_details: 
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated:  true
  
# Research Goals & Questions
research_goals:
  - goal_1: "The questions are clear and easy enough for surviving spouses and children to understand and confidently answer."
  - goal_2: "The flow aligns with the mental model and expected information-gathering process of surviving family members."
  - goal_3: "Surviving spouses and children can understand which supporting documents they should upload and how to successfully upload them for their claim to be processed faster."

research_questions:
  - "What feedback do family members have on individual questions?"
  - "What feedback do family members have on the entire form flow? (Total number of questions, order questions appear, the amount of information needed)"
  - "Do family members understand what supporting documents are needed for their specific claim scenario?"

hypotheses:
  - "Surviving spouses and children will find the questions to be clear and easy to understand."
  - "Family members won't find the number and content of the questions to be overly burdensome."
  - "Family members will understand what supporting documents are needed to support their claim."

expected_outcomes:  "Learnings will refine questions and improve other pain points in the form so that family members can provide the data needed to efficiently and effectively process claims."

# Recruitment & Participants
recruitment: 
  recruiting_partner: "Perigean"
  approach: "lean maximum variation"
  
  primary_criteria:
    - "At least 5 that have applied for Dependency Indemnity Compensation (DIC), Survivors Pension, or accrued benefits"
    - "At least 5 that have NOT applied for Dependency Indemnity Compensation (DIC), Survivors Pension, or accrued benefits"
    - "At least 5 people with a cognitive disability (e.g., TBI)"
    - "At least 5 have a smartphone to use for the session"
    - "ALL assistive tech users must use a screen reader or screen magnifier every time they access the Internet"
    
  secondary_criteria:
    - "At least 5 people who are age 55 or older"
    - "At least 2 people who are LGBTQ+"
    - "At least 2 people of color"
    - "At least 2 women"
    - "At least 3 people who don't have any degree or vocational training after high school"
    - "At least 3 people who live in a rural or remote area"
    
  screener_questions:
    - question:  "Have you ever applied for Dependency Indemnity Compensation (DIC), Survivors Pension, or accrued benefits?"
      qualifying_response: "Mix of Yes and No"
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions?"
      qualifying_response: "Yes for 5 participants"
    - question: "Do you use a screen reader or screen magnifier every time you use the Internet?"
      qualifying_response: "Yes for assistive tech sessions"
      
participants:
  veterans:  0
  caregivers:  0
  dependents: 15
  total_recruited: 15
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2026-01-14 to 2026-01-22"
  pilot_participant: "TBD"
  research_dates: "2026-01-22 to 2026-01-30"
  research_review_submission: "2026-01-13"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Key Result 1: Improve satisfaction with our web and mobile products by 5 points"
      - "Key Result 2: We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction"
      - "Key Result 3: 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error"
      
veteran_journey_phases:
  - "Dying"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - ""
    
tags:
  - "pension"
  - "survivors-benefits"
  - "21P-534EZ"
  - "usability-testing"
  - "dependents"
  - "family-benefits"
---

	 # Research Plan for Bio-Huntridgelabs, VA Form 21P-534EZ (Application for DIC, Survivors Pension, and/or Accrued Benefits), Jan 2026

## Background 🏗️
	
`What problem is your product trying to solve?`

The current process for surviving spouses and children to apply for Dependency and Indemnity Compensation (DIC), Survivors Pension, and accrued benefits using VA Form 21P-534EZ requires the manual submission of the form and numerous physical supporting documents, such as death and marriage certificates. VA staff must then manually review and process these submissions. This intensive manual labor results in long wait times for benefit delivery, creating an added burden for grieving families during a difficult period.

Our objective is to modernize this experience by moving the form online. This digital transformation will allow surviving family members to complete the application and upload necessary documents electronically, eliminating the need to mail physical papers. This will lead to faster application processing times that will provide applicants with real-time status updates and clear guidance on next steps.
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

The form is available under “Family and caregiver benefits” and offers flexible submission; users can complete it unauthenticated or log in to use an authenticated experience.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

This is for surviving spouses and children of a Veteran. The online application offers a modernized experience that builds upon the familiar foundation of the traditional PDF form.

`Product Brief`

[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/product-outline-21-534EZ.md)

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

- `Dying`

## Research Goals 🥅	

### Goals

`1.` The questions are clear and easy enough for surviving spouses and children to understand and confidently answer.

`2.` The flow aligns with the mental model and expected information-gathering process of surviving family members. 

`3.` Surviving spouses and children can understand which supporting documents they should upload and how to successfully upload them for their claim to be processed faster.
  
### Outcome

Learnings will refine questions and improve other pain points in the form so that family members can provide the data needed to efficiently and effectively process claims. 

### Research questions

`1.` What feedback do family members have on individual questions?

`2.` What feedback do family members have on the entire form flow? (Total number of questions, order questions appear, the amount of information needed)

`3.` Do family members understand what supporting documents are needed for their specific claim scenario?

### Hypotheses

`1.` Surviving spouses and children will find the questions to be clear and easy to understand.

`2.` Family members won't find the number and content of the questions to be overly burdensome.

`3.` Family members will understand what supporting documents are needed to support their claim. 

  
## Methodology  🛠️

We will conduct remote moderated usability testing to observe research participants using a staging prototype on desktop and mobile devices. 

### Location

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/pension/research/2026-01%20534EZ%20Usability%20Study/conversation-guide.md)
- [Link to prototype](https://www.va.gov/find-forms/about-form-21p-534ez/)
- Link to research notetaking Mural (TBD)
	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment criteria

Ask Perigean to recruit 15 surviving spouses or children of a Veteran who meet the below criteria in order to get 10 completed sessions. This will include 3 assistive tech sessions.

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **0**
- `Caregivers:` **0**
- `Dependents:` **15** (surviving spouses and children)
- `Total:` **15**
- `Ideal completed sessions:` **10**

### Primary criteria (must-haves)

- `At least 5 that have applied for Dependency Indemnity Compensation (DIC), Survivors Pension, or accrued benefits`
- `At least 5 that have NOT applied for Dependency Indemnity Compensation (DIC), Survivors Pension, or accrued benefits`
- `At least 4 are surviving spouses of a Veteran`
- `At least 4 are surviving children of a Veteran`
- `At least 5 people with a cognitive disability (e.g., TBI)`
- `At least 5 have a smartphone to use for the session and...`
    - `Have Zoom downloaded to their smartphone prior to the session and know how to share their screen`
    - `Be willing to share over Zoom a web browser window on their smartphone`
    - `Have a working microphone on their smartphone`

### Primary criteria for Assistive tech (AT) sessions

- `ALL must use a screen reader or screen magnifier every time they access the Internet`
- `ALL must have a computer or smartphone and are willing to use it for the session`

#### Secondary criteria (nice-to-haves)

- `At least 5 people who are age 55 or older`
- `At least 2 people who are LGBTQ+`
- `At least 5 people of color`
- `At least 6 women`
- `At least 3 people who don't have any degree or vocational training after high school`
- `At least 3 people who live in a rural or remote area`

### Screening questions

1. Have you ever applied for Dependency Indemnity Compensation (DIC), Survivors Pension, or accrued benefits?
    - No (RECRUIT 5)
    - Yes (RECRUIT 5)
2. Which of the following best describes your relationship to the deceased Veteran?
    - Surviving spouse (RECRUIT 4)
    - Adult child who is 18-23 years old and still in school (RECRUIT 4 adult children of either group)
    - Adult child who developed a permanent disability before age 18 (RECRUIT 4 adult children of either group)
    - Other (DISQUALIFY)
3. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
    - No
    - Yes (RECRUIT 5 and RECORD as having a cognitive disability)
4. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve.
    - No
    - Yes (RECRUIT 2)
5. Have you downloaded the Zoom app to your smartphone, do you know how to screen share, and do you have a working microphone on your phone?
    - No
    - Yes (RECRUIT 5)
6. What time zone are you located in? (RECORD)

### Screening questions for AT

1. Do you use a screen reader or screen magnifier every time you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.
    - No (DISQUALIFY)
    - Yes (ask next question)
2. Are you willing to join the Zoom session using your screen reader or screen magnifier
    - No (DISQUALIFY)
    - Yes (ask next question)
3. How long have you been using this screen reader or screen magnifier?
    - Less than 2 years (DISQUALIFY)
    - 2-5 years (ask next question)
    - More than 5 years (ask next question)
4. What is the name of the screen reader or screen magnifier technology that you will use during the Zoom session? (open text field--RECORD what they say AND ask rest of questions)
    - DISQUALIFY if they say something non-digital like "magnifying glass"
    - Acceptable responses include "ZoomText", "increase font size", "zoom in the browser, "JAWS", "VoiceOver", "Talkback"
    - If unsure whether someone qualifies, please ask Jordan
5. For this meeting, you'll need a device with Zoom installed that can screen share and has a working microphone. What kind of device will you be using? (RECORD)
    - Smartphone
    - Computer
    - Tablet

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:`
- `01/12, Anytime`
- `01/13, 12-1 or after 3:30 ET`
- `01/14, 1-3:30 ET`

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

**Pilot 1**
- `Pilot participant name:` TBD
- `Date and time of pilot session:` 01/14-01/22

**Pilot 2 (with AT user)**
- `Pilot participant name:` TBD
- `Date and time of pilot session:` 01/14-01/22

### Research sessions
- `Planned dates of research:` 01/22-01/30 (7 business days)

### Length of sessions
- `Session length:` 1 hour
- `Buffer time between sessions:` 30 minutes
- `Maximum Sessions per day:` 3

### Length of AT sessions
- `Session length:` 1.5 hours
- `Buffer time between sessions:` 30 minutes
- `Maximum Sessions per day:` 2

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

- `01/22, Day, 10:00 AM-4:00 PM EST`
- `01/23, Day, 10:00 AM-4:00 PM EST`
- `01/26, Day, 10:00 AM-4:00 PM EST`
- `01/27, Day, 10:00 AM-4:00 PM EST`
- `01/28, Day, 10:00 AM-4:00 PM EST`
- `01/29, Day, 10:00 AM-4:00 PM EST`
- `01/30, Day, 10:00 AM-4:00 PM EST`
- `02/02, Day, 10:00 AM-4:00 PM EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` Sarah Baron and Jordan Wood
- `Research guide writing and task development (usually but not always same as moderator):` Jordan Wood	
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Jordan Wood		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` Maggie Wachs	
- `Note-takers:` Perigean	
- `Observers:` Will need to sign up so we can limit the number of observers per session, and the moderator will add them to the invites that they receive from Perigean.

## Approvals ✅
- `Reviewed by Eric Henne, Lead Program Analyst, Pension and Fiduciary Service on 01-07-2026`
- `Reviewed by Christopher Scott Bell, Program Analyst, Office of Survivors Assistance on 01-07-2026`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
