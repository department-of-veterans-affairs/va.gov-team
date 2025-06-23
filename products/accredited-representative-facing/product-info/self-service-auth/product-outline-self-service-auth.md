
# Product Outline - Self-Service Authentication
---

## Overview
Accredited Representatives will need to access the Accredited Representative Portal, with minimal to no account management from the Accredited Rep Facing team. We initially piloted the portal based of a set list of emails. We are iterating to use OGC's database using the ICN API. That way any accredited representative would have access to the portal. We would leverage Login.gov and ID.me as our single sign on authentication.

## Problem Statement
We need a way to provide portal access to accredited representatives. Our current method is maintaining a list of email addresses:
- email maintenance can be a lot of work
- the list could get outdated, which could lead to unauthorized access 


## Desired User Outcomes

- We believe connecting access to the portal through OGC's ICN API would allow us to easily provide tools to reps
- We would ensure that only accredited representatives would have access to the portal
- We can revoke access seamlessly if an accredited representative's accreditation has been terminated

## Undesired User Outcomes
- Accredited representatives are unable to log into the portal

## Desired Business Outcomes

- Consistent and Efficient Representative Responses
Accredited representatives consistently provide accurate, timely, and guidance using tools provided by the portal.

- Data Integrity Across VA and OGC Systems
Fewer data inconsistencies through proactive corrections and validated update processes.

## Undesired Business Outcomes
- Unresolved or Delayed Data Corrections
Issues are stalled or misrouted, increasing resolution times and harming Veteran experience.
- Staff Reliance on Workarounds
Teams bypass the standardized process, leading to inconsistent outcomes and loss of accountability.
- Increased Complaints or Escalations
Veterans escalate issues to leadership, the White House hotline, or external advocacy groups due to poor experiences.

---
## Measuring Success
80% of Accredited Representatives are able to log into the portal

### Key Performance Indicators (KPIs)
* Successful logins
* Frequent logins to the portal to utilize its tools

### Objectives and Key results (OKRs)
  - Ensure accredited representatives have a seamless experience but signing into the portal for the first time and after

---

## Assumptions
- Representatives will be able to log into the portal using Login.gov
- Representatives will not be able to log into the portal if their accreditation is revoked

## Solution Approach
- Utilize existing login methods from VA.gov to provide access to the Accredited Representative Portal, such as Login.gov
- Connect to the OGC database through the ICN API in order to validate the representative's accreditation

--- 

## Launch Strategy
- We will collaborate with OGC and VBA VSO Liaison, Martin Martinez, to provide awareness for the portal. 
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representative-facing/product-info/self-service-auth/release-plan-self-service-auth.md)

## Launch Dates
- *Target Launch Date*
  - June 6, 2025
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - July 6, 2025

---

#### Communications

<details>

Team Name: Accredited Representative Facing
GitHub Label: accredited-rep-facing
Slack channel: #benefits-representative-facing

</details>

#### Team Members

<details>
 
DEPO Lead: Jennifer Bertsch
PM: Candi Lemoine
Technical Architect: Alex Prokop
Engineering: Kevin Beddingfield
Research/Design: Jen Seipel
 
</details>


#### Stakeholders

<details>
Martin Martinez, Deputy VSO Liaison
Christa Shriber, Deputy Chief Counsel
 
</details>
