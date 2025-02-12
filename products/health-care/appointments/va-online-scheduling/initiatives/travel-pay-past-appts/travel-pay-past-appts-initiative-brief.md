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

## Metrics
- Number of Veterans who choose to file a travel reimbursement claim on VA.gov
    - Click event on the "File a travel reimbursement claim" link on VA.gov
    - ![image](https://github.com/user-attachments/assets/1c2d0bf4-921d-4a63-b960-5db38c708e9c)
- Number of Veterans who choose to view their claim status on VA.gov
    - Click event on the "Check you claim status" link
    - ![image](https://github.com/user-attachments/assets/5ce71c8b-31dd-4ce3-8fcd-86c7433668ba)
- Number of Veterans who choose to learn more about how to file a claim on VA.gov
    - Click event on the "Learn more about travel reimbursement"
    - ![image](https://github.com/user-attachments/assets/c3110fc1-c56c-4516-9f33-f610031518ca)
  
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

- **Value Risks** (will people use it): Limited to mileage-only travel reimbursement claims because that comprises approximately 80% of all travel claims.  
- **Usability Risks** (can people figure out how to use it): Usability risks are mostly limited to the complexity of the new travel form 
- **[Technical] Feasibility Risks** (can we build it with available tech/data): None
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact): Getting the word out to Veterans about the feature will help determine the success of the feature.

## Solution

### User Flow
[User Flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722263210448/33062955940eb08d097dbd88a8dc98488ac2ffcc?sender=uc584f7fcc9a5090000259578)

### Wireframes
[Wireframes](https://www.figma.com/design/RzugGEmu4drhCSHTyQ6hjl/Simple-mileage-only-travel-pay-claim-submission?node-id=2135-3&node-type=canvas&t=nTKuyiruyK0ah1Z6-0)

### Solution Steps
- Veteran logs into VA.gov
- Veteran navigates to past appointments on VA.gov
- Veteran selects a past appointment and navigates to the appointment details for the selected appointment
- System determines if the selected appointment is eligible for mileage-only travel reimbursement
    - An appointment is eligible for mileage-only travel reimbursement when
        - It occured within the last 30 days
        - It is one of these in-person appointment types:
            - In-person appointment
            - In-person vaccine appointment
            - Video at a VA facility appointment 
- If the selected appointment is eligible for a mileage-only travel claim, Veteran can choose one of these actions    
    - If no claim has yet been filed for the selected appointment date and facility, Veteran can choose to submit a claim
        - System navigates the Veteran to the new online mileage-only BT claim form 
        - Veteran answers 'Yes' to the following questions
            - Filing mileage-only claim?
            - Used own vehicle to travel to the appointment?
            - Travelled from Veteran's on-file home address?
        - Veteran submits the form
        - Veteran receives confirmation that their claim has been submitted
    - If a claim has already been filed for the selected appointment date and facility, Veteran can choose to view the status of the claim
        - System navigates the Veteran to the new BT Status Claim tool
        - Veteran views the status of the claim

## Launch Planning
- [Collaboration Cycle Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/89153)
- [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/travel-pay-past-appts/travel-pay-past-appts-release-plan.md)
- [Team Channel](https://dsva.slack.com/archives/C022AC2STBM) 
- [Team Members](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/README.md#team-members)
- Stakeholders: Kay Lawyer (OCC), Kristen McConnell, Stephen Barrs

## Launch Dates
- *Target Launch Date*
  - TBD
- *Actual Launch Date* 
  - TBD
 








