# Initiative Brief - Travel Pay for Past Appointments

## Overview
This initiative allows Veterans to file a mileage-only beneficiary travel (BT) reimbursement claim for an eligible appointment from their past appointments list on VA.gov. An elibible appointment means any appointment:
- For which the Veteran travelled to a VA facility
- That cccurred before today and up to 30 days in the past    
- Hasn’t had a BT claim already filed for the same day and at the same facility (using the BTSSS Get Claim Status API).
 
## Outcome Summary
A Veteran can submit a mileage-only travel reimbursement claim for a past appointment via their past appointments list on VA.gov in addition to the existing options of submitting a paper form to the travel office or submitting online via the BTSSS portal.

## Problem
* What is the problem and who is affected? And, what evidence do we have of the problem?
  - Veterans find it difficult to use the BTSSS portal to file a travel reimbursement claim.
  - Veterans find it time consuming to submit a paper form for a travel reimbursement claim.
* Why do you think the problem is occurring? Other reasons why this might be occurring?
  - Filling out paper forms is time consuming
  - BTSSS portal is confusing 
* How does this initiative help further OCTO-DE's mission and goals?
  - Improve user satisfaction
  - Meet user expectations of available online transactions 
 * Veteran feedback during research
   ![image](https://github.com/user-attachments/assets/80e797a7-f14f-4410-9fdf-a01390a35e94)

## Desired Outcomes
- Veterans have an online method via VA.gov with which they can submit a mileage-only travel reimbursement claim for a past appointment.
- Veterans find the online process easy-to-use.

## Undesired Outcomes
- Veterans do not understand that they can submit **only** a mileage-only claim using this new method.
- Veterans do not undersatnd how to submit a mileage-only claim via VA.gov.
- Veterans prefer to submit a travel reimbursement claim via a paper form or the BTSSS portal.

## Key Decisions
- We are limiting submission of a travel reimbursement claim to mileage-only claims because that is the only type of claim the BTSSS API currently supports.

## Measuring Success
- Increase in the number of BT claims being submitted 
  
## Discovery

### Relevant studies
  - [2022-12 Patient Check In Travel Reimbursement Veteran Intercept at Wilkes-Barre](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Veteran%20Intercept%20at%20Wilkes-Barre)
    - Method: On-site UAT for mileage-only travel reimbursement pilot release
    - Path tested: Text check-in > Receive check-in link > Complete check-in + travel flow
  - [2022-12 Patient Check In Travel Reimbursement Staff Interviews at Wilkes-Barre](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2022-12%20Patient%20Check%20In%20Travel%20Reimbursement%20Staff%20Interviews%20at%20Wilkes-Barre)
    - Method: On-site staff interviews
  - [2023-04 Unified Check-In Experience Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2023-04%20Unified%20Check-In%20Experience%20Usability%20Study)
    - Method: Usability testing for unified check-in flow, including mileage-only travel reimbursement screens
    - Path tested: Text message reminder > Appointment list > Complete check-in + travel flow from task card or details page
  - [2023-11 Past Appointments Travel Reimbursement Generative Usability Study](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research/2023-11%20Past%20Appointments%20Travel%20Reimbursement%20Generative%20Usability%20Study)
    - Method: Questions around travel reimbursement, claim status exercise, and usability testing for filing a mileage-only travel reimbursement claim for a past appointment
    - Path tested: Email reminder/notification > Appointment list > File a mileage only claim from task card or details page

### Assumptions/Risks

- **Value Risks** (will people use it): Limited to mileage-only travel reimbursement claims because that comprises approximately 80% of all travel claims and is the only claim type supported by the BTSSS API.  
- **Usability Risks** (can people figure out how to use it): Usability risks are mostly limited to the complexity of the new travel form 
- **[Technical] Feasibility Risks** (can we build it with available tech/data): None
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact): Getting the word out to Veterans about the feature will help determine the success of the feature.

## Solution

### User Flow
[User Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722263210448/33062955940eb08d097dbd88a8dc98488ac2ffcc?sender=uc584f7fcc9a5090000259578)

### Solution Steps
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

### Wireframes
TBD

## Launch Planning
- [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89153)
- [Release Plan]() - TBD
- [Team Channel](https://dsva.slack.com/archives/C022AC2STBM) 
- [Team Members](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/README.md#team-members)
- Stakeholders: Kay Lawyer (OCC), Kristen McConnell, Stephen Barrs

## Launch Dates
- *Target Launch Date*
  - TBD
- *Actual Launch Date* 
  - TBD
 








