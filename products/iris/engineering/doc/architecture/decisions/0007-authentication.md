# 7. Authentication Mechanism 

Date: 2021-01-11

## Status

Accepted

## Context


Current state of authentication
- GI Bill - required; create non-ID proofed Oracle account to ask a question, view inquiry history for both school admins, and the GI Bill recipients
- IRIS Contact US form - not required 

We need authentication on our new IRIS form because:
1. Some business lines require authentication so that the contact center agents have sufficient information to be able to identify the user, (MPI/MVI look up) and quickly resolve the inquiry
2. Allows prefilling certain fields (Contact information, MPI/ICN, military service start/end dates) to stream line the user's experience
3. Would facilitate secure messaging for the GI Bill use case


VA.gov has an existing sign in system with three SSO options ID.me, MHV, and DSLogon. There is an existing integration with VA profiles and other VA systems so we can get contact information and military service information.
 
- Epic on Zenhub: https://github.com/department-of-veterans-affairs/orchid/issues/39 
 
## Decision

Use existing authentication mechanism on VA.gov. 

## Consequences

- We can leverage the SSO options out of the box 
- Adhere to the modernized, unified Veteran experience [standard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf)
- There are various teams also looking to improve overall Veteran's adoption of usage of sign-in and to encourage successful form submission; ID.Me team can share analytics reports of authentication drop off rate in the DSVA slack channel of #vfs-analytics
- Do consider the additional ID proofing that a Contact Center agent may have to do for LOA1 (level of assurance 1 means non-ID proofed) account inquiry submissions