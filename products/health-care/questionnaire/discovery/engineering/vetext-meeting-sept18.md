# Meeting with Stephen Barrs and Shane Elliot to discuss leveraging VeText 9/18

#### Attendees:  ABuckley, MDewey, LGuild, SBarrs, SElliot

 -  How do we proactively notify clipboard about an appointment.  
	 - It was stressed that **we do not want to store appointment data** in a clipboard *DB, but there is fhir based questionnaire response type data in the PGD. (what does this have impact with storing data if we do or don't use FHIR??)** 
	 - A Veteran ID and appointment ID will be stored in the QR PGD (Question response). 
	 - Appointment IDs may be synthetic and outside of vista specifically  *(what impact does this have??)*
 - VeText can send text messages **but not emails.** 
	 - If the enhancement is made the concerns is the emails may be limited but may be of the nature of asking a veteran to log in and check their secured messages in MHV or a link provided that VetText generated but no sensitive information such as appointment times etc.
	 - The email capability may be something that VeText would need to develop and is not currently on roadmap but is something they want. 
   
### VeText Admin Tool 
 - A reminder can be sent 3 times through VeText. This is configured in the VeText admin page that is used by clinical admins.
 - The admin page has message templates, template variables, and a stop code. 
 - A template variable associated with then clipboard Questionnaire could be added.  *What does this get us/why do we need this?*
 - Discussion on Strategy - Appointments too far into the future may not need Veteran attention for and that appointments that are less than 24 hours in the future could have limitations with VeText capabilities. ie. that they are not real time and have a 24 hour delay before sending the notification.
- VDIFF (Enterprise data exchange transfer system) is an app that is doing some work for VAOS. 
- VDIFF is part of the data transfer between Vista and Cerner primarily but they are looking for new use cases and it was suggested that perhaps they could be a part of the solution.
- Appointment data from CDW was mentioned, though Stephen said that CDW is a day behind and that it is difficult to work with.
- It was mentioned that it would be nice to have an association between **staion number and IEN** but it sounded like it may not be possible *(not sure what this is??)*

## Strategy 

 1. Questionnaire team to send an API that has a list of Questionnaires (this will populate the admin tool drop down for a user to associate an appt to the notification) 
 2. Questionnaire team will send an endpoint for the Vettext to let us know which questionnaire the user selected in the drop down.  
 3. Questionnaire team will send a URL to include in the notification Vet Text sends to the veteran. 
 4. VetText will potentially expose to us an API to know when an appt. has been scheduled so we can populate our Questionnaire list on va.gov. This would also need to include the status updates so we know if an appt. has been re-scheduled or canceled. 


