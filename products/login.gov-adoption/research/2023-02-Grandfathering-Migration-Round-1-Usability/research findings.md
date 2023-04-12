# Grandfathering Migration Usability (Round 1) Research Findings

Office of the CTO - Digital Experience (OCTO-DE), Login.gov Adoption Team

Date: 04/12/2023

Tyler Gindraux [tyler@bluetiger.digital]

[Research readout deck](link)

**Jump to:**

[Hypotheses and conclusions](#hypotheses-and-conclusions)

[Key findings](#key-findings)

[Recommendations](#recommendations)

[Who we talked to](#who-we-talked-to)

[Further research needed](#further-research-needed)

<br>

## Background

There are currently multiple ways to sign in and access VA services. These sign in options don't all meet required security standards and also create user frustration and confusion. We need to migrate Veterans from legacy credential service providers (DS Logon and My HealtheVet) to Login.gov. During [discovery research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research/discovery/2022-10-Login.gov-Adoption-Discovery-Research), we defined different pathways for the migration.

This initiative focuses on one migration pathway: moving select DS Logon users to Login.gov without the need to reverify their identities through “grandfathering” or deferred identity proofing. In this case, Veterans will receive an IAL1 Login.gov account which works “as normal” for VA services, but can’t be used by other government services until it’s upgraded to IAL2. In order to upgrade to an IAL2 Login.gov account, Veterans will have the option of identity proofing at a later date. The [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/products/legacy%20CSP%20migrations) has more details on this product.

We will run a few rounds of testing to review the effectiveness and usability of this grandfathering user flow. Following Round 1, we will include follow-up testing to address any issues that surface. We will also include at least one round of accessibility testing with blind and low vision users. The [research overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/login.gov-adoption/research) has more details on what is upcoming.

### OCTO Objectives 

* Veterans can manage their health services online.
* Veterans and their families trust the security accuracy and relevancy of VA.gov.

### How this research maps to the Veteran journey

Signing to securely access VA services can happen at any stage in the [Veteran’s journey](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/va-product-journey-maps/Veteran%20Journey%20Map.pdf). With this migration pathway, however, we're particularly focused on the stages that occur later on in the journey. Other migration initiatives will focus on reaching Veterans who are just getting out and starting up, aiming to ensure Veterans proactively set up Login.gov (instead of another credential service provider) from the start.

This initiative is focused on Veterans who have set up a DS Logon account already. In order for Veterans to not lose access to their information and benefits when DS Logon is sunset by the VA, we need to ensure there is a clear and technically-feasible pathway for their migration.

These stages include:
* Taking care of myself
* Putting down roots
* Retiring
* Aging

### Research this builds on

* [2022-10-Research-LoginGovFieldResearch #185](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/185)
* [2022-07 MHV transition to Login.gov as a single sign-on #157](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/157)
* [2022-07 Login Self-Service Tool #156](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/156)
* [2022-03 Sign-In Accessibility #93](https://github.com/department-of-veterans-affairs/va.gov-research-repository/issues/93)

## Goals and questions

## Research goals

The key goals of this study are to:

* Review whether Veterans can migrate their accounts from DS Logon to Login.gov (IAL1) without issue.
* Review whether Veterans understand the type of account they've set up and its limitations.
* Review whether Veterans know where to get help or what they will do if they encounter an issue during or after account setup.

## Research questions

Review whether Veterans can migrate their accounts from DS Logon to Login.gov (IAL1) without issue:

* Are Veterans motivated to set up a Login.gov account when initially prompted, why or why not?
* Are Veterans more or less motivated when prompted via email or via a (surprise) modal after sign-in?
* How confident do Veterans feel about their ability to set up a Login.gov account when initially prompted?
* Can Veterans successfully initiate the account setup flow?
* Can Veterans successfully create their account, including verifying their email address and setting up multi-factor authentication?
* Can Veterans successfully return back to the VA after setting up their account?
* Do Veterans understand they are now signed into Login.gov?
* Do Veterans have concerns about their data or information now that they use a different sign in method?
* Do Veterans have concerns about their ability to continue accessing VA services, now that they have a new login method?

Review whether Veterans understand what type of account they have set up with Login.gov and its limitations:

* Do Veterans understand why they're being asked to set up a Login.gov account?
* Do Veterans understand the type of Login.gov account they are being asked to set up?
* Do Veterans understand that they should now stop using DS Logon and use Login.gov to sign in moving forward?
* Are Veterans motivated to upgrade to an IAL2 Login.gov account at a later date, why or why not?

Review whether Veterans know where to get help or what they will do if they encounter an issue during or after account setup.

* What will Veterans do first if they encounter an issue?
* Do Veterans know where or how to get help if they encounter an issue?

## Methodology
