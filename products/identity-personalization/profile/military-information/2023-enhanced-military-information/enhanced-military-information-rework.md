# Initiative Brief 

`DRAFT`

**Last Updated: 11/2/2023**


## Table of Contents 

## Communications

- **Github labels**: authenticated-experience, military-info
- **Slack channel**: [#accountexp-authexp](https://dsva.slack.com/channels/accountexp-authexp)

## Roles

### OCTO team

[This is managed by the VA.gov profile team](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md#roles).

#### Partners

|Name|Role|
|----|----|
| Melissa Rebstock |Branch Chief, Digital Experience/VEO|
| Trish Dang |Deputy Director within VBA/VACO| 

## Overview

This initiative will be comprised of several phases. When considering the entirety of this effort, our goal is to meet the congressional mandates around elevating toxic exposure data in a way that is holistic and matches veterans' mental models.

Expansion of the military information available on VA.gov will focus on the categories below:
- Integrating additional military data into VA.gov
- Linking to ILER Records
- Allowing for edits/updates to ILER records

<details>
<summary>MOVE THIS TO THE RESPECTIVE PHASES</summary>
  
### Integrate the following data into VA.gov

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

### Link to ILER records

We can access a PDF version of someone's ILER record, so linking to this would suffice for MVP solution to Section 9105.

### Allow people to update their ILER record

VA leadership is not clear on how exactly to make this possible and they’re still working with their DoD counterparts to satisfactorily answer the legislative imperative in Section 803. A lightweight MVP might be giving veterans a DoD number to call. Ideally, over time, we'd have a better option than that.

</details>

## MVP 
The scope of those three things is expansive. With that in mind we're using the 526EZ form to inform our initial focus to the items that will most likely assist veterans when completing the 526EZ. 

The 526EZ electronic form is expanding to incorporate additional questions related to toxic exposure. When answering those questions, it's helpful for veterans to have military information on-hand. We're adding adding _units, deployment locations/dates, and military occupation_ which aligns with the questions within the form. 

<details>
<summary>MOVE THIS TO THE RESPECTIVE PHASE</summary>

  ### Disability claim (526EZ)

- [Paper form](https://www.vba.va.gov/pubs/forms/VBA-21-526EZ-ARE.pdf)
- [Form on VA.gov staging](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
  - Access with user 15 or 68

</details>

## Problem Statement

We know veterans use various documents to piece together their military history when applying for benefits. Many use a copy of their DD214, but not all data required is available. Some use a PDF printout of their ILER record. Again, this isn't without issues as the data can be confusing and isn't organized in teh b

- As a Veteran, I want to see what information VA has about my military history, and to be able to correct it if it is inaccurate.
- As a Veteran, I want to know if I served in an area where I may have been subject to toxic exposure, as this might mean I am available for additional disability compensation under PACT Act.


## Product Goals

### Overall 
If we are thinking of the entire expanded military effort, the product goal is:

To meet the congressional mandates around elevating toxic exposure data in a way that is holistic and matches veterans' mental models.

### MVP 
If we are thinking of this MVP portion of this effort, the product goal is:

To holistically support the addition of toxic exposure fields into the 526.
For the MVP, our work does this by:

Making it easier for a 526 developer to incorporate these fields into prefill because we will have completed the original integration of this data into vets-api.
Giving this data a permanent place on VA.gov, so veterans can easily review this information.



## Proposed Solution/Phases

[insert a chart here and link off to each phase]

|Phase|Short Description (w/link)|Details|
|:-:|---|---|
|1 / MVP|Read Access for 526EZ Data Elements||
|2 |Read Access for Additional Data Elements||
|3 |ILER Read Access||
|4 |ILER Edit/Update Flow|Thinking of this as not updating ILER but a link to a form for initiating an DoD data correction|


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
   
