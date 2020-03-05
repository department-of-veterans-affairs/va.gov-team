# 1010-CG Status Update


## Integration Test (May 2020)
| Requirement | Ticket # |
| --- | --- | 
| User will be able to: | 
| Start 1010-CG application online without logging in| 155|
| Fill in all fields from the paper 1010-CG form | n/a
| Ensure that all fields have been completed appropriate (data validation | n/a
| Select a medical facility from the list of CARMA approved options | n/a
| Review entered data prior to submission | 176 |
| Recieve and print a confirmation message after submission | n/a
| Provide a signature for Veteran and Caregiver | 164 |
| Not able to edit form after submission| 165 |
| Business will be able to: | 
| Confirm veteran identity through MPI |
| Start processing application in CARMA immediately | n/a |
| Ensure a valid address was entered | 


## MVP (Estimated July 2020)
| Requirement | Ticket # |
| --- | ---| 
| Ability for user to attach Power of Attorney documentation| 160|
| Backend (Attach prefilled PDF to CARMA application) | 169 |
| User ability to print application (for records/submission) | 166 |
| Systematic prevention of duplication | 

## Phase 2 (Estimated September 2020) 
| Requirement | Ticket # |
| --- | ---| 
| Allow Veteran to track application status *  |
| Work with Facilities API to use them as a source of truth for facilities| N/A |
- `*` Options: 
  - Use application ID number to query for status update
  - Work with MPI to return status there
  - Add to Veteran profile/account

## Phase 3 (Estimated January 2021)
| Requirement | Ticket # |
| --- | ---| 
| Build a logged-in application portal | n/a |
| Ability to save an incomplete form in progress | 163 |
| Veteran can view in-progress application| 161 |
| Veteran can view previously-submitted  application| 170 |
| Ability to withdraw a previously submitted application | 175|
| Text message/email notification after successful submission | 167 |
| Veteran can recieve application status updates in Portal  | 174|

## Phase 4 (Estimated March 2021)
| Requirement | Ticket # |
| --- | ---| 
| Caregiver can view in-progress application| 162 |
| Caregiver can log into portal to recieve application updates | 173 |

## Launch Timeline for MVP
- March 1 - April 15: Development work on 1010-CG 
- April 15 - May 15: Integration testing with CARMA
- May 15 - May 30: Get final approval to launch
- May 31: Launch to CSCs


## Open Questions
- How are we integrating plain language into the online 1010-CG experience while maintaining consistency with the paper form?
- What is considered a duplicate application? What do we need to do to prevent them?
- How are we going to roll the MVP out slowly?

## Action Items
- Define all requirements for MVP
- Create a launch plan
- Pick top 3 KPIs and identify baselines

| Return ICN number for veteran and caregiver (if applicable)| n/a|
| Get static list of approved Caregiver facilities from CARMA|n/a
| Create table in vets-api to link CARMA ID to form submission (+ date)| n/a

