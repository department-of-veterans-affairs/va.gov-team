# Profile Sprint Objectives: Sprints 81 – 90

- [Sprint 81](#sprint-81-824---96)
- [Sprint 82](#sprint-82-97---920)
- [Sprint 83](#sprint-83-921---104)
- [Sprint 84](#sprint-84-105---1018)
- [Sprint 85](#sprint-85-1019---111)
- [Sprint 86](#sprint-86-112---1115)
- [Sprint 87](#sprint-87-1116---1129)
- [Sprint 88](#sprint-88-1130---1213)
- [Sprint 89](#sprint-89-1214---1227)
- [Sprint 90](#sprint-90-1228---110)

## Sprint 81 (8/24 - 9/6) 

### Bad address indicator

**PM**

- Prep for staging ~& privacy reviews~ (privacy review has been completed)
- Support contact center guide updates

**QA**

- Hold QA

**Design - Christina**

- Contact center guide update
- UAT prep and planning

### ~1095B work~

~**PM**~

~- Coordinate design intent~

~**Design - Liz**~

~- Send design & content to 1095B team for legal review~
~- Design intent~
~- Updates from stakeholder feedback, if possible (**Note**: My guess is this process will take a while)~

### Forms system

**FE**

- Updates as needed

### Documentation

**Design - Christina**

- Personal information documentation

**Design - Liz**

- Military information documentation
- Notification preferences documentation

**FE** 

- Personal information documentation

**BE**

- Personal information documentation
- Military information documentation, if still needed

## Sprint 82 (9/7 - 9/20)

### Bad address indicator

**PM**

- Staging review

**Design - Christina**

- Updates from QA, if needed
- Internal UAT (only if there are no outstanding QA/staging review/privacy review updates)

**FE - Adam**

- Updates from QA, if needed

### Forms system updates

- Continued updates, as needed

### Documentation

**Design - Christina**
- Account settings

**FE**
- Direct deposit (if not done)
- Contact info
- Military info

### Accessibility audit

**PM/Design**

- Go through each item as a team, rate severity and complexity, get tickets created
- Prioritize tickets
- Talk about potential solutions
- Collab kickoff

**Design**

- Begin design

### Error matrix

**Planning**

- Figure out all backend codes we get for the profile (note: I believe we already have some documented for contact information)
- Figure out how we are going to format/store the matrix in Github so it's easy to use
- Figure out what contribution we need from design (screenshot? can we link to existing documentation?)

## Sprint 83 (9/21 - 10/4)
- Ad Hoc internal meetings all day 10/3, and most of 10/4; may have reduced availability.

### Bad address indicator

**PM**

- UAT go/no-go
- Launch go/no-go

**Design**

- Run internal UAT

**FE**

- Launch to 25%
- Launch to 50%

### Documentation

**Design**

- Document Connected Apps

**FE**

FE documentation for:

- Contact info
- Military info
- Direct deposit
- Notification prefs

**BE**

- Document Notification Preferences
- Continue error matrix (if applicable)

### Forms system

**FE**

- Continued updates as needed

### Accessibility audit

We'll make this more specific before planning.

**Design**

- Design for whatever tickets we decide to tackle
- Talk about build and usability testing plan (will need to happen in code)

## Sprint 84 (10/5 - 10/18)

### Bad address indicator

- Start or continue launch depending on what we were able to do in sprint 83

### Accessibility updates

**Design - Liz**

- Research summary
- Work with PM to determine next steps

**Design - Christina**

- Is there another accessibility issue Christina could start to look into to determine next steps?

**FE**

- Complete any updates that are groomed and ready to go

### Documentation

**PM**

- Determine what documentation is not done, if any, and who needs to complete what (eg. design, FE, BE)

**BE**

- Continue error matrix work, if not done

### General

**BE**

- BGS caching updates

## Sprint 85 (10/19 - 11/1)

Don't forget to move over anything that wasn't complete from last sprint.

### Bad address indicator

- Launch to 100%
- DOCUMENTATION SPRINT
  - PM to update Contact info product outline and bad address project outline, if/as needed
  - Design to update use cases, flows, and Sketch files for contact info. You can also link these from the bad address project outline, but remember the primary thing we want updated is the Contact Info product outline.
  - FE to update contact info docs as needed
  - BE to update contact info docs as needed (may not be needed for BE, but we can let Tom decide)

### Accessibility updates

**Design**

This really depends on what comes out of Liz and Christina's work for this sprint, so let's plan to review where they are at no later than Monday.

**FE**

If applicable, finish FE updates.

### Notification preferences

This is only if there is time. We can push back a sprint if there is already too much work for Tom between our team and My VA.

**BE**

- Resume/revisit discovery on the default opt-in indicator.
  -  If this is already complete, let's talk about what needs to happen for us to consume it, as we'll eventually want to be able to utilize it once we migrate over existing email notifications from MHV. 

## Sprint 86 (11/2 - 11/15)

Move over tickets from last sprint, if needed.

### Bad address indicator

- For everyone: Finish documentation updates if not done last sprint
- PM: [Add pre-launch stats to project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md#objective-prompt-people-who-visit-the-profile-and-have-a-bad-address-to-update-their-address)

### Accessibility updates

**Liz**

- Finish any notification-related updates that came out of one-thing-per-page research (not sure if this was done last sprint)
- Move on to [address validation work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/accessibility/accessibility-audit-updates.md#address-validation), if time

**Christina**

- Finish updates to personal info based on nametag recommendations (not sure if this was done last sprint)
- Move on to [account settings work](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/accessibility/accessibility-audit-updates.md#account-security), if time

**FE**

- Any outstanding general accessibility tickets FE can work on, if applicable
- If there are tickets we can start to handoff from design to FE for build based on Christina's or Liz's work, let's prioritize those over general/tech-debt tickets

### Notification preferences

**Liz**

- Initial thinking: Do we need to change our edit model for notification preferences to account for additional channels and notifications?
  - If yes, do we need research, or do we know enough to mock up some options?
  - Acceptance criteria: We have a plan for moving forward, and can create tickets to support this work.

### General/tech-debt

- Continue to pull in tickets as necessary

**Design**

- Finish fiduciary gate work, if not done
- Have Christina take [this DD214 ticket to content office hours](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46564) so we can get this into build

**FE**

- Fiduciary gate IF the design work is done (if not, this can happen next sprint assuming design work is done)
- Continue to pull in tickets as necessary

## Sprint 87 (11/16 - 11/29)

### General/tech-debt

- FE: Fiduciary gate IF it didn't happen last sprint

## Sprint 88 (11/30 - 12/13)

### Bad address indicator

- PM: [Add 1-month stats to project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md#objective-prompt-people-who-visit-the-profile-and-have-a-bad-address-to-update-their-address)

## Sprint 89 (12/14 - 12/27)

## Sprint 90 (12/28 - 1/10)

### Bad address indicator

- PM: [Add 2-month stats to project outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/bad-address-indicator/README.md#objective-prompt-people-who-visit-the-profile-and-have-a-bad-address-to-update-their-address)
