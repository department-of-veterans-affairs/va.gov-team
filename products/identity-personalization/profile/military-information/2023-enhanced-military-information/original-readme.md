# Initiative outline: Enhanced Military Information

**Updated 11/1/2023: Added product/initiative goals and restructured/collapsed some sections to reduce the length**

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
- [Product/Initiative Goals](#productinitiative-goals)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables](#key-deliverables)
- [Key Dates](#key-dates)
- [Design](#design)
- [Frontend](#frontend)


## Overview

The VA.gov profile team has been asked to enhance the military history section of the profile to aid veterans when applying for benefits, with specific emphasis on disability claims. 

This initiative needs to meet legislative requirements by giving veterans view access to their Individual Longitudinal Exposure Record (ILER) record, but it should not stop there. From a veteran’s experience perspective, the Veteran Experience Office (VEO), the Veteran Benefits Administration (VBA), and the Office of General Counsel (OGC) have recommended making [data points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/README.md#integrate-the-following-data-into-vagov) from veteran’s military records more accessible online with a focus on data used to apply for benefits. More specifically, VEO/VBA/OGC have arrived at a list of 8 key data elements found within veteran’s military records that, in this project, we are tasked with exposing. 

To start we should focus on **read only** access to those data elements and to ILER. As VBA/VHA/VEO/OGC/DoD progress their conversations around the legislation we can then shift focus to update access for ILER data (ie. Section 803). 

### What are the OCTO Objectives this work relates to? 
- O1: Increase the accessibility, reliability, and security of Veteran's digital services
- O2: Reduce the time it takes for Veterans to find, use, and receive VA Services


## Background Details 


### Legislative mandates

TL;DR -- in 2021, Congress mandated that veterans be able to view their ILER record. In 2022, as part of the PACT Act, Congress mandated that veterans be able to update this record.

- Congress enacted Section 9105 on January 1, 2021, in the National Defense Authorization Act (NDAA), to provide Veterans with read-only access to ILER.  
- Congress enacted Section 803 on August 10, 2022, as part of the PACT Act. Section 803(a) provides: “The Secretary of Veterans Affairs [VA] shall coordinate with the Secretary of Defense [DoD] to provide a means for Veterans to update their records as necessary to reflect exposures to occupational or environmental hazards by such member or Veteran in the [ILER].”
- Section 803(b)(1) provides that to update a record under subsection (a), a Veteran shall provide such evidence as VA considers necessary. Section 803(b)(2) requires VA to promulgate a regulation defining the “evidence considered necessary.”

### What is ILER?

[The Individual Longitudinal Exposure Record (ILER)](https://www.publichealth.va.gov/exposures/publications/military-exposures/meyh-1/ILER.asp)

ILER was created following a December 27, 2012, Health Executive Committee (HEC) Joint Incentive Fund Initiative (JIF) proposal, in which the Department of Defense (DoD) and Department of Veterans Affairs would create a complete record of every Service member’s occupational and environmental health exposure. ILER improves the efficiency and effectiveness in claims processing and decision-making by linking a Veteran to military exposures and/or deployments by integrating information from multiple DoD sources. **It is important to note that ILER is not an authoritative data source**, while there is an API for generating text/pdf exports of the data it may not be a fully comprehensive of all military history for a user. 

ILER is owned by DoD not the VA.

While the announcement linked above mentions ILER is not for individual use, in practice, veterans are gaining access to their ILER, oftentimes, by requesting from their physician who can generate a PDF form. 

#### Example of the data model 

<details>
     <summary>Details</summary>
<br>
     
- [**DHA ILER presentation from 2020**](https://www.dhaj7-cepo.com/sites/default/files/DHA_J7_CEPO_CCSS_Sept_S02.pdf)
     
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/129431463/8ed1c2f3-7154-4ccb-84e6-92b8a2750bd0)

</details> 

### Can we give veterans access to ILER? Are we integrating ILER into the profile?

Yes, we should be able to generate a copy of a veteran’s ILER records. According to VEO stakeholders, VA owns an API that can generate a PDF/text version of a veteran’s ILER record.  

While Congress has mandated read and update access to ILER, the document is complicated and, in most cases, the ILER document alone will not provide sufficient context to a veteran to allow them to interpret the data contained therein. We should not generate a full scale replica of ILER on VA.gov and will focus on granting read access. Once our stakeholders have determined how to progress with Section 803 we will work to incorporate the appropriate update process. 


### What are the shortcomings of granting read access to ILER?

VA leadership -- which includes Trisha Dang and Melissa Rebstock, among others -- have expressed concerns around the intelligibility of ILER data. These documents can run into hundreds of pages and interpreting the data within them isn’t a straightforward task. 

While granting veterans access to the ILER record is required by law, we can bolster the user experience by aiding veterans in their benefits application process by supplying them with key data/information from their military record. 

### How is this different than the DD214?

TL;DR -- ILER is a record of potential toxic exposure experienced in the service; DD214 is a discharge paper that proves a veteran's service. Veterans seem to be using both to support their benefits application process

To access many benefits veterans often need to provide service history data and adequate documentation to support their request. When a service member separates from their respective branch, they are given a copy of their DD214. This is a point-in-time snapshot at the moment of their separation. Many veterans lose this document or in some cases never received a copy and need to re-request. Currently in the profile we [link to support pages](https://va.gov/records/get-military-service-records/) detailing how to request a copy of one's DD214.

While [researching military information in early 2023, our findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#key-findings) demonstrated the importance this document carries not only in assisting veterans with the application process for benefits, but sometimes serving as a key document for proving their service. We know from our research are not able to memorize all the service history information they’d need to apply for many benefits, so they use the DD214 to piece together timelines. 

### Should we make the DD214 accessible online? 

Making the DD214 available online has been proposed and rejected due to the point-in-time nature of the document. A veteran’s DD214 reflects data at the point of separation from the respective branch of service; it would not be a comprehensive enough solution. [Although a veteran may not _need_ their DD214 it will often facilitate benefits applications](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/discovery-and-research/2023-military-info-discovery/findings-summary.md#though-they-may-not-need-their-dd214-in-all-cases-to-apply-for-va-benefits-having-a-copy-of-it-facilitates-the-benefit-application-process-and-helps-veterans-access-non-va-privileges-memberships-and-discounts), the focus, based on VEO’s guidance, should be on the 8 key data elements as those should reduce veteran reliance on their separation document. In other words, our focus shouldn’t be on the document per-se but the use case of the document. 

### Where does this leave us? 

We should use the DD214 and ILER as starting points for this project, but we should not fixate on them. Our current understanding is veterans are using data in these documents to help them in applying for benefits (claims). VEO in conjunction with OGC have highlighted 8 key data elements from the military record that we should expose. As part of this project, we will focus on how to organize those data elements in a way that makes the data most useful to veterans with special attention to how the data can be used when applying for benefits. It will be critical to consider any data elements that may be missing. 



### Where do we start?  
Expansion of the military information available on VA.gov will focus on the categories below:
- Integrating additional military data into VA.gov
- Linking to ILER Records
- Allowing for edits/updates to ILER records

#### Integrate the following data into VA.gov

The MVP datapoints VA leadership is interested in adding to the VA.gov profile include the following:

1. dates of, and branches of, service (already supported)
2. units with which the Veteran or Service member served
3. deployment locations and start and end dates of deployments
4. military occupational specialties
5. training courses
6. military awards and decorations


Additionally, the following data would eventually be required, but VA leadership is currently determining requirements around this. This would not be MVP.

1. non-military deployment data
2. a registry that verifies participation in a Toxic Exposure Risk Activity (TERA) memorandum

Per VBA’s analysis, this list is composed of elements that a Veteran will need the ability to view in order to verify a TERA, hazards or presumptions. VA and DoD anticipate Veterans and Service members will most often use ILER to verify their participation in a TERA or hazards to qualify for health care benefits or compensation benefits under PACT, or previously established presumptions for:
- radiation (38 CFR 3.309(d))
- herbicides (38 CFR 3.309(e))
- contaminated water at Camp LeJeune (38 CFR.3.309(f))
- ionizing radiation (38 CFR 3.311)
- Persian Gulf exposures (38 CFR 3.317)
- fine particulate matter (38 CFR 3.320). 

The military information page in the profile should provide read access to the data elements to aid a veteran in their application process. 

#### Link to ILER records

We can access a PDF version of someone's ILER record, so linking to this would suffice for MVP solution to Section 9105.

#### Allow people to update their ILER record

VA leadership is not clear on how exactly to make this possible and they’re still working with their DoD counterparts to satisfactorily answer the legislative imperative in Section 803. A lightweight MVP might be giving veterans a DoD number to call. Ideally, over time, we'd have a better option than that.

### MVP Slice
The scope of those three things is expansive. With that in mind we're using the 526EZ form to inform our initial focus to the items that will most likely assist veterans when completing the 526EZ. The 526EZ electronic form is expanding to incorporate additional questions. The military information we're adding to the Profile should help veterans when completing those questions. 

With that in mind we'll start by adding units, deployment locations/dates, and military occupation.

#### Disability claim (526EZ)

- [Paper form](https://www.vba.va.gov/pubs/forms/VBA-21-526EZ-ARE.pdf)
- [Form on VA.gov staging](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
  - Access with user 15 or 68

## Problem Statement

- As a Veteran, I want to see what information VA has about my military history, and to be able to correct it if it is inaccurate.
- As a Veteran, I want to know if I served in an area where I may have been subject to toxic exposure, as this might mean I am available for additional disability compensation under PACT Act.

## Product/Initiative Goals 

If we are thinking of the entire expanded military effort, the product goal is:

- To meet the congressional mandates around elevating toxic exposure data in a way that is holistic and matches veterans' mental models.

If we are thinking of this MVP portion of this effort, the product goal is:

- To holistically support the addition of toxic exposure fields into the 526.  

For the MVP, our work does this by:

- Making it easier for a 526 developer to incorporate these fields into prefill because we will have completed the original integration of this data into `vets-api`.
- Giving this data a permanent place on [VA.gov](http://va.gov/), so veterans can easily review this information.



## User Outcomes

### Desired User Outcomes

#### Phase 1: Read Access
- Users should be able to access the 8 key data elements of their military record from the VA.gov profile so they can apply for benefits 
- Lost DD214s should be less worrisome for veterans and the urgency of locating military information when applying for benefits will be reduced as the data will always be available in the profile. 
- expanded military information in the VA.gov Profile would be accessible to pre-fill forms on other parts of the VA.gov website


#### Phase 2: Edit Access
- Edits to the source data for ILER should be placed in the hands of veterans and proper documentation for the edits should be captured  



### Undesired User Outcomes
- Nobody uses this or knows to look for this information

## Business Outcomes

### Desired Business Outcomes

-   Providing Veteran’s with a link to their ILER record will help us meet the letter of the law on the legislative requirements outlined above.
-  Veteran records will be more accurate if Veterans are able to at a minimum see what the VA has in their systems. Eventually with phase II the hope is they'll be able to update their information or at least initiate some sort of corrective process. If veterans are able to update their information, this would reduce errors in their records.
- The benefit application process will be more efficient as pre-fill will reduce time spent completing forms.

### Undesired Business Outcomes

Given the complexity of the data contained in ILER, it’s not an efficient use of resources to display a copy of each veteran’s ILER data without also adding in additional context. This would be technically challenging and time consuming given the magnitude of variations in veterans records and experiences. 

We don’t want to spend time and resources developing highly complex support structures around the ILER documentation and instead should focus energy on supplying data that would help veterans gain access to benefits under the PACT act 


## Proposed Solution

### Phase 1: Read Access 
This is focused on read access to two things, 1)  ILER and 2) military record data
- Give Veterans access to a PDF version of their ILER report
- Get veterans read access to as many of the key data elements as possible (currently 6 of 8)

### Phase 2:  Read Access (continued)
Finalize read access by adding in the non-mvp data elements (this is dependent on our stakeholders more concretely defining the scope of these two elements) 
- Get veterans read access to the final two data elements 

### Phase 3: Edit Access 

This is highly dependent on DoD/VBA conversations around Section 803 and is not ready to be worked on. 

We'll support some kind of edit access/process (ideas that are not finalized by the working group: link to respective DoD military record corrections website, create a VA process that electronically delivers a military record correction request to the respective branch of the DoD, update the data through some process where “VA to promulgate a regulation defining the ‘evidence considered necessary.’”) 


## Measuring Success

- [Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986) 

### Objective #1: 

(Leave blank for now)

**When filling in data -- update dates to be 1 month pre-launch, one month post launch (to 100%), and the second month post-launch (to 100%) based on actual launch dates.**


|KPI/metric|Baseline: 1 month pre-launch [add dates]|1 month post-launch to 100% [add dates]| 2 months post-launch to 100% [add dates]|
|----------|-------------|---------------|-------------------|
|||||


## Key deliverables / artifacts

(This is just a starting list. Feel free to add whatever is relevant here.)

- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64861)
- [Mural refinement ](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695126310753/6ab8c3953d2eeaa067f666d5a03a754c5ded3d82?sender=uaa72d11015d3f7c704a64191)
- [Google Doc Project Outline](https://docs.google.com/document/d/1aiw0drerrscjmgDtRLEaLlwvl58ZvLSdKcE_K0XGLsE/edit)
- [sensitive repo directory (contains stakeholder artifacts)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/military_info/2023-enhanced-military-information)
- QA Plan
- Release plan

## Key dates

- September 2023: Initial discussions; project kickoff
- September-October 2023: Discovery
- October 2023: Started collaborating with the 526 team; Decided on our MVP approach; Produced initial designs
- November-December 2023: Build

## Key decisions
|Date|Decisions|Reason|Impacts|
|---|---|---|---|
|||||
|||||
|||||

## Design

[Profile military information Sketch files](https://sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775)
   
### Before

<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/profile-military-information-sept-2023.png" width="375" alt="screenshot of profile military information section" />

### After


## Frontend












