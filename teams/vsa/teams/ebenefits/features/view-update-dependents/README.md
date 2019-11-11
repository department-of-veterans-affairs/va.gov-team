__Please note: some links in this document point to the vets.gov-team repo.__

# View and Update Dependents

- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: #vsa-ebenefits
- va.gov link: tbd

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
- [Team](#team)
- [Resources and Documentation](#resources-and-documentation)
- [Screenshots](#screenshots)

---

# Executive Summary

## Abstract

One of the most used features on EBN is View and Update Dependents. It is the only self-service place in the VA ecosystem that a Veteran can quickly view the dependents on their compensation award, as well as add, remove, or modify those dependents by electronically submitting the 686c. In happy path cases, electronic submissions can be processed through RBPS which, if successful, begins distributing benefits in days, not weeks or months. Migrate this functionality from EBN to the modern system at va.gov, conducting research and user interview along the way to make sure Veterans are able to achieve their goals in the quickest and most equitable way possible.

- va.gov landing page: https://www.va.gov/family-member-benefits/
- Benefits landing page: https://benefits.va.gov/compensation/add-dependents.asp
- Old Rainbows team work on Dependents: https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Disability/Declare%20Dependent%20686
- Dependents is up in staging!: https://staging.va.gov/disability-benefits/apply/dependents/introduction

## User Problem Statement

- I am a Veteran who needs to review and update information about my family and other dependents, so that my family can receive the benefits that I have earned. The paper forms are complicated and frustrating, and sending them off to the VA without any feedback makes me anxious that I might have done something wrong.

## Solution Goals

### User Goals

- **Veterans:** Review and update information about my dependents. Practically: Submit a valid 686c from start to finish online at va.gov, as represented by one of three AMA forms.
- TODO: Determine whether other forms are part of this goal.

### Business Goals

- Increase efficiency of Dependent update request processing
- Increase accuracy and integrity of stored data by reducing translation/ transposition cycles
- Reduce mail costs by establishing all-online feedback cycles
- Reduce staffing costs by reducing the number of employees needed to process paper forms

## Assumptions

- Product will use existing prefill integrations to pre-populate known information
- Product will use existing EVSS endpoints, with an understanding that those endpoints face deprecation within 3 years
- We will submit a request for endpoints to be developed on BIP

### Product Assumptions: Veteran User Group

-	I can log in to va.gov
-	I can go to a page and view a list of my dependents
-	I can understand which dependents are on my compensation award
- I can update information about my dependents
  - TODO: Outline all the modifications that can be made
- I can add a dependent
- I can remove a dependent
- I can review and submit my updates

## Requirements and Constraints

- A logged in LOA3-proofed Veteran should be able to submit a 686c, and possible a 674, depending on existing functionality
- Is it necessary that the forms be PDFed and uploaded to eFolder? Need research.
- TODO: Add more

## Solution Approach

- Connect with "Rainbows" team members about 686c research and findings
- Review historical Dependents work and documentation
- Audit Dependents app currently in staging, noting differences between it and EBN functionality
- Perform any necessary supplementary research how Veterans use the Dependents feature on EBN
- Mock/ update existing designs of Dependents app
- Audit existing EVSS endpoints and build connection
- Write e2e tests
- Perform comprehensive usability
- Ensure that submissions are processed through RBPS as expected
- Follow launch checklist

## Value Propositions

### User Value

"I don't have to deal with paper forms, potentially making mistakes that will cost me and my family years of cycling with the VA. I can update my family's information on other websites, so I should be able to at the VA."

### Business Value

1. Reduce the burden on administrative professionals significantly by providing them fact-checked information directly from VA partner systems
2. Reduce mail processing costs
3. Establish claims in an automated way through RBPS, leveraging existing high-value infrastructure

## KPIs

TBD

---

# Implementation Info

## Status

**Oct 1 2019**
- Pre-discovery

## Solution Narrative
- Late September: Team orientation to Dependents feature on EBN

## Team

- VA Executive Sponsor `*`:
- VA Policy Expert(s):
- VA Digital Strategist(s) `*`:
- Product Manager `*`: 
- Design Lead: 
- Eng Lead:
- VA Web Comms Partner:
- VA Call Center Partner(s):
- Production Testing Partner(s):
- Designer(s):
- Content Writer(s):

### API Team
- Product and Project: 
- Front-end Engineer(s):
- Back-end Engineer(s):

### Veteran Facing UX Team
- Product and Project:
- Front-end Engineer(s):
- Back-end Engineer(s):


`*` = approval required for launch

## Resources and Documentation

- Discovery
- [Research and Design](research-design/README.md)


