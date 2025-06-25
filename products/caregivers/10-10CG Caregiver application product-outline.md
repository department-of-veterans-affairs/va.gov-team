# Caregivers Product Outline
---
- [10-10CG - Zero Silent Failures checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20&%20Zero%20Silent%20Failures/10-10CG%20Zero%20Silent%20Failures%20checklist.md)
---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Value Propositions](#value-propositions)
- [KPIs-OKRs](#kpis-and-okrs)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement

As a caregiver or veteran, it would be easier to apply for the Program of Comprehensive Assistance for Family Caregivers (PCAFC) using an online form rather than the current paper submission process.

## Solution Goals

- To provide an easy and convenient online path for Veterans and their Caregivers to apply for Family Caregiver Program benefits, so that they can get quick access to the support and services they need.

### User Goals
- Caregivers and veterans want to be able to fill out and submit the 10-10CG online with little effort.

### Business Goals
- Feed application data directly to CARMA, through MuleSoft middleware
- Accomodate the influx of applications that's expected due to changing program eligibility
- Make the user journey feel safer and more accomodating

## Assumptions
- Caregivers and Veterans will prefer to fill out and submit the 1010-CG online rather than on paper.


## Requirements and Constraints
- The paper 10-10CG requires wet signatures from both the Veteran and the Caregiver
- Many caregivers are used to filling out forms on behalf of their veterans
- Caregiver/Veteran relationships may change
- Some Veterans want to give their Caregiver access to all medical and benefits information, while others would not
- All legal language from the paper form must be online
- Phone numbers are required, e-mail addresses are not
- Limit online applications to those with a verified VA profile
- Send data to CARMA along with a PDF of the paper form will the filled-in information
 

## Discovery Takeaways
- Users like the idea of an online form
- Users like the ability to save the form in progress
- Users like the ability to download a submission receipt
- Mutliple online sources offer conflicting information
- Caregivers like the idea of having an online portal to access support, resources, and benefit information

## Value Propositions

#### User Value
 - Users will be able to apply for the PCAFC online

#### Business Value
- Start processing applications faster
- Fewer rejections

## KPIs and OKRs

<details>
	<summary> Original KPIs and OKRs</summary>
	
### KPIs
- How many applications are submitted (harder to find)
- How many applications are submitted online
- How many online applications are successful vs. unsuccessful
- Why applications are unsuccesful (for failures, what triggered them)
- Average time to complete (online application)
- Qualitative metrics on the application process and overall experience
- Customer satisfaction (application process, caregiver program in general, etc.)
- Call Center reports

   
#### Objective 1: Make it easier to Veterans to apply to the PCAFC			
- Key result 1: Increase the number of successful online applications to the PCAFC (Target: 500)
- Key result 2 Decrease the number of requests for application assistance from the Contact Center (Target: 50 )
- Key result 3: Increase the % of PCAFC application submissions that are online rather than offline (Target: 10%)
			
#### Objective 2: Make it easier for CSCs to process PCAFC applications			
- Key result 1: Decrease application processing time (Target: 2 days less than current time)			
- Key result 2: Increase CSAT of CSCs with caregiver data			
			
#### Objective 3: Improve the experience of being a caregiver			
- Key result 1: Improve caregiver and veteran assessments of the PCAFC 	

</details>

---
### New OKRs from 2022 Workshop
#### Objective 1: Increase in number of VA-recognized Caregivers

- *Key result 1: Increase the number of successful online applications to the PCAFC*
   - As of 10/2022, we have seen a 7 month overall increasing trend of the number of applications started and subsequently submitted

|Product|	Apr|	May|	Jun|	Jul|	Aug|	Sep|Oct|Nov|Dec|Jan|Feb|Mar|
|-------|----|----|----|----|----|----|----|----|----|----|----|----|
|10-10 CG|65.83%|66.01%	|70.23%	|67.06%	|67.88%	|72.64%| 79.26%|71.97%|68.89%|67.23%|66.70%|66.63%|


- *Key result 2: Increase % of caregivers who obtain approval for benefits* -
- **Data caveat**: Data pulled from the Caregiver Record Management Application (CARMA) provides a snapshot in time at the point the report was ran each month. 
CARMA data is agile due to appeal outcomes, reinstatements, delayed data entry, and data corrections. Updated reports will result in updates to previously reported data points.

|2023 Metric| Jan|Feb|Mar|Apr|May|
|-------|----|----|----|----|----|
|Apps Approved| 1,800|1,800|1850|1635|1550|
|Online Apps Approved|1,200|1,140|1150|1010|945|
|Apps Denied|8,000|7,000|7670|6630|7320|
|Online Apps Denied|6,000|5,200|5600|4870|5325|

#### Objective 2: Decrease time from submission to decision

- *Key result 1: Increase number of application completions in a single session*
   - As of 10/2022, we have seen a 6-month increasing trend for the percentage of applications completed in a single session

|Product|	Apr|	May|	Jun|	Jul|	Aug|	Sep|Oct|Nov|Dec|Jan|Feb|Mar|
|-------|----|----|----|----|----|----|----|----|----|----|----|----|
|Average sessons to complete|	1.60|	1.56|	1.52|	1.44|	1.46|	1.63|1.41|1.44|1.41|1.41|1.42|TBD|
|% of 1 session|	67.20%|	67.85%|	68.50%|	74.08%|	73.51%|	63.48%|76.50%|74.19%|74.87%|74.37%|74.92%|TBD|
|% of 2 sessions|	19.67%|	21.13%|	20.65%|	18.02%|	18.57%|	23.35%|17.13%|18.76%|18.51%|18.90%|18.38%|TBD|
|% of 3 sessions|	13.13%| 11.02%| 10.85%| 7.90% | 7.91% | 13.17%|6.37%|7.04%|6.62%|6.73%|TBD|6.70%|
|Totals	|4,644	|4,423	|5,061	|4,620	|5,501	|6,767	|14,440|6,472|5,388|6,250|5,512|TBD|

- *Key result 2: Decrease application processing time and follow-ups by customer support* - **TBD from CG Team**
- *Key result 3: Decrease number of status update calls to customer support* - **TBD from CG Team**


--- 

## Launch Dates
- 10/1/2020: Caregiver Online form
- 3/2022: Mulesoft Integration ph 1
- 7/6/2022: Sign as a Representative - content update
- 7/21/2022: "Same Address" Checkbox (Caregiver can use checkbox to indicate they have the same address as the Veteran)
- 9/23/2022: Mulesoft Integration ph 2 (queueing and retries)
- 9/12/2023: Updated to memorable date component
- 3/6/2024: Completed removing eMIS references within form (eMIS deprecated)
- 6/26/2024: Root URL updated from `va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/` to `va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/`
- 7/8/2024: Form updates from latest OMB review
- 9/24/2024: Added `submitted_at` subattribute in schema
- TBD Facilities search
- TBD OAuth update

---

## Solution Narrative

### Status
- Focused on improving the Facility Selection page and connecting with Facilities/Lighthouse API
- Submit content for translation of entire form into Spanish
- Initial discovery work on clarifying Primary and Secondary roles and responsibilities

**Future goals**
- Allow Veteran/Caregiver to track application status
     - To support Caregiver program in its expansion and reduce number of phone calls asking status question
     - Options:
          - Use application ID number to query for status update
          - Work with MPI to return status there


## How to Access and Test
- https://staging.va.gov/caregivers/
- User #36 can be used for testing in all environments, so that you can receive a successful submission message
     - first name: WESLEY
     - last name: FORD
     - Use the [Staging users document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) or [Test User Dashboard (TUD)](https://tud.vfs.va.gov/) for additional SSN, DOB information


## Error Handling
- If the Veteran cannot be found in MPI, the submission will not go through and the user will be prompted to print and fill out the paper form
- The same error page will occur if the submission cannot flow through to CARMA for any other reason
- vets-API retries and MuleSoft queing has been implemented as of 9/23/2022.  This will greatly reduce submission errors due to system issues, allowing for the application submission to be retried until the system is available.  See [Ultimate Failure handling process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Vets-api%20retries%20for%20MuleSoft%20-%20Ultimate%20Failures%20process.md) for details in the event that the queuing and retries fail.

## API Calls and Dependent Systems
 - [MuleSoft integration](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/Mulesoft%20Integration/Queuing)
 - [Vets-API](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers/eng-docs)

## Resources and Documentation

- Discovery and Research: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers
- [Figma file](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=0-1&t=xgkK7brjz069I7kE-0) with wireflows and page designs (including proposals and experiments)

### Screenshots
#### Before: 
https://www.va.gov/health-care/forms/vha-10-10CG.pdf

#### After:
https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction

