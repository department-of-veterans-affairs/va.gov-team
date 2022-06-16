# Team Development Processes

## Stand Up / Daily Scrum
- For each Team Member
    - Raise your virtual hand when you enter Stand up and take it down after you have given your update
    - Questions to answer
        - What is your Balance score?
        - What you did yesterday?
        - What you did today?
        - Do you have any blockers?
    - If any tickets in Validate column
        - Team Member mentions who is responsible for reviewing the ticket and discusses a timeframe for completion

## Refinement 
- For each Epic
    - Questions to answer & document in the ticket
        - How will we release the work for this Epic? 
            - Scheduled & Coordinated - will we use a Feature Flag or Feature Branch? 
            - Upon Completion & Approval
        - Is this in the Planned Releases list yet?
            - Pick a release date that is at least 2 weeks from the day it is added to the Planned Releases list            
    - Ensure these tickets are created and added to the Epic using the referenced templates
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
    - Product will add an Epic to the Planned Releases list as soon as it enters our Product Backlog
    - Product will create pre-release notes for each item in the Planned Releases list
    - Product will include a TBD release date or range with each Planned Release item
    - The Team will determine an estimated release date that is at least 2 weeks from the date it was decided 
        - Product will update the estimated release date in Planned Releases
        - Product will notify Training & Contact Center et. al. of the changes to the Planned Release list
- Tech debt & Bugs
    - Tech Debt & Bug items wll not appear on the Planned Releases list   
- Team estimates capacity for next Sprint
- Team plans the next Sprint by pulling in tickets that are development-ready
 
 ## Validating
- Upon completion of a ticket (i.e. no more changes are expected and PR is done)
    - Ticket owner moves the ticket to the Validate column                 
    - Ticket owner attaches at least 1 of the following to the ticket 
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
    - Ticket owner calls out in the approvers in the UX or Engineering channels
        - Reviewer posts approval in the ticket comment & responds to slack post  
- Upon completion of validation
    - Ticket owner closes the ticket

## Releasing
- Epics 
    - Team will coordinate the release using the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel
        - Changes to product guides et. al. (UX)
        - Merging of code or flipping of feature flag (Engineering)
        - Updating of release notes (Product)
        - Notification of Training & Contact Center et. al. (Product)
        - Closing of all tickets & the Epic (Engineering & Product)
    - Product will post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page and to the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel for review by Engineering
    - Product will notify Training & Contact Center et. al. of the release
    - Product will remove the Epic from the Planned Releases list 
- Tech debt & Bugs & stand-alone tickets that are pushed as soon as approved  
    - Engineering will post a notice in the check-in-release-planning channel on the day an item has been merged and is expected to go to production
    - Product will create a release note, if needed, and post it after 3 pm when the item gets pushed to production 
   - Product will post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page and to the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel for review by Engineering
   - Product will notify Training & Contact Center et. al. of the release


![CIE Development Process - BPMN process flow](https://user-images.githubusercontent.com/86678742/174146821-a7dcfcb8-38a0-4675-bdb0-52c1c633e5bb.jpeg)



