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

<details>
<Summary>Key result 1: Increase the number of successful online applications to the PCAFC</Summary>
	

| Month    | Started | Submitted | % start to complete |
| -------- | ------- | --------- | ------------------- |
| Jan 2022 | 6248    | 4114      | 65.85%              |
| Feb 2022 | 5985    | 3899      | 65.15%              |
| Mar 2022 | 7301    | 4681      | 64.11%              |
| Apr 2022 | 7054    | 4228      | 59.94%              |
| May 2022 | 6701    | 3749      | 55.95%              |
| Jun 2022 | 7206    | 4326      | 60.03%              |
| Jul 2022 | 7028    | 4259      | 60.60%              |
| Aug 2022 | 8104    | 5087      | 62.77%              |
| Sep 2022 | 9316    | 5390      | 57.86%              |
| Oct 2022 | 18219   | 14311     | 78.55%              |
| Nov 2022 | 8993    | 5987      | 66.57%              |
| Dec 2022 | 7821    | 4895      | 62.59%              |
| Jan 2023 | 9297    | 5,967     | 64.18%              |
| Feb 2023 | 8,264   | 5,900     | 71.39%              |
| Mar 2023 | 10,071  | 5,958     | 59.16%              |
| Apr 2023 | 8,815   | 5,428     | 61.58%              |
| May 2023 | 10,239  | 6,054     | 59.13%              |
| Jun 2023 | 9,674   | 5,299     | 54.78%              |
| Jul 2023 | 9,974   | 5,515     | 55.29%              |
| Aug 2023 | 10,257  | 6,185     | 60.30%              |
| Sep 2023 | 6,995   | 5,302     | 75.80%              |
| Oct 2023 | 8,981   | 4,981     | 55.46%              |
| Nov 2023 | 8,487   | 4,664     | 54.95%              |
| Dec 2023 | 7,585   | 4,048     | 53.37%              |
| Jan 2024 | 9,504   | 6,296     | 66.25%              |
| Feb 2024 | 8,669   | 5,672     | 65.43%              |
| Mar 2024 | 8,767   | 5,796     | 66.11%              |
| Apr 2024 | 8,183   | 6,090     | 74.42%              |
| May 2024 | 10,468  | 6,657     | 63.59%              |
| Jun 2024 | 7,933   | 6,019     | 75.87%              |
| Jul 2024 | 10,043  | 6,851     | 68.22%              |
| Aug 2024 | 12,382  | 7,697     | 62.16%              |
| Sep 2024 | 10,741  | 6,788     | 63.20%              |
| Oct 2024 | 10,821  | 7,016     | 64.84%              |
| Nov 2024 | 11,055  | 6,363     | 57.56%              |
| Dec 2024 | 11,053  | 6,234     | 56.40%              |
| Jan 2025 | 13,896  | 7,780     | 55.99%              |
| Feb 2025 | 12,316  | 6,435     | 52.25%              |
| Mar 2025 | 13,004  | 6,859     | 52.75%              |
| Apr 2025 | 12,858  | 6,760     | 52.57%              |
| May 2025 | 13,548  | 7,250     | 53.51%              |
| Jun 2025 | 12,854  | 7,369     | 57.33%              |
| Jul 2025 | 14,031  | 8,707     | 62.06%              |
| Aug 2025 | 13,554  | 8,563     | 63.18%              |
| Sep 2025 | 13,906  | 8,754     | 62.95%              |
| Oct 2025 | 13,050  | 8,193     | 62.78%              |
| Nov 2025 | 11,432  | 6,860     | 60.01%              |
| Dec 2025 | TBD   | TBD     | TBD               |

</details>


<details>
	
<Summary>Key result 2: Increase % of caregivers who obtain approval for benefits*</Summary>

- **Data caveat**: Data pulled from the Caregiver Record Management Application (CARMA) provides a snapshot in time at the point the report was ran each month. 
     - CARMA data is agile due to appeal outcomes, reinstatements, delayed data entry, and data corrections. Updated reports will result in updates to previously reported data points.
     - This information was shared by the business partners.  In an effort to avoid confusion or inaccurate data reporting, the business partners wished to shop sharing this information monthly.

|2023 Metric| Jan|Feb|Mar|Apr|May|June|July|Aug|Sep|Oct|Nov|Dec|
|-------|----|----|----|----|----|----|----|----|----|----|----|----|
|Apps Approved| 1,800|1,800|1850|1635|1550|1890|1415|1661|1425|2610|1393|1412|
|Online Apps Approved|1,200|1,140|1150|1010|945|1210|No data|1047|900|999|867|841|
|Apps Denied|8,000|7,000|7670|6630|7320|8145|6371|7581|6900|6905|6228|6074|
|Online Apps Denied|6,000|5,200|5600|4870|5325|6055|no data|5578|5050|4909|4426|4315|

|2024 Metric| Jan|Feb|Mar|Apr|May|June|July|Aug|Sep|Oct|Nov|Dec|
|-------|----|----|----|----|----|----|----|----|----|----|----|----|
|Apps Approved|1452|1435|1444|1665|1568|1340|1536|1470|1384|1541|1200|1314|
|Online Apps Approved|898|910|953|1065|965|853|976|975|868|1190|997|1054|
|Apps Denied|6737|6620|661|7025|7037|6000|6840|6486|5915|6444|5242|5616|
|Online Apps Denied|4887|4815|4824|5051|5101|4429|5191|5248|5061|5666|4601|4949|

</details>

#### Objective 2: Decrease time from submission to decision

<details>
	<Summary>Key result 1: Increase number of application completions in a single session</Summary>

| 2022 Metrics         | Apr  | May  | Jun  | Jul  | Aug  | Sep  | Oct  | Nov  | Dec  |
| --------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 10-10CG Average | 1.60 | 1.56 | 1.52 | 1.44 | 1.46 | 1.63 | 1.41 | 1.44 | 1.41 |

| 2023 Metrics         | Jan  | Feb  | Mar  | Apr  | May  | Jun  | Jul  | Aug  | Sep  | Oct  | Nov  | Dec  |
| --------------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| 10-10CG Average | 1.41 | 1.40 | 1.40 | 1.40 | 1.45 | 1.44 | 1.43 | 1.38 | 1.39 | 1.42 | 1.39 | 1.40 |

| 2024 Metrics         | Jan  | Feb  | Mar  | Apr  | May | Jun | Jul | Aug | Sep | Oct  | Nov  | Dec  |
| --------------- | ---- | ---- | ---- | ---- | --- | --- | --- | --- | --- | ---- | ---- | ---- |
| 10-10CG Average | 1.42 | 1.40 | 1.37 | 1.38 |no data|no data|no data|no data|no data| 1.41 | 1.40 | 1.41 |

| 2025 Metrics            | Jan  | Feb  | Mar         | Apr         | May  | Jun  | Jul  | Aug  | Sep  | Oct  | Nov  | Dec   |
| ------------------ | ---- | ---- | ----------- | ----------- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 10-10CG Average    | 1.26 | 1.20 | no data | no data | 1.39 | 1.36 | 1.35 | 1.37 | 1.37 | 1.38 | 1.39 | TBD |

</details>

- *Key result 2: Decrease application processing time and follow-ups by customer support* - **TBD from CG Team**
- *Key result 3: Decrease number of status update calls to customer support* - **TBD from CG Team**


--- 

## Launch Dates
- 10/01/2020: Caregiver Online form
- 03/2022: Mulesoft Integration ph 1
- 07/06/2022: Sign as a Representative - content update
- 07/21/2022: "Same Address" Checkbox (Caregiver can use checkbox to indicate they have the same address as the Veteran)
- 09/23/2022: Mulesoft Integration ph 2 (queueing and retries)
- 09/12/2023: Updated to memorable date component
- 03/06/2024: Completed removing eMIS references within form (eMIS deprecated)
- 06/26/2024: Root URL updated from `va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/` to `va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/`
- 07/08/2024: Form updates from latest OMB review
- 09/24/2024: Added `submitted_at` subattribute in schema
- 02/14/2025: Facilities search
- 04/02/2025: OAuth update
- 07/15/2025: Update signature page to prefill Veteran's and Caregivers' names

---

## Solution Narrative

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
https://www.va.gov/family-and-caregiver-benefits/health-and-disability/comprehensive-assistance-for-family-caregivers/apply-form-10-10cg/introduction

