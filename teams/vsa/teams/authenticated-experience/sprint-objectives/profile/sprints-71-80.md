# Profile Sprint Objectives: Sprints 71 – 80

- [Sprint 71](#sprint-71-46---419)
- [Sprint 72](#sprint-72-420---53)
- [Sprint 73](#sprint-73-54---517)
- [Sprint 74](#sprint-74-518---531)
- [Sprint 75](#sprint-75-61---614)
- [Sprint 76](#sprint-76-615---628)
- [Sprint 77](#sprint-77-629---712)
- [Sprint 78](#sprint-78-713---726)
- [Sprint 79](#sprint-79-727---89)
- [Sprint 80](#sprint-80-810---823)

## Sprint 71 (4/6 - 4/19) 

### General

- Onboard Sharon #39204

### Personal information revisions

Goal: Finish BE and connect to frontend

**PM**

- Request QA for 5/4 - 5/17 sprint
- Finish all QA prep
- Finish call center guide

**Design**

- Finish call center guide
- If time, UAT research plan and conversation guide 

**FE**

- Start connecting frontent to backend; Finish this if possible

**BE**

- Finish BE!!

### Bad address indicator

**PM**

Note: We can move this a sprint if Sharon needs to focus on general onboarding before jumping into this task.

- Start on QA use cases (this will not be completed yet)
- Figure out how we can get a staging user with the bad address indicator for testing (might require working with VA Profile)

### Notification preferences

**PM**

- Once we have final IA/content recommendations, make sure those are communicated to VA Profile

**Design**

- Update mocks to add the new comp & pen notification
- Review with IA and content (so we can get feedback to VA Profile team)

### Address change messaging

- Continue work (may need to check in with Christina and Adam on current status)

### MHV research

- Liz to deliver final report

## Sprint 72 (4/20 - 5/3)

### Personal info revisions

Anything outstanding from sprint 71, plus...

**PM**

- Submit call center guide for review
- All QA-related tickets (moving over from sprint 71)

**Design - Christina**

- Finish contact center guide (moved from sprint 71)
- Create UAT research plan (moved from sprint 71)
- Create UAT Convo Guide #39866

**FE - Adam**

Moved these from sprint 71

- Add ability to Add/Update Preferred Name #38953
- Add ability to Add/Update Gender Identity #38952

**Everyone**

- Once the feature is fully complete in staging, everyone on the project (Sharon, Christina, Adam, Tom) should go into staging and review the feature to make sure it's ready for QA. Note that this might need to get moved to the beginning of sprint 73 before QA.

### Bad address indicator

**BE - Tom**

Tom should finish all backend work for personal information revisions first. So, if there is still outstanding work from sprint 71 or other odds and ends that aren't on my radar, he should do that first before moving on to bad address indicator work.

- Work on bad address indicator emails
  - Initial email blast that will go out to everyone with the BAI once the functionality launches
  - Individual emails that will go out to folks if a new BAI is added to their accounts *after* we launch the feature

### Address change messaging

- Adam is finishing accessibility tests
- Once this is in prod, we can do an internal UAT with our own prod accounts
- Samara to file analytics request

### MHV profile research

**Design - Liz**

- Share results with OCTO
- Share results with MHV team/stakeholders

### Notification prefs

**PM - Sharon**

- Share IA/content recommendations with VA Profile #39381 (moved from sprint 71 because content/IA aren't done)

**FE - Mark**

- Review how this feature was built so we make sure we understand the frontend implementation
  -  Need to determine if Samara's understanding is correct, and if VA Profile is sending us the groups (eg "Your health care"), items (eg. Appointment reminders), and channels (eg. text) or if some of this is hard coded on our end.
  -  Note: You'll see that we've added some code to show the health care section conditionally, but the other section is not gate by any conditional logic.
  -  Ultimately, our goal is to make sure we know what we need to do as new notification preferences are added.

### Direct desposit

**Design - Liz**

- Update designs to account for showing direct deposit section persistently instead of conditionally
  - We will still show the DS Logon/MHV gate.
  - We'll need a state for people who have neither type of direct deposit.
  - For people who have at least one kind of direct deposit, the design shouldn't really change.
  - We'll need to change how we handle errors for this section when we are having backend difficulties. Right now, an alert shows on Personal & Contact Information if we are having trouble connecting to the backend. We'll no longer need to show this alert on the Personal & Contact Information section. We'll be able to show that within the direct deposit section because we show the section no matter what.
  - In the Medallia data, people mentioned that they receive education payments via check and want to set up direct deposit on VA.gov. People can't set up direct deposit for education on VA.gov, they have to call in. We should create some copy that let's them know this. Note: People can set up direct deposit for the first time for comp & pen, so we do not need to add this copy to that section.


## Sprint 73 (5/4 - 5/17)

### Bad address indicator

**PM**

- Start on QA use cases #39379
  - This likely will not be completed this sprint
  - Talk to Tom/Marci about which test user to use

**Design - Christina**

- Create high fidelity mockups

### General

**Mark & Tom**

- Work on diagrams for profile products

## Sprint 74 (5/18 - 5/31)

## Sprint 75 (6/1 - 6/14)

## Sprint 76 (6/15 - 6/28)

## Sprint 77 (6/29 - 7/12)

## Sprint 78 (7/13 - 7/26)

## Sprint 79 (7/27 - 8/9)

## Sprint 80 (8/10 - 8/23)
