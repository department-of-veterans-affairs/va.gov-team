# SSO Client-side Overview

This document summarizes a number of key aspects pertaining to SSO from the perspective of `vets-website` code

## Challenges in maintaining session synchronicity from the client side

The current session establishment model for SSO is bifurcated:

1. `vets-api` establishes the VA.gov session, which is kept alive via consistent interactions with `vets-website`.
   * Authenticated requests made from `vets-website` extend the session expiration by 30 minutes. This is maintained via parsed response headers on the client side (see the `fetchAndUpdateSession` method in the [platform api utility functions](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/utilities/api/index.js#L7) to see this in greater detail.
2. As part of this login flow, an SSOe session is established in a chain of SAML requests through `vets-api` before getting sent back to VA.gov.

The main problem introduced by this model is the burden of keeping those sessions synchronized by VA.gov. Furthermore, there isn't a great way to do this server side, so the responsibility of keeping the VA.gov session in sync with the SSOe session falls on `vets-website` code. 

The current mechanism for maintaining the SSOe session is via a `/keepalive` endpoint provided by SSOe.



## Keep-alive Endpoint

The keep-alive end point itself returns an empty response body, while all the logic for session continuity is derived from headers on the Response object:

* `session-alive` - this should be the ulimate source of truth for whether a current SSOe session exists (just a "true" or "false" value)
* `session-timeout` - the amount of time left in a session. Sending an authenticated request to `/keepalive` automatically renews the session, so this value should be `900` (in seconds, so 15 minutes) for active sessions (i.e., resetting the session expiration) or `0 ` for inactive sessions.
* `va_eauth_transactionid` - For shared computers, such as a public computer at a VA facility, it's possible for a user to log out of an SSOe site without logging out of VA.gov, since SSOe does not do any tracking of VA.gov sessions. Because of this, VA.gov uses `va_eauth_transactionid` to make sure that any existing VA.gov session matches the corresponding SSOe session. If it doesn't, then the user is quickly logged out and logged in again to match the proper SSOe session.
* `va_eauth_csid`  - This is mapped to track which credentials (between ID.me, DS Logon, and MHV) are being used for triggering auto-logins.



### Issues encountered in development

In iterating on code with dependencies on the response from `/keepalive`, we initially made the assumption that `session-timeout` would be reflective of the user's session status (i.e., `900` when active and logged in, `0` otherwise). However, it was discovered that there would sometimes be false positives, where an inactive session would show a non-zero timeout value. This led us to make `session-alive` the source of truth (i.e., omitting `session-timeout` values from any `vets-website` logic *unless* `session-alive` is true).

### Caveats with local development

Due to CORS issues, the keep-alive endpoint can't currently be reached when developing locally. This is currently circumvented with a mocked keep-alive call that returns null values (avoiding any code failures, while also not triggering automatic logins or logouts). For minor debugging locally, `mockKeepAliveSSO.js`  still accepts `keepalive-ttl`and `keepalive-authn` query parameters on any URL to test different values, in lieu of `session-timeout` and `va_eauth_csid`.



## Redux vs non-Redux utility code

All React applications on VA.gov are initialized with a [common Redux store](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/startup/store.js) that contains site-wide logic, as well as any app-specific reducers they might add. Since SSO is sitewide, some of its values live on the user object, which is part of the common store.

The exceptions to Redux come in utilities that are called outside of the direct scope of React components, and therefore should not be dependent on the Redux store for logic. The main example of this is `hasSessionSSO`, which functions similarily to `hasSession` and is a way to assume a session is active before further requests validate that assumption.



## Testing

The general model for development of SSO functionality has been adding unit tests for all common scenarios and testable edge cases encountered. This has mostly been for  `sso/index.js`, `AutoSSO.jsx`, and `user/authentication/utilities.js`. `vets-website` has recently started using Cypress for E2E testing, but there haven't been any tests written with that at this point in time.



### Smoke Testing

In lieu of Cypress, there's a suite of smoke tests in a [seperate repo](https://github.com/department-of-veterans-affairs/va.gov-sso-smoke-tests) built using Playwright, a browser automation library very similar in API and functionality to Puppeteer. It currently tests a number of common SSO scenarios between VA.gov and MHV, one of the sites capable of authenticating with SSOe. More info can be found in that repository.



## Improvements

In general, the split in logic between the client and server code for session maintenance oftentimes feels brittle and tenuous. Seeking long term solutions less dependent on `/keepalive` and its inherent split from calls in `vets-api` would make for an easier developer experience in keeping track of the 2 sessions.



### Refactors

https://va.gov/sign-in has a lot of overlap with the sitewide sign-in modal. While this is not a complete duplication, this could be a candidate for some consolidation down the road, although that currently feels a little premature.
