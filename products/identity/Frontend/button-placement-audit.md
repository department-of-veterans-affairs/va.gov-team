# All ID.me and Logingov Button Placements

This document is accurate as of 7/30/25.

## Button Instances

### Login Buttons
The login button component can be found in `src/platform/user/authentication/components/LoginButton.jsx`.

That button is itself used in `src/platform/user/authentication/components/LoginActions.jsx` to render valid Credential Service Providers (CSP). `LoginActions` determines which CSP buttons get rendered based on the `allowedSignInProviders` in the given `externalApplicationsConfig`.

`LoginActions` in turn gets rendered by `src/platform/user/authentication/components/LoginContainer.jsx`. Finally, `LoginContainer` gets rendered in `src/applications/login/containers/SignInApp.jsx` and `src/platform/user/authentication/components/SignInModal.jsx`.

The above process is used to render both ID.me and Login.gov buttons in the following places:
- https://www.va.gov/sign-in/
- https://www.va.gov/?next=loginModal

The Accredited Representative Portal uses that same process, but constructs its own container for the `LoginActions` in `src/applications/accredited-representative-portal/containers/LoginContainer.jsx`. That continer gets rendered in `src/applications/accredited-representative-portal/routes.jsx`.

The Accredited Representative Portal only renders the Login.gov button in the following location:
- https://www.va.gov/sign-in/?application=arp&oauth=true&to=%2Fpoa-requests

### Verify Buttons
Several verify buttons are defined in `src/platform/user/authentication/components/VerifyButton.jsx`:

- `VerifyButton` which takes a generic CSP to render.
- `VerifyLogingovButton` and `VerifyIdmeButton` which are for Login.gov and ID.me respectively.

These buttons are rendered in several locations and show up under different circumstances.

- `VerifyButton` is used in `src/applications/sign-in-changes/components/AccountSwitch.jsx` and `src/applications/sign-in-changes/components/CreateAccount.jsx` which both eventually get rendered by `src/applications/sign-in-changes/containers/InterstitialChanges.jsx`.
    - Can display ID.me, Login.gov, or both buttons depending on the conditions detailed [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sign-in-transition/test-plan-and-traceability-report.md).
    - These buttons can be found in the following location: https://www.va.gov/sign-in-changes-reminder

- The CTA-Widget renders all 3 types buttons under different conditions: 
    - `VerifyButton` is used in `src/applications/static-pages/cta-widget/components/messages/SignInOtherAccount.jsx` which renders both ID.me and Login.gov buttons. `SignInOtherAccount` itself gets rendered by the CTA-Widget in `src/applications/static-pages/cta-widget/index.js`.
    - `VerifyIdmeButton` and `VerifyLogingovButton` are both used in `src/applications/static-pages/cta-widget/components/messages/Verify.jsx` which also gets rendered by the CTA-Widget.
    - The CTA-Widget renders `Verify` if the `serviceName` property must be set to `idme` or `logingov`. Otherwise, it renders `SignInOtherAccount`. One of the following must also be true:
        - The `mviStatus` property is `NOT_AUTHORIZED`.
        - The user's account needs verification.
        - The user's profile is not verified.
    - Provided the above criteria is met, these buttons can be found anywhere the CTA-Widget is rendered. For example:
        - https://www.va.gov/manage-va-debt
        - https://www.va.gov/change-direct-deposit
        - https://www.va.gov/education/download-letters

- `VerifyButton` is used in `src/applications/static-pages/mhv-signin-cta/components/messages/UnverifiedAlert.jsx` which gets rendered by both `src/applications/static-pages/mhv-signin-cta/index.js` and `src/applications/static-pages/mhv-simple-signin-cta/index.js`.
    - These buttons can be found on the manage health and benefit pages here: https://www.va.gov/health-care/#manage-your-health-and-benefit

- All 3 buttons are used in `src/applications/travel-pay/components/alerts/VerifyIdentityAlert.jsx` which gets rendered by `src/applications/travel-pay/containers/App.jsx`.
    - If a user accesses the page with an unverified identity, they can potentially see the ID.me button, Login.gov button, or both (depending on their `signInService`).
    - This page is located here: https://www.va.gov/my-health/travel-pay/claims/
    
- `VerifyIdmeButton` and `VerifyLogingovButton` are both used in `src/applications/ask-va/containers/IntroductionPage.jsx` and `src/applications/ask-va/containers/SignInInterruptPage.jsx`.
    - Only one of these buttons is used at a time and is only rendered if the `signInServiceName` includes `idme` or `logingov` and (on the `IntroductionPage` specifically) if the user is logged out and LOA1.
    - These buttons can be found here: https://www.va.gov/contact-us/ask-va/introduction

- `VerifyIdmeButton` and `VerifyLogingovButton` are both used in `src/applications/static-pages/download-1095b/components/App/index.js`
    - Only one of these buttons is used at a time if the `cspId` is `idme` or `logingov`. Otherwise, both are rendered.
    - These buttons used to be found here: https://www.va.gov/health-care/download-1095b/ (though it appears that page is no longer accessible).

- `VerifyIdmeButton` and `VerifyLogingovButton` are both used in `src/applications/verify/components/UnifiedVerify.jsx` which gets rendered by `src/applications/verify/containers/VerifyApp.jsx`.
    - Both buttons are rendered unless the user is already authenticated, in which case only 1 of the 2 buttons are shown based on which login service is being used.
    - These buttons can be found here: https://www.va.gov/verify/

- `VerifyIdmeButton` and `VerifyLogingovButton` are both used in `src/platform/user/authorization/components/VerifyAlert.jsx`.
    - Both buttons are rendered if the user's CSP is `mhv`. Otherwise, only one 1 of the 2 buttons are shown based on whether `idme` or `logingov` is the current CSP.
    - Similar to the CTA-Widget, `VerifyAlert` is rendered throughout the site. For example:
        - https://va.gov/my-health/update-benefits-information-form-10-10ezr/introduction
        - https://va.gov/health-care/apply-for-health-care-form-10-10ez/introduction
        - https://va.gov/education/apply-for-gi-bill-form-22-1990/introduction




## Changes Required to Update All Buttons

While there are many instances of the buttons rendered above, only a few key files need to be changed in order to update them. Specifically:

- If the base instance of the Login Button needs changing:
    - `src/platform/user/authentication/components/LoginButton.jsx`
- To update the actual Login Buttons themselves:
    - `src/platform/user/authentication/components/LoginActions.jsx`
- If the base instances of the Verify Buttons need to be changed:
    - `src/platform/user/authentication/components/VerifyButton.jsx`
- Any of the following files to update the actual Verify Buttons themselves:
    - Identity Related
        - `src/applications/sign-in-changes/components/AccountSwitch.jsx`
        - `src/applications/sign-in-changes/components/CreateAccount.jsx`
        - `src/applications/static-pages/cta-widget/components/messages/SignInOtherAccount.jsx`
        - `src/applications/static-pages/cta-widget/components/messages/Verify.jsx`
        - `src/applications/verify/components/UnifiedVerify.jsx`
        - `src/platform/user/authorization/components/VerifyAlert.jsx`
    - Related to Other Teams
        - `src/applications/static-pages/mhv-signin-cta/components/messages/UnverifiedAlert.jsx`
        - `src/applications/travel-pay/components/alerts/VerifyIdentityAlert.jsx`
        - `src/applications/ask-va/containers/IntroductionPage.jsx`
        - `src/applications/ask-va/containers/SignInInterruptPage.jsx`
        - `src/applications/static-pages/download-1095b/components/App/index.js`
