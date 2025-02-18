# Team Development Processes

- [Daily Stand Up](#daily-stand-up)
- [CIE and UX Collaboration](#cie-and-ux-collaboration)
- [Refinement](#refinement)
- [Planning](#planning)
- [Sprint Reviews](#sprint-reviews)
- [Testing](#testing)
- [Reviewing](#reviewing)
- [Releasing](#releasing)  
- [Feedback](#feedback)
- [Release Notifications](#release-notifications)

## Daily Stand Up
- Each team Member will
    - Raise their virtual hand when they enter the Daily Stand Up meeting and take it down after they have given their update
    - Answer the following questions, when it is their turn
        - What is your Balance score?
        - What did you do yesterday towards our Sprint goals?
        - What are you doing today towards our Sprint goals?
        - Do you have any blockers?

## CIE and UX Collaboration
- UX Team will hold a face-to-face technical hand-off when a feature is ready to be implemented
   - Invitees
        - Involved UX team members
        - All CIE FE & BE engineers (engineers that will work on it are required, others are optional)
        - CIE PM & DM
    - The intent of this discussion is to walk the team through the feature and answer any questions the engineers may have about functionality prior to implementing
    - Figma files will be locked down and made availabile in the "Waiting for release" section
    - Any changes that may be necessary after the hand-off will be evaluated by UX & the CIE team and a decision made about whether the changes must be incorporated into the planned release or pushed to a different release

## Refinement 
- **Prior to Refinement**
    - Product Manager will create an Epic, using this [template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/check-in-experience-epic.md) for each new feature added to our team's priorities list (see this [Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/87299) as an example); include in the Epic the following, where appropriate
        - User story and/or background information to help the team understand the scope of the feature
        - Links to any Slack threads or Government mandate documents
        - Links to all Product documents (such as Feature Brief, QA plans, TestRail test & regression plans, etc.)
        - Links to wireframes
        - Collab cycle checklist
    - Engineers will create tickets needed to implement a requested feature [[GitHub templates](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/.github/ISSUE_TEMPLATE), created by the team, are available to use, as approrpirate (template names begin with "check-in-experience"]
    - Engineers will add a parent ticket to all tickets created; the parent ticket can be either the Product Manager's epic or a sub epic if engineers want to divide the work up a certain way
    - Product Manager will pull tickets into the Next Sprint column of the [GitHub Project](https://github.com/orgs/department-of-veterans-affairs/projects/1323/views/1?sliceBy%5Bvalue%5D=department-of-veterans-affairs%2Fva.gov-team%23100946) and create the Sprint Goals for the next sprint    
- **During Refinement**
   - Engineers will discuss tickets in order to understand and document in the AC the work that is needed
   - Engineers will estimate/point each ticket
   - Team will tentatively include tickets in the next sprint; these will be finalized during Planning
 
 ## Planning
 - Prior to Plannning
     - Engineers will close their sprint tickets; in the event a ticket needs to be rolled over to the next sprint, let Lori know
         - In the event that all work for a ticket was completed and validated by a UX team member but we are still waiting on a peer review from a member of the Platform team, please close the ticket and create a follow-up, zero-point ticket that will be used as a reminder to merge the work upon Platform PR completion (if the PR results in needed changes, update the zero-point ticket with the necessary changes and re-point)
 - During Planning
     - Team will     
         - Estimate team's capacity for the Sprint using the [Sprint Capacity Calculator](https://github.com/department-of-veterans-affairs/va.gov-team/files/9418761/VASprintCapacityCalculator.xlsx)
         - Adjust tickets for the sprint based on capacity
         - Agree on the Sprint Goals/Tickets 
- After Planning
    - Product Manager will assign the current sprint to each ticket in the Sprint Goals and move tickets to "Current Sprint"

## Sprint Reviews
- Product Manage will
    - Record the Sprint Review and past the recording [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/sprintdemo/readme.md)
- Team members will
    - Review their Sprint Goals, providing code/UI demos where appropriate
    - Indicate if a goal is needing to be rolled over and why    - 

 ## Reviewing
- Ticket owner will, upon completion of a ticket
    - **For FE Tickets**
        - Move to Review column; add screenshots to ticket, ask UX to review, submit PR requests; Attach to the ticket a link to the PR    
        - Move to closed after UX reviews and PRs are done; merge code
    - **For BE Tickets**
        - Move to Review column, submit PRs; Attach to the ticket a link to the PR    
        - Move to closed once PRs are done, merge code             
- Reviewer will
    - Add a comment to the ticket when their review is complete
      
## Testing
- Manual Testing
    - Product Manager will create TestRail test cases 
    - Testers will use TestRail test cases to test new features
    - Staging review folks will use the TestRail test cases to understand how to test the feature    
- Automated Testing
    - Engineers will create Cypress tests

## Releasing
- Engineering will 
    - Post a notice in the [check-in-release-planning](https://dsva.slack.com/archives/C03KQAUFVT6) channel on the day an item has been merged and is expected to go to production and call out Lori
- Product will 
    - Post a release note to the [Release Notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/release-plan/check-in-release-notes.md) page
    - Post the following to the [check-in-releases](https://dsva.slack.com/archives/C03E5FEBTLH) channel (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases))
    - Notify Training, Contact Center, & Comms of the release (see [Notifications of Releases & Updates to Planned Releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/team/processes.md#notifications-of-releases--updates-to-planned-releases))

## Feedback
- [Process for analyzing VSignal data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/VSignals/README.md)
- [Process for analyzing Medallia data](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/research/Medalia/how-to-request-and-process-medalia-feedback.md)
   
## Release Notifications
- Notification message for updates to Planned Releases
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




