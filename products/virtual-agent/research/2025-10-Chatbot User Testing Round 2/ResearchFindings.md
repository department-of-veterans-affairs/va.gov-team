---
title: "Chatbot User Testing Round 2"
product: "VA Chatbot"
team: "Chatbot Team"
office: "Office of the CTO - Digital Experience (OCTO-DE)"
date: "2025-10"
researchers:
  - "Lucas Wright"
research_goals:
  - goal_1: "Increase the accuracy of the answers provided by the VA chatbot."
  - goal_2: "Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov."
  - goal_3: "mprove the design by finding painpoints in the current proof of concept designs to accomidate any/all level of users."
methodology:
  "Moderated usability testing"
devices_used:
    desktop: X
    tablet:
    smartphone:
    assistive_technology: X
participants_total: 17
demographics:
  veterans: X
  service_members: 
  caregivers: X
  dependents: X
  VA_staff: 
  age:
    "25-34": 1
    "35-44": 4
    "45-54": 3
    "55-64": 3
    "65+": 6
    unknown: 0
  education:
    high_school: 1
    some_college: X
    associates: 1
    bachelors: 6
    masters: 6
    doctorate: 0
    unknown: 0
  location:
    urban: 11
    rural: 6
    unknown: 0
  race:
    white: 3
    black: 5
    hispanic: 2
    biracial: 5
    asian: 1
    native: 1
  disability:
    cognitive: 0
    AT_beginner: 0
    AT_advanced: 0
    screen_reader_desktop: 1
    screen_reader_mobile: 0
    magnification_zoom: 0
    speech_input: 0
    hearing_aids: 0
    sighted_keyboard: 0
    captions: 0
key_findings:
  - "The chatbot is generally well-received, appreciated for concise answers, hyperlinked instructions, and clarity."
  - "Efficiency was praised compared to traditional support (“I liked that I didn’t have to wait on hold”)."
  - "Most found the format easy to scan/read, crediting bullet points, links, and breaks in information."
  - "Multiple sessions (especially among older or less tech-savvy users) noted the value in direct links and succinct instructions."
  - "Several participants indicated that answers were at a 'third grade reading level,' perceived as accessible."
  # etc.
recommendations:
  - "Clarifying Questions: Participants want fewer generic “please clarify” prompts; chatbot should proactively guide users to rephrase or select from options."
  - "Accessibility: Session 8 and feedback from visually impaired participants highlight need for streamlined navigation (screen reader click cues, skip navigation), clearer input guidance, and more auditory feedback."
  - "Choice Overload: Some feedback that too much detail or too many steps can overwhelm or slow the process."
kpi_alignment:
  - "Resolution Rate: High—Most participants reported being able to resolve issues (average 4.7/5 confidence in task execution)."
  - "First Contact Resolution: Average participant required 1-2 rephrasings per scenario to get a tailored answer, indicating room for improvement."
  - "User Satisfaction: 4.8/5 (average), consistent with Domo-reported satisfaction goals."
  - "Time to Resolution: Chatbot outperformed phone support in speed; delays only occurred when clarification was needed."
outcomes:
  user: "High satisfaction with general chatbot usability, especially for primary account issues."
  business: "Strong alignment with KPIs, especially resolution rate and user satisfaction."
opportunity_areas:
  - "Longitudinal Use: Follow-up with participants over weeks/months as suggested by Session 8 for more robust insight (“I haven’t interacted with it enough to give a definitive answer”)"
  - "Edge Case Simulations: More accessibility testing and rare-case recovery (e.g., multiple lockout scenarios, name-change/identity mismatch)."
  - "Mobile Device/Browser Compatibility: Session 7 notes Safari issues not present in Chrome; cross-platform reliability needs improvement."
further_research_needed:
  - "Expand Testing for Non-English Speakers and Rural Users: No explicit feedback collected from these groups; future sessions should target these demographics."
  - "Caregiver & Proxy Use Cases: Additional focus needed, given mixed feedback on authentication and permission issues."
  - "Mobile and tablet platforms"
underserved_groups_missing:
  - "Non-English Speakers: No test participants explicitly mention language barrier."
  - "Rural/Low Bandwidth Users: No tests for low-connectivity or device constraints."
  - "Severe Cognitive Impairment: No assessment of users with cognitive disabilities beyond “cognitive load manageable.”"
secondary_research:
  - "Web analytics"
  - "SME interviews"
synthesis_tools_used:
  - "Mural"
  - "Affinity Mapping"
---

---

# Chatbot User Testing - Round 2 Research Findings 

**Office of the CTO - Digital Experience (OCTO-DE), Chatbot Team**

**Date:** 11/21/2025

**Contacts:** Lucas Wright

**[Research Readout (PDF)](link-here)**  
*Add a link to your research readout deck, if available.*


**Jump to:**
- [Hypotheses and conclusions](#user-content-hypotheses-and-conclusions)
- [Key findings](#user-content-key-findings)
- [Recommendations](#user-content-recommendations)
- [Product User and Business Outcomes](#user-content-product-user-and-business-outcomes)
- [Key Performance Indicators](#user-content-key-performance-indicators)
- [Next Steps](#user-content-next-steps)
- [Further research needed](#user-content-further-research-needed)
- [Appendix](#user-content-appendix)
- [Research participants](#user-content-research-participants)

## Research Goals
The VA Chatbot aims to help Veterans self-serve and access information on VA.gov more easily, ultimately reducing call volume and supporting task completion without human assistance. The product assumes that improved digital experiences can shift behavior away from phone-based support, but gaps may exist in understanding edge cases, digital literacy, and accessibility for all user groups. The use case of this specific project is login or sign in questions, with a specific focus on unauthenticated questions for the chatbot. The long term goal of the chatbot is to have it in the bottom right corner of every page of VA.gov for use by Veterans and it is well documented that location of the chatbot is a poinpoint for many Veterans at the current time.

### Goals

**Clarity & Focus:**

The goals are clear, actionable, and generally measurable (accuracy, readability, pain points). However, specific success metrics (e.g., target accuracy rates, satisfaction thresholds) would make them more robust.


`1.` **Increase the accuracy of the answers provided by the VA chatbot.**

`2.` **Present these answers in an easy to read, easy to follow format so Veterans can get the answers they need to complete the tasks they need to on VA.gov.**

`3.` **Improve the design by finding pain points in the current proof of concept designs to accomidate any/all level of users.** 


## Research Questions


1. Is the chatbot design easy to use and understand for users of all technical ability?

2. Are users able to find answers to simple questions without authentication?

3. Are the disclaimers and warnings timely and useful?

4. Are users getting frustrated if questions are not properly answered?

5. Are the lenghts of answers appropriate?

6. How can we improve design?

7. Are interactions quick and get the user to their intended destination in a timely manner?

8. How does the chatbot impact Veterans’ perceptions of VA digital services?

9. What prevents users from trying or returning to the chatbot?

10. Are there differences in experience based on device type or internet access?


## Methodology 

For round 2 of research we will be conducting two differnt methods of research. The first will be hour long moderated usability testing using Veterans recruited from Perigean. The second method will be to recruit internal Veterans from within VA by using a survey to select the users. Those users will then be give 2 weeks to test the chatbot and use it as any user would, after which we will hold qualitative focus group feedback sessions in small 5-7 person groups.

- Method 1: Moderated usability sessions 
- Method 2: Unmoderated testing followed by focus group feedback  (Begins DEC 1 2025)


## Hypotheses and Conclusions

**Hypothesis Statement:**

1. By utilitzing LLM and/or AI in the current proof of concept, the chatbot will accurately answer Veterans' questions and help them complete tasks on VA.gov by interacting with test subjects and responding to feedback.
    1. TRUE: The chatbot is generally appreciated for concise answers by users.  When given follow up questions such as "Did this answer make sense?" or "Was all information provided?" or "Was it easy or difficult to find what you needed?", the overwhelming majority of users had little to no problem getting the chatbot to answer their question. 
1. The answers will be clear, trustworty and channel agnostic. 
    1. TRUE: The chatbot is generally well-received and praised for its clarity by test participants.  Most found the format easy to scan/read, crediting bullet points, links, and breaks in information. None of the participants that were tested said that they felt confused nor did they feel that the chatbot provided innacurate or incorrect answers during their sessions. All of them said they trusted the answers and would have no issue using the instructions given in a real-life situation. 
1. Ratings on the scoring matrix for accuracy, clarity, completeness and cognitive load will be 4.3 or above. 
    1. TRUE: Overall satisfaction for all categories was 4.6/5
1. The chatbot will ask relevant follow up questions if needed.
    1. MAYBE TRUE:  For some tasks the chatbot was able to ask pertinent follow up questions.  However, in some instances the chatbot hallucinated giving no answer at all or giving only partial information. Many found that rephrasing their question improved responses; the bot sometimes required "more details" to give specific guidance.
1. Compared to other options, users would prefer getting an answer from a chatbot instead of calling VA or talking to a VSO.
    1. TRUE: Efficiency was praised compared to traditional support (“I liked that I didn’t have to wait on hold”). Most user pointed out that the quick answers from the chatbot were preferred to other options and it was also noted that the load time was minimal for the chatbot to produce the desired answers


## Key Findings

1. Users had no problem finding the answers to their questions very quickly.
1. There needs to be further refinement on clarifying questions.
1. There are serious issues with accessability for users that require screen readers.
1. The chatbot is seen by users as accurate, clear, complete and easy to understand.
1. Only direct links should be used in answers to avoide confusion by users.

## Details of Findings 

### Finding 1
Users had no problem finding the answers to their questions very quickly.  Only 1 of the 17 users had trouble with finding the exact answers that they needed, and that was due to issues with the accessability of the chatbot.
“It was easy, because all the information I need is sitting right in front of me, and then there’s the link to just log on and create that account...” — Session 13, Veteran
“Chatbot is more efficient than phone calls” (several sessions)

### Finding 2  
There needs to be further refinement on clarifying questions. While some users who seemed comfortable with the technology were able to rephrase questions to find the desired answers, some users became stuck and said they might give up and have to call the 800 number.  
“...At points, I felt stuck—it kept asking me to clarify my question.” — Session 16
“Would call support/VA if stuck” (Fallback behavior after chatbot use)

### Finding 3
There are serious issues with accessability for users that require screen readers.  The user that was using JAWS had a very tough time getting to the answer after he typed in his question.  
“When you've accomplished something, if you've got an answer to something...You feel more confident. But if you're in the land of asking one question, and you're not me going on something else...it's not only frustrating but you feel like what am I doing wrong?” — Session 8, visually impaired Veteran using JAWS

### Finding 4
The chatbot is seen by users as accurate, clear, complete and easy to understand.
| Category       | Average Score |
|----------------|--------------|
| Accuracy       | 4.7          |
| Clarity        | 4.3          |
| Completeness   | 4.7          |
| Cognitive Load | 4.7          |

Overall average of 4.6 rating on all 4 categories.

### Finding 5
Only direct links should be used in answers to avoide confusion by users. Numerous answers talk about login.gov or id.me and when using those in the answer they are hyperlinked, which causes the users to click on them.  However, further down the answer the direct link with the exact page they need is usually found.  To avoid unwanted clicks and user confusion, only make the direct page with the anser hyperlinked instead of when the website is being referenced.


---

## Additional Insights
- Choice Overload: Some feedback that too much detail or too many steps can overwhelm or slow the process.
- Many users liked the layout with helpful bullet points and hyperlinks. They added it made the answers easy to read. 
- User Mental Models: Many phrased their questions conversationally (not always matching search intent), expecting the chatbot to infer context. Most recognized quickly that the more details they provided, the better/clearer answer they received (“Chatbot only gives as much as you give it”). Some expressed annoyance at this, preferring one-and-done answers.
- Choice Overload: Some feedback that too much detail or too many steps can overwhelm or slow the process.
- “If I can't find it on the VA site, I'll Google it”  — Session 1 participant (illustrating common fallback behavior).


## Recommendations

1. Clarifying Questions: Participants want fewer generic “please clarify” prompts; chatbot should proactively guide users to rephrase or select from options.
1. Accessibility: Session 8 and feedback from visually impaired participants highlight need for streamlined navigation (screen reader "click" cues, skip navigation), clearer input guidance, and more auditory feedback.
1. Expected Placement: The majority expect the chatbot widget in the bottom right corner (industry standard), or “prominent” top placement. Some suggested persistent/floating widget for access from any page.
1. Reduce Overload, Strengthen Formatting: Continue using bullet points, separate/link out long content; offer options for more/less detail.
1. Fallback to Human Help: Make “talk to agent” or “call support” obvious after failed chatbot scenarios (especially for lockout or authentication).

## Product User and Business Outcomes


### Desired User Outcome 
This research supports our desired user outcome by giving users answers to their questions in a fast and efficient manner.  By having high confidence and resolution scores, Veterans are more likely to use the chatbot to answer their questions.
 
### Desired Business Outcome
This research supports our desired business outcome by reducing the number of calls to VA call centers. 


## Key Performance Indicators
The results of this user research directly align with the following areas of KPI: 
- Resolution Rate: High—Most participants reported being able to resolve issues (average 4.7/5 confidence in task execution).
- First Contact Resolution: Average participant required 1-2 rephrasings per scenario to get a tailored answer, indicating room for improvement.
- User Satisfaction: 4.8/5 (average), consistent with Domo-reported satisfaction goals.
- Time to Resolution: Chatbot outperformed phone support in speed; delays only occurred when clarification was needed.



## Next Steps

- Work on clarifying questions
- Improve accessibility, especially for screenreaders
- Make chatbot ubiquidous and easy to find
- Give an option for human agent if user becomes frustrated or lost


## Further research needed
1. Expand Testing for Non-English Speakers and Rural Users: No explicit feedback collected from these groups; future sessions should target these demographics.
1. Expand Testing to User with Cognitive Disabilities: No users from this demographic have been tested and gaining insight from these users is important.
1. Expand Testing to Mobile and Tablets: No data has been collected from users on these types of devices.
1. Expand Testing to Include More Users With Assistive Technology: To date, only 2 users of his demographic have been tested.


## Appendix

### Research documents
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/Chatbot%20PoC%20Initiative.md)
- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/ResearchPlan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/ConversationGuide(PerigeanVets).md)
- [AI Overvirew of transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/Copilot%20analysis.md)

### Tools used for Synthesis

Mural, Copilot
  
### Pages and applications used

https://dev.va.gov/contact-us/virtual-agent/


## Secondary research 
It is worth noting that there was [ample research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research) for the virtual-agent product and the team includes developers from this product team. The finding from the first round of moderated user testing that was completed in July & August of 2025 can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-07-Chatbot%20User%20Testing/ResearchFindings.md). All of this user research and feedback has been applied to proof of concept version of the chatbot that users will be using for this round of testing.

---

### Controlled Study Research (2021-2022)
**Reference:** [Controlled Study Research Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0628484c84ed3a8cae1819ee9a0f5895dd2c7cda/products/virtual-agent/research/controlled-study/research-report.md)

**Key Findings:**

- Veterans expect the chatbot cannot answer in-depth questions (appropriate expectation-setting)
- Accuracy shapes trust more than personality/tone
- Veterans were willing to attempt authentication to get personalized answers (builds case for future authenticated features)
- Unauthenticated mode inadequate for task completion

**Implications for Round 2:**

- Round 2 should explicitly manage expectations: Include disclaimer messaging testing (RQ3)
- Focus metrics on accuracy impact on trust, not just accuracy alone
- Consider future research on authenticated chatbot experience (currently out of scope)

### Sign-In Support Research (January 2023)
Reference: [Previous research on Sign In Support feature](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research/signin-support) — 12 remote, moderated sessions

**Strategic Connection:**

- Sign-in was a major use case in prior research
- Current Round 2 focus on unauthenticated use may underexploit learnings from auth flow testing
- Round 2 could include screening question: "Have you tried the sign-in feature?" to measure adoption

### Chatbot Placement Research (August-September 2022)
Reference: [Chatbot Placement Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/chatbot-placement.md) and [Move the Chatbot Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research/move-the-chatbot)

**Key Findings:**

- Veterans expect chatbot in lower right corner (web convention)
- Discoverability on Contact Us page alone is limiting factor
- Screen reader users need skip links and proper ARIA labels
  
**Implications for Round 2:**

- RQ10 (device/access differences) should incorporate accessibility learnings:
	- Test with screen reader users using conversation guide questions specific to ARIA implementation
	- Validate skip link functionality

### Prescriptions Skill Research (June-October 2023)
Reference: [Prescriptions initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research/prescriptions) — Multiple rounds: Entries/Exits (5 sessions), Skill Prototype (6 sessions), Screenreader testing (1 session)

**Strategic Insight:**

- Multi-round testing approach similar to current Round 1 → Round 2 progression
- Prescriptions feature ultimately required live agent handoff for complex troubleshooting
- Implication: Round 2 should measure handoff clarity and escalation triggers

### GenAI Integration Decision Architecture (2025)
Reference: [Integration of GenAI into VA Chatbot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/0903ee278ed9a3671866df1b2a132fd5314788bf/products/virtual-agent/product/genai.md)

**Critical Finding:**

> "The simple RAG-based PoC was found to produce too many hallucinations to be fit for purpose."

**Strategic Implication for Round 2:**

- Round 2 hypothesis assumes LLM improves accuracy, but this architecture document warns of hallucination risks
- Round 2 should include explicit hallucination detection metrics:
	- Percentage of responses containing factually incorrect information
	- User's ability to detect hallucinations
	- Recommended monitoring mechanisms for production

   
### Research participants 

#### Recruitment criteria

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

#### Demographics 

We talked to 17 participants.
We had 5 no-show participants.

Audience segment:
* Veterans: 13
* Caregivers: 3
* Family members of a Veteran: 1


Gender:
* Male: 10
* Female: 7


LGBTQ+:
* Transgender: 1
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: 1
* Gay, lesbian, or bisexual: 2


Devices used during study: 
* Desktop: 17
* Tablet: 0
* Smart phone: 0
* Assistive Technology: 1


Age:
* 25-34: 1
* 35-44: 4
* 45-54: 3
* 55-64: 3
* 65+: 6
* Unknown: 0


Education:
* High school degree or equivalent: 1
* Some college (no degree): 3
* Associate's degree, trade certificate or vocational training: 1
* Bachelor's degree: 6
* Master's degree: 6
* Doctorate degree: 0
* Unknown: 0


Geographic location:
* Urban: 11
* Rural: 6
* Unknown: 0


Race:
* White: 3
* Black: 5
* Hispanic: 2
* Biracial: 5
* Asian: 1
* Native: 1


Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 1
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 0
* Sighted keyboard: 0
* Captions: 0


#### Underserved groups we haven’t talked to 
> [!NOTE]
_Complete the [VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726):_
> 1. Duplicate the ***Template*** worksheet
> 1. Enter your participant information **(see the *Template Instructions* worksheet for details)**
> 1. Make a screenshot of the cells that you want to share and paste it into this report below
> 1. Generate an accessible version of those cells using Github Copilot Chat:
>    - Start a new Github Copilot chat
>    - Enter: "I want to convert these spreadsheet cells into a table in markdown:" 
>    - Copy and paste the cells from the recruitment checker spreadsheet that you've filled in
>    - Copy the resulting markdown table by clicking the copy icon in the Copilot chat, and paste it into this report below 
>    - (If Copilot returns an error, try using a different AI model, such as "Claude Sonnet 3.7 Thinking")

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

![Table of underserved groups of Veterans showing how many of each were in this study as compared to target numbers. Data available in the table below this image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/2025-10-Chatbot%20User%20Testing%20Round%202/Demographics.png)

#### A more accessible version of the table in the above image

### Recruitment of underserved groups in Chatbot User Testing

➡️ _[paste markdown table of completed recruitment checker from Github Copilot chat]_


