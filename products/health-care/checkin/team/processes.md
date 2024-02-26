# Team Development Processes

- [Stand Up / Daily Scrum](stand-up-/-daily-scrum)
- [Refinement](#refinement)
- [Planning](#planning)
- [Testing](#testing)
- [Validating](#validating)
- [Releasing](#releasing)  
- [VSignals](#vsignals)
- [Business Stakeholder Feedback](#business-stakeholder-feedback)
- [Notifications of Releases and Updates to Planned Releases](#notifications-of-releases-and-updates-to-planned-releases)

## Daily Huddle / Daily Scrum
- Team Member will
    - Raise your virtual hand when you enter the Daily Huddle and take it down after you have given your update
    - Answer the following questions
        - What is your Balance score?
        - What did you do yesterday towards our Sprint goals?
        - What are you doing today towards our Sprint goals?
        - Do you have any blockers?
    - Discuss who is responsible for reviewing any tickets that need validation and a timeframe for completion

## Refinement 
- Team will 
    - Answer & document in the Epic the following questions for each Epic /Ticket
        - How will we release the work for this Epic/Ticket? 
            - Scheduled & Coordinated - will we use a Feature Flag or Feature Branch? 
                - All Epics should be scheduled and coordinated
            - Upon Completion & Approval
                - Bugs not related to an Epic plus Tech Debt can be released upon completion & approval
        - Is this in the Planned Releases list yet or does it not need to be?
            - Pick a release date that is at least 2 weeks from the day it is added to the Planned Releases list    
        - Does this Epic need a release note?
   - Discuss and modify Acceptance Criteria, as necessary
   - Estimate/Point each Ticket (or apply a time box)
   - Understand the work that is necessary (high level) for each Ticket and how it is being released
   - Ensure tickets are created, as necessary, and added to each Epic based on what work is needed; the following GitHub templates are available to use as approrpirate
        - COLLAB CYCLE
            - check-in-experience-collab-cycle-caia.md
        - DESIGN
            - check-in-experience-discovery-feature-outline.md
            - check-in-experience-design-options-spike.md
            - check-in-experience-design-create-userflow.md
            - check-in-experience-design-create-lofi-wireframes.md
            - check-in-experience-design-create-content.md            
            - check-in-experience-design-create-final-wireframes.md
            - check-in-experience-design-create-prototype.md
        - DEVELOPMENT
            - check-in-experience-development-design-implementation.md
            - check-in-experience-development-risk-register.md
            - check-in-experience-development-create-task-tickets.md
            - check-in-experience-development-create-feature-flag.md
            - check-in-experience-development-backend.md            
            - check-in-experience-development-frontend.md
            - check-in-experience-testing-accessibility.md
            - check-in-experience-testing-create-test-cases.md
            - check-in-experience-testing-functional-FE.md
            - check-in-experience-testing-functional-product.md
            - check-in-experience-testing-functional.md
            - check-in-experience-testing-update-test-cases.md
            - check-in-experience-release-prod-testing.md
            - check-in-experience-release-to-production.md
            - check-in-experience-release-update-product-atifacts.md
            - check-in-experience-release-update-design-atifacts.md
            - check-in-experience-snow-ticket.md
        - METRICS
            - check-in-experience-metrics-decide.md    
            - check-in-experience-metrics-create.md
            - check-in-experience-metrics-vsignals.md           
            - check-in-experience-metrics-monitor.md
        - RESEARCH
            - check-in-experience-research-research-plan-task.md
            - check-in-experience-research-convo-guide-task.md
            - check-in-experience-research-interview.md
            - check-in-experience-research-conduct-study.md
            - check-in-experience-research-remote-study.md
            - check-in-experience-research-synthesis-task.md
            - check-in-experience-research-study-report-task.md
            - check-in-experience-resource-page-update.md    
        - TRANSLATIONS
            - check-in-experience-translations-submit-to-SD.md
            - check-in-experience-translations-add-content.md             
            - check-in-experience-translations-submit-workflows.md      
 
 ## Planning
 - Epics 
    - Product will 
        - Add an Epic to the [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-planned-releases.md) list as soon as it enters our Product Backlog
        - Create pre-release notes for each item in the Planned Releases list
        - Include a release date or range with each Planned Release item (can be TBD)
        - Update the estimated release date in Planned Releases when one has been agreed upon by the Team
        - Notify Training, Contact Center, & Comms of updates to Planned Releases (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases)) 
        - **NOT** put **Tech Debt & Bug** items on the Planned Releases list   
    - Team will 
        - Determine an estimated release date that is at least 2 weeks from the date it was decided for scheduled & coordinated releases      
        - Estimate team's capacity for the Sprint using the [Sprint Capacity Calculator](https://github.com/department-of-veterans-affairs/va.gov-team/files/9418761/VASprintCapacityCalculator.xlsx)
        - Pull tickets into the Sprint
        - Agree on the Sprint goals
        - Agree on the Sprint content
    - Product will assign the current sprint to each ticket in the Sprint
 
 ## Validating
- Upon completion of a ticket (i.e. no more changes are expected and PR is done)
    - Ticket owner will
        - Move the ticket to the Validate column                 
        - Attach at least 1 of the following to the ticket per ticket type
            - For design/wireframe tickets
                - Screenshots of wireframes
                - Links to section in Abstract with relevant wireframes
            - For content tickets (TBD)
                - Link to spreadsheet with content
                - Actual content
            - For research tickets
                - Links to relevant files
            - For development tickets
                - Screenshots of completed work 
                - Link to Review Environment
                - Link to video demonstrating the feature
                - Do a quick Zoom call
        - Notify approvers in the UX or Engineering channels that the ticket is ready to be validated
        - Close the ticket once all reviews have been completed
    - Reviewer will
        - Use appropriate test cases in TestRail to validate features
        - Add a comment to the ticket when their review is complete
        - Post in the thread, if there is one, that their review is complete

## Testing
- Manual Testing
    - Test new features
        - UX/Product creates test cases before development
        - Engineers will have access to test cases during development
        - Validators will use test cases to test new features
        - Midpoint/Staging review folks will use the test cases to understand how to test our application
    - Regression testing
        - Once per month, a team member will do test runs in staging for all test cases that apply to currently-released features
- Automated Testing
    - Engineers decide what needs a Cypress test

## Releasing
- Epics 
    - Team will 
        - Coordinate the release using the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel
            - Changes to product guides et. al. (UX)
            - Merging of code or flipping of feature flag (Engineering)
            - Updating of release notes (Product)
            - Merging wireframes to Abstract main branch & updating VA Sketch cloud (Design)
            - Notification of Training & Contact Center et. al. (Product)
            - Closing of all tickets & the Epic (Engineering & Product)
    - Product will 
        - Post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page and to the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel for review by Engineering
        - Remove the Epic from the Planned Releases list 
        - Notify Training, Contact Center, & Comms of the release (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases))
- Tech debt & Bugs & stand-alone tickets that are pushed as soon as approved  
    - Engineering will 
        - Post a notice in the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel on the day an item has been merged and is expected to go to production
    - Product will 
        - Create a release note, if needed, and post it after 3 pm when the item gets pushed to production 
        - Post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page and to the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel for review by Engineering
        - Notify Training, Contact Center, & Comms of the release (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases))

## VSignals
[Process for analyzing VSignal data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/VSignals/README.md)

## Business Stakeholder Feedback
- UX will generate 3 presentation links in VA Sketch Cloud for Business Stakeholders to access
    - Production Pre-Check-in wireframes for In Person appointments
    - Production Check-in wireframes for In Person appointments
    - Production Pre-Check-in wireframes for Telephone appointments
- Product will forward the 3 presentation links to the Business Stakeholders 
- When wireframes for a feature are finalized
    - Product will 
        - Set up a demo with Business Stakeholders (Business Stakeholders will be defined by Patrick/Stephen/Mark)
        - Record the demo & post a link to the recording on the Product page    
        - Document questions & feedback
    - UX will
        - Demo the finalized prototype 
        - Provide a link to the prototype    
        - Answer questions & take feedback        
    
## Notifications of Releases and Updates to Planned Releases
- Notification message for updates to Planned Releases
    - "Modernized Check-in team has updated their Planned Releases. <include info for new/updated Planned Releases>" (include the link to the [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-planned-releases.md) page)
- Notification message for production releases
    - "Modernized Check-in team released to production on <mm/dd/yyyy>. Release notes can be found here. <copy release notes here>"
        - Include link to [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md)
        - Link should be to the newest release title's anchor
- Notify the following people via Slack and email
    -   [check-in-releases](https://dsva.slack.com/archives/C03E5FEBTLH) channel 
            - Patrick Bateman
            - Stephen Barrs
            - Shawn Adams
            - Anita Middleton
            - Mark Dewey
    -   VA email  
            - Patrick Bateman
            - Stephen Barrs
            - Shawn Adams
            - Anita Middleton
            - Dore Mobley
            - Mark Dewey
            - erica.williams@va.gov 
            - angela.wilt@va.gov
            - Joanna.Warden@va.gov
            - Richard.Mastal@va.gov
            - Deborah.Dixon1@va.gov
            - Kelly.Giddens@va.gov.


## Diagram of Team Processes

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/86678742/1a092434-1989-4900-b709-f3345246ef83)


![CIE Development Process - BPMN process flow (1)](https://user-images.githubusercontent.com/86678742/174146999-201947c6-33b6-4564-bb64-a1bce22631df.jpeg)



