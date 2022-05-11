# DEVELOPMENT PROCESS

## IDENTIFY FEATURES, TECH DEBT, AND BUGS

- Features
    - PO creates an Epic for a feature in the "Product Backlog" ZenHub pipeline 
    - PO creates initial user stories for a feature    
    - Team creates additional user stories as needed
- Tech Debt
    - Engineers create tech debt work items in the "Product Backlog" ZenHub pipeline and adds to this Epic: [Tech/Design Debt](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/27217)
- Bugs
    - Anyone can create a bug in the "Product Backlog" ZenHub pipeline and attaches it to one of these Epics
        - If bug is for a feature already in production, attach to this Epic [Ongoing Engineering Support for VISN Rollout](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/38980)
        - If bug is for a feature not yet in production, attach to the feature Epic 

## REFINE WORK ITEMS

- R&D
    - R&D meets with PO to refine research and design work items for a feature or for the research roadmap
    - R&D discusses and points stories
    - PO assigns points to tickets and moves them to the "Ready for Development" ZenHub pipeline
    - All participate in prioritization of stories
- Engineering
    - Engineers meet with PO to refine feature & tech debt work items and bugs
    - Engineers discuss and point stories
    - PO assigns points to tickets and moves them to the "Ready for Development" ZenHub pipeline
    - All participate in prioritization of stories

## DEVELOP FEATURES

- Sprint Planning
    - Team decides on Sprint capacity 
    - Team & PO move tickets to the "Current Sprint" ZenHub pipeline as their Sprint commitment
    - Tickets that are identified as needing to be worked in the current sprint after Sprint Planning has occurred should be discussed with and approved by the Product Owner 
- UX
    - UX researcher/designer moves tickets to "In Progress" ZenHub pipeline when work is started
    - Researchers perform research studies as needed to support feature development
    - Designers create wireframes and prototypes to support feature development
- Engineering
    - Engineers move tickets to "In Progress" ZenHub pipeline when work is started
    - Engineers provide rollout and maintenance support for released features
    - Frontend and backend engineers work together to develop new features

## RELEASE FEATURES

- UX
    - UX moves tickets to "Validate" ZenHub pipeline when tickets meet definition of done
        - [UX DoD & DoR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/UXDoRDoD.md)
    - UX closes tickets when they have been validated
- Engineering
    - Engineers move tickets to "Validate" ZenHub pipeline when tickets meet definition of done
        - [Engineering DoD & DoR](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/EngDoRDoD.md)
    - Engineers must add the Epic/feature to the [Planned Releases list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-prod-validation.md)
        - Item must remain on the Planned Releases list for at least 15 days before it can be released to production
    - Engineers must notify the PO when they add an item to the Planned Releases list so that they can notify the necessary parties
    - Engineers close tickets when the code 
       - Has been on the Planned Releases list for at least 15 days
       - Has been deployed to production 
       - Has its feature flag, if any, turned ON
       - Has been prod validated, if necessary   
