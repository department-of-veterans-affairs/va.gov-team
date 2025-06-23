# Initiative Brief Template

## Outcome Summary
The goal here is to enable simple, mileage-only claims (SMOC) on VA.gov. The current goal is for SMOC to exist on VA.gov with a low error rate.

**Related/Associated product(s)**
- [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product-outline-btsss.md) 

## Problem
* Over 70% of claims are mileage-only claims. To file these claims online, Veterans must be able to authenticate separately into the BTSSS portal. 
* This initiative will enable Veterans to navigate to and file for travel claims under one (VA.gov) authentication, and will provide a seamless way for them to file for travel reimbursement if they have mileage-only claims.


## Desired User Outcomes
* Users will be able to file simple, mileage-only claims (SMOC) on VA.gov without authenticating onto the BTSSS portal 
* More users will be able to find and file for SMOC.

## Undesired User Outcomes
* Users encounter a high error rate while filing for SMOC.
* Users cannot find the starting point for SMOC.

## Desired Business Outcomes

- Increase in total volume of SMOC filings.
- Increase in percentage of auto-adjudicated claims
- 
## Undesired Business Outcomes
--> Higher rate of manual review claims than on existing BTSSS portal
--> Continued usage of BTSSS portal for SMOC-eligible claims (high cost)

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*
| Product KPI                                                                      | Baseline | Target | Data Source |
|----------------------------------------------------------------------------------|----------|--------|-------------|
| % / # of claims submitted in VA.gov matching at least 'in process' status in BTSSS | --       | 100%   | PowerBI     |
| Claims created by API = claims processed by BTSSS                                | --       | 100%   | Datadog     |
| Qualitative feedback                                                              | --       | --     | Medallia    |
| Travel Pay API errors                                                             | --       | 0%     | Datadog     |
| Technical error rate in claim submission on VA.gov                               | 0        | 0      | Datadog     |
| # / % Claims from VA.gov in auto-adjudication                                    | --       | 0%     | PowerBI     |
| Claim volume increase from VA.gov                                                | --       | 30%    | PowerBI     |
| vets API errors                                                                   | --       | 0      | Datadog     |

---

## Discovery
### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**
	* This is considered high value, but if Veterans already have low trust with the product from previous experiences, there may be an issue.
	* Payouts from SMOC tend to be smaller in scale than payouts from other VA benefits, so not all who are eligible may prioritize it.
  
- **Usability Risks** 
  - Veterans have not submitted travel pay claims on VA.gov before. They may encounter issues finding the appointments list if they want to submit.
  - Veterans may not have all the information they need in their profiles (i.e. home address), which is a risk for them being able to file.
  
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
    - Upstream/Downstream API/Data availability and reliability. Because we have not worked with the Travel Pay API in this regard before, we are not sure of its reliability until testing in production.
    - Manual review for claims: because the rules engine is complex in nature and we do not know how all claims are processed, some claims may enter manual review for reasons that we do not immediately understand and would require explanation by the BTSSS team.
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
      - The single largest risk is coordination with VTP. Because VTP remains an influential owner of the existing BTSSS portal, we will need to continue working them on design, testing, rollout, and MS dynamics licensing questions,
      
### What're you building
* Simple mileage-only claims will include:
	* A flow that enables users to submit claims for travel to and from their care, asking them to confirm the following items:
		* Are they claiming only mileage?
		* Did they travel in their own vehicle?
		* Are they starting and ending at their home address?
	* This claim type will not enable claimants who have
		* Tolls
		* Flights
		* Lodging
		* Different Mileage
		* Traveled to or from a community care appointment.
	* Non-SMOC claims can still be filed in the BTSSS portal.

#### Go-to-market 
* Communications will be handled through VTP's change management office.
--- 

## Launch Planning
### Collaboration Cycle
> 💡 *Use for any Collab Cycle tracking, questions.*

- Kickoff ticket

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*

* [Link to Release Plan for this Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/SMOC%20Rollout%20Plan.md)

#### Initiative Launch Dates
- *Target Launch Date*
  - December 2024
- *Actual Launch Date* 
  - April 19, 2025 

---
   
## Screenshots

### Before
None - this was the BTSSS portal

### After
Pending entry point confirmation

---

#### Communications

- Team Name: Travel Pay on VA.gov
- GitHub Label(s): travel-pay
- Slack channel: #beneficiary-travel
- Product POCs: Kay Lawyer, Mark Dewey, Kristen McConnell (VA); Ayush Chakravarty, Kevin Duensing, Micah Taylor (Ad Hoc)

</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*
  
- Office/Department: Veteran Travel Pay
- Contact(s): Daryl Richardson, Lee Cook
- Office/Department: Veteran Experience Office
- Contact(s): Lisa Koenigsberg
-
---
<sup>1</sup> [VA.gov Analytics - KPI Framework](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/Analytics%20Playbook/va-gov-platform-analytics-kpi-framework.pdf)\
<sup>2</sup> [SVPG: The Four Big Risks](https://svpg.com/four-big-risks/)
