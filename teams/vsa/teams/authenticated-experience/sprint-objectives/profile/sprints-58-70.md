# Profile Sprint Objectives: Sprints 58 – 70

- [Sprint 58](#sprint-58-106---1019)
- [Sprint 59](#sprint-59-1020---112)
- [Sprint 60](#sprint-60-113---1116)
- [Sprint 61](#sprint-61-1117---1130)
- [Sprint 62](#sprint-62-121---1214)
- [Sprint 63](#sprint-63-1215---1228)
- [Sprint 64](#sprint-64-1229---111)
- [Sprint 65](#sprint-65-112---125)
- [Sprint 66](#sprint-66-126---28)
- [Sprint 67](#sprint-67-29---222)
- [Sprint 68](#sprint-68-223---38)
- [Sprint 69](#sprint-69-39---322)
- [Sprint 70](#sprint-70-323---45)

## Sprint 58 (10/6 - 10/19)
[Sprint 58 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30923)

### General onboarding & team management

**PM**

- Onboarding #30884

**FE**

- Onboarding #30886

### Personal information updates

**PM**

- Review product outline
- Hold collab cycle kickoff
- Schedule collab cycle design intent
- Create tickets for design and frontend

**Design**

- Complete initial mockups
- Collaborate on copy with content team
- Hold collab cycle design intent  

**FE**

- Review product outline
- Tech discovery (getting familiar with profile)
- Start build

## Sprint 59 (10/20 - 11/2)
[Sprint 59 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31784)

### General 

**PM**

- Product review of contact information and address validation
- Product review of direct deposit

**FE**

- Profile improvements in backlog

### Personal information updates

**PM**

- When design work is completed, create frontend documentation 
  - [Example of frontend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/notification-preferences/frontend)

**Design**

- Design updates that came out of the design intent meeting
- Meet with content
- [Sitewide content/IA review](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/Information-architecture-(IA)-request.1782120468.html)
- Finalize designs with updated copy

**FE**

- Continue frontend build

## Sprint 60 (11/3 - 11/16)
[Sprint 60 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32282)

### General 

**Design**

- Onboard Christina to the team (Samara can create this ticket)

**FE**

- Profile improvements in backlog as schedule allows

### Personal information updates

**PM**

- Sit in on MPI calls

**Design**

Onboard Christina to this work:

- Kevin to onboard Christina to the design work
- If not already done, finalize all design comps 

**FE**

- Continue build

**BE**

- Sit in on MPI calls

## Sprint 61 (11/17 - 11/30) 
[Sprint 61 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32701)

### PTO

- **Marci**: Nov 24 - 26
- **Samara**: Nov 24 - 26
- **Liz**: Nov 24 - 26
- **Christina**: Nov 25 - 26
- **Erik**: ?
- **Taylor**: Nov 24 - 26
- **Zach**: ?
- **Lihan**: Nov 25

### Personal information updates

**PM**

- Start putting together list of test cases
- Start prep for midpoint review

**Design**

- Write the research plan
- Write the conversation guide
- Kick off recruiting?

**FE** 

- Continue build

**BE**

- If possible, get started on backend integration (this is entirely dependent on MPI being ready to work with us, so if they are not, we will have to push this)

### General profile backlog

**Design**

- As time allows, pull in tickets for both Liz and Christina from the backlog

**FE**

- Pull in work for Erik and Taylor from the backlog
- If Zach as availability pending Find a Form work, pull in tickets from backlog for him, too

## Sprint 62 (12/1 - 12/14) 
[Sprint 62 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33435)

Anything unfinished from last sprint, plus...

### PTO
- Lihan: December 10 - 23

### General updates

**PM**
- Scope/prioritize reminder for address updates to remind Veterans they have two addresses on file they may need to update #30112

**Design**

- Update content for how to update name/birth date/birth sex (Update content for health info first if we haven't heard back from VBA)

### Direct deposit

- All direct deposit updates should be done by Friday
- Make sure direct deposit works for Login.gov staging users (PM, Design, FE, BE should all do their own validation)

### Notification preferences

**PM**

- Submit for 508 accessibility review (might need to check in with platform on how exactly to do this)

**Design**

- Update content to reflect notification settings #29582

### Personal information updates

**PM**

- Midpoint review 

**Design**

- Recruit for user testing
- Mock session for user testing
- Start testing, if time 

**FE**

- Continue FE build

**BE**

- Start BE build (tickets TBD after we talk to MPI on Wednesday)

## Sprint 63 (12/15 - 12/28)
[Sprint 63 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33860)

### PTO

- Samara: 12/23-24; 12/29-31
- Heather: 12/23-24; 12/31
- Marci: 12/23-27; 12/30-31
- Tressa: 12/24; 12/29-31
- Liz: 12/24-31
- Christina: 12/23-31
- Taylor: 12/24; 12/31
- Lihan: 12/10-24
- Tom: 12/27-31
- Adam: 12/27-28

### Onboarding

- Onboard Tom

### General profile needs

**PM**

- QA contact information after 12/17 on staging re: VA Profile migrating to new API to make sure all our functionality works

**FE/BE**

- Update how we handle loading direct deposit for edu information so it doesn't stall loading the rest of the profile. A couple of things on this:
  - This might involve a design update as well, but let's talk strategy first before determining whether we need design or not 
  - I don't know if this is entirely a frontend task or if it will involve backend work as well. Jason's team seems to be handling this by [putting things into background jobs](https://dsva.slack.com/archives/CE4304QPK/p1639150268268300?thread_ts=1639061573.262200&cid=CE4304QPK) to not stall out the rest of the functionality. Should we consider something similar?

### Personal information updates

This depends on whether the Perigean contract is back up and running.

**Design**

- Update research plan with new dates (assuming this will be after the holiday)
- Recruit for research (contract should be back up and running on December 13)
- Confirm with Josh & Angela whether they reviewed our designs for the midpoint review. If not, please set up some time to talk through the designs with them to determine if there are any accessibility concerns.


**FE**

- Continue whatever is left of the frontend build

## Sprint 64 (12/29 - 1/11)
[Sprint 64 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34367)

### General

**FE**

- Update "Add a mobile phone" link [#34241](https://github.com/department-of-veterans-affairs/va.gov-team/issues/34241)

### Direct deposit latency issue

**BE**

For Lihan/Tom. Lihan is ultimately on Heather's team, but since he did the direct deposit build, he should work with Tom on this so that Tom can help support this feature in the future.

- Catch up on converstion in #bgs-direct-deposit-payment-info-debugging
- Determine if we need to make any changes to logging to prevent additional latentcy ([See this Slack convo](https://dsva.slack.com/archives/C02Q9FL124F/p1639786132335600))
  -  If changes are needed, make those changes 
- Is there a better way for us to learn about issues (eg. direct deposit for edu issue) than relying on veterans to tell us there's a problem?

### Personal information updates

Research

**PM**

- I don't think there are any specific PM tasks on this, but let me know if there's something you think is outstanding.

**Design**

- Conduct research
- Synthesize & share research results

**FE**

- Continue FE Build

**BE**

- Start BE build after our next regroup with MPI

## Sprint 65 (1/12 - 1/25)
[Sprint 65 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35151)

### PTO
- MLK Holiday - Jan 15
- Tom - OOO 1/19 for PIV card

### General profile

- Will probably need to pull in some FE tickets from the backlog if there are any

### Personal informaton revisions

**Design**
- Summarize research
- Share out research summary to the team
- Any design updates that come out of user testing
- If there are no design updates that come out of user testing and Christina has time, she can start on updating call center documentation

**FE**

- Is FE build done?

**BE**

- Start BE build if possible
  -  This depends on whether things are held up again with the introduction of VA Profile.   

### Bad address indicator

Start discovery

**PM**

- Do initial research on bad address indicator to understand product scope. We need to figure out the following:
  -  What is a "bad address"?
  -  What triggers the bad address indicator?
  -  What data do we get from VA Profile when we're told that someone has a bad address?
  -  What happens if someone is determined to have a bad address?
  -  Do we know how many people currently have bad addresses?
  -  Does the bad address indicator indicate bad data for anything other than home or mailing address (eg. phone numbers or email address)?

**BE**

- Review bad address indicator docs
  -  [Swagger docs](https://qa.vaprofile.va.gov:7005/contact-information-hub/swagger-ui/index.html?configUrl=/contact-information-hub/v3/api-docs/swagger-config#/)

## Sprint 66 (1/26 - 2/8)
[Sprint 66 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/35922)

### General

- Review team plan for the next few months
- Any tickets for the syncing home/mailing address issue that are still being worked on

### Personal information revisions

**PM**

- Work with design to make sure we know what design changes are coming out of research

**Design**

- Remove "sex assigned at birth" from mockups
- Determine final changes from research
- Mock up changes from research

**FE**

- Remove existing "gender" field from the frontend (Note: this needs to work with backend removal)
  - Does Adam need a mockup?
- Work on changes from research, if changes are mocked up before the end of the sprint

**BE**

- Stop calling existing "gender" field from MPI (note: this needs to work with frontend removal)
- Still on hold

### Bad address indicator

**PM**

Continue discovery

- Meeting with Barry
- Product outline (Samara can hopefully do this)
- Project kickoff (schedule towards end of the sprint)

## Sprint 67 (2/9 - 2/22)
[Sprint 67 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/36509)
A note on stuff from last sprint:

- Always move over any unfinished project work to keep us on time with projects.
- If there were general tickets we added to last sprint because we thought we had time but then ended up not having time, only move those over *if* (1) they are high priority, or (2) we clearly will have time this sprint. Otherwise, it's OK to deprioritize. Always feel free to ask if you have questions.

**Priorities**

1. Personal information revisions
2. Bad address indicator
3. All other work

### Personal information updates

**PM**

- Determine when we will be ready for QA (assuming BE development starts on time)

**Design**

- Finish all design updates (pending dependency on all of our partners)
- Update interaction design for text box input ("A [field] not listed here" options)

**FE**

- Implement any design updates that are ready

**BE**

- Start BE build if possible
  - VA Profile is targeting 2/14 for being ready for us

### Bad address indicator

**Design**

- Meet with Marci/Samara to go over work
- Start design discovery (If there's not time, we don't need to include in sprint objectives and can move this to sprint 68)
  - Understand the problem/background
  - Figure out what questions you have. Some questions I have:
    - When someone is on VA.gov, when can we detect that they have a bad address?
    - Can we proactively email all people who have the bad address indicator to log into VA.gov and update their address? How would this work? 
  - Get answers to those question 

## Sprint 68 (2/23 - 3/8)
[Sprint 68 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37428)
### Personal information revisions

Continue build; What do we still need to finish design and FE?

**PM** 

- If content/design isn't done, assess when we think that will be done based on Danielle's availability 
- If time and if designs are done, work on contact center guide updates

**Design** 

- Pending content being done, finish all design updates
- If time and if designs are done, work on contact center guide updates

**FE** 

- Implement any design updates that are ready
- Pending design/content being done, finish FE 

**BE** 

- Provide estimate of how long BE build will take; Continue BE build"

### Address Change Messaging

Wrap up all design work; complete FE if possible.

### Bad address indicator

Personal information work is higher priority, so only move on to bad address indicator tasks as time allows.

**Design**

- Design profile updates
- Bad address indicator email
  - This likely involves deciding what the email needs, understanding how VANotify will format things, and submitting a content request for actual copy

### MHV profile research (Liz)

[Project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/mhv-profile-research#readme)

This is kind of a pre-engagement sprint as Liz rolls off of My VA work. However, we talked about her being able to do the following.

- VA.gov and MHV profile evaluation and comparison
- If time, start planning for the rest of the research engagement
  
## Sprint 69 (3/9 - 3/22)

### PTO

- Tom: 3/10 - 3/14
- Samara: 3/15

### Personal information revisions

**Design**

- Finish design if it's not done
- Assuming design is done, complete contact center guide updates

**FE**

- Finish any updates if they are not already done; If done, project is on pause for Adam until backend is ready to connect to frontend

**BE**

- Continue BE

### Address change messaging

**FE**

- Frontend build

### Bad address indicator

**PM**

- Intro work to VANotify; determine what they need to do and any relevant timelines
  - What we'll want to talk about: Initial email blast, then individual emails for when new BAI is added 

**Design**

- Finish design if not done the previous sprint
- Design intent
- Work with content on profile/email copy
- Write up FE documentation on when the alert shows in the profile and when the email will be sent out (initial blast; whenever a new bad address is added)

### MHV profile research

Marci, talk to Liz about exactly which interviews she thinks she'll complete this sprint so you can create tickets. She'll have a better idea than I do what's already on her schedule.

**Design**

- Conduct stakeholder interviews

## Sprint 70 (3/23 - 4/5)

### Personal information

**PM**

- Call center guide
- Determine when we can do QA based on new BE timeline
  - Still waiting on a date from VA Profile when they will be fully ready in staging

**Design**

- Change gender identity BACK to single select
- Create mockups showing preferred name/gender identity without the other fields
  - Does not need to be all mockups, and don't need to delete mockups with four fields
  - Maybe just a few mockups -- one that shows the two fields as read only; one for each state in edit mode
  - If you need more for the call center guide, feel free to create as necessary
- Call center guide

**FE**

- Change gender identity BACK to single select
- Implement final design updates
- Create separate gates for preferred name and gender identity; pronouns and sexual orientation
  - Hide pronouns/sexual orientation on the frontend as part of the gate

**BE**

- Continue BE integration
- Determine how our approach changes given separate launch of pronouns and sexual orientation

### Bad address indicator

**Design**

- Design intent if it didn't happen
- Finalize designs/Design updates from design intent
- FE documentation

### MHV research

User research prep

- Research plan
- Convo guide
- Start recruiting if there is time

### Address change messaging

**PM/Design**

- Validate flow on staging

**FE**

- Launch to prod after flow is validated by PM/Design

### Notification preferences

**FE**

- Update prescriptions notification to show for additional facilities #38187
