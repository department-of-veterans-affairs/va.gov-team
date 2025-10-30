---
# Research Plan Metadata
title: "Research Plan for Core Veteran Experience, Welcome to VA.gov Onboarding, October 2025"
date: 2025-10-16
last_updated: 2025-10-16
team: "Core Veteran Experience"
product: "Welcome to VA.gov Onboarding"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "New Veterans experience decision paralysis when they first access VA.gov because the site offers so many options and pathways. Without clear guidance, Veterans struggle to know where to start, leading to frustration and potential abandonment of important tasks."
  product_location: "Modal popup that appears for new Veterans after login on VA.gov"
  user_familiarity: "New product - onboarding modal for first-time and new VA.gov users"
  product_brief_url: "TBD"

# Research Design
methodology: "Comparative usability testing with preference ranking"
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "N/A"
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how new Veterans currently approach VA.gov and what causes decision paralysis"
  - goal_2: "Evaluate effectiveness and preference between modal design approaches (application-focused vs. exploration-focused)"

research_questions:
  - "What are new Veterans current experiences and pain points when first accessing VA.gov?"
  - "How do new Veterans decide what to do first on VA.gov?"
  - "Which modal version (application-focused vs. exploration-focused) do new Veterans prefer and why?"
  - "What are the usability issues and pain points with each modal version?"
  - "How well do the modal options align with new Veterans actual priorities and needs?"

hypotheses:
  - "New Veterans will prefer clear, actionable guidance over open-ended exploration, reducing decision paralysis and improving task completion."
  - "Application-focused options (Version A) will be preferred by Veterans who know what they want to apply for, while exploration-focused options (Version B) will appeal to Veterans who are still exploring their options."

expected_outcomes: "This research will determine which modal version to implement and identify any usability issues to address before launch. Findings will inform the final modal design, content, and implementation strategy to reduce new Veteran decision paralysis and improve first-time user experience on VA.gov."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Maximum variation sampling via recruitment partner, with targeted outreach to recently transitioned Veteran organizations"
  
  primary_criteria:
    - "Veterans who transitioned from service within the past 2 years"
    - "Either: Have never used VA.gov before OR recently created a VA.gov account (within 3 months, fewer than 5 total visits)"
    - "Have not yet completed major VA processes (healthcare enrollment, disability claims, education benefits)"
    
  secondary_criteria:
    - "English speakers with reliable internet and appropriate device"
    - "Mix of desktop users (8) and mobile users (8)"
    
  screener_questions:
    - question: "When did you transition from military service?"
      qualifying_response: "Within the past 2 years"
    - question: "Have you used VA.gov before? If yes, how many times have you visited the site?"
      qualifying_response: "Never used it OR created account within 3 months with fewer than 5 visits"
    - question: "Have you completed any of the following on VA.gov: enrolled in VA health care, filed a disability claim, or applied for education benefits?"
      qualifying_response: "No to all"
      
participants:
  veterans: 16
  caregivers: 0
  dependents: 0
  total_recruited: 24
  completed_sessions_goal: 16
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-10-24"
  pilot_participant: "TBD"
  research_dates: "2025-10-27 to 2025-11-04"
  research_review_submission: "2025-10-16"
  
session_details:
  duration_minutes: 45
  buffer_minutes: 30
  max_sessions_per_day: 5
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits"
    key_results: 
      - "Improve satisfaction with our web and mobile products by 5 points"
      
veteran_journey_phases:
  - "Getting Out"
  - "Starting Up"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "[Veteran Feedback about DS Logon](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/1386#:~:text=Research%20Plan%202024%3A%20IIR%2C%20Veteran%20Onboarding%2C%20Summer%202024)"
    
tags:
  - "authenticated"
  - "usability-testing"
  - "veterans"
  - "onboarding"
---



# Research Plan for Core Veteran Experience, Welcome to VA.gov Onboarding, October 2025

## Research Plan Metadata
- **Title:** Research Plan for Core Veteran Experience, Welcome to VA.gov Onboarding, October 2025
- **Date:** 2025-10-16
- **Last Updated:** 2025-10-16
- **Team:** Core Veteran Experience
- **Product:** Welcome to VA.gov Onboarding
- **Product Area:** Authenticated
- **Methodology:** Comparative usability testing with preference ranking
- **Research Format:** Remote, moderated
- **Pilot Date:** 2025-10-24
- **Research Dates:** 2025-10-27 to 2025-11-04

> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️

`What problem is your product trying to solve?`

New Veterans experience decision paralysis when they first access VA.gov because the site offers so many options and pathways. Without clear guidance, Veterans struggle to know where to start, leading to frustration and potential abandonment of important tasks.

`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

This is an authenticated experience. The modal popup appears for new Veterans after login, offering guided pathways to key actions.

`What is Veterans' familiarity with this tool? Is this a new product or an iteration on an existing one?`

This is a new product designed to help first-time and new VA.gov users navigate the site more effectively. We are testing two versions: Version A (Application-focused) presents VA health care, VA disability compensation, and VA education and training benefits. Version B (Action-focused) presents Go to My VA, Manage your health care, and Discover your benefits.

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/product-outline.md)**

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

This research supports the following OCTO priority:

`Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

Where does your product fit into the Veteran journey?

- `Getting Out` - When Veterans are transitioning from service and need to understand what VA services are available
- `Starting Up` - When Veterans are establishing their relationship with VA and accessing services for the first time

## Research Goals 🥅	

`What are you trying to learn from this research?` 

### Goals

`1.` **Understand how new Veterans currently approach VA.gov and what causes decision paralysis**

`2.` **Evaluate effectiveness and preference between modal design approaches (application-focused vs. exploration-focused)**
  
### Outcome

`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

This research will determine which modal version to implement and identify any usability issues to address before launch. Findings will inform the final modal design, content, and implementation strategy to reduce new Veteran decision paralysis and improve first-time user experience on VA.gov.

### Research questions

**`1.` What are new Veterans current experiences and pain points when first accessing VA.gov?**

**`2.` How do new Veterans decide what to do first on VA.gov?**

**`3.` Which modal version (application-focused vs. exploration-focused) do new Veterans prefer and why?**

**`4.` What are the usability issues and pain points with each modal version?**

**`5.` How well do the modal options align with new Veterans actual priorities and needs?**

### Hypotheses
 
New Veterans will prefer clear, actionable guidance over open-ended exploration, reducing decision paralysis and improving task completion. Application-focused options (Version A) will be preferred by Veterans who know what they want to apply for, while action-focused options (Version B) will appeal to Veterans who are still exploring their options. Both modal versions will result in higher satisfaction and task completion rates compared to no onboarding guidance.

## Methodology 🛠️

**Comparative usability testing with preference ranking**

45-minute remote sessions combining semi-structured interviews (10 minutes) and comparative usability testing of both high-fidelity interactive modal prototypes (30 minutes). 

**Version Testing:**
- **Modal Version A (Application-focused):** Three benefit application options - VA Health Care, VA Disability Compensation, and VA Education Benefits
- **Modal Version B (Action-focused):** Three action options - My VA, My HealtheVet, and Discover Your Benefits Tool

**Testing Protocol:**
- Participants will interact with both versions in **randomized order** to prevent order bias
- After viewing each modal, participants will attempt a task completion activity (e.g., initiating an action based on modal guidance rather than simply dismissing the modal)
- Participants will provide preference feedback with reasoning and complete a brief satisfaction rating
- Focus on language preferences (application vs. action-oriented), readiness state alignment, and confidence impact

### Location

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan – prior to submitting a recruitment request.**

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-onboarding/research/2025-study/conversation-guide.md)
- [Link to high-fidelity interactive prototype](https://www.figma.com/design/awqwt6nhCwGeVq5nWj7wFb/Onboarding-Tour?node-id=3605-26130&t=UJXmJVBl70PPnszG-1)

**Prototype Details:**
- **Modal Version A (Application-focused):** Three benefit application options - VA Health Care, VA Disability Compensation, and VA Education Benefits
- **Modal Version B (Action-focused):** Three action options - My VA, My HealtheVet, and Discover Your Benefits Tool
- **Testing Approach:** Participants will interact with both versions in **randomized order** to prevent order bias

## Recruitment 🎯	

### Recruitment approach

We will use Perigean to recruit participants using a maximum variation sampling approach via their recruitment partner, with targeted outreach to recently transitioned Veteran organizations. We are specifically targeting Veterans who are either completely new to VA.gov or have very limited experience with the site (created account within 3 months, fewer than 10 total visits).

### Recruitment criteria

**Screener questions:**

1. **When did you transition from military service?**
   - Qualifying response: Within the past 2 years

2. **Have you used VA.gov before? If yes, when did you create your account and approximately how many times have you visited the site?**
   - Qualifying response: Never used it OR created account within 3 months with fewer than 10 visits

3. **Have you completed any of the following on VA.gov: enrolled in VA health care, filed a disability claim, or applied for education benefits?**
   - Qualifying response: No to all three

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **16**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **24** (1.5x overrecruit)
- `Ideal completed sessions:` **16**

### Primary criteria (must-haves)

- Veterans who transitioned from service within the past 2 years
- Either: Have never used VA.gov before OR recently created a VA.gov account (within 3 months, fewer than 10 visits)
- Have not yet completed major VA processes (healthcare enrollment, disability claims, education benefits)
- 8 participants testing on desktop devices
- 8 participants testing on mobile devices

#### Secondary criteria (nice-to-haves)

- English speakers with reliable internet connection
- Mix of participants across different geographic locations (including rural and urban)
- Mix of different branch backgrounds
- Range of tech comfort levels
- At least 2-3 participants who use assistive technology (screen readers or other AT) to ensure accessibility considerations are captured

## Timeline 🗓️

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **10/24/2025 - Any time works**

### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 

- `Pilot participant name:` **TBD - will be provided in study Slack channel**
- `Date and time of pilot session:` **10/24/2025** 

### Research sessions
- `Planned dates of research:` **10/27/2025 - 11/04/2025**

### Length of sessions
- `Session length:` **45 minutes**
  
- `Buffer time between sessions:` **30 minutes**
  
- `Maximum Sessions per day:` **5 per day**

### Availability

When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> MST times converted to EST (MST is 2 hours behind EST)

- `10/27/2025, Monday, 10:00 AM-6:00 PM EST`
- `10/28/2025, Tuesday, 10:00 AM-6:00 PM EST`
- `10/29/2025, Wednesday, 10:00 AM-6:00 PM EST`
- `10/30/2025, Thursday, 10:00 AM-4:00 PM EST`
- `10/31/2025, Friday, 10:00 AM-6:00 PM EST`
- `11/03/2025, Monday, 10:00 AM-2:00 PM EST, 4:00 PM-6:00 PM EST`
- `11/04/2025, Tuesday, 10:00 AM-6:00 PM EST`
  
## Team Roles 🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers.

- `Moderator:` **David Pearl**	
- `Research guide writing and task development:` **David Pearl**		
- `Participant recruiting & screening:` **David Pearl**	
- `Project point of contact:` **David Pearl**
- `Backup moderator:` **Raquel Eisele or Megan Commons**		
- `Accessibility specialist:` **N/A**	
- `Note-takers:` **Raquel Eisele, Megan Commons, Janelle Finnerty, Ashley Bush**	
- `Observers: List the names of people observing the sessions. Spread observers across sessions. There should be no more than 5 to 6 total attendees per session on the VA side.`

- **Dave Conlon**
- **Janelle Finnerty**
- **Ashley Bush**
- **Core Veteran Experience team members**

## Approvals ✅
- `Reviewed by Dave Conlon (OCTO Product Owner) on 10-16-2025`
- `Reviewed by OCTO Research-Ops Lead on [10-20-2025]`
