
# Overview
This file is to house the research findings from ticket #2358

[Original Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2358)


## Process Flow
When a user creates a new 686 form, the system makes an MVI call to retrieve the user's information and pre-fill data on the form where applicable/available.  The form is then saved using our in_progress_forms process until the user has completed the form and is ready to submit.  

Upon submitting the form, the system retrieves the user's current information from EVSS:
 >     endpoint:/wss-686-services-web-2.6/rest/load/retrieve
 >     method:get

[See here for examples of json data received from EVSS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/engineering/686-evss-form-data.md)

The system then takes the parsed form data received from the front end, and merges it with the existing veteran data received from EVSS in the previous step.  
[See here for examples of json data received from the UI](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/engineering/686-form-data.md)


Once the form data has been merged together (previous existing data merged with the new data the user is submitting), the system makes a call to clean the form:
>      endpoint:/wss-686-services-web-2.6/rest/inflightform/cleanForm
>      method:post

Then another call to validate the form:
>      endpoint:/wss-686-services-web-2.6/rest/inflightform/validateForm
>      method:post

Then another call to save the entire form:
>      endpoint:/wss-686-services-web-2.6/rest/inflightform/saveForm
>      method:post

And finally. if all those steps are successful, the system calls the EVSS form 686 submission process:
>      endpoint:/wss-686-services-web-2.6/rest/form686submission/submit
>      method:post
