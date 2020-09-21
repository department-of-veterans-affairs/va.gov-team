# Meeting with Stephen Barrs and Shane Elliot to discuss leveraging VeText 9/18

#### Attendees:  ABuckley, MDewey, LGuild, SBarrs, SElliot

 -  How do we proactively notify clipboard about an appointment.  
	 - It was stressed that **we do not want to store appointment data** in a clipboard *DB, but there is fhir based questionnaire response type data in the PGD. (what does this have impact with storing data if we do or don't use FHIR??)** 
		- As an example it is our understanding we will be storing aVeteran ID and appointment ID in the QR PGD (Question response). 
 - VeText can send text messages **but not emails.** 
	 - If the enhancement is made the concerns is the emails may be limited but may be of the nature of asking a veteran to log in and check their secured messages in MHV or a link provided that VetText generated but no sensitive information such as appointment times etc.
	 - The email capability may be something that VeText would need to develop and is not currently on roadmap but is something they want. 
   
### VeText Admin Tool 
 - A reminder can be sent 3 times through VeText. This is configured in the VeText admin page that is used by clinical admins.
 - The admin page has message templates, template variables, and a stop code. 
 - A template variable associated with the clipboard Questionnaire could be added.  *Are template varriables what we create to have a specific row in the admin tool for associating to an appt type to send a link to complete the questionnaire ?*
 - Discussion on Strategy - Appointments too far into the future may not need Veteran attention for and that appointments that are less than 24 hours in the future could have limitations with VeText capabilities. ie. that they are not real time and have a 24 hour delay before sending the notification.
- VDIFF (Enterprise data exchange transfer system) is an app that is doing some work for VAOS. 
- VDIFF is part of the data transfer between Vista and Cerner primarily but they are looking for new use cases and it was suggested that perhaps they could be a part of the solution.
- Appointment data from CDW was mentioned, though Stephen said that CDW is a day behind and that it is difficult to work with.

## Strategy 

 1. Questionnaire team will expose an API endpoint that has a list of Questionnaires that VEText will use to populate a drop down in their admin tool. 
 2. Questionnaire team will expose an API endpoint for the VEText to notify the questionnaire service which questionnaire was selected for which user using the dropdown from point 1. 
 3. Questionnaire team will create a relatively unique URL, and send it back to the VEText to include in the notification VEText sends to the veteran. 
 4. VEText can potentially expose to us an API to know when an appointment has been scheduled so we can populate our Questionnaire list on va.gov. This would also need to include the status updates so we know if an appointment has been re-scheduled or canceled. 


