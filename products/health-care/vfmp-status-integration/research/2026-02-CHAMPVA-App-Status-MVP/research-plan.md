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

> [!TIP]
> **Complete the frontmatter section above AFTER you've filled out your research plan below.** 
> 
> Use the [GitHub Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md) to automatically generate structured metadata from your completed research plan.  The prompt uses natural language processing to extract key information and apply appropriate research repository tags. 

# Research Plan for VFMP Status Integration, Health Apps in Claims Status Tool, CHAMPVA Application Status MVP 02/2026
> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Veterans and their families enrolled in CHAMPVA currently lack digital infrastructure to manage their application status, relying heavily on paper mail and manual processes. This results in delays, backlogs, and a high volume of status inquiries. Approximately 80% of calls to the CHAMPVA helpdesk are status inquiries, leading to significant wait times. We will integrate CHAMPVA applications into the existing Claim and Appeal Status Tool (CST) to enhance transparency, reduce delays, and improve the overall user experience for veterans and their families. This solution aims to provide real-time access to application statuses, streamline documentation workflows, and reduce call center volume.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Authenticated experience**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**We are integrating CHAMPVA applications into the existing Claim and Appeal Status Tool (CST).**

`Product Brief`

**[Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/status-tool/chamva-status-tool-product-outline.md).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO%20FY26%20goals%20supported.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

> **NOTE:** If a Key Result does not have a ***Research Ops Plain Language*** equivalent, it does not map to research supporting it as a key result for the parent objective.


`Objective 1:  Optimize software delivery for Veteran impact.`  

> - **Key Result 1.1:** All C100 products have a documented Product Vision, including identifying up to three Veteran-impacting KPIs, published on Product.VA.gov.
  - ***Research Ops Plain Language:** Supports up to three Veteran-impacting Key Performance Indicators documented for this on Product.VA.gov*
> - **Key Result 1.2:** Delivered 25 or more releases that have measurably improved a product's Veteran-impacting KPIs.
  - ***Research Ops Plain Language:** Supports a production release that will measurably improved a product's Veteran-impacting KPIs.*
> - Key Result 1.3:** OIT has avoided at least $5 million in cost via successful decommissioning of at least 10 systems.
  - ***Research Ops Plain Language:** Supports the decommissioning of a legacy system.*

`Objective 2: Operate products with high reliability and security.`

> - **Key Result 2.1:** All C100 systems have an incident free time of 99.8 or better.
> - **Key Result 2.2:** All C100 systems are monitoring the 4 “golden signals” of latency, error rate, volume, and saturation.
> - **Key Result 2.3:** All C100 systems have baselined cycle time from planning to production, and at least one C100 system in each DSD portfolio has reduced its cycle time from planning to production by more than 50% without increasing change failure rate.
  - ***Research Ops Plain Language:** Supports reducing this product’s cycle time from planning to production by more than 50% without increasing change failure rate.*
> - **Key Result 2.4:** By 31 March 2026, DSD has enhanced system security by moving or decommissioning 100% of existing of Systems or Applications leveraging SiteMinder integration for SSOi to Entra ID.

`Objective 3: Relentlessly improve the user experience.`

> - **Key Result 3.1:** Each OIT portfolio will improve customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.
  - ***Research Ops Plain Language:** Supports this product’s OIT portfolio (Health, Benefits, etc) in improving customer satisfaction (or similar measure of user experience quality) of impactful systems by 3% or more.*
> - **Key Result 3.2:** 100% of end-user facing C100 systems maintain a ranked list of user pain points.
  - ***Research Ops Plain Language:** Supports maintaining the ranked list of user pain points for Veteran-facing Products and Services.*
> - **Key Result 3.3:** 100% of C-100 systems have delivered at least one release that directly addresses a documented user pain point with that system.
  - ***Research Ops Plain Language:** Supports the delivery of at least one release that directly addresses a documented user pain point within this product.*

`Objective 4: OCTO teammates are empowered with the knowledge and resources they need to make sustained impact.`

> - **Key Result 4.1:** More than 25% of VA employees report AI has helped them deliver better services to Veterans.
> - **Key Result 4.2:** All “VA Way” delivery attributes have an adoption indicator established, baselined and communicated to product delivery staff.
> - **Key Result 4.3:** 50% of product delivery staff report that a practice group (design) has helped them deliver better software.

</details>

> [!TIP]
> Delete priorities not supported by this research.

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

> [!TIP]
> Delete journeys not supported by this research.

## Research Goals 🥅	
`What are you trying to learn from this research?` 

> [!NOTE]
> Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.

### Goals

`1.` **[Enter answer here]**

`2.` **[Enter answer here]**

`3.` **[Enter answer here]** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**[Enter outcome here]** 

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

**`1.`[Enter Q1]**

**`2.`[Enter Q2]**

**`3.`[Enter Q3]**

**`4.`[Enter Q4]**

**`5.`[Enter Q5]**

> [!TIP]
>Enter more questions as needed

### Hypotheses
> [!NOTE]
> Remember to constrain the hypotheses to the goals of your study!
 
**Think through these prompts to develop strong hypotheses:**
	
`What do you intend to learn and measure from this study?` 

`What do you already know about this problem space?`
 
`What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)`
  
`Write a generalized statement that combines what you know + what you think will happen during the study.`

---

**[Enter hypotheses here]** 

---
   
## Methodology  🛠️
We will conduct remote moderated usability testing to observe research participants filling out a new claim and responding to a send-back notification to resubmit a claim. We will be testing in the Staging environment using the unauthenticated version of the form.

Think-aloud protocol will be used for each task, to understand how the user understands and is responding to the flow of the claims form as they perform the tasks given to them. 

Sessions will be conducted over Zoom with transcripts.

### Location
Remote research, over Zoom.

- [x] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
- [Link to conversation guide]()
- [Link to prototype]()
	
## Recruitment 🎯	

### Recruitment approach
We would like Perigean to recruit assistive technology (AT) and non-AT users.

Our intended audience for this study is Veterans with high disability ratings and their dependent spouses and children, who are currently enrolled in the CHAMPVA program. We will split this study into three cohorts:

* **Cohort 1 (n = 2 minimum):** Veterans with a 100% service connected disability rating with spouse and/or dependent children who are currently enrolled in CHAMPVA benefits
  
* **Cohort 2 (n = 8 minimum):** Spouses and dependent children of Veterans with a 100% service connected disability rating, who are currently enrolled in CHAMPVA benefits

* **Cohort 3 (n = 2 minimum):** Assistive Technology (AT) users who are Veterans with a service connected disability rating with a spouse and/or dependent children who may or may not be enrolled in CHAMPVA benefits

### Recruitment criteria
**All participants must:**
- Be on a computer or mobile device
- During the session, be willing to share a web browser window on their device
- Have a working microphone
- Have Zoom downloaded to their device prior to the session and know how to share their screen

**Cohort 1 must:**
- Be a Veteran with a service-connected disability rating of 100%
- Have a spouse and/or dependent children
- **At least 1** spouse/children are _currently_ enrolled in CHAMPVA benefits (remainder can be unsure or not currently enrolled)
- **At least 1** identifies as having a cognitive disability

**Screener Cohort 1 (Veterans with 100% service connected disability whose spouse/dependents are enrolled in CHAMPVA benefits):**
1. Do you get a VA disability compensation for a service-connected disability rating of 100%?
_Response otions: YES or NO_
* Yes [jump to next question]
* No [disqualify]

2. Do you have a spouse or dependent children?
_Response options: YES or NO_
* Yes [jump to next question]
* No [disqualify]

3. Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (Qualifies for study, recruit **at least 1**, RECORD as enrolled in CHAMPVA)
* No (Disqualify)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

4. Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges like these.
_Response options: YES, NO_
* Yes (Qualifies for study, recruit **at least 1**, RECORD response)
* No (Qualifies for study, RECORD response)
  
**Cohort 2 must:**
- Identify as a spouse or dependent child of a Veteran with a service-connected disability rating of 100%
- We'd like to hear from **at least 6** spouses/children who are currently enrolled in Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA), the remainder can be not currently enrolled

**Screener Cohort 2 (Spouses and dependent children of Veterans with a 100% service connected disability):**
1. Please select the answer that best fits you:
_Response options: Spouse of a Veteran, Dependent child of a Veteran, Neither (Answering neither would disqualify the participant)_

2. Does the Veteran you are related to get a VA disability compensation for a service-connected disability rating of 100%?
_Response options: YES, NO (Answering YES would qualify the participant)_

3. Are you enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (Qualifies for study, recruit **at least 6**, RECORD as enrolled in CHAMPVA)
* No (Qualifies, RECORD as not enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

**Cohort 3 must:**
- Be a Veteran with a service-connected disability 
- Have a spouse and/or dependent children
- Spouse/children _do not_ need to be enrolled in CHAMPVA benefits, but preferred
- Recruit 4 assistive tech users - **at least 2 AT user sessions** are needed for this study to be complete. We would prefer **screen reader users** over magnification.

**Screener Cohort 3 (Veterans with a service connected disability whose spouse/dependents may or may not be enrolled in CHAMPVA benefits):**
1. Do you currently receive VA disability compensation for a service-connected disability rating of 50% or higher?
_Response options: YES or NO_
* Yes [jump to next question]
* No [disqualify]

2. Do you have a spouse or dependent children?
_Response options: YES or NO_
* Yes [jump to next question]
* No [disqualify]

3. Is your spouse and/or dependents enrolled in the Civilian Health and Medical Program of the Department of Veterans Affairs (CHAMPVA)?
_Response options: YES, NO, UNSURE_
* Yes (Qualifies for study, RECORD as enrolled in CHAMPVA)
* No (Qualifies for study, RECORD as not enrolled in CHAMPVA)
* Unsure (Qualifies for study, RECORD as unsure if enrolled in CHAMPVA)

4. Do you need a screen reader or screen magnifier **every time** you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies
_Response options: YES or NO_
* Yes [Recruit **at least 2**, proceed to next question]
* No [Disqualified]

5. How long have you been using this screen reader or screen magnifier?
* Less than 1 year (DISQUALIFY)
* At least 1 year (ask next question)

6. [If yes to Q5] Please list the name of the screen reader or screen magnifier technology you will use during the session
_Response: free text field_ (If user mentions a browser extension such as Real Aloud, this disqualifies them from being recruited as a screen reader user. 

7. Are you willing to join the zoom session using this assistive technology?
_Response options: YES or NO_
* Yes [Recruit **at least 2**, proceed to next question]
* No [Disqualified]

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Veterans:` **2-4**
- `Spouses and dependent children:` **8-10**
- `AT users (can be: Veterans and spouses/dependent children:` **2-4**
- `Total:` **18**
- `Ideal completed sessions:` **12**

### Primary criteria (must-haves)
- `At least 2 must use a screen reader or screen magnifier every time they access the internet`
- `1 must have a cognitive disability`
- `At least 6 must be primarily mobile users and willing to use it for the session`
- `At least 2 must be users on desktop/laptop devices and willing to use it for the session`
- `At least 3 don't have any degree or vocational training after high school`
- `At least 2 live in a rural or remote area`

#### Secondary criteria (nice-to-haves)
- `6 must be aged 55-64+`
- `At least 4 people of color`
- `At least 2 women`
- `At least 2 are 35 or under`
  
## Timeline 🗓️

### Optional Kick-off Call with Perigean
We would like a kick-off call with Perigean to discuss recruitment criteria. Suggested dates and times: 
- `Monday - Friday 9:30am-12:00pm ET and 1:00pm-4:30pm ET`

### Prepare
**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

We would like to have a non-AT user pilot, and 2 AT user pilot (1 screen reader, 1 screen magnifier)

**Non-AT user pilot (1)**
- `Pilot participant name:` 
- `Date and time of pilot session:` 

**AT user pilots (2)**
- `Pilot participant name:` 
- `Date and time of pilot session:` 

- `Pilot participant name:` 
- `Date and time of pilot session:` 

### Research sessions
- `Planned dates of research:` **Wednesday, Aug 6 - Tuesday, August 26**

### Length of sessions
- `Session length:` 60 minutes for non-AT users, 90 minutes for AT users
  
- `Buffer time between sessions:` 30 minutes
  
- `Maximum Sessions per day:` 5 per day

### Availability
> - `Monday - Friday 8:00am-5:00pm ET`

## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` Alyssa Li and Chantale Hedgeman
- `Research guide writing and task development:` Alyssa Li and Chantale Hedgeman
- `Participant recruiting & screening:`	Perigean	
- `Project point of contact:` Alyssa Li and Chantale Hedgeman
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` TBD (will link to ADE intake ticket when opened)
- `Note-takers:` Alyssa Li and Chantale Hedgeman
- `Observers:` Will need to sign up so we can limit the number per session. Alyssa will add them to the session invites received from Perigean.

## Approvals ✅
> [!NOTE]
> Before submitting for review, ensure you've completed the YAML frontmatter section at the top of this document using the [Copilot Frontmatter Completion Prompt](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/copilot-prompts/research-planning/research-plan-frontmatter-completion-prompt.md).
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
