# Claims Status Error Handling

## Overview of Possible Errors
`v0/evss_claims_async` (claims list)
  - poll / network errors (non-2xx)
  - `200`s returning a `FAILED` `meta.syncStatus`
  - Call OK and sync status OK but no claims returned

`v0/evss_claims_async/${id}` (claim details)
  - poll / network errors (non-2xx)
    - `404`s
    - Non-`404`s
  - `200`s returning a `FAILED` `meta.syncStatus`  

## Error Type Details

### evss_claims_async (claims list)
#### Poll / Network Errors
This happens when the poll request fails from a non-2xx response or network error
  - In JavaScript terms, `!response.ok`
All poll request and sync status errors are handled the same: the `claimsAvailability` redux state is set to `UNAVAILABLE`, which corresponds to a single front end message
![Claims Unavailable Error Screen](./Screenshots/Claims%20List%20-%20Claims%20Unavailable%20Error.png?raw=true)
#### Sync Errors
- If the Claims fetch request succeeds, it will return a `meta.syncStatus` of either `SUCCESS` or `FAILED`
    - If the `syncStatus` is `FAILED`, this means that vets-api wasn't able to successfully sync with EVSS, or EVSS wasn't able to successfully sync with upstream services (BGS)
    - This [displays the same message](./Screenshots/Claims%20List%20-%20Claims%20Unavailable%20Error.png) as the poll / network error shown above
#### Empty Claims List
This would happen when the poll succeeds and returns a sync status of `SUCCESS`, but the user has no claims to display.   
![Claims Empty Alert](./Screenshots/Claims%20List%20-%20No%20Claims.png?raw=true)    

### evss_claims_async/${id} (claim details)
#### Poll / Network Errors
- The request fails from a non-2xx response or network error
  - In JavaScript terms, `!response.ok`
  - 404: Redirects to `/track-claims/your-claims` (claims list / dashboard)
  - !404: dispatches `SET_CLAIMS_UNAVAILABLE` action type
    - Currently, this doesn't trigger anything in the UI (persistent loading spinner)
#### Sync Errors
- If the claim details fetch request succeeds, it will return a `meta.syncStatus` of either `SUCCESS` or `FAILED`
    - If the `syncStatus` is `FAILED`, this means that vets-api wasn't able to successfully sync with EVSS, or EVSS wasn't able to successfully sync with upstream services (BGS)
    - This is handled the same as the poll / network errors for claim details above
