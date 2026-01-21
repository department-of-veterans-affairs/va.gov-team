# Technical feasibility findings in relation to meds app redesigns
Many/most findings uncovered by Langston Payne, engineer on Meds team

## Med becomes inactive
In oracle_health_prescription_adapter.rb, this logic determines inactive status:

Expired more than 120 days ago → discontinued (mapped to "Inactive")
No refills remaining AND past expiration date → expired (mapped to "Inactive")

We think/assume that VistA meds follow the same logic.

### Application to designs
This indicates that a renewable med still falls under the active med status

## Expected fill date
At this time, only VistA meds receive an expected fill date when they go into in-progress. OH meds will also start to receive an expected fill date soon (expected timeline is early 2027).

### Application to designs
The current experience (not in the redesign) is that medications in progress do not show an expected fill date. We think showing this information to users could improve the UX in the app. If this is validated in user testing, our expectation is that we'd roll out this functionality to VistA users first and then when expected fill date becomes available for OH meds, we'd then roll it out to OH users. During the time period when only VistA users get access to this information, OH users will continue to have the current experience (in which there is an absence of this data).

## Too soon to refill box on in-progress page


## Refill available after last refill request
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

Based on this logic, it doesn't look like 2 refills could display on the in-progress page at the same time. Until the prescription is not in-progress, it should not allow another refill. Also looks like any shipped flag doesn't have any say over isRefillable.

### Application to designs
This indicates to us that meds don't show up on the refill list anytime there is a refill remaining; a requested refill has to go through a cycle before the next refill can be requested. It is possible that the second refill can be requested once the first one has shipped though. But definitely no third refill of the same med could be requested in the same window. 
