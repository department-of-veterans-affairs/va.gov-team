# Care Notes & Summaries

## Types
* After-Visit Summary (AVS)
* Progress Notes
* Discharge Summaries
* Procedure Notes

### After-Visit Summary (AVS)

The AVS is a new product being developed by the Appointments team. The planned future state for AVS summaries is that they can be accessed from two domains under MyHealth: 
* My Health > Medical records > Care notes (this will be the home location)
* Past appointments > Details (this location will be a cross-link)

In user testing, participants were split in whether they expected to find these types of summaries under Medical Records or Appointments, so they will be accessible in both but the URL and parent-structure will give them a home location under Medical Records.

#### Phase 0-1 Complications: 
* The AVS will launch within appointment details pages before Medical Records launches to Phase 0 (let alone Phase 1)
  * The AVS URL will be: va.gov/my-health/medical-records/care-notes/avs/{ID#}, but the directories ```/medical-records``` and ```/medical-records/care-notes``` will both be empty and will require redirects up to /my-health until that domain enters Phase 1.
  * The current notification dot design will not provide enough contextual information to lead users to an AVS from within a past appointments detail page. The current layout of the MHV on VA.gov landing page is unlikely to support the AVS in its intermediate launch stage well (would make more sense under 'Medical Records' but lives under 'Appointments'). Clearly providing enough context about an AVS will require a more robust notification type &  the onsite notification component should be explored.
  * Because we cannot initially lead users to a full list of new/unread Care Notes and Summaries (at least until Medical Records is in Phase 1), the onsite notification must link users **directly** to the AVS itself (not a list of past appointments - this will not be possible initially). The Appointments team says this should definitely be technically feasible.

#### Outstanding questions being worked out by Appointments team: 
* Where do we route users after they view their AVS?
  * Breadcrumbs
  * Cross-links on page 
