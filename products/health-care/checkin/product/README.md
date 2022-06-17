# Product Brief
# Patient Check-in - Appointment Check-in & Pre-Check-in

## Overview
This product reimagines the process by which Veterans check-in for a medical appointment by allowing them to perform pre-check-in and check-in from their mobile device. The product is intented to replace the physical kiosks currently used for check-in at VA facilities. Development will involve coordinating with other product teams (VeText, VAOS, MyVA, mobile app) in order to consolidate the data from disparate systems necessary to complete check-in.

### [Current Priorities](https://docs.google.com/document/d/1lo11HaGZzMvjcVYLFjmjeyiYTUuaim-z0bbtcrUtTYA/edit?usp=sharing)
### [Objectives & Key Results](https://app.mural.co/t/vfscie8528/m/vfscie8528/1654695959441/d90ed2bae0315fa65761373df8362460f2c82b28?sender=ud3aa760e30b39bcf436d4473)

## Desired & Undesired Outcomes

### User Outcomes
#### Deisred
 - Physical Kiosks can be eliminated
 - Mobile check-in frees staff to perform patient-care duties
 - Infrasturcture for unified digital healthcare is created
 - Veterans can easily and quickly check in for their appointments without using a Kiosk
 - Veterans can easily and quickly perform authentication to check in for their appointments
 - Veterans routinely choose the mobile check-in over face-to-face check-in experiences
 - Wait times between arrival and completion of check-in are improved
 
#### Undesired 
 - The only alternative to using kiosks is face-to-face check-in
 - Increased face-to-face interactions
 - Veterans must perform face-to-face check-ins
 - Veterans have an experience that is inferior or less intuitive than the current physical kiosks 
 - Veterans choose face-to-face interactions over the modbile check-in
 - Wait times between arrival and completion of check-in are increased
 
## Solution Approach

### Key Decisions
- All data for the product will be available via a single API (vets-api)
- Work to aggregate data from disparate systems will be completed by the CHIP team
- VetText has existing functionality that will be leveraged - at this time the technical integration is the biggest unknown and risk. The risk will decrease as Vets API migration gets underway.
- Full authentication is necessary in order to allow Veterans to update their personal contact, emergency contact, and/or next-of-kin contact information.

### MVP

#### Check-in
- Status: In Production as of 5/2/2022
- Purpose: Allow Veterans to check in to their appointment on the day of their appointment so that staff members are notified of their arrival
- Functionality:
     - A Veteran will receive a text and email linking them to an easy to use check-in website 
     - A Veteran can also chose to text "I am here" using their mobile device
     - The Veteran will select their appointment for which they want to check in
     - Once mobile check-in is complete, the VA facility will be notified that the Veteran has checked in 

#### Pre-check-in
- Status: In Production as of 5/2/2022
- Purpose: Allow Veterans to confirm their Contact, Emergency Contact, and Next-of-kin information up to 7 days prior to their appointment so that staff know whether their information has changed and whether they will need to check them in face-to-face
- Functionality:
     - A Veteran will receive a text and email linking them to an easy to use pre-check-in website 
     - A Veteran can view their contact, emergency contact, and next-of-kin information and indicate if the information is correct or needs to be updated
     - A Veteran can view their list of appointments with links to perform check-in if it is the day of their appointment and they have no updates to their information
     - Once mobile pre-check-in is complete, the VA facility will be notified as to whether the Veteran will need to update their information at the time of their appointment

### Spanish Language Support Enhancement
- Status: Complete; release date 6/28/2022
- Purpose: Allow Veterans to confirm their Contact, Emergency Contact, and Next-of-kin information up to 7 days prior to their appointment so that staff know whether their information has changed and whether they will need to check them in face-to-face
- Functionality:
     - A Veteran will receive a text and email linking them to an easy to use pre-check-in website 
     - A Veteran can view their contact, emergency contact, and next-of-kin information and indicate if the information is correct or needs to be updated
     - A Veteran can view their list of appointments with links to perform check-in if it is the day of their appointment and they have no updates to their information
     - Once mobile pre-check-in is complete, the VA facility will be notified as to whether the Veteran will need to update their information at the time of their appointment

### Beneficiary Travel Enhancement
- Status: Discovery
- Purpose: Allow Veterans to submit a travel reimbursement claim for their trip to a VA health appointment as an alternative to submitting the claim through the Beneficiary Travel Self Service System (BTSSS) or through a travel office.
- Functionality:
     - TBD

## Go-to-market Strategy
- Pilot with several facilities in the St. Louis, MO area
- Conduct research interviews with Veterans and staff at Pilot sites (April 27-29, 2022)
- Make product available to first VIZN (~ May 2, 2022)
- Make product available to additional VIZNs (~ 1 per week)
- Refer to this [spreadsheet](https://docs.google.com/spreadsheets/d/1QPT26waWswK5C-e-u3Z3UGu_T9BkeDRlSwFsUEVggTg/edit#gid=0) for go-to-market timeframes



   








