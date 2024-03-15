# My VA and Onsite Notifications Sprint Objectives: Sprints 1 – 10 (1.4.23 - 5.23.23)

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
[#43556](https://github.com/department-of-veterans-affairs/va.gov-team/issues/43556)

### General

- Onboard new delivery manager [#50964](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50964)
- Onboard new frontend developer [#50643](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50643)

### Payments V2

**PM**

- [Update 1-month post-launch stats](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/README.md#v2-updating-payments-and-debts-to-address-usability-issues-may-2022---october-2022)

### Onsite notifications

*MVP*

**PM**

- [Update 2-month stats for MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/notifications/vagov-notifications/mvp#measuring-success)

*V2*

**Goal**: Team discovery and kickoff

**PM & team**

- Meeting: Team kickoff for our team (not collab cycle)
  - What is in scope? What is out of scope?
  - What can we accomplish in 3 months (pre-Samara's maternity leave)? 6 months?
- Meeting: Start talking to VANotify about this effort
  - Ask about their intake process for new notifications
- Meeting: Start discuss notification center concept
  - A notification center is out of scope for V2, but we may want to incorporate discovery for a notification center into V2
  - What do we need to answer to determine if this is the right path? How do we do this without being too leading in research?
- Figure out what relevant notifications VANotify supports now

**FE**

- Determine development level for adding new notifications

### My VA audit

**PM**

- Finalize QA prep (not sure what is still left to do on this)

**Design**

- Research recruiting
- Conduct research

## Sprint 2 (1/18 - 1/31)
[#51089](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51089)

### General

- Onboard Allison Lu [#50643](https://github.com/department-of-veterans-affairs/va.gov-team/issues/50643)

### My VA audit

**Design**

- Conduct research
- Research write-up

### Onsite notifications V2

- Submit collab cycle kickoff ticket
- Start on work that we've scoped for V2 (still TBD)

## Sprint 3 (2/1 - 2/14)
[#51090](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51090)

### PTO

- Tom: 2/6 - 2/10 (he is full on profile work, so he will need to do onsite notifications discovery next sprint)

### Payments V2

- [Update 2-month post-launch stats after Feb 11](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/payment-history/README.md#v2-updating-payments-and-debts-to-address-usability-issues-may-2022---october-2022)

### My VA audit updates

**PM**

- Check in on where we are with analytics (if done, there's nothing to do)
- QA discovery
  - Do we need to use Test Rail? If so, have platform help with Test Rail onboarding.
  - How can we run QA as a team? Do we need to have everyone in Test Rail? Is a QA spreadsheet better? 

**FE**

- Any updates that came out of research

### Onsite notifications

**PM**

- Collab cycle kickoff ticket
- Finalize intake process with VANotify

**Design**

- Work with content folks to figure out copy for new notification(s)
- Design updates for My VA
- Design intent, if time

**FE & BE**

- Technical discovery
  - How hard is implementing new notification design? 
  - How much FE work is required for a new notification if we don't update the design?

## Sprint 4 (2/15 - 2/28)
[#51091](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51091)

### My VA audit updates

**Team goal**: Run QA

**PM**

- QA go/no-go
- Call center guide updates, if time

**Everybody**

- Conduct QA

**Design**

- Updates from QA, if applicable
- Call center guide updates, if time

**Frontend**

- Updates from QA, if applicable
-  FE to implement analytics updates

### Onsite notifications

**PM**

- Create onsite notifications inventory/backlog for notifications to add
  - It's ok that this will be super short to start. Just getting it set up and getting process in place is the goal.
  - Once this is done, link from product outline for onsite notifications.

**Design**

- Copy for new notification(s)
  - This assumes we have an approach for a new notification or notifications
- Design updates for My VA
- Design intent, if time

**BE**

- Technical discovery
  - Is there any BE work involved as we add new notifications?

## Sprint 5 (3/1 - 3/14)
[#51092](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51092)

### My VA audit updates

Finish anything that didn't happen last sprint. Assuming we're good to move on:

**PM**

- Prep for staging and privacy reviews
- Submit call center guide updates
- What is going on with analytics?
  - **We can not move on to UAT without making sure analytics is good to go. In theory, we'd be ready to recruit for UAT in sprint 6, but we can not and should not do this unless we are sure all analytics are in place for monitoring during UAT**.

**Design**

- UAT plan and convo guide

**FE**

- If applicable, fixes or updates from QA
- If applicable, any analytics implementation or updates

### Onsite notifications

Since we know that the prescription notification can't happen right now, we need to pivot.

- First, we should determine if Appeals notifications are a path forward. If yes, continue with implementation plans, but for appeals notifications instead of prescription.
- If not, start talking about notification center research and putting the new notification design through the collab cycle.

### Update claim status integration from EVSS > Lighthouse

### PM

- Fill out collab cycle ticket
  - I still need to create a project outline

### Dev - Derrick

- Complete technical discovery. A few things to keep in mind:
  - I believe the claim status team has completed the migration of the claim status tool from EVSS > Lighthouse. This is essential, because we should only be updating our frontend. The claim status team is responsible for the backend.
  -  As such, I recommend checking in with Jacob Worrell (PM) and the devs on that team.
  -  Since Derrick is a fullstack dev, he should confirm whether there is anything that needs to be done from a backend perspective (likely not), and what frontend updates need to be made.
  -  After this, he should be ready to estimate how many sprints this will take, and we can scope the full effort.

## Sprint 6 (3/15 - 3/28)
[#51093](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51093)

### My VA audit updates

- Anything that comes over from sprint 5 (I see you guys have a lot going on!)
- ~Staging review~ already done!
- Privacy review 
- UAT recruiting, **but only if everything is together with analytics**

### Onsite notifications

- **PM**: If sprint 5 discovery deems it necessary, collab cycle ticket for the new notification component
- **Design**: Notification center stakeholder discovery planning
- **FE**: Based on sprint 5 discovery, start next steps with notification component implementation

### Update claim status integration from EVSS > Lighthouse

- **PM**: Create tickets for project in collaboration with Derrick (Berni can also work with Derrick to do this); If Samara is not here, [update long-term planning](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=378891642) to reflect estimated project timeline and tasks 
- **BE**: Start implementation

## Sprint 7 (3/29 - 4/11)
[#51094](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51094)

### My VA audit updates

This assumes all work was done from last sprint, and we were able to kickoff UAT recruiting already.

- UAT
- Launch to 25%
  - [Use Domo dashboard to monitor](https://va-gov.domo.com/auth/index?redirectUrl=%2Fpage%2F1167851935%3FuserId%3D1322887837)
  - Make sure all links are populating activity as expected

### Onsite notifications

**PM**

- Plan the rest of the component build engagement based on what comes out of the collab cycle recommendations
  - [Use long-term planning spreadsheet](https://docs.google.com/spreadsheets/d/1EN2Z0MPLZ-6qAS3S4q6uiwCekSU1daysJkykDs5bPCs/edit#gid=1904788724)

**Design**

- Next steps for stakeholder discovery, whether that is an outline of goals (a plan) and/or a light convo guide, or scheduling and conducting calls with stakeholders. This is dependent on what came out of #55245 and what you all determine needs to happen next.

**FE**

- Component implementation

### Update claim status integration from EVSS > Lighthouse

- On hold

### General

**PM/DM**

- Review list of PO/PM/DM responsibilities and update as necessary #55499

## Sprint 8 (4/12 - 4/25)
[#51095](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51095)

### My VA audit updates

- Launch to 50 % & 100%
- DOCUMENTATION SPRINT
  - Update all design use cases
  - Update FE documentation
  - Update [My VA product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#product-outline-my-va) as needed 
- **FE**: Updates from staging review
  - These are things that came up but were not launch-blocking 

### Onsite notifications

**PM**

- Continue with component build work per what came out of collab cycle.

**Design**

- Continue with next steps in stakeholder discovery

**FE**

- Continue with component build work per what came out of collab cycle.

### Update claim status integration from EVSS > Lighthouse

**PM**

- Check in with Jacob -- are we ready to resume this work?
  - If yes, have Derrick conduct technical discovery, and work with him to scope the project
  - If no, punt to whenever Jacob indicates they'll be ready

## Sprint 9 (4/26 - 5/9)
[#51096](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51096)

### My VA audit updates

- FE: Update tests and test coverage for My VA (extend an additional sprint if needed)

### Onsite notifications

- Continue with component build work per what came out of collab cycle.
- **If possible/bandwidth**: Start technical discovery on VERY MVP notification center
  - This would be a page we could link to if people have more than 3 notifications showing on My VA. 
  - It would not need any indicators in the nav. 
  - This page also should not be a sub-page of My VA, at least as far as the URL goes. We'll want to link to this page from other pages (eg. health landing page) that might surface notifications.
  - If there is not time for this during sprint 9, that's fine! Move to sprint 10 or 11 or as soon as we have availability to get started on this. We'll want this page ready for when we have new onsite notifications that we are ready to add.
  - Once technical discovery is complete, get this into planning (collab cycle, design phase, research, build, etc).

## Sprint 10 (5/10 - 5/23)
[#51098](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51098)

### My VA audit updates

- ~Update 1-month post launch to 100% stats~
  - ~This is done in the [My VA audit project outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/2022-audit#measuring-success)~
  - ~Remember, we want to track stats 1 month after the date of the launch to 100% of users. So, if we went to 100% of users on 4/15, we'd track the first month of stats from 4/15 - 5/14.~ (launch was pushed out so this got bumped to sprint 11)
- BE documentation wrap-up: architecture diagram
- Unit and E2E test improvements (cont.)

### Onsite notifications

Notification Center
- Determine next steps for notification center discovery (review with Chante; based on convos with MHV folks there's some confusion as to what happens next)
- Map out high-level requirements for NC (as noted above)
  - This would be a page we could link to if people have more than 3 notifications showing on My VA. 
  - It would not need any indicators in the nav. 
  - This page also should not be a sub-page of My VA, at least as far as the URL goes. We'll want to link to this page from other pages (eg. health landing page) that might surface notifications

Component Build
- Replace component on My VA

### Other My VA work
- Post-launch cleanup of payment info v2 (code, tests and feature flag)
- Post-launch cleanup appointments v2 (code, tests and feature flag)
