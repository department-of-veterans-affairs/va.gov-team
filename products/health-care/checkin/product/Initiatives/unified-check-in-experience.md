# Initiative Brief - Unified Check-in Experience

## Overview

This initiative comprises a number of enhancements to the online check-in applications. These enhancements aim to reduce the confusion among Veterans and staff of the difference between and purpose for the pre-Check-in and check-in workflows. These enhancements consist of a number of planned Prioritys, each of which will help to solve this problem. All enhancements may not necessarily be needed to achieve the desired outcome, which is to increase the use of the online check-in applications. The team will monitor feedback after each Priority and work with our VA Product Owner to determine when our objective has been achieved.
 
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

### Collaboration Cycle
- [Collab Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/53488)

### Initiative Rollout
We will be implementing this initiative using the following Prioritys:

#### 45-minute reminder & associated Pre-Check-in content (IN PROGRESS)
- Status - done but not released
- Artifacts:
	- [Detailed release notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/45-minute-check-in-text.md)
  	- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61390) & [Wireframes](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/0D0F05D2-2122-4599-9378-E03EEE32DB88/canvas)
- Description
	- Send out 45-minute Check-in Text Reminder with Check-in Link
	- Add messaging to Pre-Check-in completion page that a text will be sent to the Veteran when it's time to check-in

#### Priority 1: New landing page & accompanying content changes (IN PROGRESS)
- Status - in progress
- Artifacts:
	- [Detailed release notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/detailed-release-notes/unified-check-in-priority-1.md)
  	- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63466) & [Wireframes](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/868762F3-8E8F-4E23-B0DA-34C1783F0A03/canvas)	
- Details
	- Pre-Check-in
	    - Text Message: new content
	    - Login Page: new H1 & body content 
	    - Landing Page: new Landing page format
	        - Show pre-check-in task in new card component and "What to do next" heading
	        - If demos don't need review, change WF to show landing page w/ dismissible alert, that corresponds to the appt for the link clicked (different alert for grouped appts)
	        - Display all upcoming appointments
	        - Details link for each appt
	        - Don't show statuses within appt list
	        - No going back to upcoming appts list page after pre check in complete
	    - Completion Page: 
	        - New H1 content (different for grouped appts)
	        - First accordion not visible if answered Yes to all demo questions. Accordions should not have any work to be done. 
	- Day-of Check-in
	    - Text Message: new content
	    - Login Page: new H1 & body content
	    - Landing Page: New Landing page format
	        - Show check in task in new card component and "What to do next" heading 
	        - If demos don't need review and there's no travel questions shown, show check-in task in new card component and "What to do next" heading. When Veterans selects "check in now" in the card component, take them to this [confirmation page](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/a/pY4ZOjQ#Version). 
	        - Two card components can be show in the "What to do next" heading if Veteran is within two windows. The 1st card should be specific to the text that was clicked. 
	        - Display all upcoming appointments
	        - Details link for each appt
	        - DO show statuses (but only certain ones) on appt list. Statuses have changed design pattern. 
	        - Do not show next task if task was completed and user is navigating from the Completion page back to the appointment list page
	    - Completion Page: 
	        - Add link back to Landing page

#### Priority 2: Minor updates to Details page (TENTATIVE)
- Add ability to see pre-check-in detail appt page w/ "review your information now" call to action
- Restyle check in button to action link on detail page for check in 

#### Priority 3: New completion page format & updates to demographics pages (TENTATIVE)
- New completion page for check-in & pre-check-in (phone & in-person)
	- Design tweaks
	- New message based on the following scenarios
		- Clicked on "Review your info" & answered Yes to all questions
	      	- Clicked on "Review your info" & answered No to at least 1 question
  	- New link to get back to the new landing page (minus the message of other tasks to do)
        - Add eyebrow into pre-check-in
        - New expandable control to show what to do if demographics info is no up-to-date
- Update to demographics pages to show what to do if demographics info is NOT up-to-date

#### Priority 4: New message and error page formats (TENTATIVE)
- New message page for info is up-to-date & clicked the pre-check-in link
- New error pages in this format (excludes login errors);
	- Message - message for the task corresponding to the link clicked
        - Upcoming Appointments
        	- Excluding the ability to see the check-in/pre-check-in status for each appointment
             	- Excluding the ability to complete tasks for other appts

#### Priority 5: View action statuses in the upcoming appointments list (TENTATIVE)
- Ability to see the action status for each upcoming appointment (both on the details page & the appointments page) (this includes if you have already completed the action or when you can do it)

#### Priority 6: Ability to complete a task from the upcoming appointments list (TENTATIVE)
- Ability to complete a task for an appointment NOT associated with the link clicked
	- NOTE: we will need to ensure that status's are set properly so that the Veteran does not receive more pre-check-in reminders & VSECS is updated as well
-  Update completion page for pre-check-in (phone & in-person)
	- New message based on the following scenarios: clicked on "Confirm your appointment"

#### Priority 7: Updates to Details page (TENTATIVE)
- Details page
	- Design tweaks to statuses
       	- Adding the confirm action for pre-check-in

#### Priority 8: Updates to Need help section (IN PROGRESS)
- Status - released to production 
- Artifacts
	- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/62515) & [Wireframes](https://www.sketch.com/s/0e890de3-2530-4ee0-986e-cf0314334aec/p/6ECDF941-DF3B-4C1E-983D-1BA221ACF65C/canvas)
	- Release Notes
 		- [10/12/2023 Release Note](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md#10122023)
   		- [10/11/2023 Release Note](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md#10112023)
		- [9/27/2023 Release Note](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md#9272023)
- Description
	- Changes to Need Help
	- Change alert on travel pages to additional info component

#### Priority 9: Access regardless if link expired or have no appointments (TENTATIVE)
- Allow Veterans to access Pre-Check-in & Check-in regardless if the link has expired or they have no appointments for today (can we re-generate the LoROTA entry for some limited time period? does this affect the ATO?)



