# Project outline: Unified Sign-in Page - Legacy Logins 

**Last updated: Aug 14, 2024**

## Table of Contents

- [POCs](#pocs)
- [Overview](#overview)
- [User Problem Statements](#user-problem-statements)
- [User Outcomes](#user-outcomes)
- [Business Outcomes](#business-outcomes)
- [Measuring Success](#measuring-success)
- [Solution Approach](#solution-approach)
- [Backend](#backend)
- [Frontend](#frontend)
- [Design](#design)

## POCs

### OCTO teams

This work involves the following teams:

- Identity
- CAIA
- Other VA.gov content/tool owners
- Design system team

## Overview
With the looming sunsetting of MHV and DSLogon it is incumbent that we use the Unified Sign-in Page to make the transition for Veterans who use those credentials as simply as possible.  Strategies for this include:

- De-emphazising the legacy credentials on the Unified Sign-in Page.
- Messaging to Veterans who use those credentials that they will need to transition to either Login.gov and/or ID.me prior to the sunsetting of the credential(s) they currently use.
- Explaining the processes for signing up for ID.me or Login.gov.

### Product links

- [Universal sign-in page](https://www.va.gov/sign-in/?oauth=false)
- [Sign-in modal](https://www.va.gov/?next=loginModal)

## User problem statements

- As a Veteran who currently uses MHV or DSlogon to sign-in to VA.gov, I would like to understand when using MHV & DSlogon logins will no longer be used so that I might switch to ID.me or Login.gov and continue to access my benefits.
- As a Veteran who currently uses MHV or DSlogon to login to VA.gov, I would like to understand how to use either ID.me or Login.gov in order to continue to access my benefits.
- As a Veteran who uses DSLogon or MyHealtheVet to sign in, I want to be reinforced by the UI of the sign in page and modal that legacy credentials are going away and that I need to switch to Login.gov or ID.me in order to sign in to VA.gov.

## User outcomes

### Desired User Outcomes
* Veterans understand the situation and switch en massse to either ID.me or Login.gov 



### Undesired User Outcomes
* Veterans do not switch over to either ID.me or Login.gov and cannot not access their benefits as usual.

## Business outcomes

### Desired Business Outcomes
* A smooth transition from four CSP to two CSP.
* Deadlines for MHV and DSLogon sunsets pass without incident.


### Undesired Business Outcomes
* Chaos and disorder at both the MHV and DSLogon deadlines.
* Call center swamped with outraged Vets who suddenly can't sign-in.



## Measuring success
* The number of users who have a MHV credential and neither ID.me or Login.gov is reduced to less than 500K by Oct 31, 2024 and to less than 100K by Jan 31, 2025
   * Baseline: 1.1M users in January 2024; 900K users in July 2024.
* Sign-ins to VA web/mobile properties with the MHC credential are reduced to less than 1M per month by Oct 31, 2024 and to less than 200K per month by Jan 31, 2025
   * Baseline: 1.53M July '24 logins to VA.gov and the VA mobile app.
* Retire the MHV in the targeted timeframe (last day available is January 31
* Call center calls (metric TBD)
* VSignals (metric TBD)


## Solution approach
* Progressively urgent communications to let Veterans know what is happening.
* UX changes to progressively de-emphasize the sunsetting credentials.
* Timeline which accelerates nudging Veterans to move away from MHV and DSLogon as their sunset dates approach.

## Key dates

- My HealtheVet option will be removed after January 31, 2025
- DS Logon option will be removed after September 30, 2025
- Both should be less prominent in the UI by Sept/Oct to help encourage folks to switch


## Backend
## Frontend
## Design

- [Figma design for sign in page changes](https://www.figma.com/design/skWgD0gHYGlKSoLdH097OX/USiP-and-sign-in-modal---deemphasize-DSL%2FMHV?m=auto&t=goA3iDADRZdnacsU-6), currently includes brain storming of possible design flows (Aug 2024)

- [Figma design for interstitial](https://www.figma.com/design/skWgD0gHYGlKSoLdH097OX/USiP-and-sign-in-modal---deemphasize-DSL%2FMHV?node-id=74-62823&t=vsDxsHI2L0hFmw0R-0)
