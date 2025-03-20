# Improve the VAMC editor experience (aka Dashboard) - WIP
> March 2025

Table of Contents

- [Description](#description)
- [Project Rationale](#project-rationale)
- [Desired outcomes](#desired-outcomes)
- [Project Scope and Scale](#project-scope-and-scale)
- [Not in Scope](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#not-in-scope)
- [Approach](#appraoch) 
- [Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#decisions)
- [Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/vet-centers/product-brief.md#measuring-success)
- [Assumptions and risk factors](#assumptions-and-risk-factors)
- [Dependencies](#dependencies)
- [Definition of Done](#definition-of-done)
- [Related Links](#related-links)

## Description

VAMC editors need easy access to the most common workflows and content types, bridge the gap between the content model and users' mental model, and allow editors to review key information across the healthcare system so they can see at a glance what might need to be updated (such as facility operating status and banner alerts, associated locations, and health services. 

### Project Rationale
The VAMC (VA Medical Center) website upgrade project was a VA digital modernization initiative to improve the digital experience for VA health facility pages on VA.gov. The release of these pages began with the soft launch of the new Pittsburgh health care in September 2019. As of December 2021, 138 VAMC systems were launched to full production. The final 2 unique healthcare "systems" went live in May 2023 (Lovell Federal Health) and October 2024 (Manila). Although a significant amount of research effort has gathered feedback from the Veteran perspective, we haven't revisited the editorial experience for some time. 

The Vet Center editorial experience includes a dashboard that was intended to support the less-experienced user base but also as a small experiment to inform a similar approach for VAMC editors. Unfortunately, competing priorities have prevented the prioritization of a VAMC version. Compared to Vet Center pages, VAMC sites are more robust with significantly more complicated editorial workflows and content interdependencies behind the scene. As a result, our VAMC editors express that it is difficult to find the content they need to edit, navigate the connections between nodes, and understand how (and where) their content will be rendered on the Veteran-facing page. 

**Evidence**
- [Q3 2024 Editorial survey findings](https://github.com/department-of-veterans-affairs/va.gov-team/tree/da76837d3ae21ba73f0eccf2c517392aacff96d0/platform/cms/research/Drupal-Editor%20Survey_2024)
- [Q4 2024 Editorial survey findings](TBD)
- [VAMC CMS Help Desk Data Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/research/2024%20VAMC%20CMS/Desk%20Research-%20Help%20desk%2C%20KB%2C%20CMS%20audit/VAMC%20CMS%20Help%20Desk%20Data%20Findings.md#vamc-cms-help-desk-findings)
- [VAMC upgrade listening sessions - January 2022](https://github.com/department-of-veterans-affairs/va.gov-team/blob/da76837d3ae21ba73f0eccf2c517392aacff96d0/platform/cms/research/VAMC%20listening%20sessions%20Jan%202022/VAMC%20upgrade%20listening%20sessions.pdf)
- [General Drupal CMS feedback expressed during Image Upload research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/da76837d3ae21ba73f0eccf2c517392aacff96d0/products/facilities/medical-centers/research/2024%20VAMC%20CMS/ImageUploader/PostStudy/Findings/Drupal%20CMS%20Image%20Upload%20Research%20Findings.md#cms-drupal-feedback)

## Desired outcomes

### Desired Veteran outcomes
- Veterans trust that the information about their health care facilities and its services and programs is accurate, complete, and up to date. 
- Veterans can interact with high quality news and information on their health care facility's website. 

### Desired editor outcomes
- Because VAMC editors have a single place to easily view a summary of their most important content
  - they are likely to find and address inaccuracies
  - critical communications using banner alerts and operating statuses are updated more quickly
- Because VAMC editors can quickly and easy find the content they need to update 
  - they are more likely to spend time creating and updating content, ultimately improving their communication with Veterans 
  - they are less likely to make errors or create duplicate or low quality content
  - they are more likely to create content which is aligned with content governance and the VA.gov style guide
  - more content gets thoroughly reviewed and updated, in compliance with 6102
 
### Desired Business Outcomes
- Facility websites and downstream systems have access to complete and accurate information about VA facility locations, hours of operation, and available services

## Project Scope and Scale
_What's in and what's out?_

### Primary problems to solve 
- Content views and organization aren't aligned with the VAMC user's task-based mindset.
- Complicated workflows make it hard to make some content changes efficiently 
  - Editors have difficulty navigating and remembering the hierarchical structure of related nodes in the Drupal CMS.
  - The editorial workflow for creating/editing system and facility health services is not entirely intuitive or efficient. 
  - Common workflows are complicated and frequently have invisible steps or an unclear order of operations.
- VAMC editors do not have visibility into content relationships or how system level content is used at the facility level 

Will include the following:

- A single place for editors to view the most important content about their facilities and services
- Easy task-based access into workflows for commonly created or edited common content
- Clear path for users to return to the main dashboard from content editing screens

### Not in scope
- Improvements to the general relationship between services at a system vs facility level
- Content previewing
- Improvements to the way content is presented on Veteran-facing pages
- Content IA

## Approach
- Identify the most common VAMC editorial tasks and workflows 
- Identify the editorial workflows and content types which create the greatest pain points for editors and are at greatest risk for errors
- Identify the most critical and meaningful content to make available at a glance 

### Decisions 

- [Link to decision log](TBD)

### Measuring success

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

### Assumptions and risk factors

### Definition of Done

### Related links
- [Vet Center Dashboard Usability Study Read Out](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/research/vet-center/Vet.Center.Dashboard.Usability.Study.Read.Out.pdf)
- [Original design mockup](https://xd.adobe.com/view/4837c11c-b5b4-4439-84d7-5867919f9c42-1d64/?fullscreen)
- [Original Dashboard Tech plan - November 2020]
