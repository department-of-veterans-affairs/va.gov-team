# IA feedback

This is  information architecture research for our internal team documentation hosted on Github. The output will be an index of Identity team-owned components, applications, integrations, and services.

## Overview

This is a draft information architecture (IA) for an index page of all the components, applications, integrations, and services that the Identity team has previously shipped and currently maintains. These structures include items from the card sort exercise, and additional items team members called out as “missing” in open response questions.

[Link to full findings report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Research/2025-07%20team%20documentation%20IA/identity-team-documentation-index.pdf)

A key finding is that our team supports platform-wide components **alongside** standalone services and strategic initiatives. These 3 structures present how we might evolve our current mental model of “frontend” and “backend” to clarify how we support the Veteran experience through everything we work on.

Each IA is illustrated with a “truncated structure” to show you how items are organized from a high level, and an “expanded structure” to illustrate where each item is situated within the IA.

- **Structure 1:** reflects our team’s existing language and mental models
- **Structure 2:** attempts to more clearly delineate between platform-wide components and downstream initiatives
- **Structure 3:** separates Veteran-facing platform-wide components from our broader VA.gov platform service offerings

# Structure 1

## Notes about this structure

- Aligns to our team’s mental models
- Adds a starting point for external teams

### Truncated structure

- Sign in
    - Frontend
    - Backend services
    - Edge cases
- Backend integrations
- Onboarding for new VA.gov applications, services, and integrations

### Expanded structure

- Sign in
    - Frontend
        - Sign-in modal
        - Unified Sign-in Page (USiP)
        - Terms of use
        - Sign-in CTAs
        - Verify CTAs
        - Verify page
        - Maintenance and downtime banners
        - Sign-in errors
    - Backend services
        - VA.gov authentication (SiS)
        - STS integrations
        - UserModel
        - Account creation API
        - Security policies and compliance
        - Tokens and sessions
        - Service account endpoints
        - My HealtheVet account creation API
    - Edge cases
        - Interstitial (secure sign-in transition)
        - My HealtheVet exemption page
        - Production test accounts
- Backend integrations
    - Login.gov integration
    - ID.me integration
    - DS Logon integration
    - Master Person Index (MPI) integration
    - SSOe (Single Sign-on External) integration
- New VA.gov applications, services, and integrations

# Structure 2

## Notes about this structure

- Leverages language from platform documentation
- Uses “Signing in on VA.gov” to convey platform-wide components
- Clarifies our ownership of “Frontend platform components” and “Platform authentication”
- Separates “Other sign-in flows” from “Signing in on [VA.gov](http://va.gov/)”

### Truncated index page

- Signing in on VA.gov
    - Frontend platform components
    - Platform authentication
        - Backend infrastructure
        - External integrations
- Other sign-in flows
- Onboarding for new applications, services, and integrations

### Expanded index page

- Signing in on VA.gov
    - Frontend platform components
        - Sign-in modal
        - Sign-in CTAs
        - Verify page
        - Verify CTAs
        - Terms of use
        - Session timeout
        - Maintenance banners
        - Sign-in errors
    - Platform authentication
        - Backend infrastructure
            - VA.gov authentication (SiS)
            - STS integrations
            - UserModel
            - Account creation API
            - Security policies and compliance
            - Tokens and sessions
            - Service account endpoints
            - My HealtheVet account creation API
        - External integrations
            - Login.gov integration
            - ID.me integration
            - DS Logon integration
            - Master Person Index (MPI) integration
            - SSOe (Single Sign-on External) integration
- Other sign-in flows
    - Interstitial (secure sign-in transition)
    - My HealtheVet exemption page
    - Production test accounts
- Onboarding for new VA.gov applications, services, and integrations

# Structure 3 🏆

## Notes about this structure

- Elevates onboarding for external teams building with us
- Separates “Signing in…” and “Platform authentication” so they’re on an equal hierarchy
- Adds “secure sign-in transition” category for edge cases related to this initiative
- Strategically elevates some of our backend service offerings
- Lists “Unified Sign-in Page (USiP)” as an “external integration” to align with the external audience for this service

### Truncated index page (Categories)

- Onboarding for new VA.gov applications, services, and integrations
- Signing in on VA.gov
    - Frontend platform components
    - Secure sign-in transition
- Platform authentication
    - Backend infrastructure
    - STS integrations
    - VA.gov authentication (SiS)
    - External integrations

### Expanded index page (Categories + Topics)

- Onboarding for new VA.gov applications, services, and integrations
- Signing in on VA.gov
    - Frontend platform components
        - Sign-in modal
        - Sign-in CTAs
        - Verify page
        - Verify CTAs
        - Terms of use
        - Session timeout
        - Maintenance banners
        - Sign-in errors
    - Secure sign-in transition
        - Interstitial (secure sign-in transition)
        - My HealtheVet exemption page
        - Production test accounts
- Platform authentication
    - Backend infrastructure
        - Account creation API
        - Tokens and sessions
        - Service account endpoints
        - My HealtheVet account creation API
        - UserModel
        - Security policies and compliance
    - STS integrations
    - VA.gov authentication (SiS)
    - External integrations
        - Login.gov integration
        - ID.me integration
        - DS Logon integration
        - Master Person Index (MPI) integration
        - SSOe (Single Sign-on External) integration
        - Unified Sign-in Page (USiP)
