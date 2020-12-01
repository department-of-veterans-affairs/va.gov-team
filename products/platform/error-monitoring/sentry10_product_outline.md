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

## Solution Approach

### Initial Launch

- Sentry 10 needs to be configured with the correct enviornment tags
- All exisiting Projects need to be configured to be using Sentry 10
- Teams need to be setup and users added to their corresponding teams.

Note: Sentry 10 will be accessed through sentry10.vfs.va.gov, Sentry 9 will still be available at sentry.vfs.va.gov

#### Phase 2 - URL Updates

Sentry 10 will be available through the following URls:
- sentry.vfs.va.gov
- sentry10.vfs.va.gov (will become an alias)

Sentry 9 will have a new URL (TBD by Ops team) and will remain active for a certain amount of time before being deprecated (deprecation will be determined by Ops)


### Integration Additions

These additions have been slated to be included in Q4 of 2020 and not as part of the initial release.

- GitHub Integration is complete and connected to the relevent repositories that need to be tracked as well as github teams are utilized to organize users.
- Slack integration is complete

## Launch Dates
- *Initial Launch Date*: October 6th, 2020
- *URl Update* October 13, 2020
- *Integration Launch Date*: TBD (Q4 2020)


---

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
