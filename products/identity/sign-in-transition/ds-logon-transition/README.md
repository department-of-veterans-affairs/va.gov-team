# Initiative outline: Retire use of the DS Logon credential at VA

**Last Updated: June 30, 2025 -- Updated timeline**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Project timeline](#project-timeline)
- [Analytics](#analytics)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design and UX](#design-and-ux)


## POCs
- **Slack channel**: [Sign-in transition](https://dsva.slack.com/channels/secure-sign-in-transition)

## Overview

In July 2024, VA publicly announced its decision to retire the My HealtheVet user ID and password and use of the DS Logon credential at VA. Instead, VA would only continue to support two modern, NIST-compliant credentials -- Login.gov and ID.me -- going forward.

Between July 2024 and March 2025, VA engaged in an organization-wide campaign to migrate about 1M MHV users to Login.gov and ID.me. As of 3/6/2025, the MHV user ID and password option has been completely removed from VA web and mobile properties. 

VA is now focusing on its effort to deprecate the DS Logon credential at VA after 9/30/2025. **DS Logon will remain in use at the Department of Defense**.

## User Problem Statement

- As a Veteran, I need to be able to quickly and easily login to VA web properties to manage my health and benefits.
- As a Veteran, I need to sign up for a Login.gov or ID.me account, having previously used the MHV or DSL credentials to login to VA web properties.
- As a Veteran, I might need to occassionally sign into DoD websites.

## Business goals

- Reduce the number of people using the My HealtheVet user ID and password to zero.
- Improve security and reduce fraud risk by retiring the My HealtheVet user ID and password.
- Simplify the VA sign-in experience by reducing supported credential service providers from four to two.
- Maintain interoperability between DoD and VA so shared audiences don't have to maintain separate sign-in credentials.

## Project timeline

- November/December 2023: The determination was made to retire DS Logon and the MHV credential by the end of 2024.
- January 2024: Significant comms planning; Preparation of initial press release (still awaiting approval; Jeanette joins the team.
- March 2024: We briefed the sign-in transition plan internally at VA. People support the retirement of the MHV credential across the board. However, Dep. Sec. Bradsher has asked us to brief the DS Logon transition at the ITEC and JEC meetings happening in May and June.
- May 2024: 5/15 ITEC meeting
- June 2024: JEC meeting and decision to retire DS Logon at VA after 9/30/25; Contract conversations and team planning; Initial conversations around maintaining interoperability.
- July 2024: Formally kickoff transition effort; Begin monthly meetings around interoperability.
- August 2024: MHV retirement work is moving along, which will likely effect DSL metrics. However, we are not otherwise focusing on DSL retirement beyond monthly meetings at this point.
- September 2024 - January 2025: MHV transition in full swing; we saw a decrease in DS Logon usage and people who have DS Logon but don't have ID.me or Login.gov because of the MHV user ID and password portion of the sign-in transition. Technical converstions around interoperability have progressed.
- March 2025: MHV user ID and password sign-in transition concludes; Focus changes to DS Logon at VA retirement and delegate access.
- April 2025: Continuing conversations around how to maintain a shared credential with DoD; Comms planning.
- May 2025: Initial comms blast went out; exploration of cost differential for federated option.
- June 2025: Philippines webinar to help users sign up for ID.me; Charles confirmed we should pursue federated option for DoD.

## Analytics

- [Datadog: Authentication stats](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1739303027604&to_ts=1741895027604&live=true)
- [Domo: Sign-in transition dashboard](https://va-gov.domo.com/page/1862108618?userId=367226722)
- [Datadog: Interstitial metrics](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&index=*&refresh_mode=paused&from_ts=1737125001775&to_ts=1737139401775&live=false&tile_focus=3815395182095420)

### OCTO 2025 OKRs

#### OKR2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.
- **O2.1**: 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.

### User data

From [Domo](https://va-gov.domo.com/page/1862108618?userId=367226722)

|Metric|Baseline (March 2025)|September 2025|
|------|--------------------|-----------------|
|Total active DS Logon users in the last 24 months|3.87M|TBD|
|Total DS Logon users active in the last 24 months without Login.gov or ID.me|560,333|TBD|
|DS Logon users active in the last 24 months with Login.gov|1.24M|TBD|
|DS Logon users active in the last 24 months with ID.me|2.89M|TBD|

### Usage metrics

From [Datadog]() [Domo](https://va-gov.domo.com/page/1862108618?userId=367226722)

|Metric|Baseline (March 2025)|September 2025|
|------|--------------------|-----------------|
|% authentications happening through DS Logon|5%|TBD|
|% authentications happening through Login.gov|34%|TBD|
|% authentications happening through ID.me|61%|TBD|
|Number of people using DS Logon|232,453|TBD|
|% of people using DS Logon|8%|TBD|

## Backend

(Link relevant backend docs)

## Frontend

(Link relevant frontend docs)

## Design and UX

(Link relevant design docs)
