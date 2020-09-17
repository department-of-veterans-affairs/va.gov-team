# Sentry 10 Upgrade

## Overview

Sentry is a tool used by the VSP and the VFS team to monitor exceptional errors that relate to the performance of the platform and applications.  Sentry is not a logging or debugging tool, but rather a tool that will alert developers through slack and its own UI to problems that need to be addressed in a timely manner.  

## Problem Statement

Our current implementation of sentry (verion 9.3) does not include some desired functionality that was rolled out with Sentry 10.  Most noteabley, Sentry 10 can be configured to auto assign a team or individual to an alert.  In our current version, a user would have to log in and manually assign each alert to the relevent team.

## Personas
VSP Engineers troubleshooting and triaging alerts on the platform and to VFS teams.
VFS Engineers who are tracking errors for their application.

## Measuring Success

### Key Performance Indicators (KPIs)
* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Grafana or other dashboards/reports where possible_

#### Baseline KPI Values
* _Baseline values for those most critical metrics, if possible._

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

## Solution Approach

### Initial Launch

- Sentry 10 needs to be deployed in the new infrastructure defined by the Operations team on the VSP.
- Sentry 10 needs to be configured with the correct enviornment tags
- Teams need to be setup and users added to their corresponding teams.
- All integrations need to be setup and conigured appropraitly.


### Integration Additions

- GitHub Integration is complete and connected to the relevent repositories that need to be tracked as well as github teams are utilized to organize users.
- Slack integration is complete

## Launch Dates
- *Initial Launch Date*: September 29th, 2020
- *Integration Launch Date*: TBD


---
   
## Screenshots

_Include before/after screenshots, if applicable. Delete this section otherwise._

### Before

### After

---

## Reference Material

_Link to the following materials as relevant._

- VFS-facing Product README (in `/platform`)
- Release Plan
- Any product health or success dashboards

### Communications

<details>

- Team Name: Backend Tools
- GitHub Label: tools-be, sentry10
- Slack channel: #vsp-tools-be
- Product POCs: Alex Pappas

</details>

### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
