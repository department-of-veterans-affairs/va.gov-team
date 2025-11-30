---
# Research Plan Metadata
title: "Research Plan for Benefits Intake Optimization, Form 21P-601 Digitization, December 2025"
date: 2025-11-24
last_updated: 2025-11-24
team: "Benefits Intake Optimization"
product: "Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary)"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary) is currently a paper-only form used to claim VA benefits that were owed but unpaid at the time of a beneficiary's death."
  product_location: "My VA dashboard, Pension and Survivor Benefits section, Find a VA Form search, Potentially linked from DIC/Survivors Pension application flows when relevant"
  user_familiarity: "This is a new product. While Form 21P-601 has existed as a paper form, there's currently no online version. Surviving spouses may be familiar with receiving the paper form in the mail, but have no experience with an online version."
  product_brief_url: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/simple-forms/21P-601/21P-601_product_outline.md

# Research Design
methodology: "Semi-structured interviews combined with usability concept testing"
research_format: 
  location: remote # Options: remote, in-person, hybrid
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true # Options: true, false
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how families learn about and navigate Form 21P-601"
  - goal_2: "Identify pain points around eligibility, priority order, and documentation"
  - goal_3: "Evaluate the value proposition of an online version"

research_questions:
  - "How do families learn about accrued benefits? Where do they get the form?"
  - "Do they understand the difference between accrued benefits and DIC/Survivors Pension?"
  - "If they filed DIC/Survivors Pension, did they know that could also count as a claim for accrued benefits?"
  - "What makes them come specifically to Form 21P-601?"
  - "How aware are they of the 1-year deadline?"
  - "What do they understand about who can file and the priority order?"
  - "When multiple family members are eligible, how do they coordinate?"
  - "Which documents do they already have? Which has been hardest to get?"
  - "Would an online version be helpful during this difficult time? Why or why not?"
  - "What would help them feel confident they chose the right filing option?"

hypotheses:
  - "Confusion between benefit types creates uncertainty"
  - "Documentation requirements are a significant barrier"
  - "Digital adoption varies based on multiple factors"

expected_outcomes: "Design better content, create better information architecture, and design a respectful, supportive experience."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation approach with 3 cohorts"
  
  primary_criteria:
    - "Experience with Form 21P-601: Filed within past 2 years or currently filing"
    - "Time since loss: At least 6 months ago"
    - "Executor/Administrator representation: At least 3 participants"
    - "Mix of experiences: Successful filers, those with barriers, those with VSO help"
    - "Age diversity: At least 5 participants age 55+, at least 3 under 55"
    
  secondary_criteria:
    - "Multiple eligible family members scenario"
    - "Documentation complexity (probate letters, creditor waivers, death certificates)"
    - "Awareness of other benefits (DIC/Survivors Pension)"
    - "Digital literacy diversity"
    - "Education level diversity"
    - "Experience with probate"
    
  screener_questions:
    - question: "Have you filed VA Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary) within the past 2 years, OR are you currently in the process of filing this form?"
      qualifying_response: "Yes"
    - question: "How long ago did the beneficiary pass away?"
      qualifying_response: "At least 6 months ago"
      
participants:
  veterans: 0
  caregivers: 0
  dependents: 12
  total_recruited: 12
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-12-05"
  pilot_participant: "[Enter name]"
  research_dates: "2025-12-08 to 2025-12-12"
  research_review_submission: "2025-11-24"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 0
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA's digital experiences are the easiest and most efficient way to access VA health care and benefits."
    key_results: 
      - "Key Result 1: Improve satisfaction with our web and mobile products by 5 points."
      - "Key Result 3: 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error."
      
veteran_journey_phases:
  - "Dying"
  - "Taking Care of Myself"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - ""
    
tags:
  - "authenticated"
  - "usability-testing"
  - "interview"
  - "dependents"
---

# Research Plan for Benefits Intake Optimization, Form 21P-601 Digitization, December 2025
> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary) is currently a paper-only form used to claim VA benefits that were owed but unpaid at the time of a beneficiary's death.**

**About the benefit:**

* "Accrued amounts" are benefits owed to someone who died before VA could pay them  
* Multiple family members may be eligible, but there's a strict priority order  
* Each claimant must file a separate form  
* Different from DIC (Dependency and Indemnity Compensation) or Survivors Pension

**Current process challenges:**

* **Timing is difficult** \- Families must file within 1 year of death while also managing funerals, probate, and grief  
* **Complex eligibility rules** \- Priority order (surviving spouse → children → dependent parents → executor) creates confusion  
* **Document gathering is burdensome** \- Requires death certificates, probate letters, itemized bills, and creditor waivers  
* **Coordination challenges** \- When multiple family members are eligible, they may not know who should file or how to coordinate
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**This will be an authenticated experience on VA.gov, likely accessible through:**

* My VA dashboard  
* The Pension and Survivor Benefits section  
* Find a VA Form search  
* Potentially linked from DIC/Survivors Pension application flows when relevant

**Note:** Some content (like eligibility information) may be available unauthenticated, but the application itself will require authentication.
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**This is a new product.** While Form 21P-601 has existed as a paper form, there's currently no online version. Surviving spouses may be familiar with receiving the paper form in the mail, but have no experience with an online version.

However, we need to understand:

* How familiar surviving spouses are with the purpose and requirements of this form  
* Whether they've used other VA online forms successfully  
* What their expectations would be for an online version

`Product Brief`

**Link to product brief URL**

This form is part of VA's broader Benefits Intake Optimization effort and relates to the "11 forms by 11/11/2025" digitization goal.

(https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/simple-forms/21P-601/21P-601_product_outline.md)

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>

`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
>   * *By creating a clearer, more accessible online option for Form 21P-601, we can improve the experience for surviving spouses who need to verify their marital status.*
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.
>   * *An online form will provide immediate confirmation of submission and clearer error handling compared to the current paper process.*

</details>

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Dying` - When a Veteran or beneficiary passes away and families are managing end-of-life affairs  
- `Taking Care of Myself` (for surviving family members) - Managing VA benefits and financial matters after loss

**Moments that matter:**

* Learning that benefits may be owed to the deceased person  
* Trying to understand what accrued benefits are vs. other survivor benefits  
* Gathering required documentation during funeral and probate processes  
* Coordinating with other family members about who should file  
* Seeking help to understand complex eligibility and priority rules  
* Meeting the 1-year deadline while managing grief and other responsibilities

</details>

## Research Goals 🥅	
`What are you trying to learn from this research?` 

### Goals

`1.` **Understand how families learn about and navigate Form 21P-601**
* Learn how they discover accrued benefits exist  
* Understand confusion between accrued benefits and DIC/Survivors Pension  
* Identify where they get stuck in the current process  
* Learn about their experience with the 1-year deadline

**Why this matters:** Understanding awareness and discovery will inform our notification strategy and content approach.

`2.` **Identify pain points around eligibility, priority order, and documentation**
* Clarify what families understand about who can file and in what order  
* Learn about challenges gathering required documents (death certificates, probate letters, bills, waivers)  
* Understand coordination when multiple family members may be eligible  
* Identify support needed for older filers or those unfamiliar with probate

**Why this matters:** These pain points will directly inform content strategy, form design, and help resources.

`3.` **Evaluate the value proposition of an online version**
* Determine whether an online option would be helpful during this difficult time  
* Understand what guidance and clarity would be most valuable  
* Identify how to design a respectful, supportive experience for bereaved families  
* Learn about preferences for follow-up communication during this sensitive time

**Why this matters:** Understanding digital preferences and trust factors will inform our adoption strategy and design decisions. We need to separate "digital comfort" from "digital preference".
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**This research will help us:**

1. **Design better content** that clearly explains:  
   * What accrued benefits are and how they differ from DIC/Survivors Pension  
   * Who can file and the priority order among family members  
   * What documents are needed and why  
   * How to handle reimbursement vs. direct payment scenarios  
   * Timeline and deadlines in plain language  
2. **Create better information architecture** by understanding:  
   * What information is most critical upfront  
   * Where families need the most guidance and reassurance  
   * How to structure the form to reduce cognitive load during a difficult time  
   * What conditional flows are needed for different claimant types  
3. **Design a respectful, supportive experience** by:  
   * Using appropriate tone for recently bereaved families  
   * Providing clear, step-by-step guidance without overwhelming  
   * Building in decision support when multiple family members may be eligible  
   * Creating helpful documentation checklists

---

### Research questions

**Understand current experience and awareness**

`1.` How do families learn about accrued benefits? Where do they get the form?  
`2.` Do they understand the difference between accrued benefits and DIC/Survivors Pension?  
`3.` If they filed DIC/Survivors Pension, did they know that could also count as a claim for accrued benefits?  
`4.` What makes them come specifically to Form 21P-601?  
`5.` How aware are they of the 1-year deadline?  
`6.` How long did it take them to complete the paper form?  
`7.` Did they keep a copy of their submission? Why or why not?  
`8.` Have they ever missed a deadline for a VA form? What happened?

**Identify pain points with eligibility and documentation**

`1.` What do they understand about who can file and the priority order?  
`2.` When multiple family members are eligible, how do they coordinate?  
`3.` Which documents do they already have? Which has been hardest to get?  
`4.` How do executors/administrators learn they need to file and what documents they need?  
`5.` For those seeking reimbursement of expenses: How do they get waivers from unpaid creditors? What makes those easy or hard?  
`6.` Do dependent parents understand how to prove dependency from the time of the Veteran's death?  
`7.` Where would they go to find information about eligibility rules?  
`8.` What would happen if they submitted without all required documents?

**Evaluate online version needs**

`1.` Would an online version be helpful during this difficult time? Why or why not?  
`2.` What would help them feel confident they chose the right filing option?  
`3.` Is there anything about the timing, language, or tone in VA's instructions that feels hard to manage right now?  
`4.` How would they prefer VA follow up during this sensitive time?  
`5.` What clarity would help set expectations with relatives about priority order?  
`6.` What would make them trust that an online form was legitimate and secure?  
`7.` Would they prefer to complete the form on a computer, tablet, or phone? Why?  
`8.` If they started the form and couldn't finish it, what would they expect to happen?  
`9.` What confirmation would they want after submitting?

### Hypotheses
 
**`1.` Confusion between benefit types creates uncertainty**

We believe families may not understand the distinction between accrued benefits, DIC, and Survivors Pension. This confusion could cause them to miss filing for accrued benefits or file incorrectly.

**How we'll test:** Ask about their understanding of different benefit types and decision-making process.

**`2.` Documentation requirements are a significant barrier**

Gathering probate letters, itemized bills, and creditor waivers is extremely difficult. Some families give up on filing because the documentation burden is too high. Many may not understand why certain documents are needed.

**How we'll test:** Explore which documents they already have, which were hardest to obtain, and whether they understand the purpose of each requirement.

**`3.` Digital adoption varies based on multiple factors**

We believe digital adoption may vary based on comfort level with technology, trust in online systems, perceived form complexity, and access to assistance—not just age or digital literacy alone.

**How we'll test:**

* Ask about their comfort with technology separately from their preference for digital vs. paper  
* Explore what factors would make them choose one option over the other  
* Understand trust and security concerns specific to online forms  
* Identify what support they would need for digital completion

---
  
## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

**We'll conduct semi-structured interviews combined with usability concept testing.** This approach will allow us to:

1. **Explore their current experience** through open-ended conversation about:  
   * How they learned about accrued benefits  
   * Their understanding of eligibility and requirements  
   * Documentation gathering challenges  
   * Coordination with other family members  
   * Emotional aspects of completing paperwork during grief  
2. **Evaluate online form** by showing:  
   * Examples of how information might be presented  
   * Potential form interactions  
   * Guidance and help text options  
   * Confirmation and next steps

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research.

- [X] **Remote**
- [ ] **In-person**

## Research materials 📔

**For moderated usability tests:** 
* \[[Conversation guide](https://docs.google.com/document/d/12uHIPVC_hSoqwhT-hw3Ej7Pku5MGCX4omGd3Z1up1Uo/edit?usp=drive_link)\]  
* \[[Prototype](https://staging.va.gov/family-and-caregiver-benefits/survivor-compensation/apply-for-accrued-benefits-form-21p-601/introduction)\]
	
## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

### Recruitment approach
**Intended audience:** Family members of deceased beneficiaries who have filed or are currently filing VA Form 21P-601, including surviving spouses, adult children, dependent parents, and executors.

**Recruitment strategy:** We'll use a lean maximum variation approach with **3 cohorts** based on marital status scenarios to ensure we capture diverse experiences:

* **Cohort 1:** Surviving spouses (3 participants)  
* **Cohort 2:** Veterans' children \- adult children, children under 23 in school, or helpless children (5 participants)  
* **Cohort 3:** Dependent parents of the Veteran (2 participants)

**Note:** Any participant from these cohorts may also serve as executor or administrator of the estate. We would like to  include at least 3 participants who also served in the executor/administrator.

**Inclusive research strategies:**

* Age diversity: Include both younger and older adult children, and older surviving spouses  
* Experience diversity: Some who successfully filed, some who faced barriers  
* Complexity diversity: Single claimants and situations with multiple eligible family members  
* Digital literacy: Mix of comfort levels with technology  
* Support network diversity: Some who worked with VSOs/county offices, some who navigated independently  
* Geographic diversity across United States

### Recruitment criteria

**Note to Perigean: Please recruit family members who meet the criteria below. This is sensitive research involving recently bereaved families. Screen for those who are at least 6 months post-loss. We would prefer no more than 10 sessions total, once we have hit that mark please cancel or stop recruitment. Ideal dates listed are the 8th through the 12th, but if additional time is needed to schedule, going slightly into the following week is fine.**

**Additionally, if they are unsure or unfamiliar with the form number/name, you can explain that it is a form to get reimbursed for payments made for end of life care (outside of a VA facility) and/or...**

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:

- `Dependents and spouses:` **10**  
- `Total recruited:` **15**   
- `Ideal completed sessions:` **10**

### Primary criteria (must-haves)

1. **Experience with Form 21P-601**  
   * Screener: "Have you filed VA Form 21P-601 (Application for Accrued Amounts Due a Deceased Beneficiary) within the past 2 years, OR are you currently in the process of filing this form?"  
   * Qualifying response: Yes  
2. **Time since loss**  
   * Screener: "How long ago did the beneficiary pass away?"  
   * Qualifying response: At least 6 months ago (to ensure some processing time)  
3. **Distribution across claimant types**  
   * **Cohort 1 (3 participants):** "What was your relationship to the deceased beneficiary?" → Qualifying response: Surviving spouse  
   * **Cohort 2 (5 participants):** "What was your relationship to the deceased beneficiary?" → Qualifying response: Veteran's child (adult child age 18+, child under 23 in school, or helpless child)
   * **Cohort 3 (2 participants):** "What was your relationship to the deceased beneficiary?" → Qualifying response: Dependent parent of the Veteran  
4. **Executor/Administrator representation**  
   * Screener: "Were you also serving (or are you currently serving) as executor or administrator of the deceased beneficiary's estate, or acting in that capacity informally?"  
   * Include at least 3 participants across any cohort who answer: Yes  
5. **Mix of experiences**  
   * Screener: "What best describes your experience with Form 21P-601?"  
   * Include mix:  
     * At least 6 who successfully completed and submitted the form  
     * At least 3 who started but faced barriers or are still working on it  
     * At least 3 who worked with a VSO, county veterans office, or other helper  
6. **Age diversity**  
   * At least 5 participants age 55 or older  
   * At least 3 participants under age 55  
   * Spread across cohorts

#### Secondary criteria (nice-to-haves)

1. **Multiple eligible family members scenario**  
   * Include at least 2 participants where multiple family members were eligible to file  
   * Screener: "Were there other family members who were also eligible to file for accrued benefits?"  
2. **Documentation complexity**  
   * Include at least 2 who needed probate letters (had to go through estate process)  
   * Include at least 2 who needed to get creditor waivers  
   * Include at least 2 who had difficulty obtaining death certificates or other documents  
3. **Awareness of other benefits**  
   * Include at least 4 who also filed for DIC or Survivors Pension  
   * Screener: "Did you also file for DIC (Dependency and Indemnity Compensation) or Survivors Pension?"  
4. **Digital literacy diversity**  
   * Screener: "How comfortable are you using websites or apps to complete forms online?"  
   * Include mix: At least 3 "Very comfortable," at least 4 "Somewhat comfortable," and at least 2 "Not very comfortable"  
5. **Education level diversity**  
   * Mix across education levels to understand readability needs  
6. **Experience with probate**  
   * Include some participants familiar with probate process  
   * Include some who had never dealt with estates before

## Timeline 🗓️

### Prepare

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 

- `Pilot participant name:` **Agile6 team**

### Research sessions
- `Planned dates of research:` **Dec 8 - December 12, 2025** 

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **60 minutes**
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **30 minutes**
  
- `Maximum Sessions per day:` **Preference is no more than 2, but 3 is fine if needed.**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

**`Week 1:`**

* **`Monday, December 8: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Tuesday, December 9: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Wednesday, December 10: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Thursday, December 11: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**  
* **`Friday, December 12: 9:00 AM - 12:00 PM EST, 1:00 PM - 5:00 PM EST`**
  
## Team Roles  🕵️👩‍💻👩‍🔬

- `Moderator:` **Andrea Chappelear**
- `Research guide writing and task development (usually but not always same as moderator):` **Andrea Chappelear**
- `Participant recruiting & screening:` **Perigean**
- `Project point of contact:` **[Enter full name]**
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **Andrea Chappelear**
- `Note-takers:` **A6**
- `Observers:` **[Enter full name]**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
