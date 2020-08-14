# Launch Events - VRE CH31
`eBenefits | August-September 2020`

## Considerations
Set a date and walk back the various steps.  This achieves a few things:
1. Allows for more accurate estimation of the actual launch date, from various segments (sprint vs days)
2. Sets the steps clearly and informs the team if there are any gaps that need to be addressed for either the current feature or the next
3. A tangible reference for the team to synchronize on where we are and where we are headed
4. Should assist in ticket creation

## Assumptions
**Launch day:** September 29, 2020  
**Number of days:** 47   
**Number of sprints:** 3    
✔ - in progress/done  
🌀 - Collaboration Cycle   

## Events
### Sprint 28
`August 12 - 25`
- Unit tests ✔
- URL disentanglement ✔ then,
  - [Internal 508/QA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12040) (Jason)
  - [External 508/QA Request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12043) (Jason)
  - Add GA event names, if applicable (wizard event names could be pushed to post launch?)
- Verify Central Mail submission process
  - Build PDF from dummy data [#12463](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12463) ✔
- Start Flipper component for [landing page](https://www.va.gov/careers-employment/vocational-rehabilitation/how-to-apply/) [#12473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12473)
- Develop UAT/Release Plan
- Create Controller + Model to connect FE + BE [#12473](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12473)
### Sprint 29
`August 26 - September 8`
- Finish Flipper Component
- Create Sidekiq job  
- Take url from BE to finish FE + BE connection [#12471](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12471)
- E2E tests
- Develop Research Plan/Conversation Guide for usability session
- Conduct Usability Sessions
- [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review) 🌀
- [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review) 🌀
- PD: Stakeholder review/ demo
- PD: Coordinate with VA comms
### Sprint 30
`September 9 - 22`
- UAT/ UAT outcome PRs
- Launch to n% of users 🚀
- Launch to 100% of users
- Create eBenefits user redirect messaging
- Coordinate page redirects
- Code hardening/bug fixes
--------------------------------------------------------
### Sprint 31
`September 23 - October 6`
- Deprecate feature
- Optimization/ongoing bug fixes
- [Post Launch Check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in) 🌀
  
