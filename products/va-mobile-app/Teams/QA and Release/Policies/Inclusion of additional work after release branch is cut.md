# Policy - Change Management for Adding New Code to the Releae Branch
Version 1.0

## DESCRIPTION: 

This Veteran Affair's Health and Benefits Mobile App's policy is regarding the request from internal or external teams wanting to add code to a release branch after its cut which contains the code the will be included in the release. Said another way, team requests to modify the release code. 

The evening Mobile's sprint is over the release branch is automatically cut based on the status of the tickets. Historically there have been occasions when teams have identified that code was not included in the release branch (for one reason or another) and requests to add the code into the release branch after its been created. This document is the on how to handle such requests. This document contains the information, steps, and accountability needed to complete before code should be included in the release branch after the cutoff time.

The QA and Release team manage and oversee the Mobile release process, thus are responsible for this policy and enforcement. 

At a high level, QA and Release Team's stance is that code will not be added to the release after the release branch is cut. QA and Release Team does offer a process for Teams to use if they feel the work is critical enough to be added, however this must be done the day its cut in order to not threaten the rest of the release process timeline. 

## RISKS OF INCLUDING CODE POST RELEASE BRANCH CUT: 
 - Risk of adding code that was not properly planned for in the release
 - Delays to the Release timeline which risks delaying or skipping the release
 - Unable to complete QA testing and signoff within Mobile's Release Timeline
 - Risk additional findings and issues 
 - Unplanned rework by QA as testing likely was already completed 
 - Unplanning work by engineerings to add the code and handle any findings timely
 - Reducing team's sprint capacity on making the modifications 

## NOTES:
 - Modifying the code branch is not the only solution others include: Waiting till the next release (QA and Release Team's preference), Hotfix, Availability Framework 
 - Historical requests to add code into the release branch has been for small or minor items, if that is the case then QA and Release team believe it should wait for next sprint
 - Team PM and PO accepts the impact of this work 
 - QA and Release expect the Internal or External Team to retro why an item they expected to be included was missed in order to reduce this risk in the future
 - QA and Release's QA Tester has the final say
 - Exceptions can be made if they are timely and also critical enough - they will need to follow the process below
 - If modification to the release code is purused, Team PM and PO accept responsibility for the risks it brings 


## STEPS TO INCLUDE CODE TO THE RELEASE BRANCH AFTER ITS CUT: 
1.) Day the release branch was cut, Teams review their ticketsto ensure code was in the release branch as expected

2.) A Team identifies code was not part of the release branch cut as they had expected and discusses amongst the Team

3.) Team PM determines release branch needs to be modified, reaches out to the Release QA Tester with their request to discuss what is going on, why its needed, options, and timing
    - Ideally should be done the day the release branch was cut, anything later will impact release timeline
    - Discussions will also include updated timeline that will need to be met for the new release due to this new code change 
    - Updates to be made to the DSVA Slack Thread with discussion and next steps 
    
4.) If Team PM still wants to modify the release code to include new code, Team PM will need to get PO approval 
    - Release process will be put on hold while we wait on PO approval to reduce rework
    - Approval can be included in the DSVA Slack thread if there is one 

5.) Team PM will provide POs approval to the Release QA Tester & update the Release Ticket with this change 

6.) PM Team Engineer will update the code accordingly and be onstandup for any testing findings 

7.) QA and Release team will test within their means and timeline given and document the decision to modify the release code in their decision log 
    - If new code leads to findings that prevent QA from signing off on the release; the requesting PM will need to discuss if release continues without QA approval 

8.) Continue with release process

9.) Team responsible for adding code to the release branch is asked to follow-up with QA and Release team on how they plan to prevent this in the future 

### Release Timing Example: 
| Event | Date Example | Days to Complete | Other |
| ----- | ----- | ---- | ----- |
| Sprint starts | 11/8/23 | 10 business days | |
| Sprint Ends | 11/21/23 |  |
| Release branch cut | 2:00 AM EST Wednesday (11/22) | Teams that submitted code should be validating all code they expect is included | 
| QA Release Testing | 11/22 - 11/24  | 3 business days | | 
| QA Release Signoff | 11/24 | 3 business days |  | 
| PM Release Signoff | 11/27 | 1 business day | | 
| PO Release Signoff | 11/28 | 1 business day | | 
| App Review Submission Date | 11/29 | 1 business day | | 
| App Release Date | 12/5 | 4 business days | |
[Release calendar](https://docs.google.com/spreadsheets/d/14jYcB3zhib3T9jyQjNpsfPLkAAqhLdAhXBPUQtsodgI/edit#gid=604215796)





### RACI 

| Task | Responsible | Accountable | Consult | Inform |
| ----- | ----- | ----- | ----- |  ----- |
| Identify code is missing from release branch | Any on Individual team | Team PM | Individual Team | | 
| Determine code needs added to the release branch | Individual Team | Team PM | Individual Team | QA and Release Team |
| Notify QA Release Tester of the situation and determine how to proceed | Team PM | Team PM | QA and Release Team | Individual Team | 
| Discuss and get PO approval for changing the release branch | Team PM | PO | QA and Release Team | Individual Team | 
| Discussion note notes and decision logs | QA and Release Team | QA and Release Team| | Inidivudal Team | 

Individual team - Design System, API Team, Global, Health and Benefits, External teams (Veteran Status, etc) 




### Version Management
|Version | Author | Date | Comments |
|----- |------- | -------| ------ | 
| 1.0 | Adam Kasmier | 1/18/2024 | Initial Creation |








