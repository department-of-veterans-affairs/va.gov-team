# Instructions for Accessing Patient Check-in in the Staging Environment

You will need to create 2 appointments in VistA's Staging environment in order to test the Pre-Check-in and Mobile Check-in applications.
- One appointment should be within a half hour of the current date & time so that you can test the Mobile Check-in 
- One appointment should be after today so that you can test Pre-Check-in

There is a VistA Staging tool available that makes creating VistA appointments in staging easy.

## VistA Staging Appointment Tool

### Reset Your Confirmations
- Navigate to the [Staging Tool](https://vigilant-couscous-ab7fb4a4.pages.github.io/)
- Go to the Test Patients tab
- Click "Reset All" to reset the update flags for each set of Demographics information 
  - Alternatively, you can click "Reset" for any of the Demographiucs to reset just one or two

### Create an Appointment for Today
- Navigate to the [Staging Tool](https://vigilant-couscous-ab7fb4a4.pages.github.io/)
- Go to the Appointments tab
- Select any clinic
- Select patient Thirteen 
- Select today's tab under Available Appointments
- Find an appointment for which the Book button is not greyed out
    - In order to verify the Mobile Check-in now you should choose an appointment time that is either
      - No more than 30 minutes after the current date & time
      - No more than 15 minutes before the current date & time
- Click "Book"
- Click "Get Check-in Link"
- Wait for the link to generate
- Click "Copy Link to Clipboard"
- Open a new Browser tab/window and paste the copied link into the address bar

### Create an Appointment for the Next Business Day
- Navigate to the [Staging Tool](https://vigilant-couscous-ab7fb4a4.pages.github.io/)
- Go to the Appointments tab
- Select any clinic
- Select patient Thirteen 
- Select the next business day's tab under Available Appointments
- Find an appointment for which the Book button is not greyed out
- Click "Book"
- Click "Get Pre-Check-in Link"
- Wait for the link to generate
- Click "Copy Link to Clipboard"
- Open a new Browser tab/window and paste the copied link into the address bar
  
## Pre-Check-in
- Open the Browser tab/window that contains the URL pasted for today's appointment
- Enter "Thirteen" as the Last Name
- Enter "0013" as the Last 4 digits of the SSN
- Click "Continue" or hit Enter
- Click "Answer Questions"
- NOTE: If the status for Contact, Emergency Contact, and Next of Kin have been updated in the last 7 days, the following questions will not be asked; you can reset your Demographic information status's by using the Staging Tool
- Answer "Yes" to the "Current Contact Information?" questionv
- Answer "Yes" to the "Current Emergency Contact?" question
- Answer "Yes" to the "Current Next of Kin?" question

## Mobile Check-in
- Open the Browser tab/window that contains the URL pasted for the next business day's appointment
- Enter "Thirteen" as the Last Name
- Enter "0013" as the Last 4 digits of the SSN
- Click "Continue" or hit Enter
- NOTE: If the status for Contact, Emergency Contact, and Next of Kin have been updated in the last 7 days, the following questions will not be asked; you can reset your Demographic information status's by using the Staging Tool
- Answer "Yes" to the "Current Contact Information?" questionv
- Answer "Yes" to the "Current Emergency Contact?" question
- Answer "Yes" to the "Current Next of Kin?" question
- NOTE: if "No" is selected for any of the Demographics information, the Veteran will be instructed to check-in with a staff memeber
- Click "Check in now" on your appointment
