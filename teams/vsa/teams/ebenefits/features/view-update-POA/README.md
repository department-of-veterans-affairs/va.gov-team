# View and Update Representative

- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: [#vsa-ebenefits](https://dsva.slack.com/channels/vsa-ebenefits)
- Staging EBN link: https://sqa.eauth.va.gov/ebenefits/representative
- Staging VA.gov link: https://staging.va.gov/view-change-representative/view/
- Staging VA.gov link: https://staging.va.gov/view-change-representative/search/
- VA.gov link: tbd

## WIP

### Table of Contents

# Executive Summary
- [Abstract](#abstract)
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [Product Decisions](#product-decisions)
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## Abstract

One of the more critical pieces of assistance Veterans need is to have strong representation  at the VA.  The VA's Office of General Counsel has a list of accredited or certified individuals or groups that are best qualified to help Veterans in various tasks.  This fature allows the Veteran to **View**, **search** and **request** a repreresntative be engaged with them.  This is often called "Power of attorney (POA)" but since that is more of a function of a represetnative we try not to call it that.

## User Problem Statement

As a Veteran in need of legal representation, I need to see who my current represetantive is so that I can contact them.

_AND/OR_

As a Veteran in need of legal representation, I need to be able to search through a validated list to select the right represetnative for me; based on location, referral, exptertise or other so that I can get the specific help I need.

_AND/OR_

As a Veteran in need of legal representation, I need to be able to submit a 21-22a form to initiate the request process so that I can be fully represented.

## Solution Goals

### User Goals

- **Veterans:** Review and update information about my representative. Practically: View my current representative/ POA, and submit a valid form 21-22 and/or 21-22a from start to finish online at VA.gov.

### Business Goals

- In discovery

## Assumptions

- Product will use existing prefill integrations to pre-populate known information
- Product will use BGS or BIP endpoints as EVSS is being deprecated
- More as per discovery

## Requirements and Constraints

- A logged in LOA3-proofed Veteran should be able to submit a 21-22 or 21-22a.
- Is it necessary that the forms be PDFed and uploaded to eFolder? Most liekly
- TODO: Add more

## Solution Approach

- Search Representative
  - The Search Representative application is an integral part of the overall suite of representative work eBenefits will be managing. This application consists of the following features: 
      - A step by step form that allows the uesr to input their search parameters
      - A results page that displays all data retrieved from an API request that used the search parameters
  - Proposed solution is to leverage [SchemaForm](https://react-jsonschema-form.readthedocs.io/en/latest/) outside of the vets-website formbuilder. Historically, the formbuilder is constrained to the configuration of a single config file and is limited by several things, most notably the inability to reliably access data from the vets-website redux store.
  - Using SchemaForm on its own would afford us the flexibility of:
      - Reading from, and writing to, the redux store whenever we wish
      - Managing our own application routing
      - Handling api requests in our own way.
  - Examples of SchemaForm used outside of the vets-website formbuilder:
    - [VAOS](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/vaos)
    - [Manage Dependents](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/personalization/view-dependents/manage-dependents/containers/ManageDependentsApp.jsx)
    - [Coronavirus Vaccine](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/coronavirus-vaccination/components/Form.jsx)
  - Highlevel diagram of schemaform usage and react routes:
    ![Search Rep architecture overview](https://user-images.githubusercontent.com/15097156/119543243-71dfcd00-bd5e-11eb-90c6-af62b158d85e.png)


## Value Propositions

### User Value

TBD

### Business Value

1. Sunset EBN



---

# Implementation Info

## Status

**Nov 1 2019**  
- Pre-discovery  

**March 24, 2020**  
- Kickoff with platform  

**April 20, 2021**
- Design intent

## Solution Narrative
- TBD

## Product Decisions

## Team

- VA Executive Sponsor `*`:
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`: Jason Wolf
- Design Lead: Jim Adams
- Eng Lead: Kathleen Crawford
- VA Web Comms Partner:
- VA Contact Center Partner(s):
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):



`*` = approval required for launch

## Resources and Documentation

- Discovery
- [Research and Design](research-design/README.md)

## NOTES

[Form 21-22](https://www.vba.va.gov/pubs/forms/VBA-21-22-ARE.pdf) is for VSO appointment; form [21-22a](https://www.vba.va.gov/pubs/forms/VBA-21-22A-ARE.pdf) is for the appointment of individuals.

Good info in the Caseflow POA project: https://github.com/department-of-veterans-affairs/appeals-design-research/tree/master/Project%20Folders/Caseflow%20Projects/Power%20of%20Attorney%20(POA)

VSOs, attorneys, and agents must be accredited with OGC and be present in their accreditation database. https://www.va.gov/ogc/apps/accreditation/
