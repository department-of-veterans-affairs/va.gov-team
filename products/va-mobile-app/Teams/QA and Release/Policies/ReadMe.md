# VA-Mobile Quality Acceptance (QA) Processes
[Document everything.](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Engineering/Philosphy)

Better yet, OVER-document. If it is more complex than a tsdoc or API doc, add an .md file to the docs site. Assume you will never touch this again. Make everything abundantly clear as to how it works… There are few things worse than looking at something complicated with no or almost no documentation… Taking two hours to remember your own work is a sure-fire way to realize how hard it would be for people without your memories to grok a thing. Be kind to future-you and all your coworkers.

## This document details the various QA team processes, including:
- When is QA involved with work;
- What work is QA responsible for; and
- What documentation is necessary on QA work tickets.

## When is QA involved?
The QA team is involved with work whenever there is a code change that needs to be reviewed prior to releasing the updated code to the iOS and Android App stores for consumers to download the updated version of the VA-Mobile App. Mobile Team should coordinate with their QA agent in any and all relevant testing discussions. Any work that QA is doing by Flagship, Platform or external team must have a ticket or no work will be completed. Tickets should be tagged and assigned appropriately in order for QA to monitor and manage their work and ideally earlier the better. 

## QA Agent Assignments

Teams should be assigning their QA agent as soon as the ticket is created so that the QA agent can see their backlog and better manage their work on the Zenhub Board. 

|Team | QA Agent | Notes |
| ---- | ----- | ---- | 
| Flagship App - Global | Therese  | s | 
| Flagship App - Health and Benefits  | Rachael |  | 
| Shared Services - Design System | Tom  | None of the work is going into production until work is completed in Flagship App which is where the testing will happen. However QA to explore if there is some proactive collaboration that would be beneficial for QA in preparing Design System components |
| Shared Services - API / Backend | Tom | Per convo with Team PM little to none is expected |  
| Release QA testing  | Tom | | 
| Release Management |  Adam | Tom to cover during Adam's leave |
| QA Projects | up to 20% of capacity will be spent on improving QA processes | 
| External team - Veteran Status | Not assigned per Mobile leadership | Mobile leadership has talked about how this work will go through Flagship App teams - waiting on Mobile Leadereship to finalize and communicate decision | 


## What does the QA team do?
- Feature implementation
- Other people (not QA) working
- Code PR is approved (everyone else ‘done’)
- QA tests it
- Found a problem
- Fix before release or  fix later Backlog 
- Code merges to develop
- (QA ‘done’)
- Release process (us + stores + Veteran + flags)
- Automat testing / Detox UI
- Test Plan creation and completion
- Release Testing / RC testing
- Manual testing 

<img width="314" alt="Feature Implementation" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/c6727342-7ef2-49be-abb7-3cf1a6f2d8c7">

## What work is QA responsible for?
### Testing
   #### Work that QA tests:
- ACs
- Documentation (tests & bugs)
- Dealing with testing related barriers
- Accessibility in conjuction with UX Accessibility 
- Devices
- Release code for each release
- Test data & mocking
- Regressions
- Data format / API updates / endpoints - requires BE involvement
<img width="244" alt="QA Tests It" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/23bef151-87cb-410f-b2a8-e9ca75b36e7c">

#### Work that QA can't currently tests:
- E.g. changes to backend process - very hard to test
- Can’t test analytics

### Non-testing, feature work 
#### Non-ticketed QA work
- Early phase QA consultations
- Strategy work
- Device management
- Bug scrub
- Estimating/pointing tickets

<img width="225" alt="Screenshot 2023-12-11 094219" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/29c76058-4226-4b90-88c0-475c131d7cad">

## RC (Release Candidate) testing 
- There are 3 QA resources with 3 overlapping points each per Sprint unless an issue comes up
- QA testing work is split equally across testing resources
- Tickets are tested against the [RC script](https://dsvavsp.testrail.io/index.php?/suites/view/92) (a high-level script) in TestRail
- The RC testing process can be found [here](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/QA/Release%20Testing/)
- Writing the RC cases for a new feature usually:
    - happens during Step 2 of a project
    - are reviewed during Test Plan Review
     - are added by the feature tester to the RC script when the feature is released
### Needs
   - Successful RC build
   - API uptime
   - Need fresh test run from RC script (automated)
- QA sign off to release ( but it is Product’s decision when to actually release) QA->Product->OCTO-DE
- QA gets the RC cut on Wednesday (sprint day 1); the final is due on that Friday
- This is a process issue that we’re allowing time to dictate our releases rather than readiness. There is a technical solution that has been “wired” according to Tim Wright, but this has been de-prioritized due to team platform build priorities (as of 7/7/2023, the work is captured in [ZenHub ticket 5543](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/5543))
### RC ticket needs to be pointed and scheduled
- There is no RC testing ticket template, currently. The QA testing team documents the testing effort on the release signoff ticket

## Feature Work
- QA has to sign off on the ticket prior to merging branches into develop (develop is where the RC cut is pulled from - there is a release branch, which makes the release).
- The release branch is created with the [release_branch.sh](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/release_branch.sh) shell script which runs in CI (github actions or CircleCI)
### Process for testing a feature
- During Step 2 of a new feature, a ticket is created where QA creates a test plan and all test cases based on finalized tickets.
    - Test plan exists in TestRail
    - Come up with test data that needs to be prepped
    - The list of test data that is needed will be presented to Product before the end of Step 2. 
           - It is Product’s responsibility to follow up on any missing, relevant test data before the tickets go to QA for review (sometime before Step 3)
     - Review test data and plan and review it with other practices involved in the feature
     - Have peer review on plan & cases (“test plan review”)
- Includes feature testing cases, and also what cases to add/change in the RC script (if any)
- There’s now a Step 2 ticket template in ZenHub
- Product follows this process to find and create a new issue using the template (and QA would subsequently work the ticket when it’s pulled into a sprint):
   -  when viewing the [VA Mobile board](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/board), click the New GitHub Issue button
- When the template window appears, select the “QA Test Plan” template:
<img width="239" alt="QA Test Plan Template" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/8cedd0a3-4ddd-495f-8b05-07e84df90d1c">

- Complete the Templated ticket, filling in the questions as applicable for the particular QA Test Plan that is being created.
  
<img width="314" alt="test plan details" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/86ca3c71-6474-4805-a506-20a239c24f1c">
    - Wait until the feature ticket (not the holistic feature itself) is testable
    - Sometimes there will be several tickets that make up a particular part of the feature, but not all of them will be sequentially ready, so they will not be actually testable. 
    - Definition of TESTABLE TICKETS is as follows:
        - Physically able to test:
            - Have a build with that code included
             - New code can be reached on the app
            - Have users with correct test data
        - Makes sense to test:
             - Tickets with meaningful ACs for manual testing
             - Relatively stable codebase
              - Good use of QA time
     - Link test run to QA implementation ticket (same as engineering ticket - not repointed tickets, try to integrate this better with ZenHub)
      - Do testing.

### If bugs are found during QA testing
- Because a bug, or defect, has been found during testing and it is separate from the original scope of work that was originally story pointed, the following process should be followed:
    - QA resource is to create new bug ticket, making sure to validate any pertinent information with Product
    - Pick up the bug information from the old ticket and make sure that it is included in the new bug ticket. 
     - Make sure to tag the PM, Eng, and UX points of contact in the new bug ticket for their visibility to the fact that a new bug ticket was found during QA testing.
     - Confirm with the Product Manager and Project Manager what Sprint the new bug ticket should go in, or if the ticket should go in the Backlog.

### How does the QA team decide what should be fixed before release? 
- This is a collaborative effort between the QA and Product teams
- QA makes recommendations for release-blockers
- Some bugs ship, some don’t

### How does QA say, “no” to shipping bugs?
- Highly related to “how does the QA team decide what should be fixed before release” – maybe we should just combine this with that?
- On any individual implementation ticket (bug fix, feature ticket), the code changes are not merged to develop until after QA has approved the PR. There’s an outstanding automation ticket to add a hardstop to prevent this (6261); right now it’s an honor system.

### QA ‘cleanup’ activities that occur when wrapping up a feature
- Visual & content QA has happened - and if not, ping the relevant UX design/content person to get it done
- Working with Product about what ships/not & whatever documentation necessary for that
- Updating RC with cases for new feature (written in step 2)
- Moving feature testing cases from ‘feature’ folder to the TKD organized test cases
- Confirming outstanding bug tickets are attached to a follow-up epic (if one exists)

## Manual Testing 
QA has to sign off on the ticket prior to merging branches into develop (develop is where the RC cut is pulled from - there is a release branch, which makes the release).
- The release branch is created with the [release_branch.sh](https://github.com/department-of-veterans-affairs/va-mobile-app/blob/develop/VAMobile/release_branch.sh) shell script which runs in CI (github actions or CircleCI)

### Physical device (QA)
- Adhoc IT probably has devices
### Simulator (Engineering)
### Peer reviews on test plans 
- Looking for: 
      - Coverage:
            - Cases for release candidate script for when the code is ready for a release
            - Cases for the testing the code itself
      - Readability
            - If and when they need to be run, how they are currently written
            - Other changes that aren’t being tested
            - NOTE: The documentation on PEER REVIEWS ON TEST PLANS is in the process of being documented by QA in [ZenHub ticket 5399](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/5399)
### Bug testing
- High severity takes priority (Sev 1 highest, Sev 2 middle,  Sev 3 lowest
- Abandoning current work at the team’s discretion
### Pointing ideas
- QA uses the same general pointing system as everyone else
- Testing work + time to setup test plans
### Who:
- Pointing will be done by the QA agent per Mobile team; the individual Mobile teams should be coordinating with their QA agent and providing enough information / ACs to enable QA to size 
- The story pointing is done in a comment within the ticket. 
- Test plans should be reviewed by the QA, Product, and Engineering point persons that are working on that particular objective.
- If QA testing is done Mobile PM / Team to assign their QA agent to the ticket upon creation / knowing testing needs done
- Mobile team PM to label tickets that need QA testing appropriately or work could be missed by QA 
### When to do it: 
- As early as possible; no later than the UX ticket handoff. PMs of each Mobile team are asked to include QA as early as possible and throughout the process. 
- Points are updated as more information is available about the work.
- As story points are changed by QA resources, Product Managers should be updated in Slack. 
### Where to do it:
- In ZenHub, within the particular task ticket that the Mobile PM has created. 

## What documentation is necessary on the ticket? 
### Current ticket system
#### Elements that have to be present
- Blurb of what was verified, either: 
     - Comment (ex for a bug fix: “Verified that appointment X doesn’t crash for test user Y on both iOS and Android”), or
    - Link to TestRail run that was done for testing (usually for features or other larger testing effort)
- Signoff comment with unambiguous words (ex: “Approved by QA”)
     - Emojis do not count as a signoff comment ⛔
      - If not approved, would write equally unambiguous comment like “NOT approved by QA”
       
#### Element that does not have to be present (but is nice to include)
- Comments about testing, including:
    - Bugs found during testing
    - Clarification about things that were tricky during testing
    - Any other comments that would be helpful to share about testing
      
## Ideas for a “QA has own tickets, not shared with FE” template

### Link to FE (or BE, or Content, or UX, or Planning) ticket
- It would be helpful if the template could be the “blocked by” auto as well
  
### Testing documentation (CASES, RUN)
- QA would fill out later, either TestRail links or written-out case
- Can Acceptance Criteria (A/Cs) be copied from other tickets?
    - Yes, but only when check = testing
 
## New Issues
- Any other work created that’s going to require testing requires a new ticket
- Remove the “qa” label on other practice tickets *remove when QA ticket is created?
- “Review all tickets created last Sprint” each sprint (use ID#) this would suck
       - Therese’s question on last two bullets: What can other people do? What will they consistently do?

## Estimation of QA tickets
- Move to the “Pending handoff” or “Backlog” columns in ZenHub after point estimation is complete
- Attend either the FE or BE or UX handoff meetings for tickets
- For non-feature work, writing plan/cases? 
     - If 1 point of smaller for writing plan or test case, then do it then
    -  If greater than or equal to 2 points, for writing plan or test case, create another ticket.
- Test plan tickets would also “block” testing tickets but could easily be in the same Sprint or future workload, allowing for more flexibility
- Product would pull tickets into the current sprint that account for QA capacity and plans during sprint planning.
- QA would pull tickets into the “In Progress” column in ZenHub either:
    - when work begins on it or
    - when the planned work is blocked and another ticket is worked on instead

## FE to QA:

### “Ticket handoff”
   - When engineering reviews the tickets in GitHub in the Pull Request section, there are labels left on the individual ticket.
<img width="311" alt="Screenshot 2023-12-11 101333" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/191d5c09-d197-40d3-95b4-fd9cd13028f4">

   - The Engineer reviews the label and once the problem has been triaged and resolved, the ticket is moved to the “With QA/Develop” Column

### What happens when QA finds bugs?
- [Existing Bug Handling Process doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/Bug%20Managment.md)


## [QA Testing Tools and Their Purpose](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/QA/Resources)

| Tool | Purpose | How is it accessed | 
| ---- | ------- | ------------------ |
| Test Rail |Used for features. Documenting how we test this in the feature. Everything other than “small bug fixes,” such as regressions in RC tests. | Shared account accessible, if individual account needed then request through DSVA VFS-Platform-Support Channe |
| Testflight | Enabling a new mobile app version to be pushed to testers devices pre-production | Reach out to Mobile Front End Engineering |
| AppTester | | | 
| CharlesProxy | | |  
| 1Password Valuts | Test user password storage | 1Password access | 
| Github Pages | Documenting storage, processes, policies. May be migration to confluence in the future. Reviewing documentation. Need public space as the process to save doucmentation to Github is tedious.  | Github account with applicable repos | 
| Detox | Automated end to end testing | Reach out to your Mobile Team's QA agent | 

## Other topics to consider including: 
 * Team member bio / links to how they work best (Therese's doc)
 * Link to our mission, vision, goals
 * Document OKR / KPIs
 * When to engage QA
 * Processes team is responsible for
 * QA limitations (devices, OS, analytics)
 * QA requirements 


