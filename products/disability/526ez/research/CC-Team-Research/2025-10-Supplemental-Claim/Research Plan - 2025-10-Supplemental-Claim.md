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
------------------------------------------------------------------------------------------------------------------------------------------------------
	# Research Plan for Disability Benefits Crew - Condition Team, 526EZ Conditions step, October 2025]

## Background 🏗️
The current online Form 526 only allows Veterans to claim a new condition or request an increase for a previously rated condition. Veterans who wish to file a Supplemental Claim — a contestable issue for a previously denied or previously rated condition, which requires new and relevant evidence — must currently use the separate Supplemental Claim form (VA Form 0995).

The challenge is to seamlessly incorporate the ability to claim contestable (supplemental) issues directly into the Form 526 online flow, allowing Veterans to claim supplemental conditions, or a mix of new, increase, and supplemental conditions, all within a single application. The design must accommodate this new condition category without disrupting the already successful mental model for "New" and "Increase" conditions.

This work will involve iterating on the existing 526 online form, and it will affect authenticated users.

Link to [Product overview](https://github.com/department-of-veterans-affairs/va.gov-team/issues/115464)

### Design directions

The Conditions team has sketched out several high-level directions for this new feature and have narrowed down to three we want to test.

1. **“All the things”:** All a user’s conditions, including those that have been previously denied, are available to select on the start screen.  
   | <img width="222" height="551" alt="image" src="https://github.com/user-attachments/assets/ed5136cb-0dad-420f-ac10-1c6e72b33860" /> |
   |----|


3. **“Denials on second screen”:** Denied conditions are on a second screen after the start screen.  
   | <img width="485" height="510" alt="image" src="https://github.com/user-attachments/assets/2c14e905-2c5e-4eff-8672-0ec4d737a0fd" /> |
   |----|

4. **“CFI distinction”:** (This variation will be added to one of the primary directions above) If the user chooses a rated disability, a follow-up screen asks the user to distinguish between a supplemental claim and a claim for increase.  
   | <img width="491" height="325" alt="image" src="https://github.com/user-attachments/assets/8ed7a465-967b-4b3b-a8e8-c6de5c1cd8af" /> |
   |----|

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Getting Out`
- `Taking Care of Myself`

</details>

## Research Goals 🥅	
### Primary goal

* Determine which of the design direction best meets user needs when filing a supplemental claim within the online 526, without negatively impacting the user experience of filing a standard disability claim. 

### Secondary goals

* Explore Veterans’ mental models and language around disabilities, claims, and appeals to inform how we approach organizing the conditions flow. *(secondary goal)*  
  * Rationale: This design effort touches on topics that are complicated and nuanced, particularly around types of claims. VA has its own ways of differentiating types of claims, conditions, and statuses, but we don’t know if these mirror how Veterans think of their own situations. This exploration will be especially important for more complicated situations, such as differentiating claims for increase from supplemental claims on rated conditions.

* Explore some of the recommended changes suggested by Platform in our Design Intent meeting. These include:  
  * Clustering the conditions list with subheaders  
  * Using tiles for radio button options

* Explore differentiating secondary conditions on the main ‘Add a condition’ screen. 
  
### Outcome

This research will:

* Inform which design direction to pursue further. After selecting a direction, we’ll develop detailed designs and write content, then further test and iterate on the designs.  
* Inform the organization of content, user flows, and language choices within the Conditions section of the online 526\. Specifically, it will help us answer questions such as:  
  * How to group and refer to conditions the VA denied v. conditions the VA granted  
  * For rated disabilities, how to differentiate between asking for an increase v. asking for a supplemental review  
  * Whether we should treat secondary conditions as a separate category from other types of conditions  
  * Can we use the term “secondary”? If not, what might we say instead?  
  * How to talk about appealing a VA decision (e.g. do we say “appeal,” “disagree with,” “request a review,” or some other term?)  
  * Can we use the term “service-connected”? If not, what might we say instead?  
* Provide feedback on changes recommended by the Platform team.
---

### Research questions

**Goal: Determine which of the design direction best meets user needs when filing a supplemental claim within the online 526, without negatively impacting the user experience of filing a standard disability claim.**

* Is one design easier to navigate and understand than the other?  
* How well does each design communicate to users that they can create a supplemental claim for a condition within the 526 flow?  
* How easy it is for users to add a supplemental condition to their claim?  
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
* What are the advantages and disadvantages of using tiles instead of radio buttons on the Add a condition screen?

**Goal: Explore differentiating secondary conditions on the main ‘Add a condition’ screen.** 

* Are Veterans familiar with the concept of a secondary condition?  
* Are Veterans familiar with the term “secondary condition”  
* How would a Veteran add a secondary condition to their claim?

---
  
## Methodology  🛠️
## **Testing structure**

Our methodology will be a combination of semi-structured, exploratory interviews and task-based usability testing comparing two different prototypes. In these sessions, we will ask Veterans to share their screens and think aloud as they fill out a section of the online 526 application. The scenarios will focus on Veterans adding several different types of conditions to a disability claim. We’ll show each Veteran both prototypes and swap the order between sessions.

The sessions will last 75 minutes. Structure of the sessions:

* 5 minutes for introduction and housekeeping.  
* 10-15 minutes for open discussion of disabilities, claims, and appeals.  
* 10-15 minutes of scenario-based usability testing for first prototype.  
* 10-15 minutes of scenario-based usability testing for second prototype.  
* 5-10 minutes for comparing prototypes.  
* 5-10 minutes for reflection questions and session wrap-up

## **Data collection**

* Record scenario completion rates  
* Record post-task satisfaction ratings for each prototype  
* Capture qualitative feedback through think-aloud protocol  
* Record observations of user behavior that may reveal points of clarity or confusion, confidence or hesitation, facility or frustration  
* Collect stated preferences between competing prototypes

## **Location and device**

Sessions will be conducted remotely, over Zoom. Participants can join from a computer, tablet or smartphone.

## Research materials 📔

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.

- \[Link to conversation guide\](url goes here)  
- \[Link to prototype\](url goes here)
	
## Recruitment 🎯	
We’ll recruit Veterans across the following categories:

* Have previously filed a disability claim of any type  
* Have previously filed an appeal to a disability decision  
* Have experience helping other Veterans file disability claims (2) (haven’t necessarily filed a claim themselves)

In terms of Veteran backgrounds, we’ll try for a balanced group across demographics. Because we’ll use wireframes for testing, we will not recruit for AT users. We’ll aim to over-recruit for groups that were under-represented in our most recent study (See “2025-06 New/Increase Conditions” tab in the [VA Recruitment Checker for Equality](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing)). This includes:

* Under age 55  
* Rural  
* High school only  
* Other than honorable discharge  
* Immigrant origin  
* Expat  
* Black or AA, Biracial, Asian, Native, American Indian or Alaska Native  
* LGBTQ+


### Recruitment criteria

#### Primary criteria (must-haves)

| Cohorts | Recruit \# |
| :---- | :---- |
| 1) Have filed a disability claim within the last 15 years AND have never appealed a disability decision | 5 |
| 2) Have filed a disability claim within the last 15 years AND have previously filed an appeal to a disability decision | 4 |
| 3) Have never filed a disability claim | 2 |
| 4) Have experience helping other Veterans file disability claims (2)  | 3 |
| **Total** | 14 |

##### Demographics across all cohorts

Education level:  
- At least 6 with education level of Elementary/Intermediate/GED/High School  
- No more than 3 with Masters/Professional/Doctoral  

Gender:  
- At least 3 with gender other than Male  

Race:  
- At least 2 with Asian, Native, American Indian or Alaska Native  
- At least 5 with Black or African American, Hispanic, Latino, or Spanish origin, or Biracial  

Age:  
- At least 5 who are 34 or younger  
- At least 4 who are 55+

#### Secondary criteria (nice-to-haves)

LGBTQ+:  
- At least 2 who identify as Gay, lesbian, or bisexual, Transgender, Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman  

Discharge:  
- At least 2 who have discharge other than honorable

#### Screener questions for Cohorts

1. Have you filed a disability claim with the VA within the last 15 years? [Yes/No] 
2. Have you ever filed an appeal of a decision the VA made on your disability claim? [Yes/No]   
3. Do you help other Veterans with their disability claims, in either a volunteer or professional role? [Yes/No]   
4. If you answered Yes to Question 3, what organization(s) do you work through? [Free text entry]

**Screener instructions for Perigean:**  
Cohort 1 (Recruit 5\) \= Yes to Question 1 AND No to Question 2  
Cohort 2 (Recruit 4\) \= Yes to Question 1 AND Yes to Question 2  
Cohort 3 (Recruit 2\) \= No to Question 1 AND No to Question 2 AND No to Question 3\.  
Cohort 4 (Recruit 3\) \= Yes to Question 4\. Validate response with Question 5 \-- We are looking for people who have an official or semi-official role advising Veterans on disability claims.

**Question for Perigean:** Do you need us to write screener questions for the other, more standard criteria?

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- Suggested dates and times: TBD


### Prepare

\[\!NOTE\] Send pilot participant email in study Slack channel

* Pilot participant name: TBD  
* Date and time of pilot session: TBD


### Research sessions

* Planned dates of research: 11/24/2025 - 12/10/2025


### Length of sessions

* Session length: 75 min  
* Buffer time between sessions: 30 min  
* Maximum Sessions per day: 3 per day


### Availability

Mon 11/24 
- 11am \-3pm ET  
- 4pm \- 6pm ET

Tues 11/25 
- 11am \- 6pm ET

Wed 11/26 (Day before thanksgiving)
- 11am \- 2pm ET

Mon 12/1 
- 11am \- 2pm ET  
- 2:30pm \- 6pm ET

Tue 12/2 
- 11am \- 2pm ET

Wed 12/3 
- 11am \- 1pm ET  
- 1:30pm \- 2:30pm ET  
- 4pm \- 6pm ET

Thu 12/4 
- 10am \- 2pm ET  
- 3pm \- 6pm ET

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
    
- Participant recruiting & screening:	\[Enter full name\]  
    
- Project point of contact: \[Enter full name\]  
    
- Accessibility specialist (for sessions where support for assistive technology may be needed): N/A  
    
- Note-takers: Kim Ladin, Madeline Fritz  
    
- Observers: TBD

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
