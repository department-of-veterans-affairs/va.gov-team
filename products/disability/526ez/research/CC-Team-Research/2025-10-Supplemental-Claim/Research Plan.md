---
# Research Plan Metadata
title: "Research plan: 2025-10 Supplemental claims design direction"
date: 2025-11-07
last_updated: 2025-11-07
team: "Disability Benefits Crew - Condition Team"
product: "Online Form 526 (Disability Claim) - Conditions Section, Supplemental Claims Flow"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans currently cannot file supplemental claims (for previously denied conditions or contestable issues) directly within the online Form 526 flow. The challenge is to seamlessly incorporate supplemental claims filing into the existing process, improving equity, clarity, and usability for Veterans without negatively impacting the standard disability claim experience."
  product_location: "VA.gov, authenticated disability claim form (Form 526 online)"
  user_familiarity: "Iteration of an existing product for a new claim type (supplemental claims)"
  product_brief_url: "https://github.com/department-of-veterans-affairs/va.gov-team/issues/115464"

# Research Design
methodology: "Semi-structured, exploratory interviews and task-based usability testing comparing two prototypes"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Identify which design direction best supports Veterans in filing supplemental claims within Form 526"
  - goal_2: "Understand Veterans’ mental models and language around disabilities, claims, and appeals for optimal flow architecture"
  - goal_3: "Gather feedback on Platform-recommended changes and differentiation of secondary conditions in the flow"

research_questions:
  - "Is one design easier to navigate and understand than the others?"
  - "How well does each design communicate eligibility for supplemental claims?"
  - "How easy is it for users to add a supplemental condition to their claim?"
  - "Are there any usability problems introduced by the new design that might affect Veterans’ ability to file a new or increase claim?"
  - "How do Veterans react to seeing a list of conditions that have been denied?"
  - "Do Veterans experience form fatigue or get overwhelmed by the number of options?"
  - "Does the design create confusion, especially in areas which could negatively impact the outcome of their claim??"
  - "Which design is perceived by Veterans as easier to use or more supportive?"
  - "Does the prototype help Veterans understand the basic evidentiary requirements for supplemental claims?"
  - "For “CFI distinction,” do Veterans understand the difference between filing a claim for increase versus a supplemental claim?"
  - "How are conditions and their various statuses (particularly in relation to the VA) perceived?"
  - "How do Veterans think about conditions that have been granted v. those that have been denied? What about conditions that were granted at 0%?"
  - "How do Veterans think about their conditions in terms of causality and relation to military service (e.g. service connection, presumption)? Do Veterans think of secondary conditions differently from conditions that are directly service-connected or aggravated?"
  - "Is there a perceived order to which order claims should be filed, and if yes, what is that order and what are its origins?"
  - "How do Veterans think about challenging a VA decision? What words do they use?"
  - "What is the effect of clustering the conditions list with subheads?"
  - "What are the advantages and disadvantages of using tiles instead of radio buttons on the “Add a condition” screen?"
  - "Are Veterans familiar with the concept of a secondary condition?"
  - "Are Veterans familiar with the term “secondary condition”?"
  - "How would a Veteran add a secondary condition to their claim?"

expected_outcomes: "Findings will guide selection of the primary design direction, optimize Veterans' experience filing supplemental claims, clarify content and language, and identify risks impacting usability or equity for diverse groups."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation sampling"
  
  primary_criteria:
    - "Have filed a disability claim within the last 15 years AND have never appealed a disability decision (recruit 5)"
    - "Have filed a disability claim within the last 15 years AND have previously filed an appeal to a disability decision (recruit 3)"
    - "Have never filed a disability claim (recruit 2)"
    - "Have experience helping other Veterans file disability claims (recruit 3)"

  primary_demographic_criteria:
    - Education_level:
      - At least 6 with education level of Elementary/Intermediate/GED/High School
      - No more than 3 with Masters/Professional/Doctoral
    - Gender:
      - At least 3 with gender other than Male
    - Race:
      - At least 2 with Asian, Native, American Indian or Alaska Native
      - At least 5 with Black or African American, Hispanic, Latino, or Spanish origin, or Biracial
    - Age:
      - At least 5 who are 34 or younger
      - At least 4 who are 55+

  secondary_criteria:
    - "At least 2 who identify as Gay, lesbian, or bisexual, Transgender, Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman"
    - "At least 2 who have discharge other than honorable"
    
  screener_questions:
    - question: "Have you filed a disability claim with VA in the last 15 years?"
      qualifying_response: "Yes/No"
    - question: "Have you ever appealed a decision the VA made on your disability claim?"
      qualifying_response: "Yes/No"
    - question: "Do you help other Veterans with their disability claims (volunteer/professional)?"
      qualifying_response: "Yes/No"
    - question: "If yes, what organization(s) do you work through?"
      qualifying_response: "Free text"
      
participants:
  veterans: 13
  caregivers: 0
  dependents: 0
  total_recruited: 13
  completed_sessions_goal: 9
  
# Timeline & Sessions
timeline:
  pilot_date: "TBD"
  pilot_participant: "TBD"
  research_dates: "2025-11-24 to 2025-12-10"
  research_review_submission: "TBD"
  
session_details:
  duration_minutes: 75
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits."
    key_results: 
      - "Improve satisfaction with web and mobile products by 5 points."

veteran_journey_phases:
  - "Getting Out"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "https://github.com/department-of-veterans-affairs/va.gov-team/issues/115464"
    
tags:
  - "BNFT: Disability"
  - "DSC: Form - Radio Button"
  - "DSC: Experimental"
  - "DSP: Ask users for dates"
  - "DSP: Ask users for multiple responses"
  - "RESRCH: Concept Testing"
  - "RESRCH: Generative (Discovery)"
  - "RESRCH: Interviews"
  - "RESRCH: Usability Testing"
  - "Veteran Journeys: Taking Care Of Themselves"
---
------------------------------------------------------------------------------------------------------------------------------------------------------
	# Research Plan for Disability Benefits Crew - Condition Team, Supplemental Claim design directions, October 2025

---

# Research plan: 2025-10 Supplemental claims design direction

# Background 🏗️

The current online Form 526 only allows Veterans to claim a new condition or request an increase for a previously rated condition. Veterans who wish to file a Supplemental Claim — a contestable issue for a previously denied or previously rated condition, which requires new and relevant evidence — must currently use the separate Supplemental Claim form (VA Form 0995).

The challenge is to seamlessly incorporate the ability to claim contestable (supplemental) issues directly into the Form 526 online flow, allowing Veterans to claim supplemental conditions, or a mix of new, increase, and supplemental conditions, all within a single application. This enhanced filing approach supports VA’s “no wrong door” policy, ensuring a Veteran is connected to necessary services regardless of how they seek help. The design must accommodate this new condition category without disrupting the already successful mental model for "New" and "Increase" conditions.

This work will involve iterating on the existing 526 online form, and it will affect authenticated users.

Link to [Product overview](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115464)

## Design directions

The Conditions team has sketched out several high-level directions for this new feature and have narrowed down to three we want to test.

* **“All the things”:** All a user’s conditions, including those that have been previously denied, are available to select on the start screen.  
  | <img width="222" height="551" alt="image" src="https://github.com/user-attachments/assets/ed5136cb-0dad-420f-ac10-1c6e72b33860" /> |
   |----|  
    
* **“Denials on second screen”:** Denied conditions are on a second screen after the start screen.  
  | <img width="485" height="510" alt="image" src="https://github.com/user-attachments/assets/2c14e905-2c5e-4eff-8672-0ec4d737a0fd" /> |
   |----|  
    
* **“CFI distinction”:** (This variation will be added to one of the primary directions above) If the user chooses a rated disability, a follow-up screen asks the user to distinguish between a supplemental claim and a claim for increase.  
  | <img width="491" height="325" alt="image" src="https://github.com/user-attachments/assets/8ed7a465-967b-4b3b-a8e8-c6de5c1cd8af" /> |
   |----|

### [**OCTO-DE Priorities**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md)

Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

- **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

### [**Veteran Journey**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

- Getting Out  
- Taking Care of Myself

# Research Goals 🥅

## Primary goal

* Determine which of the design directions best meets user needs when filing a supplemental claim within the online 526, without negatively impacting the user experience of filing a standard disability claim.

## Secondary goals

* Explore Veterans’ mental models and language around disabilities, claims, and appeals to inform how we approach organizing the conditions flow.  
    
  * Rationale: This design effort touches on topics that are complicated and nuanced, particularly around types of claims. VA has its own ways of differentiating types of claims, conditions, and statuses, but we don’t know if these mirror how Veterans think of their own situations. This exploration will be especially important for more complicated situations, such as differentiating claims for increase from supplemental claims on rated conditions.


* Explore some of the recommended changes suggested by Platform in our Design Intent meeting. These include:  
    
  * Clustering the conditions list with subheaders  
  * Using tiles for radio button options


* (If time allows) Explore differentiating secondary conditions on the main ‘Add a condition’ screen. (This is follow-on work from our last round of user research.)

## Outcome

This research will:

* Inform which design direction to pursue further. After selecting a direction, we’ll develop detailed designs and write content, then further test and iterate on the designs.  
* Inform the organization of content, user flows, and language choices within the Conditions section of the online 526\. Specifically, it will help us answer questions such as:  
  * How to group and refer to conditions the VA denied versus conditions the VA granted  
  * For rated disabilities, how to differentiate between asking for an increase versus asking for a supplemental review  
  * Whether we should treat secondary conditions as a separate category from other types of conditions  
  * Can we use the term “secondary”? If not, what might we say instead?  
  * How to talk about appealing a VA decision (e.g. do we say “appeal,” “disagree with,” “request a review,” or some other term?)  
  * Can we use the term “service-connected”? If not, what might we say instead?  
* Provide feedback on changes recommended by the Platform team.

---

## Research questions

**Goal: Determine which of the design directions best meets user needs when filing a supplemental claim within the online 526, without negatively impacting the user experience of filing a standard disability claim.**

* Is one design easier to navigate and understand than the others?  
* How well does each design communicate to users that they can create a supplemental claim for a condition within the 526 flow?  
* How easy is it for users to add a supplemental condition to their claim?  
* Are there any usability problems introduced by the new design that might affect Veterans’ ability to file a new or increase claim?  
* How do Veterans react to seeing a list of conditions that have been denied?  
* Do Veterans experience form fatigue or get overwhelmed by the number of options?  
* Does the design create confusion, especially in areas which could negatively impact the outcome of their claim?  
* Which design is perceived by Veterans as easier to use or more supportive?  
* Does the prototype help Veterans understand the basic evidentiary requirements for supplemental claims?  
* For “CFI distinction,” do Veterans understand the difference between filing a claim for increase versus a supplemental claim?

**Goal: Explore Veterans’ mental models and language around disabilities, claims, and appeals to inform how we approach organizing the conditions flow.**

* How are conditions and their various statuses (particularly in relation to the VA) perceived?  
* How do Veterans think about conditions that have been granted v. those that have been denied?  
  * What about conditions that were granted at 0%?  
* How do Veterans think about their conditions in terms of causality and relation to military service (e.g. service connection, presumption)  
  * Do Veterans think of secondary conditions differently from conditions that are directly service-connected or aggravated?  
* Is there a perceived order to which order claims should be filed, and if yes, what is that order and what are its origins?  
* How do Veterans think about challenging a VA decision? What words do they use?

**Goal: Explore some of the recommended changes suggested by Platform in our Design Intent meeting.**

* What is the effect of clustering the conditions list with subheads?  
* What are the advantages and disadvantages of using tiles instead of radio buttons on the “Add a condition” screen?

**Goal: Explore differentiating secondary conditions on the main ‘Add a condition’ screen.**

* Are Veterans familiar with the concept of a secondary condition?  
* Are Veterans familiar with the term “secondary condition”?  
* How would a Veteran add a secondary condition to their claim?

---

# Methodology  🛠️

## Testing structure

Our methodology will be a combination of semi-structured, exploratory interviews and task-based usability testing comparing two different prototypes. In these sessions, we will ask Veterans to share their screens and think aloud as they fill out a section of the online 526 application. The scenarios will focus on Veterans adding several different types of conditions to a disability claim. We’ll show each Veteran both prototypes and swap the order between sessions.

The sessions will last 75 minutes. Structure of the sessions:

* 5 minutes for introduction and housekeeping  
* 10-15 minutes for open discussion of disabilities, claims, and appeals  
* 10-15 minutes of scenario-based usability testing for the first prototype  
* 10-15 minutes of scenario-based usability testing for the second prototype  
* 5-10 minutes for comparing prototypes  
* 5-10 minutes for reflection questions and session wrap-up

## Data collection

* Record scenario completion rates  
* Record post-task satisfaction ratings for each prototype  
* Capture qualitative feedback through think-aloud protocol  
* Record observations of user behavior that may reveal points of clarity or confusion, confidence or hesitation, facility or frustration  
* Collect stated preferences between competing prototypes

## Location and device

Sessions will be conducted remotely, over Zoom. Participants can join from a computer, tablet or smartphone.

## Research materials 📔

- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/CC-Team-Research/2025-10-Supplemental-Claim/Conversation%20guide%20-%202025-10-Supplemental-Claim.md)  
- [Link to prototype](https://www.figma.com/proto/P6IUm8gN00H3Yi1XzN80fj/-526ez--Condition-information-entry?page-id=6174%3A18589&node-id=6524-47192&viewport=653%2C-7741%2C0.75&t=UWlAy6DgYnnYEKOL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6524%3A47192&show-proto-sidebar=1)

# Recruitment 🎯

**Recruit 13 participants for a completed sessions goal of 9.**

We’ll recruit Veterans across the following categories:

* Have previously filed a disability claim of any type  
* Have previously filed an appeal to a disability decision  
* Have experience helping other Veterans file disability claims (2) (haven’t necessarily filed a claim themselves)

In terms of Veteran backgrounds, we’ll try for a balanced group across demographics. Because we’ll use Figma wireframes for testing, we will not recruit for AT users. We’ll aim to over-recruit for groups that were under-represented in our most recent study (See “2025-06 New/Increase Conditions” tab in the [VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing)). 

## Recruitment criteria

### Primary criteria (must-haves)

| Cohorts | Recruit \# |
| :---- | :---- |
| 1\) Have filed a disability claim within the last 15 years AND have never appealed a disability decision | 5 |
| 2\) Have filed a disability claim within the last 15 years AND have previously filed an appeal to a disability decision | 3 |
| 3\) Have never filed a disability claim | 2 |
| 4\) Have experience helping other Veterans file disability claims (2) | 3 |
| **Total** | **13** |

#### 

#### Primary demographic criteria (across all cohorts)

Education level:

- At least 5 with education level of Elementary/Intermediate/GED/High School  
- No more than 3 with Masters/Professional/Doctoral

Gender:

- At least 3 with gender other than Male

Race:

- At least 2 with Asian, Native, American Indian or Alaska Native  
- At least 4 with Black or African American, Hispanic, Latino, or Spanish origin, or Biracial

Age:

- At least 4 who are 34 or younger  
- At least 4 who are 55+

AT user:
- no AT users

### Secondary criteria (nice-to-haves)

LGBTQ+:

- At least 2 who identify as Gay, lesbian, or bisexual, Transgender, Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman
  - _e.g. Do you identify as a member of the LGBTQ+ community? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve._
  - _Response options: yes or no. (Answering yes would qualify the participant.)_

Discharge:

- At least 2 who have discharge other than honorable
  - _e.g. What type of discharge did you receive from the military? We ask this question because we want to make sure the feedback we get from these sessions represents all the people we serve._
  - _Response options: Honorable discharge; Other type of discharge (such as General, Other than Honorable, BCD, or Dishonorable); Not sure or Decline to state. (Answering 'Other type of discharge' would qualify the participant.)_

### Screener questions for Cohorts

1. Have you filed a disability claim with the VA within the last 15 years? \[Yes/No\]  
2. Have you ever filed an appeal of a decision the VA made on your disability claim? \[Yes/No\]  
3. Do you help other Veterans with their disability claims, in either a volunteer or professional role? \[Yes/No\]  
4. If you answered Yes to Question 3, what organization(s) do you work through? \[Free text entry\]

#### Screener instructions for Perigean:
- Cohort 1 (Recruit 5\) \= Yes to Question 1 AND No to Question 2
- Cohort 2 (Recruit 4\) \= Yes to Question 1 AND Yes to Question 2
- Cohort 3 (Recruit 2\) \= No to Question 1 AND No to Question 2 AND No to Question 3\
- Cohort 4 (Recruit 3\) \= Yes to Question 4\. Validate response with Question 5 \-- We are looking for people who have an official or semi-official role advising Veterans on disability claims.

**Question for Perigean:** Do you need us to write screener questions for the other, more standard criteria?

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- Suggested dates and times: (ideally) Thurs., 11/13 (11:30a-3p est / 8:30a-12p pst; 4-5p est / 1-2p pst) or Fri., 11/14 (11a-1p est; 8a-10a pst)

### Prepare

>[!NOTE]
>Send pilot participant email in study Slack channel

* Pilot participant name: TBD  
* Date and time of pilot session: TBD

### Research sessions

* Planned dates of research: 11/24/2025 \- 12/10/2025

### Length of sessions

* Session length: 75 min  
* Buffer time between sessions: 30 min  
* Maximum Sessions per day: 3 per day

### Availability

Mon 11/24

- 11am \-3pm ET  
- 4pm \- 8pm ET

Tues 11/25

- 11am \- 6pm ET

Wed 11/26 (Day before thanksgiving)

- 11am \- 2pm ET

Mon 12/1

- 11am \- 2pm ET  
- 2:30pm \- 8pm ET

Tue 12/2

- 11am \- 2pm ET  
- 5pm \- 8pm ET

Wed 12/3

- 11am \- 1pm ET  
- 1:30pm \- 2:30pm ET  
- 4pm \- 6:30pm ET

Thu 12/4

- 10am \- 2pm ET  
- 3pm \- 8pm ET

Fri 12/5

- 11am \- 5pm ET

Mon 12/8

- 11am \-3pm ET  
- 4pm \- 6pm ET

Tues 12/9

- 10am \- 6pm ET

Wed 12/10

- 10am \- 1pm ET

## Team Roles  🕵️👩‍💻👩‍🔬

Please list the names of people in each role. In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- Moderator: Kim Ladin, Madeline Fritz  
- Research guide writing and task development (usually but not always same as moderator): Kim Ladin, Madeline Fritz  
- Participant recruiting & screening: Perigean
- Project point of contact: Kim Ladin, Madeline Fritz
- Accessibility specialist (for sessions where support for assistive technology may be needed): N/A  
- Note-takers: Kim Ladin, Madeline Fritz  
- Observers: We'll invite observers to specific sessions based on our observer sign-up sheet

## Approvals ✅

- `Reviewed by Carolyn Dew (filling in for Liz Lantz) on 11/6/2025`  
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`


