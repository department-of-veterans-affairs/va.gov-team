# Claims Details V2 Initiative Brief
#### Overview
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
      
--- 

## Launch Planning
#### Collaboration Cycle 	[Kickoff ticket](https://github.com/orgs/department-of-veterans-affairs/projects/1525/views/3?pane=issue&itemId=103757282&issue=department-of-veterans-affairs%7Cva.gov-team%7C105484)

#### Timeline 				**Timeline pending**

#### Initiative Launch Dates
- *Target Launch Date*  - May 2025
- *Actual Launch Date*	- Pending

#### Go-to-market 			**Communications will be handled through VTP's change management office.**

---
   
## Screenshots				[Figma Files]

---

#### Communications

- Team Name: Travel Pay on VA.gov
- GitHub Label(s): travel-pay
- Slack channel: #beneficiary-travel
- Product POCs: Kay Lawyer, Mark Dewey, Kristen McConnell (VA); Ayush Chakravarty, Kevin Duensing, Micah Taylor (Ad Hoc)
- Additional Stakeholders: Veterans Travel Pay Office (Daryl Richardson, Lee Cook)

- Office/Department: Veteran Experience Office
- Contact(s): Lisa Koenigsberg
