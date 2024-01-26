## How we can improve testing and release process


| Idea / Open Item | Comments | Owner | Ticket | 
| ---- | ------ | ------ | ----- | 
|  Consider having engineers updating / creating detox testing vs having QA do it | Some FE do it today, may be more of a strategy discussion on if Mobile wants this and if not what that means.  | Tim confirmed on 1/4 that he would like engineering to do this eventually | [7540](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7540)   | 
|  Create a PR turn around policy for QA review | Set a PR review SLA - say a PR is assigned to you to review then have it closed in 2 business days? |  Adam |  [7541](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/7541) |
|  Review what meetings are critical and needed for QA to attend vs optional | Will require teams to review their calendars to list all their meetings and review | Team |  [7542](https://github.com/department-of-veterans-affairs/va-mobile-app/issues/7542) |
|  Explore the possibility of keeping the last 2 days of the sprint open from QA to focus on just testing   | Is this something that would be valuable| Team | [7543](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7543) | 
|  Require visual QA tickets that UX needs to complete prior to QA starting testing | Experiences with QA testing stuff that UX has not approved or reviewed and later find (after QA testing started/done) that QA wants changes.  Requesting approval during PM sync 1/3/2024 | Adam | [7544](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7544) |
|  Create a policy on steps to include new work after release branch has been cut |  In progress - shared [draft](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/Teams/QA%20and%20Release/Policies/Inclusion%20of%20additional%20work%20after%20release%20branch%20is%20cut.md) with Tom on 12/11 followed up on 12/20 and 1/3 | Adam | 
|  Document QA work within the Kanban board columns | Understand QA's possible work within each column. External teams can leverage this in handling their own columns. Could be used for onboarding | | 
|  Document hot fix process / requirements / timing | We rarely do this but would like to get it documented if not already | | [7628](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7628) |
|  How to educate / onboard external teams in regards to QA testing, testing requirements (detox, etc.)  | | | 
|  Release / RC tester for 1Q 2024 | Q4 determined but understood it may not be for Q1 2023 | Team | 
| New ticket templates for items Mobile team doesn't do a great job remember Feature flag (depending on how implementing & releasing), Maintenance windows, Availability framework, Analytics (metrics, audiences, etc), App-review-triggering action, Updating demo mode |  Ticket idea for the future — there are a number of things we need to think about (and often code, but sometimes it doesn’t apply) for any given epic and we’re not great about remembering them.It’d be great to have them in the template so Product (or anyone else in the feature team) doesn’t need to remember them.  | | |
| Improve QA sizing | Past convos forced QA to put sizing in the comments. Revisit to see if this is still sufficient | 
| Should QA have a standing meeting with different disciplines | Ability to improve relationships and discuss cross discipline improvements / ideas | | 
| Determine a process /strategy to handle App store required updates (submit [new policy declaration](https://adhoc.slack.com/archives/C0212B872MT/p1701981196387319) for the app and other updates needed to continue using the app store | Tim Wright its a one-off thing they did however heard from others that this is normal. Need to identify what updates Mobile has to make in order to use the App store and a process around it | | 
| Should Mobile have a code freeze that aligns with VA | 2024 Code Freeze 12/22 - 1/2/24 ; however mobile is releasing on 1/2 | | [7629](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7629)
| Identify processes in which there is a lot of risk, especially instances were there is only 1 person reponsible or has access that could lead to a fatal error | Came from Therese's comment during 12/13 PO OKR meeting | | 
| QA requirements / checklist that people need to follow before work gets to QA | Provide clear exact direction as to what QA needs to happen before it gets to the test, note this list may be what QA wants but isn't what is delivered today and that is fine | | |  
| Process / strategy to get PM involved with testing in order to jump in if needed | Expecting this will need to wait till Adam is back from Paternity leave | | [7630](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7630) | 
| PR Strategy to support e2e testing (detox UI) for existing and new features | Brought up by Tim on 1/4 as currently it would require XL branches for modifications and also impact approval process. Meeting 1/12  |  
| Determine a OS cutoff for testing purposes | Follow-up on a couple Sprint 0s, want QA to push this over the line for approval | | [7601](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7601)|
| Accesibility Testing valdiation on headers | came up during Headers project meeting on 1/18/24. Intent is to prevent headers from being missed. | | [7752](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7752) |
| Determine what QA's role and ownership is in ensure accessibility beyond compliance | Part of a convo with Tim on 1/18 | | | 
| Determine QA's role in being the voice of the customer in identifying that the design being proposed will be confusing for the user | Part of a convo with Tim on 1/18 | | 
| testing account management and testing policy | need to work though how SS Platform QA team will need for test user and data prep in order to set expectations with those that work with us - Flagship and External Teams |
| Can we increase automation of accessibility testing so we can test all types during RC testing vs rotating | | | 
| Define and document rollback strategy  | 
| How to capture metrics - manual , automated? Document | 



---------------------------------

| Closed items | Resolution | Date |
| ----- | ----- | -------| 
|  Have Teams assign their QA Agent to tickets that need testing - tickets aren't labeled right and requires manual scrubbing reviewing for each sprint | Shared with PMs and all of them agreed to this, shared out in Slack thread.  If you do not see this bring it up in your team's ceremonies | Dec 2023 |
| Teams assigned a QA Agent | Therese - Global; Tom - Health and Benefits; Rachael - API / Design System / Floater | Nov 2023 |
| Release RC Tester Agent for rest of the quarter | Tom | Nov 2023 
| Team ticket label | QA and Release | Nov 2023 | 
| Require unit tests to be completed before feature goes into production - ticket [7536](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7536) | New MVP requirement ; Tim confirmed unit tests should already be required today |  1/4/2024 PM Sync |
|  Require detox UI (e2e test) updates to be part of new changes before going to production - ticket [7537](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7537)  | PM approval ; Tim has concerns with handling existing feature e2e tests with existing PR strategy but is okay with new features  |  1/4/2024 PM Sync |  
|  Have Demo mode be updated with any changes this impacts detox testing and manual testing. Ticket [7539](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7539).| Team PMs to add this to their MVP requirements for any future production changes | PM approval 1/4/24 PM Sync| 
|  Have engineering do some preliminary demo mode test before. Check to see if demo mode broken or changes not there in QA that could have been caught earlier if engineering did it which delays the entire ticket. Ticket [7538](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/issues/gh/department-of-veterans-affairs/va-mobile-app/7538) | Team PMs to add this to their MVP requirements for any future production changes | PM approval 1/4/2024 PM Sync | 
|  New cadence of meetings for 2024 | Meeting Monday / Wednesday. Monthly retros | Dec 2024 | 

