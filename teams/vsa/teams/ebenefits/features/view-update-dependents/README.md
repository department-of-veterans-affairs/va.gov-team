# View and Update Dependents
`WIP`
- GitHub Label: [vsa-ebenefits](https://github.com/department-of-veterans-affairs/va.gov-team/#workspaces/vft-59c95ae5fda7577a9b3184f8/board?labels=vsa-ebenefits&repos=133843125&showPipelineDescriptions=false)
- Slack channel: #vsa-ebenefits
- Old links: 
  - [View Dependents - http://www.ebenefits.va.gov/ebenefits/dependents](http://www.ebenefits.va.gov/ebenefits/dependents)  
  - [Update Dependents - http://www.ebenefits.va.gov/ebenefits/vdc?target=/wssweb/wss-686-webparts/dependent.do](http://www.ebenefits.va.gov/ebenefits/vdc?target=/wssweb/wss-686-webparts/dependent.do)  
- Staging link: https://staging.va.gov/disability/view-dependents/
- va.gov link: tbd
- [Previous team's work](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/declare-dependent)  
- [Current Mockup](https://xd.adobe.com/view/852342af-36f7-41b6-7e04-29c9ca8b210e-f312/screen/f4c5fb1f-44c1-4692-b3e9-e3fad4cfdab3/Dependents-Concept-1)

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

One of the most used features on EBN is View and Update Dependents. It is the only self-service place in the VA ecosystem that a Veteran can quickly view the dependents on their compensation award, as well as add, remove, or modify those dependents by electronically submitting the 686c. In happy path cases, electronic submissions can be processed through RBPS which, if successful, begins distributing benefits in days, not weeks or months. 

Migrate this functionality from EBN to the modern front door at VA.gov, conducting research along the way to make sure Veterans are able to achieve their goals in the quickest and most equitable way possible.

- va.gov landing page: https://www.va.gov/family-member-benefits/
- Benefits landing page: https://benefits.va.gov/compensation/add-dependents.asp
- Old Rainbows team work on Dependents: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/disability/declare-dependent
- Dependents is up in staging!: https://staging.va.gov/disability-benefits/apply/dependents/introduction

## User Problem Statement

- I am a Veteran who needs to review and update information about my family and other dependents, so that my family can receive the benefits that I have earned. The paper forms are complicated and frustrating, and sending them off to the VA without any feedback makes me anxious that I might have done something wrong.

## Solution Goals

### User Goals

- **Veterans:** Review and update information about my dependents. Practically: View the dependents currently on a compensation award, and submit a valid form 686c and form 674 from start to finish online at va.gov

### Business Goals

- Increase efficiency of Dependent update request processing
- Reduce administrative burden on processors by consolidating common requests into one univesal form
- Increase accuracy and integrity of stored data by reducing translation/ transposition cycles
- Reduce mail costs by establishing all-online feedback cycles
- Reduce staffing costs by reducing the number of employees needed to process paper forms

## Assumptions

- Product will use modern 686c form as opposed to the 2014 form contained in EBN workflows
- Product will use existing prefill integrations to pre-populate known information
- Product will use new (to us) BGS endpoints as EVSS is being deprecated
- We will submit a request for endpoints to be developed on BIP
- Form 509 (dependent parents) is not part of this work but a great value add

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
- Audit existing EVSS endpoints and build connection to BGS endpoints
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


