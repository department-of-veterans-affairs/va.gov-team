# Aligning CMS to VSP Tools and Processes

## Context
The VA.gov CMS is the primary means by which the modernized VA.gov initiative will get extended to hundreds of business units within VA, including 2000+ facilities, dozens of offices, and other programs and initiatives.

The CMS team will increasingly function as a platform team that onboards dozens of new VFS products, while continuing to support and improve the CMS product itself (editorial experience, governance structures, Content API, etc).

In the former function, it is important the CMS team integrate into VSP tools and processes to streamline new Product development for the enterprise. 

## Goals
 - Create clear channels of communication between the VSP and CMS teams to make VFS community support more effective
 - Provide VFS teams with clear documentation and a process that accounts for CMS as part of the VA.gov Platform
 - Coordinate team objectives to ensure DEPO's highest priorities for the Platform can be met

## Purpose
The purpose of this document is to outline documentation to be added/updated, as well as suggested process modifications to achieve these goals.

## Onboarding Process
- Include CMS PM and Delivery Manager in PM Onboarding meetings for introductions, roles and responsibilities
- Update [Welcome to VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/onboarding/Welcome%20to%20VSP.md) with considerations for the CMS [outlined here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/cms/working-with-cms-team.md).
- Also consider: inclusion of Drupal Engineers in your product team, and guidelines for contributing code to Drupal, versus a process for the CMS team engineers joining product teams on a temporary basis to achieve objectives/features.

## Incident Response
- Update [incident reponse playbook](https://github.com/department-of-veterans-affairs/devops/blob/master/docs/Incident%20Response%20Playbook.md), especially for content-related incicdents such as broken links. 

## Quarterly Planning
- Work with DEPO, VSP, and CMS team leadership to identify the best way to align OKRs across the entire Platform group.

## Communication
- Slack
  - Current integration discussion channels:   
    - '#cms-support'
    - '#vfs-platform-support'
    - '#vfs-all-teams'
    - '#vsa-facilities'
    - '#vsa-public-websites'
    - '#vsa-vamc-upgrade'
    - '#platform-cms-fe-superteam'
   - What other channels should we be included in? 
- Platform leadership meeting (Scrum of Scrums?)
  - Setup cadence to track cross-team status and dependencies
  
## Platform Recommended Next Steps

Overall, the Veteran Services Platform (VSP) team believes the current priority areas for collaboration between the VSP teams and the new CMS team should prioritize
* Documentation updates/revisions
* Orientation processes for Veteran Facing Serivces (VFS) teams
* Integration into Support processes, channels, etc.
To that end, we recommend the following
### Immediately important collab convos
These are things we should start collaborating on immediately, to prevent the most painful / riskiest user outcomes
* Content & IA, Public Websites, CMS: what is the flow of content reviews, and what are the responsibilities of each of these teams in that flow (I imagine it will differ for different user types)?  
(Andrea Hewitt will share review process artifacts for awareness)
* Kevin H + Jeff B: agree on “definition of done” of FE Tools CMS support
* Product Support, CMS: where to integrate CMS into Orientation flow 
* Service Design, CMS: integrate meta-data into NPS efforts to be able to segment appropriately for CMS needs / get CMS user feedback (James Chasia will share VFS customer journey current state)
* Service Design, FETools: Connect around research and current efforts on testing instances and pain points
* BE Tools, FE Tools, Ops, CMS: document desired triage flow for Drupal-related issues (how to learn of an issue, who’s responsible for the instrumentation to discover issues, etc)

### Collab convos to not forget about
These are not urgent enough to warrant VSP or CMS Teams context switching away from their current roadmap. But they’re important to consider in the medium-term (6 to 9 mos).
* SEO
* Developer documentation
* Incorporation of CMS into e2e testing (environments, review instances, etc)
* Content API questions and integration
* Product Health reporting on static page analytics (or other CMS-important data)
* CMS and Content Guide (design.va.gov) integration points
* How to keep CMS up to date on design system, IA specs, and other updates that they need to know about in order to keep CMS aligned

### Ideas CMS could choose to move forward on their own
Don’t necessarily require VSP collab, but will fit nicely into existing VSP ecosystem
* Plain language linting solution integration
* Contextual help for content guidelines in CMS (micro-copy / text) based on the design system guidelines at design.va.gov
* Identifying areas in Documentation that should be adjusted to account for CMS

### Points of Contact for above VSP teams 

* Content and IA: Megan Kelly
* Product Support: Andrea Hewitt
* Service Design: James Chasia
* FE Tools: Brandon Rapp
* BE Tools: Alex Pappas
* Operations: TJ Rice 
* Insights & Analytics: Joanne Esteban

