# UAT Test Case Outline

## Submission Tests
### Submit with other education forms
- Submit without programs
- Submit with 3 programs
- Submit without 1990 (Answer "No" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm expected text appears on the confirmation page
- Submit without 1990 (Answer "Yes" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?") to confirm no 1990 text appears on the confirmation page
- Submit with 1990 completed on the same day
- Submit with 1990 completed on a different day? 
   - Can we test this?
- Submit all education forms on the same day
   - 22-1995
   - 22-1990
   - 22-1990 E
   - 22-1990 N
   - 22-5490 
   - 22-5495
   - 22-0994
- Submit education forms on the same day
   - 22-1995
   - 22-1990
   - 22-0994
- Submit 1990 that will end up in the Eastern (Buffalo) Regional Office
   - EASTERN = CT DE DC ME MD MA NC NH NJ NY PA RI VT VA VI AA
- Submit 1990 that will end up in Central Regional Office: 
   - CENTRAL = CO IA IL IN KS KY MI MN MO MT NE ND OH SD TN WV WI WY
- Submit 1990 that will end up in Western Regional Office: 
   - WESTERN = AK AL AR AZ CA FL GA HI ID LA MS NM NV OK OR SC TX UT WA GU PR AP

### Submit with Varied Data
- Submit with Active Duty
- Submit with Reserve Duty
- Submit with response that 1990 completed (confirm button to complete 1990 does not appear)
- Submit with response that 1990 not completed (confirm button to complete 1990 appears)
- Submit with large number of characters than believed possible 
- Submit with special characters in all text fields
- Submit with dates that occur in the past
- Submit without answer:
  - "Do you anticipate you will go on active duty during the VET TEC program?"
  - Highest level of education you've completed
  - "Have you picked any programs you’d like to attend using VET TEC benefits?"
  - Postal code for international address
  - Bank account information
- Submit with 
  -- Alternate phone number (Contact information)
  -- International Address
  -- Address Line 2
  -- Address Line 3
  -- Only bank account type
  -- Only account number
  - Only Routing number
  - Long account number; account number with letters 

## Validation
### Applicant Information
- Confirm that additional text appears when answering "no" to "Have you already submitted an Application for VA Education Benefits (VA Form 22-1990)?"
### Military Service
- Confirm "Are you currently on active duty?" is required
  - Confirm conditional text appears upon "Yes"
- Confirm "Do you anticipate you will go on active duty during the VET TEC program?" is not required and that 
  - Confirm conditional text appears upon "Yes"
### Education History
- Confirm selection of "Other" results in conditional text box "Other education completed"
- Confirm that selection of "level of education saves" when moving to the next screen in the application
### Work Experience
- Confirm you cannot proceed without answering "Are you working in a high-tech industry now?(*Required)" 
  - Confirm when "Yes" selected that 
      - Confirm that selecting "Yes" to this conditional question results in more conditional questions
      - Confirm that you can proceed without answering the following questions: 
        - Have you worked in a high-tech industry in the past?(*Required)
        - Which option(s) best describe your high-tech work experience? Check all that apply.
  - Confirm when "No" selected that condition question appears: "Have you worked in a high-tech industry in the past?(*Required)"
    - Confirm you cannot proceed witout answering conditional question
    - Confirm that selecting "Yes" to this conditional question results in more conditional questions
      - Confirm that you can proceed without answering the following questions: 
        - Have you worked in a high-tech industry in the past?(*Required)
        - Which option(s) best describe your high-tech work experience? Check all that apply.
### Program Selection
- Confirm that selecting selecting "Not yet":
  - results in conditional text "If you haven’t picked a program yet, you can still submit this application. We’ll send a Certificate of Eligibility (COE) if you’re eligible for VET TEC."
  - results in the user being placed on the "Contact Information" page upon clicking the "Continue" button
- Confirm that selecting selecting "Yes":
  - results in the user being placed on the second "Program Selection" page upon clicking the "Continue" button
    - Confirm that no more than three programs can be added on this screen
    - Confirm that if a training location (Is the training in-person or online?) is selected that the following fields are required: 
      - City, State, Estimated Start date
### Contact Information
- Confirm that Phone Number is required
- Confirm that email address is required
- Confirm any pre-filled content can be edited 
  - Confirm that pre-filled address can be edited. 
    - Confirm that the following fields are required for US address: Country, Street Address, City, State, Zip 
    - Confirm that no fields are required for International Address.
    - Confirm that edited address is reflected after "Done" is clicked
    - On the Summary Screen, confirm that updated address is reflected. 
### Personal Information
- Confirm pre-fill bank information is displayed
- Confirm pre-fill bank information can be changed by selecting "New Account"
  - Confirm no bank account information is required
  - Confirm that validation occurs on routing number that requires legitimate routing number if entered
  - Confirm that edited bank information is reflected after "Done" is clicked
  - On the Summary Screen, confirm that updated bank information is reflected. 


## Summary Page Testing
- Test what happens when editing all fields on summary page
-- remove all content & save
---  Incrementally remove content section by section & save
-- add special characters & save
-- change content and then use the back button in the form (not the browser) to navigate to confirm that the content was saved and is appearing as expected on the corresponding page 

## Spool file Testing
- Confirm NAs appear on the Spool file for all questions not answered
- Confirm that only last four digits of bank account are displayed
- Confirm that only last four of social are displayed
- Confirm that for applications where pre-filled data (bank or contact) was updated that the changes are reflected in the spool file
