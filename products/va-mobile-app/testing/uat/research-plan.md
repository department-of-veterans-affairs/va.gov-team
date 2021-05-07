# Research Plan for Mobile App MVP UAT
## Goals
### What product & team are you doing this research for?
This UAT will be conducted by the mobile app team for the flagship VA mobile app.
## Background
### Briefly, what is the background on this product? What would a new person on the team need to know about this product?
The mobile app aims to enable Veterans who are already engaged with VA to perform routine transactions so that users can more easily and quickly do quick tasks with VA. As we have built the app we have done QA, and we are preparing for UAT. 
## Research Questions
### What question(s) do you hope to be able to answer after completing this research?
The mobile app has a big scope that cuts across features from VA.gov and MyHealtheVet and across benefits, health care, and other engagement with VA like viewing and editing the VA.gov profile. This scope of our app and this round of UAT also includes signing in. Our primary goal is to ensure data is displaying accurately and our features are working as expected in the mobile app prior to launch. We have broken out the research questions into several sections: 
- Sign In
- General
- Profile
- Personal & contact information
- Military information
- Direct deposit
- Letters
- Settings
- Appointments
- Claims
- Secure Messaging
 
### Signing in
- Can a user successfully get into the app using their ID.me, DS Logon, or MHV credentials?
     - If NOT, is an appropriate error message displaying?
- Can a user opt into biometric authentication?
- Do people see the onboarding flow? Can they get through it and get into the app?
 
### General
- Are the buttons on the bottom navigation bar & home screen sending people to the right place?
- Are any sections of the app not loading?
    - Are the appropriate errors or access messages displayed when it needs to?
- Is the ‘Back’ button consistently working and sending users to the correct (prior) screen?
- If the user has large text turned on, is the app displaying as it should?
 
### Profile
- If there is an issue loading Profile, is the correct error displayed?
- Is the Profile home screen loading properly with the users name and military badge (if applicable)?
- Is the Profile loading all the sections that it should be?

### Personal & contact information
- Is a user's non-editable personal information (date of birth, gender) being pulled in correctly from the database?
- Is a user's editable contact information being pulled in correctly from the database?
- If there is nothing in a field is it showing the correct copy?
- If a section is editable and the user edits it, is it correctly updating in the appropriate field in the app? (addresses, phone numbers, contact email)
- If a user would like to remove information from their profile, does that work correctly?
- If address validation is needed, is it working properly?

### Military information
- Is a user's military information being pulled in correctly from the database?
- If the military information cannot be pulled in, is the correct empty state screen displayed?

### Direct deposit
- For people who have direct deposit set up, is their information being correctly pulled in from the backend? _Note: they should see a preview of their DD info including bank name and last four digits, not all the information._
- Do users without direct deposit set up see an empty state of the screen?

### Letters
- Is a user seeing a list of letters they expect to see? Do they say anything is missing?
- Can a user make selections for benefit letter download?
    - Does the information offered for the benefit letter look right to the user? 
- Are letters downloading successfully? 

### Settings
- Are people seeing all the list items we expect them to see? 
- Does the biometric setting reflect the preference the user set when they onboarded?
 
### Appointments
- Appointments list
    - Are appointments (upcoming and past) displaying when they are supposed to?
        - If there are any canceled appointments, are they displaying in the upcoming list and listed as canceled?
    - If a user has NO upcoming appointments, do they see the correct empty state message?
    - If a user has NO past appointments within a certain date range, do they see the correct empty state message?
- Appointment detail screen
    - On an appointment screen, is the appointment specific information loading and displaying correctly?
- Empty/Error States
    - If a user does not have health records at VA, do they see the correct screen (unenrolled message)? 

### Claims
- Claims List
    - Are open and closed claims displaying when they are supposed to?
    - If a user has NO open claims, do they see the correct empty state message?
    - If a user has NO closed claims, do they see the correct empty state message?
    - If either appeals OR claims aren't loading, does the user see the appropriate error message and UI beneath that error message?
- Claim detail screen
    - On a claim screen, is the claim specific information loading and displaying correctly?
    - On the details tab for a claim, is the claim specific information loading and displaying correctly?
    - If a user is on Step 3 AND has file requests, do they see a CTA to begin the upload process?
        - When they click to begin the upload process, do they see a list of their file requests displaying?
- Empty/Error States
    - If a user has never used claims, do they see the correct screen (unenrolled message)?

### Secure Messaging
- Messages
    - If a user has messages in their inbox, are they displaying? Is the information accurate?
    - Within a specific message screen, is that message loading and displaying correctly? 
    - If a user has a message with multiple replies can they see all the messages?
    - If the user hits ‘Reply’ is the compose reply screen displaying correctly? 
    - If there is an attachment within a message, can the user open it?
- Compose a Message
    - On the inbox screen, if a user clicks ‘Compose message’ is the form coming up?
    - Does the contact list look accurate?
    - Can the user add an attachment to their new message?
- Reply to a Message
    - On a message screen, if a user clicks on ‘Reply’ is the form coming up?
    - If a message is older than 45 days, does the alert show instead of a Reply button.
- Error/Empty State Screens
    - If a user doesn’t have an MHV identifier, do they see the appropriate screen blocking access to the feature?
    - If a user doesn’t have anyone in their contacts list do they see “Can’t match you with a provider” error instead of Compose form?
    - If a user has no messages in their inbox, do they see the appropriate empty state screen?
- Folders
    - If a user has custom folders, are they showing up? Are the right messages in them?
    - Can the user see a read receipt within the Sent folder?

## Hypothesis
### What is your hypothesis for this research?
The MVP mobile app will mostly work as expected, but we will discover issues and bugs that we did not previously know about across the scope of the app. 
## Method
### What method of research are you planning?
Moderated user acceptance testing. 
### Why this method? How does this methodology help you answer your research questions?
We want to test that the mobile app is working properly and as expected on production before launching it to the app stores. We think that guiding participants through sign in and different parts of the app is the best way to ensure features are working across the scope of the product. 
### Where are you planning to do your research?
Zoom.
### What will you be testing?
We will be testing the entirety of the MVP mobile app release, a native mobile app, in production. The app is yet unpublished to the app store. We will distribute the app in the following ways, which each require some set up steps and sending invitations to the participant’s email address: 
- Apple: TestFlight 
- Android: Google Play Beta 

## Participants & recruiting
### Participant criteria: What are you looking for in a participant?
We would like **12** total participants.
 
**Note:** Because the scope of our app is big and cuts across claims, health care, and more, our criteria is longer and likely more complex than usual. Please let us know if this recruitment is proving difficult and we can prioritize and replan accordingly.
 
- All participants must be Veterans
- At least 1 person who lives in a rural or remote area
- At least 1 person who lives in a major metropolitan area
- At least 1 person with a disability rating of 70% or greater
- Participant pool should be diverse in:
    - Branch of service
    - Gender (30% or more women)
    - Race
    - Age (At least 1 participant 35 or under and 1 participant over 55)
- All participants must have signed into VA.gov or MyHealtheVet within the last 6 months
- **All** participants must be LOA3 (identity verified) on VA.gov. Participants will likely not know what this means, so please confirm this prior to testing. This can be confirmed by having users sign into VA.gov with any of their credentials and having them go to the VA.gov profile. If they are prompted to verify their identity, that means they are LOA1 and they are not suitable for testing. If they can see the profile, they are LOA3 and can participate in testing.
- We would like to break down recruitment pretty evenly across credential types, ideally: 
    - **4** MyHealtheVet
    - **4** DS Logon
    - **4** ID.me
- We would like **at least 10** participants who receive health care from the VA. Please confirm this prior to sessions.
    - We would like **all 10** to have VA appointments
    - We would like **all 10** to use Secure Messaging
- We would like **at least 10** participants who use claims or appeals (benefits) from the VA. Please confirm this prior to sessions.
    - We would like **at least 8** participants who have an active claim or appeal.
        - Nice to have: 1 participant at Step 3 of the claims process who has an open request for additional documents from VA 
        - Nice to have: 1 participant whose claim or appeal is considered closed
### Technology criteria
- All participants must be able to **join and screenshare** via the Zoom mobile app. Please confirm with them that they have the Zoom mobile app downloaded prior to the session and they know how to screenshare. If they can not get Zoom working, there is no interview portion of this research and they will not be able to participate.
- All participants must be able to join the session on an iPhone or Android mobile device.
- All participants must be willing to download and install the beta VA mobile app (and in the case of Apple users, the TestFlight app). Participants should be aware prior to the session and may want to take this into account when deciding whether or not to be on a wifi or cellular data connection.
- At the time of recruitment, please collect the email address of participants so that we can give them access to the app beta prior to the session. They will need to be able to access the email we share the beta app with on their phone. 
    - To successfully run sessions, Android participants must give us the email address they use to sign into Google Play and they must have access to this email account on their phone. 
        - Here are some instructions to help participants find this information: “This testing will be using your Google Play Store account. It will be helpful if you are logged in and can share the email address associated with the Play Store beforehand. To locate this email address, open your Google Play Store app and find your account on the top right corner within the search bar. Please share this within 24 hours ahead of your scheduled interview.”
### What is your recruitment strategy?
We will work with Perigean to recruit for this study.
### Timeline: What dates do you plan to do research?
We are looking to start sessions May 24, 2021.
### Prepare: When will the thing you are testing be ready?
The week before we begin testing.
### Length of Sessions: How long do you estimate each session will be?
We expect sessions could take as little as 30 minutes, but they may vary widely in time depending on how much information the participant has that relates to our discussion guide. Please schedule sessions for **60 minutes** with a 30 minute buffer between sessions.
### Availability: If applicable, when would you like sessions scheduled?
Availability: Monday, May 24 - Thursday, May 27 (11 AM EST – 6 PM EST). Please don’t schedule back to back sessions if possible.
### Pilot: Please indicate a date before your sessions begin for piloting your research.
We will be conducting internal sessions in the weeks leading up to this study and will use one of these sessions as our pilot session. 
## Team Roles
Moderator: Bridget Hapner, Melissa Lefevre, Jen Ecker

Point person of contact: Bridget Hapner, [bridget@adhocteam.us](mailto:bridget@adhocteam.us), 773 875 9019

Observers: 
- Leanna Miller: Leanna.Miller@va.gov 
- Tracey Mulrooney: tracey.mulrooney@va.gov
- Ashley Matthews: ashley.matthews@adhocteam.us 
- Jen Ecker: [jen.ecker@adhocteam.us](mailto:jen.ecker@adhocteam.us)
- Meli Manak: meli.manak@adhocteam.us 
- Melissa Lefevre: [melissa.lefevre@adhocteam.us](mailto:melissa.lefevre@adhocteam.us)
- Ayush Chakravarty: ayush@adhocteam.us
- Martha Wilkes: martha.wilkes@va.gov
- Patrick Saxton: patrick.saxton@adhocteam.us
- Jayson Perkins: jayson.perkins@adhocteam.us
- Alastair Dawson: alastair@adhocteam.us
- Bess Green: bess@digitalfoundry.com
- Narin Ratana: narin@adhocteam.us 
- Teesh Shahi: teesh.shahi@adhocteam.us
- Ambika Roos: ambika@adhocteam.us 
- Alex Taylor: alex@adhoc.team 
