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
- Veteran will be asked to verify their personal, emergency, and next-of-kin contact information while checking in for an OH appointment
    - **We will retrieve contact information (personal, emergency, & next-of-kin) from the VA Profile Contact and Profile services via MAP instead of from Vista**
    - **If the Veterans answers 'Y' to all 3 contact verification questions**
        - For OH appointments
            - **We will update a single timestamp for the personal contact database record in VA Profile**
        - For Vista appointments
            - **We will update a single timestamp for the personal contact database record in VA Profile**
            - **Per current functionality, we will update the 3 timestamps & 3 verified flags for personal, emergency, & next-of-kin contact database records in Vista based on the responses**
    - **If the Veteran answers 'N' to any of the 3 contact verification questions**
        - For OH appointments
           - **We will NOT update any timestamps in VA Profile**
           - **Per current functionality, We will instruct the Veteran to check in with staff**
        - For Vista appointments
          - **We will NOT update any timestamps in VA Profile**
          - **Per current functionality, we will update the 3 timestamps & 3 verified flags for personal, emergency, & next-of-kin contact database records in Vista based on the responses**
          - **Per current functionality, We will instruct the Veteran to check in with staff**
- Veteran will have the opportunity to submit a travel reimbursement while checking in for an OH appointment
- Veteran can complete check in
    - For OH appointments
        - **We will send a status update to OH to let staff know the Veteran has arrived for their OH appointment**
    - For Vista appointments
        - **Per current functionality, we will send a status update to Vista that the Veteran has completed the check-in process**

### Not Included in the MVP
- Telehealth & phone appointments (i.e. we will NOT return a check-in link for telehealth or telephone appointments) 
- Pre-Check-in (i.e. Veterans will NOT receive a Pre-Check-in link)
- 45-minute Reminders (i.e. Veterans wll NOT receive a reminder with an eCheck-in link 45 minutes before their OH appointment)
- Insurance Check (i.e. Veteran will receive a eCheck-in link regardless of whether their insurance needs to be reviewed) 
- Status update upon starting check-in workflow (i.e. we will not send a status update when the Veteran has started the check-in workflow)
     
## Questions 
- Does IVC want VeText to check for insurance update? - answer is no
- How are we sending the arrived status to OH? (via MAP services?, VeText?)

## Workflows

### Veteran Workflow
[FINAL TECH NOTES_ WORKING DRAFT of PCI Oracle Cerner Integration Pre-Check-In and E-Check-In Workflows v.01_KL (1).pdf](https://github.com/department-of-veterans-affairs/va.gov-team/files/14054574/FINAL.TECH.NOTES_.WORKING.DRAFT.of.PCI.Oracle.Cerner.Integration.Pre-Check-In.and.E-Check-In.Workflows.v.01_KL.1.pdf)

