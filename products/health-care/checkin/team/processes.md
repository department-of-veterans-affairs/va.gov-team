# Team Development Processes

## Stand Up / Daily Scrum
- For each Team Member
    - If any tickets in Validate column
        - Team Member mentions who is responsible for reviewing the ticket and a timeframe for completion is discussed

## Refinement 
- For each Epic
    - Questions to answer & document in the ticket
        - How will we release the work for this Epic? 
            - Coordinated
                - Will we use?
                    - Feature Flag (document name in the ticket)
                    - Feature Branch (document name in the ticket)
            - As soon as approved        
        - Is this in the Planned Releases list yet?
            - Pick a release date that is at least 2 weeks from the day it is added to the Planned Releases list            
    - Coordinate the release with UX & Product using the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel
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
        - Is the Ticket part of an Epic and do we understand
        - Who needs to validate the ticket?
- For each bug or tech debt item
    - Questions to answer & document in the ticket
        - Is the bug getting released this sprint?
        - Do we need a release note?
 
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
    - Product will create release notes for a Tech Debt item after 3 pm when the item gets pushed to production and post to the check-in-release-planning channel for review by Engineering
 
 ## Validating
- Upon completion of a ticket (i.e. no more changes are expected and PR is done)
    - Ticket owner moves the ticket to the Validate column                 
    - Ticket owner attaches at least 1 of these depending on the validation required & its difficulty
        - For wireframes
            - Screenshots
            - Links to section in Abstract
        - For research
            - Links to files
        - For development
            - Screenshots of completed work 
            - Link to Review Environment
            - Link to video demonstrating the feature
    - Ticket owner calls out in a ticket comment the person(s) identified as reviewers
- Upon completion of validation
    - Ticket owner closes the ticket

## Releasing
- Epics 
    - Product will remove the Epic from the Planned Releases list as soon as it is pushed to production
    - Product will create a release note for each item in the Planned Releases list (use pre-release note as a base if it exists)        
    - The Team will coordinate the release of an Epic, including
        - Changes to production guides (UX)
        - Merging of code or flipping of feature flag (Engineering)
        - Updating of release notes (Product)
        - Notification of Training & Contact Center et. al. (Product)
        - Closing of all tickets & the Epic (Engineering & Product)
- Tech debt & Bugs    
    - Engineering will post a notice in the check-in-release-planning channel on the day an item has been merged and is expected to go to production
    - Product will create release notes for a Tech Debt item after 3 pm when the item gets pushed to production and post to the check-in-release-planning channel for review by Engineering
