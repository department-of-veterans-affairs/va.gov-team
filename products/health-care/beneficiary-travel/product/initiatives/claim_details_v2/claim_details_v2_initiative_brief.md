# Claims Details V2 Initiative Brief
(Updated as of 10/13/2025)

## Overview
Following the initial release of the Claim Details screen it was determined that Veterans needed additional funtionality in order to fully be able to review and manage the Travel Pay claims they had submitted. Therefore, a 2nd wave of function were  outlined and added.

## Problem
Veterans often have denied travel pay claims, and research has shown that while they may know that they can appeal, they do not know _how_ they may be able to appeal. Research has also shown that this is a high priority issue for Veterans who use travel pay.

---

## Outcome Goals Summary
* Once Claims Details V2 (2025) is released Veterans will be able to
	* See addtional details about their specific claim like their reimbursement amounts and the status of their claim
	* Users will be able to see when a claim is denied
	* View the high level reason their claim was denied
	* View the actual decision letters from the VA clerk
	* understand their options and next steps around a denied claim
	* begin the appeal process for  rejected claims  (a link to another system)
	* download documents including decision letters and appeal instructions
 	* get easy access to support channels such as FAQs, chat support, or direct contact with teh Beneficiary Travel Office

* Following the release VTP Clerks and other support staff will see a 
	* Decrease in denial-related calls to the Call Center
	* Increase in appeals submissions for denied claims originating from VA.gov

* This work was initially built for the web experience and available in mobile as a SSO webview. It was implemented in the VAHB (mobile) experience natively later in 2025. (Mobile Initiative Epic [#112307](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112307))

#### Future Release
* We'll include the below functionality in a future release (Target 2026) 
	* Automated alerts & notifications to inform Veterans claim status and provide guidance on the next steps.
	* Implement aystem to track and analyze denial patterns. 


## Measuring Success
### Key Performance Indicators (KPIs)

| Product KPI | Baseline | Target | Data source      |
| --------------------------------------------------------------- | -------- | ------ | ---------------- |
| Document download success %                                     | \--      | 100%   | Google Analytics |
| Uptime                                                          |          | 100%   | Datadog          |
| Document download errors from API                               | \--      | 0%     | Datadog          |
| Findability: all appeals                                        | \--      | 100%   | Datadog          |
| Call center volume re: appeals                                  | \--      | \-30%  | Call Center      |

### How will we determine what VAHB travel pay entry points are used by Veterans? What entry points should remain or be removed?
- Each month for 3 months post release, calculate:
  - Total clicks to the travel pay claim status section via all of the following entry points:
    - Health landing page
    - Benefits > Claims landing page
    - Payments landing page
  - Total clicks to travel pay claim status section for each entry point
  - % of total clicks to travel pay claim status section each entry point makes up
- 3 months after release, review % averages for each entry point and make a decision on what entry points remain. If an entry point falls below 10% usage of total clicks, then remove that entry point.
---

## Discovery
### Risks/Assumptions
- **Value & Usability Risks**
	- Veterans may be used to calling to determine how to file an appeal, so following instructions on VA.gov may not be intuitive.
	- Veterans may encounter issues downloading the denial letter.
	- File formats: Not all Veterans may have the software / appliation needed to view the letter correctly.
  
- **[Technical] Feasibility Risks**:
	- API endpoint for document download remains untested in production
    - Web implementation will be ccompleted first. Native mobile implementation will be a fast follow.
  
- **Organizational Viability Risks/Constraints** :
	- The single largest risk is coordination with VTP. Because VTP remains an influential owner of the existing BTSSS portal, we will need to continue working them on design, testing, rollout, and MS dynamics licensing questions,
      
### Screenshots				[Figma Files]

## Launch Planning
#### Collaboration Cycle Kickoff Tikets 	
- 
	- [Web](https://github.com/orgs/department-of-veterans-affairs/projects/1525/views/3?pane=issue&itemId=103757282&issue=department-of-veterans-affairs%7Cva.gov-team%7C105484)
	- [Mobile](https://github.com/department-of-veterans-affairs/va.gov-team/issues/112407)

#### Initiative Launch Dates
- VA.gov (Web) Release
	* Target Launch Date*  - May 2025
 	* Actual Launch Date*	- Pending

- VAHB (Mobile) Release
	* Target Launch Date*  - September 2025
 	* Actual Launch Date*	- Pending

#### Go-to-market
- Communications will be handled through VTP's change management office.**

### [Communications & Contacts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/README.md#team-calendar-and-communication-groups)
