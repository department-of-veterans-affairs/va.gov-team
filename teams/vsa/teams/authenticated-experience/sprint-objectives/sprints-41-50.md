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
- Tress to update [copy documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/frontend/documentation/my-va-copy.md) with final copy
- Review and update My VA test cases
    - [My VA test cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2.0-redesign/qa/MyVA%20-%20test%20cases.md).
    - Update this documentation based on final designs
    - Review with team 
    - Let Tze know this documentation has been updated and ask whether he or AJ should update the test cases in TestRail

**FE**

- My VA content updates #21652
- Appointments need better Cypress coverage #21255
- **Sandra and Erik will create tickets for the following and have them to us no later than Monday afternoon**
  - Updates from usability testing
  - Implement error messages

### Direct deposit for edu

**PM**

- Wrap updated content in a react widget so it will show conditionally throughout phased launch #21725 (**needs to be done as early in the sprint as possible before go/no-go**)
- Hold go/no-go

**FE**

- Launch to 10%

### Preferred medical facility 

**PM**

- Schedule and hold [design intent collab with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-design-intent.md)

**Design**

- Finish design
- Attend design intent collab with VSP
- IA review?

### Notification preferences

**PM**

- Schedule and hold [design intent collab with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-design-intent.md)

**Design**

- Finish design
- Attend design intent collab with VSP
- IA review?

**BE**

- Notification preferences: Implementation (part 3) #19774

## Sprint 45 (4/7 - 4/20)

### Priorities

1. Continue with direct deposit for edu launch
2. Finish My VA design (if not done already) and My VA build
3. Continue work on preferred facility and communications preferences
4. Profile tickets

Any outstanding tickets from sprint 44, plus:

### Profile

PM

- Review the profile and its documentation to become familiar with it

Design

- Create confirmation email for when contact information is updated on VA.gov #8383

FE

- 508-defect-2 [COGNITION]: H1 should match or be included in the page title #19552
- 508-defect-3 [COGNITION]: Edit and cancel buttons SHOULD be styled as buttons #19562

### My VA redesign

**PM**

- Assist Tressa with contact center guide
- Thorough review of FE build
  - I would recommend going through the My VA use cases doc we are providing to QA and testing as many of those as possible to validate as many design states as possible.
- Submit [analytics request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-analytics-request.md) (VSP collab cycle)
  - Regroup with Samara on this first
- Review the new My VA designs and documentation to become familiar with it

**Design**

- Finish design tickets if they aren't already done
- Start contact center guide
- Thorough review of FE build
  - I would recommend going through the My VA use cases doc we are providing to QA and testing as many of those as possible to validate as many design states as possible.

**FE**

- Implement LOA1 design (if not already done)
- Finish build

### Direct deposit for edu

**PM**

- Monitor launch to 25%
- Monitor launch to 50%
- Let content team know anticipated 100% date so that they can publish the updated content page. #20096

**FE**

- Launch to 25%
- Launch to 50%

### Preferred medical facility 

**PM**

- Any necessary coordination with VAOS
- [Submit for IA review with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-ia-request.md)

**Design**

- Finish design, if not already done (including any suggested updates from the design intent collab)
- Finalize content, if not already done
- Work with AJ to submit for the IA review
- Design documentation for frontend

### Notification preferences

**PM**

- [Submit for IA review with VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-ia-request.md)

**Design**

- Finish design, if not already done (including any suggested updates from the design intent collab)
- Finalize content, if not already done
- Work with AJ to submit for the IA review
- Design documentation for frontend

**FE**

- Technical discovery

**BE**

- Finish build, if not already done

## Sprint 46 (4/21 - 5/4)

### Profile

- AJ and Liz to break down #19562 into more manageable tickets
- As time allows, Liz to start tackling said tickets

### My VA redesign

**Prep for QA for sprint 47!!**

**PM**

- Hold go/no-go for QA
  - Making sure the feature is done 
  - Reviewing the feature
  - Making sure Tressa has reviewed the feature
  - Talking with Erik and Sandra to make sure we are 100% going to be ready for QA
- Request QA for following **second half of this sprint** pending team's "go"
  - **Note**: This may get moved to sprint 47 pending Tze's availability re: the COVID-19 vaccine.
- Assist Tressa in finishing contact center guide
- Submit contact center guide for [contact center review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-contact-center-review.md) once the contact center guide is done

**Design**

- Finish contact center guide
- Attend QA go/no-go

**FE**

- Any updates as needed from pre-QA review
- Attend QA go/no-go

### Direct deposit for edu

**PM**

- Oversee launch to all users #23215
- Samara to confirm date of retirement of feature on eBenefits

**FE**

- Launch to all users #23215
- Figure out more specific error labeling for errors on the GA dashboard

**BE**

- Look into why the failed retrieval rate is so high #23248

### Preferred medical facility 

**VAOS will be starting on design**

**PM**

- 5/3 planning regroup with VAOS
- Samara/AJ to talk to Lauren about KPI planning
- Start working with Liz on list of test cases/test users for the profile

**Design**

- Collaborate with Peter as needed on design
- Start working with AJ on list of test cases/test users for the profile (though final test case doc won't be completed this sprint)
- Start on research plan (though we won't be able to finish this sprint)

### Notification preferences

**PM**
- Samara to do KPI planning
- Check in with VA Profile on progress re: final list of MVP notifications

**Design**

- Start on research plan

**FE**

- Technical discovery #22597

## Sprint 47 (5/5 - 5/18)

### My VA redesign

**PM**

- Check in on analytics — Do they need anything from us? Any updates? #23336
- Begin filling out ticket for [staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-staging-review.md)
- Begin filling out ticket for [privacy review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-privacy-security-review.md)

**Design**

- Accessibility tests for staging review
- UAT research plan, if not already done
- UAT convo guide, if not already done
- If UAT work is not already done, start thinking around [post-launch experiments](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/authenticated-experience/sprint-objectives/samara-leave-planning.md#designer-priority-run-experiments-on-how-we-can-better-elevate-action-items)

**FE**

- Accessibility tests for staging review
- Technical docs for privacy and security review
- If time/needed, start on QA fixes

**QA**

- Conduct QA #23242

### Preferred medical facility 

**PM**

- Coordinate on ticketing and meetings with Lauren Ernest as needed

**Design**

- Work with Peter to make sure design *and copy* is finished
- Liz to run mini study
- IA review for this work
- Collab with Peter on convo guide for research

### Notification preferences

**Design**

- Content review to finalize items and groups
  - Share these with VANotify and VEText for concurrence
  - Share back to VA Profile team
- IA review #23286

**FE** 

- Tech discovery if it didn't happen #22597
- If tech discovery did happen, start build

### Direct deposit

- Continue to monitor analytics

### Profile

**PM**

- Work with Liz to compile and send a list of latest updates to the mobile team

**Design**

- If time, any high priority accessibility or other profile updates

**FE**

- If time, high priority accessibility tickets

### Backend work

- Lihan may me able to help the identity team with user roles and permissions discovery. TBD. Working with Christine Dillman on this.

## Sprint 48 (5/19 - 6/1)

Any outstanding project work from last sprint, plus:

### My VA

**PM**

- Hold staging review
- Hold privacy and security review  
- Meet with communications folks (Leslie Byford)
- **If time/dependencies allow**: Hold UAT go/no-go (Dependencies: QA fixes, scheduling of reviews, required fixes coming out of reviews)

**Design** 

No immediate My VA 2.0 redesign tasks. Tressa can move on to action items exploration instead:

- Discovery: how can we better elevate action items?
- Begin sketches/exploration of how we can elevate action items

**FE**

- QA fixes
- If applicable this sprint, fixes coming out of the staging and privacy and security reviews

**BE**

- If needed, any documentation for, or work that comes out of, the privacy and security review

### Notification preferences (communications permissions)

**PM**

- Check in with VA Profile as necessary
- Work with Liz to put test case documentation together
- Prep for [midpoint review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-midpoint-review.md)

**Design**

- Work with AJ to put together test case documentation
- Work on research plan and convo guide if time

**FE**

- Start build

### Preferred facility

**PM**

- Coordinate on ticketing and to-dos with Lauren Ernest as needed
- Prep for [midpoint review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/touchpoint-midpoint-review.md)
- Work with frontend to break down tickets for build

**Design**

- Work with Peter to recruit for and run research
- Update FE documentation if there were copy changes as a result of review with content and IA

**FE**

- Technical discovery
- Break down tickets for build

### Profile 

Only do this work if people have time.

- Tackle any of the urgent accessibility requests first.
- If there's not time for anything else, that's OK. We can always put work back into the backlog in favor of moving along project work.

### Backend work

- TBD. Hoping to get Lihan on user roles & permissions work this sprint. If not, we can talk to Jeff about him helping another team.

## Sprint 49 (6/2 - 6/15)

Any outstanding project work from last sprint, plus:

### My VA

**PM**

- UAT go/no-go

**Design** 

**Tressa out 6/10 - 6/17** 

- Attend UAT go/no-go
- UAT recruiting — **Don't schedule sessions until Tressa is back from leave**
- Plan discovery for how can we better elevate action items #24967
- Explore designs/sketches for how we can elevate action items #24970

**FE**

- Any outstanding fixes if still needed

### Notification preferences (communications permissions)

**PM**

- Hold midpoint review
- Help with ticket creation as needed #25046

**Design**

- Attend midpoint review
- Any required updates coming out of the midpoint review
- Recruit for research
- Start research if time

**FE**

- Attend midpoint review
- Redux actions and reducers #24863
- High-level tests for FE #24864
- Create FE implementation tickets #25046
- Additional FE work that comes out of ticket creation

### Preferred facility

**PM**

- Coordinate on ticketing and to-dos with Lauren Ernest as needed
- Hold Midpoint review
- Help with FE ticket creation as needed #25043

**Design**

- Work with Peter on research summary
- Update designs as needed
- Update FE documentation as needed

**FE**

- Technical discovery #24559
- Create FE implementation tickets #25043

### Profile 

Only do profile work if people have time. Is there a ticket or two for Taylor to get his feet wet?

### Backend work

Lihan will continue working with the identity team on user roles & permissions work this sprint. 

## Sprint 50 (6/16 - 6/29)

Anything not finished last sprint, plus:

**PTO**

- **Tressa**: 6/16 - 6/17
- **Erik**: 6/21
- **All of Ad Hoc**: 6/18
- **Samara**: Baby watch 2K21 (OOO most likely no later than 6/23)

### My VA

**PM**

- Make sure analytics are set up correctly.

**Design**

- Conduct UAT
- Create tickets if there are issues
- Action items work: Finish explorations and discuss with team; Determine method for testing; Plan research

**FE**

- Add analytics code to datalayer and confirm with analytics that everything is implemented correctly
- UAT fixes, if necessary

**Stretch goals**

If there are no fixes or anything needed from UAT, and if all analytics tracking is in place, feel free to hold the launch go/no-go and launch to 25% as soon as UAT is over!! If not, do that next sprint.

### Notification preferences

**Design**

- Run research
- Summarize research
- Update designs and frontend documentation, if necessary

**FE**

- Continue build
- Implement changes from research, if time

### Preferred Facility

**PM**

- Continued coordination with VAOS team
- Work with Liz to finalize test cases

**Design**

- Finalize test cases

**FE**

- Start build

### Profile

- Feel free to pull in tickets as time allows and people have bandwidth

**BE**

- Backend work for setting up the contact info change email #25360

### Backend work

- Lihan to continue supporting the identity team
