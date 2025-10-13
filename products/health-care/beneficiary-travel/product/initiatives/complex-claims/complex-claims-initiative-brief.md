# Complex Claims (Web & Mobile) Initiative Brief  (DRAFT)
(Updated as of 10/13/2025)

## Overview
Contrinuing the transition of functionality from the BTSSS - Veteral Portal the functionality to be released will enable Veterans to submit travel claims that include expenses beyond just mileage (e.g. tolls, parking, lodging, airfare and food). Additionally Veterans will be able to upload authorization documentation.

## Problem
* Up to 30% of Veterans filing for claims have additional expenses, a non-standard route for which to file for appointments, or attended a community care appointment for which they need reimbursement and can only file through the BTSSS portal.

---

## Outcome Summary
* Enable Veterans to file more complex claims on VA.gov outside of simple, mileage-only claims.
* Complex claims will come in three iterations:
	* v1: A flow that enables users to attach non-mileage expenses including the following: 
		* Tolls
		* Flights
		* Lodging
		* Other non-mileage items
	* v2: A flow that enables users to approach mileage differently
		* Challenge the mileage on a claim
		* File a claim where the origin address was different from the starting address
	* v3: A flow that enables users to file for community care appointments
		* Find community care appointments in the existing system
		* Create a community care appointment if it is not in VistA
		* Attach evidence of attendance to community care appointments

	* Users will be able to file for the following types of appointments
		* Appointments which require attached expenses and receipts: tolls, lodging, flights, etc.
		* Appointments for which mileage is different, or the origin was not the user's home in profile
		* Appointments that were located at a community care location
	* All users are filing for care on VA.gov
	* While appointments may require manual review, the filing process drives a decrease in call center inquiries
 

XXXX TO BE INCORPORATED THEN DELETED XXXX
## Undesired User Outcomes
* Users have to go to BTSSS to file any of these claims
* Higher rate of calls regarding VA.gov claim filing.
* Decrease in approved claims
* Increase in processing times
* Increase in time to file (transaction completion time)
* Decrease in satisfaction of task completion

## Measuring Success
### Key Performance Indicators (KPIs)
| Product KPI | Baseline | Target | Data source |
| ---------------------------------------------------------------------------------- | -------- | ------ | ----------- |
| % / # of claims submitted in VA.gov matching at least 'in process' status in BTSSS | \--      | 100%   | PowerBI     |
| Claims created by API = claims processed by BTSSS                                  |          | 100%   | Datadog     |
| Qualitative feedback                                                               | \--      | \--    | Medallia    |
| Travel Pay API errors                                                              | \--      | 0%     | Datadog     |
| Technical error rate in claim submission on VA.gov                                 | 0        | 0      | Datadog     |
| Processing time in claims from VA.gov                                              | \--      | 0%     | PowerBI     |
| Claim volume increase from VA.gov                                                  | \--      | 70%    | PowerBI     |
| vets API errors                                                                    | \--      | 0      | Datadog     |

---

## Discovery
### Assumptions/Risks
- **Value & Usability Risks**
	- This is considered high value, but if Veterans already have low trust with the product from previous experiences, there may be an issue.
 	- Payouts from claims tend to be smaller in scale than payouts from other VA benefits, so not all who are eligible may prioritize it.
  	- Veterans may not have submitted travel pay claims on VA.gov before. They may encounter issues finding the appointments list if they want to submit.
  	- Veterans may not have all the information they need in their profiles (i.e. home address), which is a risk for them being able to file.
  	- We have not yet designed for being able to save a claim if Veterans need more time to find materials to substantiate their claim.
  
- **[Technical] Feasibility Risks**:
    - Upstream/Downstream API/Data availability and reliability. Because we have not worked with the Travel Pay API in these regard before, we are not sure of its reliability until testing in production. This includes sending attachments that have to be processed by travel clerks.
    - Manual review for claims: because the rules engine is complex in nature and we do not know how all claims are processed, some claims may be automatically rejected for reasons we do not understand.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
      - The single largest risk is coordination with VTP. Because VTP remains an influential owner of the existing BTSSS portal, we will need to continue working them on design, testing, rollout, and MS dynamics licensing questions.

### Screenshots			[Figma Files]()

## Launch Planning
### Collaboration Cycle Kickoff Tickets

- [V1 Ticket](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1?filterQuery=travel&pane=issue&itemId=106942600&issue=department-of-veterans-affairs%7Cva.gov-team%7C107829)
- [V2 Ticket]()
- [V3 Ticket]()

### Timeline 
- Timeline pending

#### Initiative Launch Dates
- V1
	- *Target Launch Date*	- November 2025
	- *Actual Launch Date* 

- V2
	- *Target Launch Date*	
	- *Actual Launch Date* 

- V3
	- *Target Launch Date*	
	- *Actual Launch Date* 

#### Go-to-market
- Communications will be handled through VTP's change management office.**

### [Communications & Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/README.md#team-calendar-and-communication-groups)
