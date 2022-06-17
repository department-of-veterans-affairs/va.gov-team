# Team Development Processes

## Stand Up / Daily Scrum
- Team Member will
    - Raise your virtual hand when you enter Stand up and take it down after you have given your update
    - Answer the following questions
        - What is your Balance score?
        - What you did yesterday?
        - What you did today?
        - Do you have any blockers?
    - Discuss who is responsible for reviewing any tickets that need validation and a timeframe for completion

## Refinement 
- Team will 
    - Answer the following questions for each Epic/Ticket
        - How will we release the work for this Epic/Ticket? 
            - Scheduled & Coordinated - will we use a Feature Flag or Feature Branch? 
            - Upon Completion & Approval
        - Is this in the Planned Releases list yet or does it not need to be?
            - Pick a release date that is at least 2 weeks from the day it is added to the Planned Releases list            
    - Ensure these tickets are created and added to an Epic using the referenced templates
        - [check-in-experience-translation-task](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/check-in-experience-translation-task.md)
            - Used for generating and submitting a json file of content to be translated to the State Department
        - [check-in-experience-prod-artifacts-task](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/check-in-experience-prod-artifacts-task.md)
            - Used for updating the product guides, posters, etc.
        - [check-in-experience-prod-release](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/check-in-experience-prod-release.md)
            - Used for coordinating a production release between UX, Design, & Product
        - NOTE: some of these may not always be needed for every Epic
- For each Ticket
    - Questions to answer & document in the ticket
        - Is the Ticket part of an Epic and do we understand whether it is part of a Feature Flag or Feature Branch?
        - Who needs to validate the ticket?
        - Will we need a release note?
    - Discuss and modify AC if needed
    - Point the ticket
- For each bug or tech debt item
    - Questions to answer & document in the ticket
        - Will we need a release note?
    - Discuss and modify AC if needed
    - Point the ticket
 
 ## Planning
 - Epics 
    - Product will 
        - Add an Epic to the [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-planned-releases.md) list as soon as it enters our Product Backlog
        - Create pre-release notes for each item in the Planned Releases list
        - Include a release date or range with each Planned Release item (can be TBD)
        - Update the estimated release date in Planned Releases when one has been agreed upon by the Team
        - Notify Training, Contact Center, & Comms of updates to Planned Releases            
    - Team will 
        - Determine an estimated release date that is at least 2 weeks from the date it was decided         
- Tech debt & Bugs
    - Product will
        - **NOT** put Tech Debt & Bug items on the Planned Releases list   
- Team estimates capacity for next Sprint
- Team plans the next Sprint by pulling in tickets that are development-ready
 
 ## Validating
- Upon completion of a ticket (i.e. no more changes are expected and PR is done)
    - Ticket owner will
        - Move the ticket to the Validate column                 
        - Attach at least 1 of the following to the ticket 
            - For wireframes
                - Screenshots
                - Links to section in Abstract
            - For research
                - Links to files
            - For development
                - Screenshots of completed work 
                - Link to Review Environment
                - Link to video demonstrating the feature
                - Do a quick Zoom call
        - Notify approvers in the UX or Engineering channels that the ticket is ready to be validated
        - Close the ticket once all reviews have been completed
    - Reviewer will
        - Add a comment to the ticket when their review is complete
        - Post in the thread that their review is complete

## Releasing
- Epics 
    - Team will 
        - Coordinate the release using the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel
            - Changes to product guides et. al. (UX)
            - Merging of code or flipping of feature flag (Engineering)
            - Updating of release notes (Product)
            - Notification of Training & Contact Center et. al. (Product)
            - Closing of all tickets & the Epic (Engineering & Product)
        - Choose a release date that is at least 2 weeks from the date it was decided 
    - Product will 
        - Post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page and to the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel for review by Engineering
        - Remove the Epic from the Planned Releases list 
        - Notify Training & Contact Center et. al. of the release (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases))
- Tech debt & Bugs & stand-alone tickets that are pushed as soon as approved  
    - Engineering will 
        - Post a notice in the check-in-release-planning channel on the day an item has been merged and is expected to go to production
    - Product will 
        - Create a release note, if needed, and post it after 3 pm when the item gets pushed to production 
        - Post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page and to the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel for review by Engineering
        - Notify Training & Contact Center et. al. of the release (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases))


## Notifications of Releases & Updates to Planned Releases
- The following people will be notified when there are updates to the [Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-planned-releases.md) page or the team releases to Production
    -   [CIE channel](https://dsva.slack.com/archives/C022AC2STBM) - Patrick Bateman, Stephen Barrs, Shawn Adams, Jason Woodman
    -   VA email - Patrick Bateman, Stephen Barrs, Shawn Adams, Jason Woodman, Dore Mobley


![CIE Development Process - BPMN process flow (1)](https://user-images.githubusercontent.com/86678742/174146999-201947c6-33b6-4564-bb64-a1bce22631df.jpeg)



