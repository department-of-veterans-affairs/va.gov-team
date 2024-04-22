# Initiative Brief - Enable Mileage-Only Travel Claim Submission for VA Facilities that use Oracle Health (OH) EHR Software

## Overview
 
## Outcome Summary
Veterans who have health appointments at VA facilities that use OH EHR software (formerly CERNER) will be able to submit a mileage-only travel reimbursement claim.

## Problem
VA Facilities that use Oracle Health EHR software (instead of VistA) have specific screens that always needed to be completed by an MSA. After discussion with IVC (Jeff Lowe and Robert Tow), there is not significant value for offering e-Checking at Oracle Health sites. The biggest value is the ability for a Veteran to submit a a mileage-only travel reimbursement claim using low-risk authentication. This will be the only focus for MVP. 

## Desired Outcomes
Veterans can submit a mileage-only travel reimbursement claim using their mobile device at VA facilities that use OH EHR software.

## Undesired Outcomes
Adding features to the process that do not make it easier for Veterans to access health needs. 

## Measuring Success

### MVP Key Performance Indicators (KPIs)
- Steady increase travel pay requests at Oracle Health sites
- At least 70% check in completion rate once a Veteran authenticates their identity
- Favorable feedback from Veterans who use travel pay reimbursement at OH facilities

## Launch Planning
- Pilot - mid April 2024
- Release - TBD
   
## MVP
### Included in the MVP

[Design](https://www.figma.com/file/pnR05o7NPJDS0KFUSQ0eE3/Check-in-%7C-Check-in?type=design&node-id=96-709&mode=design)<br/>
Service Blueprint - [Download PDF](https://github.com/department-of-veterans-affairs/va.gov-team/files/14313974/OH.Online.BT.Service.Blueprint_2024-02-16_17-14-01.pdf) [Review Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1707427471672/75fb6b9eea27c7b854e8b31c0e9017e2a54bb95a?sender=u37bb983bd3fc3cc00c7d3286)

- Veteran texts "travel" on the day of their OH appointment
- Veteran receives a link back if they have an OH appointment today (**Q: is VeText going to send CVT appts too?**)
    - Veteran will receive an error message if they (1) do not have any OH appointments for today, (2) we cannot find their phone number in the VA records, or (3) the feature is not available for their appointment's facility
- Veteran clicks the link 
    - Veteran will receive a "link has expired" message if they click the link after the day of the OH appointment
    - Veteran sees a "you've already filed a claim" message if they click the link and they have already filed a claim for their OH appointment today (1 claim per facility per day is allowed)
- Veteran verifies their identity
- Veteran sees information on
    - How to check their eligibility to file a claim
    - How to file a claim now
    - How to file a claim for other expenses later
- Veteran chooses to file a claim
    - If the Veteran has more than 1 appointment today at different facilities, the Veteran selects for which appointment(s) they would like to submit a claim
- Veteran answers the 3 travel questions
    - Veteran see an error message if they answer "no" to any of the 3 questions
- Veteran agrees to the VA's terms & submits their claim (or chooses to file later)
- Veteran sees confirmation that their claim was submitted and information for how to check the status of their claim
- Veteran receives an SMS that includes the claim submission status returned from BTSSS

### Not Included in the MVP
- We are not offering this feature for VistA appointments
- We are not offering this feature for telehealth & phone appointments 
- We are not offering eCheck-in or Pre-Check-in for OH appointments

<details>
<summary>OTHER OPTIONS THAT WE CONSIDERED BUT ARE NOT DOING</summary>

**NOTE: THESE OPTIONS WERE EVALUATED WHEN THE GOAL WAS TO ENABLE CHECK IN FOR OH FACILITIES; WE EVENTUALY DECIDED ON DOING TRAVEL ONLY **

 ## MODIFIED OPTION 1 - Travel Claim Only
Decisions reached on 1/30/2024 with OCTO and IVC: 
- Veteran receives day of 45 minute appt reminder (VEText Work)
  - If Veteran hasn't already confirmed their appointment, VEText will ask them to confirm by replying Y or N
  - If Veteran replies Y, VEText will send a message about Seeing the Clerk when they arrive and providing a link if they want to start a Travel Pay Claim
  - If Veteran had already confirmed their appt, VEText will send an appt reminder text that tells the Veteran to see a clerk upon arrival and provide link to start a travel pay claim
- Veteran clicks on link and Veteran will see new H1 & body on the verify identity page
  - Remove any reference to Arrived- this is strictly a Travel Pay workflow
  - Need something like You can now start a travel pay claim before your appointment. VA staff will confirm eligibility and payment amount after your appointment. (Maybe this last sentence goes somewhere else in the workflow.)
 - Veteran works through the same Travel Pay screens that is in PCI today.
 - Once they confirm and submit, show success page with success message, reminder to see staff when they arrive for their appt, and list of other upcoming appointments.
 - VEText sends travel claim submission success as they do today. (VEText)
 - We send the Veteran a text with the status of the claim submission

**NOTE: we will NOT return a check-in link for telehealth (CVT included) or telephone appointments**
   
## OPTION 1 - DO NOT INCLUDE "ARE YOU AT THE FACILITY" PAGE AND STATUS UPDATES TO OH BASED ON ANSWER
- Veteran can text "check in" to receive an eCheck-in link for an OH appointment that is within the check-in window
    - CIE work
        - **We will create a new Initiate Check-in endpoint for VeText to call to initiate check-in for OH appointments**
    - VeText work
        - **New content for the second SMS message (VeText work)**
        - **Will send OH appointments for check-in to the new initiatiate check-in endpoint**        
    - **NOTE: we will NOT return a check-in link for telehealth or telephone appointments** 
- Veteran will see new H1 & body on the verify identity page
    - No changes for Vista appointments  
- Veteran will **NOT** be asked to verify their demographics
    - **For Vista appts - we will still ask to verify**
- Veteran will have the opportunity to submit a travel reimbursement while checking in for an OH appointment
- Veteran can complete the process
    - For OH appointments: "Let staff know they've arrived & travel claim being processed"
        - **We will submit their travel claim**
        - **We will tell the Veteran to go to the desk when they get to the waiting room**        
    - For Vista appointments: "Check in Now"
         - **SAME FUNCTIONALITY**
           - **We will submit their travel claim**
           - **We will send a status update to Vista that the Veteran has completed the check-in process**

## OPTION 2-INCLUDE "ARE YOU AT THE FACILITY" PAGE AND MODIFY WORKFLOW BASED ON ANSWER
- **NOTE: if we are not able to get the Patient ICN (in order to create a MAP token) then this option is not viable in the timeframe**
- Veteran can text "check in" to receive an eCheck-in link for an OH appointment that is within the check-in window
    - CIE work
        - **We will create a new Initiate Check-in endpoint for VeText to call to initiate check-in for OH appointments**
    - VeText work
        - **New content for the second SMS message (VeText work)**
        - **Will send OH appointments for check-in to the new initiatiate check-in endpoint**        
    - **NOTE: we will NOT return a check-in link for telehealth or telephone appointments** 
- Veteran will see new H1 & body on the verify identity page
    - No changes for Vista appointments  
- Veteran will be asked if they are "at the facility"
     - For OH appointments
         - If answer is "Yes" 
            -  **We will set the patient status to 'Confirmed'**      
        - If answer is "No"
            -  **We won't set the status**
            -  **We send the Veteran to the "go see staff" page & they cannot submit a travel claim**                 
     - For Vista appointments
         - We do not show this page; not included in the MVP, we will do after OH go live
- Veteran will **NOT** be asked to verify their demographics
    - **For Vista appts - SAME FUNCTIONALITY - we will still ask to verify**
- Veteran will have the opportunity to submit a travel reimbursement while checking in for an OH appointment
- Veteran can complete the process
    - For OH appointments: "Let staff know they've arrived & travel claim being processed"
        - **Button action for completion will say "I am here"**
        - **We will submit their travel claim**
        - **We will tell the Veteran to go to the desk when they get to the waiting room**
        - **We will set the patient status in OH based on the answer to the "are they at the facility" question**
            - **We will set the status to 'Arrived'**            
        -  **Check-in status on the success/appointments list page will be "You confirmed your arrival at {time}"**
    - For Vista appointments: "Check in Now"
        - **SAME FUNCTIONALITY**
           - **We will submit their travel claim**
           - **We will send a status update to Vista that the Veteran has completed the check-in process**

## OPTION 3 - INCLUDE "ARE YOU AT THE FACILITY" PAGE AND STATUS UPDATES TO OH BASED ON ANSWER
- **NOTE: if we are not able to get the Patient ICN (in order to create a MAP token) then this option is not viable in the timeframe**
- Veteran can text "check in" to receive an eCheck-in link for an OH appointment that is within the check-in window
    - CIE work
        - **We will create a new Initiate Check-in endpoint for VeText to call to initiate check-in for OH appointments**
    - VeText work
        - **New content for the second SMS message (VeText work)**
        - **Will send OH appointments for check-in to the new initiatiate check-in endpoint**        
    - **NOTE: we will NOT return a check-in link for telehealth or telephone appointments** 
- Veteran will see new H1 & body on the verify identity page
    - No changes for Vista appointments  
- Veteran will be asked if they are "at the facility"
     - For OH appointments
         - If answer is "Yes" 
            -  **We will set the patient status to 'Confirmed'**      
        - If answer is "No"
            -  **We will set the patient status to 'Confirmed'**                    
     - For Vista appointments
         - We do not show this page; not included in the MVP, we will do after OH go live
- Veteran will **NOT** be asked to verify their demographics
    - **For Vista appts - we will still ask to verify**
- Veteran will have the opportunity to submit a travel reimbursement while checking in for an OH appointment
- Veteran can complete the process
    - For OH appointments: "Let staff know they've arrived & travel claim being processed"
        -  **Button action for completion will say "I am here" or "On my way" depending on answer to "are you at the facility"**
        - **We will submit their travel claim**
        - **We will tell the Veteran to go to the desk when they get to the waiting room**
        - **We will set the patient status in OH based on the answer to the "are they at the facility" question**
            - If answer is "Yes"
                -  **We will set the status to 'Arrived'**
            - If answer is "No"
                - **We will NOT set the status**
        -  Check-in status on the success/appointments list page will be "You confirmed you're on your way at {time}" or "You confirmed your arrival at {time}" depending on answer to "are you at the facility"
    - For Vista appointments: "Check in Now"
         - **SAME FUNCTIONALITY**
           - **We will submit their travel claim**
           - **We will send a status update to Vista that the Veteran has completed the check-in process**

</details>
    




