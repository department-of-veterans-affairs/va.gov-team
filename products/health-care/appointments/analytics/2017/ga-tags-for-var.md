## Google Analytics Event Action tags for VAR  
Event Catgeory = veteran-appointment


### Self-Schedule or Request flow (top of funnel)   
| GA Event | Description |
| --- | --- |
| new-appointment-request-clicked | User clicked "New Appointment / Request" button |
|facility-selected | User selected their facility (or had it auto-selected for them) |
type-of-care-selected | User chose a type of care from drop down menu (e.g., Primary Care, Audiology, etc.) | 
user-selected-scheduling-method | User selected radio button for self-schedule or to request an appointment |
| | label:direct = self-schedule |
| | label:clerk = appointment request |

### Self-Schedule Only
| GA Event | Description |
| --- | --- |
clinic-selected | User clicked radio button for desired "clinic" (or physician or team)   
appointment-date-and-times-displayed | VAR displays *section* with dates picker (not as useful as intended)   
user-requested-show-availability | User selected a date and clicked button to show available times   
user-request-appointment-scheduled | User clicked 'Submit' appointment  
appointment-scheduled-successful | System succesfully scheduled appointment and informed the user  
appointment-scheduled-fail | System failed to schedule appointment and informed user  
user-cancelled-appointment-request | User clicked Cancel instead of submit, then clicked 'Yes' in confirmation modal  

### Appointment Request Only
| GA Event | Description |
| --- | --- |
appointment-request-purpose-selected | User selected from a drop down list of appointment reasons (follow-up, etc.)   
appointment-request-time-selected | User selected a date and timeframe for desired appointment  
appointment-request-requested | User clicked "submit" for their appointment request  
appointment-request-successful | Appointment request submitted and the system informed the user  
appointment-request-unsuccessful | Appointment request failed and the system informed the suer  
user-cancelled-appointment-request | User clicked Cancel instead of submit, then clicked 'Yes' in confirmation modal  

### Appoinment Cancellation
| GA Event | Description |
| --- | --- |
user-cancelled-appointment-requested | User clicked 'Yes' in confirmation modal (after clicking 'Cancel" on an appointment) 
user-cancelled-appointment-successful | System cancelled appointment and informed user  

### Other
| GA Event | Description |
| --- | --- |
refresh-appointments-clicked | User clicked "Refresh" on main page to update appointment list  
