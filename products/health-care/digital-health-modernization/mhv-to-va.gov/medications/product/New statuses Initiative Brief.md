
# New Statuses Initative Brief - Pending & Partial Fill

---
## Outcome Summary


**Related/Associated product(s)**
[Medications product outline ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medications)

## Problem

## Supporting Veteran Feedback


## Desired User Outcomes
- Veterans can track prescription statuses that are not currently available on MHV to get a more accurate representation of their prescription.  
- Veterans can view a prescription in MHV after it has been entered into the system but before the pharmacy has accepted it.
- Veterans can view partial refills in MHV to have access to their complete refill history.
- Improve transparency / reduce user confusion around prescriptions.
- Veterans are well-informed about the status of their medications throughout the lifecycle of their prescription.

## Undesired User Outcomes
- Veterans are confused by these new statuses.
- Veterans are confused by a "pending" prescription that gets accepted by the pharmacy and may change the medication name, etc.
- Veterans don't understand what actions to take on prescriptions with these new statuses. 

## Desired Business Outcomes
- Veterans have access to all prescription information in MHV, to avoid additional calls or messages to their provider, pharmacy or call center.
- Enabling users to understand and self-service medication needs leads to more timely care, reduces burden on clinical staff, and increases patient safety. 
- Have one place for veterans to find all their medication information and self serve their medication needs.

## Undesired Business Outcomes
- Users are confused by new statuses and this leads to more calls or messages to get help. 

---
## Measuring Success

### Key Performance Indicators (KPIs)
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup>\
> 💡 *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

- Reduce call center volume of Rx related issues | Baseline | Target | Link to data source (e.g. GA, Domo)-  TBD: verifying we have access to this information
- Reduce Health Chat volume of Rx related issues | Baseline | Target | Link to data source (e.g. GA, Domo)-  TBD: verifying we have access to this information
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
- Naming of these statuses is not final.  This is the current business naming conventions and may not be the most intuitive to users. We know that "pending" has been difficult for users in Appointments and statuses are already confusing to users, we should explore alternate names to ensure users understand the process.
  
#### "Pending" Status Details 
- Pending prescriptions are medications ordered by a VA facility but not yet dispensed or accepted by the pharmacy.
- In the source code they are listed as PD.  We return Pending medications with an “Order type” of NEW ORDER, HOLD, or RENEW.   It disregards values DISCONTINUED (EDIT), DISCONTINUED, and REFILL REQUEST. Uses API 4821: PEN^PSO5241.
- These prescriptions are usually accepted or dispensed by the pharmacy within 24-72 hours but could take up to 7 days from the date it was ordered.
- The old Rx will be grouped/associated with the pending one (being renewed) to indicate to the user that the new prescription is process and they do not need to take action at this time.
- For the list view we need to show:
  - Medication name *drug name unless not available, show Orderable Item
  - Prescription number
  - number of refills left
  - Status
  - [descriptive information about the status]
- There should be a details page for pending prescriptions that includes all data fields including instructions, etc. But need to show a disclaimer that this information could change.

#### "Partial Fill" Status Details
- Partial fills we plan to add these to the refill history portion of the details page to give users context that only some of the refill was filled with the date that occured.

### Go-to-market 
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*
- There will be marketing by the MHV comms teams about these new statuses when we are ready to release.  We will consider additional in product education for users. 
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
