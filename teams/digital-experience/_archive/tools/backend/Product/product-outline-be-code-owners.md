# Product Outline BE Isolation Experimentation
---

## Overview
The BE Tools team has decided to move forward with trialling the use of code owners on the code bases that we are responsible for maintaining in order to reduce the burden on VFS PR reviews and allow VFS teams have more ownership of the code they write.

## Problem Statement
BE Tools (and other "Operation" teams working on the platform) spends a significant amount of time reviewing PRs and assisting VFS teams during the development of their apps.  The line between the application team and platform team responsibility has been blurred because of the close support and feedback that has been provided over the past year.  As more and more VFS are onboarded to build on the platform, this model will not be sustainable and need to pivot to allow VFS teams to develop on the platform without the oversight of the platform teams as much as possible.

How might we empower VFS teams to develop an application with as minimal support from the platform teams, and reduce the burden on the platform teams to inject themselves so that we can scale the number of VFS teams successfully.

NOTE: Quality risk: The solution should be allow VFS teams to own their own code, without negatively impacting the quality or impact to users.
 
## Desired User Outcomes

- VFS Teams can merge a PR for specific folders/files in vets-api without the need for a review from any platform team member, they would only need a review from other team members on their team.
- Platform teams are able to segment which files/folders in vets-api do not need a review from the platform team.


## Undesired User Outcomes



## Desired Business Outcomes

TBD

## Undesired Business Outcomes


---
## Objectives and Key Results (OKRs) and Key Performance Indicators (KPIs)

### KPIs
TBD

#### Baseline KPI Values
TBD

### OKRs
TBD

---

## Assumptions
- Not all teams will fall into a perfect fit for this solution and there will still be a need for platform reviews as vets-api doesn't have a clear delineation of "products" like vets-website does.
- All files that are common to all applications will still need Platform approval.

## Solution Approach

### Analyze Historical pull requests

Using the VAOS team as an example, we will look back at the pull requests that have been submitted and identify how many of those pull requests would have matched the proposed rules (listed below).  Look at these pull requests, estimate the percentage of reduction the platform team would have needed to review.


### Run Test with new pull requests with one team
For this experiment we have chosen to work the VAOS team.  The Details of the setup are as follows:
- Created verified there is a github team that can be assigned that includes only the devs on the VAOS team (This is similar to the backend-review-group but does not include any platform team developers)
- Assigned the VAOS team to the code that they owned.  This was done by placing the following code in the Code owners file (located in the vets-api repo in the .github folder).

"#" Experiment for isolating VFS teams
modules/vaos/                        @department-of-veterans-affairs/vfs-vaos
spec/support/*/vaos/                 @department-of-veterans-affairs/vfs-vao

In the future, each time the VAOS teams submits a PR that changes any of the files listed above, they will be notified to self review (within their team) and the platform team will not be notified.  The hope is this speeds up their development as they won't have to wait for us to review the code changes in those files.

All other files will remain in the current process and need to be reviewed by the platform team (backed-review-group).

## KPIs
TBD
--- 

## Go-to-market Strategy
TBD

## Target Launch Date
TBD

---

## Solution Narrative

### Current Status

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: BE Tools
- GitHub Label: tools-be
- Slack channel: [#vsp-tools-be](https://dsva.slack.com/channels/vsp-tools-be)
- Product POCs: Alex Pappas
- Lead Eng: JP
- Stakeholders: 

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: Alex Pappas
 - Engineering: JP
 - Research/Design: N/A
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
