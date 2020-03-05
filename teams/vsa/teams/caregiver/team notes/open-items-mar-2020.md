# 1010-CG Status Update

- [Integration Test (May 2020)](#integration-test-may-2020)
- [Phase 1 (Estimated July 2020)](#phase-1-estimated-july-2020)
- [Phase 2 (Estimated September 2020)](#phase-2-estimated-september-2020)
- [Phase 3 (Estimated January 2021)](#phase-3-estimated-january-2021)
- [Phase 4 (Estimated March 2021)](#phase-4-estimated-march-2021)
- [Launch Timeline for MVP](#launch-timeline-for-mvp)
- [Open Questions](#open-questions)
- [Action Items](#action-items)
- [Notes:](#notes-)

## Phase 0 (May 2020)
| Requirement | Ticket # |
| --- | --- | 
| User will be able to: | 
| Start 1010-CG application online without logging in| 155|
| Fill in all fields from the paper 1010-CG form | n/a
| Ensure that all fields have been completed appropriately (data validation) | n/a
| Select a medical facility from a program-approved list | n/a
| Review entered data prior to submission | 176 |
| Recieve and print a confirmation message after submission | n/a
| Provide a signature for Veteran and Caregiver | 164 |
| Not able to edit form after submission| 165 |
| --- | --- | 
| Business will be able to: | 
| Verify veteran identity through MPI and ICN number | n/a
| Start processing application in CARMA immediately | n/a |
| Ensure a valid address was entered | n/a


## Phase 1 (Estimated July 2020)
| Requirement | Ticket # |
| --- | ---| 
| User will be able to: |
| Attach Power of Attorney documentation| 160|
| Print PDF of application (for records/submission) | 166 |
| --- | ---| 
| Business will be able to: |
| View prefilled PDF in CARMA | 169 |
| Ensure that duplicate applications have not been submitted | n/a|

## Phase 2 (Estimated September 2020) 
| Requirement | Ticket # |
| --- | ---| 
| Veteran will be able to: |
| Track application status (_definition needed_)  |
| --- | ---| 
| Business will be able to: |
| Rely on Facilities API for dynamic list of approved facilities| n/a |


## Phase 3 (Estimated January 2021)
| Requirement | Ticket # |
| --- | ---| 
| Veteran will be able to: |
| Fill in 1010-CG through a logged-in application portal | n/a |
| Save an incomplete form in progress | 163 |
| View and edit an in-progress application| 161 |
| View previously-submitted  application| 170 |
| Withdraw a previously submitted application | 175|
| Recieve text message/email notification after successful submission | 167 |
| Recieve application status updates though application portal  | 174|

## Phase 4 (Estimated March 2021)
| Requirement | Ticket # |
| --- | ---| 
| Caregiver will be able to: |
| Fill in 1010-CG through a logged-in application portal | n/a |
| Save an incomplete form in progress | 163 |
| View and edit an in-progress application| 162 |
| Log into application portal to recieve application updates | 173 |



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
- Weekly ToT Sync with Nitish, Caitlin, Natalia
- Service to notify veteran or caregiver of status change (or page to check)
- Prototype that includes MPI error message/redirect to print
- Next step: 
- Integration testing plan with David, Matt, CARMA team


## Notes:
| Create table in vets-api to link CARMA ID to form submission (+ date)| n/a
- `*` Options for Portal: 
  - Use application ID number to query for status update
  - Work with MPI to return status there
  - Add to Veteran profile/account

