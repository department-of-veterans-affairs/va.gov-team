# My HealtheVet on VA.gov: Account Creation API Overview

This document gives an overview of the Cartography Team's discovery work around the API architecture, including: user-facing alert designs, routing, impacts on affected health tool applications, and alert placement decisions.

## Overview
The account creation API seeks to solve a current-state problem, where user first-time users of My HealtheVet on VA.gov cannot directly access three of the "big four" health tools (medications, medical records, or secure messages) on VA.gov without first manually registering for an MHV-ID on the National Portal website by filling out a digital registration form. 

This API will automatically create an MHV-Identifier for any Veteran who does not already have one, and the process will kick off at the time a user signs-in to VA.gov, or enters VA.gov via SSOe from another external VA site. The most common use case for this API are users who set up a new **ID.me** or **Login.gov** account & attempt to access My HealtheVet for the first time. However, the API can fail if certain errors are hit. Most of those errors will occur behind the scenes, but four errors will require user action: the Veteran will need to contact the My HealtheVet helpdesk & share the error code they received, which will aid the helpdesk team in quickly triaging the problem & escalating it to the necessary tier of support. 

## Resources
* [Account Creation API specs](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/teams/vsp/teams/Identity/Product%20Documentation/MHV%20account%20creation%20api%20on%20vagov) (private)
* [API requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/MHV%20account%20creation%20API/requirements.md)
* [API release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/MHV%20account%20creation%20API/release%20plan.md)
* [Implementation documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/MHV%20account%20creation%20API/vets-api%20Documentation/mhv_user_account_api.md)
* [Cartography team Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1719581177532/3cbc80571562a1f162a0887c4a60e06c3014f99a)
* [Figma designs](https://www.figma.com/design/CAChU51fWYMZsgDR5RXeSc/MHV-Landing-Page?node-id=4065-9052&node-type=canvas&t=xMOSprUxBalLT5G4-0)

## On this page
* Teams involved in this effort
* API errors
* Potential entry points & user routing in error states
* Entry points to My HealtheVet on VA.gov

## Teams involved in this effort
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
The MHV Portals + Access team led by PO Carnetta Scruggs is building the API. The VA OCTO Identity team will be implementing the API onto VA.gov at sign-in. The Cartography team will be calling the API endpoint within the My HealtheVet space to see if an MHV-Identifier was returned by the API, or if there was an error returned. If errors are returned, the Cartography team is designing alerts for the front-end user experience that will help Veterans understand the problem and give them clear next-steps to get a resolution. 

 ## API errors
The full API documentation is linked above under "[resources](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/account-creation-api.md#resources)" and lives in the sensitive repo (requires access to view). In a nutshell, the 3 teams above have worked together and grouped errors into two "types." Cartography team is creating contact center documentation around these errors to inform front-line helpdesk staff: 1.) what these error alerts look like, 2.) how to help users resolve each of these errors. 

### User-action required errors
These are errors that require manual intervention by My HealtheVet helpdesk staff, and a user must call the helpdesk phone number and communicate the specific error code number to resolve the problem. This alert is most relevant for errors numbered: 801, 805, 806, 807 from the API specifications.

### Background errors
These are errors that a user cannot resolve on their own, and are due to background issues that helpdesk staff are not likely to be able to resolve. Instead, telling users to reload the page or try again later are the most straightforward approaches we can commmunicate at this time (MVP) to address these problems, which we believe to be the least likely to occur based on production testing so far. These are errors numbered: 802, 803, 804, 808, 809, 810 from the API specifications.

## Potential entry points & user routing in error states
The MHV-API gates access to 3 major health tools in the portal, but many other applications do not rely on it (e.g. appointments, supply re-ordering, travel pay). Thus, we will still display secondary navigation. This opens up a side-door gateway into the tools in an error-state & all affected tools will need to implement these alerts in their own applications to account for it. There are also additional side-door entry points that back-up the need to do this. 

We evaluated an option to route-guard users from affected applications up to /my-health to see alerts in place there, but have concerns that this could indicate to users that the secondary navigation bar is defective. If they select a tool that is impacted by this problem and attempt to select it (e.g. "Medications"), and get redirected to the /my-health page, and then experience this with two additional tools, it could cause a lot of user frustration. We do not recommend this approach & instead believe that implementing alerts within tools to account for side-door entry points is the best approach. 
 
**Primary entry point:**
* My HealtheVet on VA.gov home page - we will surface the relevant error alert alongside a modified landing page design.
* [Figma designs here](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=267-8158&t=UPokYL4gfORKiywK-4)
 
**Side-door entry points to the affected apps:**

* Links to Meds, MR, and SM in the My HealtheVet secondary navigation bar
* My VA healthcare links (currently, these route to the MHV National Portal. But when we update link destinations in January, these pages will become side-door entry points to all 3 affected applications)
* Health care benefit hub pages for the affected health tool applications - (currently, these route to the MHV National Portal. But when we update link destinations on these pages in March 2025, these pages will become side-door entry points to all 3 affected applications)
* Cross-links from other unaffected health tool applications
* Medications, Medical Records, and Secure Messages links

## Front-end alert design and high-level implementation logic

### Alert designs:
For full detail, including accessibility annotations, [see Figma here](https://www.figma.com/design/m992k2m1DSl9MXV9hDytsQ/MHV-Account-Security-%26-Sign-In?node-id=267-8158&node-type=frame&t=UPokYL4gfORKiywK-0)

#### User-action required alert (error codes: 801, 805, 806, 807)
<img width="925" alt="Screenshot 2024-12-11 at 4 51 30 PM" src="https://github.com/user-attachments/assets/276dcee5-eaed-4ff8-848d-8af8e53db502" />

#### Background error alert (error codes: 802, 803, 804, 808, 809, 810)
<img width="922" alt="Screenshot 2024-12-11 at 4 51 39 PM" src="https://github.com/user-attachments/assets/610c346d-bf47-46eb-b114-3ea76d431619" />

### High-level implementation logic:
1. All impacted application pages should look for an MHV-Identifier as the third-order criteria before rendering a page for users: 
  * Does the user have an ID-verified credential (IAL2)?
  * Does the user have a access to My HealtheVet (do they have a facility in their profile)?
  * Does the user have an MHV-Identifier?
2. If we do not detect an MHV-Identifier, we run a query to the Account Creation API endpoint to see if one was created at sign-in and fetch it.
3. If we see a "false" value from the Account Creation API, we will re-run it and display a loading indicator on the page beneath the global header while we wait for the response (estimated time: 1-2 seconds)
4. If we still do not see an MHV-Identifier, the solution will depend on what page the user is on:

#### My HealtheVet landing page
On this page, we will render a modified version of the landing page with the relevant error alert in place. This page modification includes: suppressing links in the grey-boxes for each of the affected health applications. This avoids some dead-ends to those tools that a user does not have access to, and adds clarity to the meaning of the alert as to what applications are affected.

#### Affected tool apps

**Option 1 (preferred):** Display these alerts in-place on the root page of your applications. If users hack their URL or somehow access deeper child page links beneath that entry point page, route-guard them to the top page of your application and show them the alert in-place there. Suppress all functionality in the application, only displaying: 
* Global header
* Secondary navigation
* Breadcrumbs
* H1
* Lede text (if applicable)
* This alert
* Footer

**Option 2:** If route-guarding users within your application is not desireable, account for putting this alert in place anywhere in the app. Similar to Option 1, suppress all functionality in the application and limit the page display to the same elements of the page that are listed above. 

## Outstanding decisions:
1. Which option (1 or 2) above do affected tool application POs prefer for implementation? All teams should align on a consistent approach
2. Does the MHV Access + Portals team have feedback on the contact center documentation we have drafted?
3. What is the best way to monitor feedback about the account creation API once we implement these alerts? Who is best positioned to do it?




