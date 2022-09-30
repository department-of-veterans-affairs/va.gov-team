# Data point in MVP for Notifications on VA.gov (WIP)

**Including in onsite notifications:**
(?) - need to double check with VA notify

The notifications that will be included in MVP are:

- Appointments (?)
- Prescriptions (?)
- Messages (?)
- In-progress applications (?)
- Board of Veterans' Appeals hearing reminder
- COVID-19 updates
- Scheduled payment updates

**Not including in onsite notifications:**
- Confirmations 
  -  Direct deposit information changed confirmation
  -  Contact information changed confirmation
  -  526EZ submission confirmation (disability compensation)
- App connect/disconnect from VA profile

## Time Sensitive Notifications (Priority Notifications)
- Appt Reminders
- New Messages
- In-Progress Applications
- Board of Veterans Appeals Hearing Reminders

## HEALTH CARE

### Appointments
- Date
- Appt time
- Appt type
- [LINK]: Schedule and view your appointments (**Add**)

### Prescriptions (limited data from VA Notify)
- Date
- Presciption name
- [LINK]: View prescription details (**Add**)

### Messages
- Date
- Dr. Name
- [LINK]: View all messages (**Add**)

## BENEFITS

### In-progress applications
- Date
- Application expires on
- Date last opened
- [LINK]: Continue your application (**Add**)

## CLAIMS/APPEALS

### Board of Veterans' Appeals hearing reminder
- Date
- Hearing date & time
- Hearing location
- [LINK]: Manage all your claims and appeals (**Add**)

## GENERAL

### COVID-19 updates
- Date
- Covid-19 content
- [LINK]: Learn more (**Add**)???

## PAYMENT HISTORY/DEBT

### Scheduled payment updates 
- Date
- Type of payment
- $$ of payment
- Date payment will be recieved
- Additional info??
- [LINK]: Go to.... (can we do this?)




## NOTES/QUESTIONS 

- For any piece of information we want to show, we need to check with VA Notify to see if they are already getting that information. (Example: prescription information may be masked, or may not exist)
  - We need to double check with VA Notify about existing urls for links in the notifcations.
  - How many notifications are people getting for each notification? (Example: Are they getting a notification for an appointment 1 month + 3 weeks + 1 week out, or is it just one notification?) 
  - For a given appt is there a stable ID for that particular appointment? If there were 3 different reminders for the same appt would there be an easy way to know they were all for the same appt?
- Do the templates need to be in HTML? Or can we get raw JSON data? We need to follow up with VA Notify about this.
  - Templates should be stored on the FE, as react components.


