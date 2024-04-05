# Initiative outline: Enhanced Military Information

**Last Updated: 2/1/24** Added specifics of the original request


## Table of Contents 

- [Communications](#communications)
- [Roles](#roles)
- [Overview](#overview)
- [MVP](#mvp)
- [Problem Statement](#problem-statement)
- [Product Goals](#product-goals)
- [Proposed Solutions/Phases](#proposed-solutionphases)
- [Measuring Success](#measuring-success)
- [Key Deliverables](#key-deliverables--artifacts)
- [Key Dates](#key-dates)
- [Design](#design)

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

The VA.gov profile team has been asked to enhance the military history section of the profile to aid veterans when applying for benefits, with specific emphasis on disability claims. 

This initiative needs to meet legislative requirements by giving veterans view access to their Individual Longitudinal Exposure Record (ILER) record, but it should not stop there. From a veteran’s experience perspective, the Veteran Experience Office (VEO), the Veteran Benefits Administration (VBA), and the Office of General Counsel (OGC) have recommended making [data points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/README.md#integrate-the-following-data-into-vagov) from veteran’s military records more accessible online with a focus on data used to apply for benefits. More specifically, VEO/VBA/OGC have arrived at a list of 8 key data elements found within veteran’s military records that, in this project, we are tasked with exposing. 


This initiative will be comprised of several phases. To start we should focus on **read only** access to those data elements and to ILER. As VBA/VHA/VEO/OGC/DoD progress their conversations around the legislation we can then shift focus to update access for ILER data (ie. Section 803). 

Expansion of the military information available on VA.gov will focus on the three categories below:
- Integrating additional military data into VA.gov
- Linking to ILER Records
- Allowing for edits/updates to ILER records

### Original request

These are the details of the original request from Trish Dang and Melissa Rebstock, on behalf of the VA/DoD folks who are working to figure out how we can meet the letter of the law with PACT Act requirements:

1. Expose the following additional data points on VA.gov: 
  - Dates of deployment and branch(es) of service (note: we already show this)
  - Units with which the veteran served
  - Deployment locations, and start/end dates
  - Military occupational specialties
  - Training courses
  - Military awards and decorations
2. Link to a PDF copy of someone's ILER record.
3. Provide guidance on how to update the record if it is incomplete. The exact flow for this is still being determined, but MVP is likely providing a number for folks to call.
Over time, we can work to expand/improve this experience, but this should meet legal requirements so VA is in compliance with the congressional mandates set forth in the 2019 NDAA and PACT Act.

## MVP 
The scope of those three things is expansive. With that in mind we're using the 526EZ form to inform our initial focus to the items that will most likely assist veterans when completing the 526EZ. 

The 526EZ electronic form is expanding to incorporate additional questions related to toxic exposure. When answering those questions, it's helpful for veterans to have military information on-hand. We're adding adding _units, deployment locations/dates, and military occupation_ which aligns with the questions within the form. 


## Problem Statement

We know veterans use various documents to piece together their military history when applying for benefits. Many use a copy of their DD214, but not all data required is available. Some use a PDF printout of their ILER record. Again, this isn't without issues as the data can be confusing and isn't organized in teh b

- As a Veteran, I want to see what information VA has about my military history, and to be able to correct it if it is inaccurate.
- As a Veteran, I want to know if I served in an area where I may have been subject to toxic exposure, as this might mean I am available for additional disability compensation under PACT Act.


## Product Goals

### Overall 
If we are thinking of the entire expanded military effort, the product goal is:

To meet the congressional mandates around elevating toxic exposure data in a way that is holistic and matches veterans' mental models.


## Proposed Solution/Phases

|Phase|Short Description (w/link)|Details|
|:-:|---|---|
|1 / MVP|[Read Access for 526EZ Data Elements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/enhanced-military-info-mvp.md)||
|2 |[Read Access for Additional Data Elements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/enhanced-military-info-additional-read-access.md)||
|3 |[ILER Read Access](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/enhanced-military-info-iler-read-access.md)||
|4 |[ILER Edit/Update Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/military-information/2023-enhanced-military-information/enahnced-military-info-iler-edit.md)|Thinking of this as not updating ILER but a link to a form for initiating an DoD data correction|


## Measuring Success

- [Profile Domo dashboard](https://va-gov.domo.com/page/1834995012?userId=66061986) 

### Objective #1: 

(Leave blank for now)

**When filling in data -- update dates to be 1 month pre-launch, one month post launch (to 100%), and the second month post-launch (to 100%) based on actual launch dates.**


|KPI/metric|Baseline: 1 month pre-launch [add dates]|1 month post-launch to 100% [add dates]| 2 months post-launch to 100% [add dates]|
|----------|-------------|---------------|-------------------|
|||||


## Key deliverables / artifacts

- [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/64861)
- [Mural refinement ](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1695126310753/6ab8c3953d2eeaa067f666d5a03a754c5ded3d82?sender=uaa72d11015d3f7c704a64191)
- [sensitive repo directory (contains stakeholder artifacts)](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/products/identity-personalization/profile/military_info/2023-enhanced-military-information)


## Key dates

- September 2023: Initial discussions; project kickoff
- September-October 2023: Discovery
- October 2023: Started collaborating with the 526 team; Decided on our MVP approach; Produced initial designs
- November-December 2023: Build
- November 2023: Created phase specific project outline for MVP work


## Design

[Profile military information Figma files](https://www.figma.com/file/zb5ecY9yMnupiLjaH9UmSc/Profile---Military-Information?type=design&node-id=10%3A6355&mode=design&t=ITOJ8kb0R5q1NIdj-1)
   
