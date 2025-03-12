# My HealtheVet on VA.gov: Account Creation API Overview

The goal of this document is to explain what the MHV Account Creation API does, how it is called from VA.gov, and how MHV-on-VA.gov tools that require a MHV identifier should handle error scenarios. 

## Overview
A MHV-Identifier (uuid) is required by three of the "big four" health tools (medications, medical records, and secure messages) on VA.gov to retrieve user data. The account creation API seeks to solve a current-state problem, where first-time users of My HealtheVet on VA.gov must manually register for an MHV-ID on the National Portal website to assoicate a UUID with their credential. The most common use case for this API are users who set up a new **ID.me** or **Login.gov** account & attempt to access My HealtheVet for the first time.

This API automatically creates an MHV-Identifier for any Veteran who does not already have one (or retrieve it if one exists), thus removing the user burden of the manual registration step.

However, a significant portion of users will still arrive at the MHV-on-VA.gov portal without a MHV-UUID. Common causes:
- The API call during sign-in stores the MHV-UUID in a different place than MHV tools are looking for it
- The API call failed during sign-in
- The API call returned an error from the MHV back-end (see below, errors are coded `8XX`)

## On this page
* [API errors](#api-errors)
* [Potential entry points & user routing in error states](#routing)
* [Implementation logic (MVP)](#logic)
* [QA guide & test cases](#qa)
* [Planned future-state improvements](#future)
* [Resources](#resources)
* [Teams involved in this effort](#teams)

## <a name="api-errors">API errors</a>
Errors returned by the MHV Account Creation API fall into two categories: errors that require the user to call the MHV Help Desk, and technical/background errors that are transient. (The errors and triage approaches are documented in the [product guide](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/landing-page/contact_center).)

### User-action required errors
These are errors that require manual intervention by My HealtheVet helpdesk staff, and a user must call the helpdesk phone number and communicate the specific error code number to resolve the problem. This alert is most relevant for errors numbered 801, 805, 806, 807 from the API specifications.

### User-action required alert (error codes: 801, 805, 806, 807) (as displayed on the MHV landing page)
<img width="925" alt="Screenshot 2024-12-11 at 4 51 30 PM" src="https://github.com/user-attachments/assets/276dcee5-eaed-4ff8-848d-8af8e53db502" />

### Background errors
These are errors are due to background issues that helpdesk staff are not likely to be able to resolve. Instead, telling users to reload the page or try again later are the most straightforward approaches we can commmunicate at this time (MVP). These are errors numbered 802, 803, 804, 808, 809, 810, 811 from the API specifications.

### Background error alert (error codes: 802, 803, 804, 808, 809, 810) (as displayed on the MHV landing page)
<img width="922" alt="Screenshot 2024-12-11 at 4 51 39 PM" src="https://github.com/user-attachments/assets/610c346d-bf47-46eb-b114-3ea76d431619" />

For full details about the alerts above, including accessibility annotations, [see Figma here](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=267-8158&node-type=frame&t=UPokYL4gfORKiywK-0)

## <a name="routing">Tool implementation of user routing when UUID is missing</a>
Three health tools (medications, medical records, and secure messages) require a MHV UUID to function. **If it is missing, they should redirect users to the MHV landing page,** which will attempt to retrieve the UUID and then alert the user appropriately.

**Route-guard:** The Cartography team uses this term to describe the application logic within React that can conditionally redirect users to the MHV landing page.


## <a name="logic">Implementation logic for affected tools (MVP)</a>
   
```mermaid
flowchart TD
    A[previous checks for verified account, facilities] --> D(Does user have a MHV-Identifier?)
    D --> |Yes| G(Render application)
    D --> |No| H(What tools are they trying to access?)
    H --> |Meds, Records, SM| I{fa:fa-circle-exclamation route-guard user to /my-health}
    H --> |Other health tool| J(Render application)
```

1. Applications check redux state for `user.profile.mhvAccountState` to determine if the user has an MHV account.
2. examples can be found on the [landing page](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/mhv-landing-page/selectors/hasMhvAccount.js) and in [medical records](https://github.com/department-of-veterans-affairs/vets-website/blob/da4643caadc120cdf9d88fb0bd0d6941d76ff6e1/src/applications/mhv-medical-records/containers/App.jsx#L29)
3. All impacted applications (SM, Meds, MR) should check the above MHV-Identifier before rendering a page for users.
4. If an MHV-Identifier is not detected, these applications should redirect/route-guard the user to the MHV landing page for triage and alerting if necessary.

### Affected health tool applications
Tools: Medications, Medical Records, Secure Messages

There are many side-door entry points to the health tools themselves (list below). If a user without an MHV-Identifier attempts to access a URL within an affected application, they must be redirected to the `/my-health`landing page, where steps 3-6 above will take place. 

* **Side-door entry points to the affected apps:**
  * Links to Meds, MR, and SM in the My HealtheVet secondary navigation bar
  * My VA healthcare links (currently, these route to the MHV National Portal. But when we update link destinations in January, these pages will become side-door entry points to all 3 affected applications)
  * Health care benefit hub pages for the affected health tool applications - (currently, these route to the MHV National Portal. But when we update link destinations on these pages in March 2025, these pages will become side-door entry points to all 3 affected applications)
  * Cross-links from other unaffected health tool applications
  * Medications, Medical Records, and Secure Messages links

### My HealtheVet landing page implementation
3. We run a call to the Account Creation API endpoint (`/v0/user/mhv_user_account`) & display a loading indicator on the page beneath the global header while we wait for the response (estimated time: 1-2 seconds).
4. We return the response (error or otherwise) to the `mhvAccountStatus` selectors. The api call happens as a `useEffect` block on the `LandingPageContainer` component. Currently there is no new component, only this `useEffect` block. The `mhvAccountStatus` selectors then determine what is rendered: 
5. If an MHV-Identifier was created, the full page & affected application will render for the user. 
6. If we do not see an MHV-Identifier, a new `AlertMhvUserAction` alert is rendered along with a modified landing page. Page modification includes: suppressing links in grey cards for each of the affected health applications. This avoids some dead-ends to those tools that a user lacks access to, and adds clarity to the meaning of the alert.

## <a name="qa">QA guide and test cases</a>
Steps to get the alert to appear for testing in the staging environment

**Pre-requisite:**
1. Install Redux DevTools Chrome extension

**Steps:**
1. Login as vets.gov.user+12@gmail.com (or any staging user that has access to the My HealtheVet landing page on VA.gov)
2. Navigate to the My HealtheVet landing page by clicking on “My HealtheVet” in the top nav bar under the Profile Name (https://staging.va.gov/my-health/)
3. Right click anywhere on the white space of the MHV landing page and select on “Inspect”
4. A new menu should appear and in the top menu, click on `>>` and select “Redux”.
5. Another menu should now appear and at the bottom of this menu, click on “Inspector” and make sure the button that looks like this `>_` is selected. You should see a text box at the bottom of the new menu now that has the below:
```
{
type: ''
}
```
6. Now refresh the browser page
7. In the new menu, wait a couple seconds for the page to finish loading and then at the text box at the bottom, delete everything and paste this:
```
{
   type: 'fetchAccountStatusSuccess',
   data: {
      errors: [
         {
            title: 'The server responded with status 500',
            detail: 'things fall apart',
            code: 805
         }
      ],
   }
}
```
8. Click on “Dispatch” at the bottom left of the menu.
9. The alert should now appear in the MHV landing page.
10. If you want to take a look at the other alerts, you can change the number 805 (in the code above) to one of the numbers below and then click on "Dispatch" again. The alert should change:
    1. 801
    2. 805
    3. 806
    4. 807
    5. 500

**Test cases:**
1. Verify that an existing user can sign in as expected
    1. Login as a user that has access to the My HealtheVet landing page on VA.gov
    2. Navigate to the My HealtheVet landing page (https://staging.va.gov/my-health/)
    3. Verify that this user does not see any of the error alerts
2. Verify that a newly created user can sign in as expected
    1. Create a new testing user in staging
    2. Go to the MyHealtheVet landing page
        1. At this point, this user should be unverified and an alert should appear to tell the user to register/verify their account
    3. Go through the verification process
    4. Go back to the My HealtheVet landing page on VA.gov
    5. Verify that this user does not see any of the error alerts   
3. Verify that user action-able error alerts appear using the above steps and one of the 4 error codes (801, 805, 806, 807)
    1. Follow the above steps to get the error alerts to appear in staging using the redux devtools
4. Verify that a generic error alerts appear when using the above steps and not one of the 4 error codes (500)
    1. Follow the above steps to get the error alerts to appear in staging using the redux devtools

## <a name="future">Planned future-state improvements</a>
As stated earlier in this document, there are many side-door entry points into the affected health tools (medications, medical records, secure messages) from across VA.gov and from even outside of it. Instead of instantly route-guarding those users to the `/my-health` page to experience these error alerts when they occur, we hypothesize that it would make more sense for users to see the relevant alerts _in place within the application they expected to access_.

**Note:** To determine whether this higher technical lift solution is worth pursuing, we will monitor and evalute error logs resulting from the MVP implementation solution and determine the severity of the problem (number and percentage of Veterans affected over time). 

### Possible iteration on the MVP implementation
We should monitor whether the presence of secondary nav on the landing page in a state where 3/4 tools cannot be accessed due to an error with the Account Creation API creates confusion for users. In the event that we believe it does add confusion, we could suppress the navigation bar as a minor iteration. Or we could move toward the future state approach for tool teams (below). 

### Future state UX approach for tool teams
Display these alerts in-place on the root page of your applications. If users hack their URL or somehow access deeper child page links beneath that entry point page, redirect them to the top page of your application and show them the alert in-place there. Suppress all functionality in the application, only displaying: 
* Global header
* Secondary navigation
* Breadcrumbs
* H1
* Lede text (if applicable)
* This alert
* Footer

### UX considerations on the MHV landing page

The MHV-API gates access to 3 major health tools in the portal, but many other applications do not rely on it (e.g. appointments, supply re-ordering, travel pay). Thus, we will still display secondary navigation. This opens up a side-door gateway into the tools in an error-state & all affected tools will need to route-guard users up to 'my-health' to see alerts in place there. This is applicable both for applications' landing pages and child pages. 

We also evaluated an option to ask application teams to implement error alerts on their landing pages instead of route-guarding users to the landing page. However, out of concern for application teams and the level of effort associated with implementing these error states within the tool applications, we are recommending the route-guard solution for the time being. An improved future state solution may follow based after evaluating analytics of the number of users experiencing these errors in production. 

## <a name="resources">Resources</a>
Below are links to API documentation and specifications, discovery work, and design files related to this effort. Please reach out to the involved teams with any questions about these materials.
* [Account Creation API specs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsp/teams/Identity/Product%20Documentation/MHV%20account%20creation%20api%20on%20vagov) (private)
* [API requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/MHV%20account%20creation%20API/requirements.md)
* [API release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/MHV%20account%20creation%20API/release%20plan.md)
* [Implementation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/MHV%20account%20creation%20API/vets-api%20Documentation/mhv_user_account_api.md)
* [Cartography team Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719581177532/3cbc80571562a1f162a0887c4a60e06c3014f99a)
* [Figma designs](https://www.figma.com/design/CAChU51fWYMZsgDR5RXeSc/MHV-Landing-Page?node-id=4065-9052&node-type=canvas&t=xMOSprUxBalLT5G4-0)

## <a name="teams">Teams involved in this effort</a>
* MHV Portals + Access team (Carnetta Scruggs)
  * Haritha Cheruvu - engineer
  * Sandeep Karuturi (VA,Ctr) - API Spec Contact/Product Manager (_no longer in this role_)
  * Naseera - (_taking over for Sandeep_)
  * Barry Egbert (VA,Ctr) - JWT/security MHV account creation api engineer
* Identity team (Samara Strauss)
  * Lainey Traihan - PM
  * Joe Niquette - Lead engineer
* MHV on VA.gov Cartography Team (Robyn Singleton)
  * Wes Rowe - PM
  * Daniel Cloud - engineer
  * Kevin Suarez - engineer
  * Sara Sterkenburg - information architect

**Distribution of effort:**
- The MHV Portals + Access team led by PO Carnetta Scruggs built the API. 
- The VA OCTO Identity team implemented the API onto VA.gov at sign-in. 
- The Cartography team implemented code on the MHV landing page that stores the MHV-UUID in the correct place in application state to be used by MHV tools.
- If an error is returned by the API, the Cartography team has built alerts in the front-end user experience that will help Veterans understand the problem and give them clear next steps to get a resolution. 

