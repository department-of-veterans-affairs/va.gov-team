# Benefits Representative Facing Tools ADR for Building Accredited Representative Facing (ARF) Tools on VA.gov Platform

## Status

Proposed

## Context

The ARF team faced the challenge of selecting an appropriate platform for building the accredited representative facing site. After gaining more familiarity with product requirements and existing technology, the decision was made to iterate on the site using the VA.gov platform, including vets-website and vets-api. This decision was influenced by the need for a robust platform that could support various Accredited Representative user groups without compromising ARF user experience

## Decision

The decision to build the accredited representative facing site on the VA.gov platform was made based on several factors. This includes the platform's ability to meet authentication needs, reuse of VA.gov forms, presentation of a distinct site, and leveraging VA.gov domain modeling and associated service dependencies. **The decision was also influenced by OCTO's past position on expanding the user groups on VA.gov, the downsides of using the VA.gov stack, and the need to explore other architectural options.**

## Consequences

Building on the VA.gov platform simplifies certain aspects, like authentication and reuse of forms. However, it introduces challenges such as the complexity of the VA.gov codebase, the necessity to adhere to existing processes and collaboration cycles, and the potential need to adjust veterans-api code paths to accommodate non-veteran users. The decision facilitates the efficient deployment of the core solution and enables the team to learn from any shortcomings, but also requires careful consideration of future expansions and potential integration with other platforms or services.
