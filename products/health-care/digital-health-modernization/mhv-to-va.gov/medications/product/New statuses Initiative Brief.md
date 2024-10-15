
# New Statuses Initative Brief - Pending & Partial Fill

---
## Outcome Summary


**Related/Associated product(s)**
[Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)

## Problem

## Supporting Veteran Feedback


## Desired User Outcomes
- Veterans find the medications list is easy to navigate and find what they are looking for. 
- Veterans know how to find a complete list of medications they have on file at VA, as well as any relevant details about those medications. This includes all historical information about a medication including past prescription history.
- Improve transparency / reduce confusion around medications a Veteran is taking (VA and non-VA)
- Veterans are well-informed about the status of their medications (when something needs to be refilled or renewed, shipment tracking updates, etc.)

## Undesired User Outcomes
- Medication section doesn’t provide the user with the same functionality that they have today- causing frustration and dissatisfaction.
- Veterans are confused about medications they are taking.
- Veterans are confused by VA and non-VA medications that are the same medication. 

## Desired Business Outcomes
- Veterans have access to all historical information about a medication including past prescription history.
- Misalignment in data and functionality on VA Health and Benefits Application and MHV on va.gov.
- Enabling users to understand and self-service medication needs leads to more timely care, reduces burden on clinical staff, and increases patient safety. 
- Have one place for veterans to find all their medication information and self serve their medication needs.
- Easily accessible and identifiable medications list will alleviate congressional and patient safety questions.

## Undesired Business Outcomes
- Users find the medications on VA.gov complex and difficult to accomplish their tasks and continue to default to MHV legacy to self-serve their needs.

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Product KPI | Baseline | Target | Link to data source (e.g. GA, Domo)

---

## Discovery

### Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks** (will people use it): 
  - .
- **Usability Risks** (can people figure out how to use it):
  - .
- **[Technical] Feasibility Risks** (can we build it with available tech/data):
  - Examples:
    - Upstream/Downstream API/Data availability and reliability
    - Site performance impacts (see [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), [WebPageTest](https://www.webpagetest.org/), #-daily-lighthouse-scan)
  
- **Organizational Viability Risks/Constraints** (will there be a positive organizational impact):
  - Examples: 
    - VA stakeholder testing, marketing, compliance requirements 

### What're you building
> *What's in scope for you to build with this initiative? Describe key features/flows. 
> *What have you explicitly decided to **not** include and why?*
> *How does this solution address your Assumptions & Risks?
- Naming of these statuses is not final.  This is the current business naming conventions and may not be the most intuitive to users.
- 
#### "Pending" Status Details 
Pending Medications - meds order by VA facility but not yet dispensed
Source code: PD
Criteria:
Returns all Pending medications with an “Order type” of NEW ORDER, HOLD, or RENEW.   It disregards values DISCONTINUED (EDIT), DISCONTINUED, and REFILL REQUEST.
Uses API 4821: PEN^PSO5241

For Pending list view:
Medication name *drug name unless not available, show Orderable Item
Prescription number
number of refills left
Status
[descriptive information about the status]

within the same day or commonly within 24-72 hours but no longer than 7 days from date it was ordered
should group the old RX with the renewal/pending one

#### "Partial Fill" Status Details


### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

--- 

## Launch Planning
### Collaboration Cycle
- [Kickoff ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/94685)
- 10/23 - PO Sync
- TBD - Architecture Review
- 10/31 - Design Intent
- 12/12 - Midpoint
- 1/7 - Staging
- Release by end of PI 17 - Jan 21.

### Timeline 
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
- 

#### Initiative Launch Dates
- *Target Launch Date*
  - Jan 2025
- *Actual Launch Date* 
  - tbd

---

### Additional resources 
- [Pending Epic ](https://jira.devops.va.gov/browse/MHV-35870)
- [Pending Rx File](https://dvagov-my.sharepoint.com/:x:/r/personal/eric_spahn_va_gov/Documents/Microsoft%20Teams%20Chat%20Files/PENDING%20Rx%20File.xlsx?d=wb64c626a16994ce384178248ea43059f&csf=1&web=1&e=Ym7m6M)
- [Partial Fill Epic](https://jira.devops.va.gov/browse/MHV-48037)
---

#### Communications
- Team Name: Medications on VA.gov
- GitHub Label(s): MHV-Medications
- Slack channel: #mhv-medications-devs, #mhv-medications-rx
- Product POCs: Kaitlin Fink (acting), Kay Lawyer (parental leave)

#### Stakeholders
- OCC: Eric Spahn (RX)
