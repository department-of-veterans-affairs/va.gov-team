# New Mobile Header Product Launch Guide

## Pre-Release 

### [Privacy and security review]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review)
- [ ] Submit ticket for review: Use Privacy and Security Review template in va.gov-team-sensitive repository 
- [ ] Provide artifacts atleast 48 hours prior to the review
- [ ] Schedule/hold Privacy and Security Review
- [ ] Complete any tickets that came out of Privacy/Security review (if any)

### [Submit Analytics request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#analytics-request)
- [ ] [Analytics request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32528)
- [ ] [GA Event Tracking Request from IA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/31338)


### Release Plan
- [ ] Create UAT plan
- [UAT Plan Example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/profile-research-plan-UAT.md)
- [ ] Complete Release Plan 
- [Release Plan Example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Release%20Plan.md)


### Staging Review PREP (2 weeks prior to Staging Review)
#### QA
- [X] Create list of staging users
- [ ] Create list of use cases [see [Use Cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md)] and submit to Tze so he can create test cases/regression tests
- [X] Epic Linked
- [ ] [QA Test Plan Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/32505)
#### Accessibility
- [X] Complete the [required accessibility checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review)
- [x] Complete QA/Accessiblilty tickets that came out of Staging review prep (if any)

### Conduct Internal QA Session
It is beneficial to conduct an internal QA session prior to actual QA. This consists of the team allocating 1 hour to meet look for bugs and or issues with the product. This is beneficial because the engineers and designers have in-depth knowledge of potential problem areas that QA might not have the time/resources to look into.
- [X] Internal QA has been conducted **(Team conducted internal UAT 11/19/2021)**

#### List of issues coming out of internal QA session:
- VCL component was dropped in staging 
- TBD
- TBD
- TBD
- [ ] All issues that came from internal QA have been completed

### [Request Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review)
- [ ] Provide all required artifacts in the request
- [ ] Schedule/hold staging review
- [ ] Complete all IA feedback tickets
- [ ] Complete all Accessibility feedback tickets
- [ ] Complete all QA feedback tickets
- [ ] Complete all Content feedback tickets
- [ ] Complete all Design feedback tickets

### [Contact Center review]( https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#contact-center-review)
- [ ] Create Product guide
      - [Product Guide example]()
- [ ] Create Product video
- [ ] Submit request for Contact Center Review
- [ ] Complete Contact Center Review

### Analytics follow up
- [ ] Analytics are complete
- [ ] Frontend has implemented analytics data layer changes
- [ ] Dashboards have been created and link directly to your OKR/KPI's
- [ ] Review dashboard(s) with Analytics team to ensure understanding of all metrics/calculations
- [ ] Dashboards are finalized/work correctly


### Preparing/Updating all necessary supporting documentation for your product
- [ ] API calls and dependent systems [Example](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account#api-calls-and-dependent-systems)
- [ ] Update product outline with updated release information and links to analytics dashboards [Product Outline Example](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account)

### Coordinate with relevant parties regarding any changes that affect other teams/stakeholders
#### Ex:(re-directs, changes to content, changes that affect other teams) 
- [ ] Create issues in Github for changes that will take place, add dates, and tag relevant people/teams (re-directs, content changes, UI changes, etc)
- [ ] Update dates/parties accordingly as launch approaches and dates are finalized

## Release
### UAT
- [ ] Conduct UAT Go/No-Go meeting 
- [Example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/uat-go-nogo.md)
- [ ] UAT has been conducted
- [ ] Issues have been logged/added to the Release Plan. [Example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Release%20Plan.md)
- [ ] Launch-Critical UAT issues have been resolved

### Phased Launch (depends on phases in your launch)*
- [ ] Conduct Launch Go/No-Go meeting
-  [Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md)
- Invite your entire team, analytics, platform team members, etc
- [ ] Resolve any issues (if applicable)
- [ ] Continue with phased launch, resolving issues if they arise, monitoring analytics daily

#### Go-live to 100% of traffic
- [ ] Conduct Go-live go/no go meeting 
- [Example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Launch%20go%20no-go.md)
- [ ] Resolve issues (if applicable)
- [ ] Launch to 100% of users

## Monitoring
- [ ] Monitor analytics daily to ensure there are no abnormalities/errors
- [ ] Resolve any issues (if applicable)

## Post Launch
- [ ] Fill in post-launch metrics in the Release Plan
- [ ] Remove old code (if applicable)

### [Full Accessiblity and 508 Office Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit)
- [ ] Request [Full 508/Accessibility Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+shiragoodman&labels=508%2FAccessibility%2C+vsp-product-support%2C+collaboration-cycle%2C+collab-cycle-review&template=full-accessibility-and-508-office-audit.md&title=Full+Accessibility+%26+508+Office+Audit+%5BTeam+Name+-+Feature+Name%5D)
- [ ] Complete required scans/tests
- [ ] Make required changes (if any)

### [Post Launch Check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in)
- [ ] Update Release Plan with "post-launch questions" completed
- [ ] Schedule/Hold check-in
- [ ] Measure results against OKRs
- [ ] Prepare next steps and potential iterations if applicable


# Feedback from other teams

**QA feedback:**
- Staging review scheduling: Have artifacts in and tag Tze 2 weeks in advance from the Staging Review. This makes it possible for Tze to get to it w/o being rushed.
- When you schedule the Staging review, also tag Tze in Slack.

**Platform feedback:**
- The biggest blocker to a successful launch would be not implementing platform feedback earlier in the process. 
- It would be ideal to implement the feedback prior to the staging review. 
- More frequent communication of changes/issues via the slack channel would be beneficial.

**Accessibility feedback:**
- Include accessibility in design syncs, design-intent review, and anytime large changes are made.
- More frequent communication with Accessibility (ex: Biweekly accessibility meetings)
- For individual meeting/mini reviews use this [GH template](Enter link to template)
- Have an "Engineering intent review" and include accessibility (in addition to design intent review).

**PM Feedback:**
- Update Collaboration Tracker
- Add time estimates maybe
- how to roll this out
- put in epic format?
