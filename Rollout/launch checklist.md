# VA.gov Launch Checklist

See fallback paths in [runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Rollout/runbook.md) if critical team members unavailable, unless otherwise noted here.

## PRE-LAUNCH 
- [x]  Oct 2: Rachael adds Launch Status Report template to Rollout folder
- [x] < Oct 4: Wyatt configures caching
- [x] Oct: Demian Ginther and Craig Butler complete Pentest
- [x] Oct 12: Rachael adds “plays” for public dissemination of preview.va.gov 
- [x] Oct 12: Elizabeth has booked location for Launch Control Room: 
- [x] < Oct 17: Wyatt coordinates load testing with ITOPS, EWIS, and AWS
- [x] < Oct 17: Wyatt starts load testing (see details in the runbook)
- [x] Oct 17: Hydra posts banner on Vets.gov inviting users to try out preview.va.gov 
- [x] < Oct 17: Clare coordinates comms about preview.va.gov
- [x] Oct 22 - 23: Curtis and/or Paul take a trip to ITOPS
- [x] Oct 23 - 24: Wyatt and ITOPS start traffic migration (see details in the runbook)
- [ ] Oct 31 or Nov 1: Launch Dry Run and Game Day exercise!
  - [ ] Mime all Launch Day activities with “test” posts in the real communication channels
  - [ ] Run incident scenarios
  - [ ] Outbrief
- [ ] < Nov 1: post banner on VA.gov inviting Veterans to try out preview.va.gov
- [ ] < Nov 1: Chris Gansen (lead ops engineer for healthcare.gov) reviews:
  - [ ] Testing posture
  - [ ] Monitoring posture
  - [ ] Runbook
  - [ ] Incident Management Plan
  - [ ] Launch checklist
  - [ ] Ops Readiness Report
- [ ] Nov 2: Winnie has 3 ~~join.me rooms~~ Skype for Business dial-ins available for on call use
- [ ] Nov 2: Rachael sends calendar invitations for Nov 7 launch Go / No Go meeting
- [ ] Nov 2: Rachael sends calendar invitations for Nov 8 and 9 post-launch check-ins
- [ ] Nov 4: open #wbc-launch-ops channel up in slack
  - [ ] Chris Johnston added
  - [ ] James Kassemi added
  - [ ] Wyatt Walter added
  - [ ] Craig Butler added
  - [ ] Ryan Watson added
  - [ ] Rachael Roueche added
  - [ ] Chris Gansen added
  - [ ] Patrick Vinograd added
  - [ ] Kam Karshenas
  - [ ] Paul Smith added
  - [ ] Post ROEs for this channel and pin to channel
  - [ ] Pin runbook (w/crisis thresholds) to channel
  - [ ] Pin incident response docs to channel
  - [ ] Pin comms templates to channel
  - [ ] Pin monitoring dashboard URL to channel
- [ ] Nov 5: test on call and pagerduty rotations
- [ ] Nov 5: OIT / ITOPS meeting/communications: preparing for pausing layout changes, and for being at the ready to have traffic piped back in the event we run into an incident in the next few days.
- [ ] Nov 5: post smoke test routes for top 6 actions
- [ ] Nov 5: post members of 24/7 dashboard monitoring team for Nov 7 - 9
- [ ] Nov 6: disseminate expected resolution turnaround times in runbook

## LAUNCH DAY: NOVEMBER 7, 2018

In order to create the smoothest launch environment, it is beneficial to establish clear launch criteria early, so the team can make the simplest, clearest decisions possible in the event an incident arises.

### 9 AM ET: Assemble
- [ ] All in-person technical team members gather in the technical Launch Control Room
- [ ] All remote technical team members available in Go / No Go Lync channel
- [ ] Curtis is on-site at ITOPS in Martinsburg, WV

### 10 AM ET: Go / No Go meeting
- [ ] All Go / No Go attendees present (per runbook)
  - [ ] > X users/sessions/visits in beta
  - [ ] > X browser types
  - [ ] > X login types
  - [ ] > X account types
  - [ ] > X tool types
  - [ ] X is true in Google Analytics trends
  - [ ] X is true in performance data
  - [ ] X is true in call center reports
  - [ ] X is true in user feedback submission trends
  - [ ] X is true of social media buzz
  - [ ] 100% of www.va.gov traffic is flowing to production VAEC
  - [ ] AWS is ready for expected traffic
  - [ ] etc... to be defined
- [ ] Chris makes the decision to launch
- [ ] Chris disseminates the decision via Slack and email

### 11:00 AM ET: launch preparation begins

- [ ] Technical launch groups confirm presence and connectivity 
- [ ] Wyatt disables automated production deployments
- [ ] Rachael, Chris, and Wyatt verify that monitoring dashboard is working

### 5:30 PM ET: launch initiated

- [ ] Technical teams dial back into the wbc-launch-ops Skype meeting
- [ ] Chris confirms verbally that we are good to launch
- [ ] Rachael alerts #wbc-launch-ops channel that we are initiating launch
- [ ] James Kassemi approves 3 PRs [PRs to be linked here for launch, header/footer injections, and Vets.gov redirects] (Note: If James unavailable, then Alex Loehr)
- [ ] Wyatt merges the Launch PR [PR to be linked here]

### 6:00 PM ET: launch complete!

- [ ] Wyatt Walter confirms in Skype that the deployment is complete
- [ ] Chris Johnston (or anyone), while screensharing, loads www.va.gov
- [ ] Wyatt Walter merges Header/Footer Injections PR [PR to be linked here] (this includes redirecting old VA.gov pages to their new VA.gov counterparts)
- [ ] Wyatt Walter confirms in Skype that deployment is complete
- [ ] Chris Johnston (or anyone), while screensharing in Skype, clicks  from www.va.gov to load a teamsite-hosted page
- [ ] Rachael disseminates Launch Status Report details in Slack and email


### 6:30 PM ET: Test, do immediate post-launch items, monitor

If any of the crisis criteria are met, immediately start following the plays in the runbook.

- [ ] Veteran Facing Tools implementation teams run smoke tests for products in their portfolios
- [ ] Merge PR for turning off T&C for specific health tools that - on Vets.gov - only presented themselves if you'd tried to access the Health tools for the first time.
- [ ] Merge PR to remove the Google “disallow” function for Search and change the search indexing files from preview to www
- [ ] Full team watches monitoring dashboard, google analytics, social media buzz
- [ ] Rachael disseminates Launch Status Report details in Slack and email

### 7:30 PM ET: one-hour post launch check-in

Hear from all stakeholders how things are going so far, what concerns may be bubbling up, what trends they’re seeing.

- [ ] All Go / No Go attendees present
- [ ] Product Lead readout
- [ ] Call Center readout
- [ ] Engineering readout
- [ ] DevOps readout
- [ ] Analytics readout
- [ ] ITOPS readout
- [ ] EVSS readout
- [ ] ID.me readout
- [ ] OIT / TeamSite readout
- [ ] MHV readout
- [ ] Chris decides whether any runbook plays are needed
- [ ] Do we need any changes to on call points of contact and 24/7 monitoring?
- [ ] Rachael disseminates Launch Status Report details in Slack and email

### 8:00 PM ET: Enact remaining redirects and continue monitoring
- [ ] Merge Vets.gov redirects PR [PR to be linked here]
- [ ] Start 24/7 active monitoring rotation (note: during this time, for security issues our reporting chain is to our security officer.)
- [ ] Wyatt re-enables automated deployments

## POST-LAUNCH: NOVEMBER 8, 2018

### 9:30 AM ET: morning check-in
Hear from all stakeholders how things are going so far, what concerns may be bubbling up, what trends they’re seeing.

- [ ] All Go / No Go attendees dial into the Skype meeting
- [ ] Product Lead readout
- [ ] Call Center readout
- [ ] Engineering readout
- [ ] DevOps readout
- [ ] Analytics readout
- [ ] ITOPS readout
- [ ] EVSS readout
- [ ] ID.me readout
- [ ] OIT / TeamSite readout
- [ ] MHV readout
- [ ] Chris decides whether any runbook plays are needed
- [ ] Rachael disseminates Launch Status Report details in Slack and email

Wyatt and TeamSite will work together to resolve CSP errors if they / as they come up.

## POST-LAUNCH NOV 9, 2018

### 9:30 AM ET: morning check-in
Hear from all stakeholders how things are going so far, what concerns may be bubbling up, what trends they’re seeing.

- [ ] All Go / No Go attendees present
- [ ] Product Lead readout
- [ ] Call Center readout
- [ ] Engineering readout
- [ ] DevOps readout
- [ ] Analytics readout
- [ ] ITOPS readout
- [ ] EVSS readout
- [ ] ID.me readout
- [ ] OIT / TeamSite readout
- [ ] MHV readout
- [ ] Chris decides whether any runbook plays are needed
- [ ] Rachael disseminates Launch Status Report details in Slack and email

## NOV 10 ONWARD

Back to standard on call coverage via pager duty.

- [ ] Merge PR for 301 redirects

*Note: This document is confidential and deliberative*
