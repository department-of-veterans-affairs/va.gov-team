## Purpose:
- Version 1.4 
   - Changemanagment at the bottom
   - This is a living document, so please update as needed.
   - Owner: Adam Kasmier Release Manager
- This document provides the steps, details, and information for release management for the VA Health and Benefits Mobile App Team. 



## Documents: 
- [Github Repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/releases)
- [Sprint and Release Calendar through EOY 2023](https://docs.google.com/spreadsheets/d/14jYcB3zhib3T9jyQjNpsfPLkAAqhLdAhXBPUQtsodgI/edit#gid=604215796)
- [Incident Response documentation](https://department-of-veterans-affairs.github.io/va-mobile-app/docs/Operations/Incident%20Response/)
- Past release tickets for example purposes
     [1.40.0](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/4669), 1.39.0, 1.36.0
- Can find others by searching in Slack with keywords Release or specific number
- Release decisions (adding code after a release branch is cut, QA disapproes release but PO approves, etc) to be documented in the [Decision Log](https://github.com/department-of-veterans-affairs/va.gov-team/edit/master/products/va-mobile-app/Teams/QA%20and%20Release/Decision%20Log.md) 

## Other:
- Mainly requires a lot of coordination and communication amongst various parties (FE, both PMs, QA, VA PM, UX, etc)
- Not all releases are equal so there may be some differences between that requires extra communication or needs
- Access needed: Github, Zenhub, Digital Services @VA workspace 
- You can close out Release tickets post release with no impact 
- If VA PO is unable to approve the ticket, get another VA PO to approve and then have FE approve as they have Admin access 
- If this document is updated, it needs to be re-uploaded to [Github Repository](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/releases)
- Use the DSVA Release Slack as the main hub of communication and feedback for approvers and needs
- [Slack reminders](https://slack.com/resources/using-slack/how-to-use-reminders-in-slack) have been set for a few items to proactively make the App teams aware 1-2 days before the release branch is cut 
<img width="498" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/93eda018-68e4-4510-b1cb-5738dd719d02">




## Contacts:
- Release Owner - Adam Kamiser ; Tom Gammons
- Release Team: QA and Release
- FE Engineering - Jon Bindbeutel ; Tim Wright
- Release Tester for QA - Tom Gammons
- VA PO - Rachel Han, Ryan Thurwell

## Step 1: A Github release ticket is generated and sent to Release Owner via email
1 .) The current owner of the process will receive an email indicating a ticket has been generated for the release
    Note: Each Quarter the “owner” may need to be reviewed and added into Github due to possible rotations on the product team. Contact ENG lead to be added to Github Email Communications.

Example of Email notification:

<img width="683" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/f0438d96-e357-4b5a-8c72-5dd5c9f6d39f">

## Step 2: Close the Current Sprint in ZenHub
- a button click every other Wed morning.

## Step 3: Release Owner Reviews and Preps Github Release Ticket 
1.) Click the ticket number link in the email to go to the ticket in Github/Zenhub 
2.) Review the ticket’s prefilled information 
  - Work on the ticket will be done over time and not something that can be resolved immediately
  - Verify that the release and dates are correct 
  - Sections
     - Descriptor 
     - Release Checklist
            <img width="131" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/e68c2c16-8548-4664-b225-fe089962e2dd">
     - Sign-offs
            <img width="131" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/31c8d726-1cae-4863-b126-3ebdd775a6ca">
    - Release Version
             <img width="152" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/555c9e2c-364f-4530-ad9f-2e1c416b532c">
  - In-app What’s New Content
     - Populate with content for the in-app What’s New component
  - App Store Content Changes
      - This is where any content and image changes for the App are called out:
      - 
           <img width="240" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/c5a345b4-ee5e-4a12-9a52-91ef4bfccfb0">
                    
      - Future state: Content will be in one place and will not need to be duplicated for update in another place for update (per Tim W, a ticket exists for an automation solution)
      - Image updates will be automated in a future state (per Tim W, a ticket exists for an automation solution)
  - Severe (high-impact) Bugs are are auto populated in the Release ticket that are still in flight; the intent is to flag them to the attention of the POs so that they are aware that these SEV-1 or SEV-2 issues still exist and we will be releasing with the issues still unfixed. 

     <img width="353" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/0db5f5ae-87cd-475a-88fd-820bcefdd11d">
   - The issue and title of the tickets are auto-populated; the status needs to be checked.
   - Regression Testing - 
         - QA will post testing results in the comments section before the release is ready for PO signoff; no need for the Release Manager to take action on this. 
         - QA needs to check off their approval on their box

3. ) In the comments section post the Release Report from Zenhub
  - [LINK to Release Report](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/reports/release?release=Z2lkOi8vcmFwdG9yL1JlbGVhc2UvOTI3NDU)- select your report from the drop down
    
   <img width="450" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/251bdbee-6d71-493c-a52c-911d2713f68e">
   
4. ) In comments section, paste the images of the tickets associated with the release
   
   <img width="460" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/78dda6cf-a60d-4ae0-a270-5e910fec521a">
   
   <img width="459" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/ee79028c-ff44-45be-9ecc-e962b9c64e81">
   
    - This shows all tickets in their current state, what is releasing is the bottom section Completed epics, etc ; its likely those in the incomplete state get moved for the completed state during this process 

5.) Review tickets to see if OS App Stores need an updated What’s New section or images
- App Store Changes  - What's New Section, Content, Images
- Product Leads will have determined for the release of their feature, enhancement, product if App store changes are necessary by creating tickets and having the tickets done before release 
   - Product Leads are responsible for actual content
   - If not tickets then no changes to Content, Images, and likely use the generic bugs language for the App Store’s What’s New 
   - If any of these items need changed from what is currently in the app store to something different PRs will be needed 
   - It is a good idea to double check with the PMs, so after getting the Release ticket template, send them a message in Slack in the #va-adhoc-mobile-pm channel:

<img width="620" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/12baf615-b231-4cd2-b740-14f6ed431c41">

   - In the event there are multiple features being released with content for In App Content then Release Lead will coordinate with Product Leads and Copy for unified content 
   - There are two options
        - No major changes - just bug fixes
             - Update What’s New content section 
             - “We added general improvements and fixed a few bugs.”
         - Update App Store content changes section 
             - Checkbox and NA for Images, Content, and Other 
   - Big app changes including feature releases - this is not required now, only need it prior to VA PO signoff 
         - May mean new copy is needed for App Store’s Whats New Content along with image changes
         - Coordinate with PM of the work to get images and copy 
         - Will need to coordinate with PM on this process 
              - Note: Process established by past agency so may be new or rusty for many 
              - This is when Misty Milliron-Grant is involved with creating new copy
         - Once completed, check the Checkbox of the the Release Checklist and the App Store content changes section
     
6.) Review tickets to see if there are any In-app What’s New Changes 
- Product Leads will determine if we should include the In-app What’s New component for a given feature and/or enhancement.
    - Product Leads will work with Content to determine what the copy should be.
- Release Lead is responsible for implementing.
    - In the event there are multiple features  being released simultaneously, we might want to use the In-app What’s New component, then Release Lead will coordinate with Product Leads and Content for unified content. 
- Release Lead works with engineering on facilitating these changes until the Release ticket is updated to automatically pull in the information like it does for App store updates
    - For specific steps use [this document](https://docs.google.com/document/d/1luRRb94AJZpqs5pp7pxWbuHakHXT9FZHe8QNihzDtog/edit)
 
7.)  Severe Bugs update
- Click each bug and see the latest status of the bug
    - If none in the comment section of ticket, reach out to the Product Manager in charge of the Bug Epic
    - The Release Manager may find a ticket is blocked from an external factor and may need to work with QA to see if the Sev-2 bug should be reclassified
- Edit the ticket and put an updated status on the bug

## Step 3: Slack Communication for Release 
 - Ideally day the release email comes out but no oo later than the Friday prior to the Release date, go to DVSA va-mobile-app Channel.
   
    <img width="159" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/e21a0b8a-825a-472e-a57e-8d8a57d051f4">

- In that channel create a thread by typing “Release X.XX.X Coordination (spool emoji)
   - Example: Release 2.15.0 Coordination
     
  <img width="445" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/a6fc3184-fd22-4b20-816e-608b926f5658">

- After posting that message click it and post a reply message
  
   <img width="345" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/18634afc-eb1f-45aa-b43b-175b91b52794">

  Post a message like this in the thread, updating the specific information to the release:
  Release Ticket #XXXX (update ticket number and link url to ticket)
  Release Report: here (link url to Github release report)

   Sign Off Timing (copy paste them from the ticket)
     - QA Due XXX
     - Product PM Due XXX
     - VA Due XXX

   Contacts:
      QA - @TomGammons (or the Release Test Lead)
      Engineering -  @Jon Bindbeutel @Tim Wright
      Product @Alyna @Kelly Lein @Stacy Blackwood @Ameet Sarkar
      OCTO POs - @Rachelhan @rtwell

   @Jon Bindbeutel please confirm all tickets merged to develop are accounted for 

<img width="275" alt="slack message for 2 21 release " src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/e1ff2179-0919-4865-8c8e-9d3d193de2d1">


## Step 4: Get Ad Hoc Sign Offs - QA and Product 
- QA should be performing their testing on these tickets
- QA will post their approval in Slack and also update the release ticket with testing results
   - QA ideally should get their testing done by the date associated with the ticket however there is some wiggle room, technically the QA can wait till day of VA approval but ideally want it sooner
   - Delays may happen to to testing issues, resources, or upstream blockers so if no update by EOD QA due date, follow up with QA Release contact and work with them accordingly
- Once QA is approved, Release PM will need to sign off
    - Verify all the release ticket information is completed and fill out (checkboxes, What’s New copy, Whats New images, etc)
    - See if there any concerns or risk that need to be addressed 
- Once PM is approved then click that check box on the ticket
- Check in with Binny on his step 

## Step 5:  Request VA PO approval in Slack
- Verify the ticket is fully updated before reaching out to POs
- Ensure all tickets in the release are closed by now - can see this on the Release Report
- Ensure Binny has signed off on all 
- This must be done on the day of their due date. They cannot sign off  early due to system automation issues 
- In the Release Thread in DVSA va-mobile-app channel post something like
   Hello @ VA PO , this release is ready for your sign off. If you have any questions please let me know.
   The release contains bug fixes and general updates, no new feature delivery. CC: @ Release PM backup
  <img width="465" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/87f12f69-b889-4d61-b45c-0e3d03036dfb">
- VA PM will approve it in a way the system will systematically kick off the release build and process ( the /approve “v” must be lower case to kick of the PR). If they put the wrong characters/spacing it will not allow the release to kickoff
  <img width="424" alt="image" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/d39d833b-b39a-41f3-aaf5-86196bb2a006">


## Versioning
| Version  | Author | Date | Comment |
| ----- | ----- | ---- | ----- | 
| 1.0 | Adam Bischoff |  1/24/2023 | Initial Creation | 
| 1.1 | Adam Bischoff | 3/7/2023 | App Store, What's New In App, Call Center Guide inclusion | 
| 1.2 | Stacy Blackwood | 8/2/2023 | Added in Steps for Email Communication for Next Owner |
| 1.3 | Jennifer Brown | 9/27/2023 | Updated the Overall Process to add high-level QA steps in the process. Updated Release Owner |
| 1.4 |Jennifer Brown | 10/23/2023 |Met with Eng, Product, UX leads to verify the accuracy of the document, and to identify the areas where there is potential for automation.  |

