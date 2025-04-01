# Initiative outline: Sign-in Transition

**Last Updated: March 21, 2025 -- Samara created outline**
     
## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statement](#user-problem-statement)
- [Projects](#projects)
- [Analytics](#analytics)


## POCs
- **Slack channel**: [#vsp-identity](https://dsva.slack.com/channels/vsp-identity)

## Overview

### What is the sign-in transition?

- After March 4, 2025, Veterans will no longer have the option to sign in to VA web or mobile properties—including VA.gov and the VA: Health and Benefits mobile app—with their My HealtheVet user ID and password.​ (**Note**: Original target date was January 31, 2025)
  - **This work is complete. The My HealtheVet user ID and password option was removed from VA.gov, MHV, and AccessVA between 3/5/25 and 3/6/25**. 
- After September 30, 2025, Veterans will no longer have the option to sign in to VA web or mobile properties with their DS Logon username and password.​
- Instead, Veterans and others can access VA web and mobile properties with a Login.gov or ID.me account.

### Why is VA making this change?

- Moving to modern, secure credentials that can be used across government is in line with federal guidance:
  - [Executive Order 14058](https://www.federalregister.gov/documents/2021/12/16/2021-27380/transforming-federal-customer-experience-and-service-delivery-to-rebuild-trust-in-government): Transforming Federal Customer Experience​: “The Secretary of Veterans Affairs and the Administrator of General Services shall collaborate to provide seamless integration of Login.gov accounts to allow customers to access VA.gov, the VA mobile application, and other customer-facing digital products and to eliminate outdated and duplicate customer sign-in options.”​
  - [The President's Management Agenda​: Priority 2, Strategy 3](https://bidenadministration.archives.performance.gov/pma/cx/): Identify and prioritize the development of federal shared products, services, and standards that enable simple, seamless, and secure customer experiences across the Federal government.​ Strategy 3, Goal 3.2: Increase user adoption of Login.gov by developing capabilities for existing and potential high-volume customers.
- **Security**: Especially with regards to the My HealtheVet account, there are serious security concerns that will be best remedied by removing this sign-in option.​
- **Performance**: Login.gov and ID.me have better uptimes than the legacy accounts, especially when looking at historical data.​
- **Customer experience**: We have frequently heard from Veterans that 4 sign-in options is too many, and this causes confusion. Additionally, Login.gov and ID.me provide a better customer experience both in terms of UX and customer support infrastructure. 

## User Problem Statement

- As a Veteran, I need to be able to quickly and easily login to VA web properties to manage my health and benefits.
- As a Veteran, I need to sign up for a Login.gov or ID.me account, having previously used the MHV or DSL credentials to login to VA web properties.

## Projects

- [My HealtheVet user ID and password transition](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/sign-in-transition/mhv-transition)
- [DS Logon retirement at VA transition](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/sign-in-transition/ds-logon-transition)

## Analytics

### OCTO 2025 OKRs

#### OKR2: OCTO’s platforms are the fastest, most efficient, and most secure way to deliver products at VA.
- **O2.1**: 100% of authentications to our systems and tools (both Veteran-facing and internal) occur using a secure credential.

### Analytics dashboards
- [Datadog: Authentication stats](https://vagov.ddog-gov.com/dashboard/e3q-6kp-9r4/vagov-identity-stats-public?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1739303027604&to_ts=1741895027604&live=true)
- [Domo: Sign-in transition dashboard](https://va-gov.domo.com/page/1862108618?userId=367226722)
- [Datadog: Interstitial metrics](https://vagov.ddog-gov.com/dashboard/52g-hyg-wcj/vagov-identity-monitor-dashboard?fromUser=false&index=*&refresh_mode=paused&from_ts=1737125001775&to_ts=1737139401775&live=false&tile_focus=3815395182095420)
