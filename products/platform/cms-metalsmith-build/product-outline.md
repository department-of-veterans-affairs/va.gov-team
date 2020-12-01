# VA.gov CMS Build Pipeline - Product Outline

## Overview
The VA.gov CMS exports data from Drupal in a format that must be converted to static HTML, which can be served to VA.gov. The metalsmith build pipeline fits into the CMS ecosystem as described in this diagram: 

![CMS diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/cms-metalsmith-build/cms-architecture-diagram.png)

_Note that this product outline is NOT referring to the preview server, which has its own metalsmith build pipeline as seen at the bottom of the diagram._

## Problem Statement
The metalsmith build pipeline must enable content from the VA.gov CMS to be published on VA.gov. It must be scalable, to support hundreds of VA content editors and VA sites and subdomains. VA stakeholders also expect that the publishing time will be a matter of a couple minutes (as opposed to the app deploy on VA.gov which happens 1x/day and takes much longer). 

How might we create a build process that supports the needs of VA content editors and does not jeopardize the security & stability of VA.gov? 

## Personas
* VA.gov CMS content editors (indirectly)
* VFS teams who are product owners of content models (ex. VSA Facilities team)

## Measuring Success

### Key Performance Indicators (KPIs)
* Content build time 
* Number of nodes that the VA.gov CMS & build pipeline can support _(or alt measurement of amount of content/number of pages)_
* Number of VFS initiatives that are blocked by the VA.gov CMS & build pipeline

#### Baseline KPI Values
* _Baseline values for those most critical metrics, if possible._

---

## Assumptions
* Content editors should be able to see their published changes on the website within minutes

## Solution Approach

The VA.gov CMS was originally build using GraphQL. The content build process takes "too long" (per DEPO and VA stakeholder requirements), and hardware issues are preventing content editors from publishing as many nodes as are needed to fully scale the CMS and VA.gov. 

In fall of 2019, a "CMS Superteam" was established. The team decided to pivot to a new form of CMS export (based on Tome Sync), which generates data in a different structure than GraphQL. Transformers are used to convert the new CMS export to the same format as GraphQL, which can then be an input to the same filters and templates that were used in the initial build pipeline. 

As of September 2020, VSP FE Tools is working to fix discrepancies between the CMS export transformers and GraphQL, at which time we can use CMS Export Build + transformers to serve content from the CMS to VA.gov instead of GraphQL.

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
