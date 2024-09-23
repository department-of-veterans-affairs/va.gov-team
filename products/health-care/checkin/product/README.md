# Product Outline - Patient Check-in: Pre-Check-in and eCheck-in

## Overview
The patient check-in (PCI) product is reimagining the ecosystem that allows a Veteran to check in for a medical appointment. The Modernized Check-in Team created the portion of the ecosystem that enables a Veteran to utilize their smartphone to check in through VA.gov. 

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/e33b12ff-46fd-4ce2-becd-ccf1cf413112)

## Problems Solved
Pre-Check-in allows Veterans to use their mobile device to determine if their contact information needs updating prior to their VA health appointment. In the event their contact information is out-of-date, the Veteran is instructed to check-in with a staff member once they arrive for their appointment.

eCheck-in allows Veterans, who have arrived for their appointment and whose contact information is up-to-date, to check-in for their appointment using their mobile device. eCheck-in is available for a Veteran's appointment during the check-in window, which starts 45 minutes before and ends 15 minutes after the scheduled appointment time. The eCheck-in application was intended to replace the check-in functionality on the kiosks devices used by facilities. 

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
- All data for the product would be available via a single API (vets-api)
- Work to aggregate data from disparate systems would be completed by the PCI/API team
- VetText had existing functionality that would be leveraged
  
### Product Guides
- [Product Guides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/README.md#day-of-check-in-or-patient-check-in)

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
 - Status: ~Released~ Recalled
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

#### Medication Review
- Status: Released to all VISNs in 09 2024
- Purpose: Remind Veterans to, at their VA health appointment, be ready to talk about any medication, supplement, vitamins, etc that they have been prescribed or are taking from any provider, VA clinic, or local store.

   








