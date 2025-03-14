# Initiative outline: MHV user ID and password sign-in transition

**Last Updated: March 13, 2025 -- Samara created outline**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Project history](#project-history)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


## POCs
- **Slack channel**: [Sign-in transition](https://dsva.slack.com/channels/secure-sign-in-transition)

## Overview

In July 2024, VA publicly announced its decision to retire the My HealtheVet user ID and password and use of the DS Logon credential at VA. Instead, VA would only continue to support two modern, NIST-compliant credentials -- Login.gov and ID.me -- going forward.

Between July 2024 and March 2025, VA engaged in an organization-wide campaign to migrate about 1M MHV users to Login.gov and ID.me. As of 3/6/2025, the MHV user ID and password option has been completely removed from VA web and mobile properties. 

## User Problem Statement

- As a Veteran, I need to be able to quickly and easily login to VA web properties to manage my health and benefits.
- As a Veteran, I need to sign up for a Login.gov or ID.me account, having previously used the MHV or DSL credentials to login to VA web properties.

## Business goals

- Reduce the number of people using the My HealtheVet user ID and password to zero.
- Improve security and reduce fraud risk by retiring the My HealtheVet user ID and password.
- Simplify the VA sign-in experience by reducing supported credential service providers from four to two.

## Project history

* **November/December 2023**: The determination was made to retire DS Logon and the MHV credential by the end of 2024.
* **January 2024**: Significant comms planning; Preparation of initial press release (still awaiting approval; Jeanette joins the team
* **March 2024**: We briefed the sign-in transition plan internally at VA. People support the retirement of the MHV credential across the board. However, Dep. Sec. Bradsher has asked us to brief the DS Logon transition at the ITEC and JEC meetings happening in May and June.
* **May 2024**: 5/15 ITEC meeting.
* **June 2024**: JEC meeting; DS logon retirement date determined to be 9/30/2025 and MHV user ID and password retirement date cleared to be 1/31/2025.
* **July 2024**: Formally kickoff transition effort; Press release went out to the public on July 17,2024
* **August 2024**: Internal OCTO kickoff​; Tons of briefings across VA and with VSOs​; Sign-in transition content added to VA.gov​; Collateral created for veteran-facing staff​; UI updates work begins​; Defining data needs; Risk identification
* **September 2024**: Comms to ~800K MHV users without modern credentials​; MHV sign in/registration page updates​; In-person sign up day pilots; finalizing protocol and guide for in person support days; Continuing all digital work and broader change management strategy
* **October 2024**: Sign-in modal updates to downplay MHV and DSL options​; Account creation API​; Scale in-person sign-up days​; Video collateral for veterans and veteran-facing staff​; Email comms to no modern credential and Login.gov groups; Update reports to provide user data weekly instead of monthly
- **December 2024**: Sign-in interstitial went live on VA.gov.
- **January 2025**: Decision to extend deadline from original 1/31/25 deadline to 3/4/25.
- **March 2025**: MHV user ID and password option was removed from VA.gov and MHV on 3/5/25; MHV user ID and password option removed from AccessVA on 3/6/25.

## Analytics

- [Datadog: Authentication stats](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1739303027604&to_ts=1741895027604&live=true)
- [Domo: Sign-in transition dashboard](https://va-gov.domo.com/page/1862108618?userId=367226722)
- [Datadog: Interstitial metrics](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&index=*&refresh_mode=paused&from_ts=1737125001775&to_ts=1737139401775&live=false&tile_focus=3815395182095420)

(Samara to add metrics)

## Backend

(Link relevant backend docs)

## Frontend

(Link relevant frontend docs)

## Design and UX

### Research
- [GH folder: Sign In Experience - Call Center Data Analysis](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Research/2024-08%20Sign%20In%20Experience%20-%20Call%20Center%20Data%20Analysis)
- [GH Folder: Sign in transition](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Research/2024-08%20Sign%20in%20transition)
- [Research Repo Ticket: Sign in transition](https://github.com/orgs/department-of-veterans-affairs/projects/880/views/2?filterQuery=&pane=issue&itemId=77753830)
- [Enjoy HQ project: Sign in transition](https://app.enjoyhq.com/projects/QwXlGYvnK/plan)
- [Edge Case Catalog](https://dvagov.sharepoint.com/:x:/r/sites/identity-mo-team/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7Baa308d27-bf17-4f43-850a-12e335fc8fc5%7D&wdOrigin=TEAMS-WEB.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1735303575172&web=1)

### Design
- [User flow iterations - Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1724333905063/6c6192d24519142a244970b2db83539d4c2b1b2e)
- [User flows for modern CSP account creation - Figma](https://www.figma.com/design/kjhHcpanHjaEGPcT7Oe5uC/User-flows-for-modern-CSP-account-creation?node-id=0-1&p=f&t=miTEvylWp7mWp5F3-0)
- [Sign in page and modal iteration history - Figma](https://www.figma.com/design/d3fRL81XY4o9tncCOjmRNS/Sign-in-page---MHV-removal?node-id=779-269620&t=UEbf8wTuMvVBhubf-0)
- [Sign in page and modal for MHV deadline extension design - Figma](https://www.figma.com/design/d3fRL81XY4o9tncCOjmRNS/Sign-in-page---MHV-removal?node-id=774-269619&m=dev)
- [Sign in page and modal for MHV final removal - Figma](https://www.figma.com/design/d3fRL81XY4o9tncCOjmRNS/Sign-in-page---MHV-removal?node-id=555-161481&t=9myGrgBTXCOvntHV-0)
- [Interstitial designs - Figma](https://www.figma.com/design/d3fRL81XY4o9tncCOjmRNS/Sign-in-page---MHV-removal?node-id=774-269621&m=dev)
- [Production test account sign-in page design - Figma](https://www.figma.com/design/d3fRL81XY4o9tncCOjmRNS/Sign-in-page---MHV-removal?node-id=114-116740&t=9myGrgBTXCOvntHV-0)
- [MHV exepmtion sign-in page design - Figma](https://www.figma.com/design/d3fRL81XY4o9tncCOjmRNS/Sign-in-page---MHV-removal?node-id=888-233925&t=9myGrgBTXCOvntHV-0)
- [Updated sign-in alerts - VADS](https://design.va.gov/components/alert/alert-sign-in/)
