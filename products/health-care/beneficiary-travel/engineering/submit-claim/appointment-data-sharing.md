# Appointment Data Sharing

## The Problem:
Because the appointments list/details page lives in a different React app than the travel pay app, where SMOC lives, we need to pass the appointment details from the appointments app to the travel pay app. Because they are separate React apps, the redux store umounts and remounts when switching between apps (the appointments redux store doesn’t exist in the travel pay app, and vice versa) so we cannot store the data in redux during the transition as initially planned.

## Proposed solutions:

### Option 1:
Pass VAOS appt ID as url params (`travel-pay/new/{apptID}`) and call VAOS API module to retrieve appt details
- Pros: 
  - No refactoring of existing code, 
  - we keep our own redux store, 
  - travel pay remains a separate entity
- Cons:
  - Extra API call to retrieve data that already exists 😐
  - The data straight from the API would need to be normalized (this is currently handled in the appointments FE codebase) for use in the travel pay app

### Option 2:
Pass BTSSS appt ID as url params (`travel-pay/new/{btsss-appt-id}`) and call TP API to retrieve appt details
- Pros:
  - BTSSS appt ID is required for SMOC submissions, so it eliminates that step from the submit steps
- Cons:
  - Must still make an API call from the submit intro page to retrieve appt details
  - Potential refactoring of appt > claim association logic on the backend to match VAOS appts > BTSSS appts OR call that endpoint before navigating to the submit flow to retrieve the BTSSS appt info before navigating away from appts.
  - this may be problematic depending on how long the appts plugin needs to run to pull appts into the BTSSs system
  - BTSSS appt object doesn’t contain the same data points that the VAOS appt does so designs might need adjusted

### Option 3:
Pass appointment date-time as url params (`travel-pay/new/2024-11-22T11%3A00%3A00`) and call TP API to retrieve appt details
- Pros: 
  - Don’t make the API call until in the travel pay app itself
  - And would only call the BTSSS appts endpoint if the user chooses to submit a claim
  - BTSSS appt ID is required for SMOC submissions, so it eliminates that step from the submit steps
- Cons:
  - See Option 2 Cons 

### Option 4:
Move SMOC submission app into VAOS directory (`appointments/past/{apptId}/submit-travel-claim`) and use a React Router <Link> to pass the appt as a state object
- Pros:
  - Easier passing of data (can store in redux or pass as a `location.state` object
- Cons:
  - Travel pay is unnecessarily intertwined with appointments app which could cause problems once we start work on complex claims

### Option 5:
Add a platform level shared redux state store where the appointments app can drop the appointment into state for the travel pay app to retrieve
- Pros:
  - Easier passing of data
- Cons:
  - Requires platform level code changes (not terrible, but a consideration)
  - Per profile FE dev, this shared redux doesn’t actually store the data, each time it’s requested it still requires an API call (not confirmed by Liz as of yet, but sounds legit) so we’re still making an additional API call to get the appointment details

### Option 6:
Implement the Forms Library and store the appt data on the BE as a Saved in Progress form
- Pros:
  - Easier passing of data
  - Forms Library and SIP would already be implemented and ready to expand for complex claims
- Cons:
  - Will require a lot of set up on the BE to implement a Forms Library improvement (to allow a veteran to have multiple Forms saved)
  - Would still require an API call to retrieve the SIP form
  - There are many unknowns as to whether or not it would actually work as needed 🫤

### Option 7:
Push SMOC release back even further until the one-MHV-to-rule-them-all consolidation work is complete and both appointments and travel pay can live in one MHV directory
- Pros:
  - Shared redux store, shared routing, etc.
- Cons:
  - Delivery dates will be adversely impacted

### Option 8:
Cache the VAOS appt data in the vets-api redis instance. Upon user nav to the submit claim form, make a fast API call to pull the cached data
- Pros:
  - Yes, it’s still an API call, but fast. ⚡ 🦔
  - We have some control over how the data gets serialized/transformed before or after it’s cached
- Cons:
  - Requires us building another API endpoint for caching the appt WITH serialization
  - Requires Appts Team work to call the endpoint to cache the appt
  - Requires another API call on nav to submit

### Option 9:
Store the required appointment data in local storage and pull it back out once the user has navigated to the travel pay app
- Pros:
  - Appointment data would be available without additional API calls
- Cons:
  - Local storage is not the best practice from a security standpoint
  - The data would need to be “cleaned” of PII before storing and deleted once it’s pulled out
