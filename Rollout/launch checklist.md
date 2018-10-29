# VA.gov Launch Checklist

See fallback paths in [runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Rollout/runbook.md) if critical team members unavailable, unless otherwise noted here.

## PRE-LAUNCH 
- [x]  Oct 2: Rachael adds Launch Status Report template to Rollout folder
- [x] < Oct 4: Wyatt configures caching
- [x] Oct: Demian Ginther and Craig Butler complete Pentest
- [ ] Oct 12: Rachael adds “plays” for public dissemination of preview.va.gov 
- [ ] Oct 12: Rachael has 3 ~~join.me rooms~~ Lync / Skype for Business dial-ins available for on call use
- [x] Oct 12: Elizabeth has booked location for Launch Control Room: 
- [x] < Oct 17: Wyatt coordinates load testing with ITOPS, EWIS, and AWS
- [x] < Oct 17: Wyatt starts load testing (see details in the runbook)
- [ ] Oct 17: Hydra posts banner on Vets.gov inviting users to try out preview.va.gov 
- [ ] Oct 17: Clare disseminates VA comms inviting VA employees to try out preview.va.gov
- [x] Oct 22 - 23: Curtis and/or Paul take a trip to ITOPS
- [ ] Oct 23: Josh Tuscher posts banner on VA.gov inviting Veterans to try out preview.va.gov
- [ ] Oct 23: Clare and OIT publish blog post inviting Veterans to try out preview.va.gov
- [x] Oct 23 - 24: Wyatt and ITOPS start traffic migration (see details in the runbook)
- [ ] Oct 31 or Nov 1: Launch Dry Run and Game Day exercise!
  - [ ] Mime all Launch Day activities with “test” posts in the real communication channels
  - [ ] Run incident scenarios
  - [ ] Outbrief
- [ ] < Nov 1: Chris Gansen (lead ops engineer for healthcare.gov) reviews:
  - [ ] Testing posture
  - [ ] Monitoring posture
  - [ ] Runbook
  - [ ] Incident Management Plan
  - [ ] Launch checklist
  - [ ] Ops Readiness Report
- [ ] < / = Nov 1: Working Group + Digital Modernization council Go / No Gos
- [ ] Nov 2: Rachael sends calendar invitations for Nov 8 and 9 special launch check-ins
- [ ] Nov 4: #wbc-launch-ops channel up in slack
  - [ ] Chris Johnston added
  - [ ] James Kassemi added
  - [ ] Wyatt Walter added
  - [ ] Craig Butler added
  - [ ] Ryan Watson added
  - [ ] Rachael Roueche added
  - [ ] Chris Gansen added
  - [ ] Patrick Vinograd added
  - [ ] Kam Karshenas
  - [ ] [TBD Engineer] added
  - [ ] Paul Smith added
  - [ ] Post ROEs for this channel and pin to channel
  - [ ] Pin incident response to channel
  - [ ] Pin Status Report templates to channel
  - [ ] Pin decision communication templates to channel
  - [ ] Pin runbook (w/crisis thresholds) to channel
  - [ ] Pin monitoring dashboard URL to channel
- [ ] Nov 5: test on call and pagerduty rotations
- [ ] Nov 5: OIT / ITOPS meeting: do not push layout changes after this, do not adjust for lower traffic, in case we need to deploy config update and pipe back to you, do not change anything without talking to the new va.gov team.
- [ ] Nov 5: post smoke test routes for top 6 actions in Rollout folder
- [ ] Nov 5: post members of 24/7 dashboard monitoring team for Nov 7 - 9
- [ ] Nov 6: disseminate expected resolution turnaround times in runbook

## LAUNCH DAY: NOVEMBER 7, 2018

In order to create the smoothest launch environment, it is beneficial to establish clear launch criteria early, that’s why we have it due in the checklist above by Nov 5. This allows the team to make the simplest decisions possible.

### 9 AM ET: Assemble
- [ ] All in-person technical team members gather in the technical Launch Control Room
- [ ] All remote technical team members available in virtual Lync channels
- [ ] Curtis is on-site at ITOPS in Martinsburg, WV
- [ ] All stakeholders gather in the DSVA Launch Room

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
  - [ ] TBD…
- [ ] Chris makes the decision to launch

### 5 PM ET: launch communicated and prep begins

Ad Hoc will have drafted text ready for Chris, as well as the channels and recipient list by Nov 5. 

- [ ] All on-site parties are on site
- [ ] Join.me is opened for remote parties
- [ ] Chris disseminates decision via slack and email
- [ ] Wyatt disables automated production deployments
- [ ] Alert #wbc-launch-ops channel
- [ ] Final check that monitoring dashboard is working

### 5:30 PM ET: launch initiated

This time is based on an optimzation of low risk Network times, low risk usage times, optimal Engineer alertness times, and optimal partner point of contact/escalation path availability times for incident response.

- [ ] James Kassemi approves 2 PRs [PRs to be linked here]
- [ ] Note: If James unavailable, then Alex Loehr
- [ ] Mina Farzad (with Wyatt virtual supervision) merges Launch PR [PR to be linked here]
  - [ ] Note: if Mina unavailable, then Wyatt.

### 6:00 PM ET: launch!

- [ ] Wyatt Walter confirms in join.me that deployment is complete
- [ ] Chris Johnston (or anyone), while screensharing in join.me, loads www.va.gov
- [ ] Wyatt Walter merges Header/Footer Injections PR [PR to be linked here] (this includes redirecting old VA.gov pages to their new VA.gov counterparts)
- [ ] Wyatt Walter confirms in join.me that deployment is complete
- [ ] Chris Johnston (or anyone), while screensharing in join.me, clicks  from www.va.gov to load a teamsite-hosted page

### 6:30 PM ET: Test and Monitor

If any of the crisis criteria or thresholds are met, immediately start following the plays in the runbook.

- [ ] Full team watches monitoring dashboard, google analytics, social media buzz
- [ ] Veteran Facing Tools implementation teams run smoke tests for products in their portfolios
- [ ] Rachael sends Launch Status Report
- [ ] Chris posts that we are live in #vetsdotgov Slack channel

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
- [ ] Chris decides whether to continue or roll back
- [ ] Chris disseminates decision

### 8:00 PM ET: Monitor
- [ ] Enact Vets.gov redirects
- [ ] Full team watches monitoring dashboard, google analytics, social media buzz

### 12:00 AM ET (Nov 8): end of day check-in
- [ ] All Go / No Go attendees present
- [ ] Any emerging issues?
- [ ] Do we need any changes to on call points of contact and 24/7 monitoring?
- [ ] Document who’s allowed to get Chris out of bed
- [ ] Chris decides whether to continue or roll back
- [ ] Chris disseminates decision
- [ ] Wyatt re-enables automated deployments

## POST-LAUNCH NOV 7 - 5 PM ET NOV 9

- [ ] Merge PR for turning off T&C for specific health tools that - on Vets.gov - only presented themselves if you'd tried to access the Health tools for the first time.
- [ ] Merge PR to remove the Google “disallow” function for Search and change the search indexing files from preview to www
- [ ] Wyatt and TeamSite reps work together to resolve CSP errors

24/7 monitoring and special on call coverage continues. During this time, for security issues, our reporting chain is to our security officer, which is a slight divergence from: 1-Guy Chris.

Daily check-ins occur with all Go / No Go attendees invited, to continue to be available for feedback on emerging issues.

## NOV 10 ONWARD

Back to standard on call coverage via pager duty.
- [ ] Merge PR for 301 redirects
- [ ] 
