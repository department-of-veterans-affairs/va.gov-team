# My HealtheVet on VA.gov: Account Creation API  - Discovery

This document gives an overview of the Cartography Team's discovery work around the API architecture and the user-facing alerts, routing, and ux decisions that may be needed related to the MHV account creation API once implemented. 

## Overview
The account creation API seeks to solve a current-state problem, where user first-time users of My HealtheVet cannot directly access three of the "big four" health tools (medications, medical records, or secure messages) on VA.gov without first manually registering for an MHV-ID on the National Portal website by filling out a digital registration form. 

This API will automatically create an MHV-ID for any Veteran who does not already have one, and the process will kick off at the time they sign-in to VA.gov, or enter VA.gov via SSOe from another external VA site. The most common use case for this API are users who set up a new **ID.me** or **Login.gov** account & attempt to access My HealtheVet for the first time. However, the API can fail if certain errors are hit. Most of those errors will occur behind the scenes, but four errors will require user action: the Veteran will need to contact the My HealtheVet helpdesk & share the error code they received, which will aid the helpdesk team in quickly triaging the problem & escalating it to the necessary tier of support. 

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
* UX approach
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
  * Sara Sterkenburg - information architect

 ## API errors
<img width="903" alt="Screenshot 2024-11-08 at 4 03 00 PM" src="https://github.com/user-attachments/assets/032e00b7-480f-41e0-9d37-b5784270b8be">
<img width="579" alt="Screenshot 2024-11-08 at 4 03 08 PM" src="https://github.com/user-attachments/assets/e7b6e826-df40-4a17-aa59-85704d8aadde">

## UX approach
From the section above, we determined that two "types" of errors can be thrown: 
1. Background errors
  * In terms of handling these errors on VA.gov, it's looking like the FE applications (Medications, Medical records, and Secure Messages) will need to determine how to handle background errors; but we need to discuss further what this could or should look like. 
2. Errors that require user-action
  * Cartography team has validated with MHV Portals + Access Team that there are four of these errors. We propose designing a single alert that will conditionally reveal the unique error code in the heading text & body text of the alert.
  * The MHV Access + Portals team needs us to specify the exact error code to the user in a front-end facing alert so that the code can be communicated to My HealtheVet helpdesk coordinators for effective and efficient triaging of the problem to the correct level of support. The team has mapped these issues to four unique 8xx codes,
  * We have validated with the identity team that these codes are available to use on the VA.gov FE - and we will use the numbers as provided. No remapping is needed.

### Potential entry points & user routing in error states
We plan to surface alerts on the My HealtheVet on VA.gov landing page, as well as the affected applications themselves: medical records, medications, and secure messages.

Cartography team is not sure about the current approach of each team to handling users who do not have access to their applications. We will ask these teams to communicate their current-state approachto evaluate if all apps are already consistent, or if different approaches exist today before proceeding with architectural recommendations for alert placement.
 
**Primary entry point:**
* My HealtheVet on VA.gov home page
 
**Side-door entry points to the affected apps:**
* Secondary navigation links
* Health care benefit hub pages for the affected health tool applications
* Cross-links from other unaffected health tool applications
* Medications, Medical Records, and Secure Messages links
