# Architecture Intent Template

__*** DRAFT *** DRAFT *** DRAFT ***__

The Architecture Intent meeting helps your team build a solution that meets Veteran-facing Service Platform (VSP) engineering standards and lowers the potential for launch-blocking issues later in the development cycle.

## What is the purpose of Architecture Intent meeting?

The Architecture Intent meeting is less a formal presentation and more of a discussion.  It not only provides OCTO-DE and Platform with an early understanding of the product/feature your team wants to build, but is also an opportunity to collaborate and provide feedback on the intended implementation and surface any adjustments needed to meet VSP engineering standards. The focus is on making sure your code meets user needs within the constraints of the platform your building on.

## Preparing for the Architecture Intent meeting

You should write up your Architecture Intent using the template below.The Governance Team will need at least **2 business days** to review your matierials.

## Architecture Intent Template

Your document should be brief and high-level.  One to two pages is appropriate for many changes.  Focus on the high level and link to supporting material where appropriate; this is not a detailed engineering spec.

- Product description
    + Brief overview of motivation for the change
    + Link to product doc or GitHub issue
- UX design description
    + For user-facing changes
    + Link to lo-fi prototype or wireframes
- Frontend changes
    + Identify any significant code changes
    + Describe any product analytics being gathered
- Internal API changes
    + List new or modified APIs in `vets-api`
    + Describe expected call patterns
- External API changes
    + List new or modified APIs for upstream systems
    + Describe expected call patterns
- Background jobs
    + List any required background processing
    + Describe error and dead letter handling
- Data storage
    + Describe new or modified databases, tables or columns
    + Describe indexes and constraints
    + Identify PII and PHI
- Libraries and dependencies
    + List new or updated dependences
- Metrics, logging, observability, alerting
    + Identify key areas to monitor
- Infrastructure and network changes
    + List any changes or additions
- Test plan
    + Describe automated testing
    + Describe required test data and test user accounts
    + Note any manual tests or user acceptance tests
- Rollout plan
    + List scope of any feature flags
    + Identify other teams to coordinate with
    + Describe rollback plan


## How to schedule the Architecture Intent meeting

TODO: use [Design Intent][1] as a template

[1]: https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/design-intent
