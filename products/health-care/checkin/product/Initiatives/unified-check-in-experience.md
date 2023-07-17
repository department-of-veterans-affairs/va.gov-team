# Initiative Brief - Unified Check-in Experience

## Overview
 
## Outcome Summary
Veterans will have a better understanding of the tasks they need to complete for a health appointment.

## Problem
The Modernized Check-In Experience Team has received feedback from Veterans and staff that PCI is too complicated. Specifically, the feedback includes:
- Veterans and staff don’t understand the difference between pre-check-in and check-in.
- Many Veterans use the pre-check-in link that was texted to them to initiate check-in on the day of their appointment, which does not actually allow them to check in.
- Some Veterans skip checking in altogether when they arrive at the clinic because they think they’re checked in as a result of completing the pre-check-in process, which in fact does not initiate or complete the online check in process. 

## Desired User Outcomes
- Veterans have a better understanding of the pre-check-in and check-in tasks
- Veterans are able to complete their task(s) regardless of what link they use

## Undesired User Outcomes
- Veterans are most confused by pre-check-in and check-in
- Veterans are more frustrated with the pre-check-in and check-in process

## Desired Business Outcomes
- Increased usage of pre-check-in and check-in

## Undesired Business Outcomes
- Decreased usage of pre-check-in and check-in

## Measuring Success

### Key Performance Indicators (KPIs)
- Favorable VSignals feedback from Veterans who use Pre-Check-in and eCheck-in
- Increase in the use of Pre-Check-in and Check-in

## Launch Planning

## Workflow
[Unified Check-in Experience Workflow](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/0EC89917-F949-4461-A7B3-32A5201FD2A2/canvas)

### Collaboration Cycle
- [Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53488)

### Initiative Rollout
We will be implementing this initiative using the following releases:
- Release 1 
     - Check-in 45 min text message
- Release 2
    - Update Pre-Check-in text message
    - Update heading & body text on Login page for Pre-Check-in & Check-in
    - New landing page for Check-in & pre-check-in in this format
        - What to do now - task corresponding to the link clicked
         - Upcoming Appointments
                 - Including the ability to see the check-in status, but restyled (because these exist today)
                 - Excluding pre-check-in status for each appointment 
                 - Excluding the ability to complete tasks for other appts
     - Update H1 and body text on completion pages for Pre-Check-in & Check-in
     - Content tweak in background info alert on pre-check-in confirmation page
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



