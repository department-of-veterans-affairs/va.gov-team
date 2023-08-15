# Initiative Brief - Unified Check-in Experience

## Overview

This initiative comprises a number of enhancements to the online check-in applications. These enhancements aim to reduce the confusion among Veterans and staff of the difference between and purpose for the pre-Check-in and check-in workflows. These enhancements consist of a number of planned releases, each of which will help to solve this problem. All enhancements may not necessarily be needed to achieve the desired outcome, which is to increase the use of the online check-in applications. The team will monitor feedback after each release and work with our VA Product Owner to determine when our objective has been achieved.
 
## Outcome Summary
Veterans will have a better understanding of the tasks they need to complete before a health appointment and the differences between the two online check-in applications will become irrelevant.

## Problem
The Modernized Check-In Experience Team has received feedback from Veterans and staff that PCI is confusing. Specifically, the feedback includes:
- Veterans and staff don’t understand the difference between pre-check-in and check-in workflows.
- Many Veterans use the pre-check-in link that was texted to them to initiate check-in on the day of their appointment, which does not actually allow them to check in.
- Some Veterans skip checking in altogether when they arrive at the clinic because they think they’re checked in as a result of completing the pre-check-in process, which in fact does not initiate or complete the online check in process. 

## Desired Outcomes
| Outcome | Ways to Measure |
| ----------- | ------------ |
| Increase in Veteran satisfaction (and reduction in complaints about PCI being too complicated)  | - VSignals<br>- Conduct Veteran and staff interviews at VA facilities<br>- Feedback from the field  |
| Decrease in “too early” VEText responses (which is viewed by Veterans and staff as a frustrating Veteran experience)  | DataDog |
| Increase in repeat users (Veterans) | - Google Analytics (to the extent possible)<br>- CDW (to the extent possible) |
| Increase in overall utilization (specifically completed eCheck-ins)<br><br>E.g., increase in repeat users, capturing new users that typically don't engage with the posters, and converting users that may have abandoned eCheck-in in the past because of business rules.   | - Google Analytics<br>- CDW<br>- DataDog  |
| Decrease in MSA workload (specifically around volume of manual eCheck-ins per day with or without demographics reviewed and time spent helping Veterans with the texting and QR code step) | - Conduct Veteran and staff interviews at VA facilities<br>- Feedback from the field  |

## Measuring Success

### Key Performance Indicators (KPIs)
The following changes, as compared to historical levels, will serve as key performance indicators:
- Decrease in negative Veteran feedback.
- Decrease in “too early” VEText responses.
- Increase in repeat users.
- Increase in overall utilization.
- Decrease in MSA workload.

## Launch Planning

## Workflow
[Basic User Flow](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/0F9F62F0-68A0-4C8B-9105-A92D0A6448DB/canvas)
[Unified Check-in Experience Wireframes](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/0EC89917-F949-4461-A7B3-32A5201FD2A2/canvas)

### Collaboration Cycle
- [Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53488)

### Initiative Rollout
We will be implementing this initiative using the following releases:
- Release 1 
     - Send out 45-minute Check-in Text Reminder with Check-in Link
     - Add messaging to Pre-Check-in completion page that a text will be sent to the Veteran
- Release 2 [(Wireframes (Sketch))](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/F05730C4-9E76-4B1D-AEA0-63CEC7E61175/canvas)
   - Pre-Check-in
    - Text Message: new content
    - Login Page: new H1 content
    - Landing Page: new Landing page format
        - Display task, in dismissible alert, that corresponds to the appt for the link clicked (different alert for grouped appts)
        - Display all upcoming appointments
        - Details link for each appt
        - Don't show statuses
	 - Change WF to show new landing page w/ dismissible alert for "your info is up to date" when demographics are up-to-date
    - Completion Page: 
        - New H1 content (different for grouped appts)
        - First accordion not visible if answered Yes to all demo questions
- Day-of Check-in
    - Text Message: new content
    - Login Page: new H1 content
    - Landing Page: new Landing page format
        - Display task, in dismissible alert, that corresponds to the appt for the link clicked
        - Different multiple alerts if there are more than appt in the check-in window
        - Display all upcoming appointments
        - Details link for each appt
        - DO show statuses (but only certain ones)
        - Do not show next task if task was completed and user is navigating from the Completion page
    - Completion Page: 
        - Add link back to Landing page
        - Do not show next task if task on Landing page was completed and user is navigating from the Completion page
- Release 2.1
     - Add ability to see pre-check-in detail appt page w/ "review your information now" call to action
     - Restyle check in button to action link on detail page for check in 
- Release 3
    - New completion page for check-in & pre-check-in (phone & in-person)
	  - Design tweaks
	  - New message based on the following scenarios
	      - Clicked on "Review your info" & answered Yes to all questions
	      - Clicked on "Review your info" & answered No to at least 1 question
          - New link to get back to the new landing page (minus the message of other tasks to do)
          - Add eyebrow into pre-check-in
- Release 4
    - New message page for info is up-to-date & clicked the pre-check-in link
        - [WF link](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/a/uuid/8BDCA2AE-00CE-4162-BEDE-9D0B349E24E6)
    - New error pages in this format (excludes login errors);
        - Message - message for the task corresponding to the link clicked
        - Upcoming Appointments
             - Excluding the ability to see the check-in/pre-check-in status for each appointment
             - Excluding the ability to complete tasks for other appts
-  Release 5
    - Ability to see the action status for each upcoming appointment (both on the details page & the appointments page) (this includes if you have already completed the action or when you can do it)
- Release 6
    - Ability to complete a task for an appointment NOT associated with the link clicked
        - NOTE: we will need to ensure that status's are set properly so that the Veteran does not receive more pre-check-in reminders & VSECS is updated as well
    -  Update completion page for pre-check-in (phone & in-person)
	  - New message based on the following scenarios
	      - Clicked on "Confirm your appointment"
- Release 7
    - Updated details page
        - Design tweaks to statuses
       - Adding the confirm action for pre-check-in
- Release 8
    - Changes to Need Help
    - [Change alert on travel pages to additional info component](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/gh/department-of-veterans-affairs/va.gov-team/59126) 
- Release 9
    - Allow Veterans to access Pre-Check-in & Check-in regardless if the link has expired or they have no appointments for today (can we re-generate the LoROTA entry for some limited time period? does this affect the ATO?)



