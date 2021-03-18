# Authenticated Experience Sprint Objectives: Sprints 41 – 50

- [Sprint 41](#sprint-41-210--223)
- [Sprint 42](#sprint-42-224---39)
- [Sprint 43](#sprint-43-310---323)
- [Sprint 44](#sprint-44-324---46)
- [Sprint 45](#sprint-45-47---420)
- [Sprint 46](#sprint-46-421---54)
- [Sprint 47](#sprint-47-55---518)
- [Sprint 48](#sprint-48-519---61)
- [Sprint 49](#sprint-49-62---615)
- [Sprint 50](#sprint-50-616---629)

## Sprint 41 (2/10 – 2/23)

Any outstanding work from Sprint 40, plus...

### My VA redesign

Objective: Hold usability review, begin recruiting for research, and start research if possible.

**PM**

- Hold usability testing review at beginning of sprint
- Work with Tressa and Cassandra to get copy to Erik and Sandra

**Design**

- Recruit for research
- Conduct research
- Review frontend build as needed
- Handoff copy to frontend
  - Work with Erik and Sandra to figure out the best way to do this. They may want it right in tickets, or you can add it to the documentation. Whatever is fastest and easiest. Just PLEASE make it clear what copy should be used for which states, and please get this to them in a format they can copy and paste into the code (so don't ask them to just refer to the InVistion prototypes for the copy). 

**FE**

- Continue FE build

### Direct deposit for edu

Objective: Hold reviews, prep for UAT, and determine that we are ready for UAT before kicking off recruiting.

**PM**

- Finish contact center updates
- [Contact center review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#contact-center-review)
- [Staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review)
  - Prep
  - Hold meeting

**Design**

- DD4edu - 508 checks required pre-staging review #19409
- UAT research plan
- UAT conversation guide
- UAT recruiting pending UAT go/no-go

**FE**

- DD4edu accessibilty scans required pre-staging review #19410

**BE**

- Move direct deposit emails from GovDelivery > VANotify #19233

### Notifications preferences

Objective: Finish backend build *if* possible (pending Lihan getting what he needs from Terry)

- Finish backend build? What needs to happen to get Lihan moved along? 

## Sprint 42 (2/24 - 3/9)

### Team updates

- 3/1: Matt roles off onto a different Ad Hoc project; Cassandra switches to public websites
- 3/4: Liz Lantz joins the team
- 3/8: AJ joins the team

### Profile

**PM**

Make sure there are issues/next steps/clear documentation on exactly what is happening to get the following VA Profile issues resolved:

- Users can’t delete an address from VA.gov if it fails address validation
  - https://dsva.slack.com/archives/C7TE0PFTL/p1608138662207400
- MVI 207 issue #17739
- MVI 201
  - Original issue is #18349, but please do not comment or track progress in a closed ticket.
  - https://dsva.slack.com/archives/C7TE0PFTL/p1611332694003100

**FE**

- Profile: Remove "Your" from "Your Profile" #19890
- Investigate reason for 'Address line too long' update errors in Profile #20079

### My VA redesign

**PM**

**Design**

- [Design] MyVA 2.0: Conduct research #19725 
- Research summary
- Post-research planning
  - Design updates
  - Do we have time for more research?
  - Design handoff deadline

**FE**

- Continue FE build

### Direct deposit for edu

**PM**

- UAT go/no-go (before we kick off recruiting)
- Reach out to comms to discuss if/what marketing needs to happen; Meet if necessary
- [Privacy and security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-privacy-security-review.md)
- Make sure direct deposit content page gets updated re: https://github.com/department-of-veterans-affairs/va.gov-team/issues/19281#issuecomment-783594216

**Design**

- Kick off UAT recruiting (pending UAT GO/No-go)

### Notification preferences

**BE**

- Finish build (assuming Terry has gotten Lihan access to the APIs he needs)

## Sprint 43 (3/10 - 3/23)

### Onboard Anastasia

- Onboarding: AJ Jakabcin #20439

### Profile

- Focus MUST not be hidden by the sticky profile menu #19779
- Update street address field labels in the profile for both Home address and Mailing address #20788
- Use correct case for va profile address types #21031
- Other profile accessibility issues (if time)

### My VA redesign

**PM**

- Submit for [IA review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-ia-request.md) #14642

**Design**

- Design updates from usability testing (meet with Tressa to create tickets)
- Design error states (Does a ticket exist?)
- Review frontend build as needed

**FE**

Continue FE build (Talk to Erik and Sandra about what tickets are outstanding/need to be created)

- Add Loading spinner to My VA Health Care #21060
- Add tests to My VA hiding/showing Health Care sections #21059

On hold until design updates are done:

- Wire up messages to My VA Health care #21056
- Any additional design updates out of usability testing

### Direct deposit for edu

**Design**

- Conduct UAT

**FE**

- Fixes from UAT (if applicable)

**BE**

- Fixes from UAT (if applicable)

### Preferred medical facility 

**Design**

- Discovery #20866

### Notification preferences

**Design**

- Discovery #20867

**BE**

**Dependency**: Terry has gotten Lihan API access

Finish BE implementation assuming Lihan can get what he needs from Terry
- VA Profile notification preferences: Implementation (part 2) #19773

## Sprint 44 (3/24 - 4/6)

### Profile

**Design**

- Add FAQ around what departments get updated when a veteran updates their contact info #20221
- (If this is ready) 508-defect-3 [COGNITION]: Edit and cancel buttons SHOULD be styled as buttons
#19562

**FE**

- Focus MUST not be hidden by the sticky profile menu #19779
- Do not try getting full name, personal info, or military info for LOA1 users #19349

**BE**

If unblocked by VA Profile:

- Remove references to vet360 from backend code (part 1) #18258

### My VA redesign

**PM**

**Design**

- Error message documentation #21373
- Claims error message #21370
- Claims spinner handling #21372
- Design error for when we can't detect whether someone has health care or not #21579
- Review frontend build as needed

**FE**

- My VA content updates #21652
- Updates from usability testing
- Implement error messages

### Direct deposit for edu

**PM**

- Hold go/no-go
- Launch to 10%
- Keep eBenefits updated on launch
- Keep BGS updated on launch (make sure no issues with load) 

### Preferred medical facility 

**PM**

- Schedule and hold design intent collab

**Design**

- Finish design
- [Design intent collab with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-design-intent.md)
- IA review?

### Notification preferences

**PM**

- Schedule and hold design intent collab

**Design**

- Begin design
- [Design intent collab with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-design-intent.md)
- IA review?

**BE**

- VA Profile notification preferences: Implementation (part 3) #19774

## Sprint 45 (4/7 - 4/20)

### Profile 

Design

- Add email for when someone updates their contact information

### My VA redesign

### Direct deposit for edu

**PM**

- Launch to 25%
- Launch to 50%
- Keep eBenefits updated on launch
- Let content team know anticipated 100% date so that they can publish the updated content page. #20096

### Preferred medical facility 

**PM**

- Revisit long term planning with the team — are we ready to go on hold until VAOS is available?
- Schedule and hold design intent collab
- [Plan for IA review with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-ia-request.md)

**Design**

- Finish design
- Plan for IA review

### Notification preferences

**PM**

- Meet with Terry to better understand timeline so we can scope/plan
- Schedule and hold design intent collab
- [Plan for IA review with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-ia-request.md)

**Design**

- Finish design
- Plan for IA review

## Sprint 46 (4/21 - 5/4)

### My VA redesign

Prep for QA

**PM**

- If FE build is actually done, work with Trevor to do some assistive tech testing

- Request QA for following sprint. To make sure we are ready, this requires:
  - Making sure the feature is done 
  - Reviewing the feature
  - Making sure Tressa has reviewed the feature
  - Talking with Erik and Sandra to make sure we are 100% going to be ready for QA

**Design**

- Review feature and give final sign off for QA

### Direct deposit for edu

**PM**

- Launch to 100%
- Confirm date of retirement of feature on eBenefits

### Preferred medical facility 

**PM**

- Plan for usability test prep

**Design**

- Research plan
- Convo guide

### Notification preferences

**PM**

- Plan for usability test prep

**Design**

- Research plan
- Convo guide

## Sprint 47 (5/5 - 5/18)

### My VA redesign

QA!!

**PM**

- Complete release plan and save in direct deposit for edu GitHub folder (template)
- Analytics request (collab cycle)
  - Analytics planning
  - Meet with analytics
  - Oversee implementation
- Start contact center guide

**Design**

- Start contact center guide

**QA**

- Complete QA
- Create tickets if there are issues

**FE**

- QA fixes, if applicable

### Preferred medical facility 

**PM**

- Hold usability test prep review

**Design**

- Recruit for research
- Conduct research

**FE**

- Begin build

### Notification preferences

**PM**

- Hold usability test prep review

**Design**

- Recruit for research
- Conduct research

**FE**

- Begin build

## Sprint 48 (5/19 - 6/1)

### My VA redesign

**PM**

- Finish contact center guide
- [Contact center review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-contact-center-review.md)
- [Staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-staging-review.md)
  - Prep
  - Hold meeting
- Meet with comms to discuss marketing needs

**Design**

- Finish contact center guide
- Accessibility tests for staging review
- UAT planning

**FE**

- Accessibility tests for staging review

### Preferred medical facility 

**PM**

-

**Design**

- Finish research
- Research write up
- Update mocks

**FE**

- Continue build

### Notification preferences

**PM**

-

**Design**

- Finish research
- Research write up
- Update mocks

**FE**

- Continue build

## Sprint 49 (6/2 - 6/15)

### My VA redesign

**PM**

- [Privacy and security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-privacy-security-review.md)
- Hold go/no-go for UAT

**Design**

- UAT recruiting
- UAT


### Preferred medical facility 

**PM**

- Schedule and hold IA review

**Design**

- IA review
- Final handoff to FE

**FE**

- Implement updates from testing

### Notification preferences

**PM**

- Schedule and hold IA review

**Design**

- IA review
- Final handoff to FE

**FE**

- Implement updates from testing


## Sprint 50 (6/16 - 6/29)

### My VA redesign

**PM**

- Hold go/no-go
- Launch to 25%

**FE**

- Fixes from UAT, if needed

### Preferred medical facility 

**PM**

- Complete release plan and save in direct deposit for edu GitHub folder ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/97759a81a47c73da8bf03e35f3a13bb3c689d18b/platform/product-management/release-plan-template.md))
- [Analytics request (collab cycle)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-analytics-request.md)
  - Analytics planning
  - Meet with analytics 
  - Oversee implementation
- Start contact center guide

**QA**

- Conduct QA

**FE**

- Updates from QA


### Notification preferences

**PM**

- Complete release plan and save in direct deposit for edu GitHub folder ([template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/97759a81a47c73da8bf03e35f3a13bb3c689d18b/platform/product-management/release-plan-template.md))
- [Analytics request (collab cycle)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-analytics-request.md)
  - Analytics planning
  - Meet with analytics 
  - Oversee implementation
- Start contact center guide

**QA**

- Conduct QA

**FE**

- Updates from QA

## Sprint 51 (6/30 - 7/13)

### My VA

**PM**

- Launch to 50%
- Launch to 100%

### Preferred medical facility 

**PM**

- Finish contact center updates
- [Contact center review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-contact-center-review.md)
- [Staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-staging-review.md)
  - Prep
  - Hold meeting
- UAT go/no-go (before we kick off recruiting)

**Design**

- 508 checks required pre-staging review
- UAT research plan
- UAT conversation guide
- UAT recruiting pending UAT go/no-go

**FE**

- 508 checks required pre-staging review


### Notification preferences

**PM**

- Finish contact center updates
- [Contact center review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-contact-center-review.md)
- [Staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-staging-review.md)
  - Prep
  - Hold meeting
- UAT go/no-go (before we kick off recruiting)

**Design**

- 508 checks required pre-staging review
- UAT research plan
- UAT conversation guide
- UAT recruiting pending UAT go/no-go

**FE**

- 508 checks required pre-staging review


### My VA redesign

## Sprint 52 (7/14 - 7/27)

### Preferred medical facility 

**PM**

- [Privacy and security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-privacy-security-review.md)

**Design**

- UAT

**FE**

- Fixes from UAT

### Notification preferences

**PM**

- [Privacy and security review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-privacy-security-review.md)

**Design**

- UAT

**FE**

- Fixes from UAT

### My VA redesign

## Sprint 53 (7/28 - 8/10)

### My VA redesign

### Preferred medical facility 

**PM**

- Hold go/no-go
- Launch to 25%
- Keep eBenefits updated on launch

**FE**

- Fixes from UAT, if needed

### Notification preferences

**PM**

- Hold go/no-go
- Launch to 25%
- Keep eBenefits updated on launch

**FE**

- Fixes from UAT, if needed

## Sprint 54 (8/11 - 8/24)

### My VA redesign

### Preferred medical facility 

**PM**

- Launch to 50%
- Launch to 100%

### Notification preferences

**PM**

- Launch to 50%
- Launch to 100%
