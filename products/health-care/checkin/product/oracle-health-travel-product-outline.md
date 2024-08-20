# Product Outline - Day of Appointment Travel Reimbursement

## Overview
The Day of Appointment Travel Reimbursement product offers Veterans a way to file a mileage-only travel reimbursement claim on the day of an appointment they have at a VA facility that uses the OH EHR software.

## Problems Solved
- Veterans find it confusing to use the BTSSS portal
- Veterans find it time consuming to fill out a paper claim form and deliver it to the BTSSS travel office

## Desired User Outcomes
 - Veterans can easily and quickly file a travel reimbursement claim online without logging into an application
 - Veterans find the OH Travel Reimbursement product easy to use
 
## Desired Business Outcomes
 - Reduction in time for travel staff to hand enter data for paper forms
 - Reduction in time it takes for a Veteran to receive their reimbursement
  
## Undesired User Outcomes
 - Veterans find it difficult to use the OH Travel Reimbursement product

## Undesired Business Outcomes
 - Veterans take up travel staff time to ask questions about how to use the OH Travel Reimbursement product
 
## Measuring Success

### Key Performance Indicators (KPIs)
- Steady increase of the use of the product
- At least 70% completion rate

## Resources

### Key Decisions
- The BTSSS Claims Digest API will be used as it was the only API available at the time
  
### Product Guides
- [Product Guides](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/product-guides/README.md#day-of-check-in-or-patient-check-in)

## Launch Strategy
- Limited availability release to ??? in late 2024

## Incident Response Plan (Production Support)
- [Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/production-support.md)

## Features

#### [Mileage-only Travel Claim Submissions for VA Facilities that use Oracle Health EHR Software](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/Initiatives/check-in-for-oracle-health.md)
- Status: Fall 2024 planned pilot
- Purpose: Allow Veterans who have health appointments at VA facilities that use OH EHR software to submit a mileage-only travel reimbursement claim on the day of their appointment (one claim per facility)
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
        - Veteran is only allowed to submit one travel claim per day
        - If the Veteran has more than 1 appointment today, the Veteran selects for which appointment they would like to submit a claim
    - Veteran answers the question if they travelled in their own vehicle
        - Veteran see an error message if they answer "no"
    - Veteran answers the question if they travelled from their home address
        - Veteran see an error message if they answer "no"  
    - Veteran agrees to the VA's terms & submits their claim (or chooses to file later)
    - Veteran sees confirmation that their claim was submitted and information for how to check the status of their claim
    - Veteran receives an SMS that includes the claim submission status returned from BTSSS
- Applies to: In-person appointments only

## Workflow

![image](https://github.com/user-attachments/assets/89c0a7b9-95fd-42cb-87b9-83c43c225f4e)








