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
- T-0: There may be a lag in records appearing.
- T+2: We expect all records to be in UI. There will be duplicate records (until data deduplication efforts are finalized).

### UX tactics 
How will we communicate these changes to Veterans? 

1. **Alerts strategy:** 
  - Yellow warning alert: beginning T-45, let Veterans know the change is happening and link to R&S page
  - Red warning alert: beginning T-0, let Veterans know there might be a lag in records appearing until T+2.

2. **Blocking functionality:**
N/A 

3. **Letting them know they can do stuff again and what's different**
  - Alert pulled down.
  - Messaging on differences in-app:
        a. Content describing differences in records in BB vs CCD
        b. UX treatment flagging that there will be duplicate records, point towards R&S for more information

### Considerations

**What will this be like for folks with multiple facilities cutting over at the same time?**
- I believe they will receive a single alert listing the facilities cutting over, but need to confirm with DK's write-up

**What will this be like for folks with multiple facilities cutting over at different times?**
- If they have facilities overlapping in cutover time, they will receive multiple alerts communicating different dates, depending on when facilities are cutting over. This is not great but is the least bad option.
- They will receive L&T notifications for the OH facilities but not for the VistA facilities. 

### Questions to answer: 
1. Should we let then know transition is done T+0 or T+2 to align with Sm and Meds?

   Decision: T+2 due to potential lag in records appearing. 
   
2. How do we need to rework messaging about BB and CCD discrepancies for MI/ future cutover sites? 

   Decision: Message = your current records are in BB, but moving forward from this date they'll be in CCD (confirm)? Any tweaks? 
   
3. How to handle L&T notifications disparities?

   Decision: Include in R&S only.
      
4. Confirming whether or not records are being duplicated for April/ beyond. Then determine UX treatment.

   Decision: There will be duplicate records for MI patients. Unknown for future sites but need to figure out where to flag in content.
   
6. Where will *historic* VistA data used to compile Blue Button reports come from?  Or will we just stop providing BB reports for converted facilities?

7. Will CCDs derived from OH contain any/less/different VistA data than what was previously included in the VHIE CCD for the converted facility? 

8. How long will duplicate records appear?
- Possible June rollout will have duplicates. Remaining until we complete work to de duplicate.
- BB won't have duplicate
- CCD should have only OH EHR records
