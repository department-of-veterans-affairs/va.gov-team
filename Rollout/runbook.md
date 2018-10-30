👑 = ultimate decision maker

# Go / No Go Attendees

- 👑 Product Lead: Chris Johnston
- Execs: Charles Worthington, Andrew Hughey, Marcy Jacobs
- Product: David Bao, Steve Kovaks
- Engineering: James Kassemi, Alex Loehr
- DevOps: Wyatt Walter
- Design + Research: Lauren Alexanderson, Andy Lewendowski, Jeff Barnes
- Content: Melissa Schaff
- Implementation: Rachael Roueché, Mina Farzad, Elizabeth Lewis
- Marketing and Communications: Clare Martorana, Mandi Lindner
- Analytics: Tony Whittaker, Ryan Luu
- **NSOC:**
- **EWIS:**
- **ID.me:**
- **OIT:**
- **Call Center:**
- **VA311**: 
- **MHV:**
- **TeamSite:**
- **AWS technical manager:**

# "On Call" escalation contacts

### Who to contact if you see a problem:

"On call" means available to respond via cell phone if there's an urgent issue that needs addressing for usability testing or demo'ing reasons.

- Product/implementation/general issues: Rachael Roueche (report out or hand off to Chris Johnston)
- Engineering and DevOps issues: James Kassemi (report out to Alex Loehr, Chris Johnston)
- Design and IA issues: Rachael Roueche (report out to Chris Johnston, Andy Lewendowski, Jeff Barnes)
- Content issues: Rachael Roueche (report out to Melissa Schaff, Chris Johnston)
- Marketing and communications issues: Rachael Roueche (hand off to Clare Martorana, Mandi Lindner, Chris Johnston)
- **NSOC:**
- **EWIS:**
- **ID.me:**
- **OIT:**
- **Call Center:**
- **VA311**: 
- **MHV:**
- **TeamSite:**
- **AWS technical manager:**

### Who the escalation contacts can work with for implementation in an emergency:

General: Mina Farzad > Rachael Roueche > Elizabeth Lewis

Ops: Wyatt Walter > Craig Butler > Ryan Watson

Sitewide Engineering: Nick Sullivan > Rob Wilkinson

Header/footer injections: Ben Shyong > Nick Sullivan

API: Patrick Vinograd > Ed Paget

Content: Danielle Thierry > Beth Potts

Design: ?

# Rules of Engagement for Escalation during Oct 9 - Nov 9

**Please use good judgement in determining whether something is truly an emergency and needs escalation outside of normal working hours.**

### Oct 9 - Oct 12: "Critical Feature Complete"

On call escalation contacts will be responsive during reasonable business hours (M - F , 9 AM ET - 6 PM ET) via cell phone to support emergencies.


### Oct 15 - 17: Ad Hoc Retreat

On call escalation contacts may not be fully available due to Ad Hoc retreat and the full day DSVA workshops. Call Rachael Roueche if there is a true emergency.

### Oct 18 - Nov 4: Final Stretch

On call escalation contacts will be responsive during a broader range of hours (7 days a week, 9 AM ET - 9 PM ET) via the cell phone to support emergencies.

Alex, Paul, Curtis, James travel to NSOC in WV to meet team and establish working relationships.

### Nov 5 - 9: Launch Window

On call escalation contacts will be responsive at all hours via cell phone as needed to support emergency pre-launch, launch, and post-launch needs.

The following members will be on site at NSOC in West Virginia:
- [ ] Curtis

The following members will be in-person from 9 AM to 8 PM ET.

- Chris Johnston
- James Kassemi
- Paul Smith
- Elizabeth Lewis
- Rachael Roueche
- Wyatt Walter
- Others TBD...

### Nov 10 - onward (if launch is stable)

Back to standard on call coverage via pager duty

---

# The Plays

*thresholds and plays still tbd for these scenarios: major tweet, hack, errors in teamsite injections, horrible user feedback,
call center totally overwhelmed*

## Maintenance Page

### Conditions

* Static content error rate >= 90% for 15m
* Static content 90th percentile latency >= 5s for 15m
* API availability 0% for 15m

### Plan

1. On call party escalates issue to incident commander via Pager Duty
1. Incident Commander updates #wbc-launch-ops channel
1. Incident Commander will call Rachael if she doesn't respond in the channel
1. Rachael updates Chris w/Launch Status Report including instructions for communicating decision (***template to defined by Nov 5)***
1. Chris makes decision to put up a maintenance page
1. Chris disseminates decision via Slack (with @channel)and email (***recipients TBD***)
1. DevOps on call part deploys maintenance page (***issue in progress for developing this page and process***)
1. Incident Commander notifies Rachael that the maintenance page has been deployed
1. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report. This marks the time that the maintenance page is considered online.
1. Open up a lync if necessary
1. Once Incident Commander confirms that the issue is resolved, notify Rachael
1. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report indicating the issue is resolved.
1. Chris disseminates decision to take down maintenance page via Slack (with @channel)and email (***recipients TBD***)
1. DevOps on call party takes down the maintenance page

***This may occur several times during the launch. Restart the process everytime.***

## VA.gov System Rollback

This constitutes a rollback to the www.va.gov system for content, while still handling 100% of requests through our servers.

### Conditions

* Maintenance page online for 2hrs. 
* Engineering assessment that rollback to 100% EWIS VA proxy will alleviate the issue.

### Plan
1. On call party escalates issue to incident commander via Pager Duty
1. Incident Commander updates #wbc-launch-ops channel
1. Incident Commander will call Rachael if she doesn't respond in the channel
1. Rachael updates Chris w/Launch Status Report including instructions for communicating decision (***template to defined by Nov 5)***
1. Chris makes decision to roll back based on the data in the launch report
1. Chris disseminates decision via Slack (with @channel)and email (***recipients TBD***)
1. DevOps on call party performs rollback (If redirects have already been enacted from vets.gov, they should be reverted as well) ***visiting VA.gov will display old VA, visitng Vets.gov will display original page*** 
1. DevOps on call will continue to monitor and restore Vets.gov services as necessary
1. Incident Commander notifies Rachael that the rollback has been performed
1. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report.
1. Chris will make the decision on next steps 

If not resolved...

## VA.gov EWIS Rollback

This constitutes a _full_ revert. Moving the www.va.gov traffic that we acquire on Oct 4 off of our servers and back to the configuration < Oct 4.

### Conditions

* Maintenance page online for 2hrs.
* Engineering assessment that VA system rollback will *not* alleviate the issues. 

### Plan

1. On call party escalates issue to incident commander via Pager Duty
1. Incident Commander updates #wbc-launch-ops channel
1. Incident Commander will call Rachael if she doesn't respond in the channel
1. Rachael updates Chris w/Launch Status Report including instructions for communicating decision (***template to defined by Nov 5)***
1. Chris makes decision to roll back based on the data in the launch report
1. Chris disseminates decision via Slack (with @channel)and email (***recipients TBD***)
1. DevOps on call party coordinates with ITOPS to remove VAEC members from the pool (If redirects have already been enacted from vets.gov, they should be reverted as well) ***visiting VA.gov will display old VA, visitng Vets.gov will display original page*** 
1. DevOps on call will continue to monitor and restore Vets.gov services as necessary
1. Incident Commander notifies Rachael that the rollback has been performed
1. Rachael updates Chris (***and OIT and other stakeholders?***) w/Launch Status Report.
1. Chris will make the decision on next steps

## Other Issues

For any scenario that doesn't match those outlined here please use the incident response playbook: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Engineering/OnCall/Incident%20Response%20Playbook.md


# Deployment Change Times post-launch (Work In Progress, numbers need to be increased to include work beyond purely technical deployment pipeline timing)

| Type | Time to Deploy | Overview |
| --- | --- | --- |
| Content Fix | <5m | Change to vagov-content and merge to master |
| Downtime Notification | ~5m | PagerDuty maintenance window update, with 5m cache period |
| Frontend Application Rebuild / Deploy | ~45m | vets-website PR test, master test, build, release, deploy - injection script logic updates |
| Frontend Application Revert | ~4m | vets-website deploy |
| Backend Application Rebuild / Deploy | ~39m | vets-api PR test, master test, build, release, deploy |
| Backend Application Revert | ~5m | vets-api deploy |
| Reverse Proxy Update | 3m | |
| Reverse Proxy Rebuild / Deploy | 16m | |
| Forward Proxy Rebuild / Deploy | 5m | |


*Note: This document is confidential and deliberative*
