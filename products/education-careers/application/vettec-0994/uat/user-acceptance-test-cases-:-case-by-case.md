# User Acceptance Test Cases : Case by Case
The goal is to have these test cases executed by non-BAH team members (users and education team subject matter experts) prior to production go-live in an effort to gain agreement that we're ready to move forward for launch.

## Test Cases

### Test Case 1 (Completed by Ricky 02/21 10:56 V-EBC-1040)
- Submit without 1990 (Answer "No" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm expected text appears on the confirmation page
- Submit without programs (Do not provide a response on the program selection page)
   - Expected Results: Button to complete 1990 does not appear upon submission
   - Notes: This will have to be a special user account that no one else is using to test 1990s 

### Test Case 2 (Completed by Ricky 02/21 13:45 V-EBC-1046)
- Submit without 1990 (Answer "No" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm expected text appears on the confirmation page
- Submit without programs (Select "Not Yet" on the program selection page)
   - Expected Results: Button to complete 1990 does not appear upon submission
   - Notes: This will have to be a special user account that no one else is using to test 1990s 

### Test Case 3 (Completed by Devin 02/26/ 12:23 V-EBC-1058)
- Submit all education forms on the same day prior to beginning 22-0994 application
  - 22-1995
  - 22-1990 that will end up in the Eastern (Buffalo) Regional Office
    - EASTERN RO = CT DE DC ME MD MA NC NH NJ NY PA RI VT VA VI AA
  - 22-5490 
  - 22-5495
  - 22-0994
- Submit with 1990 (Answer "Yes" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm no 1990 text appears on the confirmation page
- Submit with 3 programs
   - Expected Results: Button to complete 1990 appears upon submission
   - Notes: This will have to be a designated user account that no one else is using to test additional education forms 

### Test Case 4 (Completed by Ricky 02/26 13:10 V-EBC-1061)(Re-submitted 02/28 09:25 V-EBC-1078)
- Submit with all education forms on the same day
  - 22-1990 N
  - 22-0994
- Submit with 3 programs
- Submit with 1990 (Answer "Yes" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm no 1990 text appears on the confirmation page
Expected Results: Button to complete 1990 appears upon submission
Notes: This will have to be a designated user account that no one else is using to test additional education forms 

### Test Case 5 (Completed by Matt 02/26 10:56 V-EBC-1059)
- Submit with 3 programs
- Submit with 1990 (Answer "Yes" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm no 1990 text appears on the confirmation page
- Submit with all education forms on the same day
  - 22-1990 E
  - 22-0994
Expected Results: Button to complete 1990 does not appears upon submission
Notes: This will have to be a designated user account that no one else is using to test additional education forms 

### Test Case 6 (Completed by Devin 02/26/ 14:04 V-EBC-1067)
- Submit with 1990 that will end up in the Central (Buffalo) Regional Office
  - CENTRAL = CO IA IL IN KS KY MI MN MO MT NE ND OH SD TN WV WI WY
Expected Results: 
Notes: 
  
### Test Case 7 (Completed by Matt 02/26 13:52 V-EBC-1066 )
- Submit 1990 that will end up in Western Regional Office: 
   - WESTERN = AK AL AR AZ CA FL GA HI ID LA MS NM NV OK OR SC TX UT WA GU PR AP
   
### Test Case 8 (Completed by Ricky 02/21 14:14 V-EBC-1047) (Resubmitted 02/28 08:12 V-EBC-1075)
- Submit with Active Duty

### Test Case 9 (Completed by Des on 02/18/2019, 02/27/2019)
- Submit with Yes for "do you anticipate you’ll be called to active duty during the VET TEC program?"
- Submit with max number of characters in each field
- Submit with special characters in all text fields
- Long account number
- Submit with dates that occur in the past

### Test Case 10 (Completed by Des on 02/18/2019, 02/27/2019)
- Submit without answer:
  - "Do you anticipate you will go on active duty during the VET TEC program?"
  - Highest level of education you've completed
  - "Have you picked any programs you’d like to attend using VET TEC benefits?"
  - Postal code for international address
  - Bank account information

### Test Case 11 (Completed by Ricky 02/25 14:37 V-EBC-1049)
- Submit with
  - Alternate phone number (Contact information)
  - International Address
  - Address Line 2
  - Address Line 3
  - Only bank account type
  
### Test Case 12 (Completed by Ricky 02/25 14:54 V-EBC-1050)
  - Submit with only account number

### Test Case 13 (Completed by Ricky 02/25 15:18 V-EBC-1051) (resubmitted 02/28 11:13 V-EBC-1080)
- Submit with only Routing number



## Validation
### Applicant Information
- Confirm that additional text appears when answering "no" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?" **(Completed by Ricky 02/26)**
### Military Service
- Confirm "Are you currently on active duty?" is required **(Completed by Ricky 02/26)**
  - Confirm conditional text appears upon "Yes" **(Completed by Ricky 02/26)**
- Confirm "Do you anticipate you will go on active duty during the VET TEC program?" is not required **(Completed by Ricky 02/26)**
  - Confirm conditional text appears upon "Yes" **(Completed by Ricky 02/26)**
### Education History
- Confirm selection of "Other" results in conditional text box "Other education completed" **(Completed by Ricky 02/26)**
- Confirm that selection of "level of education saves" when moving to the next screen in the application **(Completed by Ricky 02/26)**
### Work Experience
- Confirm you cannot proceed without answering "Are you working in a high-tech industry now?(\*Required)" **(Completed by Ricky 02/26)**
  - Confirm when "Yes" selected that:
      - Confirm that selecting "Yes" to this conditional question results in more conditional questions **(Completed by Ricky 02/26)**
      - Confirm that you can proceed without answering the following questions: 
        - About how much per year do/did you earn as a high-tech worker? **(Completed by Ricky 02/26)**
        - Which option(s) best describe your high-tech work experience? Check all that apply. **(Completed by Ricky 02/26)**
  - Confirm when "No" selected that condition question appears: "Have you worked in a high-tech industry in the past?(\*Required)" **(Completed by Ricky 02/26)**
    - Confirm you cannot proceed witout answering conditional question **(Completed by Ricky 02/26)**
    - Confirm that selecting "Yes" to this conditional question results in more conditional questions **(Completed by Ricky 02/26)**
      - Confirm that you can proceed without answering the following questions: 
        - About how much per year do/did you earn as a high-tech worker? **(Completed by Ricky 02/26)**
        - Which option(s) best describe your high-tech work experience? Check all that apply. **(Completed by Ricky 02/26)**
### Program Selection
- Confirm that selecting "Not yet":
  - results in conditional text "If you haven’t picked a program yet, you can still submit this application. We’ll send a Certificate of Eligibility (COE) if you’re eligible for VET TEC." **(Completed by Ricky 02/26)**
  - results in the user being placed on the "Contact Information" page upon clicking the "Continue" button **(Completed by Ricky 02/26)**
- Confirm that selecting selecting "Yes":
  - results in the user being placed on the second "Program Selection" page upon clicking the "Continue" button **(Completed by Ricky 02/26)**
    - Confirm that if program provider name is not entered then no other fields are required. **(Completed by Ricky 02/26)**
    - Confirm that if program provider name is entered then location and start date are required. **(Completed by Ricky 02/26)**
    - Confirm that no more than three programs can be added on this screen **(Completed by Ricky 02/26)**
    - Confirm that if a training location (Is the training in-person or online?) is selected that the following fields are required: 
      - City, State, Estimated Start date **(Completed by Ricky 02/26)**
### Contact Information
- Confirm that Phone Number is required **(Completed by Ricky 02/26)**
- Confirm that email address is required **(Completed by Ricky 02/26)**
- Confirm any pre-filled content can be edited **(Completed by Ricky 02/26)**
  - Confirm that pre-filled address can be edited. **(Completed by Ricky 02/26)**
    - Confirm that the following fields are required for US address: Country, Street Address, City, State, Zip **(Completed by Ricky 02/26)**
    - Confirm that no fields are required for International Address. **(Completed by Ricky 02/26)**
    - Confirm that edited address is reflected after "Done" is clicked **(Completed by Ricky 02/26)**
    - On the Summary Screen, confirm that updated address is reflected. **(Completed by Ricky 02/26)**
### Personal Information
- Confirm pre-fill bank information is displayed **(Completed by Ricky 02/26)**
- Confirm pre-fill bank information can be changed by selecting "New Account" **(Completed by Ricky 02/26)**
  - Confirm no bank account information is required **(Completed by Ricky 02/26)**
  - Confirm that validation occurs on routing number that requires legitimate routing number if entered **(Completed by Ricky 02/26)**
  - Confirm that edited bank information is reflected after "Done" is clicked **(Completed by Ricky 02/26)**
  - On the Summary Screen, confirm that updated bank information is reflected. **(Completed by Ricky 02/26)**


## Summary Page Testing
- Test what happens when editing all fields on summary page
   - remove all content & save **(Completed by Ricky 02/26)**
      -  Incrementally remove content section by section & save **(Completed by Ricky 02/26)**
   - add special characters & save **(Completed by Ricky 02/26)**
   - change content and then use the back button in the form (not the browser) to navigate to confirm that the content was saved and is appearing as expected on the corresponding page **(Completed by Ricky 02/26)**

## Spool file Testing
- If a Veteran intentionally leaves a question blank, it is blank on the spool file.
- If a Veteran is not shown a question (because it is not relevant based on a previous answer), it is 'N/A' on the spool file.
   - The only questions that could have 'N/A' are (also highlighted on attachment)
      - Provider name
      - Program name
      - Course type
      - Location
      - City
      - State
      - Planned start date
      - If yes, select the technical area
      - What is your current salary range
- Confirm that only last four digits of bank account are displayed if pre-filled
- Confirm that for applications where pre-filled data (bank or contact) was updated that the changes are reflected in the spool file
