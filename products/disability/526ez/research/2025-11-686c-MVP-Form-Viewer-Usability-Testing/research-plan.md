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

# Research Plan for 686c MVP Form Viewer Usability Testing


## Background 🏗️
`What problem is your product trying to solve?`

As a part of the Fully Digital Forms project MVP, we need a Form Viewer that can render structured form data and replace the current form PDF -- both for VSRs working the claim and for Veterans saving as a copy of their submission. See more information in the super epic.

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


### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  



### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Where does your product fit into the Veteran journey?
	
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

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` Understand current user processes / workflows with regards to accessing and using the form output

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

Moderated usability testing with interactive Figma prototypes. All participants will test 3 different prototypes of our Form Viewer:

* BID Maximal (includes all enumerated sections and blanks)
* VADS Minimal (sections not numbered, removed "skipped sections", blanks removed; with VADS)
* VADS Minimal + "a la carte" features

To avoid order-bias, we will have 1/2 the participants start with BID Maximal and the other 1/2 start with VADS Minimal; proceed to either VADS Minimal/BID Maximal (whichever one they haven't seen); and then all participants end with testing the VADS Minimal + "a la carte" features.

[Conversation guide Ver. A](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-MVP-Form-Viewer-Usability-Testing/conversation-guide.md) will be used for participants who start their research sessions with the BID Maximal prototype.

[Conversation guide Ver. B](asd) will be used for participants who start their research sessions with the VADS Minimal prototype.




### Location
Where will you be holding the research sessions? 

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Conversation guide Ver. A](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/disability/526ez/research/2025-11-686c-MVP-Form-Viewer-Usability-Testing/conversation-guide.md) will be used for participants who start their research sessions with the BID Maximal prototype.
- [Conversation guide Ver. B](asd) will be used for participants who start their research sessions with the VADS Minimal prototype.
- [Prototypes for Desktop](https://www.figma.com/proto/EoYnokGp9aSgy5JrDVqp5L/686c---Form-data-viewer---Fully-Digital-Forms?node-id=3770-29642&t=wjPq2fgrbIiKrNQS-1)
- [Prototypes for Mobile](https://www.figma.com/proto/EoYnokGp9aSgy5JrDVqp5L/686c---Form-data-viewer---Fully-Digital-Forms?node-id=3770-29959&t=wjPq2fgrbIiKrNQS-1)
	
## Recruitment 🎯	

### Recruitment approach
We plan to leverage Perigean to recruit Veterans.

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
- `Veterans:` 12
- `Caregivers:` 0
- `Dependents:` 0
- `Total:` 12
- `Ideal completed sessions:` 8

### Primary criteria (must-haves)
* Veterans who have previous experience filling out the VA Form 21-686C "Add or remove a dependent on VA benefits"
* All participants have filled out a form on VA.gov 
* Minimum of 3 able to test on smartphone
* Minimum of 4 able to test on desktop/ laptop
* Not an AT user, as our prototype is not AT-friendly

#### Secondary criteria (nice-to-haves)
* At least 2 participants who have a high school degree but not college (associates or bachelors)
* At least 4 participants who identify as having a cognitive disability
* At least 4 participants who are 55+ in age
* No more than 4 participants who identify as male
* At least 3 participants from rural areas
* At least 3 participants from urban areas
* At least 3 identify as biracial or do not identify as White or Caucasian

### Additional screener questions
_We assume that Perigean already has information regarding the participants' age, race, education level, residence type (urban vs. rural), and gender. The following questions should be asked to the participants as additional recruitment criteria. **The content contained between the square brackets must not be visible by the participant.**_

Have you ever filled out a form or filed for a claim specifically on VA.gov?
* Yes [Continue]
* No [Do not recruit]

Have you completed the VA Form 21-686C "Add or remove a dependent on VA benefits" within the past year?
* Yes [Continue]
* No [Do not recruit]

Do you need a screen reader or screen magnifier when you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies.
* Yes [Do not recruit]
* No [Continue]

Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
* Yes [Recruit min 4]
* No 

Which device would you prefer to join a user testing session via Zoom? Select all that apply.
* Computer (laptop or desktop) [Recruit min 3]
* Tablet
* Smartphone (e.g., iPhone, Android) [Recruit min 4]

[Note for Perigean: Assign what device the participant will use based on their user preference. Double check that they're using the correct device when test driving the Zoom connection with each participant.]


## Timeline 🗓️
### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **[Enter dates and times MM/DD HH:MM]**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
- `Pilot participant name:` **TBD**
- `Date and time of pilot session:` **TBD** 

### Research sessions
- `Planned dates of research:` November 17th, 2025 - November 25th, 2025

### Length of sessions
* Session length: 1 hour
* Buffer time between sessions: 1 hour
* Maximum Sessions per day: 3 per day

### Availability
* 11/17 Monday: 10:00 am - 5:00 pm ET
* 11/18 Tuesday: 10:00 am - 5:00 pm ET
* 11/19 Wednesday: 10:00 am - 5:00 pm ET
* 11/20 Thursday: 10:00 am - 5:00 pm ET
* 11/21 Friday: 10:00 am - 5:00 pm ET
* 11/24 Monday: 10:00 am - 5:00 pm ET
* 11/25 Tuesday: 10:00 am - 5:00 pm ET
  
## Team Roles  🕵️👩‍💻👩‍🔬
- `Moderator:` Riley Orr, Kevin Shih	
- `Research guide writing and task development (usually but not always same as moderator):` Jessica Sutantio, Riley Orr, Kevin Shih	
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Riley Orr
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` Riley Orr
- `Note-takers:` Riley Orr, Kevin Shih
- `Observers: Team will invite

## Approvals ✅
- `Reviewed by Shannon Ford on 10-22-2025
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
