# Technical Discovery: EVSS > Lighthouse - Updating the claim status widget on My VA

## Background
The Benefits team has migrated the claims status endpoint to use Lighthouse instead of EVSS.

This document captures the work that needs to be done to get My VA using the new endpoint.

## Backend
The benefits team has created a new endpoint in vets-api accessible at `v0/benefits_claims`. This endpoint is ready to be used.

### Resources
- The backend code is [here](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/benefits_claims_controller.rb)
- Currently, the Swagger docs for this endpoint in vets-api does not exist
- We were told that this endpoint responds the same way as the upstream Lighthouse API [`/veterans/{veteranId}/claims`](https://developer.va.gov/explore/benefits/docs/claims?version=current)
- This Slack [thread](https://dsva.slack.com/archives/C04KHCT3ZMY/p1685473250891719) has more information from the benefits team #benefits-ce-mgmt_tools

## Frontend

Currently, the FE is using [`/v0/evss_claims_async`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#) to fetch a veteran's claims. 

The FE will need to switch to use the `v0/benefits_claims` endpoint.

### Tasks

- [ ] Create a feature flag for this work
- [ ] Create a new action that uses `v0/benefits_claims`. See: [current action](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/actions/claims.jsx#L147)
- [ ] Update the [`ClaimsAndAppealsV2.jsx`](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/claims-and-appeals-v2/ClaimsAndAppealsV2.jsx) component to use the new action
- [ ] Update the `isClaimsAvailableSelector` to include the new the lighthouse service
- [ ] Confirm the proper [service name](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/user/profile/constants/backendServices.js#L8-L9) to use
- [ ] Update tests
