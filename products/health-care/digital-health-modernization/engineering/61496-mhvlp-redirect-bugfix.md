# department-of-veterans-affairs/va.gov-team#61496 MHV Landing Page Redirect Bug (2023/08)

## Summary

Navigating directly to `va.gov/my-health` before signing in causes users to be immediately redirected to MHV National Portal.

## Detail

This was occuring because `isLandingPageEnabledForUser` sees that the user is signed out, returns false, and triggers the `<App />` component to redirect. Fixing this involved creating a selector for the `mhv_landing_page_enabled` feature toggle and using it to toggle the mega-menu link to `/my-health`, as well as updating the `isLandingPageEnabledForUser` selector and refactoring the `<App />` component to wait until `vamcEhrData` has been loaded into state before making a determination to redirect.

## More Detail

The following conditions must be met for a user to access the MHV Landing Page at `va.gov/my-health`:

- `mhv_landing_page_enabled` feature toggle set to `true`
- `state.user.login.currentlyLoggedIn` is `true`
- `state.user.profile.signIn.serviceName` is `CSP.IDS.{ID_ME,LOGIN_GOV}`
- `state.user.profile.facilities` has at least one entry
- `isCerner` property of `state.user.profile.facilities` entries are all false

Discovered that it is necessary to use the `selectPatientFacilities` selector when accessing state, and making determinations about the types of facilities a user has visited. This selector calls `.map` on facilities and adds Cerner details to `state.user.profile.facilities`

[`selectPatientFacilities`](https://github.com/department-of-veterans-affairs/vets-website/blob/2cded15f07558188a53d52196b0ddb138327cb53/src/platform/user/selectors.js/#L27)

We rely on the `mega-menu` to call `connectDrupalSourceOfTruthCerner` to request `/data/cms/vamc-ehr.json` and load facility data into state.

`selectPatientFacilities` calls `selectCernerFacilityIds`, which calls `selectCernerFacilities`, which calls `selectVamcEhrData`. However, we weren't checking `selectVamcEhrData(state).loading` in the MHV Landing Page `<App />` component. This could create a sort of redux slot machine when selecting state and determining if a user is or is not allowed access to the page, since the request for `/data/cms/vamc-ehr.json` may or may not have finished, meaning `vamcEhrData` may or may not be present, meaning we may or may not know if a user is associated with a Cerner facility.

Updated `<App />` unit tests to include all relevant state, and to use the `renderWithStoreAndRouter` convenience function provided by Platform.

[`<App />` unit tests](https://github.com/department-of-veterans-affairs/vets-website/blob/8ccdb7397aa7ddfc1a8754d3a1190582c0bbad6f/src/applications/mhv/landing-page/tests/containers/App.unit.spec.jsx#L56)

Updated e2e Cypress tests to intercept and serve `vamc-ehr.json`, to intercept redirect requests, and to use `json` fixtures.

[`mhv-auth-redirect.cypress.spec.js`](https://github.com/department-of-veterans-affairs/vets-website/blob/8ccdb7397aa7ddfc1a8754d3a1190582c0bbad6f/src/applications/mhv/landing-page/tests/e2e/mhv-auth-redirect.cypress.spec.js)

## Links

- [Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/61496)
- [Bugfix](https://github.com/department-of-veterans-affairs/vets-website/pull/25228)
