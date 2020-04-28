_Quick reference to other features' launch events:_ [686](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/launch-events.md), [POA](https://#), [Payment History](https://#), [PCPG](https://#), [LGY](https://#)  
# Launch Events
For **View dependents** and **Add or remove dependents** using the VA Form 21-686c/674    
`eBenefits | April 2020`  
## Considerations  
Set a date and walk back the various steps.  This achieves a few things:  
1. Allows for more accurate estimation of the actual launch date, from various segments (sprint/ days)
2. Sets the steps clearly and informs the team if there are any gaps that need to be addressed for either the current feature or the next
3. A tangible reference for the team to synchronize on where we are and where we are headed
4. Should assist in ticket creation  

## Unknowns
- BGS interactions
- Outcome of QA review
- Outcome of 508 review
- Stakeholder feedback

## Assumptions  
**Launch to prod:** 
**Number of work days:**  T from today   
**Number of sprints:**    

Most of View Dependents is finished, but with this timeline, the remaining steps (Including Collab Cycle) will need to be merged together.

🌀 = Collaboration Cycle  
⏳ = May be more time intensive than anticipated  

## Events  
### Sprint 19 (T-28)  
_April 8 - April 21_  
- DE: Refine form content (labels, titles, buttons, etc) ([#6965](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6965))
- ⏳ FE: e2e tests ([#6049](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6049)✔, [#7224](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7224))  
- FE: refactor workflows ([#7736](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7736))
- BE/FE: connections made ([#7771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7771)✔, [#7724](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7724)✔)
- FE: get a `200` response from BE ✔
- FE: complete JSON transport tasks ([#6043](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6043))
- BE: refactor submission process ([#7726](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7726))
 - 🌀 [Request 508 Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit) ✔
 - 🌀 [Request QA Review & GA Event names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#analytics-request) ✔
- PD: contact center docs ([#8218](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8218)✔)
- DE: landing pages sent to Public Websites ([#8012](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8012)✔)

### Sprint 20 (T-14)  
_April 22 - May 5_
- FE & BE: address issues from QA review  
- FE: set up and test Flipper component on Drupal landing page
- ⏳ BE: unit tests, error handling ([#6967](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6967), [#6968](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6968))
- ⏳ BE: error handling ([#6968](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6968))
- BE: submit PR to merge BGS endpoints into `vets-api`
- DE: Fit/finish review/implementation
- BE: submission tested ([#3765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3765))
- DE: Research Plan and Conversation Guide for usability Sessions 

### Sprint 21
_May 6 - May 19_
- BE: implement Sidekiq job
- ⏳ BE: PDF Fill (1 Sprint) ([#6469](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6469))
- ⏳ FE: e2e tests ([#7224](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7224), [#7486](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7486), [#7487](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7487), [#7488](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7488), [#7489](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7489))
- FE: pre-QA "smoke test" ([#7201](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7201))
- DE: 686 usability Sessions 
- 🌀 [Contact Center Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#contact-center-review)  
- 🌀 [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review)
- BE/FE: e2e and load testing with partner systems
- FE: Confirm Sentry access, enter utility code
- 🌀 [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review)  
_(Needs architecture diagram, descriptions of any new publicly-exposed endpoints + data flows, interactions with dependent services, other hotspots we are concerned about, if any)_  

### Sprint 22 
_May 20 - June 2_
- ⏳ BE: PDF Send to VBMS (1 Sprint)
- BE/FE: v1 code complete
- PD: Stakeholder review/ demo
- PD: Coordinate with VA comms
- FE: Adjust the robots.txt file to include the direct link to the 686 for no_follow

## Sprint 23
_June 3 - June 16_
- UAT/ UAT outcome PRs, email whitelist 
- Launch to n% of users🚀
- Launch to 100% of users
- Remove url from robots.txt file to allow for search to crawl the new form
- Create eBenefits user redirect messaging  
- Coordinate page redirects
- Code hardening/bug fixes

## Sprint 24
_June 17 - June 30_- Implement eBenefits user redirect messaging 
- Deprecate feature
- Optimization/ongoing bug fixes
- 🌀 [Post Launch Check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in) (T+28)

## Other Tools and Resources
- [Table of contents for 686 mockups](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design)
