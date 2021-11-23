
## Release Checklist
[Ambika notes]
Working backwards from when users see a new version of the app on their phones, what is our process?

- Tickets tagged to a release on ZH (PM)
- Release ticket created (automatic)
- Updates to app store images, descriptive text, and What's New content (UX and PM)
    - Changed in repo [here](link)
- Sign offs from PM, PO, and QA (more on what goes into this sign off [here](link to other doc))
- Release branch created (Eng)
- Submitted to Apple and Google
- Released to app users




### List of activities that need to be completed or discussed for each release
- Communications
    - Internal- Who at the VA needs to be aware of the release? 
    - External- Are there any external communications needed? 
- App store images and content
    - Do the app store images and content need to be updated?
    - What order should the images be in? 
- VA app store images
    - If the app store images are updated, the images for the [VA app store](https://mobile.va.gov/appstore/) should also be updated
- Call center documentation
    - What call center documentation should be updated? Does the release warrant a demo to the call centers?
    - Advance notification should be given to VEO or HRC for larger feature releases 
    - See Request [Contact Center Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/request-contact-center-review.md) for directions on how to interact with VEO on product guide updates (see [#32766](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32766) as an example)
- First time onboarding screens
     - Confirm if there are updates needed to the onboarding screens users see the first time they sign into the app  


## Process for Completing Release Sign off

**Check In Meeting:**

When: 2 weeks prior to the release (timing when BOT auto generates release sign off ticket)

Objective: 
 - Identify any open risks
 - Remove blockers
 - Confirm all artifacts needed are in place
 - Are we on track to sign off

Attendees:  QA, PM, Engineering, tbd

**Complete Sign Off Ticket:**  

When: Monday or Tuesday, the week before the next release is submitted to stores



Who: 1 Delivery PM, 1 designated UX person, 1 QA, VA PO

Process:

- Release Sign off ticket is auto generated 13 days prior to the release and assigned to AH PM Delivery lead, UX lead, Engineering lead, and VA POs
- All tasks on the ticket should be completed the Tuesday before the release (1 week prior) and before sending to the App store for review
- All boxes on Release ticket are checked (sample here):
    - Define version number - automation system defines the version
    - Create release branch - completed by the engineering team
    - What’s new content - completed by PM delivery lead. The standard template for writing What's new content is as follows:
       - You can now [describe xyz new feature(s)]. We’ve also [enhanced or improved abc] and fixed a few bugs.
       - If there aren't any new features, use standard messaging 'We added general improvements and fixed a few bugs' (if applicable)
   - Other Content updates - UX team in partnership with PM will be responsible for completing this task
      - App Store Images added to repo if applicable (Product obtain details from UX and upload to the repo)
      - App Store content update details added to repo if applicable (Product obtain details from UX and upload to the repo)
      - Update images for the VA app store (where is this done? and when should it be done by?)
   - PR opened for review - completed by engineering team
   - Severe Bugs: added automatically by BOT; Includes open sev 1/sev 2 bugs.  
       - PM should coordinate with QA & engineering to update the notes with the current status of the bug (what's blocking, when will the issue be prioritized,              etc)
   - QA Sign Off - QA will sign off once all tickets have passed and or identified issues have been addressed
   - PM Sign Off - AH PM will perform high level validation of critical feature/bug tickets. Coordinate with QA and review test results
   - VA POs Sign Off - PM will coordinate with VA POs to obtain sign off once QA & PM sign off's are complete. During this time we should also confirm that POs are ok with the What's new content text and make necessary changes as needed.


