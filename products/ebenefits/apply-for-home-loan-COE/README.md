# Feature Outline: Loan Guaranty Application (Certificate of Eligibility)

>**Feature transition document is available.**
> The Certificate of Eligibility feature transition document is on Github [(Link to Github page)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/apply-for-home-loan-COE/coe-transition-design.md)


## Locations
- Staging: http://staging.va.gov/housing-assistance/home-loans/request-coe-form-26-1880
- - IA Notes: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-reviews/ebenefits-home-loan-coe.md

#### Communications
- Team Name: eBenefits
- GitHub Label: vsa-ebenefits
- Slack channel: [#vsa-ebenefits](https://dsva.slack.com/channels/vsa-ebenefits)
- Product POCs: Matt Self, Sabrina Mohamed & Jason Wolf
- Stakeholders: Kelli Deinarowicz, Ken Lancaster

#### Team Members  
Jason Wolf    
James Adams     
Jesse Cohn     
Micah Chiang    
Kathleen Crawford   

---

## Overview
As a Veteran I want to establish my eligibility for loan assistance, view my application status a list of my dependents, and apply for a certificate of eligibility to assist with getting a VA home loan, so that I can make sure me and my family is getting the benefits I've earned.

## Mission
Create a user friendly, innovative, self-serve Veteran portal in VA.gov to request benefits available to the Veteran, Servicemember, Dependents and Surviving Spouses, including VA Home Loan Benefits.

### Initial Meeting Notes from LoB
- Kelli Deinarowic will be handling the move for eligibility transformation from LoB side
- Eligibility (Certificate of Eligibility) product is intended to allow Veteran to login and determine their eligibility OR request eligibilty
  - Specially Adapted Housing (SAH) piece: technology side, and a business/policy side
- Loan Guaranty is being parked more or less at the moment, due to grants program coordination
- COE uses [VA Form 26-1880](https://www.vba.va.gov/pubs/forms/VBA-26-1880-ARE.pdf)

- **Questions for LoB**
  - What is required in the submission?
    - (SAH) Address + military history are submitted
  - Is there a timeline?
  - How are applications processed?  What does that workflow look like?
  - Stats?

## Problem Statement
Veterans need asssistance in getting a home loan, first step is to check for eligibility to get one through the VA.  Ideally they should be able to get one online and find out quickly what their next steps are based on their specific information.
 
## Desired User Outcomes

- A quick look into the eligibility will inform the Veteran if this is a path to take in getting a home loan
- Those next steps may include an application which we can help with right away as well.

## Undesired User Outcomes
- More work for the Veteran to find out if they are eligible.  This can happen if there is not precise messaging around the outcomes for each Veteran.

## Desired Business Outcomes
- Being able to automatically screen for eligiblity allows the LoB to only deal with more "pre-approved" loan seekers

## Undesired Business Outcomes
- False positives moving into the workflow

## Assumptions
- Care needs to be taken in getting a hold required data from various systems.

## Solution Approach

- First version of this is going to be the automatic Certificate of Eligibility lookup and the digitized VA form application.
- Keeping the scope as bare as possible gets the most benefit to the most Veterans the soonest.
- A list of future functionality is being considered in the Epic (#19595)

## KPIs
- Desired outcomes are accurate renderings of  automatic eligibilty screenings, and for those eligible, a strong conversion number
--- 

## Go-to-market Strategy
- The line of business will have some participation here and soft then hard redirects from eBenefits will also help.
- An email can be sent to Veterans that it is suspected might benefit from this program, although the details are unknown at this time for that.

## Target Launch Date
- TBD
- TBD + 1 month

---

## Solution Narrative
### Current Status
**March 2021**
- Collaborating with stake holders on pain points
- Early Collab Cycle exercises

### Product Decisions
- First version should be the auto-eligibility function and a form submission
---
   
## Screenshots

### Before

### After
