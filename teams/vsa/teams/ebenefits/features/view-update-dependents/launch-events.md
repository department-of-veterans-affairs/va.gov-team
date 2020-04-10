_Quick reference to other features' launch events:_ [686](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/launch-events.md), [POA](https://#), [Payment History](https://#), [CH36](https://#), [LGY](https://#)  
# Launch Events
`eBenefits | April 2020`
## Considerations
Set a date and walk back the various steps.  This achieves a few things:
1. Allows for more accurate estimation of the actual launch date, from various segments (sprint vs days)
2. Sets the steps clearly and informs the team if there are any gaps that need to be addressed for either the current feature or the next
3. A tangible reference for the team to synchronize on where we are and where we are headed
4. Should assist in ticket creation  
## Unknowns
- BGS interactions?

## Assumptions  
**Launch to prod:** Wedensday, May 6, 2020  _(Sprint 21 Planning)_  
**Number of work days:** 27 from today   
**Number of sprints:** 2   
Most of View Dependents is finished, but with this timeline, the remaining steps (Including Collab Cycle) will need to be merged together.

🌀 = Collaboration Cycle

## Events  
### Sprint 19 (T-28)  
_April 8 - April 21_  
- DE: Refine form content (labels, titles, buttons, etc)
- BE/FE: connections made
- FE: get a `200` response from BE
- FE: complete JSON transport tasks
- FE: e2e tests
- FE: pre-QA "smoke test"
- BE: refactor submission process
- BE: submission tested
 - 🌀 [Request 508 Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit)
 - 🌀 [Request QA Review & GA Event names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#analytics-request)
- PD: contact center docs
- DE: landing pages sent to Public Websites

### Sprint 20 (T-14)  
_April 22 - May 5_
- 🌀 [Contact Center Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#contact-center-review)  
- FE: Set up and test Flipper component on Drupal landing page
- BE: e2e tests, error handling
- BE/FE: v1 code complete
- 🌀 [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review)
- BE/FE: e2e and load testing with partner systems
- FE: Confirm Sentry access, enter utility code
- 🌀 [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review)
- PD: Stakeholder review/ demo

### Launch Sprint 21 (T)
_May 6 - May 19_
- UAT/ UAT outcome PRs, email whitelist 
- Launch to n% of users
- Launch to 100% of users
- Create eBenefits user redirect messaging  
- Coordinate page redirects

### Sprint 22 (T+14)
_May 20 - June 2_
- Implement eBenefits user redirect messaging 
- Deprecate feature
- 🌀 [Post Launch Check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in) (T+28)


