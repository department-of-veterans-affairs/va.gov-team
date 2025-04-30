# Initiative Brief Template
#### Overview

---

## Outcome Summary
> *Brief statement describing opportunity you're pursuing e.g. "Increase Use of Search Tools on VA.gov." Include measurable outcome (i.e. metric) you're trying to affect.*
* Enable Veterans to appeal claims that have been denied on VA.gov (and determine next steps)

**Product Overview**
- [Travel Pay Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product-outline-btsss.md) 

## Problem
* Veterans often have denied travel pay claims, and research has shown that while they may know that they can appeal, they do not know _how_ they may be able to appeal on VA.gov
* Research has also shown that this is a high priority issue for Veterans who use travel pay.

## Desired User Outcomes
* Users will be able to see when a claim is denied
* Users will be redirected to next steps when appealing a claim (a link elsewhere)
* Users will be able to download documentation that will enable a denial.

## Undesired User Outcomes
* Users encounter an error while downloading their denial letters
* Users cannot determine next steps after claim denial.

## Desired Business Outcomes
* Decrease in denial-related calls to call center
* Increase in appeals for denied claims originating from VA.gov

## Undesired Business Outcomes
* Higher rate of denied claims on claims originating from VA.gov
* Increase in calls regarding denials to call center
* Decrease in satisfaction of task completion on document download page

---
## Measuring Success

### Key Performance Indicators (KPIs)

| Product KPI \| Target \| Link to data source (e.g. GA, Domo) \| | Baseline | Target | Data source      |
| --------------------------------------------------------------- | -------- | ------ | ---------------- |
| Document download success %                                     | \-       | 100%   | Google Analytics |
| Uptime                                                          |          | 100%   | Datadog          |
| Document download errors from API                               | \--      | 0%     | Datadog          |
| Findability: all appeals                                        | \--      | 100%   | Datadog          |
| Call center volume re: appeals decrease                         | \--      | \-30%  | Call Center      |
---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**
	* Veterans may be used to calling to determine how to file an appeal, so following instructions on VA.gov may not be intuitive.
  
- **Usability Risks** 
  - Veterans may encounter issues downloading the denial letter.
  - File format: not all Veterans may have the word processor required to view the letter correctly.
  
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - API endpoint for document download remains untested in production
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
      - The single largest risk is coordination with VTP. Because VTP remains an influential owner of the existing BTSSS portal, we will need to continue working them on design, testing, rollout, and MS dynamics licensing questions,
      
### What're you building
* Claim details v2 will do the following:
	* **Clarify Denial Reasons**: Clearly communicate the specific reasons for claim denials to veterans, enabling them to understand the issues and take appropriate corrective actions.
	*  **Provide Access to Support Resources**: Ensure veterans have easy access to support channels, such as FAQs, chat support, or direct contact with the Beneficiary Travel Office, to address their concerns during the appeals process.
	* **Implement Automated Notifications**: Introduce automated alerts to inform veterans promptly about claim denials and provide guidance on the next steps, reducing delays in the appeals process.
	* **Integrate Educational Materials**: Offer educational content within VA to inform veterans about common denial reasons and preventive measures, empowering them to submit accurate claims.
	* **Monitor and Analyze Denial Trends**: Implement a system to track and analyze denial patterns, allowing for continuous improvement of the claims process and reduction of future denials.
	* **Ensure Compliance with Regulations**: Regularly update the appeals process content to align with current VA policies ensuring veterans receive accurate information and support.

#### Go-to-market 
* Communications will be handled through VTP's change management office.
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket: https://github.com/orgs/department-of-veterans-affairs/projects/1525/views/3?pane=issue&itemId=103757282&issue=department-of-veterans-affairs%7Cva.gov-team%7C105484

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.* 

Timeline pending

#### Initiative Launch Dates
- *Target Launch Date*
  - May 2025
- *Actual Launch Date* 
	- Pending

---
   
## Screenshots

### Before


### After

---

#### Communications

- Team Name: Travel Pay on VA.gov
- GitHub Label(s): travel-pay
- Slack channel: #beneficiary-travel
- Product POCs: Kay Lawyer, Mark Dewey, Kristen McConnell (VA); Ayush Chakravarty, Kevin Duensing, Micah Taylor (Ad Hoc)


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
  
- Office/Department: Veteran Travel Pay
- Contact(s): Daryl Richardson, Lee Cook
- Office/Department: Veteran Experience Office
- Contact(s): Lisa Koenigsberg
