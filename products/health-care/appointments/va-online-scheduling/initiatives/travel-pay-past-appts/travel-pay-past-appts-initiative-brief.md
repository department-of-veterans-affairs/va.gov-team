# Initiative Brief - Travel Pay for Past Appointments

## Overview
This initiative allows Veterans to file a mileage-only beneficiary travel (BT) reimbursement claim for an eligible appointment from their past appointments list on VA.gov. 
- An elibible appointment means any in-person appointment that was “completed” yesterday or up to the previous 30 days and hasn’t had a BT claim already filed for this day and at this facility (using the BTSSS Get Claim Status API).
- “Completed” is in quotations because a BT claim can be submitted to BTSSS even if it’s not in a CHECKED-OUT status in VistA. (BTSSS rules engine picks up the process from this point.)
 
## Outcome Summary
A Veteran can submit a mileage-only travel reimbursement claim for a past appointment via the Appointments VA.gov application in addition to existing options of submitting a paper form to the travel office or submitting via the BTSSS portal.

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
- Veterans have an online application with which they can submit a mileage-only travel reimbursement claim for a past appointment.
- Veterans find the online process to submit a mileage-only travel reimbursement claim for a past appointment easy-to-use.

## Undesired Outcomes
- Veterans do not understand that they can only submit a mileage-only travel reimbursement claim via the VA.gov Appointments application.
- Veterans do not undersatnd how to submit a mileage-only travel reimbursement claim via the VA.gov Appointments application.
- Veterans prefer to submit a travel reimbursement claim via a paper form or the BTSSS portal.

## Key Decisions
- We are limiting submission of a travel reimbursement claim to mileage-only claims because that is the only type of claim the BTSSS API currently supports.

## Measuring Success
- Success will be measured by the % of veterans using VA.gov's Appointments application to submit a travel reimbursement claim versus paper forms or the BTSSS portal.
  - Number of users who click the link that opens the travel claim form
  - Number of users who submit the travel claim form
  
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

- **Value Risks** (will people use it): 
  - Limited to mileage-only travel reimbursement claims because that comprises approximately 80% of all travel claims and is the only claim type supported by the BTSSS API.  
- **Usability Risks** (can people figure out how to use it):
  - Usability risks are mostly limited to the complexity of the BTSSS form that the Appointments application will link to
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - None
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Getting the word out to Veterans about the feature will help determine the success of the feature.

## Solution

### Solution Summary
A link to a new BTSSS online mileage-only travel reimbursement claim form will be provded to Veterans for each of their past appointments on VA.gov that meet the following criteria:
  - Appointment is one of the following appointment types
      - In-person appointment
      - In-person vaccine appointment
      - Video at a VA facility appointment
 - Appointment is not more than 30 days old
 - Veteran has not already filed a claim for the appointment's date

### Solution Steps
Veterans will follow these steps to complete the new BTSSS online mileage-only travel reimbursement claim form: 
- Navigate and login to VA.gov
- Navigate to past appointments
- Choose a past appointment and click the link file for travel reimbursement 
  - System navigates the Veteran to the new BTSSS online mileage-only travel reimbursement claim form
  - System passes the Veteran's patient ICN and appointment date & time to the new BTSSS form
- Fill out and submit the form
- Navigate to the BTSSS portal to see the status and progress of the claim

### Wireframes
TBD

## Launch Planning
- [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89153)
- [Release Plan]()
- [Team Channel](https://dsva.slack.com/archives/C022AC2STBM) 
- [Team Members](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/README.md#team-members)
- Stakeholders: Kay Lawyer (OCC), Kristen McConnell, Stephen Barrs

## Launch Dates
- *Target Launch Date*
  - TBD
- *Actual Launch Date* 
  - TBD
 








