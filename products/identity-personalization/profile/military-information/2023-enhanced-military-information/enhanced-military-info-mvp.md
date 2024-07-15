# MVP - Enhanced Military Information 

**Last Updated: 12/6/2023** updated the data elements

`WIP`

## [Initiative Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/README.md)

## Table of Contents 

- [Overview](#overview)
- [MVP Goal](#mvp-goal)
     - [MVP Data Elements](#mvp-data-elements)
          - [Disability claim form (526EZ)](#disability-claim-526ez)
- [Outcomes](#outcomes)
- [Measuring Success](#measuring-success)
- [Key deliverables / artifacts](#key-deliverables--artifacts)
- [Key dates](#key-dates)
- [Key decisions](#key-decisions)
- [Design](#design)


## Overview
We've been tasked with expanding the military information that is available to veterans in their VA.gov Profile. We're using the 526EZ form to direct our focus to items that will assist veterans when completing the 526EZ. 

The 526EZ electronic form is expanding to incorporate additional questions related to toxic exposure. When answering those questions, it's helpful for veterans to have some military information on-hand. We're adding adding _units, deployment locations/dates, and military occupation_ which aligns with the questions within the form. 

## MVP Goal

The MVP goal is:

- To holistically support the addition of toxic exposure fields into the 526.  

For the MVP, our work does this by:

- Making it easier for a 526 developer to incorporate these fields into prefill because we will have completed the original integration of this data into `vets-api`.
- Giving this data a permanent place on [VA.gov](http://va.gov/), so veterans can easily review this information.


### MVP Data Elements 

The MVP data points we're focusing on are tightly linked with the 526EZ application process. See the initiative outline for the larger list of data elements that will eventually be incorporated. 

1. dates of, and branches of, service (already supported) - incorporating active vs. inactive duty 
2. ~units with which the Veteran or Service member served~ [the data quality simply isn't there given call on 12/6](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/meeting-notes/2023-12-06-data-sync.md)
3. deployment locations and start and end dates of deployments
4. military occupational specialties

#### Disability claim form (526EZ)
The online version of this form is being refreshed to match the paper version which asks additional questions around military information. With that in mind we're using this form to help prioritize the addition of data elements into the Profile that align with this form/application process. 

- [Paper form](https://www.vba.va.gov/pubs/forms/VBA-21-526EZ-ARE.pdf)
- [Form on VA.gov staging](https://staging.va.gov/disability/file-disability-claim-form-21-526ez/introduction)
  - Access with user 15 or 68


## Outcomes 
### Desired User Outcomes 
- Users should be able to access additional data elements from their military record from the VA.gov profile so they can apply for benefits
- Lost DD214s should be less worrisome for veterans and the urgency of locating military information when applying for benefits will be reduced as the data will always be available in the profile.
- Expanded military information in the VA.gov Profile would be accessible to pre-fill forms on other parts of the VA.gov website
  
### Undesired User Outcomes 
- Nobody uses this or knows to look for this information

### Desired Business Outcomes
- Veteran 526 submissions will be more accurate if Veterans are able to at a minimum see what the VA has in their systems.
  
### Undesired Business Outcomes
- veterans see incorrect data and do not have a way to update it on va.gov resulting in increased call volume

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
- [Mural for initial refinement](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695126310753/6ab8c3953d2eeaa067f666d5a03a754c5ded3d82?sender=uaa72d11015d3f7c704a64191)
- [Google Doc Project Outline](https://docs.google.com/document/d/1aiw0drerrscjmgDtRLEaLlwvl58ZvLSdKcE_K0XGLsE/edit)
- [sensitive repo directory (contains stakeholder artifacts)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/military_info/2023-enhanced-military-information)


## Key dates

- September 2023: Initial discussions; project kickoff
- September-October 2023: Discovery
- October 2023: Started collaborating with the 526 team; Decided on our MVP approach; Produced initial designs
- November-December 2023: research prep


## Key decisions
|Date|Decisions|Reason|Impacts|
|---|---|---|---|
|||||
|||||
|||||

## Design

- [Profile military information Sketch files](https://sketch.com/s/fc96664a-1c62-40ed-9fcd-90218c54e775)
- [mural for sensemaking / initial lo-fi mocks](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697125319596/c13810c02c96a58a4b6b72288c6b9a8d617f711a?sender=uaa72d11015d3f7c704a64191)

### Before

<details>
  <summary>Before Image</summary>
  
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/images/profile-military-information-sept-2023.png" width="375" alt="screenshot of profile military information section" />

</details>

### After
