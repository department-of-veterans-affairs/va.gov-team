# Contact Information Product Outline

## POCs
- GitHub Label: Profile
- Slack channel: #vsa-authd-exp; #va-profile
- Keywords
     - Contact information
     - VA Profile (formerly Vet360)
     
|Name|Role|Email|
|----|----|-----|
|Samara Strauss |DSVA Lead| samara.strauss@va.gov |
|Matt Shea |Product Manager| matt.shea@adhocteam.us |
|Tressa Furner |Designer| tressa.furner@adhocteam.us |
|Erik Hansen | FE Engineer| erik@adhocteam.us |
|Sandra Hallie | FE Engineer| shallie@governmentcio.com |
|Lihan Li | BE Engineer | lihan@adhocteam.us |
|Tze-chiu Lei | QA Analyst | tze@adhocteam.us |
|Jen Strickland | 508/Accessibility support| jennifer.strickland@adhocteam.us |
|Mike Richard | VA Profile contact | michael.richard2@va.gov |
|Barry Wilbanks|  VA Profile contact | bwilbanks@meetveracity.com |
|Christine Donovan| VA Profile contact/ OIT PM |  Christine.Donovan@va.gov |

---

### Table of Contents

# Executive Summary 
- [User Problem Statement](#user-problem-statement)
- [Solution Goals](#solution-goals)
- [Hypothesis](#hypothesis)
- [Requirements](#requirements)
- [Constraints](#constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Decisions](#decisions)
- [The Plan](#the-plan)
- [OKRs & KPIs](#okrs--kpis)

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

The contact information section of the VA.gov profile allows users to view and update their:

- Mailing address
- Home address
- Home phone
- Mobile phone
- Work phone
- Fax number
- Email address (for contact, not sign in)

The backend for this is powered by VA Profile (formerly Vet360), which is integrated with a handful of systems at the VA. This means that when a user updates their information in the VA.gov profile, it updates it multiple places at the VA so that veterans don't have many disparate addresses on file. Our integration with VA Profile launched in summer 2018.

## User Problem Statement

As a veteran at the VA, I want to make sure the VA has the right contact information for me so I can receive my benefits that come via mail, things like prescriptions and medical supplies. I also want to make sure the VA has the right contact information for me so I can receive important correspondence related to my benefits.

## Solution Goals

As the VA, we want to:

- Have the most up-to-date contact information for veterans, so we can make sure important benefit information gets to the right place.

### User Goals

As a user, I want to be able to:

- View what contact information the VA has on file for me.
- Update my contact information as it changes.
- Update my contact information in one place and have it update everywhere at the VA.

## Hypothesis

Unfortunately, we don't have any documentation on this from the original 2018 work.

## Requirements 

As of June 2020:

- Only show the profile to users who have verified their identity (this includes contact information).
- Allow users to view address, phone, and email information.
- Allow users to update this information from the profile.
- Allow users to delete all elements of contact information **except** the mailing address.

## Constraints

Right now, VA Profile only integrates with some systems at the VA. Veterans still will have to update their contact info in multiple places if they have certain benefits. We outline this in the profile.

## Discovery Takeaways



## OKRs & KPIs

### [GA dashboard for ]()

---

# Implementation Info

## Status

## Solution Narrative

## How to Access and Test

- Login with [vets.gov.user+130@gmail.com](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv#L132) on https://staging.va.gov
- Visit https://staging.va.gov/profile/
- Edit the "Mailing Address" or "Home address" under "Contact information"

## Error Handling

## Service Level Objective

## API Calls and Dependent Systems

## On Call Support

#vsp-platform-support and #vsa-authd-exp slack channels

## Design 

### Screenshots
