# Product Outline: Certificate of (Loan) Eligibility (COE) (Form 26-1800)
<!--*Iterating on a product? Have a new feature? Check out the [Initiative Brief Template.](https://bit.ly/initiative-brief-template)*-->

The online COE form was released in 2023. See this [feature brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/apply-for-home-loan-COE/feature-brief-COE-launch.md).

## Overview
A COE is the first step in getting a VA-backed home loan or Native American Direct Loan. It confirms for the Veteran's lender that they qualify for the VA home loan benefit. The online COE 26-1800 form allows a Veteran to request a COE from the VA.

- [How to request a COE](https://www.va.gov/housing-assistance/home-loans/how-to-request-coe/) 
- [Online form tool](https://www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880/introduction)
- [Form flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1710194001946/6515464c5bd118903f111a4ec876c8d5ee8766a6?sender=u934f98f179a86c76e6ee9592)
- [Wireframes (Figma)](https://www.figma.com/file/jpJQSCKiGegacdW4RH5uQB/Burial-530-2024-Updates-MVP?type=design&node-id=174-43726&mode=design)
- [Data Key Map]()

---
## Desired User Outcomes

- The online form flow submits information that can be successfully processed by downstream systems
- Claims that fail to submit are successfully processed through a backup submission flow
- Veterans have a positive experience when completing the online form
- Veterans do not encounter accessibility issues with completing the online form

## Undesired User Outcomes
- Online claims experience processing delays
- Veterans find the form experience confusing, frustrating, or too cumbersome
- Online claims are lost

## Desired Business Outcomes
- Online form submissions can be successfuly processed by downstream systems

## Undesired Business Outcomes
- Online form submissions generate claim errors that prevent automated processing 

---

## Measuring Success

### Key Performance Indicators (KPIs)
<!--* *What data (qual or quant) will you look at to understand if your initial set of functionality is meeting your desired user and business outcomes, and not bringing about the undesired outcomes?*
* _What are the most important metrics that track with this product/initiative's success?_
* _Include links to Domo or Google Analytics Dashboards/Reports_
* _**Limit 5-6 KPIs per product**__-->

| KPI                                              | Category           | Baseline | Goal   |
|--------------------------------------------------|--------------------|----------|--------|
| Number of conversions from submission to approval| Service Completion | 100%     | 20%    |
| Average time to approval                         | Processing         |          |        |
| Number of Contact Center calls                   | Trust/Satisfaction |          |        |
| Number of data errors                            | Reliability        |          |        |
| % of submission failures                         | Form Health        | ?        | <1%    |


### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Reduce the amount of time applicants are waiting for benefits.
  - Key result: % of online claims requiring development
  - Key result: Average days from online claim submission to receipt of COE
    
---

### Initiatives
*Include initiatives (iterations, new features, etc.) to improve this product. See the [Initiative Brief Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md)*

- [2024 Online 26-1800 Updates]()

---

## Key Decisions
- TBD

---

#### Communications

- GitHub Label: coe, umbrella, non-disability-benefits
- Slack channel: #benefits-non-disability
- VA.gov link: [https://www.va.gov/burials-and-memorials/application/530/introduction](https://www.va.gov/housing-assistance/home-loans/request-coe-form-26-1880/introduction)
- Product Roadmap: [link](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697040351744/d0ff11497ce0df685a377f3889f6d27687c0ffb4?sender=u0e8ac1d6d7681bb7e1b80558)
- Demo video link: n/a
- Test users: TBD
- Product repo: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/apply-for-home-loan-COE
- Teams repo:
- Zenhub board: Workspace - [Non-Disability experience](https://github.com/department-of-veterans-affairs/va.gov-team#workspaces/benefits-non-disability-645913c7d909c20011380ae8/board?labels=burial)

---

## Team

- Executive sponsor: Chris Johnston (christopher.johnston2@va.gov)
- Product Owner: Emily Theis (emily.theis@va.gov)
- VBA Stakeholders and SMEs: John Blankenship (Directof of LGY), R. Colin Deaso (Assist. Direcctor of LGY), Jennifer Spencer (Program Analyst)
  
 #### Non-Disability Experience Team
- Product manager: Laura Steele
- Design and Research: Julie Pedke and Fiorella Geedi
- Engineering: Thomas Blackwell (lead), Dakota Larson, Sean Midgley, Micah Fraizer, Evan Smith, Tyler Fink
- Delivery: Sarah Ortiz Shields


#### Stakeholders

- VBA Stakeholders and SMEs: John Blankenship (Directof of LGY), R. Colin Deaso (Assist. Direcctor of LGY), Jennifer Spencer (Program Analyst)
- CAIA Team (content review)
