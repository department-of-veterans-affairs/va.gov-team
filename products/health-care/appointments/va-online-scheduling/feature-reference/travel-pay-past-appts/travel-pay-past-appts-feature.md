# Travel Reiumbursement Claims for Past Appointments

## Overview
This initiative allows Veterans to file a mileage-only beneficiary travel (BT) reimbursement claim for an eligible appointment from their past appointments list on VA.gov. An elibible appointment means any appointment:
- For which the Veteran travelled to a VA facility
- That cccurred before today and up to 30 days in the past    
- Hasn’t had a BT claim already filed for the same day and at the same facility (using the BTSSS Get Claim Status API).
 
## User stories

As a Veteran, I would like to easily submit online a BT claim for a past appointment so that I don't have to use a paper form or figure out how to use the BTSSS portal.

## Requirements

**Functional**

- Veteran navigates to past appointments on VA.gov
- Veteran chooses a past appointment and navigates to the appointment details for the selected appointment
- Veteran chooses to file a BT claim for the selected appointment
    - Appointment will only have the option to file if the following criteria are met
        - Appointment occured before today and within the last 30 days
        - Appointment is one of these in-person appointment types
            - In-person appointment
            - In-person vaccine appointment
            - Video at a VA facility appointment
        - No BT claim has been filed for the Veteran for the same day and same facility as the selected appointment
- System navigates the Veteran to the new online mileage-only BT claim form
    - NOTE: System passes the Veteran's patient ICN and appointment date & time to the new BTSSS form
- Veteran answers 'Yes' to the following questions
    - Filing mileage-only claim?
    - Used own vehicle to travel to the appointment?
    - Travelled from Veteran's on-file home address?
- Veteran chooses to submit the form
- System submits a BT claim for the selected appointment date & facility for the Veteran

### Technical notes
   

## Specifications

- [User Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722263210448/33062955940eb08d097dbd88a8dc98488ac2ffcc?sender=uc584f7fcc9a5090000259578)
- [Wireframes]() - TBD

## Alerts and conditional states
<!-- Any alerts that could display for this feature and what triggers them. -->


## Metrics
<!--Goals for this feature, and how we track them through analytics-->

- TBD

**Events tracked**
<!-- Descriptions of events tracked on this page to meet those goals -->

- TBD

## Alerts and other states
<!-- Any alerts that could display for this feature and what triggers them. -->


## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** https://staging.va.gov/health-care/schedule-view-va-appointments/appointments

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

