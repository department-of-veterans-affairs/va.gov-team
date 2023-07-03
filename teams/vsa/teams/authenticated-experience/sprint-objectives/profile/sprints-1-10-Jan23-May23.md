# Profile Sprint Objectives: Sprints 1 – 10 (1.4.23 - 5.23.23)

- [Sprint 1](#sprint-1-14---117)
- [Sprint 2](#sprint-2-118---131)
- [Sprint 3](#sprint-3-21---214)
- [Sprint 4](#sprint-4-215---228)
- [Sprint 5](#sprint-5-31---314)
- [Sprint 6](#sprint-6-315---328)
- [Sprint 7](#sprint-7-329---411)
- [Sprint 8](#sprint-8-412---425)
- [Sprint 9](#sprint-9-426---59)
- [Sprint 10](#sprint-10-510---523)
- [Sprint 11](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/sprint-objectives/profile/sprints-1-10-Jan23-May23.md#sprint-11)

## Sprint 1 (1/4 - 1/17)

[#51107](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51107)

### General

- Onboard Berni Xiong [#50964](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50964)
- Onboard Florence McCafferty [#50956](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50956)

### Bad address indicator

- PM: [Add 2-month stats to project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md#objective-prompt-people-who-visit-the-profile-and-have-a-bad-address-to-update-their-address)

### Accessibility updates

**FE**

- Add full name and disability rating fields #49651
- Update Button Pairs #49374
- Adjust Placement of In-line Error Alert and Text #49550

### Direct deposit

**BE**

- Discovery -- Migrating direct deposit for comp & pen integration to Lighthouse #51103

### Notification preferences

**Design**

- Begin research plan for adding email channel #51007
- Finish research plan for adding email channel #50999
- Create conversation guide for adding email channel #51000
- Create prototype with new channels for usability testing #51001

## Sprint 2 (1/18 - 1/31)

[#51626](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51626)

**Still needed**

- Work for Liz 1/16 - 1/20 while she is waiting for research recruiting (maybe help with IA research work?)
- Work for Florence (is she fully onboarded)

### Accessibility updates

**FE - Adam**

- Account security: Update designs to support 508 updates #51085
- Determine tasks needed to complete 508 issue #19618 (Semantic Lists) #37041

### Direct deposit

**BE - Tom**

- TBD on discovery this sprint; will determine Friday

### Notification preferences

**Design - Liz**

- Conduct research #51003
- Topline summary #51004

### Military info discovery

**Design - Florence**

This all depends on Florence having Github access.

- Kickoff research and gather background info #51818
- Write research plan #51821
- Write conversation guide #51822

## Sprint 3 (2/1 - 2/14)

[#51903](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51903)

### PTO

- Tom: 2/6 - 2/10 (Lihan will backfill for Tom in case of emergency)
- Liz: 2/13 - 2/14

### General

**FE - Adam**

- Inventory all instances in which we use the "We can't load all the information..." error #51902

### Accessibility

**Design - Liz**

- Update Sketch files to show error alert for when Legal Name does not load correctly #52064
- Review all profile use cases to make sure our documentation is up to date (OK if this needs to be split between two sprints) #52502
  - Where we've made substantial UI updates so far - personal info, military info, account security (if those updates launched last sprint) 
  - I know that at least personal information needs updated links to the latest mockups 

**FE - Adam**

- Determine tasks needed to complete 508 issue #19618 (Semantic Lists) #37041
- Address Validation Improvements (draft) #49652

### Direct deposit EVSS > Lighthouse migration

**BE - Tom**

- Migrate GET Direct Deposit Info 

### Notification preferences

**Liz**

- Research write-up #51005
  - If not done last sprint, since sometimes Liz gets head on work
- Read-out #51006

### Military info research

**Design - Florence**

- [Research] Military info discovery: Write conversation guide #51822
  - Florence might get into this in sprint 2, so if she does, we can remove it from sprint 3.
- [Research] Military info discovery: Final logistics prior to sessions #51886
- (If Florence finishes the convo guide in sprint 2) Military info discovery: Conduct research sessions #51887

## Sprint 4 (2/15 - 2/28)

[Sprint 4 epic: #52405](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/52405)

### PTO
- Liz: 2/15 - 2/17

### Onboarding

- Onboard new full stack developer [#50940](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50940)

### General

**BE - Tom**

- ~Bug: Unable to save notification preferences in staging #53379~ Issue apppears to have resolved.
- Testing in Staging Vets-API Server to EKS #52717 
  - Time sensitive, needs to be done by COB 2/28. Can not be pushed back a sprint.
- Investigate increase in ADDRVAL205 errors #53208

### Accessibility updates

~Note: This work needs tickets created.~

**Design - Liz**

- ~Update Sketch files (if needed) and links to documentation for address validation~ << Liz and Berni discussed this item, and there's no additional work needed here. The Sketch files and use case documentation reflect the changes FE is currently making. Once FE changes are complete, this work is complete. 

**FE - Adam**

- Remove feature flags for any accessibility work that has already launched #53357
- New Toggle and MVP of Info Card Component #53630

### Direct deposit migration

~Note: This work needs a ticket created.~ <<< Done

**BE - Tom**

- Migrate POST Direct Deposit Info #53714
- Stretch goal: Potentially move on to another direct deposit ticket, if time considering General tickets above and Tom needing to help out with a My VA issue.

### Notification preferences

**Design - Liz**

- Create high-fidelity mockups for all states of the new notification preference design #53529

**FE - Adam**

- Feature Toggle for Mobile # Editing Page #53541

### Military info research

**Design - Florence**

- Conduct research sessions #51887
- Topline summary #51888
- Research synthesis #51889

## Sprint 5 (3/1 - 3/14)
Sprint 5 epic [#53602](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/53602)
**~Berni -- I have stopped creating sprint epics, so you'll need to create one for sprint 5 and sprints going forward~** << Done, thanks - BX!

### General

**Design - Florence**

- UX Improvements: Heuristic Review and Analysis of Profile and My VA #53227

**BE - Tom**

- Province populated on U.S. Territory Addresses #52786
- Datadog Access Discovery #54053

### Accessibility

**FE - Adam**

- Migrate Entire Direct Deposit Page to use the new Info Card #53631

### Direct deposit: EVSS > Lighthouse migration

- Create Comp and Pen Controller #54051
- Configure and Test Staging access #54054
- ~Review changes with Mobile App Team~ <<< Per Tom, this will need to wait until the above work is done

### Notification preferences

**FE - Adam**

- Add feature flag for MHV notification preferences #53616
- START: Build editing page for profile #53545
  - ~Should this be broken into smaller tickets? Or pushed entirely back a sprint or two?~ Done 

### Logged-in IA/nav research

**Design - Liz**

- Add recent mobile app IA findings to our research review #53626
- Complete analytics review #52796
- Complete call center/Medallia data review #54094
- Complete research plan $54092

## Sprint 6 (3/15 - 3/28)
Sprint 6 Epic [#54553](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/54553)
### Accessibility

**FE - Adam**

- Update All Profile pages to new info card component #53632

### Direct deposit: EVSS > Lighthouse migration

**PM - Berni**

- QA planning #54870
  - **We only need to test the comp & pen integration since the education integration was NOT updated**.
  - I think both Florence and Liz may have some bandwidth this sprint, so they can potentially help with this (not that anyone is a particular expert in this)
  - [Here is some test case documentation we already have put together](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md).  This is a good place to start, but I can almost guarantee it needs to be reviewed and validated, especially for appropriate staging user info.

**Design - Florence**

- User acceptance testing (UAT) planning #54999
- Conversation guide #55000

**FE - Adam**

- QA -- figure out how to locally test outlier use cases #54879

**BE - Tom**

- Look into/account for outlier contact information/direct deposit dependency #54883 (3 pts)
- Look into/account for fraud use case #54887 (3 pts)
- QA -- figure out how to locally test outlier use cases #54879 (3 pts)
- Review changes with Mobile App Team #54763 (2 pts)

### Logged-in IA/nav research

**Design - Liz**

- User research conversation guide #54776
- Recruiting #54777

### Notification Preferences
**~Design - Florence~**

~This is time sensitive, and we need to get this completed in Sprint 6 so we can get the necessary info back to VA Profile.~**
- ~#54973~ Closed by SS -- no longer need to do this work

### General
**Design - Liz**
- #54938 

## Sprint 7 (3/29 - 4/11)
Sprint 7 Epic [#54733](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/54733)

### Onboarding

New PM starts on April 3rd. Some of these tickets might continue to Sprint 8 if unable to complete in this sprint.
**PM - Travis**
- Onboard new PM [#50955](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50955)

**Profile Team - at planning, we'll ask team member to assign themselvees to the demo/s of preference -- also based on capacity**
- Personal info demo #55475
- Contact info demo #55476
- Military info demo #55477
- Direct deposit demo #55478
- Notification settings demo #55479
- Account security demo #55480
- Connected apps demo #55482

### Accessibility

**FE - Adam**
- #55296 info table accessibility updates / miitary info, acct security pages to new info card component)(this ticket was broken out of Sprint 6 ticket 53632 to make the work more manageable)

### Direct deposit: EVSS > Lighthouse migration

**FE - Adam**

- Vets-API Review with FE (Adam) #54769 (2 pts)
- Integration Testing between FE and BE (Staging) #54771 (4 pts)

**BE - Tom**

- Vets-API Review with FE (Adam) #54769 (2 pts)
- Integration Testing between FE and BE (Staging) #54771 (4 pts)
- Update Direct Deposit BE Documentation #54762 (3 pts)

**Is backend/frontend work done at this point? If so, we are ready to move on to QA tasks next sprint**

### Notification preferences

**FE - Adam**

- Update notification preferences so that the feature flag can filter by channel (email/text) #55657
- Update notification preferences so that it filters out the new QuickSubmit group #55658

### Logged-in IA/nav research

**Design - Liz**

- Run research #55595
- Topline summary #55596

## Sprint 8 (4/12 - 4/25)
Sprint 8 Epic [#54916](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/54916)

### Accessibility

**FE - Adam**
- Code cleanup; Any bug fixes; Remove feature toggle(s)
- Assuming all work is done, we can close out this project! If not, extend into sprint 9.

### Direct deposit: EVSS > Lighthouse migration

**Is backend/frontend work done at this point? If so, we are ready to move on to QA.**

Things that need to be true for us to move on to QA:

- All BE work is done.
- All FE work is done.
- Tom has validated that Lighthouse is connecting downstream to staging user data accordingly, so we're able to validate things on staging through QA.

If anything is not done, move QA back a sprint.

**Whole Team**

- Run QA & create bug tickets
  - Everyone should be part of this.

**BE -- Tom**

- If time, start on fixes from QA

### Notification preferences

**FE - Adam**

- Build editing page for profile PT2 #54434
- Build the new page for the mobile # #53547

### Logged-in IA/nav research

**Design - Liz**

- User research write-up
- Start consolidated report on all research efforts
  - This should highlight the main problems with navigating the logged-in experience, as supported by our research review, analytics, and user research. 
  - It does not need to be overly redundant of the user research report.
  - It does NOT need to pose immediate solutions, though it can provide high-level recommendations on next steps (eg. more research in specific areas; elevating XYZ; etc).
 
## Sprint 9 (4/26 - 5/9)
Sprint 9 Epic [#56506](https://github.com/department-of-veterans-affairs/va.gov-team/issues/56506)


### Direct deposit: EVSS > Lighthouse migration
**BX Note: Let's move the following to Sprint 11**
~This assumes QA is done, and any fixes from QA have been implemented. If not, please adjust the plan accordingly.~

**PM**
~- Fill out [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) and add it to [project folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration)~
~- Submit ticket for privacy and security review~

**Design**

~- Recruit for UAT -- **Only do this if QA is complete, fixes have been implemented, and the privacy and security review is complete and does not recommend any changes**~
~- Run sessions~

**BE**

~- Assist with privacy and security review submission~

**BX: Move QA tasks to Sprint 10**

**BE**
- Carry-over: Validate - Config and test metrics and error logging (1 pt left) #56706

**BE/FE**
- Carry-over: In Progress - Figure out how to locally test outlier use cases (1 pt left) #54879

**If not ready to run QA tasks, what dev work or integration testing is left?**

 - Finish FE initial adapter rollout work (1 pt left) - #56569
 - FE lighthouse api revision (3 pts) - #57407
 - BE updates and refactorings (4 pts) - #57359
 - BE request Lighthouse Production access (2 pts) - #57357
 - BE determine client IDs required for Lighthouse APIs (discovery) (2 pts) - #57361
 - BE document Lighthouse testing issues (2 pts) - #57419
 
### Notification preferences

**PM** (w/ help of team's input)

- Carry-over: Perform action items from Collab Cycle KO ticket #57409 (refer to Recommended Touch Points section of the ticket)

**FE - Adam**
- Carry-over: Currently blocked - Updated notif. pref. so that feature flag can filter by channel (email/text) #55657 (1 pt left)

**BE - Tom**

**This assumes Tom is mostly off of direct deposit work. If that is backed up and still going, please prioritize it accordingly**

- Default send technical discovery **(BX: See paragraph below for Tom's answers)**
  - What is required to consume default opt-in indicator?
  - While the UI may not change, does this require any FE changes in terms of how FE connects to BE, or is this entirely BE work? 
  - Confirm whether default send work needs to happen before Adam can start on FE updates based on Liz's designs.

_There doesn't seem to be any BE work required - the default opt-in indicator is already present in the responses from vets-api.   Here are the [discovery notes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/default-send/july-2022-notes.md).  But the BE documentation does not include this indicator._ - Tom

BE
- Communication preferences | Document default opt-in flag (1 pt) - #57421

### General
**Design**
- #48952 - Research Recommendations | Update Documentation on Mobile Number Flow (should be unblocked by Sprint 9)

**FE**
- #57344 - Deprecating React components / migrate to Web Comps (2pts)

**BE**
- Remove Email change toggle #54082 (2 pts)

### Logged-in IA/nav research

**Design - Liz**
- Carry-over: Validate (waiting for feedback from Product Lead) - Complete research synthesis (3 pts left) #56722
- Finish consolidated report on all research efforts #57090 (8 pts)
- Talk about next steps with Mikki and Chante (this could be anything from more work in this area to putting this on hold until Samara is back from leave) #57091 (3 pts) 

### Unplanned Work
For this sprint -- allot 2-3 points for unplanned work (if needed)


## Sprint 10 (5/10 - 5/23)

### Direct deposit: EVSS > Lighthouse migration
**BX Note: I've moved the following to Sprint XX for when Samara returns -- if we finish our dev work early, we put Direct Deposit on hold and wait for Samara's return to Launch once she gets back**
~This assumes we are ready to launch. If not, push back tasks accordingly.~

~- Launch go/no-go~
  ~- Please fill out the [launch go/no-go doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md), add it to the [project folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration), and conduct meeting with team.~
~- **IF READY** Launch to 10% and monitor for a week~
~- Launch to 25% pending no issues at 10% and monitor for a week. If there are issues at 10%, resolve those before increasing % for phased launch.~

**Is backend/frontend work done at this point? If so, we are ready to move on to QA.**
Things that need to be true for us to move on to QA:

- All BE work is done.
- All FE work is done.
    - **BX: Only ticket left that I know of is: Integration testing between FE and BE (Staging) #54771 (4 or less points)**
- Tom has validated that Lighthouse is connecting downstream to staging user data accordingly, so we're able to validate things on staging through QA.

If anything is not done, move QA back a sprint.

**Whole Team**

- Run QA & create bug tickets
  - Everyone on Profile team should be part of this (Product/Delivery/Design/Engineering).
- BX note: talk to team to figure this out, and refer to [PM ticket #54870](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/54870) that houses the QA spreadsheet Samara created before she left. Tom H. and Adam W. are both currently updating this spreadsheet in Sprint 9 to make sure we have all the correct test use cases captured in the there before we run QA as a whole team in Sprint 10.]

**BE -- Tom**

- If time, start on fixes from QA

### Notification preferences

**BX: The following are Samara's notes before she left. Since we've had to move some work from Sprints 7-9, looks like these bullet points should be moved to Sprint 11. Please check with the team to confirm.**
~- Assuming technical discovery happened last sprint, PM to scope out work for both default send indicator and adding email as a channel. Please account for required collab cycle milestones.~
~- FE/BE work dependent on technical discovery for both default send indicator and adding email as a channel.~
~- Design: When new mobile phone number flow is launched in production, update documentation (ticket already exists).~

FE

- Rollout, Cleanup of edit mobile phone page #53549 - 3 pts (pushed out to Sp 10)
- Technical discovery on adding email as a channel #53547 - 7 pts


### Logged-in IA/nav research

- Liz: TBD; If there are immediate next steps, please keep Liz on this effort


## Sprint 11

### Direct deposit: EVSS > Lighthouse migration
**BX Note: Moved this over from previous sprints because we weren't ready for it yet**
This assumes QA is done, and any fixes from QA have been implemented. If not, please adjust the plan accordingly.

**PM**
- Fill out [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) and add it to [project folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration)
- Submit ticket for privacy and security review

**Design**

- Recruit for UAT -- **Only do this if QA is complete, fixes have been implemented, and the privacy and security review is complete and does not recommend any changes**
- Run sessions

**BE**

- Assist with privacy and security review submission

### Notification Preferences
**BX: Moved from Sprint 10 work since the team was not yet ready to do these then. Check with team if ready for these in Sprint 11.**
- Assuming technical discovery happened last sprint, PM to scope out work for both default send indicator and adding email as a channel. Please account for required collab cycle milestones.
- FE/BE work dependent on technical discovery for both default send indicator and adding email as a channel.
- Design: When new mobile phone number flow is launched in production, update documentation (ticket already exists).

## Sprint XX

### Direct deposit: EVSS > Lighthouse migration
**BX Note: Pulled this out of Sprint 10 and moved it here because we will NOT launch until Samara returns from leave**
This assumes we are ready to launch. If not, push back tasks accordingly.

- Launch go/no-go
  - Please fill out the [launch go/no-go doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md), add it to the [project folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration), and conduct meeting with team.
- **IF READY** Launch to 10% and monitor for a week
- Launch to 25% pending no issues at 10% and monitor for a week. If there are issues at 10%, resolve those before increasing % for phased launch.
