# Identity Frontend Testing Audit and Improvement Plan

This document aims to outline our current level of confidence in Identity owned unit tests within `vets-website`. It will discuss the current implementations and what they do and do not cover. Additionally, it will put forth a new strategy that will move us in a direction of complete code coverage. 

While reading this document, I will use the following terms to describe the different levels of "test":
- **Unit Test**: Not to be confused by the global use of the phrase "unit test" which refers to basically all tests within `vets-website`, the term "unit" will refer to what we consider the smallest level of test. Testing that a single function or component receives inputs and responds with the proper outputs is a good example of a "unit" test.
- **Integration Test**: An integration test is more along the lines of what we currently have. It's a test that confirms a collection of logic works appropriately given the assertions. 
- **E2E(end-to-end) Test**: In our case, this refers to a cypress test that opens a browser and follows a list of instructions to ensure both happy and sad paths work from end-to-end. 

## Current Tests
### Current Overall Confidence Level - ~20%
This number essentially represents code coverage.
### Identity Owned Files/Directories

`src/applications/login/*`
- NOT TESTED
- This directory contains the application entry components for the `/sign-in` and `/sign-in/verify` pages.

`src/platform/user/*` 
- PARTIALLY TESTED
- This directory contains most of the user-facing components as well as the logic around their interactions.

`src/applications/auth/*`
- NOT TESTED
- Contains component and logic for login callback route `/auth/login/callback`

`src/platform/site-wide/user-nav/tests/containers/AutoSSO.unit.spec.jsx`
`src/platform/utilities/sso/index.js`
`src/platform/utilities/sso/keepAliveSSO.js`
- PARTIALLY TESTED
- Contains the component that determines if we should `checkAutoSession`, and all subsequent logic calls around SSO


## Improvement Plan Outline
Our first goal during this testing improvement initiative is to increase our code coverage. Our second goal is to increase our confidence that code being put out by the Identity team is not introducing new bugs into `vets-website`. In order to achieve this, we have laid out a 3 phased approach we think will guide us to our goals naturally by adding tests for the smallest units of code and working our way up to E2E coverage. Follow along below for an outline of what our 3 phases entail.

### Phase 1: Unit Tests
`src/applications/login/containers/SignInApp.jsx`
- Verify LoginContainer renders, and declared props are expected
- Verify ?app param works as expected, and sets externalApplication prop on LoginContainer
- Verify ?auth=logged_out works as expected, and sets loggedOut prop on LoginContainer
- Verify componentDidUpdate logic to ensure verify route is pushed when expected

`src/applications/login/components/VerifyPage.jsx`
- Validate rendered copy
- Validate click function goes to correct location

`src/platform/user/authentication/components/SignInModal.jsx`
- Verify LoginContainer is Rendered in some capacity

`src/platform/user/authentication/components/LoginContainer.jsx`
- Verify VA logo renders as expected
- Verify LoginHeader renders, and declared props are expected
- Verify LoginActions renders, and declared props are expected
- Verify LoginInfo Renders, amd declared props are expected

`src/platform/user/authentication/components/LoginHeader.jsx`
- Verify Sign In copy is visible
- Verify LogoutAlert rendered when necessary
- Verify DowntimeBanners rendered

`src/platform/user/authentication/components/LogoutAlert.jsx`
- Verify You have successfully signed out is visible
- Verify link URLs were correctly generated

`src/platform/user/authentication/components/DowntimeBanner.js`
- Mock downtime state, and verify appropriate banners are rendered

`src/platform/user/authentication/components/LoginActions.jsx`
- Verify LoginButton(s) render, and props declared are expected
- Verify CreateAccountLink(s) render,  and props declared are expected

`src/platform/user/authentication/components/LoginButton.jsx`
- Verify correct rendering for all CSPs
- Verify Click Action

`src/platform/user/authentication/components/CreateAccountLink.jsx`
- Verify correct rendering for all CSPs
- Verify generated links

`src/platform/user/authentication/components/LoginInfo.jsx`
- Validate copy is visible
- Validate FedWarning is rendered
- Validate link clicks to to expected location

`src/platform/user/authentication/components/ServiceProvidersList.jsx`
- Verify possible formatting outcomes

`src/platform/user/authentication/components/ServiceProvidersText.jsx`
- Verify possible formatting outcomes

`src/platform/user/authentication/components/SessionTimeoutModal.jsx`
- Verify modal opens after session expiration


`src/platform/user/authentication/utilities.js`
- Verify each individual function provided in here works as expected

`src/applications/auth/containers/AuthApp.jsx`
- Verify that it renders the loading screen correctly
- Verify that it renders RenderErrorUI  correctly
- Verify all sub-functions individually

`src/applications/auth/components/RenderErrorContainer.jsx`
- Validate error codes map properly to the rendered content
- Validate link clicks lead to correct locations

`src/applications/auth/components/HelpdeskContact.jsx`
- Validate conditional rendering

`src/platform/site-wide/user-nav/containers/AutoSSO.jsx`
- Validate that it calls checkAutoSession under correct assumptions
- Validate that checkAutoSession is not called when those assumptions are false
- Validate that checkKeepAlive is called after checkAutoSession resolves

`src/platform/utilities/sso/index.js`
login, signup, mfa, verify, logout, and all helper methods need to be tested individually

`src/platform/utilities/sso/keepAliveSSO.js`
- Validate that the responses given by an array of requests are as expected
- Validate sanitize function works as expected

`src/platform/utilities/sso/loginAttempted.js`
- Validate each function manipulates storage as expected
### Phase 2: Integration Tests

#### Internal Auth Tests
Render `SignInApp` and `SignInModal`, and perform the following integration tests
- Simulating a sign-up click directs the user to the correct destinations
- Simulating login CSP click directs the user to the correct destinations

#### External Auth Tests
Render `SignInApp` and `SignInModal`, and perform the following integration tests
- Simulate sign up and ensure the return URL is defined as the proper external application
- Simulate login and ensure the return URL is defined as the proper external application
- Simulate login with an invalid and missing `?app=` param, ensure the login is treated as internal

#### SSO Tests
- Ensure the SSO functions work as expected given a variety of `keepAlive` responses. This includes internal and external login attempts as well as auto logouts when sessions have been invalidated

#### Visual Tests
Render `SignInApp` and `SignInModal`, and perform the following integration tests
- Validate login CSP buttons appear
- Validate sign up CSP links appear
- Validate information and terms copy is visible
- Validate logged out banner appears appropriately
- Validate downtime banners appear appropriately

### Phase 3:  E2E Tests

**Local E2E**

Pros:

- Adds a considerable amount of confidence that changes being added to identity code will be validated against Cypress paths
- Covers more ground than unit and integration tests
- Will actually block PRs that introduce bugs caught in the test paths
- Great at catching edge cases that devs can overlook

Caveats:

- Near impossible to catch everything. Our recent sign-in page bug would not have been caught here as there were external dependencies at play
- Mocking API responses generally comes with risks, as we need to be diligent about ensuring the mocked responses match actual responses
- Mocking API responses adds a decent amount of overhead in having to know when those responses change shape and getting them updated as it's a manual process
- Very easy to write tests locally with mocked responses that have a bias to passing

 

**Staging E2E**

Pros: 
- Having it run against staging would provide actual responses and validate how the frontend reacts to those responses
- Can set it up to where automatic deploy to production is blocked unless this test suite is in a passing state. See caveats as there is a lot around this

Caveats:
- Due to the nature of how vets-website/api deal with many 3rd party services, these could often fail due to no fault of our own
- Would need to determine how to handle the above issues, do we only use cypress for FE testing, or do we allow it to interact with the staging API and have the potential of failing due to vets-api/third party services being down
- Do we allow this to block automatic deployments to production, there is value in this if we can assume that we are not getting false negatives because of something like CSP outages

**Cypress Paths to Cover:**
- Validate Successful Login with each CSP utilizing the modal
- Validate Successful login with each CSP utilizing the sing-in page
- Validate Successful external application login with each CSP utilizing the sing in page
- Validate DOM renders proper error page for all possible error codes
- Validate active session SSO
- Validate expired session SSO
- Validate session expiration while the user is on a page (can cypress alter the expire cookie or fast forward time so we can observe what happens when a user returns to the active browser tab that has expired)
- Validate authentication banners (Downtime, logged out)
- Validate SSO Logins that result in a redirect to external applications
- Validate MHV transition experience when implemented
