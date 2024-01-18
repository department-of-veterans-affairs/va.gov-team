# Initiative Brief - Enable eCheck-in for VA Facilities that use Oracle Health (OH) EHR Software

## Overview
 
## Outcome Summary
Veterans who have health appointments at VA facilities that use Oracle Health EHR software (formerly CERNER) will be able to use eCheck-in to verify their personal, emergency, and next-of-kin contact information and let staff know that they have arrived for their appointment.

## Problem
VA Facilities that use Oracle Health EHR software (instead of Vista) would like to offer Veterans the ability to use eCheck-in to verify their personal, emergency, and next-of-kin contact information and let staff know that they have arrived for their appointment. 

## Desired Outcomes
VA facilities that use Oracle Health EHR software can offer eCheck-in for Veterans to verify their personal, emergency, and next-of-kin contact information and let staff know that they have arrived for their appointment.

## Undesired Outcomes
VA facilities that use Oracle Health EHR software have no electronic way for Veterans to let staff know that they have arrived.

## Measuring Success

### Key Performance Indicators (KPIs)
Favorable feedback from Veterans who use eCheck-in at OH facilities

## Launch Planning
- Pilot - mid April 2024
- Release - TBD
   
## MVP

### Included in the MVP
- Veteran can text "check in" to receive an eCheck-in link for an OH appointment that is within the check-in window
    - **We will create a new Initiate Check-in endpoint for VeText to call to initiate check-in for OH appointments**
    - **We will return a check-in link for telehealth or telephone appointments** 
- Veteran will be asked to verify their personal, emergency, and next-of-kin contact information while checking in for an OH appointment
    - **We will retrieve contact information from the VA Profile Contact and Profile services via MAP instead of from Vista**
    - **We will update timestamps for contact information database records (personal, emergency, NOK) in VA Profile Contact and Profile services via MAP instead of in  Vista**
- Veteran will have the opportunity to submit a travel reimbursement while checking in for an OH appointment
- Veteran can complete check in
    - **We will send a status update to OH to let staff know the Veteran has arrived for their OH appointment**

### Not Included in the MVP
- Veteran wll NOT receive a reminder with an eCheck-in link 45 minutes before their OH appointment
- We will not check to see if the Veteran's insurance needs to be reviewed before sending them a check-in link in response to them texting "check in" (STILL AN OPEN QUESTION ON THIS)
- We will not send a status update when the Veteran has started the check-in workflow
     
## Questions 
- Does IVC want VeText to check for insurance update?
- How are we sending the arrived status to OH? (via MAP services?, VeText?)

## Workflows

### Veteran Workflow
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/70ef3cf1-5709-4dfa-9a70-ab90d3812904)

### MSA Workflow
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/1b973b57-1689-4c6c-a7da-3a6f01f157c3)
