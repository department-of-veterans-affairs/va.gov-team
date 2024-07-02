# Research Plan for Appointments Oracle Health integration and scheduling improvements

## Background
The Appointments tool on VA.gov allows Veterans who are logged into VA.gov to schedule and manage their appointments. Currently, facilities that use Oracle Health require Veterans to sign in to a seperate portal. The initiative that this research pertains to is creating a unified scheduling tool for both Vista and Oracle Health Facilities so that Veterans can easily book appointments without switching between platforms.


[Appointments Tool Product Outline](vaos-product-outline.md)

### OCTO Priorities 

This research supports the following [OCTO objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme):

**Goals:**
Veterans can manage their health services online
Logged-in users have a personalized experience, with relevant and time-saving features

Increase 📈

- Veteran satisfaction with the appointment scheduling process.
- Usage of the appointments tool


Decrease 📉

- The time it takes to successful schedue appointments

### Veteran journey

Veterans may interact with the Appointments tool at different stages across the [veteran journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf):

Starting up

- MTM: Attending to health needs

Taking care of myself

- MTM: Recognizing and addressing mental health needs
- MTM: Managing health issues

Putting down roots

- Maintaining my emotional health
- Engaging VA to access benefits and services

Retiring

- MTM: Taking care of my health
- MTM: Managing my declining health


## Research Goals

- Evaluate a scheduling flow for booking an appointment at an Oracle Health facility. This will include selecting a provider during scheduling.

- Test concepts for improving the scheduling flow, including:
  - Providing an option to quickly schedule from previous appointments
  - Showing locations where the Veteran has scheduled recently first in the "choose a location" list
  - Better timing for displaying a message that the tool is not intended for urgent care

- Test a concept for sharing important messages and tasks with Veterans	



### Outcome

This research will provide insights into whether the new features — such as scheduling from recent appointments, sorting by recent locations, and helpful alerts and reminders — make the process faster, easier, and more valuable for Veterans.

After this research is complete, we will:

- Improve the user experience for Oracle Health scheduling based on feedback
- Choose which scheduling improvements are most valuable for the dev team to implement
- Provide teams working on appt notifications with the results of the study that show how Veterans responded to the notification workflow.


### Research questions

Oracle Health scheduling:
- What are Veterans' preferences regarding choosing providers, and how do these preferences vary between primary and specialty care, as well as between established and new care?

Immediate care alerts:
- Do Veterans find the warnings about urgent medical needs necessary, helpful, and timely?
- Is it clear to Veterans that the tool is not for urgent medical needs?
- Is having the "I need immediate care" option helpful?

Quickly schedule based on previous appointments:
- Does scheduling from previous appointments make the scheduling process faster and easier for Veterans?
- Does scheduling from previous appointments add value for Veterans?

Recent locations:
- Does the "Sort by Recent locations" feature make scheduling easier for Veterans?
- Does the "Sort by Recent locations" add value?

Notifications:
- Will Veterans notice the notification bell when it becomes active?
- Will Veterans find it easy to navigate to their notifications?
- For each type of notification, is the content clear or confusing? 
- For each type of notification, is the CTA clear or confusing?
    - What do they expect the next step to be after clicking the CTA?
    - Do they distinguish between tasks that need attention vs. activity?


## Hypotheses and Tasks to Test

We will use these when developing the research plan. Our main goal is to test the OH integration.

---
### As a Veteran, I can choose my provider when scheduling at an OH facility

**Hypotheses:**

- Veterans will want to choose a specific provider for most types of care.
  - Do their needs change between primary care and specialty care?
  - Do their needs change between established care and new care?
- Veterans will want to choose a provider based on who has the soonest availability.

---

### As a Veteran, I can easily schedule at locations I've recently attended

**Scenario to Test:**

- A Veteran chooses from a list of their recent locations when scheduling an appointment.

**Hypotheses:**

- Choosing from locations where they've recently scheduled an appointment will make it faster and easier to schedule.
- Veterans will appreciate and find value in the default "Sort by Recent Locations."

---

### As a Veteran, I can quickly schedule from previous appointments

**Scenario to Test:**

- When scheduling, a Veteran is offered the option to skip directly to choosing a time by scheduling into previously attended appointments.

**Hypotheses:**

- Veterans will want a shortcut to schedule appointments similar to those they've had in the past.
- Veterans will have a distinct preference for scheduling using the past provider or clinic flow compared to the "type of care" route.
- Scheduling appointments similar to those they've had in the past will help Veterans schedule more quickly.

---

### As a Veteran, I need helpful reminders that the scheduling tool is not for emergencies in appropriate places in the process so that it is not an annoyance

**Scenarios to Test:**

- A Veteran encounters the urgent medical need warning:
  - When they use the scheduling tool for the first time.
  - When the reason for the appointment includes severe or alarming signs and symptoms.
  - When they select "I need immediate care" as the type of care they need.

**Hypotheses:**

- Veterans will find these warnings necessary.
- Veterans will find these warnings helpful.
- Veterans will find that the alert is timely and appropriate.

---

### As a Veteran, I want to be alerted when appointment events happen so I know exactly what I need to do next

**Scenario to Test:**

- A Veteran receives a new notification.
- A Veteran reviews their list of notifications, including:
  - They have received a new referral for community care.
  - Staff has canceled their appointment.
  - Others TBD.

**Hypotheses:**

- Veterans will be able to find their notifications without prompting.
- Veterans will understand how to review their notifications.
- Veterans will find their notifications helpful.

---


## Methodology	

For this usability study, we will be using the **moderated usability testing** method. This approach involves live, one-on-one sessions thorough Zoom where a facilitator guides participants through a series of tasks using a prototype of the scheduling flow. The facilitator will observe participants' interactions, collect their feedback, and probe for deeper insights into their experiences.

### Location

Zoom

### Research materials

- [Link to conversation guide](products/health-care/appointments/va-online-scheduling/research/2024-05-oh-scheduling/conversation-guide.md)
- [Link to mobile prototype](https://www.figma.com/proto/1dSk9a4KDxqxKzgRDmXyPu/Prototype%3A-Scheduling-improvements--%7C-Appointments-FE?page-id=2693%3A16151&node-id=4161-44706&viewport=2031%2C-513%2C0.35&t=CdmFwVzYJRqvSu7a-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=4161%3A44706)


## Recruitment	

Perigean will:
- Recruit 16 total participants for this study.
- Schedule a brief kickoff call to run through the recruitment criteria before recruiting.

### Recruitment Criteria

#### Total Number and Type of Participants
- **Total Participants:** 10 (Minimum)
- 50% Mobile 
- 50% Desktop
- **Type of Participants:** Veterans

#### Primary Criteria (Must-Haves)
Participants must meet the following criteria to effectively participate in the study:
1. ** 2-3 Veterans have used the My VA Health Portal in the past 12 months.**

**Screener Questions:**
1. In the past 12 months or upcoming 12 months, did you or do you have appointments at any of the following facilities? (Yes/No)

- Mann-Grandstaff VA Medical Center in Spokane, Washington
- Jonathan M. Wainwright Memorial VA Medical Center in Walla Walla, Washington
- VA Central Ohio Healthcare System in Columbus, Ohio
- Roseburg VA Health Care System in Roseburg, Oregon
- VA Southern Oregon Rehabilitation Center and Clinics in White City, Oregon

2. If yes, to Q. 1: Have you used the My VA Health Portal to review your Health appointments? (Yes/No)
   - **Qualifying Response:** Yes
   
#### Secondary Criteria (Nice-to-Haves)
**Secondary criteria:**

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
* Session length: 60 minutes
* Buffer time between sessions: 30 minutes 
* Maximum Sessions per day: 3

### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. *Note: we recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S.* 

Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. (e.g. Monday 9-1, 3-6; Tuesday 9-6, etc.; ***12 time slots for 6 participants***). This helps Perigean book participants when there are more time slots available, and when sessions need to be rescheduled or filled in with further recruitment.
	
## Team Roles	
Please list the people who will be serving in each role. **Include the primary phone number for moderator and the emails for moderator, notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker** 	
- Moderator: Melissa Lefevre
- Research guide writing and task development (usually but not always same as moderator):	Melissa Lefevre
- Participant recruiting & screening:	Perigean
- Project point of contact: Melissa Lefevre	
- Participant(s) for pilot test:
- Accessibility specialist (for sessions where support for assistive technology may be needed):	
- Note-takers:	Peter Russo
- Observers:	Leah De La Costa, Jeff Roof
**List email addresses for those who should attend and observe the sessions: VA Stakeholders, engineering team members, design team members, any other people who might find this research relevant to their work.** Spread observers across sessions so that there are no more than 5-6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side 
