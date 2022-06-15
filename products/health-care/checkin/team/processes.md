# Team Development Processes

## Refinement and/or Planning
- For an Epic
    - Questions to answer
        - Will we use a FF or a FB?
        - Is this in the Planned Releases list yet?
        - Can we release this sprint?
    - Pick a release date that is at least 2 weeks in advance
    - Coordinate the release with UX & Product
- For a bug or tech debt
    - Questions to answer
        - Is the bug getting released this sprint?
        - Do we need a release note?
 
 ## Releasing
- Validation
    - Upon completion of a ticket (i.e. no more changes are expected or possible and PR is done)
        - Ticket owner will move the ticket to the Validate column
        - Engineering Ticket owner will do 1 of these, depending on the validation difficulty
            - Attach screenshots from the developer's local environment if only content changes are included (i.e. no business logic)
            - Attach a link to Review environment so that Design/Product can run the application in the review environment
            - Attach a link to a video demonstrating the change
        - Design ticket owner will attach links to the wireframes
    - At stand up, if there are any tickets in the validate column for a team member, the team will identify & document in the ticket who has the action item to validate the item and the timeframe in which it needs to get validated
    - After a ticket has been validated, the primary owner of the ticket will close the ticket
- Epics 
    - Product will add an Epic to the Planned Releases list as soon as it enters our Product Backlog
    - Product will create pre-release notes for each item in the Planned Releases list
    - Product will include a TBD release date or range with each Planned Release item
    - The Team will determine an estimated release date that is at least 2 weeks from the date it was decided 
        - Product will update the estimated release date
        - Product will notify Training & Contact Center et. al. of the changes to the Planned Release list
    - The Team Will coordinate the release of an Epic, including
        - Changes to production guides (UX)
        - Merging of code or flipping of feature flag (Engineering)
        - Updating of release notes (Product)
        - Notification of Training & Contact Center et. al. (Product)
- Tech debt & Bugs
    - Tech Debt & Bug items Will not appear on the Planned Releases list
    - Engineering will post a notice in the check-in-release-planning channel on the day an item has been merged and it expected to go to production
    - Product will create release notes for a Tech Debt item after 3 pm when the item gets pushed to production and post to the check-in-release-planning channel for review
