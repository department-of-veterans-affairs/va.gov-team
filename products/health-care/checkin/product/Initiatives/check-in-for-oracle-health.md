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

### Included in the MVP
- Veteran can text "check in" to receive an eCheck-in link for an OH appointment that is within the check-in window
    - **We will create a new Initiate Check-in endpoint for VeText to call to initiate check-in for OH appointments**
    - **NOTE: we will NOT return a check-in link for telehealth or telephone appointments** 
- Veteran will be asked if they are "at the facility"
     - If answer is "Yes"
        -  **We will set the patient status to 'Confirmed'**
     - If answer is "No"
        - **We will NOT set the status**
- Veteran will **NOT** be asked to verify their demographics
    - **For Vista appts - we will still ask to verify**
- Veteran will have the opportunity to submit a travel reimbursement while checking in for an OH appointment
- Veteran can complete the process
    - For OH appointments: "Let staff know they've arrived & travel claim being processed"
        - **We will submit their travel claim**
        - **We will tell the Veteran to go to the desk when they get to the waiting room**
        - **We will set the status based on the answer to the "at the facility" question**
            - If answer is "Yes"
                -  **We will set the status to 'Arrived'**
            - If answer is "No"
                - **We will NOT set the status**
    - For Vista appointments: "Check in Now"
        - **We will submit their travel claim**
        - **Per current functionality, we will send a status update to Vista that the Veteran has completed the check-in process**

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
- PCI Blueprint including OH and VistA appointments [Download Service Blueprint PDF](https://github.com/department-of-veterans-affairs/va.gov-team/files/14058249/PCI.Service.Blueprint.2024.pdf) ([Review Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1696788763395/d3aa60a7420ece422a6f6b84659c33350279b782?sender=u37bb983bd3fc3cc00c7d3286))



