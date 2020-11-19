# Product Release Guide 
How do we ensure a smooth and successful launch?

## Pre-Release 

### Internal QA Session
It is beneficial to conduct internal QA. This consisf of the team allocating 1 hour to meet and have the team look for bugs and or issues with the product. This is beneficial because the engineers and designers have in-depth knowledge of potential problem areas that QA might not have the time/resources to look into.
- [ ] Internal QA has been conducted

#### List of issues coming out of internal QA session:
- [ ] TBD
- [ ] TBD
- [ ] TBD
- [ ] TBD
- [ ] Notes

### Analytics
- [ ] Dashboards have been created and link directly to your OKR/KPI's
- [ ] Review dashboard(s) with Analytics team to ensure understanding of all metrics/calculations
- [ ] Dashboards are finalized/work correctly

### Preparing/Updating all necessary documentation
- [ ] How to use flipper/feature flags [example](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/flipper-feature-flags)
- [ ] API calls and dependent systems 
- [ ] Update product outline with updated release date and links to analytics dashboards
- [ ] Update go-to-market strategy/communications plan

### UAT 
- [ ] Create UAT plan [example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Research/UAT/profile-research-plan-UAT.md)
- INSERT TEMPLATE (ask design)

### Release Plan
- [ ] Complete release plan [example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Release%20Plan.md)

### Coordination with relevant parties (IMPORTANT)
#### Ex:(re-directs, changes to content, changes that affect other teams) 
- [ ] Create issues in Github for changes that will take place, add dates, and tag relevant people/teams (re-directs, content changes, UI changes, etc)
- [ ] Update dates/parties accordingly as launch approaches and dates are finalized

## Release

### UAT
- [ ] Conduct UAT Go/No-Go meeting [example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/uat-go-nogo.md)
- [ ] Resolve any issues (if applicable)
- [ ] UAT has been conducted
- [ ] Issues have been logged/added to the [Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Release%20Plan.md)
- [ ] Critical UAT issues have been resolved

### Phased Launch (depends on phases in your launch)*
- [ ] Conduct Launch Go/No-Go meeting
- [ ] Resolve any issues (if applicable)

#### Launch to 25% of traffic*
- [ ] Add Issues (if applicable) to the Release Plan
- [ ] Resolve issues (if applicacble)
#### Launch to 50% of traffic
- [ ] Add Issues (if applicable) to the Release Plan
- [ ] Resolve issues (if applicacble)
#### Go-live to 100% of traffic
- [ ] Conduct Go-live go/no go meeting [example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Profile%202.0%20Launch%20go%20no-go.md)
- [ ] Resolve issues (if applicable)
- [ ] Launch to 100 of users!

## Monitoring
- [ ] Monitor analytics daily to ensure there are no abnormalities/errors
- [ ] Resolve any issues (if applicable)

## Post Launch
- [ ] Fill in post launch metrics in the Release Plan
- [ ] Remove old code (if applicable)

## Notes
Pre requisites to product release:
Privacy ans security review
Call Center review 
  - product guide
  - call center guide
  
Next step:
how do we get this infront of PM's
 - Run by 2-3 PM's/PO's/Platform team to get feedback (bring a few open-ended/research questions)
 - Megan (Platform), Samara, PM's, engineers/designers
 - weekly product sync
 - fix typos
 - add examples
 
 Show at next weeks product sync, meet with Mickin prior


=================================================================

**QA feedback:**
Staging review scheduling: 
As a regular process, check in with Tze a week prior to opening the staging review ticket, or when you open the ticket , have artifacts in and tag Tze 1 week in advance. This makes it possible for Tze to get to it w/o being rushed (2day before meeting).

Give 1 week notice prior to opening staging review ticket. 
tag Tze in ticket, also tag him in slack. Things get lost in the process.

**Platform feedback:**
The biggest blocker to a successful launch would be not implementing platform feedback earlier in the process. It would be ideal to implement the feedback prior to the staging review. Also more frequent 
communication of changes/issues via the slack channel would be beneficial.

**Accessibility feedback:**
Include accessibility in design syncs, and anytime large changes are made.
More frequent communication with Accessibility (ex: Biweekly accessibility meetings)
for one off meetings use [this GH template](www.google.com)

Have an "Engineering intent review" and include accessibility (in addition to design intent review) 

