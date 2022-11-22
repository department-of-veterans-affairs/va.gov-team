# Product Outline - Patient Check-in: Pre-Check-in & eCheck-in 

## Overview
The patient check-in (PCI) product is reimagining the ecosystem that allows a Veteran to check in for a medical appointment. The Modernized Check-In team created the portion of the ecosystem that enables a Veteran to utilize their smartphone to “check in” through VA.gov. 

![image](https://user-images.githubusercontent.com/86678742/199791829-6b0dfd35-9a7f-4a86-86c2-20e93529843e.png)

## Problem Statement
Pre-Check-in allows Veterans to use their mobile device to determine if their contact information needs updating prior to their VA health appointment. In the event their contact information is out-of-date, the Veteran can be instructed to check-in with a staff member once they arrive for their appointment.

eCheck-in allows Veterans, who have arrived for their appointment and whose contact information is up-to-date, to check-in for their appointment using their mobile device. eCheck-in is available for a Veteran's appointment during the check-in window, which comprises the time up to 45 minutes before & 15 minutes after the appointment. The eCheck-in application is intented to replace the check-in functionality on the kiosks currently used at VA facilities. 

## Desired User Outcomes
 - Veterans can easily and quickly check in for their appointments using their mobile device
 - Veterans can easily and quickly perform authentication to check in for their appointments
 - Veterans routinely choose the mobile check-in over face-to-face check-in experiences
 - Wait times between arrival and completion of check-in are improved
 
## Desired Business Outcomes
 - Staff are freed to perform patient-care 
 - Infrasturcture for unified digital healthcare is created
 - Wait times between arrival and completion of check-in are improved
 
## Undesired User Outcomes
 - The only alternative to using kiosks is face-to-face check-in
 - Increased face-to-face interactions
 - Veterans must perform face-to-face check-ins
 - Veterans have an experience that is inferior or less intuitive than the current physical kiosks 
 - Veterans choose face-to-face interactions over the modbile check-in
 - Wait times between arrival and completion of check-in are increased

## Undesired Business Outcomes
 - The only alternative to using kiosks is face-to-face check-in
 - Increased face-to-face interactions
 - Veterans must perform face-to-face check-ins
 - Wait times between arrival and completion of check-in are increased
 
## Measuring Success

### Key Performance Indicators (KPIs)
- Steady increase of eCheck-in and Pre-Check-in usage as VISN's come online
- At least 70% completion rate for eCheck-in and Pre-Check-in

### Objectives & Key Results
[Objectives & Key Results](https://app.mural.co/t/vfscie8528/m/vfscie8528/1654695959441/d90ed2bae0315fa65761373df8362460f2c82b28?sender=ud3aa760e30b39bcf436d4473)

## Resources

### Key Decisions
- All data for the product will be available via a single API (vets-api)
- Work to aggregate data from disparate systems will be completed by the PCI/API team
- VetText has existing functionality that will be leveraged - at this time the technical integration is the biggest unknown and risk. The risk will decrease as Vets API migration gets underway.

### Product Guides
#### [eCheck-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/README.md#day-of-check-in-or-patient-check-in)

#### [Pre-Check-In](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/README.md#pre-check-in)

### Production Wireframes in VA Sketch Cloud
- [In person Pre-Check-in](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/prototype/a/BE60720E-7D9D-46BD-AF86-6332C23E7D8B) in Sketch Cloud
- [In person Check-in](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e/prototype/a/9F9F9F9F-E205-4F5E-9177-DD4AD750828C) in Sketch Cloud
- [Telephone Pre-Check-in](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/prototype/a/407FA16E-4716-43C8-8898-B25F96F61001) in Sketch Cloud

## Launch Strategy
- Limited availability release to St. Louis in early 2022
- General availability rollout to 1 VISN per week to support training needs

## Initiatives

#### [Check-in MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/iniative-phase-2.md)
- Status: Released on 5/2/2022
- Purpose: Allow Veterans to check in to their appointment on the day of their appointment so that staff members are notified of their arrival
- Functionality:
     - Veteran, during the check-in window and once arriving for their appointment, uses their mobile device to text "check in" to a VA code (can also scan a QR code to pre-populate the text)
     - Veteran receives a customized link to the eCheck-in application
     - Veteran loads the eCheck-in application and verifies their identity by entering their Last Name and DOB
     - Veteran selects the appointment for which they want to check in and checks-in
     - Once check-in is complete, the VA facility will be notified that the Veteran has checked in 

#### [Pre-check-in MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/iniative-phase-2.md)
- Status: Released on 5/2/2022
- Purpose: Allow Veterans to confirm their Contact, Emergency Contact, and Next-of-kin information up to 7 days prior to their appointment so that staff know whether their information has changed and whether they will need to check them in face-to-face
- Functionality:
     - Veteran receives a request via text to confirm a VA health appointment
     - Veteran confirms their appointment and receives a link to complete Pre-Check-in
     - Veteran loads the Pre-Check-in application and verifies their identity by entering their Last Name and DOB
     - Veteran reviewes their contact, emergency contact, and next-of-kin information and indicates if the information is correct or needs to be updated
     - Once pre-check-in is complete, the VA facility will be notified as to whether the Veteran will need to update their information at the time of their appointment
     - If the Veteran needs to update their information, they are directed to check-in with a staff member at the time of their appointment

#### Spanish Language Support 
- Status: Released on 6/28/2022
- Purpose: Allow Veterans to choose to see Pre-Check-in and Check-in content in Spanish

#### Tagalog Language Support 
- Status: Released on 11/2/2022
- Purpose: Allow Veterans to choose to see Pre-Check-in and Check-in content in Tagalog

#### [Travel Reimbursement - MVP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/initiative-echeckin-with-travel-claim-submission.md)
- Status: In development
- Purpose: Allow Veterans to submit a mileage-only travel reimbursement claim for their trip to a VA health appointment as an alternative to submitting the claim through the kiosk, Beneficiary Travel Self Service System (BTSSS), or travel office.
- Functionality:
     - A Veteran, who has no contact updates and can complete check-in, can choose to file a travel reimbursement claim when they check-in for an appointment





   








