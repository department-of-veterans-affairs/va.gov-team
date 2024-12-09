# Feature Reference - Travel Reiumbursement Claims for Past Appointments

## Overview
This initiative allows Veterans to file a mileage-only beneficiary travel (BT) reimbursement claim for an eligible appointment from their past appointments list on VA.gov. An elibible appointment means any appointment:
- For which the Veteran travelled to a VA facility
- That cccurred before today and up to 30 days in the past    
- Hasn’t had a BT claim already filed for the same day and at the same facility (using the BTSSS Get Claim Status API).
 
## User stories

As a Veteran, I would like to easily submit online a BT claim for a past appointment so that I don't have to use a paper form or figure out how to use the BTSSS portal.

## Requirements

**Functional**
- Veteran logs into VA.gov
- Veteran navigates to past appointments on VA.gov
- Veteran selects a past appointment and navigates to the appointment details for the selected appointment
- System determines if the selected appointment is eligible for mileage-only travel reimbursement
    - An appointment is eligible for mileage-only travel reimbursement when
        - It occured within the last 30 days
        - It is one of these in-person appointment types:
            - In-person appointment
            - In-person vaccine appointment
            - Video at a VA facility appointment- 
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
    - If the Veteran missed the deadline to file a claim, Veteran can choose to navigate to a resource page that gives instructions for filing travel reimbursement claims

### Technical notes
   
## Specifications

- [Userflow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1722263210448/33062955940eb08d097dbd88a8dc98488ac2ffcc)
- [Wireframes](https://www.figma.com/design/7Ib7RxiIC4QB53FDBO2a8c/Unified-check-in-%7C-PCI?node-id=0-17259&node-type=canvas&t=zefUppEidHHWSUEE-0)

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

## Technical design
<!-- Endpoints and sample responses -->

**Staging URL:** https://staging.va.gov/health-care/schedule-view-va-appointments/appointments

**Staging base URL:** https://staging-api.va.gov/

**Prod base URL:** https://api.va.gov/

