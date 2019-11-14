## Platform Details
[Supported browsers](https://github.com/department-of-veterans-affairs/vets-website#supported-browsers)  
SQA test account: Judy Morrison, DS Logon
## Scenario 1: Viewing appointments
### Should receive prompt to log in
URL: [www.va.gov/health-care/schedule-view-va-appointments/appointments](www.va.gov/health-care/schedule-view-va-appointments/appointments)
#### Expected behavior:
-	If logged in, veteran sees VAOS dashboard (skip to next case)
-	If not logged in, veteran sees a popover modal with authentication options
-	Veteran is not able to see the dashboard until logged in
### Should see the VAOS tool homepage when navigating to root URL
URL: [www.va.gov/health-care/schedule-view-va-appointments/appointments]
#### Expected behavior:
-	Veteran sees the screen captured below
-	Veteran sees a button to schedule a new appointment in the top row
-	Veteran does not see an error message
### Should see a list of future appointments & requests
URL: [www.va.gov/health-care/schedule-view-va-appointments/appointments](www.va.gov/health-care/schedule-view-va-appointments/appointments)
#### Expected behavior:
-	Veteran sees a list of pending, confirmed, and cancelled future VA & CC appointments in ascending order
-	Veteran does not see appointments or requests from dates in the past (seeing an appointment from earlier in the same day at a past time is currently intended behavior)
### Should see day of week, date, time, and facility timezone for confirmed appointments
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
-	VA & CC appointments should include the day of week, date, time, and facility timezone
-	Pending appointments should not show a date header
### Should see a ‘Join’ button for VA Video Connect’ appointments
URL: [www.va.gov/health-care/schedule-view-va-appointments/appointments](www.va.gov/health-care/schedule-view-va-appointments/appointments)
#### Expected behavior:
-	Join button should be greyed-out until 30 minutes before an appointment time
-	Join button should be active & clickable for 30 minutes before an appointment
### Should be able to expand pending appointment requests
URL: [www.va.gov/health-care/schedule-view-va-appointments/appointments](www.va.gov/health-care/schedule-view-va-appointments/appointments)
#### Expected behavior:
-	‘Show more’ button should show under pending requests
-	Clicking the ‘show more’ button should expand a section with preferred dates / times & veteran contact information
### Should be able to click through to facility locator
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
-	Confirmed VA appointments should include a link to ‘view facility info’
-	Community Care appointments should show facility address in the appointment detail card instead of linking to facility locator
-	Clicking on link should take veteran to a deep link within facility locator for that specific facility
-	Clicking on the link should open a new tab
### Should see prompt to enroll when not enrolled in healthcare
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
- When not enrolled in healthcare, veteran sees a prompt to sign up for VA healthcare
- Link should point to enrollment form on va.gov
- Veteran should not see any appointments or have the ability to schedule a new appointment
- All subroutes should show the same messaging
### Should see prompt to register in a system when enrolled in heahtlcare but not registered to a VA system
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
- When not registered in a VA healthcare system that supports online scheduling, veteran sees a prompt to call their local facility
- Veteran should not see an appointment list or have the abiltiy to create a new appointment / request
### When not on whitelist, veteran should not be able to use the application
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
- Veteran should see a generic 'sorry, page does not exist' error message whn trying to navigate to VAOS or any subroute
- Vetrean should not be able to see or create any appointments / requests
### When no appointments or requests exist, veteran should see a message indicating so
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
- Veteran should see a button to create a new appointment / request
- Veteran should see a message indicating they have no appointments
### When fetching VA / CC appointments or requests fail, veteran should see an error
URL: www.va.gov/health-care/schedule-view-va-appointments/appointments
#### Expected behavior:
- If any of the four service calls fail (VA appts, CC appts, requests, or VA system data), veteran should see a generic 'sorry, something went wrong, please try again later' message in place of their appointments list
-? Veteran should be able to schedule a new appointment
