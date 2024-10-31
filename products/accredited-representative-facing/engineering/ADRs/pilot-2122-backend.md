# Benefits Accredited Representative Facing (ARF) Tools ADR for Simplied Pilot Iteration of 21-22 Backend in `vets-api`

## Status

`Proposed`

## Context

The ART team has been tasked with beginning a 21-22 pilot by February. With a team of mostly new developers and the holidays looming, we're best served cutting technical complexity in the pilot wherever we can. We believe that the POA request backend technical design can be simplified for the sake of the pilot, and then a more complex solution that makes more BGS/Lighthouse calls can be potentially implemented after we launch the pilot.

## Decision

For the purposes of efficient pilot implementation, we'll first get an end-to-end 21-22 solution working where POA request information is stored in the VA.gov database, rather than making Lighthouse calls to persist that information elsewhere.

- When a Veteran/VA.gov user creates a new POA request, the request will be saved in the VA.gov database, but no Lighthouse API calls will be made.
- When an ARP user views POA requests, the VA.gov database will be queried for open requests, but no Lighthouse API calls will be made.
- When an ARP user accepts or declines a POA request, a Lighthouse API call will be made to change the POA, using v2 of the Power of Attorney API. The VA.gov database will also be queried and modified to indicate that the POA request is closed.
  - At first, we should implement a fully synchronous solution, where the VA.gov DB POA request is only set to accepted/rejected after the Lighthouse call is completed.
  - If the fully synchronous solution is found to not be adequate, we can push the Lighthouse call to a Sidekiq job. In doing so, we have to be sure to follow No Silent Failures best practices.

## Consequences

Technical complexity will be greatly reduced for the pilot. Error handling and monitoring will be simplified, and we will have more control over UX responsiveness.

We'll separately prioritize and roadmap adding the additional Lighthouse calls originally called for in the technical design. In this ADR, we're not proposing that we won't later add those Lighthouse calls. We're also not proposing a particular timeline for adding those calls. We'll depend on our Product Owner, Engineering Lead, and other VA partners for future decisionmaking and discussion there.
