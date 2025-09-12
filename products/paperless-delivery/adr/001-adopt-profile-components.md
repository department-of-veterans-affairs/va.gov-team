# Adopt existing Profile components
This ADR was created during September 2025 by the VA-IIR contractor product team (a.k.a. "VA Iterate, Innovate, and Run Product Team"). It involves decisions made to provide a consistent UX/UI, faster delivery, reduced maintenance and alignment with platform patterns.

## Context
The Profile section of VA.gov uses reusable UI components that allow a user to add or update their contact email address. These components are mature and used in production. We need to ship quickly while keeping the experience consistent with the rest of Profile as it relates to adding or updating contact email address.

## Decision
Solutions were evaluated based on these criteria:
- Provide a consistent UX/UI
- Faster delivery
- Reduced maintenance
- Alignment with platform patterns

Leverage existing components used throughout the Profile section of VA.gov

### Alternatives Considered
- Create our own components

## Status
We are leveraging the existing components used throughout the Profile section of VA.gov

## Consequences
- **Positive**
  - Consistent UX/UI within Profile
  - Significant development time saved
  - External owner provides ongoing maintenance
- **Negative**
  - We don’t own the components
  - Changes require external owner approval and coordination
  - Changes may affect all other consumers
  - UX design files could become outdated
