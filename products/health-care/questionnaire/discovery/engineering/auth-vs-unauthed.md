# Auth vs UnAuthed 

This will explore the options and weigh the pros and cons of forcing a vet to log in to use the form or not. 


## Option 1: Authenticated Experience

This is the experience a user can get when they are logged in. When a user is authenticated, we currently have access to all the demographic information (age, gender, date of birth, contact information), and access to what upcoming appoints that user has in a similar manner that VAOS is doing[source](data%20from%20VAOS.md). Using the built in authenticated experience, we can pretty much guarantee that the identity of the user has been confirmed and can be trusted.

In this sense, we know the questions to the big questions: 

- Who is logged in? 
- Do they have upcoming appointments?
- What facilities are those appointments at?
- Do they have any outstanding questionnaires to fill out?


### Pros: 
- Pre-built Identity verification using SSOe
- We "shouldn't" have to worry about where the user data is coming from and how valid is it. We will have to tie into existing systems to allow editing and updating of data. Those workflows and systems are already being developed and managed by other teams. We will only have to check and verify with teams where the data is coming from
- When logged in [forms library](forms.md) has save in progress built in, resume form feature and a dashboard for outstanding forms, that we can easily tie into. All really good "nice to have" features.
- Currently, va.gov website lists upcoming appointments on the site for logged in user. We can tie into that area of website by collaborating with those teams (Profile, VAOS, etc..)
- Other systems, such as VeText, are already listen to appointments, so there are precedence and resources to get those systems mirrored, or re-used. 
- We could probably piggyback some VAOS endpoints to have them notify our systems when a new appointment was made


### Cons:

- A user has to log in, that can be huge hurdle for a variety of users
- Even though we gain many "nice to have" built in features, they were built for a different set of use cases than what we have. The current systems assume that we are creating a digital version of a form already that already exists. This will there might be some hurdles with some features that we would have to code around (hacking or being clever) or items that are not possible. We will not know until more features have been defined. 
  


## Option 2: UnAuthenticated Experience

This type of experience is more in line with how commercial vendors do patient intake forms. This way would allow the system to know already who has an appointment, create the forms, and send out to the contact information. 

This was would rely on various checks and inferring the identity of the user. 

The high flow would look like: 


- System sees a new appointment has been made
- System creates a new questionnaire, using the details (demographics, reason for visit, facility, contact information)
- This form would be sent to the records on the appointment, prefilling all the availible information possible
- A message (email/text/push notification) is send to the user's contact information. This would be a unique link for that questionnaire, tied to that appointment
- Upon opening the link, we would need to verify the user using data validation. This could be confirming DoB, Name, SSN, or other personal information, or some combination. Verification can also happen by authentication
- Once verified, the pre-filled form could be filled out and submitted back to the system to be attached as PGD to that Appointment. 

### Pros: 

- No log or VA.gov account needed
- Aligns better with industry normals
- An appointment has all the data information we would need

### Cons: 

- Verifying the identity of the user filling out the form becomes more of a challenge. This verification process would need reviewed, audited and verified that we are up to standards. 
- Harder to leverage the existing system feature (save in progress, resume form, etc.)
- Many of the steps in the flow have tons of risk, everything can be worked through, but the risk is relatively high. 


### Outstanding questions: 

- Confirm tha by using VAMF, we can get the details (demographics, reason for visit, facility, contact information) for an appointment? 
- Is there a way to use VAMF to listen for new appointments? If not, they what data sources do we have? I know that VeText has ideas around this. 
- What level of verification for a user do we need? Who can answer that question?
- What data is required to make a new appointment? With or with out VAOS.


  
## [Questions from ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12291)
> See Authentication feature outline for fields and valuation - This is a Tech investigation Research issue not implementation


> Determine what data we get from logging in that we will not get from the Appointment details.

  As far as information, it looks like we get the same either way. The biggest thing we gain is the ability to verify the correct user is filling out the form. 

> How will we populate a form or data back to clinicians if any specific patient identifiers are missing.



> What can and can't we do with an unauthenticated form?

  [See above section]()


> Take into consideration VeText as we want to send the person that scheduled the appt. a link to the unauth and or auth form

  Any way we slice it, we will using VeText to sent a text message with some data. They have a straight forward [text API](VeText-api.md) that we could tie into today