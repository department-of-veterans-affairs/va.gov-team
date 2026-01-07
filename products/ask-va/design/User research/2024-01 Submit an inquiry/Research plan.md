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

# Research plan for Ask VA: Submit an inquiry (Round 1)

Ask VA VA.gov Team

Last updated by @tygindraux: January 23, 2024

**Jump ahead to:**
- [Background](#background)
- [Research goals](#research-goals)
- [Methodology](#methodology)
- [Recruitment](#recruitment)
- [Timeline](#timeline)
- [Research sessions](#research-sessions)
- [Team roles](#team-roles)
- [Approved by](#approved-by)

## Background

Ask VA (AVA) is an online portal that allows Veterans, caregivers and others to submit questions to VA and receive a secure response. Currently, AVA resides within a stand-alone Microsoft portal that is inconsistent with VA design standards, is not mobile-friendly, and has accessibility issues. 

We need to move AVA to VA.gov. It should be mobile friendly, accessible and easy to submit an issue and receive updates and information that results in a final resolution. Ultimately, we want AVA to feel part of a cohesive and user-centered approach to support. This [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/products/ask-va-phase-1-product-outline.md) includes more details about the scope of Phase 1 of our work.

### OCTO priorities

This research supports the following OCTO FY24 priority:

* Better experiences: Our digital experiences are the best way to access VA health care and benefits.

### Veteran journey

Ask VA can support Veterans, their family members, and other submitters at many stages of the Veteran journey. They may use Ask VA when they’re separating up until aging.

## Research goals

The key goals of this study are to:

* Review the experience of a Veteran asking a question about their own benefits
* Review whether Veterans understand when they need to authenticate and the benefits of authentication
* Understand what Veterans expect to happen after they submit a question

### Outcome

This research will help us determine if and how we need to improve the design and content of our Phase 1 redesign. It will also inform our research objectives for Round 2.

### Research questions

Review the experience of a Veteran asking a question about their own benefits:
* Is the purpose of Ask VA clear?
* Is there information missing on any question, page or sequence of pages?
* Are there too many or too few fields per page?
* Is it clear why each question is being asked?
* Do users understand how to edit their answers on the review page?

Review whether Veterans understand when they need to authenticate and the benefits of authentication:
* Is it clear when you need to authenticate vs. when it’s optional?
* Are the other benefits of authenticating clear?

Understand what Veterans expect to happen after they submit a question:
* Is it clear what happens after you submit a question?
* Are there any surprises or outstanding questions after reading information on the submission page?

### Hypotheses

1. Some users will think authentication is required in order to ask any question.
2. Most Veterans will find the form fields are straightforward and intuitive to use.
3. Some users will be surprised at the amount of information they have to give in order to ask a question.
4. Some users will misinterpret the chapter numbers as the number of pages, and be surprised at the length of the form.
5. Some users will be confused about which information they can edit on the review page and which they cannot.
6. Most users will expect an estimate of how long it will take to receive a reply.

## Methodology

This will be a moderated usability study conducted remotely over Zoom. We will use a Figma prototype with limited interactivity.

We will test the following steps:
* Start page
* Chapter 1: Category and topic
* Chapter 2: Your question
* Chapter 3: Personal information
  * Only ‘My own benefits; I’m the Veteran’ branch
* Chapter 4: Review and submit
* Submission page

![Screenshot from Mural showing diagram of test journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/01-2024-Test-journey.png)

### Research materials

* [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2024%20Submit%20an%20inquiry/Conversation%20guide.md)
* [Mobile prototype](https://www.figma.com/proto/lzWlcHlV1eELY8yQdyqw2p/Ask-VA-Prototype-R1?type=design&node-id=458-26839&t=9OMFZtUo0fWacEp5-1&scaling=min-zoom&page-id=458%3A26803&starting-point-node-id=458%3A26839&mode=design)
* [Desktop prototype](https://www.figma.com/proto/lzWlcHlV1eELY8yQdyqw2p/Ask-VA-Prototype-R1?page-id=458%3A37863&type=design&node-id=458-37864&viewport=74%2C584%2C0.48&t=uyRpLCeij3dT4AAD-1&scaling=min-zoom&starting-point-node-id=458%3A37864&mode=design)
* [Mural: Planning](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1702577156510/63987723a59c971b96105858b484e9061622c235?wid=0-1703093103991)
* [Mural: Notes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696457775760/363d1ebbce7a3898f39aae72793877bfe9beed99?sender=u65f0a75fc7c68f2a5a2a9545)
	
## Recruitment	

### Recruitment approach

We will work with Perigean to recruit Veterans for this research.

**We request that Perigean shares a link or screenshot of the recruitment survey for this study, so we can review it before it goes out to participants.**

### Recruitment criteria

We will recruit 14 Veterans for a total of 8-10 completed sessions.

For more details about our criteria, refer to our [Recruitment ticket](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/456).

|# of participants|Criteria|
|:--|:--|
|Exactly 14|Are Veterans|
|Exactly 14|Have contacted VA online or over the phone in the past year|
|At least 7|Have a cognitive disability or consideration|
|At least 7|Have signed into VA.gov in the past year|
|Exactly 7|Are willing to join from a mobile device|
|Exactly 7|Are willing to join from a desktop device|
|At least 5|Are over 55 years old|
|At least 5|Identify as Black, Hispanic or Native|
|At least 2|Identify as a gender other than male|

### Screener questions

1. Do you have any dependents or other family members who use VA services?
   - Yes
   - No
2. Have you contacted the VA online or over the phone in the past year?
   - Yes
   - No
3. Have you signed in to VA.gov in the past year?
   - Yes
   - No
4. Are you able to join the Zoom session from a smartphone such as a Samsung Galaxy or iPhone? Any kind of smartphone will work as long as it connects to the internet.
   - Yes
   - No
5. Are you able to join the Zoom session from a desktop or laptop computer? Any kind of desktop or laptop will work as long as it connects to the internet.
   - Yes
   - No
6. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
   - Yes
   - No

## Timeline

|Date|Milestone|
|:--|:--|
|July 28, 2023|Design Intent|
|December 1, 2023|Midpoint Review|
|January 9, 2024|Prototype(s) ready|
|January 10, 2024|Research Review|
|January 18, 2024|Pilot sessions (2)|
|Jan 24 - Feb 5, 2024|Research sessions|
|Feb 6 - 19, 2024|Synthesis|
|Feb 20 - Mar 4, 2024|Share findings|

### Pilot sessions

**Pilot 1**
- Pilot participant email: Jeff Wallace (Tyler will add to pilot sessions herself)
- Date and time of pilot session: 12-1:30pm EST

**Pilot 2**
- Pilot participant email: Will York (Tyler will add to pilot sessions herself)
- Date and time of pilot session: 2-3:30pm EST

## Research sessions

- Length of sessions: 1 hour
- Buffer between sessions: 1 hour
- Maximum sessions per day: 4 sessions

### Availability

We will provide 28 time slots, with the aim to book 14 sessions.

**We’d also like to request that Perigean calls each participant to remind them about the session, in addition to emailing them. Please include the session time in each participant's respective time zone (from their address).**

|Date|Timeslots (EST)|
|:--|:--|
|Wednesday, Jan 24|12pm-1pm, 2-3pm, 4-5pm|
|Thursday, Jan 25|12pm-1pm, 2-3pm, 4-5pm|
|Friday, Jan 26|12pm-1pm, 2-3pm|
|Monday, Jan 29|12pm-1pm, 2-3pm, 4-5pm|
|Tuesday, Jan 30|11am-12pm, 1-2pm, 3-4pm, 5-6pm|
|Wednesday, Jan 31|12pm-1pm, 2-3pm, 4-5pm|
|Thursday, Feb 1|11am-12pm, 1-2pm, 3-4pm, 5-6pm|
|Friday, Feb 2|12pm-1pm, 2-3pm, 4-5pm|
|Monday, Feb 5|12pm-1pm, 2-3pm, 4-5pm|
	
## Team roles

* Moderators: Tyler Gindraux (tyler@bluetiger.digital)
* Research guide writing and task development: Tyler Gindraux
* Participant recruiting & screening: Perigean
* Project point of contact: Tyler Gindraux
* Participant(s) for pilot test: Jeff Wallace and Will York (Tyler will add to pilot sessions herself).
* Accessibility specialist: –
* Notetakers: Tyler will add notetakers to the invites herself.
* Observers: Tyler will add observers to the invites herself.

Sessions will be limited to no more than 5 people, including 1 participant, 1 moderator, 1 notetaker and up to 2 observers.

## Approved by:

- Becky Phung, PO on 12/20/2023 
- Shane Strassberg, VA Research Ops on 1/11/2024
