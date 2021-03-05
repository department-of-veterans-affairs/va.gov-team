# Profile Overview

Last Updated March 5, 2021

## POCs
- GitHub Label: Profile
- Slack channel: [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp); [#va-profile](https://dsva.slack.com/channels/va-profile)
- Keywords
     - Profile
     - Profile 2.0
     - Contact information
     - Direct deposit
     - VA Profile (formerly Vet360)
     
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DSVA Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Liz Lantz |Designer| liz.lantz@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie | FE Engineer| shallie@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |

---

### Table of Contents

# Executive Summary 
- [Overview](#overview)
- [Products/Projects](#productsprojects)

# Implementation Information
- [Status](#status)
- [Solution Narrative](#solution-narrative)
- [How to Access and Test](#how-to-access-and-test)
- [Error Handling](#error-handling)
- [Service Level Objective](#service-level-objective)
- [API Calls and Dependent Systems](#api-calls-and-dependent-systems)
- [Design](#design)
- [Screenshots](#screenshots)

---
 
# Executive Summary

## Overview

The VA.gov profile (https://www.va.gov/profile) aims to answer the question — "What does the VA know about me?"

Currently, the VA.gov profile houses people's:

- Personal and contact information
- Military information
- Direct deposit information (comp & pen only; edu pending)
- Account security
- Connected apps

With the [2020 Profile 2.0 redesign](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/README.md), the profile will also house "account" information and "Connected apps"

## Products/Projects

The profile is a section of VA.gov that houses multiple products/features. Below is a list of different profile-related projects/products that we've worked on. Please use these outlines to get a sense for the individual details for each effort, including OKRs & KPIs:

|Product/Project| Outline|
|----|----|
|2018 MVP| [2018 MVP outline](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Profile/Readme.md)|
|Contact information| [Contact information outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/README.md)|
|Direct deposit | [Direct deposit outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/README.md)|
|Address validation| [Address validation outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/address-validation/README.md)|
|Combine profile and account (Profile 2.0)| [Profile 2.0 outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/README.md)|
Connected apps | [Connected apps outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/connected-apps-data/README.md)

# Implementation Info

## Status

As of June 2020, we are currently implementing the profile 2.0 redesign.

## Solution Narrative

- 2016/17 — Prototypical "account" page on Vets.gov.
- Spring 2018 - Original EMIS profile launched to Vets.gov.
- Summer 2018 — Profile backend transitioned to VA Profile (then- Vet360).
- 2019 — Direct deposit added to the profile.
- 2019/2020 – Address validation added to the Mailing and Home address fields.
- 2020 - Profile 2.0 redesign (launched Fall 2020).

## How to Access and Test

- Login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) on https://staging.va.gov
- Visit https://staging.va.gov/profile/

## Error Handling

- [List of VA Profile (Vet360) error codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/contact-information/Profile%20Error%20Codes.md)

## Service Level Objective

## API Calls and Dependent Systems

- Contact information comes from VA Profile.
- Direct deposit for comp & pen information comes from EVSS.
- Direct deposit for edu information comes from BGS.
- Personal information comes from MPI.
- Military information comes from eMIS.

## On Call Support

#vsp-platform-support and [#vsa-authd-exp](https://dsva.slack.com/channels/vsa-authd-exp) slack channels

## Design 

- [2018 designs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/profile-V1/design)
- [2020 Profile 2.0 designs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/Combine%20Profile%20and%20Account/Design)
