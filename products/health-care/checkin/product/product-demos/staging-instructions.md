# Instructions for Accessing Patient Check-in in the Staging Environment

You will need to create 2 appointments in VistA's Staging environment in order to test the Pre-Check-in and Mobile Check-in applications.
- One appointment should be within a half hour of the current date & time (ET) so that you can test the Mobile Check-in 
- One appointment should be after today so that you can test Pre-Check-in

There is a VistA Staging tool available that makes creating VistA appointments in staging easy. **Note that this tool is only available to VA users with a GitHub account.**

## VistA Staging Appointment Tool (Only available to those with a GitHub account)

### Test Patients to Use
You can use one of the following test patients.
| Last Name | Date of Birth |
|----------------| ------------ |
| Fortyfour | 04-07-1935	| 
| Fortyfive | 04-07-1935	| 
| Fortysix | 04-07-1935	| 
| Fortyseven | 04-07-1935	| 
| Fortyeight | 04-07-1935	| 
| Fortyeight | 04-07-1935	| 

### Reset Your Confirmations
- Navigate to the [Staging Tool](https://vigilant-couscous-ab7fb4a4.pages.github.io/)
  - NOTE: you will need to be on the VA network to access the tool
- Go to the Test Patients tab
- Select your assigned test patient
- Click "Reset All" to reset the update flags for each set of Demographics information 
  - Alternatively, you can click "Reset" for any of the Demographiucs to reset just one or two

### Create an Appointment for Today
- Navigate to the [Staging Tool](https://vigilant-couscous-ab7fb4a4.pages.github.io/)
  - NOTE: you will need to be on the VA network to access the tool
- Go to the Appointments tab
  - **NOTE: if you are using a Review Instance/Environment, replace the Base URL with the link to the Review Environment you will be using**
      - EXAMPLE: https://vigilant-couscous-ab7fb4a4.pages.github.io/?baseUrl=http://854c59f8f5688b98d13f7bf75367c2ab.review.vetsgov-internal
      - ![image](https://github.com/user-attachments/assets/adf0bbfd-0f9e-48c0-a62d-aa311f0b210d)
- Select any clinic
- Select your assigned test patient from the patient list 
- Select today's tab under Available Appointments
- Find an appointment for which the Book button is not greyed out
    - In order to verify the Mobile Check-in now you should choose an appointment time that is either
      - No more than 45 minutes after the current date & time (see current time ET in the upper right corner)
      - No more than 15 minutes before the current date & time (see current time ET in the upper right corner)
- Click "Book"
- Click "Get Check-in Link"
- Wait for the link to generate
- Click "Copy Link to Clipboard"
- Save the link that you copied, you will need it later if you want to test somewhere other than you mobile device

### Create an Appointment for the Next Business Day
- Navigate to the [Staging Tool](https://vigilant-couscous-ab7fb4a4.pages.github.io/)
  - NOTE: you will need to be on the VA network to access the tool
- Go to the Appointments tab
- Select any clinic
- Select your assigned test patient from the patient list 
- Select the next business day's tab under Available Appointments
- Find an appointment for which the Book button is not greyed out
- Click "Book"
- Click "Get Pre-Check-in Link"
- Wait for the link to generate
- Click "Copy Link to Clipboard"
- Save the link that you copied, you will need it later if you want to test somewhere other than you mobile device

## Authentication
- The eCheck-in and Pre-Check-in applications are un-authenticated. The URL is unique per appointment as it contains a token parameter that is a UUID and is generated for each appointment
    - UUIDs are constructed in a sequence of digits equal to 128 bits. The ID is in hexadecimal digits, meaning it uses the numbers 0 through 9 and letters A through F. The hexadecimal digits are grouped as 32 hexadecimal characters with four hyphens: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.
    - Sample URL: https://staging.va.gov/health-care/appointment-check-in/?id=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX

## Testing eCheck-in
- NOTE: you will only be able to check-in if you appointment time is no more than 45 minutes from now and no more than 15 minutes ago
- Do one of these
    - Text "Check in" to 254-278-2622 (this is the phone number for Staging SMS)
    - Open the link that you copied after creating an appointment in the Staging tool
- Enter the last name for your assigned test patient
- Enter the 2-digit month, 2-digit day, and 4-digit year of your assigned test patient's date of birth 
- Click "Continue" or hit Enter
- NOTE: If the status for Contact, Emergency Contact, and Next of Kin have been updated in the last 7 days (e.g. you have confirmed you information in a different  Pre-Check-in or Check-in), the following questions will not be asked; you can reset your Demographic information status's by using the Staging Tool in order to force the applications to again ask these questions outside of the 7-day period
- Answer "Yes" to the "Current Contact Information?" questionv
- Answer "Yes" to the "Current Emergency Contact?" question
- Answer "Yes" to the "Current Next of Kin?" question
- NOTE: if "No" is selected for any of the Demographics information, the Veteran will be instructed to check-in with a staff memeber
- Click "Check in now" on your appointment

## Testing Pre-Check-in
- NOTE: you will only be able to do Pre-Check-in before the appointment day
- Do one of these
    - Open the link that was provided to you manually by a team member    
    - Open the link that you copied after creating an appointment in the Staging tool
- Enter the last name for your assigned test patient
- Enter the 2-digit month, 2-digit day, and 4-digit year of your assigned test patient's date of birth 
- Click "Continue" or hit Enter
- Click "Answer Questions"
- NOTE: If the status for Contact, Emergency Contact, and Next of Kin have been updated in the last 7 days (e.g. you have confirmed you information in a different  Pre-Check-in or Check-in), the following questions will not be asked; you can reset your Demographic information status's by using the Staging Tool in order to force the applications to again ask these questions outside of the 7-day period
- Answer "Yes" to the "Current Contact Information?" questionv
- Answer "Yes" to the "Current Emergency Contact?" question
- Answer "Yes" to the "Current Next of Kin?" question


