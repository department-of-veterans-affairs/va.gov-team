---
# Research Plan Metadata
title: "Research Plan for Status updates and SM renewal flow user testing – Medications messaging and status labels usability study"
date: 2025-11-21
last_updated: 2025-11-21
team: "OCTO-DE – Digital Health Modernization"
product: "Medications – Status updates and Secure Messaging (SM) renewal flow"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Veterans currently need to contact their provider by phone or secure message to request prescription renewals. Existing VistA prescription status labels are confusing, leading to misunderstandings about medication state and next steps. We are building a new authenticated prescription renewal flow on VA.gov (via Secure Messaging) and a new set of cross-system prescription statuses spanning Oracle Health and VistA, and need to evaluate whether these designs improve Veterans’ understanding and ability to manage their medications."
  product_location: "Authenticated VA.gov: Medications and Secure Messaging flows within My HealtheVet on VA.gov."
  user_familiarity: "Iteration on existing tools and workflows for VA prescription management (MHV medications and Secure Messaging) rather than a fully new product."
  product_brief_url: "https://www.figma.com/design/s1lAPraSoTHsevgl84SDoo/Source-of-truth---SM?node-id=4856-23543&t=IgJL64unibv2ExGT-1"

# Research Design
methodology: "Remote moderated usability testing"
research_format: 
  location: remote
  in_person_details:
    facility: ""
    point_of_contact: ""
    equipment: ""
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Evaluate whether Veterans understand the meaning of the new prescription statuses (and where confusion or misinterpretation occurs)."
  - goal_2: "Evaluate whether Veterans can successfully use the new Secure Messaging renewal flow on VA.gov to request medication renewals, and identify where they fail or deviate from the intended path."
  - goal_3: "Identify pain points, uncertainties, and opportunities for improvement in the new renewal flow and status messaging that can be addressed through design changes."

research_questions:
  - "Do Veterans understand the revised prescription statuses? If not, what do they think the statuses mean, and which elements cause confusion?"
  - "Can Veterans successfully and easily request a medication renewal using the new Secure Messaging renewal flow on VA.gov?"
  - "What aspects of the new experience (statuses, messaging, interaction design) appeal to and enable Veterans to complete their goals?"
  - "What changes would Veterans suggest to the flow, messaging, or labels to improve their experience managing medications and renewals?"
  - "Where in the flow do Veterans experience uncertainty or breakdowns, and what workarounds (if any) do they use today?"

hypotheses:
  - "Most Veterans will understand the revised medication statuses as intended."
  - "Some Veterans will equate 'refill' and 'renewal' and be confused about when and how to use each."
  - "Most Veterans will be able to successfully place a renewal request using the new Secure Messaging flow once they locate the appropriate entry point."

expected_outcomes: "Findings will indicate whether the new medication status labels improve Veterans’ understanding of medication state and next steps, and whether the new Secure Messaging renewal flow supports successful, efficient renewal requests. Insights will guide design refinements to the status taxonomy, copy, and interaction flow, inform future iterations of medications on VA.gov and My HealtheVet, and support readiness for implementation across Oracle Health and VistA."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation among Veterans who use (or could reasonably use) VA digital tools for prescription management, with intentional inclusion of older adults, assistive technology users, and Veterans with cognitive disabilities."
  
  primary_criteria:
    - "At least 7 participants able to test on desktop or laptop."
    - "At least 8 participants able to test on a smartphone."
    - "At least 4 participants who identify as having a cognitive disability."
    - "At least 7 participants who are 55+ in age."
    - "At least 7 participants who are 54 and under in age."
    - "At least 2 participants who identify as women."
    - "At least 4 participants from rural areas."
    - "At least 4 participants who use assistive technology."
    - "At least 2 participants who use a screen reader."
    - "At least 2 participants who use screen magnification."
    - "No more than 2 participants can have no prescriptions with the VA."
    - "No more than 3 participants can report that they do not use My HealtheVet on VA.gov to manage their prescriptions."

  secondary_criteria:
    - "At least 4 participants with a high school degree but not a college degree."
    - "At least 2 participants who identify as Black or African American."
    - "At least 2 participants who identify as Hispanic, Latino, or of Spanish origin."
    
  screener_questions:
    - question: "Which of the following ways would you request more refills after you ran out of your VA prescription?"
      qualifying_response: "Any except 'I don’t have any VA prescriptions' for most participants; up to 2 may have no VA prescriptions."
    - question: "About how often would you say you log in to My HealtheVet on VA.gov to manage your prescriptions? (“Manage” can involve checking on the status, requesting a refill, printing a list, or reading information about a prescription.)"
      qualifying_response: "Any response except 'I do not use MHV on VA.gov at all to manage my healthcare'; up to 3 may select 'I do not use MHV on VA.gov to manage my prescriptions.'"
    - question: "Do you need a screen reader or screen magnifier every time you use the Internet? We ask this question because we want to make sure that our website works for people who rely on these types of technologies."
      qualifying_response: "Mix of 'Yes' and 'No', ensuring at least 4 participants who use assistive technology; of those, at least 2 with screen readers and at least 2 with screen magnification."
    - question: "We want to make sure our website works for people with various levels of experience with screen readers and screen magnification. Please rate your experience level using a screen reader or screen magnifier."
      qualifying_response: "Beginner, Intermediate, or Advanced; aim for variation across experience levels."
    - question: "Do you find it difficult to remember or learn new things, focus on a task, or make decisions? We ask this question because we want to make sure that our tools work for people who live with challenges related to thinking and memory."
      qualifying_response: "Mix of 'Yes' and 'No', ensuring at least 4 participants who identify as having a cognitive disability."
      
participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 10
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-11-21 or 2025-11-24 or 2025-11-25"
  pilot_participant: "Medications developer (TBD)"
  research_dates: "2025-12-03 to 2025-12-16"
  research_review_submission: "2025-11-24"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits."
    key_results: 
      - "Improve satisfaction with web and mobile products by simplifying and clarifying prescription status messaging and renewal flows."
      - "Reduce time and effort Veterans spend managing renewals by enabling more self-service completion via VA.gov, decreasing reliance on phone calls."
  - objective: "Objective 2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA."
    key_results:
      - "Support secure, authenticated renewal requests through VA.gov, reducing error-prone and less secure channels for medication management."

veteran_journey_phases:
  - "Starting Up"
  - "Taking Care of Myself"
  - "Aging"
  - "Dying"
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "Prior MHV medications and devices research (see: https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?m=auto&node-id=2090-14060&t=If8qo2rddrTHtr05-1)"
    
tags:
  - "authenticated"
  - "usability-testing"
  - "veterans"
  - "evaluation"
---

	# Research Plan for Status updates and SM renewal flow user testing
> [!NOTE]
> *Questions about how to set up your research study? Reach out in the [#research-ops](https://dsva.slack.com/archives/C0216PL32HJ) Slack channel.* 

## Background 🏗️
<details><summary>Briefly describe the background of your product.</summary>
	
`What problem is your product trying to solve?`

**We are building a new authenticated prescription renewal request flow on VA.gov (via Secure Messaging) to reduce Veterans’ dependence on phone calls and ad-hoc communication for renewals. We are also introducing a new, simplified set of prescription status labels across Oracle Health and VistA to replace existing VistA statuses that are frequently cited as confusing or misleading. We need to understand whether these changes improve Veterans’ ability to understand medication state and manage renewals independently.**
  
`Where is your product situated on VA.gov? (ex: auth vs. unauth)`

**Authenticated VA.gov: medications management and Secure Messaging experiences within My HealtheVet on VA.gov.**
  
`What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?`

**The experience builds on existing My HealtheVet and VA.gov medications and Secure Messaging tools that many Veterans already use. The status labels and the specific renewal flow design are new iterations on existing functionality, not an entirely new product.**

`Product Brief`

**[Link to SM source-of-truth design file](https://www.figma.com/design/s1lAPraSoTHsevgl84SDoo/Source-of-truth---SM?node-id=4856-23543&t=IgJL64unibv2ExGT-1).**  
**[Link to medications and devices working file](https://www.figma.com/design/VunyfNQ9x7Bt58D9B2qnW5/%F0%9F%92%A1-Working-file--MHV-Medications---Devices-?m=auto&node-id=2090-14060&t=If8qo2rddrTHtr05-1).**

</details>

### [OCTO-DE Priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202025.md) 

<details><summary>Which OCTO priorities does this research support? Work with your VA lead and product manager as needed. </summary>


`Objective 1:  VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.`  

> - **Key Result 1:** Improve satisfaction with our web and mobile products by 5 points.
> - **Key Result 2:** We have reduced the total time Veterans spend waiting for a response from our digital experiences by 50%, towards a goal of less than 4 seconds per transaction.
> - **Key Result 3:** 100% of transactions received via our digital experiences are either processed correctly or we have notified the user of an error.

</details>

> [!TIP]
> Delete priorities not supported by this research.

### [Veteran Journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)

<details><summary>Where does your product fit into the Veteran journey?
Are there moments that matter?</summary>
	
- `Starting Up`
- `Taking Care of Myself`
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

`1.` **Evaluate whether Veterans understand the meaning of the new prescription statuses and identify which statuses or label elements cause confusion or misinterpretation.**

`2.` **Evaluate whether Veterans can successfully and efficiently use the new Secure Messaging renewal flow on VA.gov to request renewals, and identify where they struggle or drop off.**

`3.` **Identify pain points, uncertainties, and other usability issues in the new renewal flow and status messaging that can reasonably be addressed through design and content changes.** 
  
### Outcome
`How will this research advance your product to the next phase in the design process? What will you do with your learnings?`

---

**Findings from this study will validate or challenge the current prescription status taxonomy and the Secure Messaging renewal flow design. We will use the insights to:**

- **Refine status labels, definitions, and supporting copy so Veterans can more easily understand the state of their medications and what actions they can take.**  
- **Adjust the renewal flow (entry points, steps, error states, and confirmation messaging) to reduce confusion, improve task success, and lower reliance on non-digital channels (e.g., phone calls).**  
- **Identify additional content, training, or product dependencies needed before broader rollout across Oracle Health and VistA.**  

**This will help us move from design iteration to implementation-ready UX for medications and renewals on VA.gov.**

---

### Research questions
> [!NOTE]
> Do not write out all questions you plan to ask participants -- that should go in the` [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/conversation-guide-template.md)`

***Consider bucketing research questions under research goals and think about:***
	
`What will I do with what I learn from this question?`
  
`Does this question serve the goals of my study?`

**`1.` Do Veterans understand the revised prescription statuses as we intend, and if not, how are they interpreting them (especially around refill vs. renewal)?**

**`2.` Can Veterans successfully and easily complete a medication renewal request using the new Secure Messaging flow on VA.gov, from entry point through confirmation?**

**`3.` At what points in the renewal flow or when viewing statuses do Veterans feel uncertain, confused, or stuck, and what is driving that confusion (e.g., wording, layout, navigation)?**

**`4.` What aspects of the new statuses and renewal flow (e.g., clarity of language, visibility of key information, guidance on next steps) make the experience easier or more reassuring for Veterans?**

**`5.` What changes or improvements do Veterans suggest to the statuses, messaging, or renewal flow to better support how they actually manage their medications today?**

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

**We hypothesize that:**

1. **Most Veterans will correctly understand the new medication statuses, particularly those that map closely to real-world concepts (e.g., active, expired), though a small number of labels may still be ambiguous.**  
2. **Some Veterans will conflate “refill” and “renewal” and may not fully understand when they’re requesting one versus the other, especially for long-term medications.**  
3. **Most Veterans will be able to successfully complete a renewal request through the new Secure Messaging flow once they discover the correct starting point, but some will need additional visual or content cues to feel confident they completed the process correctly.**  
4. **Participants with cognitive disabilities and/or those using assistive technologies will surface additional clarity issues in language and page structure that can inform improvements for all users.**

---

## Methodology  🛠️
***Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design.*** 

<details><summary>Examples of common research methods include</summary> 
	
- `Semi-structured interviews - appropriate for generative research`
- `Contextual inquiry - appropriate for generative research`
- `Card sorts - appropriate for generative and evaluative research; depending on the study design` 
- `Tree tests - appropriate for evaluative research`
- `Usability testing - appropriate for evaluative research`
- `User acceptance testing (UAT) - required before product release`

</details>

**We will conduct remote moderated usability testing sessions with approximately 10 Veterans (target), using both a staging environment test user and a Figma prototype.**

- **Method:** Remote moderated usability testing with think-aloud.  
- **What we’ll test:**
  - New prescription status labels and their meanings in the context of a medications list.
  - The new Secure Messaging-based renewal flow, using a test user on staging (for live interaction) and a prototype where needed to cover additional scenarios.  
- **Why this method:**  
  - The designs are at a stage where we need to observe Veterans actually attempting key tasks (e.g., checking status, requesting renewals) and hear their interpretation of statuses and messaging in real time.  
  - Moderated sessions allow us to probe misunderstandings, ask participants to explain their mental models, and adjust tasks based on what we observe.  
- **Test account needs (staging):**
  - Medications feature the new statuses.
  - At least one or more renewable medications.
  - New Secure Messaging renewal flow is fully functional (entry points, messaging, confirmation).  
- **Operational steps:**
  - Use a shared staging test user for SM renewal flow (e.g., `Emma.smith@id.me / Tester1&`), updating password and resetting renewals after each session.
  - Use a Figma prototype for additional status testing scenarios:  
    - [Figma prototype for status testing](https://www.figma.com/proto/puYUxsa9cW7KsKDc1ztAOf/Status-Testing?page-id=0%3A1&node-id=1-5845&viewport=243%2C67%2C0.47&t=TX8HR32UqWDF5uF1-1&scaling=min-zoom).

<details><summary>Additional resources</summary> 
	
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA might apply to your study.
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what they need from you.
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-mobile)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines](https://depo-platform-documentation.scrollhelp.site/research-design/Inclusive-research-guidelines.1958773043.html).
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-safety-and-emergency-exit-strategies.1904328288.html).

</details>

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/how-to-do-research.md#in-person-research-logistics)

> [!TIP]
> Place [X] between brackets in edit mode to leave a checkmark in the correct box.

- [X] **Remote**
- [ ] **In-person**
      
> [!NOTE]
> If in-person, include:

- `Location:` **N/A – all sessions will be conducted remotely via Zoom (or comparable VA-approved platform).**
- `Point of contact:` **N/A**
- `Equipment used for research:` **Participant device (desktop, laptop, or smartphone), stable internet connection, and screen-sharing; moderator device for facilitation and notes.**

## Research materials 📔

> [!NOTE]
> **Your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.**

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

**For moderated interviews:** 
	
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-11-medications-messaging-and-status-labels-usability-study/conversation-guide.md) *(placeholder path; update as needed)*

**For moderated usability tests:** 
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications/research/2025-11-medications-messaging-and-status-labels-usability-study/conversation-guide.md)
- [Link to Figma prototype for status testing](https://www.figma.com/proto/puYUxsa9cW7KsKDc1ztAOf/Status-Testing?page-id=0%3A1&node-id=1-5845&viewport=243%2C67%2C0.47&t=TX8HR32UqWDF5uF1-1&scaling=min-zoom)
- [Link to SM source-of-truth design file](https://www.figma.com/design/s1lAPraSoTHsevgl84SDoo/Source-of-truth---SM?node-id=4856-23543&t=IgJL64unibv2ExGT-1)

**For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html)**
- N/A – this study is moderated.

**If recruiting outside of Perigean’s participant database:**
- N/A – recruiting via Perigean.

**Other materials:**

- [Link to test user login and instructions](https://github.com/department-of-veterans-affairs/va.gov-team/issues/125061)

## Recruitment 🎯	
*OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers.*

> [!NOTE]
> Before writing your recruitment criteria, be sure to review the following resources: 
> - [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants.
> - [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive in your recruitment approach.

### Recruitment approach
*Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them?* 

- **Intended audience:** Veterans who have VA health care, use My HealtheVet on VA.gov to manage their healthcare, and specifically use (or could reasonably use) VA.gov for prescription management.  
- **Recruitment partner:** Perigean will recruit Veterans according to the criteria and screener questions provided.  
- **Kickoff with Perigean:** We will request a 30-minute kickoff meeting to align on the sample, screening details, accessibility needs, and scheduling. Proposed times (all EST):  
  - 11/21 @ 2:30  
  - 11/24 @ 2:30  
  - 11/25 @ 3:00  
- **Inclusive strategies:**  
  - Intentional oversampling of older Veterans (55+).  
  - Intentional inclusion of Veterans with cognitive disabilities and Veterans who use assistive technologies (screen readers, screen magnification).  
  - Inclusion of rural Veterans and Veterans from racially and ethnically diverse backgrounds.  
  - Balance of desktop/laptop and smartphone users.  

### Recruitment criteria

- **Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants.**
- Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

- The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria.
- Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-maximum-variation-sampling-mvs).
- Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Review an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/cohorts.md)

### List the ideal completed sessions and total number and type (Veterans, caregivers, etc.) of participants for this study:
> [!NOTE]
> Your total number should equal **1.5x** your ideal completed sessions number *(e.g. for 10 ideal completed sessions, request 15 total participants)*


- `Veterans:` **15**
- `Caregivers:` **0**
- `Dependents:` **0**
- `Total:` **15**
- `Ideal completed sessions:` **10**

### Primary criteria (must-haves)
*What demographics, experience, and scenarios do you need participants to meet to effectively run your study?* 

- `At least 7 participants able to test on desktop or laptop.`
- `At least 8 participants able to test on smartphone.`
- `At least 4 participants who identify as having a cognitive disability.`
- `At least 7 participants who are 55+ in age.`
- `At least 7 participants who are 54 and under in age.`
- `At least 2 participants who identify as women.`
- `At least 4 participants from rural areas.`
- `At least 4 participants who use assistive technology (screen reader, screen magnifier, or other).`
- `At least 2 participants who use a screen reader.`
- `At least 2 participants who use screen magnification.`
- `No more than 2 participants can have no prescriptions with the VA.`
- `No more than 3 participants can report that they do not use MHV on VA.gov to manage their prescriptions.`

#### Secondary criteria (nice-to-haves)
*What criteria would strengthen your results?* 

- `At least 4 participants with a high school degree but not a college degree.`
- `At least 2 participants who identify as Black or African American.`
- `At least 2 participants who identify as Hispanic, Latino, or of Spanish origin.`

## Timeline 🗓️
> [!NOTE]
> **Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research date.**

### Optional Kick-off Call with Perigean

- `Suggested dates and times:` **11/21 @ 2:30 EST; 11/24 @ 2:30 EST; 11/25 @ 3:00 EST**

### Prepare
*When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1904328229.html).*

**A pilot session is required. Please indicate the date and name of a mock participant for a pilot session.** 
> [!NOTE]
> **Send pilot participant email in study Slack channel**

- `Pilot participant name:` **A medications developer (TBD)**  
- `Date and time of pilot session:` **One of: 11/21, 11/24, or 11/25 (exact date/time to be confirmed)** 

### Research sessions
- `Planned dates of research:` **12/03/2025–12/16/2025**

### Length of sessions
- `Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)` **Up to 1 hour**  
  
- `Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time)` **30 minutes**  
  
- `Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to get done, etc.)` **3**

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST)**
>
> **Place time slots between `hash marks` when in edit mode.**

- `12/03, Wed, 10:30 AM EST`
- `12/03, Wed, 12:00 PM EST`
- `12/03, Wed, 2:00 PM EST`
- `12/04, Thu, 10:30 AM EST`
- `12/04, Thu, 12:00 PM EST`
- `12/04, Thu, 2:00 PM EST`
- `12/05, Fri, 10:30 AM EST`
- `12/05, Fri, 12:00 PM EST`
- `12/05, Fri, 2:00 PM EST`
- '12/08, Mon 10:30 AM EST'
- `12/08, Mon, 12:30 PM EST`
- `12/08, Mon, 2:00 PM EST`
- '12/09, Tue, 10:30 AM EST'
- `12/09, Tue, 12:00 PM EST`
- `12/09, Tue, 2:00 PM EST`
- `12/09, Tue, 3:30 PM EST`
- '12/10, Wed, 10:30 AM EST'
- `12/10, Wed, 12:00 PM EST`
- `12/10, Wed, 2:00 PM EST`
- '12/11, Thu, 10:30 AM EST'
- `12/11, Thu, 12:00 PM EST`
- `12/11, Thu, 2:00 PM EST`
- `12/12, Fri, 10:30 AM EST`
- `12/12, Fri, 12:00 PM EST`
- `12/12, Fri, 2:00 PM EST`
- '12/15, Mon, 10:30 AM EST'
- `12/15, Mon, 12:00 PM EST`
- `12/15, Mon, 2:00 PM EST`
- `12/16, Tue, 10:30 AM EST`
- `12/16, Tue, 12:00 PM EST`
- `12/16, Tue, 2:00 PM EST`
  
## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/65761)) has changed and we can no longer require them.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and any other team members who will be in contact with participants.

- `Moderator:` **Anneka Van Garza, Espy Thomson**	
- `Research guide writing and task development (usually but not always same as moderator):` **Anneka Van Garza**		
- `Participant recruiting & screening:`	**Perigean**	
- `Project point of contact:` **Anneka Van Garza, Athena Bozak, Cara Frissell**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **Sarah Horton**	
- `Note-takers:` **Athena Bozak, Cara Frissell, Sarah Horton** ***or*** **Perigean (as needed)**	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant but are not directly involved in its day-to-day execution.`

- **[TBD – add VA stakeholders, design and engineering team members as needed]**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`
