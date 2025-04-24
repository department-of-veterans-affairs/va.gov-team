# Release Plan - Community Care Direct Scheduling

**Important Dates:**
 - [ ] Staging Review -  May 2, 2025
 - [ ] Go/no go Meeting - TBD
 - [ ] Prod Release Pilot - TBD

**Important Links:**
- [Collaboration Cycle ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/80703)
- [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling)
- [Test Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/cc-direct-scheduling-test-cases.md)
- [Research Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/initiatives/community-care-direct-scheduling/research/2025-01%20Community%20Care%20Self-Scheduling%20-%20Unmoderated%20UAT/research-plan.md)

## Phase I: Pilot Release 

### Functionality Delivered
A Veteran is able to directly schedule their comunity care appointments for **optometry** by:
- Receiving a push notification text message directing them to schedule an appointment; 
- Log in to va.gov and access requests and referrals.

### Rollout Strategy
[Feature toggles](https://staging-api.va.gov/flipper/features) will be enabled:
- va_online_scheduling
- va_online_scheduling_community_care


### Rollback Strategy
Disable feature toggles.

## Phase II: TBD
