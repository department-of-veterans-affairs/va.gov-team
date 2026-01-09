# WIP

# MR experience during data migration for transitioning OH sites
This doc explains patients' medical records experience during the data migration period when their facility transitions to OH. The migration period is when we'll block functionality for health transactions like sending a message or requesting a prescription refill. This is to prevent data loss.

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
This describes what the experience with medical records will be like for patients at the transitioning sites on VA.gov and VAHB.

### What will happen on both VA.gov and VAHB
- T-45: Veterans understand that their facility will be moving to Oracle but their data will continue to show up here. 

### UX tactics 
How will we communicate these changes to Veterans? 

1. **Alerts strategy:** 
  - Yellow warning alert: beginning T-45, let Veterans know the change is happening and link to R&S page

2. **Blocking functionality:**
N/A 

3. **Letting them know they can do stuff again and what's different**
  - Yellow alert: T+0 - TBD - message telling patients it's done. Content pointing towards R&S page describing what's different.
  - Messaging on differences in-app: BB/ CCD, what else? 

### Considerations

**What will this be like for folks with multiple facilities cutting over at the same time?**
- I believe they will receive a single alert listing the facilities cutting over, but need to confirm with DK's write-up

**What will this be like for folks with multiple facilities cutting over at different times?**
- If they have facilities overlapping in cutover time, they will receive multiple alerts communicating different dates, depending on when facilities are cutting over. This is not great but is the least bad option.
- They will receive L&T notifications for the OH facilities but not for the VistA facilities. 

### Questions to answer: 
1. Should we let then know transition is done T+0 or T+2 to align with Sm and Meds?
2. Where are we on the in-app messaging for differences related to BB and CCD?
3. How to handle L&T notifications disparities? Surface in R&S? 
4. I've never heard mention of this, but they're not duplicating the records correct? It's not a medications situation? Will the records look any different? 
