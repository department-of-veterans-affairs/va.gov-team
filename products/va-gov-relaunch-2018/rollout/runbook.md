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

## On Call Group (i.e. who to contact if you see a problem)

#### Product, implementation, general issues

- POC: Rachael Roueche 
- Chris Johnston 
- Elizabeth Lewis 
- Ryan Luu 

#### Technical issues

- POC: James Kassemi 
- Wyatt Walter 
- Brian Gryth 
- Nick Sullivan
- Jeff Balboni
- Chris Johnston 
- Alex Loehr

#### SSO / Login issues
- POC: David Bao
- Winnie Smith
- Kam Karshenas 
- Rachael Roueche
- Chris Johnston

#### Design, IA, content issues
- POC: Rachael Roueche 
- Ryan Luu 
- Elizabeth Lewis
- Andy Lewendowski 
- Jeff Barnes 
- Melissa Schaff
- Lauren Alexanderson 
- Chris Johnston

#### AWS issues
- [Create a support case](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/VA.gov%20Relaunch%202018/Rollout/Creating%20an%20AWS%20GovCloud%20Support%20Case.docx) and cc Shawn Arnwine (sarnwine@amazon.com)
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
- Curtis

The following members will be in-person from 9 AM to 8 PM ET.

- James
- Wyatt
- Nick
- Ben S
- Chris
- Alex Loehr
- Rachael
- Paul Smith

### Nov 10 - onward (if launch is stable)

Back to standard on call coverage via pager duty

---

# The Plays

## "NO" decision at Go / No Go

Follow traditional pattern: disseminate Launch Status Report w/NO as the decision, and repeate Go / No Go meeting daily at the same time, until we reach a Go decision.

## Maintenance Page

### Conditions

* Static content error rate >= 90% for 15m
* Static content 90th percentile latency >= 5s for 15m
* API availability 0% for 15m

### Plan

1. On call party escalates issue to incident commander (i.e. James Kassemi) via Pager Duty (or via mobile number listed in Slack).
1. Incident Commander updates #wbc-launch-ops channel
1. Incident Commander will call Rachael if she doesn't respond in the channel
1. Rachael sends out Launch Status Report to Chris
1. Chris makes decision to put up a maintenance page
1. Chris disseminates decision via Slack (with @channel) mention
1. Rachael disseminates Launch Status Report and Live Update to appropriate email groups
1. DevOps on call part deploys maintenance page
1. Incident Commander notifies Rachael that the maintenance page has been deployed
1. Rachael updates Chris and disseimanates Live Update - this marks the time that the maintenance page is considered online.
1. Dial into a Skype Incident room if necessary
1. Once Incident Commander confirms that the issue is resolved, notify Rachael
1. Rachael updates Chris w/Launch Status Report indicating the issue is resolved
1. Chris disseminates decision to take down maintenance page via Slack (with @channel)
1. DevOps on call party takes down the maintenance page
1. Rachael disseminates Launch Status Report and Live Update to appropriate email groups

***This may be enacted multiple times during the launch. Restart the process each time.***

## Rollback 1: VA.gov System Rollback

This constitutes a rollback to the www.va.gov system for content, while still handling 100% of requests through our servers.

### Conditions

* Maintenance page online for 2hrs. 
* Engineering assessment that rollback to 100% EWIS VA proxy will alleviate the issue.

### Plan
1. On call party escalates issue to incident commander (i.e. James Kassemi) via Pager Duty (or via mobile number listed in Slack).
1. Incident Commander updates #wbc-launch-ops channel
1. Incident Commander will call Rachael if she doesn't respond in the channel
1. Rachael updates Chris w/Launch Status Report
1. Chris makes decision to roll back based on the data in the launch report
1. Chris disseminates decision via Slack (with @channel)
1. Rachael disseminates Launch Status Report and Live Update to appropriate email groups
1. DevOps on call party performs rollback (If redirects have already been enacted from vets.gov, they should be reverted as well) ***visiting VA.gov will display old VA, visitng Vets.gov will display original page*** 
1. DevOps on call will continue to monitor and restore Vets.gov services as necessary
1. Incident Commander notifies Rachael that the rollback has been performed
1. Rachael updates Chris
1. Chris will make the decision on next steps and communicates decision in Slack
1. Rachael disseminates Launch Status Report and Live Update to appropriate email groups

If not resolved...

## Rollback 2: (worst case scenario) VA.gov EWIS Rollback

This constitutes a _full_ revert. Moving the www.va.gov traffic that we acquire on Oct 4 off of our servers and back to the configuration < Oct 4.

### Conditions

* Maintenance page online for 2hrs.
* Engineering assessment that VA system rollback will *not* alleviate the issues. 

### Plan

1. On call party escalates issue to incident commander (i.e. James Kassemi) via Pager Duty (or via mobile number listed in Slack).
1. Incident Commander updates #wbc-launch-ops channel
1. Incident Commander will call Rachael if she doesn't respond in the channel
1. Rachael updates Chris
1. Chris makes decision to roll back based on the data in the launch report
1. Chris disseminates decision via Slack (with @channel)
1. Rachael disseminates Launch Status Report and Live Update to appropriate email groups
1. DevOps on call party coordinates with ITOPS to remove VAEC members from the pool (If redirects have already been enacted from vets.gov, they should be reverted as well) ***visiting VA.gov will display old VA, visitng Vets.gov will display original page*** 
1. DevOps on call will continue to monitor and restore Vets.gov services as necessary
1. Incident Commander notifies Rachael that the rollback has been performed
1. Rachael updates Chris
1. Chris will make the decision on next steps and posts decision in Slack
1. Rachael disseminates Launch Status Report and Live Update to appropriate email groups

## Other Issues

For any scenario that doesn't match those outlined here please use the incident response playbook: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/OnCall/incident-response-playbook.md


## 24/7 Active Monitoring Rotation Schedule

**Wednesday Nov 7**
- 9 pm - 12 am: James
- 12 am - 3 am: Rachael
- 3 am - 6 am: Elizabeth
- 6 am - 9 am: Chris

**Thursday Nov 8**
- 9 pm - 12 am: James
- 12 am - 3 am: Rachael
- 3 am - 6 am: Elizabeth
- 6 am - 9 am: Chris

*Note: This document is confidential and deliberative*

