# DEVELOPMENT PROCESSES

## IDENTIFY FEATURES, RESEARCH, TECH DEBT, AND BUGS

- Features
    - PO, based on input from the research and/or stakeholders, creates an Epic for a feature in the "Product Backlog" ZenHub pipeline 
    - PO creates initial user stories for a feature   
    - PO adds feature to the [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-prod-validation.md) with an Estimated Release Date of TBD
    - Team creates additional user stories as needed
- Research
    - UX and/or PO adds user stories for research activities
- Tech Debt
    - Engineers create tech debt work items in the "Product Backlog" ZenHub pipeline and attaches to Epic [Tech/Design Debt](https://app.zenhub.com/workspaces/check-in-experience-61fc23a2cb8a14001132e102/issues/department-of-veterans-affairs/va.gov-team/27217)
- Bugs
    - Anyone can create a bug in the "Product Backlog" ZenHub pipeline and attach it to one of these Epics
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

## PERFORM RESEARCH

- Identify research study needs and type
- Develop research plan
- Develop conversation guide
- Schedule the study
- Execute the study
- Synthesize findings
- Create study report & presentation
- Present the study to
   - Team, Stephen, Patrick
   - Platform (logistics of research)
   - OVAC

## DEVELOP FEATURES, TECH DEBT, OR BUGS

- Process for each feature, tech debt, or bug
    - **STEP 1: UX develops wireframes (template = check-in-experience-wireframe-task.md)**
        - Dependencies
            - None
        - Inputs
            - Research
            - Collaboration with Design System team
            - Collaboration with Accessibility team
            - Collaboration with Platform team
            - Collaboration with Danielle
        - Outputs
            - Finalized wireframes
            - Content in English
    - **STEP 2: PO publishes pre-release notes w/ wireframes for Contact Center & Training to see upcoming features** 
        - Dependencies
            - STEP 1
            - NOTE: we should wait until we are ready to begin development work to publish the pre-release notes
        - Inputs
            - Finalized wireframes
            - Content in English
        - Outputs
            - Published pre-release notes w/ wireframes attached
            - Notification of planned release in [Channel](https://dsva.slack.com/archives/C022AC2STBM), with callouts to
                -  Patrick & Stephen
                -  Shawn Adams (Training)
                -  Jason Woodman (Contact Center)
                -  Comms????????
    - **STEP 3: UX sends content to the State Department to get translated (template = check-in-experience-translation-task.md)**
        - Dependencies
            - STEP 1
        - Inputs
            - Finalized wireframes
            - Content in English
            - Collaboration with Danielle
        - Outputs
            - Translated content
                - NOTE: translated content must go through internal VA QA process??????
    - **STEP 4: UX prepares updates to release artifacts (template = check-in-experience-prod-artifacts-task.md)**
        - Dependencies
            - STEP 1
        - Inputs
            - Finalized wireframes
            - Content in English
        - Outputs
            - Updated product release artifacts
                - NOTE: artifacts should not be made available until feature released to production
    - **STEP 5: Engineering develops Feature, Tech Debt, or Bug**
        - Dependencies
            - STEP 1
        - Inputs
            - Finalized wireframes
            - Content in English
            - Collaboration with Platform team
            - Translated content 
                - **NOTE: This will come later, _"Full translation coming soon"_ message should be displayed on the page until all translated content is in production for that page**
        - Outputs
            - Validated feature
                - NOTE: feature should not be released to production until it has
                    - Been validated with design and/or PO
                    - Been validated with Stephen & Patrick
                    - Been listed on the Planned Releases page for at least 15 days
    - **STEP 6: Release Feature, Tech Debt, or Bug**
        - Dependencies
            - STEPS 1, 2, 4, 5 (STEP 3 not necessary to release)
        - Inputs
            - Production-ready feature, tech debt, or bug
                - Validated with design and/or PO
                - Validated with Stephen & Patrick
                - Pre-release notes published
        - Outputs
            -  Feature, tech debt, or bug released to production
            -  Release artifacts available in production
                -  Product Guides, poster, etc.
            -  New entry in Release Notes for the feauture
            -  Removal of feature row from the [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-prod-validation.md)
            -  Notification of release in [Channel](https://dsva.slack.com/archives/C022AC2STBM), with callouts to
                -  Patrick & Stephen
                -  Shawn Adams (Training)
                -  Jason Woodman (Contact Center)
                -  Comms????????
- Sprint Planning
    - Team decides on Sprint capacity 
    - PO move tickets to the "Current Sprint" ZenHub pipeline for the team's Sprint commitment
    - Tickets that are identified as needing to be worked in the current sprint after Sprint Planning has occurred should be discussed with and approved by the Product Owner and accepted or rejected into the Sprint by the team
- UX
    - UX researcher/designer moves tickets to "In Progress" ZenHub pipeline when work is started
    - Researchers perform research studies as needed to support feature development
    - Designers create wireframes and prototypes to support feature development
    - UX moves tickets to "Validate" ZenHub pipeline when tickets meet the acceptance criteria and are ready to be validated
    - UX closes tickets when they have been validated and meet the [Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/UXDoRDoD.md)
- Engineering
    - Engineers move tickets to "In Progress" ZenHub pipeline when work is started
    - Engineers provide rollout and maintenance support for released features
    - Frontend and backend engineers work together to develop new features
    - Engineers move tickets to "Validate" ZenHub pipeline when tickets meet the acceptance criteria and are ready to be validated
    - Engineers close tickets when the code 
       - Meets the [Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/EngDoRDoD.md)
       - Has been deployed to production 
       - Has its feature flag, if any, turned ON
       - **Has been prod validated, if necessary**



    
