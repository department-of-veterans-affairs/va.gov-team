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
- [Current Mockup](https://xd.adobe.com/view/fef8a415-74b4-45a9-6b5f-da956acd75d9-88c9/)

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

## Discovery Takeaways
A [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/686-form-gating-0220/686-usability-research-plan.md) was put together and a series of usability sessions was scehduled and conducted.  A resulting [summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design/686-form-gating-0220/686-usability-analysis.md) and more official readout can be found [here](https://dsva.slack.com/archives/CLY6Q69RV/p1583446780067800?thread_ts=1583352659.066300&cid=CLY6Q69RV).

## Solution Approach

- Connect with "Rainbows" team members about 686c research and findings
- Review historical Dependents work and documentation
- Audit Dependents app currently in staging, noting differences between it and EBN functionality
- Perform any necessary supplementary research how Veterans use the Dependents feature on EBN
- Mock/update existing designs of Dependents app
- Audit existing EVSS endpoints and build connection to BGS endpoints
- Write e2e tests
- Perform comprehensive usability
- Ensure that submissions are processed through RBPS as expected
- Follow launch checklist

## Value Propositions

### User Value

**Veterans:** Submit a 686 on VA.gov resulting in my dependents getting benefits
**Intake Admin Proffesionals:** Review and approve a successfully submitted 686 application automatically or further develop the application manually.

*"I don't have to deal with paper forms, potentially making mistakes that will cost me and my family years of cycling with the VA. I can update my family's information on other websites, so I should be able to this at the VA."*

### Business Value

1. Reduce the burden on administrative professionals significantly by providing them fact-checked information directly from VA partner systems. Reduce the amount of time taken to review; less labor costs.
2. Reduce mail processing costs, decrease the number of paper forms submitted; reducing cost/overhead
3. Establish claims in an automated way through RBPS, leveraging existing high-value infrastructure. Increase the accuracy of the data being submitted; more applications will be automatically approved.
4. Make it easier to find the dependent management tools; increasing the number of applications

## OKRs & KPIs

**Objective 1:** Greater number of Veterans applying to get benefits associated with their dependents.
- Key Results 1: Data shows the number of views of the 686 application has increased since migration; statistically significant increase in traffic
- Key Results 2: Data shows more applications are being successfully submitted; statistaclly significant increase in number of approved submissions 

**Objective 2:** Faster delivery of benefits obtained for the Veteran.
- KR1: Data shows that more 686 applications are being automatically approved within the Rules Based PRocessing Service; RBPS is automatically processing statistically significantly more 686 applications 
- KR2: Data shows that the new 686 user experience within VA.gov results in a faster fill out time compared to the eBenefits portal

**Objective 2:** Increased conversion rate of successful, automatically approved forms.
- KR1: Data shows that RBPS is automatically approving more 686 forms upon submission compared to previous instance
- KR2: Data shows that the payload has been improved resulting in more accurate applications making it easier to approve if not done by RBPS (for some reason)


---

# Implementation Info

## Status

**Oct 1 2019**
- Pre-discovery

## Solution Narrative
- Late September: Team orientation to Dependents feature on EBN
- October & November: Research and design mockups
- December & January: Work with previous teams (rainbows) code and schemas
- February: Restart code development from scratch using rainbows schemas as high level guide, build out the different workflows
- March: Continue building out workflows, start thinking about how to get the different sections to work together, connect backend and frontend. 


## Team

- VA Executive Sponsor`*`: Paul Schute
- VA Policy Expert(s):
- DEPO`*`: Steve Kovacs
- Product Manager`*`: Jason Wolf
- Design Lead: Shawna Hein
- Eng Lead: Paul Short
- VA Web Comms Partner: 
- VA Contact Center Partner(s): Chante
- Production Testing Partner(s):
- Designer(s): Jim Adams
- Content Writer(s): None

### API Team
- Product and Project: Jason Wolf
- Front-end Engineer(s): Micah Chiang, Jesse Cohn
- Back-end Engineer(s): Kathleen Crawford

### Veteran Facing UX Team
- Product and Project: Jason Wolf
- Front-end Engineer(s): Micah Chiang, Jesse Cohn
- Back-end Engineer(s): Kathleen Crawford


`*` = approval required for launch

## Resources and Documentation

- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents/discovery)
- [Research and Design](research-design/README.md)
- [IA Recomendation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/ebenefits-view-dependents.md) for View Dependents
- Link to [Request for IA Review for Add/Remove Dependents](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6636)


