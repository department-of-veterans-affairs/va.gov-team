# 526 Original Claims on VA.gov

## Communications
- GitHub Label: [526](https://github.com/department-of-veterans-affairs/va.gov-team/labels/???)
- Slack channel: n/a (#vsa-benefits-memorials)
- Product POCs: Andrea Schneider and Luke Majewski
- va.gov link: https://www.va.gov/disability/how-to-file-claim/
- Stakeholders: Paul Shute on VBA side.  Working with EVSS and MVI as well.
  - Contact: Paul Shute (Paul.Shute@va.gov)
  - Contact: Venus Lewis (Venus.Lewis@va.gov)

## The Problem
Veterans that want to file their first claim in the VA digital ecosystem currently have to do so through the eBenefits application. One of the goals of DSVA is to create a central place for all veteran 

### Program Requirements
Eligibility for veterans can be found here: https://www.va.gov/disability/eligibility/

For DSVA, the Original Claim concept is not much different than filing a normal 526 "All Claim" except that there is a signficant amount of back-end work that needs to happen to be able to support moving from eBenefits to VA.gov. Specifically, integration with some MVI end-points to establish whether a user already has a BIRLs or CorpDB ID.  If it is determined that the user does not exist, a different end-point (proxy-add) would be called to establish the veterans digital experience.  During testing we imagine there will be significant work around this integration as well as testing for edge cases.

### User Problem Statement
Currently, a gating mechanism exists on va.gov asking a user if they have previously filed for a disability claim. When the user identifies it is their first time filing for a disability claim, they are directed to start the process on eBenefits.  

- I am a Veteran who is in need of filing a Disability Claim, but since I have never filed on before I am not able to do so on va.gov and am forced to have to complete it on the eBenefits website instead, which is an unfavorable user experience. 

### History
We already have subsequent claims established on the VA.gov website. Therefore, this is built on the already working "v2" version of the VA.gov disability compensation application. 

### User Goals
Apply on VA.gov and enjoy the smoother process of using disabilty claims flow versus eBenefits.

### Business Goals
1. Increase the number of veterans that apply for their first disability benefits by 5% over eBenefits.
2. Reduce the number of paper forms since eBenefits is not as easy to use and therefore still encourages paper form submissions.
3. Turn off the capability on eBenefits.

## Assumptions
1. No new flow for the front-end since this is based on the 526 form gating.
2. Most of the complex changes are back-end and will be around the MVI integration.
3. Will rely on 526 All Claims V2.

## Questions
We did not do any research for Original Claims since it will be the same experience on the front-end from a usability perspective.

## Requirements
#### In Scope 
1. Sunset eBenefits.
2. Provide a transparent user experience.
3. Update our gating to allow for Original Claims.

#### Out of Scope
1. None that we know of

## Solution Approach
Reuse the existing 526 form and flow with a transparent experience to the veteran. As stated above, the back-end will be doing the heavy lifting for this application.

### MVI Integration
  - MVI will be providing two different APIs for us to hit to establish a new user in CorpDB, etc.
    - 1350 service which will allow for two types of searches
	- Proxy-add service which will tell MVI to create a user at the CorpDB
  - Primary testing will be in their SQA environment

## Value Propositions
Service members being able to apply for their first VA benefits on VA.gov versus eBenefits will improve their overall experience and likelyhood of filing for these benefits.

## OKRs and KPIs
### KPIs
- Traffic to VA.gov 526 experience

#### Baseline KPIs
- TBD

### Key Results (KRs) 
1. We will see an increase in traffic to our 526 forms of 10% (based on traffic in eBenefits)
2. After 6 months, we will see another 5% increase as the ease of use for VA.gov will get more veterans to use VA.gov.

---
## Results and Recommendations
### Results
TBD after launch
### Recommendations
TBD after launch

## Team

- VA Digital Strategist(s): Andrea Schneider and Luke Majewski
- Product Manager: Luke Majewski 
- Research Lead: Christian Valla
- Design Lead: Kevin Stachura
- Engineers:
   
## Screenshots

### Before

### After

