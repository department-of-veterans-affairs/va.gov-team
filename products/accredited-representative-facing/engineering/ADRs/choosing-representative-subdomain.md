# Benefits Accredited Representative Facing (ARF) Tools ADR for Choosing representative.va.gov Subdomain

## Status

Accepted

## Context

There was some discussion by product, design, and stakeholders that the Representative facing tools we are building should have a distinct UX that is separate from the UX Veterans have when using VA.gov. Research showed us that one of the main concerns from Representatives was that they wanted to know they were in the correct place and were not at risk of making a mistake on the Veteran’s side of VA.gov. 

It was also discussed that not only should the UX be visually different from the Veteran experience on VA.gov but that the domain should reflect the distinct area for Representative tools. This would confirm for the Representative that they were in the correct place.

## Decision

We decided to create our Representative facing applications on a subdomain of va.gov available at representative.va.gov. This subdomain is different enough from the canonical VA.gov that it provides the Representative with the confidence that they are in the correct place and are not at risk of changing anything on the Veteran side of VA.gov. 

## Consequences

Subdomaining on VA.gov will involve working across a few separate teams in the VA ecosphere. The difficulties will largely not be technical but rather process difficulties of working with a few separate teams. This will add time to the subdomains process and means that we will have to have the subdomaining being done in parallel with our work on the Representative facing tools themselves. This means we will have to put our ongoing work behind feature flags until the subdomaining is finished.

We will need to request a new set of public-facing hostnames (representative.va.gov, staging.representative.va.gov) from the Edge Gateway ops team. They have an approval process and will require a WASA assessment for the new public domain. We will then need to set up new entries in the revproxy.
