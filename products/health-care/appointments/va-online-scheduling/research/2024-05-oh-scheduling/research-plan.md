# Research Plan for Appointments Oracle Health integration and scheduling improvements

## Background
VA Online Scheduling allows Veterans who are logged into VA.gov to schedule and manage their appointments.  Unified scheduling portal for both Vista and Oracle Health Facilities.The single interface streamlines the appointment booking process. Users can easily find and book appointments without switching between platforms.

[VAOS Product Outline](vaos-product-outline.md)

### OCTO Priorities 

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

- Veterans and their families can find a single, authoritative source of information
- Logged-in users have a personalized experience, with relevant and time-saving features

Increase 📈

-   Veteran satisfaction with VA.gov: by providing an after visit summary, a print functionality on the appointment list page, and ease of navigation with updated breadcrums.

Decrease 📉

-   Call center volume, wait time, and time to resolution: by providing the right information about appointments when Veterans need it.

### Veteran journey

Veterans may interact with VAOS at different stages across the [veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up

-   MTM: Attending to health needs

Taking care of myself

-   MTM: Recognizing and addressing mental health needs
-   MTM: Managing health issues

Putting down roots

-   Maintaining my emotional health
-   Engaging VA to access benefits and services

Retiring

-   MTM: Taking care of my health
-   MTM: Managing my declining health


## Research Goals
	
1. Evaluate the efficiency and ease of scheduling with the improvements, specifically:
- Does scheduling from previous appointments make the scheduling process faster and easier for Veterans?
- Does the feature "Sort by Recent locations" make it eaasier for Veterans? 
- Does the new patient indicated date page make the scheduling process easier for Veterans?

2. Do the improvements to the scheduling flow bring Value to the Veteran based on their individual needs and preferences?
- Does scheduling from previous appointments or the "Sort by Recent locations" add value for Veterans?
- Can Veterans find, understand, and find value in notifications related to their appointments?

3. Assess user preferences and needs while scheduling
- Understand Veterans' preferences regarding choosing providers and how these preferences vary between types of care. 
- Gather feedback on the usability and appropriateness of various alerts letting the Veteran know the scheduling tool is not meant for immediate care. 




### Outcome
The outcome of this research will provide us with an understanding of how the proposed concepts affect Veterans' experience and efficiency in scheduling. Specifically, the research will provide insights into whether the new features—such as scheduling from recent appointments, sorting by recent locations, the improved date picker, and helpful alerts and reminders—make the process faster, easier, and more valuable for Veterans.

By gathering research data on user preferences, ease of use, and perceived value of the new features, we can make informed decisions about which elements to refine, retain, or remove. 

### Research questions
Consider bucketing research questions under research goals. For each question, think about:
- What will I do with what I learn from this question?
- Does this question serve the goals of my study?
- Do not write out all questions you plan to ask participants -- that should go in the [conversation guide.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md) 


## Hypotheses and Tasks to test

We'll use these when developing the research plan. Our main goal is to test the OH integration. 


## As a Veteran, I can easily schedule at locations I've recently attended.

### Scenario to test

A Veteran chooses from a list of their recent locations when scheduling an appointment.

### Hypotheses

- Choosing from locations where they've recently scheduled an appointment will make it faster and easier to schedule.
– The Veterans will appreciate and find value in the default "Sort by Recent locations"

## As scheduling staff, I know what date a Veteran preferred to schedule their appointment

### Scenario to test

A Veteran chooses their preferred date from an improved date picker.

### Hypothesis

Veterans will be able to select a preferred date faster and more easily than in the current flow.

## As a Veteran, I can quickly schedule from previous appointments

### Scenario to test

When scheduling, a Veteran is offered the option skip directly to choosing a time by scheduling into previously attended appointments.

### Hypotheses

– Veterans will want a shortcut to schedule appointments similar to those they've had in the past. 
- Veterans will have a distinct preference to scheduling using the past provider or clinic flow compared to the "type of care" route.
- Scheduling appointments similar to those they've had in the past will help Veterans schedule more quickly. 

## As a Veteran, I need helpful reminders that the scheduling tool is not for emergencies in appropriate places in the process so that it is not an annoyance. 

### Scenarios to test

A Veteran encounters the urgent medical need warning: 
- When they use the sheduling tool for the first time
- When the reason for appointment includes sever or alarming signs and symptoms
- When they select " I need immediate care" as the type of care they need


### Hypotheses

- Veterans will find these warnings necessary
- Veterans will find these warnings helpful
- Veterans will find that the alert is timely and appropriate

## As a Veteran, I want to be alerted when appointments events happen so I know exactly what I need to do next

### Scenario to test

- A Veteran receives a new notification

- A Veteran reviews their list of notifications including:
    - They have received a new referral for community care
    - Staff has canceled their appointment
    - Others TBD

### Hypothesis

- Veterans will be able to find their notifications without prompting
- Veterans will understand how to review their notifications
- Veterans will find their notifications helpful


### As a Veteran, I can choose my provider when scheduling at an OH facility

#### Hypotheses 

Veterans will want to choose a specific provider for most types of care.
- Do their needs change between Primary care and specialty?
- Do their needs change between established care and new care?

Veterans will want to choose a provider by whoever has the soonest availability.
## Methodology	
For this usability study, we will be using the **moderated usability testing** method. This approach involves live, one-on-one sessions thorough Zoom where a facilitator guides participants through a series of tasks using a prototype of the scheduling flow. The facilitator will observe participants' interactions, collect their feedback, and probe for deeper insights into their experiences.

### Location
Zoom
### Research materials

- [Link to conversation guide](products/health-care/appointments/va-online-scheduling/research/2024-05-oh-scheduling/conversation-guide.md)
- [Link to Mobile prototype]([url goes here](https://www.figma.com/proto/1dSk9a4KDxqxKzgRDmXyPu/Prototype%3A-Scheduling-improvements--%7C-Appointments-FE?page-id=2693%3A16151&node-id=4161-44706&viewport=2031%2C-513%2C0.35&t=CdmFwVzYJRqvSu7a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4161%3A44706))


## Recruitment	

Perigean will:
- Recruit 16 total participants for this study.
- Schedule a brief kickoff call to run through the recruitment criteria before recruiting.

### Recruitment Criteria

#### Total Number and Type of Participants
- **Total Participants:** 10-12
- 50% Mobile 50% Desktop
- **Type of Participants:** Veterans

#### Primary Criteria (Must-Haves)
Participants must meet the following criteria to effectively participate in the study:
1. ** 2-3 Veterans have Used the My VA Health Portal in the past 12 months.**

**Screener Questions:**
1. In the past 12 months or upcoming 12 months, did you or do you have appointments at any of the following facilities? (Yes/No)

Mann-Grandstaff VA Medical Center in Spokane, Washington
Jonathan M. Wainwright Memorial VA Medical Center in Walla Walla, Washington
VA Central Ohio Healthcare System in Columbus, Ohio
Roseburg VA Health Care System in Roseburg, Oregon
VA Southern Oregon Rehabilitation Center and Clinics in White City, Oregon

2. If yes, to Q. 1: Have you used the My VA Health Portal to review your Health appointments? (Yes/No)
   - **Qualifying Response:** Yes
   

   - **Qualifying Response:** Yes

#### Secondary Criteria (Nice-to-Haves)
**Secondary criteria:**

- At least 4 participants who attend sessions on a mobile device.
- At least 4 participants with a cognitive disabilty
- At least 1 LGBTQ+ Veteran
- At least 1 Native Veteran
- At least 1 who lives in a rural area

**Screener Questions:**
1. Do you identify as having a cognitive disability? (Yes/No)
   - **Qualifying Response:** Yes (looking for 2 participants)
2. Do you identify as being part of an underserved community (e.g., LGBTQ+, rural area, minority group)? (Yes/No)
   - **Qualifying Response:** Yes (looking for 2 participants)

By targeting these criteria, we ensure that our participant pool is both relevant to the study objectives and inclusive of diverse user experiences.





## Timeline
Please submit artifacts for [Research Review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Research-review.1781891143.html) 8-9 days prior to the first planned research day for remote studies so Perigean can begin recruiting one week prior. Perigean requires 2+ weeks for in-person. 

### Prepare
When will the thing you are testing be finalized? Ideally it's ready a week before testing begins and has also been through a [Midpoint review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Midpoint-review.1781039167.html).

A pilot session is required. Please indicate the date and name of a mock participant for a pilot session. 
* Pilot participant email:
* Date and time of pilot session: 

### Research sessions
* Planned dates of research:

### Length of sessions
* Session length: (e.g. 30 minutes, < 1 hour, up to 2 hours, up to 4 hours)
* Buffer time between sessions: (30 minutes recommended to reset between sessions, debrief with team, if a participant arrives late, or a session goes slightly over time) 
* Maximum Sessions per day: (We all have limits - how many sessions can you and your team conduct in one day considering the session length, the mental strain of conducting sessions, other work you still need to complete in a day, etc?)

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator:	
- Research guide writing and task development (usually but not always same as moderator):	
- Participant recruiting & screening:	
- Project point of contact:	
- Participant(s) for pilot test:
- Accessibility specialist (for sessions where support for assistive technology may be needed):	
- Note-takers:	
- Observers:	
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
