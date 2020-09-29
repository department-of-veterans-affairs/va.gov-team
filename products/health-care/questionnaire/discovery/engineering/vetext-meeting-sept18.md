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
 - A template variable associated with the clipboard Questionnaire could be added. The template varriable should we a way to associate a specific row in the admin tool for with an appt type to send a link to complete the questionnaire 
 - Discussion on Strategy - Appointments too far into the future may not need Veteran attention for and that appointments that are less than 24 hours in the future could have limitations with VeText capabilities. ie. that they are not real time and have a 24 hour delay before sending the notification.
- VDIFF (Enterprise data exchange transfer system) is an app that is doing some work for VAOS. 
- VDIFF is part of the data transfer between Vista and Cerner primarily but they are looking for new use cases and it was suggested that perhaps they could be a part of the solution.
- Appointment data from CDW was mentioned, though Stephen said that CDW is a day behind and that it is difficult to work with.

## Strategy overview

 1. Questionnaire team will expose an API endpoint that has a list of Questionnaires that VEText will use to populate a drop down in their admin tool. 
 2. Questionnaire team will expose an API endpoint for the VEText to notify the questionnaire service which questionnaire was selected for which user using the dropdown from point 1. 
 3. Questionnaire team will create a relatively unique URL, and send it back to the VEText to include in the notification VEText sends to the veteran. 
 4. VEText can potentially expose to us an API to know when an appointment has been scheduled so we can populate our Questionnaire list on va.gov. This would also need to include the status updates so we know if an appointment has been re-scheduled or canceled. 

[Recent diagram from Shane Elliot](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/assets/clipboard-VEText.jpg)

---

## Strategy Details

#### 1. Questionnare List from questionnaire service

the health quest service in vets-api will expose an endpoint to retrieve a list of questionnaires. This endpoint would not need the typical authentication, but possibly some type of key:
 

```
/api.va.gov/health_quest/v0/questionnaire_list
```
The endpoint would use the Fhir client to obtain all relevant questionnaire records from the PGD and build list such as

```
[{name: 'question-1', id: 444}, {name: 'question-2', id: 445}, {name: 'question-3', id: 446} ... ]
```

#### 2. VeText dropdown

Inside of the VeText clinician admin area, using the list from step 1, VeText would display a drop down to select a questionnaire to be associated with a clinic or stop code. 

#### 3. VeText questionnaire selector

Once the questionnaire is selected in VeText from step 2, then VeText will send a request to selector API in the health quest service 

```
/api.va.gov/health_quest/v0/questionnaire_selector
```

the data sent to the selector API would be of the form:

```
{question_id: 445, component_id: 32, component_type: 'clinic'}
```

#### 4. questionnaire selector API returns a URL

When the health quest service recieves the information from VeText as shown above. It will send back a url of the form below.
This URL may be shortened using a shortening formula

```
/api.va.gov/health_quest/v0/questionnaire_selected/{$questionnaire_id}/{$component_type}/{$component_id}
```

1. This is outside of the scope and would require interfacing the VA Notify system, but sounded like a long range goal:
VeText will send the veteran an appointment reminder and indicate that they have a secure message on the my healthy vet site to check and that they should log into check their messages. When they get the message in the secure area, this URL will then be available for them to click in order to answer the questionnaire

2. Instead of #1 from above, the veteran would recieve a text message with a link. This link would direct them to the va.gov health care area to fill out the questionnaire. 

## VETS-API/VeText flow

![vetext flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/questionnaire/discovery/engineering/assets/vetext-flow.png?raw=true)

- component_type is either stop_code or client
- component_id relates to what is the unique identifier for the given component_type

There will also need to be some type of key based authentication for VeText to access the questionnaire service

