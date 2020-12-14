# App Deployment Platform (FE) - Product Outline

## Overview

VA.gov is composed of static content (.html), applications (.js), and styling (.css). Static content files are created from the Metalsmith build script. Application bundles are created with Webpack. Currently (Q3 2020), these tasks are run in a single build script in the CI pipeline, which deploys apps and content to an AWS S3 bucket that is deployed to VA.gov. 

## Problem Statement
All teams deploying on VA.gov — including application teams and teams iterating on CMS templates — build and deploy from vets-website. This results in a lot of interdependencies between teams. When one application has an issue such as a failing test, all teams are blocked. How might we iterate on the app deployment platform for improved developer experience and increased application team autonomy? 

## Personas
VFS engineers

## Measuring Success

### Key Performance Indicators (KPIs)
* Percentage of builds that fail
* Percentage of failed builds that block deploy of other teams

#### Baseline KPI Values
* _Baseline values for those most critical metrics, if possible._

---

## Assumptions
- VFS teams should ideally be able to build and deploy their own apps
- VSP needs some level of control over the quality and security of app teams' build and deploy processes

## Solution Approach

- [Content build separation design doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/design-docs/2020-04-09-separate-content-build.md)

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
