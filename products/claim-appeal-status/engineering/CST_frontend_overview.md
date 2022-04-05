# Claim Status Tool Overview

## Entry points:

- local: http://localhost:3001/track-claims/your-claims
- staging: http://staging.va.gov/track-claims/your-claims
- production: https://www.va.gov/track-claims/your-claims

## Mock users

Locally, you may have to user mock user 228 (Mark Webb), but sometimes he doesn't work, so you may need to modify the API call - see the [details page](./CST_frontend_details.md) for more information.

In staging, it's better to use one of the [appeals users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.docx) (233 in particular).

## Mock data

Because this app doesn't use the form system, it does not include the save-in-progress menu nor the ability to easily copy/paste in test data. It might be easier to run the Cypress end-to-end tests for this app to get to the different page views. Although, not all cases are tested.

## Test data

- The main list page data is in [claims-list.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/claims-status/tests/e2e/fixtures/mocks/claims-list.json)
- [claim-detail.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/claims-status/tests/e2e/fixtures/mocks/claim-detail.json) contains data for a claim detail page
- [legacy-appeal.json](https://github.com/department-of-veterans-affairs/vets-website/blob/72c5956a48209537f1ef6d3bb88673ada0e206a4/src/applications/claims-status/tests/e2e/fixtures/mocks/legacy-appeal.json) contains data for a legacy appeal.

**We need to find & add data for a non-legacy appeals**

## Endpoints

- The backend is served from EVSS, but we don't have access to api documentation
- There is a plan to migrate EVSS code to [Lighthouse](https://dev-developer.va.gov/explore). But currently, as of April 2022, discovery work is still in progress.

- `/v0/appeals` "GET" - gets _all_ the appeals for the list
- `/v0/evss_claims_async` "GET" - gets _all_ the claims list data
- `/v0/evss_claims_async/{claimId}` "GET" - gets details for a specific claim
- `/v0/evss_claims/${claimId}/request_decision` "POST" -
- `/v0/evss_claims/${claimId}/documents` "POST" - upload file
- `/v0/education_benefits_claims/stem_claim_status` "GET" - Owned by the team handling the GI Bill app


## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
