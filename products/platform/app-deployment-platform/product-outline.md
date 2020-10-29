# App Deployment Platform (FE) - Product Outline [DRAFT]

## Overview

VA.gov is composed of static content (.html), applications (.js), and styling (.css). Static content files are created from the Metalsmith build script. Application bundles are created with Webpack. Currently (Q3 2020), these tasks are run in a single build script in the CI pipeline, which deploys apps and content to an AWS S3 bucket that is deployed to VA.gov. 

## Problem Statement
*In a couple of sentences, describe the Who, What, Why, and Where of the challenge / pain point you seek to address.*

## Personas
*Who are the users of this product?*

## Measuring Success

### Key Performance Indicators (KPIs)
* Percentage of builds that fail
* Percentage of failed builds that block deploy of other teams

#### Baseline KPI Values
* _Baseline values for those most critical metrics, if possible._

---

## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*

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
