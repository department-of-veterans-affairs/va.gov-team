# Authenticated Experience Sprint Objectives: Sprints 31 – 40

- [Sprint 31](#sprint-31-923---106)
- [Sprint 32](#sprint-32-107--1020)
- [Sprint 33](#sprint-33-1021--113)
- [Sprint 34](#sprint-34-114--1117)
- [Sprint 35](#sprint-35-1118--121)
- [Sprint 36](#sprint-36-122--1215)
- [Sprint 37](#sprint-37-1216--1229)
- [Sprint 38](#sprint-38-1230--112)
- [Sprint 39](#sprint-39-113--126)
- [Sprint 40](#sprint-40-127--29)

## Sprint 31 (9/23 - 10/6)

Any outstanding tickets from last sprint, plus the following:

### Profile 2.0

- Launch to 50%
- Assuming launch to 50% goes well, launch to 100%
- FE backlog updates we can bring in

### Logged-in homepage

**Design**

- LIH Design Intent checkpoint #13255 (I moved this from sprint 30)
- Plan for how to work with the platform team #10516
- Start: Design health care section of the homepage

**FE**

- Technical comparative analysis: How do other websites handle having a logged out and logged in homepage?

### Direct deposit for Edu

**Design**

Jason from eBenefits will create these tickets, but it's OK to include them in our sprint epic.

- Review the feature on eBenefits
- Talk to eBenefits: What functionality is not clear/shown? What questions do we have?
- Understand what education benefits gets updated with DD edu and what does not, and document this
- Mockups?

**Backend**

- Begin: Create BGS CH33 DDEFT Service integration #13286

Note: Lihan will also be working on [#12089](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12089) for the Caregiver team, so he will likely not finish the direct deposit work this sprint.

### Pact work

- VSA Auth Experience - Pact setup for [product name] #13336

## Sprint 32 (10/7 – 10/20)

### Profile 2.0

Any tickets that aren't finished from sprint 31, plus:

- Additional bug fixes and post-launch enhancements

Note: I have regrouping with platform for a post-launch and initiating the 508 review set for next sprint.

### Logged-in homepage

**PM**

- Help create tickets for the disability/claims section design work.

**Design**

*Phase 2: Design Healthcare, Disability/Claims sections*

Note: The goal was to have the health care section largely completed in sprint 31 and then to start on the disability/claims section this sprint. Based on out 10/2 convo with Tressa and Cassandra, I think they're behind and I'm questioning whether the disability/claims section will be started this sprint. However, we should get the disability/claims section tickets created and talk about long term planning with them over the next 3ish sprints.

Any tickets that aren't finished from sprint 31, plus:

- LIH Navigation #14360 (if not wrapped up)
- Healthcare: Send a secure message to your health care team #13920
- Healthcare: Schedule and view your appointments #13921
- Design for Health Care Application "status" update #7457
- Copy/Messaging for Health Care Application (HCA) "status" section #7455
- Work with copy on sections that are already complete
- Start design for disability/claims section

### Direct deposit for Edu

**PM**

Any tickets that aren't finished from sprint 31, plus:

- Project Kickoff [Direct Deposit for Education Benefits] #14167
- Depending on where design is, maybe hold the [design intent checkpoint](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#design-intent-collaboration) as well
- **Jim Adams** Create Initial Mockup for EDU Direct Deposit #13810 

### 10/24 Cerner update

- [FE] My VA: Cerner go-live updates for Spokane facilities on 10/24 #13832

### Preferred Facility technical discovery

- Samara to continue trying to get additional information to determine next steps

### VA Profile: Remove instances of "Vet360"

Note: This is a DevOps tickets, and I am figuring out who can work on it. However, keeping it here since Lihan may be helping in come capacity and since I have to make sure it gets done.

- [BE/DevOps] Change instances of "https://env.vet360.va.gov/" to "https://env.vaprofile.va.gov/" in INT, QA, PPD, PRD environments #14188

### VA Profile: Issue with bogus addresses being saved

- Critical: Investigate VA Profile issue to determine whether veteran account has been hacked [#175](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/175)
- Add address form field validation to prevent users from entering web URLs #14471

### Pact work

- [BE] - Setup Pact test #14234
- [FE] - Write Pact test #14233

## Sprint 33 (10/21 – 11/3)

For every project, this sprint includes all outstanding tickets from sprint 32, plus:

### Profile

- Profile code clean-up

**PM**

- [Request full accessibility and 508 office review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit)

### My VA redesign

**Design**

Week 1 of sprint 33

- Revisit direction: Wireframe explorations
  - Details for ticket
    - This should be one week
    - My VA goals: Get users to personalized information and tasks as quickly as possible. The page should be personalized, actionable, and scalable.
    - We should produce sketches/low-fi wireframes with real data, but do not focus on visual design.

Week 2 of sprint 33

- ?? We'll let the exploration work help us figure out next steps.

**Note:** No need to include the following design tasks in the objectives epic. We might do this stuff depending on how the exploration/wireframe week goes, but plans might change as a result of the explorations.

- My VA Overview section
- Meet with the following folks re: general My VA questions OR health care section. **Ideally, these are as soon as possible**
  - IA (Talk about nav/bread crumb treatment; On page navigation) — Schedule for week of October 26 (Meg is out next week)
  - Design system council (Review new health care patterns) 
  - Accessibility (Review new health care patterns)
  - Content (copy in the health care section)
  - VAOS (to make sure appointment details are correct)
  
**Frontend**

- Create wrapper for showing dashboard 1.0 and dashboard 2.0

### Direct deposit for Edu

**Design**

**Note**: We are still waiting on some answers from Luke Tickner about some things, so this might put design and research on pause.

- Complete design if not done
- Copy review for profile wireframes (this should just be a formality since I think all content was copied from the direct deposit for comp & pen designs)
- Content for Direct Deposit Landing Page #14367
- (Maybe) Start research prep (plan and convo guide)

**Dev**

- Where are we with initial build? If not done, finish this this sprint.

### VA Profile-related work

- VA Profile: Consider changing the amount of time we cache an address #14626

## Sprint 34 (11/4 – 11/17)

### Profile

**PM**

- Prep for [post-launch review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in)
- Schedule post-launch review

**PM/Design/FE**

- Complete the tests and provide documentation for accessibility tests mentioned in #15247

**Design**

- **If** design has time while they are waiting for My VA research recruiting, pull in this ticket (and if they don't have time, then no need to do these):
  - Look into error messaging/location #10722

**FE**

- (Maybe) Update links and text within Profile that currently go to sign-in FAQ #14998
- Any FE work left? OK if not.

### My VA redesign

**Design**

- Research plan #13925
- Conversation guide #13926
- Conduct research (Depending on scheduling, this may carry over into the next sprint)

**FE**

- Reduce Javascript bundle size #1969

### Direct deposit for edu

**PM**

- Prepare for usability testing Platform review #15686

**Design**

- Research Plan for Usability Testing of EDU Direct Deposit #13807
- Conversation Guide for Usability Testing of EDU Direct Deposit #13808

### Preferred facility

- Technical discovery

## Sprint 35 (11/18 – 12/1)

Any outstanding work from sprint 34, plus:

### Profile

**FE**

- Add 2FA prompt for when someone is LOA3 but not 2FA and is eligible for direct deposit #16218

### My VA redesign

**Design**

- Conduct research #15684 
- Research summary
- Make design updates for mobile design based on user testing feedback

### Direct deposit for edu

**PM**

- Schedule/hold usability testing platform review #15686

**Design**

- Build prototype
- Conduct research
- Start summary (if time)

### Preferred medical facility

**PM**

- Schedule/hold [project kickoff](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#project-kickoff)

**BE**

- Backend build #16107

### Analytics update

- Add error codes for address save failures to GA dashboard #16088

### Maintenance/bug fixes

Don't include if this is done before the sprint:

- Cache VA profile get_person calls that return 404s #15971

## Sprint 36 (12/2 – 12/15)

### Time off

- Lihan: 12/14 - 12/15

Anything outstanding from sprint 35, plus:

### My VA redesign

**Design**

Samara

- Work with DEPO team to determine final direction of My VA (dashboard or newsfeed?)

Both designers

- Take an a day or two to agree on what major conclusions came out of research

Designer #1:

- Research summary (should take no more than a week)

Designer #2 (designer #1 can help with this once the write-up is done):

**We can wait on this until we have an answer about final direction of My VA**

- Incorportate user feedback into designs
- Clean up wireframes so they are ready for desktop conversion:
  - Pick final direction (**Samara will help with this**)
  - Finalize wireframes. This might include:
    - Deciding exactly which blocks and what information we are including on the page.
    - Finalizing the order of blocks on the page.
    - Adding a page title (H1) (eg. "My VA")
    - Mocking up blank states 
- If time, start desktop conversion

### Direct deposit for edu

**PM**

- Put QA spreadsheet test cases into TestRail

**Design**

- Conduct research
- Research summary
- Final design updates

**FE** 

- Direct deposit for edu build #16479
  - If this was broken down into smaller tickets, let's figure out what is doable this sprint.
  - [FE] Rename existing direct deposit/payment info code to something more specific to comp and pen when applicable #16684
  - [FE] Build redux actions/reducers for getting edu DD info #16685 
  - [FE] Determine if we can even tell if someone is eligible who has not yet set up DD for edu benefits #16686
  - [FE] Make educationDirectDeposit feature flag to gate new work #16793

### Preferred medical facility

**BE**

- Continue backend build #16107 (if necessary)

### Analytics

- Direct Deposit Eligibility/Status Analytics Data Layer Changes #16603

## Sprint 37 (12/16 – 12/29)

### Time off

- Tressa: 12/21 - 1/1
- Cassandra: 12/21 - 1/1
- Erik: 12/24 - 1/1
- Sandra: No time
- Lihan: 12/16 - 12/29
- Matt: 12/17 - 12/18; 12/24 - 1/1
- Jim Adams: 12/24 - 25; 12/31 - 1/1
- Samara: 12/24 - 12/25; 12/30 - 1/1

### My VA redesign

**Design**

Before break

- Finish converting mobile wireframes to desktop
- Submit wireframes for copy review (**Note**: Samara will manage these discussions while Tressa/Cassandra are out)

### Direct deposit for edu

**Design**

- Remove "add" state for direct deposit for edu from mockups #17345
- Submit for [IA review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#information-architecture-ia-request)

**FE**

- Continue frontend build

### Preferred facility

On hold this sprint

### VA Profile notification preferences

**PM**

- Create product outline

### Address error logging

- Stop recording address validation errors in Sentry when we no longer need it #17315

## Sprint 38 (12/30 – 1/12)

Any tickets from last sprint (some are already noted), with the exception of the MVI error messaging work, plus:

### Profile

BE

- Are we sending deprecated IDs to VA Profile? #17739

### My VA redesign

**Design**

- Finalize desktop and mobile wireframe #17307
- LOA1 design
- Mock up first-time user experience

### Direct deposit for edu

**Main objective: Finish backend work, review the build, and be ready for QA**

**BE**

- Modify Ch33BankAccountsController#index method to also return bank name #17294
- Change PUT profile/ch33_bank_account to return bank details after a successful update #17292

**FE**

- Make updates as needed before QA

### VA Profile notification preferences

**BE**

- Meet with Terry
- Technical discovery
- Start implementation, depending on how much discovery is needed and convos with Terry

## Sprint 39 (1/13 – 1/26)

### Profile

**FE**

- Look into analytics error discrepancies #18270

**BE**

- Log when users have a mvi_response.status of OK then return a va profile MVI201 error #18349

### My VA redesign

**PM**

- Make a list of staging test cases based on wireframes

**Design**

- Visual design
- Gather feedback from design team
- How do we guide people to the new My VA dashboard? #14581
- Cerner/MHV split use case for My VA dashboard #14025
- [Design] Submit MyVA wireframes for copy review #17530 

### Direct deposit for edu

BE READY FOR QA NEXT SPRINT

**PM** 

- Request QA for following sprint. To make sure we are ready, this requires:
  - Making sure the feature is done (backend work is done; frontend work is properly connected to backend)
  - Reviewing the feature
  - Making sure Jim Adams has reviewed the feature
  - Talking with Erik and Lihan to make sure we are 100% going to be ready for QA
  
**Design**
- Review Erik's initial build
- Error to show when we cannot connect to a Direct Deposit endpoint #18338 (note: this should not hold up QA)

**FE**
- [FE] Make updates to DD for Edu as needed prior to going into QA #18051

**BE**

- Set up direct deposit for edu confirmation email #18262

### VA Profile notification preferences

**BE**

- Technical Discovery #18054
- Start implementation #18056

## Sprint 40 (1/27 – 2/9)

### My VA redesign

**PM**

Might be carried over from last sprint:

- Make a list of staging test cases based on wireframes (MyVA) #18042

Original goal:

- Prep for [usability test prep review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#collaboration-format-30-minute-meeting-2)

**Design**

Goal: All design needs to be done, work needs to be submitted for copy review, and move onto research docs.

- Any open tickets from last sprint
- Evaluate new My VA title #13738 (This should be part of the copy review)
- Research plan for usability testing of finalized designs
- Convo guide for usability testing of finalized designs

**FE**

- Start FE build (tickets pending, but epic is #18819)

### Direct deposit for edu

**PM**

- Complete release plan and save in direct deposit for edu GitHub folder ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/97759a81a47c73da8bf03e35f3a13bb3c689d18b/platform/product-management/release-plan-template.md))
- [Analytics request (collab cycle)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#analytics-request)
  - Analytics planning
  - Meet with analytics 
  - Oversee implementation
- Start contact center guide

**Design (Jim Adams)**

- Start contact center guide

**QA**

- Complete QA
- Create tickets if there are issues

**FE**

- QA fixes, if applicable

### VA Profile notification preferences

**PM**

- Kickoff?

**BE**

- Continue/finish implementation
