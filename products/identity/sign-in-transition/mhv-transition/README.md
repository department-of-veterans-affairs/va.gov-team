# Initiative outline: MHV user ID and password sign-in transition

**Last Updated: March 13, 2025 -- Samara created outline**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Project-history](#project-history)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


## POCs
- **Slack channel**: [#vsp-identity](https://dsva.slack.com/channels/vsp-identity)

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

(Samara to add metrics)

## Backend

(Link relevant backend docs)

## Frontend

(Link relevant frontend docs)

## Design and UX

(Link relevant design docs)
