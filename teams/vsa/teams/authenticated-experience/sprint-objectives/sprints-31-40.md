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

Anything outstanding from sprint 35, plus:

### My VA redesign

**Design**

Both designers

- Take an afternoon/a day to agree on what major conclusions came out of research

Designer #1:

- Research summary (should take no more than a week)

Designer #2 (designer #1 can help with this once the write-up is done):

- Incorportate user feedback into designs
- Clean up wireframes so they are ready for desktop conversion:
  - Notification block template that works for all notification types
  - "Overview" blocks need a title and proper CTA (confirm with accessibility on what we need on screen vs. what we can use an aria-label)
  - Page title (H1)
  - Blank states 
- If time, start desktop conversion

### Direct deposit for edu

**PM**

- Put QA spreadsheet test cases into TestRail

**Design**

- Finish research
- Research summary
- Final design updates

**FE** 

- Direct deposit for edu build #16479
  - If this was broken down into smaller tickets, let's figure out what is doable this sprint. 

### Preferred medical facility

**BE**

- Continue backend build #16107 (if necessary)

### VA Profile notification preferences

**PM**

- Create product outline

### Analytics

- Direct Deposit Eligibility/Status Analytics Data Layer Changes #16603

## Sprint 37 (12/16 – 12/29)

### My VA redesign

**Design**

- Convert mobile wireframes to desktop
- (If time/in scope) Mock up first-time user experience
- Initial pass at visual design
- Submit wireframes for copy review

### VA Profile notification preferences

**PM**

- Hold platform kickoff (maybe)

**BE**

- Technical discovery

## Sprint 38 (12/30 – 1/12)

### My VA redesign

**PM**

- Make a list of staging test cases based on wireframes

**Design**

- Visual design
- Gather feedback from design team
- Finalize My VA copy

**FE**

- Start FE build

## Sprint 39 (1/13 – 1/26)

### My VA redesign

**PM**

**Design**

- Review visual design with team; Get feedback
- Finalize visual design

**FE**

- Continue FE build

**Dev**

## Sprint 40 (1/27 – 2/9)

### My VA redesign

**PM**

- Prep for usability test prep review

**Design**

- Research plan for usability testing of finalized designs
- Convo guide for usability testing of finalized designs

**FE**

- Continue FE build

## Sprint 41 (2/10 – 2/23)

### My VA redesign

**PM**

- Hold usability testing review at beginning of sprint

**Design**

- Recruit for research
- Conduct research

**FE**

- FE to begin incorporating visual design

## Sprint 42 (2/24 - 3/9)

### My VA redesign

**PM**

**Design**

- Research summary
- Hand off final designs to FE
