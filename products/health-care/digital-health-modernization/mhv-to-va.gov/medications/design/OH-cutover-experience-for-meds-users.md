# WIP

# Meds experience during data migration for transitioning OH sites
This doc explains patients' medications experience during the data migration period when their facility transitions to OH. The migration period is when we'll block users from requesting medication refills or renewals at transitioning facilities. This is to prevent data loss and silent failures.

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
- T-5: Patients will not be able to renew prescriptions. No tactics involved - leave experience as is. 
- T-3: Patients will not be able to request prescription refills. Refill functionality will be suppressed and some UX treatment will be surfaced for users.
- T+2: Functionality is restored. Patients are made aware they can do things again, and differences in the experience are flagged (Rx numbers changed; medication cards are duplicated with transferred and new; maybe different statuses)

### UX tactics 
How will we communicate these changes to Veterans? 

1. **Alerts strategy:** 
  - Yellow warning alert: beginning T-45, communicate upcoming dates when patients cannot refill or renew medications.
  - Red alert: beginning T-3, communicate can't request  med refills.
  - Put alerts on /medicaitions?page=1 and /medications/refill

2. **Blocking functionality:**
  - T-5: When available, disable renewal links. Add content in medication card telling patients they can't renew. 
  - T-3: disable refill functionality. Include some messaging/ UX to make it clear why they can't refill meds online and what to do. 
      If multiple facilities: Meds at facility that transitioning do NOT surface in widget. Meds at facility that's NOT transitioning (in case of multiple facilities) do surface.

3. **Letting them know they can do stuff again and what's different**
  - Yellow alert: T+2 - TBD - message telling patients they can refill and renew. Content pointing towards R&S page describing what's different.

### Considerations

**What will this be like for folks with multiple facilities cutting over at the same time?**
- Will receive a single alert listing the facilities cutting over.

**What will this be like for folks with multiple facilities cutting over at different times?**
- If they have facilities overlapping in cutover time, they will receive multiple alerts communicating different dates, depending on when facilities are cutting over. This is not great but is the least bad option.

### Questions to answer: 
1. Renewals rely on SM, which goes dark on T-6. Should we cut off renewal link functionality at T-6 rather than T-5?

   Decision: change content in meds card at T-6. 
   
2. How best to handle the fact that renewals and refills go dark at diff times?

   Decision: Keep landing page and refill page alert content focused on refills functionality, and then include the messaging of "you can't request a renewal" in the Meds cards where renewals are eligible.
   
3. Should we hold on launching the revised experience for Meds? Given that it will affect where things will be surfaced.

     Decision: Hold until end of April.
   
4. What is the best CTA for patients during the down time? Call number on prescription label?

     Decision: Yes
   
5. How long should we keep the Yellow "you can do stuff" alert up for?

     Decision: not doing an alert. Need some other treatment to help people become aware of differences with new experience. 
   
6. For users with multiple facilities with one cutting over and another not: can we only disable refill functionality for meds at cutover facilities? If no, can we surface an error message ONLY for the meds submitted to cutover facilities? What is technically feasible?

      Decision: Try to simply disable refill functionality. Meds at facility that transitioning do NOT surface in widget. Meds at facility that's NOT transitioning (in case of multiple facilities) do surface.
    
      If can't do that -> surface all meds and then throw up error message at point of submitting refill request w/ CTA.

7. What will be the experience when mhv_medications_cerner_pilot flipper gets turned on? Will medications being shifted over to OH begin appearing at that point? If so, how to handle? 
