<!-- markdownlint-disable no-duplicate-heading -->

# Test Cases for eCheck-in with Travel Reimbursement
  - [Scope](#scope)
  - [Wireframes](#wireframes)
  - [How to access in Staging](#how-to-access-in-staging)
  - [Test Case A: Happy Path - Successful Check-in - Choose Not to File](#test-case-a-happy-path---successful-check-in---choose-not-to-file)
  - [Test Case B: Happy Path - Successful Check-in - Claim Filed](#test-case-b-happy-path---successful-check-in---claim-filed)
  - [Test Case C: Happy Path - Successful Check-in - Claim Not Filed](#test-case-c-happy-path---successful-check-in---claim-not-filed)  
  - [Test Case D: Edge Case - Claim Already Exists Error](#test-case-d:-edge-case---claim-already-exists-error)
  - [Test Case E: Edge Case - Multiple Appointments Exist Error](#test-case-e:-edge-case---multiple-appointments-exist-error)
  - [Test Case F: Edge Case - General Claim Submission Error](#test-case-f:-edge-case---general-claim-submission-error)

## Scope
This document is for is QA testing of the va.gov portion of the `eCheck-in with Travel Reimbursement` flow. This document does not include testing of VeText, CHIP, LoROTA, or any other downstream system.

## Wireframes 
- [In person Check-in w/ Travel Reimbursement](https://app.abstract.com/projects/ab30c34e-e2f9-4d3e-bb96-3b683b006c24/branches/3c784fa2-f86a-42b7-b1e4-f0fd5f3c1aa3/commits/4ca81f4c5d0ba861fbf534ab88bca414cc7baae4/files/585436fe-2120-45f4-b4f7-fbae01d258d9/layers/9B61B462-73BA-45CF-ABA4-215FD07B6D5A?collectionId=3e7034be-0a0a-4895-8cf2-246a3d3ecb52&collectionLayerId=11842933-81f3-4651-86c5-220d77e2c649&mode=design&present=true&sha=4ca81f4c5d0ba861fbf534ab88bca414cc7baae4) 
- Claim Already Exists - need wireframe
- [Multiple Appointments Exist](https://share.goabstract.com/cc1baa9a-d05e-402c-a2c7-90fd14f5460e?collectionLayerId=9421e29d-1565-4e6a-9ae5-0ca507077a80&mode=design)
- [General Submission Error](https://share.goabstract.com/cc1baa9a-d05e-402c-a2c7-90fd14f5460e?collectionLayerId=9421e29d-1565-4e6a-9ae5-0ca507077a80&mode=design)

## How to access in Staging
- [Instructions for creating an appointment and generating a link to eCheck-in and Pre-Check-in in Staging](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-demos/staging-instructions.md)
- Our experience is un-authenticated. The URL for our experience is unique per appointment as it contains a token parameter that is a UUID and is generated for each appointment
    - UUIDs are constructed in a sequence of digits equal to 128 bits. The ID is in hexadecimal digits, meaning it uses the numbers 0 through 9 and letters A through F. The hexadecimal digits are grouped as 32 hexadecimal characters with four hyphens: XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX.
    - Sample URL: <https://staging.va.gov/health-care/appointment-check-in/?id=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX>

## Test Case A: Happy Path - Successful Check-in - Choose Not to File

### Use case
As a Veteran, I need to check-in for my appointment and I do NOT need to update any of my contact information and I DO NOT want to file a travel reimbursement claim.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `No` to the question "Would you like to file a travel reimbursement claim now?"
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information, instructions about what to do next, and information about how to file a travel reimbursement claim later

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case B: Happy Path - Successful Check-in - Claim Filed

### Use case
As a Veteran, I need to check-in for my appointment andd I do NOT need to update any of my contact information, but I WOULD like to file a travel reimbursement claim and I meet the criteria for filing via eCheck-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `Yes` to each of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information, an acknowledgment that their travel reimbursement claim was filed, and instructions about what to do next for their appointment and their travel claim

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case C: Happy Path - Successful Check-in - Claim Not Filed

### Use case
As a Veteran, I need to check-in for my appointment and I do NOT need to update any of my contact information, but I WOULD like to file a travel reimbursement claim, however I DO NOT meet the criteria for filing via eCheck-in.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `No` to one of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
  - NOTE: if `No` is selected for one of the questions, the subsequent questions will not be asked
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information, an acknowledgment that their travel reimbursement claim could not be filed, and instructions about what to do next for their appointment and an alternate method for filing their travel claim 

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case D: Edge Case - Claim Already Exists Error

### Use case
As a Veteran, I need to check-in for my appointment and I WOULD like to file a travel reimbursement claim. However, I have already filed a claim for today.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `Yes` to each of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
  - NOTE: if `No` is selected for one of the questions, the subsequent questions will not be asked
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information and a message indicating their travel reimbursement claim could not be submitted because a claim already exists for today

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case E: Edge Case - Multiple Appointments Exist Error

### Use case
As a Veteran, I need to check-in for my appointment and I WOULD like to file a travel reimbursement claim. However, I have multiple appointments for today and I will be required to file a claim manually.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `Yes` to each of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
  - NOTE: if `No` is selected for one of the questions, the subsequent questions will not be asked
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information and a message indicating their travel reimbursement claim could not be submitted because they have multiple appointments for today

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups

## Test Case F: Edge Case - General Claim Submission Error
  
### Use case
As a Veteran, I need to check-in for my appointment and I WOULD like to file a travel reimbursement claim. However, the BTSSS API throwns an error and did not accept my claim as a result.
  
### Arrange (Data needed)
See [How to acccess in Staging](#how-to-access-in-staging)

### Act
- User texts "check in" during the check-in window for one of their appointments and receives a Check-in link (NOTE: a link can also be generated internally by using the Staging Tool)
- User clicks their check-in link to load the Check-in application
- User enters their last name and DOB and selects `Continue` to verify their identity
- User selects `Yes` to each of the following questions
    - Is this your current contact information?
    - Is this your current emergency contact
    - Is this your current next of kin information?
    - NOTE: if the user has answered **any** of these 3 questions in the past 7 days for another appointment, that question will not be asked again
- User selects `Yes` to the question "Would you like to file a travel reimbursement claim now?"
- User selects `Yes` to each of the following questions
  - Did you travel in your own vehicle?
  - Did you travel from your home address?
  - Are you claiming only mileage and no other expenses today?
  - NOTE: if `No` is selected for one of the questions, the subsequent questions will not be asked
- User sees listed their appointments for today; each appointment has messaging that shows whether the user is allowed to check-in for the appointment based on the time of the appointment; the check-in window is up to 30 minues before and 15 minutes after the appointment time
    - Your appointment started > 15 minutes ago and now you have to check-in with a staff member
    - Your appointment is inside the check-in window and you can click the `Check-in now` button to check-in for the appointment
    - You already checked in for the appointment
    - You are too early to check-in, you can check-in for the appointment at x:xx time
- User selects the `Check-in now` button for one of their appointments for which the appointment time is within the check-in window
- User should be on the `You're checked in` page and see their appointment information and a message indicating that an error was encountered while trying to submit their travel reimbursement claim 

### Assert (Expected Outcome)
- No errors are thrown
- User sees a confirmation screen with appropriate messaging that matches the mockups
