# Healthcare React Widgets - Product outline
(Note: this is being completed retroactively by a successor team.)
(As of Nov 2023, Cerner is now Oracle Health.)

## Overview
React Widgets will enable Veterans to be directed to the correct electronic system (VistA/MyHealtheVet or Oracle Health (formerly Cerner)/My VA Health) for 5 top tasks based on which VA medical system (geographic) is appropriate.

## Problem Statement
Before VA systems started cutting over to Cerner (now Oracle Health), the implementation of these common top tasks assumed that all actions would be taken through VistA. The gradual roll-out of Oracle Health has introduced the need to match Veterans to the correct EHR system.

Top tasks in question:
- Refill a prescription
- Send a secure message
- Make an appointment
- View medical records
- View test results

_How might we enable the VA.gov user interface to intelligently send Veterans to the right EHR portal based on their history with specific facilities?_
 
## Desired User Outcomes

- Understand that they need to take different actions for medical care/teams associated with different facilities
- Take the correct action to complete their task

## Undesired User Outcomes

- Failure to complete necessary tasks
- Confusion leading to loss of trust in VA
- Unnecessary phone calls or visits to VA

## Desired Business Outcomes

- Roll out Oracle Health without negatively impacting Veterans or VA operations

## Undesired Business Outcomes

- Increased call center visits
- Decreasing Veteran trust scores

---
## Measuring Success


### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__

| Category | Ease of use | Service completion | Trust/Satisfaction | Health |
|----------|-------------|--------------------|--------------------|--------|
| KPI      |             |                    |                    |        |
| KPI      |             |                    |                    |        |

#### Baseline KPI Values
* _Baseline values for those most critical metrics. These may come from other systems other than VA.gov e.g. eBenefits._

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective:
  - Key result: 
  - Key result: 


---

## Assumptions
- Veterans know which VA system they need to interact with.

## Solution Approach

- A react widget enables the combination of two data sources to conditionally change the UI for a given visitor:
  - The user object in the browser has info from an API about which medical systems the Veteran has had records/interactions with.
  - A list of which VA Medical Systems has cut over to Oracle Health can be provided through the codebase (MVP) or external configuration (future iteration).

### Initiatives

- Externalize the list of Oracle Health facilities | [CMS Source of Truth iteration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/public-websites/Cerner-Support/cms-source-of-truth/initiative-brief.md)

--- 

## Go-to-market Strategy
- We are adding these widgets to Benefit Detail pages, in the same place a similar CTA existed prior.

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After
<img width="374" alt="image" src="https://user-images.githubusercontent.com/4054752/172259057-45b864b2-a1e4-4997-940e-f1ced1d98f5c.png">


---

#### Communications

<details>

- Team Name: Sitewide Public Websites
- GitHub Label: Public Websites
- Slack channel: #sitewide-public-websites
- Product POCs: Wesley Rowe (PM), Dave Conlon (OCTO-DE)
- Stakeholders: Lauren Alexanderson (OCTO-DE)

</details>

#### Team Members

<details>
 
 - DEPO Lead: Dave Conlon
 - PM: Wes Rowe
 - Engineering: Ryan Koch
 - Research/Design: 
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>

