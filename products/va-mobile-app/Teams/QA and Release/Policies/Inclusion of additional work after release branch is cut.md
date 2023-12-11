# DRAFT AT THIS TIME ; QA TEAM REVIEW AND WILL SHARE WHEN APPROVED 


# Policy - Inclusion of additional work after release branch is cut
Version 1.0

## DESCRIPTION: 

The night that sprints are completed a release branch is cut containing all the code that will be going out in the next release. This code QA must test (within what they can test and control) in order to approve the release. 

In some cases they are requests to add stuff to the release branch after that time period, meaning then additional unplanned testing will be needed. This could also increase the risk of approving the release as well.  Given the increased work and unplanned work, Mobile has historically preferred not to add such things after the cutoff time but understands that sometimes it may be required. 

This document contains the information, steps, and accountability needed to complete before code should be included in the release branch after the cutoff time


## RISKS: 
 - Delay / skip the release given findings their change brings 
 - Unable to complete QA testing and signoff within their designated time
 - Risk additional findings and issues 
 - Unplanned rework by QA 
 - Unplanning work by engineerings to add the code and handle any findings timely 

## NOTES:
 - Team PM and PO accepts the impact of this work 
 - Possible delayed release
 - Veteran facing bugs 
 - Planned work delayed for unplanned work - shift in priorities 
 - This must be done timely, the later it gets into the QA testing period the least likely will be included as QA only has 2 days to test 
 - If the change is deemed small enough to go in why not just wait till the next release 
 - Mobile Team to retro to determine why it missed the release cutoff and update the necessary communication / processes to catch it the next time and prevent this from happening again 
 - Is a hotfix more viable of an option  

## STEPS: 
1.) Someone in Mobile identifies that code was not part of the release branch and wants it to be included 

2.) That person reaches out to the Mobile team responsible for that code to discuss with that PM 

3.) That PM has discussions with their team including their QA agent to deem if it needs to be included; notify Release manager of possible change 

4.) If release code needs to be modified, that PM will need to explain the request to the POs and get their approval to modify the release code 

5.) That PM will provide the POs approval to the QA and Release team  & update the release ticket with this change 

6.) PM Team Engineer will update the code accordingly and be onstandup for any testing findings 

7.) QA and Release team 

     - will test within their means and timeline given 
     
     - Document the decision to modify the release code in their decision log 
     
8.) Continue with release process
    - If new code leads to findings that prevent QA from signing off on the release; the requesting PM will need to discuss if release continues without QA approval 


### Release Timing Example: 
 - Sprint starts 11/8/23
 - Sprint Ends 11/21/23
 - Release branch cut 2:00 AM EST Wednesday (11/22)
    - After this step is when new code will need to be added ; but release timeline below will still be the same  
 - QA Release Testing 11/22 - 11/24 (2 working days) 
 - QA Release Signoff  11/24
 - PM Release Signoff - 11/27
 - PO Release Signoff - 11/28




### Change Management
|Version | Author | Date | Comments |
|----- |------- | -------| ------ | 
| 1.0 | Adam Kasmier | TBD | Initial Creation



















