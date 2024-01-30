# Initiative Brief - Enable eCheck-in for VA Facilities that use Oracle Health (OH) EHR Software

## Overview
 
## Outcome Summary
Veterans who have health appointments at VA facilities that use OH EHR software (formerly CERNER) will be able to use eCheck-in to verify their personal, emergency, and next-of-kin contact information, let staff know that they have arrived for their appointment, and submit a mileage-only travel reimbursement claim.

## Problem
VA Facilities that use Oracle Health EHR software (instead of Vista) would like to offer Veterans the ability to use eCheck-in to verify their personal, emergency, and next-of-kin contact information, let staff know that they have arrived for their appointment, and submit a mileage-only travel reimbursement claim.

## Desired Outcomes
eCheck-in is available to VA facilities that use Oracle Health EHR software.

## Undesired Outcomes
eCheck-in is NOT available to VA facilities that use Oracle Health EHR software.

## Measuring Success

### Key Performance Indicators (KPIs)
- Steady increase of eCheck-in usage at OH facilities
- At least 70% check in completion rate once a Veteran authenticates their identity
- Favorable feedback from Veterans who use eCheck-in at OH facilities

## Launch Planning
- Pilot - mid April 2024
- Release - TBD
   
## MVP

[Work flow for each option below](https://www.figma.com/file/pnR05o7NPJDS0KFUSQ0eE3/Check-in-%7C-Check-in?type=design&node-id=14-6233&mode=design)

### Included in the MVP (OPTION 1 - DO NOT INCLUDE "ARE YOU AT THE FACILITY" PAGE AND STATUS UPDATES TO OH BASED ON ANSWER)
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

### Included in the MVP (OPTION 2 - INCLUDE "ARE YOU AT THE FACILITY" PAGE AND MODIFY WORKFLOW BASED ON ANSWER)
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

### Included in the MVP (OPTION 3 - INCLUDE "ARE YOU AT THE FACILITY" PAGE AND STATUS UPDATES TO OH BASED ON ANSWER)
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

### Not Included in the MVP
- Telehealth & phone appointments (i.e. we will NOT return a check-in link for telehealth or telephone appointments) 
- Pre-Check-in (i.e. Veterans will NOT receive a Pre-Check-in link)
- 45-minute Reminders (i.e. Veterans wll NOT receive a reminder with an eCheck-in link 45 minutes before their OH appointment)
- Insurance Check (i.e. Veteran will receive a eCheck-in link regardless of whether their insurance needs to be reviewed) 
- Status update upon starting check-in workflow (i.e. we will not send a status update when the Veteran has started the check-in workflow)
     
## Questions 
- Does IVC want VeText to check for insurance update?
    - Answer: No
- How are we sending the arrived status to OH? (via MAP services?, VeText?)
    - Answer: we will pursue setting the status via a vets-api call that interfaces with CES

## Workflows

### Veteran Workflow
- [FINAL TECH NOTES_ WORKING DRAFT of PCI Oracle Cerner Integration Pre-Check-In and E-Check-In Workflows v.01_KL (1).pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/14054574/FINAL.TECH.NOTES_.WORKING.DRAFT.of.PCI.Oracle.Cerner.Integration.Pre-Check-In.and.E-Check-In.Workflows.v.01_KL.1.pdf)
- [Check-in OH Userflow Options 01 30 2024 (PDF)](https://github.com/department-of-veterans-affairs/va.gov-team/files/14098879/Check-in.OH.Userflow.Options.01.30.2024.pdf)
