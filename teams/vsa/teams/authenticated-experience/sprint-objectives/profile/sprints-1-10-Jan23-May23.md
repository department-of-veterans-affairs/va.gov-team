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

Note: This work needs tickets created.

**Design - Liz**

- Update Sketch files (if needed) and links to documentation for address validation << Liz and Berni discussed this item, and there's no additional work needed here. The Sketch files and use case documentation reflect the changes FE is currently making. Once FE changes are complete, this work is complete. 

**FE - Adam**

- Remove feature flags for any accessibility work that has already launched #53357
- New Toggle and MVP of Info Card Component #53630

### Direct deposit migration

Note: This work needs a ticket created. <<< Done

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

### Onboarding

This is dependent on when these people are actually hired:

- Onboard new PM [#50955](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50955)

### General

**BE - Tom**

- Province populated on U.S. Territory Addresses #52786
- If Tom has bandwidth, do research on new Datadog setup and whether we can use this for monitoring alerts

### Accessibility

**FE - Adam**

- Migrate Entire Direct Deposit Page to use the new Info Card #53631

### Notification preferences

**FE - Adam**

- Add feature flag for MHV notification preferences #53616
- Build editing page for profile #53545

### Logged-in IA/nav research

**Design - Liz**

- Add recent mobile app IA findings to our research review #53626
- Complete analytics review #52796

## Sprint 6 (3/15 - 3/28)

### Accessibility

**FE - Adam**

- Update All Profile pages to new info card component #53632

### Notification preferences

**FE - Adam**

- Build the new page for the mobile # #53547
- Rollout, Cleanup of edit mobile phone page #53549

## Sprint 7 (3/29 - 4/11)
## Sprint 8 (4/12 - 4/25)
## Sprint 9 (4/26 - 5/9)
## Sprint 10 (5/10 - 5/23)

