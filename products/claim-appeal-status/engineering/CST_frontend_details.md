# Claim Status Tool details

## Frontend Code

Folder: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/claims-status/

## Decisions of note

### Verify address

Some work was done on the verify address page as it was preventing Veterans from getting to the app itself. Currently, the edit address button opens a modal allowing the Veteran to modify their address directly in their profile.

### Claim detail testing

To test a claim detail page (locally):

- Log in to user 228 (Mark Webb)
- Make the following change in the `src/applications/claims-status/actions/index.jsx` file

    ```diff
    @@ -24,7 +24,7 @@ import {

    // Uncomment this import out, along with the code in `getClaimDetail`, then load
    // http://localhost:3001/track-claims/your-claims/600219085/status
    -// import mockDetails from '../tests/e2e/fixtures/mocks/claim-detail.json';
    +import mockDetails from '../tests/e2e/fixtures/mocks/claim-detail.json';

    // -------------------- v2 and v1 -------------
    export const FETCH_APPEALS_SUCCESS = 'FETCH_APPEALS_SUCCESS';
    @@ -319,13 +319,13 @@ export function getClaimDetail(id, router, poll = pollRequest) {
            /* Claim status development
                comment out the next block of code to access the claim status, file &
                details tabs for development
    -        /* * /
    +        /* */
            return dispatch({
              type: SET_CLAIM_DETAIL,
              claim: mockDetails.data,
              meta: mockDetails.meta,
            });
    -        /* */
    +        /* * /
            if (response.status !== 404 || !router) {
              dispatch({ type: SET_CLAIMS_UNAVAILABLE });
            } else {
    ```
- Then go to http://localhost:3001/track-claims/your-claims/600219085/status
- The "Files" and "Details" tab will also include content

