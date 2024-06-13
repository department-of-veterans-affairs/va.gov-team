# Secure Sign in Transition (formerly Login.gov Adoption) Product Outline 

### Table of contents
- [Overview](#overview)
- [Priorities](#priorities)
- [Product outlines](#initiatives)
- [Potential MVP features and Epics](#potential-mvp-features-and-epics)
- [Requirements and constraints](#requirements-and-constraints)  
- [Value propositions](#value-propositions) 
- [KPIs](#kpis) 

## Overview
Mission: The Secure Sign in Transition Team (formerly Login.gov Adoption) aims to streamline the sign-in process on VA.gov by offering Login.gov and ID.me as a preferred credential options, while phasing out duplicative and non-compliant legacy credentials, expanding access channels, and enhancing pathways for Veterans to verify their identity in person. 

## Priorities
Top-level strategic priorities:
1. Establish multi-channel campaign to increase proactive and self guided Login.gov and ID.me adoption
2. Providing support with a human touch to facilitate the migration (in-person proofing capabilities at VA Medical Centers and Veteran Health Resource Centers).
3. Enabling data insights related to credential usage to inform campaign strategy in realt time.
4. Creation and adoption of national verification system across the VA service ecosystem through virtual and in person support channels.

For more on our product vision and mission, see the [team charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/team-charter.md#product-vision). 

## Initiatives

## [#1 - Proactive login.gov adoption](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/login.gov)
## [#2 - In-person proofing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/in-person%20support/product-brief.md)

### [Pro-active login.gov adoption](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/login.gov)
The Secure Sign in Transition team aims to consolidate the pathways to sign in to VA.gov and provide Login.gov and ID.me as credential options while eliminating duplicative and non-compliant legacy credentials. Veterans will be informed of the Login.gov and ID.me credential options as well as educated through multi-channel communication on how to create a Login.gov or ID.me credential. The consolidation of login credential options ensures a more secure process for Veterans, as well as reduces roadblocks and pain points for Veterans trying to access their benefits and services. 

### Vision
- One sign-on to access all products and services. Veteran choice of “public” or “private” credential option for VA.gov (Login.gov or ID.me).
- All users will be migrated from legacy MHV and DS Logon credentials.
- Veteran users who can't identity proof online will eventually be able to visit VAMCs/VHRCs to do so.
- Veteran users who are already visiting VAMCs regularly will be guided to create a Login.gov or ID.me account and proof in person with coordinators.
- Military personnel will be able to proof in person as part of the TAP curriculum and will have a proofed Login.gov or ID.me account before they transition off active duty.
### Desired user outcomes
- A Veteran user will have more seamless and secure access to not only VA services, but other government agencies that use Login.gov or ID.me. Their accounts and experience will be more secure and satisfying.
- A Veteran user will be able to receive in-person help for signing up for Login.gov/ID.me and identity proofing. This will ease the transition from using the legacy credentials and maintain their access to services.

### User problem statements
- As a Veteran, I need only one sign-on to access all VA products and services, so that I can have less complication
- As a Veteran, I need to be able to receive in-person help for signing up for Login.gov and identity proofing, so I can obtain access easier.
- As a new Veteran, I need a modern, easy-to-use credential before leaving active duty, so I can access all my benefits.
- As a Veteran, I need to be able to give others differing levels of access to my account, so I can empower them to provide greater care and support to me.
- As a Veteran, I need Multi-Factor Authentication setup so I can access VA.gov. 
- As a Veteran, I need to understand Login.gov and ID.me and their benefits, so that I know why I should set up Login.gov/ID.me as my primary or additional credential.
- As a Veteran, I need to understand how to set up Login.gov or ID.me, so that I can try and set up Login.gov/ID.me account on my own terms
- As a Veteran, I need to know where to go for help if I face an issue while setting up Login.gov/ID.me, so that I can finish setting up my account.


### Potential MVP features and epics
- Veterans visiting VAMCs/VHRCs will be able to complete sign up for a Login.gov account.
- MHV coordinators or VHIC Associates will be able to verify a Veteran’s identity through an in-person visit or remotely through video.
- Service members going through TAP can sign up for a Login.gov/ID.me account and proof in-person as part of the process.
- Outreach to existing users that they’ll need to choose a new credential.
##



### Desired user outcomes
- Eligible users should be able to easily move their verified identity from DS Logon to Login.gov or ID.me.
### User problem statements
- As a VA.gov user I want to use modern, secure Credential Service Providers (CSPs) so that I can ensure my information is safe when accessing VA services.
###
## Requirements and Constraints 

### Requirements

- Our work will be guided by our [vision, mission, and north star objectives](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/team-charter.md#product-vision).
- Our work will put Veterans first.
- Our work will consider the full Veteran experience — from logged out to logged in, from online to offline.
- When we know information about Veterans, we'll elevate it and present it to them in a way that helps them understand their experience and complete tasks.
- We will work to grow the design system so it better accomodates authenticated tools, flows, and use cases.

### Constraints

#### Data
- Data in the VA is complicated and all over the place. Different information is stored across hundreds of databases and is often duplicative or conflicting.
- We don’t have access to all user account data, and we may not be able to get it because it the information isn't digital or is in a external database that we do not have access to.


#### Design

- TBD 

## Value Propositions  

Creating a cohesive logged-in experience will:

- Help Veterans complete tasks more quickly.
- Increase Veteran satisfaction with the VA.
- Reduce the need for multiple touchpoints (other VA websites; VA call centers).
- Help Veterans get benefits more quickly.

## KPIs 

- TBD
- Increase completion percentage of the sign in flow.
- We can measure we have moved in the right direction by measuring logins on VA.gov, Success rate for MFA, CSP usage, and Login.gov adoption counts.






## Archived 
### [The NVURending story](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/login.gov-adoption/products/nvur)  
Currently there is not a unified definition for each of the non-Veteran customer types at the VA. Each administration — VHA, VBA, and NCA — has their own unique definitions and nuances, which increases the complexity of implementing non-Veteran user roles on VA.gov. Delegates, beneficiaries, caregivers, and dependents are a few terms used interchangeably that encompass many different user types relying on many different products and services across VA. VA.gov will need to transition from exclusively serving Veterans to serving a wider audience, such as caregivers, spouses, partners, POAs, VSOs, etc.
### Vision
- Non-Veteran users will be able to sign-in and access the products and services they need for their specific roles.
### Desired user outcomes
- For Non-Veteran users, they will be provided with access to Vets' shared account data via their own accounts, which will allow them to provide superior care and support.
- Veterans can login and manage varying access roles for trusted associates and knowledgable buddies.
### User problem statements
- As a Veteran, I want to be able to give others differing levels of access to my account, so I can empower them to provide greater care and support to me.
###

### [Deferred identity proofing](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/products/deferred-identity-proofing)
As we continue to evolve the VA.gov ecosystem, legacy Credential Service Providers (CSP's) do not meet customer experience and security objectives prioritized by the administration in the EO on improving customer experience. We need to migrate users to newer CSP's that do meet these objectives. In this specific instance, we are working to move select DS Logon users to Login.gov without the need to reverify their identities.

Deferred identity proofing lets Veterans migrate without requiring them to re-proof right away.
Through this approach, Veterans with Premium DS Logon or Premium My HealtheVet accounts would set up a limited access (IAL1 compliant) Login.gov account. Limited access means Veterans can used their Login.gov account to access VA services.
Veterans will need to upgrade (IAL2) by identity proofing in order to use their Login.gov account to access other government services.
The limited use of IAL1 accounts across agencies will provide incentive to upgrade to IAL2. Or, we could set a deadline for when accounts need to be proofed by.

