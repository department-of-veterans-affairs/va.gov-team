# Oracle Health (formerly Cerner)/VistA (Electronic Health Records Systems)

Note: As of Nov 2023, Cerner is now called Oracle Health.

## Overview
[How to opt-in to Drupal as the source of truth for Oracle Health-related apps and widgets](https://depo-platform-documentation.scrollhelp.site/developer-docs/how-to-opt-in-to-drupal-as-the-source-of-truth-for) that provides a nice overview of the problem space, as well as a guide for app/widget developers looking to integrate with Drupal-managed EHR data points.

## Audience
The documentation that follows is aimed at Public Websites engineers. It covers two main topics:
1) Exposing the API (maintaining the code that provides an API for app/widget consumption of Drupal-managed EHR data points.)
2) Consuming the API as it specifically relates to Public Websites products.

## Exposing the API

The original way has been deprecated and code has been removed. Implementing apps and widgets should no longer be using this method.
- The new way, which exposes the data points stored in Drupal.

### The original way
Originally, tracking which facilities had migrated from VistA to Oracle Health (formerly Cerner) was tracked via a hard-coded array combined with Flipper feature toggles.

Additionally, there were hard-coded arrays for specific pieces of health-care management. It was the case previously (but should not be the case again in the future) that only a _subset_ of a facility's health-care management would initially migrate. This required that we have an array for each piece that should not be considered Oracle Health when the facility at large was considered to have migrated to Oracle Health.


### The new way
The new way amounts to managing the data points in Drupal rather than hard-coded in the code. The vast majority of the work related to this new way of handling this was completed in [this PR](https://github.com/department-of-veterans-affairs/vets-website/pull/21393). There were some small additions and refactoring in [this PR](https://github.com/department-of-veterans-affairs/vets-website/pull/21905), which primarily was work done for the PW-consuming code.

Here are the key pieces:
- `src/platform/utilities/drupal-static-data/connect.js`
   - This is the browser-side piece of the KISS puzzle. The function `connectDrupalStaticDataFile` takes the name of a KISS-generated file as a parameter, then fetches that file and subsequently places the contents in the global Redux state under a property name that is also passed in.
   - **Importantly,** there is no mechanism yet in place to prevent multiple fetches of the same data file. This work should be considered for future implementation. There is now a connection being made from the header code. Since this code runs on all pages, every other app that makes this connection will ultimately be making a redundant call.
- `src/platform/utilities/cerner/dsot.js`
   - This file implements an abstraction of the more general `connectDrupalStaticDataFile` specifically for the Oracle Health/EHR KISS-generated data file `vamc-ehr.json`. As we can see in the code below, this abstraction places the fetched data in the global state under the property `cernerFacilities`.
   ```
    export const connectDrupalSourceOfTruthCerner = dispatch => {
      connectDrupalStaticDataFile(dispatch, {
        fileName: 'vamc-ehr.json',
        preProcess: preProcessEhrData,
        statePropName: 'cernerFacilities',
      });
    };
   ```
   - Ultimately, it's this function that is exposed for use by implementing apps.
- `src/platform/site-wide/drupal-static-data/reducers/index.js`
   - This file includes the Redux reducers underpinning the implementation discussed above.
- `src/platform/user/cerner-dsot/selectors.js`
   - Once the data is in the Redux store, we need to provide a way for apps to get it out. The selectors in this file provide that mechanism. Unlike the selectors in the original way, these selectors need to grab the EHR data from the Redux store.

## Consuming the API in PW products
All healthcare widgets have been updated to use the new way of integrating with EHR data points. There are five widgets:
1. Get Medical Records
2. Refill and Track Prescriptions
3. Schedule and View VA Appointments
4. Secure Messaging
5. View Test and Lab Results

All of these widgets are implemented similarly. We'll examine Get Medical Records as an example:
- `src/applications/static-pages/health-care-manage-benefits/get-medical-records-page/index.js`
   - In the code that mounts the widget, we make a call connect the Drupal data source (KISS-generated EHR file) to the global Redux state:
   ```
    connectDrupalSourceOfTruthCerner(store.dispatch);
   ```
- `src/applications/static-pages/health-care-manage-benefits/get-medical-records-page/components/App/index.js`
   - The top-level widget component takes `facilities` and `ehrDataByVhaId` as properties, and these properties are populated from the Redux state via `mapStateToProps`.
   ```
    const mapStateToProps = state => ({
      authenticatedWithSSOe: isAuthenticatedWithSSOe(state),
      ehrDataByVhaId: selectEhrDataByVhaId(state),
      facilities: selectPatientFacilitiesDsot(state),
      useSingleLogout: state?.featureToggles?.pwEhrCtaUseSlo,
    });
   ```
  - `ehrDataByVhaId` represents a data structure that provides additional data for each facility. One benefit of moving to this new approach is that we can access data points that we didn't have hard-coded. One example is that we now have access to a VAMC system name rather than just the name of the main facility within that system. [This PR](https://github.com/department-of-veterans-affairs/vets-website/pull/21905) captures work to utilize that name.
  - `facilities` represents the facilities with which an authenticated veteran is associated. Each record in the array will have a property that indicates if it is an Oracle Health or VistA facility.
