# 7. Authentication Mechanism 

Date: 2021-01-11

## Status

Accepted

## Context

We need authentication on our form because:
1. Some business lines require authentication so that the contact center agents have the information we need
2. Allows prefilling certain fields to stream line the user's experience
3. Would facilitate secure messaging

VA.gov has an existing sign in system with three SSO options ID.me, MHV, and DSLogon. There is an existing integration with va profiles and other VA systems so we can get contact information and military service information.
 
- Epic on Zenhub: https://github.com/department-of-veterans-affairs/orchid/issues/39 
 
## Decision

Use existing authentication mechanism on VA.gov

## Consequences

- We can leverage the SSO options out of the box 

