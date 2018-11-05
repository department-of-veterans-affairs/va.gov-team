*Note: This document is iterative and subject to change*

# VA.gov Launch Runbook

## Go / No Go Attendees

- Chris Johnston
- David Bao
- Ryan Luu
- Andy Lewandowski
- Jeff Barnes
- Steve Kovacs
- Lauren Alexanderson
- Rachael Roueche
- James Kassemi
- Alex Loehr
- Nick Sullivan
- Tony Whittaker
- Clare Martorana
- Noreen Hecmanczuk
- Wyatt Walter
- Kevin Williams
- Tom Phillips
- Mere Work
- Denise Kitts
- Pete Smith
- Josh Tuscher
- Carnetta Scruggs?
- Lanny Derby?
- David Bao
- Shawn Arnwine
- Charles Worthington
- Marcy Jacobs
- Steve Walker
- Andrew Hughey
- Elizabeth Lewis

## Who to contact if you see a problem:

#### Product, implementation, general issues

- POC: Rachael Roueche (rachael.roueche@adhocteam.us)
- Chris Johnston (Christopher.Johnston2@va.gov)
- Elizabeth Lewis (elizabeth.lewis@adhocteam.us)
- Ryan Luu (ryan.luu@adhocteam.us)

#### Technical issues

- POC: James Kassemi (james.kassemi@adhocteam.us)
- Wyatt Walter (wyatt@adhocteam.us)
- Brian Gryth (brian.gryth@adhocteam.us)
- Nick Sullivan (nick.sullivan@adhocteam.us)
- Jeff Balboni (jeff@adhocteam.us)
- Chris Johnston (Christopher.Johnston2@va.gov)
- Alex Loehr (Christopher.Johnston2@va.gov)

#### SSO / Login issues
- POC: David Bao (david.bao@va.gov)
- Winnie Smith (winnie@adhocteam.us)
- Kam Karshenas (kam@adhocteam.us)
- Rachael Roueche (rachael.roueche@adhocteam.us)
- Chris Johnston (Christopher.Johnston2@va.gov)

#### Design, IA, content issues
- POC: Rachael Roueche (rachael.roueche@adhocteam.us)
- Ryan Luu (ryan.luu@adhocteam.us)
- Elizabeth Lewis (elizabeth.lewis@adhocteam.us)
- Andy Lewendowski (Andrew.Lewandowski2@va.gov)
- Jeff Barnes (jeffrey.barnes4@va.gov)
- Melissa Schaff (melissa.schaff@va.gov)
- Lauren Alexanderson (Lauren.Alexanderson@va.gov)
- Chris Johnston (Christopher.Johnston2@va.gov)

#### AWS issues
- [Create a support case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Rollout/Creating%20an%20AWS%20GovCloud%20Support%20Case.docx) and cc Shawn Arnwine (sarnwine@amazon.com)
  - Choose the appropriate level of severity
  - TAM team is CC’d on all VA related cases automatically
- Email the TAM team, aws-tam-va@amazon.com
  - This email includes AWS VA POCs Syed and Eric

*Note: personal contact information for resolving urgent incidents is not stored here in GitHub, but has been shared with the necessary people via e-mail and slack.*

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

Be available to answer calls to your phone number listed in Slack to resolve potential incidents at any time of day or night. Chris, Rachael, Elizabeth, and James will take turns actively monitoring performance overnight Wednesday and Thursday nights, and depending upon the situation, may need to call in expertise for resolution. This means, don't engage in activities that could result in impaired judgement during this time :)

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

***This may be enacted multiple times during the launch. Restart the process each time.***

## Rollback 1: VA.gov System Rollback

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

## Rollback 2: (worst case scenario) VA.gov EWIS Rollback

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


## 24/7 Active Monitoring Rotation Schedule

[What to look for in Grafana and Sentry WIP](#)

**Wednesday Nov 7**
- 9 PM - 12 am: Elizabeth Lewis
- 12 am - 3 am: Rachael
- 3 am - 6 am: James
- 6 am - 9 am: Chris

**Thursday the 8th**
- 9 PM - 12 am: Elizabeth Lewis
- 12 am - 3 am: Rachael
- 3 am - 6 am: James
- 6 am - 9 am: Chris

*Note: This document is confidential and deliberative*

