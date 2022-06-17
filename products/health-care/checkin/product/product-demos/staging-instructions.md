# Instructions for Accessing Patient Check-in in the Staging Environment

You will need to create 2 appointments in VistA's Staging environment in order to test the Pre-Check-in and Mobile Check-in applications.
- One appointment should be within a half hour of the current date & time (ET) so that you can test the Mobile Check-in 
- One appointment should be after today so that you can test Pre-Check-in

There is a VistA Staging tool available that makes creating VistA appointments in staging easy. **Note that this tool is only available to VA users with a GitHub account.**

## VistA Staging Appointment Tool (Only available to those with a GitHub account)

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
- Select any clinic
- Select your assigned test patient from the patient list 
- Select today's tab under Available Appointments
- Find an appointment for which the Book button is not greyed out
    - In order to verify the Mobile Check-in now you should choose an appointment time that is either
      - No more than 30 minutes after the current date & time (see current time ET in the upper right corner)
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

## Testing Mobile Check-in
- Do one of these
    - Open the link that was texted to your mobile device
    - Open the Browser tab/window that contains the URL pasted for the next business day's appointment
- Enter the last name for your assigned test patient
- Enter the last 4 digits of your assigned test patient's last name as the SSN (e.g. if last name is Thirty then the last 4 is 0030)
- Click "Continue" or hit Enter
- NOTE: If the status for Contact, Emergency Contact, and Next of Kin have been updated in the last 7 days (e.g. you have confirmed you information in a different  Pre-Check-in or Check-in), the following questions will not be asked; you can reset your Demographic information status's by using the Staging Tool in order to force the applications to again ask these questions outside of the 7-day period
- Answer "Yes" to the "Current Contact Information?" questionv
- Answer "Yes" to the "Current Emergency Contact?" question
- Answer "Yes" to the "Current Next of Kin?" question
- NOTE: if "No" is selected for any of the Demographics information, the Veteran will be instructed to check-in with a staff memeber
- Click "Check in now" on your appointment

## Testing Pre-Check-in
- Open the Browser tab/window that contains the URL pasted for the next business day's appointment
- Enter the last name for your assigned test patient
- Enter the last 4 digits of your assigned test patient's last name as the SSN (e.g. if last name is Thirty then the last 4 is 0030)
- Click "Continue" or hit Enter
- Click "Answer Questions"
- NOTE: If the status for Contact, Emergency Contact, and Next of Kin have been updated in the last 7 days (e.g. you have confirmed you information in a different  Pre-Check-in or Check-in), the following questions will not be asked; you can reset your Demographic information status's by using the Staging Tool in order to force the applications to again ask these questions outside of the 7-day period
- Answer "Yes" to the "Current Contact Information?" questionv
- Answer "Yes" to the "Current Emergency Contact?" question
- Answer "Yes" to the "Current Next of Kin?" question


