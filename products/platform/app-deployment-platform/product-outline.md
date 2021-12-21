# App Deployment Platform (FE) - Product Outline

## Overview

VA.gov is composed of static content (.html), applications (.js), and styling (.css). Static content files are created from the Metalsmith build script in the content-build repository. Application code is hosted in vets-website. All VFS teams must write code in these repositories and are dependent on Platform for production deploys (scheduled daily). 

## Problem Statement
All teams deploying frontend code on VA.gov build and deploy from vets-website and content-build. This results in a lot of interdependencies between teams, and a lot of dependencies on Platform. When one application has an issue such as a failing test, all teams are blocked. How might we iterate on the app deployment platform for improved developer experience and increased application team autonomy? 

## Personas
VFS engineers

## Measuring Success

### Key Performance Indicators (KPIs)
* Build times
* Percentage of failed builds that block deploy of other teams
* Rate of production deploys to VA.gov

#### Baseline KPI Values
* _Baseline values for those most critical metrics, if possible._

---

## Assumptions
- VFS teams should ideally be able to build and deploy their own apps
- VSP needs some level of control over the quality and security of app teams' build and deploy processes

## Solution Approach
- Autonomous deploys: [see Objective explanation](https://vfs.atlassian.net/wiki/spaces/AP/pages/1555071083/2021+Platform+OKRs#Objective-2%3A-The-customer-setup-and-deployment-experience-is-autonomous.)

--- 

## Launch Dates
- *Launch Date*: TBD

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

- Team Name: 
- GitHub Label: 
- Slack channel: 
- Product POCs:

</details>

### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
 
</details>
