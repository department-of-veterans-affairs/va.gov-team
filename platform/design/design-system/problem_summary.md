# Design system problem summary

# Executive Summary
- [User Problem Statement](#user-problem-statement)
- [Research and Documentation](#research-and-documentation)
- [Solution Goals](#solution-goals)
- [Assumptions](#assumptions)
- [Requirements and Constraints](#requirements-and-constraints)
- [Discovery Takeaways](#discovery-takeaways)
- [Solution Approach](#solution-approach)
- [Value Propositions](#value-propositions)
- [KPIs](#kpis)

---

## User Problem Statement

VA.gov is made up of a few separate systems (static content, healthcare applications, forms, etc.) that all have to look like and function as a single entity. When we make front-end, user-facing changes to one part of the site, that needs to carry over to every corner and application we have. When we design new products or components, it's important for the entire design and engineering team to understand what visual components are available, and how those should be coded. Prior to the design system, we didn't have a single source of truth for either the visuals or the code, and this introduces inconsistencies and conflicts. We then spent a lot of time and effort fixing those problems. Our existing codebase and documentation did not satisfy the need for a single source of truth.

## Resources and Documentation

- [Discovery and Research](research.md)
- Other resources: 
  1. [On Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
  2. [Fractal documentation](http://fractal.build/guide)
  3. [Rizzo system](http://ianfeather.co.uk/a-maintainable-style-guide/) - Lonely Planet's design system/API
  4. [USWDS Fractal + Federalist](https://standards.usa.gov/whats-new/updates/2017/04/26/fractal-federalist/)
  5. [Caseflow](http://dsva-appeals-certification-demo-1715715888.us-gov-west-1.elb.amazonaws.com/styleguide)
  6. [Fractal API](http://fractal.build/api)
  7. [Fractal API + prod](http://fractal.build/guide/integration/production)
  8. [GDS' Design System](https://gds.blog.gov.uk/2017/10/30/building-the-gov-uk-design-system/)
- Product specs
- Design
- Roadmap
- ATO documentation

## Solution Goals

### User Goals

* Reference a single location to understand a visual pattern, including its use cases and the code that drives it
* Update and modify patterns and components as needs evolve on Vets.gov
* Be confident that the code or visual that they're looking at is the most current version in production
* Understand any relevant information that has driven the design and implementation of a pattern

### Business Goals

* Reduce visual inconsistencies across Vets.gov
* Facilitate 508 testing and compliance via standardized code
* Increase efficiency in design and build of new components
* Facilitate hardening of Vets.gov
* Facilitate onboarding on new teammates

## Assumptions

* Designers, front-end developers, and writers will use the design system as their single technical reference for existing components.
* The design system will continue to be updated and maintained as a matter of course.

## Requirements and Constraints

* The design system should be able to communicate with the Vets.gov code base. That is, make a change in the system and it will perpetuate through to the website.
* The system will fail without support from the entire team. Maintenance should not fall to a single individual or even a single sprint team, but should be the responsibility of all of its users.
* The sheer size of Vets.gov and its pattern library requires a lot of up-front work to get the system operational.
* Connecting the design system and Sketch (the design team's primary mockup tool) may not yet be possible.

## Discovery Takeaways

* It is technically possible to use the design system as the driver for Vets.gov. A npm module demonstrating this has already been released.
* Achieving production-readiness will take a concerted, front-loaded effort, ideally a focused one.
* The tool of choice, an open-source software solution called Fractal, can support our goals for this system.
* There is a demonstrable need for a single reference source, particularly for visual patterns.
* There is agreement across the design, development, and research teams that a design system is a good solution for resolving existing visual inconsistencies and problems, and any that will develop as we continue to build.

## Solution Approach

The MVP for the design system (affectionately referred to as Jean Pants) was a proof of concept demonstrating:
- our ability to migrate React components from the existing Vets.gov codebase into a Fractal instance
- our ability to connect Jean Pants to Vets.gov via an npm module
- our ability to document process, context, and other artifacts of code and design inline with the visual patterns

The MVP demonstrated all of the above and is still in active development. It's available here: https://department-of-veterans-affairs.github.io/design-system
This URL is updated routinely as we move past MVP by bringing in all our common React components and improving the UI around Jean Pants.

## Value Propositions

- increase the efficiency of Vets.gov design and development by providing a single source of truth for existing patterns
- increase the efficiency of Vets.gov design and development by providing a consistent starting point for new patterns
- expose the Vets.gov codebase and pattern library to other VA entities for their use

## KPIs
