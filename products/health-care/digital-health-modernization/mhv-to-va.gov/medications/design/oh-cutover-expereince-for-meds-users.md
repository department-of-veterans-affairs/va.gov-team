# WIP

# Meds experience during data migration for transitioning OH sites
This doc explains patients' medications experience during the data migration period when their facility transitions to OH. The migration period is when we'll block users from sending or replying to messages at transitioning facilities. This is to prevent data loss.

In this doc: 
- [Upcoming sites](#upcoming-sites)
- [UX during transition](#ux-during-transition)

## Upcoming sites
Upcoming transitioning sites in Michigran for April 2026: 
- VA Battle Creek Medical Center	 
- VA Detroit Healthcare System	
- VA Ann Arbor Healthcare System	
- VA Saginaw Healthcare System

You can [review the full EHR deployment schedule on this VA page](https://digital.va.gov/ehr-modernization/ehr-deployment-schedule/). 

## UX during transition
This describes what the experience with medications will be like for patients at the transitioning sites on VA.gov and VAHB.

### What will happen on both VA.gov and VAHB
- T-45: Patients will see an alert letting them know that for a period of time during the cutover, they will not be able to refill or renew their medications
- T-5: Patients will not be able to renew prescriptions. The renewal link will be suppressed and some UX treatment will surfaced for users. 
- T-3: Patients will not be able to request prescription refills. Refill functionality will be suppressed and some UX treatment will be surfaced for users.
- T+2: Functionality is restored. Patients are made aware they can do things again, and differences in the experience are flagged (Rx numbers changed; medication cards are duplicated with transferred and new; maybe different statuses)

### UX tactics 
How will we communicate these changes to Veterans? 

1. Alerts strategy: 
  - Yellow warning alert: beginning T-45, communicate upcoming dates when patients cannot refill or renew medications.
  - Red alert: beginning T-3 (confirm with Kay), communicate can't request  med refills.
  - Put alerts on /medicaitions?page=1 and /medications/refill

2. Blocking functionality:
  - T-5: disable renewal links. Add content in medication card (maybe?) telling patients they can't renew.
  - T-3: disable refill functionality. Include error message if try to submit order? Need to discuss what's feasible.

3. Letting them know they can do stuff again and what's different
  - Yellow alert: T+2 - T+30 - message telling patients they can do thing. Content pointing towards R&S page describing what's different. 
