# Deferred identity proofing outline
> [!Warning]
> The deferred identity proofing project has been deprioritized due to technical limitations. Last updated around July 2023.
> Additional resources can be found in the [data dictionary](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/discovery/deferred-identity-proofing/data-dictionary.md), [data lineage](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/discovery//deferred-identity-proofing/data-lineage.md), and [usage](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/discovery/deferred-identity-proofing/deferred-identity-proofing-usage.md) documents.

## Overview

 - As a VA.gov user, I want to use modern, secure Credential Service Providers (CSPs) So that I can ensure that my information is safe when accessing VA services.
 - As a Veteran, I need only one sign-on to access all VA products and services, so that I can have less complication.


## Problem Statement
As we continue to evolve the VA.gov ecosystem, legacy Credential Service Providers (CSP's) do not meet customer experience and security objectives prioritized by the administration in the EO on improving customer experience. We need to migrate users to newer CSP's that do meet these objectives. In this specific instance, we are working to move DS Logon users and MyHealtheVet Premium users to Login.gov without the need to reverify their identities.

Deferred identity proofing lets Veterans migrate without requiring them to re-proof right away. Through this approach, Veterans with Premium DS Logon or Premium My HealtheVet accounts would set up a limited access (IAL1 compliant) Login.gov account. Limited access means Veterans can use their Login.gov account to access VA services. Veterans will need to upgrade (IAL2) by identity proofing in order to use their Login.gov account to access other government services. The limited use of IAL1 accounts across agencies will provide an incentive to upgrade to IAL2. Or, we could set a deadline for when accounts need to be proofed by. Additionally, inherited proofing from MHV would enable users to upgrade to IAL2 accounts without the need for reproofing.

There is an opportunity to bind an LOA2 VA credentials to Login.gov IAL1 so it can at least be used within VA without requiring initial additional identity proofing. The end goal is to simplify the migration process for existing users.

## Desired User Outcomes

Eligible users should be able to easily move their verified identity from DS Logon to Login.gov.

## Undesired User Outcomes

Eligible users are unable to easily complete the migration process.

## Desired Business Outcomes

It is a desire that all of eligible DS Logon users have migrated to Login.gov by September 30, 2023

## Undesired Business Outcomes

Eligible users are still utilizing DS Logon as a CSP after September 30, 2023

---
## Measuring Success


### Key Performance Indicators (KPIs)

- **End of Q3 FY2023 (June)**: TBD users have attempted to convert with a success rate of 40% 
- **End of Q4 FY2023 (September)**: TBD users have attempted to convert with a success rate of 40% 

#### Baseline KPI Values
TBD eligible users

### Objectives and Key results (OKRs)
_What are the measurable targets you're aiming for that delivers value for Veterans?_

- Objective: Users understand and are able to complete the migration process
  - Key result: ?% of users are able to convert
  - Key result: By April 2023, half of all eligible DSL users have converted


---
## Assumptions
- *Include indication of which assumption you think is most risky. Your Solution Approach (next section) should describe how you'll validate that assumption w/your initial set of functionality*
- Users will be able to pass phone validation
- Users will understand the need and process for migration


## Solution Approach

- We are building a process for eligible users to easily transition their account from DSL to Login.gov
- In addition, we are working to provide users with information and guidance on both why and how to transition


### Initiatives

https://github.com/department-of-veterans-affairs/va.gov-team/issues/52654

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*
- [Link to Release Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md)

## Launch Dates
- *Target Launch Date*
  - March 1, 2023
- *Actual Launch Date* 
  - tbd
- *What date will you evaluate impact after launch (and when do you expect to have your Impact Review)?*
  - tbd

---

## Solution Narrative
Our solution involves providing guidance to users who utilize DSL as their primary CSP (Credential Service Provider) to access VA services.  This includes notifying them of the change via physical and electronic mail, as well as through modals and other methods on VA.gov.  In addition, we will strive to provide information on why this transition is happening, how to identity proof, and why they should do so. 

### Current Status
We are currently engaged in active research regarding the modal experience for eligible and ineligible veterans.

### Key Decisions

---
   
## Screenshots

### Before

### After

---

#### Communications

<details>

- Team Name: Login.gov Adoption Team
- GitHub Label: login.gov-adoption
- Slack: [#va-identity-product-team](https://dsva.slack.com/archives/C0429DNFN8Y)
- Product POCs: Elizabeth Koch
- Stakeholders: John Rahaghi

</details>

#### Team Members

<details>
 
 - DEPO Lead: 
 - PM: Elizabeth Koch
 - Engineering: Steve Dickson
 - Research/Design: Tyler Gindraux
 
</details>


#### Stakeholders

<details>
 
-GSA/Login.gov
-VSP Identity Team
-eBen
-MHV
 
</details>

