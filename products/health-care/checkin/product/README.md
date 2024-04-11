# Product Outline - Patient Check-in: Pre-Check-in & eCheck-in 

## Overview
The patient check-in (PCI) product is reimagining the ecosystem that allows a Veteran to check in for a medical appointment. The Modernized Check-in Team created the portion of the ecosystem that enables a Veteran to utilize their smartphone to check in through VA.gov. 

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/e33b12ff-46fd-4ce2-becd-ccf1cf413112)

<details>
<summary>Original MVP User Flow</summary>
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/93271257/47b7e504-2df9-4307-849e-c7bc84f6912e)
</details>

## Problem Statement
Pre-Check-in allows Veterans to use their mobile device to determine if their contact information needs updating prior to their VA health appointment. In the event their contact information is out-of-date, the Veteran is instructed to check-in with a staff member once they arrive for their appointment.

eCheck-in allows Veterans, who have arrived for their appointment and whose contact information is up-to-date, to check-in for their appointment using their mobile device. eCheck-in is available for a Veteran's appointment during the check-in window, which starts 45 minutes before and ends 15 minutes after the scheduled appointment time. The eCheck-in application is intended to replace the check-in functionality on the kiosks currently used at VA facilities. 

## Desired User Outcomes
 - Veterans can easily and quickly check in for their appointments using their mobile device
 - Veterans can easily and quickly perform authentication to check in for their appointments
 - Veterans routinely choose the mobile check-in over face-to-face check-in experiences
 - Wait times between arrival and completion of check-in decrease
 
## Desired Business Outcomes
 - Staff are freed to perform patient care 
 - Infrastructure for unified digital healthcare is created
 - Wait times between arrival and completion of check-in decrease
 
## Undesired User Outcomes
 - The only alternative to using kiosks is face-to-face check-in
 - The amount of face-to-face interactions increases
 - Veterans must perform face-to-face check-ins
 - Veterans have an experience that is inferior or less intuitive than the current physical kiosks 
 - Veterans choose face-to-face interactions over the modbile check-in
 - Wait times between arrival and completion of check-in increase

## Undesired Business Outcomes
 - The only alternative to using kiosks is face-to-face check-in
 - The amount of face-to-face interactions increases
 - Veterans must perform face-to-face check-ins
 - Wait times between arrival and completion of check-in increase
 
## Measuring Success

### Key Performance Indicators (KPIs)
- Steady increase of eCheck-in and Pre-Check-in usage as VISN's come online
- At least 70% completion rate for eCheck-in and Pre-Check-in

## Resources

### Key Decisions
- All data for the product will be available via a single API (vets-api)
- Work to aggregate data from disparate systems will be completed by the PCI/API team
- VetText has existing functionality that will be leveraged - at this time the technical integration is the biggest unknown and risk. The risk will decrease as Vets API migration gets underway.

### Product Guides
#### [eCheck-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/README.md#day-of-check-in-or-patient-check-in)

#### [Pre-Check-In](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/README.md#pre-check-in)

[Update product guides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/update-product-guides.md)

## Launch Strategy
- Limited availability release to St. Louis in early 2022
- General availability rollout to 1 VISN per week to support training needs

## Incident Response Plan (Production Support)

- [Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/production-support.md)

## Features

#### [Check-in MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/iniative-phase-2.md)
- Status: Released on 5/2/2022
- Purpose: Allow Veterans to check in to their appointment on the day of their appointment so that staff members are notified of their arrival
- Functionality:
     - Veteran, during the check-in window and once arriving for their appointment, uses their mobile device to text "check in" to a VA code
     - Veteran receives a customized link to the eCheck-in application
     - Veteran loads the eCheck-in application and verifies their identity by entering their Last Name and date of birth
     - Veteran selects the appointment for which they want to check in and checks-in
     - Once check-in is complete, the VA facility will be notified that the Veteran has checked in 
- Applies to: In-person appointments only

#### [Pre-check-in MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/iniative-phase-2.md)
- Status: Released on 5/2/2022
- Purpose: Allow Veterans to confirm their Contact, Emergency Contact, and Next-of-kin information up to 7 days prior to their appointment so that staff know whether their information has changed and whether they will need to check them in face-to-face
- Functionality:
     - Veteran receives a request via text to confirm a VA health appointment
     - Veteran confirms their appointment and receives a link to complete Pre-Check-in
     - Veteran loads the Pre-Check-in application and verifies their identity by entering their Last Name and date of birth
     - Veteran reviewes their contact, emergency contact, and next-of-kin information and indicates if the information is correct or needs to be updated
     - Once pre-check-in is complete, the VA facility will be notified as to whether the Veteran will need to update their information at the time of their appointment
     - If the Veteran needs to update their information, they are directed to check-in with a staff member at the time of their appointment
- Applies to: In-person and phone appointments only

#### Support for Phone Appointments
 - Status: Released
 - Purpose: Added Pre-Check-in support for phone appointments
 - Additional Info: Based on the conversation in this [slack thread](https://dsva.slack.com/archives/C022AC2STBM/p1682438155187729?thread_ts=1682432660.843999&cid=C022AC2STBM), the following decisions have been made:
      - We will not support video/telehealth appointments in Pre-Check-in and eCheck-in because 
          - Video appointments use telehealth software that includes notifications and instructions for the appointments, therefore, Pre-Check-in & eCheck-in are not needed and would conflict with these telehealth applications 
          - Video appointments typically don't involve MSA staff interacting with the Veteran prior to the appointment with the doctor 
      - We will not support Community Care appointments in Pre-Check-in and eCheck-in because they are maintained outside of the VA's system and would be problematic to integrate with  

#### Spanish Language Support 
- Status: Released on 7/7/2022
- Purpose: Allow Veterans to choose to see Pre-Check-in and Check-in content in Spanish

#### Tagalog Language Support 
- Status: Released on 11/2/2022
- Purpose: Allow Veterans to choose to see Pre-Check-in and Check-in content in Tagalog

#### [Travel Reimbursement - MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/initiative-echeckin-with-travel-claim-submission.md)
- Status: Piloted in July 2023; Released to all VISNs on 12/5/2023
- Purpose: Allow Veterans to submit a mileage-only travel reimbursement claim request for their trip to a VA health appointment as an alternative to submitting the claim through the kiosk, Beneficiary Travel Self Service System (BTSSS), or travel office
- Functionality:
     - A Veteran, who has no contact updates and can complete check-in, can choose to file a travel reimbursement claim request when they check-in for an appointment

#### Send Veterans via SMS eCheck-in Link 45-minutes Before Their Appointment
- Status: Released to all VISNs on 12/5/2023
- Purpose: Send an SMS to Veterans 45 minutes before their VA health appointment if the appointment is eligible for eCheck-in 

#### [Mileage-only Travel Claim Submissions for VA Facilities that use Oracle Health EHR Software](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/check-in-for-oracle-health.md)
- Status: Spring 2024 planned pilot
- Purpose: Allow Veterans who have health appointments at VA facilities that use Oracle Health EHR software to submit a mileage-only travel reimbursement claim on the day of their appointment (one claim per facility)
- Functionality:
    - Veteran texts "travel" on the day of their OH appointment
    - Veteran receives a link back if they have an OH appointment today 
        - Veteran will receive an error message if (1) they do not have any OH appointments for today, (2) we cannot find their phone number in the VA records, or (3) the feature is not available for their appointment's facility
    - Veteran clicks the link 
        - Veteran will receive a "link has expired" message if they click the link after the day of the OH appointment
        - Veteran sees a "you've already filed a claim" message if they click the link and they have already filed a claim for their OH appointment today (1 claim per facility per day is allowed)
    - Veteran verifies their identity  
    - Veteran sees information on
        - How to check their eligibility to file a claim
        - How to file a claim now
        - How to file a claim for other expenses later
        - How to set up direct deposit
    - Veteran chooses to file a milesage-only claim
        - If the Veteran has more than 1 appointment today at different facilities, the Veteran selects for which facility they would like to submit a claim
    - Veteran answers the question if they travelled in their own vehicle
        - Veteran see an error message if they answer "no"
    - Veteran answers the question if they travelled from their home address
        - Veteran see an error message if they answer "no"  
    - Veteran agrees to the VA's terms & submits their claim (or chooses to file later)
    - Veteran sees confirmation that their claim was submitted and information for how to check the status of their claim
    - Veteran receives an SMS that includes the claim submission status returned from BTSSS
- Applies to: In-person appointments only



   








