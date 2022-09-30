# Caregivers Product Outline
- GitHub Label: 1010-team
- Slack channel: #1010-health-apps
- VA.gov link: https://www.va.gov/family-member-benefits/comprehensive-assistance-for-family-caregivers/
- Product POCs: 
---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Value Propositions](#value-propositions)
- [KPIs-OKRs](#kpis-and-okrs)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Resources and Documentation](#resources-and-documentation)
- [Team](#team)
- [Screenshots](#screenshots)

---

# Executive Summary

## User Problem Statement

As a caregiver or veteran, it would be easier to apply for the Program of Comprehensive Assistance for Family Caregivers (PCAFC) using an online form rather than the current paper submission process.

## Solution Goals

- Enable formal and informal caregivers and Veterans to submit the right information allowing for fast, transparent adjudication so they can get the support they need.

### User Goals
- Caregivers and veterans want to be able to fill out the 10-10CG online.

### Business Goals
- Feed application data directly to CARMA
- Accomodate the influx of applications that's expected due to changing program eligibility
- Make the user journey feel safer and more accomodating 

## Assumptions
- Caregivers and Veterans will prefer to fill out the 1010-CG online rather than on paper.


## Requirements and Constraints
- The paper 10-10CG requires wet signatures from both the Veteran and the Caregiver
- Many caregivers are used to filling out forms on behalf of their veterans
- Caregiver/Veteran relationships may change
- Some Veterans want to give their Caregiver access to all medical and benefits information, while others would not
- All legal language from the paper form must be online
- Phone numbers are required, e-mail addresses are not
- Limit online applications to those with a verified VA profile
- Send data to CARMA along with a PDF of the paper form will the filled-in information
 

## Discovery Takeaways
- Users like the idea of an online form
- Users like the ability to save the form in progress
- Users like the ability to download a submission receipt
- Mutliple online sources offer conflicting information
- Caregivers like the idea of having an online portal to access support, resources, and benefit information

## Value Propositions

#### User Value
 - Users will be able to apply for the PCAFC online

#### Business Value
- Start processing applications faster
- Fewer rejections

## KPIs and OKRs

### KPIs
- How many applications are submitted (harder to find)
- How many applications are submitted online
- How many online applications are successful vs. unsuccessful
- Why applications are unsuccesful (for failures, what triggered them)
- Average time to complete (online application)
- Qualitative metrics on the application process and overall experience
- Customer satisfaction (application process, caregiver program in general, etc.)
- Call Center reports


#### Baseline KPIs

- TBD

### OKRs
    
#### Objective 1: Make it easier to Veterans to apply to the PCAFC			
- Key result 1: Increase the number of successful online applications to the PCAFC (Target: 500)
- Key result 2 Decrease the number of requests for application assistance from the Contact Center (Target: 50 )
- Key result 3: Increase the % of PCAFC application submissions that are online rather than offline (Target: 10%)
			
#### Objective 2: Make it easier for CSCs to process PCAFC applications			
- Key result 1: Decrease application processing time (Target: 2 days less than current time)			
- Key result 2: Increase CSAT of CSCs with caregiver data			
			
#### Objective 3: Improve the experience of being a caregiver			
- Key result 1: Improve caregiver and veteran assessments of the PCAFC 	
---
### New OKRs from 2022 Workshop
#### Objective 1: Increase in number of VA-recognized Caregivers
- Key result 1: Increase the number of successful online applications to the PCAFC
- Key result 2: Increase % of caregivers who obtain approval for benefits

#### Objective 2: Decrease time from submission to decision
- Key result 1: Decrease application completion time
- Key result 2: Decrease application processing time and follow-ups by customer support
- Key result 3: Decrease number of status update calls to customer support

#### Objective 3: Increase transparency of the application processing and decisions
- Key result 1: Decrease % of application inquiry calls to customer support
- Key result 2: Increase application status checks online
- Key result 3: Increase number of appeals filed after rejection decision
--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

Note: as of 05/27/2020, the program office has not made specific plans to release the online 10-10CG to the public. When they do, we'll reach out to CSCs and VSOs to broadcast the changes to the Caregiver community. 

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
- *What is your date for when you'll evaluate impact after launch?*

- Dark launch (not public facing): 05/29/2020
- Soft release (potential to be public facing): 07/30/2020

---

# Implementation Info

## Status
- Focused on launching an MVP of the form
- Dark launch (only in staging): 05/29/2020 (completed)
- Soft release (Program approval of all online changes (not just the form): 07/30/2020

## Solution Narrative

**Pre-May 29th**
- Unauthenticated form
- Two signatures (printed names onto online form)
- Form intro page
- Downloadable submission receipt
- Return ICN number for veteran and caregiver (if applicable)
- Obtain static list of approved Caregiver facilities from CARMA
- Create table in vets-api to link CARMA ID to form submission (+ date)

**May 29th - Dark launch**
- Not public facing
- Allow for testing end-to-end testing in Staging

**June 30th - Soft release*

**Post-June 30th**
- Ability to attach Power of Attorney documentation
- Attach prefilled 1010CG PDF to CARMA application
- Prevent identical applications sent back-to-back
- Allow Veteran/Caregiver to track application status
- To support Caregiver program in its expansion and reduce number of phone calls asking status question
- Options:
  - Use application ID number to query for status update
  - Work with MPI to return status there


## How to Access and Test
- https://staging.va.gov/caregivers/
- User #36 can be used for testing in all environments
     - first name: WESLEY
     - last name: FORD
     - Use the [Staging users document](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) or [Test User Dashboard (TUD)](https://tud.vfs.va.gov/) for additional SSN, DOB information


## Error Handling
- If the Veteran cannot be found in MPI, the submission will not go through and the user will be prompted to print and fill out the paper form
- The same error page will occur if the submission cannot flow through to CARMA for any other reason

## API Calls and Dependent Systems
 - CARMA backend integration
 - VA API

## Resources and Documentation

- Discovery and Research: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/caregivers
- Roadmap: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/caregiver/OKR_Roadmap_Caregivers.png
- ATO documentation

### Screenshots
#### Before: 
https://www.va.gov/health-care/forms/vha-10-10CG.pdf

#### After:
https://www.va.gov/family-member-benefits/apply-for-caregiver-assistance-form-10-10cg/introduction

