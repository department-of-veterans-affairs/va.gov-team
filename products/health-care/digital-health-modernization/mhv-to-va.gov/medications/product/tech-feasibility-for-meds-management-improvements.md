# Technical feasibility findings in relation to meds app redesigns
Many/most findings uncovered by Langston Payne, engineer on Meds team

## When does a med become inactive?
In oracle_health_prescription_adapter.rb, this logic determines inactive status:

      Expired more than 120 days ago → discontinued (mapped to "Inactive")
      No refills remaining AND past expiration date → expired (mapped to "Inactive")

We think/assume that VistA meds follow the same logic.

### Application to designs
This indicates that a renewable med still falls under the active med status

## When and which meds get an expected fill date?
At this time, only VistA meds receive an expected fill date when they go into in-progress. OH meds will also start to receive an expected fill date soon (expected timeline is early 2027).

      The expected fill date should ONLY show when a mhv/rx status is 'active: fill/refill in progress' b/c its ONLY useful to the user as a calculated theoretical expectation for that specific fill.
      In VistA, we use (1) status of 'active: fill/refill in progress' (2) fill date;
      In Oracle Health(OH), we'd need the MD FHIR 'in progress' (i think?) and the 'suspend until date' (which is a FHIR extension); Also, with OH data i think we have more real-time data  in which we (unlike VistA) don't have to wait until the next calendar data to       see 'request submitted' > 'fill in progress'

So, for a 'request submitted' we don't yet have an expected fill date until pharmacy processes the submitted request, usually the next calendar day.

above from Dr. Eric Spahn, in slack channel mhv-medications-rx

In response, from Patrick Bateman: 
- concur (in reference to "In Oracle Health(OH), we'd need the MD FHIR 'in progress' (i think?) and the 'suspend until date' (which is a FHIR extension)") — we can get MedicationDispense.status = 'in-progress' now, but will need to wait for the FHIR extensions for suspense date info. right now we can't distinguish between a MedicationDispense that in-progress and will be filled immediately vs. one that is in-progress and has been suspended until more of the med can actually be provided (suspended)
- sort of (in reference to "Also, with OH data i think we have more real-time data  in which we (unlike VistA) don't have to wait until the next calendar data to see 'request submitted' > 'fill in progress'"). as soon as the MedicationDispense record is created as a result of a refill request, we have access to it. but that all depends on how quickly the refill request is processed by pharmacy. so if the request isn't picked up for a few hours or not until the next day, we are in limbo re: MedicationDispense data. we still are tracking that the user submitted the request and have that data available; just nothing about the actual fill that is (hopefully) going to happen.

### Application to designs
The current experience (not in the redesign) is that medications in progress do not show an expected fill date. We think showing this information to users could improve the UX in the app. If this is validated in user testing, our expectation is that we'd roll out this functionality to VistA users first and then when expected fill date becomes available for OH meds, we'd then roll it out to OH users. During the time period when only VistA users get access to this information, OH users will continue to have the current experience (in which there is an absence of this data).

## What data/logic do we use to know if a refill is delayed (triggering the yellow warning alert currently in the app)?
The logic for flagging a prescription as delayed and to be displayed in the warning alert is determined by meeting either of 2 criteria.
The logic is found in vets website at src/applications/mhv-medications/util/helpers/isRefillTakingLongerThanExpected.js

      “Rule 1: The prescription status is "refill in process" AND there is a refill date AND that refill date has already passed (it's in the past)
      OR
      2. The prescription status is "submitted" AND there is a refill submit date AND that submit date was more than 7 days ago.” Via Adrien

      If a prescription hits either of those rules, it is marked as "Taking longer than expected" and added to the warning notification list.  

### Application to designs
We're making a bet that is not completely proven true at this time. We know from meeting with Dr. Eric Spahn that pharmacy does not act on filling a requested refill until we are at 10 days until the expected fill date. If we are less than 10 days until the expected fill date and the pharmacy has not yet started filling it, then there is likely to be a problem of some kind. But if we are over 10 days from the expected fill date and the pharmacy hasn't started working on the refill yet, this is not indicative of a problem and no yellow warning alert should present to the user. This (over 10 days from expected fill date) is the case in which a refill would go into the gray (paused) box on the in-progress page. If a refill in the gray box is less than 10 days from the expected fill date and the pharmacy has not started working on it yet, then there could be a problem and the user should be encouraged to call or otherwise act. 
Note: As stated above, we only have expected fill dates for VistA meds at this time.

## How soon after a refill request can another request be made
When the dispStatus is `dispStatus: Active: Refill in Process` the `isRefillable` flag is set to `false`. After the med is shipped (whenever we get an update to dispStatus that says the med was shipped) it would presumably get set back to active bringing the isRefillable flag back to true, in which case a user could then refill a med again. For VistA, we get the isRefillable directly from the MHV-API but for OH, we have to create it ourselves based on the following logic (Langston assumes we get this logic from MHV-API so that it is uniform logic between OH and VistA):

_Determines if a medication is refillable based on gate checks
      A medication is refillable only if ALL gate conditions pass
      
      Gate 1: Not a non-VA medication
      Gate 2: MedicationRequest.status == 'active'
      Gate 3: Prescription not expired
      Gate 4: Refills remaining > 0
      Gate 5: At least one dispense exists
      Gate 6: Most recent dispense is not in-progress
      Gate 7: No pending refill request (refill_status != 'submitted')_

### Application to designs
Based on this logic, it doesn't look like 2 refills could display on the in-progress page at the same time. Until the prescription is not in-progress, it should not allow another refill. Also looks like any shipped flag doesn't have any say over isRefillable. This also indicates that meds don't show up on the refill list anytime there is a refill remaining; a requested refill has to go through a cycle before the next refill can be requested. It is possible that the second refill can be requested once the first one has shipped though. But definitely no third refill of the same med could be requested in the same window. 

## What logic underpins the last filled first sort option?
The sorting is defined in the BE in modules/my_health/app/helpers/my_health/prescription_helper.rb under the method def last_fill_date_sort(resource)

Comments in the method that describe the sort below:

Sort filled records order: newest dates first, any ties are sorted in alphabetical order
Separate empty dispense date meds by va meds and non va meds
Sort both arrays alphabetically
Order: filled meds first, empty va non filled meds second, then empty non filled non va meds last.
Essentially, after this type of sort, the most recently filled meds will be at the top of list going down in order to the oldest filled meds. If a med has no dispense date that means it has not been filled. So after sorting meds that have been filled it goes to alphabetically ordered VA meds with no dispense date and then alphabetically ordered Non-VA meds with no dispense date.
