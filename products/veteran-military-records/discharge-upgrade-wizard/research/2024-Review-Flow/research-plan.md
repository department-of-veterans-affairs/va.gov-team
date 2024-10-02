# Research Plan for [Public Websites, Discharge Upgrade Wizard, October 2024]
## Background
The Discharge Upgrade Wizard is part of the unauthenticated experience and uses a [wizard pattern](https://design.va.gov/patterns/wizards) to guide Veterans through an optimized series of questions based on their circumstances. The wizard pattern has been deprecated by the Design System team and is being updated to the recommended [sub task pattern](https://design.va.gov/patterns/help-users-to/complete-a-sub-task). This pattern allows Veterans to check and edit their answers at the end of the flow. We’re enhancing the current edit flow to account for the branching logic in this wizard and help Veterans understand why they may need to answer more questions after editing an answer.

After reviewing past research, most studies test the [Edit by Section design](https://design.va.gov/templates/forms/review) found on form review pages instead of the Edit by Field design found on wizards. No past studies have tested editing a flow that contains branching logic. The Veterans Facing Forms team is also working
on an experimental design for editing questions with branching logic and this study could influence their work.

- [Link to product brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/initiatives/2024-discharge-upgrade-wizard-subtask/initiative-brief.md)
- [Link to secondary research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/secondary-research.md)
- Link to card in research repo (when available)

### OCTO Priorities
This research aligns with the following [OCTO priorities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/strategy/OCTO-DE%20Priorities%202024.md):
- Our digital experiences are the best way to access VA health care and benefits.
     - CSAT for our web products have increased by 5 points.

### Veteran Journey
There are many potential touchpoints between the Veteran and this application throughout the [Veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):
- Getting out (Engaging VA to access benefits and services)
- Starting up (Attending to health needs)
- Taking care of myself (Recognizing and addressing mental health needs, Managing primary care and chronic health issues, Seeking support for an acute health event, Maintaining my health)
- Retiring (Taking care of my health, Finding additional sources of income)
- Aging (Managing my declining health, Planning for long term care)

## Research Goals
The purpose of this research is to find out whether we’ve met these goals:
- Veterans can understand how to edit an answer that introduces branching logic and
navigate back to the review page.
- Veterans can understand why they may be asked additional questions when editing an
answer to a particular question.
- After editing a question, updates to the review page are clear and easy for Veterans to
understand.
- Veterans can navigate through the entire flow using the subtask pattern with ease.
- Veterans that use assistive technology, like screen readers or screen magnifier technology, can navigate through user flows with ease. 

### Outcome
Learnings will help enhance the edit flow to account for questions with branching logic.

### Research questions
1. What feedback do Veterans have on editing questions with branching logic?
2. What feedback do Veterans have on the entire edit flow?
     - Alerts on question and results pages
     - Back and Continue button functionality
3. What feedback do Veterans have after the review page has been updated with new questions and answers?
4. Do Veterans understand how their answers relate to their results?

### Hypothesis
1. The edit flow is simple enough for Veterans to understand and the actions in this flow are what they expect.
2. Veterans will understand that they may be asked to answer additional questions.
3. Veterans will understand the updated review page and how it relates to the questions they answered.
4. Veterans will understand how their answers relate to their results.
5. Veterans will find the content of the questions relevant to their understanding of a Discharge Upgrade and how it applies to them.

## Methodology
We will conduct remote moderated usability testing to observe research participants using the Discharge Upgrade Wizard in a live coded environment (staging or production) with the updated sub task pattern. This will allow us to use the current branching logic and our experimental edit flow pattern.

### Location
Sessions will be conducted over Zoom, and we would like Zoom transcripts please.

### Research materials
- [Link to conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/veteran-military-records/discharge-upgrade-wizard/research/2024-Review-Flow/conversation-guide.md)
- [Link to DUW in production](https://www.va.gov/discharge-upgrade-instructions)
- [Link to Research Notetaking Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726091853497/11d98e6ba53e1a738c258f67c2671a8e43d7908c?sender=u01810f3edbfc878c08be5925)

## Recruitment
### Recruitment criteria
**13 Veterans** who meet the below criteria in order to get **11 completed sessions**. This will
include 3 assistive tech sessions.

**Primary criteria**
- At least 5 have previously applied for a discharge upgrade
- At least 5 have NOT previously applied for a discharge upgrade
- At least 5 people with a cognitive disability (e.g., TBI)
- At least 7 have a smartphone to use it for the session and...
     - Have Zoom downloaded to their smartphone prior to the session and know how to share their screen
     - Be willing to share over Zoom a web browser window on their smartphone
     - Have a working microphone on their smartphone

**Primary criteria for AT (Assistive tech) sessions**
- ALL must use a screen reader or screen magnifier every time they access the Internet
- At least 3 have a computer or smartphone and are willing to use it for the session

**Secondary criteria (listed in priority order)**
- At least 5 people who are age 55 or older
- At least 4 people who are LGBTQ+
- At least 2 people 35 or under
- At least 3 people of color
- At least 2 women
- At least 3 people who don't have any degree or vocational training after high school
- At least 3 people who live in a rural or remote area

### Screening Questions
1. Have you applied for a discharge upgrade?
    - No (RECRUIT 5)
    - Yes (RECRUIT 5)
2. Do you find it difficult to remember or learn new things, focus on a task, or make
decisions? We ask this question because we want to make sure that our tools work for
people who live with challenges like these.
     - No
     - Yes (RECRUIT 5 and RECORD as having a cognitive disability)
3. Do you identify as a member of the LGBTQ+ community? We ask this question because
we want to make sure the feedback we get from these sessions represents all the
people we serve.
     - No
     - Yes (RECRUIT 4)
4. Have you downloaded the Zoom app to your smartphone, do you know how to screen
share, and do you have a working microphone on your phone?
     - No
     - Yes (RECRUIT 7)
5. What time zone are you located in? (RECORD)

### Screening Questions for AT
1. Do you use a screen reader or screen magnifier every time you use the Internet? We ask
this question because we want to make sure that our website works for people who
rely on these types of technologies.
     - No (DISQUALIFY)
     - Yes (ask next question)
2. Are you willing to join the Zoom session using your screen reader or screen magnifier
     - No (DISQUALIFY)
     - Yes (ask next question)
3. How long have you been using this screen reader or screen magnifier?
     - Less than 2 years (DISQUALIFY)
     - 2-5 years (ask next question)
     - More than 5 years (ask next question)
4. What is the name of the screen reader or screen magnifier technology that you will use
during the Zoom session? (open text field--RECORD what they say AND ask rest of
questions)
     - DISQUALIFY if they say something non-digital like "magnifying glass"
     - Acceptable responses include "ZoomText", "increase font size", "zoom in the browser, "JAWS", "VoiceOver", "Talkback"
     - If unsure whether someone qualifies, please ask Jordan
5. For this meeting, you'll need a device with Zoom installed that can screen share and
has a working microphone. What kind of device will you be using? (RECORD)
     - Smartphone
     - Computer
     - Tablet

## Timeline

Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person.

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins
and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot
session.

**Pilot 1**
- Pilot participant email:
- Date and time of pilot session: Between Oct 7-15

**Pilot 2 (with AT user)**
- Pilot participant email:
- Date and time of pilot session: Between Oct 7-15

### Research sessions
- Planned dates of research: Oct 22 - Oct 30, 2024

### Length of sessions
- Session length: 1 hour
- Buffer time between sessions: 1 hour
- Maximum Sessions per day: 2

### Length of sessions for AT
- Session length: 2 hours
- Buffer time between sessions: 1 hour
- Maximum Sessions per day: 2

### Availability

Team Availability | Time Slots (ET--all pm)
------------------|--------------
Oct 22, 2023 | 1-6 pm 
Oct 23, 2023 | 2-6 pm
Oct 24, 2023 | 2-3, 5-6 pm 
Oct 25, 2023 | 12-6 pm
Oct 28, 2023 | 12-6 pm
Oct 30, 2023 | 1-6 pm

## Team Roles
Please list the people who will be serving in each role.
- Moderator: Jordan Wood (870-219-9624, jordan.wood@civicactions.com), Dave Pickett (dave.pickett@civicactions.com)
- Research guide writing and task development (usually but not always same as moderator): Jordan Wood, Dave Pickett
- Participant recruiting & screening: Perigean
- Project point of contact: Jordan Wood, Dave Pickett
- Participant(s) for pilot test: TBD
- Accessibility specialist (for sessions where support for assistive technology may be needed): Laura Flannery (laura.flannery@civicactions.com)
- Note-takers: Perigean
- Observers: TBD

## Approvals
- Amanda Klausmeier (Sitewide UX/UI Lead) on September 25, 2024
