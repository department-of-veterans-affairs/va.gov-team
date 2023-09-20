# Project outline: Enhanced Military Information

**Updated 09/15/2023:** Samara updated problem statements

### Communications

- **Github labels**: authenticated-experience, military-info
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

### Roles

#### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Partners

|Name|Role|
|----|----|
| Melissa Rebstock |Branch Chief, Digital Experience/VEO|
| Trish Dang |Deputy Director within VBA/VACO| 

### Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Design](#design)
- [Frontend](#frontend)


## Overview

The VA.gov profile team has been asked to enhance the military history section of the profile to meet legislative requirements around giving veterans access to view and update their Individual Longitudinal Exposure Record (ILER) record.

### Legislative mandates

TL;DR -- in 2021, Congress mandated that veterans be able to view their ILER record. In 2022, as part of the PACT Act, Congress mandated that veterans be able to update this record.

- Congress enacted Section 9105 on January 1, 2021, in the National Defense Authorization Act (NDAA), to provide Veterans with read-only access to ILER.  
- Congress enacted Section 803 on August 10, 2022, as part of the PACT Act. Section 803(a) provides: “The Secretary of Veterans Affairs [VA] shall coordinate with the Secretary of Defense [DoD] to provide a means for Veterans to update their records as necessary to reflect exposures to occupational or environmental hazards by such member or Veteran in the [ILER].”
- Section 803(b)(1) provides that to update a record under subsection (a), a Veteran shall provide such evidence as VA considers necessary. Section 803(b)(2) requires VA to promulgate a regulation defining the “evidence considered necessary.”

### What is ILER?

[The Individual Longitudinal Exposure Record (ILER)](https://www.publichealth.va.gov/exposures/publications/military-exposures/meyh-1/ILER.asp)

ILER was created following a December 27, 2012, Health Executive Committee (HEC) Joint Incentive Fund Initiative (JIF) proposal, in which the Department of Defense (DoD) and Department of Veterans Affairs would create a complete record of every Service member’s occupational and environmental health exposure. ILER improves the efficiency and effectiveness in claims processing and decision-making by linking a Veteran to military exposures and/or deployments by integrating information from multiple DoD sources. **It is important to note that ILER is not an authoritative data source**, and it does not have an API to allow for integration into VA.gov.

While the announcement linked above mentions ILER is not for individual use, in practice, veterans are gaining access to their ILER, often times, by requesting from their physician who can generate a PDF form. 

#### Example of the data model 

<details>
     <summary>Details</summary>
<br>
     
- [**DHA ILER presentation from 2020**](https://www.dhaj7-cepo.com/sites/default/files/DHA_J7_CEPO_CCSS_Sept_S02.pdf)
     
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/8ed1c2f3-7154-4ccb-84e6-92b8a2750bd0)

</details> 

### How is this different than the DD214?

TL;DR -- ILER is a record of potential toxic exposure experienced in the service; DD214 is a discharge paper that proves a veteran's service.

To access many benefits veterans often need to provide service history data and adequate documentation to support their request. When a service member separates from their respective branch, they are given a copy of their DD214. This is a point-in-time snapshot at the moment of their separation. Many veterans lose this document or in some cases never received a copy and need to re-request. Currently in the profile we [link to support pages](https://staging.va.gov/records/get-military-service-records/) detailing how to request a copy of one's DD214.

While [researching military information in early 2023, our findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#key-findings) demonstrated the importance this document carries not only in assisting veterans with the application process for benefits, but sometimes serving as a key document for proving their service.

### Can we give veterans access to ILER? Are we integrating ILER into the profile?

No, we can not give veterans access to ILER or integrate it into the profile. This is because ILER does not have an API.

[ this needs to be updated, there's an API to generate a PDF of the ILER data, but the ILER record itself is not currently in a database that is editable, this has to do with ownership of ILER, ie. ILER is owned by DoD ]

### What can we do instead?

VA leadership -- which includes Trisha Dang and Melissa Rebstock, among others -- are working together to figure out how we can meet the letter of the law on the legislation without literally integrating ILER into VA.gov, which is not possible. They have determined that the following meets requirements:

#### Integrate the following data into VA.gov

The MVP datapoints VA leadership is interested in adding to the VA.gov profile include the following:

1. dates of, and branches of, service (already supported)
2. units with which the Veteran or Service member served
3. deployment locations and start and end dates of deployments
4. military occupational specialties
5. training courses
6. military awards and decorations

Additionally, the following data would eventually be required, but VA leadership is currently determining requirement around this. This would not be MVP.

1. non-military deployment data
2. a registry that verifies participation in a TERA

#### Link to ILER records

Apparently, we can access a PDF version of someone's ILER record, so linking to this would suffice for MVP.

#### Allow people to update their ILER record

VA leadership is not clear on how exactly to make this possible. A lightweight MVP might be giving people a number to call. Ideally, over time, we'd have a better option than that.

### Open questions to discuss with the team 
- Do we need a phased approach? what would that look like? 
- What would an MVP product be? 

## Problem Statement

- As a Veteran, I want to see what information VA has about my military history, and to be able to correct it if it is inaccurate.
- As a Veteran, I want to know if I served in a area where I may have been subject to toxic exposure, as this might mean I am available for additional disability compensation under PACT Act.

## User Outcomes

### Desired User Outcomes

- Users should be able to access their military information from the VA.gov profile
- Edits to the source data for ILER should be placed in the hands of veterans and proper documentation for the edits should be captured  
- Lost DD214s should become irrelevant and the urgency of locating military information when applying for benefits will be reduced as the data will always be available. 
     - expanded military information in the VA.gov Profile would be accessible to pre-fill forms on other parts of the VA.gov website


### Undesired User Outcomes


## Business Outcomes

### Desired Business Outcomes

*Why would your business want this to exist? With this problem solved, what should your business be able to do/achieve that they couldn't before?*

- Adding this information into the profile will help us meet the letter of the law on the legislative requirements outlined above.
- If veterans are able to update their information, this would reduce errors in their records.

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


## Key deliverables / artifacts

(This is just a starting list. Feel free to add whatever is relevant here.)

- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64861)
- [Mural refinement ](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695126310753/6ab8c3953d2eeaa067f666d5a03a754c5ded3d82?sender=uaa72d11015d3f7c704a64191)
- QA Plan
- Release plan

## Key dates

- September 2023: Initial discussions; project kickoff
- September-October 2023: Discovery
- October 2023: Design
- November-December 2023: Build

## Design

- Add link to Sketch files
   
### Before


### After


## Frontend
