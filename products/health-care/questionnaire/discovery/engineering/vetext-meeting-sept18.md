
Meeting with Stephen Barrs and Shane Elliot to discuss leveraging VeText 9/18

One of the main scenarios that was discussed was how do we proactively notify clipboard about an appointment. 
It was stressed that we do not want to store appointment data, but there is fhir based questionnaire response type data in
the PGD. Pressumably a veteran ID and appointment ID will be stored in the QR PGD (Question response). Keep in mind that the appointment
IDs may be synthetic and outside of vista specifically 

VeText can send text messages and potentially emails. The emails may be limited but may be of the nature of asking a veteran to log in
and check their secured messages or a link provided that VetText generated but no sensitive information such as appointment times etc. 
The email capability may be something that VeText would need to enhance or develop more

A reminder can be sent 3 times through VeText typically. This is configured in the VeText admin page that is used by clinical admins.
The admin page has message templates, template variables, and a stop code. It was mentioned a template variable associated with the clipboard 
Questionnaire could be added. It was mentioned that appointments too far into the future may not need questionnaire attention for 
the clipboard and that appointments that are less than 24 hours in the future could have limitiations with VeText capabilities.

It was mentioned that my healthy vet and VAOS may be able to provide some of the solution. 
It would be nice if VAOS had something like a start appointment button to start the process of filling out a questionnaire, though this would also
involve a save progress feature. We also need to think about what is the status of the questionnaire, has it been started or finished and 
take into account cancelations. 

VDIFF is an app that was mentioned. They are doing some work for VAOS. VDFF is part of the data transfer bewteen
Vita and Cerner primarily but they are looking for new use cases

Appointment data from CDW was mentioned, though Stephen said that CDW is a day behind and that it is difficult to work with

It was mentioned that it would be nice to have an association between staion number and IEN but it sounded like it may not be possible

