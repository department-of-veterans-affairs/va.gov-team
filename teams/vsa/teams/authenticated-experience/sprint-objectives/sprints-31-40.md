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

- [Post-launch review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in)

**PM/Design/FE**

- Complete the tests and provide documentation for accessibility tests mentioned in #15247

### My VA redesign

**Design**

**FE**

- Reduce Javascript bundle size #1969

## Sprint 35 (11/18 – 12/1)

### My VA redesign

**Design**

**Dev**

## Sprint 36 (12/2 – 12/15)

### My VA redesign

**PM**

Are we ready for Matt to work on staging users list yet?

**Design**

**Dev**

## Sprint 37 (12/16 – 12/29)

### My VA redesign

**Design**

**Dev**

## Sprint 38 (12/30 – 1/12)

### My VA redesign

**Design**

**Dev**

## Sprint 39 (1/13 – 1/26)

**Design**

**Dev**

## Sprint 40 (1/27 – 2/9)

**Dev**
