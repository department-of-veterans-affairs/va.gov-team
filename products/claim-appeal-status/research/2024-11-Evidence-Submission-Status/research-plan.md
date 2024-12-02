# Research Plan for Claim Status Tool, Evidence Submission Status
*Questions about how to set up your research study? Reach out in the #research-ops Slack channel.* 

## Background
Briefly describe the background of your product. Consider:
- What problem is your product trying to solve?
- Where is your product situated on VA.gov? (ex: auth vs. unauth)
- What is Veterans’ familiarity with this tool? Is this a new product or an iteration on an existing one?

Silent Failure occurs when a Veteran submits a form or evidence, but it fails to reach downstream services or owners of record. When the submission fails, the Veteran isn’t notified of this problem. This lack of real-time updates creates confusion, delays corrective action, increases support inquiries, and can lead to repeated failed attempts.

Our designs aim to provide Veterans with real-time transparency into the status of their evidence submissions (e.g., "Pending," "Received," "Failed"). We believe this visibility will reduce anxiety, while clear, actionable feedback on failures will boost Veterans' confidence in the process and enable immediate resolution. This approach is also expected to reduce support inquiries for CST.

As part of this work, we’ve added new alert messages to keep Veterans informed with status updates. Additionally, we’ve created a page offering Veterans alternative options for manually submitting files to the VA in case of system failures. We need CAIA’s support with content edits for these new additions.

[Link to product brief]((https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/CST%20Product/Evidence%20Submission%20Status%20Initiative.md).

### OCTO Priorities 

Which [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md) does this research support? Work with your VA lead and product manager as needed.

Our platforms are the best way to deliver products at VA.

### Veteran Journey
Where does your product fit into the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf)?

This work supports a Veteran whenever they are filing a disability compensation claim, which could occur across a wide swath of the Veteran journey, ranging all the way from "Getting out" to "Aging."

## Research Goals	
What are you trying to learn from this research? 

*Pro tip: Limit 3 goals per study. If you have more than 3 goals, consider how to break up your research into iterative studies.* 

### Outcome
How will this research advance your product to the next phase in the design process? What will you do with your learnings?

* Veterans gain real-time transparency into the status of their evidence submissions, allowing them to track each stage in the process (e.g., "Pending," "Received," "Failed").
* Veterans experience reduced anxiety due to timely updates, gaining confidence in the document submission process.
* Veterans receive clear, actionable feedback on failed submissions, including instructions on how to resolve issues, empowering them to take immediate corrective action.
* CST experiences a decrease in support inquiries related to document submission status.

### Research questions
Consider bucketing research questions under research goals. For each question, think about:
- What will I do with what I learn from this question?
- Does this question serve the goals of my study?
- Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md)

1. Do users make the connection between email content and these UI states?		
2. Is the pending state useful - do they know what to do with this?		
3. Does this create a better mental model for users? 		
4. Are users less surprised by the error email if they see this pending state?

### Hypothesis
What do you intend to learn and measure from this study? Think through these prompts to develop a strong hypothesis.
- What do you already know about this problem space?
- What do you think users will do or think about this product? (Identifying our assumptions helps us be aware of biases we may unintentionally bring into the study, so don’t skip this step!)
- Write a generalized statement that combines what you know + what you think will happen during the study. 
- Remember to constrain the hypothesis to the goals of your study!

* Veterans will benefit from increased clarity in document status updates and failure notifications within CST.
* Real-time status transparency will enhance Veterans' confidence and reduce anxiety during the evidence submission process.
* Providing in-app failure notifications will improve Veterans' ability to take effective, timely corrective actions.
* In-app status updates will complement email notifications, providing Veterans with additional clarity and reducing the need for support inquiries.

## Methodology	
Describe the method you’re planning. You should be able to explain why this method is appropriate for the goals of the research and maturity of the design. 

Semi-structured interviews

Additional resources:
- Please review the [PRA primer](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-paperwork-reduction-act.md) to educate yourself on how PRA impacts the research we do as a government project. 
- Review the [Perigean recruitment guidance](https://depo-platform-documentation.scrollhelp.site/research-design/Recruiting-Participants.1958773044.html) to understand how Perigean recruits, and what types of research they can support. 
- If conducting testing on mobile, refer to the [mobile research guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/Conducting-Research-Sessions.1958773061.html#ConductingResearchSessions-Researchingwithmobileusers)
- If conducting [unmoderated usability research, refer to the guidance here.](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- If conducting [research with disabled Veterans, refer to this checklist](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users) and [follow disability etiquette guidelines.](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)
- In the rare event of an emergency during research, be prepared by reviewing guidelines for [research safety and emergency exit strategies](https://depo-platform-documentation.scrollhelp.site/research-design/Research-Safety-and-Emergency-Exit-Strategies.2143649793.html).

### Location
Where will you be holding the research sessions? Be sure to include whether this is remote or in-person research. [Learn more about setting up in-person research.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/planning-in-person-research.md)

Remote on Zoom

### Research materials
*Note: your OCTO/VA lead must review and approve all research materials – including this plan –  prior to submitting a recruitment request.*

Provide a link to any materials you need to run your study, including any materials needed for set up and recruitment.  

For moderated interviews:
- [Link to conversation guide](url goes here) 

For moderated usability tests: 
- [Link to conversation guide](url goes here)
- [Link to prototype](url goes here)

For [unmoderated testing:](https://depo-platform-documentation.scrollhelp.site/research-design/Planning-Unmoderated-Studies.1904738369.html) 
- [Link to email with instructions](url goes here)
- [Link to prototype or OptimalSort session for group A](url goes here)
- [Link to prototype or OptimalSort session for group B](url goes here)

If recruiting outside of Perigean’s participant database:
- [Link to recruitment flyer](url goes here)
	
## Recruitment	

OCTO works with Perigean, a small business, to handle the [recruitment](https://veteranusability.us/), scheduling, and compensation of Veterans and caregivers. 

Before writing your recruitment criteria, be sure to review the following resources. 
- [Refer to the Perigean Recruitment Guidance](https://depo-platform-documentation.scrollhelp.site/research-design/recruiting-participants) to learn how Perigean recruits, screens, and prepares participants for research. 
- [Refer to the inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md) to learn how to be inclusive of underserved Veteran communities.

### Recruitment approach
Who is your intended audience for this research (e.g. Veterans, caregivers, VSOs, SMEs), and how will you recruit them? 

Pro tip:
- For remote moderated studies with Veterans and caregivers, we recommend using Perigean to recruit participants. 
- Perigean cannot recruit VA employees or VSOs. Work with your VA lead to recruit these groups. 
- Perigean can also support remote, unmoderated studies, however, these studies require strict recruitment requirements. (Additional guidance forthcoming; reach out to #research-ops in the interim.)

Which inclusive research strategies are you leveraging for this study? OCTO recommends using a lean maximum variation strategy for most studies. Refer to the resources above to learn more. Read this [introduction to inclusive research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md) and use the [recruitment checker (google sheets)](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit?usp=sharing) to understand OCTO's targets for inclusivity.

### Recruitment criteria
List the total number and type (Veterans, caregivers, etc.) of participants for this study. 

15 total participants:

5 Black Veterans
5 Veterans age 55-64+
4 Veterans without a degree
3 Assestive technology users
At least 5 women Veterans
The participants must be using a desktop device during the study.

**Primary criteria (must-haves)**
What demographics, experience, and scenarios do you need participants to meet to effectively run your study? 

Write any recruitment criteria for experience or scenarios as screener questions with qualifying responses. Perigean will use these verbatim to recruit participants. Consider providing links to products and/or clear descriptions to ensure participants understand the question.
  Example: Have you been to a VA urgent care facility in the last 6 months? [answer should be yes to qualify.]

> Tip: The more recruitment criteria you have, the less likely that a small sample of participants will be able to meet all criteria. Consider how you could leverage the [lean maximum variation sampling (MVS) approach](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#lean-mvs-strategy) by breaking up criteria for your study into multiple cohorts that each isolate one primary criteria. Perigean will consider each cohort as a separate recruitment effort, increasing the chances of meeting all criteria for your study. [Go to an example of the multiple cohort approach.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/generative-research-study-1/2020-12.research-plan1.md#participants-and-recruitment)

**Secondary criteria (nice-to-haves)**
What criteria would strengthen your results? 

## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email: **TBA (rocio.de-santiago@coforma.io)**
* Date and time of pilot session: **TBA**

### Research sessions
* Planned dates of research: **TBA**

### Length of sessions
* Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) 
* Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)

* Session length: 1 hour
* Buffer time between sessions: 1 hour 
* Maximum Sessions per day: 2 sessions per day

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.

Monday - Friday: 9 AM ET - 3:30 PM ET
	
## Team Roles	
**Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.

**Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Send emails only for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- Moderator: Gary Homidas (gary.homidas@adhocteam.us)
- Research guide writing and task development: Gary Homidas (gary.homidas@adhocteam.us), Skyler Schain (skyler.schain@coforma.io)	
- Participant recruiting & screening: Perigean
- Project point of contact: Gary Homidas (gary.homidas@adhocteam.us), Jacob Worrell (jacob.worrell@adhocteam.us)
- Participant(s) for pilot test: 
- Accessibility specialist (for sessions where support for assistive technology may be needed):	David Kennedy (david.kennedy@adhocteam.us)
- Note-takers/Observers: Skyler Schain (skyler.schain@coforma.io), Jacob Worrell (jacob.worrell@adhocteam.us), David Kennedy (david.kennedy@adhocteam.us), Peri McLaren (peri.mclaren@adhocteam.us), Jerek Shoemaker (jerek.shoemaker@adhocteam.us), Sam Cormier (sam.cormier@coforma.io), Julie Strothman (julie.strothman@va.gov)
