*Note: This document is iterative and subject to change*

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
- [x] Oct 31 or Nov 1: Launch Dry Run and Game Day exercise!
  - [x] Mime all Launch Day activities with “test” posts in the real communication channels
  - [x] Run incident scenarios
  - [x] Outbrief
- [ ] < Nov 2: Chris Gansen (lead ops engineer for healthcare.gov) reviews:
  - [ ] Testing posture
  - [ ] Monitoring posture
  - [ ] Runbook
  - [ ] Incident Management Plan
  - [ ] Launch checklist
  - [ ] Ops Readiness Report
- [x] Nov 2: Winnie has 4 ~~join.me rooms~~ Skype for Business meetings available for on call use
- [x] Nov 2: Rachael sends calendar invitations for Nov 7 launch Go / No Go meeting
- [x] Nov 2: Rachael sends calendar invitations for Nov 8 and 9 post-launch check-ins
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
  - [ ] Amy Cesal added
  - [ ] Emily Waggoner added
  - [ ] Jeff Balboni added
  - [ ] Lauren Alexanderson
  - [ ] Rian Fowler
  - [ ] Ben Barone
  - [ ] Ben Shyong
  - [ ] Ryan Luu
  - [ ] Elizabeth Lewis
  - [ ] Curtis Mejeur
  - [ ] Post ROEs for this channel and pin to channel
  - [ ] Pin runbook (w/crisis thresholds) to channel
  - [ ] Pin incident response docs to channel
  - [ ] Pin comms templates to channel
  - [ ] Pin Data Studio link to channel, for analytics monitoring
  - [ ] Pin monitoring dashboard URL to channel
- [ ] < Nov 5: confirm that On Call team members have their personal phone number available in DSVA slack profile
- [ ] Nov 5: test on call and pagerduty rotations
- [ ] Nov 5: OIT / ITOPS meeting/communications: preparing for pausing layout changes, and for being at the ready to have traffic piped back in the event we run into an incident in the next few days.
- [ ] Nov 5: post smoke test routes for top 6 actions
- [ ] Nov 5: post members of 24/7 dashboard monitoring team for Nov 7 - 9
- [ ] Nov 6: disseminate expected resolution turnaround times in runbook
- [ ] < Nov 6: Pete Smith activates VA311
- [ ] < Nov 7: post banner on VA.gov inviting Veterans to try out preview.va.gov

## LAUNCH DAY: NOVEMBER 7, 2018

In order to create the smoothest launch environment, it is beneficial to establish clear launch criteria early, so the team can make the simplest, clearest decisions possible in the event an incident arises.

### 9 AM ET: Assemble
- [ ] All in-person Go / No Go attendees head to Team Space, 5th floor, 811 Vermont Ave NW, Washington DC (Rooms 5074 / 5076)
- [ ] Winnie opens Go / No Go Skype Meeting
- [ ] All remote Go / No Go attendees enter Go / No Go + Check Ins Skype Meeting
- [ ] Curtis is on-site at ITOPS in Martinsburg, WV

### 10 AM ET: Go / No Go meeting
- [ ] Roll call: all Go / No Go attendees present
- [ ] Standup-style poll
- [ ] Does everyone have the On Call contact list, and are any changes needed?
- [ ] Chris makes the decision to launch
- [ ] Chris disseminates the decision via Slack and email
- [ ] In person and Skype meetings adjourn

### 11:00 AM ET: launch preparation begins
- [ ] In-person technical team members gather in Technical Launch Control Room at WeWork
- [ ] In-person implementation team members gather in Implementation Launch Control Room at WeWork
- [ ] Key execs gather in Executive Launch Control Room at VA
- [ ] Winnie opens WBC Launch Room Skype meeting
- [ ] All members review [Runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Rollout/runbook.md) and other pinned Slack channel information
- [ ] All members confirm they have the incident response contact info handy
- [ ] Technical and Implementation teams enter WBC Launch Room Skype meeting
- [ ] Wyatt posts @channel mention in vetsdotgov Slack about how enacting Vets.gov redirects tonight will create alerts noise
- [ ] Members confirm presence and connectivity
- [ ] Wyatt disables automated production deployments
- [ ] Rachael, Chris, and Wyatt verify that monitoring dashboard and How To docs are accessible and working
- [ ] Keep WBC Launch Room Skype meeting open, people can enter/leave, and mute/unmute to collaborate as needed

### 3:30 PM ET: merge launch PRs for testing + 5:30 PM ET deployment
- [ ] Rian merges [PR to remove Google “disallow” function for Search and change indexing files from preview to www](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/14114).
  - Once Wyatt kicks of the production launch deployment at 5:30 PM ET, this will make the Search robots updates active.
- [ ] Rian merges [TeamSite Header/Footer Injections](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/13723): update robots.txt page and remove TeamSite Cookie feature flag, so whenever a user visits a subset of TeamSite-hosted pages, they'll see the appropriate branding.
  - Once Wyatt kicks off the production launch deployment at 5:30 PM ET, this will make the benefits.va.gov TeamSite redirects active as well - unless OPIA is able to do server-side redirects.
- [ ] James Kassemi gives final approval for [Vets.gov Redirects PR](#): add production config for Vets.gov to VA.gov redirects w/onboarding modal. (Note: If James unavailable, then Alex Loehr)
- [ ] James Kassemi gives final approval for [VA.gov Cookie PR](https://github.com/department-of-veterans-affairs/devops/pull/3569): set cookie to `true` by default, so whenever a user visits a www.VA.gov page, they'll see the new experience. (Note: If James unavailable, then Alex Loehr). This will make the www.va.gov/health TeamSite redirects active as well.

### 5:00 PM ET: launch initiated
- [ ] Rachael announces that we are initiating launch via Slack and email
- [ ] Technical and implementation teams re-enter WBC Launch Room Skype meeting (if they had left)
- [ ] Chris confirms verbally that we are good to launch
- [ ] Wyatt merges the [Vets.gov Redirects PR](#) and the [VA.gov Cookie PR](https://github.com/department-of-veterans-affairs/devops/pull/3569)

### 5:30 PM ET: deploy
- [ ] Wyatt kicks off production deployment to effectively launch the new experience.
- [ ] Keep WBC Launch Room Skype meeting open, people can mute/unmute to collaborate as needed

### 6:00 PM ET: launch complete!
- [ ] Wyatt confirms verbally that the deployment is complete
- [ ] Chris Johnston (or anyone), while screensharing, loads www.va.gov
- [ ] Wyatt confirms verbally that deployment is complete
- [ ] Chris Johnston (or anyone), while screensharing in Skype, clicks  from www.va.gov to load a teamsite-hosted page
- [ ] Rachael disseminates Launch Status Report details in Slack and email
- [ ] Keep WBC Launch Room Skype meeting open, people can mute/unmute to collaborate as needed

If any of the crisis criteria are met, immediately start following the plays in the runbook.

### 6:30 PM ET: Test, do immediate post-launch items, monitor
- [ ] Josh Vargas and Veteran Facing Tools PMs run smoke tests for top site interactions
- [ ] Ben Barone QA's Search in production
- [ ] Full team watches monitoring dashboard, google analytics, social media buzz
- [ ] Rachael disseminates Launch Status Report details in Slack and email
- [ ] Skype meeting adjourns, use incident Skype meetings if issue resolution is needed

### 7:30 PM ET: one-hour post launch check-in

Hear from all stakeholders how things are going so far, what concerns may be bubbling up, what trends they’re seeing.

- [ ] Winnie opens Go / No Go + Check Ins Skype meeting
- [ ] All Go / No Go attendees enter Go / No Go + Check Ins Skype meeting
- [ ] Standup-style poll
- [ ] Chris decides whether any runbook plays are needed
- [ ] Do we need any changes to on call points of contact and 24/7 monitoring?
- [ ] Rachael disseminates Launch Status Report details in Slack and email
- [ ] Skype meeting adjourns

### 8:00 PM ET: Enact remaining redirects and continue monitoring
- [ ] Winnie opens WBC Launch Room Skype meeting
- [ ] Technical and Implementation teams enter WBC Launch Room Skype meeting
- [ ] Wyatt posts @channel mention in vetsdotgov Slack that we are enacting Vets.gov redirects, and there will be alerts noise
- [ ] Wyatt Walter confirms verbally that deployment is complete
- [ ] Chris Johnston tests and confirms verbally that the redirects are functioning as intended
- [ ] Start 24/7 active monitoring rotation (note: during this time, for security issues our reporting chain is to our security officer.)
- [ ] Skype meeting adjourns
- [ ] Wyatt re-enables automated deployments and confirms deployment is complete in wbc-launch-ops Slack
- [ ] Rachael disseminates Launch Status Report details in Slack and email

## POST-LAUNCH: NOVEMBER 8, 2018

### 9:30 AM ET: morning check-in
Hear from all stakeholders how things are going so far, what concerns may be bubbling up, what trends they’re seeing.

- [ ] Winnie opens Go / No Go + Check Ins Skype meeting
- [ ] All Go / No Go attendees enter Go / No Go + Check Ins Skype meeting
- [ ] Standup-style poll
- [ ] Chris decides whether any runbook plays are needed
- [ ] Skype meeting adjourns
- [ ] Rachael disseminates Launch Status Report details in Slack and email

## POST-LAUNCH NOV 9, 2018

### 9:30 AM ET: morning check-in
Hear from all stakeholders how things are going so far, what concerns may be bubbling up, what trends they’re seeing.

- [ ] Winnie opens Go / No Go + Check Ins Skype meeting
- [ ] All Go / No Go attendees enter Go / No Go + Check Ins Skype meeting
- [ ] Standup-style poll
- [ ] Chris decides whether any runbook plays are needed
- [ ] Skype meeting adjourns
- [ ] Rachael disseminates Launch Status Report details in Slack and email

- [ ] Nick Sullivan merges remaining Vets.gov redirects PR for careers links [PR to be linked here]
- [ ] Wyatt merges PR to make TeamSite pages use new header/footer by default, without having to check for a cookie [PR to be linked here].

Wyatt and TeamSite will work together to resolve CSP errors if they / as they come up.

Back to standard on call coverage via pager duty, [see rotation schedule in the Runbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/Rollout/runbook.md).

## NOV 10 ONWARD

- [ ] Merge PR for 301 redirects

*Note: This document is confidential and deliberative*
