# Initiative outline: MHV user ID and password sign-in transition

**Last Updated: March 21, 2025 -- Samara added content around transition approach and completed work**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Transition approach](#transition-approach)
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

## Transition approach

The MHV sign-in transition had five major areas of work:
- A robust Veteran-facing communication campaign​
- Resources, education, and in-person support​
- Extensive internal change management​
- Incremental UI and technology changes to both VA.gov and other systems​
- Data and analytics

### Veteran-facing communications campaign​

- **OCTO lead**: Danielle Thierry​
- **Teams involved**: OCTO CAIA; VEO, OPIA​
- **Description**: Clear, consistent, targeted, and regular communication across many channels—to reach every Veteran we can.

#### Strategy

Increasing urgency without alarm:​

- **July to September 2024**: Awareness and encouragement —“You have time. Make the change early.”​
- **October to November 2024**: Encouragement and assistance —“You still have time but need to make the change. Get support.”​
- **December 2024 to March 2025**: Urgent alert and assistance —“You must make this change now to continue to access and manage our benefits online. Get support now.”​
- **March 2025 and beyond**: Post-transition support — “Use your Login.gov or ID.me account to sign in. If you don’t have one, create one now.”​

#### Completed work
- Initial comms push, including the [VA press release announcing the transition](https://news.va.gov/press-room/va-begins-transition-to-simpler-online-sign-in-experience-for-veterans-account-access/) (summer 2024)​
- Sign-in transition campaign page on VA.gov, and robust transition content in Resources & Support, including how-to videos.​
- Monthly emails to Veterans who do not have Login.gov or ID.me.​
- Content in VetResources newsletter and MHV newsletter.
- Social media push​
- Jeannette and Danielle participated in a "You Asked, We Answered" session produced by VHA.​
- The BLUF" (a VHA-produced episodic video show) -- brief interview with ID.me's owner as well as call out about sign-in changes.

### ​Resources, education, and in-person support​

- **Owner**: Jeannette Bruno​
- **Teams involved**: OCTO Identity sign-in transition team and CAIA; My HealtheVet; OCC; My HealtheVet Coordinators; VHRCs; VSOs​
- **Description**: Establish resources, education, and in-person support operations so that VA Staff and Veterans have the correct information during the transition.

#### Completed work

- OCTO supported over 100+ in-person sign-in events, offering help to Veterans having trouble making the transition. Many more events were held by VAMCs without OCTO staff.​
- Both Login.gov and ID.me offer an in-person option for identity verification.
- Initiated ID.me verification device pilot at three VAMCs.​
- Disseminated a robust in-person support guide complete with resources for staff, recommendations for staffing and event structures, and troubleshooting guidance
- Created print and video collateral on how to transition to a modern sign-in account.​
- Held staff monthly staff webinars.

### Internal change management​

- **Owner**: Jeannette Bruno​
- **Teams involved**: OCTO Identity sign-in transition team; My HealtheVet; OCC; My HealtheVet Coordinators; VHRCs​
- **Description**: Improve transparency and communication so that all of VA is aligned and informed during the transition; Work with partners to become champions of this effort.
  
#### Completed work
- Memo shared with VISN Directors to request VISN and facility support during the ongoing sign in transition to a new modern sign in credential.​
- Monthly MHV Coordinator calls, which transitioned to all VA-staff webinars in November.​
- Outreach to VSOs (awareness, engagement, and training).
- Set up a sign-in transition inbox for staff to send issues directly to OCTO for escalation and guidance.​
- Training for facility staff who are helping Veterans

### UI and technology changes

- **Owners**: Tom Black (backend/infrastructure); Samara Strauss (user-facing changes)​
- **Teams involved**: OCTO Identity Platform and Sign in experience, My HealtheVet Cartography, CAIA, Mobile app experience; My HealtheVet; IAM​
- **Description**: Consistent, clear, and coordinated updates to VA's sign in infrastructure and interfaces.

#### Completed work

- [VA.gov] Prioritized modern credentials on VA.gov sign-in page.​
- [VA.gov] Interstitial reminder to people using the MHV username and password that they need to create a Login.gov or ID.me account, or switch to an existing account.
- [VA.gov] Account creation API – this is not user-facing but is essential to supporting MHV username and password retirement.
- [MHV] Allowed people to voluntarily retire their MHV usernames and passwords.​
- [MHV] Ended the ability to create a new MHV username and password.​
- [MHV] Redesigned the MHV sign-in page to emphasize VA.gov sign-in path and de-emphasize direct MHV sign-in (Option 2) and AccessVA (Option 3).
- The MHV user ID and password option was removed from VA.gov and MHV on 3/5/25 and from AccessVA on 3/6/25.

### Data and analytics

- **Owner**: Tom Black (data strategy); Samara Strauss (product)​
- **Teams involved**: OCTO Identity Platform, sign-in transition team, Contact center support; IAM; Login.gov; ID.me​
- **Description**: Establish a data-driven transition so that we can rapidly measure and iterate on transition efforts.

#### Completed work

- Extensive work on our [Domo dashboard](https://va-gov.domo.com/page/1862108618?userId=367226722) to make sure we could track the transition, including adding weekly views to key data and adding usage data.
- Close collaboration with Office of Connected Care partners to reduce discrepancies between OCTO and OCC data. 

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

### OCTO 2025 OKRs

#### OKR2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.
- **O2.1**: 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.

### User data

|Metric|Baseline (July 2024)|Data as of 3/4/25|
|------|--------------------|-----------------|
|Total active MHV users|4,366,421|5,405,981|
|Total MHV users without Login.gov or ID.me|1,298,242|966,627|
|MHV users without Login.gov or ID.me -- Active since 1.1.23|1,084,195|766,449|
|MHV users without Login.gov or ID.me -- Active since 1.1.24|959,637|594,123|
|MHV users with Login.gov|834,078|1,751,637|
|MHV users with ID.me|2,733,679|3,639,673|

### Usage metrics

|Metric|Baseline (July 2024)|February 2025|
|------|--------------------|-----------------|
|% authentications happening through MHV user ID and password|43%|12%|
|% authentications happening through Login.gov|15%|29%|
|% authentications happening through ID.me|34%|54%|
|Number of people using the MHV user ID and password|913,727 (this is for October 2024)|493,775|
|% of people using the MHV user ID and password|30% (this is for October 2024)|16%|

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
