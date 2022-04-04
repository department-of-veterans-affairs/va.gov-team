# Healthcare Experience - Appointment Check-in 

## Overview
This product reimagines the process by which Veterans check-in for a medical appointment by allowing them to perform check-in from their mobile device. The product is intented to replace the physical kiosks currently used for check-in at VA facilities. Development will involve coordinating with other product teams (VeText, VAOS, MyVA, mobile app) in order to consolidate the data from disparate systems necessary to complete check-in.

## Problem Statement
Currently, VA medical facilities each have a kiosk that is used by Veterans to check-in for medical appointments upon arrival at the facility. These Kiosks are being sun-set in March 2022. The purpose of this product is to: 
 1. Replace the check-in functionaility offerred by the kiosks
 2. Improve the check-in experience for the Veteran (ease of use and time spent checking in)
 3. Create infrastructure for a mobile check-in experience that consolidates data from disparate systems 
 
## Desired & Undesired Outcomes

### User Outcomes
#### Deisred
 - Veterans can easily and quickly check in for their appointments without using a Kiosk
 - Veterans can easily and quickly perform authentication to check in for their appointments
 - Veterans routinely choose the mobile check-in over face-to-face check-in experiences
 - Wait times between arrival and completion of check-in are improved
 
#### Undesired 
 - Veterans must perform face-to-face check-ins
 - Veterans have an experience that is inferior or less intuitive than the current physical kiosks 
 - Veterans choose face-to-face interactions over the modbile check-in
 - Wait times between arrival and completion of check-in are increased
 
### Business Outcomes
#### Desired
 - Physical Kiosks can be eliminated
 - Mobile check-in frees staff to perform patient-care duties
 - Infrasturcture for unified digital healthcare is created

#### Undesired 
- The only alternative to using kiosks is face-to-face check-in
- Increased face-to-face interactions

## Measuring Success

### Key Performance Indicators (KPIs)
 - Percentage of Veterans who successully complete mobile check-in 
     - At least 70%
 - Percentage of Veterans who successully complete mobile pre-check-in 
    - At least 70%
 - Percentage of Veterans who chose mobile check-in over face-to-face check-in 
     - At least 70%
 - Check-in times (mobile vs. kiosk vs. face-to-face)
     - Decreased by 50%

## Solution Approach

### Key Decisions
- All data for the product will be available via a single API (vets-api)
- Work to aggregate data from disparate systems will be completed by the CHIP team
- VetText has existing functionality that will be leveraged - at this time the technical integration is the biggest unknown and risk. The risk will decrease as Vets API migration gets underway.
- Full authentication is necessary in order to allow Veterans to update their personal contact, emergency contact, and/or next-of-kin contact information.

### Initiatives

#### Check-in (MVP)
- Purpose: Allow Veterans to check in to their appointment on the day of their appointment so that staff members are notified of their arrival
- Functionality:
     - A Veteran will receive a text and email linking them to an easy to use check-in website 
     - A Veteran can also chose to text "I am here" using their mobile device
     - The Veteran will select their appointment for which they want to check in
     - Once mobile check-in is complete, the VA facility will be notified that the Veteran has checked in 
- Release Date: Nov 2021

#### Pre-check-in 
- Purpose: Allow Veterans to confirm their Contact, Emergency Contact, and Next-of-kin information up to 7 days prior to their appointment so that staff know whether their information has changed and whether they will need to check them in face-to-face
- Functionality:
     - A Veteran will receive a text and email linking them to an easy to use pre-check-in website 
     - A Veteran can view their contact, emergency contact, and next-of-kin information and indicate if the information is correct or needs to be updated
     - A Veteran can view their list of appointments with links to perform check-in if it is the day of their appointment and they have no updates to their information
     - Once mobile pre-check-in is complete, the VA facility will be notified as to whether the Veteran will need to update their information at the time of their apointment
- Release Date: Jan 2022

#### Spanish Language Translations
- Purpose: Allow Veterans to see check-in and pre-check-in instructions translated to Spanish
- Functionality: Veteran will be provided with a mechanism on the pre-check-in and pre-check-in websites to indicate that they would like to see
Release Date: Targeted for May 2022 

#### Pre-check-in for Telemedicine Appointments
- Purpose: Allow Veterans to perform check-in and pre-check-in for telephone appointments
- Functionality: Veteran can perform pre-check-in and check-in for phone appointments
- Release Date: TBD
 
## Potential Future Initiatives
- Allow Veterans to edit their Contact, Emergency Contact, and Next-of-kin information
- Allow veterans to completed forms/paperwork needed for their appointment
- Link Veteran to a patient satisfaction survey
![116461630-7cc64100-a836-11eb-9c3a-20ef58b26977.jpg (1280×720)](https://user-images.githubusercontent.com/66287082/116461630-7cc64100-a836-11eb-9c3a-20ef58b26977.jpg)
 
## Go-to-market Strategy
- Pilot with several facilities in the St. Louis, MO area
- Conduct research interviews with Veterans and staff at Pilot sites (April 27-29, 2022)
- Make product available to first VIZN (~ May 2, 2022)
- Make product available to additional VIZNs (~ 1 per week)




   








