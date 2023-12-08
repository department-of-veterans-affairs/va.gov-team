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

### Personal information revisions

QA!!!

**PM - Sharon**

- QA go/no-go
- Analytics request
- Release plan

**QA - Tze**

- Complete QA & create tickets for issues found (if applicable)

**Design, FE, BE**

- If applicable, start on any issues coming out of QA (this assumes QA is complete well before the end of the sprint)

### MHV Research

- Deliver results to MHV folks (ticket already exists)

### Military information

**PM - Sharon**

- Fill out/submit collab cycle kickoff issue
  - Make it clear this is a backend issue only, so we likely will only need parts of the collab cycle

**BE - Tom**

- Discovery: Review VA Profile swagger docs
- Scope work
- Start working on reintegrating military information through VA Profile

### Address change messaging

**PM - Sharon**

- Check in on analytics implementation [This is the ticket for analytics folk](https://github.com/department-of-veterans-affairs/va.gov-team/issues/40107).

**FE - Adam**

- If the analytics folks have completed the GA work, implement analytics into the address update flow

Stretch goal: If this work is ready to go into prod next sprint, we should do an internal UAT in prod via our own accounts.

### Notification preferences

TBD, but there is likely work here for either the comp & pen deposit notification or the eBenefits migration work.

### Direct deposit

This assumes all Liz's sprint 72 tickets are complete and the work is ready to go for Mark.

**FE - Mark**

- Implement Liz's updates to show direct deposit persistently

### Bad address indicator

**Design - Christina**

- Create high fidelity mockups

### General

**FE**

- Update how profile menu appears to screenreaders

## Sprint 74 (5/18 - 5/31)

### PTO

- **Liz**: 5/18 - 20; 1/2 day on 5/27; 5/31
- **Adam**: 5/19
- **Christina**: 5/26 - 27

### Personal info revisions

For Design, FE, and BE: QA fixes, if applicable

**PM**

- Hold Staging review
- Make sure privacy review is completed, if not already done

**FE - Adam**

- FE to implement analytics tracking
- Update URLS to point to new contact information sections
  -  This work should be gated behind the personal info revisions feature flag
  -  [Notes here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/personal-information/personal-information-revision/frontend/cross-app-profile-links.md) 

### MHV profile research

**Design - Liz**

- Put together deck for MHV team
- If scheduling works out, share results with MHV team

### Military information

**PM**

- Determine QA strategy -- do we need something beyond internal QA?
- Determine UAT strategy -- do internal UAT with real veterans on the team?
- Analytics planning -- do we need to make any updates?

**BE**

- Finish backend integration with VA Profile 

### Direct deposit

**PM**

- Review build
- Deetermine when we should launch strategy
- Maybe launch updates

**Design - Liz**

- Continue documentation as needed
- Review build 

**FE - Mark**

- Finish FE updates if they are not already done

### Bad address indicator

**Design - Christina**

- Research plan and convo guide

**FE - Adam**

- Can we start FE build?

### General

**FE - Mark**

- In the "nametag" element, what happens if someone is in Space Force? #40910

## Sprint 75 (6/1 - 6/14)

If nothing carries over from last sprint, then we are light on FE and BE work for this sprint, so we will likely need to ask the engineering lead if they have additional work for Adam/Mark/Tom.

### PTO

- **Liz**: 6/1 - 6/6
- **Samara**: Afternoon of 6/14

### Personal information revisions

**PM**

- UAT go/no-go (if we didn't hold it last sprint)
- Work with sitewide/public websites to get content updates ready #34247
  - Note: This work doesn't need to launch until our launch to 100% is complete. 

**Design - Christina**

- UAT recruiting
- UAT research sessions!
- If time, determine what design documentation is needed for this work, and add it to the project folder

**FE - Adam**

- Support UAT
- Determine what frontend documentation is needed for this work, and add it to the project folder

**BE - Tom**

- Determine what backend documentation is needed for this work, and add it to the project folder

### MHV research

**Design - Liz**

- Share report with MHV

### Military info

**PM**

If there is no more backend work:

- Team QA (probably Samara and Sharon)
- Privacy & security review

**BE - Tom**

- Is there still work to be done?

### Direct deposit work

**PM**

- Support launch

**FE - Mark**

- Launch

### Bad address indicator

**PM**

- Midpoint review prep
- Schedule midpoint review for the beginning of the next sprint
- Stretch goal: Hold midpoint review *this* sprint

**FE - Mark**

- Continue FE work, if applicable

## Sprint 76 (6/15 - 6/28)

### PTO

- Tom: 6/17 - 6/24

### Personal information revisions

Launch!! This assumes no serious launch-blockers came out of UAT.

**FE**

- Flip feature on to 25% of users
  - Remember to switch the backend feature flipper as well
- Flip feature on to 50% of users 
  - Unless the backend feature flipper is a one-time thing, remember to flip the backend flipper as well

### MHV profile research

- Read out with MHV stakeholders if we had to postpone from last sprint

### Military information

On hold while Tom is out

### Direct deposit

**FE**

- Launch to 100% (if it didn't happen last sprint)

### Bad address indicator

**PM**

- Hold midpoint review

**Design**

After midpoint review...

- Research recruiting
- Research (OK if sessions flow into the next sprint)

## Sprint 77 (6/29 - 7/12)

### PTO

- Samara: TBD, but likely taking some time off during July 4th week
- Christina: July 4 - 12
- Liz: July 8 (Plus, Liz will be conducting research for the My VA half of the team)

**In priority order:**

### Personal information revisions

- Launch to 100% if we didn't already do so last sprint
- Make sure content page updates go out after we go to 100%
- Update Links (post-launch) #40351

### Bad address indicator

**Design - Christina**

- Complete research sessions

### Military history

**PM**

- Coordinate internal UAT after analytics are setup and we determine that this work does not have to wait until prefill functionality is updated by the platform

**FE - Mark**

- Errors for when military information doesn't load shouldn't show on the personal info section, if not completed last sprint

**FE - Adam**

- Analytics setup, if not completed last sprint

**BE**

- Coordinate with the platform team on whether we need to wait to launch to prod until prefill functionality has been updated

### Address change messaging

After personal info launch is complete...

- Launch to 25%
- Launch to 50%
- Launch to 100%

### Direct deposit

**BE**

- Have Tom add backend documentation to Github
  - [Docs were originally posted in Slack](https://dsva.slack.com/archives/C909ZG2BB/p1655406539093199?thread_ts=1655313185.572799&cid=C909ZG2BB).
  - Please don't upload the PDF. As much content as possible should be pulled out into Github docs.
  - It might be worth collaborating with Liz on where this best fits into the structure she set up. 

### Notification preferences

**Design**

This is pending Liz's availability. She is doing some research for My VA this sprint, which is higher priority.

- Determine if UI changes are needed for the default opt-in indicator

**FE**

- Update list of facilities that have prescription SMS texts #43206

### General

- This might be a good sprint to pull in work from the backlog for Adam and Mark.

## Sprint 78 (7/13 - 7/26)

### PTO 

Liz: Jul 22 - 29

### Priorities

- **Personal info**: Submit for 508 review
- **Military info**: UAT and start launch (pending VA Profile being ready)
- **Bad address indicator**: Research summary and design updates
- **Documentation**: Contact info and Military info
- **Forms system updates**: Discovery and scoping
- **Notification preferences**: Work as needed, though I don't have any definitive work right now.

### Personal info revisions

**PM**

- Submit for 508 review (or at least find out what we need to do for this)

### Military info updates

**PM**

- Coordinate UAT
  - We can only start UAT *after* VA Profile has completed the ICD and updated access permissions, so please wait for me to get the all-clear from them before proceeding. 

**BE - Tom**

- Launch to 25%
- Launch to 50%, if time

### Bad address indicator

**PM**

- Finalize QA documentation
- Request QA for sprint 80 (8/10-23)

**Design - Christina**

- Summarize research
- Design updates from research (if applicable)

### Documentation

**Contact information - Liz**

**This is actually happening now in sprint 77 since Liz's My VA work got postponed, so we can include in the sprint 77 epic and not sprint 78 epic**

- Create plan for documentating Contact Info section
  - This is a big one, and includes address validation.
  - I think Christina has already put together some documentation on the new confirmation modal we added to the home address field that allows people to update their mailing address at the same time, so you might want to check in with her about this.
- Start on documentation updates  

**Military information - Tom**

- Fully document the feature in [the military info github folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/military-information)
  - Given that this is a pretty simple read-only feature, this should be a low level of effort. However, I'd still recommend grabbing 30 minutes of Liz's time to consult on how we can be thorough about this. There are probably things that can be learned from her direct deposit docs, recognizing that the military info documentation will be much simpler since the feature is much less complex.

### Forms system updates

**FE - Mark/Adam**

- Scope and plan this work
  - What needs to be done?
  - How can we break this down? Section by section? Form by form? Something else?
  - Roughly, how long do we think this will take?
  - How can we validate the updates to the forms functionality?
  - Create tickets (it would be helpful if FE did as much ticket creation as possible so Sharon can focus on some other things)

### Notification preferences

- Determine if we are going to pursue any default opt-in work now
- TBD based on stakeholder needs and scheduling. We've got the MHV working group and 1095B functionality on our radar and will meet with those teams as needed.

## Sprint 79 (7/27 - 8/9)

### PTO

- Samara: Aug 1 - 5
- Christina: Jul 28 - 29
- Liz: Largely supporting My VA team this sprint

### Personal information revisions

Fully document the feature.

**Design - Christina**

- Create use case and other design documentation
  - Seeing Liz's examples for Direct deposit and Contact info should be helpful 

**FE - Adam**

- Create any relevant frontend docs for personal info

**BE - Tom**

- Create BE documentation for personal info

### Military information

This assumes the VA Profile ICD is updated and we are given access permissions in prod. **Please do not launch this feature until I'm back from vacation**.

**PM - Sharon**

- Complete internal UAT with real veterans

**BE - Tom**

- Support internal UAT

### Notification preferences

- TBD, but there might be 1095B work. I'm still working this out with stakeholders.

### Bad address indicator

**PM - Sharon**

- Release plan
- Analytics is already complete, yes? If not, complete any analytics tasks.

**Design - Christina**

- Updates coming out of research
- Document and ticket updates so Adam can implement them next sprint

### Forms system updates

**FE - Adam**

- Continued work

## Sprint 80 (8/10 - 8/23)

### PTO

- Samara: August 12
- Liz: August 10-12

### Personal information revisions

- Finish documentation if not done the previous sprint

### Military information

- Launch to 25%
- Launch to 50%
- Launch to 100%

### Notification preferences: Add preference for 1095B

This assumes we have what we need to get started:

**PM**

- Collab cycle kickoff (we can punt on this for a sprint if the team needs a sprint to get onboarded and familiar with this work)

**Design - Liz**

- Initial mockups of the 1095B preference [Ticket is #45073](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45073)
- Initial mockup of "you have changed your preference" email [Ticket is #45074](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45074)
- Work with content for both notification preferences mockup and confirmation email -- Not sure if this needs a separate ticket from the ones already created.
- Get initial mockups/content to 1095B team for review with their legal team [Ticket is #45075](https://github.com/department-of-veterans-affairs/va.gov-team/issues/45075)

### Notification preferences: MHV preferences

- Start regular biweekly syncs with MHV on 8/17 to discuss notification preferences requirements.

### Bad address indicator

**PM - Sharon**

- Request QA
- Contact center guide updates

**Design - Christina**

- Contact center guide updates
-
**FE - Adam**

- Implement changes from research

### Forms system updates

**FE - Adam**

- Continued work

### Address change messaging

- Resume launch, assuming analytics work is ready
