## Current Status
### 03/07/2024
We are currently waiting on Lighthouse Benefits Claims to be updated the 5103 endpoint logic to support NVCs (Non-Veteran Claimants). The team behind the API has estimated the amount of work that will be required, but are currently wating on the Benefits Documents API (another Lighthouse API managed by another Lighthouse team) to be updated as well. They also are working on POA (Power of Attorney) endpoint so their plan is to pick up this work as soon as the following have happened:
1) Benefits Documents API has been update to accept participant ID as an optional Identifier
2) They have completed enough of their POA work and have capacity to pick up work on the 5103 updates

#### Next Steps
There is no further work required by us (Benefits Management Tools) at this time, other than removing the `vets-api` logic we created to derive the `sponsorIcn` to be passed to Lighthouse via a query string parameter. Lighthouse should be able to look up the participant ID of the claimant as part of their update so we shouldn't need to pass any special parameters to them anymore

## Previous Statuses
