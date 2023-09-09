# Project outline: Enhanced Military Information

**Created 09/08/2023**

### Communications

- **Github labels**: authenticated-experience, military-info
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Partners

|Name|Role|Email|
|----|----|-----|
| Melissa Rebstock | | should we put their emails in a public repo?|
| Trish Dang | | |

### Table of Contents

- [Overview](#overview)
     - [What we want to solve](#what-we-want-to-solve)
     - [Relevant Legislation](#relevant-legislation)
     - [What's being used today?](#whats-being-used-today)
          - [DD214](#dd214)
          - [ILER](#iler)
     - [8 key data elements](#8-key-data-elements)
     - [Important Items to Consider](#important-items-to-consider)
     - [Open questions to discuss with the team ](#open-questions-to-discuss-with-the-team)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Design](#design)
- [Frontend](#frontend)


## Overview
### What we want to solve 
Veterans currently cannot access key military service data points online. We want to make it easier for them to do that first by allowing them read access to their information followed by the ability to edit erroneous info. Additionally, it's worth noting, this initiative has received legislative attention:

#### Relevant Legislation 
- Congress enacted Section 9105 on January 1, 2021, in the National Defense Authorization Act (NDAA), to provide Veterans with read-only access to ILER.  
- Congress enacted Section 803 on August 10, 2022, as part of the PACT Act. Section 803(a) provides: “The Secretary of Veterans Affairs [VA] shall coordinate with the Secretary of Defense [DoD] to provide a means for Veterans to update their records as necessary to reflect exposures to occupational or environmental hazards by such member or Veteran in the [ILER].”
- Section 803(b)(1) provides that to update a record under subsection (a), a Veteran shall provide such evidence as VA considers necessary. Section 803(b)(2) requires VA to promulgate a regulation defining the “evidence considered necessary.”

### What's being used today? 

To access many benefits veterans often need to provide service history data and adequate documentation to support their request. There are two main ways they're obtaining this information, the **DD214** or a pdf of their **ILER**. 

#### DD214

When a service member separates from their respective branch, they are given a copy of their DD214. This is a point-in-time snapshot at the moment of their separation. Many veterans lose this document or in some cases never received a copy and need to re-request. Currently in the profile we [link to support pages](https://staging.va.gov/records/get-military-service-records/)detailing how to request a copy of one's DD214.

While [researching military information in early 2023, our findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#key-findings) demonstrated the importance this document carries not only in assisting veterans with the application process for benefits, but sometimes serving as a key document for proving  


#### ILER

[The Individual Longitudinal Exposure Record (ILER)](https://www.publichealth.va.gov/exposures/publications/military-exposures/meyh-1/ILER.asp)

ILER was created following a December 27, 2012, Health Executive Committee (HEC) Joint Incentive Fund Initiative (JIF) proposal, in which the Department of Defense (DoD) and Department of Veterans Affairs would create a complete record of every Service member’s occupational and environmental health exposure. ILER improves the efficiency and effectiveness in claims processing and decision-making by linking a Veteran to military exposures and/or deployments by integrating information from multiple DoD sources.

Veterans are gaining access to their ILER, often times, by requesting from their physician who can generate a PDF form. 

### 8 key data elements 
While it's important to consider the documents used today, the focus of this initiative should drive at providing users with access to the 8 key data elements below.
1. dates of, and branches of, service
2. units with which the Veteran or Service member served
3. deployment locations and start and end dates of deployments
4. military occupational specialties
5. training courses
6. military awards and decorations
7. non-military deployment data
8. a registry that verifies participation in a TERA

Some are already in the VA.gov profile. While there are other things out there, these are the items that have been prioritized by (insert name of organization/team).

### Important Items to Consider


### Open questions to discuss with the team 
Do we need a phased approach? what would that look like? 
What would an MVP product be? 

## Problem Statement

- Veterans struggle to access personal military records relevant to their application for benefits. Veterans need at a minimum read only access to their ILER data.
- The process for updating one's military record is cumbersome and should be improved, simplified, and accessible online. 

## User Outcomes

### Desired User Outcomes

- Users should be able to access their military information from the VA.gov profile
- Edits to the source data for ILER should be placed in the hands of veterans and proper documentation for the edits should be captured  
- Lost DD214s should become irrelevant and the urgency of locating military when applying for benefits will be reduced as the data will always be available. 
     - expanded military information in the VA.gov Profile would be accessible to pre-fill forms on other parts of the VA.gov website


### Undesired User Outcomes


## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*
Ideally this would reduce errors in the records maintained about service members. 
Would reduce calls and time spent by the call center supporting veterans with this. 


### Undesired Business Outcomes



## Proposed Solution

To be discussed w/the team collaboratively 


## Measuring Success

- [Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986) 

### Objective #1: 

**When filling in data -- update dates to be 1 month pre-launch, one month post launch (to 100%), and the second month post-launch (to 100%) based on actual launch dates.**


|KPI/metric|Baseline: 1 month pre-launch [add dates]|1 month post-launch to 100% [add dates]| 2 months post-launch to 100% [add dates]|
|----------|-------------|---------------|-------------------|
|||||


## Key deliverables

(This is just a starting list. Feel free to add whatever is relevant here.)

- Epic
- Sketch Files 
- QA Plan
- Release plan

## Key dates

- September 2023: Initial discussions; project kickoff
- September 2023: Discovery
- October 2023: Design
- November-December 2023: Build

## Design

- Add link to Sketch files
   
### Before


### After


## Frontend
